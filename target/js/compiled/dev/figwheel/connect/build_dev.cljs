(ns figwheel.connect.build-dev (:require [figwheel.client] [yt-playlist-sync.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

