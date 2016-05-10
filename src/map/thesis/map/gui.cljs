(ns thesis.map.gui
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop go]]
                   [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [cljs.core.async :refer [put!]]
            [clojure.string :refer [split]]
            [thesis.content-script.animation :as anim]
            [chromex.logging :refer-macros [log]]
            [domina.events :as evt]
            [cljs-idxdb.core :as idx]
            [thesis.map.subs]
            [thesis.map.handlers]
            [domina.core :refer [by-id value set-value! destroy! append! by-class]]))


(defn display-locations []
  (let [locations (subscribe [:distinct-locations])
        loading? (subscribe [:loading-locations?])]
    (fn [] 
      (if-not @loading? 
        [:div {:style {:position "absolute"
                       :top "100px"}} 
         (for [x @locations] ^{:key x} [:p (map #(subs % 0 6) (take 2 (split x #"\|")))])]))))

(defn display-domains []
  (let [domains (subscribe [:distinct-domains])
        loading? (subscribe [:loading-domains?])]
    (fn [] 
      (if-not @loading? 
        [:div (for [x @domains] ^{:key x} [:p x])]))))

(defn root []
  [:div
   [:h1 {:on-click #(dispatch [:get-counts])} "moinsen"]
   [display-domains] [display-locations]])

(defn init! [call response]
  (let [node (.. js/document (createElement "div"))
        el (.. js/document -body (appendChild node))
        div (set! (.-id el) "ext-map-div")]
    (dispatch-sync [:initialise-db call response])
    (dispatch [:get-counts])
    (dispatch [:get-locations])
  	(r/render [root] (by-id "ext-map-div"))))


