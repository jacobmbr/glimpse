(ns thesis.map.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [clojure.string :refer [split]]
            [chromex.logging :refer-macros [log]]))

(register-sub :geojson (fn [db _] (reaction (get @db :geojson))))

(register-sub :display-info-box?  (fn [db _] (reaction (get @db :display-info-box?))))

(register-sub :dim (fn [db _] (reaction (get @db :window))))

(register-sub :mouse (fn [db _] (reaction (get @db :mouse))))

(register-sub :domain-info (fn [db _] (reaction (get @db :domain-info))))
(register-sub :site-info (fn [db _] (reaction (get @db :site-info))))
(register-sub :site-name (fn [db _] (reaction (get-in @db [:site-info :domain]))))

(register-sub :loading-site-info?  (fn [db _] (reaction (get @db :loading-site-info?))))
(register-sub :loading-domain-info?  (fn [db _] (reaction (get @db :loading-domain-info?))))

(register-sub :history (fn [db _] (reaction (get @db :history)))) 
(register-sub :loading-history?  (fn [db _] (reaction (get @db :loading-history?)))) 
(register-sub :loading-location-counts?  (fn [db _] (reaction (get @db :loading-location-counts?)))) 
(register-sub :loading-locations?  (fn [db _] (reaction (get @db :loading-locations?)))) 
(register-sub :my-location (fn [db _] (reaction (get @db :my-location)))) 
(register-sub :loading-locations?  (fn [db _] (reaction (get @db :loading-locations?)))) 
(register-sub :distinct-locations (fn [db _] (reaction (get @db :distinct-locations)))) 
(register-sub :loading-domains?  (fn [db _] (reaction (get @db :loading-domains?))))
(register-sub :distinct-domains (fn [db _] (reaction (get @db :distinct-domains))))

(register-sub :view-mode (fn [db _] (reaction (get @db :view-mode))))
(register-sub :history-mode (fn [db _] (reaction (get @db :history-mode))))

(register-sub :state (fn [db _] (reaction @db)))
(register-sub :show-state? (fn [db _] (reaction (get @db :show-state))))
(register-sub :site-counts (fn [db _] (reaction (get @db :site-counts))))
(register-sub :map (fn [db _] (reaction (get @db :map))))
(register-sub :cluster-layer (fn [db _] (reaction (get @db :cluster-layer))))
(register-sub :cluster-bounds (fn [db _] (reaction (get @db :cluster-bounds))))

