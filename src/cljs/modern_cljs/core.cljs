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

(defonce data [["domain1", 3, true] ["domain2", 6, true]])

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
      ;(add-image-listeners)
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
  [form p r]
    (.. form
        (stroke "rgba(255,255,255,1)" 1)
        (fill false)
        (circle
          (..
            (js/Circle.
              p) (setRadius r)))))
(defn draw-line
  [form from to]
  (let [[x1 y1] from
        [x2 y2] to]
    (.. form
      (stroke "white" 2)
      (line (.. (js/Line. x1 y1) (to x2 y2))))))

(defn draw-circle-with-line
  [form from to]
  (do 
    (draw-circle form (js/Point. (clj->js to)) 5)
    (draw-line form from to)))

(defn dots-from-data
  [data]
  (let [w (.. space -size -x)
        h (.. space -size -y)]
  (reduce #(conj %1 (conj %2 (* (+ 1 (count %1)) (/ h (count data))))) [] data)))

(defn draw
  ([time form w h]
    (.clearRect (.-ctx space) 0 0 3000 3000)
    (doall (map 
             #(draw-circle-with-line form [0 (/ h 2)] [(/ w 2) (get % 3)]) 
             (dots-from-data data)))
    (.requestAnimationFrame js/window #(draw % form w h)))
  ([form w h]
   (println (dots-from-data data))
  (draw 0 form w h)))

(defn draw-loop
  []
  (let [form (js/Form. space)
        w (.. space -size -x)
        h (.. space -size -y)]
    (draw form w h)))

(draw-loop)
