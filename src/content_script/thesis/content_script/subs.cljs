(ns thesis.content-script.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [clojure.string :refer [split]]
            [chromex.logging :refer-macros [log]]))

(register-sub :count (fn [db i] (reaction (count (get @db :data)))))

(register-sub :has-info?  (fn [db [_ _]] (reaction (get-in @db [:has-info?])))) 

(register-sub :tab-url (fn [db [_ i]] (reaction (get-in @db [:tab-url]))))

(register-sub :in-data (fn [db [_ i]] (reaction (get-in @db [:data i]))))

(register-sub :img-data (fn [db _] (reaction (get @db :img-data))))

(register-sub :img-pos (fn [db _] (reaction (get @db :img-pos))))

(register-sub :data (fn [db _] (reaction (get @db :data))))

(register-sub :img-scale (fn [db _] (reaction (get @db :img-scale))))
(register-sub :img-grayscale (fn [db _] (reaction (get @db :img-grayscale))))
(register-sub :show-text? (fn [db _] (reaction (get @db :show-text?))))
(register-sub :align? (fn [db _] (reaction (get @db :align?))))
(register-sub :dim (fn [db _] (reaction (get @db :dim))))
(register-sub :left-padding (fn [db _] (reaction (get @db :left-padding))))
(register-sub :ind-opacity (fn [db _] (reaction (get @db :ind-opacity))))
(register-sub :show-indicator? (fn [db _] (reaction (get @db :show-indicator?))))
