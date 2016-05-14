(ns thesis.content-script.core
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [thesis.content-script.draw :as draw :refer [draw-entity draw-text]]
            [devtools.core :as devtools]
            [thesis.dev]
            [cljs.core.async :refer [chan close! <! >! put!]]
            [chromex.logging :refer-macros [log]]
            [chromex.protocols :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]
            [re-frame.core :refer [register-handler path trim-v after debug dispatch]]
            [thesis.content-script.handlers]
            [thesis.content-script.canvas :as tc]
            [thesis.content-script.indicator :as indicator]
            [thesis.content-script.gui :as gui]))

; -- a message loop ---------------------------------------------------------------------------------------------------------
(def background-chan (atom nil))
(def count-chan (chan))
(def counts (atom nil))

(defn run-gui-loop! [msg-chan]
  (go-loop []
    (when-let [msg (<! msg-chan)]
      (log "gui loop" msg)
      (post-message! @background-chan (clj->js (assoc msg :reqtype "open-tab")))
      (recur))))

(defn process-message! [msg]
  (condp = (.-type msg)
    "init" (let [img (.-img msg)
                 tabdict (.-tabdict msg)
                 core-chan (chan)]
             ;(reset! gui-chan core-chan)
             (go 
               (if (nil? @counts)
                 (reset! counts (<! count-chan)))
                 (gui/init! img tabdict (.-url msg) @counts core-chan)
                 (run-gui-loop! core-chan)))
    "new-request" (indicator/add-domain (.-tabdict msg))
    "domains-info" (dispatch [:update-domain-info (.-res msg)])
    (if (= (.-restype msg) "distinct-domains") 
      (put! count-chan (.-data msg))
      (log msg))))

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
      (post-message! @background-chan (clj->js {:reqtype "ind-clicked!"}))
      (recur)))))

; -- a simple page analysis  ------------------------------------------------------------------------------------------------

(defn connect-to-background-page! []
  (let [background-port (runtime/connect)]
    (reset! background-chan background-port)
    (post-message! @background-chan (clj->js {:reqtype "get-counts"}))
    (run-message-loop! background-port)))

; -- main entry point -------------------------------------------------------------------------------------------------------

(defn init! []
  (log "CONTENT SCRIPT: init")
  (.. js/window (addEventListener "DOMContentLoaded" #(run-indicator-message-loop! (indicator/init!))))
  (connect-to-background-page!))
