;; create the main project namespace
(ns thesis.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :as m :refer [go go-loop]])
  (:require [domina.core :refer [by-id value set-value! append! by-class]]
            [domina.css :refer [sel]]
            [thesis.draw :as draw :refer [draw-entity draw-text]]
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
                     :data [{:pos {:x 0 :y 0} :data ["domain8", 1, true]}
                           {:pos {:x 19 :y 0} :data ["domain8", 1, true]}
                           {:pos {:x 49 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["facebook", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 15, true]}
                           {:pos {:x 19 :y 0} :data ["myspace", 15, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 15, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 7, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 7, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 7, true]}
                           {:pos {:x 19 :y 0} :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 0} :data ["domain2", 6, true]}]
                     :offset 0
                     :shift 0
                     :current-page 1}))
(def dim (r/cursor app-db [:screen]))
(def data (r/cursor app-db [:data]))
(def shift (r/cursor app-db [:shift]))
(def offset (r/cursor app-db [:offset]))

(def reactions (map-indexed #(anim/spring (r/cursor app-db [:data %1 :pos :x])) @data))

(def rot (anim/spring shift))
(def ospring (anim/spring offset))

(defonce resize-chan (chan))
(def state-chan (chan))

(defn randomize-data
  []
  (swap! data #(update-in % assoc {:pos {:x (rand)}})))

(defn get-springs
  [data]
  (reduce #(conj %1 {:no (count %1)
                     :x (anim/spring (r/cursor app-db [:data (count %1) :pos :x]))
                     :y (anim/spring (r/cursor app-db [:data (count %1) :pos :y]))})
  [] data))

(def springs (get-springs @data))


;#_(defn draw-element
  ;[form el])
  ;(let []
      ;(doall 
        ;(map #_(draw-text 
                ;form 
                ;(js/Point. (+ 200 @(get % :x)) (+ 200 @(get % :y)))  
                ;(get-in @data [(get % :no) :data 0]) 
                ;12) 
             ;springs)))

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
             "hu" (switch-page)
             "randomize" (do (randomize-data)))
           (recur)))))
(switch-state state-chan)

(defn add-image-listeners []
  (do
    (.. js/window (addEventListener "resize" (fn [e] (go (>! resize-chan "hu")))))
    (.. js/window (addEventListener "mousedown" (fn [e] (go (>! state-chan "randomize")))))
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

(defn get-initial-coordinates
  [datac]
  (let [w (:w @dim)
        h (:h @dim)
        data @datac]
        (map-indexed #(update-in %2 [:pos :y] + (* (+ 0.5 %1) (/ h (count data)))) data)))

(defn setup
  []
  (do
    (swap! dim #(assoc % :w (.. js/window -innerWidth) :h (.. js/window -innerHeight)))
    (if-not (by-id "ext-canvas-container")
    (do
      (add-image-listeners)
      (get-initial-coordinates data)
      (append! (sel "body") (str
                              (html [:div#ext-canvas-container])
                              ;(html [:img#ext-image.ext-image.ext-canvas-slide {:src "img/t.png"}])))
                              ))))))

(setup)

(defonce space (..
             (js/CanvasSpace.)
             (display "#ext-canvas-container")
             (refresh true)))
(go-loop []
  (<! resize-chan)
  (swap! dim #(assoc % :w (.. js/window -innerWidth) :h (.. js/window -innerHeight)))
  (recur))


(defn sc-overview
  [os form hostnameDict]
  (doall (map
         #(draw/draw-text form (js/Point. (get-in % [:pos :x]) (+ os (get-in % [:pos :y]))) (get-in % [:data 0]) 25)
         hostnameDict)))

(defn sc-satellites
  [os osf form center h w dotsdata]
  (doall (map #(draw-entity
            form
            [(/ w 2) (/ h 2)]
            [(- w 100) (+ osf (:pos :y %))]
            (.. center (add 0 os))
            @rot
            %
            os)
           dotsdata)))

(defn get-elements
  [spr]
  (doall (map #(assoc {} :x @(get % :x)
                         :y @(get % :y)) spr)))

(defn draw
  ([time form w h center dotsdata]
   (let [os @ospring
         osf @offset]
    (.clearRect (.-ctx space) 0 0 w h)

    ;(draw-element form)
    (sc-overview os form dotsdata)
    (sc-satellites os osf form center h w dotsdata)

    (.requestAnimationFrame js/window #(draw % form))))
  ([time form]
   (let [h (:h @dim)
         w (:w @dim)]
    (draw time form w h (.. (js/Vector. (/ w 2) (/ h 2)) (add 1 1)) (get-elements springs)))))

(draw 0 (js/Form. space))
