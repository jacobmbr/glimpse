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
(defn satellite [i]
  (let [el (subscribe [:in-data i])
        text (get @el :text)
        x (r/cursor el [:x])
        y (r/cursor el [:y])
        fs (reaction (get @el :font-size))
        xsp (anim/spring x {:damping 2})
        ysp (anim/spring y {:damping 2})
        hasinfo? (subscribe [:has-info?])
        fssp (anim/interpolate-to fs)]
    (r/create-class
      {:component-will-unmount
       #()
       :display-name "satellite"
       :reagent-render
        (fn [i]
          [:div {:style {:min-width "300px" :position "absolute" :left (str (+ 20 @xsp)) :top (str @ysp "px")}}
           [:h1 {:class "ext-h1" 
                 :style {:font-size (str @fssp "px")
                         :font-weight "400"
                         ;:background-color "black"
                         :text-decoration (if @hasinfo? "underline" "none")
                         ;:transform (str "translate(" @xsp "px," @ysp "px)")
                         }} (str text) (if @hasinfo? [:span {:style {:text-decoration "none"}} (int (rand 40))])
           ]])})))

(defn satellites []
  (let [cnt (subscribe [:count])]
    [:div {:style {:position "absolute" :left "0" :top "0"}}
     (for [i (range @cnt)]
       ^{:key i} [satellite i])]))

(defn screenshot []
  (let [tilt (r/atom 0)
        rotation (anim/spring tilt)
        flip (r/atom 1)
        scale (anim/spring flip {:mass 20 :damping 2})
        img-pos (subscribe [:img-pos])
        img-data (subscribe [:img-data])
        x (reaction (first @img-pos))
        y (reaction (peek @img-pos))
        xsp (anim/spring x {:duration 500 :damping 3})
        ysp (anim/spring y {:duration 500 :damping 3})
        w (.-innerWidth js/window)]
    (fn a-screenshot []
      [:div 
       [anim/timeout #(reset! flip 0.3) 100]
       ;[anim/timeout #(reset! tilt 45) 100]
       [:img {:src @img-data
              :id "ext-screenshot"
              :style {:margin "0 auto"
                      :width "100%"
                      :transform (str "scale(" @scale "," @scale ") rotateY(" 0 "deg)" " translate(" @xsp "px," @ysp "px)")}}]])))

(defn root []
  [:div
   [satellites]
   [heading]
   [screenshot]])

(defn get-rand-between [v low up]
  (+ (rand (* up (- v (* low v)))) (* low v)))

(defn init! [img tabdict tabId]
  (if-not (by-id "ext-canvas-container")
    (let [node (.. js/document (createElement "div"))
          el (.. js/document -body (appendChild node))
          div (set! (.-id el) "ext-canvas-container")
          dim [(.-innerWidth js/window) (.-innerHeight js/window)]
          data (atom nil)]
      ; OPTIONAL: Kill all scripts and iframes on the page. 
      (destroy! (sel "script"))
      (destroy! (sel "iframe"))
      (->> (vec (map #(hash-map
                           :x (/ (first dim) 2)
                           :y (/ (peek dim) 2)
                           :font-size 0.5
                           :text %
                           ) (vec tabdict)))
            (reset! data))
      (dispatch-sync [:initialise-db img dim @data tabId])

      ;(.. js/window (addEventListener "mousemove" #(swap! mouse assoc 0 (.-clientX %) 1 (.-clientY %))))

      ;(js/setTimeout (fn [] (swap! data conj {:x 200 :font-size 10 :y 200 :text "huhu" :dots 25})) 2000)
      (js/setTimeout #(dispatch [:data-satellites]) 1000)
      (js/setTimeout #(dispatch [:handle-info true]) 2000)
      ;(js/setTimeout #(dispatch [:data-satellites]) 4000)
      (js/setTimeout #(dispatch [:update-img-pos [(-> dim (first) (/ 2) (* -1)) (-> dim (peek) (/ 2) (* -1))]]) 2000)
      ;(js/setTimeout #(reset! img-pos [20 20]) 2000)

      ;(js/setTimeout (fn [] (swap! data (fn [e] (vec (map-indexed #(assoc %2 :y (* 20 %1) ) e))))) 4000)


      ;(js/setTimeout (fn [] (swap! data (fn [e] (vec (map #(update % :x + 200) e))))) 6000)

      (r/render [root] (by-id "ext-canvas-container")))))
