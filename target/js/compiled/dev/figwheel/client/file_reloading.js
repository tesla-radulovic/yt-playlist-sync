// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3920__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3920__auto__){
return or__3920__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3920__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
var or__3920__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3920__auto____$1)){
return or__3920__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31157_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31157_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31158 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31159 = null;
var count__31160 = (0);
var i__31161 = (0);
while(true){
if((i__31161 < count__31160)){
var n = cljs.core._nth.call(null,chunk__31159,i__31161);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31162 = seq__31158;
var G__31163 = chunk__31159;
var G__31164 = count__31160;
var G__31165 = (i__31161 + (1));
seq__31158 = G__31162;
chunk__31159 = G__31163;
count__31160 = G__31164;
i__31161 = G__31165;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31158);
if(temp__5720__auto__){
var seq__31158__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31158__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__31158__$1);
var G__31166 = cljs.core.chunk_rest.call(null,seq__31158__$1);
var G__31167 = c__4317__auto__;
var G__31168 = cljs.core.count.call(null,c__4317__auto__);
var G__31169 = (0);
seq__31158 = G__31166;
chunk__31159 = G__31167;
count__31160 = G__31168;
i__31161 = G__31169;
continue;
} else {
var n = cljs.core.first.call(null,seq__31158__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31170 = cljs.core.next.call(null,seq__31158__$1);
var G__31171 = null;
var G__31172 = (0);
var G__31173 = (0);
seq__31158 = G__31170;
chunk__31159 = G__31171;
count__31160 = G__31172;
i__31161 = G__31173;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31183_31191 = cljs.core.seq.call(null,deps);
var chunk__31184_31192 = null;
var count__31185_31193 = (0);
var i__31186_31194 = (0);
while(true){
if((i__31186_31194 < count__31185_31193)){
var dep_31195 = cljs.core._nth.call(null,chunk__31184_31192,i__31186_31194);
topo_sort_helper_STAR_.call(null,dep_31195,(depth + (1)),state);


var G__31196 = seq__31183_31191;
var G__31197 = chunk__31184_31192;
var G__31198 = count__31185_31193;
var G__31199 = (i__31186_31194 + (1));
seq__31183_31191 = G__31196;
chunk__31184_31192 = G__31197;
count__31185_31193 = G__31198;
i__31186_31194 = G__31199;
continue;
} else {
var temp__5720__auto___31200 = cljs.core.seq.call(null,seq__31183_31191);
if(temp__5720__auto___31200){
var seq__31183_31201__$1 = temp__5720__auto___31200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31183_31201__$1)){
var c__4317__auto___31202 = cljs.core.chunk_first.call(null,seq__31183_31201__$1);
var G__31203 = cljs.core.chunk_rest.call(null,seq__31183_31201__$1);
var G__31204 = c__4317__auto___31202;
var G__31205 = cljs.core.count.call(null,c__4317__auto___31202);
var G__31206 = (0);
seq__31183_31191 = G__31203;
chunk__31184_31192 = G__31204;
count__31185_31193 = G__31205;
i__31186_31194 = G__31206;
continue;
} else {
var dep_31207 = cljs.core.first.call(null,seq__31183_31201__$1);
topo_sort_helper_STAR_.call(null,dep_31207,(depth + (1)),state);


var G__31208 = cljs.core.next.call(null,seq__31183_31201__$1);
var G__31209 = null;
var G__31210 = (0);
var G__31211 = (0);
seq__31183_31191 = G__31208;
chunk__31184_31192 = G__31209;
count__31185_31193 = G__31210;
i__31186_31194 = G__31211;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31187){
var vec__31188 = p__31187;
var seq__31189 = cljs.core.seq.call(null,vec__31188);
var first__31190 = cljs.core.first.call(null,seq__31189);
var seq__31189__$1 = cljs.core.next.call(null,seq__31189);
var x = first__31190;
var xs = seq__31189__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31188,seq__31189,first__31190,seq__31189__$1,x,xs,get_deps__$1){
return (function (p1__31174_SHARP_){
return clojure.set.difference.call(null,p1__31174_SHARP_,x);
});})(vec__31188,seq__31189,first__31190,seq__31189__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31212 = cljs.core.seq.call(null,provides);
var chunk__31213 = null;
var count__31214 = (0);
var i__31215 = (0);
while(true){
if((i__31215 < count__31214)){
var prov = cljs.core._nth.call(null,chunk__31213,i__31215);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31216_31224 = cljs.core.seq.call(null,requires);
var chunk__31217_31225 = null;
var count__31218_31226 = (0);
var i__31219_31227 = (0);
while(true){
if((i__31219_31227 < count__31218_31226)){
var req_31228 = cljs.core._nth.call(null,chunk__31217_31225,i__31219_31227);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31228,prov);


var G__31229 = seq__31216_31224;
var G__31230 = chunk__31217_31225;
var G__31231 = count__31218_31226;
var G__31232 = (i__31219_31227 + (1));
seq__31216_31224 = G__31229;
chunk__31217_31225 = G__31230;
count__31218_31226 = G__31231;
i__31219_31227 = G__31232;
continue;
} else {
var temp__5720__auto___31233 = cljs.core.seq.call(null,seq__31216_31224);
if(temp__5720__auto___31233){
var seq__31216_31234__$1 = temp__5720__auto___31233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31216_31234__$1)){
var c__4317__auto___31235 = cljs.core.chunk_first.call(null,seq__31216_31234__$1);
var G__31236 = cljs.core.chunk_rest.call(null,seq__31216_31234__$1);
var G__31237 = c__4317__auto___31235;
var G__31238 = cljs.core.count.call(null,c__4317__auto___31235);
var G__31239 = (0);
seq__31216_31224 = G__31236;
chunk__31217_31225 = G__31237;
count__31218_31226 = G__31238;
i__31219_31227 = G__31239;
continue;
} else {
var req_31240 = cljs.core.first.call(null,seq__31216_31234__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31240,prov);


var G__31241 = cljs.core.next.call(null,seq__31216_31234__$1);
var G__31242 = null;
var G__31243 = (0);
var G__31244 = (0);
seq__31216_31224 = G__31241;
chunk__31217_31225 = G__31242;
count__31218_31226 = G__31243;
i__31219_31227 = G__31244;
continue;
}
} else {
}
}
break;
}


var G__31245 = seq__31212;
var G__31246 = chunk__31213;
var G__31247 = count__31214;
var G__31248 = (i__31215 + (1));
seq__31212 = G__31245;
chunk__31213 = G__31246;
count__31214 = G__31247;
i__31215 = G__31248;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31212);
if(temp__5720__auto__){
var seq__31212__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31212__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__31212__$1);
var G__31249 = cljs.core.chunk_rest.call(null,seq__31212__$1);
var G__31250 = c__4317__auto__;
var G__31251 = cljs.core.count.call(null,c__4317__auto__);
var G__31252 = (0);
seq__31212 = G__31249;
chunk__31213 = G__31250;
count__31214 = G__31251;
i__31215 = G__31252;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31212__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31220_31253 = cljs.core.seq.call(null,requires);
var chunk__31221_31254 = null;
var count__31222_31255 = (0);
var i__31223_31256 = (0);
while(true){
if((i__31223_31256 < count__31222_31255)){
var req_31257 = cljs.core._nth.call(null,chunk__31221_31254,i__31223_31256);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31257,prov);


var G__31258 = seq__31220_31253;
var G__31259 = chunk__31221_31254;
var G__31260 = count__31222_31255;
var G__31261 = (i__31223_31256 + (1));
seq__31220_31253 = G__31258;
chunk__31221_31254 = G__31259;
count__31222_31255 = G__31260;
i__31223_31256 = G__31261;
continue;
} else {
var temp__5720__auto___31262__$1 = cljs.core.seq.call(null,seq__31220_31253);
if(temp__5720__auto___31262__$1){
var seq__31220_31263__$1 = temp__5720__auto___31262__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31220_31263__$1)){
var c__4317__auto___31264 = cljs.core.chunk_first.call(null,seq__31220_31263__$1);
var G__31265 = cljs.core.chunk_rest.call(null,seq__31220_31263__$1);
var G__31266 = c__4317__auto___31264;
var G__31267 = cljs.core.count.call(null,c__4317__auto___31264);
var G__31268 = (0);
seq__31220_31253 = G__31265;
chunk__31221_31254 = G__31266;
count__31222_31255 = G__31267;
i__31223_31256 = G__31268;
continue;
} else {
var req_31269 = cljs.core.first.call(null,seq__31220_31263__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31269,prov);


var G__31270 = cljs.core.next.call(null,seq__31220_31263__$1);
var G__31271 = null;
var G__31272 = (0);
var G__31273 = (0);
seq__31220_31253 = G__31270;
chunk__31221_31254 = G__31271;
count__31222_31255 = G__31272;
i__31223_31256 = G__31273;
continue;
}
} else {
}
}
break;
}


var G__31274 = cljs.core.next.call(null,seq__31212__$1);
var G__31275 = null;
var G__31276 = (0);
var G__31277 = (0);
seq__31212 = G__31274;
chunk__31213 = G__31275;
count__31214 = G__31276;
i__31215 = G__31277;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31278_31282 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31279_31283 = null;
var count__31280_31284 = (0);
var i__31281_31285 = (0);
while(true){
if((i__31281_31285 < count__31280_31284)){
var ns_31286 = cljs.core._nth.call(null,chunk__31279_31283,i__31281_31285);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31286);


var G__31287 = seq__31278_31282;
var G__31288 = chunk__31279_31283;
var G__31289 = count__31280_31284;
var G__31290 = (i__31281_31285 + (1));
seq__31278_31282 = G__31287;
chunk__31279_31283 = G__31288;
count__31280_31284 = G__31289;
i__31281_31285 = G__31290;
continue;
} else {
var temp__5720__auto___31291 = cljs.core.seq.call(null,seq__31278_31282);
if(temp__5720__auto___31291){
var seq__31278_31292__$1 = temp__5720__auto___31291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31278_31292__$1)){
var c__4317__auto___31293 = cljs.core.chunk_first.call(null,seq__31278_31292__$1);
var G__31294 = cljs.core.chunk_rest.call(null,seq__31278_31292__$1);
var G__31295 = c__4317__auto___31293;
var G__31296 = cljs.core.count.call(null,c__4317__auto___31293);
var G__31297 = (0);
seq__31278_31282 = G__31294;
chunk__31279_31283 = G__31295;
count__31280_31284 = G__31296;
i__31281_31285 = G__31297;
continue;
} else {
var ns_31298 = cljs.core.first.call(null,seq__31278_31292__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31298);


var G__31299 = cljs.core.next.call(null,seq__31278_31292__$1);
var G__31300 = null;
var G__31301 = (0);
var G__31302 = (0);
seq__31278_31282 = G__31299;
chunk__31279_31283 = G__31300;
count__31280_31284 = G__31301;
i__31281_31285 = G__31302;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3920__auto__ = goog.require__;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31303__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31304__i = 0, G__31304__a = new Array(arguments.length -  0);
while (G__31304__i < G__31304__a.length) {G__31304__a[G__31304__i] = arguments[G__31304__i + 0]; ++G__31304__i;}
  args = new cljs.core.IndexedSeq(G__31304__a,0,null);
} 
return G__31303__delegate.call(this,args);};
G__31303.cljs$lang$maxFixedArity = 0;
G__31303.cljs$lang$applyTo = (function (arglist__31305){
var args = cljs.core.seq(arglist__31305);
return G__31303__delegate(args);
});
G__31303.cljs$core$IFn$_invoke$arity$variadic = G__31303__delegate;
return G__31303;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__31306_SHARP_,p2__31307_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31306_SHARP_)].join('')),p2__31307_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__31308_SHARP_,p2__31309_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31308_SHARP_)].join(''),p2__31309_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31310 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31310.addCallback(((function (G__31310){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31310))
);

G__31310.addErrback(((function (G__31310){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31310))
);

return G__31310;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31311 = cljs.core._EQ_;
var expr__31312 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31311.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31312))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__31311,expr__31312){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__31311,expr__31312))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__31311,expr__31312){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31314){if((e31314 instanceof Error)){
var e = e31314;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31314;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__31311,expr__31312))
} else {
if(cljs.core.truth_(pred__31311.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31312))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__31311.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__31312))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__31311.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31312))){
return ((function (pred__31311,expr__31312){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31315){if((e31315 instanceof Error)){
var e = e31315;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31315;

}
}})());
});
;})(pred__31311,expr__31312))
} else {
return ((function (pred__31311,expr__31312){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31311,expr__31312))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31316,callback){
var map__31317 = p__31316;
var map__31317__$1 = ((((!((map__31317 == null)))?(((((map__31317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31317):map__31317);
var file_msg = map__31317__$1;
var request_url = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31317,map__31317__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31317,map__31317__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__){
return (function (state_31341){
var state_val_31342 = (state_31341[(1)]);
if((state_val_31342 === (7))){
var inst_31337 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31343_31361 = state_31341__$1;
(statearr_31343_31361[(2)] = inst_31337);

(statearr_31343_31361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (1))){
var state_31341__$1 = state_31341;
var statearr_31344_31362 = state_31341__$1;
(statearr_31344_31362[(2)] = null);

(statearr_31344_31362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (4))){
var inst_31321 = (state_31341[(7)]);
var inst_31321__$1 = (state_31341[(2)]);
var state_31341__$1 = (function (){var statearr_31345 = state_31341;
(statearr_31345[(7)] = inst_31321__$1);

return statearr_31345;
})();
if(cljs.core.truth_(inst_31321__$1)){
var statearr_31346_31363 = state_31341__$1;
(statearr_31346_31363[(1)] = (5));

} else {
var statearr_31347_31364 = state_31341__$1;
(statearr_31347_31364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (6))){
var state_31341__$1 = state_31341;
var statearr_31348_31365 = state_31341__$1;
(statearr_31348_31365[(2)] = null);

(statearr_31348_31365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (3))){
var inst_31339 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31341__$1,inst_31339);
} else {
if((state_val_31342 === (2))){
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31341__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31342 === (11))){
var inst_31333 = (state_31341[(2)]);
var state_31341__$1 = (function (){var statearr_31349 = state_31341;
(statearr_31349[(8)] = inst_31333);

return statearr_31349;
})();
var statearr_31350_31366 = state_31341__$1;
(statearr_31350_31366[(2)] = null);

(statearr_31350_31366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (9))){
var inst_31325 = (state_31341[(9)]);
var inst_31327 = (state_31341[(10)]);
var inst_31329 = inst_31327.call(null,inst_31325);
var state_31341__$1 = state_31341;
var statearr_31351_31367 = state_31341__$1;
(statearr_31351_31367[(2)] = inst_31329);

(statearr_31351_31367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (5))){
var inst_31321 = (state_31341[(7)]);
var inst_31323 = figwheel.client.file_reloading.blocking_load.call(null,inst_31321);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31341__$1,(8),inst_31323);
} else {
if((state_val_31342 === (10))){
var inst_31325 = (state_31341[(9)]);
var inst_31331 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31325);
var state_31341__$1 = state_31341;
var statearr_31352_31368 = state_31341__$1;
(statearr_31352_31368[(2)] = inst_31331);

(statearr_31352_31368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (8))){
var inst_31321 = (state_31341[(7)]);
var inst_31327 = (state_31341[(10)]);
var inst_31325 = (state_31341[(2)]);
var inst_31326 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31327__$1 = cljs.core.get.call(null,inst_31326,inst_31321);
var state_31341__$1 = (function (){var statearr_31353 = state_31341;
(statearr_31353[(9)] = inst_31325);

(statearr_31353[(10)] = inst_31327__$1);

return statearr_31353;
})();
if(cljs.core.truth_(inst_31327__$1)){
var statearr_31354_31369 = state_31341__$1;
(statearr_31354_31369[(1)] = (9));

} else {
var statearr_31355_31370 = state_31341__$1;
(statearr_31355_31370[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto__))
;
return ((function (switch__26314__auto__,c__26439__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26315__auto__ = null;
var figwheel$client$file_reloading$state_machine__26315__auto____0 = (function (){
var statearr_31356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31356[(0)] = figwheel$client$file_reloading$state_machine__26315__auto__);

(statearr_31356[(1)] = (1));

return statearr_31356;
});
var figwheel$client$file_reloading$state_machine__26315__auto____1 = (function (state_31341){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_31341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e31357){var ex__26318__auto__ = e31357;
var statearr_31358_31371 = state_31341;
(statearr_31358_31371[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_31341[(4)]))){
var statearr_31359_31372 = state_31341;
(statearr_31359_31372[(1)] = cljs.core.first.call(null,(state_31341[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31373 = state_31341;
state_31341 = G__31373;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26315__auto__ = function(state_31341){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26315__auto____1.call(this,state_31341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26315__auto____0;
figwheel$client$file_reloading$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26315__auto____1;
return figwheel$client$file_reloading$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_31360 = f__26440__auto__.call(null);
(statearr_31360[(6)] = c__26439__auto__);

return statearr_31360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31374,callback){
var map__31375 = p__31374;
var map__31375__$1 = ((((!((map__31375 == null)))?(((((map__31375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31375):map__31375);
var file_msg = map__31375__$1;
var namespace = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31375,map__31375__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31375,map__31375__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31377){
var map__31378 = p__31377;
var map__31378__$1 = ((((!((map__31378 == null)))?(((((map__31378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);
var file_msg = map__31378__$1;
var namespace = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31380){
var map__31381 = p__31380;
var map__31381__$1 = ((((!((map__31381 == null)))?(((((map__31381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31381):map__31381);
var file_msg = map__31381__$1;
var namespace = cljs.core.get.call(null,map__31381__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3909__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3909__auto__){
var or__3920__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
var or__3920__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3920__auto____$1)){
return or__3920__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3909__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31383,callback){
var map__31384 = p__31383;
var map__31384__$1 = ((((!((map__31384 == null)))?(((((map__31384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31384):map__31384);
var file_msg = map__31384__$1;
var request_url = cljs.core.get.call(null,map__31384__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31384__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26439__auto___31436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___31436,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___31436,out){
return (function (state_31420){
var state_val_31421 = (state_31420[(1)]);
if((state_val_31421 === (1))){
var inst_31393 = files;
var inst_31394 = cljs.core.seq.call(null,inst_31393);
var inst_31395 = cljs.core.first.call(null,inst_31394);
var inst_31396 = cljs.core.next.call(null,inst_31394);
var inst_31397 = inst_31393;
var state_31420__$1 = (function (){var statearr_31422 = state_31420;
(statearr_31422[(7)] = inst_31397);

(statearr_31422[(8)] = inst_31396);

(statearr_31422[(9)] = inst_31395);

return statearr_31422;
})();
var statearr_31423_31437 = state_31420__$1;
(statearr_31423_31437[(2)] = null);

(statearr_31423_31437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (2))){
var inst_31397 = (state_31420[(7)]);
var inst_31403 = (state_31420[(10)]);
var inst_31402 = cljs.core.seq.call(null,inst_31397);
var inst_31403__$1 = cljs.core.first.call(null,inst_31402);
var inst_31404 = cljs.core.next.call(null,inst_31402);
var inst_31405 = (inst_31403__$1 == null);
var inst_31406 = cljs.core.not.call(null,inst_31405);
var state_31420__$1 = (function (){var statearr_31424 = state_31420;
(statearr_31424[(11)] = inst_31404);

(statearr_31424[(10)] = inst_31403__$1);

return statearr_31424;
})();
if(inst_31406){
var statearr_31425_31438 = state_31420__$1;
(statearr_31425_31438[(1)] = (4));

} else {
var statearr_31426_31439 = state_31420__$1;
(statearr_31426_31439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (3))){
var inst_31418 = (state_31420[(2)]);
var state_31420__$1 = state_31420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31420__$1,inst_31418);
} else {
if((state_val_31421 === (4))){
var inst_31403 = (state_31420[(10)]);
var inst_31408 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31403);
var state_31420__$1 = state_31420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31420__$1,(7),inst_31408);
} else {
if((state_val_31421 === (5))){
var inst_31414 = cljs.core.async.close_BANG_.call(null,out);
var state_31420__$1 = state_31420;
var statearr_31427_31440 = state_31420__$1;
(statearr_31427_31440[(2)] = inst_31414);

(statearr_31427_31440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (6))){
var inst_31416 = (state_31420[(2)]);
var state_31420__$1 = state_31420;
var statearr_31428_31441 = state_31420__$1;
(statearr_31428_31441[(2)] = inst_31416);

(statearr_31428_31441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (7))){
var inst_31404 = (state_31420[(11)]);
var inst_31410 = (state_31420[(2)]);
var inst_31411 = cljs.core.async.put_BANG_.call(null,out,inst_31410);
var inst_31397 = inst_31404;
var state_31420__$1 = (function (){var statearr_31429 = state_31420;
(statearr_31429[(7)] = inst_31397);

(statearr_31429[(12)] = inst_31411);

return statearr_31429;
})();
var statearr_31430_31442 = state_31420__$1;
(statearr_31430_31442[(2)] = null);

(statearr_31430_31442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26439__auto___31436,out))
;
return ((function (switch__26314__auto__,c__26439__auto___31436,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto____0 = (function (){
var statearr_31431 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31431[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto__);

(statearr_31431[(1)] = (1));

return statearr_31431;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto____1 = (function (state_31420){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_31420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e31432){var ex__26318__auto__ = e31432;
var statearr_31433_31443 = state_31420;
(statearr_31433_31443[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_31420[(4)]))){
var statearr_31434_31444 = state_31420;
(statearr_31434_31444[(1)] = cljs.core.first.call(null,(state_31420[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31445 = state_31420;
state_31420 = G__31445;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto__ = function(state_31420){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto____1.call(this,state_31420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___31436,out))
})();
var state__26441__auto__ = (function (){var statearr_31435 = f__26440__auto__.call(null);
(statearr_31435[(6)] = c__26439__auto___31436);

return statearr_31435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___31436,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31446,opts){
var map__31447 = p__31446;
var map__31447__$1 = ((((!((map__31447 == null)))?(((((map__31447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31447):map__31447);
var eval_body = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3909__auto__ = eval_body;
if(cljs.core.truth_(and__3909__auto__)){
return typeof eval_body === 'string';
} else {
return and__3909__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31449){var e = e31449;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31450_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31450_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31451){
var vec__31452 = p__31451;
var k = cljs.core.nth.call(null,vec__31452,(0),null);
var v = cljs.core.nth.call(null,vec__31452,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31455){
var vec__31456 = p__31455;
var k = cljs.core.nth.call(null,vec__31456,(0),null);
var v = cljs.core.nth.call(null,vec__31456,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31462,p__31463){
var map__31464 = p__31462;
var map__31464__$1 = ((((!((map__31464 == null)))?(((((map__31464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31464):map__31464);
var opts = map__31464__$1;
var before_jsload = cljs.core.get.call(null,map__31464__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31464__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31464__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31465 = p__31463;
var map__31465__$1 = ((((!((map__31465 == null)))?(((((map__31465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31465):map__31465);
var msg = map__31465__$1;
var files = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (7))){
var inst_31480 = (state_31620[(7)]);
var inst_31481 = (state_31620[(8)]);
var inst_31479 = (state_31620[(9)]);
var inst_31482 = (state_31620[(10)]);
var inst_31487 = cljs.core._nth.call(null,inst_31480,inst_31482);
var inst_31488 = figwheel.client.file_reloading.eval_body.call(null,inst_31487,opts);
var inst_31489 = (inst_31482 + (1));
var tmp31622 = inst_31480;
var tmp31623 = inst_31481;
var tmp31624 = inst_31479;
var inst_31479__$1 = tmp31624;
var inst_31480__$1 = tmp31622;
var inst_31481__$1 = tmp31623;
var inst_31482__$1 = inst_31489;
var state_31620__$1 = (function (){var statearr_31625 = state_31620;
(statearr_31625[(7)] = inst_31480__$1);

(statearr_31625[(11)] = inst_31488);

(statearr_31625[(8)] = inst_31481__$1);

(statearr_31625[(9)] = inst_31479__$1);

(statearr_31625[(10)] = inst_31482__$1);

return statearr_31625;
})();
var statearr_31626_31710 = state_31620__$1;
(statearr_31626_31710[(2)] = null);

(statearr_31626_31710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (20))){
var inst_31522 = (state_31620[(12)]);
var inst_31531 = figwheel.client.file_reloading.sort_files.call(null,inst_31522);
var state_31620__$1 = state_31620;
var statearr_31627_31711 = state_31620__$1;
(statearr_31627_31711[(2)] = inst_31531);

(statearr_31627_31711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (27))){
var state_31620__$1 = state_31620;
var statearr_31628_31712 = state_31620__$1;
(statearr_31628_31712[(2)] = null);

(statearr_31628_31712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (1))){
var inst_31471 = (state_31620[(13)]);
var inst_31468 = before_jsload.call(null,files);
var inst_31469 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31470 = (function (){return ((function (inst_31471,inst_31468,inst_31469,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31459_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31459_SHARP_);
});
;})(inst_31471,inst_31468,inst_31469,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31471__$1 = cljs.core.filter.call(null,inst_31470,files);
var inst_31472 = cljs.core.not_empty.call(null,inst_31471__$1);
var state_31620__$1 = (function (){var statearr_31629 = state_31620;
(statearr_31629[(14)] = inst_31469);

(statearr_31629[(15)] = inst_31468);

(statearr_31629[(13)] = inst_31471__$1);

return statearr_31629;
})();
if(cljs.core.truth_(inst_31472)){
var statearr_31630_31713 = state_31620__$1;
(statearr_31630_31713[(1)] = (2));

} else {
var statearr_31631_31714 = state_31620__$1;
(statearr_31631_31714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (24))){
var state_31620__$1 = state_31620;
var statearr_31632_31715 = state_31620__$1;
(statearr_31632_31715[(2)] = null);

(statearr_31632_31715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (39))){
var inst_31573 = (state_31620[(16)]);
var state_31620__$1 = state_31620;
var statearr_31633_31716 = state_31620__$1;
(statearr_31633_31716[(2)] = inst_31573);

(statearr_31633_31716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (46))){
var inst_31615 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31634_31717 = state_31620__$1;
(statearr_31634_31717[(2)] = inst_31615);

(statearr_31634_31717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (4))){
var inst_31523 = (state_31620[(17)]);
var inst_31516 = (state_31620[(2)]);
var inst_31517 = cljs.core.List.EMPTY;
var inst_31518 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31517);
var inst_31519 = (function (){return ((function (inst_31523,inst_31516,inst_31517,inst_31518,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31460_SHARP_){
var and__3909__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31460_SHARP_);
if(cljs.core.truth_(and__3909__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31460_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31460_SHARP_))));
} else {
return and__3909__auto__;
}
});
;})(inst_31523,inst_31516,inst_31517,inst_31518,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31520 = cljs.core.filter.call(null,inst_31519,files);
var inst_31521 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31522 = cljs.core.concat.call(null,inst_31520,inst_31521);
var inst_31523__$1 = reload_dependents;
var state_31620__$1 = (function (){var statearr_31635 = state_31620;
(statearr_31635[(18)] = inst_31516);

(statearr_31635[(17)] = inst_31523__$1);

(statearr_31635[(12)] = inst_31522);

(statearr_31635[(19)] = inst_31518);

return statearr_31635;
})();
if(cljs.core.truth_(inst_31523__$1)){
var statearr_31636_31718 = state_31620__$1;
(statearr_31636_31718[(1)] = (16));

} else {
var statearr_31637_31719 = state_31620__$1;
(statearr_31637_31719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (15))){
var inst_31506 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31638_31720 = state_31620__$1;
(statearr_31638_31720[(2)] = inst_31506);

(statearr_31638_31720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (21))){
var inst_31533 = (state_31620[(20)]);
var inst_31533__$1 = (state_31620[(2)]);
var inst_31534 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31533__$1);
var state_31620__$1 = (function (){var statearr_31639 = state_31620;
(statearr_31639[(20)] = inst_31533__$1);

return statearr_31639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31620__$1,(22),inst_31534);
} else {
if((state_val_31621 === (31))){
var inst_31618 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31620__$1,inst_31618);
} else {
if((state_val_31621 === (32))){
var inst_31573 = (state_31620[(16)]);
var inst_31578 = inst_31573.cljs$lang$protocol_mask$partition0$;
var inst_31579 = (inst_31578 & (64));
var inst_31580 = inst_31573.cljs$core$ISeq$;
var inst_31581 = (cljs.core.PROTOCOL_SENTINEL === inst_31580);
var inst_31582 = ((inst_31579) || (inst_31581));
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31582)){
var statearr_31640_31721 = state_31620__$1;
(statearr_31640_31721[(1)] = (35));

} else {
var statearr_31641_31722 = state_31620__$1;
(statearr_31641_31722[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (40))){
var inst_31595 = (state_31620[(21)]);
var inst_31594 = (state_31620[(2)]);
var inst_31595__$1 = cljs.core.get.call(null,inst_31594,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31596 = cljs.core.get.call(null,inst_31594,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31597 = cljs.core.not_empty.call(null,inst_31595__$1);
var state_31620__$1 = (function (){var statearr_31642 = state_31620;
(statearr_31642[(21)] = inst_31595__$1);

(statearr_31642[(22)] = inst_31596);

return statearr_31642;
})();
if(cljs.core.truth_(inst_31597)){
var statearr_31643_31723 = state_31620__$1;
(statearr_31643_31723[(1)] = (41));

} else {
var statearr_31644_31724 = state_31620__$1;
(statearr_31644_31724[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (33))){
var state_31620__$1 = state_31620;
var statearr_31645_31725 = state_31620__$1;
(statearr_31645_31725[(2)] = false);

(statearr_31645_31725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (13))){
var inst_31492 = (state_31620[(23)]);
var inst_31496 = cljs.core.chunk_first.call(null,inst_31492);
var inst_31497 = cljs.core.chunk_rest.call(null,inst_31492);
var inst_31498 = cljs.core.count.call(null,inst_31496);
var inst_31479 = inst_31497;
var inst_31480 = inst_31496;
var inst_31481 = inst_31498;
var inst_31482 = (0);
var state_31620__$1 = (function (){var statearr_31646 = state_31620;
(statearr_31646[(7)] = inst_31480);

(statearr_31646[(8)] = inst_31481);

(statearr_31646[(9)] = inst_31479);

(statearr_31646[(10)] = inst_31482);

return statearr_31646;
})();
var statearr_31647_31726 = state_31620__$1;
(statearr_31647_31726[(2)] = null);

(statearr_31647_31726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (22))){
var inst_31533 = (state_31620[(20)]);
var inst_31541 = (state_31620[(24)]);
var inst_31536 = (state_31620[(25)]);
var inst_31537 = (state_31620[(26)]);
var inst_31536__$1 = (state_31620[(2)]);
var inst_31537__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31536__$1);
var inst_31538 = (function (){var all_files = inst_31533;
var res_SINGLEQUOTE_ = inst_31536__$1;
var res = inst_31537__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31533,inst_31541,inst_31536,inst_31537,inst_31536__$1,inst_31537__$1,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31461_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31461_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31533,inst_31541,inst_31536,inst_31537,inst_31536__$1,inst_31537__$1,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31539 = cljs.core.filter.call(null,inst_31538,inst_31536__$1);
var inst_31540 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31541__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31540);
var inst_31542 = cljs.core.not_empty.call(null,inst_31541__$1);
var state_31620__$1 = (function (){var statearr_31648 = state_31620;
(statearr_31648[(24)] = inst_31541__$1);

(statearr_31648[(27)] = inst_31539);

(statearr_31648[(25)] = inst_31536__$1);

(statearr_31648[(26)] = inst_31537__$1);

return statearr_31648;
})();
if(cljs.core.truth_(inst_31542)){
var statearr_31649_31727 = state_31620__$1;
(statearr_31649_31727[(1)] = (23));

} else {
var statearr_31650_31728 = state_31620__$1;
(statearr_31650_31728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (36))){
var state_31620__$1 = state_31620;
var statearr_31651_31729 = state_31620__$1;
(statearr_31651_31729[(2)] = false);

(statearr_31651_31729[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (41))){
var inst_31595 = (state_31620[(21)]);
var inst_31599 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31600 = cljs.core.map.call(null,inst_31599,inst_31595);
var inst_31601 = cljs.core.pr_str.call(null,inst_31600);
var inst_31602 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31601)].join('');
var inst_31603 = figwheel.client.utils.log.call(null,inst_31602);
var state_31620__$1 = state_31620;
var statearr_31652_31730 = state_31620__$1;
(statearr_31652_31730[(2)] = inst_31603);

(statearr_31652_31730[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (43))){
var inst_31596 = (state_31620[(22)]);
var inst_31606 = (state_31620[(2)]);
var inst_31607 = cljs.core.not_empty.call(null,inst_31596);
var state_31620__$1 = (function (){var statearr_31653 = state_31620;
(statearr_31653[(28)] = inst_31606);

return statearr_31653;
})();
if(cljs.core.truth_(inst_31607)){
var statearr_31654_31731 = state_31620__$1;
(statearr_31654_31731[(1)] = (44));

} else {
var statearr_31655_31732 = state_31620__$1;
(statearr_31655_31732[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (29))){
var inst_31533 = (state_31620[(20)]);
var inst_31541 = (state_31620[(24)]);
var inst_31573 = (state_31620[(16)]);
var inst_31539 = (state_31620[(27)]);
var inst_31536 = (state_31620[(25)]);
var inst_31537 = (state_31620[(26)]);
var inst_31569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31572 = (function (){var all_files = inst_31533;
var res_SINGLEQUOTE_ = inst_31536;
var res = inst_31537;
var files_not_loaded = inst_31539;
var dependencies_that_loaded = inst_31541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31573,inst_31539,inst_31536,inst_31537,inst_31569,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31571){
var map__31656 = p__31571;
var map__31656__$1 = ((((!((map__31656 == null)))?(((((map__31656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31656):map__31656);
var namespace = cljs.core.get.call(null,map__31656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31573,inst_31539,inst_31536,inst_31537,inst_31569,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31573__$1 = cljs.core.group_by.call(null,inst_31572,inst_31539);
var inst_31575 = (inst_31573__$1 == null);
var inst_31576 = cljs.core.not.call(null,inst_31575);
var state_31620__$1 = (function (){var statearr_31658 = state_31620;
(statearr_31658[(29)] = inst_31569);

(statearr_31658[(16)] = inst_31573__$1);

return statearr_31658;
})();
if(inst_31576){
var statearr_31659_31733 = state_31620__$1;
(statearr_31659_31733[(1)] = (32));

} else {
var statearr_31660_31734 = state_31620__$1;
(statearr_31660_31734[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (44))){
var inst_31596 = (state_31620[(22)]);
var inst_31609 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31596);
var inst_31610 = cljs.core.pr_str.call(null,inst_31609);
var inst_31611 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31610)].join('');
var inst_31612 = figwheel.client.utils.log.call(null,inst_31611);
var state_31620__$1 = state_31620;
var statearr_31661_31735 = state_31620__$1;
(statearr_31661_31735[(2)] = inst_31612);

(statearr_31661_31735[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (6))){
var inst_31513 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31662_31736 = state_31620__$1;
(statearr_31662_31736[(2)] = inst_31513);

(statearr_31662_31736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (28))){
var inst_31539 = (state_31620[(27)]);
var inst_31566 = (state_31620[(2)]);
var inst_31567 = cljs.core.not_empty.call(null,inst_31539);
var state_31620__$1 = (function (){var statearr_31663 = state_31620;
(statearr_31663[(30)] = inst_31566);

return statearr_31663;
})();
if(cljs.core.truth_(inst_31567)){
var statearr_31664_31737 = state_31620__$1;
(statearr_31664_31737[(1)] = (29));

} else {
var statearr_31665_31738 = state_31620__$1;
(statearr_31665_31738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (25))){
var inst_31537 = (state_31620[(26)]);
var inst_31553 = (state_31620[(2)]);
var inst_31554 = cljs.core.not_empty.call(null,inst_31537);
var state_31620__$1 = (function (){var statearr_31666 = state_31620;
(statearr_31666[(31)] = inst_31553);

return statearr_31666;
})();
if(cljs.core.truth_(inst_31554)){
var statearr_31667_31739 = state_31620__$1;
(statearr_31667_31739[(1)] = (26));

} else {
var statearr_31668_31740 = state_31620__$1;
(statearr_31668_31740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (34))){
var inst_31589 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31589)){
var statearr_31669_31741 = state_31620__$1;
(statearr_31669_31741[(1)] = (38));

} else {
var statearr_31670_31742 = state_31620__$1;
(statearr_31670_31742[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (17))){
var state_31620__$1 = state_31620;
var statearr_31671_31743 = state_31620__$1;
(statearr_31671_31743[(2)] = recompile_dependents);

(statearr_31671_31743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (3))){
var state_31620__$1 = state_31620;
var statearr_31672_31744 = state_31620__$1;
(statearr_31672_31744[(2)] = null);

(statearr_31672_31744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (12))){
var inst_31509 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31673_31745 = state_31620__$1;
(statearr_31673_31745[(2)] = inst_31509);

(statearr_31673_31745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (2))){
var inst_31471 = (state_31620[(13)]);
var inst_31478 = cljs.core.seq.call(null,inst_31471);
var inst_31479 = inst_31478;
var inst_31480 = null;
var inst_31481 = (0);
var inst_31482 = (0);
var state_31620__$1 = (function (){var statearr_31674 = state_31620;
(statearr_31674[(7)] = inst_31480);

(statearr_31674[(8)] = inst_31481);

(statearr_31674[(9)] = inst_31479);

(statearr_31674[(10)] = inst_31482);

return statearr_31674;
})();
var statearr_31675_31746 = state_31620__$1;
(statearr_31675_31746[(2)] = null);

(statearr_31675_31746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (23))){
var inst_31533 = (state_31620[(20)]);
var inst_31541 = (state_31620[(24)]);
var inst_31539 = (state_31620[(27)]);
var inst_31536 = (state_31620[(25)]);
var inst_31537 = (state_31620[(26)]);
var inst_31544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31546 = (function (){var all_files = inst_31533;
var res_SINGLEQUOTE_ = inst_31536;
var res = inst_31537;
var files_not_loaded = inst_31539;
var dependencies_that_loaded = inst_31541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31539,inst_31536,inst_31537,inst_31544,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31545){
var map__31676 = p__31545;
var map__31676__$1 = ((((!((map__31676 == null)))?(((((map__31676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31676):map__31676);
var request_url = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31539,inst_31536,inst_31537,inst_31544,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31547 = cljs.core.reverse.call(null,inst_31541);
var inst_31548 = cljs.core.map.call(null,inst_31546,inst_31547);
var inst_31549 = cljs.core.pr_str.call(null,inst_31548);
var inst_31550 = figwheel.client.utils.log.call(null,inst_31549);
var state_31620__$1 = (function (){var statearr_31678 = state_31620;
(statearr_31678[(32)] = inst_31544);

return statearr_31678;
})();
var statearr_31679_31747 = state_31620__$1;
(statearr_31679_31747[(2)] = inst_31550);

(statearr_31679_31747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (35))){
var state_31620__$1 = state_31620;
var statearr_31680_31748 = state_31620__$1;
(statearr_31680_31748[(2)] = true);

(statearr_31680_31748[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (19))){
var inst_31522 = (state_31620[(12)]);
var inst_31529 = figwheel.client.file_reloading.expand_files.call(null,inst_31522);
var state_31620__$1 = state_31620;
var statearr_31681_31749 = state_31620__$1;
(statearr_31681_31749[(2)] = inst_31529);

(statearr_31681_31749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (11))){
var state_31620__$1 = state_31620;
var statearr_31682_31750 = state_31620__$1;
(statearr_31682_31750[(2)] = null);

(statearr_31682_31750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (9))){
var inst_31511 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31683_31751 = state_31620__$1;
(statearr_31683_31751[(2)] = inst_31511);

(statearr_31683_31751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (5))){
var inst_31481 = (state_31620[(8)]);
var inst_31482 = (state_31620[(10)]);
var inst_31484 = (inst_31482 < inst_31481);
var inst_31485 = inst_31484;
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31485)){
var statearr_31684_31752 = state_31620__$1;
(statearr_31684_31752[(1)] = (7));

} else {
var statearr_31685_31753 = state_31620__$1;
(statearr_31685_31753[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (14))){
var inst_31492 = (state_31620[(23)]);
var inst_31501 = cljs.core.first.call(null,inst_31492);
var inst_31502 = figwheel.client.file_reloading.eval_body.call(null,inst_31501,opts);
var inst_31503 = cljs.core.next.call(null,inst_31492);
var inst_31479 = inst_31503;
var inst_31480 = null;
var inst_31481 = (0);
var inst_31482 = (0);
var state_31620__$1 = (function (){var statearr_31686 = state_31620;
(statearr_31686[(33)] = inst_31502);

(statearr_31686[(7)] = inst_31480);

(statearr_31686[(8)] = inst_31481);

(statearr_31686[(9)] = inst_31479);

(statearr_31686[(10)] = inst_31482);

return statearr_31686;
})();
var statearr_31687_31754 = state_31620__$1;
(statearr_31687_31754[(2)] = null);

(statearr_31687_31754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (45))){
var state_31620__$1 = state_31620;
var statearr_31688_31755 = state_31620__$1;
(statearr_31688_31755[(2)] = null);

(statearr_31688_31755[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (26))){
var inst_31533 = (state_31620[(20)]);
var inst_31541 = (state_31620[(24)]);
var inst_31539 = (state_31620[(27)]);
var inst_31536 = (state_31620[(25)]);
var inst_31537 = (state_31620[(26)]);
var inst_31556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31558 = (function (){var all_files = inst_31533;
var res_SINGLEQUOTE_ = inst_31536;
var res = inst_31537;
var files_not_loaded = inst_31539;
var dependencies_that_loaded = inst_31541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31539,inst_31536,inst_31537,inst_31556,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31557){
var map__31689 = p__31557;
var map__31689__$1 = ((((!((map__31689 == null)))?(((((map__31689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31689):map__31689);
var namespace = cljs.core.get.call(null,map__31689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31689__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31539,inst_31536,inst_31537,inst_31556,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31559 = cljs.core.map.call(null,inst_31558,inst_31537);
var inst_31560 = cljs.core.pr_str.call(null,inst_31559);
var inst_31561 = figwheel.client.utils.log.call(null,inst_31560);
var inst_31562 = (function (){var all_files = inst_31533;
var res_SINGLEQUOTE_ = inst_31536;
var res = inst_31537;
var files_not_loaded = inst_31539;
var dependencies_that_loaded = inst_31541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31539,inst_31536,inst_31537,inst_31556,inst_31558,inst_31559,inst_31560,inst_31561,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31533,inst_31541,inst_31539,inst_31536,inst_31537,inst_31556,inst_31558,inst_31559,inst_31560,inst_31561,state_val_31621,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31563 = setTimeout(inst_31562,(10));
var state_31620__$1 = (function (){var statearr_31691 = state_31620;
(statearr_31691[(34)] = inst_31561);

(statearr_31691[(35)] = inst_31556);

return statearr_31691;
})();
var statearr_31692_31756 = state_31620__$1;
(statearr_31692_31756[(2)] = inst_31563);

(statearr_31692_31756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (16))){
var inst_31523 = (state_31620[(17)]);
var state_31620__$1 = state_31620;
var statearr_31693_31757 = state_31620__$1;
(statearr_31693_31757[(2)] = inst_31523);

(statearr_31693_31757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (38))){
var inst_31573 = (state_31620[(16)]);
var inst_31591 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31573);
var state_31620__$1 = state_31620;
var statearr_31694_31758 = state_31620__$1;
(statearr_31694_31758[(2)] = inst_31591);

(statearr_31694_31758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (30))){
var state_31620__$1 = state_31620;
var statearr_31695_31759 = state_31620__$1;
(statearr_31695_31759[(2)] = null);

(statearr_31695_31759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (10))){
var inst_31492 = (state_31620[(23)]);
var inst_31494 = cljs.core.chunked_seq_QMARK_.call(null,inst_31492);
var state_31620__$1 = state_31620;
if(inst_31494){
var statearr_31696_31760 = state_31620__$1;
(statearr_31696_31760[(1)] = (13));

} else {
var statearr_31697_31761 = state_31620__$1;
(statearr_31697_31761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (18))){
var inst_31527 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31527)){
var statearr_31698_31762 = state_31620__$1;
(statearr_31698_31762[(1)] = (19));

} else {
var statearr_31699_31763 = state_31620__$1;
(statearr_31699_31763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (42))){
var state_31620__$1 = state_31620;
var statearr_31700_31764 = state_31620__$1;
(statearr_31700_31764[(2)] = null);

(statearr_31700_31764[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (37))){
var inst_31586 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31701_31765 = state_31620__$1;
(statearr_31701_31765[(2)] = inst_31586);

(statearr_31701_31765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (8))){
var inst_31492 = (state_31620[(23)]);
var inst_31479 = (state_31620[(9)]);
var inst_31492__$1 = cljs.core.seq.call(null,inst_31479);
var state_31620__$1 = (function (){var statearr_31702 = state_31620;
(statearr_31702[(23)] = inst_31492__$1);

return statearr_31702;
})();
if(inst_31492__$1){
var statearr_31703_31766 = state_31620__$1;
(statearr_31703_31766[(1)] = (10));

} else {
var statearr_31704_31767 = state_31620__$1;
(statearr_31704_31767[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26314__auto__,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto____0 = (function (){
var statearr_31705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31705[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto__);

(statearr_31705[(1)] = (1));

return statearr_31705;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto____1 = (function (state_31620){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_31620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e31706){var ex__26318__auto__ = e31706;
var statearr_31707_31768 = state_31620;
(statearr_31707_31768[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_31620[(4)]))){
var statearr_31708_31769 = state_31620;
(statearr_31708_31769[(1)] = cljs.core.first.call(null,(state_31620[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31770 = state_31620;
state_31620 = G__31770;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26441__auto__ = (function (){var statearr_31709 = f__26440__auto__.call(null);
(statearr_31709[(6)] = c__26439__auto__);

return statearr_31709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,map__31464,map__31464__$1,opts,before_jsload,on_jsload,reload_dependents,map__31465,map__31465__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26439__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31773,link){
var map__31774 = p__31773;
var map__31774__$1 = ((((!((map__31774 == null)))?(((((map__31774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31774):map__31774);
var file = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__31774,map__31774__$1,file){
return (function (p1__31771_SHARP_,p2__31772_SHARP_){
if(cljs.core._EQ_.call(null,p1__31771_SHARP_,p2__31772_SHARP_)){
return p1__31771_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__31774,map__31774__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31777){
var map__31778 = p__31777;
var map__31778__$1 = ((((!((map__31778 == null)))?(((((map__31778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31778):map__31778);
var match_length = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31776_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31776_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31780_SHARP_,p2__31781_SHARP_){
return cljs.core.assoc.call(null,p1__31780_SHARP_,cljs.core.get.call(null,p2__31781_SHARP_,key),p2__31781_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31782 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31782);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31782);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31783,p__31784){
var map__31785 = p__31783;
var map__31785__$1 = ((((!((map__31785 == null)))?(((((map__31785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31785):map__31785);
var on_cssload = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31786 = p__31784;
var map__31786__$1 = ((((!((map__31786 == null)))?(((((map__31786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31786):map__31786);
var files_msg = map__31786__$1;
var files = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1662169261073
