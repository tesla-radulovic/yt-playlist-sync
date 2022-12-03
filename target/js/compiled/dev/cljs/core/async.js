// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28416 = arguments.length;
switch (G__28416) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28417 = (function (f,blockable,meta28418){
this.f = f;
this.blockable = blockable;
this.meta28418 = meta28418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28419,meta28418__$1){
var self__ = this;
var _28419__$1 = this;
return (new cljs.core.async.t_cljs$core$async28417(self__.f,self__.blockable,meta28418__$1));
});

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28419){
var self__ = this;
var _28419__$1 = this;
return self__.meta28418;
});

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28418","meta28418",2101960821,null)], null);
});

cljs.core.async.t_cljs$core$async28417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28417";

cljs.core.async.t_cljs$core$async28417.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async28417");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28417.
 */
cljs.core.async.__GT_t_cljs$core$async28417 = (function cljs$core$async$__GT_t_cljs$core$async28417(f__$1,blockable__$1,meta28418){
return (new cljs.core.async.t_cljs$core$async28417(f__$1,blockable__$1,meta28418));
});

}

return (new cljs.core.async.t_cljs$core$async28417(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28423 = arguments.length;
switch (G__28423) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28426 = arguments.length;
switch (G__28426) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28429 = arguments.length;
switch (G__28429) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28431 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28431);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28431,ret){
return (function (){
return fn1.call(null,val_28431);
});})(val_28431,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28433 = arguments.length;
switch (G__28433) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4374__auto___28435 = n;
var x_28436 = (0);
while(true){
if((x_28436 < n__4374__auto___28435)){
(a[x_28436] = x_28436);

var G__28437 = (x_28436 + (1));
x_28436 = G__28437;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28438 = (function (flag,meta28439){
this.flag = flag;
this.meta28439 = meta28439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28440,meta28439__$1){
var self__ = this;
var _28440__$1 = this;
return (new cljs.core.async.t_cljs$core$async28438(self__.flag,meta28439__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28440){
var self__ = this;
var _28440__$1 = this;
return self__.meta28439;
});})(flag))
;

cljs.core.async.t_cljs$core$async28438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28438.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28439","meta28439",-1933888414,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28438";

cljs.core.async.t_cljs$core$async28438.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async28438");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28438.
 */
cljs.core.async.__GT_t_cljs$core$async28438 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28438(flag__$1,meta28439){
return (new cljs.core.async.t_cljs$core$async28438(flag__$1,meta28439));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28438(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28441 = (function (flag,cb,meta28442){
this.flag = flag;
this.cb = cb;
this.meta28442 = meta28442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28443,meta28442__$1){
var self__ = this;
var _28443__$1 = this;
return (new cljs.core.async.t_cljs$core$async28441(self__.flag,self__.cb,meta28442__$1));
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28443){
var self__ = this;
var _28443__$1 = this;
return self__.meta28442;
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28442","meta28442",421209000,null)], null);
});

cljs.core.async.t_cljs$core$async28441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28441";

cljs.core.async.t_cljs$core$async28441.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async28441");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28441.
 */
cljs.core.async.__GT_t_cljs$core$async28441 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28441(flag__$1,cb__$1,meta28442){
return (new cljs.core.async.t_cljs$core$async28441(flag__$1,cb__$1,meta28442));
});

}

return (new cljs.core.async.t_cljs$core$async28441(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28444_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28444_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28445_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28445_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3920__auto__ = wport;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28446 = (i + (1));
i = G__28446;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3920__auto__ = ret;
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__3909__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3909__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3909__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___28452 = arguments.length;
var i__4498__auto___28453 = (0);
while(true){
if((i__4498__auto___28453 < len__4497__auto___28452)){
args__4500__auto__.push((arguments[i__4498__auto___28453]));

var G__28454 = (i__4498__auto___28453 + (1));
i__4498__auto___28453 = G__28454;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28449){
var map__28450 = p__28449;
var map__28450__$1 = ((((!((map__28450 == null)))?(((((map__28450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28450):map__28450);
var opts = map__28450__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28447){
var G__28448 = cljs.core.first.call(null,seq28447);
var seq28447__$1 = cljs.core.next.call(null,seq28447);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28448,seq28447__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28456 = arguments.length;
switch (G__28456) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26439__auto___28503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28503){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___28503){
return (function (state_28480){
var state_val_28481 = (state_28480[(1)]);
if((state_val_28481 === (7))){
var inst_28476 = (state_28480[(2)]);
var state_28480__$1 = state_28480;
var statearr_28482_28504 = state_28480__$1;
(statearr_28482_28504[(2)] = inst_28476);

(statearr_28482_28504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (1))){
var state_28480__$1 = state_28480;
var statearr_28483_28505 = state_28480__$1;
(statearr_28483_28505[(2)] = null);

(statearr_28483_28505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (4))){
var inst_28459 = (state_28480[(7)]);
var inst_28459__$1 = (state_28480[(2)]);
var inst_28460 = (inst_28459__$1 == null);
var state_28480__$1 = (function (){var statearr_28484 = state_28480;
(statearr_28484[(7)] = inst_28459__$1);

return statearr_28484;
})();
if(cljs.core.truth_(inst_28460)){
var statearr_28485_28506 = state_28480__$1;
(statearr_28485_28506[(1)] = (5));

} else {
var statearr_28486_28507 = state_28480__$1;
(statearr_28486_28507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (13))){
var state_28480__$1 = state_28480;
var statearr_28487_28508 = state_28480__$1;
(statearr_28487_28508[(2)] = null);

(statearr_28487_28508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (6))){
var inst_28459 = (state_28480[(7)]);
var state_28480__$1 = state_28480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28480__$1,(11),to,inst_28459);
} else {
if((state_val_28481 === (3))){
var inst_28478 = (state_28480[(2)]);
var state_28480__$1 = state_28480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28480__$1,inst_28478);
} else {
if((state_val_28481 === (12))){
var state_28480__$1 = state_28480;
var statearr_28488_28509 = state_28480__$1;
(statearr_28488_28509[(2)] = null);

(statearr_28488_28509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (2))){
var state_28480__$1 = state_28480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28480__$1,(4),from);
} else {
if((state_val_28481 === (11))){
var inst_28469 = (state_28480[(2)]);
var state_28480__$1 = state_28480;
if(cljs.core.truth_(inst_28469)){
var statearr_28489_28510 = state_28480__$1;
(statearr_28489_28510[(1)] = (12));

} else {
var statearr_28490_28511 = state_28480__$1;
(statearr_28490_28511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (9))){
var state_28480__$1 = state_28480;
var statearr_28491_28512 = state_28480__$1;
(statearr_28491_28512[(2)] = null);

(statearr_28491_28512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (5))){
var state_28480__$1 = state_28480;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28492_28513 = state_28480__$1;
(statearr_28492_28513[(1)] = (8));

} else {
var statearr_28493_28514 = state_28480__$1;
(statearr_28493_28514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (14))){
var inst_28474 = (state_28480[(2)]);
var state_28480__$1 = state_28480;
var statearr_28494_28515 = state_28480__$1;
(statearr_28494_28515[(2)] = inst_28474);

(statearr_28494_28515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (10))){
var inst_28466 = (state_28480[(2)]);
var state_28480__$1 = state_28480;
var statearr_28495_28516 = state_28480__$1;
(statearr_28495_28516[(2)] = inst_28466);

(statearr_28495_28516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28481 === (8))){
var inst_28463 = cljs.core.async.close_BANG_.call(null,to);
var state_28480__$1 = state_28480;
var statearr_28496_28517 = state_28480__$1;
(statearr_28496_28517[(2)] = inst_28463);

(statearr_28496_28517[(1)] = (10));


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
});})(c__26439__auto___28503))
;
return ((function (switch__26314__auto__,c__26439__auto___28503){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_28497 = [null,null,null,null,null,null,null,null];
(statearr_28497[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_28497[(1)] = (1));

return statearr_28497;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_28480){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28498){var ex__26318__auto__ = e28498;
var statearr_28499_28518 = state_28480;
(statearr_28499_28518[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28480[(4)]))){
var statearr_28500_28519 = state_28480;
(statearr_28500_28519[(1)] = cljs.core.first.call(null,(state_28480[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28520 = state_28480;
state_28480 = G__28520;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_28480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_28480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___28503))
})();
var state__26441__auto__ = (function (){var statearr_28501 = f__26440__auto__.call(null);
(statearr_28501[(6)] = c__26439__auto___28503);

return statearr_28501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28503))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28521){
var vec__28522 = p__28521;
var v = cljs.core.nth.call(null,vec__28522,(0),null);
var p = cljs.core.nth.call(null,vec__28522,(1),null);
var job = vec__28522;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26439__auto___28698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28698,res,vec__28522,v,p,job,jobs,results){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___28698,res,vec__28522,v,p,job,jobs,results){
return (function (state_28529){
var state_val_28530 = (state_28529[(1)]);
if((state_val_28530 === (1))){
var state_28529__$1 = state_28529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28529__$1,(2),res,v);
} else {
if((state_val_28530 === (2))){
var inst_28526 = (state_28529[(2)]);
var inst_28527 = cljs.core.async.close_BANG_.call(null,res);
var state_28529__$1 = (function (){var statearr_28531 = state_28529;
(statearr_28531[(7)] = inst_28526);

return statearr_28531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28529__$1,inst_28527);
} else {
return null;
}
}
});})(c__26439__auto___28698,res,vec__28522,v,p,job,jobs,results))
;
return ((function (switch__26314__auto__,c__26439__auto___28698,res,vec__28522,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0 = (function (){
var statearr_28532 = [null,null,null,null,null,null,null,null];
(statearr_28532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__);

(statearr_28532[(1)] = (1));

return statearr_28532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1 = (function (state_28529){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28533){var ex__26318__auto__ = e28533;
var statearr_28534_28699 = state_28529;
(statearr_28534_28699[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28529[(4)]))){
var statearr_28535_28700 = state_28529;
(statearr_28535_28700[(1)] = cljs.core.first.call(null,(state_28529[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28701 = state_28529;
state_28529 = G__28701;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = function(state_28529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1.call(this,state_28529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___28698,res,vec__28522,v,p,job,jobs,results))
})();
var state__26441__auto__ = (function (){var statearr_28536 = f__26440__auto__.call(null);
(statearr_28536[(6)] = c__26439__auto___28698);

return statearr_28536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28698,res,vec__28522,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28537){
var vec__28538 = p__28537;
var v = cljs.core.nth.call(null,vec__28538,(0),null);
var p = cljs.core.nth.call(null,vec__28538,(1),null);
var job = vec__28538;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4374__auto___28702 = n;
var __28703 = (0);
while(true){
if((__28703 < n__4374__auto___28702)){
var G__28541_28704 = type;
var G__28541_28705__$1 = (((G__28541_28704 instanceof cljs.core.Keyword))?G__28541_28704.fqn:null);
switch (G__28541_28705__$1) {
case "compute":
var c__26439__auto___28707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28703,c__26439__auto___28707,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (__28703,c__26439__auto___28707,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async){
return (function (state_28554){
var state_val_28555 = (state_28554[(1)]);
if((state_val_28555 === (1))){
var state_28554__$1 = state_28554;
var statearr_28556_28708 = state_28554__$1;
(statearr_28556_28708[(2)] = null);

(statearr_28556_28708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (2))){
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28554__$1,(4),jobs);
} else {
if((state_val_28555 === (3))){
var inst_28552 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28554__$1,inst_28552);
} else {
if((state_val_28555 === (4))){
var inst_28544 = (state_28554[(2)]);
var inst_28545 = process.call(null,inst_28544);
var state_28554__$1 = state_28554;
if(cljs.core.truth_(inst_28545)){
var statearr_28557_28709 = state_28554__$1;
(statearr_28557_28709[(1)] = (5));

} else {
var statearr_28558_28710 = state_28554__$1;
(statearr_28558_28710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (5))){
var state_28554__$1 = state_28554;
var statearr_28559_28711 = state_28554__$1;
(statearr_28559_28711[(2)] = null);

(statearr_28559_28711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (6))){
var state_28554__$1 = state_28554;
var statearr_28560_28712 = state_28554__$1;
(statearr_28560_28712[(2)] = null);

(statearr_28560_28712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (7))){
var inst_28550 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28561_28713 = state_28554__$1;
(statearr_28561_28713[(2)] = inst_28550);

(statearr_28561_28713[(1)] = (3));


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
});})(__28703,c__26439__auto___28707,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async))
;
return ((function (__28703,switch__26314__auto__,c__26439__auto___28707,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0 = (function (){
var statearr_28562 = [null,null,null,null,null,null,null];
(statearr_28562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__);

(statearr_28562[(1)] = (1));

return statearr_28562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1 = (function (state_28554){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28563){var ex__26318__auto__ = e28563;
var statearr_28564_28714 = state_28554;
(statearr_28564_28714[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28554[(4)]))){
var statearr_28565_28715 = state_28554;
(statearr_28565_28715[(1)] = cljs.core.first.call(null,(state_28554[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28716 = state_28554;
state_28554 = G__28716;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = function(state_28554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1.call(this,state_28554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__;
})()
;})(__28703,switch__26314__auto__,c__26439__auto___28707,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_28566 = f__26440__auto__.call(null);
(statearr_28566[(6)] = c__26439__auto___28707);

return statearr_28566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(__28703,c__26439__auto___28707,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async))
);


break;
case "async":
var c__26439__auto___28717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28703,c__26439__auto___28717,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (__28703,c__26439__auto___28717,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async){
return (function (state_28579){
var state_val_28580 = (state_28579[(1)]);
if((state_val_28580 === (1))){
var state_28579__$1 = state_28579;
var statearr_28581_28718 = state_28579__$1;
(statearr_28581_28718[(2)] = null);

(statearr_28581_28718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (2))){
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28579__$1,(4),jobs);
} else {
if((state_val_28580 === (3))){
var inst_28577 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28579__$1,inst_28577);
} else {
if((state_val_28580 === (4))){
var inst_28569 = (state_28579[(2)]);
var inst_28570 = async.call(null,inst_28569);
var state_28579__$1 = state_28579;
if(cljs.core.truth_(inst_28570)){
var statearr_28582_28719 = state_28579__$1;
(statearr_28582_28719[(1)] = (5));

} else {
var statearr_28583_28720 = state_28579__$1;
(statearr_28583_28720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (5))){
var state_28579__$1 = state_28579;
var statearr_28584_28721 = state_28579__$1;
(statearr_28584_28721[(2)] = null);

(statearr_28584_28721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (6))){
var state_28579__$1 = state_28579;
var statearr_28585_28722 = state_28579__$1;
(statearr_28585_28722[(2)] = null);

(statearr_28585_28722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (7))){
var inst_28575 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28586_28723 = state_28579__$1;
(statearr_28586_28723[(2)] = inst_28575);

(statearr_28586_28723[(1)] = (3));


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
});})(__28703,c__26439__auto___28717,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async))
;
return ((function (__28703,switch__26314__auto__,c__26439__auto___28717,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0 = (function (){
var statearr_28587 = [null,null,null,null,null,null,null];
(statearr_28587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__);

(statearr_28587[(1)] = (1));

return statearr_28587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1 = (function (state_28579){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28588){var ex__26318__auto__ = e28588;
var statearr_28589_28724 = state_28579;
(statearr_28589_28724[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28579[(4)]))){
var statearr_28590_28725 = state_28579;
(statearr_28590_28725[(1)] = cljs.core.first.call(null,(state_28579[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28726 = state_28579;
state_28579 = G__28726;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = function(state_28579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1.call(this,state_28579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__;
})()
;})(__28703,switch__26314__auto__,c__26439__auto___28717,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_28591 = f__26440__auto__.call(null);
(statearr_28591[(6)] = c__26439__auto___28717);

return statearr_28591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(__28703,c__26439__auto___28717,G__28541_28704,G__28541_28705__$1,n__4374__auto___28702,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28541_28705__$1)].join('')));

}

var G__28727 = (__28703 + (1));
__28703 = G__28727;
continue;
} else {
}
break;
}

var c__26439__auto___28728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28728,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___28728,jobs,results,process,async){
return (function (state_28613){
var state_val_28614 = (state_28613[(1)]);
if((state_val_28614 === (7))){
var inst_28609 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28615_28729 = state_28613__$1;
(statearr_28615_28729[(2)] = inst_28609);

(statearr_28615_28729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (1))){
var state_28613__$1 = state_28613;
var statearr_28616_28730 = state_28613__$1;
(statearr_28616_28730[(2)] = null);

(statearr_28616_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (4))){
var inst_28594 = (state_28613[(7)]);
var inst_28594__$1 = (state_28613[(2)]);
var inst_28595 = (inst_28594__$1 == null);
var state_28613__$1 = (function (){var statearr_28617 = state_28613;
(statearr_28617[(7)] = inst_28594__$1);

return statearr_28617;
})();
if(cljs.core.truth_(inst_28595)){
var statearr_28618_28731 = state_28613__$1;
(statearr_28618_28731[(1)] = (5));

} else {
var statearr_28619_28732 = state_28613__$1;
(statearr_28619_28732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (6))){
var inst_28599 = (state_28613[(8)]);
var inst_28594 = (state_28613[(7)]);
var inst_28599__$1 = cljs.core.async.chan.call(null,(1));
var inst_28600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28601 = [inst_28594,inst_28599__$1];
var inst_28602 = (new cljs.core.PersistentVector(null,2,(5),inst_28600,inst_28601,null));
var state_28613__$1 = (function (){var statearr_28620 = state_28613;
(statearr_28620[(8)] = inst_28599__$1);

return statearr_28620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28613__$1,(8),jobs,inst_28602);
} else {
if((state_val_28614 === (3))){
var inst_28611 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28613__$1,inst_28611);
} else {
if((state_val_28614 === (2))){
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28613__$1,(4),from);
} else {
if((state_val_28614 === (9))){
var inst_28606 = (state_28613[(2)]);
var state_28613__$1 = (function (){var statearr_28621 = state_28613;
(statearr_28621[(9)] = inst_28606);

return statearr_28621;
})();
var statearr_28622_28733 = state_28613__$1;
(statearr_28622_28733[(2)] = null);

(statearr_28622_28733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (5))){
var inst_28597 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28613__$1 = state_28613;
var statearr_28623_28734 = state_28613__$1;
(statearr_28623_28734[(2)] = inst_28597);

(statearr_28623_28734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (8))){
var inst_28599 = (state_28613[(8)]);
var inst_28604 = (state_28613[(2)]);
var state_28613__$1 = (function (){var statearr_28624 = state_28613;
(statearr_28624[(10)] = inst_28604);

return statearr_28624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28613__$1,(9),results,inst_28599);
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
});})(c__26439__auto___28728,jobs,results,process,async))
;
return ((function (switch__26314__auto__,c__26439__auto___28728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0 = (function (){
var statearr_28625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__);

(statearr_28625[(1)] = (1));

return statearr_28625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1 = (function (state_28613){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28626){var ex__26318__auto__ = e28626;
var statearr_28627_28735 = state_28613;
(statearr_28627_28735[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28613[(4)]))){
var statearr_28628_28736 = state_28613;
(statearr_28628_28736[(1)] = cljs.core.first.call(null,(state_28613[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28737 = state_28613;
state_28613 = G__28737;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = function(state_28613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1.call(this,state_28613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___28728,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_28629 = f__26440__auto__.call(null);
(statearr_28629[(6)] = c__26439__auto___28728);

return statearr_28629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28728,jobs,results,process,async))
);


var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__,jobs,results,process,async){
return (function (state_28667){
var state_val_28668 = (state_28667[(1)]);
if((state_val_28668 === (7))){
var inst_28663 = (state_28667[(2)]);
var state_28667__$1 = state_28667;
var statearr_28669_28738 = state_28667__$1;
(statearr_28669_28738[(2)] = inst_28663);

(statearr_28669_28738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (20))){
var state_28667__$1 = state_28667;
var statearr_28670_28739 = state_28667__$1;
(statearr_28670_28739[(2)] = null);

(statearr_28670_28739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (1))){
var state_28667__$1 = state_28667;
var statearr_28671_28740 = state_28667__$1;
(statearr_28671_28740[(2)] = null);

(statearr_28671_28740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (4))){
var inst_28632 = (state_28667[(7)]);
var inst_28632__$1 = (state_28667[(2)]);
var inst_28633 = (inst_28632__$1 == null);
var state_28667__$1 = (function (){var statearr_28672 = state_28667;
(statearr_28672[(7)] = inst_28632__$1);

return statearr_28672;
})();
if(cljs.core.truth_(inst_28633)){
var statearr_28673_28741 = state_28667__$1;
(statearr_28673_28741[(1)] = (5));

} else {
var statearr_28674_28742 = state_28667__$1;
(statearr_28674_28742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (15))){
var inst_28645 = (state_28667[(8)]);
var state_28667__$1 = state_28667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28667__$1,(18),to,inst_28645);
} else {
if((state_val_28668 === (21))){
var inst_28658 = (state_28667[(2)]);
var state_28667__$1 = state_28667;
var statearr_28675_28743 = state_28667__$1;
(statearr_28675_28743[(2)] = inst_28658);

(statearr_28675_28743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (13))){
var inst_28660 = (state_28667[(2)]);
var state_28667__$1 = (function (){var statearr_28676 = state_28667;
(statearr_28676[(9)] = inst_28660);

return statearr_28676;
})();
var statearr_28677_28744 = state_28667__$1;
(statearr_28677_28744[(2)] = null);

(statearr_28677_28744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (6))){
var inst_28632 = (state_28667[(7)]);
var state_28667__$1 = state_28667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28667__$1,(11),inst_28632);
} else {
if((state_val_28668 === (17))){
var inst_28653 = (state_28667[(2)]);
var state_28667__$1 = state_28667;
if(cljs.core.truth_(inst_28653)){
var statearr_28678_28745 = state_28667__$1;
(statearr_28678_28745[(1)] = (19));

} else {
var statearr_28679_28746 = state_28667__$1;
(statearr_28679_28746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (3))){
var inst_28665 = (state_28667[(2)]);
var state_28667__$1 = state_28667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28667__$1,inst_28665);
} else {
if((state_val_28668 === (12))){
var inst_28642 = (state_28667[(10)]);
var state_28667__$1 = state_28667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28667__$1,(14),inst_28642);
} else {
if((state_val_28668 === (2))){
var state_28667__$1 = state_28667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28667__$1,(4),results);
} else {
if((state_val_28668 === (19))){
var state_28667__$1 = state_28667;
var statearr_28680_28747 = state_28667__$1;
(statearr_28680_28747[(2)] = null);

(statearr_28680_28747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (11))){
var inst_28642 = (state_28667[(2)]);
var state_28667__$1 = (function (){var statearr_28681 = state_28667;
(statearr_28681[(10)] = inst_28642);

return statearr_28681;
})();
var statearr_28682_28748 = state_28667__$1;
(statearr_28682_28748[(2)] = null);

(statearr_28682_28748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (9))){
var state_28667__$1 = state_28667;
var statearr_28683_28749 = state_28667__$1;
(statearr_28683_28749[(2)] = null);

(statearr_28683_28749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (5))){
var state_28667__$1 = state_28667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28684_28750 = state_28667__$1;
(statearr_28684_28750[(1)] = (8));

} else {
var statearr_28685_28751 = state_28667__$1;
(statearr_28685_28751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (14))){
var inst_28647 = (state_28667[(11)]);
var inst_28645 = (state_28667[(8)]);
var inst_28645__$1 = (state_28667[(2)]);
var inst_28646 = (inst_28645__$1 == null);
var inst_28647__$1 = cljs.core.not.call(null,inst_28646);
var state_28667__$1 = (function (){var statearr_28686 = state_28667;
(statearr_28686[(11)] = inst_28647__$1);

(statearr_28686[(8)] = inst_28645__$1);

return statearr_28686;
})();
if(inst_28647__$1){
var statearr_28687_28752 = state_28667__$1;
(statearr_28687_28752[(1)] = (15));

} else {
var statearr_28688_28753 = state_28667__$1;
(statearr_28688_28753[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (16))){
var inst_28647 = (state_28667[(11)]);
var state_28667__$1 = state_28667;
var statearr_28689_28754 = state_28667__$1;
(statearr_28689_28754[(2)] = inst_28647);

(statearr_28689_28754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (10))){
var inst_28639 = (state_28667[(2)]);
var state_28667__$1 = state_28667;
var statearr_28690_28755 = state_28667__$1;
(statearr_28690_28755[(2)] = inst_28639);

(statearr_28690_28755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (18))){
var inst_28650 = (state_28667[(2)]);
var state_28667__$1 = state_28667;
var statearr_28691_28756 = state_28667__$1;
(statearr_28691_28756[(2)] = inst_28650);

(statearr_28691_28756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28668 === (8))){
var inst_28636 = cljs.core.async.close_BANG_.call(null,to);
var state_28667__$1 = state_28667;
var statearr_28692_28757 = state_28667__$1;
(statearr_28692_28757[(2)] = inst_28636);

(statearr_28692_28757[(1)] = (10));


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
});})(c__26439__auto__,jobs,results,process,async))
;
return ((function (switch__26314__auto__,c__26439__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0 = (function (){
var statearr_28693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__);

(statearr_28693[(1)] = (1));

return statearr_28693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1 = (function (state_28667){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28694){var ex__26318__auto__ = e28694;
var statearr_28695_28758 = state_28667;
(statearr_28695_28758[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28667[(4)]))){
var statearr_28696_28759 = state_28667;
(statearr_28696_28759[(1)] = cljs.core.first.call(null,(state_28667[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28760 = state_28667;
state_28667 = G__28760;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__ = function(state_28667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1.call(this,state_28667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_28697 = f__26440__auto__.call(null);
(statearr_28697[(6)] = c__26439__auto__);

return statearr_28697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,jobs,results,process,async))
);

return c__26439__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28762 = arguments.length;
switch (G__28762) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28765 = arguments.length;
switch (G__28765) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28768 = arguments.length;
switch (G__28768) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26439__auto___28818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28818,tc,fc){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___28818,tc,fc){
return (function (state_28794){
var state_val_28795 = (state_28794[(1)]);
if((state_val_28795 === (7))){
var inst_28790 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
var statearr_28796_28819 = state_28794__$1;
(statearr_28796_28819[(2)] = inst_28790);

(statearr_28796_28819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (1))){
var state_28794__$1 = state_28794;
var statearr_28797_28820 = state_28794__$1;
(statearr_28797_28820[(2)] = null);

(statearr_28797_28820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (4))){
var inst_28771 = (state_28794[(7)]);
var inst_28771__$1 = (state_28794[(2)]);
var inst_28772 = (inst_28771__$1 == null);
var state_28794__$1 = (function (){var statearr_28798 = state_28794;
(statearr_28798[(7)] = inst_28771__$1);

return statearr_28798;
})();
if(cljs.core.truth_(inst_28772)){
var statearr_28799_28821 = state_28794__$1;
(statearr_28799_28821[(1)] = (5));

} else {
var statearr_28800_28822 = state_28794__$1;
(statearr_28800_28822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (13))){
var state_28794__$1 = state_28794;
var statearr_28801_28823 = state_28794__$1;
(statearr_28801_28823[(2)] = null);

(statearr_28801_28823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (6))){
var inst_28771 = (state_28794[(7)]);
var inst_28777 = p.call(null,inst_28771);
var state_28794__$1 = state_28794;
if(cljs.core.truth_(inst_28777)){
var statearr_28802_28824 = state_28794__$1;
(statearr_28802_28824[(1)] = (9));

} else {
var statearr_28803_28825 = state_28794__$1;
(statearr_28803_28825[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (3))){
var inst_28792 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28794__$1,inst_28792);
} else {
if((state_val_28795 === (12))){
var state_28794__$1 = state_28794;
var statearr_28804_28826 = state_28794__$1;
(statearr_28804_28826[(2)] = null);

(statearr_28804_28826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (2))){
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28794__$1,(4),ch);
} else {
if((state_val_28795 === (11))){
var inst_28771 = (state_28794[(7)]);
var inst_28781 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28794__$1,(8),inst_28781,inst_28771);
} else {
if((state_val_28795 === (9))){
var state_28794__$1 = state_28794;
var statearr_28805_28827 = state_28794__$1;
(statearr_28805_28827[(2)] = tc);

(statearr_28805_28827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (5))){
var inst_28774 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28775 = cljs.core.async.close_BANG_.call(null,fc);
var state_28794__$1 = (function (){var statearr_28806 = state_28794;
(statearr_28806[(8)] = inst_28774);

return statearr_28806;
})();
var statearr_28807_28828 = state_28794__$1;
(statearr_28807_28828[(2)] = inst_28775);

(statearr_28807_28828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (14))){
var inst_28788 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
var statearr_28808_28829 = state_28794__$1;
(statearr_28808_28829[(2)] = inst_28788);

(statearr_28808_28829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (10))){
var state_28794__$1 = state_28794;
var statearr_28809_28830 = state_28794__$1;
(statearr_28809_28830[(2)] = fc);

(statearr_28809_28830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (8))){
var inst_28783 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
if(cljs.core.truth_(inst_28783)){
var statearr_28810_28831 = state_28794__$1;
(statearr_28810_28831[(1)] = (12));

} else {
var statearr_28811_28832 = state_28794__$1;
(statearr_28811_28832[(1)] = (13));

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
});})(c__26439__auto___28818,tc,fc))
;
return ((function (switch__26314__auto__,c__26439__auto___28818,tc,fc){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_28812 = [null,null,null,null,null,null,null,null,null];
(statearr_28812[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_28812[(1)] = (1));

return statearr_28812;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_28794){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28813){var ex__26318__auto__ = e28813;
var statearr_28814_28833 = state_28794;
(statearr_28814_28833[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28794[(4)]))){
var statearr_28815_28834 = state_28794;
(statearr_28815_28834[(1)] = cljs.core.first.call(null,(state_28794[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28835 = state_28794;
state_28794 = G__28835;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_28794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_28794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___28818,tc,fc))
})();
var state__26441__auto__ = (function (){var statearr_28816 = f__26440__auto__.call(null);
(statearr_28816[(6)] = c__26439__auto___28818);

return statearr_28816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28818,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__){
return (function (state_28857){
var state_val_28858 = (state_28857[(1)]);
if((state_val_28858 === (7))){
var inst_28853 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28859_28878 = state_28857__$1;
(statearr_28859_28878[(2)] = inst_28853);

(statearr_28859_28878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (1))){
var inst_28836 = init;
var inst_28837 = inst_28836;
var state_28857__$1 = (function (){var statearr_28860 = state_28857;
(statearr_28860[(7)] = inst_28837);

return statearr_28860;
})();
var statearr_28861_28879 = state_28857__$1;
(statearr_28861_28879[(2)] = null);

(statearr_28861_28879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (4))){
var inst_28840 = (state_28857[(8)]);
var inst_28840__$1 = (state_28857[(2)]);
var inst_28841 = (inst_28840__$1 == null);
var state_28857__$1 = (function (){var statearr_28862 = state_28857;
(statearr_28862[(8)] = inst_28840__$1);

return statearr_28862;
})();
if(cljs.core.truth_(inst_28841)){
var statearr_28863_28880 = state_28857__$1;
(statearr_28863_28880[(1)] = (5));

} else {
var statearr_28864_28881 = state_28857__$1;
(statearr_28864_28881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (6))){
var inst_28844 = (state_28857[(9)]);
var inst_28837 = (state_28857[(7)]);
var inst_28840 = (state_28857[(8)]);
var inst_28844__$1 = f.call(null,inst_28837,inst_28840);
var inst_28845 = cljs.core.reduced_QMARK_.call(null,inst_28844__$1);
var state_28857__$1 = (function (){var statearr_28865 = state_28857;
(statearr_28865[(9)] = inst_28844__$1);

return statearr_28865;
})();
if(inst_28845){
var statearr_28866_28882 = state_28857__$1;
(statearr_28866_28882[(1)] = (8));

} else {
var statearr_28867_28883 = state_28857__$1;
(statearr_28867_28883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (3))){
var inst_28855 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28857__$1,inst_28855);
} else {
if((state_val_28858 === (2))){
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28857__$1,(4),ch);
} else {
if((state_val_28858 === (9))){
var inst_28844 = (state_28857[(9)]);
var inst_28837 = inst_28844;
var state_28857__$1 = (function (){var statearr_28868 = state_28857;
(statearr_28868[(7)] = inst_28837);

return statearr_28868;
})();
var statearr_28869_28884 = state_28857__$1;
(statearr_28869_28884[(2)] = null);

(statearr_28869_28884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (5))){
var inst_28837 = (state_28857[(7)]);
var state_28857__$1 = state_28857;
var statearr_28870_28885 = state_28857__$1;
(statearr_28870_28885[(2)] = inst_28837);

(statearr_28870_28885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (10))){
var inst_28851 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28871_28886 = state_28857__$1;
(statearr_28871_28886[(2)] = inst_28851);

(statearr_28871_28886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (8))){
var inst_28844 = (state_28857[(9)]);
var inst_28847 = cljs.core.deref.call(null,inst_28844);
var state_28857__$1 = state_28857;
var statearr_28872_28887 = state_28857__$1;
(statearr_28872_28887[(2)] = inst_28847);

(statearr_28872_28887[(1)] = (10));


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
});})(c__26439__auto__))
;
return ((function (switch__26314__auto__,c__26439__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26315__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26315__auto____0 = (function (){
var statearr_28873 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28873[(0)] = cljs$core$async$reduce_$_state_machine__26315__auto__);

(statearr_28873[(1)] = (1));

return statearr_28873;
});
var cljs$core$async$reduce_$_state_machine__26315__auto____1 = (function (state_28857){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28874){var ex__26318__auto__ = e28874;
var statearr_28875_28888 = state_28857;
(statearr_28875_28888[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28857[(4)]))){
var statearr_28876_28889 = state_28857;
(statearr_28876_28889[(1)] = cljs.core.first.call(null,(state_28857[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28890 = state_28857;
state_28857 = G__28890;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26315__auto__ = function(state_28857){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26315__auto____1.call(this,state_28857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26315__auto____0;
cljs$core$async$reduce_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26315__auto____1;
return cljs$core$async$reduce_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_28877 = f__26440__auto__.call(null);
(statearr_28877[(6)] = c__26439__auto__);

return statearr_28877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,f__$1){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__,f__$1){
return (function (state_28896){
var state_val_28897 = (state_28896[(1)]);
if((state_val_28897 === (1))){
var inst_28891 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28896__$1 = state_28896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28896__$1,(2),inst_28891);
} else {
if((state_val_28897 === (2))){
var inst_28893 = (state_28896[(2)]);
var inst_28894 = f__$1.call(null,inst_28893);
var state_28896__$1 = state_28896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28896__$1,inst_28894);
} else {
return null;
}
}
});})(c__26439__auto__,f__$1))
;
return ((function (switch__26314__auto__,c__26439__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26315__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26315__auto____0 = (function (){
var statearr_28898 = [null,null,null,null,null,null,null];
(statearr_28898[(0)] = cljs$core$async$transduce_$_state_machine__26315__auto__);

(statearr_28898[(1)] = (1));

return statearr_28898;
});
var cljs$core$async$transduce_$_state_machine__26315__auto____1 = (function (state_28896){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28899){var ex__26318__auto__ = e28899;
var statearr_28900_28903 = state_28896;
(statearr_28900_28903[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28896[(4)]))){
var statearr_28901_28904 = state_28896;
(statearr_28901_28904[(1)] = cljs.core.first.call(null,(state_28896[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28905 = state_28896;
state_28896 = G__28905;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26315__auto__ = function(state_28896){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26315__auto____1.call(this,state_28896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26315__auto____0;
cljs$core$async$transduce_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26315__auto____1;
return cljs$core$async$transduce_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__,f__$1))
})();
var state__26441__auto__ = (function (){var statearr_28902 = f__26440__auto__.call(null);
(statearr_28902[(6)] = c__26439__auto__);

return statearr_28902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,f__$1))
);

return c__26439__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__28907 = arguments.length;
switch (G__28907) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__){
return (function (state_28932){
var state_val_28933 = (state_28932[(1)]);
if((state_val_28933 === (7))){
var inst_28914 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
var statearr_28934_28956 = state_28932__$1;
(statearr_28934_28956[(2)] = inst_28914);

(statearr_28934_28956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (1))){
var inst_28908 = cljs.core.seq.call(null,coll);
var inst_28909 = inst_28908;
var state_28932__$1 = (function (){var statearr_28935 = state_28932;
(statearr_28935[(7)] = inst_28909);

return statearr_28935;
})();
var statearr_28936_28957 = state_28932__$1;
(statearr_28936_28957[(2)] = null);

(statearr_28936_28957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (4))){
var inst_28909 = (state_28932[(7)]);
var inst_28912 = cljs.core.first.call(null,inst_28909);
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28932__$1,(7),ch,inst_28912);
} else {
if((state_val_28933 === (13))){
var inst_28926 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
var statearr_28937_28958 = state_28932__$1;
(statearr_28937_28958[(2)] = inst_28926);

(statearr_28937_28958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (6))){
var inst_28917 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
if(cljs.core.truth_(inst_28917)){
var statearr_28938_28959 = state_28932__$1;
(statearr_28938_28959[(1)] = (8));

} else {
var statearr_28939_28960 = state_28932__$1;
(statearr_28939_28960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (3))){
var inst_28930 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28932__$1,inst_28930);
} else {
if((state_val_28933 === (12))){
var state_28932__$1 = state_28932;
var statearr_28940_28961 = state_28932__$1;
(statearr_28940_28961[(2)] = null);

(statearr_28940_28961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (2))){
var inst_28909 = (state_28932[(7)]);
var state_28932__$1 = state_28932;
if(cljs.core.truth_(inst_28909)){
var statearr_28941_28962 = state_28932__$1;
(statearr_28941_28962[(1)] = (4));

} else {
var statearr_28942_28963 = state_28932__$1;
(statearr_28942_28963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (11))){
var inst_28923 = cljs.core.async.close_BANG_.call(null,ch);
var state_28932__$1 = state_28932;
var statearr_28943_28964 = state_28932__$1;
(statearr_28943_28964[(2)] = inst_28923);

(statearr_28943_28964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (9))){
var state_28932__$1 = state_28932;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28944_28965 = state_28932__$1;
(statearr_28944_28965[(1)] = (11));

} else {
var statearr_28945_28966 = state_28932__$1;
(statearr_28945_28966[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (5))){
var inst_28909 = (state_28932[(7)]);
var state_28932__$1 = state_28932;
var statearr_28946_28967 = state_28932__$1;
(statearr_28946_28967[(2)] = inst_28909);

(statearr_28946_28967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (10))){
var inst_28928 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
var statearr_28947_28968 = state_28932__$1;
(statearr_28947_28968[(2)] = inst_28928);

(statearr_28947_28968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (8))){
var inst_28909 = (state_28932[(7)]);
var inst_28919 = cljs.core.next.call(null,inst_28909);
var inst_28909__$1 = inst_28919;
var state_28932__$1 = (function (){var statearr_28948 = state_28932;
(statearr_28948[(7)] = inst_28909__$1);

return statearr_28948;
})();
var statearr_28949_28969 = state_28932__$1;
(statearr_28949_28969[(2)] = null);

(statearr_28949_28969[(1)] = (2));


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
});})(c__26439__auto__))
;
return ((function (switch__26314__auto__,c__26439__auto__){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_28950 = [null,null,null,null,null,null,null,null];
(statearr_28950[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_28950[(1)] = (1));

return statearr_28950;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_28932){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_28932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e28951){var ex__26318__auto__ = e28951;
var statearr_28952_28970 = state_28932;
(statearr_28952_28970[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_28932[(4)]))){
var statearr_28953_28971 = state_28932;
(statearr_28953_28971[(1)] = cljs.core.first.call(null,(state_28932[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28972 = state_28932;
state_28932 = G__28972;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_28932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_28932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_28954 = f__26440__auto__.call(null);
(statearr_28954[(6)] = c__26439__auto__);

return statearr_28954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28974 = arguments.length;
switch (G__28974) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4209__auto__ = (((_ == null))?null:_);
var m__4210__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,_);
} else {
var m__4210__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4210__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m);
} else {
var m__4210__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28976 = (function (ch,cs,meta28977){
this.ch = ch;
this.cs = cs;
this.meta28977 = meta28977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28978,meta28977__$1){
var self__ = this;
var _28978__$1 = this;
return (new cljs.core.async.t_cljs$core$async28976(self__.ch,self__.cs,meta28977__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28978){
var self__ = this;
var _28978__$1 = this;
return self__.meta28977;
});})(cs))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28976.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28977","meta28977",-6333100,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28976";

cljs.core.async.t_cljs$core$async28976.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async28976");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28976.
 */
cljs.core.async.__GT_t_cljs$core$async28976 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28976(ch__$1,cs__$1,meta28977){
return (new cljs.core.async.t_cljs$core$async28976(ch__$1,cs__$1,meta28977));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28976(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26439__auto___29195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___29195,cs,m,dchan,dctr,done){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___29195,cs,m,dchan,dctr,done){
return (function (state_29111){
var state_val_29112 = (state_29111[(1)]);
if((state_val_29112 === (7))){
var inst_29107 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29113_29196 = state_29111__$1;
(statearr_29113_29196[(2)] = inst_29107);

(statearr_29113_29196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (20))){
var inst_29012 = (state_29111[(7)]);
var inst_29024 = cljs.core.first.call(null,inst_29012);
var inst_29025 = cljs.core.nth.call(null,inst_29024,(0),null);
var inst_29026 = cljs.core.nth.call(null,inst_29024,(1),null);
var state_29111__$1 = (function (){var statearr_29114 = state_29111;
(statearr_29114[(8)] = inst_29025);

return statearr_29114;
})();
if(cljs.core.truth_(inst_29026)){
var statearr_29115_29197 = state_29111__$1;
(statearr_29115_29197[(1)] = (22));

} else {
var statearr_29116_29198 = state_29111__$1;
(statearr_29116_29198[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (27))){
var inst_29056 = (state_29111[(9)]);
var inst_29061 = (state_29111[(10)]);
var inst_29054 = (state_29111[(11)]);
var inst_28981 = (state_29111[(12)]);
var inst_29061__$1 = cljs.core._nth.call(null,inst_29054,inst_29056);
var inst_29062 = cljs.core.async.put_BANG_.call(null,inst_29061__$1,inst_28981,done);
var state_29111__$1 = (function (){var statearr_29117 = state_29111;
(statearr_29117[(10)] = inst_29061__$1);

return statearr_29117;
})();
if(cljs.core.truth_(inst_29062)){
var statearr_29118_29199 = state_29111__$1;
(statearr_29118_29199[(1)] = (30));

} else {
var statearr_29119_29200 = state_29111__$1;
(statearr_29119_29200[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (1))){
var state_29111__$1 = state_29111;
var statearr_29120_29201 = state_29111__$1;
(statearr_29120_29201[(2)] = null);

(statearr_29120_29201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (24))){
var inst_29012 = (state_29111[(7)]);
var inst_29031 = (state_29111[(2)]);
var inst_29032 = cljs.core.next.call(null,inst_29012);
var inst_28990 = inst_29032;
var inst_28991 = null;
var inst_28992 = (0);
var inst_28993 = (0);
var state_29111__$1 = (function (){var statearr_29121 = state_29111;
(statearr_29121[(13)] = inst_29031);

(statearr_29121[(14)] = inst_28991);

(statearr_29121[(15)] = inst_28993);

(statearr_29121[(16)] = inst_28992);

(statearr_29121[(17)] = inst_28990);

return statearr_29121;
})();
var statearr_29122_29202 = state_29111__$1;
(statearr_29122_29202[(2)] = null);

(statearr_29122_29202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (39))){
var state_29111__$1 = state_29111;
var statearr_29126_29203 = state_29111__$1;
(statearr_29126_29203[(2)] = null);

(statearr_29126_29203[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (4))){
var inst_28981 = (state_29111[(12)]);
var inst_28981__$1 = (state_29111[(2)]);
var inst_28982 = (inst_28981__$1 == null);
var state_29111__$1 = (function (){var statearr_29127 = state_29111;
(statearr_29127[(12)] = inst_28981__$1);

return statearr_29127;
})();
if(cljs.core.truth_(inst_28982)){
var statearr_29128_29204 = state_29111__$1;
(statearr_29128_29204[(1)] = (5));

} else {
var statearr_29129_29205 = state_29111__$1;
(statearr_29129_29205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (15))){
var inst_28991 = (state_29111[(14)]);
var inst_28993 = (state_29111[(15)]);
var inst_28992 = (state_29111[(16)]);
var inst_28990 = (state_29111[(17)]);
var inst_29008 = (state_29111[(2)]);
var inst_29009 = (inst_28993 + (1));
var tmp29123 = inst_28991;
var tmp29124 = inst_28992;
var tmp29125 = inst_28990;
var inst_28990__$1 = tmp29125;
var inst_28991__$1 = tmp29123;
var inst_28992__$1 = tmp29124;
var inst_28993__$1 = inst_29009;
var state_29111__$1 = (function (){var statearr_29130 = state_29111;
(statearr_29130[(18)] = inst_29008);

(statearr_29130[(14)] = inst_28991__$1);

(statearr_29130[(15)] = inst_28993__$1);

(statearr_29130[(16)] = inst_28992__$1);

(statearr_29130[(17)] = inst_28990__$1);

return statearr_29130;
})();
var statearr_29131_29206 = state_29111__$1;
(statearr_29131_29206[(2)] = null);

(statearr_29131_29206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (21))){
var inst_29035 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29135_29207 = state_29111__$1;
(statearr_29135_29207[(2)] = inst_29035);

(statearr_29135_29207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (31))){
var inst_29061 = (state_29111[(10)]);
var inst_29065 = cljs.core.async.untap_STAR_.call(null,m,inst_29061);
var state_29111__$1 = state_29111;
var statearr_29136_29208 = state_29111__$1;
(statearr_29136_29208[(2)] = inst_29065);

(statearr_29136_29208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (32))){
var inst_29056 = (state_29111[(9)]);
var inst_29055 = (state_29111[(19)]);
var inst_29054 = (state_29111[(11)]);
var inst_29053 = (state_29111[(20)]);
var inst_29067 = (state_29111[(2)]);
var inst_29068 = (inst_29056 + (1));
var tmp29132 = inst_29055;
var tmp29133 = inst_29054;
var tmp29134 = inst_29053;
var inst_29053__$1 = tmp29134;
var inst_29054__$1 = tmp29133;
var inst_29055__$1 = tmp29132;
var inst_29056__$1 = inst_29068;
var state_29111__$1 = (function (){var statearr_29137 = state_29111;
(statearr_29137[(21)] = inst_29067);

(statearr_29137[(9)] = inst_29056__$1);

(statearr_29137[(19)] = inst_29055__$1);

(statearr_29137[(11)] = inst_29054__$1);

(statearr_29137[(20)] = inst_29053__$1);

return statearr_29137;
})();
var statearr_29138_29209 = state_29111__$1;
(statearr_29138_29209[(2)] = null);

(statearr_29138_29209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (40))){
var inst_29080 = (state_29111[(22)]);
var inst_29084 = cljs.core.async.untap_STAR_.call(null,m,inst_29080);
var state_29111__$1 = state_29111;
var statearr_29139_29210 = state_29111__$1;
(statearr_29139_29210[(2)] = inst_29084);

(statearr_29139_29210[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (33))){
var inst_29071 = (state_29111[(23)]);
var inst_29073 = cljs.core.chunked_seq_QMARK_.call(null,inst_29071);
var state_29111__$1 = state_29111;
if(inst_29073){
var statearr_29140_29211 = state_29111__$1;
(statearr_29140_29211[(1)] = (36));

} else {
var statearr_29141_29212 = state_29111__$1;
(statearr_29141_29212[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (13))){
var inst_29002 = (state_29111[(24)]);
var inst_29005 = cljs.core.async.close_BANG_.call(null,inst_29002);
var state_29111__$1 = state_29111;
var statearr_29142_29213 = state_29111__$1;
(statearr_29142_29213[(2)] = inst_29005);

(statearr_29142_29213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (22))){
var inst_29025 = (state_29111[(8)]);
var inst_29028 = cljs.core.async.close_BANG_.call(null,inst_29025);
var state_29111__$1 = state_29111;
var statearr_29143_29214 = state_29111__$1;
(statearr_29143_29214[(2)] = inst_29028);

(statearr_29143_29214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (36))){
var inst_29071 = (state_29111[(23)]);
var inst_29075 = cljs.core.chunk_first.call(null,inst_29071);
var inst_29076 = cljs.core.chunk_rest.call(null,inst_29071);
var inst_29077 = cljs.core.count.call(null,inst_29075);
var inst_29053 = inst_29076;
var inst_29054 = inst_29075;
var inst_29055 = inst_29077;
var inst_29056 = (0);
var state_29111__$1 = (function (){var statearr_29144 = state_29111;
(statearr_29144[(9)] = inst_29056);

(statearr_29144[(19)] = inst_29055);

(statearr_29144[(11)] = inst_29054);

(statearr_29144[(20)] = inst_29053);

return statearr_29144;
})();
var statearr_29145_29215 = state_29111__$1;
(statearr_29145_29215[(2)] = null);

(statearr_29145_29215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (41))){
var inst_29071 = (state_29111[(23)]);
var inst_29086 = (state_29111[(2)]);
var inst_29087 = cljs.core.next.call(null,inst_29071);
var inst_29053 = inst_29087;
var inst_29054 = null;
var inst_29055 = (0);
var inst_29056 = (0);
var state_29111__$1 = (function (){var statearr_29146 = state_29111;
(statearr_29146[(25)] = inst_29086);

(statearr_29146[(9)] = inst_29056);

(statearr_29146[(19)] = inst_29055);

(statearr_29146[(11)] = inst_29054);

(statearr_29146[(20)] = inst_29053);

return statearr_29146;
})();
var statearr_29147_29216 = state_29111__$1;
(statearr_29147_29216[(2)] = null);

(statearr_29147_29216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (43))){
var state_29111__$1 = state_29111;
var statearr_29148_29217 = state_29111__$1;
(statearr_29148_29217[(2)] = null);

(statearr_29148_29217[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (29))){
var inst_29095 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29149_29218 = state_29111__$1;
(statearr_29149_29218[(2)] = inst_29095);

(statearr_29149_29218[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (44))){
var inst_29104 = (state_29111[(2)]);
var state_29111__$1 = (function (){var statearr_29150 = state_29111;
(statearr_29150[(26)] = inst_29104);

return statearr_29150;
})();
var statearr_29151_29219 = state_29111__$1;
(statearr_29151_29219[(2)] = null);

(statearr_29151_29219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (6))){
var inst_29045 = (state_29111[(27)]);
var inst_29044 = cljs.core.deref.call(null,cs);
var inst_29045__$1 = cljs.core.keys.call(null,inst_29044);
var inst_29046 = cljs.core.count.call(null,inst_29045__$1);
var inst_29047 = cljs.core.reset_BANG_.call(null,dctr,inst_29046);
var inst_29052 = cljs.core.seq.call(null,inst_29045__$1);
var inst_29053 = inst_29052;
var inst_29054 = null;
var inst_29055 = (0);
var inst_29056 = (0);
var state_29111__$1 = (function (){var statearr_29152 = state_29111;
(statearr_29152[(27)] = inst_29045__$1);

(statearr_29152[(28)] = inst_29047);

(statearr_29152[(9)] = inst_29056);

(statearr_29152[(19)] = inst_29055);

(statearr_29152[(11)] = inst_29054);

(statearr_29152[(20)] = inst_29053);

return statearr_29152;
})();
var statearr_29153_29220 = state_29111__$1;
(statearr_29153_29220[(2)] = null);

(statearr_29153_29220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (28))){
var inst_29071 = (state_29111[(23)]);
var inst_29053 = (state_29111[(20)]);
var inst_29071__$1 = cljs.core.seq.call(null,inst_29053);
var state_29111__$1 = (function (){var statearr_29154 = state_29111;
(statearr_29154[(23)] = inst_29071__$1);

return statearr_29154;
})();
if(inst_29071__$1){
var statearr_29155_29221 = state_29111__$1;
(statearr_29155_29221[(1)] = (33));

} else {
var statearr_29156_29222 = state_29111__$1;
(statearr_29156_29222[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (25))){
var inst_29056 = (state_29111[(9)]);
var inst_29055 = (state_29111[(19)]);
var inst_29058 = (inst_29056 < inst_29055);
var inst_29059 = inst_29058;
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_29059)){
var statearr_29157_29223 = state_29111__$1;
(statearr_29157_29223[(1)] = (27));

} else {
var statearr_29158_29224 = state_29111__$1;
(statearr_29158_29224[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (34))){
var state_29111__$1 = state_29111;
var statearr_29159_29225 = state_29111__$1;
(statearr_29159_29225[(2)] = null);

(statearr_29159_29225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (17))){
var state_29111__$1 = state_29111;
var statearr_29160_29226 = state_29111__$1;
(statearr_29160_29226[(2)] = null);

(statearr_29160_29226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (3))){
var inst_29109 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29111__$1,inst_29109);
} else {
if((state_val_29112 === (12))){
var inst_29040 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29161_29227 = state_29111__$1;
(statearr_29161_29227[(2)] = inst_29040);

(statearr_29161_29227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (2))){
var state_29111__$1 = state_29111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29111__$1,(4),ch);
} else {
if((state_val_29112 === (23))){
var state_29111__$1 = state_29111;
var statearr_29162_29228 = state_29111__$1;
(statearr_29162_29228[(2)] = null);

(statearr_29162_29228[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (35))){
var inst_29093 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29163_29229 = state_29111__$1;
(statearr_29163_29229[(2)] = inst_29093);

(statearr_29163_29229[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (19))){
var inst_29012 = (state_29111[(7)]);
var inst_29016 = cljs.core.chunk_first.call(null,inst_29012);
var inst_29017 = cljs.core.chunk_rest.call(null,inst_29012);
var inst_29018 = cljs.core.count.call(null,inst_29016);
var inst_28990 = inst_29017;
var inst_28991 = inst_29016;
var inst_28992 = inst_29018;
var inst_28993 = (0);
var state_29111__$1 = (function (){var statearr_29164 = state_29111;
(statearr_29164[(14)] = inst_28991);

(statearr_29164[(15)] = inst_28993);

(statearr_29164[(16)] = inst_28992);

(statearr_29164[(17)] = inst_28990);

return statearr_29164;
})();
var statearr_29165_29230 = state_29111__$1;
(statearr_29165_29230[(2)] = null);

(statearr_29165_29230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (11))){
var inst_28990 = (state_29111[(17)]);
var inst_29012 = (state_29111[(7)]);
var inst_29012__$1 = cljs.core.seq.call(null,inst_28990);
var state_29111__$1 = (function (){var statearr_29166 = state_29111;
(statearr_29166[(7)] = inst_29012__$1);

return statearr_29166;
})();
if(inst_29012__$1){
var statearr_29167_29231 = state_29111__$1;
(statearr_29167_29231[(1)] = (16));

} else {
var statearr_29168_29232 = state_29111__$1;
(statearr_29168_29232[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (9))){
var inst_29042 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29169_29233 = state_29111__$1;
(statearr_29169_29233[(2)] = inst_29042);

(statearr_29169_29233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (5))){
var inst_28988 = cljs.core.deref.call(null,cs);
var inst_28989 = cljs.core.seq.call(null,inst_28988);
var inst_28990 = inst_28989;
var inst_28991 = null;
var inst_28992 = (0);
var inst_28993 = (0);
var state_29111__$1 = (function (){var statearr_29170 = state_29111;
(statearr_29170[(14)] = inst_28991);

(statearr_29170[(15)] = inst_28993);

(statearr_29170[(16)] = inst_28992);

(statearr_29170[(17)] = inst_28990);

return statearr_29170;
})();
var statearr_29171_29234 = state_29111__$1;
(statearr_29171_29234[(2)] = null);

(statearr_29171_29234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (14))){
var state_29111__$1 = state_29111;
var statearr_29172_29235 = state_29111__$1;
(statearr_29172_29235[(2)] = null);

(statearr_29172_29235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (45))){
var inst_29101 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29173_29236 = state_29111__$1;
(statearr_29173_29236[(2)] = inst_29101);

(statearr_29173_29236[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (26))){
var inst_29045 = (state_29111[(27)]);
var inst_29097 = (state_29111[(2)]);
var inst_29098 = cljs.core.seq.call(null,inst_29045);
var state_29111__$1 = (function (){var statearr_29174 = state_29111;
(statearr_29174[(29)] = inst_29097);

return statearr_29174;
})();
if(inst_29098){
var statearr_29175_29237 = state_29111__$1;
(statearr_29175_29237[(1)] = (42));

} else {
var statearr_29176_29238 = state_29111__$1;
(statearr_29176_29238[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (16))){
var inst_29012 = (state_29111[(7)]);
var inst_29014 = cljs.core.chunked_seq_QMARK_.call(null,inst_29012);
var state_29111__$1 = state_29111;
if(inst_29014){
var statearr_29177_29239 = state_29111__$1;
(statearr_29177_29239[(1)] = (19));

} else {
var statearr_29178_29240 = state_29111__$1;
(statearr_29178_29240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (38))){
var inst_29090 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29179_29241 = state_29111__$1;
(statearr_29179_29241[(2)] = inst_29090);

(statearr_29179_29241[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (30))){
var state_29111__$1 = state_29111;
var statearr_29180_29242 = state_29111__$1;
(statearr_29180_29242[(2)] = null);

(statearr_29180_29242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (10))){
var inst_28991 = (state_29111[(14)]);
var inst_28993 = (state_29111[(15)]);
var inst_29001 = cljs.core._nth.call(null,inst_28991,inst_28993);
var inst_29002 = cljs.core.nth.call(null,inst_29001,(0),null);
var inst_29003 = cljs.core.nth.call(null,inst_29001,(1),null);
var state_29111__$1 = (function (){var statearr_29181 = state_29111;
(statearr_29181[(24)] = inst_29002);

return statearr_29181;
})();
if(cljs.core.truth_(inst_29003)){
var statearr_29182_29243 = state_29111__$1;
(statearr_29182_29243[(1)] = (13));

} else {
var statearr_29183_29244 = state_29111__$1;
(statearr_29183_29244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (18))){
var inst_29038 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29184_29245 = state_29111__$1;
(statearr_29184_29245[(2)] = inst_29038);

(statearr_29184_29245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (42))){
var state_29111__$1 = state_29111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29111__$1,(45),dchan);
} else {
if((state_val_29112 === (37))){
var inst_29080 = (state_29111[(22)]);
var inst_29071 = (state_29111[(23)]);
var inst_28981 = (state_29111[(12)]);
var inst_29080__$1 = cljs.core.first.call(null,inst_29071);
var inst_29081 = cljs.core.async.put_BANG_.call(null,inst_29080__$1,inst_28981,done);
var state_29111__$1 = (function (){var statearr_29185 = state_29111;
(statearr_29185[(22)] = inst_29080__$1);

return statearr_29185;
})();
if(cljs.core.truth_(inst_29081)){
var statearr_29186_29246 = state_29111__$1;
(statearr_29186_29246[(1)] = (39));

} else {
var statearr_29187_29247 = state_29111__$1;
(statearr_29187_29247[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (8))){
var inst_28993 = (state_29111[(15)]);
var inst_28992 = (state_29111[(16)]);
var inst_28995 = (inst_28993 < inst_28992);
var inst_28996 = inst_28995;
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_28996)){
var statearr_29188_29248 = state_29111__$1;
(statearr_29188_29248[(1)] = (10));

} else {
var statearr_29189_29249 = state_29111__$1;
(statearr_29189_29249[(1)] = (11));

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
});})(c__26439__auto___29195,cs,m,dchan,dctr,done))
;
return ((function (switch__26314__auto__,c__26439__auto___29195,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26315__auto__ = null;
var cljs$core$async$mult_$_state_machine__26315__auto____0 = (function (){
var statearr_29190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29190[(0)] = cljs$core$async$mult_$_state_machine__26315__auto__);

(statearr_29190[(1)] = (1));

return statearr_29190;
});
var cljs$core$async$mult_$_state_machine__26315__auto____1 = (function (state_29111){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_29111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e29191){var ex__26318__auto__ = e29191;
var statearr_29192_29250 = state_29111;
(statearr_29192_29250[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_29111[(4)]))){
var statearr_29193_29251 = state_29111;
(statearr_29193_29251[(1)] = cljs.core.first.call(null,(state_29111[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29252 = state_29111;
state_29111 = G__29252;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26315__auto__ = function(state_29111){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26315__auto____1.call(this,state_29111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26315__auto____0;
cljs$core$async$mult_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26315__auto____1;
return cljs$core$async$mult_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___29195,cs,m,dchan,dctr,done))
})();
var state__26441__auto__ = (function (){var statearr_29194 = f__26440__auto__.call(null);
(statearr_29194[(6)] = c__26439__auto___29195);

return statearr_29194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___29195,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29254 = arguments.length;
switch (G__29254) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m);
} else {
var m__4210__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,state_map);
} else {
var m__4210__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4209__auto__ = (((m == null))?null:m);
var m__4210__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,m,mode);
} else {
var m__4210__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___29266 = arguments.length;
var i__4498__auto___29267 = (0);
while(true){
if((i__4498__auto___29267 < len__4497__auto___29266)){
args__4500__auto__.push((arguments[i__4498__auto___29267]));

var G__29268 = (i__4498__auto___29267 + (1));
i__4498__auto___29267 = G__29268;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29260){
var map__29261 = p__29260;
var map__29261__$1 = ((((!((map__29261 == null)))?(((((map__29261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29261):map__29261);
var opts = map__29261__$1;
var statearr_29263_29269 = state;
(statearr_29263_29269[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__29261,map__29261__$1,opts){
return (function (val){
var statearr_29264_29270 = state;
(statearr_29264_29270[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29261,map__29261__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_29265_29271 = state;
(statearr_29265_29271[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29256){
var G__29257 = cljs.core.first.call(null,seq29256);
var seq29256__$1 = cljs.core.next.call(null,seq29256);
var G__29258 = cljs.core.first.call(null,seq29256__$1);
var seq29256__$2 = cljs.core.next.call(null,seq29256__$1);
var G__29259 = cljs.core.first.call(null,seq29256__$2);
var seq29256__$3 = cljs.core.next.call(null,seq29256__$2);
var self__4484__auto__ = this;
return self__4484__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29257,G__29258,G__29259,seq29256__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29272 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29273){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29273 = meta29273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29274,meta29273__$1){
var self__ = this;
var _29274__$1 = this;
return (new cljs.core.async.t_cljs$core$async29272(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29273__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29274){
var self__ = this;
var _29274__$1 = this;
return self__.meta29273;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29273","meta29273",-1376676651,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29272";

cljs.core.async.t_cljs$core$async29272.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async29272");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29272.
 */
cljs.core.async.__GT_t_cljs$core$async29272 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29272(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29273){
return (new cljs.core.async.t_cljs$core$async29272(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29273));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29272(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26439__auto___29437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___29437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___29437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29376){
var state_val_29377 = (state_29376[(1)]);
if((state_val_29377 === (7))){
var inst_29291 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29378_29438 = state_29376__$1;
(statearr_29378_29438[(2)] = inst_29291);

(statearr_29378_29438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (20))){
var inst_29303 = (state_29376[(7)]);
var state_29376__$1 = state_29376;
var statearr_29379_29439 = state_29376__$1;
(statearr_29379_29439[(2)] = inst_29303);

(statearr_29379_29439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (27))){
var state_29376__$1 = state_29376;
var statearr_29380_29440 = state_29376__$1;
(statearr_29380_29440[(2)] = null);

(statearr_29380_29440[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (1))){
var inst_29278 = (state_29376[(8)]);
var inst_29278__$1 = calc_state.call(null);
var inst_29280 = (inst_29278__$1 == null);
var inst_29281 = cljs.core.not.call(null,inst_29280);
var state_29376__$1 = (function (){var statearr_29381 = state_29376;
(statearr_29381[(8)] = inst_29278__$1);

return statearr_29381;
})();
if(inst_29281){
var statearr_29382_29441 = state_29376__$1;
(statearr_29382_29441[(1)] = (2));

} else {
var statearr_29383_29442 = state_29376__$1;
(statearr_29383_29442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (24))){
var inst_29327 = (state_29376[(9)]);
var inst_29336 = (state_29376[(10)]);
var inst_29350 = (state_29376[(11)]);
var inst_29350__$1 = inst_29327.call(null,inst_29336);
var state_29376__$1 = (function (){var statearr_29384 = state_29376;
(statearr_29384[(11)] = inst_29350__$1);

return statearr_29384;
})();
if(cljs.core.truth_(inst_29350__$1)){
var statearr_29385_29443 = state_29376__$1;
(statearr_29385_29443[(1)] = (29));

} else {
var statearr_29386_29444 = state_29376__$1;
(statearr_29386_29444[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (4))){
var inst_29294 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29294)){
var statearr_29387_29445 = state_29376__$1;
(statearr_29387_29445[(1)] = (8));

} else {
var statearr_29388_29446 = state_29376__$1;
(statearr_29388_29446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (15))){
var inst_29321 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29321)){
var statearr_29389_29447 = state_29376__$1;
(statearr_29389_29447[(1)] = (19));

} else {
var statearr_29390_29448 = state_29376__$1;
(statearr_29390_29448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (21))){
var inst_29326 = (state_29376[(12)]);
var inst_29326__$1 = (state_29376[(2)]);
var inst_29327 = cljs.core.get.call(null,inst_29326__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29328 = cljs.core.get.call(null,inst_29326__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29329 = cljs.core.get.call(null,inst_29326__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29376__$1 = (function (){var statearr_29391 = state_29376;
(statearr_29391[(9)] = inst_29327);

(statearr_29391[(13)] = inst_29328);

(statearr_29391[(12)] = inst_29326__$1);

return statearr_29391;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29376__$1,(22),inst_29329);
} else {
if((state_val_29377 === (31))){
var inst_29358 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29358)){
var statearr_29392_29449 = state_29376__$1;
(statearr_29392_29449[(1)] = (32));

} else {
var statearr_29393_29450 = state_29376__$1;
(statearr_29393_29450[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (32))){
var inst_29335 = (state_29376[(14)]);
var state_29376__$1 = state_29376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29376__$1,(35),out,inst_29335);
} else {
if((state_val_29377 === (33))){
var inst_29326 = (state_29376[(12)]);
var inst_29303 = inst_29326;
var state_29376__$1 = (function (){var statearr_29394 = state_29376;
(statearr_29394[(7)] = inst_29303);

return statearr_29394;
})();
var statearr_29395_29451 = state_29376__$1;
(statearr_29395_29451[(2)] = null);

(statearr_29395_29451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (13))){
var inst_29303 = (state_29376[(7)]);
var inst_29310 = inst_29303.cljs$lang$protocol_mask$partition0$;
var inst_29311 = (inst_29310 & (64));
var inst_29312 = inst_29303.cljs$core$ISeq$;
var inst_29313 = (cljs.core.PROTOCOL_SENTINEL === inst_29312);
var inst_29314 = ((inst_29311) || (inst_29313));
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29314)){
var statearr_29396_29452 = state_29376__$1;
(statearr_29396_29452[(1)] = (16));

} else {
var statearr_29397_29453 = state_29376__$1;
(statearr_29397_29453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (22))){
var inst_29336 = (state_29376[(10)]);
var inst_29335 = (state_29376[(14)]);
var inst_29334 = (state_29376[(2)]);
var inst_29335__$1 = cljs.core.nth.call(null,inst_29334,(0),null);
var inst_29336__$1 = cljs.core.nth.call(null,inst_29334,(1),null);
var inst_29337 = (inst_29335__$1 == null);
var inst_29338 = cljs.core._EQ_.call(null,inst_29336__$1,change);
var inst_29339 = ((inst_29337) || (inst_29338));
var state_29376__$1 = (function (){var statearr_29398 = state_29376;
(statearr_29398[(10)] = inst_29336__$1);

(statearr_29398[(14)] = inst_29335__$1);

return statearr_29398;
})();
if(cljs.core.truth_(inst_29339)){
var statearr_29399_29454 = state_29376__$1;
(statearr_29399_29454[(1)] = (23));

} else {
var statearr_29400_29455 = state_29376__$1;
(statearr_29400_29455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (36))){
var inst_29326 = (state_29376[(12)]);
var inst_29303 = inst_29326;
var state_29376__$1 = (function (){var statearr_29401 = state_29376;
(statearr_29401[(7)] = inst_29303);

return statearr_29401;
})();
var statearr_29402_29456 = state_29376__$1;
(statearr_29402_29456[(2)] = null);

(statearr_29402_29456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (29))){
var inst_29350 = (state_29376[(11)]);
var state_29376__$1 = state_29376;
var statearr_29403_29457 = state_29376__$1;
(statearr_29403_29457[(2)] = inst_29350);

(statearr_29403_29457[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (6))){
var state_29376__$1 = state_29376;
var statearr_29404_29458 = state_29376__$1;
(statearr_29404_29458[(2)] = false);

(statearr_29404_29458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (28))){
var inst_29346 = (state_29376[(2)]);
var inst_29347 = calc_state.call(null);
var inst_29303 = inst_29347;
var state_29376__$1 = (function (){var statearr_29405 = state_29376;
(statearr_29405[(15)] = inst_29346);

(statearr_29405[(7)] = inst_29303);

return statearr_29405;
})();
var statearr_29406_29459 = state_29376__$1;
(statearr_29406_29459[(2)] = null);

(statearr_29406_29459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (25))){
var inst_29372 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29407_29460 = state_29376__$1;
(statearr_29407_29460[(2)] = inst_29372);

(statearr_29407_29460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (34))){
var inst_29370 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29408_29461 = state_29376__$1;
(statearr_29408_29461[(2)] = inst_29370);

(statearr_29408_29461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (17))){
var state_29376__$1 = state_29376;
var statearr_29409_29462 = state_29376__$1;
(statearr_29409_29462[(2)] = false);

(statearr_29409_29462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (3))){
var state_29376__$1 = state_29376;
var statearr_29410_29463 = state_29376__$1;
(statearr_29410_29463[(2)] = false);

(statearr_29410_29463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (12))){
var inst_29374 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29376__$1,inst_29374);
} else {
if((state_val_29377 === (2))){
var inst_29278 = (state_29376[(8)]);
var inst_29283 = inst_29278.cljs$lang$protocol_mask$partition0$;
var inst_29284 = (inst_29283 & (64));
var inst_29285 = inst_29278.cljs$core$ISeq$;
var inst_29286 = (cljs.core.PROTOCOL_SENTINEL === inst_29285);
var inst_29287 = ((inst_29284) || (inst_29286));
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29287)){
var statearr_29411_29464 = state_29376__$1;
(statearr_29411_29464[(1)] = (5));

} else {
var statearr_29412_29465 = state_29376__$1;
(statearr_29412_29465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (23))){
var inst_29335 = (state_29376[(14)]);
var inst_29341 = (inst_29335 == null);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29341)){
var statearr_29413_29466 = state_29376__$1;
(statearr_29413_29466[(1)] = (26));

} else {
var statearr_29414_29467 = state_29376__$1;
(statearr_29414_29467[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (35))){
var inst_29361 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29361)){
var statearr_29415_29468 = state_29376__$1;
(statearr_29415_29468[(1)] = (36));

} else {
var statearr_29416_29469 = state_29376__$1;
(statearr_29416_29469[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (19))){
var inst_29303 = (state_29376[(7)]);
var inst_29323 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29303);
var state_29376__$1 = state_29376;
var statearr_29417_29470 = state_29376__$1;
(statearr_29417_29470[(2)] = inst_29323);

(statearr_29417_29470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (11))){
var inst_29303 = (state_29376[(7)]);
var inst_29307 = (inst_29303 == null);
var inst_29308 = cljs.core.not.call(null,inst_29307);
var state_29376__$1 = state_29376;
if(inst_29308){
var statearr_29418_29471 = state_29376__$1;
(statearr_29418_29471[(1)] = (13));

} else {
var statearr_29419_29472 = state_29376__$1;
(statearr_29419_29472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (9))){
var inst_29278 = (state_29376[(8)]);
var state_29376__$1 = state_29376;
var statearr_29420_29473 = state_29376__$1;
(statearr_29420_29473[(2)] = inst_29278);

(statearr_29420_29473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (5))){
var state_29376__$1 = state_29376;
var statearr_29421_29474 = state_29376__$1;
(statearr_29421_29474[(2)] = true);

(statearr_29421_29474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (14))){
var state_29376__$1 = state_29376;
var statearr_29422_29475 = state_29376__$1;
(statearr_29422_29475[(2)] = false);

(statearr_29422_29475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (26))){
var inst_29336 = (state_29376[(10)]);
var inst_29343 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29336);
var state_29376__$1 = state_29376;
var statearr_29423_29476 = state_29376__$1;
(statearr_29423_29476[(2)] = inst_29343);

(statearr_29423_29476[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (16))){
var state_29376__$1 = state_29376;
var statearr_29424_29477 = state_29376__$1;
(statearr_29424_29477[(2)] = true);

(statearr_29424_29477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (38))){
var inst_29366 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29425_29478 = state_29376__$1;
(statearr_29425_29478[(2)] = inst_29366);

(statearr_29425_29478[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (30))){
var inst_29327 = (state_29376[(9)]);
var inst_29336 = (state_29376[(10)]);
var inst_29328 = (state_29376[(13)]);
var inst_29353 = cljs.core.empty_QMARK_.call(null,inst_29327);
var inst_29354 = inst_29328.call(null,inst_29336);
var inst_29355 = cljs.core.not.call(null,inst_29354);
var inst_29356 = ((inst_29353) && (inst_29355));
var state_29376__$1 = state_29376;
var statearr_29426_29479 = state_29376__$1;
(statearr_29426_29479[(2)] = inst_29356);

(statearr_29426_29479[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (10))){
var inst_29278 = (state_29376[(8)]);
var inst_29299 = (state_29376[(2)]);
var inst_29300 = cljs.core.get.call(null,inst_29299,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29301 = cljs.core.get.call(null,inst_29299,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29302 = cljs.core.get.call(null,inst_29299,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29303 = inst_29278;
var state_29376__$1 = (function (){var statearr_29427 = state_29376;
(statearr_29427[(7)] = inst_29303);

(statearr_29427[(16)] = inst_29301);

(statearr_29427[(17)] = inst_29302);

(statearr_29427[(18)] = inst_29300);

return statearr_29427;
})();
var statearr_29428_29480 = state_29376__$1;
(statearr_29428_29480[(2)] = null);

(statearr_29428_29480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (18))){
var inst_29318 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29429_29481 = state_29376__$1;
(statearr_29429_29481[(2)] = inst_29318);

(statearr_29429_29481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (37))){
var state_29376__$1 = state_29376;
var statearr_29430_29482 = state_29376__$1;
(statearr_29430_29482[(2)] = null);

(statearr_29430_29482[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (8))){
var inst_29278 = (state_29376[(8)]);
var inst_29296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29278);
var state_29376__$1 = state_29376;
var statearr_29431_29483 = state_29376__$1;
(statearr_29431_29483[(2)] = inst_29296);

(statearr_29431_29483[(1)] = (10));


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
});})(c__26439__auto___29437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26314__auto__,c__26439__auto___29437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26315__auto__ = null;
var cljs$core$async$mix_$_state_machine__26315__auto____0 = (function (){
var statearr_29432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29432[(0)] = cljs$core$async$mix_$_state_machine__26315__auto__);

(statearr_29432[(1)] = (1));

return statearr_29432;
});
var cljs$core$async$mix_$_state_machine__26315__auto____1 = (function (state_29376){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_29376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e29433){var ex__26318__auto__ = e29433;
var statearr_29434_29484 = state_29376;
(statearr_29434_29484[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_29376[(4)]))){
var statearr_29435_29485 = state_29376;
(statearr_29435_29485[(1)] = cljs.core.first.call(null,(state_29376[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29486 = state_29376;
state_29376 = G__29486;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26315__auto__ = function(state_29376){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26315__auto____1.call(this,state_29376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26315__auto____0;
cljs$core$async$mix_$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26315__auto____1;
return cljs$core$async$mix_$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___29437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26441__auto__ = (function (){var statearr_29436 = f__26440__auto__.call(null);
(statearr_29436[(6)] = c__26439__auto___29437);

return statearr_29436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___29437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4210__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v,ch);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29488 = arguments.length;
switch (G__29488) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4209__auto__ = (((p == null))?null:p);
var m__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4209__auto__)]);
if(!((m__4210__auto__ == null))){
return m__4210__auto__.call(null,p,v);
} else {
var m__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4210__auto____$1 == null))){
return m__4210__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29492 = arguments.length;
switch (G__29492) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3920__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3920__auto__,mults){
return (function (p1__29490_SHARP_){
if(cljs.core.truth_(p1__29490_SHARP_.call(null,topic))){
return p1__29490_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29490_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3920__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29493 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29494){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29494 = meta29494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29495,meta29494__$1){
var self__ = this;
var _29495__$1 = this;
return (new cljs.core.async.t_cljs$core$async29493(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29494__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29495){
var self__ = this;
var _29495__$1 = this;
return self__.meta29494;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29494","meta29494",1588480772,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29493";

cljs.core.async.t_cljs$core$async29493.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async29493");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29493.
 */
cljs.core.async.__GT_t_cljs$core$async29493 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29493(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29494){
return (new cljs.core.async.t_cljs$core$async29493(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29494));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29493(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26439__auto___29614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___29614,mults,ensure_mult,p){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___29614,mults,ensure_mult,p){
return (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (7))){
var inst_29563 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29569_29615 = state_29567__$1;
(statearr_29569_29615[(2)] = inst_29563);

(statearr_29569_29615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (20))){
var state_29567__$1 = state_29567;
var statearr_29570_29616 = state_29567__$1;
(statearr_29570_29616[(2)] = null);

(statearr_29570_29616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (1))){
var state_29567__$1 = state_29567;
var statearr_29571_29617 = state_29567__$1;
(statearr_29571_29617[(2)] = null);

(statearr_29571_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (24))){
var inst_29546 = (state_29567[(7)]);
var inst_29555 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29546);
var state_29567__$1 = state_29567;
var statearr_29572_29618 = state_29567__$1;
(statearr_29572_29618[(2)] = inst_29555);

(statearr_29572_29618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (4))){
var inst_29498 = (state_29567[(8)]);
var inst_29498__$1 = (state_29567[(2)]);
var inst_29499 = (inst_29498__$1 == null);
var state_29567__$1 = (function (){var statearr_29573 = state_29567;
(statearr_29573[(8)] = inst_29498__$1);

return statearr_29573;
})();
if(cljs.core.truth_(inst_29499)){
var statearr_29574_29619 = state_29567__$1;
(statearr_29574_29619[(1)] = (5));

} else {
var statearr_29575_29620 = state_29567__$1;
(statearr_29575_29620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (15))){
var inst_29540 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29576_29621 = state_29567__$1;
(statearr_29576_29621[(2)] = inst_29540);

(statearr_29576_29621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (21))){
var inst_29560 = (state_29567[(2)]);
var state_29567__$1 = (function (){var statearr_29577 = state_29567;
(statearr_29577[(9)] = inst_29560);

return statearr_29577;
})();
var statearr_29578_29622 = state_29567__$1;
(statearr_29578_29622[(2)] = null);

(statearr_29578_29622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (13))){
var inst_29522 = (state_29567[(10)]);
var inst_29524 = cljs.core.chunked_seq_QMARK_.call(null,inst_29522);
var state_29567__$1 = state_29567;
if(inst_29524){
var statearr_29579_29623 = state_29567__$1;
(statearr_29579_29623[(1)] = (16));

} else {
var statearr_29580_29624 = state_29567__$1;
(statearr_29580_29624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (22))){
var inst_29552 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29552)){
var statearr_29581_29625 = state_29567__$1;
(statearr_29581_29625[(1)] = (23));

} else {
var statearr_29582_29626 = state_29567__$1;
(statearr_29582_29626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (6))){
var inst_29546 = (state_29567[(7)]);
var inst_29548 = (state_29567[(11)]);
var inst_29498 = (state_29567[(8)]);
var inst_29546__$1 = topic_fn.call(null,inst_29498);
var inst_29547 = cljs.core.deref.call(null,mults);
var inst_29548__$1 = cljs.core.get.call(null,inst_29547,inst_29546__$1);
var state_29567__$1 = (function (){var statearr_29583 = state_29567;
(statearr_29583[(7)] = inst_29546__$1);

(statearr_29583[(11)] = inst_29548__$1);

return statearr_29583;
})();
if(cljs.core.truth_(inst_29548__$1)){
var statearr_29584_29627 = state_29567__$1;
(statearr_29584_29627[(1)] = (19));

} else {
var statearr_29585_29628 = state_29567__$1;
(statearr_29585_29628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (25))){
var inst_29557 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29586_29629 = state_29567__$1;
(statearr_29586_29629[(2)] = inst_29557);

(statearr_29586_29629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (17))){
var inst_29522 = (state_29567[(10)]);
var inst_29531 = cljs.core.first.call(null,inst_29522);
var inst_29532 = cljs.core.async.muxch_STAR_.call(null,inst_29531);
var inst_29533 = cljs.core.async.close_BANG_.call(null,inst_29532);
var inst_29534 = cljs.core.next.call(null,inst_29522);
var inst_29508 = inst_29534;
var inst_29509 = null;
var inst_29510 = (0);
var inst_29511 = (0);
var state_29567__$1 = (function (){var statearr_29587 = state_29567;
(statearr_29587[(12)] = inst_29511);

(statearr_29587[(13)] = inst_29508);

(statearr_29587[(14)] = inst_29533);

(statearr_29587[(15)] = inst_29509);

(statearr_29587[(16)] = inst_29510);

return statearr_29587;
})();
var statearr_29588_29630 = state_29567__$1;
(statearr_29588_29630[(2)] = null);

(statearr_29588_29630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (3))){
var inst_29565 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29567__$1,inst_29565);
} else {
if((state_val_29568 === (12))){
var inst_29542 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29589_29631 = state_29567__$1;
(statearr_29589_29631[(2)] = inst_29542);

(statearr_29589_29631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (2))){
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29567__$1,(4),ch);
} else {
if((state_val_29568 === (23))){
var state_29567__$1 = state_29567;
var statearr_29590_29632 = state_29567__$1;
(statearr_29590_29632[(2)] = null);

(statearr_29590_29632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (19))){
var inst_29548 = (state_29567[(11)]);
var inst_29498 = (state_29567[(8)]);
var inst_29550 = cljs.core.async.muxch_STAR_.call(null,inst_29548);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29567__$1,(22),inst_29550,inst_29498);
} else {
if((state_val_29568 === (11))){
var inst_29522 = (state_29567[(10)]);
var inst_29508 = (state_29567[(13)]);
var inst_29522__$1 = cljs.core.seq.call(null,inst_29508);
var state_29567__$1 = (function (){var statearr_29591 = state_29567;
(statearr_29591[(10)] = inst_29522__$1);

return statearr_29591;
})();
if(inst_29522__$1){
var statearr_29592_29633 = state_29567__$1;
(statearr_29592_29633[(1)] = (13));

} else {
var statearr_29593_29634 = state_29567__$1;
(statearr_29593_29634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (9))){
var inst_29544 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29594_29635 = state_29567__$1;
(statearr_29594_29635[(2)] = inst_29544);

(statearr_29594_29635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (5))){
var inst_29505 = cljs.core.deref.call(null,mults);
var inst_29506 = cljs.core.vals.call(null,inst_29505);
var inst_29507 = cljs.core.seq.call(null,inst_29506);
var inst_29508 = inst_29507;
var inst_29509 = null;
var inst_29510 = (0);
var inst_29511 = (0);
var state_29567__$1 = (function (){var statearr_29595 = state_29567;
(statearr_29595[(12)] = inst_29511);

(statearr_29595[(13)] = inst_29508);

(statearr_29595[(15)] = inst_29509);

(statearr_29595[(16)] = inst_29510);

return statearr_29595;
})();
var statearr_29596_29636 = state_29567__$1;
(statearr_29596_29636[(2)] = null);

(statearr_29596_29636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (14))){
var state_29567__$1 = state_29567;
var statearr_29600_29637 = state_29567__$1;
(statearr_29600_29637[(2)] = null);

(statearr_29600_29637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (16))){
var inst_29522 = (state_29567[(10)]);
var inst_29526 = cljs.core.chunk_first.call(null,inst_29522);
var inst_29527 = cljs.core.chunk_rest.call(null,inst_29522);
var inst_29528 = cljs.core.count.call(null,inst_29526);
var inst_29508 = inst_29527;
var inst_29509 = inst_29526;
var inst_29510 = inst_29528;
var inst_29511 = (0);
var state_29567__$1 = (function (){var statearr_29601 = state_29567;
(statearr_29601[(12)] = inst_29511);

(statearr_29601[(13)] = inst_29508);

(statearr_29601[(15)] = inst_29509);

(statearr_29601[(16)] = inst_29510);

return statearr_29601;
})();
var statearr_29602_29638 = state_29567__$1;
(statearr_29602_29638[(2)] = null);

(statearr_29602_29638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (10))){
var inst_29511 = (state_29567[(12)]);
var inst_29508 = (state_29567[(13)]);
var inst_29509 = (state_29567[(15)]);
var inst_29510 = (state_29567[(16)]);
var inst_29516 = cljs.core._nth.call(null,inst_29509,inst_29511);
var inst_29517 = cljs.core.async.muxch_STAR_.call(null,inst_29516);
var inst_29518 = cljs.core.async.close_BANG_.call(null,inst_29517);
var inst_29519 = (inst_29511 + (1));
var tmp29597 = inst_29508;
var tmp29598 = inst_29509;
var tmp29599 = inst_29510;
var inst_29508__$1 = tmp29597;
var inst_29509__$1 = tmp29598;
var inst_29510__$1 = tmp29599;
var inst_29511__$1 = inst_29519;
var state_29567__$1 = (function (){var statearr_29603 = state_29567;
(statearr_29603[(17)] = inst_29518);

(statearr_29603[(12)] = inst_29511__$1);

(statearr_29603[(13)] = inst_29508__$1);

(statearr_29603[(15)] = inst_29509__$1);

(statearr_29603[(16)] = inst_29510__$1);

return statearr_29603;
})();
var statearr_29604_29639 = state_29567__$1;
(statearr_29604_29639[(2)] = null);

(statearr_29604_29639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (18))){
var inst_29537 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29605_29640 = state_29567__$1;
(statearr_29605_29640[(2)] = inst_29537);

(statearr_29605_29640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (8))){
var inst_29511 = (state_29567[(12)]);
var inst_29510 = (state_29567[(16)]);
var inst_29513 = (inst_29511 < inst_29510);
var inst_29514 = inst_29513;
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29514)){
var statearr_29606_29641 = state_29567__$1;
(statearr_29606_29641[(1)] = (10));

} else {
var statearr_29607_29642 = state_29567__$1;
(statearr_29607_29642[(1)] = (11));

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
});})(c__26439__auto___29614,mults,ensure_mult,p))
;
return ((function (switch__26314__auto__,c__26439__auto___29614,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_29608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29608[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_29608[(1)] = (1));

return statearr_29608;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_29567){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_29567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e29609){var ex__26318__auto__ = e29609;
var statearr_29610_29643 = state_29567;
(statearr_29610_29643[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_29567[(4)]))){
var statearr_29611_29644 = state_29567;
(statearr_29611_29644[(1)] = cljs.core.first.call(null,(state_29567[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29645 = state_29567;
state_29567 = G__29645;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___29614,mults,ensure_mult,p))
})();
var state__26441__auto__ = (function (){var statearr_29612 = f__26440__auto__.call(null);
(statearr_29612[(6)] = c__26439__auto___29614);

return statearr_29612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___29614,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29647 = arguments.length;
switch (G__29647) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29650 = arguments.length;
switch (G__29650) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29653 = arguments.length;
switch (G__29653) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__26439__auto___29731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___29731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___29731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29696){
var state_val_29697 = (state_29696[(1)]);
if((state_val_29697 === (7))){
var state_29696__$1 = state_29696;
var statearr_29698_29732 = state_29696__$1;
(statearr_29698_29732[(2)] = null);

(statearr_29698_29732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (1))){
var state_29696__$1 = state_29696;
var statearr_29699_29733 = state_29696__$1;
(statearr_29699_29733[(2)] = null);

(statearr_29699_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (4))){
var inst_29657 = (state_29696[(7)]);
var inst_29656 = (state_29696[(8)]);
var inst_29659 = (inst_29657 < inst_29656);
var state_29696__$1 = state_29696;
if(cljs.core.truth_(inst_29659)){
var statearr_29700_29734 = state_29696__$1;
(statearr_29700_29734[(1)] = (6));

} else {
var statearr_29701_29735 = state_29696__$1;
(statearr_29701_29735[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (15))){
var inst_29682 = (state_29696[(9)]);
var inst_29687 = cljs.core.apply.call(null,f,inst_29682);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29696__$1,(17),out,inst_29687);
} else {
if((state_val_29697 === (13))){
var inst_29682 = (state_29696[(9)]);
var inst_29682__$1 = (state_29696[(2)]);
var inst_29683 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29682__$1);
var state_29696__$1 = (function (){var statearr_29702 = state_29696;
(statearr_29702[(9)] = inst_29682__$1);

return statearr_29702;
})();
if(cljs.core.truth_(inst_29683)){
var statearr_29703_29736 = state_29696__$1;
(statearr_29703_29736[(1)] = (14));

} else {
var statearr_29704_29737 = state_29696__$1;
(statearr_29704_29737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (6))){
var state_29696__$1 = state_29696;
var statearr_29705_29738 = state_29696__$1;
(statearr_29705_29738[(2)] = null);

(statearr_29705_29738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (17))){
var inst_29689 = (state_29696[(2)]);
var state_29696__$1 = (function (){var statearr_29707 = state_29696;
(statearr_29707[(10)] = inst_29689);

return statearr_29707;
})();
var statearr_29708_29739 = state_29696__$1;
(statearr_29708_29739[(2)] = null);

(statearr_29708_29739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (3))){
var inst_29694 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29696__$1,inst_29694);
} else {
if((state_val_29697 === (12))){
var _ = (function (){var statearr_29709 = state_29696;
(statearr_29709[(4)] = cljs.core.rest.call(null,(state_29696[(4)])));

return statearr_29709;
})();
var state_29696__$1 = state_29696;
var ex29706 = (state_29696__$1[(2)]);
var statearr_29710_29740 = state_29696__$1;
(statearr_29710_29740[(5)] = ex29706);


if((ex29706 instanceof Object)){
var statearr_29711_29741 = state_29696__$1;
(statearr_29711_29741[(1)] = (11));

(statearr_29711_29741[(5)] = null);

} else {
throw ex29706;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (2))){
var inst_29655 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29656 = cnt;
var inst_29657 = (0);
var state_29696__$1 = (function (){var statearr_29712 = state_29696;
(statearr_29712[(7)] = inst_29657);

(statearr_29712[(8)] = inst_29656);

(statearr_29712[(11)] = inst_29655);

return statearr_29712;
})();
var statearr_29713_29742 = state_29696__$1;
(statearr_29713_29742[(2)] = null);

(statearr_29713_29742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (11))){
var inst_29661 = (state_29696[(2)]);
var inst_29662 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29696__$1 = (function (){var statearr_29714 = state_29696;
(statearr_29714[(12)] = inst_29661);

return statearr_29714;
})();
var statearr_29715_29743 = state_29696__$1;
(statearr_29715_29743[(2)] = inst_29662);

(statearr_29715_29743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (9))){
var inst_29657 = (state_29696[(7)]);
var _ = (function (){var statearr_29716 = state_29696;
(statearr_29716[(4)] = cljs.core.cons.call(null,(12),(state_29696[(4)])));

return statearr_29716;
})();
var inst_29668 = chs__$1.call(null,inst_29657);
var inst_29669 = done.call(null,inst_29657);
var inst_29670 = cljs.core.async.take_BANG_.call(null,inst_29668,inst_29669);
var ___$1 = (function (){var statearr_29717 = state_29696;
(statearr_29717[(4)] = cljs.core.rest.call(null,(state_29696[(4)])));

return statearr_29717;
})();
var state_29696__$1 = state_29696;
var statearr_29718_29744 = state_29696__$1;
(statearr_29718_29744[(2)] = inst_29670);

(statearr_29718_29744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (5))){
var inst_29680 = (state_29696[(2)]);
var state_29696__$1 = (function (){var statearr_29719 = state_29696;
(statearr_29719[(13)] = inst_29680);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29696__$1,(13),dchan);
} else {
if((state_val_29697 === (14))){
var inst_29685 = cljs.core.async.close_BANG_.call(null,out);
var state_29696__$1 = state_29696;
var statearr_29720_29745 = state_29696__$1;
(statearr_29720_29745[(2)] = inst_29685);

(statearr_29720_29745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (16))){
var inst_29692 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29721_29746 = state_29696__$1;
(statearr_29721_29746[(2)] = inst_29692);

(statearr_29721_29746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (10))){
var inst_29657 = (state_29696[(7)]);
var inst_29673 = (state_29696[(2)]);
var inst_29674 = (inst_29657 + (1));
var inst_29657__$1 = inst_29674;
var state_29696__$1 = (function (){var statearr_29722 = state_29696;
(statearr_29722[(7)] = inst_29657__$1);

(statearr_29722[(14)] = inst_29673);

return statearr_29722;
})();
var statearr_29723_29747 = state_29696__$1;
(statearr_29723_29747[(2)] = null);

(statearr_29723_29747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (8))){
var inst_29678 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29724_29748 = state_29696__$1;
(statearr_29724_29748[(2)] = inst_29678);

(statearr_29724_29748[(1)] = (5));


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
});})(c__26439__auto___29731,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26314__auto__,c__26439__auto___29731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_29725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29725[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_29725[(1)] = (1));

return statearr_29725;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_29696){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_29696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e29726){var ex__26318__auto__ = e29726;
var statearr_29727_29749 = state_29696;
(statearr_29727_29749[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_29696[(4)]))){
var statearr_29728_29750 = state_29696;
(statearr_29728_29750[(1)] = cljs.core.first.call(null,(state_29696[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29751 = state_29696;
state_29696 = G__29751;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_29696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_29696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___29731,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26441__auto__ = (function (){var statearr_29729 = f__26440__auto__.call(null);
(statearr_29729[(6)] = c__26439__auto___29731);

return statearr_29729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___29731,chs__$1,out,cnt,rets,dchan,dctr,done))
);

}

return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29754 = arguments.length;
switch (G__29754) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___29809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___29809,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___29809,out){
return (function (state_29786){
var state_val_29787 = (state_29786[(1)]);
if((state_val_29787 === (7))){
var inst_29765 = (state_29786[(7)]);
var inst_29766 = (state_29786[(8)]);
var inst_29765__$1 = (state_29786[(2)]);
var inst_29766__$1 = cljs.core.nth.call(null,inst_29765__$1,(0),null);
var inst_29767 = cljs.core.nth.call(null,inst_29765__$1,(1),null);
var inst_29768 = (inst_29766__$1 == null);
var state_29786__$1 = (function (){var statearr_29788 = state_29786;
(statearr_29788[(9)] = inst_29767);

(statearr_29788[(7)] = inst_29765__$1);

(statearr_29788[(8)] = inst_29766__$1);

return statearr_29788;
})();
if(cljs.core.truth_(inst_29768)){
var statearr_29789_29810 = state_29786__$1;
(statearr_29789_29810[(1)] = (8));

} else {
var statearr_29790_29811 = state_29786__$1;
(statearr_29790_29811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (1))){
var inst_29755 = cljs.core.vec.call(null,chs);
var inst_29756 = inst_29755;
var state_29786__$1 = (function (){var statearr_29791 = state_29786;
(statearr_29791[(10)] = inst_29756);

return statearr_29791;
})();
var statearr_29792_29812 = state_29786__$1;
(statearr_29792_29812[(2)] = null);

(statearr_29792_29812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (4))){
var inst_29756 = (state_29786[(10)]);
var state_29786__$1 = state_29786;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29786__$1,(7),inst_29756);
} else {
if((state_val_29787 === (6))){
var inst_29782 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29793_29813 = state_29786__$1;
(statearr_29793_29813[(2)] = inst_29782);

(statearr_29793_29813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (3))){
var inst_29784 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29786__$1,inst_29784);
} else {
if((state_val_29787 === (2))){
var inst_29756 = (state_29786[(10)]);
var inst_29758 = cljs.core.count.call(null,inst_29756);
var inst_29759 = (inst_29758 > (0));
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29759)){
var statearr_29795_29814 = state_29786__$1;
(statearr_29795_29814[(1)] = (4));

} else {
var statearr_29796_29815 = state_29786__$1;
(statearr_29796_29815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (11))){
var inst_29756 = (state_29786[(10)]);
var inst_29775 = (state_29786[(2)]);
var tmp29794 = inst_29756;
var inst_29756__$1 = tmp29794;
var state_29786__$1 = (function (){var statearr_29797 = state_29786;
(statearr_29797[(11)] = inst_29775);

(statearr_29797[(10)] = inst_29756__$1);

return statearr_29797;
})();
var statearr_29798_29816 = state_29786__$1;
(statearr_29798_29816[(2)] = null);

(statearr_29798_29816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (9))){
var inst_29766 = (state_29786[(8)]);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29786__$1,(11),out,inst_29766);
} else {
if((state_val_29787 === (5))){
var inst_29780 = cljs.core.async.close_BANG_.call(null,out);
var state_29786__$1 = state_29786;
var statearr_29799_29817 = state_29786__$1;
(statearr_29799_29817[(2)] = inst_29780);

(statearr_29799_29817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (10))){
var inst_29778 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29800_29818 = state_29786__$1;
(statearr_29800_29818[(2)] = inst_29778);

(statearr_29800_29818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (8))){
var inst_29767 = (state_29786[(9)]);
var inst_29756 = (state_29786[(10)]);
var inst_29765 = (state_29786[(7)]);
var inst_29766 = (state_29786[(8)]);
var inst_29770 = (function (){var cs = inst_29756;
var vec__29761 = inst_29765;
var v = inst_29766;
var c = inst_29767;
return ((function (cs,vec__29761,v,c,inst_29767,inst_29756,inst_29765,inst_29766,state_val_29787,c__26439__auto___29809,out){
return (function (p1__29752_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29752_SHARP_);
});
;})(cs,vec__29761,v,c,inst_29767,inst_29756,inst_29765,inst_29766,state_val_29787,c__26439__auto___29809,out))
})();
var inst_29771 = cljs.core.filterv.call(null,inst_29770,inst_29756);
var inst_29756__$1 = inst_29771;
var state_29786__$1 = (function (){var statearr_29801 = state_29786;
(statearr_29801[(10)] = inst_29756__$1);

return statearr_29801;
})();
var statearr_29802_29819 = state_29786__$1;
(statearr_29802_29819[(2)] = null);

(statearr_29802_29819[(1)] = (2));


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
});})(c__26439__auto___29809,out))
;
return ((function (switch__26314__auto__,c__26439__auto___29809,out){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_29803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29803[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_29803[(1)] = (1));

return statearr_29803;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_29786){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_29786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e29804){var ex__26318__auto__ = e29804;
var statearr_29805_29820 = state_29786;
(statearr_29805_29820[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_29786[(4)]))){
var statearr_29806_29821 = state_29786;
(statearr_29806_29821[(1)] = cljs.core.first.call(null,(state_29786[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29822 = state_29786;
state_29786 = G__29822;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_29786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_29786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___29809,out))
})();
var state__26441__auto__ = (function (){var statearr_29807 = f__26440__auto__.call(null);
(statearr_29807[(6)] = c__26439__auto___29809);

return statearr_29807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___29809,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29824 = arguments.length;
switch (G__29824) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___29870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___29870,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___29870,out){
return (function (state_29848){
var state_val_29849 = (state_29848[(1)]);
if((state_val_29849 === (7))){
var inst_29830 = (state_29848[(7)]);
var inst_29830__$1 = (state_29848[(2)]);
var inst_29831 = (inst_29830__$1 == null);
var inst_29832 = cljs.core.not.call(null,inst_29831);
var state_29848__$1 = (function (){var statearr_29850 = state_29848;
(statearr_29850[(7)] = inst_29830__$1);

return statearr_29850;
})();
if(inst_29832){
var statearr_29851_29871 = state_29848__$1;
(statearr_29851_29871[(1)] = (8));

} else {
var statearr_29852_29872 = state_29848__$1;
(statearr_29852_29872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (1))){
var inst_29825 = (0);
var state_29848__$1 = (function (){var statearr_29853 = state_29848;
(statearr_29853[(8)] = inst_29825);

return statearr_29853;
})();
var statearr_29854_29873 = state_29848__$1;
(statearr_29854_29873[(2)] = null);

(statearr_29854_29873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (4))){
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29848__$1,(7),ch);
} else {
if((state_val_29849 === (6))){
var inst_29843 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29855_29874 = state_29848__$1;
(statearr_29855_29874[(2)] = inst_29843);

(statearr_29855_29874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (3))){
var inst_29845 = (state_29848[(2)]);
var inst_29846 = cljs.core.async.close_BANG_.call(null,out);
var state_29848__$1 = (function (){var statearr_29856 = state_29848;
(statearr_29856[(9)] = inst_29845);

return statearr_29856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29848__$1,inst_29846);
} else {
if((state_val_29849 === (2))){
var inst_29825 = (state_29848[(8)]);
var inst_29827 = (inst_29825 < n);
var state_29848__$1 = state_29848;
if(cljs.core.truth_(inst_29827)){
var statearr_29857_29875 = state_29848__$1;
(statearr_29857_29875[(1)] = (4));

} else {
var statearr_29858_29876 = state_29848__$1;
(statearr_29858_29876[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (11))){
var inst_29825 = (state_29848[(8)]);
var inst_29835 = (state_29848[(2)]);
var inst_29836 = (inst_29825 + (1));
var inst_29825__$1 = inst_29836;
var state_29848__$1 = (function (){var statearr_29859 = state_29848;
(statearr_29859[(10)] = inst_29835);

(statearr_29859[(8)] = inst_29825__$1);

return statearr_29859;
})();
var statearr_29860_29877 = state_29848__$1;
(statearr_29860_29877[(2)] = null);

(statearr_29860_29877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (9))){
var state_29848__$1 = state_29848;
var statearr_29861_29878 = state_29848__$1;
(statearr_29861_29878[(2)] = null);

(statearr_29861_29878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (5))){
var state_29848__$1 = state_29848;
var statearr_29862_29879 = state_29848__$1;
(statearr_29862_29879[(2)] = null);

(statearr_29862_29879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (10))){
var inst_29840 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29863_29880 = state_29848__$1;
(statearr_29863_29880[(2)] = inst_29840);

(statearr_29863_29880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (8))){
var inst_29830 = (state_29848[(7)]);
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29848__$1,(11),out,inst_29830);
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
});})(c__26439__auto___29870,out))
;
return ((function (switch__26314__auto__,c__26439__auto___29870,out){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_29864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29864[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_29864[(1)] = (1));

return statearr_29864;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_29848){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_29848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e29865){var ex__26318__auto__ = e29865;
var statearr_29866_29881 = state_29848;
(statearr_29866_29881[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_29848[(4)]))){
var statearr_29867_29882 = state_29848;
(statearr_29867_29882[(1)] = cljs.core.first.call(null,(state_29848[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29883 = state_29848;
state_29848 = G__29883;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_29848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_29848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___29870,out))
})();
var state__26441__auto__ = (function (){var statearr_29868 = f__26440__auto__.call(null);
(statearr_29868[(6)] = c__26439__auto___29870);

return statearr_29868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___29870,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29885 = (function (f,ch,meta29886){
this.f = f;
this.ch = ch;
this.meta29886 = meta29886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29887,meta29886__$1){
var self__ = this;
var _29887__$1 = this;
return (new cljs.core.async.t_cljs$core$async29885(self__.f,self__.ch,meta29886__$1));
});

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29887){
var self__ = this;
var _29887__$1 = this;
return self__.meta29886;
});

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29888 = (function (f,ch,meta29886,_,fn1,meta29889){
this.f = f;
this.ch = ch;
this.meta29886 = meta29886;
this._ = _;
this.fn1 = fn1;
this.meta29889 = meta29889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29890,meta29889__$1){
var self__ = this;
var _29890__$1 = this;
return (new cljs.core.async.t_cljs$core$async29888(self__.f,self__.ch,self__.meta29886,self__._,self__.fn1,meta29889__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29890){
var self__ = this;
var _29890__$1 = this;
return self__.meta29889;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29884_SHARP_){
return f1.call(null,(((p1__29884_SHARP_ == null))?null:self__.f.call(null,p1__29884_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29888.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29886","meta29886",891185770,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29885","cljs.core.async/t_cljs$core$async29885",2012484738,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29889","meta29889",-694031117,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29888";

cljs.core.async.t_cljs$core$async29888.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async29888");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29888.
 */
cljs.core.async.__GT_t_cljs$core$async29888 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29888(f__$1,ch__$1,meta29886__$1,___$2,fn1__$1,meta29889){
return (new cljs.core.async.t_cljs$core$async29888(f__$1,ch__$1,meta29886__$1,___$2,fn1__$1,meta29889));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29888(self__.f,self__.ch,self__.meta29886,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3909__auto__ = ret;
if(cljs.core.truth_(and__3909__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3909__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29886","meta29886",891185770,null)], null);
});

cljs.core.async.t_cljs$core$async29885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29885";

cljs.core.async.t_cljs$core$async29885.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async29885");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29885.
 */
cljs.core.async.__GT_t_cljs$core$async29885 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29885(f__$1,ch__$1,meta29886){
return (new cljs.core.async.t_cljs$core$async29885(f__$1,ch__$1,meta29886));
});

}

return (new cljs.core.async.t_cljs$core$async29885(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29891 = (function (f,ch,meta29892){
this.f = f;
this.ch = ch;
this.meta29892 = meta29892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29893,meta29892__$1){
var self__ = this;
var _29893__$1 = this;
return (new cljs.core.async.t_cljs$core$async29891(self__.f,self__.ch,meta29892__$1));
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29893){
var self__ = this;
var _29893__$1 = this;
return self__.meta29892;
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29892","meta29892",-365611961,null)], null);
});

cljs.core.async.t_cljs$core$async29891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29891";

cljs.core.async.t_cljs$core$async29891.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async29891");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29891.
 */
cljs.core.async.__GT_t_cljs$core$async29891 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29891(f__$1,ch__$1,meta29892){
return (new cljs.core.async.t_cljs$core$async29891(f__$1,ch__$1,meta29892));
});

}

return (new cljs.core.async.t_cljs$core$async29891(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29894 = (function (p,ch,meta29895){
this.p = p;
this.ch = ch;
this.meta29895 = meta29895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29896,meta29895__$1){
var self__ = this;
var _29896__$1 = this;
return (new cljs.core.async.t_cljs$core$async29894(self__.p,self__.ch,meta29895__$1));
});

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29896){
var self__ = this;
var _29896__$1 = this;
return self__.meta29895;
});

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29895","meta29895",-1845779336,null)], null);
});

cljs.core.async.t_cljs$core$async29894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29894";

cljs.core.async.t_cljs$core$async29894.cljs$lang$ctorPrWriter = (function (this__4159__auto__,writer__4160__auto__,opt__4161__auto__){
return cljs.core._write.call(null,writer__4160__auto__,"cljs.core.async/t_cljs$core$async29894");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29894.
 */
cljs.core.async.__GT_t_cljs$core$async29894 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29894(p__$1,ch__$1,meta29895){
return (new cljs.core.async.t_cljs$core$async29894(p__$1,ch__$1,meta29895));
});

}

return (new cljs.core.async.t_cljs$core$async29894(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29898 = arguments.length;
switch (G__29898) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___29939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___29939,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___29939,out){
return (function (state_29919){
var state_val_29920 = (state_29919[(1)]);
if((state_val_29920 === (7))){
var inst_29915 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
var statearr_29921_29940 = state_29919__$1;
(statearr_29921_29940[(2)] = inst_29915);

(statearr_29921_29940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (1))){
var state_29919__$1 = state_29919;
var statearr_29922_29941 = state_29919__$1;
(statearr_29922_29941[(2)] = null);

(statearr_29922_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (4))){
var inst_29901 = (state_29919[(7)]);
var inst_29901__$1 = (state_29919[(2)]);
var inst_29902 = (inst_29901__$1 == null);
var state_29919__$1 = (function (){var statearr_29923 = state_29919;
(statearr_29923[(7)] = inst_29901__$1);

return statearr_29923;
})();
if(cljs.core.truth_(inst_29902)){
var statearr_29924_29942 = state_29919__$1;
(statearr_29924_29942[(1)] = (5));

} else {
var statearr_29925_29943 = state_29919__$1;
(statearr_29925_29943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (6))){
var inst_29901 = (state_29919[(7)]);
var inst_29906 = p.call(null,inst_29901);
var state_29919__$1 = state_29919;
if(cljs.core.truth_(inst_29906)){
var statearr_29926_29944 = state_29919__$1;
(statearr_29926_29944[(1)] = (8));

} else {
var statearr_29927_29945 = state_29919__$1;
(statearr_29927_29945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (3))){
var inst_29917 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29919__$1,inst_29917);
} else {
if((state_val_29920 === (2))){
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29919__$1,(4),ch);
} else {
if((state_val_29920 === (11))){
var inst_29909 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
var statearr_29928_29946 = state_29919__$1;
(statearr_29928_29946[(2)] = inst_29909);

(statearr_29928_29946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (9))){
var state_29919__$1 = state_29919;
var statearr_29929_29947 = state_29919__$1;
(statearr_29929_29947[(2)] = null);

(statearr_29929_29947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (5))){
var inst_29904 = cljs.core.async.close_BANG_.call(null,out);
var state_29919__$1 = state_29919;
var statearr_29930_29948 = state_29919__$1;
(statearr_29930_29948[(2)] = inst_29904);

(statearr_29930_29948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (10))){
var inst_29912 = (state_29919[(2)]);
var state_29919__$1 = (function (){var statearr_29931 = state_29919;
(statearr_29931[(8)] = inst_29912);

return statearr_29931;
})();
var statearr_29932_29949 = state_29919__$1;
(statearr_29932_29949[(2)] = null);

(statearr_29932_29949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (8))){
var inst_29901 = (state_29919[(7)]);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29919__$1,(11),out,inst_29901);
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
});})(c__26439__auto___29939,out))
;
return ((function (switch__26314__auto__,c__26439__auto___29939,out){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_29933 = [null,null,null,null,null,null,null,null,null];
(statearr_29933[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_29933[(1)] = (1));

return statearr_29933;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_29919){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_29919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e29934){var ex__26318__auto__ = e29934;
var statearr_29935_29950 = state_29919;
(statearr_29935_29950[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_29919[(4)]))){
var statearr_29936_29951 = state_29919;
(statearr_29936_29951[(1)] = cljs.core.first.call(null,(state_29919[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29952 = state_29919;
state_29919 = G__29952;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_29919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_29919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___29939,out))
})();
var state__26441__auto__ = (function (){var statearr_29937 = f__26440__auto__.call(null);
(statearr_29937[(6)] = c__26439__auto___29939);

return statearr_29937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___29939,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29954 = arguments.length;
switch (G__29954) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto__){
return (function (state_30017){
var state_val_30018 = (state_30017[(1)]);
if((state_val_30018 === (7))){
var inst_30013 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30019_30058 = state_30017__$1;
(statearr_30019_30058[(2)] = inst_30013);

(statearr_30019_30058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (20))){
var inst_29983 = (state_30017[(7)]);
var inst_29994 = (state_30017[(2)]);
var inst_29995 = cljs.core.next.call(null,inst_29983);
var inst_29969 = inst_29995;
var inst_29970 = null;
var inst_29971 = (0);
var inst_29972 = (0);
var state_30017__$1 = (function (){var statearr_30020 = state_30017;
(statearr_30020[(8)] = inst_29994);

(statearr_30020[(9)] = inst_29970);

(statearr_30020[(10)] = inst_29971);

(statearr_30020[(11)] = inst_29969);

(statearr_30020[(12)] = inst_29972);

return statearr_30020;
})();
var statearr_30021_30059 = state_30017__$1;
(statearr_30021_30059[(2)] = null);

(statearr_30021_30059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (1))){
var state_30017__$1 = state_30017;
var statearr_30022_30060 = state_30017__$1;
(statearr_30022_30060[(2)] = null);

(statearr_30022_30060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (4))){
var inst_29958 = (state_30017[(13)]);
var inst_29958__$1 = (state_30017[(2)]);
var inst_29959 = (inst_29958__$1 == null);
var state_30017__$1 = (function (){var statearr_30023 = state_30017;
(statearr_30023[(13)] = inst_29958__$1);

return statearr_30023;
})();
if(cljs.core.truth_(inst_29959)){
var statearr_30024_30061 = state_30017__$1;
(statearr_30024_30061[(1)] = (5));

} else {
var statearr_30025_30062 = state_30017__$1;
(statearr_30025_30062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (15))){
var state_30017__$1 = state_30017;
var statearr_30029_30063 = state_30017__$1;
(statearr_30029_30063[(2)] = null);

(statearr_30029_30063[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (21))){
var state_30017__$1 = state_30017;
var statearr_30030_30064 = state_30017__$1;
(statearr_30030_30064[(2)] = null);

(statearr_30030_30064[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (13))){
var inst_29970 = (state_30017[(9)]);
var inst_29971 = (state_30017[(10)]);
var inst_29969 = (state_30017[(11)]);
var inst_29972 = (state_30017[(12)]);
var inst_29979 = (state_30017[(2)]);
var inst_29980 = (inst_29972 + (1));
var tmp30026 = inst_29970;
var tmp30027 = inst_29971;
var tmp30028 = inst_29969;
var inst_29969__$1 = tmp30028;
var inst_29970__$1 = tmp30026;
var inst_29971__$1 = tmp30027;
var inst_29972__$1 = inst_29980;
var state_30017__$1 = (function (){var statearr_30031 = state_30017;
(statearr_30031[(9)] = inst_29970__$1);

(statearr_30031[(10)] = inst_29971__$1);

(statearr_30031[(11)] = inst_29969__$1);

(statearr_30031[(14)] = inst_29979);

(statearr_30031[(12)] = inst_29972__$1);

return statearr_30031;
})();
var statearr_30032_30065 = state_30017__$1;
(statearr_30032_30065[(2)] = null);

(statearr_30032_30065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (22))){
var state_30017__$1 = state_30017;
var statearr_30033_30066 = state_30017__$1;
(statearr_30033_30066[(2)] = null);

(statearr_30033_30066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (6))){
var inst_29958 = (state_30017[(13)]);
var inst_29967 = f.call(null,inst_29958);
var inst_29968 = cljs.core.seq.call(null,inst_29967);
var inst_29969 = inst_29968;
var inst_29970 = null;
var inst_29971 = (0);
var inst_29972 = (0);
var state_30017__$1 = (function (){var statearr_30034 = state_30017;
(statearr_30034[(9)] = inst_29970);

(statearr_30034[(10)] = inst_29971);

(statearr_30034[(11)] = inst_29969);

(statearr_30034[(12)] = inst_29972);

return statearr_30034;
})();
var statearr_30035_30067 = state_30017__$1;
(statearr_30035_30067[(2)] = null);

(statearr_30035_30067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (17))){
var inst_29983 = (state_30017[(7)]);
var inst_29987 = cljs.core.chunk_first.call(null,inst_29983);
var inst_29988 = cljs.core.chunk_rest.call(null,inst_29983);
var inst_29989 = cljs.core.count.call(null,inst_29987);
var inst_29969 = inst_29988;
var inst_29970 = inst_29987;
var inst_29971 = inst_29989;
var inst_29972 = (0);
var state_30017__$1 = (function (){var statearr_30036 = state_30017;
(statearr_30036[(9)] = inst_29970);

(statearr_30036[(10)] = inst_29971);

(statearr_30036[(11)] = inst_29969);

(statearr_30036[(12)] = inst_29972);

return statearr_30036;
})();
var statearr_30037_30068 = state_30017__$1;
(statearr_30037_30068[(2)] = null);

(statearr_30037_30068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (3))){
var inst_30015 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30017__$1,inst_30015);
} else {
if((state_val_30018 === (12))){
var inst_30003 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30038_30069 = state_30017__$1;
(statearr_30038_30069[(2)] = inst_30003);

(statearr_30038_30069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (2))){
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30017__$1,(4),in$);
} else {
if((state_val_30018 === (23))){
var inst_30011 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30039_30070 = state_30017__$1;
(statearr_30039_30070[(2)] = inst_30011);

(statearr_30039_30070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (19))){
var inst_29998 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30040_30071 = state_30017__$1;
(statearr_30040_30071[(2)] = inst_29998);

(statearr_30040_30071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (11))){
var inst_29969 = (state_30017[(11)]);
var inst_29983 = (state_30017[(7)]);
var inst_29983__$1 = cljs.core.seq.call(null,inst_29969);
var state_30017__$1 = (function (){var statearr_30041 = state_30017;
(statearr_30041[(7)] = inst_29983__$1);

return statearr_30041;
})();
if(inst_29983__$1){
var statearr_30042_30072 = state_30017__$1;
(statearr_30042_30072[(1)] = (14));

} else {
var statearr_30043_30073 = state_30017__$1;
(statearr_30043_30073[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (9))){
var inst_30005 = (state_30017[(2)]);
var inst_30006 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30017__$1 = (function (){var statearr_30044 = state_30017;
(statearr_30044[(15)] = inst_30005);

return statearr_30044;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30045_30074 = state_30017__$1;
(statearr_30045_30074[(1)] = (21));

} else {
var statearr_30046_30075 = state_30017__$1;
(statearr_30046_30075[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (5))){
var inst_29961 = cljs.core.async.close_BANG_.call(null,out);
var state_30017__$1 = state_30017;
var statearr_30047_30076 = state_30017__$1;
(statearr_30047_30076[(2)] = inst_29961);

(statearr_30047_30076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (14))){
var inst_29983 = (state_30017[(7)]);
var inst_29985 = cljs.core.chunked_seq_QMARK_.call(null,inst_29983);
var state_30017__$1 = state_30017;
if(inst_29985){
var statearr_30048_30077 = state_30017__$1;
(statearr_30048_30077[(1)] = (17));

} else {
var statearr_30049_30078 = state_30017__$1;
(statearr_30049_30078[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (16))){
var inst_30001 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30050_30079 = state_30017__$1;
(statearr_30050_30079[(2)] = inst_30001);

(statearr_30050_30079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (10))){
var inst_29970 = (state_30017[(9)]);
var inst_29972 = (state_30017[(12)]);
var inst_29977 = cljs.core._nth.call(null,inst_29970,inst_29972);
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30017__$1,(13),out,inst_29977);
} else {
if((state_val_30018 === (18))){
var inst_29983 = (state_30017[(7)]);
var inst_29992 = cljs.core.first.call(null,inst_29983);
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30017__$1,(20),out,inst_29992);
} else {
if((state_val_30018 === (8))){
var inst_29971 = (state_30017[(10)]);
var inst_29972 = (state_30017[(12)]);
var inst_29974 = (inst_29972 < inst_29971);
var inst_29975 = inst_29974;
var state_30017__$1 = state_30017;
if(cljs.core.truth_(inst_29975)){
var statearr_30051_30080 = state_30017__$1;
(statearr_30051_30080[(1)] = (10));

} else {
var statearr_30052_30081 = state_30017__$1;
(statearr_30052_30081[(1)] = (11));

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
});})(c__26439__auto__))
;
return ((function (switch__26314__auto__,c__26439__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26315__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26315__auto____0 = (function (){
var statearr_30053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30053[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26315__auto__);

(statearr_30053[(1)] = (1));

return statearr_30053;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26315__auto____1 = (function (state_30017){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_30017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e30054){var ex__26318__auto__ = e30054;
var statearr_30055_30082 = state_30017;
(statearr_30055_30082[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_30017[(4)]))){
var statearr_30056_30083 = state_30017;
(statearr_30056_30083[(1)] = cljs.core.first.call(null,(state_30017[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30084 = state_30017;
state_30017 = G__30084;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26315__auto__ = function(state_30017){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26315__auto____1.call(this,state_30017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26315__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26315__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_30057 = f__26440__auto__.call(null);
(statearr_30057[(6)] = c__26439__auto__);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30086 = arguments.length;
switch (G__30086) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30089 = arguments.length;
switch (G__30089) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30092 = arguments.length;
switch (G__30092) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___30140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___30140,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___30140,out){
return (function (state_30116){
var state_val_30117 = (state_30116[(1)]);
if((state_val_30117 === (7))){
var inst_30111 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30118_30141 = state_30116__$1;
(statearr_30118_30141[(2)] = inst_30111);

(statearr_30118_30141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (1))){
var inst_30093 = null;
var state_30116__$1 = (function (){var statearr_30119 = state_30116;
(statearr_30119[(7)] = inst_30093);

return statearr_30119;
})();
var statearr_30120_30142 = state_30116__$1;
(statearr_30120_30142[(2)] = null);

(statearr_30120_30142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (4))){
var inst_30096 = (state_30116[(8)]);
var inst_30096__$1 = (state_30116[(2)]);
var inst_30097 = (inst_30096__$1 == null);
var inst_30098 = cljs.core.not.call(null,inst_30097);
var state_30116__$1 = (function (){var statearr_30121 = state_30116;
(statearr_30121[(8)] = inst_30096__$1);

return statearr_30121;
})();
if(inst_30098){
var statearr_30122_30143 = state_30116__$1;
(statearr_30122_30143[(1)] = (5));

} else {
var statearr_30123_30144 = state_30116__$1;
(statearr_30123_30144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (6))){
var state_30116__$1 = state_30116;
var statearr_30124_30145 = state_30116__$1;
(statearr_30124_30145[(2)] = null);

(statearr_30124_30145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (3))){
var inst_30113 = (state_30116[(2)]);
var inst_30114 = cljs.core.async.close_BANG_.call(null,out);
var state_30116__$1 = (function (){var statearr_30125 = state_30116;
(statearr_30125[(9)] = inst_30113);

return statearr_30125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30116__$1,inst_30114);
} else {
if((state_val_30117 === (2))){
var state_30116__$1 = state_30116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30116__$1,(4),ch);
} else {
if((state_val_30117 === (11))){
var inst_30096 = (state_30116[(8)]);
var inst_30105 = (state_30116[(2)]);
var inst_30093 = inst_30096;
var state_30116__$1 = (function (){var statearr_30126 = state_30116;
(statearr_30126[(10)] = inst_30105);

(statearr_30126[(7)] = inst_30093);

return statearr_30126;
})();
var statearr_30127_30146 = state_30116__$1;
(statearr_30127_30146[(2)] = null);

(statearr_30127_30146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (9))){
var inst_30096 = (state_30116[(8)]);
var state_30116__$1 = state_30116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30116__$1,(11),out,inst_30096);
} else {
if((state_val_30117 === (5))){
var inst_30093 = (state_30116[(7)]);
var inst_30096 = (state_30116[(8)]);
var inst_30100 = cljs.core._EQ_.call(null,inst_30096,inst_30093);
var state_30116__$1 = state_30116;
if(inst_30100){
var statearr_30129_30147 = state_30116__$1;
(statearr_30129_30147[(1)] = (8));

} else {
var statearr_30130_30148 = state_30116__$1;
(statearr_30130_30148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (10))){
var inst_30108 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30131_30149 = state_30116__$1;
(statearr_30131_30149[(2)] = inst_30108);

(statearr_30131_30149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (8))){
var inst_30093 = (state_30116[(7)]);
var tmp30128 = inst_30093;
var inst_30093__$1 = tmp30128;
var state_30116__$1 = (function (){var statearr_30132 = state_30116;
(statearr_30132[(7)] = inst_30093__$1);

return statearr_30132;
})();
var statearr_30133_30150 = state_30116__$1;
(statearr_30133_30150[(2)] = null);

(statearr_30133_30150[(1)] = (2));


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
});})(c__26439__auto___30140,out))
;
return ((function (switch__26314__auto__,c__26439__auto___30140,out){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_30134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30134[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_30134[(1)] = (1));

return statearr_30134;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_30116){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_30116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e30135){var ex__26318__auto__ = e30135;
var statearr_30136_30151 = state_30116;
(statearr_30136_30151[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_30116[(4)]))){
var statearr_30137_30152 = state_30116;
(statearr_30137_30152[(1)] = cljs.core.first.call(null,(state_30116[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30153 = state_30116;
state_30116 = G__30153;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_30116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_30116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___30140,out))
})();
var state__26441__auto__ = (function (){var statearr_30138 = f__26440__auto__.call(null);
(statearr_30138[(6)] = c__26439__auto___30140);

return statearr_30138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___30140,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30155 = arguments.length;
switch (G__30155) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___30222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___30222,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___30222,out){
return (function (state_30193){
var state_val_30194 = (state_30193[(1)]);
if((state_val_30194 === (7))){
var inst_30189 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30195_30223 = state_30193__$1;
(statearr_30195_30223[(2)] = inst_30189);

(statearr_30195_30223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (1))){
var inst_30156 = (new Array(n));
var inst_30157 = inst_30156;
var inst_30158 = (0);
var state_30193__$1 = (function (){var statearr_30196 = state_30193;
(statearr_30196[(7)] = inst_30158);

(statearr_30196[(8)] = inst_30157);

return statearr_30196;
})();
var statearr_30197_30224 = state_30193__$1;
(statearr_30197_30224[(2)] = null);

(statearr_30197_30224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (4))){
var inst_30161 = (state_30193[(9)]);
var inst_30161__$1 = (state_30193[(2)]);
var inst_30162 = (inst_30161__$1 == null);
var inst_30163 = cljs.core.not.call(null,inst_30162);
var state_30193__$1 = (function (){var statearr_30198 = state_30193;
(statearr_30198[(9)] = inst_30161__$1);

return statearr_30198;
})();
if(inst_30163){
var statearr_30199_30225 = state_30193__$1;
(statearr_30199_30225[(1)] = (5));

} else {
var statearr_30200_30226 = state_30193__$1;
(statearr_30200_30226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (15))){
var inst_30183 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30201_30227 = state_30193__$1;
(statearr_30201_30227[(2)] = inst_30183);

(statearr_30201_30227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (13))){
var state_30193__$1 = state_30193;
var statearr_30202_30228 = state_30193__$1;
(statearr_30202_30228[(2)] = null);

(statearr_30202_30228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (6))){
var inst_30158 = (state_30193[(7)]);
var inst_30179 = (inst_30158 > (0));
var state_30193__$1 = state_30193;
if(cljs.core.truth_(inst_30179)){
var statearr_30203_30229 = state_30193__$1;
(statearr_30203_30229[(1)] = (12));

} else {
var statearr_30204_30230 = state_30193__$1;
(statearr_30204_30230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (3))){
var inst_30191 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30193__$1,inst_30191);
} else {
if((state_val_30194 === (12))){
var inst_30157 = (state_30193[(8)]);
var inst_30181 = cljs.core.vec.call(null,inst_30157);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30193__$1,(15),out,inst_30181);
} else {
if((state_val_30194 === (2))){
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30193__$1,(4),ch);
} else {
if((state_val_30194 === (11))){
var inst_30173 = (state_30193[(2)]);
var inst_30174 = (new Array(n));
var inst_30157 = inst_30174;
var inst_30158 = (0);
var state_30193__$1 = (function (){var statearr_30205 = state_30193;
(statearr_30205[(7)] = inst_30158);

(statearr_30205[(10)] = inst_30173);

(statearr_30205[(8)] = inst_30157);

return statearr_30205;
})();
var statearr_30206_30231 = state_30193__$1;
(statearr_30206_30231[(2)] = null);

(statearr_30206_30231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (9))){
var inst_30157 = (state_30193[(8)]);
var inst_30171 = cljs.core.vec.call(null,inst_30157);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30193__$1,(11),out,inst_30171);
} else {
if((state_val_30194 === (5))){
var inst_30158 = (state_30193[(7)]);
var inst_30157 = (state_30193[(8)]);
var inst_30166 = (state_30193[(11)]);
var inst_30161 = (state_30193[(9)]);
var inst_30165 = (inst_30157[inst_30158] = inst_30161);
var inst_30166__$1 = (inst_30158 + (1));
var inst_30167 = (inst_30166__$1 < n);
var state_30193__$1 = (function (){var statearr_30207 = state_30193;
(statearr_30207[(12)] = inst_30165);

(statearr_30207[(11)] = inst_30166__$1);

return statearr_30207;
})();
if(cljs.core.truth_(inst_30167)){
var statearr_30208_30232 = state_30193__$1;
(statearr_30208_30232[(1)] = (8));

} else {
var statearr_30209_30233 = state_30193__$1;
(statearr_30209_30233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (14))){
var inst_30186 = (state_30193[(2)]);
var inst_30187 = cljs.core.async.close_BANG_.call(null,out);
var state_30193__$1 = (function (){var statearr_30211 = state_30193;
(statearr_30211[(13)] = inst_30186);

return statearr_30211;
})();
var statearr_30212_30234 = state_30193__$1;
(statearr_30212_30234[(2)] = inst_30187);

(statearr_30212_30234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (10))){
var inst_30177 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30213_30235 = state_30193__$1;
(statearr_30213_30235[(2)] = inst_30177);

(statearr_30213_30235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (8))){
var inst_30157 = (state_30193[(8)]);
var inst_30166 = (state_30193[(11)]);
var tmp30210 = inst_30157;
var inst_30157__$1 = tmp30210;
var inst_30158 = inst_30166;
var state_30193__$1 = (function (){var statearr_30214 = state_30193;
(statearr_30214[(7)] = inst_30158);

(statearr_30214[(8)] = inst_30157__$1);

return statearr_30214;
})();
var statearr_30215_30236 = state_30193__$1;
(statearr_30215_30236[(2)] = null);

(statearr_30215_30236[(1)] = (2));


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
});})(c__26439__auto___30222,out))
;
return ((function (switch__26314__auto__,c__26439__auto___30222,out){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_30216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30216[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_30216[(1)] = (1));

return statearr_30216;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_30193){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_30193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e30217){var ex__26318__auto__ = e30217;
var statearr_30218_30237 = state_30193;
(statearr_30218_30237[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_30193[(4)]))){
var statearr_30219_30238 = state_30193;
(statearr_30219_30238[(1)] = cljs.core.first.call(null,(state_30193[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30239 = state_30193;
state_30193 = G__30239;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_30193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_30193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___30222,out))
})();
var state__26441__auto__ = (function (){var statearr_30220 = f__26440__auto__.call(null);
(statearr_30220[(6)] = c__26439__auto___30222);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___30222,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30241 = arguments.length;
switch (G__30241) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___30312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___30312,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26314__auto__ = ((function (c__26439__auto___30312,out){
return (function (state_30283){
var state_val_30284 = (state_30283[(1)]);
if((state_val_30284 === (7))){
var inst_30279 = (state_30283[(2)]);
var state_30283__$1 = state_30283;
var statearr_30285_30313 = state_30283__$1;
(statearr_30285_30313[(2)] = inst_30279);

(statearr_30285_30313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (1))){
var inst_30242 = [];
var inst_30243 = inst_30242;
var inst_30244 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30283__$1 = (function (){var statearr_30286 = state_30283;
(statearr_30286[(7)] = inst_30243);

(statearr_30286[(8)] = inst_30244);

return statearr_30286;
})();
var statearr_30287_30314 = state_30283__$1;
(statearr_30287_30314[(2)] = null);

(statearr_30287_30314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (4))){
var inst_30247 = (state_30283[(9)]);
var inst_30247__$1 = (state_30283[(2)]);
var inst_30248 = (inst_30247__$1 == null);
var inst_30249 = cljs.core.not.call(null,inst_30248);
var state_30283__$1 = (function (){var statearr_30288 = state_30283;
(statearr_30288[(9)] = inst_30247__$1);

return statearr_30288;
})();
if(inst_30249){
var statearr_30289_30315 = state_30283__$1;
(statearr_30289_30315[(1)] = (5));

} else {
var statearr_30290_30316 = state_30283__$1;
(statearr_30290_30316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (15))){
var inst_30273 = (state_30283[(2)]);
var state_30283__$1 = state_30283;
var statearr_30291_30317 = state_30283__$1;
(statearr_30291_30317[(2)] = inst_30273);

(statearr_30291_30317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (13))){
var state_30283__$1 = state_30283;
var statearr_30292_30318 = state_30283__$1;
(statearr_30292_30318[(2)] = null);

(statearr_30292_30318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (6))){
var inst_30243 = (state_30283[(7)]);
var inst_30268 = inst_30243.length;
var inst_30269 = (inst_30268 > (0));
var state_30283__$1 = state_30283;
if(cljs.core.truth_(inst_30269)){
var statearr_30293_30319 = state_30283__$1;
(statearr_30293_30319[(1)] = (12));

} else {
var statearr_30294_30320 = state_30283__$1;
(statearr_30294_30320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (3))){
var inst_30281 = (state_30283[(2)]);
var state_30283__$1 = state_30283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30283__$1,inst_30281);
} else {
if((state_val_30284 === (12))){
var inst_30243 = (state_30283[(7)]);
var inst_30271 = cljs.core.vec.call(null,inst_30243);
var state_30283__$1 = state_30283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30283__$1,(15),out,inst_30271);
} else {
if((state_val_30284 === (2))){
var state_30283__$1 = state_30283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30283__$1,(4),ch);
} else {
if((state_val_30284 === (11))){
var inst_30251 = (state_30283[(10)]);
var inst_30247 = (state_30283[(9)]);
var inst_30261 = (state_30283[(2)]);
var inst_30262 = [];
var inst_30263 = inst_30262.push(inst_30247);
var inst_30243 = inst_30262;
var inst_30244 = inst_30251;
var state_30283__$1 = (function (){var statearr_30295 = state_30283;
(statearr_30295[(7)] = inst_30243);

(statearr_30295[(11)] = inst_30263);

(statearr_30295[(8)] = inst_30244);

(statearr_30295[(12)] = inst_30261);

return statearr_30295;
})();
var statearr_30296_30321 = state_30283__$1;
(statearr_30296_30321[(2)] = null);

(statearr_30296_30321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (9))){
var inst_30243 = (state_30283[(7)]);
var inst_30259 = cljs.core.vec.call(null,inst_30243);
var state_30283__$1 = state_30283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30283__$1,(11),out,inst_30259);
} else {
if((state_val_30284 === (5))){
var inst_30251 = (state_30283[(10)]);
var inst_30247 = (state_30283[(9)]);
var inst_30244 = (state_30283[(8)]);
var inst_30251__$1 = f.call(null,inst_30247);
var inst_30252 = cljs.core._EQ_.call(null,inst_30251__$1,inst_30244);
var inst_30253 = cljs.core.keyword_identical_QMARK_.call(null,inst_30244,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30254 = ((inst_30252) || (inst_30253));
var state_30283__$1 = (function (){var statearr_30297 = state_30283;
(statearr_30297[(10)] = inst_30251__$1);

return statearr_30297;
})();
if(cljs.core.truth_(inst_30254)){
var statearr_30298_30322 = state_30283__$1;
(statearr_30298_30322[(1)] = (8));

} else {
var statearr_30299_30323 = state_30283__$1;
(statearr_30299_30323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (14))){
var inst_30276 = (state_30283[(2)]);
var inst_30277 = cljs.core.async.close_BANG_.call(null,out);
var state_30283__$1 = (function (){var statearr_30301 = state_30283;
(statearr_30301[(13)] = inst_30276);

return statearr_30301;
})();
var statearr_30302_30324 = state_30283__$1;
(statearr_30302_30324[(2)] = inst_30277);

(statearr_30302_30324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (10))){
var inst_30266 = (state_30283[(2)]);
var state_30283__$1 = state_30283;
var statearr_30303_30325 = state_30283__$1;
(statearr_30303_30325[(2)] = inst_30266);

(statearr_30303_30325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30284 === (8))){
var inst_30243 = (state_30283[(7)]);
var inst_30251 = (state_30283[(10)]);
var inst_30247 = (state_30283[(9)]);
var inst_30256 = inst_30243.push(inst_30247);
var tmp30300 = inst_30243;
var inst_30243__$1 = tmp30300;
var inst_30244 = inst_30251;
var state_30283__$1 = (function (){var statearr_30304 = state_30283;
(statearr_30304[(7)] = inst_30243__$1);

(statearr_30304[(8)] = inst_30244);

(statearr_30304[(14)] = inst_30256);

return statearr_30304;
})();
var statearr_30305_30326 = state_30283__$1;
(statearr_30305_30326[(2)] = null);

(statearr_30305_30326[(1)] = (2));


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
});})(c__26439__auto___30312,out))
;
return ((function (switch__26314__auto__,c__26439__auto___30312,out){
return (function() {
var cljs$core$async$state_machine__26315__auto__ = null;
var cljs$core$async$state_machine__26315__auto____0 = (function (){
var statearr_30306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30306[(0)] = cljs$core$async$state_machine__26315__auto__);

(statearr_30306[(1)] = (1));

return statearr_30306;
});
var cljs$core$async$state_machine__26315__auto____1 = (function (state_30283){
while(true){
var ret_value__26316__auto__ = (function (){try{while(true){
var result__26317__auto__ = switch__26314__auto__.call(null,state_30283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26317__auto__;
}
break;
}
}catch (e30307){var ex__26318__auto__ = e30307;
var statearr_30308_30327 = state_30283;
(statearr_30308_30327[(2)] = ex__26318__auto__);


if(cljs.core.seq.call(null,(state_30283[(4)]))){
var statearr_30309_30328 = state_30283;
(statearr_30309_30328[(1)] = cljs.core.first.call(null,(state_30283[(4)])));

} else {
throw ex__26318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30329 = state_30283;
state_30283 = G__30329;
continue;
} else {
return ret_value__26316__auto__;
}
break;
}
});
cljs$core$async$state_machine__26315__auto__ = function(state_30283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26315__auto____1.call(this,state_30283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26315__auto____0;
cljs$core$async$state_machine__26315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26315__auto____1;
return cljs$core$async$state_machine__26315__auto__;
})()
;})(switch__26314__auto__,c__26439__auto___30312,out))
})();
var state__26441__auto__ = (function (){var statearr_30310 = f__26440__auto__.call(null);
(statearr_30310[(6)] = c__26439__auto___30312);

return statearr_30310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___30312,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1662169259776
