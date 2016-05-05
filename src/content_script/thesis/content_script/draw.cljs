(ns thesis.content-script.draw)

(defn draw-circle
  [form p size col]
  (let [c (..  (js/Circle. p) (setRadius (* size 4)))]
    (.. form
        (stroke 0)
        ;(stroke "rgba(255,255,255,1)" 0)
        (fill col)
        (circle c))
    (loop [x 8] 
      (if (> x 0)
        (do 
          (.. form 
              (circle 
                (.. (js/Circle. (.. p 
                                    ($add 0)
                                    (rotate2D 
                                      (/ x (.-PI js/Math)) 
                                      p)))
                                    (setRadius (* 3 3))))))
          (recur (dec x))))))

(defn draw-line
  [form pair center col]
    (.. form
      (stroke col 1)
      (line pair)))

(defn draw-text
  [form p t size]
  (.. form (fill "white") (font (* 5 size) "Fira Sans, sans-serif") (text 
                                                    p 
                                                    (str t) 
                                                    1000 size size)))

(defn draw-entity
  [form center data osf]
  (let [tx (get data :x)
        ty (get data :y)
        fp (js/Vector. center)
        tp (js/Vector. tx (+ osf ty))
        size (* 1 (get-in data [:display-size]))
        good (get-in data [:data 2])
        col (if good "rgba(255,0,0,0.4)" "rgba(0,255,0,0.4)")
        pair (.to (js/Pair. center) tp)]
  (do 
    (draw-line form pair center col)
    (draw-circle form tp size col)
    (draw-text form tp (get-in data [:data 0]) size))))
