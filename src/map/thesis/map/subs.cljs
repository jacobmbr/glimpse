(ns thesis.map.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [chromex.logging :refer-macros [log]]))

(register-sub
  :loading-locations?
  (fn [db _]
    (reaction (get @db :loading-locations?))))

(register-sub
  :distinct-locations
  (fn [db _]
    (reaction (get @db :distinct-locations))))

(register-sub
  :loading-domains?
  (fn [db _]
    (reaction (get @db :loading-domains?))))

(register-sub
  :distinct-domains
  (fn [db _]
    (reaction (get @db :distinct-domains))))
