(ns thesis.map.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [thesis.content-script.animation :as anim]
            [chromex.logging :refer-macros [log]]
            [domina.events :as evt]
            [cljs-idxdb.core :as idx]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))

(def core-chan (atom nil))
(def counts (atom nil))

(defn get-counts [] (go (>! @core-chan {:reqtype "get-counts" :req "www.google.com"})))

(defn run-core-loop! []
  (go-loop []
    (when-let [msg (<! @core-chan)]
      (log (str msg)))
    (recur)))

(defn root []
  [:h1 "moinsen"])

(defn init! [c-chan]
  (let [node (.. js/document (createElement "div"))
        el (.. js/document -body (appendChild node))
        div (set! (.-id el) "ext-map-div")]
    (reset! core-chan c-chan)
    (run-core-loop!)
    (get-counts)
    (r/render [root] (by-id "ext-map-div"))))

