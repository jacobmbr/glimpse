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
            [thesis.content-script.canvas :as tc]
            [thesis.content-script.indicator :as indicator]
            [thesis.content-script.gui :as gui]))

; -- a message loop ---------------------------------------------------------------------------------------------------------
(def background-chan (atom nil))

(defn process-message! [msg]
  (condp = (.-type msg)
    "init" (let [img (.-img msg)
                 tabdict (.-tabdict msg)]
             (log "init!")
             (gui/init! img tabdict))
    "new-request" (indicator/add-domain (.-tabdict msg))
    (log msg)))

(defn run-message-loop! [message-channel]
  (log "CONTENT SCRIPT: starting message loop...")
  (go-loop []
    (when-let [message (<! message-channel)]
      (process-message! message)
      (recur))
    (log "CONTENT SCRIPT: leaving message loop")))

(defn run-indicator-message-loop! [ind-chan]
  (go (loop []
    (when-let [msg (<! ind-chan)]
      ;(log msg)
      (post-message! @background-chan (clj->js {:reqtype "ind-clicked!"}))
      (recur)))))

; -- a simple page analysis  ------------------------------------------------------------------------------------------------

(defn connect-to-background-page! []
  (let [background-port (runtime/connect)]
    (post-message! background-port "hello from CONTENT SCRIPT!")
    (reset! background-chan background-port)
    (run-message-loop! background-port)))

; -- main entry point -------------------------------------------------------------------------------------------------------

(defn init! []
  (log "CONTENT SCRIPT: init")
  (.. js/window (addEventListener "DOMContentLoaded" #(run-indicator-message-loop! (indicator/init!))))
  (connect-to-background-page!))
