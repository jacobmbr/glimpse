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
  (fn [_ [_ img dim data]]
    {:img-data img
     :dim dim
     :data data
     :img-pos [0 0]}))

(register-handler
  :update-img-pos
  debug
  (fn [db [_ v]]
    (assoc db :img-pos v)))

(register-handler
  :data-satellites
  (fn [db [_ _]]
    (update-in db [:data] (fn [data] (vec (map-indexed #(assoc %2 :x (rand (first (get db :dim))) :y (rand (peek (get db dim)))) data))))))
