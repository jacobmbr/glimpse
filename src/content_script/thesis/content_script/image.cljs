(ns thesis.content-script.image
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :as m :refer [go go-loop]])
  (:require [chromex.logging :refer-macros [log]]
            [domina.css :refer [sel]]
            [cljs.core.async :refer [chan close! <! >!]]
            [domina.core :refer [by-id value set-value! destroy! append! by-class add-class!]]))

(def THREE js/THREE)
(def ascene (atom nil))
(def arenderer (atom nil))
(def aobject (atom nil))
(def adiv (atom nil))
(def acamera (atom nil))

(defn draw! [{:keys [x y z rx ry rz display]}]
          (if-not display
            (set! (.-display (.-style @adiv)) "none")
            (do 
              (set! (.-display (.-style @adiv)) "block")
              (set! (.-x (.-rotation @aobject)) rx)
              (set! (.-y (.-rotation @aobject)) ry)
              (set! (.-z (.-rotation @aobject)) rz)

              (set! (.-x (.-position @aobject)) x)
              (set! (.-y (.-position @aobject)) y)
              (set! (.-z (.-position @aobject)) z)))
          (.render @arenderer @ascene @acamera))

(defn init!
  [img]
  (let [w (.-innerWidth js/window)
        h (.-innerHeight js/window)
        camera (THREE.PerspectiveCamera. 40 (/ w h) 1 10000)
        scene (THREE.Scene.)
        renderer (THREE.CSS3DRenderer.)
        div (.. js/document (createElement "div"))
        object (THREE.CSS3DObject. div)
        mychan (chan)]

    (set! (.-z (.-position camera)) 3000)
    (set! (.-backgroundImage (.-style div)) (str "url(" img ")"))
    (set! (.-width (.-style div)) (str w "px"))
    (set! (.-height (.-style div)) (str h "px"))

    (set! (.-x (.-rotation object)) 0)
    (set! (.-y (.-rotation object)) 0)
    (set! (.-z (.-rotation object)) 0)

    (set! (.-x (.-position object)) 0)
    (set! (.-y (.-position object)) 0)
    (set! (.-z (.-position object)) 0)

    (.setSize renderer w h)
    (add-class! (.-domElement renderer) "renderer")
    (set! (.-position (.-style (.-domElement renderer))) "absolute")
    (.. scene (add object))
    (reset! ascene scene)
    (reset! aobject object)
    (reset! arenderer renderer)
    (reset! acamera camera)
    (reset! adiv div)
    (append! (sel "body") (.-domElement renderer))
    (draw! {:x 0 :y 0 :z 0 :rx 0 :ry 0 :rz 0 :display false})
  mychan))


