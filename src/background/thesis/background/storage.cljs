(ns thesis.background.storage
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! chan sub]]
            [clojure.string :refer [split-lines split join]]
            [clojure.set :refer [subset?]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.ext.extension :refer-macros [get-url]]
            [ajax.core :refer [GET]]
            ;[chromex.protocols :refer [get set]]
            [cljs-idxdb.core :as idx]))

(def db (atom nil))
(def psldb (atom nil))
(def tabdict (atom nil))

(defn tabdict-remove-client [client]
  ;(log (str @tabdict))
  (swap! tabdict dissoc client))

(defn tabdict-add-client [client]
  (swap! tabdict assoc client #{}))

(defn get-tabdict [id]
  (get-in @tabdict [id]))

(def location (atom nil))

(def store-name "requests")

(defn setup-storage!
  []
  (idx/create-db "requestsDB" 1
                  #(let [store (idx/delete-and-create-store % store-name {:keyPath "timestamp"})]
                       (idx/create-index store "hostnameIndex" "hostname" {:unique false})
                       (idx/create-index store "domainIndex" "domain" {:unique false})
                       (idx/create-index store "timestampIndex" "timestamp" {:unique false}))
                  #(reset! db %)))

(defn get-domain
  [host]
  (let [host-array (split host ".")
        l (count host-array)]
    (loop [i l]
      (if (contains? @psldb (join "." (take-last i host-array)))
          (join "." (take-last (+ i 1) host-array))
          (if (> i 0) (recur (- i 1)))))))

(defn unique-in-n-minutes?
  [n]
)

(defn store-request!
  [r domain loc]
  (idx/add-item @db store-name
                {:hostname (.-url r)
                 :domain domain
                 :location (if (nil? loc)
                             (str "")
                             (str (.-lat loc) "|" (.-lon loc) "|" (.-acc loc)))
                 :timestamp (.-timeStamp r)}
                #()))

(defn get-and-store-psl!
  []
  (GET "assets/publicSuffixList.dat" {:handler (fn [e]
                                                 ;(log (str "Logged list of " (count (split-lines e)) " public suffixes"))
                                                 (reset! psldb (set (split-lines e))))}))

(defn process-request!
  [r loc]
  (let [ts (.-timeStamp r)
        host (.. (Uri. (.-url r)) (getDomain))
        domain (get-domain host)
        tab-id (.-tabId r)]
    (if-not (or (= tab-id -1) (contains? (get @tabdict tab-id) domain))
      (do 
       (swap! tabdict update-in [tab-id] conj domain)
       (store-request! r domain loc)))))

(defn get-domain-count [domain]
  (idx/get-by-index @db store-name "domainIndex" domain #(log (count %))))
