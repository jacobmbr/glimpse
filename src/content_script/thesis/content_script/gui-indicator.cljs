(ns thesis.content-script.indicator
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [domina.core :refer [by-id value set-value! destroy! append! by-class]]
            [chromex.logging :refer-macros [log]]
            [cljs.core.async :refer [chan close! <! >! put!]]
            [clojure.set :as s]
            [reagent.core :as r]
            [domina.css :refer [sel]]))

(def domains (r/atom #{}))
(def ind-chan (atom nil))

(defn add-domain [d]
  (doseq [el (vec d)] 
    (if-not (contains? @domains el)
      (swap! domains conj el))))

(defn draw-on-canvas [space form vectors n]
  (.clearRect (.-ctx space) 0 0 50 50)
  (let [v (js/Vector. 25 25)]
    (doseq [i vectors]
      (.. form (stroke "rgba(180,180,180,0.4)" 1))
      (.. form (line (.to (js/Pair. 25 25) (js/Point. i))))
      (.. form (stroke 0) (fill "rgba(200,0,0,0.5)") (circle (.. (js/Circle. (.rotate2D i (* (.-one_degree js/Const) (rand 1)) (js/Point. 25 25))) (setRadius 2)))))))

(defn make-vector []
  (.. (js/Vector. (rand 15) (rand 15)) (moveBy (js/Point. 25 25)) (rotate2D (* (rand 360) (.-one_degree js/Const)) (js/Point. 25 25))))

(defn canvas []
  (let [d (reaction (count @domains))
        vectors (r/atom [])
        dom-node (r/atom nil)
        space (r/atom nil)
        form (r/atom nil)
        draw-chan (chan)
        ]
    (r/create-class
      {:component-did-mount
       (fn [ this ]
         (reset! dom-node (r/dom-node this))
         (reset! space (.. (js/CanvasSpace. "ext-space") (display "#ext-canvas")))
         (reset! form (js/Form. @space))
         (go-loop [i 0]
                  (.requestAnimationFrame js/window #(go (>! draw-chan "hu")))
                  (draw-on-canvas @space @form @vectors i)
                  (<! draw-chan)
            (recur (inc i))))

       :component-did-update
       (fn [] 
         (dotimes [n (- @d (count @vectors))] (swap! vectors conj (make-vector))))

       :reagent-render
       (fn a-canvas [] 
         @domains
          [:div {:on-click #(put! @ind-chan "huhu")
                 :id "ext-canvas"}])})))

(defn indicator-component []
  (let []
    (fn []
      [:div {:id "ext-indicator"
             :style {:position "fixed"
                     :height "50px"
                     :width "50px"
                     :right "0px"
                     :bottom "0px"}}
         [canvas]])))

(defn init! []
  (append!
    (sel "body") 
    (html [:div#ext-indicator-con {:style {:positon "absolute"
                                           :z-index "1000000091 !important"}}]))
  (r/render [indicator-component] (by-id "ext-indicator-con"))
  (reset! ind-chan (chan))
  @ind-chan)
