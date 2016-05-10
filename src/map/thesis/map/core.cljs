(ns thesis.map.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [thesis.map.gui :as gui]
            [cljs.core.async :refer [<! chan put!]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]))

; -- a message loop ---------------------------------------------------------------------------------------------------------
(def gui-chan (atom nil))
(def msg-to-gui (atom nil))
(def background-channel (atom nil))

(defn process-message! [message]
  (condp = (.-restype message)
    "ACK" (do (log "ACK from background") (gui/init! @gui-chan @msg-to-gui))
    "distinct-domains" (put! @msg-to-gui message)
    "distinct-locations" (put! @msg-to-gui message)
    "all-for-domain" (put! @msg-to-gui message)
    (log "map: got message:" message)))

(defn run-message-loop! [message-channel]
  (log "map: starting message loop...")
  (go-loop []
    (when-let [message (<! message-channel)]
      (process-message! message)
      (recur))
    (log "map: leaving message loop")))

(defn run-gui-loop! []
  (go-loop []
    (when-let [{:keys [reqtype req]} (<! @gui-chan)]
      (condp = reqtype
        "get-counts" (post-message! @background-channel (clj->js {:reqtype "get-counts" :req req}))
        "get-locations" (post-message! @background-channel (clj->js {:reqtype "get-locations" :req req}))
        "get-domain" (post-message! @background-channel (clj->js {:reqtype "get-domain" :req req}))
        (log (str reqtype))))
    (recur)))

(defn connect-to-background-page! []
  (let [background-port (runtime/connect)]
    ;(post-message! background-port "hello from map!")
    (reset! background-channel background-port)
    (run-message-loop! background-port)))

; -- main entry point -------------------------------------------------------------------------------------------------------

(defn init! []
  (log "map: init")
  (reset! gui-chan (chan))
  (reset! msg-to-gui (chan))
  (run-gui-loop!)
  (connect-to-background-page!))
