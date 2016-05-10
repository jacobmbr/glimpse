(ns thesis.map.handlers
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [put!]]
            [chromex.logging :refer-macros [log]]
            [re-frame.core :refer [register-handler path trim-v after debug dispatch]]))

(def call-chan (atom nil))
(def response-chan (atom nil))

(defn listen! []
  (log "listenin")
  (go-loop []
    (when-let [msg (<! @response-chan)]
      (dispatch [:handle-counts msg]))
    (recur)))

(register-handler
  :get-counts
  (fn [db _] 
    (put! @call-chan {:reqtype "get-counts"})
    (assoc db :loading-domains? true)))

(register-handler
  :handle-counts
  (fn [db [_ res]]
    (let [data (js->clj (.-data res))]
      (assoc db :distinct-domains data :loading-domains? false))))

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
