// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__31799__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31800__i = 0, G__31800__a = new Array(arguments.length -  0);
while (G__31800__i < G__31800__a.length) {G__31800__a[G__31800__i] = arguments[G__31800__i + 0]; ++G__31800__i;}
  args = new cljs.core.IndexedSeq(G__31800__a,0,null);
} 
return G__31799__delegate.call(this,args);};
G__31799.cljs$lang$maxFixedArity = 0;
G__31799.cljs$lang$applyTo = (function (arglist__31801){
var args = cljs.core.seq(arglist__31801);
return G__31799__delegate(args);
});
G__31799.cljs$core$IFn$_invoke$arity$variadic = G__31799__delegate;
return G__31799;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__31802__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31803__i = 0, G__31803__a = new Array(arguments.length -  0);
while (G__31803__i < G__31803__a.length) {G__31803__a[G__31803__i] = arguments[G__31803__i + 0]; ++G__31803__i;}
  args = new cljs.core.IndexedSeq(G__31803__a,0,null);
} 
return G__31802__delegate.call(this,args);};
G__31802.cljs$lang$maxFixedArity = 0;
G__31802.cljs$lang$applyTo = (function (arglist__31804){
var args = cljs.core.seq(arglist__31804);
return G__31802__delegate(args);
});
G__31802.cljs$core$IFn$_invoke$arity$variadic = G__31802__delegate;
return G__31802;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1662169261154
