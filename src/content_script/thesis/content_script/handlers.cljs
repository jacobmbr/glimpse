(ns thesis.content-script.handlers
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [reagent.core :as r]
            [chromex.ext.storage :as storage]
            [cljs.core.async :refer [put!]]
            [chromex.logging :refer-macros [log]]
            [thesis.background.storage :as st]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]
            [re-frame.core :refer [register-handler path trim-v after debug dispatch]]))

(register-handler
  :initialise-db
  (fn [_ [_ img dim data tabId counts]]
    (let [obj (atom {})
          maxcnt (atom 0)
          mincnt (atom 0)]
      (doseq [[dom cnt] (vec (sort-by val > (js->clj counts)))]
          (if (contains? data (keyword dom)) 
            (do
              (reset! maxcnt (max @maxcnt cnt))
              (reset! mincnt (min @mincnt cnt))
              (swap! obj assoc (keyword dom) (assoc (get data (keyword dom)) :count 0 :cnt cnt)))))
      {:img-data img
       :dim dim
       :data @obj
       :align? false
       :img-pos [0 0]
       :img-scale 1
       :tab-id tabId
       :show-text? false
       :min-count @mincnt
       :max-count @maxcnt
       :domain-counts counts
       ;:msg-chan msg-chan
       :has-info? false})))

(register-handler
  :scale-down-img
  (fn [db [_]]
    (assoc db :img-scale 0.3)))

(register-handler
  :kill
  (fn [db [_]]
    (destroy! (by-id "ext-canvas-container"))
    db))

(register-handler
  :exit
  (fn [db [_]]
    (js/setTimeout #(dispatch [:kill]) 300)
    (assoc db :img-scale 1 :img-pos [0 0])))

(register-handler
  :update-img-pos
  (fn [db [_ v]]
    (assoc db :img-pos v)))

(register-handler :resize (fn [db [_ v]] (assoc db :dim v)))

(register-handler
  :handle-info
  (fn [db [_ v]]
    (let [acc (atom 20)] 
      (dispatch [:show-text true])
      (dispatch [:align true])
      (assoc db 
             :has-info? v 
             :data (reduce-kv #(let [r (rand 40)]
                              (swap! acc + r 20)
                              ;(assoc %1 %2 (assoc %3 :font-size 15 :x 1000 :y @acc))) {} (get db :data))))))
                              (assoc %1 %2 (assoc %3 :font-size 15 :x 0 :y 0))) {} (get db :data))))))

(register-handler
  :handle-counts
  (fn [db [_ res]]
    ;(log res)
    (assoc db :domain-counts res)))

(register-handler
  :get-counts
  (fn [db [_]]
    (put! (:msg-chan db) "get-counts")
    db))

(register-handler :align (fn [db [_ v]] (assoc db :align? v)))

(register-handler
  :data-satellites
  debug
  (fn [db [_ _]]
    (assoc db 
             :data (reduce-kv #(let [r (rand 40)]
                              (assoc %1 %2 (assoc %3 
                                                  :font-size 12
                                                  :count (get %3 :cnt)
                                                  :x (rand (first (get db :dim))) 
                                                  :y (rand (peek (get db :dim)))))) {} (get db :data)))))

(register-handler
  :show-text
  (fn [db [_ v]]
    (assoc db :show-text? v)))
    ;(assoc db :data (reduce-kv #(do
                               ;(assoc %1 %2 (assoc %3 
                                                   ;:x (rand (first (get db :dim)))
                                                   ;:y (rand (peek (get db :dim)))
                                                   ;))) {} (get db :data)))))
                                                   ;-------
      ;(reduce #(assoc %1 (:domain %2) (assoc %2 :font-size 10
                                   ;:x (rand (first (get db :dim))) 
                                   ;:y (rand (peek (get db :dim))))) {} data))))
