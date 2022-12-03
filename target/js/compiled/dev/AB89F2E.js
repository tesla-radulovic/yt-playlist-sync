goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__35057__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35058__i = 0, G__35058__a = new Array(arguments.length -  0);
while (G__35058__i < G__35058__a.length) {G__35058__a[G__35058__i] = arguments[G__35058__i + 0]; ++G__35058__i;}
  args = new cljs.core.IndexedSeq(G__35058__a,0,null);
} 
return G__35057__delegate.call(this,args);};
G__35057.cljs$lang$maxFixedArity = 0;
G__35057.cljs$lang$applyTo = (function (arglist__35059){
var args = cljs.core.seq(arglist__35059);
return G__35057__delegate(args);
});
G__35057.cljs$core$IFn$_invoke$arity$variadic = G__35057__delegate;
return G__35057;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__35060__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35061__i = 0, G__35061__a = new Array(arguments.length -  0);
while (G__35061__i < G__35061__a.length) {G__35061__a[G__35061__i] = arguments[G__35061__i + 0]; ++G__35061__i;}
  args = new cljs.core.IndexedSeq(G__35061__a,0,null);
} 
return G__35060__delegate.call(this,args);};
G__35060.cljs$lang$maxFixedArity = 0;
G__35060.cljs$lang$applyTo = (function (arglist__35062){
var args = cljs.core.seq(arglist__35062);
return G__35060__delegate(args);
});
G__35060.cljs$core$IFn$_invoke$arity$variadic = G__35060__delegate;
return G__35060;
})()
);

return null;
});
