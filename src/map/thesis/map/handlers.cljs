(ns thesis.map.handlers
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [reagent.core :as r]
            [chromex.ext.storage :as storage]
            [cljs.core.async :refer [put!]]
            [chromex.logging :refer-macros [log]]
            [re-frame.core :refer [register-handler path trim-v after debug dispatch]]))

(def call-chan (atom nil))
(def response-chan (atom nil))

(defn listen! []
  (go-loop []
    (when-let [msg (<! @response-chan)]
      (condp = (.-restype msg)
        "distinct-domains" (dispatch [:handle-counts (js->clj (.-data msg))])
        "distinct-locations" (dispatch [:handle-locations (js->clj (.-data msg))])
        "location-counts" (dispatch [:handle-location-counts (js->clj (.-data msg))])
        (log "unhandled: " msg))
    (recur))))

(register-handler
  :get-my-location
  (fn [db _] 
    (let [local-storage (storage/get-local)]
      (.. js/chrome -storage -local (get #(dispatch [:handle-location %]))))
    db))

(register-handler
  :handle-location
  debug
  (fn [db [_ res]]
    (let [loc (js->clj res :keywordize-keys true)]
      (if (nil? (:lat loc)) (dispatch [:get-my-location]))
      (assoc db :my-location {:lat (get loc :lat)
                              :lon (get loc :lon)}))))

(register-handler
  :get-locations
  (fn [db _] 
    (put! @call-chan {:reqtype "get-locations"})
    (assoc db :loading-locations? true)))

(register-handler
  :get-location-counts
  (fn [db [_ res]]
    (put! @call-chan {:reqtype "get-location-counts"})
    (assoc db :loading-location-counts? true)))

(register-handler
  :handle-location-counts
  (fn [db [_ res]]
    debug
    (assoc db :location-counts res :loading-location-counts? false)))

(register-handler
  :handle-locations
  (fn [db [_ res]]
    (dispatch [:get-location-counts res])
    (assoc db :distinct-locations res :loading-locations? false)))

(register-handler
  :get-counts
  (fn [db _] 
    (put! @call-chan {:reqtype "get-counts"})
    (assoc db :loading-domains? true)))

(register-handler
  :handle-counts
  (fn [db [_ res]]
    (assoc db :distinct-domains res :loading-domains? false)))

(register-handler
   :initialise-db             ;; usage: (dispatch [:initialise-db])
   (fn 
     [_ [_ c r]]                   ;; Ignore both params (db and v). 
     (reset! call-chan c)
     (reset! response-chan r)
     (listen!)
     {:test true}))

(defn get-domain [domain] (put! @call-chan {:reqtype "get-domain" :req domain}))
(defn get-locations [] (put! @call-chan {:reqtype "get-locations"}))
