(ns thesis.map.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [clojure.string :refer [split]]
            [chromex.logging :refer-macros [log]]))

(register-sub
  :geojson
  (fn [db _]
    (reaction 
      (clj->js {:type "FeatureCollection"
                :features (reduce #(conj %1 (let [strs (split (first %2) #"\|")]
                                              {:type "Feature"
                                               :properties {:title (peek %2)
                                                            :marker-symbol "airport"}
                                               :geometry {:type "Point"
                                                          :coordinates #js [(subs (get strs 1) 0 7) (subs (first strs) 0 7)]}})) [] (get @db :location-counts))}))))

(register-sub
  :display-info-box?
  (fn [db _] (reaction (get @db :display-info-box?))))

(register-sub
  :current-site-info
  (fn [db _] (reaction (get @db :current-site-info))))

(register-sub
  :site-info
  (fn [db _] (reaction (get @db :site-info))))

(register-sub
  :dim
  (fn [db _] (reaction (get @db :window))))

(register-sub
  :mouse
  (fn [db _] (reaction (get @db :mouse))))

(register-sub
  :single-domain 
  (fn [db [_ domain]] (reaction (get @db :domain-info))))

(register-sub
  :domain-info
  (fn [db _] (reaction (get @db :domain-info))))

(register-sub
  :loading-site-info?
  (fn [db _] (reaction (get @db :loading-site-info?))))

(register-sub
  :loading-domain-info?
  (fn [db _] (reaction (get @db :loading-domain-info?))))

(register-sub
  :history
  (fn [db _] (reaction (get @db :history))))

(register-sub
  :loading-history?
  (fn [db _] (reaction (get @db :loading-history?))))

(register-sub
  :loading-location-counts?
  (fn [db _] (reaction (get @db :loading-location-counts?))))

(register-sub
  :loading-locations?
  (fn [db _] (reaction (get @db :loading-locations?))))

(register-sub
  :my-location
  (fn [db _] (reaction (get @db :my-location))))

(register-sub
  :loading-locations?
  (fn [db _] (reaction (get @db :loading-locations?))))

(register-sub
  :distinct-locations
  (fn [db _] (reaction (get @db :distinct-locations))))

(register-sub
  :loading-domains?
  (fn [db _]
    (reaction (get @db :loading-domains?))))

(register-sub
  :distinct-domains
  (fn [db _]
    (reaction (get @db :distinct-domains))))
