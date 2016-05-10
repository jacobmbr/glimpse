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


(defn display-history []
  (let [history (subscribe [:history])]
    (fn [this]
      [:div {:style {:width "100%"
                     :height "55%"
                     :position "relative"
                     :overflow-x "hide"
                     :background-color "rgba(100,100,100, 0.5)"}}
        [:div {:style {:width "inherit"
                       ;:min-width "1000px"
                       :overflow "auto"
                       :border-bottom "1px solid white"
                       :height "100%"
                       :position "absolute"
                       :left "0px"}}
         (map-indexed #(do 
                         ^{:key %2} [:div {:class "history-div"
                                             :style {
                                                :font-weight "200"
                                                :font-size "10px"
                                                :position "absolute"
                                                :transform (str "translate(" (* 50 (+ 1 %1)) "px,100px) rotate(-35deg)")}} %2]) @history)]])))

(defn display-locations []
  (let [locations (subscribe [:distinct-locations])
        loading? (subscribe [:loading-locations?])]
    (fn [] 
        [:div {:style {:position "absolute"
                       :top "100px"}} 
        (if-not @loading? (for [x @locations] ^{:key x} [:span (map #(subs % 0 6) (take 2 (split x #"\|")))]) [:h1 "loading"])])))

(defn display-domains []
  (let [domains (subscribe [:distinct-domains])
        loading? (subscribe [:loading-domains?])]
    (fn [] 
        [:div {:style {:height "45%"
                       :width "100%"
                       ;:padding "20px"
                       :overflow "scroll"
                       :background "rgba(3, 201, 200,0.5)"}}
         [:div {:style {:padding "10px 10px 0 30px"}}
          [:h1 "Where you've been and who was there with you."]
          (if-not @loading? [:div (for [x @domains] ^{:key x} [:span 
                                                               [:a {:href "#"
                                                                   :on-click #(dispatch [:get-domain-info x])
                                                                   :style {:color "white" :font-size "15px"}} x] [:span " - "]])] [:p "loading"])]
         ])))

(defn infobox [domain]
  (let [info (subscribe [:domain-info domain])
        loading? (subscribe [:loading-domain-info?])]
    (fn []
      [:div
       [:div {:style {:position "fixed" :left "0px" :bottom "0px" :background "rgba(100,100,100,0.3)"}}
       (if-not @loading? [:span (str "info: " (for [x @info] [:p x]))] [:h1 "loading..."])]])))

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
                                                                        "circle-opacity" 0.4
                                                                        "circle-radius" 40}
                                                           "source" "markers"}))
                                      ;(log (.. @mapb (getLayer "markers")))
                                      ))))))

       :reagent-render
       (fn [] 
         @geojson
         [:div {:id "map"
                     :style {:position "absolute"
                             :top "0px"
                             :left "0px"
                             :height "100%"
                             :width "100%"}}
          [:div {:style {:height "100%" :width "100%" :background-color "rgba(100,100,100,0)" :display "none"}}]])})))

(defn root []
  [:div
   [mapbox]
   [infobox]
   [:div {:style {:position "absolute"
                  :top "0px"
                  :left "0px"
                  :width "100%"
                  :height "35%"}} 
    [display-history][display-domains]]
   ])

(defn init! [call response]
  (let [node (.. js/document (createElement "div"))
        el (.. js/document -body (appendChild node))
        div (set! (.-id el) "ext-map-div")]
    (dispatch-sync [:initialise-db call response])
    (dispatch [:get-counts])
    (dispatch [:get-locations])
    (dispatch [:get-my-location])
    (dispatch [:get-location-counts])
    (dispatch [:get-history])
    (dispatch [:get-domain-info "adzerk.net"])
  	(r/render [root] (by-id "ext-map-div"))))


