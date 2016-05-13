(ns thesis.map.handlers
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [reagent.core :as r]
            [chromex.ext.storage :as storage]
            [cljs.core.async :refer [put!]]
            [clojure.string :as string]
            [chromex.logging :refer-macros [log]]
            [thesis.background.storage :as st]
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
        "all-for-domain" (dispatch [:handle-domain-info (js->clj (.-data msg))])
        "all-for-tabUrlIndex" (dispatch [:handle-site-info 
                                         {:data (js->clj (.-data msg))
                                          :domain (.-value msg)}])
        (log "unhandled: " msg))
    (recur))))

(register-handler
  :get-history
  (fn [db _] 
      (.. js/chrome -history (search #js {"text" ""
                                          "startTime" (- (.now js/Date) (* 1000 60 60 24 7))
                                          "maxResults" 1000} #(dispatch [:handle-history %])))
    db))

(register-handler
  :handle-history
  (fn [db [_ res]]
    (let [test-set (r/atom (set []))]
      (assoc db :history (reduce (fn [p n] 
                (let [url (string/replace (.. (Uri. (.-url n)) (getDomain)) "www." "")]
                  (if (contains? @test-set url)
                    p
                    (do 
                      (swap! test-set conj url)
                      (conj p url))))) [] res)))))

(register-handler
  :get-domain-info
  (fn [db [_ domain]] 
    (put! @call-chan {:reqtype "all-for-domain" :req domain})
    (assoc db :loading-domain-info? true)))

(register-handler
  :handle-domain-info
  (fn [db [_ res]]
    (assoc db :domain-info res 
                 :loading-domain-info? false)))

(register-handler
  :handle-site-info
  (fn [db [_ res]]
    (log (:data res))
    (assoc db :site-info (:data res)
              :current-site-info (:domain res)
              :loading-site-info? false)))

(register-handler
  :display-info-box
  (fn [db [_ yo]]
    (assoc db :display-info-box? yo)))

(register-handler
  :get-site-info
  (fn [db [_ domain]]
    (put! @call-chan {:reqtype "site-info" :req domain})
    (assoc db :loading-site-info? true)))

(register-handler
  :get-my-location
  (fn [db _] 
    (let [local-storage (storage/get-local)]
      (.. js/chrome -storage -local (get #(dispatch [:handle-location %]))))
    db))

(register-handler
  :handle-location
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
    (assoc db :location-counts res :loading-location-counts? false)))

(register-handler
  :handle-locations
  (fn [db [_ res]]
    (dispatch [:get-location-counts res])
    (assoc db :distinct-locations res :loading-locations? false)))

(register-handler
  :get-counts
  (fn [db _] 
    (if (:has-loaded-domains? db)
      (do 
        (put! @call-chan {:reqtype "get-counts"})
        (assoc db :loading-domains? true))
      db)))

(register-handler
  :handle-counts
  (fn [db [_ res]]
    (assoc db :distinct-domains res :loading-domains? false :has-loaded-domains? true)))

(register-handler
   :initialise-db             ;; usage: (dispatch [:initialise-db])
   (fn 
     [_ [_ c r]]                   ;; Ignore both params (db and v). 
     (reset! call-chan c)
     (reset! response-chan r)
     (listen!)
     {:test true}))

(register-handler
  :handle-mouse
  (fn [db [_ m]]
    (assoc db :mouse m)))

(register-handler
  :track-window
  (fn [db _]
    (.. js/window (addEventListener "resize" #(dispatch [:handle-window])))
    (assoc db :window [(.. js/window -innerWidth) (.. js/window -innerHeight)])))

(register-handler
  :handle-window
  (fn [db _]
    (assoc db :window [(.. js/window -innerWidth) (.. js/window -innerHeight)])))
(register-handler
  :track-mouse
  (fn [db _]
    (.. js/window (addEventListener "mousemove" #(dispatch [:handle-mouse [(.-clientX %) (.-clientY %)]])))
    (assoc db :mouse [0 0])))

(register-handler
  :infobox
  (fn [db [_ domain]]
    (dispatch [:get-site-info domain])
    (dispatch [:display-info-box true])
    (assoc db :loading-site-info? true)))

(defn get-domain [domain] (put! @call-chan {:reqtype "get-domain" :req domain}))
(defn get-locations [] (put! @call-chan {:reqtype "get-locations"}))
