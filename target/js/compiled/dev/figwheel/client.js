// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e34499){if((e34499 instanceof Error)){
var e = e34499;
return "Error: Unable to stringify";
} else {
throw e34499;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34502 = arguments.length;
switch (G__34502) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34500_SHARP_){
if(typeof p1__34500_SHARP_ === 'string'){
return p1__34500_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34500_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34505 = arguments.length;
var i__4498__auto___34506 = (0);
while(true){
if((i__4498__auto___34506 < len__4497__auto___34505)){
args__4500__auto__.push((arguments[i__4498__auto___34506]));

var G__34507 = (i__4498__auto___34506 + (1));
i__4498__auto___34506 = G__34507;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34504){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34504));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34509 = arguments.length;
var i__4498__auto___34510 = (0);
while(true){
if((i__4498__auto___34510 < len__4497__auto___34509)){
args__4500__auto__.push((arguments[i__4498__auto___34510]));

var G__34511 = (i__4498__auto___34510 + (1));
i__4498__auto___34510 = G__34511;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34508){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34508));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34512){
var map__34513 = p__34512;
var map__34513__$1 = ((((!((map__34513 == null)))?(((((map__34513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34513):map__34513);
var message = cljs.core.get.call(null,map__34513__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34513__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3920__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3909__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3909__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3909__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26439__auto___34593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___34593,ch){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___34593,ch){
return (function (state_34564){
var state_val_34565 = (state_34564[(1)]);
if((state_val_34565 === (7))){
var inst_34560 = (state_34564[(2)]);
var state_34564__$1 = state_34564;
var statearr_34566_34594 = state_34564__$1;
(statearr_34566_34594[(2)] = inst_34560);

(statearr_34566_34594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (1))){
var state_34564__$1 = state_34564;
var statearr_34567_34595 = state_34564__$1;
(statearr_34567_34595[(2)] = null);

(statearr_34567_34595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (4))){
var inst_34517 = (state_34564[(7)]);
var inst_34517__$1 = (state_34564[(2)]);
var state_34564__$1 = (function (){var statearr_34568 = state_34564;
(statearr_34568[(7)] = inst_34517__$1);

return statearr_34568;
})();
if(cljs.core.truth_(inst_34517__$1)){
var statearr_34569_34596 = state_34564__$1;
(statearr_34569_34596[(1)] = (5));

} else {
var statearr_34570_34597 = state_34564__$1;
(statearr_34570_34597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (15))){
var inst_34524 = (state_34564[(8)]);
var inst_34539 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34524);
var inst_34540 = cljs.core.first.call(null,inst_34539);
var inst_34541 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34540);
var inst_34542 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34541)].join('');
var inst_34543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34542);
var state_34564__$1 = state_34564;
var statearr_34571_34598 = state_34564__$1;
(statearr_34571_34598[(2)] = inst_34543);

(statearr_34571_34598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (13))){
var inst_34548 = (state_34564[(2)]);
var state_34564__$1 = state_34564;
var statearr_34572_34599 = state_34564__$1;
(statearr_34572_34599[(2)] = inst_34548);

(statearr_34572_34599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (6))){
var state_34564__$1 = state_34564;
var statearr_34573_34600 = state_34564__$1;
(statearr_34573_34600[(2)] = null);

(statearr_34573_34600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (17))){
var inst_34546 = (state_34564[(2)]);
var state_34564__$1 = state_34564;
var statearr_34574_34601 = state_34564__$1;
(statearr_34574_34601[(2)] = inst_34546);

(statearr_34574_34601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (3))){
var inst_34562 = (state_34564[(2)]);
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34564__$1,inst_34562);
} else {
if((state_val_34565 === (12))){
var inst_34523 = (state_34564[(9)]);
var inst_34537 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34523,opts);
var state_34564__$1 = state_34564;
if(cljs.core.truth_(inst_34537)){
var statearr_34575_34602 = state_34564__$1;
(statearr_34575_34602[(1)] = (15));

} else {
var statearr_34576_34603 = state_34564__$1;
(statearr_34576_34603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (2))){
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34564__$1,(4),ch);
} else {
if((state_val_34565 === (11))){
var inst_34524 = (state_34564[(8)]);
var inst_34529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34530 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34524);
var inst_34531 = cljs.core.async.timeout.call(null,(1000));
var inst_34532 = [inst_34530,inst_34531];
var inst_34533 = (new cljs.core.PersistentVector(null,2,(5),inst_34529,inst_34532,null));
var state_34564__$1 = state_34564;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34564__$1,(14),inst_34533);
} else {
if((state_val_34565 === (9))){
var inst_34524 = (state_34564[(8)]);
var inst_34550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34551 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34524);
var inst_34552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34551);
var inst_34553 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34552)].join('');
var inst_34554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34553);
var state_34564__$1 = (function (){var statearr_34577 = state_34564;
(statearr_34577[(10)] = inst_34550);

return statearr_34577;
})();
var statearr_34578_34604 = state_34564__$1;
(statearr_34578_34604[(2)] = inst_34554);

(statearr_34578_34604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (5))){
var inst_34517 = (state_34564[(7)]);
var inst_34519 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34520 = (new cljs.core.PersistentArrayMap(null,2,inst_34519,null));
var inst_34521 = (new cljs.core.PersistentHashSet(null,inst_34520,null));
var inst_34522 = figwheel.client.focus_msgs.call(null,inst_34521,inst_34517);
var inst_34523 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34522);
var inst_34524 = cljs.core.first.call(null,inst_34522);
var inst_34525 = figwheel.client.autoload_QMARK_.call(null);
var state_34564__$1 = (function (){var statearr_34579 = state_34564;
(statearr_34579[(8)] = inst_34524);

(statearr_34579[(9)] = inst_34523);

return statearr_34579;
})();
if(cljs.core.truth_(inst_34525)){
var statearr_34580_34605 = state_34564__$1;
(statearr_34580_34605[(1)] = (8));

} else {
var statearr_34581_34606 = state_34564__$1;
(statearr_34581_34606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (14))){
var inst_34535 = (state_34564[(2)]);
var state_34564__$1 = state_34564;
var statearr_34582_34607 = state_34564__$1;
(statearr_34582_34607[(2)] = inst_34535);

(statearr_34582_34607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (16))){
var state_34564__$1 = state_34564;
var statearr_34583_34608 = state_34564__$1;
(statearr_34583_34608[(2)] = null);

(statearr_34583_34608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (10))){
var inst_34556 = (state_34564[(2)]);
var state_34564__$1 = (function (){var statearr_34584 = state_34564;
(statearr_34584[(11)] = inst_34556);

return statearr_34584;
})();
var statearr_34585_34609 = state_34564__$1;
(statearr_34585_34609[(2)] = null);

(statearr_34585_34609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (8))){
var inst_34523 = (state_34564[(9)]);
var inst_34527 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34523,opts);
var state_34564__$1 = state_34564;
if(cljs.core.truth_(inst_34527)){
var statearr_34586_34610 = state_34564__$1;
(statearr_34586_34610[(1)] = (11));

} else {
var statearr_34587_34611 = state_34564__$1;
(statearr_34587_34611[(1)] = (12));

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
});})(c__26439__auto___34593,ch))
;
return ((function (switch__26314__auto__,c__26439__auto___34593,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26315__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26315__auto____0 = (function (){
var statearr_34588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34588[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26315__auto__);

(statearr_34588[(1)] = (1));

return statearr_34588;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26315__auto____1 = (function (state_34564){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_34564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e34589){var ex__26318__auto__ = e34589;
var statearr_34590_34612 = state_34564;
(statearr_34590_34612[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_34564[(4)]))){
var statearr_34591_34613 = state_34564;
(statearr_34591_34613[(1)] = cljs.core.first.call(null,(state_34564[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34614 = state_34564;
state_34564 = G__34614;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26315__auto__ = function(state_34564){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26315__auto____1.call(this,state_34564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26315__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26315__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___34593,ch))
})();
var state__26441__auto__ = (function (){var statearr_34592 = f__26440__auto__.call(null);
(statearr_34592[(6)] = c__26439__auto___34593);

return statearr_34592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___34593,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34615_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34615_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34617 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34617){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34616){if((e34616 instanceof Error)){
var e = e34616;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34617], null));
} else {
var e = e34616;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34617))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34618){
var map__34619 = p__34618;
var map__34619__$1 = ((((!((map__34619 == null)))?(((((map__34619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34619):map__34619);
var opts = map__34619__$1;
var build_id = cljs.core.get.call(null,map__34619__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34619,map__34619__$1,opts,build_id){
return (function (p__34621){
var vec__34622 = p__34621;
var seq__34623 = cljs.core.seq.call(null,vec__34622);
var first__34624 = cljs.core.first.call(null,seq__34623);
var seq__34623__$1 = cljs.core.next.call(null,seq__34623);
var map__34625 = first__34624;
var map__34625__$1 = ((((!((map__34625 == null)))?(((((map__34625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34625):map__34625);
var msg = map__34625__$1;
var msg_name = cljs.core.get.call(null,map__34625__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34623__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34622,seq__34623,first__34624,seq__34623__$1,map__34625,map__34625__$1,msg,msg_name,_,map__34619,map__34619__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34622,seq__34623,first__34624,seq__34623__$1,map__34625,map__34625__$1,msg,msg_name,_,map__34619,map__34619__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34619,map__34619__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34627){
var vec__34628 = p__34627;
var seq__34629 = cljs.core.seq.call(null,vec__34628);
var first__34630 = cljs.core.first.call(null,seq__34629);
var seq__34629__$1 = cljs.core.next.call(null,seq__34629);
var map__34631 = first__34630;
var map__34631__$1 = ((((!((map__34631 == null)))?(((((map__34631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34631):map__34631);
var msg = map__34631__$1;
var msg_name = cljs.core.get.call(null,map__34631__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34629__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34633){
var map__34634 = p__34633;
var map__34634__$1 = ((((!((map__34634 == null)))?(((((map__34634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34634):map__34634);
var on_compile_warning = cljs.core.get.call(null,map__34634__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34634__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34634,map__34634__$1,on_compile_warning,on_compile_fail){
return (function (p__34636){
var vec__34637 = p__34636;
var seq__34638 = cljs.core.seq.call(null,vec__34637);
var first__34639 = cljs.core.first.call(null,seq__34638);
var seq__34638__$1 = cljs.core.next.call(null,seq__34638);
var map__34640 = first__34639;
var map__34640__$1 = ((((!((map__34640 == null)))?(((((map__34640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34640):map__34640);
var msg = map__34640__$1;
var msg_name = cljs.core.get.call(null,map__34640__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34638__$1;
var pred__34642 = cljs.core._EQ_;
var expr__34643 = msg_name;
if(cljs.core.truth_(pred__34642.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34643))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34642.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34643))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34634,map__34634__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__,msg_hist,msg_names,msg){
return (function (state_34732){
var state_val_34733 = (state_34732[(1)]);
if((state_val_34733 === (7))){
var inst_34652 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34652)){
var statearr_34734_34782 = state_34732__$1;
(statearr_34734_34782[(1)] = (8));

} else {
var statearr_34735_34783 = state_34732__$1;
(statearr_34735_34783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (20))){
var inst_34726 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34736_34784 = state_34732__$1;
(statearr_34736_34784[(2)] = inst_34726);

(statearr_34736_34784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (27))){
var inst_34722 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34737_34785 = state_34732__$1;
(statearr_34737_34785[(2)] = inst_34722);

(statearr_34737_34785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (1))){
var inst_34645 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34645)){
var statearr_34738_34786 = state_34732__$1;
(statearr_34738_34786[(1)] = (2));

} else {
var statearr_34739_34787 = state_34732__$1;
(statearr_34739_34787[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (24))){
var inst_34724 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34740_34788 = state_34732__$1;
(statearr_34740_34788[(2)] = inst_34724);

(statearr_34740_34788[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (4))){
var inst_34730 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34732__$1,inst_34730);
} else {
if((state_val_34733 === (15))){
var inst_34728 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34741_34789 = state_34732__$1;
(statearr_34741_34789[(2)] = inst_34728);

(statearr_34741_34789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (21))){
var inst_34681 = (state_34732[(2)]);
var inst_34682 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34683 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34682);
var state_34732__$1 = (function (){var statearr_34742 = state_34732;
(statearr_34742[(7)] = inst_34681);

return statearr_34742;
})();
var statearr_34743_34790 = state_34732__$1;
(statearr_34743_34790[(2)] = inst_34683);

(statearr_34743_34790[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (31))){
var inst_34711 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34711)){
var statearr_34744_34791 = state_34732__$1;
(statearr_34744_34791[(1)] = (34));

} else {
var statearr_34745_34792 = state_34732__$1;
(statearr_34745_34792[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (32))){
var inst_34720 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34746_34793 = state_34732__$1;
(statearr_34746_34793[(2)] = inst_34720);

(statearr_34746_34793[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (33))){
var inst_34707 = (state_34732[(2)]);
var inst_34708 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34709 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34708);
var state_34732__$1 = (function (){var statearr_34747 = state_34732;
(statearr_34747[(8)] = inst_34707);

return statearr_34747;
})();
var statearr_34748_34794 = state_34732__$1;
(statearr_34748_34794[(2)] = inst_34709);

(statearr_34748_34794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (13))){
var inst_34666 = figwheel.client.heads_up.clear.call(null);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(16),inst_34666);
} else {
if((state_val_34733 === (22))){
var inst_34687 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34688 = figwheel.client.heads_up.append_warning_message.call(null,inst_34687);
var state_34732__$1 = state_34732;
var statearr_34749_34795 = state_34732__$1;
(statearr_34749_34795[(2)] = inst_34688);

(statearr_34749_34795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (36))){
var inst_34718 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34750_34796 = state_34732__$1;
(statearr_34750_34796[(2)] = inst_34718);

(statearr_34750_34796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (29))){
var inst_34698 = (state_34732[(2)]);
var inst_34699 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34700 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34699);
var state_34732__$1 = (function (){var statearr_34751 = state_34732;
(statearr_34751[(9)] = inst_34698);

return statearr_34751;
})();
var statearr_34752_34797 = state_34732__$1;
(statearr_34752_34797[(2)] = inst_34700);

(statearr_34752_34797[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (6))){
var inst_34647 = (state_34732[(10)]);
var state_34732__$1 = state_34732;
var statearr_34753_34798 = state_34732__$1;
(statearr_34753_34798[(2)] = inst_34647);

(statearr_34753_34798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (28))){
var inst_34694 = (state_34732[(2)]);
var inst_34695 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34696 = figwheel.client.heads_up.display_warning.call(null,inst_34695);
var state_34732__$1 = (function (){var statearr_34754 = state_34732;
(statearr_34754[(11)] = inst_34694);

return statearr_34754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(29),inst_34696);
} else {
if((state_val_34733 === (25))){
var inst_34692 = figwheel.client.heads_up.clear.call(null);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(28),inst_34692);
} else {
if((state_val_34733 === (34))){
var inst_34713 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(37),inst_34713);
} else {
if((state_val_34733 === (17))){
var inst_34672 = (state_34732[(2)]);
var inst_34673 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34674 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34673);
var state_34732__$1 = (function (){var statearr_34755 = state_34732;
(statearr_34755[(12)] = inst_34672);

return statearr_34755;
})();
var statearr_34756_34799 = state_34732__$1;
(statearr_34756_34799[(2)] = inst_34674);

(statearr_34756_34799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (3))){
var inst_34664 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34664)){
var statearr_34757_34800 = state_34732__$1;
(statearr_34757_34800[(1)] = (13));

} else {
var statearr_34758_34801 = state_34732__$1;
(statearr_34758_34801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (12))){
var inst_34660 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34759_34802 = state_34732__$1;
(statearr_34759_34802[(2)] = inst_34660);

(statearr_34759_34802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (2))){
var inst_34647 = (state_34732[(10)]);
var inst_34647__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34732__$1 = (function (){var statearr_34760 = state_34732;
(statearr_34760[(10)] = inst_34647__$1);

return statearr_34760;
})();
if(cljs.core.truth_(inst_34647__$1)){
var statearr_34761_34803 = state_34732__$1;
(statearr_34761_34803[(1)] = (5));

} else {
var statearr_34762_34804 = state_34732__$1;
(statearr_34762_34804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (23))){
var inst_34690 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34690)){
var statearr_34763_34805 = state_34732__$1;
(statearr_34763_34805[(1)] = (25));

} else {
var statearr_34764_34806 = state_34732__$1;
(statearr_34764_34806[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (35))){
var state_34732__$1 = state_34732;
var statearr_34765_34807 = state_34732__$1;
(statearr_34765_34807[(2)] = null);

(statearr_34765_34807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (19))){
var inst_34685 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34685)){
var statearr_34766_34808 = state_34732__$1;
(statearr_34766_34808[(1)] = (22));

} else {
var statearr_34767_34809 = state_34732__$1;
(statearr_34767_34809[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (11))){
var inst_34656 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34768_34810 = state_34732__$1;
(statearr_34768_34810[(2)] = inst_34656);

(statearr_34768_34810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (9))){
var inst_34658 = figwheel.client.heads_up.clear.call(null);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(12),inst_34658);
} else {
if((state_val_34733 === (5))){
var inst_34649 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34732__$1 = state_34732;
var statearr_34769_34811 = state_34732__$1;
(statearr_34769_34811[(2)] = inst_34649);

(statearr_34769_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (14))){
var inst_34676 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34676)){
var statearr_34770_34812 = state_34732__$1;
(statearr_34770_34812[(1)] = (18));

} else {
var statearr_34771_34813 = state_34732__$1;
(statearr_34771_34813[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (26))){
var inst_34702 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34702)){
var statearr_34772_34814 = state_34732__$1;
(statearr_34772_34814[(1)] = (30));

} else {
var statearr_34773_34815 = state_34732__$1;
(statearr_34773_34815[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (16))){
var inst_34668 = (state_34732[(2)]);
var inst_34669 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34670 = figwheel.client.heads_up.display_exception.call(null,inst_34669);
var state_34732__$1 = (function (){var statearr_34774 = state_34732;
(statearr_34774[(13)] = inst_34668);

return statearr_34774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(17),inst_34670);
} else {
if((state_val_34733 === (30))){
var inst_34704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34705 = figwheel.client.heads_up.display_warning.call(null,inst_34704);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(33),inst_34705);
} else {
if((state_val_34733 === (10))){
var inst_34662 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34775_34816 = state_34732__$1;
(statearr_34775_34816[(2)] = inst_34662);

(statearr_34775_34816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (18))){
var inst_34678 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34679 = figwheel.client.heads_up.display_exception.call(null,inst_34678);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(21),inst_34679);
} else {
if((state_val_34733 === (37))){
var inst_34715 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34776_34817 = state_34732__$1;
(statearr_34776_34817[(2)] = inst_34715);

(statearr_34776_34817[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (8))){
var inst_34654 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(11),inst_34654);
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
});})(c__26439__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26314__auto__,c__26439__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto____0 = (function (){
var statearr_34777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34777[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto__);

(statearr_34777[(1)] = (1));

return statearr_34777;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto____1 = (function (state_34732){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_34732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e34778){var ex__26318__auto__ = e34778;
var statearr_34779_34818 = state_34732;
(statearr_34779_34818[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_34732[(4)]))){
var statearr_34780_34819 = state_34732;
(statearr_34780_34819[(1)] = cljs.core.first.call(null,(state_34732[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34820 = state_34732;
state_34732 = G__34820;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto__ = function(state_34732){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto____1.call(this,state_34732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__,msg_hist,msg_names,msg))
})();
var state__26441__auto__ = (function (){var statearr_34781 = f__26440__auto__.call(null);
(statearr_34781[(6)] = c__26439__auto__);

return statearr_34781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,msg_hist,msg_names,msg))
);

return c__26439__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26439__auto___34850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___34850,ch){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___34850,ch){
return (function (state_34835){
var state_val_34836 = (state_34835[(1)]);
if((state_val_34836 === (1))){
var state_34835__$1 = state_34835;
var statearr_34837_34851 = state_34835__$1;
(statearr_34837_34851[(2)] = null);

(statearr_34837_34851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (2))){
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34835__$1,(4),ch);
} else {
if((state_val_34836 === (3))){
var inst_34833 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34835__$1,inst_34833);
} else {
if((state_val_34836 === (4))){
var inst_34823 = (state_34835[(7)]);
var inst_34823__$1 = (state_34835[(2)]);
var state_34835__$1 = (function (){var statearr_34838 = state_34835;
(statearr_34838[(7)] = inst_34823__$1);

return statearr_34838;
})();
if(cljs.core.truth_(inst_34823__$1)){
var statearr_34839_34852 = state_34835__$1;
(statearr_34839_34852[(1)] = (5));

} else {
var statearr_34840_34853 = state_34835__$1;
(statearr_34840_34853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (5))){
var inst_34823 = (state_34835[(7)]);
var inst_34825 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34823);
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34835__$1,(8),inst_34825);
} else {
if((state_val_34836 === (6))){
var state_34835__$1 = state_34835;
var statearr_34841_34854 = state_34835__$1;
(statearr_34841_34854[(2)] = null);

(statearr_34841_34854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (7))){
var inst_34831 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34842_34855 = state_34835__$1;
(statearr_34842_34855[(2)] = inst_34831);

(statearr_34842_34855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (8))){
var inst_34827 = (state_34835[(2)]);
var state_34835__$1 = (function (){var statearr_34843 = state_34835;
(statearr_34843[(8)] = inst_34827);

return statearr_34843;
})();
var statearr_34844_34856 = state_34835__$1;
(statearr_34844_34856[(2)] = null);

(statearr_34844_34856[(1)] = (2));


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
});})(c__26439__auto___34850,ch))
;
return ((function (switch__26314__auto__,c__26439__auto___34850,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26315__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26315__auto____0 = (function (){
var statearr_34845 = [null,null,null,null,null,null,null,null,null];
(statearr_34845[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26315__auto__);

(statearr_34845[(1)] = (1));

return statearr_34845;
});
var figwheel$client$heads_up_plugin_$_state_machine__26315__auto____1 = (function (state_34835){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_34835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e34846){var ex__26318__auto__ = e34846;
var statearr_34847_34857 = state_34835;
(statearr_34847_34857[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_34835[(4)]))){
var statearr_34848_34858 = state_34835;
(statearr_34848_34858[(1)] = cljs.core.first.call(null,(state_34835[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34859 = state_34835;
state_34835 = G__34859;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26315__auto__ = function(state_34835){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26315__auto____1.call(this,state_34835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26315__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26315__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___34850,ch))
})();
var state__26441__auto__ = (function (){var statearr_34849 = f__26440__auto__.call(null);
(statearr_34849[(6)] = c__26439__auto___34850);

return statearr_34849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___34850,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__){
return (function (state_34865){
var state_val_34866 = (state_34865[(1)]);
if((state_val_34866 === (1))){
var inst_34860 = cljs.core.async.timeout.call(null,(3000));
var state_34865__$1 = state_34865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34865__$1,(2),inst_34860);
} else {
if((state_val_34866 === (2))){
var inst_34862 = (state_34865[(2)]);
var inst_34863 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34865__$1 = (function (){var statearr_34867 = state_34865;
(statearr_34867[(7)] = inst_34862);

return statearr_34867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34865__$1,inst_34863);
} else {
return null;
}
}
});})(c__26439__auto__))
;
return ((function (switch__26314__auto__,c__26439__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26315__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26315__auto____0 = (function (){
var statearr_34868 = [null,null,null,null,null,null,null,null];
(statearr_34868[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26315__auto__);

(statearr_34868[(1)] = (1));

return statearr_34868;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26315__auto____1 = (function (state_34865){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_34865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e34869){var ex__26318__auto__ = e34869;
var statearr_34870_34873 = state_34865;
(statearr_34870_34873[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_34865[(4)]))){
var statearr_34871_34874 = state_34865;
(statearr_34871_34874[(1)] = cljs.core.first.call(null,(state_34865[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34875 = state_34865;
state_34865 = G__34875;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26315__auto__ = function(state_34865){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26315__auto____1.call(this,state_34865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26315__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26315__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_34872 = f__26440__auto__.call(null);
(statearr_34872[(6)] = c__26439__auto__);

return statearr_34872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__,figwheel_version,temp__5720__auto__){
return (function (state_34882){
var state_val_34883 = (state_34882[(1)]);
if((state_val_34883 === (1))){
var inst_34876 = cljs.core.async.timeout.call(null,(2000));
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34882__$1,(2),inst_34876);
} else {
if((state_val_34883 === (2))){
var inst_34878 = (state_34882[(2)]);
var inst_34879 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34880 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34879);
var state_34882__$1 = (function (){var statearr_34884 = state_34882;
(statearr_34884[(7)] = inst_34878);

return statearr_34884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34882__$1,inst_34880);
} else {
return null;
}
}
});})(c__26439__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__26314__auto__,c__26439__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto____0 = (function (){
var statearr_34885 = [null,null,null,null,null,null,null,null];
(statearr_34885[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto__);

(statearr_34885[(1)] = (1));

return statearr_34885;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto____1 = (function (state_34882){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_34882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e34886){var ex__26318__auto__ = e34886;
var statearr_34887_34890 = state_34882;
(statearr_34887_34890[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_34882[(4)]))){
var statearr_34888_34891 = state_34882;
(statearr_34888_34891[(1)] = cljs.core.first.call(null,(state_34882[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34892 = state_34882;
state_34882 = G__34892;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto__ = function(state_34882){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto____1.call(this,state_34882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__,figwheel_version,temp__5720__auto__))
})();
var state__26441__auto__ = (function (){var statearr_34889 = f__26440__auto__.call(null);
(statearr_34889[(6)] = c__26439__auto__);

return statearr_34889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,figwheel_version,temp__5720__auto__))
);

return c__26439__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34893){
var map__34894 = p__34893;
var map__34894__$1 = ((((!((map__34894 == null)))?(((((map__34894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34894):map__34894);
var file = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34896 = "";
var G__34896__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34896),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34896);
var G__34896__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34896__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34896__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = line;
if(cljs.core.truth_(and__3909__auto__)){
return column;
} else {
return and__3909__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34896__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34896__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34897){
var map__34898 = p__34897;
var map__34898__$1 = ((((!((map__34898 == null)))?(((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var ed = map__34898__$1;
var formatted_exception = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34900_34904 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34901_34905 = null;
var count__34902_34906 = (0);
var i__34903_34907 = (0);
while(true){
if((i__34903_34907 < count__34902_34906)){
var msg_34908 = cljs.core._nth.call(null,chunk__34901_34905,i__34903_34907);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34908);


var G__34909 = seq__34900_34904;
var G__34910 = chunk__34901_34905;
var G__34911 = count__34902_34906;
var G__34912 = (i__34903_34907 + (1));
seq__34900_34904 = G__34909;
chunk__34901_34905 = G__34910;
count__34902_34906 = G__34911;
i__34903_34907 = G__34912;
continue;
} else {
var temp__5720__auto___34913 = cljs.core.seq.call(null,seq__34900_34904);
if(temp__5720__auto___34913){
var seq__34900_34914__$1 = temp__5720__auto___34913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34900_34914__$1)){
var c__4317__auto___34915 = cljs.core.chunk_first.call(null,seq__34900_34914__$1);
var G__34916 = cljs.core.chunk_rest.call(null,seq__34900_34914__$1);
var G__34917 = c__4317__auto___34915;
var G__34918 = cljs.core.count.call(null,c__4317__auto___34915);
var G__34919 = (0);
seq__34900_34904 = G__34916;
chunk__34901_34905 = G__34917;
count__34902_34906 = G__34918;
i__34903_34907 = G__34919;
continue;
} else {
var msg_34920 = cljs.core.first.call(null,seq__34900_34914__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34920);


var G__34921 = cljs.core.next.call(null,seq__34900_34914__$1);
var G__34922 = null;
var G__34923 = (0);
var G__34924 = (0);
seq__34900_34904 = G__34921;
chunk__34901_34905 = G__34922;
count__34902_34906 = G__34923;
i__34903_34907 = G__34924;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34925){
var map__34926 = p__34925;
var map__34926__$1 = ((((!((map__34926 == null)))?(((((map__34926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34926):map__34926);
var w = map__34926__$1;
var message = cljs.core.get.call(null,map__34926__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/js/compiled/dev/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/js/compiled/dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3909__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3909__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3909__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34928 = cljs.core.seq.call(null,plugins);
var chunk__34929 = null;
var count__34930 = (0);
var i__34931 = (0);
while(true){
if((i__34931 < count__34930)){
var vec__34932 = cljs.core._nth.call(null,chunk__34929,i__34931);
var k = cljs.core.nth.call(null,vec__34932,(0),null);
var plugin = cljs.core.nth.call(null,vec__34932,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34938 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34928,chunk__34929,count__34930,i__34931,pl_34938,vec__34932,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34938.call(null,msg_hist);
});})(seq__34928,chunk__34929,count__34930,i__34931,pl_34938,vec__34932,k,plugin))
);
} else {
}


var G__34939 = seq__34928;
var G__34940 = chunk__34929;
var G__34941 = count__34930;
var G__34942 = (i__34931 + (1));
seq__34928 = G__34939;
chunk__34929 = G__34940;
count__34930 = G__34941;
i__34931 = G__34942;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34928);
if(temp__5720__auto__){
var seq__34928__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34928__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__34928__$1);
var G__34943 = cljs.core.chunk_rest.call(null,seq__34928__$1);
var G__34944 = c__4317__auto__;
var G__34945 = cljs.core.count.call(null,c__4317__auto__);
var G__34946 = (0);
seq__34928 = G__34943;
chunk__34929 = G__34944;
count__34930 = G__34945;
i__34931 = G__34946;
continue;
} else {
var vec__34935 = cljs.core.first.call(null,seq__34928__$1);
var k = cljs.core.nth.call(null,vec__34935,(0),null);
var plugin = cljs.core.nth.call(null,vec__34935,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34947 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34928,chunk__34929,count__34930,i__34931,pl_34947,vec__34935,k,plugin,seq__34928__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34947.call(null,msg_hist);
});})(seq__34928,chunk__34929,count__34930,i__34931,pl_34947,vec__34935,k,plugin,seq__34928__$1,temp__5720__auto__))
);
} else {
}


var G__34948 = cljs.core.next.call(null,seq__34928__$1);
var G__34949 = null;
var G__34950 = (0);
var G__34951 = (0);
seq__34928 = G__34948;
chunk__34929 = G__34949;
count__34930 = G__34950;
i__34931 = G__34951;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34953 = arguments.length;
switch (G__34953) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34954_34959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34955_34960 = null;
var count__34956_34961 = (0);
var i__34957_34962 = (0);
while(true){
if((i__34957_34962 < count__34956_34961)){
var msg_34963 = cljs.core._nth.call(null,chunk__34955_34960,i__34957_34962);
figwheel.client.socket.handle_incoming_message.call(null,msg_34963);


var G__34964 = seq__34954_34959;
var G__34965 = chunk__34955_34960;
var G__34966 = count__34956_34961;
var G__34967 = (i__34957_34962 + (1));
seq__34954_34959 = G__34964;
chunk__34955_34960 = G__34965;
count__34956_34961 = G__34966;
i__34957_34962 = G__34967;
continue;
} else {
var temp__5720__auto___34968 = cljs.core.seq.call(null,seq__34954_34959);
if(temp__5720__auto___34968){
var seq__34954_34969__$1 = temp__5720__auto___34968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34954_34969__$1)){
var c__4317__auto___34970 = cljs.core.chunk_first.call(null,seq__34954_34969__$1);
var G__34971 = cljs.core.chunk_rest.call(null,seq__34954_34969__$1);
var G__34972 = c__4317__auto___34970;
var G__34973 = cljs.core.count.call(null,c__4317__auto___34970);
var G__34974 = (0);
seq__34954_34959 = G__34971;
chunk__34955_34960 = G__34972;
count__34956_34961 = G__34973;
i__34957_34962 = G__34974;
continue;
} else {
var msg_34975 = cljs.core.first.call(null,seq__34954_34969__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34975);


var G__34976 = cljs.core.next.call(null,seq__34954_34969__$1);
var G__34977 = null;
var G__34978 = (0);
var G__34979 = (0);
seq__34954_34959 = G__34976;
chunk__34955_34960 = G__34977;
count__34956_34961 = G__34978;
i__34957_34962 = G__34979;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34984 = arguments.length;
var i__4498__auto___34985 = (0);
while(true){
if((i__4498__auto___34985 < len__4497__auto___34984)){
args__4500__auto__.push((arguments[i__4498__auto___34985]));

var G__34986 = (i__4498__auto___34985 + (1));
i__4498__auto___34985 = G__34986;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34981){
var map__34982 = p__34981;
var map__34982__$1 = ((((!((map__34982 == null)))?(((((map__34982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34982):map__34982);
var opts = map__34982__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34980){
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34980));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34987){if((e34987 instanceof Error)){
var e = e34987;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34987;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34988){
var map__34989 = p__34988;
var map__34989__$1 = ((((!((map__34989 == null)))?(((((map__34989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34989):map__34989);
var msg_name = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1662169265864
