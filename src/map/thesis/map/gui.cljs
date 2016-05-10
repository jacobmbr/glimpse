(ns thesis.map.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [cljs.core.async :refer [put! timeout]]
            [clojure.string :refer [split]]
            [thesis.content-script.animation :as anim]
            [chromex.logging :refer-macros [log]]
            [domina.events :as evt]
            [cljs-idxdb.core :as idx]
            [thesis.map.subs]
            [thesis.map.handlers]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))


(defn display-locations []
  (let [locations (subscribe [:distinct-locations])
        loading? (subscribe [:loading-locations?])]
    (fn [] 
      (if-not @loading? 
        [:div {:style {:position "absolute"
                       :top "100px"}} 
         (for [x @locations] ^{:key x} [:span (map #(subs % 0 6) (take 2 (split x #"\|")))])]))))

(defn display-domains []
  (let [domains (subscribe [:distinct-domains])
        loading? (subscribe [:loading-domains?])]
    (fn [] 
      (if-not @loading? 
        [:div {:style {:z-index 100
                       :position "absolute"
                       :height "20%"
                       :width "100%"
                       :overflow "hidden"
                       :background "rgba(100,100,100,0.5)"}}
         [:div (for [x @domains] ^{:key x} [:span x])]
         ]))))

(defn mapbox []
  (let [mapb (r/atom nil)
        geojson (subscribe [:geojson])
        geoloading? (subscribe [:loading-location-counts?])
        loc (subscribe [:my-location])]
    (r/create-class
      {:display-name "MapBox Component"
       :component-did-mount
       (fn [this]
         (reset! mapb 
                 (js/mapboxgl.Map. 
                   (clj->js {:container "map" 
                             :zooom 9
                             :center [-122.083851 37.386052]
                             :style "mapbox://styles/mapbox/dark-v8"
                             :test "hu"})))
         (.on @mapb "load" (fn [] 
                             (destroy! (by-class "mapboxgl-ctrl-attrib")) ;sorry!
                             (.. @mapb (flyTo (clj->js 
                                            {:zoom 12 
                                             :center [(:lon @loc) (:lat @loc)]
                                             :bearing 0
                                             :speed 0.8})))
                             (go-loop []
                                (<! (timeout 200))
                                (if @geoloading?
                                  (do (recur))
                                  (do (log "adding now") 
                                      (log @geojson)
                                      (.. @mapb (addSource "markers" #js {"type" "geojson"
                                                                          "data" @geojson}))
                                      ;(log (str @geojson))
                                      ;(.addLayer @mapb (.. js/L (markerClusterGroup) (addLayer (.. js/L (geoJson @geojson)))))
                                      (.. @mapb (addLayer #js {"id" "markers"
                                                           "type" "circle"
                                                           ;"layout" #js {"icon-image" "airport-15"
                                                                         ;"text-field" "{title}"
                                                                         ;"text-size" 30}
                                                           "paint" #js {"circle-color" "white"
                                                                        "circle-opacity" 0.1
                                                                        "circle-radius" 40}
                                                           "source" "markers"}))
                                      ))))))

       :reagent-render
       (fn [] 
         @geojson
         [:div {:id "map"
                     :style {:position "absolute"
                             :top "0px"
                             :left "0px"
                             :height "100%"
                             :width "100%"}}])})))

(defn root []
  [:div
   [:h1 {:on-click #(dispatch [:get-counts])} "moinsen"]
   [display-domains] [display-locations] [mapbox]])

(defn init! [call response]
  (let [node (.. js/document (createElement "div"))
        el (.. js/document -body (appendChild node))
        div (set! (.-id el) "ext-map-div")]
    (dispatch-sync [:initialise-db call response])
    (dispatch [:get-counts])
    (dispatch [:get-locations])
    (dispatch [:get-my-location])
    (dispatch [:get-location-counts])
  	(r/render [root] (by-id "ext-map-div"))))


