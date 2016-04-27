;; create the main project namespace
(ns modern-cljs.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :as m :refer [go]])
  (:require [domina.core :refer [by-id value set-value! append! by-class]]
            [domina.css :refer [sel]]
            [domina.events :as evt]
            [devtools.core :as devtools]
            [reagent.core :as r]
            [cljs.core.async :refer [chan close!]]
            [timothypratley.reanimated.core :as anim]
            [hiccups.runtime :as hiccupsrt]))

;; enable cljs to print to the JS console of the browser
(enable-console-print!)
(devtools/install! [:sanity-hints :custom-formatters])
(def log #(.log js/console %))

(def data [["domain8", 1, true] ["domain8", 1, true] ["domain1", 3, true] ["domain2", 6, true]])


(defn add-image-listeners []
  (do
    (evt/listen!
    js/body
    :mousemove
    (fn [e]
      #_(println (str "node: " (:clientY e)))))
    (evt/listen!
      (by-class "ext-image")
      :webkitAnimationEnd
      (fn
        [evt]
        (println (str "ende" (:target evt)))))))

(defn setup
  []
  (if-not (by-id "ext-canvas-container")
    (do
      (add-image-listeners)
      (append! (sel "body") (str
                              (html [:div#ext-canvas-container])
                              ;(html [:img#ext-image.ext-image.ext-canvas-slide {:src "img/t.png"}])))
                              )))))

(setup)

(defonce space (..
             (js/CanvasSpace.)
             (display "#ext-canvas-container")
             (refresh true)))
(defn draw-circle
  [form p r]
  (let [c (..  (js/Circle.  p) (setRadius r))]
    (.. form
        (stroke "rgba(255,255,255,1)" 1)
        (fill false)
        (circle c))
    (for [x (range 5)] 
      (.. form (circle (.. (js/Circle. (+ (* 10 x) p)) (setRadius r)))))))

(defn draw-line
  [form from to]
  (let [[x1 y1] from
        [x2 y2] to]
    (.. form
      (stroke "white" 2)
      (line (.. (js/Line. x1 y1) (to x2 y2))))))

(defn draw-text
  [form p t]
  (let [[x y] p]
  (.. form (fill "white") (text (js/Point. t y) (str t)))))

(defonce timer (r/atom 0))

(defn draw-entity
  [form from to tt]
  (do 
    (draw-circle form (js/Point. (clj->js to)) 5)
    (draw-text form to tt)
    (draw-line form from to)))

(defn dots-from-data
  [data]
  (let [w (.. space -size -x)
        h (.. space -size -y)]
  (reduce 
    #(conj %1 (conj %2 (* (+ 0.5 (count %1)) (/ h (count data)))))
    [] data)))

(def shift (r/atom 0))
(def rot (anim/spring shift))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))
 
(defn loop-go
  []
  (go
    (<! (timeout 3000))
    (swap! shift #(condp = %
                     0 200
                     200 400
                     800 200
                     400 800))
    (loop-go)
    ))
(loop-go)

(defn draw
  ([time form w h s]
    (.clearRect (.-ctx space) 0 0 3000 3000)
    (doall (map 
             #(draw-entity form [0 (/ h 2)] [@rot (get % 3)] @rot)
             (dots-from-data data)))
    (swap! timer inc)
    (.requestAnimationFrame js/window #(draw % form w h s)))
  ([form w h s]
    (draw 0 form w h s)))

(defn draw-loop
  []
  (let [form (js/Form. space)
        w (.. space -size -x)
        h (.. space -size -y)]
    (draw form w h rot)))

(draw-loop)
