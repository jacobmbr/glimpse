;; create the main project namespace
(ns modern-cljs.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [domina.core :refer [by-id value set-value! append! by-class]]
            [domina.css :refer [sel]]
            [domina.events :as evt]
            [devtools.core :as devtools]
            [hiccups.runtime :as hiccupsrt]))

;; enable cljs to print to the JS console of the browser
(enable-console-print!)
(devtools/install! [:sanity-hints :custom-formatters])
(def log #(.log js/console %))

(defn add-image-listeners []
  (do
    (evt/listen!
    js/document
    :DOMNodeInserted
    (fn [e]
      (println (str "node: " (:target e)))))
    (evt/listen!
      (by-class "ext-image")
      :webkitAnimationEnd
      (fn
        [evt]
        (println (str "ende" (:target evt)))))))

(defn main
  []
  (if-not (by-id "ext-canvas-container")
    (do
      (add-image-listeners)
      (append! (sel "body") (str
                              (html [:div#ext-canvas-container])
                              ;(html [:img#ext-image.ext-image.ext-canvas-slide {:src "img/t.png"}])))
                              )))))

(main)

(defonce space (..
             (js/CanvasSpace.)
             (display "#ext-canvas-container")
             (refresh true)))

(defn draw-circle
  [x y r]
  (let [form (js/Form. space)]
    (.. form
        (stroke "rgba(255,255,255,1)" 1)
        (fill false)
        (circle
          (..
            (js/Circle.
              (js/Point.
                (clj->js [x y]))) (setRadius r))))))

(defn draw
  ([time]
  (let [form (js/Form. space)
        w (.. space -size -x)
        h (.. space -size -y)]
    (.clearRect (.-ctx space) 0 0 3000 3000)
    (doall (map #(draw-circle (/ w %) (/ h 2) (* 9 %)) (range 100)))
    (.requestAnimationFrame js/window draw)))
  ([]
  (do (draw 0))))

(draw)
