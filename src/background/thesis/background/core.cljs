(ns thesis.background.core
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [goog.string :as gstring]
            [goog.string.format]
            [cljs.core.async :refer [<! chan close!]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.support :refer-macros [oget]]
            [chromex.chrome-event-channel :refer [make-chrome-event-channel]]
            [chromex.protocols :refer [post-message! get-sender]]
            [chromex.ext.tabs :as tabs]
            [chromex.ext.runtime :as runtime]
            [chromex.ext.web-request :as web-request]
            [chromex.ext.browser-action :as browser-action]
            [chromex.ext.storage :as storage]
            [chromex.ext.extension :as ext]
            [dirac.runtime :as dirac]
            [thesis.background.storage :as t-storage :refer [process-request! setup-storage! get-and-store-psl! get-domain-count]]
            [thesis.background.location :as location]))

(enable-console-print!)
(def clients (atom []))
(def location (atom nil))
(def initialise-tab (atom nil))
(def tabs (atom #{}))
(declare tell-client-about-click!)
(declare message-to-client)
(dirac/install!)


; -- clients manipulation ---------------------------------------------------------------------------------------------------

(defn remove-client-by-id! [tabId]
  (log "kicking out " tabId)
  (t-storage/tabdict-remove-client tabId)
  (let [remove-item (fn [coll item] (remove #(= (oget (get-sender %) "tab" "id") tabId) coll))]
    (swap! clients remove-item tabId)))

(defn add-client! [client]
  (log "BACKGROUND: client connected" (get-sender client))
  (t-storage/tabdict-add-client (.. (get-sender client) -tab -id))
  (swap! clients conj client))

(defn remove-client! [client]
  (let [tabId (.. (get-sender client) -tab -id)]
    (t-storage/tabdict-remove-client tabId)
    (let [remove-item (fn [coll item] (remove #(= tabId (oget (get-sender %) "tab" "id")) coll))]
      (swap! clients remove-item client))
    (log "Client " tabId "disconnected, remaining: " (doall (map #(oget (get-sender %) "tab" "id") @clients)))))

; -- client event loop ------------------------------------------------------------------------------------------------------

(defn run-client-message-loop! [client]
  (let [res-chan (chan)
        tabId (oget (get-sender client) "tab" "id")
        url (oget (get-sender client) "tab" "url")
        domain (.. (Uri. url) (getDomain))]
    ;(log url)
    (go (loop []
      (when-let [message (<! client)]
        (log (str "Tab " tabId ": " (oget message "reqtype")))
        (condp = (oget message "reqtype")
          "ind-clicked!" (tell-client-about-click! tabId domain)
          "get-counts" (t-storage/get-distinct-domains res-chan)
          "get-site-counts" (t-storage/get-distinct-sites res-chan)
          "get-locations" (t-storage/get-distinct-locations res-chan)
          "get-location-counts" (t-storage/get-location-counts res-chan)
          "site-info" (t-storage/get-site-info res-chan (oget message "req"))
          "all-for-domain" (do (t-storage/get-all-for-domain res-chan (oget message "req") (oget message "typ")))
          "close-chan" (log message) ;close! res-chan)
          "open-tab" (let [target-url (oget message "domain")
                           typ (oget message "typ")]
                       (log typ target-url)
                       (.. (oget js/chrome "tabs") 
                           (create #js {"url" (.. (oget js/chrome "extension") (getURL "map.html"))} 
                                   #(reset! initialise-tab {:typ typ :url target-url :location @location}))))
          (log "unhandled!: " message))
          (recur))
        (do (close! res-chan) (remove-client! client))))
      (go (loop []
        (when-let [msg (<! res-chan)]
          (message-to-client tabId (clj->js msg))
          (recur))
        (log "res chan closed for " url)))))

; -- event handlers ---------------------------------------------------------------------------------------------------------

(defn handle-client-connection! [client]
  ;(if-not (contains? @tabs (oget (get-sender client) "tab" "id"))
    (do 
      (log "Handle client connection: " client)
      (add-client! client)
      (message-to-client (oget (get-sender client) "tab" "id") #js {"restype" "ACK" 
                                                                    "location" @location
                                                                    "init-url" (get @initialise-tab :url) 
                                                                    "typ" (get @initialise-tab :typ)})
      (run-client-message-loop! client)))

(defn tell-clients-about-new-tab! [tab]
  (doseq [client @clients]
    ;(post-message! client "a new tab was created")
    ))

(defn message-to-client [tabId msg]
  (doseq [client @clients]
    (if (= tabId (oget (get-sender client) "tab" "id"))
      (do (post-message! client (clj->js msg))))))
  

(defn tell-client-about-click! [id url]
  (.. (oget js/chrome "tabs") (captureVisibleTab
                        #js {"quality" 50}
                        #(message-to-client id (clj->js {:type "init" 
                                                         :id id 
                                                         :img % 
                                                         :tabdict (t-storage/get-tabdict id) 
                                                         :url url})))))

(defn tell-client-about-request! [tabId tabUrl r]
  (message-to-client tabId (clj->js {:type "new-request" :tabdict (t-storage/get-tabdict tabId)})))

(defn handle-request [request]
  (let [req (first request)
        url (oget req "url")
        tabId (oget req "tabId")]
    (if (contains? @tabs tabId)
      (.. 
        (oget js/chrome "tabs") 
        (get tabId #(do
                      (let [tabUrl (oget % "url")]
                        (if-not (or 
                                  (= (subs tabUrl 0 19) "chrome-extension://")
                                  (= (subs tabUrl 0 9) "chrome://"))
                          (do
                            (tell-client-about-request! tabId tabUrl req)
                            (process-request! req @location tabUrl))))))))))

(defn handle-tab-closed [tabId]
  (swap! tabs disj tabId))

(defn handle-tab-created [tab]
  (swap! tabs conj (oget tab "id")))
; -- main event loop --------------------------------------------------------------------------------------------------------

(defn process-chrome-event [event-num event]
  (let [[event-id event-args] event]
    ;(log (gstring/format "BACKGROUND: got chrome event (%05d)" event-num) (str event-id))
    (case event-id
      ::browser-action/on-clicked (do
                                    (tell-client-about-click! (oget (first event-args) "id") "huhu.com")); TODO FIX
      ::storage/on-changed (.. (oget js/chrome "storage" "local") (get #(reset! location %)))
      ::web-request/on-before-request (handle-request event-args)
      ::runtime/on-connect (apply handle-client-connection! event-args)
      ::tabs/on-removed (handle-tab-closed (first event-args))
      ;::tabs/on-updated (if (= (oget (get event-args 1) "status") "loading")
                          ;(remove-client! (first event-args)))
      ::tabs/on-created (handle-tab-created (first event-args))
      ::tabs/on-replaced (do (handle-tab-created #js {"id" (first event-args)}) 
                             (handle-tab-closed (peek event-args)))
      ;::tabs/on-updated (log (first event-args) (oget (peek event-args) "id"))
      nil)))

(defn run-chrome-event-loop! [chrome-event-channel]
  (log "BACKGROUND: starting main event loop...")
  (go-loop [event-num 1]
    (when-let [event (<! chrome-event-channel)]
      (process-chrome-event event-num event)
      (recur (inc event-num)))
    (log "BACKGROUND: leaving main event loop")))

(defn boot-chrome-event-loop! []
  (let [chrome-event-channel (make-chrome-event-channel (chan))]
    (tabs/tap-all-events chrome-event-channel)
    (runtime/tap-all-events chrome-event-channel)
    (storage/tap-all-events chrome-event-channel)
    (browser-action/tap-on-clicked-events chrome-event-channel)
    (web-request/tap-on-before-request-events chrome-event-channel (clj->js {:urls ["http://*/*", "https://*/*"]}))
    (web-request/tap-on-response-started-events chrome-event-channel (clj->js {:urls ["http://*/*", "https://*/*"]}))
    (run-chrome-event-loop! chrome-event-channel)))

; -- main entry point -------------------------------------------------------------------------------------------------------

(defn init! []
  (log "BACKGROUND: init")
  (location/watch-location!)
  (setup-storage!)
  (get-and-store-psl!)
  (boot-chrome-event-loop!))
