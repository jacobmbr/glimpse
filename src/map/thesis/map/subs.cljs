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
  :loading-location-counts?
  (fn [db _]
    (reaction (get @db :loading-location-counts?))))

(register-sub
  :loading-locations?
  (fn [db _]
    (reaction (get @db :loading-locations?))))

(register-sub
  :my-location
  (fn [db _]
    (reaction (get @db :my-location))))

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
