(ns thesis.map.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [thesis.map.gui :as gui]
            [cljs.core.async :refer [<! chan]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]))

; -- a message loop ---------------------------------------------------------------------------------------------------------
(def gui-chan (atom nil))
(def background-channel (atom nil))

(defn process-message! [message]
  (condp = message
    "ACK" (gui/init! @gui-chan)
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
    (when-let [msg (<! @gui-chan)]
      (if (= "get-counts" msg) 
        (post-message! @background-channel "get-counts")
        (log msg)))
    (recur)))

(defn connect-to-background-page! []
  (let [background-port (runtime/connect)]
    (post-message! background-port "hello from map!")
    (reset! background-channel background-port)
    (run-message-loop! background-port)))

; -- main entry point -------------------------------------------------------------------------------------------------------

(defn init! []
  (log "map: init")
  (reset! gui-chan (chan))
  (run-gui-loop!)
  (connect-to-background-page!))
