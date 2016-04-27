;; create the main project namespace
(ns thesis.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :as m :refer [go go-loop]])
  (:require [domina.core :refer [by-id value set-value! append! by-class]]
            [domina.css :refer [sel]]
            [thesis.draw :as draw :refer [draw-entity]]
            [domina.events :as evt]
            [devtools.core :as devtools]
            [reagent.core :as r]
            [cljs.core.async :refer [chan close! <! >!]]
            [thesis.animation :as anim]
            [hiccups.runtime :as hiccupsrt]))

;; enable cljs to print to the JS console of the browser
(enable-console-print!)
(devtools/install! [:sanity-hints :custom-formatters])
(def log #(.log js/console %))

(def data [["domain8", 1, true] ["domain8", 1, true] ["domain1", 3, true] ["domain2", 6, true]])

(defonce resize-chan (chan))
(defonce dim (r/atom {:w 0 :h 0}))


(defn add-image-listeners []
  (do
    (.. js/window (addEventListener "resize" (fn [e] (go (>! resize-chan "hu")))))
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
      (swap! dim #(assoc % :w (.. js/window -innerWidth) :h (.. js/window -innerHeight)))
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
(go-loop []
  (<! resize-chan)
  (swap! dim #(assoc % :w (.. js/window -innerWidth) :h (.. js/window -innerHeight)))
  (recur))

(defn dots-from-data
  [data]
  (let [w (:w @dim)
        h (:h @dim)]
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
    (println (str "tick" @shift))
    (swap! shift #(condp = %
                     0 1
                     1 0))
    ;(loop-go)
    ))
(loop-go)

(defn draw
  ([time form w h center dotsdata]
    (.clearRect (.-ctx space) 0 0 w h)
    #_(doall (map 
           #(draw/draw-text form (js/Point. 200 (get % 3)) (get % 0) 25)
           dotsdata))
    (doall (map 
             #(draw-entity 
                form 
                [(/ w 2) (/ h 2)] 
                [(- w 100) (get % 3)] 
                center
                @rot)
             dotsdata))
    (.requestAnimationFrame js/window #(draw % form)))
  ([time form]
   (let [h (:h @dim)
         w (:w @dim)]
    (draw time form w h (.. (js/Vector. 0 (/ h 2)) (add 1 1)) ;add moouse parallax
                       (dots-from-data data)))))

(draw 0 (js/Form. space))
