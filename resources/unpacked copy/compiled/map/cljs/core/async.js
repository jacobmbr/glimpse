// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27407 = [];
var len__19487__auto___27413 = arguments.length;
var i__19488__auto___27414 = (0);
while(true){
if((i__19488__auto___27414 < len__19487__auto___27413)){
args27407.push((arguments[i__19488__auto___27414]));

var G__27415 = (i__19488__auto___27414 + (1));
i__19488__auto___27414 = G__27415;
continue;
} else {
}
break;
}

var G__27409 = args27407.length;
switch (G__27409) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27407.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27410 = (function (f,blockable,meta27411){
this.f = f;
this.blockable = blockable;
this.meta27411 = meta27411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27412,meta27411__$1){
var self__ = this;
var _27412__$1 = this;
return (new cljs.core.async.t_cljs$core$async27410(self__.f,self__.blockable,meta27411__$1));
});

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27412){
var self__ = this;
var _27412__$1 = this;
return self__.meta27411;
});

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27411","meta27411",-1887372254,null)], null);
});

cljs.core.async.t_cljs$core$async27410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27410";

cljs.core.async.t_cljs$core$async27410.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async27410");
});

cljs.core.async.__GT_t_cljs$core$async27410 = (function cljs$core$async$__GT_t_cljs$core$async27410(f__$1,blockable__$1,meta27411){
return (new cljs.core.async.t_cljs$core$async27410(f__$1,blockable__$1,meta27411));
});

}

return (new cljs.core.async.t_cljs$core$async27410(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args27419 = [];
var len__19487__auto___27422 = arguments.length;
var i__19488__auto___27423 = (0);
while(true){
if((i__19488__auto___27423 < len__19487__auto___27422)){
args27419.push((arguments[i__19488__auto___27423]));

var G__27424 = (i__19488__auto___27423 + (1));
i__19488__auto___27423 = G__27424;
continue;
} else {
}
break;
}

var G__27421 = args27419.length;
switch (G__27421) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27419.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args27426 = [];
var len__19487__auto___27429 = arguments.length;
var i__19488__auto___27430 = (0);
while(true){
if((i__19488__auto___27430 < len__19487__auto___27429)){
args27426.push((arguments[i__19488__auto___27430]));

var G__27431 = (i__19488__auto___27430 + (1));
i__19488__auto___27430 = G__27431;
continue;
} else {
}
break;
}

var G__27428 = args27426.length;
switch (G__27428) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27426.length)].join('')));

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
var args27433 = [];
var len__19487__auto___27436 = arguments.length;
var i__19488__auto___27437 = (0);
while(true){
if((i__19488__auto___27437 < len__19487__auto___27436)){
args27433.push((arguments[i__19488__auto___27437]));

var G__27438 = (i__19488__auto___27437 + (1));
i__19488__auto___27437 = G__27438;
continue;
} else {
}
break;
}

var G__27435 = args27433.length;
switch (G__27435) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27433.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27440 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27440);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27440,ret){
return (function (){
return fn1.call(null,val_27440);
});})(val_27440,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27441 = [];
var len__19487__auto___27444 = arguments.length;
var i__19488__auto___27445 = (0);
while(true){
if((i__19488__auto___27445 < len__19487__auto___27444)){
args27441.push((arguments[i__19488__auto___27445]));

var G__27446 = (i__19488__auto___27445 + (1));
i__19488__auto___27445 = G__27446;
continue;
} else {
}
break;
}

var G__27443 = args27441.length;
switch (G__27443) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27441.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__19332__auto___27448 = n;
var x_27449 = (0);
while(true){
if((x_27449 < n__19332__auto___27448)){
(a[x_27449] = (0));

var G__27450 = (x_27449 + (1));
x_27449 = G__27450;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27451 = (i + (1));
i = G__27451;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27455 = (function (alt_flag,flag,meta27456){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27456 = meta27456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27457,meta27456__$1){
var self__ = this;
var _27457__$1 = this;
return (new cljs.core.async.t_cljs$core$async27455(self__.alt_flag,self__.flag,meta27456__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27457){
var self__ = this;
var _27457__$1 = this;
return self__.meta27456;
});})(flag))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27455.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27456","meta27456",-448323657,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27455";

cljs.core.async.t_cljs$core$async27455.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async27455");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27455 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27455(alt_flag__$1,flag__$1,meta27456){
return (new cljs.core.async.t_cljs$core$async27455(alt_flag__$1,flag__$1,meta27456));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27455(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27461 = (function (alt_handler,flag,cb,meta27462){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27462 = meta27462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27463,meta27462__$1){
var self__ = this;
var _27463__$1 = this;
return (new cljs.core.async.t_cljs$core$async27461(self__.alt_handler,self__.flag,self__.cb,meta27462__$1));
});

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27463){
var self__ = this;
var _27463__$1 = this;
return self__.meta27462;
});

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27462","meta27462",-516584178,null)], null);
});

cljs.core.async.t_cljs$core$async27461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27461";

cljs.core.async.t_cljs$core$async27461.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async27461");
});

cljs.core.async.__GT_t_cljs$core$async27461 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27461(alt_handler__$1,flag__$1,cb__$1,meta27462){
return (new cljs.core.async.t_cljs$core$async27461(alt_handler__$1,flag__$1,cb__$1,meta27462));
});

}

return (new cljs.core.async.t_cljs$core$async27461(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__27464_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27464_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27465_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27465_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18417__auto__ = wport;
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27466 = (i + (1));
i = G__27466;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18417__auto__ = ret;
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18405__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18405__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18405__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__19494__auto__ = [];
var len__19487__auto___27472 = arguments.length;
var i__19488__auto___27473 = (0);
while(true){
if((i__19488__auto___27473 < len__19487__auto___27472)){
args__19494__auto__.push((arguments[i__19488__auto___27473]));

var G__27474 = (i__19488__auto___27473 + (1));
i__19488__auto___27473 = G__27474;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27469){
var map__27470 = p__27469;
var map__27470__$1 = ((((!((map__27470 == null)))?((((map__27470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27470):map__27470);
var opts = map__27470__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27467){
var G__27468 = cljs.core.first.call(null,seq27467);
var seq27467__$1 = cljs.core.next.call(null,seq27467);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27468,seq27467__$1);
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
var args27475 = [];
var len__19487__auto___27525 = arguments.length;
var i__19488__auto___27526 = (0);
while(true){
if((i__19488__auto___27526 < len__19487__auto___27525)){
args27475.push((arguments[i__19488__auto___27526]));

var G__27527 = (i__19488__auto___27526 + (1));
i__19488__auto___27526 = G__27527;
continue;
} else {
}
break;
}

var G__27477 = args27475.length;
switch (G__27477) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27475.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20613__auto___27529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___27529){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___27529){
return (function (state_27501){
var state_val_27502 = (state_27501[(1)]);
if((state_val_27502 === (7))){
var inst_27497 = (state_27501[(2)]);
var state_27501__$1 = state_27501;
var statearr_27503_27530 = state_27501__$1;
(statearr_27503_27530[(2)] = inst_27497);

(statearr_27503_27530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (1))){
var state_27501__$1 = state_27501;
var statearr_27504_27531 = state_27501__$1;
(statearr_27504_27531[(2)] = null);

(statearr_27504_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (4))){
var inst_27480 = (state_27501[(7)]);
var inst_27480__$1 = (state_27501[(2)]);
var inst_27481 = (inst_27480__$1 == null);
var state_27501__$1 = (function (){var statearr_27505 = state_27501;
(statearr_27505[(7)] = inst_27480__$1);

return statearr_27505;
})();
if(cljs.core.truth_(inst_27481)){
var statearr_27506_27532 = state_27501__$1;
(statearr_27506_27532[(1)] = (5));

} else {
var statearr_27507_27533 = state_27501__$1;
(statearr_27507_27533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (13))){
var state_27501__$1 = state_27501;
var statearr_27508_27534 = state_27501__$1;
(statearr_27508_27534[(2)] = null);

(statearr_27508_27534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (6))){
var inst_27480 = (state_27501[(7)]);
var state_27501__$1 = state_27501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27501__$1,(11),to,inst_27480);
} else {
if((state_val_27502 === (3))){
var inst_27499 = (state_27501[(2)]);
var state_27501__$1 = state_27501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27501__$1,inst_27499);
} else {
if((state_val_27502 === (12))){
var state_27501__$1 = state_27501;
var statearr_27509_27535 = state_27501__$1;
(statearr_27509_27535[(2)] = null);

(statearr_27509_27535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (2))){
var state_27501__$1 = state_27501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27501__$1,(4),from);
} else {
if((state_val_27502 === (11))){
var inst_27490 = (state_27501[(2)]);
var state_27501__$1 = state_27501;
if(cljs.core.truth_(inst_27490)){
var statearr_27510_27536 = state_27501__$1;
(statearr_27510_27536[(1)] = (12));

} else {
var statearr_27511_27537 = state_27501__$1;
(statearr_27511_27537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (9))){
var state_27501__$1 = state_27501;
var statearr_27512_27538 = state_27501__$1;
(statearr_27512_27538[(2)] = null);

(statearr_27512_27538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (5))){
var state_27501__$1 = state_27501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27513_27539 = state_27501__$1;
(statearr_27513_27539[(1)] = (8));

} else {
var statearr_27514_27540 = state_27501__$1;
(statearr_27514_27540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (14))){
var inst_27495 = (state_27501[(2)]);
var state_27501__$1 = state_27501;
var statearr_27515_27541 = state_27501__$1;
(statearr_27515_27541[(2)] = inst_27495);

(statearr_27515_27541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (10))){
var inst_27487 = (state_27501[(2)]);
var state_27501__$1 = state_27501;
var statearr_27516_27542 = state_27501__$1;
(statearr_27516_27542[(2)] = inst_27487);

(statearr_27516_27542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (8))){
var inst_27484 = cljs.core.async.close_BANG_.call(null,to);
var state_27501__$1 = state_27501;
var statearr_27517_27543 = state_27501__$1;
(statearr_27517_27543[(2)] = inst_27484);

(statearr_27517_27543[(1)] = (10));


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
});})(c__20613__auto___27529))
;
return ((function (switch__20501__auto__,c__20613__auto___27529){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_27521 = [null,null,null,null,null,null,null,null];
(statearr_27521[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_27521[(1)] = (1));

return statearr_27521;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_27501){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_27501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e27522){if((e27522 instanceof Object)){
var ex__20505__auto__ = e27522;
var statearr_27523_27544 = state_27501;
(statearr_27523_27544[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27545 = state_27501;
state_27501 = G__27545;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_27501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_27501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___27529))
})();
var state__20615__auto__ = (function (){var statearr_27524 = f__20614__auto__.call(null);
(statearr_27524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___27529);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___27529))
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
return (function (p__27729){
var vec__27730 = p__27729;
var v = cljs.core.nth.call(null,vec__27730,(0),null);
var p = cljs.core.nth.call(null,vec__27730,(1),null);
var job = vec__27730;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20613__auto___27912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___27912,res,vec__27730,v,p,job,jobs,results){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___27912,res,vec__27730,v,p,job,jobs,results){
return (function (state_27735){
var state_val_27736 = (state_27735[(1)]);
if((state_val_27736 === (1))){
var state_27735__$1 = state_27735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27735__$1,(2),res,v);
} else {
if((state_val_27736 === (2))){
var inst_27732 = (state_27735[(2)]);
var inst_27733 = cljs.core.async.close_BANG_.call(null,res);
var state_27735__$1 = (function (){var statearr_27737 = state_27735;
(statearr_27737[(7)] = inst_27732);

return statearr_27737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27735__$1,inst_27733);
} else {
return null;
}
}
});})(c__20613__auto___27912,res,vec__27730,v,p,job,jobs,results))
;
return ((function (switch__20501__auto__,c__20613__auto___27912,res,vec__27730,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_27741 = [null,null,null,null,null,null,null,null];
(statearr_27741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_27741[(1)] = (1));

return statearr_27741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_27735){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_27735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object)){
var ex__20505__auto__ = e27742;
var statearr_27743_27913 = state_27735;
(statearr_27743_27913[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27914 = state_27735;
state_27735 = G__27914;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_27735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_27735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___27912,res,vec__27730,v,p,job,jobs,results))
})();
var state__20615__auto__ = (function (){var statearr_27744 = f__20614__auto__.call(null);
(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___27912);

return statearr_27744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___27912,res,vec__27730,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27745){
var vec__27746 = p__27745;
var v = cljs.core.nth.call(null,vec__27746,(0),null);
var p = cljs.core.nth.call(null,vec__27746,(1),null);
var job = vec__27746;
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
var n__19332__auto___27915 = n;
var __27916 = (0);
while(true){
if((__27916 < n__19332__auto___27915)){
var G__27747_27917 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27747_27917) {
case "compute":
var c__20613__auto___27919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27916,c__20613__auto___27919,G__27747_27917,n__19332__auto___27915,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (__27916,c__20613__auto___27919,G__27747_27917,n__19332__auto___27915,jobs,results,process,async){
return (function (state_27760){
var state_val_27761 = (state_27760[(1)]);
if((state_val_27761 === (1))){
var state_27760__$1 = state_27760;
var statearr_27762_27920 = state_27760__$1;
(statearr_27762_27920[(2)] = null);

(statearr_27762_27920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (2))){
var state_27760__$1 = state_27760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27760__$1,(4),jobs);
} else {
if((state_val_27761 === (3))){
var inst_27758 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27760__$1,inst_27758);
} else {
if((state_val_27761 === (4))){
var inst_27750 = (state_27760[(2)]);
var inst_27751 = process.call(null,inst_27750);
var state_27760__$1 = state_27760;
if(cljs.core.truth_(inst_27751)){
var statearr_27763_27921 = state_27760__$1;
(statearr_27763_27921[(1)] = (5));

} else {
var statearr_27764_27922 = state_27760__$1;
(statearr_27764_27922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (5))){
var state_27760__$1 = state_27760;
var statearr_27765_27923 = state_27760__$1;
(statearr_27765_27923[(2)] = null);

(statearr_27765_27923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (6))){
var state_27760__$1 = state_27760;
var statearr_27766_27924 = state_27760__$1;
(statearr_27766_27924[(2)] = null);

(statearr_27766_27924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27761 === (7))){
var inst_27756 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27767_27925 = state_27760__$1;
(statearr_27767_27925[(2)] = inst_27756);

(statearr_27767_27925[(1)] = (3));


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
});})(__27916,c__20613__auto___27919,G__27747_27917,n__19332__auto___27915,jobs,results,process,async))
;
return ((function (__27916,switch__20501__auto__,c__20613__auto___27919,G__27747_27917,n__19332__auto___27915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_27771 = [null,null,null,null,null,null,null];
(statearr_27771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_27771[(1)] = (1));

return statearr_27771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_27760){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_27760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e27772){if((e27772 instanceof Object)){
var ex__20505__auto__ = e27772;
var statearr_27773_27926 = state_27760;
(statearr_27773_27926[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27927 = state_27760;
state_27760 = G__27927;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_27760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_27760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(__27916,switch__20501__auto__,c__20613__auto___27919,G__27747_27917,n__19332__auto___27915,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_27774 = f__20614__auto__.call(null);
(statearr_27774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___27919);

return statearr_27774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(__27916,c__20613__auto___27919,G__27747_27917,n__19332__auto___27915,jobs,results,process,async))
);


break;
case "async":
var c__20613__auto___27928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27916,c__20613__auto___27928,G__27747_27917,n__19332__auto___27915,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (__27916,c__20613__auto___27928,G__27747_27917,n__19332__auto___27915,jobs,results,process,async){
return (function (state_27787){
var state_val_27788 = (state_27787[(1)]);
if((state_val_27788 === (1))){
var state_27787__$1 = state_27787;
var statearr_27789_27929 = state_27787__$1;
(statearr_27789_27929[(2)] = null);

(statearr_27789_27929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27788 === (2))){
var state_27787__$1 = state_27787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27787__$1,(4),jobs);
} else {
if((state_val_27788 === (3))){
var inst_27785 = (state_27787[(2)]);
var state_27787__$1 = state_27787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27787__$1,inst_27785);
} else {
if((state_val_27788 === (4))){
var inst_27777 = (state_27787[(2)]);
var inst_27778 = async.call(null,inst_27777);
var state_27787__$1 = state_27787;
if(cljs.core.truth_(inst_27778)){
var statearr_27790_27930 = state_27787__$1;
(statearr_27790_27930[(1)] = (5));

} else {
var statearr_27791_27931 = state_27787__$1;
(statearr_27791_27931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27788 === (5))){
var state_27787__$1 = state_27787;
var statearr_27792_27932 = state_27787__$1;
(statearr_27792_27932[(2)] = null);

(statearr_27792_27932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27788 === (6))){
var state_27787__$1 = state_27787;
var statearr_27793_27933 = state_27787__$1;
(statearr_27793_27933[(2)] = null);

(statearr_27793_27933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27788 === (7))){
var inst_27783 = (state_27787[(2)]);
var state_27787__$1 = state_27787;
var statearr_27794_27934 = state_27787__$1;
(statearr_27794_27934[(2)] = inst_27783);

(statearr_27794_27934[(1)] = (3));


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
});})(__27916,c__20613__auto___27928,G__27747_27917,n__19332__auto___27915,jobs,results,process,async))
;
return ((function (__27916,switch__20501__auto__,c__20613__auto___27928,G__27747_27917,n__19332__auto___27915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_27798 = [null,null,null,null,null,null,null];
(statearr_27798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_27798[(1)] = (1));

return statearr_27798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_27787){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_27787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e27799){if((e27799 instanceof Object)){
var ex__20505__auto__ = e27799;
var statearr_27800_27935 = state_27787;
(statearr_27800_27935[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27936 = state_27787;
state_27787 = G__27936;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_27787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_27787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(__27916,switch__20501__auto__,c__20613__auto___27928,G__27747_27917,n__19332__auto___27915,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_27801 = f__20614__auto__.call(null);
(statearr_27801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___27928);

return statearr_27801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(__27916,c__20613__auto___27928,G__27747_27917,n__19332__auto___27915,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27937 = (__27916 + (1));
__27916 = G__27937;
continue;
} else {
}
break;
}

var c__20613__auto___27938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___27938,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___27938,jobs,results,process,async){
return (function (state_27823){
var state_val_27824 = (state_27823[(1)]);
if((state_val_27824 === (1))){
var state_27823__$1 = state_27823;
var statearr_27825_27939 = state_27823__$1;
(statearr_27825_27939[(2)] = null);

(statearr_27825_27939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (2))){
var state_27823__$1 = state_27823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27823__$1,(4),from);
} else {
if((state_val_27824 === (3))){
var inst_27821 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27823__$1,inst_27821);
} else {
if((state_val_27824 === (4))){
var inst_27804 = (state_27823[(7)]);
var inst_27804__$1 = (state_27823[(2)]);
var inst_27805 = (inst_27804__$1 == null);
var state_27823__$1 = (function (){var statearr_27826 = state_27823;
(statearr_27826[(7)] = inst_27804__$1);

return statearr_27826;
})();
if(cljs.core.truth_(inst_27805)){
var statearr_27827_27940 = state_27823__$1;
(statearr_27827_27940[(1)] = (5));

} else {
var statearr_27828_27941 = state_27823__$1;
(statearr_27828_27941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (5))){
var inst_27807 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27823__$1 = state_27823;
var statearr_27829_27942 = state_27823__$1;
(statearr_27829_27942[(2)] = inst_27807);

(statearr_27829_27942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (6))){
var inst_27804 = (state_27823[(7)]);
var inst_27809 = (state_27823[(8)]);
var inst_27809__$1 = cljs.core.async.chan.call(null,(1));
var inst_27810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27811 = [inst_27804,inst_27809__$1];
var inst_27812 = (new cljs.core.PersistentVector(null,2,(5),inst_27810,inst_27811,null));
var state_27823__$1 = (function (){var statearr_27830 = state_27823;
(statearr_27830[(8)] = inst_27809__$1);

return statearr_27830;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27823__$1,(8),jobs,inst_27812);
} else {
if((state_val_27824 === (7))){
var inst_27819 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27831_27943 = state_27823__$1;
(statearr_27831_27943[(2)] = inst_27819);

(statearr_27831_27943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (8))){
var inst_27809 = (state_27823[(8)]);
var inst_27814 = (state_27823[(2)]);
var state_27823__$1 = (function (){var statearr_27832 = state_27823;
(statearr_27832[(9)] = inst_27814);

return statearr_27832;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27823__$1,(9),results,inst_27809);
} else {
if((state_val_27824 === (9))){
var inst_27816 = (state_27823[(2)]);
var state_27823__$1 = (function (){var statearr_27833 = state_27823;
(statearr_27833[(10)] = inst_27816);

return statearr_27833;
})();
var statearr_27834_27944 = state_27823__$1;
(statearr_27834_27944[(2)] = null);

(statearr_27834_27944[(1)] = (2));


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
});})(c__20613__auto___27938,jobs,results,process,async))
;
return ((function (switch__20501__auto__,c__20613__auto___27938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_27838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_27838[(1)] = (1));

return statearr_27838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_27823){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_27823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e27839){if((e27839 instanceof Object)){
var ex__20505__auto__ = e27839;
var statearr_27840_27945 = state_27823;
(statearr_27840_27945[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27946 = state_27823;
state_27823 = G__27946;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_27823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_27823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___27938,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_27841 = f__20614__auto__.call(null);
(statearr_27841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___27938);

return statearr_27841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___27938,jobs,results,process,async))
);


var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,jobs,results,process,async){
return (function (state_27879){
var state_val_27880 = (state_27879[(1)]);
if((state_val_27880 === (7))){
var inst_27875 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27881_27947 = state_27879__$1;
(statearr_27881_27947[(2)] = inst_27875);

(statearr_27881_27947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (20))){
var state_27879__$1 = state_27879;
var statearr_27882_27948 = state_27879__$1;
(statearr_27882_27948[(2)] = null);

(statearr_27882_27948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (1))){
var state_27879__$1 = state_27879;
var statearr_27883_27949 = state_27879__$1;
(statearr_27883_27949[(2)] = null);

(statearr_27883_27949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (4))){
var inst_27844 = (state_27879[(7)]);
var inst_27844__$1 = (state_27879[(2)]);
var inst_27845 = (inst_27844__$1 == null);
var state_27879__$1 = (function (){var statearr_27884 = state_27879;
(statearr_27884[(7)] = inst_27844__$1);

return statearr_27884;
})();
if(cljs.core.truth_(inst_27845)){
var statearr_27885_27950 = state_27879__$1;
(statearr_27885_27950[(1)] = (5));

} else {
var statearr_27886_27951 = state_27879__$1;
(statearr_27886_27951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (15))){
var inst_27857 = (state_27879[(8)]);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27879__$1,(18),to,inst_27857);
} else {
if((state_val_27880 === (21))){
var inst_27870 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27887_27952 = state_27879__$1;
(statearr_27887_27952[(2)] = inst_27870);

(statearr_27887_27952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (13))){
var inst_27872 = (state_27879[(2)]);
var state_27879__$1 = (function (){var statearr_27888 = state_27879;
(statearr_27888[(9)] = inst_27872);

return statearr_27888;
})();
var statearr_27889_27953 = state_27879__$1;
(statearr_27889_27953[(2)] = null);

(statearr_27889_27953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (6))){
var inst_27844 = (state_27879[(7)]);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27879__$1,(11),inst_27844);
} else {
if((state_val_27880 === (17))){
var inst_27865 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
if(cljs.core.truth_(inst_27865)){
var statearr_27890_27954 = state_27879__$1;
(statearr_27890_27954[(1)] = (19));

} else {
var statearr_27891_27955 = state_27879__$1;
(statearr_27891_27955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (3))){
var inst_27877 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27879__$1,inst_27877);
} else {
if((state_val_27880 === (12))){
var inst_27854 = (state_27879[(10)]);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27879__$1,(14),inst_27854);
} else {
if((state_val_27880 === (2))){
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27879__$1,(4),results);
} else {
if((state_val_27880 === (19))){
var state_27879__$1 = state_27879;
var statearr_27892_27956 = state_27879__$1;
(statearr_27892_27956[(2)] = null);

(statearr_27892_27956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (11))){
var inst_27854 = (state_27879[(2)]);
var state_27879__$1 = (function (){var statearr_27893 = state_27879;
(statearr_27893[(10)] = inst_27854);

return statearr_27893;
})();
var statearr_27894_27957 = state_27879__$1;
(statearr_27894_27957[(2)] = null);

(statearr_27894_27957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (9))){
var state_27879__$1 = state_27879;
var statearr_27895_27958 = state_27879__$1;
(statearr_27895_27958[(2)] = null);

(statearr_27895_27958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (5))){
var state_27879__$1 = state_27879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27896_27959 = state_27879__$1;
(statearr_27896_27959[(1)] = (8));

} else {
var statearr_27897_27960 = state_27879__$1;
(statearr_27897_27960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (14))){
var inst_27857 = (state_27879[(8)]);
var inst_27859 = (state_27879[(11)]);
var inst_27857__$1 = (state_27879[(2)]);
var inst_27858 = (inst_27857__$1 == null);
var inst_27859__$1 = cljs.core.not.call(null,inst_27858);
var state_27879__$1 = (function (){var statearr_27898 = state_27879;
(statearr_27898[(8)] = inst_27857__$1);

(statearr_27898[(11)] = inst_27859__$1);

return statearr_27898;
})();
if(inst_27859__$1){
var statearr_27899_27961 = state_27879__$1;
(statearr_27899_27961[(1)] = (15));

} else {
var statearr_27900_27962 = state_27879__$1;
(statearr_27900_27962[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (16))){
var inst_27859 = (state_27879[(11)]);
var state_27879__$1 = state_27879;
var statearr_27901_27963 = state_27879__$1;
(statearr_27901_27963[(2)] = inst_27859);

(statearr_27901_27963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (10))){
var inst_27851 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27902_27964 = state_27879__$1;
(statearr_27902_27964[(2)] = inst_27851);

(statearr_27902_27964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (18))){
var inst_27862 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27903_27965 = state_27879__$1;
(statearr_27903_27965[(2)] = inst_27862);

(statearr_27903_27965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (8))){
var inst_27848 = cljs.core.async.close_BANG_.call(null,to);
var state_27879__$1 = state_27879;
var statearr_27904_27966 = state_27879__$1;
(statearr_27904_27966[(2)] = inst_27848);

(statearr_27904_27966[(1)] = (10));


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
});})(c__20613__auto__,jobs,results,process,async))
;
return ((function (switch__20501__auto__,c__20613__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_27908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_27908[(1)] = (1));

return statearr_27908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_27879){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_27879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e27909){if((e27909 instanceof Object)){
var ex__20505__auto__ = e27909;
var statearr_27910_27967 = state_27879;
(statearr_27910_27967[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27968 = state_27879;
state_27879 = G__27968;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_27879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_27879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_27911 = f__20614__auto__.call(null);
(statearr_27911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,jobs,results,process,async))
);

return c__20613__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27969 = [];
var len__19487__auto___27972 = arguments.length;
var i__19488__auto___27973 = (0);
while(true){
if((i__19488__auto___27973 < len__19487__auto___27972)){
args27969.push((arguments[i__19488__auto___27973]));

var G__27974 = (i__19488__auto___27973 + (1));
i__19488__auto___27973 = G__27974;
continue;
} else {
}
break;
}

var G__27971 = args27969.length;
switch (G__27971) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27969.length)].join('')));

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
var args27976 = [];
var len__19487__auto___27979 = arguments.length;
var i__19488__auto___27980 = (0);
while(true){
if((i__19488__auto___27980 < len__19487__auto___27979)){
args27976.push((arguments[i__19488__auto___27980]));

var G__27981 = (i__19488__auto___27980 + (1));
i__19488__auto___27980 = G__27981;
continue;
} else {
}
break;
}

var G__27978 = args27976.length;
switch (G__27978) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27976.length)].join('')));

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
var args27983 = [];
var len__19487__auto___28036 = arguments.length;
var i__19488__auto___28037 = (0);
while(true){
if((i__19488__auto___28037 < len__19487__auto___28036)){
args27983.push((arguments[i__19488__auto___28037]));

var G__28038 = (i__19488__auto___28037 + (1));
i__19488__auto___28037 = G__28038;
continue;
} else {
}
break;
}

var G__27985 = args27983.length;
switch (G__27985) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27983.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20613__auto___28040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___28040,tc,fc){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___28040,tc,fc){
return (function (state_28011){
var state_val_28012 = (state_28011[(1)]);
if((state_val_28012 === (7))){
var inst_28007 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
var statearr_28013_28041 = state_28011__$1;
(statearr_28013_28041[(2)] = inst_28007);

(statearr_28013_28041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (1))){
var state_28011__$1 = state_28011;
var statearr_28014_28042 = state_28011__$1;
(statearr_28014_28042[(2)] = null);

(statearr_28014_28042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (4))){
var inst_27988 = (state_28011[(7)]);
var inst_27988__$1 = (state_28011[(2)]);
var inst_27989 = (inst_27988__$1 == null);
var state_28011__$1 = (function (){var statearr_28015 = state_28011;
(statearr_28015[(7)] = inst_27988__$1);

return statearr_28015;
})();
if(cljs.core.truth_(inst_27989)){
var statearr_28016_28043 = state_28011__$1;
(statearr_28016_28043[(1)] = (5));

} else {
var statearr_28017_28044 = state_28011__$1;
(statearr_28017_28044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (13))){
var state_28011__$1 = state_28011;
var statearr_28018_28045 = state_28011__$1;
(statearr_28018_28045[(2)] = null);

(statearr_28018_28045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (6))){
var inst_27988 = (state_28011[(7)]);
var inst_27994 = p.call(null,inst_27988);
var state_28011__$1 = state_28011;
if(cljs.core.truth_(inst_27994)){
var statearr_28019_28046 = state_28011__$1;
(statearr_28019_28046[(1)] = (9));

} else {
var statearr_28020_28047 = state_28011__$1;
(statearr_28020_28047[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (3))){
var inst_28009 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28011__$1,inst_28009);
} else {
if((state_val_28012 === (12))){
var state_28011__$1 = state_28011;
var statearr_28021_28048 = state_28011__$1;
(statearr_28021_28048[(2)] = null);

(statearr_28021_28048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (2))){
var state_28011__$1 = state_28011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28011__$1,(4),ch);
} else {
if((state_val_28012 === (11))){
var inst_27988 = (state_28011[(7)]);
var inst_27998 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28011__$1,(8),inst_27998,inst_27988);
} else {
if((state_val_28012 === (9))){
var state_28011__$1 = state_28011;
var statearr_28022_28049 = state_28011__$1;
(statearr_28022_28049[(2)] = tc);

(statearr_28022_28049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (5))){
var inst_27991 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27992 = cljs.core.async.close_BANG_.call(null,fc);
var state_28011__$1 = (function (){var statearr_28023 = state_28011;
(statearr_28023[(8)] = inst_27991);

return statearr_28023;
})();
var statearr_28024_28050 = state_28011__$1;
(statearr_28024_28050[(2)] = inst_27992);

(statearr_28024_28050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (14))){
var inst_28005 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
var statearr_28025_28051 = state_28011__$1;
(statearr_28025_28051[(2)] = inst_28005);

(statearr_28025_28051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (10))){
var state_28011__$1 = state_28011;
var statearr_28026_28052 = state_28011__$1;
(statearr_28026_28052[(2)] = fc);

(statearr_28026_28052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28012 === (8))){
var inst_28000 = (state_28011[(2)]);
var state_28011__$1 = state_28011;
if(cljs.core.truth_(inst_28000)){
var statearr_28027_28053 = state_28011__$1;
(statearr_28027_28053[(1)] = (12));

} else {
var statearr_28028_28054 = state_28011__$1;
(statearr_28028_28054[(1)] = (13));

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
});})(c__20613__auto___28040,tc,fc))
;
return ((function (switch__20501__auto__,c__20613__auto___28040,tc,fc){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_28032 = [null,null,null,null,null,null,null,null,null];
(statearr_28032[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_28032[(1)] = (1));

return statearr_28032;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_28011){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_28011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e28033){if((e28033 instanceof Object)){
var ex__20505__auto__ = e28033;
var statearr_28034_28055 = state_28011;
(statearr_28034_28055[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28056 = state_28011;
state_28011 = G__28056;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_28011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_28011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___28040,tc,fc))
})();
var state__20615__auto__ = (function (){var statearr_28035 = f__20614__auto__.call(null);
(statearr_28035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___28040);

return statearr_28035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___28040,tc,fc))
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
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_28120){
var state_val_28121 = (state_28120[(1)]);
if((state_val_28121 === (7))){
var inst_28116 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28122_28143 = state_28120__$1;
(statearr_28122_28143[(2)] = inst_28116);

(statearr_28122_28143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (1))){
var inst_28100 = init;
var state_28120__$1 = (function (){var statearr_28123 = state_28120;
(statearr_28123[(7)] = inst_28100);

return statearr_28123;
})();
var statearr_28124_28144 = state_28120__$1;
(statearr_28124_28144[(2)] = null);

(statearr_28124_28144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (4))){
var inst_28103 = (state_28120[(8)]);
var inst_28103__$1 = (state_28120[(2)]);
var inst_28104 = (inst_28103__$1 == null);
var state_28120__$1 = (function (){var statearr_28125 = state_28120;
(statearr_28125[(8)] = inst_28103__$1);

return statearr_28125;
})();
if(cljs.core.truth_(inst_28104)){
var statearr_28126_28145 = state_28120__$1;
(statearr_28126_28145[(1)] = (5));

} else {
var statearr_28127_28146 = state_28120__$1;
(statearr_28127_28146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (6))){
var inst_28103 = (state_28120[(8)]);
var inst_28107 = (state_28120[(9)]);
var inst_28100 = (state_28120[(7)]);
var inst_28107__$1 = f.call(null,inst_28100,inst_28103);
var inst_28108 = cljs.core.reduced_QMARK_.call(null,inst_28107__$1);
var state_28120__$1 = (function (){var statearr_28128 = state_28120;
(statearr_28128[(9)] = inst_28107__$1);

return statearr_28128;
})();
if(inst_28108){
var statearr_28129_28147 = state_28120__$1;
(statearr_28129_28147[(1)] = (8));

} else {
var statearr_28130_28148 = state_28120__$1;
(statearr_28130_28148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (3))){
var inst_28118 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28120__$1,inst_28118);
} else {
if((state_val_28121 === (2))){
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28120__$1,(4),ch);
} else {
if((state_val_28121 === (9))){
var inst_28107 = (state_28120[(9)]);
var inst_28100 = inst_28107;
var state_28120__$1 = (function (){var statearr_28131 = state_28120;
(statearr_28131[(7)] = inst_28100);

return statearr_28131;
})();
var statearr_28132_28149 = state_28120__$1;
(statearr_28132_28149[(2)] = null);

(statearr_28132_28149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (5))){
var inst_28100 = (state_28120[(7)]);
var state_28120__$1 = state_28120;
var statearr_28133_28150 = state_28120__$1;
(statearr_28133_28150[(2)] = inst_28100);

(statearr_28133_28150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (10))){
var inst_28114 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28134_28151 = state_28120__$1;
(statearr_28134_28151[(2)] = inst_28114);

(statearr_28134_28151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (8))){
var inst_28107 = (state_28120[(9)]);
var inst_28110 = cljs.core.deref.call(null,inst_28107);
var state_28120__$1 = state_28120;
var statearr_28135_28152 = state_28120__$1;
(statearr_28135_28152[(2)] = inst_28110);

(statearr_28135_28152[(1)] = (10));


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
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20502__auto____0 = (function (){
var statearr_28139 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28139[(0)] = cljs$core$async$reduce_$_state_machine__20502__auto__);

(statearr_28139[(1)] = (1));

return statearr_28139;
});
var cljs$core$async$reduce_$_state_machine__20502__auto____1 = (function (state_28120){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_28120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e28140){if((e28140 instanceof Object)){
var ex__20505__auto__ = e28140;
var statearr_28141_28153 = state_28120;
(statearr_28141_28153[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28154 = state_28120;
state_28120 = G__28154;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20502__auto__ = function(state_28120){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20502__auto____1.call(this,state_28120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20502__auto____0;
cljs$core$async$reduce_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20502__auto____1;
return cljs$core$async$reduce_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_28142 = f__20614__auto__.call(null);
(statearr_28142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_28142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28155 = [];
var len__19487__auto___28207 = arguments.length;
var i__19488__auto___28208 = (0);
while(true){
if((i__19488__auto___28208 < len__19487__auto___28207)){
args28155.push((arguments[i__19488__auto___28208]));

var G__28209 = (i__19488__auto___28208 + (1));
i__19488__auto___28208 = G__28209;
continue;
} else {
}
break;
}

var G__28157 = args28155.length;
switch (G__28157) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28155.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_28182){
var state_val_28183 = (state_28182[(1)]);
if((state_val_28183 === (7))){
var inst_28164 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28184_28211 = state_28182__$1;
(statearr_28184_28211[(2)] = inst_28164);

(statearr_28184_28211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (1))){
var inst_28158 = cljs.core.seq.call(null,coll);
var inst_28159 = inst_28158;
var state_28182__$1 = (function (){var statearr_28185 = state_28182;
(statearr_28185[(7)] = inst_28159);

return statearr_28185;
})();
var statearr_28186_28212 = state_28182__$1;
(statearr_28186_28212[(2)] = null);

(statearr_28186_28212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (4))){
var inst_28159 = (state_28182[(7)]);
var inst_28162 = cljs.core.first.call(null,inst_28159);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28182__$1,(7),ch,inst_28162);
} else {
if((state_val_28183 === (13))){
var inst_28176 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28187_28213 = state_28182__$1;
(statearr_28187_28213[(2)] = inst_28176);

(statearr_28187_28213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (6))){
var inst_28167 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28167)){
var statearr_28188_28214 = state_28182__$1;
(statearr_28188_28214[(1)] = (8));

} else {
var statearr_28189_28215 = state_28182__$1;
(statearr_28189_28215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (3))){
var inst_28180 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28182__$1,inst_28180);
} else {
if((state_val_28183 === (12))){
var state_28182__$1 = state_28182;
var statearr_28190_28216 = state_28182__$1;
(statearr_28190_28216[(2)] = null);

(statearr_28190_28216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (2))){
var inst_28159 = (state_28182[(7)]);
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28159)){
var statearr_28191_28217 = state_28182__$1;
(statearr_28191_28217[(1)] = (4));

} else {
var statearr_28192_28218 = state_28182__$1;
(statearr_28192_28218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (11))){
var inst_28173 = cljs.core.async.close_BANG_.call(null,ch);
var state_28182__$1 = state_28182;
var statearr_28193_28219 = state_28182__$1;
(statearr_28193_28219[(2)] = inst_28173);

(statearr_28193_28219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (9))){
var state_28182__$1 = state_28182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28194_28220 = state_28182__$1;
(statearr_28194_28220[(1)] = (11));

} else {
var statearr_28195_28221 = state_28182__$1;
(statearr_28195_28221[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (5))){
var inst_28159 = (state_28182[(7)]);
var state_28182__$1 = state_28182;
var statearr_28196_28222 = state_28182__$1;
(statearr_28196_28222[(2)] = inst_28159);

(statearr_28196_28222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (10))){
var inst_28178 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28197_28223 = state_28182__$1;
(statearr_28197_28223[(2)] = inst_28178);

(statearr_28197_28223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (8))){
var inst_28159 = (state_28182[(7)]);
var inst_28169 = cljs.core.next.call(null,inst_28159);
var inst_28159__$1 = inst_28169;
var state_28182__$1 = (function (){var statearr_28198 = state_28182;
(statearr_28198[(7)] = inst_28159__$1);

return statearr_28198;
})();
var statearr_28199_28224 = state_28182__$1;
(statearr_28199_28224[(2)] = null);

(statearr_28199_28224[(1)] = (2));


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
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_28203 = [null,null,null,null,null,null,null,null];
(statearr_28203[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_28203[(1)] = (1));

return statearr_28203;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_28182){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_28182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e28204){if((e28204 instanceof Object)){
var ex__20505__auto__ = e28204;
var statearr_28205_28225 = state_28182;
(statearr_28205_28225[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28226 = state_28182;
state_28182 = G__28226;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_28182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_28182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_28206 = f__20614__auto__.call(null);
(statearr_28206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19080__auto__ = (((_ == null))?null:_);
var m__19081__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,_);
} else {
var m__19081__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19081__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m,ch);
} else {
var m__19081__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m);
} else {
var m__19081__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28448 = (function (mult,ch,cs,meta28449){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28449 = meta28449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28450,meta28449__$1){
var self__ = this;
var _28450__$1 = this;
return (new cljs.core.async.t_cljs$core$async28448(self__.mult,self__.ch,self__.cs,meta28449__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28450){
var self__ = this;
var _28450__$1 = this;
return self__.meta28449;
});})(cs))
;

cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28448.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28448.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28449","meta28449",-2031320991,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28448";

cljs.core.async.t_cljs$core$async28448.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async28448");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28448 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28448(mult__$1,ch__$1,cs__$1,meta28449){
return (new cljs.core.async.t_cljs$core$async28448(mult__$1,ch__$1,cs__$1,meta28449));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28448(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20613__auto___28669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___28669,cs,m,dchan,dctr,done){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___28669,cs,m,dchan,dctr,done){
return (function (state_28581){
var state_val_28582 = (state_28581[(1)]);
if((state_val_28582 === (7))){
var inst_28577 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28583_28670 = state_28581__$1;
(statearr_28583_28670[(2)] = inst_28577);

(statearr_28583_28670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (20))){
var inst_28482 = (state_28581[(7)]);
var inst_28492 = cljs.core.first.call(null,inst_28482);
var inst_28493 = cljs.core.nth.call(null,inst_28492,(0),null);
var inst_28494 = cljs.core.nth.call(null,inst_28492,(1),null);
var state_28581__$1 = (function (){var statearr_28584 = state_28581;
(statearr_28584[(8)] = inst_28493);

return statearr_28584;
})();
if(cljs.core.truth_(inst_28494)){
var statearr_28585_28671 = state_28581__$1;
(statearr_28585_28671[(1)] = (22));

} else {
var statearr_28586_28672 = state_28581__$1;
(statearr_28586_28672[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (27))){
var inst_28522 = (state_28581[(9)]);
var inst_28529 = (state_28581[(10)]);
var inst_28524 = (state_28581[(11)]);
var inst_28453 = (state_28581[(12)]);
var inst_28529__$1 = cljs.core._nth.call(null,inst_28522,inst_28524);
var inst_28530 = cljs.core.async.put_BANG_.call(null,inst_28529__$1,inst_28453,done);
var state_28581__$1 = (function (){var statearr_28587 = state_28581;
(statearr_28587[(10)] = inst_28529__$1);

return statearr_28587;
})();
if(cljs.core.truth_(inst_28530)){
var statearr_28588_28673 = state_28581__$1;
(statearr_28588_28673[(1)] = (30));

} else {
var statearr_28589_28674 = state_28581__$1;
(statearr_28589_28674[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (1))){
var state_28581__$1 = state_28581;
var statearr_28590_28675 = state_28581__$1;
(statearr_28590_28675[(2)] = null);

(statearr_28590_28675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (24))){
var inst_28482 = (state_28581[(7)]);
var inst_28499 = (state_28581[(2)]);
var inst_28500 = cljs.core.next.call(null,inst_28482);
var inst_28462 = inst_28500;
var inst_28463 = null;
var inst_28464 = (0);
var inst_28465 = (0);
var state_28581__$1 = (function (){var statearr_28591 = state_28581;
(statearr_28591[(13)] = inst_28499);

(statearr_28591[(14)] = inst_28463);

(statearr_28591[(15)] = inst_28464);

(statearr_28591[(16)] = inst_28465);

(statearr_28591[(17)] = inst_28462);

return statearr_28591;
})();
var statearr_28592_28676 = state_28581__$1;
(statearr_28592_28676[(2)] = null);

(statearr_28592_28676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (39))){
var state_28581__$1 = state_28581;
var statearr_28596_28677 = state_28581__$1;
(statearr_28596_28677[(2)] = null);

(statearr_28596_28677[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (4))){
var inst_28453 = (state_28581[(12)]);
var inst_28453__$1 = (state_28581[(2)]);
var inst_28454 = (inst_28453__$1 == null);
var state_28581__$1 = (function (){var statearr_28597 = state_28581;
(statearr_28597[(12)] = inst_28453__$1);

return statearr_28597;
})();
if(cljs.core.truth_(inst_28454)){
var statearr_28598_28678 = state_28581__$1;
(statearr_28598_28678[(1)] = (5));

} else {
var statearr_28599_28679 = state_28581__$1;
(statearr_28599_28679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (15))){
var inst_28463 = (state_28581[(14)]);
var inst_28464 = (state_28581[(15)]);
var inst_28465 = (state_28581[(16)]);
var inst_28462 = (state_28581[(17)]);
var inst_28478 = (state_28581[(2)]);
var inst_28479 = (inst_28465 + (1));
var tmp28593 = inst_28463;
var tmp28594 = inst_28464;
var tmp28595 = inst_28462;
var inst_28462__$1 = tmp28595;
var inst_28463__$1 = tmp28593;
var inst_28464__$1 = tmp28594;
var inst_28465__$1 = inst_28479;
var state_28581__$1 = (function (){var statearr_28600 = state_28581;
(statearr_28600[(14)] = inst_28463__$1);

(statearr_28600[(15)] = inst_28464__$1);

(statearr_28600[(16)] = inst_28465__$1);

(statearr_28600[(17)] = inst_28462__$1);

(statearr_28600[(18)] = inst_28478);

return statearr_28600;
})();
var statearr_28601_28680 = state_28581__$1;
(statearr_28601_28680[(2)] = null);

(statearr_28601_28680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (21))){
var inst_28503 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28605_28681 = state_28581__$1;
(statearr_28605_28681[(2)] = inst_28503);

(statearr_28605_28681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (31))){
var inst_28529 = (state_28581[(10)]);
var inst_28533 = done.call(null,null);
var inst_28534 = cljs.core.async.untap_STAR_.call(null,m,inst_28529);
var state_28581__$1 = (function (){var statearr_28606 = state_28581;
(statearr_28606[(19)] = inst_28533);

return statearr_28606;
})();
var statearr_28607_28682 = state_28581__$1;
(statearr_28607_28682[(2)] = inst_28534);

(statearr_28607_28682[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (32))){
var inst_28521 = (state_28581[(20)]);
var inst_28522 = (state_28581[(9)]);
var inst_28524 = (state_28581[(11)]);
var inst_28523 = (state_28581[(21)]);
var inst_28536 = (state_28581[(2)]);
var inst_28537 = (inst_28524 + (1));
var tmp28602 = inst_28521;
var tmp28603 = inst_28522;
var tmp28604 = inst_28523;
var inst_28521__$1 = tmp28602;
var inst_28522__$1 = tmp28603;
var inst_28523__$1 = tmp28604;
var inst_28524__$1 = inst_28537;
var state_28581__$1 = (function (){var statearr_28608 = state_28581;
(statearr_28608[(20)] = inst_28521__$1);

(statearr_28608[(9)] = inst_28522__$1);

(statearr_28608[(11)] = inst_28524__$1);

(statearr_28608[(21)] = inst_28523__$1);

(statearr_28608[(22)] = inst_28536);

return statearr_28608;
})();
var statearr_28609_28683 = state_28581__$1;
(statearr_28609_28683[(2)] = null);

(statearr_28609_28683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (40))){
var inst_28549 = (state_28581[(23)]);
var inst_28553 = done.call(null,null);
var inst_28554 = cljs.core.async.untap_STAR_.call(null,m,inst_28549);
var state_28581__$1 = (function (){var statearr_28610 = state_28581;
(statearr_28610[(24)] = inst_28553);

return statearr_28610;
})();
var statearr_28611_28684 = state_28581__$1;
(statearr_28611_28684[(2)] = inst_28554);

(statearr_28611_28684[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (33))){
var inst_28540 = (state_28581[(25)]);
var inst_28542 = cljs.core.chunked_seq_QMARK_.call(null,inst_28540);
var state_28581__$1 = state_28581;
if(inst_28542){
var statearr_28612_28685 = state_28581__$1;
(statearr_28612_28685[(1)] = (36));

} else {
var statearr_28613_28686 = state_28581__$1;
(statearr_28613_28686[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (13))){
var inst_28472 = (state_28581[(26)]);
var inst_28475 = cljs.core.async.close_BANG_.call(null,inst_28472);
var state_28581__$1 = state_28581;
var statearr_28614_28687 = state_28581__$1;
(statearr_28614_28687[(2)] = inst_28475);

(statearr_28614_28687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (22))){
var inst_28493 = (state_28581[(8)]);
var inst_28496 = cljs.core.async.close_BANG_.call(null,inst_28493);
var state_28581__$1 = state_28581;
var statearr_28615_28688 = state_28581__$1;
(statearr_28615_28688[(2)] = inst_28496);

(statearr_28615_28688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (36))){
var inst_28540 = (state_28581[(25)]);
var inst_28544 = cljs.core.chunk_first.call(null,inst_28540);
var inst_28545 = cljs.core.chunk_rest.call(null,inst_28540);
var inst_28546 = cljs.core.count.call(null,inst_28544);
var inst_28521 = inst_28545;
var inst_28522 = inst_28544;
var inst_28523 = inst_28546;
var inst_28524 = (0);
var state_28581__$1 = (function (){var statearr_28616 = state_28581;
(statearr_28616[(20)] = inst_28521);

(statearr_28616[(9)] = inst_28522);

(statearr_28616[(11)] = inst_28524);

(statearr_28616[(21)] = inst_28523);

return statearr_28616;
})();
var statearr_28617_28689 = state_28581__$1;
(statearr_28617_28689[(2)] = null);

(statearr_28617_28689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (41))){
var inst_28540 = (state_28581[(25)]);
var inst_28556 = (state_28581[(2)]);
var inst_28557 = cljs.core.next.call(null,inst_28540);
var inst_28521 = inst_28557;
var inst_28522 = null;
var inst_28523 = (0);
var inst_28524 = (0);
var state_28581__$1 = (function (){var statearr_28618 = state_28581;
(statearr_28618[(20)] = inst_28521);

(statearr_28618[(9)] = inst_28522);

(statearr_28618[(11)] = inst_28524);

(statearr_28618[(21)] = inst_28523);

(statearr_28618[(27)] = inst_28556);

return statearr_28618;
})();
var statearr_28619_28690 = state_28581__$1;
(statearr_28619_28690[(2)] = null);

(statearr_28619_28690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (43))){
var state_28581__$1 = state_28581;
var statearr_28620_28691 = state_28581__$1;
(statearr_28620_28691[(2)] = null);

(statearr_28620_28691[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (29))){
var inst_28565 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28621_28692 = state_28581__$1;
(statearr_28621_28692[(2)] = inst_28565);

(statearr_28621_28692[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (44))){
var inst_28574 = (state_28581[(2)]);
var state_28581__$1 = (function (){var statearr_28622 = state_28581;
(statearr_28622[(28)] = inst_28574);

return statearr_28622;
})();
var statearr_28623_28693 = state_28581__$1;
(statearr_28623_28693[(2)] = null);

(statearr_28623_28693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (6))){
var inst_28513 = (state_28581[(29)]);
var inst_28512 = cljs.core.deref.call(null,cs);
var inst_28513__$1 = cljs.core.keys.call(null,inst_28512);
var inst_28514 = cljs.core.count.call(null,inst_28513__$1);
var inst_28515 = cljs.core.reset_BANG_.call(null,dctr,inst_28514);
var inst_28520 = cljs.core.seq.call(null,inst_28513__$1);
var inst_28521 = inst_28520;
var inst_28522 = null;
var inst_28523 = (0);
var inst_28524 = (0);
var state_28581__$1 = (function (){var statearr_28624 = state_28581;
(statearr_28624[(20)] = inst_28521);

(statearr_28624[(9)] = inst_28522);

(statearr_28624[(30)] = inst_28515);

(statearr_28624[(11)] = inst_28524);

(statearr_28624[(21)] = inst_28523);

(statearr_28624[(29)] = inst_28513__$1);

return statearr_28624;
})();
var statearr_28625_28694 = state_28581__$1;
(statearr_28625_28694[(2)] = null);

(statearr_28625_28694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (28))){
var inst_28521 = (state_28581[(20)]);
var inst_28540 = (state_28581[(25)]);
var inst_28540__$1 = cljs.core.seq.call(null,inst_28521);
var state_28581__$1 = (function (){var statearr_28626 = state_28581;
(statearr_28626[(25)] = inst_28540__$1);

return statearr_28626;
})();
if(inst_28540__$1){
var statearr_28627_28695 = state_28581__$1;
(statearr_28627_28695[(1)] = (33));

} else {
var statearr_28628_28696 = state_28581__$1;
(statearr_28628_28696[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (25))){
var inst_28524 = (state_28581[(11)]);
var inst_28523 = (state_28581[(21)]);
var inst_28526 = (inst_28524 < inst_28523);
var inst_28527 = inst_28526;
var state_28581__$1 = state_28581;
if(cljs.core.truth_(inst_28527)){
var statearr_28629_28697 = state_28581__$1;
(statearr_28629_28697[(1)] = (27));

} else {
var statearr_28630_28698 = state_28581__$1;
(statearr_28630_28698[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (34))){
var state_28581__$1 = state_28581;
var statearr_28631_28699 = state_28581__$1;
(statearr_28631_28699[(2)] = null);

(statearr_28631_28699[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (17))){
var state_28581__$1 = state_28581;
var statearr_28632_28700 = state_28581__$1;
(statearr_28632_28700[(2)] = null);

(statearr_28632_28700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (3))){
var inst_28579 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28581__$1,inst_28579);
} else {
if((state_val_28582 === (12))){
var inst_28508 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28633_28701 = state_28581__$1;
(statearr_28633_28701[(2)] = inst_28508);

(statearr_28633_28701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (2))){
var state_28581__$1 = state_28581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28581__$1,(4),ch);
} else {
if((state_val_28582 === (23))){
var state_28581__$1 = state_28581;
var statearr_28634_28702 = state_28581__$1;
(statearr_28634_28702[(2)] = null);

(statearr_28634_28702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (35))){
var inst_28563 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28635_28703 = state_28581__$1;
(statearr_28635_28703[(2)] = inst_28563);

(statearr_28635_28703[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (19))){
var inst_28482 = (state_28581[(7)]);
var inst_28486 = cljs.core.chunk_first.call(null,inst_28482);
var inst_28487 = cljs.core.chunk_rest.call(null,inst_28482);
var inst_28488 = cljs.core.count.call(null,inst_28486);
var inst_28462 = inst_28487;
var inst_28463 = inst_28486;
var inst_28464 = inst_28488;
var inst_28465 = (0);
var state_28581__$1 = (function (){var statearr_28636 = state_28581;
(statearr_28636[(14)] = inst_28463);

(statearr_28636[(15)] = inst_28464);

(statearr_28636[(16)] = inst_28465);

(statearr_28636[(17)] = inst_28462);

return statearr_28636;
})();
var statearr_28637_28704 = state_28581__$1;
(statearr_28637_28704[(2)] = null);

(statearr_28637_28704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (11))){
var inst_28462 = (state_28581[(17)]);
var inst_28482 = (state_28581[(7)]);
var inst_28482__$1 = cljs.core.seq.call(null,inst_28462);
var state_28581__$1 = (function (){var statearr_28638 = state_28581;
(statearr_28638[(7)] = inst_28482__$1);

return statearr_28638;
})();
if(inst_28482__$1){
var statearr_28639_28705 = state_28581__$1;
(statearr_28639_28705[(1)] = (16));

} else {
var statearr_28640_28706 = state_28581__$1;
(statearr_28640_28706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (9))){
var inst_28510 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28641_28707 = state_28581__$1;
(statearr_28641_28707[(2)] = inst_28510);

(statearr_28641_28707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (5))){
var inst_28460 = cljs.core.deref.call(null,cs);
var inst_28461 = cljs.core.seq.call(null,inst_28460);
var inst_28462 = inst_28461;
var inst_28463 = null;
var inst_28464 = (0);
var inst_28465 = (0);
var state_28581__$1 = (function (){var statearr_28642 = state_28581;
(statearr_28642[(14)] = inst_28463);

(statearr_28642[(15)] = inst_28464);

(statearr_28642[(16)] = inst_28465);

(statearr_28642[(17)] = inst_28462);

return statearr_28642;
})();
var statearr_28643_28708 = state_28581__$1;
(statearr_28643_28708[(2)] = null);

(statearr_28643_28708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (14))){
var state_28581__$1 = state_28581;
var statearr_28644_28709 = state_28581__$1;
(statearr_28644_28709[(2)] = null);

(statearr_28644_28709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (45))){
var inst_28571 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28645_28710 = state_28581__$1;
(statearr_28645_28710[(2)] = inst_28571);

(statearr_28645_28710[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (26))){
var inst_28513 = (state_28581[(29)]);
var inst_28567 = (state_28581[(2)]);
var inst_28568 = cljs.core.seq.call(null,inst_28513);
var state_28581__$1 = (function (){var statearr_28646 = state_28581;
(statearr_28646[(31)] = inst_28567);

return statearr_28646;
})();
if(inst_28568){
var statearr_28647_28711 = state_28581__$1;
(statearr_28647_28711[(1)] = (42));

} else {
var statearr_28648_28712 = state_28581__$1;
(statearr_28648_28712[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (16))){
var inst_28482 = (state_28581[(7)]);
var inst_28484 = cljs.core.chunked_seq_QMARK_.call(null,inst_28482);
var state_28581__$1 = state_28581;
if(inst_28484){
var statearr_28649_28713 = state_28581__$1;
(statearr_28649_28713[(1)] = (19));

} else {
var statearr_28650_28714 = state_28581__$1;
(statearr_28650_28714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (38))){
var inst_28560 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28651_28715 = state_28581__$1;
(statearr_28651_28715[(2)] = inst_28560);

(statearr_28651_28715[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (30))){
var state_28581__$1 = state_28581;
var statearr_28652_28716 = state_28581__$1;
(statearr_28652_28716[(2)] = null);

(statearr_28652_28716[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (10))){
var inst_28463 = (state_28581[(14)]);
var inst_28465 = (state_28581[(16)]);
var inst_28471 = cljs.core._nth.call(null,inst_28463,inst_28465);
var inst_28472 = cljs.core.nth.call(null,inst_28471,(0),null);
var inst_28473 = cljs.core.nth.call(null,inst_28471,(1),null);
var state_28581__$1 = (function (){var statearr_28653 = state_28581;
(statearr_28653[(26)] = inst_28472);

return statearr_28653;
})();
if(cljs.core.truth_(inst_28473)){
var statearr_28654_28717 = state_28581__$1;
(statearr_28654_28717[(1)] = (13));

} else {
var statearr_28655_28718 = state_28581__$1;
(statearr_28655_28718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (18))){
var inst_28506 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28656_28719 = state_28581__$1;
(statearr_28656_28719[(2)] = inst_28506);

(statearr_28656_28719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (42))){
var state_28581__$1 = state_28581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28581__$1,(45),dchan);
} else {
if((state_val_28582 === (37))){
var inst_28540 = (state_28581[(25)]);
var inst_28549 = (state_28581[(23)]);
var inst_28453 = (state_28581[(12)]);
var inst_28549__$1 = cljs.core.first.call(null,inst_28540);
var inst_28550 = cljs.core.async.put_BANG_.call(null,inst_28549__$1,inst_28453,done);
var state_28581__$1 = (function (){var statearr_28657 = state_28581;
(statearr_28657[(23)] = inst_28549__$1);

return statearr_28657;
})();
if(cljs.core.truth_(inst_28550)){
var statearr_28658_28720 = state_28581__$1;
(statearr_28658_28720[(1)] = (39));

} else {
var statearr_28659_28721 = state_28581__$1;
(statearr_28659_28721[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (8))){
var inst_28464 = (state_28581[(15)]);
var inst_28465 = (state_28581[(16)]);
var inst_28467 = (inst_28465 < inst_28464);
var inst_28468 = inst_28467;
var state_28581__$1 = state_28581;
if(cljs.core.truth_(inst_28468)){
var statearr_28660_28722 = state_28581__$1;
(statearr_28660_28722[(1)] = (10));

} else {
var statearr_28661_28723 = state_28581__$1;
(statearr_28661_28723[(1)] = (11));

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
});})(c__20613__auto___28669,cs,m,dchan,dctr,done))
;
return ((function (switch__20501__auto__,c__20613__auto___28669,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20502__auto__ = null;
var cljs$core$async$mult_$_state_machine__20502__auto____0 = (function (){
var statearr_28665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28665[(0)] = cljs$core$async$mult_$_state_machine__20502__auto__);

(statearr_28665[(1)] = (1));

return statearr_28665;
});
var cljs$core$async$mult_$_state_machine__20502__auto____1 = (function (state_28581){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_28581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e28666){if((e28666 instanceof Object)){
var ex__20505__auto__ = e28666;
var statearr_28667_28724 = state_28581;
(statearr_28667_28724[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28725 = state_28581;
state_28581 = G__28725;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20502__auto__ = function(state_28581){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20502__auto____1.call(this,state_28581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20502__auto____0;
cljs$core$async$mult_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20502__auto____1;
return cljs$core$async$mult_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___28669,cs,m,dchan,dctr,done))
})();
var state__20615__auto__ = (function (){var statearr_28668 = f__20614__auto__.call(null);
(statearr_28668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___28669);

return statearr_28668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___28669,cs,m,dchan,dctr,done))
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
var args28726 = [];
var len__19487__auto___28729 = arguments.length;
var i__19488__auto___28730 = (0);
while(true){
if((i__19488__auto___28730 < len__19487__auto___28729)){
args28726.push((arguments[i__19488__auto___28730]));

var G__28731 = (i__19488__auto___28730 + (1));
i__19488__auto___28730 = G__28731;
continue;
} else {
}
break;
}

var G__28728 = args28726.length;
switch (G__28728) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28726.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m,ch);
} else {
var m__19081__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m,ch);
} else {
var m__19081__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m);
} else {
var m__19081__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m,state_map);
} else {
var m__19081__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19080__auto__ = (((m == null))?null:m);
var m__19081__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,m,mode);
} else {
var m__19081__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___28743 = arguments.length;
var i__19488__auto___28744 = (0);
while(true){
if((i__19488__auto___28744 < len__19487__auto___28743)){
args__19494__auto__.push((arguments[i__19488__auto___28744]));

var G__28745 = (i__19488__auto___28744 + (1));
i__19488__auto___28744 = G__28745;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28737){
var map__28738 = p__28737;
var map__28738__$1 = ((((!((map__28738 == null)))?((((map__28738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28738):map__28738);
var opts = map__28738__$1;
var statearr_28740_28746 = state;
(statearr_28740_28746[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28738,map__28738__$1,opts){
return (function (val){
var statearr_28741_28747 = state;
(statearr_28741_28747[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28738,map__28738__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28742_28748 = state;
(statearr_28742_28748[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28733){
var G__28734 = cljs.core.first.call(null,seq28733);
var seq28733__$1 = cljs.core.next.call(null,seq28733);
var G__28735 = cljs.core.first.call(null,seq28733__$1);
var seq28733__$2 = cljs.core.next.call(null,seq28733__$1);
var G__28736 = cljs.core.first.call(null,seq28733__$2);
var seq28733__$3 = cljs.core.next.call(null,seq28733__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28734,G__28735,G__28736,seq28733__$3);
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
var change = cljs.core.async.chan.call(null);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28912 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28913){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28913 = meta28913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28914,meta28913__$1){
var self__ = this;
var _28914__$1 = this;
return (new cljs.core.async.t_cljs$core$async28912(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28913__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28914){
var self__ = this;
var _28914__$1 = this;
return self__.meta28913;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28913","meta28913",-673068969,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28912";

cljs.core.async.t_cljs$core$async28912.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async28912");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28912 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28912(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28913){
return (new cljs.core.async.t_cljs$core$async28912(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28913));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28912(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20613__auto___29075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___29075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___29075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29012){
var state_val_29013 = (state_29012[(1)]);
if((state_val_29013 === (7))){
var inst_28930 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29014_29076 = state_29012__$1;
(statearr_29014_29076[(2)] = inst_28930);

(statearr_29014_29076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (20))){
var inst_28942 = (state_29012[(7)]);
var state_29012__$1 = state_29012;
var statearr_29015_29077 = state_29012__$1;
(statearr_29015_29077[(2)] = inst_28942);

(statearr_29015_29077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (27))){
var state_29012__$1 = state_29012;
var statearr_29016_29078 = state_29012__$1;
(statearr_29016_29078[(2)] = null);

(statearr_29016_29078[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (1))){
var inst_28918 = (state_29012[(8)]);
var inst_28918__$1 = calc_state.call(null);
var inst_28920 = (inst_28918__$1 == null);
var inst_28921 = cljs.core.not.call(null,inst_28920);
var state_29012__$1 = (function (){var statearr_29017 = state_29012;
(statearr_29017[(8)] = inst_28918__$1);

return statearr_29017;
})();
if(inst_28921){
var statearr_29018_29079 = state_29012__$1;
(statearr_29018_29079[(1)] = (2));

} else {
var statearr_29019_29080 = state_29012__$1;
(statearr_29019_29080[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (24))){
var inst_28986 = (state_29012[(9)]);
var inst_28972 = (state_29012[(10)]);
var inst_28965 = (state_29012[(11)]);
var inst_28986__$1 = inst_28965.call(null,inst_28972);
var state_29012__$1 = (function (){var statearr_29020 = state_29012;
(statearr_29020[(9)] = inst_28986__$1);

return statearr_29020;
})();
if(cljs.core.truth_(inst_28986__$1)){
var statearr_29021_29081 = state_29012__$1;
(statearr_29021_29081[(1)] = (29));

} else {
var statearr_29022_29082 = state_29012__$1;
(statearr_29022_29082[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (4))){
var inst_28933 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28933)){
var statearr_29023_29083 = state_29012__$1;
(statearr_29023_29083[(1)] = (8));

} else {
var statearr_29024_29084 = state_29012__$1;
(statearr_29024_29084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (15))){
var inst_28959 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28959)){
var statearr_29025_29085 = state_29012__$1;
(statearr_29025_29085[(1)] = (19));

} else {
var statearr_29026_29086 = state_29012__$1;
(statearr_29026_29086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (21))){
var inst_28964 = (state_29012[(12)]);
var inst_28964__$1 = (state_29012[(2)]);
var inst_28965 = cljs.core.get.call(null,inst_28964__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28966 = cljs.core.get.call(null,inst_28964__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28967 = cljs.core.get.call(null,inst_28964__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29012__$1 = (function (){var statearr_29027 = state_29012;
(statearr_29027[(12)] = inst_28964__$1);

(statearr_29027[(11)] = inst_28965);

(statearr_29027[(13)] = inst_28966);

return statearr_29027;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29012__$1,(22),inst_28967);
} else {
if((state_val_29013 === (31))){
var inst_28994 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28994)){
var statearr_29028_29087 = state_29012__$1;
(statearr_29028_29087[(1)] = (32));

} else {
var statearr_29029_29088 = state_29012__$1;
(statearr_29029_29088[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (32))){
var inst_28971 = (state_29012[(14)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29012__$1,(35),out,inst_28971);
} else {
if((state_val_29013 === (33))){
var inst_28964 = (state_29012[(12)]);
var inst_28942 = inst_28964;
var state_29012__$1 = (function (){var statearr_29030 = state_29012;
(statearr_29030[(7)] = inst_28942);

return statearr_29030;
})();
var statearr_29031_29089 = state_29012__$1;
(statearr_29031_29089[(2)] = null);

(statearr_29031_29089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (13))){
var inst_28942 = (state_29012[(7)]);
var inst_28949 = inst_28942.cljs$lang$protocol_mask$partition0$;
var inst_28950 = (inst_28949 & (64));
var inst_28951 = inst_28942.cljs$core$ISeq$;
var inst_28952 = (inst_28950) || (inst_28951);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28952)){
var statearr_29032_29090 = state_29012__$1;
(statearr_29032_29090[(1)] = (16));

} else {
var statearr_29033_29091 = state_29012__$1;
(statearr_29033_29091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (22))){
var inst_28972 = (state_29012[(10)]);
var inst_28971 = (state_29012[(14)]);
var inst_28970 = (state_29012[(2)]);
var inst_28971__$1 = cljs.core.nth.call(null,inst_28970,(0),null);
var inst_28972__$1 = cljs.core.nth.call(null,inst_28970,(1),null);
var inst_28973 = (inst_28971__$1 == null);
var inst_28974 = cljs.core._EQ_.call(null,inst_28972__$1,change);
var inst_28975 = (inst_28973) || (inst_28974);
var state_29012__$1 = (function (){var statearr_29034 = state_29012;
(statearr_29034[(10)] = inst_28972__$1);

(statearr_29034[(14)] = inst_28971__$1);

return statearr_29034;
})();
if(cljs.core.truth_(inst_28975)){
var statearr_29035_29092 = state_29012__$1;
(statearr_29035_29092[(1)] = (23));

} else {
var statearr_29036_29093 = state_29012__$1;
(statearr_29036_29093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (36))){
var inst_28964 = (state_29012[(12)]);
var inst_28942 = inst_28964;
var state_29012__$1 = (function (){var statearr_29037 = state_29012;
(statearr_29037[(7)] = inst_28942);

return statearr_29037;
})();
var statearr_29038_29094 = state_29012__$1;
(statearr_29038_29094[(2)] = null);

(statearr_29038_29094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (29))){
var inst_28986 = (state_29012[(9)]);
var state_29012__$1 = state_29012;
var statearr_29039_29095 = state_29012__$1;
(statearr_29039_29095[(2)] = inst_28986);

(statearr_29039_29095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (6))){
var state_29012__$1 = state_29012;
var statearr_29040_29096 = state_29012__$1;
(statearr_29040_29096[(2)] = false);

(statearr_29040_29096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (28))){
var inst_28982 = (state_29012[(2)]);
var inst_28983 = calc_state.call(null);
var inst_28942 = inst_28983;
var state_29012__$1 = (function (){var statearr_29041 = state_29012;
(statearr_29041[(15)] = inst_28982);

(statearr_29041[(7)] = inst_28942);

return statearr_29041;
})();
var statearr_29042_29097 = state_29012__$1;
(statearr_29042_29097[(2)] = null);

(statearr_29042_29097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (25))){
var inst_29008 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29043_29098 = state_29012__$1;
(statearr_29043_29098[(2)] = inst_29008);

(statearr_29043_29098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (34))){
var inst_29006 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29044_29099 = state_29012__$1;
(statearr_29044_29099[(2)] = inst_29006);

(statearr_29044_29099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (17))){
var state_29012__$1 = state_29012;
var statearr_29045_29100 = state_29012__$1;
(statearr_29045_29100[(2)] = false);

(statearr_29045_29100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (3))){
var state_29012__$1 = state_29012;
var statearr_29046_29101 = state_29012__$1;
(statearr_29046_29101[(2)] = false);

(statearr_29046_29101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (12))){
var inst_29010 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29012__$1,inst_29010);
} else {
if((state_val_29013 === (2))){
var inst_28918 = (state_29012[(8)]);
var inst_28923 = inst_28918.cljs$lang$protocol_mask$partition0$;
var inst_28924 = (inst_28923 & (64));
var inst_28925 = inst_28918.cljs$core$ISeq$;
var inst_28926 = (inst_28924) || (inst_28925);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28926)){
var statearr_29047_29102 = state_29012__$1;
(statearr_29047_29102[(1)] = (5));

} else {
var statearr_29048_29103 = state_29012__$1;
(statearr_29048_29103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (23))){
var inst_28971 = (state_29012[(14)]);
var inst_28977 = (inst_28971 == null);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28977)){
var statearr_29049_29104 = state_29012__$1;
(statearr_29049_29104[(1)] = (26));

} else {
var statearr_29050_29105 = state_29012__$1;
(statearr_29050_29105[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (35))){
var inst_28997 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28997)){
var statearr_29051_29106 = state_29012__$1;
(statearr_29051_29106[(1)] = (36));

} else {
var statearr_29052_29107 = state_29012__$1;
(statearr_29052_29107[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (19))){
var inst_28942 = (state_29012[(7)]);
var inst_28961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28942);
var state_29012__$1 = state_29012;
var statearr_29053_29108 = state_29012__$1;
(statearr_29053_29108[(2)] = inst_28961);

(statearr_29053_29108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (11))){
var inst_28942 = (state_29012[(7)]);
var inst_28946 = (inst_28942 == null);
var inst_28947 = cljs.core.not.call(null,inst_28946);
var state_29012__$1 = state_29012;
if(inst_28947){
var statearr_29054_29109 = state_29012__$1;
(statearr_29054_29109[(1)] = (13));

} else {
var statearr_29055_29110 = state_29012__$1;
(statearr_29055_29110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (9))){
var inst_28918 = (state_29012[(8)]);
var state_29012__$1 = state_29012;
var statearr_29056_29111 = state_29012__$1;
(statearr_29056_29111[(2)] = inst_28918);

(statearr_29056_29111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (5))){
var state_29012__$1 = state_29012;
var statearr_29057_29112 = state_29012__$1;
(statearr_29057_29112[(2)] = true);

(statearr_29057_29112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (14))){
var state_29012__$1 = state_29012;
var statearr_29058_29113 = state_29012__$1;
(statearr_29058_29113[(2)] = false);

(statearr_29058_29113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (26))){
var inst_28972 = (state_29012[(10)]);
var inst_28979 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28972);
var state_29012__$1 = state_29012;
var statearr_29059_29114 = state_29012__$1;
(statearr_29059_29114[(2)] = inst_28979);

(statearr_29059_29114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (16))){
var state_29012__$1 = state_29012;
var statearr_29060_29115 = state_29012__$1;
(statearr_29060_29115[(2)] = true);

(statearr_29060_29115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (38))){
var inst_29002 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29061_29116 = state_29012__$1;
(statearr_29061_29116[(2)] = inst_29002);

(statearr_29061_29116[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (30))){
var inst_28972 = (state_29012[(10)]);
var inst_28965 = (state_29012[(11)]);
var inst_28966 = (state_29012[(13)]);
var inst_28989 = cljs.core.empty_QMARK_.call(null,inst_28965);
var inst_28990 = inst_28966.call(null,inst_28972);
var inst_28991 = cljs.core.not.call(null,inst_28990);
var inst_28992 = (inst_28989) && (inst_28991);
var state_29012__$1 = state_29012;
var statearr_29062_29117 = state_29012__$1;
(statearr_29062_29117[(2)] = inst_28992);

(statearr_29062_29117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (10))){
var inst_28918 = (state_29012[(8)]);
var inst_28938 = (state_29012[(2)]);
var inst_28939 = cljs.core.get.call(null,inst_28938,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28940 = cljs.core.get.call(null,inst_28938,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28941 = cljs.core.get.call(null,inst_28938,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28942 = inst_28918;
var state_29012__$1 = (function (){var statearr_29063 = state_29012;
(statearr_29063[(16)] = inst_28941);

(statearr_29063[(17)] = inst_28940);

(statearr_29063[(18)] = inst_28939);

(statearr_29063[(7)] = inst_28942);

return statearr_29063;
})();
var statearr_29064_29118 = state_29012__$1;
(statearr_29064_29118[(2)] = null);

(statearr_29064_29118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (18))){
var inst_28956 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29065_29119 = state_29012__$1;
(statearr_29065_29119[(2)] = inst_28956);

(statearr_29065_29119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (37))){
var state_29012__$1 = state_29012;
var statearr_29066_29120 = state_29012__$1;
(statearr_29066_29120[(2)] = null);

(statearr_29066_29120[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (8))){
var inst_28918 = (state_29012[(8)]);
var inst_28935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28918);
var state_29012__$1 = state_29012;
var statearr_29067_29121 = state_29012__$1;
(statearr_29067_29121[(2)] = inst_28935);

(statearr_29067_29121[(1)] = (10));


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
});})(c__20613__auto___29075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20501__auto__,c__20613__auto___29075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20502__auto__ = null;
var cljs$core$async$mix_$_state_machine__20502__auto____0 = (function (){
var statearr_29071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29071[(0)] = cljs$core$async$mix_$_state_machine__20502__auto__);

(statearr_29071[(1)] = (1));

return statearr_29071;
});
var cljs$core$async$mix_$_state_machine__20502__auto____1 = (function (state_29012){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29072){if((e29072 instanceof Object)){
var ex__20505__auto__ = e29072;
var statearr_29073_29122 = state_29012;
(statearr_29073_29122[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29123 = state_29012;
state_29012 = G__29123;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20502__auto__ = function(state_29012){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20502__auto____1.call(this,state_29012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20502__auto____0;
cljs$core$async$mix_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20502__auto____1;
return cljs$core$async$mix_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___29075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20615__auto__ = (function (){var statearr_29074 = f__20614__auto__.call(null);
(statearr_29074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___29075);

return statearr_29074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___29075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19080__auto__ = (((p == null))?null:p);
var m__19081__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19081__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19080__auto__ = (((p == null))?null:p);
var m__19081__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,p,v,ch);
} else {
var m__19081__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29124 = [];
var len__19487__auto___29127 = arguments.length;
var i__19488__auto___29128 = (0);
while(true){
if((i__19488__auto___29128 < len__19487__auto___29127)){
args29124.push((arguments[i__19488__auto___29128]));

var G__29129 = (i__19488__auto___29128 + (1));
i__19488__auto___29128 = G__29129;
continue;
} else {
}
break;
}

var G__29126 = args29124.length;
switch (G__29126) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29124.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19080__auto__ = (((p == null))?null:p);
var m__19081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,p);
} else {
var m__19081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19080__auto__ = (((p == null))?null:p);
var m__19081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,p,v);
} else {
var m__19081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,p,v);
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
var args29132 = [];
var len__19487__auto___29257 = arguments.length;
var i__19488__auto___29258 = (0);
while(true){
if((i__19488__auto___29258 < len__19487__auto___29257)){
args29132.push((arguments[i__19488__auto___29258]));

var G__29259 = (i__19488__auto___29258 + (1));
i__19488__auto___29258 = G__29259;
continue;
} else {
}
break;
}

var G__29134 = args29132.length;
switch (G__29134) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29132.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18417__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18417__auto__,mults){
return (function (p1__29131_SHARP_){
if(cljs.core.truth_(p1__29131_SHARP_.call(null,topic))){
return p1__29131_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29131_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18417__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29135 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29136){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29136 = meta29136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29137,meta29136__$1){
var self__ = this;
var _29137__$1 = this;
return (new cljs.core.async.t_cljs$core$async29135(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29136__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29137){
var self__ = this;
var _29137__$1 = this;
return self__.meta29136;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29136","meta29136",234681145,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29135";

cljs.core.async.t_cljs$core$async29135.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async29135");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29135 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29135(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29136){
return (new cljs.core.async.t_cljs$core$async29135(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29136));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29135(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20613__auto___29261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___29261,mults,ensure_mult,p){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___29261,mults,ensure_mult,p){
return (function (state_29209){
var state_val_29210 = (state_29209[(1)]);
if((state_val_29210 === (7))){
var inst_29205 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29211_29262 = state_29209__$1;
(statearr_29211_29262[(2)] = inst_29205);

(statearr_29211_29262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (20))){
var state_29209__$1 = state_29209;
var statearr_29212_29263 = state_29209__$1;
(statearr_29212_29263[(2)] = null);

(statearr_29212_29263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (1))){
var state_29209__$1 = state_29209;
var statearr_29213_29264 = state_29209__$1;
(statearr_29213_29264[(2)] = null);

(statearr_29213_29264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (24))){
var inst_29188 = (state_29209[(7)]);
var inst_29197 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29188);
var state_29209__$1 = state_29209;
var statearr_29214_29265 = state_29209__$1;
(statearr_29214_29265[(2)] = inst_29197);

(statearr_29214_29265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (4))){
var inst_29140 = (state_29209[(8)]);
var inst_29140__$1 = (state_29209[(2)]);
var inst_29141 = (inst_29140__$1 == null);
var state_29209__$1 = (function (){var statearr_29215 = state_29209;
(statearr_29215[(8)] = inst_29140__$1);

return statearr_29215;
})();
if(cljs.core.truth_(inst_29141)){
var statearr_29216_29266 = state_29209__$1;
(statearr_29216_29266[(1)] = (5));

} else {
var statearr_29217_29267 = state_29209__$1;
(statearr_29217_29267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (15))){
var inst_29182 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29218_29268 = state_29209__$1;
(statearr_29218_29268[(2)] = inst_29182);

(statearr_29218_29268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (21))){
var inst_29202 = (state_29209[(2)]);
var state_29209__$1 = (function (){var statearr_29219 = state_29209;
(statearr_29219[(9)] = inst_29202);

return statearr_29219;
})();
var statearr_29220_29269 = state_29209__$1;
(statearr_29220_29269[(2)] = null);

(statearr_29220_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (13))){
var inst_29164 = (state_29209[(10)]);
var inst_29166 = cljs.core.chunked_seq_QMARK_.call(null,inst_29164);
var state_29209__$1 = state_29209;
if(inst_29166){
var statearr_29221_29270 = state_29209__$1;
(statearr_29221_29270[(1)] = (16));

} else {
var statearr_29222_29271 = state_29209__$1;
(statearr_29222_29271[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (22))){
var inst_29194 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
if(cljs.core.truth_(inst_29194)){
var statearr_29223_29272 = state_29209__$1;
(statearr_29223_29272[(1)] = (23));

} else {
var statearr_29224_29273 = state_29209__$1;
(statearr_29224_29273[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (6))){
var inst_29140 = (state_29209[(8)]);
var inst_29188 = (state_29209[(7)]);
var inst_29190 = (state_29209[(11)]);
var inst_29188__$1 = topic_fn.call(null,inst_29140);
var inst_29189 = cljs.core.deref.call(null,mults);
var inst_29190__$1 = cljs.core.get.call(null,inst_29189,inst_29188__$1);
var state_29209__$1 = (function (){var statearr_29225 = state_29209;
(statearr_29225[(7)] = inst_29188__$1);

(statearr_29225[(11)] = inst_29190__$1);

return statearr_29225;
})();
if(cljs.core.truth_(inst_29190__$1)){
var statearr_29226_29274 = state_29209__$1;
(statearr_29226_29274[(1)] = (19));

} else {
var statearr_29227_29275 = state_29209__$1;
(statearr_29227_29275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (25))){
var inst_29199 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29228_29276 = state_29209__$1;
(statearr_29228_29276[(2)] = inst_29199);

(statearr_29228_29276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (17))){
var inst_29164 = (state_29209[(10)]);
var inst_29173 = cljs.core.first.call(null,inst_29164);
var inst_29174 = cljs.core.async.muxch_STAR_.call(null,inst_29173);
var inst_29175 = cljs.core.async.close_BANG_.call(null,inst_29174);
var inst_29176 = cljs.core.next.call(null,inst_29164);
var inst_29150 = inst_29176;
var inst_29151 = null;
var inst_29152 = (0);
var inst_29153 = (0);
var state_29209__$1 = (function (){var statearr_29229 = state_29209;
(statearr_29229[(12)] = inst_29152);

(statearr_29229[(13)] = inst_29153);

(statearr_29229[(14)] = inst_29151);

(statearr_29229[(15)] = inst_29150);

(statearr_29229[(16)] = inst_29175);

return statearr_29229;
})();
var statearr_29230_29277 = state_29209__$1;
(statearr_29230_29277[(2)] = null);

(statearr_29230_29277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (3))){
var inst_29207 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29209__$1,inst_29207);
} else {
if((state_val_29210 === (12))){
var inst_29184 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29231_29278 = state_29209__$1;
(statearr_29231_29278[(2)] = inst_29184);

(statearr_29231_29278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (2))){
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29209__$1,(4),ch);
} else {
if((state_val_29210 === (23))){
var state_29209__$1 = state_29209;
var statearr_29232_29279 = state_29209__$1;
(statearr_29232_29279[(2)] = null);

(statearr_29232_29279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (19))){
var inst_29140 = (state_29209[(8)]);
var inst_29190 = (state_29209[(11)]);
var inst_29192 = cljs.core.async.muxch_STAR_.call(null,inst_29190);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29209__$1,(22),inst_29192,inst_29140);
} else {
if((state_val_29210 === (11))){
var inst_29150 = (state_29209[(15)]);
var inst_29164 = (state_29209[(10)]);
var inst_29164__$1 = cljs.core.seq.call(null,inst_29150);
var state_29209__$1 = (function (){var statearr_29233 = state_29209;
(statearr_29233[(10)] = inst_29164__$1);

return statearr_29233;
})();
if(inst_29164__$1){
var statearr_29234_29280 = state_29209__$1;
(statearr_29234_29280[(1)] = (13));

} else {
var statearr_29235_29281 = state_29209__$1;
(statearr_29235_29281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (9))){
var inst_29186 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29236_29282 = state_29209__$1;
(statearr_29236_29282[(2)] = inst_29186);

(statearr_29236_29282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (5))){
var inst_29147 = cljs.core.deref.call(null,mults);
var inst_29148 = cljs.core.vals.call(null,inst_29147);
var inst_29149 = cljs.core.seq.call(null,inst_29148);
var inst_29150 = inst_29149;
var inst_29151 = null;
var inst_29152 = (0);
var inst_29153 = (0);
var state_29209__$1 = (function (){var statearr_29237 = state_29209;
(statearr_29237[(12)] = inst_29152);

(statearr_29237[(13)] = inst_29153);

(statearr_29237[(14)] = inst_29151);

(statearr_29237[(15)] = inst_29150);

return statearr_29237;
})();
var statearr_29238_29283 = state_29209__$1;
(statearr_29238_29283[(2)] = null);

(statearr_29238_29283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (14))){
var state_29209__$1 = state_29209;
var statearr_29242_29284 = state_29209__$1;
(statearr_29242_29284[(2)] = null);

(statearr_29242_29284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (16))){
var inst_29164 = (state_29209[(10)]);
var inst_29168 = cljs.core.chunk_first.call(null,inst_29164);
var inst_29169 = cljs.core.chunk_rest.call(null,inst_29164);
var inst_29170 = cljs.core.count.call(null,inst_29168);
var inst_29150 = inst_29169;
var inst_29151 = inst_29168;
var inst_29152 = inst_29170;
var inst_29153 = (0);
var state_29209__$1 = (function (){var statearr_29243 = state_29209;
(statearr_29243[(12)] = inst_29152);

(statearr_29243[(13)] = inst_29153);

(statearr_29243[(14)] = inst_29151);

(statearr_29243[(15)] = inst_29150);

return statearr_29243;
})();
var statearr_29244_29285 = state_29209__$1;
(statearr_29244_29285[(2)] = null);

(statearr_29244_29285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (10))){
var inst_29152 = (state_29209[(12)]);
var inst_29153 = (state_29209[(13)]);
var inst_29151 = (state_29209[(14)]);
var inst_29150 = (state_29209[(15)]);
var inst_29158 = cljs.core._nth.call(null,inst_29151,inst_29153);
var inst_29159 = cljs.core.async.muxch_STAR_.call(null,inst_29158);
var inst_29160 = cljs.core.async.close_BANG_.call(null,inst_29159);
var inst_29161 = (inst_29153 + (1));
var tmp29239 = inst_29152;
var tmp29240 = inst_29151;
var tmp29241 = inst_29150;
var inst_29150__$1 = tmp29241;
var inst_29151__$1 = tmp29240;
var inst_29152__$1 = tmp29239;
var inst_29153__$1 = inst_29161;
var state_29209__$1 = (function (){var statearr_29245 = state_29209;
(statearr_29245[(12)] = inst_29152__$1);

(statearr_29245[(13)] = inst_29153__$1);

(statearr_29245[(14)] = inst_29151__$1);

(statearr_29245[(15)] = inst_29150__$1);

(statearr_29245[(17)] = inst_29160);

return statearr_29245;
})();
var statearr_29246_29286 = state_29209__$1;
(statearr_29246_29286[(2)] = null);

(statearr_29246_29286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (18))){
var inst_29179 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29247_29287 = state_29209__$1;
(statearr_29247_29287[(2)] = inst_29179);

(statearr_29247_29287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (8))){
var inst_29152 = (state_29209[(12)]);
var inst_29153 = (state_29209[(13)]);
var inst_29155 = (inst_29153 < inst_29152);
var inst_29156 = inst_29155;
var state_29209__$1 = state_29209;
if(cljs.core.truth_(inst_29156)){
var statearr_29248_29288 = state_29209__$1;
(statearr_29248_29288[(1)] = (10));

} else {
var statearr_29249_29289 = state_29209__$1;
(statearr_29249_29289[(1)] = (11));

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
});})(c__20613__auto___29261,mults,ensure_mult,p))
;
return ((function (switch__20501__auto__,c__20613__auto___29261,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_29253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29253[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_29253[(1)] = (1));

return statearr_29253;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_29209){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29254){if((e29254 instanceof Object)){
var ex__20505__auto__ = e29254;
var statearr_29255_29290 = state_29209;
(statearr_29255_29290[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29291 = state_29209;
state_29209 = G__29291;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_29209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_29209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___29261,mults,ensure_mult,p))
})();
var state__20615__auto__ = (function (){var statearr_29256 = f__20614__auto__.call(null);
(statearr_29256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___29261);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___29261,mults,ensure_mult,p))
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
var args29292 = [];
var len__19487__auto___29295 = arguments.length;
var i__19488__auto___29296 = (0);
while(true){
if((i__19488__auto___29296 < len__19487__auto___29295)){
args29292.push((arguments[i__19488__auto___29296]));

var G__29297 = (i__19488__auto___29296 + (1));
i__19488__auto___29296 = G__29297;
continue;
} else {
}
break;
}

var G__29294 = args29292.length;
switch (G__29294) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29292.length)].join('')));

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
var args29299 = [];
var len__19487__auto___29302 = arguments.length;
var i__19488__auto___29303 = (0);
while(true){
if((i__19488__auto___29303 < len__19487__auto___29302)){
args29299.push((arguments[i__19488__auto___29303]));

var G__29304 = (i__19488__auto___29303 + (1));
i__19488__auto___29303 = G__29304;
continue;
} else {
}
break;
}

var G__29301 = args29299.length;
switch (G__29301) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29299.length)].join('')));

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
var args29306 = [];
var len__19487__auto___29377 = arguments.length;
var i__19488__auto___29378 = (0);
while(true){
if((i__19488__auto___29378 < len__19487__auto___29377)){
args29306.push((arguments[i__19488__auto___29378]));

var G__29379 = (i__19488__auto___29378 + (1));
i__19488__auto___29378 = G__29379;
continue;
} else {
}
break;
}

var G__29308 = args29306.length;
switch (G__29308) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29306.length)].join('')));

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
var c__20613__auto___29381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___29381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___29381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29347){
var state_val_29348 = (state_29347[(1)]);
if((state_val_29348 === (7))){
var state_29347__$1 = state_29347;
var statearr_29349_29382 = state_29347__$1;
(statearr_29349_29382[(2)] = null);

(statearr_29349_29382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (1))){
var state_29347__$1 = state_29347;
var statearr_29350_29383 = state_29347__$1;
(statearr_29350_29383[(2)] = null);

(statearr_29350_29383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (4))){
var inst_29311 = (state_29347[(7)]);
var inst_29313 = (inst_29311 < cnt);
var state_29347__$1 = state_29347;
if(cljs.core.truth_(inst_29313)){
var statearr_29351_29384 = state_29347__$1;
(statearr_29351_29384[(1)] = (6));

} else {
var statearr_29352_29385 = state_29347__$1;
(statearr_29352_29385[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (15))){
var inst_29343 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
var statearr_29353_29386 = state_29347__$1;
(statearr_29353_29386[(2)] = inst_29343);

(statearr_29353_29386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (13))){
var inst_29336 = cljs.core.async.close_BANG_.call(null,out);
var state_29347__$1 = state_29347;
var statearr_29354_29387 = state_29347__$1;
(statearr_29354_29387[(2)] = inst_29336);

(statearr_29354_29387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (6))){
var state_29347__$1 = state_29347;
var statearr_29355_29388 = state_29347__$1;
(statearr_29355_29388[(2)] = null);

(statearr_29355_29388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (3))){
var inst_29345 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29347__$1,inst_29345);
} else {
if((state_val_29348 === (12))){
var inst_29333 = (state_29347[(8)]);
var inst_29333__$1 = (state_29347[(2)]);
var inst_29334 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29333__$1);
var state_29347__$1 = (function (){var statearr_29356 = state_29347;
(statearr_29356[(8)] = inst_29333__$1);

return statearr_29356;
})();
if(cljs.core.truth_(inst_29334)){
var statearr_29357_29389 = state_29347__$1;
(statearr_29357_29389[(1)] = (13));

} else {
var statearr_29358_29390 = state_29347__$1;
(statearr_29358_29390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (2))){
var inst_29310 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29311 = (0);
var state_29347__$1 = (function (){var statearr_29359 = state_29347;
(statearr_29359[(7)] = inst_29311);

(statearr_29359[(9)] = inst_29310);

return statearr_29359;
})();
var statearr_29360_29391 = state_29347__$1;
(statearr_29360_29391[(2)] = null);

(statearr_29360_29391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (11))){
var inst_29311 = (state_29347[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29347,(10),Object,null,(9));
var inst_29320 = chs__$1.call(null,inst_29311);
var inst_29321 = done.call(null,inst_29311);
var inst_29322 = cljs.core.async.take_BANG_.call(null,inst_29320,inst_29321);
var state_29347__$1 = state_29347;
var statearr_29361_29392 = state_29347__$1;
(statearr_29361_29392[(2)] = inst_29322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (9))){
var inst_29311 = (state_29347[(7)]);
var inst_29324 = (state_29347[(2)]);
var inst_29325 = (inst_29311 + (1));
var inst_29311__$1 = inst_29325;
var state_29347__$1 = (function (){var statearr_29362 = state_29347;
(statearr_29362[(7)] = inst_29311__$1);

(statearr_29362[(10)] = inst_29324);

return statearr_29362;
})();
var statearr_29363_29393 = state_29347__$1;
(statearr_29363_29393[(2)] = null);

(statearr_29363_29393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (5))){
var inst_29331 = (state_29347[(2)]);
var state_29347__$1 = (function (){var statearr_29364 = state_29347;
(statearr_29364[(11)] = inst_29331);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29347__$1,(12),dchan);
} else {
if((state_val_29348 === (14))){
var inst_29333 = (state_29347[(8)]);
var inst_29338 = cljs.core.apply.call(null,f,inst_29333);
var state_29347__$1 = state_29347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29347__$1,(16),out,inst_29338);
} else {
if((state_val_29348 === (16))){
var inst_29340 = (state_29347[(2)]);
var state_29347__$1 = (function (){var statearr_29365 = state_29347;
(statearr_29365[(12)] = inst_29340);

return statearr_29365;
})();
var statearr_29366_29394 = state_29347__$1;
(statearr_29366_29394[(2)] = null);

(statearr_29366_29394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (10))){
var inst_29315 = (state_29347[(2)]);
var inst_29316 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29347__$1 = (function (){var statearr_29367 = state_29347;
(statearr_29367[(13)] = inst_29315);

return statearr_29367;
})();
var statearr_29368_29395 = state_29347__$1;
(statearr_29368_29395[(2)] = inst_29316);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (8))){
var inst_29329 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
var statearr_29369_29396 = state_29347__$1;
(statearr_29369_29396[(2)] = inst_29329);

(statearr_29369_29396[(1)] = (5));


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
});})(c__20613__auto___29381,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20501__auto__,c__20613__auto___29381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_29373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29373[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_29373[(1)] = (1));

return statearr_29373;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_29347){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29374){if((e29374 instanceof Object)){
var ex__20505__auto__ = e29374;
var statearr_29375_29397 = state_29347;
(statearr_29375_29397[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29398 = state_29347;
state_29347 = G__29398;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_29347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_29347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___29381,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20615__auto__ = (function (){var statearr_29376 = f__20614__auto__.call(null);
(statearr_29376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___29381);

return statearr_29376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___29381,chs__$1,out,cnt,rets,dchan,dctr,done))
);


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
var args29400 = [];
var len__19487__auto___29456 = arguments.length;
var i__19488__auto___29457 = (0);
while(true){
if((i__19488__auto___29457 < len__19487__auto___29456)){
args29400.push((arguments[i__19488__auto___29457]));

var G__29458 = (i__19488__auto___29457 + (1));
i__19488__auto___29457 = G__29458;
continue;
} else {
}
break;
}

var G__29402 = args29400.length;
switch (G__29402) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29400.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___29460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___29460,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___29460,out){
return (function (state_29432){
var state_val_29433 = (state_29432[(1)]);
if((state_val_29433 === (7))){
var inst_29411 = (state_29432[(7)]);
var inst_29412 = (state_29432[(8)]);
var inst_29411__$1 = (state_29432[(2)]);
var inst_29412__$1 = cljs.core.nth.call(null,inst_29411__$1,(0),null);
var inst_29413 = cljs.core.nth.call(null,inst_29411__$1,(1),null);
var inst_29414 = (inst_29412__$1 == null);
var state_29432__$1 = (function (){var statearr_29434 = state_29432;
(statearr_29434[(9)] = inst_29413);

(statearr_29434[(7)] = inst_29411__$1);

(statearr_29434[(8)] = inst_29412__$1);

return statearr_29434;
})();
if(cljs.core.truth_(inst_29414)){
var statearr_29435_29461 = state_29432__$1;
(statearr_29435_29461[(1)] = (8));

} else {
var statearr_29436_29462 = state_29432__$1;
(statearr_29436_29462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (1))){
var inst_29403 = cljs.core.vec.call(null,chs);
var inst_29404 = inst_29403;
var state_29432__$1 = (function (){var statearr_29437 = state_29432;
(statearr_29437[(10)] = inst_29404);

return statearr_29437;
})();
var statearr_29438_29463 = state_29432__$1;
(statearr_29438_29463[(2)] = null);

(statearr_29438_29463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (4))){
var inst_29404 = (state_29432[(10)]);
var state_29432__$1 = state_29432;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29432__$1,(7),inst_29404);
} else {
if((state_val_29433 === (6))){
var inst_29428 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29439_29464 = state_29432__$1;
(statearr_29439_29464[(2)] = inst_29428);

(statearr_29439_29464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (3))){
var inst_29430 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29432__$1,inst_29430);
} else {
if((state_val_29433 === (2))){
var inst_29404 = (state_29432[(10)]);
var inst_29406 = cljs.core.count.call(null,inst_29404);
var inst_29407 = (inst_29406 > (0));
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29407)){
var statearr_29441_29465 = state_29432__$1;
(statearr_29441_29465[(1)] = (4));

} else {
var statearr_29442_29466 = state_29432__$1;
(statearr_29442_29466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (11))){
var inst_29404 = (state_29432[(10)]);
var inst_29421 = (state_29432[(2)]);
var tmp29440 = inst_29404;
var inst_29404__$1 = tmp29440;
var state_29432__$1 = (function (){var statearr_29443 = state_29432;
(statearr_29443[(10)] = inst_29404__$1);

(statearr_29443[(11)] = inst_29421);

return statearr_29443;
})();
var statearr_29444_29467 = state_29432__$1;
(statearr_29444_29467[(2)] = null);

(statearr_29444_29467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (9))){
var inst_29412 = (state_29432[(8)]);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29432__$1,(11),out,inst_29412);
} else {
if((state_val_29433 === (5))){
var inst_29426 = cljs.core.async.close_BANG_.call(null,out);
var state_29432__$1 = state_29432;
var statearr_29445_29468 = state_29432__$1;
(statearr_29445_29468[(2)] = inst_29426);

(statearr_29445_29468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (10))){
var inst_29424 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29446_29469 = state_29432__$1;
(statearr_29446_29469[(2)] = inst_29424);

(statearr_29446_29469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (8))){
var inst_29404 = (state_29432[(10)]);
var inst_29413 = (state_29432[(9)]);
var inst_29411 = (state_29432[(7)]);
var inst_29412 = (state_29432[(8)]);
var inst_29416 = (function (){var cs = inst_29404;
var vec__29409 = inst_29411;
var v = inst_29412;
var c = inst_29413;
return ((function (cs,vec__29409,v,c,inst_29404,inst_29413,inst_29411,inst_29412,state_val_29433,c__20613__auto___29460,out){
return (function (p1__29399_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29399_SHARP_);
});
;})(cs,vec__29409,v,c,inst_29404,inst_29413,inst_29411,inst_29412,state_val_29433,c__20613__auto___29460,out))
})();
var inst_29417 = cljs.core.filterv.call(null,inst_29416,inst_29404);
var inst_29404__$1 = inst_29417;
var state_29432__$1 = (function (){var statearr_29447 = state_29432;
(statearr_29447[(10)] = inst_29404__$1);

return statearr_29447;
})();
var statearr_29448_29470 = state_29432__$1;
(statearr_29448_29470[(2)] = null);

(statearr_29448_29470[(1)] = (2));


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
});})(c__20613__auto___29460,out))
;
return ((function (switch__20501__auto__,c__20613__auto___29460,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_29452 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29452[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_29452[(1)] = (1));

return statearr_29452;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_29432){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29453){if((e29453 instanceof Object)){
var ex__20505__auto__ = e29453;
var statearr_29454_29471 = state_29432;
(statearr_29454_29471[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29472 = state_29432;
state_29432 = G__29472;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_29432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_29432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___29460,out))
})();
var state__20615__auto__ = (function (){var statearr_29455 = f__20614__auto__.call(null);
(statearr_29455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___29460);

return statearr_29455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___29460,out))
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
var args29473 = [];
var len__19487__auto___29522 = arguments.length;
var i__19488__auto___29523 = (0);
while(true){
if((i__19488__auto___29523 < len__19487__auto___29522)){
args29473.push((arguments[i__19488__auto___29523]));

var G__29524 = (i__19488__auto___29523 + (1));
i__19488__auto___29523 = G__29524;
continue;
} else {
}
break;
}

var G__29475 = args29473.length;
switch (G__29475) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29473.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___29526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___29526,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___29526,out){
return (function (state_29499){
var state_val_29500 = (state_29499[(1)]);
if((state_val_29500 === (7))){
var inst_29481 = (state_29499[(7)]);
var inst_29481__$1 = (state_29499[(2)]);
var inst_29482 = (inst_29481__$1 == null);
var inst_29483 = cljs.core.not.call(null,inst_29482);
var state_29499__$1 = (function (){var statearr_29501 = state_29499;
(statearr_29501[(7)] = inst_29481__$1);

return statearr_29501;
})();
if(inst_29483){
var statearr_29502_29527 = state_29499__$1;
(statearr_29502_29527[(1)] = (8));

} else {
var statearr_29503_29528 = state_29499__$1;
(statearr_29503_29528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (1))){
var inst_29476 = (0);
var state_29499__$1 = (function (){var statearr_29504 = state_29499;
(statearr_29504[(8)] = inst_29476);

return statearr_29504;
})();
var statearr_29505_29529 = state_29499__$1;
(statearr_29505_29529[(2)] = null);

(statearr_29505_29529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (4))){
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29499__$1,(7),ch);
} else {
if((state_val_29500 === (6))){
var inst_29494 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29506_29530 = state_29499__$1;
(statearr_29506_29530[(2)] = inst_29494);

(statearr_29506_29530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (3))){
var inst_29496 = (state_29499[(2)]);
var inst_29497 = cljs.core.async.close_BANG_.call(null,out);
var state_29499__$1 = (function (){var statearr_29507 = state_29499;
(statearr_29507[(9)] = inst_29496);

return statearr_29507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29499__$1,inst_29497);
} else {
if((state_val_29500 === (2))){
var inst_29476 = (state_29499[(8)]);
var inst_29478 = (inst_29476 < n);
var state_29499__$1 = state_29499;
if(cljs.core.truth_(inst_29478)){
var statearr_29508_29531 = state_29499__$1;
(statearr_29508_29531[(1)] = (4));

} else {
var statearr_29509_29532 = state_29499__$1;
(statearr_29509_29532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (11))){
var inst_29476 = (state_29499[(8)]);
var inst_29486 = (state_29499[(2)]);
var inst_29487 = (inst_29476 + (1));
var inst_29476__$1 = inst_29487;
var state_29499__$1 = (function (){var statearr_29510 = state_29499;
(statearr_29510[(10)] = inst_29486);

(statearr_29510[(8)] = inst_29476__$1);

return statearr_29510;
})();
var statearr_29511_29533 = state_29499__$1;
(statearr_29511_29533[(2)] = null);

(statearr_29511_29533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (9))){
var state_29499__$1 = state_29499;
var statearr_29512_29534 = state_29499__$1;
(statearr_29512_29534[(2)] = null);

(statearr_29512_29534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (5))){
var state_29499__$1 = state_29499;
var statearr_29513_29535 = state_29499__$1;
(statearr_29513_29535[(2)] = null);

(statearr_29513_29535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (10))){
var inst_29491 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29514_29536 = state_29499__$1;
(statearr_29514_29536[(2)] = inst_29491);

(statearr_29514_29536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (8))){
var inst_29481 = (state_29499[(7)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29499__$1,(11),out,inst_29481);
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
});})(c__20613__auto___29526,out))
;
return ((function (switch__20501__auto__,c__20613__auto___29526,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_29518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29518[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_29518[(1)] = (1));

return statearr_29518;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_29499){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29519){if((e29519 instanceof Object)){
var ex__20505__auto__ = e29519;
var statearr_29520_29537 = state_29499;
(statearr_29520_29537[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29538 = state_29499;
state_29499 = G__29538;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_29499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_29499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___29526,out))
})();
var state__20615__auto__ = (function (){var statearr_29521 = f__20614__auto__.call(null);
(statearr_29521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___29526);

return statearr_29521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___29526,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29546 = (function (map_LT_,f,ch,meta29547){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29547 = meta29547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29548,meta29547__$1){
var self__ = this;
var _29548__$1 = this;
return (new cljs.core.async.t_cljs$core$async29546(self__.map_LT_,self__.f,self__.ch,meta29547__$1));
});

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29548){
var self__ = this;
var _29548__$1 = this;
return self__.meta29547;
});

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29549 = (function (map_LT_,f,ch,meta29547,_,fn1,meta29550){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29547 = meta29547;
this._ = _;
this.fn1 = fn1;
this.meta29550 = meta29550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29551,meta29550__$1){
var self__ = this;
var _29551__$1 = this;
return (new cljs.core.async.t_cljs$core$async29549(self__.map_LT_,self__.f,self__.ch,self__.meta29547,self__._,self__.fn1,meta29550__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29551){
var self__ = this;
var _29551__$1 = this;
return self__.meta29550;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29539_SHARP_){
return f1.call(null,(((p1__29539_SHARP_ == null))?null:self__.f.call(null,p1__29539_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29549.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29547","meta29547",2142721179,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29546","cljs.core.async/t_cljs$core$async29546",435962177,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29550","meta29550",821529584,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29549";

cljs.core.async.t_cljs$core$async29549.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async29549");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29549 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29549(map_LT___$1,f__$1,ch__$1,meta29547__$1,___$2,fn1__$1,meta29550){
return (new cljs.core.async.t_cljs$core$async29549(map_LT___$1,f__$1,ch__$1,meta29547__$1,___$2,fn1__$1,meta29550));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29549(self__.map_LT_,self__.f,self__.ch,self__.meta29547,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18405__auto__ = ret;
if(cljs.core.truth_(and__18405__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18405__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29547","meta29547",2142721179,null)], null);
});

cljs.core.async.t_cljs$core$async29546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29546";

cljs.core.async.t_cljs$core$async29546.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async29546");
});

cljs.core.async.__GT_t_cljs$core$async29546 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29546(map_LT___$1,f__$1,ch__$1,meta29547){
return (new cljs.core.async.t_cljs$core$async29546(map_LT___$1,f__$1,ch__$1,meta29547));
});

}

return (new cljs.core.async.t_cljs$core$async29546(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29555 = (function (map_GT_,f,ch,meta29556){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29556 = meta29556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29557,meta29556__$1){
var self__ = this;
var _29557__$1 = this;
return (new cljs.core.async.t_cljs$core$async29555(self__.map_GT_,self__.f,self__.ch,meta29556__$1));
});

cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29557){
var self__ = this;
var _29557__$1 = this;
return self__.meta29556;
});

cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29556","meta29556",1181434567,null)], null);
});

cljs.core.async.t_cljs$core$async29555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29555";

cljs.core.async.t_cljs$core$async29555.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async29555");
});

cljs.core.async.__GT_t_cljs$core$async29555 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29555(map_GT___$1,f__$1,ch__$1,meta29556){
return (new cljs.core.async.t_cljs$core$async29555(map_GT___$1,f__$1,ch__$1,meta29556));
});

}

return (new cljs.core.async.t_cljs$core$async29555(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29561 = (function (filter_GT_,p,ch,meta29562){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29562 = meta29562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29563,meta29562__$1){
var self__ = this;
var _29563__$1 = this;
return (new cljs.core.async.t_cljs$core$async29561(self__.filter_GT_,self__.p,self__.ch,meta29562__$1));
});

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29563){
var self__ = this;
var _29563__$1 = this;
return self__.meta29562;
});

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29562","meta29562",-2107499253,null)], null);
});

cljs.core.async.t_cljs$core$async29561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29561";

cljs.core.async.t_cljs$core$async29561.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async29561");
});

cljs.core.async.__GT_t_cljs$core$async29561 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29561(filter_GT___$1,p__$1,ch__$1,meta29562){
return (new cljs.core.async.t_cljs$core$async29561(filter_GT___$1,p__$1,ch__$1,meta29562));
});

}

return (new cljs.core.async.t_cljs$core$async29561(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29564 = [];
var len__19487__auto___29608 = arguments.length;
var i__19488__auto___29609 = (0);
while(true){
if((i__19488__auto___29609 < len__19487__auto___29608)){
args29564.push((arguments[i__19488__auto___29609]));

var G__29610 = (i__19488__auto___29609 + (1));
i__19488__auto___29609 = G__29610;
continue;
} else {
}
break;
}

var G__29566 = args29564.length;
switch (G__29566) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29564.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___29612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___29612,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___29612,out){
return (function (state_29587){
var state_val_29588 = (state_29587[(1)]);
if((state_val_29588 === (7))){
var inst_29583 = (state_29587[(2)]);
var state_29587__$1 = state_29587;
var statearr_29589_29613 = state_29587__$1;
(statearr_29589_29613[(2)] = inst_29583);

(statearr_29589_29613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (1))){
var state_29587__$1 = state_29587;
var statearr_29590_29614 = state_29587__$1;
(statearr_29590_29614[(2)] = null);

(statearr_29590_29614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (4))){
var inst_29569 = (state_29587[(7)]);
var inst_29569__$1 = (state_29587[(2)]);
var inst_29570 = (inst_29569__$1 == null);
var state_29587__$1 = (function (){var statearr_29591 = state_29587;
(statearr_29591[(7)] = inst_29569__$1);

return statearr_29591;
})();
if(cljs.core.truth_(inst_29570)){
var statearr_29592_29615 = state_29587__$1;
(statearr_29592_29615[(1)] = (5));

} else {
var statearr_29593_29616 = state_29587__$1;
(statearr_29593_29616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (6))){
var inst_29569 = (state_29587[(7)]);
var inst_29574 = p.call(null,inst_29569);
var state_29587__$1 = state_29587;
if(cljs.core.truth_(inst_29574)){
var statearr_29594_29617 = state_29587__$1;
(statearr_29594_29617[(1)] = (8));

} else {
var statearr_29595_29618 = state_29587__$1;
(statearr_29595_29618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (3))){
var inst_29585 = (state_29587[(2)]);
var state_29587__$1 = state_29587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29587__$1,inst_29585);
} else {
if((state_val_29588 === (2))){
var state_29587__$1 = state_29587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29587__$1,(4),ch);
} else {
if((state_val_29588 === (11))){
var inst_29577 = (state_29587[(2)]);
var state_29587__$1 = state_29587;
var statearr_29596_29619 = state_29587__$1;
(statearr_29596_29619[(2)] = inst_29577);

(statearr_29596_29619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (9))){
var state_29587__$1 = state_29587;
var statearr_29597_29620 = state_29587__$1;
(statearr_29597_29620[(2)] = null);

(statearr_29597_29620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (5))){
var inst_29572 = cljs.core.async.close_BANG_.call(null,out);
var state_29587__$1 = state_29587;
var statearr_29598_29621 = state_29587__$1;
(statearr_29598_29621[(2)] = inst_29572);

(statearr_29598_29621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (10))){
var inst_29580 = (state_29587[(2)]);
var state_29587__$1 = (function (){var statearr_29599 = state_29587;
(statearr_29599[(8)] = inst_29580);

return statearr_29599;
})();
var statearr_29600_29622 = state_29587__$1;
(statearr_29600_29622[(2)] = null);

(statearr_29600_29622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (8))){
var inst_29569 = (state_29587[(7)]);
var state_29587__$1 = state_29587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29587__$1,(11),out,inst_29569);
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
});})(c__20613__auto___29612,out))
;
return ((function (switch__20501__auto__,c__20613__auto___29612,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_29604 = [null,null,null,null,null,null,null,null,null];
(statearr_29604[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_29604[(1)] = (1));

return statearr_29604;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_29587){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29605){if((e29605 instanceof Object)){
var ex__20505__auto__ = e29605;
var statearr_29606_29623 = state_29587;
(statearr_29606_29623[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29624 = state_29587;
state_29587 = G__29624;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_29587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_29587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___29612,out))
})();
var state__20615__auto__ = (function (){var statearr_29607 = f__20614__auto__.call(null);
(statearr_29607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___29612);

return statearr_29607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___29612,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29625 = [];
var len__19487__auto___29628 = arguments.length;
var i__19488__auto___29629 = (0);
while(true){
if((i__19488__auto___29629 < len__19487__auto___29628)){
args29625.push((arguments[i__19488__auto___29629]));

var G__29630 = (i__19488__auto___29629 + (1));
i__19488__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var G__29627 = args29625.length;
switch (G__29627) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29625.length)].join('')));

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
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (7))){
var inst_29793 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29799_29840 = state_29797__$1;
(statearr_29799_29840[(2)] = inst_29793);

(statearr_29799_29840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (20))){
var inst_29763 = (state_29797[(7)]);
var inst_29774 = (state_29797[(2)]);
var inst_29775 = cljs.core.next.call(null,inst_29763);
var inst_29749 = inst_29775;
var inst_29750 = null;
var inst_29751 = (0);
var inst_29752 = (0);
var state_29797__$1 = (function (){var statearr_29800 = state_29797;
(statearr_29800[(8)] = inst_29751);

(statearr_29800[(9)] = inst_29752);

(statearr_29800[(10)] = inst_29749);

(statearr_29800[(11)] = inst_29750);

(statearr_29800[(12)] = inst_29774);

return statearr_29800;
})();
var statearr_29801_29841 = state_29797__$1;
(statearr_29801_29841[(2)] = null);

(statearr_29801_29841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var state_29797__$1 = state_29797;
var statearr_29802_29842 = state_29797__$1;
(statearr_29802_29842[(2)] = null);

(statearr_29802_29842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var inst_29738 = (state_29797[(13)]);
var inst_29738__$1 = (state_29797[(2)]);
var inst_29739 = (inst_29738__$1 == null);
var state_29797__$1 = (function (){var statearr_29803 = state_29797;
(statearr_29803[(13)] = inst_29738__$1);

return statearr_29803;
})();
if(cljs.core.truth_(inst_29739)){
var statearr_29804_29843 = state_29797__$1;
(statearr_29804_29843[(1)] = (5));

} else {
var statearr_29805_29844 = state_29797__$1;
(statearr_29805_29844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (15))){
var state_29797__$1 = state_29797;
var statearr_29809_29845 = state_29797__$1;
(statearr_29809_29845[(2)] = null);

(statearr_29809_29845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (21))){
var state_29797__$1 = state_29797;
var statearr_29810_29846 = state_29797__$1;
(statearr_29810_29846[(2)] = null);

(statearr_29810_29846[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (13))){
var inst_29751 = (state_29797[(8)]);
var inst_29752 = (state_29797[(9)]);
var inst_29749 = (state_29797[(10)]);
var inst_29750 = (state_29797[(11)]);
var inst_29759 = (state_29797[(2)]);
var inst_29760 = (inst_29752 + (1));
var tmp29806 = inst_29751;
var tmp29807 = inst_29749;
var tmp29808 = inst_29750;
var inst_29749__$1 = tmp29807;
var inst_29750__$1 = tmp29808;
var inst_29751__$1 = tmp29806;
var inst_29752__$1 = inst_29760;
var state_29797__$1 = (function (){var statearr_29811 = state_29797;
(statearr_29811[(14)] = inst_29759);

(statearr_29811[(8)] = inst_29751__$1);

(statearr_29811[(9)] = inst_29752__$1);

(statearr_29811[(10)] = inst_29749__$1);

(statearr_29811[(11)] = inst_29750__$1);

return statearr_29811;
})();
var statearr_29812_29847 = state_29797__$1;
(statearr_29812_29847[(2)] = null);

(statearr_29812_29847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (22))){
var state_29797__$1 = state_29797;
var statearr_29813_29848 = state_29797__$1;
(statearr_29813_29848[(2)] = null);

(statearr_29813_29848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (6))){
var inst_29738 = (state_29797[(13)]);
var inst_29747 = f.call(null,inst_29738);
var inst_29748 = cljs.core.seq.call(null,inst_29747);
var inst_29749 = inst_29748;
var inst_29750 = null;
var inst_29751 = (0);
var inst_29752 = (0);
var state_29797__$1 = (function (){var statearr_29814 = state_29797;
(statearr_29814[(8)] = inst_29751);

(statearr_29814[(9)] = inst_29752);

(statearr_29814[(10)] = inst_29749);

(statearr_29814[(11)] = inst_29750);

return statearr_29814;
})();
var statearr_29815_29849 = state_29797__$1;
(statearr_29815_29849[(2)] = null);

(statearr_29815_29849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (17))){
var inst_29763 = (state_29797[(7)]);
var inst_29767 = cljs.core.chunk_first.call(null,inst_29763);
var inst_29768 = cljs.core.chunk_rest.call(null,inst_29763);
var inst_29769 = cljs.core.count.call(null,inst_29767);
var inst_29749 = inst_29768;
var inst_29750 = inst_29767;
var inst_29751 = inst_29769;
var inst_29752 = (0);
var state_29797__$1 = (function (){var statearr_29816 = state_29797;
(statearr_29816[(8)] = inst_29751);

(statearr_29816[(9)] = inst_29752);

(statearr_29816[(10)] = inst_29749);

(statearr_29816[(11)] = inst_29750);

return statearr_29816;
})();
var statearr_29817_29850 = state_29797__$1;
(statearr_29817_29850[(2)] = null);

(statearr_29817_29850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (3))){
var inst_29795 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
if((state_val_29798 === (12))){
var inst_29783 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29818_29851 = state_29797__$1;
(statearr_29818_29851[(2)] = inst_29783);

(statearr_29818_29851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (2))){
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(4),in$);
} else {
if((state_val_29798 === (23))){
var inst_29791 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29819_29852 = state_29797__$1;
(statearr_29819_29852[(2)] = inst_29791);

(statearr_29819_29852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (19))){
var inst_29778 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29820_29853 = state_29797__$1;
(statearr_29820_29853[(2)] = inst_29778);

(statearr_29820_29853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (11))){
var inst_29763 = (state_29797[(7)]);
var inst_29749 = (state_29797[(10)]);
var inst_29763__$1 = cljs.core.seq.call(null,inst_29749);
var state_29797__$1 = (function (){var statearr_29821 = state_29797;
(statearr_29821[(7)] = inst_29763__$1);

return statearr_29821;
})();
if(inst_29763__$1){
var statearr_29822_29854 = state_29797__$1;
(statearr_29822_29854[(1)] = (14));

} else {
var statearr_29823_29855 = state_29797__$1;
(statearr_29823_29855[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var inst_29785 = (state_29797[(2)]);
var inst_29786 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29797__$1 = (function (){var statearr_29824 = state_29797;
(statearr_29824[(15)] = inst_29785);

return statearr_29824;
})();
if(cljs.core.truth_(inst_29786)){
var statearr_29825_29856 = state_29797__$1;
(statearr_29825_29856[(1)] = (21));

} else {
var statearr_29826_29857 = state_29797__$1;
(statearr_29826_29857[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (5))){
var inst_29741 = cljs.core.async.close_BANG_.call(null,out);
var state_29797__$1 = state_29797;
var statearr_29827_29858 = state_29797__$1;
(statearr_29827_29858[(2)] = inst_29741);

(statearr_29827_29858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (14))){
var inst_29763 = (state_29797[(7)]);
var inst_29765 = cljs.core.chunked_seq_QMARK_.call(null,inst_29763);
var state_29797__$1 = state_29797;
if(inst_29765){
var statearr_29828_29859 = state_29797__$1;
(statearr_29828_29859[(1)] = (17));

} else {
var statearr_29829_29860 = state_29797__$1;
(statearr_29829_29860[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (16))){
var inst_29781 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29830_29861 = state_29797__$1;
(statearr_29830_29861[(2)] = inst_29781);

(statearr_29830_29861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29752 = (state_29797[(9)]);
var inst_29750 = (state_29797[(11)]);
var inst_29757 = cljs.core._nth.call(null,inst_29750,inst_29752);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(13),out,inst_29757);
} else {
if((state_val_29798 === (18))){
var inst_29763 = (state_29797[(7)]);
var inst_29772 = cljs.core.first.call(null,inst_29763);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(20),out,inst_29772);
} else {
if((state_val_29798 === (8))){
var inst_29751 = (state_29797[(8)]);
var inst_29752 = (state_29797[(9)]);
var inst_29754 = (inst_29752 < inst_29751);
var inst_29755 = inst_29754;
var state_29797__$1 = state_29797;
if(cljs.core.truth_(inst_29755)){
var statearr_29831_29862 = state_29797__$1;
(statearr_29831_29862[(1)] = (10));

} else {
var statearr_29832_29863 = state_29797__$1;
(statearr_29832_29863[(1)] = (11));

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
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_29836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29836[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__);

(statearr_29836[(1)] = (1));

return statearr_29836;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1 = (function (state_29797){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29837){if((e29837 instanceof Object)){
var ex__20505__auto__ = e29837;
var statearr_29838_29864 = state_29797;
(statearr_29838_29864[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29865 = state_29797;
state_29797 = G__29865;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_29839 = f__20614__auto__.call(null);
(statearr_29839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_29839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29866 = [];
var len__19487__auto___29869 = arguments.length;
var i__19488__auto___29870 = (0);
while(true){
if((i__19488__auto___29870 < len__19487__auto___29869)){
args29866.push((arguments[i__19488__auto___29870]));

var G__29871 = (i__19488__auto___29870 + (1));
i__19488__auto___29870 = G__29871;
continue;
} else {
}
break;
}

var G__29868 = args29866.length;
switch (G__29868) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29866.length)].join('')));

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
var args29873 = [];
var len__19487__auto___29876 = arguments.length;
var i__19488__auto___29877 = (0);
while(true){
if((i__19488__auto___29877 < len__19487__auto___29876)){
args29873.push((arguments[i__19488__auto___29877]));

var G__29878 = (i__19488__auto___29877 + (1));
i__19488__auto___29877 = G__29878;
continue;
} else {
}
break;
}

var G__29875 = args29873.length;
switch (G__29875) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29873.length)].join('')));

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
var args29880 = [];
var len__19487__auto___29931 = arguments.length;
var i__19488__auto___29932 = (0);
while(true){
if((i__19488__auto___29932 < len__19487__auto___29931)){
args29880.push((arguments[i__19488__auto___29932]));

var G__29933 = (i__19488__auto___29932 + (1));
i__19488__auto___29932 = G__29933;
continue;
} else {
}
break;
}

var G__29882 = args29880.length;
switch (G__29882) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29880.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___29935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___29935,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___29935,out){
return (function (state_29906){
var state_val_29907 = (state_29906[(1)]);
if((state_val_29907 === (7))){
var inst_29901 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29908_29936 = state_29906__$1;
(statearr_29908_29936[(2)] = inst_29901);

(statearr_29908_29936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (1))){
var inst_29883 = null;
var state_29906__$1 = (function (){var statearr_29909 = state_29906;
(statearr_29909[(7)] = inst_29883);

return statearr_29909;
})();
var statearr_29910_29937 = state_29906__$1;
(statearr_29910_29937[(2)] = null);

(statearr_29910_29937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (4))){
var inst_29886 = (state_29906[(8)]);
var inst_29886__$1 = (state_29906[(2)]);
var inst_29887 = (inst_29886__$1 == null);
var inst_29888 = cljs.core.not.call(null,inst_29887);
var state_29906__$1 = (function (){var statearr_29911 = state_29906;
(statearr_29911[(8)] = inst_29886__$1);

return statearr_29911;
})();
if(inst_29888){
var statearr_29912_29938 = state_29906__$1;
(statearr_29912_29938[(1)] = (5));

} else {
var statearr_29913_29939 = state_29906__$1;
(statearr_29913_29939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (6))){
var state_29906__$1 = state_29906;
var statearr_29914_29940 = state_29906__$1;
(statearr_29914_29940[(2)] = null);

(statearr_29914_29940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (3))){
var inst_29903 = (state_29906[(2)]);
var inst_29904 = cljs.core.async.close_BANG_.call(null,out);
var state_29906__$1 = (function (){var statearr_29915 = state_29906;
(statearr_29915[(9)] = inst_29903);

return statearr_29915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29906__$1,inst_29904);
} else {
if((state_val_29907 === (2))){
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29906__$1,(4),ch);
} else {
if((state_val_29907 === (11))){
var inst_29886 = (state_29906[(8)]);
var inst_29895 = (state_29906[(2)]);
var inst_29883 = inst_29886;
var state_29906__$1 = (function (){var statearr_29916 = state_29906;
(statearr_29916[(10)] = inst_29895);

(statearr_29916[(7)] = inst_29883);

return statearr_29916;
})();
var statearr_29917_29941 = state_29906__$1;
(statearr_29917_29941[(2)] = null);

(statearr_29917_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (9))){
var inst_29886 = (state_29906[(8)]);
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29906__$1,(11),out,inst_29886);
} else {
if((state_val_29907 === (5))){
var inst_29883 = (state_29906[(7)]);
var inst_29886 = (state_29906[(8)]);
var inst_29890 = cljs.core._EQ_.call(null,inst_29886,inst_29883);
var state_29906__$1 = state_29906;
if(inst_29890){
var statearr_29919_29942 = state_29906__$1;
(statearr_29919_29942[(1)] = (8));

} else {
var statearr_29920_29943 = state_29906__$1;
(statearr_29920_29943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (10))){
var inst_29898 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29921_29944 = state_29906__$1;
(statearr_29921_29944[(2)] = inst_29898);

(statearr_29921_29944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (8))){
var inst_29883 = (state_29906[(7)]);
var tmp29918 = inst_29883;
var inst_29883__$1 = tmp29918;
var state_29906__$1 = (function (){var statearr_29922 = state_29906;
(statearr_29922[(7)] = inst_29883__$1);

return statearr_29922;
})();
var statearr_29923_29945 = state_29906__$1;
(statearr_29923_29945[(2)] = null);

(statearr_29923_29945[(1)] = (2));


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
});})(c__20613__auto___29935,out))
;
return ((function (switch__20501__auto__,c__20613__auto___29935,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_29927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29927[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_29927[(1)] = (1));

return statearr_29927;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_29906){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e29928){if((e29928 instanceof Object)){
var ex__20505__auto__ = e29928;
var statearr_29929_29946 = state_29906;
(statearr_29929_29946[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29947 = state_29906;
state_29906 = G__29947;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_29906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_29906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___29935,out))
})();
var state__20615__auto__ = (function (){var statearr_29930 = f__20614__auto__.call(null);
(statearr_29930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___29935);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___29935,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29948 = [];
var len__19487__auto___30018 = arguments.length;
var i__19488__auto___30019 = (0);
while(true){
if((i__19488__auto___30019 < len__19487__auto___30018)){
args29948.push((arguments[i__19488__auto___30019]));

var G__30020 = (i__19488__auto___30019 + (1));
i__19488__auto___30019 = G__30020;
continue;
} else {
}
break;
}

var G__29950 = args29948.length;
switch (G__29950) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29948.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___30022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___30022,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___30022,out){
return (function (state_29988){
var state_val_29989 = (state_29988[(1)]);
if((state_val_29989 === (7))){
var inst_29984 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_29990_30023 = state_29988__$1;
(statearr_29990_30023[(2)] = inst_29984);

(statearr_29990_30023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (1))){
var inst_29951 = (new Array(n));
var inst_29952 = inst_29951;
var inst_29953 = (0);
var state_29988__$1 = (function (){var statearr_29991 = state_29988;
(statearr_29991[(7)] = inst_29953);

(statearr_29991[(8)] = inst_29952);

return statearr_29991;
})();
var statearr_29992_30024 = state_29988__$1;
(statearr_29992_30024[(2)] = null);

(statearr_29992_30024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (4))){
var inst_29956 = (state_29988[(9)]);
var inst_29956__$1 = (state_29988[(2)]);
var inst_29957 = (inst_29956__$1 == null);
var inst_29958 = cljs.core.not.call(null,inst_29957);
var state_29988__$1 = (function (){var statearr_29993 = state_29988;
(statearr_29993[(9)] = inst_29956__$1);

return statearr_29993;
})();
if(inst_29958){
var statearr_29994_30025 = state_29988__$1;
(statearr_29994_30025[(1)] = (5));

} else {
var statearr_29995_30026 = state_29988__$1;
(statearr_29995_30026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (15))){
var inst_29978 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_29996_30027 = state_29988__$1;
(statearr_29996_30027[(2)] = inst_29978);

(statearr_29996_30027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (13))){
var state_29988__$1 = state_29988;
var statearr_29997_30028 = state_29988__$1;
(statearr_29997_30028[(2)] = null);

(statearr_29997_30028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (6))){
var inst_29953 = (state_29988[(7)]);
var inst_29974 = (inst_29953 > (0));
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29974)){
var statearr_29998_30029 = state_29988__$1;
(statearr_29998_30029[(1)] = (12));

} else {
var statearr_29999_30030 = state_29988__$1;
(statearr_29999_30030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (3))){
var inst_29986 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29988__$1,inst_29986);
} else {
if((state_val_29989 === (12))){
var inst_29952 = (state_29988[(8)]);
var inst_29976 = cljs.core.vec.call(null,inst_29952);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29988__$1,(15),out,inst_29976);
} else {
if((state_val_29989 === (2))){
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(4),ch);
} else {
if((state_val_29989 === (11))){
var inst_29968 = (state_29988[(2)]);
var inst_29969 = (new Array(n));
var inst_29952 = inst_29969;
var inst_29953 = (0);
var state_29988__$1 = (function (){var statearr_30000 = state_29988;
(statearr_30000[(7)] = inst_29953);

(statearr_30000[(10)] = inst_29968);

(statearr_30000[(8)] = inst_29952);

return statearr_30000;
})();
var statearr_30001_30031 = state_29988__$1;
(statearr_30001_30031[(2)] = null);

(statearr_30001_30031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (9))){
var inst_29952 = (state_29988[(8)]);
var inst_29966 = cljs.core.vec.call(null,inst_29952);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29988__$1,(11),out,inst_29966);
} else {
if((state_val_29989 === (5))){
var inst_29953 = (state_29988[(7)]);
var inst_29956 = (state_29988[(9)]);
var inst_29952 = (state_29988[(8)]);
var inst_29961 = (state_29988[(11)]);
var inst_29960 = (inst_29952[inst_29953] = inst_29956);
var inst_29961__$1 = (inst_29953 + (1));
var inst_29962 = (inst_29961__$1 < n);
var state_29988__$1 = (function (){var statearr_30002 = state_29988;
(statearr_30002[(12)] = inst_29960);

(statearr_30002[(11)] = inst_29961__$1);

return statearr_30002;
})();
if(cljs.core.truth_(inst_29962)){
var statearr_30003_30032 = state_29988__$1;
(statearr_30003_30032[(1)] = (8));

} else {
var statearr_30004_30033 = state_29988__$1;
(statearr_30004_30033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (14))){
var inst_29981 = (state_29988[(2)]);
var inst_29982 = cljs.core.async.close_BANG_.call(null,out);
var state_29988__$1 = (function (){var statearr_30006 = state_29988;
(statearr_30006[(13)] = inst_29981);

return statearr_30006;
})();
var statearr_30007_30034 = state_29988__$1;
(statearr_30007_30034[(2)] = inst_29982);

(statearr_30007_30034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (10))){
var inst_29972 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30008_30035 = state_29988__$1;
(statearr_30008_30035[(2)] = inst_29972);

(statearr_30008_30035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29989 === (8))){
var inst_29952 = (state_29988[(8)]);
var inst_29961 = (state_29988[(11)]);
var tmp30005 = inst_29952;
var inst_29952__$1 = tmp30005;
var inst_29953 = inst_29961;
var state_29988__$1 = (function (){var statearr_30009 = state_29988;
(statearr_30009[(7)] = inst_29953);

(statearr_30009[(8)] = inst_29952__$1);

return statearr_30009;
})();
var statearr_30010_30036 = state_29988__$1;
(statearr_30010_30036[(2)] = null);

(statearr_30010_30036[(1)] = (2));


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
});})(c__20613__auto___30022,out))
;
return ((function (switch__20501__auto__,c__20613__auto___30022,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_30014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30014[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_30014[(1)] = (1));

return statearr_30014;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_29988){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_29988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e30015){if((e30015 instanceof Object)){
var ex__20505__auto__ = e30015;
var statearr_30016_30037 = state_29988;
(statearr_30016_30037[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30038 = state_29988;
state_29988 = G__30038;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_29988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_29988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___30022,out))
})();
var state__20615__auto__ = (function (){var statearr_30017 = f__20614__auto__.call(null);
(statearr_30017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___30022);

return statearr_30017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___30022,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30039 = [];
var len__19487__auto___30113 = arguments.length;
var i__19488__auto___30114 = (0);
while(true){
if((i__19488__auto___30114 < len__19487__auto___30113)){
args30039.push((arguments[i__19488__auto___30114]));

var G__30115 = (i__19488__auto___30114 + (1));
i__19488__auto___30114 = G__30115;
continue;
} else {
}
break;
}

var G__30041 = args30039.length;
switch (G__30041) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30039.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___30117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___30117,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___30117,out){
return (function (state_30083){
var state_val_30084 = (state_30083[(1)]);
if((state_val_30084 === (7))){
var inst_30079 = (state_30083[(2)]);
var state_30083__$1 = state_30083;
var statearr_30085_30118 = state_30083__$1;
(statearr_30085_30118[(2)] = inst_30079);

(statearr_30085_30118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (1))){
var inst_30042 = [];
var inst_30043 = inst_30042;
var inst_30044 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30083__$1 = (function (){var statearr_30086 = state_30083;
(statearr_30086[(7)] = inst_30044);

(statearr_30086[(8)] = inst_30043);

return statearr_30086;
})();
var statearr_30087_30119 = state_30083__$1;
(statearr_30087_30119[(2)] = null);

(statearr_30087_30119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (4))){
var inst_30047 = (state_30083[(9)]);
var inst_30047__$1 = (state_30083[(2)]);
var inst_30048 = (inst_30047__$1 == null);
var inst_30049 = cljs.core.not.call(null,inst_30048);
var state_30083__$1 = (function (){var statearr_30088 = state_30083;
(statearr_30088[(9)] = inst_30047__$1);

return statearr_30088;
})();
if(inst_30049){
var statearr_30089_30120 = state_30083__$1;
(statearr_30089_30120[(1)] = (5));

} else {
var statearr_30090_30121 = state_30083__$1;
(statearr_30090_30121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (15))){
var inst_30073 = (state_30083[(2)]);
var state_30083__$1 = state_30083;
var statearr_30091_30122 = state_30083__$1;
(statearr_30091_30122[(2)] = inst_30073);

(statearr_30091_30122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (13))){
var state_30083__$1 = state_30083;
var statearr_30092_30123 = state_30083__$1;
(statearr_30092_30123[(2)] = null);

(statearr_30092_30123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (6))){
var inst_30043 = (state_30083[(8)]);
var inst_30068 = inst_30043.length;
var inst_30069 = (inst_30068 > (0));
var state_30083__$1 = state_30083;
if(cljs.core.truth_(inst_30069)){
var statearr_30093_30124 = state_30083__$1;
(statearr_30093_30124[(1)] = (12));

} else {
var statearr_30094_30125 = state_30083__$1;
(statearr_30094_30125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (3))){
var inst_30081 = (state_30083[(2)]);
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30083__$1,inst_30081);
} else {
if((state_val_30084 === (12))){
var inst_30043 = (state_30083[(8)]);
var inst_30071 = cljs.core.vec.call(null,inst_30043);
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30083__$1,(15),out,inst_30071);
} else {
if((state_val_30084 === (2))){
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30083__$1,(4),ch);
} else {
if((state_val_30084 === (11))){
var inst_30047 = (state_30083[(9)]);
var inst_30051 = (state_30083[(10)]);
var inst_30061 = (state_30083[(2)]);
var inst_30062 = [];
var inst_30063 = inst_30062.push(inst_30047);
var inst_30043 = inst_30062;
var inst_30044 = inst_30051;
var state_30083__$1 = (function (){var statearr_30095 = state_30083;
(statearr_30095[(11)] = inst_30063);

(statearr_30095[(12)] = inst_30061);

(statearr_30095[(7)] = inst_30044);

(statearr_30095[(8)] = inst_30043);

return statearr_30095;
})();
var statearr_30096_30126 = state_30083__$1;
(statearr_30096_30126[(2)] = null);

(statearr_30096_30126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (9))){
var inst_30043 = (state_30083[(8)]);
var inst_30059 = cljs.core.vec.call(null,inst_30043);
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30083__$1,(11),out,inst_30059);
} else {
if((state_val_30084 === (5))){
var inst_30047 = (state_30083[(9)]);
var inst_30044 = (state_30083[(7)]);
var inst_30051 = (state_30083[(10)]);
var inst_30051__$1 = f.call(null,inst_30047);
var inst_30052 = cljs.core._EQ_.call(null,inst_30051__$1,inst_30044);
var inst_30053 = cljs.core.keyword_identical_QMARK_.call(null,inst_30044,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30054 = (inst_30052) || (inst_30053);
var state_30083__$1 = (function (){var statearr_30097 = state_30083;
(statearr_30097[(10)] = inst_30051__$1);

return statearr_30097;
})();
if(cljs.core.truth_(inst_30054)){
var statearr_30098_30127 = state_30083__$1;
(statearr_30098_30127[(1)] = (8));

} else {
var statearr_30099_30128 = state_30083__$1;
(statearr_30099_30128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (14))){
var inst_30076 = (state_30083[(2)]);
var inst_30077 = cljs.core.async.close_BANG_.call(null,out);
var state_30083__$1 = (function (){var statearr_30101 = state_30083;
(statearr_30101[(13)] = inst_30076);

return statearr_30101;
})();
var statearr_30102_30129 = state_30083__$1;
(statearr_30102_30129[(2)] = inst_30077);

(statearr_30102_30129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (10))){
var inst_30066 = (state_30083[(2)]);
var state_30083__$1 = state_30083;
var statearr_30103_30130 = state_30083__$1;
(statearr_30103_30130[(2)] = inst_30066);

(statearr_30103_30130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (8))){
var inst_30047 = (state_30083[(9)]);
var inst_30051 = (state_30083[(10)]);
var inst_30043 = (state_30083[(8)]);
var inst_30056 = inst_30043.push(inst_30047);
var tmp30100 = inst_30043;
var inst_30043__$1 = tmp30100;
var inst_30044 = inst_30051;
var state_30083__$1 = (function (){var statearr_30104 = state_30083;
(statearr_30104[(14)] = inst_30056);

(statearr_30104[(7)] = inst_30044);

(statearr_30104[(8)] = inst_30043__$1);

return statearr_30104;
})();
var statearr_30105_30131 = state_30083__$1;
(statearr_30105_30131[(2)] = null);

(statearr_30105_30131[(1)] = (2));


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
});})(c__20613__auto___30117,out))
;
return ((function (switch__20501__auto__,c__20613__auto___30117,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_30109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30109[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_30109[(1)] = (1));

return statearr_30109;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_30083){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_30083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e30110){if((e30110 instanceof Object)){
var ex__20505__auto__ = e30110;
var statearr_30111_30132 = state_30083;
(statearr_30111_30132[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30133 = state_30083;
state_30083 = G__30133;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_30083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_30083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___30117,out))
})();
var state__20615__auto__ = (function (){var statearr_30112 = f__20614__auto__.call(null);
(statearr_30112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___30117);

return statearr_30112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___30117,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map