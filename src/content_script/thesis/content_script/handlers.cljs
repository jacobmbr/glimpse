(ns thesis.content-script.handlers
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [reagent.core :as r]
            [chromex.ext.storage :as storage]
            [cljs.core.async :refer [put!]]
            [chromex.logging :refer-macros [log]]
            [thesis.background.storage :as st]
            [re-frame.core :refer [register-handler path trim-v after debug dispatch]]))

(register-handler
  :initialise-db
  (fn [_ [_ img dim data tabId]]
    {:img-data img
     :dim dim
     :data data
     :img-pos [0 0]
     :tab-id tabId
     :has-info? false}))

(register-handler
  :update-img-pos
  (fn [db [_ v]]
    (assoc db :img-pos v)))

(register-handler
  :handle-info
  debug
  (fn [db [_ v]]
    (let [acc (atom 20)] 
      (assoc db 
             :has-info? v 
             :data (reduce #(let [r (rand 20)]
                              (swap! acc + r 20)
                              (conj %1 (assoc %2 :font-size r :x 1000 :y @acc))) [] (get db :data))))))

(register-handler
  :data-satellites
  (fn [db [_ _]]
    (update-in db [:data] 
      (fn [data] 
        (vec (map-indexed 
               #(assoc %2 
                       :font-size 10
                       :x (rand (first (get db :dim))) 
                       :y (rand (peek (get db :dim)))) 
               data))))))
