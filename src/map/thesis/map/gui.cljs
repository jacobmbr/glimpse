(ns thesis.map.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [cljs.core.async :refer [put! timeout]]
            [goog.string :as gs]
            [clojure.string :refer [split]]
            [chromex.support :refer-macros [oget]]
            [thesis.content-script.animation :as anim]
            [chromex.logging :refer-macros [log]]
            [domina.events :as evt]
            [cljs-idxdb.core :as idx]
            [thesis.map.subs]
            [thesis.map.handlers]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))

(defn history-item [text cnt idx]
  (let [mouse (subscribe [:mouse])
        x (reaction (first @mouse))
        y (reaction (peek @mouse))
        show (r/atom false)
        delta (r/atom 1)
        wh (reaction (/ (first (subscribe [:window])) 2))]

    (r/create-class
      {:component-did-mount
       #(reset! show true)
       :display-name "history-item"
       :reagent-render
       (fn [text cnt idx]
         [anim/pop-when @show 
            [:div {:class "history-div"
                   :style {
                      :font-weight "200"
                      :display "flex"
                      }} 
               [:div {:style {:flex "0 0 20%"}} [:div {:style {:text-align "right"
                                                               :padding-right "10px"
                                                               :padding-bottom "15px"
                                                               :font-size (str (+ 12 (min 12 (/ cnt 10))) "px")
                                                               }} cnt]]
               [:div {:style {:flex "0 8 80%"
                               :border-left "1px solid white"
                               :font-size (str (+ 12 (min 12 (/ cnt 10))) "px")}}
                [:a {:on-click (fn [e] (dispatch [:show-site-info text]) (.preventDefault e))
                     :href "#"
                     :style {:margin-left "10px"
                                :color (if (nil? cnt) "rgba(255,255,255,0.3)" "rgba(255,255,255,1)")
                                }} text]]]])})))

(defn history []
  (let [history (subscribe [:history])
        cnts (subscribe [:site-counts])
        has-counts? (reaction (not (nil? @cnts)))]
    (fn [this]
      (log "histch" @cnts @has-counts?)
      ;[:div {:style {:display "flex"
                     ;:height "100%"
                     ;:top "0px"
                     ;:overflow-y "hide"
                     ;:background-color "rgba(100,100,100, 0.5)"}}
        ;[:div {:style {
                       ;:flex "0 1 20%"
                       ;:height "100%"}} "hu"]
        ;[:div {:style {
                       ;:flex "0 1 80%"
                       ;:min-width "1000px"
                       ;:overflow "auto"
                       ;:border-left "1px solid white"
                       ;:height "100%"}}
         ;[:div {:class "history-div" :style {:margin "50px 0 50px 0" }}
          ;(gs/unescapeEntities"&#8212;&#8212;&#8212;&nbsp;") [:a {:href "" :on-click #(dispatch [:show-domain-info "adzerk.net"])} [:span {:style {:text-decoration "underline"
                                                                             ;:font-size "25px"}} "Your History"]]]

         [:div {:style {:background-color "rgba(100,100,100, 0.5)"
                        :height "100vh"
                        :pointer-events "auto"
                        :padding "60px 0 0 0"
                        :overflow "auto"}} 
          (if @has-counts? 
            (doall (map-indexed #(do
                         ^{:key %2} [history-item %2 (get @cnts %2) %1]) @history)))]
         ;]]
      )))

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
          (if-not @loading? [:div (for [x @domains] ^{:key x} [:p
                                                               [:a {:href "#"
                                                                   :on-click #(dispatch [:get-domain-info x])
                                                                   :style {:color "white" :font-size "15px"}} x] [:span " - "]])] [:p "loading"])]
         ])))


(defn domain-infobox []
  (let [domain-info (subscribe [:domain-info])
        domain (reaction (get @domain-info :domain))
        info (reaction (get @domain-info :data))
        loading? (subscribe [:loading-domain-info?])]
    (fn []
         (if-not @loading? 
           [:div 
            [:h1 "Who saw you on " @domain]
             [:h2 (count @info) " third parties saw you on the domain " @domain "."]
             [:span (for [x @info]
                      (let [url (get x "tabUrl")]
                        ^{:key x} [:p [:a {:on-click #(dispatch [:show-site-info url])} (str url)]]))]
           ]
           [:h1 "loading..."]))))

(defn site-infobox []
  (let [entry (subscribe [:site-info])
        site-info (reaction (get @entry :data))
        domain (reaction (get @entry :domain))
        loading? (subscribe [:loading-site-info?])]
    (fn []
       (if-not @loading? 
         [:div 
          [:h1 "Who saw you on " @domain] [:a {:href "" :on-click (fn [e] (.preventDefault e) (dispatch [:display-info-box false]))} "Close x"]
           [:h2 (count @site-info) " third parties saw you on this site " @domain "."]
           [:span (for [x @site-info] 
                    (let [dom (get x "domain")]
                      ^{:key x} [:p [:a {:href "#" :on-click #(dispatch [:show-domain-info dom])} (str dom)]]))]
         ]
         [:h1 "loading..."]))))

(defn infobox []
  (let [view-mode (subscribe [:view-mode])]
    (fn []
      ;(log "render: "  @view-mode)
      [:div 
          [:div {:on-click #(log "clicked infobox")
                 :style {
                         ;:flex "1 1 30%"
                         ;:height "100%"
                         ;:left "30%"
                         :top "0px"
                         :padding "40px 0 0 0"
                         :transition "all 0.5s ease"
                         :pointer-events "auto"
                         :height "100vh"
                         :background-color "rgba(100,100,100, 0.5)"}}
             (if (= "domain" @view-mode) [domain-infobox])
             (if (= "site" @view-mode) [site-infobox])
             ]
          ])))


(defn show-state []
  (let [state (subscribe [:state])
        display? (subscribe [:show-state?])]
    (fn []
      
     [:div {:style {:width "70%" 
                    :display "block"
                    :height "100%"}} [:pre (with-out-str @state)]])))

(defn mapbox []
  (let [mapb (r/atom nil)
        geojson (subscribe [:geojson])
        geoloading? (subscribe [:loading-location-counts?])
        loc (subscribe [:my-location])]
    (r/create-class
      {:display-name "MapBox Component"
       :component-did-mount
       (fn [this]
         (log @geojson)
         (reset! mapb
                 (.. (oget js/L "mapbox") (map "map") (setView (array 40.73 -74.011) 13) (addLayer (js/L.mapbox.styleLayer "mapbox://styles/mapbox/dark-v8"))))
         ;(.. js/L.mapbox (featureLayer @geojson) (on "ready" (fn [e] (do (log "hual") (.. (oget e "target") (eachLayer #(log "huhu" %)))))) (addTo @mapb))
         (js/setTimeout #(.. @mapb (addLayer (.. (L.MarkerClusterGroup.) (addLayer (.. js/L (geoJson @geojson)))))) 300)
         ;(.. js/L.mapbox (featureLayer @geojson) (on "ready" (fn [e] (.. js/console (log "HUAHD"))) ))
                 ;(js/mapboxgl.Map.
                   ;(clj->js {:container "map"
                             ;:zooom 9
                             ;:center [-12.083851 37.386052]
                             ;:style "mapbox://styles/mapbox/dark-v8"})))
         ;(.on @mapb "load" (fn []
                             ;(destroy! (by-class "mapboxgl-ctrl-attrib")) ;sorry!
                             ;(.. @mapb (flyTo (clj->js
                                            ;{:zoom 12
                                             ;:center [(:lon @loc) (:lat @loc)]
                                             ;:bearing 0
                                             ;:speed 0.8})))
                             ;(go-loop []
                                ;(<! (timeout 200))
                                ;(if @geoloading?
                                  ;(do (recur))
                                  ;(do (log "adding now")
                                      ;(.. @mapb (addSource "markers" #js {"type" "geojson"
                                                                          ;"data" @geojson}))
                                      ;;(log (str @geojson))
                                      ;;(.addLayer @mapb (.. js/L (markerClusterGroup) (addLayer (.. js/L (geoJson @geojson)))))
                                      ;(.. @mapb (addLayer #js {"id" "markers"
                                                           ;"type" "circle"
                                                           ;"layout" #js {"icon-image" "airport-15"
                                                                         ;"text-field" "{title}"
                                                                         ;"text-size" 30}
                                                           ;"paint" #js {"circle-color" "white"
                                                                        ;"circle-opacity" 0.4
                                                                        ;"circle-radius" 40}
                                                           ;"source" "markers"}))
                                      ;(log (.. @mapb (getLayer "markers")))
                                      ;))))))
                                      )

       :reagent-render
       (fn []
         @geojson
         [:div {:id "map"
                     :style {:position "fixed"
                             :top "0px"
                             :left "0px"
                             :height "100%"
                             :width "100%"}}
          [:div {:style {:height "100%" :width "100%" :background-color "rgba(100,100,100,0)" :display "none"}}]])})))

(defn root []
  (let [display? (subscribe [:display-info-box?])
        loc (subscribe [:my-location])]
    (fn []
      [:div
        [:div {:style {:display "block"
                       :position "fixed"
                       :top "0px"}} [mapbox]]

        [:div {:style {:display "flex"
                       :width "100%"
                       :position "absolute"
                       :top "0px"
                       :left "0px"
                       :pointer-events "none"
                       :flex-flow "row"}}
          [:div {:style {:flex "0 1 20%"}} 
           [history]]
          [:div {:style {:flex "0 1 80%"
                         :pointer-events "none"}}
            (if @display? [infobox])]
           ;[show-state]
           ;[display-domains]
       ]])))

(defn init! []
  (let [node (.. js/document (createElement "div"))
        el (or (by-id "ext-map-div") (.. js/document -body (appendChild node)))
        div (set! (.-id el) "ext-map-div")]
    (dispatch-sync [:initialise-db])
    (set! js/mapboxgl.accessToken "pk.eyJ1IjoiamFjb2JtYnIiLCJhIjoiY2lvOHZpdjNsMDJ1a3Z6bHp5c3hkajBlOSJ9.Ac8THsNAz1fAMXfd-MzneQ")
    (set! js/L.mapbox.accessToken "pk.eyJ1IjoiamFjb2JtYnIiLCJhIjoiY2lvOHZpdjNsMDJ1a3Z6bHp5c3hkajBlOSJ9.Ac8THsNAz1fAMXfd-MzneQ")
  	(r/render [root] (by-id "ext-map-div"))))
