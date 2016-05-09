(ns thesis.map.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [put!]]
            [thesis.content-script.animation :as anim]
            [chromex.logging :refer-macros [log]]
            [domina.events :as evt]
            [cljs-idxdb.core :as idx]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))

(def app-db (r/atom {}))
(def call-chan (atom nil))
(def response-chan (atom nil))
(def counts (r/cursor @app-db [:counts]))

(defn get-counts [] (put! @call-chan {:reqtype "get-counts"}))
(defn get-domain [domain] (put! @call-chan {:reqtype "get-domain" :req domain}))
(defn get-locations [] (put! @call-chan {:reqtype "get-locations"}))

(defn listen! []
  (go-loop []
    (when-let [msg (<! @response-chan)]
      (log msg))
    (recur)))

(defn root []
  [:h1 {:on-click #(get-counts)} "moinsen"])

(defn init! [call response]
  (let [node (.. js/document (createElement "div"))
        el (.. js/document -body (appendChild node))
        div (set! (.-id el) "ext-map-div")]
    (reset! call-chan call)
    (reset! response-chan response)
    (listen!)
    (get-counts)
    (get-locations)
    (get-domain "google.com")
    (r/render [root] (by-id "ext-map-div"))))

