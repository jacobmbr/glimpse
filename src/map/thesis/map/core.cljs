(ns thesis.map.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [thesis.map.gui :as gui]
            [thesis.map.handlers]
            [chromex.support :refer-macros [oget]]
            [thesis.map.subs]
            [devtools.core :as devtools]
            [dirac.runtime :as dirac]
            [cljs.core.async :refer [<! chan put! close!]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]))

; -- a message loop ---------------------------------------------------------------------------------------------------------

(def gui-chan (atom nil))
(def msg-to-gui (atom nil))
(def background-channel (atom nil))
(dirac/install!)

;(defn process-message! [message]
  ;(condp = (oget message "restype")
    ;"ACK" (do (log "got ACK!!!") (gui/init! @gui-chan @msg-to-gui (oget message "typ") (oget message "init-url")))
    ;"distinct-domains" (put! @msg-to-gui message)
    ;"distinct-locations" (put! @msg-to-gui message)
    ;"location-counts" (put! @msg-to-gui message)
    ;"all-for-domain" (put! @msg-to-gui message)
    ;"all-for-tabUrlIndex" (put! @msg-to-gui message)
    ;(if-not (= "new-request" (oget message "type")) (log "map: got message:" message))))

;(defn run-message-loop! [message-channel]
  ;(log "map: starting message loop...")
  ;(go-loop []
    ;(when-let [message (<! message-channel)]
      ;(process-message! message)
      ;(recur))
    ;(log "map: leaving message loop")))

;(defn run-gui-loop! []
  ;(go-loop []
    ;(when-let [msg (<! @gui-chan)]
      ;(do
        ;(post-message! @background-channel (clj->js msg))
        ;(log (get msg :reqtype)))
    ;(recur))))


;(defn connect-to-background-page! []
  ;(let [background-port (runtime/connect)]
    ;;(post-message! background-port "hello from map!")
    ;(reset! background-channel background-port)
    ;(run-message-loop! background-port)))

; -- main entry point -------------------------------------------------------------------------------------------------------

(defn init! []
  (log "map: init")
  (gui/init!))
  ;(run-gui-loop!)
  ;(connect-to-background-page!)
