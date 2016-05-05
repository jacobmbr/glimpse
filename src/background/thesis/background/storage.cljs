(ns thesis.background.storage
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! chan]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols :refer [get set]]
            [cljs-idxdb.core :as idx]))

(def db (atom nil))
(def location (atom nil))

(def store-name "requests")

(defn setup-storage!
  []
  (idx/create-db "requestsDB1" 1
                  #(-> (idx/delete-and-create-store % store-name {:keyPath "timestamp"})
                       (idx/create-index "hostnameIndex" "hostname" {:unique false}))
                  #(reset! db %)))

(defn store-request!
  [r]
  (idx/add-item @db store-name
                {:hostname (.-url r)
                 :timestamp (.-timeStamp r)}))

