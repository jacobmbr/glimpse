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

(def app-db (r/atom {:screen {:w 0 :h 0}
                     :data [["domain8", 1, true]
                           ["domain8", 1, true]
                           ["domain1", 3, true]
                           ["facebook", 3, true]
                           ["domain1", 3, true]
                           ["domain1", 3, true]
                           ["domain1", 3, true]
                           ["domain1", 15, true]
                           ["myspace", 15, true]
                           ["domain1", 15, true]
                           ["domain1", 3, true]
                           ["domain1", 3, true]
                           ["domain1", 3, true]
                           ["domain1", 7, true]
                           ["domain1", 7, true]
                           ["domain1", 7, true]
                           ["domain1", 3, true]
                           ["domain2", 6, true]]
                     :offset 0
                     :shift 0
                     :current-page 1}))
(def dim (r/cursor app-db [:screen]))
(def data (r/cursor app-db [:data]))
(def shift (r/cursor app-db [:shift]))
(def offset (r/cursor app-db [:offset]))


(def rot (anim/spring shift))
(def ospring (anim/spring offset))

(defonce resize-chan (chan))
(def state-chan (chan))

(defn switch-page
  []
  (let [h (/ (:h @dim) 1)]
  (swap! offset #(condp = %
                   0 h
                   h 0))))

(defn switch-state
  [chan]
  (go-loop []
     (let [msg (<! chan)]
       (do (condp = msg
             "page" (swap! shift #(condp = %
                               0 1
                               1 -1
                               -1 0))
             "hu" (switch-page))
           (recur)))))
(switch-state state-chan)

(defn add-image-listeners []
  (do
    (.. js/window (addEventListener "resize" (fn [e] (go (>! resize-chan "hu")))))
    (.. js/window (addEventListener "mousedown" (fn [e] (go (>! state-chan "hu")))))
    (.. js/window (addEventListener "keydown" (fn [e] (go (>! state-chan "page")))))
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
  [datac]
  (let [w (:w @dim)
        h (:h @dim)
        data @datac]
  (reduce
    #(conj %1 (conj %2 (* (+ 0.5 (count %1)) (/ h (count data)))))
    [] data)))

(defn sc-overview
  [os form hostnameDict]
  (doall (map
         #(draw/draw-text form (js/Point. 200 (+ os (get % 3))) (get % 0) 25)
         hostnameDict)))

(defn sc-satellites
  [os osf form center h w dotsdata]
  (doall (map #(draw-entity
            form
            [(/ w 2) (/ h 2)]
            [(- w 100) (+ osf (get % 3))]
            (.. center (add 0 os))
            @rot
            %
            os)
           dotsdata)))

(defn draw
  ([time form w h center dotsdata]
   (let [os @ospring
         osf @offset]
    (.clearRect (.-ctx space) 0 0 w h)

    (sc-overview os form dotsdata)
    (sc-satellites os osf form center h w dotsdata)

    (.requestAnimationFrame js/window #(draw % form))))
  ([time form]
   (let [h (:h @dim)
         w (:w @dim)]
    (draw time form w h (.. (js/Vector. (/ w 2) (/ h 2)) (add 1 1)) ;add moouse parallax
                       (dots-from-data data)))))

(draw 0 (js/Form. space))
