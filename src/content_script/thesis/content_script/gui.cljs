(ns thesis.content-script.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<! >! chan timeout put!]]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [chromex.support :refer-macros [oget]]
            [chromex.logging :refer-macros [log]]
            [thesis.content-script.animation :as anim]
            [thesis.content-script.subs]
            [thesis.content-script.handlers]
            [domina.events :as evt]
            [domina.css :refer [sel]]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))

(def img-data (r/atom nil))
(def img-pos (r/atom [0 0]))
(def dim (r/atom [0 0]))
(def mouse (r/atom [0 0]))
(def mouseX (reaction (first @mouse)))
(def mouseY (reaction (peek @mouse)))
(def ind-domains (r/atom #{}))
(def show-ind? (atom false))

(defn add-domain [d]
  (doall (doseq [el (vec d)] 
    (if-not (contains? @ind-domains el)
      (swap! ind-domains conj el)))))


(defn heading []
  (let [tabId (subscribe [:tab-url])]
    (fn [] [:div {:style {:width "30%"
                          :text-align "left"
                          :margin-left "40px"
                          :position "absolute"
                          :top "20px"}}
            [:h1 {:style {:font-size "34px"
                          :text-decoration "underline"
                          :font-style "italic"
                          :line-height "normal"
                          :font-weight "600"
                          :padding-bottom "10px"
                          :color "white"}} "Third parties who see you on " @tabId]
            [:p {:style {:line-height "15px" :font-style "italic"}} "and how often they have seen you on the internet before"]])))

(defn counter [cnt del]
  (let [text (str " ...has seen you " cnt " times before.")
        draw-string (r/atom "")
        ldel (int del)]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (js/setTimeout
           #(go-loop [i 0]
            (<! (timeout 10))
            (reset! draw-string (subs text 0 i))
            (if (< i (count text)) (recur (inc i)))) (* 200 ldel)))
       :reagent-render
       (fn [cnt del]
         (if (> cnt 1)
           [:span {:style {:color "#eee"
                                      :font-weight "400"
                                      :transition "all 0.3s ease"}} @draw-string]))})))

(defn satellite [dom del spring?]
  (let [el (subscribe [:in-data dom])
        text (name dom)
        x (r/cursor el [:x])
        y (r/cursor el [:y])
        cnt (r/cursor el [:cnt])
        cspring (anim/spring cnt)
        fs (reaction (get @el :font-size))
        xlin (anim/interpolate-to x {:duration 700})
        ylin (anim/interpolate-to y {:duration 500})
        xsp (anim/spring x {:damping 2})
        ysp (anim/spring y {:damping 2})
        hasinfo? (subscribe [:has-info?])
        lp (subscribe [:left-padding])
        lpsp (anim/spring lp {:mass 20 :damping 2})
        show-text? (subscribe [:show-text?])
        align? (subscribe [:align?])
        dim (subscribe [:dim])
        ww (reaction (first @dim))
        offset (reaction (* @lpsp @ww))
        fssp (anim/interpolate-to fs)]
    (r/create-class
      {:component-will-unmount
       #()
       :display-name "satellite"
       :reagent-render
        (fn [i del]
          [:div 
            [:div {:class "satellite"
                   :style {:min-width "300px" 
                           :position (if @align? "relative" "absolute")
                           :margin "10px 0 0 0"
                           :padding-bottom "7px"
                           ;:padding-left (str (* 100 @lpsp) "%")
                           ;:left (str (+ 20 @xsp)) :top (str @ysp "px")
                           ;:transform (str "translate(" (+ 20 (* @lpsp @ww) @xsp) "px," @ysp "px)")
                           :transform (str "translate(" (+ @offset (if spring? @xsp @xlin)) "px," (if spring? @ysp @ylin) "px)")
                           }}
             [:a {:href "#"
                  :on-click #(dispatch [:handle-click "domain" text])
                  :class "ext-h1" 
                   :style {:font-size (str @fssp "px")
                           :color "white"
                           ;:line-height (str @fssp "px")
                           :font-weight "600"
                           :line-height "normal"
                           :display "block"
                           ;:background-color "black"
                           ;:text-decoration (if @hasinfo? "underline" "none")
                           ;:transform (str "translate(" @xsp "px," @ysp "px)")
                           }} 
              text]
              (if @show-text? [counter @cnt del])
             ]])})))

(defn satellites []
  (let [data (subscribe [:data])
        ;sorted-data (reaction (sort-by #(do (log %) (get % :count)) < @data))
        sdata (reaction (into (sorted-map-by (fn [k1 k2] (compare [(get-in @data [k2 :cnt]) k2] [(get-in @data [k1 :cnt]) k1]))) @data))
        show-text? (subscribe [:show-text?])
        lp (subscribe [:left-padding])
        lpsp (anim/spring lp {:mass 20 :damping 2})
        spring? (reaction (if (> (count @data) 50) false true))
        align? (subscribe [:align?])]
    [:div {:style {:position "fixed" 
                   ;:left (if @align? "50%" "0")
                   :top "0"
                   ;:top (if @align? "20%" "0")
                   :transition "all 0.5s cubicInOUt"
                   :padding-top (str (* 40 @lpsp) "%")
                   :padding-bottom "300px"
                   :padding-left "0"
                   :height "100%"
                   :width "100%"
                   :overflow (if @show-text? "scroll" "visible" )}}
     ;(log "DATA: " @data)
     [:div (doall (map-indexed #(do ^{:key %2} [satellite %2 %1 @spring?]) (keys @sdata)))]]))


(defn debug []
  (let [data (subscribe [:data])]
    [:div {:style {:position "fixed" :bottom "0px" :color "white" :left "0px"}} (str @data)] ))

(defn screenshot []
  (let [tilt (r/atom 0)
        tabUrl (subscribe [:tab-url])
        rotation (anim/spring tilt)
        grayscale (subscribe [:img-grayscale])
        grayscale-interpolated (anim/interpolate-to grayscale {:duration 500})
        scale-sub (subscribe [:img-scale])
        scale (anim/interpolate-to scale-sub {:duration 500})
        ;scale (anim/spring scale-sub {:mass 40 :damping 2})
        img-pos (subscribe [:img-pos])
        img-data (subscribe [:img-data])
        align? (subscribe [:align?])
        dim (subscribe [:dim])
        xx (reaction (-> @dim (first) (/ 2) (* -1)))
        yy (reaction (-> @dim (peek) (/ 2) (* -1)))
        x (reaction (first @img-pos))
        y (reaction (peek @img-pos))
        xsp (anim/spring x {:duration 500 :damping 3})
        ysp (anim/spring y {:duration 500 :damping 3})
        w (.-innerWidth js/window)]
    (fn a-screenshot []
      [:div 
       ;[anim/timeout #(reset! tilt 45) 100]
       [:a {:href "#"
            :on-click #(dispatch [:handle-click "site" @tabUrl])}
        [:img {:on-click #(dispatch [:exit])
              :src @img-data
              :id "ext-screenshot"
              :style {:margin "0 auto"
                      :width "100%"
                      :webkit-filter (str "grayscale(" 
                                          @grayscale-interpolated 
                                          "%) opacity(" 
                                          (* (/ 100 @grayscale-interpolated) 50) 
                                          "%) brightness(" (* 0.5 (/ 100 @grayscale-interpolated)) ")")
                      :filter (str "grayscale(" @grayscale-interpolated "%) opacity(" (* (/ @grayscale-interpolated 100) 50) "%)")
                      :transform (str 
                                   "scale(" @scale "," @scale ") "
                                   ;(if @align? (str "translate(" @xsp "px," @ysp "px)"))
                                   )}}]]])))
(defn draw-on-canvas [space form vectors n]
(.clearRect (.-ctx space) 0 0 400 400)
(let [v (js/Vector. 200 200)]
  (doseq [i vectors]
    (.. form (stroke "rgba(180,180,180,0.4)" 2))
    ;(.. form (line (.to (js/Pair. 200 200) (js/Point. (first i)))))
    (.. form (stroke "rgba(180,180,180,0.2)") (fill "transparent") (circle (.. (js/Circle. (js/Point. 200 200)) (setRadius (.. (first i) (distance (js/Point. 200 200)))))))
    (.. form (stroke 0) (fill "rgb(232, 219, 3)") (circle (.. (js/Circle. (.rotate2D (first i) (* (.-one_degree js/Const) (peek i)) (js/Point. 200 200))) (setRadius 5)))))
    (.. form (fill "rgba(3, 201, 200,0.8)") (circle (.. (js/Circle. (js/Point. 200 200)) (setRadius 10))))))

(defn make-vector []
  (.. (js/Vector. (rand 130) (rand 130)) (moveBy (js/Point. 200 200)) (rotate2D (* (rand 360) (.-one_degree js/Const)) (js/Point. 200 200))))

(defn indicator []
  (let [d (reaction (count @ind-domains))
        vectors (r/atom [])
        dom-node (r/atom nil)
        space (r/atom nil)
        form (r/atom nil)
        draw-chan (chan)
        ind-opac (subscribe [:ind-opacity])
        opac (anim/interpolate-to ind-opac {:duration 1000})
        ]
    (r/create-class
      {:component-did-mount
       (fn [ this ]
         ;(reset! vectors (reduce #(conj %1 [(make-vector) (+ 0.5 (rand 1.5))]) [] @ind-domains))
         (reset! dom-node (r/dom-node this))
         (reset! space (.. (js/CanvasSpace. "my-space") (display "#ext-huge-canvas")))
         (reset! form (js/Form. @space))
         (go-loop [i 0]
           (log i @d @vectors)
           (<! (timeout 50))
           (if (< (- i 1) @d)
             (do (swap! vectors conj [(make-vector) (+ 0.5 (rand 1.5))])
                 (recur (inc i)))))

         (go-loop [i 0]
                  (.requestAnimationFrame js/window #(go (>! draw-chan "hu")))
                  (draw-on-canvas @space @form @vectors i)
                  ;(draw-on-canvas @space @form @vectors i)
                  (<! draw-chan)
            (recur (inc i))))

       ;:component-did-update
       ;(fn [] 
         ;(log @vectors) 
         ;(dotimes [n (- @d (count @vectors))] (swap! vectors conj (make-vector))))

       :reagent-render
       (fn a-canvas [] 
         @ind-domains
          [:div {:style {:position "absolute"
                         :width "50%"
                         :top "0px"
                         :left "0px"
                         :height "100%"
                         :text-align "right"}}
           [:div {:style {:width "400px"
                          :opacity @opac
                         :height "400px"
                         :right "0px"
                         :position "absolute"
                         :top (str (- (/ (oget js/window "innerHeight") 2) 200) "px")}
                 :id "ext-huge-canvas"}]])})))

(defn root []
  (let [showind? (subscribe [:show-indicator?])]
    (fn []
      [:div
       [screenshot]
       [satellites]
       [heading]
       (if @showind? [indicator])
       ;[debug]
       ])))

(defn get-rand-between [v low up]
  (+ (rand (* up (- v (* low v)))) (* low v)))

(defn init! [img tabdict tabId counts core-chan]
  (if-not (by-id "ext-canvas-container")
    (let [node (.. js/document (createElement "div"))
          el (.. (oget js/document "body") (appendChild node))
          div (set! (.-id el) "ext-canvas-container")
          dim [(.-innerWidth js/window) (.-innerHeight js/window)]
          data (atom nil)]
      ; OPTIONAL: Kill all scripts and iframes on the page. 
      (destroy! (sel "script"))
      (destroy! (sel "iframe"))
      (->>  (reduce #(assoc %1 (keyword %2) (hash-map
                           :x (/ (first dim) 2)
                           :y (/ (peek dim) 2)
                           :font-size 0.5
                           )) {} (vec tabdict))
            (reset! data))
      (reset! ind-domains (reduce #(conj %1 %2) [] @data))
      (dispatch-sync [:initialise-db img dim @data tabId counts core-chan])
      ;(dispatch [:get-counts])

      (.. js/window (addEventListener "resize" #(dispatch [:resize [(.-innerWidth js/window) (.-innerHeight js/window)]])))

      (js/setTimeout #(dispatch [:scale-down-img] 0))
      (js/setTimeout #(dispatch [:data-satellites]) 1000)
      (js/setTimeout #(dispatch [:set-indicator-opacity 100]) 2500)

      (js/setTimeout #(dispatch [:handle-info true]) 2000)
      (js/setTimeout #(dispatch [:show-indicator true]) 2500)
      ;(js/setTimeout #(dispatch [:shuffle]) 5000)

      ;(js/setTimeout #(dispatch [:data-satellites]) 4000)
      ;(js/setTimeout #(dispatch [:update-img-pos [(-> dim (first) (/ 2) (* -1)) 0]]) 3000)
      ;(js/setTimeout #(dispatch [:update-img-pos]) 2000)

      (r/render [root] (by-id "ext-canvas-container")))))
