(ns thesis.map.handlers
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [reagent.core :as r]
            [chromex.ext.storage :as storage]
            [clojure.string :as string]
            [chromex.support :refer-macros [oget]]
            [chromex.logging :refer-macros [log]]
            [chromex.protocols :refer [post-message!]]
            [thesis.background.storage :as st]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]
            [re-frame.core :refer [register-handler path trim-v after debug dispatch]]))

(def call-chan (atom nil))

(defn post! [db msg]
  (post-message! (get db :port) (clj->js msg)))

(defn listen! [res-chan]
  (go-loop []
    (when-let [msg (<! res-chan)]
      (log "BG msg: " msg)
      (condp = (.-restype msg)
        "ACK" (let [init-url (oget msg "init-url")
                    init-typ (oget msg "typ")]
                (if-not (nil? init-url) 
                  (do 
                    (dispatch [:init-box init-typ init-url]))))
        "distinct-domains" (dispatch [:handle-counts (js->clj (.-data msg))])
        "distinct-locations" (dispatch [:handle-locations (js->clj (.-data msg))])
        "location-counts" (dispatch [:handle-location-counts (js->clj (.-data msg))])
        "all-for-domain" (let [res (js->clj msg)
                               typ (get res "typ")
                               data (get res "data")]
                           (condp = typ
                             "site" (dispatch [:handle-site-info data typ])
                             "domain" (dispatch [:handle-domain-info data (oget res "domain")])))
        "all-for-site" (dispatch [:handle-site-info (js->clj (.-data msg))])
        "all-for-tabUrlIndex" (dispatch [:handle-site-info 
                                         {:data (js->clj (.-data msg))
                                          :domain (.-value msg)}])
        (log "unhandled: " msg))
    (recur))))

(defn connect-to-background-page! []
  (let [background-port (runtime/connect)]
    ;(post! background-port "hello from map!")
    ;(reset! background-channel background-port)
    (listen! background-port)
    background-port))

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
                (let [url (.. (Uri. (.-url n)) (getDomain))
                      clean-url (string/replace url "www." "")]
                  (if (or
                        (contains? @test-set clean-url)
                        (not (re-find #"\." url)))
                    p
                    (do 
                      (swap! test-set conj clean-url)
                      (conj p clean-url))))) [] res)))))

(register-handler
  :get-domain-info
  (fn [db [_ domain]] 
    (log "getting stuff for" domain)
    (post! db {:reqtype "all-for-domain" :req domain :typ "domain"})
    (assoc db :loading-domain-info? true)))

(register-handler
  :handle-domain-info
  (fn [db [_ res domain]]
    (assoc db :domain-info {:domain domain
                            :data res}
              :loading-domain-info? false)))

(register-handler
  :handle-site-info
  (fn [db [_ res]]
    (log "received site info: " res)
    (assoc db :site-info res
              :loading-site-info? false)))

(register-handler
  :display-info-box
  (fn [db [_ yo]]
    (assoc db :display-info-box? yo)))

(register-handler
  :get-site-info
  (fn [db [_ domain]]
    (post! db {:reqtype "site-info" :req domain :typ "site"})
    (assoc db :loading-site-info? true)))

(register-handler
  :get-my-location
  (fn [db _] 
    (let [local-storage (storage/get-local)]
      (.. (oget js/chrome "storage" "local") (get #(dispatch [:handle-location %]))))
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
    (post! db {:reqtype "get-locations"})
    (assoc db :loading-locations? true)))

(register-handler
  :get-location-counts
  (fn [db [c res]]
    (if (get db :location-counts) 
      (log "aber wir haben schon counts, ist das hier? " c)
      (post! db {:reqtype "get-location-counts"}))
    (assoc db :loading-location-counts? true)))

(register-handler
  :handle-location-counts
  (fn [db [_ res]]
    (assoc db :location-counts res :loading-location-counts? false)))

(register-handler
  :handle-locations
  (fn [db [_ res]]
    ;(dispatch [:get-location-counts res])
    (assoc db :distinct-locations res :loading-locations? false)))

(register-handler
  :get-counts
  (fn [db _] 
    (if (:has-loaded-domains? db)
      (do 
        (post! db {:reqtype "get-counts"})
        (assoc db :loading-domains? true))
      db)))

(register-handler
  :handle-counts
  (fn [db [_ res]]
    (assoc db :distinct-domains res :loading-domains? false :has-loaded-domains? true)))

(register-handler
   :initialise-db             ;; usage: (dispatch [:initialise-db])
   (fn [db [_ c r]]                   ;; Ignore both params (db and v). 
     (if-not (get db :initted)
       (do 
          (dispatch [:get-counts])
          (dispatch [:get-locations])
          (dispatch [:get-my-location])
          (dispatch [:get-location-counts])
          (dispatch [:get-history])
          (dispatch [:track-mouse])
         {:port (connect-to-background-page!)
          :initted true})
       (do 
         (post! db {:reqtype "close-chan"})
         (assoc db :port (connect-to-background-page!))))))

(register-handler
  :handle-mouse
  (fn [db [_ m]]
    (assoc db :mouse m)))

(register-handler :show-state (fn [db [_ v]] (assoc db :show-state v)))

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
  :view-mode 
  (fn [db [_ m]] 
    (log "setting view mode: " (get db :view-mode))
    (assoc db :view-mode m)))

(register-handler
  :show-site-info
  (fn [db [_ domain]]
    (dispatch [:get-site-info domain])
    (assoc db :view-mode "site"
              :display-info-box? true
              :loading-site-info? true)))

(register-handler
  :show-domain-info
  (fn [db [_ domain]]
    (dispatch [:get-domain-info domain])
    (assoc db :display-info-box? true
           :view-mode "domain"
           :loading-domain-info? true)))

(register-handler
  :init-box
  debug
  (fn [db [_ typ url]]
    (if (= typ "domain")
      (do (log "dispatching domain info") (dispatch [:show-domain-info url]))
      (do (log "dispatching site info") (dispatch [:show-site-info url])))
    db))

