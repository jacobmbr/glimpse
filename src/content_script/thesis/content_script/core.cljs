(ns thesis.content-script.core
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [thesis.content-script.draw :as draw :refer [draw-entity draw-text]]
            [devtools.core :as devtools]
            [thesis.dev]
            [cljs.core.async :refer [chan close! <! >!]]
            [chromex.logging :refer-macros [log]]
            [chromex.protocols :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]
            [thesis.content-script.canvas :as tc]))

; -- a message loop ---------------------------------------------------------------------------------------------------------

(defn process-message! [message]
  (if (= message "launch")
    (tc/init!)
    (log "CONTENT SCRIPT: got message:" message)))

(defn run-message-loop! [message-channel]
  (log "CONTENT SCRIPT: starting message loop...")
  (go-loop []
    (when-let [message (<! message-channel)]
      (process-message! message)
      (recur))
    (log "CONTENT SCRIPT: leaving message loop")))

; -- a simple page analysis  ------------------------------------------------------------------------------------------------

(defn connect-to-background-page! []
  (let [background-port (runtime/connect)]
    (post-message! background-port "hello from CONTENT SCRIPT!")
    (run-message-loop! background-port)))

; -- main entry point -------------------------------------------------------------------------------------------------------

(defn init! []
  (log "CONTENT SCRIPT: init")
  (connect-to-background-page!))
