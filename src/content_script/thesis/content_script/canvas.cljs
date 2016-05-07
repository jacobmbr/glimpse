;; create the main project namespace
(ns thesis.content-script.canvas
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :as m :refer [go go-loop]])
  (:require [domina.core :refer [by-id value set-value! append! by-class]]
            [domina.css :refer [sel]]
            [thesis.content-script.draw :refer [draw-entity draw-text]]
            [domina.events :as evt]
            [reagent.core :as r]
            [goog.events :as events]
            [goog.events.EventType :as EventType]
            [cljs.core.async :refer [chan close! <! >!]]
            [thesis.content-script.animation :as anim]
            [hiccups.runtime :as hiccupsrt]))

(def log #(.log js/console %))

(defonce app-db (r/atom {:screen {:w 0 :h 0}
                     :data [{:pos {:x 0 :y 10} :display-size 5 :data ["outbrain.com", 1, true]}
                           {:pos {:x 19 :y 10} :display-size 5 :data ["disqus.com", 1, true]}
                           {:pos {:x 49 :y 10} :display-size 5 :data ["typekit.com", 3, false]}
                           {:pos {:x 19 :y 30} :display-size 5 :data ["facebook", 3, false]}
                           {:pos {:x 19 :y 10} :display-size 5 :data ["yldbt.com", 3, false]}
                           {:pos {:x 19 :y 50} :display-size 5 :data ["demdex.net", 3, false]}
                           {:pos {:x 19 :y 10} :display-size 5 :data ["scorecardresearch.net", 3, false]}
                           {:pos {:x 19 :y 50} :display-size 15 :data ["googletagservices.net", 15, false]}
                           {:pos {:x 19 :y 10} :display-size 15 :data ["polarmobile.com", 15, false]}
                           {:pos {:x 19 :y 30} :display-size 15 :data ["optimizely.com", 15, false]}
                           {:pos {:x 19 :y 20} :display-size 3 :data ["mediavoice.com", 3, true]}
                           {:pos {:x 19 :y 10} :display-size 3 :data ["omtrdc.net", 3, true]}
                           {:pos {:x 19 :y 10} :display-size 3 :data ["zqkt.net", 3, true]}
                           {:pos {:x 19 :y 40} :display-size 8 :data ["amazon-adsystem.com", 7, true]}
                           {:pos {:x 19 :y 30} :display-size 8 :data ["cloudfront.net", 7, true]}
                           {:pos {:x 19 :y 20} :display-size 7 :data ["domain1", 7, true]}
                           {:pos {:x 19 :y 10} :display-size 2 :data ["domain1", 3, true]}
                           {:pos {:x 19 :y 10} :display-size 3 :data ["domain2", 6, true]}]
                     :offset 0
                     :center-point {:x 0 :y 0}
                     :shift 0
                     :view "start"
                     :normalize-size 1
                     :space nil
                     :current-page 1}))
(def dim (r/cursor app-db [:screen]))
(def data (r/cursor app-db [:data]))
(def shift (r/cursor app-db [:shift]))
(def offset (r/cursor app-db [:offset]))
(def view (r/cursor app-db [:view]))
(def normalize (r/cursor app-db [:normalize]))
(def center-point-x (r/cursor app-db [:center-point :x]))
(def center-point-y (r/cursor app-db [:center-point :y]))
(def space (r/cursor app-db [:space]))

(def reactions (map-indexed #(anim/spring (r/cursor app-db [:data %1 :pos :x])) @data))

(def shift-spring (anim/spring shift))
(def ospring (anim/spring offset))
(def center-spring-x (anim/spring center-point-x))
(def center-spring-y (anim/spring center-point-y))

(defonce resize-chan (chan))
(defonce scroll-chan (chan))
(def state-chan (chan))

(defn randomize-data
  []
  (->>
    (reduce #(conj %1 (assoc %2 :pos {:x (+ 40 (* (rand) (- (:w @dim) 80)))
                                      :y (+ 40 (* (rand) (- (:h @dim) 80)))}
                                :display-size (get-in %2 [:data 1]))) [] @data)
    (reset! data)))

(defn align-right
  []
  (->>
    (reduce #(conj %1 (assoc %2 :pos {:x (* 0.2 (:w @dim))
                                      :y (* (+ 0.5 (count %1)) (/ (:h @dim) (count @data)))}
                                 :display-size 8)) [] @data)
    (reset! data)))

(defn single-view
  []
  (->>
    (reduce #(conj %1 (assoc %2 :pos {:x (if (= (count %1) 1) 100 -200)
                                      :y (condp = (count %1)
                                                1 100
                                                (get-in %2 [:pos :y]))}
                                :display-size (if (= (count %1) 1) 15 1)
                                      )) [] @data)
    (reset! data)))

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
             "randomize" (do (randomize-data))
             "align" (do (align-right))
             "single" (do (single-view))
             (recur))
           (recur)))))
(switch-state state-chan)

(defn add-image-listeners []
  (do
    (.. js/window (addEventListener "wheel" #(go (>! scroll-chan %))))
    (.. js/window (addEventListener "resize" (fn [e] (go (>! resize-chan "hu")))))
    (.. js/window (addEventListener "mousedown" #(go
                                                    (>! state-chan "mouse")))))
    (.. js/window (addEventListener "keydown" #(go
                                                  (>! state-chan (condp = (.. % -code)
                                                                   "KeyJ" "page"
                                                                   "KeyS" "single"
                                                                   "KeyA" "align"
                                                                   "KeyR" "randomize"
                                                                   (str "default"))))))
    (evt/listen!
    js/document
    :mousemove
    (fn [e]
      #_(println (str "node: " (:clientY e)))))
    (evt/listen!
      (by-class "ext-image")
      :webkitAnimationEnd
      (fn
        [evt]
        (println (str "ende" (:target evt))))))

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
    (do
      ;(add-image-listeners)
      (get-initial-coordinates data)
      (randomize-data)

      (reset! center-point-x 0)
      (reset! center-point-y (/ (:h @dim) 2))
      ;(log (str (clj->js (sel "body"))))
      (append! (sel "body") (str (if-not (by-id "ext-canvas-container")
                                    (html [:div#ext-canvas-container])
                                    ;(html [:img#ext-image.ext-image.ext-canvas-slide {:src "img/t.png"}])))
                                    ))))))

(go-loop []
  (<! resize-chan)
  (swap! dim #(assoc % :w (.. js/window -innerWidth) :h (.. js/window -innerHeight)))
  (recur))

(go-loop
  []
  (let [dy (.-deltaY (<! scroll-chan))]
    (println dy)
    (swap! offset #(+ @offset dy))
    (recur)))

(defn sc-overview
  [form data]
  (doall (map
         #(draw-text
            form
            [(get data :x) (get data :y)]
            (get-in % [:data 0])
            25)
         data)))

(defn sc-satellites
  [form center data osf]
  (doall (map #(draw-entity
            form
            center
            %
            osf)
           data)))
(defn sc-clusters
  [form center data]
  (reduce #() [] data)
  )

(defn get-visible-elements
  [data]
    (filter #(and (<  (get-in % [:pos :x]) (:w @dim)) (< (get-in % [:pos :h]) (:h @dim)) data)))

(defn get-elements
  [spr]
  (doall (map #(assoc {} :x @(get % :x)
                         :y @(get % :y)
                         :data (get-in @data [(get % :no) :data])
                         :display-size (get-in @data [(get % :no) :display-size])
                         ) spr)))
(defn offspringify
  [data]
  (map #(assoc-in % [:pos :y] (+ @ospring (get-in % [:pos :y]))) data))

(defn draw
  ([time form w h center data]
   (let [os @ospring
         osf @offset
         space @space]
    (.clearRect (.-ctx space) 0 0 w h)

    ;(draw-element form)
    (condp = @view
      "start" (sc-satellites form center data osf)
      ;"random" (sc-satellites form center data)
      ;"single" (sc-satellites form center data)
      )
    ;(sc-overview form (offspringify data))
    ;(sc-overview form (offspringify data))

    (.requestAnimationFrame js/window #(draw % form))))
  ([time form]
   (let [h (:h @dim)
         w (:w @dim)]
    (draw time form w h (.. (js/Vector. @center-spring-x @center-spring-y) (add 1 @offset)) (get-elements springs)))))

(defn init!
  []
  (do 
    (setup)
    (reset! space (..
                 (js/CanvasSpace.)
                 (display "#ext-canvas-container")
                 (refresh true)))
    (draw 0 (js/Form. @space))))

