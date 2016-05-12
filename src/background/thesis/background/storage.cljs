(ns thesis.background.storage
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! chan sub >! put!]]
            [clojure.string :refer [split-lines split join]]
            [clojure.set :refer [subset?]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.ext.extension :refer-macros [get-url]]
            [ajax.core :refer [GET]]
            [thesis.background.location :as location]
            ;[chromex.protocols :refer [get set]]
            [cljs-idxdb.core :as idx]))

(def db (atom nil))
(def dexie (atom nil))
(def psldb (atom nil))
(def tabdict (atom nil))
(declare null)

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
                       (idx/create-index store "locationIndex" "location" {:unique false})
                       (idx/create-index store "tabUrlIndex" "tabUrl" {:unique false})
                       (idx/create-index store "timestampIndex" "timestamp" {:unique false}))
                  (fn [res]
                     (reset! db res))))

(defn get-domain [host]
  (let [host-array (split host ".")
        l (count host-array)]
    (loop [i l]
      (if (contains? @psldb (join "." (take-last i host-array)))
          (join "." (take-last (+ i 1) host-array))
          (if (> i 0) (recur (- i 1)))))))

(defn store-request!
  [r domain loc tabUrl]
  (idx/add-item @db store-name
                {:hostname (.-url r)
                 :domain domain
                 :tabUrl (get-domain (.. (Uri. tabUrl) (getDomain)))
                 :location (if (nil? loc)
                             (do
                               (location/force-get-location!)
                               (str ""))
                             (do (str (.-lat loc) "|" (.-lon loc) "|" (.-acc loc))))
                 :timestamp (.-timeStamp r)}
                #()))

(defn get-and-store-psl!
  []
  (GET "assets/publicSuffixList.dat" {:handler (fn [e]
                                                 ;(log (str "Logged list of " (count (split-lines e)) " public suffixes"))
                                                 (reset! psldb (set (split-lines e))))}))

(defn process-request!
  [r loc tabUrl]
  (let [ts (.-timeStamp r)
        host (.. (Uri. (.-url r)) (getDomain))
        domain (get-domain host)
        tab-id (.-tabId r)]
    (if-not (or 
              (= tab-id -1) 
              (contains? (get @tabdict tab-id) domain))
      (do
       (swap! tabdict update-in [tab-id] #(set (conj (into [] %) domain)))
       (store-request! r domain loc tabUrl)))))

(defn get-domain-count [domain cb]
  (idx/get-by-index @db store-name "domainIndex" domain #(cb (clj->js {:type "count-res" :domain domain :count (count %)}))))

(defn get-all-for-domain [res-chan domain]
  (let [req (.. (idx/get-tx-store @db store-name)
                (index "domainIndex")
                (openCursor (.. js/IDBKeyRange (only domain)) "next"))]
      (set!
        (.-onsuccess req)
        (idx/make-rec-acc-fn [] req
                             #(put! res-chan {:restype "all-for-domain"
                                   :data %})))))

(defn get-distinct-index [idx kw callback]
  (let [req (.. (idx/get-tx-store @db store-name)
                (index idx)
                (openCursor null "nextunique"))]
      (set!
        (.-onsuccess req)
        (idx/make-rec-acc-fn [] req #(callback
                                       (doall
                                         (reduce
                                           (fn [p n] (conj p (get n kw)))
                                           []
                                           %)))))))

(defn get-distinct-index-with-counts [idx kw callback]
  (let [req (.. (idx/get-tx-store @db store-name)
                (index idx)
                (openCursor null "next"))]
      (set!
        (.-onsuccess req)
        (idx/make-rec-acc-fn [] req #(callback
                                       (doall
                                         (reduce
                                           (fn [p n] (if (= (get n kw) "")
                                                       (do p)
                                                       (do
                                                         (update-in p [(get n kw)] inc))))
                                           {} %)))))))


(defn get-location-counts [res-chan]
  (get-distinct-index-with-counts "locationIndex" :location
    #(let [x (reduce
               (fn [p n]
                 (let [arr (vec (map (fn [e] (subs e 0 7)) (split (first n) #"\|")))
                       kw (join "|" (subvec arr 0 2))]
                   ;(log "arr: " arr " count: " (last n))
                   (update p kw (fn [] (+ (last n) (get p kw))))))
               {} %)]
       (put! res-chan {:restype "location-counts"
                     :data x}))))

(defn get-distinct-locations [res-chan]
  (get-distinct-index "locationIndex" :location
    #(put! res-chan {:restype "distinct-locations"
                     :data %})))

(defn get-distinct-domains [res-chan]
  (get-distinct-index "domainIndex" :domain
    #(put! res-chan {:restype "distinct-domains"
                     :data %})))
