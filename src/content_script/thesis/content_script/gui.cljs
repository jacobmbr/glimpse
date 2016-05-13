(ns thesis.content-script.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [thesis.content-script.animation :as anim]
            [chromex.logging :refer-macros [log]]
            [domina.events :as evt]
            [domina.css :refer [sel]]
            [thesis.content-script.subs]
            [thesis.content-script.handlers]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))

(def img-data (r/atom nil))
(def img-pos (r/atom [0 0]))
(def dim (r/atom [0 0]))
(def mouse (r/atom [0 0]))
(def mouseX (reaction (first @mouse)))
(def mouseY (reaction (peek @mouse)))


(defn heading []
  (let [tabId (subscribe [:tab-id])]
    (fn [] [:div {:style {:width "100%"
                          :text-align "left"
                          :padding-left "40px"
                          :position "absolute"
                          :top "20px"}}
            [:h1 {:style {:font-size "34px"
                          :text-decoration "underline"
                          :font-style "italic"
                          :font-weight "200"
                          :color "white"}} "Third parties who see you on " @tabId]])))
(defn satellite [dom]
  (let [el (subscribe [:in-data dom])
        text (name dom)
        x (r/cursor el [:x])
        y (r/cursor el [:y])
        cnt (r/cursor el [:count])
        cspring (anim/spring cnt)
        fs (reaction (get @el :font-size))
        xsp (anim/spring x {:damping 2})
        ysp (anim/spring y {:damping 2})
        hasinfo? (subscribe [:has-info?])
        show-text? (subscribe [:show-text?])
        fssp (anim/interpolate-to fs)]
    (r/create-class
      {:component-will-unmount
       #()
       :display-name "satellite"
       :reagent-render
        (fn [i]
          [:div {:style {:min-width "300px" 
                         :position "relative" 
                         :padding-bottom "10px"
                         ;:left (str (+ 20 @xsp)) :top (str @ysp "px")
                         :transform (str "translate(" (+ 20 @xsp) "px," @ysp "px)")
                         }}
           [:p {:class "ext-h1" 
                 :style {:font-size (str @fssp "px")
                         :color "white"
                         :clear "right"
                         ;:line-height (str @fssp "px")
                         ;:font-weight "400"
                         ;:background-color "black"
                         ;:text-decoration (if @hasinfo? "underline" "none")
                         ;:transform (str "translate(" @xsp "px," @ysp "px)")
                         }} 
            text]
            (if @show-text? [:span {:style {:color "#eee"
                            :opacity (str (if @show-text? "1" "0"))}} 
             "… saw you " @cnt " other times."])
           ])})))

(defn satellites []
  (let [data (subscribe [:data])
        align? (subscribe [:align?])]
    [:div {:style {:position "fixed" 
                   :left (if @align? "50%" "0")
                   :top (if @align? "20%" "0")
                   :transition "all 0.5s cubicInOUt"
                   ;:height "70%"
                   :overflow (if @align? "scroll" "visible" )}}
     (for [dom (keys @data)]
       ^{:key dom} [satellite dom])]))

(defn debug []
  (let [data (subscribe [:data])]
    [:div {:style {:position "fixed" :bottom "0px" :color "white" :left "0px"}} (str @data)] ))

(defn screenshot []
  (let [tilt (r/atom 0)
        rotation (anim/spring tilt)
        scale-sub (subscribe [:img-scale])
        scale (anim/spring scale-sub {:mass 20 :damping 2})
        img-pos (subscribe [:img-pos])
        img-data (subscribe [:img-data])
        align? (subscribe [:align?])
        dim (subscribe [:dim])
        xx (reaction (-> @dim (first) (/ 2) (* -1)))
        yy (reaction (-> @dim (peek) (/ 2) (* -1)))
        x (reaction (first @img-pos))
        y (reaction (peek @img-pos))
        xsp (anim/spring x {:duration 500 :damping 3})
        ysp (anim/spring y {:duration 500 :damping 3})
        w (.-innerWidth js/window)]
    (fn a-screenshot []
      [:div 
       ;[anim/timeout #(reset! tilt 45) 100]
       [:img {:on-click #(dispatch [:exit])
              :src @img-data
              :id "ext-screenshot"
              :style {:margin "0 auto"
                      :width "100%"
                      :transform (str 
                                   "scale(" @scale "," @scale ") "
                                   (if @align? (str "translate(" @xsp "px," @ysp "px)")))}}]])))

(defn root []
  [:div
   [satellites]
   [heading]
   [screenshot]
   ;[debug]
   ])

(defn get-rand-between [v low up]
  (+ (rand (* up (- v (* low v)))) (* low v)))

(defn init! [img tabdict tabId counts]
  (if-not (by-id "ext-canvas-container")
    (let [node (.. js/document (createElement "div"))
          el (.. js/document -body (appendChild node))
          div (set! (.-id el) "ext-canvas-container")
          dim [(.-innerWidth js/window) (.-innerHeight js/window)]
          data (atom nil)]
      ; OPTIONAL: Kill all scripts and iframes on the page. 
      (destroy! (sel "script"))
      (destroy! (sel "iframe"))
      (->>  (reduce #(assoc %1 (keyword %2) (hash-map
                           :x (/ (first dim) 2)
                           :y (/ (peek dim) 2)
                           :font-size 0.5
                           )) {} (vec tabdict))
            (reset! data))
      (dispatch-sync [:initialise-db img dim @data tabId counts])
      ;(dispatch [:get-counts])

      (.. js/window (addEventListener "resize" #(dispatch [:resize [(.-innerWidth js/window) (.-innerHeight js/window)]])))

      (js/setTimeout #(dispatch [:scale-down-img] 100))
      (js/setTimeout #(dispatch [:data-satellites]) 500)
      (js/setTimeout #(dispatch [:handle-info true]) 3000)
      ;(js/setTimeout #(dispatch [:data-satellites]) 4000)
      (js/setTimeout #(dispatch [:update-img-pos [(-> dim (first) (/ 2) (* -1)) (-> dim (peek) (/ 2) (* -1))]]) 3000)

      (r/render [root] (by-id "ext-canvas-container")))))
