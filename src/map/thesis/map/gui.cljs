(ns thesis.map.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [cljs.core.async :refer [put! timeout]]
            [goog.string :as gs]
            [cljs.pprint :refer [pprint]]
            [clojure.string :refer [split]]
            [chromex.support :refer-macros [oget]]
            [thesis.content-script.animation :as anim]
            [chromex.logging :refer-macros [log]]
            [domina.events :as evt]
            [cljs-idxdb.core :as idx]
            [thesis.map.subs]
            [thesis.map.handlers]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))

(defn history-item [text cnt idx h-or-t]
  (let [mouse (subscribe [:mouse])
        x (reaction (first @mouse))
        y (reaction (peek @mouse))
        show (r/atom false)
        delta (r/atom 1)
        wh (reaction (/ (first (subscribe [:window])) 2))]

    (r/create-class
      {:component-did-mount
       #(js/setTimeout (fn [] (reset! show true)) (* 20 idx))
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
                                                               :color (if cnt "white" "black")
                                                               :font-size "1em"
                                                               ;:font-size (str (+ 12 (min 12 (/ cnt 10))) "px")
                                                               }} (if cnt cnt 0)]]
               [:div {:style {:flex "0 8 80%"
                               :border-left (if (= "site" h-or-t) "1px solid rgb(232, 219, 3)" "1px solid rgb(3, 201, 200)")
                               :font-size "1em"
                               ;:font-size (str (+ 12 (min 12 (/ cnt 10))) "px")
                               }}
                [:a {:on-click (fn [e] (dispatch [(if (= "site" h-or-t) :show-domain-info :show-site-info) text]) (.preventDefault e))
                     :href "#"
                     :style {:margin-left "10px"
                             :color (if (nil? cnt) "rgba(255,255,255,0.3)" "rgba(255,255,255,1)")
                                }} text]]]])})))
(defn history []
  (let [history (subscribe [:history])
        cnts (subscribe [:site-counts])
        has-counts? (reaction (not (nil? @cnts)))]
    (fn []
     [:div {:style {:flex "0 0 50%"
                    :height "100%"}}
        (if @has-counts? 
          (doall (map-indexed #(do
                       ^{:key %2} [history-item %2 (get @cnts %2) %1 "item"]) @history)))])))
(defn trackers []
  (let [entry (subscribe [:site-info])
        domain (reaction (get @entry :domain))
        site-info (reaction (get @entry :data))
        counts-array (reaction (get @entry :counts-array))
        loading? (subscribe [:loading-site-info?])]
    (fn []
       [:div {:style {:flex "0 0 50%"
                      :height "100%"}}
       [anim/fade-when (not @loading?)
         [:div 
          (if (not @loading?)
            (doall (map-indexed #(do
                         ^{:key %2} [history-item (first %2) (peek %2) %1 "site"]) (vec @counts-array))))
           ]]])))

(defn counter [text]
  (r/create-class 
    {:display-name "Counter"
     :component-will-receive-props
     #(log text)
     :component-did-update
     #(log text)
     :reagent-render
     (fn [this]
       [:div (str text)])}))

(defn history-and-trackers []
  (let [move? (r/atom false)
        cnts (subscribe [:site-counts])
        has-counts? (reaction (not (nil? @cnts)))
        margin (anim/interpolate-if move? 0 -100)
        opac (anim/interpolate-if move? 0 1)
        hist-mode (subscribe [:history-mode])
        site-name (subscribe [:site-name])
        string (reaction (if (= "domain" @hist-mode) (str "Third parties on " @site-name) "History"))]
    (r/create-class
      {:display-name "History-and-Trackers"
       :component-did-mount
       #(do
          (dispatch [:set-toggler (anim/toggle-handler move?)]))
       :reagent-render
       (fn [this]
         [:div {:style {;:background-color "rgba(100,100,100, 0.2)"
                        ;:height "100vh"
                        :top "0"
                        :left "0"
                        :min-height "100%"
                        :flex "0 0 100%"
                        :pointer-events "auto"
                        :overflow-y "auto"
                        :overflow-x "hidden"}} 
             [:div {:style {:height "50px"}}
              [:div {:style {:position "absolute" :top "25px" :left "20px" :opacity (if @opac @opac 0)}} 
               [:a {:href "#" :on-click #(dispatch [:back-to-root])} "back"]]
              [:div {:style {:padding-left "20%"
                             :width "100%"}} [:h1 {:on-click (anim/toggle-handler move?)} [counter @string]]]
              [:div {:style {:margin-left (str @margin "%")
                             :width "200%"
                             :display "flex"
                             :flex-flow "row"}}
                 [history]
                 [trackers]
               ]]]
      )})))

(defn display-locations []
  (let [locations (subscribe [:distinct-locations])
        loading? (subscribe [:loading-locations?])]
    (fn []
        [:div {:style {:position "absolute"
                       :top "100px"}}
        (if-not @loading? (for [x @locations] ^{:key x} [:span (map #(subs % 0 6) (take 2 (split x #"\|")))]) [:h1 "loading"])])))

(defn domain-infobox []
  (let [entry (subscribe [:domain-info])
        domain-name (reaction (get @entry :domain))
        domain-info (reaction (get @entry :data))
        site-counts (reaction (-> (reduce #(update %1 (get %2 "tabUrl") inc) {} @domain-info)
                                    (dissoc @domain-name)))
        info (reaction (get @domain-info :data))
        loading? (subscribe [:loading-domain-info?])
        not-loading? (reaction (not @loading?))]
    (fn []
       [anim/fade-when @not-loading? 
         [:div 
          [:div {:style {:width "90%" :padding "20px 0 20px 60px" :color "rgb(232, 219, 3)"}} [:span "Third Party"]]
           [:div {:style {:width "90%"
                          :margin "0px auto"
                          :pointer-events "auto"
                          :text-shadow "0 0 10px black"
                          ;:box-shadow "0 0 20px rgba(0,0,0,0.2)"
                          :border-top "1px solid rgb(232, 219, 3)"
                          ;:background-color "rgba(0,0,0,0.1)"
                          ;:background "linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 30%)"
                          }}
            [:div.report-content {:style {:margin "0 0 0 20px"}}
              [:h1 {:style {:color "rgb(232, 219, 3) !important" :font-size "2em"}} @domain-name [:span {:style {:color "white"}} " is a third party that saw you on these " (count @site-counts) " websites."]]
              [:div {:style {:max-height "400px" 
                             :border "1px solid #444"
                             :padding "10px 10px 10px 10px"
                             :overflow "auto"}}
                (for [x @site-counts]
                  ^{:key x} [:div {:style {:font-size (str (+ 14 (peek x)) "px")
                                           :float "left" 
                                           :width "50%"}} 
                             [:span {:style {:color "aaa"}} (peek x)] 
                             "  " 
                             [:a {:href "#"
                                  :on-click #(dispatch [:show-site-info (str (first x))]) 
                                  :style {:color "rgb(3, 201, 200)"}} (str (first x))]])
                ]

              ; [:a {:href "" :on-click (fn [e] (.preventDefault e) (dispatch [:display-info-box false]))} "Close x"]
              ;  [:h2 (count @site-info) " third parties saw you on this site " @domain "."]
              ;  [:span (for [x @domain-info] 
              ;           (let [dom (get x "domain")]
              ;             ^{:key x} [:p [:a {:href "#" :on-click #(dispatch [:show-domain-info dom])} (str dom)]]))]

             ]]]]
       )))

(defn site-infobox []
  (let [entry (subscribe [:site-info])
        domain (reaction (get @entry :domain))
        site-info (reaction (get @entry :data))
        counts-array (reaction (get @entry :counts-array))
        loading? (subscribe [:loading-site-info?])
        not-loading? (reaction (not @loading?))]
    (fn []
       [anim/fade-when @not-loading? 
         [:div 
          [:div {:style {:width "90%" :padding "20px 0 20px 60px" :color "rgb(3, 201, 200)"}} [:span "Website"]]
           [:div {:style {:width "90%"
                          :margin "0px auto"
                          :pointer-events "auto"
                          :text-shadow "0 0 10px black"
                          ;:box-shadow "0 0 20px rgba(0,0,0,0.2)"
                          :border-top "1px solid rgb(3, 201, 200)"
                          ;:background-color "rgba(0,0,0,0.1)"
                          ;:background "linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 30%)"
                          }}
            [:div.report-content {:style {:margin "0 0 0 20px"}}
              [:h1 {:style {:color "rgb(3, 201, 200) !important" :font-size "2em"}} @domain [:span {:style {:color "white"}} " sent information about you to these " (count @counts-array) " third parties."]]
              ;[:div {:style {:max-height "400px" 
                             ;:border "1px solid #444"
                             ;:padding "10px 10px 10px 10px"
                             ;:overflow "auto"}}
                ;(for [x @counts-array]
                  ;^{:key x} [:div {:style {:font-size (str (+ 14 (peek x)) "px")
                                           ;:float "left" 
                                           ;:width "50%"}} 
                             ;[:span {:style {:color "aaa"}} (peek x)] 
                             ;"  " 
                             ;[:span {:style {:color "rgb(232, 219, 3)"}} (str (first x))]])
                ;]

              ;[:a {:href "" :on-click (fn [e] (.preventDefault e) (dispatch [:display-info-box false]))} "Close x"]
               ;[:h2 (count @site-info) " third parties saw you on this site " @domain "."]
               ;[:span (for [x @site-info] 
                        ;(let [dom (get x "domain")]
                          ;^{:key x} [:p [:a {:href "#" :on-click #(dispatch [:show-domain-info dom])} (str dom)]]))]

             ]]]]
           ;[:h1 "loading..."]
           )))

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
                         ;:padding "40px 0 0 0"
                         :transition "all 0.5s ease"
                         :pointer-events "auto"
                         ;:height "100vh"
                         :overflow "auto"
                         :background-color "rgba(100,100,100, 0.0)"}}
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
  (let [mapb (subscribe [:map])
        cluster-bounds (subscribe [:cluster-bounds])
        cluster-layer (subscribe [:cluster-layer])
        geojson (subscribe [:geojson])
        geoloading? (subscribe [:loading-location-counts?])
        loc (subscribe [:my-location])]
    (r/create-class
      {:display-name "MapBox Component"
       :component-did-update
       #(do 
          (log "update mapbox" @cluster-bounds " with geoj " @geojson)
          (if @geojson
            (do 
              (.. @mapb (addLayer (.. @cluster-layer (addLayer (.. js/L (geoJson @geojson))))))
              (.. @mapb (fitBounds (.. @cluster-layer (getBounds)) #js {"paddingTopLeft" (array 200 400)
                                                                        "maxZoom" 14})))))
       :component-did-mount
       (fn [this]
         (dispatch-sync [:set-map "map"])
         (destroy! (by-class "leaflet-control-attribution")))
       :reagent-render
       (fn []
         @cluster-bounds
         [:div {:id "map"
                     :style {:position "fixed"
                             :top "0px"
                             :left "0px"
                             :height "100%"
                             :width "100%"}}
          [:div {:style {:height "100%" :width "100%" :background-color "rgba(100,100,100,0)" :display "none"}}]])})))

(defn root []
  (let [display? (subscribe [:display-info-box?])
        got-loc? (subscribe [:my-location])
        logloc (reaction (log @got-loc?))
        loc (subscribe [:my-location])]
    (fn []
      [:div
        (if @got-loc? 
          [:div {:style {:display "block"
                       :position "fixed"
                       :top "0px"}} [mapbox]])


        [:div {:style {:display "flex"
                       :width "100%"
                       :position "absolute"
                       :top "0px"
                       :left "0px"
                       :pointer-events "none"
                       :flex-flow "row"}}
          [:div {:style {:flex "0 0 30%"
                         :background "linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)"
                         :height "100vh"
                         :display "flex"
                         :pointer-events "auto"
                         :flex-flow "row"
                         :overflow-x "hidden"}}
           [history-and-trackers]]
          [:div {:style {:flex "0 0 70%"
                         :height "100vh"
                         :overflow-y "auto"
                         :pointer-events "none"}}
            (if @display? [infobox])]
          [:div {:style {:display "block"
                         :position "absolute"
                         :z-index "-1"
                         :top "0px"
                         :width "100%"
                         :background "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 100%)"
                         :height "10%"}}]
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
