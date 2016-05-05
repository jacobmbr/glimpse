(ns ^:figwheel-no-load thesis.figwheel
  (:require [figwheel.client :as figwheel]))

; -------------------------------------------------------------------------------------------------------------------
; has to be included before boot

(figwheel/start
  {:websocket-url "ws://localhost:6888/figwheel-ws"})
