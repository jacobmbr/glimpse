(ns thesis.background.storage
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! chan]]
            [clojure.string :refer [split-lines split join]]
            [clojure.set :refer [subset?]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.ext.extension :refer-macros [get-url]]
            [ajax.core :refer [GET]]
            ;[chromex.protocols :refer [get set]]
            [cljs-idxdb.core :as idx]))

(def db (atom nil))
(def psldb (atom nil))

(def location (atom nil))

(def store-name "requests")

(defn setup-storage!
  []
  (idx/create-db "requestsDB1" 1
                  #(-> (idx/delete-and-create-store % store-name {:keyPath "timestamp"})
                       (idx/create-index "hostnameIndex" "hostname" {:unique false}))
                  #(reset! db %)))

(defn get-domain
  [host]
  (let [host-array (split host ".")
        l (count host-array)]
    (loop [i 0]
      (if (contains? @psldb (join "." (subvec host-array i l)))
          (log (join "." (subvec host-array (- i 1) l)))
          (if (< i l) (recur (+ i 1)))))
      ))
  ;(log (contains? @psldb "ad"))))

(defn process-request!
  [r]
  (let [ts (.-timeStamp r)
        host (.. (Uri. (.-url r)) (getDomain))
        domain (get-domain host)] 
    ))

(defn store-request!
  [r]
  (idx/add-item @db store-name
                {:hostname (.-url r)
                 :timestamp (.-timeStamp r)}
                #(log "added")))

(defn get-and-store-psl!
  []
  (GET "assets/publicSuffixList.dat" {:handler (fn [e] 
                                                 (log (str "Logged list of " (count (split-lines e)) " public suffixes"))
                                                 (reset! psldb (set (split-lines e))))}))
