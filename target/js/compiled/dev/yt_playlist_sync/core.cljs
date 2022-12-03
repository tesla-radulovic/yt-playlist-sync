(ns yt-playlist-sync.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [clojure.string :as str]
            ))

(nodejs/enable-util-print!)

(defonce fs (nodejs/require "fs"))

(defonce util (nodejs/require "util"))

(defonce readFilePromise (.promisify util (.-readFile fs)))

(defonce speaker (nodejs/require "speaker"))

(defonce lame-decoder (.-Decoder (nodejs/require "@suldashi/lame")))

#_(defonce load-audio-promise (.promisify util load))

(defonce ytdl (nodejs/require "ytdl-core"))

(defonce ytpl (nodejs/require "ytpl"))

(defonce uuidv4 (nodejs/require "uuid"))

(defonce readline (nodejs/require "readline"))

(defonce rl (.createInterface readline js/process.stdin js/process.stdout))

(defonce readable-from (-> "stream"
                           (nodejs/require)
                           (.-Readable)
                           (.-from)))

(defn uuidjs [] (.v4 uuidv4))

(def library
  (try
    (-> js/JSON
        (.parse (.readFileSync fs "library/library.json" #js {"encoding" "utf8"}))
        (js->clj :keywordize-keys true))
      (catch js/Object e
        (do
          (.writeFile fs "library/library.json" "{ \"files\": []}" #(println %) )
          {:files []}))))

(println library)

(def spkr (speaker. #js { "channels" 2 "bitDepth" 16 "sampleRate" 48000 }))

(defonce decoder (lame-decoder.))

(let
    [file (.readFileSync fs "library/Bosanska Artiljerija.mp3")]
  (do
    (-> file
        (readable-from)
        (.pipe decoder))
    (.pipe decoder spkr)))
    

(defn -main []

  #_(let
      [decoder
       (-> #js {"output" "buffer"}
           (lame.)
           (.setFile "library/0x10c Soundtrack by C418.mp3"))]
    (-> decoder
        (.decode)
        (.then #(-> decoder
                    (.getBuffer)
                    
                    (.pipe spaker)))
        (.catch #(println "err:" %))))
    

    
  #_(.play player "library/0x10c Soundtrack by C418.mp3" #(println "player err" %))
  #_(.play player "library/Bosanska Artiljerija.mp3" #(println "player err" %))
  
  (println "Hello world!")

  #_(-> "http://www.youtube.com/watch?v=aqz-KE-bpKQ"
      (ytdl)
      (.pipe (.createWriteStream fs "video.mp4")))
  (.writeFile fs "test.txt" "test" #(println %)  ))

#_(go (println (<! library)))

#_(go (println (<! library)))


(println (js* "2 + 2"))

(defn add [urls]
  (if (not (empty? urls))
    (let
        [write-stream
         (.createWriteStream fs (str "library/" ((first urls) :uuid) ".mp3"))]                   
      (do
        (set! library
              (-> library
                  (assoc :files
                         (-> (library :files)
                             (conj (first urls)))))))
        (.on write-stream "finish" #(add (rest urls)))
        (-> ((first urls) :source)
            (ytdl #js {"filter" "audioonly" "highWaterMark" 32768})
            (.pipe write-stream)))))
        

(defn tramp [string]
  (let
      [args (str/split string #" ")]
    (do
      (case (first args)
        "library-add-playlist" (go
                                 (let [urls (map (fn [e] {:uuid (uuidjs) :source (.-shortUrl e) :title (.-title e)} )
                                                 (-> (second args)
                                                     (ytpl)
                                                     (<p!)
                                                     (.-items)))]
                                   (add urls)
                                   #_(-> ( (first urls) :source )
                                       (ytdl #js {"filter" "audioonly"})
                                       (.pipe (.createWriteStream fs (str "library/" ((first urls) :uuid) ".mp3")  )))
                                       
                                   ))
        "pause" (.unpipe decoder)
        "resume" (.pipe decoder spkr)
        "library-show" (println library)
        "library-save" (.writeFile fs "library/library.json"
                                   (.stringify js/JSON (clj->js library )) #(println %))
        )
      (.question rl "\n?" tramp))))

(.question rl "\n?" tramp)


;;
;;"PLt_D2S1_wYNc4coK5y4Nsg4ubwe8cgsnr"

;;( {:key {:title "Baka Mitai" :artist "idk" :album "Yakuza OST"}
;;    :metadata {:rating 200 :allusions ["dunno"] :sources ["yt" "soundcloud"] :covers [covers here]  }}   )

(set! *main-cli-fn* -main)

