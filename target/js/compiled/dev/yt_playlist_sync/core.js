// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('yt_playlist_sync.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('cljs.core.async.interop');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof yt_playlist_sync.core.fs !== 'undefined'){
} else {
yt_playlist_sync.core.fs = cljs.nodejs.require.call(null,"fs");
}
if(typeof yt_playlist_sync.core.util !== 'undefined'){
} else {
yt_playlist_sync.core.util = cljs.nodejs.require.call(null,"util");
}
if(typeof yt_playlist_sync.core.readFilePromise !== 'undefined'){
} else {
yt_playlist_sync.core.readFilePromise = yt_playlist_sync.core.util.promisify(yt_playlist_sync.core.fs.readFile);
}
if(typeof yt_playlist_sync.core.speaker !== 'undefined'){
} else {
yt_playlist_sync.core.speaker = cljs.nodejs.require.call(null,"speaker");
}
if(typeof yt_playlist_sync.core.lame_decoder !== 'undefined'){
} else {
yt_playlist_sync.core.lame_decoder = cljs.nodejs.require.call(null,"@suldashi/lame").Decoder;
}
if(typeof yt_playlist_sync.core.ytdl !== 'undefined'){
} else {
yt_playlist_sync.core.ytdl = cljs.nodejs.require.call(null,"ytdl-core");
}
if(typeof yt_playlist_sync.core.ytpl !== 'undefined'){
} else {
yt_playlist_sync.core.ytpl = cljs.nodejs.require.call(null,"ytpl");
}
if(typeof yt_playlist_sync.core.uuidv4 !== 'undefined'){
} else {
yt_playlist_sync.core.uuidv4 = cljs.nodejs.require.call(null,"uuid");
}
if(typeof yt_playlist_sync.core.readline !== 'undefined'){
} else {
yt_playlist_sync.core.readline = cljs.nodejs.require.call(null,"readline");
}
if(typeof yt_playlist_sync.core.rl !== 'undefined'){
} else {
yt_playlist_sync.core.rl = yt_playlist_sync.core.readline.createInterface(process.stdin,process.stdout);
}
if(typeof yt_playlist_sync.core.readable_from !== 'undefined'){
} else {
yt_playlist_sync.core.readable_from = cljs.nodejs.require.call(null,"stream").Readable.from;
}
yt_playlist_sync.core.uuidjs = (function yt_playlist_sync$core$uuidjs(){
return yt_playlist_sync.core.uuidv4.v4();
});
yt_playlist_sync.core.library = (function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(yt_playlist_sync.core.fs.readFileSync("library/library.json",({"encoding": "utf8"}))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}catch (e34994){if((e34994 instanceof Object)){
var e = e34994;
yt_playlist_sync.core.fs.writeFile("library/library.json","{ \"files\": []}",((function (e){
return (function (p1__34993_SHARP_){
return cljs.core.println.call(null,p1__34993_SHARP_);
});})(e))
);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentVector.EMPTY], null);
} else {
throw e34994;

}
}})();
cljs.core.println.call(null,yt_playlist_sync.core.library);
yt_playlist_sync.core.spkr = (new yt_playlist_sync.core.speaker(({"channels": (2), "bitDepth": (16), "sampleRate": (48000)})));
if(typeof yt_playlist_sync.core.decoder !== 'undefined'){
} else {
yt_playlist_sync.core.decoder = (new yt_playlist_sync.core.lame_decoder());
}
var file_34995 = yt_playlist_sync.core.fs.readFileSync("library/Bosanska Artiljerija.mp3");
yt_playlist_sync.core.readable_from.call(null,file_34995).pipe(yt_playlist_sync.core.decoder);

yt_playlist_sync.core.decoder.pipe(yt_playlist_sync.core.spkr);
yt_playlist_sync.core._main = (function yt_playlist_sync$core$_main(){
cljs.core.println.call(null,"Hello world!");

return yt_playlist_sync.core.fs.writeFile("test.txt","test",(function (p1__34999_SHARP_){
return cljs.core.println.call(null,p1__34999_SHARP_);
}));
});
cljs.core.println.call(null,2 + 2);
yt_playlist_sync.core.add = (function yt_playlist_sync$core$add(urls){
if(!(cljs.core.empty_QMARK_.call(null,urls))){
var write_stream = yt_playlist_sync.core.fs.createWriteStream(["library/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,urls).call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719))),".mp3"].join(''));
yt_playlist_sync.core.library = cljs.core.assoc.call(null,yt_playlist_sync.core.library,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.conj.call(null,yt_playlist_sync.core.library.call(null,new cljs.core.Keyword(null,"files","files",-472457450)),cljs.core.first.call(null,urls)));

write_stream.on("finish",((function (write_stream){
return (function (){
return yt_playlist_sync.core.add.call(null,cljs.core.rest.call(null,urls));
});})(write_stream))
);

return yt_playlist_sync.core.ytdl.call(null,cljs.core.first.call(null,urls).call(null,new cljs.core.Keyword(null,"source","source",-433931539)),({"filter": "audioonly", "highWaterMark": (32768)})).pipe(write_stream);
} else {
return null;
}
});
yt_playlist_sync.core.tramp = (function yt_playlist_sync$core$tramp(string){
var args = clojure.string.split.call(null,string,/ /);
var G__35001_35035 = cljs.core.first.call(null,args);
switch (G__35001_35035) {
case "library-add-playlist":
var c__26439__auto___35037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___35037,G__35001_35035,args){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___35037,G__35001_35035,args){
return (function (state_35022){
var state_val_35023 = (state_35022[(1)]);
if((state_val_35023 === (1))){
var inst_35002 = (function (){return ((function (state_val_35023,c__26439__auto___35037,G__35001_35035,args){
return (function (e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),yt_playlist_sync.core.uuidjs.call(null),new cljs.core.Keyword(null,"source","source",-433931539),e.shortUrl,new cljs.core.Keyword(null,"title","title",636505583),e.title], null);
});
;})(state_val_35023,c__26439__auto___35037,G__35001_35035,args))
})();
var inst_35003 = cljs.core.second.call(null,args);
var inst_35004 = yt_playlist_sync.core.ytpl.call(null,inst_35003);
var inst_35005 = cljs.core.async.interop.p__GT_c.call(null,inst_35004);
var state_35022__$1 = (function (){var statearr_35024 = state_35022;
(statearr_35024[(7)] = inst_35002);

return statearr_35024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35022__$1,(2),inst_35005);
} else {
if((state_val_35023 === (2))){
var inst_35007 = (state_35022[(8)]);
var inst_35007__$1 = (state_35022[(2)]);
var inst_35008 = (inst_35007__$1 instanceof cljs.core.ExceptionInfo);
var inst_35009 = cljs.core.ex_data.call(null,inst_35007__$1);
var inst_35010 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35009);
var inst_35011 = cljs.core._EQ_.call(null,inst_35010,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_35012 = ((inst_35008) && (inst_35011));
var state_35022__$1 = (function (){var statearr_35025 = state_35022;
(statearr_35025[(8)] = inst_35007__$1);

return statearr_35025;
})();
if(cljs.core.truth_(inst_35012)){
var statearr_35026_35038 = state_35022__$1;
(statearr_35026_35038[(1)] = (3));

} else {
var statearr_35027_35039 = state_35022__$1;
(statearr_35027_35039[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (3))){
var inst_35007 = (state_35022[(8)]);
var inst_35014 = (function(){throw inst_35007})();
var state_35022__$1 = state_35022;
var statearr_35028_35040 = state_35022__$1;
(statearr_35028_35040[(2)] = inst_35014);

(statearr_35028_35040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (4))){
var inst_35007 = (state_35022[(8)]);
var state_35022__$1 = state_35022;
var statearr_35029_35041 = state_35022__$1;
(statearr_35029_35041[(2)] = inst_35007);

(statearr_35029_35041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (5))){
var inst_35002 = (state_35022[(7)]);
var inst_35017 = (state_35022[(2)]);
var inst_35018 = inst_35017.items;
var inst_35019 = cljs.core.map.call(null,inst_35002,inst_35018);
var inst_35020 = yt_playlist_sync.core.add.call(null,inst_35019);
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35022__$1,inst_35020);
} else {
return null;
}
}
}
}
}
});})(c__26439__auto___35037,G__35001_35035,args))
;
return ((function (switch__26314__auto__,c__26439__auto___35037,G__35001_35035,args){
return (function() {
var yt_playlist_sync$core$tramp_$_state_machine__26315__auto__ = null;
var yt_playlist_sync$core$tramp_$_state_machine__26315__auto____0 = (function (){
var statearr_35030 = [null,null,null,null,null,null,null,null,null];
(statearr_35030[(0)] = yt_playlist_sync$core$tramp_$_state_machine__26315__auto__);

(statearr_35030[(1)] = (1));

return statearr_35030;
});
var yt_playlist_sync$core$tramp_$_state_machine__26315__auto____1 = (function (state_35022){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_35022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e35031){var ex__26318__auto__ = e35031;
var statearr_35032_35042 = state_35022;
(statearr_35032_35042[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_35022[(4)]))){
var statearr_35033_35043 = state_35022;
(statearr_35033_35043[(1)] = cljs.core.first.call(null,(state_35022[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35044 = state_35022;
state_35022 = G__35044;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
yt_playlist_sync$core$tramp_$_state_machine__26315__auto__ = function(state_35022){
switch(arguments.length){
case 0:
return yt_playlist_sync$core$tramp_$_state_machine__26315__auto____0.call(this);
case 1:
return yt_playlist_sync$core$tramp_$_state_machine__26315__auto____1.call(this,state_35022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
yt_playlist_sync$core$tramp_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = yt_playlist_sync$core$tramp_$_state_machine__26315__auto____0;
yt_playlist_sync$core$tramp_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = yt_playlist_sync$core$tramp_$_state_machine__26315__auto____1;
return yt_playlist_sync$core$tramp_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___35037,G__35001_35035,args))
})();
var state__26441__auto__ = (function (){var statearr_35034 = f__26440__auto__.call(null);
(statearr_35034[(6)] = c__26439__auto___35037);

return statearr_35034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___35037,G__35001_35035,args))
);


break;
case "pause":
yt_playlist_sync.core.decoder.unpipe();

break;
case "resume":
yt_playlist_sync.core.decoder.pipe(yt_playlist_sync.core.spkr);

break;
case "library-show":
cljs.core.println.call(null,yt_playlist_sync.core.library);

break;
case "library-save":
yt_playlist_sync.core.fs.writeFile("library/library.json",JSON.stringify(cljs.core.clj__GT_js.call(null,yt_playlist_sync.core.library)),((function (G__35001_35035,args){
return (function (p1__35000_SHARP_){
return cljs.core.println.call(null,p1__35000_SHARP_);
});})(G__35001_35035,args))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35001_35035)].join('')));

}

return yt_playlist_sync.core.rl.question("\n?",yt_playlist_sync.core.tramp);
});
yt_playlist_sync.core.rl.question("\n?",yt_playlist_sync.core.tramp);
cljs.core._STAR_main_cli_fn_STAR_ = yt_playlist_sync.core._main;

//# sourceMappingURL=core.js.map?rel=1662169265971
