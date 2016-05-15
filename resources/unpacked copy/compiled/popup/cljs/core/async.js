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
var args20658 = [];
var len__19487__auto___20664 = arguments.length;
var i__19488__auto___20665 = (0);
while(true){
if((i__19488__auto___20665 < len__19487__auto___20664)){
args20658.push((arguments[i__19488__auto___20665]));

var G__20666 = (i__19488__auto___20665 + (1));
i__19488__auto___20665 = G__20666;
continue;
} else {
}
break;
}

var G__20660 = args20658.length;
switch (G__20660) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20658.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20661 = (function (f,blockable,meta20662){
this.f = f;
this.blockable = blockable;
this.meta20662 = meta20662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20663,meta20662__$1){
var self__ = this;
var _20663__$1 = this;
return (new cljs.core.async.t_cljs$core$async20661(self__.f,self__.blockable,meta20662__$1));
});

cljs.core.async.t_cljs$core$async20661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20663){
var self__ = this;
var _20663__$1 = this;
return self__.meta20662;
});

cljs.core.async.t_cljs$core$async20661.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20662","meta20662",-1870145746,null)], null);
});

cljs.core.async.t_cljs$core$async20661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20661";

cljs.core.async.t_cljs$core$async20661.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async20661");
});

cljs.core.async.__GT_t_cljs$core$async20661 = (function cljs$core$async$__GT_t_cljs$core$async20661(f__$1,blockable__$1,meta20662){
return (new cljs.core.async.t_cljs$core$async20661(f__$1,blockable__$1,meta20662));
});

}

return (new cljs.core.async.t_cljs$core$async20661(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20670 = [];
var len__19487__auto___20673 = arguments.length;
var i__19488__auto___20674 = (0);
while(true){
if((i__19488__auto___20674 < len__19487__auto___20673)){
args20670.push((arguments[i__19488__auto___20674]));

var G__20675 = (i__19488__auto___20674 + (1));
i__19488__auto___20674 = G__20675;
continue;
} else {
}
break;
}

var G__20672 = args20670.length;
switch (G__20672) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20670.length)].join('')));

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
var args20677 = [];
var len__19487__auto___20680 = arguments.length;
var i__19488__auto___20681 = (0);
while(true){
if((i__19488__auto___20681 < len__19487__auto___20680)){
args20677.push((arguments[i__19488__auto___20681]));

var G__20682 = (i__19488__auto___20681 + (1));
i__19488__auto___20681 = G__20682;
continue;
} else {
}
break;
}

var G__20679 = args20677.length;
switch (G__20679) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20677.length)].join('')));

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
var args20684 = [];
var len__19487__auto___20687 = arguments.length;
var i__19488__auto___20688 = (0);
while(true){
if((i__19488__auto___20688 < len__19487__auto___20687)){
args20684.push((arguments[i__19488__auto___20688]));

var G__20689 = (i__19488__auto___20688 + (1));
i__19488__auto___20688 = G__20689;
continue;
} else {
}
break;
}

var G__20686 = args20684.length;
switch (G__20686) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20684.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20691 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20691);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20691,ret){
return (function (){
return fn1.call(null,val_20691);
});})(val_20691,ret))
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
var args20692 = [];
var len__19487__auto___20695 = arguments.length;
var i__19488__auto___20696 = (0);
while(true){
if((i__19488__auto___20696 < len__19487__auto___20695)){
args20692.push((arguments[i__19488__auto___20696]));

var G__20697 = (i__19488__auto___20696 + (1));
i__19488__auto___20696 = G__20697;
continue;
} else {
}
break;
}

var G__20694 = args20692.length;
switch (G__20694) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20692.length)].join('')));

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
var n__19332__auto___20699 = n;
var x_20700 = (0);
while(true){
if((x_20700 < n__19332__auto___20699)){
(a[x_20700] = (0));

var G__20701 = (x_20700 + (1));
x_20700 = G__20701;
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

var G__20702 = (i + (1));
i = G__20702;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20706 = (function (alt_flag,flag,meta20707){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20707 = meta20707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20708,meta20707__$1){
var self__ = this;
var _20708__$1 = this;
return (new cljs.core.async.t_cljs$core$async20706(self__.alt_flag,self__.flag,meta20707__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20708){
var self__ = this;
var _20708__$1 = this;
return self__.meta20707;
});})(flag))
;

cljs.core.async.t_cljs$core$async20706.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20706.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20706.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20707","meta20707",-1665894657,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20706";

cljs.core.async.t_cljs$core$async20706.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async20706");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20706 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20706(alt_flag__$1,flag__$1,meta20707){
return (new cljs.core.async.t_cljs$core$async20706(alt_flag__$1,flag__$1,meta20707));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20706(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20712 = (function (alt_handler,flag,cb,meta20713){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20713 = meta20713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20714,meta20713__$1){
var self__ = this;
var _20714__$1 = this;
return (new cljs.core.async.t_cljs$core$async20712(self__.alt_handler,self__.flag,self__.cb,meta20713__$1));
});

cljs.core.async.t_cljs$core$async20712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20714){
var self__ = this;
var _20714__$1 = this;
return self__.meta20713;
});

cljs.core.async.t_cljs$core$async20712.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20713","meta20713",1346638089,null)], null);
});

cljs.core.async.t_cljs$core$async20712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20712";

cljs.core.async.t_cljs$core$async20712.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async20712");
});

cljs.core.async.__GT_t_cljs$core$async20712 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20712(alt_handler__$1,flag__$1,cb__$1,meta20713){
return (new cljs.core.async.t_cljs$core$async20712(alt_handler__$1,flag__$1,cb__$1,meta20713));
});

}

return (new cljs.core.async.t_cljs$core$async20712(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20715_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20715_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20716_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20716_SHARP_,port], null));
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
var G__20717 = (i + (1));
i = G__20717;
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
var len__19487__auto___20723 = arguments.length;
var i__19488__auto___20724 = (0);
while(true){
if((i__19488__auto___20724 < len__19487__auto___20723)){
args__19494__auto__.push((arguments[i__19488__auto___20724]));

var G__20725 = (i__19488__auto___20724 + (1));
i__19488__auto___20724 = G__20725;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20720){
var map__20721 = p__20720;
var map__20721__$1 = ((((!((map__20721 == null)))?((((map__20721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20721):map__20721);
var opts = map__20721__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20718){
var G__20719 = cljs.core.first.call(null,seq20718);
var seq20718__$1 = cljs.core.next.call(null,seq20718);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20719,seq20718__$1);
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
var args20726 = [];
var len__19487__auto___20776 = arguments.length;
var i__19488__auto___20777 = (0);
while(true){
if((i__19488__auto___20777 < len__19487__auto___20776)){
args20726.push((arguments[i__19488__auto___20777]));

var G__20778 = (i__19488__auto___20777 + (1));
i__19488__auto___20777 = G__20778;
continue;
} else {
}
break;
}

var G__20728 = args20726.length;
switch (G__20728) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20726.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20613__auto___20780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___20780){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___20780){
return (function (state_20752){
var state_val_20753 = (state_20752[(1)]);
if((state_val_20753 === (7))){
var inst_20748 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
var statearr_20754_20781 = state_20752__$1;
(statearr_20754_20781[(2)] = inst_20748);

(statearr_20754_20781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (1))){
var state_20752__$1 = state_20752;
var statearr_20755_20782 = state_20752__$1;
(statearr_20755_20782[(2)] = null);

(statearr_20755_20782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (4))){
var inst_20731 = (state_20752[(7)]);
var inst_20731__$1 = (state_20752[(2)]);
var inst_20732 = (inst_20731__$1 == null);
var state_20752__$1 = (function (){var statearr_20756 = state_20752;
(statearr_20756[(7)] = inst_20731__$1);

return statearr_20756;
})();
if(cljs.core.truth_(inst_20732)){
var statearr_20757_20783 = state_20752__$1;
(statearr_20757_20783[(1)] = (5));

} else {
var statearr_20758_20784 = state_20752__$1;
(statearr_20758_20784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (13))){
var state_20752__$1 = state_20752;
var statearr_20759_20785 = state_20752__$1;
(statearr_20759_20785[(2)] = null);

(statearr_20759_20785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (6))){
var inst_20731 = (state_20752[(7)]);
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20752__$1,(11),to,inst_20731);
} else {
if((state_val_20753 === (3))){
var inst_20750 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20752__$1,inst_20750);
} else {
if((state_val_20753 === (12))){
var state_20752__$1 = state_20752;
var statearr_20760_20786 = state_20752__$1;
(statearr_20760_20786[(2)] = null);

(statearr_20760_20786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (2))){
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20752__$1,(4),from);
} else {
if((state_val_20753 === (11))){
var inst_20741 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
if(cljs.core.truth_(inst_20741)){
var statearr_20761_20787 = state_20752__$1;
(statearr_20761_20787[(1)] = (12));

} else {
var statearr_20762_20788 = state_20752__$1;
(statearr_20762_20788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (9))){
var state_20752__$1 = state_20752;
var statearr_20763_20789 = state_20752__$1;
(statearr_20763_20789[(2)] = null);

(statearr_20763_20789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (5))){
var state_20752__$1 = state_20752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20764_20790 = state_20752__$1;
(statearr_20764_20790[(1)] = (8));

} else {
var statearr_20765_20791 = state_20752__$1;
(statearr_20765_20791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (14))){
var inst_20746 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
var statearr_20766_20792 = state_20752__$1;
(statearr_20766_20792[(2)] = inst_20746);

(statearr_20766_20792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (10))){
var inst_20738 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
var statearr_20767_20793 = state_20752__$1;
(statearr_20767_20793[(2)] = inst_20738);

(statearr_20767_20793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (8))){
var inst_20735 = cljs.core.async.close_BANG_.call(null,to);
var state_20752__$1 = state_20752;
var statearr_20768_20794 = state_20752__$1;
(statearr_20768_20794[(2)] = inst_20735);

(statearr_20768_20794[(1)] = (10));


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
});})(c__20613__auto___20780))
;
return ((function (switch__20501__auto__,c__20613__auto___20780){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_20772 = [null,null,null,null,null,null,null,null];
(statearr_20772[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_20772[(1)] = (1));

return statearr_20772;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_20752){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_20752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e20773){if((e20773 instanceof Object)){
var ex__20505__auto__ = e20773;
var statearr_20774_20795 = state_20752;
(statearr_20774_20795[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20796 = state_20752;
state_20752 = G__20796;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_20752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_20752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___20780))
})();
var state__20615__auto__ = (function (){var statearr_20775 = f__20614__auto__.call(null);
(statearr_20775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___20780);

return statearr_20775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___20780))
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
return (function (p__20980){
var vec__20981 = p__20980;
var v = cljs.core.nth.call(null,vec__20981,(0),null);
var p = cljs.core.nth.call(null,vec__20981,(1),null);
var job = vec__20981;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20613__auto___21163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___21163,res,vec__20981,v,p,job,jobs,results){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___21163,res,vec__20981,v,p,job,jobs,results){
return (function (state_20986){
var state_val_20987 = (state_20986[(1)]);
if((state_val_20987 === (1))){
var state_20986__$1 = state_20986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20986__$1,(2),res,v);
} else {
if((state_val_20987 === (2))){
var inst_20983 = (state_20986[(2)]);
var inst_20984 = cljs.core.async.close_BANG_.call(null,res);
var state_20986__$1 = (function (){var statearr_20988 = state_20986;
(statearr_20988[(7)] = inst_20983);

return statearr_20988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20986__$1,inst_20984);
} else {
return null;
}
}
});})(c__20613__auto___21163,res,vec__20981,v,p,job,jobs,results))
;
return ((function (switch__20501__auto__,c__20613__auto___21163,res,vec__20981,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_20992 = [null,null,null,null,null,null,null,null];
(statearr_20992[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_20992[(1)] = (1));

return statearr_20992;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_20986){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_20986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e20993){if((e20993 instanceof Object)){
var ex__20505__auto__ = e20993;
var statearr_20994_21164 = state_20986;
(statearr_20994_21164[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21165 = state_20986;
state_20986 = G__21165;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_20986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_20986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___21163,res,vec__20981,v,p,job,jobs,results))
})();
var state__20615__auto__ = (function (){var statearr_20995 = f__20614__auto__.call(null);
(statearr_20995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___21163);

return statearr_20995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___21163,res,vec__20981,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20996){
var vec__20997 = p__20996;
var v = cljs.core.nth.call(null,vec__20997,(0),null);
var p = cljs.core.nth.call(null,vec__20997,(1),null);
var job = vec__20997;
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
var n__19332__auto___21166 = n;
var __21167 = (0);
while(true){
if((__21167 < n__19332__auto___21166)){
var G__20998_21168 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20998_21168) {
case "compute":
var c__20613__auto___21170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21167,c__20613__auto___21170,G__20998_21168,n__19332__auto___21166,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (__21167,c__20613__auto___21170,G__20998_21168,n__19332__auto___21166,jobs,results,process,async){
return (function (state_21011){
var state_val_21012 = (state_21011[(1)]);
if((state_val_21012 === (1))){
var state_21011__$1 = state_21011;
var statearr_21013_21171 = state_21011__$1;
(statearr_21013_21171[(2)] = null);

(statearr_21013_21171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (2))){
var state_21011__$1 = state_21011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21011__$1,(4),jobs);
} else {
if((state_val_21012 === (3))){
var inst_21009 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21011__$1,inst_21009);
} else {
if((state_val_21012 === (4))){
var inst_21001 = (state_21011[(2)]);
var inst_21002 = process.call(null,inst_21001);
var state_21011__$1 = state_21011;
if(cljs.core.truth_(inst_21002)){
var statearr_21014_21172 = state_21011__$1;
(statearr_21014_21172[(1)] = (5));

} else {
var statearr_21015_21173 = state_21011__$1;
(statearr_21015_21173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (5))){
var state_21011__$1 = state_21011;
var statearr_21016_21174 = state_21011__$1;
(statearr_21016_21174[(2)] = null);

(statearr_21016_21174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (6))){
var state_21011__$1 = state_21011;
var statearr_21017_21175 = state_21011__$1;
(statearr_21017_21175[(2)] = null);

(statearr_21017_21175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21012 === (7))){
var inst_21007 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
var statearr_21018_21176 = state_21011__$1;
(statearr_21018_21176[(2)] = inst_21007);

(statearr_21018_21176[(1)] = (3));


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
});})(__21167,c__20613__auto___21170,G__20998_21168,n__19332__auto___21166,jobs,results,process,async))
;
return ((function (__21167,switch__20501__auto__,c__20613__auto___21170,G__20998_21168,n__19332__auto___21166,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_21022 = [null,null,null,null,null,null,null];
(statearr_21022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_21022[(1)] = (1));

return statearr_21022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_21011){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21023){if((e21023 instanceof Object)){
var ex__20505__auto__ = e21023;
var statearr_21024_21177 = state_21011;
(statearr_21024_21177[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21178 = state_21011;
state_21011 = G__21178;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_21011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_21011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(__21167,switch__20501__auto__,c__20613__auto___21170,G__20998_21168,n__19332__auto___21166,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_21025 = f__20614__auto__.call(null);
(statearr_21025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___21170);

return statearr_21025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(__21167,c__20613__auto___21170,G__20998_21168,n__19332__auto___21166,jobs,results,process,async))
);


break;
case "async":
var c__20613__auto___21179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21167,c__20613__auto___21179,G__20998_21168,n__19332__auto___21166,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (__21167,c__20613__auto___21179,G__20998_21168,n__19332__auto___21166,jobs,results,process,async){
return (function (state_21038){
var state_val_21039 = (state_21038[(1)]);
if((state_val_21039 === (1))){
var state_21038__$1 = state_21038;
var statearr_21040_21180 = state_21038__$1;
(statearr_21040_21180[(2)] = null);

(statearr_21040_21180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (2))){
var state_21038__$1 = state_21038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21038__$1,(4),jobs);
} else {
if((state_val_21039 === (3))){
var inst_21036 = (state_21038[(2)]);
var state_21038__$1 = state_21038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21038__$1,inst_21036);
} else {
if((state_val_21039 === (4))){
var inst_21028 = (state_21038[(2)]);
var inst_21029 = async.call(null,inst_21028);
var state_21038__$1 = state_21038;
if(cljs.core.truth_(inst_21029)){
var statearr_21041_21181 = state_21038__$1;
(statearr_21041_21181[(1)] = (5));

} else {
var statearr_21042_21182 = state_21038__$1;
(statearr_21042_21182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (5))){
var state_21038__$1 = state_21038;
var statearr_21043_21183 = state_21038__$1;
(statearr_21043_21183[(2)] = null);

(statearr_21043_21183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (6))){
var state_21038__$1 = state_21038;
var statearr_21044_21184 = state_21038__$1;
(statearr_21044_21184[(2)] = null);

(statearr_21044_21184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (7))){
var inst_21034 = (state_21038[(2)]);
var state_21038__$1 = state_21038;
var statearr_21045_21185 = state_21038__$1;
(statearr_21045_21185[(2)] = inst_21034);

(statearr_21045_21185[(1)] = (3));


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
});})(__21167,c__20613__auto___21179,G__20998_21168,n__19332__auto___21166,jobs,results,process,async))
;
return ((function (__21167,switch__20501__auto__,c__20613__auto___21179,G__20998_21168,n__19332__auto___21166,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_21049 = [null,null,null,null,null,null,null];
(statearr_21049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_21049[(1)] = (1));

return statearr_21049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_21038){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21050){if((e21050 instanceof Object)){
var ex__20505__auto__ = e21050;
var statearr_21051_21186 = state_21038;
(statearr_21051_21186[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21187 = state_21038;
state_21038 = G__21187;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_21038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_21038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(__21167,switch__20501__auto__,c__20613__auto___21179,G__20998_21168,n__19332__auto___21166,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_21052 = f__20614__auto__.call(null);
(statearr_21052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___21179);

return statearr_21052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(__21167,c__20613__auto___21179,G__20998_21168,n__19332__auto___21166,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21188 = (__21167 + (1));
__21167 = G__21188;
continue;
} else {
}
break;
}

var c__20613__auto___21189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___21189,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___21189,jobs,results,process,async){
return (function (state_21074){
var state_val_21075 = (state_21074[(1)]);
if((state_val_21075 === (1))){
var state_21074__$1 = state_21074;
var statearr_21076_21190 = state_21074__$1;
(statearr_21076_21190[(2)] = null);

(statearr_21076_21190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (2))){
var state_21074__$1 = state_21074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21074__$1,(4),from);
} else {
if((state_val_21075 === (3))){
var inst_21072 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21074__$1,inst_21072);
} else {
if((state_val_21075 === (4))){
var inst_21055 = (state_21074[(7)]);
var inst_21055__$1 = (state_21074[(2)]);
var inst_21056 = (inst_21055__$1 == null);
var state_21074__$1 = (function (){var statearr_21077 = state_21074;
(statearr_21077[(7)] = inst_21055__$1);

return statearr_21077;
})();
if(cljs.core.truth_(inst_21056)){
var statearr_21078_21191 = state_21074__$1;
(statearr_21078_21191[(1)] = (5));

} else {
var statearr_21079_21192 = state_21074__$1;
(statearr_21079_21192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (5))){
var inst_21058 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21074__$1 = state_21074;
var statearr_21080_21193 = state_21074__$1;
(statearr_21080_21193[(2)] = inst_21058);

(statearr_21080_21193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (6))){
var inst_21055 = (state_21074[(7)]);
var inst_21060 = (state_21074[(8)]);
var inst_21060__$1 = cljs.core.async.chan.call(null,(1));
var inst_21061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21062 = [inst_21055,inst_21060__$1];
var inst_21063 = (new cljs.core.PersistentVector(null,2,(5),inst_21061,inst_21062,null));
var state_21074__$1 = (function (){var statearr_21081 = state_21074;
(statearr_21081[(8)] = inst_21060__$1);

return statearr_21081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21074__$1,(8),jobs,inst_21063);
} else {
if((state_val_21075 === (7))){
var inst_21070 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21082_21194 = state_21074__$1;
(statearr_21082_21194[(2)] = inst_21070);

(statearr_21082_21194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21075 === (8))){
var inst_21060 = (state_21074[(8)]);
var inst_21065 = (state_21074[(2)]);
var state_21074__$1 = (function (){var statearr_21083 = state_21074;
(statearr_21083[(9)] = inst_21065);

return statearr_21083;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21074__$1,(9),results,inst_21060);
} else {
if((state_val_21075 === (9))){
var inst_21067 = (state_21074[(2)]);
var state_21074__$1 = (function (){var statearr_21084 = state_21074;
(statearr_21084[(10)] = inst_21067);

return statearr_21084;
})();
var statearr_21085_21195 = state_21074__$1;
(statearr_21085_21195[(2)] = null);

(statearr_21085_21195[(1)] = (2));


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
});})(c__20613__auto___21189,jobs,results,process,async))
;
return ((function (switch__20501__auto__,c__20613__auto___21189,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_21089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_21089[(1)] = (1));

return statearr_21089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_21074){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21090){if((e21090 instanceof Object)){
var ex__20505__auto__ = e21090;
var statearr_21091_21196 = state_21074;
(statearr_21091_21196[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21197 = state_21074;
state_21074 = G__21197;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_21074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_21074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___21189,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_21092 = f__20614__auto__.call(null);
(statearr_21092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___21189);

return statearr_21092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___21189,jobs,results,process,async))
);


var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,jobs,results,process,async){
return (function (state_21130){
var state_val_21131 = (state_21130[(1)]);
if((state_val_21131 === (7))){
var inst_21126 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21132_21198 = state_21130__$1;
(statearr_21132_21198[(2)] = inst_21126);

(statearr_21132_21198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (20))){
var state_21130__$1 = state_21130;
var statearr_21133_21199 = state_21130__$1;
(statearr_21133_21199[(2)] = null);

(statearr_21133_21199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (1))){
var state_21130__$1 = state_21130;
var statearr_21134_21200 = state_21130__$1;
(statearr_21134_21200[(2)] = null);

(statearr_21134_21200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (4))){
var inst_21095 = (state_21130[(7)]);
var inst_21095__$1 = (state_21130[(2)]);
var inst_21096 = (inst_21095__$1 == null);
var state_21130__$1 = (function (){var statearr_21135 = state_21130;
(statearr_21135[(7)] = inst_21095__$1);

return statearr_21135;
})();
if(cljs.core.truth_(inst_21096)){
var statearr_21136_21201 = state_21130__$1;
(statearr_21136_21201[(1)] = (5));

} else {
var statearr_21137_21202 = state_21130__$1;
(statearr_21137_21202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (15))){
var inst_21108 = (state_21130[(8)]);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21130__$1,(18),to,inst_21108);
} else {
if((state_val_21131 === (21))){
var inst_21121 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21138_21203 = state_21130__$1;
(statearr_21138_21203[(2)] = inst_21121);

(statearr_21138_21203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (13))){
var inst_21123 = (state_21130[(2)]);
var state_21130__$1 = (function (){var statearr_21139 = state_21130;
(statearr_21139[(9)] = inst_21123);

return statearr_21139;
})();
var statearr_21140_21204 = state_21130__$1;
(statearr_21140_21204[(2)] = null);

(statearr_21140_21204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (6))){
var inst_21095 = (state_21130[(7)]);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(11),inst_21095);
} else {
if((state_val_21131 === (17))){
var inst_21116 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
if(cljs.core.truth_(inst_21116)){
var statearr_21141_21205 = state_21130__$1;
(statearr_21141_21205[(1)] = (19));

} else {
var statearr_21142_21206 = state_21130__$1;
(statearr_21142_21206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (3))){
var inst_21128 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21130__$1,inst_21128);
} else {
if((state_val_21131 === (12))){
var inst_21105 = (state_21130[(10)]);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(14),inst_21105);
} else {
if((state_val_21131 === (2))){
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(4),results);
} else {
if((state_val_21131 === (19))){
var state_21130__$1 = state_21130;
var statearr_21143_21207 = state_21130__$1;
(statearr_21143_21207[(2)] = null);

(statearr_21143_21207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (11))){
var inst_21105 = (state_21130[(2)]);
var state_21130__$1 = (function (){var statearr_21144 = state_21130;
(statearr_21144[(10)] = inst_21105);

return statearr_21144;
})();
var statearr_21145_21208 = state_21130__$1;
(statearr_21145_21208[(2)] = null);

(statearr_21145_21208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (9))){
var state_21130__$1 = state_21130;
var statearr_21146_21209 = state_21130__$1;
(statearr_21146_21209[(2)] = null);

(statearr_21146_21209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (5))){
var state_21130__$1 = state_21130;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21147_21210 = state_21130__$1;
(statearr_21147_21210[(1)] = (8));

} else {
var statearr_21148_21211 = state_21130__$1;
(statearr_21148_21211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (14))){
var inst_21108 = (state_21130[(8)]);
var inst_21110 = (state_21130[(11)]);
var inst_21108__$1 = (state_21130[(2)]);
var inst_21109 = (inst_21108__$1 == null);
var inst_21110__$1 = cljs.core.not.call(null,inst_21109);
var state_21130__$1 = (function (){var statearr_21149 = state_21130;
(statearr_21149[(8)] = inst_21108__$1);

(statearr_21149[(11)] = inst_21110__$1);

return statearr_21149;
})();
if(inst_21110__$1){
var statearr_21150_21212 = state_21130__$1;
(statearr_21150_21212[(1)] = (15));

} else {
var statearr_21151_21213 = state_21130__$1;
(statearr_21151_21213[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (16))){
var inst_21110 = (state_21130[(11)]);
var state_21130__$1 = state_21130;
var statearr_21152_21214 = state_21130__$1;
(statearr_21152_21214[(2)] = inst_21110);

(statearr_21152_21214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (10))){
var inst_21102 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21153_21215 = state_21130__$1;
(statearr_21153_21215[(2)] = inst_21102);

(statearr_21153_21215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (18))){
var inst_21113 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21154_21216 = state_21130__$1;
(statearr_21154_21216[(2)] = inst_21113);

(statearr_21154_21216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (8))){
var inst_21099 = cljs.core.async.close_BANG_.call(null,to);
var state_21130__$1 = state_21130;
var statearr_21155_21217 = state_21130__$1;
(statearr_21155_21217[(2)] = inst_21099);

(statearr_21155_21217[(1)] = (10));


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
var statearr_21159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_21159[(1)] = (1));

return statearr_21159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_21130){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21160){if((e21160 instanceof Object)){
var ex__20505__auto__ = e21160;
var statearr_21161_21218 = state_21130;
(statearr_21161_21218[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21219 = state_21130;
state_21130 = G__21219;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_21162 = f__20614__auto__.call(null);
(statearr_21162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_21162;
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
var args21220 = [];
var len__19487__auto___21223 = arguments.length;
var i__19488__auto___21224 = (0);
while(true){
if((i__19488__auto___21224 < len__19487__auto___21223)){
args21220.push((arguments[i__19488__auto___21224]));

var G__21225 = (i__19488__auto___21224 + (1));
i__19488__auto___21224 = G__21225;
continue;
} else {
}
break;
}

var G__21222 = args21220.length;
switch (G__21222) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21220.length)].join('')));

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
var args21227 = [];
var len__19487__auto___21230 = arguments.length;
var i__19488__auto___21231 = (0);
while(true){
if((i__19488__auto___21231 < len__19487__auto___21230)){
args21227.push((arguments[i__19488__auto___21231]));

var G__21232 = (i__19488__auto___21231 + (1));
i__19488__auto___21231 = G__21232;
continue;
} else {
}
break;
}

var G__21229 = args21227.length;
switch (G__21229) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21227.length)].join('')));

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
var args21234 = [];
var len__19487__auto___21287 = arguments.length;
var i__19488__auto___21288 = (0);
while(true){
if((i__19488__auto___21288 < len__19487__auto___21287)){
args21234.push((arguments[i__19488__auto___21288]));

var G__21289 = (i__19488__auto___21288 + (1));
i__19488__auto___21288 = G__21289;
continue;
} else {
}
break;
}

var G__21236 = args21234.length;
switch (G__21236) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21234.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20613__auto___21291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___21291,tc,fc){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___21291,tc,fc){
return (function (state_21262){
var state_val_21263 = (state_21262[(1)]);
if((state_val_21263 === (7))){
var inst_21258 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21264_21292 = state_21262__$1;
(statearr_21264_21292[(2)] = inst_21258);

(statearr_21264_21292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (1))){
var state_21262__$1 = state_21262;
var statearr_21265_21293 = state_21262__$1;
(statearr_21265_21293[(2)] = null);

(statearr_21265_21293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (4))){
var inst_21239 = (state_21262[(7)]);
var inst_21239__$1 = (state_21262[(2)]);
var inst_21240 = (inst_21239__$1 == null);
var state_21262__$1 = (function (){var statearr_21266 = state_21262;
(statearr_21266[(7)] = inst_21239__$1);

return statearr_21266;
})();
if(cljs.core.truth_(inst_21240)){
var statearr_21267_21294 = state_21262__$1;
(statearr_21267_21294[(1)] = (5));

} else {
var statearr_21268_21295 = state_21262__$1;
(statearr_21268_21295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (13))){
var state_21262__$1 = state_21262;
var statearr_21269_21296 = state_21262__$1;
(statearr_21269_21296[(2)] = null);

(statearr_21269_21296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (6))){
var inst_21239 = (state_21262[(7)]);
var inst_21245 = p.call(null,inst_21239);
var state_21262__$1 = state_21262;
if(cljs.core.truth_(inst_21245)){
var statearr_21270_21297 = state_21262__$1;
(statearr_21270_21297[(1)] = (9));

} else {
var statearr_21271_21298 = state_21262__$1;
(statearr_21271_21298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (3))){
var inst_21260 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21262__$1,inst_21260);
} else {
if((state_val_21263 === (12))){
var state_21262__$1 = state_21262;
var statearr_21272_21299 = state_21262__$1;
(statearr_21272_21299[(2)] = null);

(statearr_21272_21299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (2))){
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21262__$1,(4),ch);
} else {
if((state_val_21263 === (11))){
var inst_21239 = (state_21262[(7)]);
var inst_21249 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21262__$1,(8),inst_21249,inst_21239);
} else {
if((state_val_21263 === (9))){
var state_21262__$1 = state_21262;
var statearr_21273_21300 = state_21262__$1;
(statearr_21273_21300[(2)] = tc);

(statearr_21273_21300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (5))){
var inst_21242 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21243 = cljs.core.async.close_BANG_.call(null,fc);
var state_21262__$1 = (function (){var statearr_21274 = state_21262;
(statearr_21274[(8)] = inst_21242);

return statearr_21274;
})();
var statearr_21275_21301 = state_21262__$1;
(statearr_21275_21301[(2)] = inst_21243);

(statearr_21275_21301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (14))){
var inst_21256 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21276_21302 = state_21262__$1;
(statearr_21276_21302[(2)] = inst_21256);

(statearr_21276_21302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (10))){
var state_21262__$1 = state_21262;
var statearr_21277_21303 = state_21262__$1;
(statearr_21277_21303[(2)] = fc);

(statearr_21277_21303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (8))){
var inst_21251 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
if(cljs.core.truth_(inst_21251)){
var statearr_21278_21304 = state_21262__$1;
(statearr_21278_21304[(1)] = (12));

} else {
var statearr_21279_21305 = state_21262__$1;
(statearr_21279_21305[(1)] = (13));

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
});})(c__20613__auto___21291,tc,fc))
;
return ((function (switch__20501__auto__,c__20613__auto___21291,tc,fc){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_21283 = [null,null,null,null,null,null,null,null,null];
(statearr_21283[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_21283[(1)] = (1));

return statearr_21283;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_21262){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21284){if((e21284 instanceof Object)){
var ex__20505__auto__ = e21284;
var statearr_21285_21306 = state_21262;
(statearr_21285_21306[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21307 = state_21262;
state_21262 = G__21307;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_21262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_21262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___21291,tc,fc))
})();
var state__20615__auto__ = (function (){var statearr_21286 = f__20614__auto__.call(null);
(statearr_21286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___21291);

return statearr_21286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___21291,tc,fc))
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
return (function (state_21371){
var state_val_21372 = (state_21371[(1)]);
if((state_val_21372 === (7))){
var inst_21367 = (state_21371[(2)]);
var state_21371__$1 = state_21371;
var statearr_21373_21394 = state_21371__$1;
(statearr_21373_21394[(2)] = inst_21367);

(statearr_21373_21394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21372 === (1))){
var inst_21351 = init;
var state_21371__$1 = (function (){var statearr_21374 = state_21371;
(statearr_21374[(7)] = inst_21351);

return statearr_21374;
})();
var statearr_21375_21395 = state_21371__$1;
(statearr_21375_21395[(2)] = null);

(statearr_21375_21395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21372 === (4))){
var inst_21354 = (state_21371[(8)]);
var inst_21354__$1 = (state_21371[(2)]);
var inst_21355 = (inst_21354__$1 == null);
var state_21371__$1 = (function (){var statearr_21376 = state_21371;
(statearr_21376[(8)] = inst_21354__$1);

return statearr_21376;
})();
if(cljs.core.truth_(inst_21355)){
var statearr_21377_21396 = state_21371__$1;
(statearr_21377_21396[(1)] = (5));

} else {
var statearr_21378_21397 = state_21371__$1;
(statearr_21378_21397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21372 === (6))){
var inst_21354 = (state_21371[(8)]);
var inst_21351 = (state_21371[(7)]);
var inst_21358 = (state_21371[(9)]);
var inst_21358__$1 = f.call(null,inst_21351,inst_21354);
var inst_21359 = cljs.core.reduced_QMARK_.call(null,inst_21358__$1);
var state_21371__$1 = (function (){var statearr_21379 = state_21371;
(statearr_21379[(9)] = inst_21358__$1);

return statearr_21379;
})();
if(inst_21359){
var statearr_21380_21398 = state_21371__$1;
(statearr_21380_21398[(1)] = (8));

} else {
var statearr_21381_21399 = state_21371__$1;
(statearr_21381_21399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21372 === (3))){
var inst_21369 = (state_21371[(2)]);
var state_21371__$1 = state_21371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21371__$1,inst_21369);
} else {
if((state_val_21372 === (2))){
var state_21371__$1 = state_21371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21371__$1,(4),ch);
} else {
if((state_val_21372 === (9))){
var inst_21358 = (state_21371[(9)]);
var inst_21351 = inst_21358;
var state_21371__$1 = (function (){var statearr_21382 = state_21371;
(statearr_21382[(7)] = inst_21351);

return statearr_21382;
})();
var statearr_21383_21400 = state_21371__$1;
(statearr_21383_21400[(2)] = null);

(statearr_21383_21400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21372 === (5))){
var inst_21351 = (state_21371[(7)]);
var state_21371__$1 = state_21371;
var statearr_21384_21401 = state_21371__$1;
(statearr_21384_21401[(2)] = inst_21351);

(statearr_21384_21401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21372 === (10))){
var inst_21365 = (state_21371[(2)]);
var state_21371__$1 = state_21371;
var statearr_21385_21402 = state_21371__$1;
(statearr_21385_21402[(2)] = inst_21365);

(statearr_21385_21402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21372 === (8))){
var inst_21358 = (state_21371[(9)]);
var inst_21361 = cljs.core.deref.call(null,inst_21358);
var state_21371__$1 = state_21371;
var statearr_21386_21403 = state_21371__$1;
(statearr_21386_21403[(2)] = inst_21361);

(statearr_21386_21403[(1)] = (10));


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
var statearr_21390 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21390[(0)] = cljs$core$async$reduce_$_state_machine__20502__auto__);

(statearr_21390[(1)] = (1));

return statearr_21390;
});
var cljs$core$async$reduce_$_state_machine__20502__auto____1 = (function (state_21371){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21391){if((e21391 instanceof Object)){
var ex__20505__auto__ = e21391;
var statearr_21392_21404 = state_21371;
(statearr_21392_21404[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21405 = state_21371;
state_21371 = G__21405;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20502__auto__ = function(state_21371){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20502__auto____1.call(this,state_21371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20502__auto____0;
cljs$core$async$reduce_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20502__auto____1;
return cljs$core$async$reduce_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_21393 = f__20614__auto__.call(null);
(statearr_21393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_21393;
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
var args21406 = [];
var len__19487__auto___21458 = arguments.length;
var i__19488__auto___21459 = (0);
while(true){
if((i__19488__auto___21459 < len__19487__auto___21458)){
args21406.push((arguments[i__19488__auto___21459]));

var G__21460 = (i__19488__auto___21459 + (1));
i__19488__auto___21459 = G__21460;
continue;
} else {
}
break;
}

var G__21408 = args21406.length;
switch (G__21408) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21406.length)].join('')));

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
return (function (state_21433){
var state_val_21434 = (state_21433[(1)]);
if((state_val_21434 === (7))){
var inst_21415 = (state_21433[(2)]);
var state_21433__$1 = state_21433;
var statearr_21435_21462 = state_21433__$1;
(statearr_21435_21462[(2)] = inst_21415);

(statearr_21435_21462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (1))){
var inst_21409 = cljs.core.seq.call(null,coll);
var inst_21410 = inst_21409;
var state_21433__$1 = (function (){var statearr_21436 = state_21433;
(statearr_21436[(7)] = inst_21410);

return statearr_21436;
})();
var statearr_21437_21463 = state_21433__$1;
(statearr_21437_21463[(2)] = null);

(statearr_21437_21463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (4))){
var inst_21410 = (state_21433[(7)]);
var inst_21413 = cljs.core.first.call(null,inst_21410);
var state_21433__$1 = state_21433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21433__$1,(7),ch,inst_21413);
} else {
if((state_val_21434 === (13))){
var inst_21427 = (state_21433[(2)]);
var state_21433__$1 = state_21433;
var statearr_21438_21464 = state_21433__$1;
(statearr_21438_21464[(2)] = inst_21427);

(statearr_21438_21464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (6))){
var inst_21418 = (state_21433[(2)]);
var state_21433__$1 = state_21433;
if(cljs.core.truth_(inst_21418)){
var statearr_21439_21465 = state_21433__$1;
(statearr_21439_21465[(1)] = (8));

} else {
var statearr_21440_21466 = state_21433__$1;
(statearr_21440_21466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (3))){
var inst_21431 = (state_21433[(2)]);
var state_21433__$1 = state_21433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21433__$1,inst_21431);
} else {
if((state_val_21434 === (12))){
var state_21433__$1 = state_21433;
var statearr_21441_21467 = state_21433__$1;
(statearr_21441_21467[(2)] = null);

(statearr_21441_21467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (2))){
var inst_21410 = (state_21433[(7)]);
var state_21433__$1 = state_21433;
if(cljs.core.truth_(inst_21410)){
var statearr_21442_21468 = state_21433__$1;
(statearr_21442_21468[(1)] = (4));

} else {
var statearr_21443_21469 = state_21433__$1;
(statearr_21443_21469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (11))){
var inst_21424 = cljs.core.async.close_BANG_.call(null,ch);
var state_21433__$1 = state_21433;
var statearr_21444_21470 = state_21433__$1;
(statearr_21444_21470[(2)] = inst_21424);

(statearr_21444_21470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (9))){
var state_21433__$1 = state_21433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21445_21471 = state_21433__$1;
(statearr_21445_21471[(1)] = (11));

} else {
var statearr_21446_21472 = state_21433__$1;
(statearr_21446_21472[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (5))){
var inst_21410 = (state_21433[(7)]);
var state_21433__$1 = state_21433;
var statearr_21447_21473 = state_21433__$1;
(statearr_21447_21473[(2)] = inst_21410);

(statearr_21447_21473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (10))){
var inst_21429 = (state_21433[(2)]);
var state_21433__$1 = state_21433;
var statearr_21448_21474 = state_21433__$1;
(statearr_21448_21474[(2)] = inst_21429);

(statearr_21448_21474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21434 === (8))){
var inst_21410 = (state_21433[(7)]);
var inst_21420 = cljs.core.next.call(null,inst_21410);
var inst_21410__$1 = inst_21420;
var state_21433__$1 = (function (){var statearr_21449 = state_21433;
(statearr_21449[(7)] = inst_21410__$1);

return statearr_21449;
})();
var statearr_21450_21475 = state_21433__$1;
(statearr_21450_21475[(2)] = null);

(statearr_21450_21475[(1)] = (2));


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
var statearr_21454 = [null,null,null,null,null,null,null,null];
(statearr_21454[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_21454[(1)] = (1));

return statearr_21454;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_21433){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21455){if((e21455 instanceof Object)){
var ex__20505__auto__ = e21455;
var statearr_21456_21476 = state_21433;
(statearr_21456_21476[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21477 = state_21433;
state_21433 = G__21477;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_21433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_21433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_21457 = f__20614__auto__.call(null);
(statearr_21457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_21457;
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
if(typeof cljs.core.async.t_cljs$core$async21699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21699 = (function (mult,ch,cs,meta21700){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21700 = meta21700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21701,meta21700__$1){
var self__ = this;
var _21701__$1 = this;
return (new cljs.core.async.t_cljs$core$async21699(self__.mult,self__.ch,self__.cs,meta21700__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21701){
var self__ = this;
var _21701__$1 = this;
return self__.meta21700;
});})(cs))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21699.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21700","meta21700",1554772503,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21699";

cljs.core.async.t_cljs$core$async21699.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async21699");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21699 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21699(mult__$1,ch__$1,cs__$1,meta21700){
return (new cljs.core.async.t_cljs$core$async21699(mult__$1,ch__$1,cs__$1,meta21700));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21699(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20613__auto___21920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___21920,cs,m,dchan,dctr,done){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___21920,cs,m,dchan,dctr,done){
return (function (state_21832){
var state_val_21833 = (state_21832[(1)]);
if((state_val_21833 === (7))){
var inst_21828 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21834_21921 = state_21832__$1;
(statearr_21834_21921[(2)] = inst_21828);

(statearr_21834_21921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (20))){
var inst_21733 = (state_21832[(7)]);
var inst_21743 = cljs.core.first.call(null,inst_21733);
var inst_21744 = cljs.core.nth.call(null,inst_21743,(0),null);
var inst_21745 = cljs.core.nth.call(null,inst_21743,(1),null);
var state_21832__$1 = (function (){var statearr_21835 = state_21832;
(statearr_21835[(8)] = inst_21744);

return statearr_21835;
})();
if(cljs.core.truth_(inst_21745)){
var statearr_21836_21922 = state_21832__$1;
(statearr_21836_21922[(1)] = (22));

} else {
var statearr_21837_21923 = state_21832__$1;
(statearr_21837_21923[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (27))){
var inst_21780 = (state_21832[(9)]);
var inst_21775 = (state_21832[(10)]);
var inst_21773 = (state_21832[(11)]);
var inst_21704 = (state_21832[(12)]);
var inst_21780__$1 = cljs.core._nth.call(null,inst_21773,inst_21775);
var inst_21781 = cljs.core.async.put_BANG_.call(null,inst_21780__$1,inst_21704,done);
var state_21832__$1 = (function (){var statearr_21838 = state_21832;
(statearr_21838[(9)] = inst_21780__$1);

return statearr_21838;
})();
if(cljs.core.truth_(inst_21781)){
var statearr_21839_21924 = state_21832__$1;
(statearr_21839_21924[(1)] = (30));

} else {
var statearr_21840_21925 = state_21832__$1;
(statearr_21840_21925[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (1))){
var state_21832__$1 = state_21832;
var statearr_21841_21926 = state_21832__$1;
(statearr_21841_21926[(2)] = null);

(statearr_21841_21926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (24))){
var inst_21733 = (state_21832[(7)]);
var inst_21750 = (state_21832[(2)]);
var inst_21751 = cljs.core.next.call(null,inst_21733);
var inst_21713 = inst_21751;
var inst_21714 = null;
var inst_21715 = (0);
var inst_21716 = (0);
var state_21832__$1 = (function (){var statearr_21842 = state_21832;
(statearr_21842[(13)] = inst_21715);

(statearr_21842[(14)] = inst_21716);

(statearr_21842[(15)] = inst_21714);

(statearr_21842[(16)] = inst_21713);

(statearr_21842[(17)] = inst_21750);

return statearr_21842;
})();
var statearr_21843_21927 = state_21832__$1;
(statearr_21843_21927[(2)] = null);

(statearr_21843_21927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (39))){
var state_21832__$1 = state_21832;
var statearr_21847_21928 = state_21832__$1;
(statearr_21847_21928[(2)] = null);

(statearr_21847_21928[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (4))){
var inst_21704 = (state_21832[(12)]);
var inst_21704__$1 = (state_21832[(2)]);
var inst_21705 = (inst_21704__$1 == null);
var state_21832__$1 = (function (){var statearr_21848 = state_21832;
(statearr_21848[(12)] = inst_21704__$1);

return statearr_21848;
})();
if(cljs.core.truth_(inst_21705)){
var statearr_21849_21929 = state_21832__$1;
(statearr_21849_21929[(1)] = (5));

} else {
var statearr_21850_21930 = state_21832__$1;
(statearr_21850_21930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (15))){
var inst_21715 = (state_21832[(13)]);
var inst_21716 = (state_21832[(14)]);
var inst_21714 = (state_21832[(15)]);
var inst_21713 = (state_21832[(16)]);
var inst_21729 = (state_21832[(2)]);
var inst_21730 = (inst_21716 + (1));
var tmp21844 = inst_21715;
var tmp21845 = inst_21714;
var tmp21846 = inst_21713;
var inst_21713__$1 = tmp21846;
var inst_21714__$1 = tmp21845;
var inst_21715__$1 = tmp21844;
var inst_21716__$1 = inst_21730;
var state_21832__$1 = (function (){var statearr_21851 = state_21832;
(statearr_21851[(13)] = inst_21715__$1);

(statearr_21851[(14)] = inst_21716__$1);

(statearr_21851[(15)] = inst_21714__$1);

(statearr_21851[(18)] = inst_21729);

(statearr_21851[(16)] = inst_21713__$1);

return statearr_21851;
})();
var statearr_21852_21931 = state_21832__$1;
(statearr_21852_21931[(2)] = null);

(statearr_21852_21931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (21))){
var inst_21754 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21856_21932 = state_21832__$1;
(statearr_21856_21932[(2)] = inst_21754);

(statearr_21856_21932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (31))){
var inst_21780 = (state_21832[(9)]);
var inst_21784 = done.call(null,null);
var inst_21785 = cljs.core.async.untap_STAR_.call(null,m,inst_21780);
var state_21832__$1 = (function (){var statearr_21857 = state_21832;
(statearr_21857[(19)] = inst_21784);

return statearr_21857;
})();
var statearr_21858_21933 = state_21832__$1;
(statearr_21858_21933[(2)] = inst_21785);

(statearr_21858_21933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (32))){
var inst_21775 = (state_21832[(10)]);
var inst_21772 = (state_21832[(20)]);
var inst_21774 = (state_21832[(21)]);
var inst_21773 = (state_21832[(11)]);
var inst_21787 = (state_21832[(2)]);
var inst_21788 = (inst_21775 + (1));
var tmp21853 = inst_21772;
var tmp21854 = inst_21774;
var tmp21855 = inst_21773;
var inst_21772__$1 = tmp21853;
var inst_21773__$1 = tmp21855;
var inst_21774__$1 = tmp21854;
var inst_21775__$1 = inst_21788;
var state_21832__$1 = (function (){var statearr_21859 = state_21832;
(statearr_21859[(10)] = inst_21775__$1);

(statearr_21859[(20)] = inst_21772__$1);

(statearr_21859[(22)] = inst_21787);

(statearr_21859[(21)] = inst_21774__$1);

(statearr_21859[(11)] = inst_21773__$1);

return statearr_21859;
})();
var statearr_21860_21934 = state_21832__$1;
(statearr_21860_21934[(2)] = null);

(statearr_21860_21934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (40))){
var inst_21800 = (state_21832[(23)]);
var inst_21804 = done.call(null,null);
var inst_21805 = cljs.core.async.untap_STAR_.call(null,m,inst_21800);
var state_21832__$1 = (function (){var statearr_21861 = state_21832;
(statearr_21861[(24)] = inst_21804);

return statearr_21861;
})();
var statearr_21862_21935 = state_21832__$1;
(statearr_21862_21935[(2)] = inst_21805);

(statearr_21862_21935[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (33))){
var inst_21791 = (state_21832[(25)]);
var inst_21793 = cljs.core.chunked_seq_QMARK_.call(null,inst_21791);
var state_21832__$1 = state_21832;
if(inst_21793){
var statearr_21863_21936 = state_21832__$1;
(statearr_21863_21936[(1)] = (36));

} else {
var statearr_21864_21937 = state_21832__$1;
(statearr_21864_21937[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (13))){
var inst_21723 = (state_21832[(26)]);
var inst_21726 = cljs.core.async.close_BANG_.call(null,inst_21723);
var state_21832__$1 = state_21832;
var statearr_21865_21938 = state_21832__$1;
(statearr_21865_21938[(2)] = inst_21726);

(statearr_21865_21938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (22))){
var inst_21744 = (state_21832[(8)]);
var inst_21747 = cljs.core.async.close_BANG_.call(null,inst_21744);
var state_21832__$1 = state_21832;
var statearr_21866_21939 = state_21832__$1;
(statearr_21866_21939[(2)] = inst_21747);

(statearr_21866_21939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (36))){
var inst_21791 = (state_21832[(25)]);
var inst_21795 = cljs.core.chunk_first.call(null,inst_21791);
var inst_21796 = cljs.core.chunk_rest.call(null,inst_21791);
var inst_21797 = cljs.core.count.call(null,inst_21795);
var inst_21772 = inst_21796;
var inst_21773 = inst_21795;
var inst_21774 = inst_21797;
var inst_21775 = (0);
var state_21832__$1 = (function (){var statearr_21867 = state_21832;
(statearr_21867[(10)] = inst_21775);

(statearr_21867[(20)] = inst_21772);

(statearr_21867[(21)] = inst_21774);

(statearr_21867[(11)] = inst_21773);

return statearr_21867;
})();
var statearr_21868_21940 = state_21832__$1;
(statearr_21868_21940[(2)] = null);

(statearr_21868_21940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (41))){
var inst_21791 = (state_21832[(25)]);
var inst_21807 = (state_21832[(2)]);
var inst_21808 = cljs.core.next.call(null,inst_21791);
var inst_21772 = inst_21808;
var inst_21773 = null;
var inst_21774 = (0);
var inst_21775 = (0);
var state_21832__$1 = (function (){var statearr_21869 = state_21832;
(statearr_21869[(27)] = inst_21807);

(statearr_21869[(10)] = inst_21775);

(statearr_21869[(20)] = inst_21772);

(statearr_21869[(21)] = inst_21774);

(statearr_21869[(11)] = inst_21773);

return statearr_21869;
})();
var statearr_21870_21941 = state_21832__$1;
(statearr_21870_21941[(2)] = null);

(statearr_21870_21941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (43))){
var state_21832__$1 = state_21832;
var statearr_21871_21942 = state_21832__$1;
(statearr_21871_21942[(2)] = null);

(statearr_21871_21942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (29))){
var inst_21816 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21872_21943 = state_21832__$1;
(statearr_21872_21943[(2)] = inst_21816);

(statearr_21872_21943[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (44))){
var inst_21825 = (state_21832[(2)]);
var state_21832__$1 = (function (){var statearr_21873 = state_21832;
(statearr_21873[(28)] = inst_21825);

return statearr_21873;
})();
var statearr_21874_21944 = state_21832__$1;
(statearr_21874_21944[(2)] = null);

(statearr_21874_21944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (6))){
var inst_21764 = (state_21832[(29)]);
var inst_21763 = cljs.core.deref.call(null,cs);
var inst_21764__$1 = cljs.core.keys.call(null,inst_21763);
var inst_21765 = cljs.core.count.call(null,inst_21764__$1);
var inst_21766 = cljs.core.reset_BANG_.call(null,dctr,inst_21765);
var inst_21771 = cljs.core.seq.call(null,inst_21764__$1);
var inst_21772 = inst_21771;
var inst_21773 = null;
var inst_21774 = (0);
var inst_21775 = (0);
var state_21832__$1 = (function (){var statearr_21875 = state_21832;
(statearr_21875[(10)] = inst_21775);

(statearr_21875[(29)] = inst_21764__$1);

(statearr_21875[(20)] = inst_21772);

(statearr_21875[(21)] = inst_21774);

(statearr_21875[(30)] = inst_21766);

(statearr_21875[(11)] = inst_21773);

return statearr_21875;
})();
var statearr_21876_21945 = state_21832__$1;
(statearr_21876_21945[(2)] = null);

(statearr_21876_21945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (28))){
var inst_21772 = (state_21832[(20)]);
var inst_21791 = (state_21832[(25)]);
var inst_21791__$1 = cljs.core.seq.call(null,inst_21772);
var state_21832__$1 = (function (){var statearr_21877 = state_21832;
(statearr_21877[(25)] = inst_21791__$1);

return statearr_21877;
})();
if(inst_21791__$1){
var statearr_21878_21946 = state_21832__$1;
(statearr_21878_21946[(1)] = (33));

} else {
var statearr_21879_21947 = state_21832__$1;
(statearr_21879_21947[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (25))){
var inst_21775 = (state_21832[(10)]);
var inst_21774 = (state_21832[(21)]);
var inst_21777 = (inst_21775 < inst_21774);
var inst_21778 = inst_21777;
var state_21832__$1 = state_21832;
if(cljs.core.truth_(inst_21778)){
var statearr_21880_21948 = state_21832__$1;
(statearr_21880_21948[(1)] = (27));

} else {
var statearr_21881_21949 = state_21832__$1;
(statearr_21881_21949[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (34))){
var state_21832__$1 = state_21832;
var statearr_21882_21950 = state_21832__$1;
(statearr_21882_21950[(2)] = null);

(statearr_21882_21950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (17))){
var state_21832__$1 = state_21832;
var statearr_21883_21951 = state_21832__$1;
(statearr_21883_21951[(2)] = null);

(statearr_21883_21951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (3))){
var inst_21830 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21832__$1,inst_21830);
} else {
if((state_val_21833 === (12))){
var inst_21759 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21884_21952 = state_21832__$1;
(statearr_21884_21952[(2)] = inst_21759);

(statearr_21884_21952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (2))){
var state_21832__$1 = state_21832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21832__$1,(4),ch);
} else {
if((state_val_21833 === (23))){
var state_21832__$1 = state_21832;
var statearr_21885_21953 = state_21832__$1;
(statearr_21885_21953[(2)] = null);

(statearr_21885_21953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (35))){
var inst_21814 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21886_21954 = state_21832__$1;
(statearr_21886_21954[(2)] = inst_21814);

(statearr_21886_21954[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (19))){
var inst_21733 = (state_21832[(7)]);
var inst_21737 = cljs.core.chunk_first.call(null,inst_21733);
var inst_21738 = cljs.core.chunk_rest.call(null,inst_21733);
var inst_21739 = cljs.core.count.call(null,inst_21737);
var inst_21713 = inst_21738;
var inst_21714 = inst_21737;
var inst_21715 = inst_21739;
var inst_21716 = (0);
var state_21832__$1 = (function (){var statearr_21887 = state_21832;
(statearr_21887[(13)] = inst_21715);

(statearr_21887[(14)] = inst_21716);

(statearr_21887[(15)] = inst_21714);

(statearr_21887[(16)] = inst_21713);

return statearr_21887;
})();
var statearr_21888_21955 = state_21832__$1;
(statearr_21888_21955[(2)] = null);

(statearr_21888_21955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (11))){
var inst_21733 = (state_21832[(7)]);
var inst_21713 = (state_21832[(16)]);
var inst_21733__$1 = cljs.core.seq.call(null,inst_21713);
var state_21832__$1 = (function (){var statearr_21889 = state_21832;
(statearr_21889[(7)] = inst_21733__$1);

return statearr_21889;
})();
if(inst_21733__$1){
var statearr_21890_21956 = state_21832__$1;
(statearr_21890_21956[(1)] = (16));

} else {
var statearr_21891_21957 = state_21832__$1;
(statearr_21891_21957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (9))){
var inst_21761 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21892_21958 = state_21832__$1;
(statearr_21892_21958[(2)] = inst_21761);

(statearr_21892_21958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (5))){
var inst_21711 = cljs.core.deref.call(null,cs);
var inst_21712 = cljs.core.seq.call(null,inst_21711);
var inst_21713 = inst_21712;
var inst_21714 = null;
var inst_21715 = (0);
var inst_21716 = (0);
var state_21832__$1 = (function (){var statearr_21893 = state_21832;
(statearr_21893[(13)] = inst_21715);

(statearr_21893[(14)] = inst_21716);

(statearr_21893[(15)] = inst_21714);

(statearr_21893[(16)] = inst_21713);

return statearr_21893;
})();
var statearr_21894_21959 = state_21832__$1;
(statearr_21894_21959[(2)] = null);

(statearr_21894_21959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (14))){
var state_21832__$1 = state_21832;
var statearr_21895_21960 = state_21832__$1;
(statearr_21895_21960[(2)] = null);

(statearr_21895_21960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (45))){
var inst_21822 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21896_21961 = state_21832__$1;
(statearr_21896_21961[(2)] = inst_21822);

(statearr_21896_21961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (26))){
var inst_21764 = (state_21832[(29)]);
var inst_21818 = (state_21832[(2)]);
var inst_21819 = cljs.core.seq.call(null,inst_21764);
var state_21832__$1 = (function (){var statearr_21897 = state_21832;
(statearr_21897[(31)] = inst_21818);

return statearr_21897;
})();
if(inst_21819){
var statearr_21898_21962 = state_21832__$1;
(statearr_21898_21962[(1)] = (42));

} else {
var statearr_21899_21963 = state_21832__$1;
(statearr_21899_21963[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (16))){
var inst_21733 = (state_21832[(7)]);
var inst_21735 = cljs.core.chunked_seq_QMARK_.call(null,inst_21733);
var state_21832__$1 = state_21832;
if(inst_21735){
var statearr_21900_21964 = state_21832__$1;
(statearr_21900_21964[(1)] = (19));

} else {
var statearr_21901_21965 = state_21832__$1;
(statearr_21901_21965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (38))){
var inst_21811 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21902_21966 = state_21832__$1;
(statearr_21902_21966[(2)] = inst_21811);

(statearr_21902_21966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (30))){
var state_21832__$1 = state_21832;
var statearr_21903_21967 = state_21832__$1;
(statearr_21903_21967[(2)] = null);

(statearr_21903_21967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (10))){
var inst_21716 = (state_21832[(14)]);
var inst_21714 = (state_21832[(15)]);
var inst_21722 = cljs.core._nth.call(null,inst_21714,inst_21716);
var inst_21723 = cljs.core.nth.call(null,inst_21722,(0),null);
var inst_21724 = cljs.core.nth.call(null,inst_21722,(1),null);
var state_21832__$1 = (function (){var statearr_21904 = state_21832;
(statearr_21904[(26)] = inst_21723);

return statearr_21904;
})();
if(cljs.core.truth_(inst_21724)){
var statearr_21905_21968 = state_21832__$1;
(statearr_21905_21968[(1)] = (13));

} else {
var statearr_21906_21969 = state_21832__$1;
(statearr_21906_21969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (18))){
var inst_21757 = (state_21832[(2)]);
var state_21832__$1 = state_21832;
var statearr_21907_21970 = state_21832__$1;
(statearr_21907_21970[(2)] = inst_21757);

(statearr_21907_21970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (42))){
var state_21832__$1 = state_21832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21832__$1,(45),dchan);
} else {
if((state_val_21833 === (37))){
var inst_21800 = (state_21832[(23)]);
var inst_21791 = (state_21832[(25)]);
var inst_21704 = (state_21832[(12)]);
var inst_21800__$1 = cljs.core.first.call(null,inst_21791);
var inst_21801 = cljs.core.async.put_BANG_.call(null,inst_21800__$1,inst_21704,done);
var state_21832__$1 = (function (){var statearr_21908 = state_21832;
(statearr_21908[(23)] = inst_21800__$1);

return statearr_21908;
})();
if(cljs.core.truth_(inst_21801)){
var statearr_21909_21971 = state_21832__$1;
(statearr_21909_21971[(1)] = (39));

} else {
var statearr_21910_21972 = state_21832__$1;
(statearr_21910_21972[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21833 === (8))){
var inst_21715 = (state_21832[(13)]);
var inst_21716 = (state_21832[(14)]);
var inst_21718 = (inst_21716 < inst_21715);
var inst_21719 = inst_21718;
var state_21832__$1 = state_21832;
if(cljs.core.truth_(inst_21719)){
var statearr_21911_21973 = state_21832__$1;
(statearr_21911_21973[(1)] = (10));

} else {
var statearr_21912_21974 = state_21832__$1;
(statearr_21912_21974[(1)] = (11));

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
});})(c__20613__auto___21920,cs,m,dchan,dctr,done))
;
return ((function (switch__20501__auto__,c__20613__auto___21920,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20502__auto__ = null;
var cljs$core$async$mult_$_state_machine__20502__auto____0 = (function (){
var statearr_21916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21916[(0)] = cljs$core$async$mult_$_state_machine__20502__auto__);

(statearr_21916[(1)] = (1));

return statearr_21916;
});
var cljs$core$async$mult_$_state_machine__20502__auto____1 = (function (state_21832){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_21832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e21917){if((e21917 instanceof Object)){
var ex__20505__auto__ = e21917;
var statearr_21918_21975 = state_21832;
(statearr_21918_21975[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21976 = state_21832;
state_21832 = G__21976;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20502__auto__ = function(state_21832){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20502__auto____1.call(this,state_21832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20502__auto____0;
cljs$core$async$mult_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20502__auto____1;
return cljs$core$async$mult_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___21920,cs,m,dchan,dctr,done))
})();
var state__20615__auto__ = (function (){var statearr_21919 = f__20614__auto__.call(null);
(statearr_21919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___21920);

return statearr_21919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___21920,cs,m,dchan,dctr,done))
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
var args21977 = [];
var len__19487__auto___21980 = arguments.length;
var i__19488__auto___21981 = (0);
while(true){
if((i__19488__auto___21981 < len__19487__auto___21980)){
args21977.push((arguments[i__19488__auto___21981]));

var G__21982 = (i__19488__auto___21981 + (1));
i__19488__auto___21981 = G__21982;
continue;
} else {
}
break;
}

var G__21979 = args21977.length;
switch (G__21979) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21977.length)].join('')));

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
var len__19487__auto___21994 = arguments.length;
var i__19488__auto___21995 = (0);
while(true){
if((i__19488__auto___21995 < len__19487__auto___21994)){
args__19494__auto__.push((arguments[i__19488__auto___21995]));

var G__21996 = (i__19488__auto___21995 + (1));
i__19488__auto___21995 = G__21996;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21988){
var map__21989 = p__21988;
var map__21989__$1 = ((((!((map__21989 == null)))?((((map__21989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21989):map__21989);
var opts = map__21989__$1;
var statearr_21991_21997 = state;
(statearr_21991_21997[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21989,map__21989__$1,opts){
return (function (val){
var statearr_21992_21998 = state;
(statearr_21992_21998[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21989,map__21989__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21993_21999 = state;
(statearr_21993_21999[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21984){
var G__21985 = cljs.core.first.call(null,seq21984);
var seq21984__$1 = cljs.core.next.call(null,seq21984);
var G__21986 = cljs.core.first.call(null,seq21984__$1);
var seq21984__$2 = cljs.core.next.call(null,seq21984__$1);
var G__21987 = cljs.core.first.call(null,seq21984__$2);
var seq21984__$3 = cljs.core.next.call(null,seq21984__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21985,G__21986,G__21987,seq21984__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22163 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22164){
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
this.meta22164 = meta22164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22165,meta22164__$1){
var self__ = this;
var _22165__$1 = this;
return (new cljs.core.async.t_cljs$core$async22163(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22164__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22165){
var self__ = this;
var _22165__$1 = this;
return self__.meta22164;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22163.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22164","meta22164",44135357,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22163";

cljs.core.async.t_cljs$core$async22163.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async22163");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22163 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22163(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22164){
return (new cljs.core.async.t_cljs$core$async22163(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22164));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22163(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20613__auto___22326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___22326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___22326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22263){
var state_val_22264 = (state_22263[(1)]);
if((state_val_22264 === (7))){
var inst_22181 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22265_22327 = state_22263__$1;
(statearr_22265_22327[(2)] = inst_22181);

(statearr_22265_22327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (20))){
var inst_22193 = (state_22263[(7)]);
var state_22263__$1 = state_22263;
var statearr_22266_22328 = state_22263__$1;
(statearr_22266_22328[(2)] = inst_22193);

(statearr_22266_22328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (27))){
var state_22263__$1 = state_22263;
var statearr_22267_22329 = state_22263__$1;
(statearr_22267_22329[(2)] = null);

(statearr_22267_22329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (1))){
var inst_22169 = (state_22263[(8)]);
var inst_22169__$1 = calc_state.call(null);
var inst_22171 = (inst_22169__$1 == null);
var inst_22172 = cljs.core.not.call(null,inst_22171);
var state_22263__$1 = (function (){var statearr_22268 = state_22263;
(statearr_22268[(8)] = inst_22169__$1);

return statearr_22268;
})();
if(inst_22172){
var statearr_22269_22330 = state_22263__$1;
(statearr_22269_22330[(1)] = (2));

} else {
var statearr_22270_22331 = state_22263__$1;
(statearr_22270_22331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (24))){
var inst_22237 = (state_22263[(9)]);
var inst_22223 = (state_22263[(10)]);
var inst_22216 = (state_22263[(11)]);
var inst_22237__$1 = inst_22216.call(null,inst_22223);
var state_22263__$1 = (function (){var statearr_22271 = state_22263;
(statearr_22271[(9)] = inst_22237__$1);

return statearr_22271;
})();
if(cljs.core.truth_(inst_22237__$1)){
var statearr_22272_22332 = state_22263__$1;
(statearr_22272_22332[(1)] = (29));

} else {
var statearr_22273_22333 = state_22263__$1;
(statearr_22273_22333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (4))){
var inst_22184 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22184)){
var statearr_22274_22334 = state_22263__$1;
(statearr_22274_22334[(1)] = (8));

} else {
var statearr_22275_22335 = state_22263__$1;
(statearr_22275_22335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (15))){
var inst_22210 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22210)){
var statearr_22276_22336 = state_22263__$1;
(statearr_22276_22336[(1)] = (19));

} else {
var statearr_22277_22337 = state_22263__$1;
(statearr_22277_22337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (21))){
var inst_22215 = (state_22263[(12)]);
var inst_22215__$1 = (state_22263[(2)]);
var inst_22216 = cljs.core.get.call(null,inst_22215__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22217 = cljs.core.get.call(null,inst_22215__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22218 = cljs.core.get.call(null,inst_22215__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22263__$1 = (function (){var statearr_22278 = state_22263;
(statearr_22278[(12)] = inst_22215__$1);

(statearr_22278[(11)] = inst_22216);

(statearr_22278[(13)] = inst_22217);

return statearr_22278;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22263__$1,(22),inst_22218);
} else {
if((state_val_22264 === (31))){
var inst_22245 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22245)){
var statearr_22279_22338 = state_22263__$1;
(statearr_22279_22338[(1)] = (32));

} else {
var statearr_22280_22339 = state_22263__$1;
(statearr_22280_22339[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (32))){
var inst_22222 = (state_22263[(14)]);
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22263__$1,(35),out,inst_22222);
} else {
if((state_val_22264 === (33))){
var inst_22215 = (state_22263[(12)]);
var inst_22193 = inst_22215;
var state_22263__$1 = (function (){var statearr_22281 = state_22263;
(statearr_22281[(7)] = inst_22193);

return statearr_22281;
})();
var statearr_22282_22340 = state_22263__$1;
(statearr_22282_22340[(2)] = null);

(statearr_22282_22340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (13))){
var inst_22193 = (state_22263[(7)]);
var inst_22200 = inst_22193.cljs$lang$protocol_mask$partition0$;
var inst_22201 = (inst_22200 & (64));
var inst_22202 = inst_22193.cljs$core$ISeq$;
var inst_22203 = (inst_22201) || (inst_22202);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22203)){
var statearr_22283_22341 = state_22263__$1;
(statearr_22283_22341[(1)] = (16));

} else {
var statearr_22284_22342 = state_22263__$1;
(statearr_22284_22342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (22))){
var inst_22223 = (state_22263[(10)]);
var inst_22222 = (state_22263[(14)]);
var inst_22221 = (state_22263[(2)]);
var inst_22222__$1 = cljs.core.nth.call(null,inst_22221,(0),null);
var inst_22223__$1 = cljs.core.nth.call(null,inst_22221,(1),null);
var inst_22224 = (inst_22222__$1 == null);
var inst_22225 = cljs.core._EQ_.call(null,inst_22223__$1,change);
var inst_22226 = (inst_22224) || (inst_22225);
var state_22263__$1 = (function (){var statearr_22285 = state_22263;
(statearr_22285[(10)] = inst_22223__$1);

(statearr_22285[(14)] = inst_22222__$1);

return statearr_22285;
})();
if(cljs.core.truth_(inst_22226)){
var statearr_22286_22343 = state_22263__$1;
(statearr_22286_22343[(1)] = (23));

} else {
var statearr_22287_22344 = state_22263__$1;
(statearr_22287_22344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (36))){
var inst_22215 = (state_22263[(12)]);
var inst_22193 = inst_22215;
var state_22263__$1 = (function (){var statearr_22288 = state_22263;
(statearr_22288[(7)] = inst_22193);

return statearr_22288;
})();
var statearr_22289_22345 = state_22263__$1;
(statearr_22289_22345[(2)] = null);

(statearr_22289_22345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (29))){
var inst_22237 = (state_22263[(9)]);
var state_22263__$1 = state_22263;
var statearr_22290_22346 = state_22263__$1;
(statearr_22290_22346[(2)] = inst_22237);

(statearr_22290_22346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (6))){
var state_22263__$1 = state_22263;
var statearr_22291_22347 = state_22263__$1;
(statearr_22291_22347[(2)] = false);

(statearr_22291_22347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (28))){
var inst_22233 = (state_22263[(2)]);
var inst_22234 = calc_state.call(null);
var inst_22193 = inst_22234;
var state_22263__$1 = (function (){var statearr_22292 = state_22263;
(statearr_22292[(7)] = inst_22193);

(statearr_22292[(15)] = inst_22233);

return statearr_22292;
})();
var statearr_22293_22348 = state_22263__$1;
(statearr_22293_22348[(2)] = null);

(statearr_22293_22348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (25))){
var inst_22259 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22294_22349 = state_22263__$1;
(statearr_22294_22349[(2)] = inst_22259);

(statearr_22294_22349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (34))){
var inst_22257 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22295_22350 = state_22263__$1;
(statearr_22295_22350[(2)] = inst_22257);

(statearr_22295_22350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (17))){
var state_22263__$1 = state_22263;
var statearr_22296_22351 = state_22263__$1;
(statearr_22296_22351[(2)] = false);

(statearr_22296_22351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (3))){
var state_22263__$1 = state_22263;
var statearr_22297_22352 = state_22263__$1;
(statearr_22297_22352[(2)] = false);

(statearr_22297_22352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (12))){
var inst_22261 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22263__$1,inst_22261);
} else {
if((state_val_22264 === (2))){
var inst_22169 = (state_22263[(8)]);
var inst_22174 = inst_22169.cljs$lang$protocol_mask$partition0$;
var inst_22175 = (inst_22174 & (64));
var inst_22176 = inst_22169.cljs$core$ISeq$;
var inst_22177 = (inst_22175) || (inst_22176);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22177)){
var statearr_22298_22353 = state_22263__$1;
(statearr_22298_22353[(1)] = (5));

} else {
var statearr_22299_22354 = state_22263__$1;
(statearr_22299_22354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (23))){
var inst_22222 = (state_22263[(14)]);
var inst_22228 = (inst_22222 == null);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22228)){
var statearr_22300_22355 = state_22263__$1;
(statearr_22300_22355[(1)] = (26));

} else {
var statearr_22301_22356 = state_22263__$1;
(statearr_22301_22356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (35))){
var inst_22248 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
if(cljs.core.truth_(inst_22248)){
var statearr_22302_22357 = state_22263__$1;
(statearr_22302_22357[(1)] = (36));

} else {
var statearr_22303_22358 = state_22263__$1;
(statearr_22303_22358[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (19))){
var inst_22193 = (state_22263[(7)]);
var inst_22212 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22193);
var state_22263__$1 = state_22263;
var statearr_22304_22359 = state_22263__$1;
(statearr_22304_22359[(2)] = inst_22212);

(statearr_22304_22359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (11))){
var inst_22193 = (state_22263[(7)]);
var inst_22197 = (inst_22193 == null);
var inst_22198 = cljs.core.not.call(null,inst_22197);
var state_22263__$1 = state_22263;
if(inst_22198){
var statearr_22305_22360 = state_22263__$1;
(statearr_22305_22360[(1)] = (13));

} else {
var statearr_22306_22361 = state_22263__$1;
(statearr_22306_22361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (9))){
var inst_22169 = (state_22263[(8)]);
var state_22263__$1 = state_22263;
var statearr_22307_22362 = state_22263__$1;
(statearr_22307_22362[(2)] = inst_22169);

(statearr_22307_22362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (5))){
var state_22263__$1 = state_22263;
var statearr_22308_22363 = state_22263__$1;
(statearr_22308_22363[(2)] = true);

(statearr_22308_22363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (14))){
var state_22263__$1 = state_22263;
var statearr_22309_22364 = state_22263__$1;
(statearr_22309_22364[(2)] = false);

(statearr_22309_22364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (26))){
var inst_22223 = (state_22263[(10)]);
var inst_22230 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22223);
var state_22263__$1 = state_22263;
var statearr_22310_22365 = state_22263__$1;
(statearr_22310_22365[(2)] = inst_22230);

(statearr_22310_22365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (16))){
var state_22263__$1 = state_22263;
var statearr_22311_22366 = state_22263__$1;
(statearr_22311_22366[(2)] = true);

(statearr_22311_22366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (38))){
var inst_22253 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22312_22367 = state_22263__$1;
(statearr_22312_22367[(2)] = inst_22253);

(statearr_22312_22367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (30))){
var inst_22223 = (state_22263[(10)]);
var inst_22216 = (state_22263[(11)]);
var inst_22217 = (state_22263[(13)]);
var inst_22240 = cljs.core.empty_QMARK_.call(null,inst_22216);
var inst_22241 = inst_22217.call(null,inst_22223);
var inst_22242 = cljs.core.not.call(null,inst_22241);
var inst_22243 = (inst_22240) && (inst_22242);
var state_22263__$1 = state_22263;
var statearr_22313_22368 = state_22263__$1;
(statearr_22313_22368[(2)] = inst_22243);

(statearr_22313_22368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (10))){
var inst_22169 = (state_22263[(8)]);
var inst_22189 = (state_22263[(2)]);
var inst_22190 = cljs.core.get.call(null,inst_22189,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22191 = cljs.core.get.call(null,inst_22189,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22192 = cljs.core.get.call(null,inst_22189,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22193 = inst_22169;
var state_22263__$1 = (function (){var statearr_22314 = state_22263;
(statearr_22314[(16)] = inst_22190);

(statearr_22314[(7)] = inst_22193);

(statearr_22314[(17)] = inst_22191);

(statearr_22314[(18)] = inst_22192);

return statearr_22314;
})();
var statearr_22315_22369 = state_22263__$1;
(statearr_22315_22369[(2)] = null);

(statearr_22315_22369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (18))){
var inst_22207 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22316_22370 = state_22263__$1;
(statearr_22316_22370[(2)] = inst_22207);

(statearr_22316_22370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (37))){
var state_22263__$1 = state_22263;
var statearr_22317_22371 = state_22263__$1;
(statearr_22317_22371[(2)] = null);

(statearr_22317_22371[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (8))){
var inst_22169 = (state_22263[(8)]);
var inst_22186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22169);
var state_22263__$1 = state_22263;
var statearr_22318_22372 = state_22263__$1;
(statearr_22318_22372[(2)] = inst_22186);

(statearr_22318_22372[(1)] = (10));


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
});})(c__20613__auto___22326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20501__auto__,c__20613__auto___22326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20502__auto__ = null;
var cljs$core$async$mix_$_state_machine__20502__auto____0 = (function (){
var statearr_22322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22322[(0)] = cljs$core$async$mix_$_state_machine__20502__auto__);

(statearr_22322[(1)] = (1));

return statearr_22322;
});
var cljs$core$async$mix_$_state_machine__20502__auto____1 = (function (state_22263){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_22263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e22323){if((e22323 instanceof Object)){
var ex__20505__auto__ = e22323;
var statearr_22324_22373 = state_22263;
(statearr_22324_22373[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22374 = state_22263;
state_22263 = G__22374;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20502__auto__ = function(state_22263){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20502__auto____1.call(this,state_22263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20502__auto____0;
cljs$core$async$mix_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20502__auto____1;
return cljs$core$async$mix_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___22326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20615__auto__ = (function (){var statearr_22325 = f__20614__auto__.call(null);
(statearr_22325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___22326);

return statearr_22325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___22326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args22375 = [];
var len__19487__auto___22378 = arguments.length;
var i__19488__auto___22379 = (0);
while(true){
if((i__19488__auto___22379 < len__19487__auto___22378)){
args22375.push((arguments[i__19488__auto___22379]));

var G__22380 = (i__19488__auto___22379 + (1));
i__19488__auto___22379 = G__22380;
continue;
} else {
}
break;
}

var G__22377 = args22375.length;
switch (G__22377) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22375.length)].join('')));

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
var args22383 = [];
var len__19487__auto___22508 = arguments.length;
var i__19488__auto___22509 = (0);
while(true){
if((i__19488__auto___22509 < len__19487__auto___22508)){
args22383.push((arguments[i__19488__auto___22509]));

var G__22510 = (i__19488__auto___22509 + (1));
i__19488__auto___22509 = G__22510;
continue;
} else {
}
break;
}

var G__22385 = args22383.length;
switch (G__22385) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22383.length)].join('')));

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
return (function (p1__22382_SHARP_){
if(cljs.core.truth_(p1__22382_SHARP_.call(null,topic))){
return p1__22382_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22382_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18417__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22386 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22387){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22387 = meta22387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22388,meta22387__$1){
var self__ = this;
var _22388__$1 = this;
return (new cljs.core.async.t_cljs$core$async22386(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22387__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22388){
var self__ = this;
var _22388__$1 = this;
return self__.meta22387;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22386.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22387","meta22387",1385294784,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22386";

cljs.core.async.t_cljs$core$async22386.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async22386");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22386 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22386(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22387){
return (new cljs.core.async.t_cljs$core$async22386(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22387));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22386(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20613__auto___22512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___22512,mults,ensure_mult,p){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___22512,mults,ensure_mult,p){
return (function (state_22460){
var state_val_22461 = (state_22460[(1)]);
if((state_val_22461 === (7))){
var inst_22456 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
var statearr_22462_22513 = state_22460__$1;
(statearr_22462_22513[(2)] = inst_22456);

(statearr_22462_22513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (20))){
var state_22460__$1 = state_22460;
var statearr_22463_22514 = state_22460__$1;
(statearr_22463_22514[(2)] = null);

(statearr_22463_22514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (1))){
var state_22460__$1 = state_22460;
var statearr_22464_22515 = state_22460__$1;
(statearr_22464_22515[(2)] = null);

(statearr_22464_22515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (24))){
var inst_22439 = (state_22460[(7)]);
var inst_22448 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22439);
var state_22460__$1 = state_22460;
var statearr_22465_22516 = state_22460__$1;
(statearr_22465_22516[(2)] = inst_22448);

(statearr_22465_22516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (4))){
var inst_22391 = (state_22460[(8)]);
var inst_22391__$1 = (state_22460[(2)]);
var inst_22392 = (inst_22391__$1 == null);
var state_22460__$1 = (function (){var statearr_22466 = state_22460;
(statearr_22466[(8)] = inst_22391__$1);

return statearr_22466;
})();
if(cljs.core.truth_(inst_22392)){
var statearr_22467_22517 = state_22460__$1;
(statearr_22467_22517[(1)] = (5));

} else {
var statearr_22468_22518 = state_22460__$1;
(statearr_22468_22518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (15))){
var inst_22433 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
var statearr_22469_22519 = state_22460__$1;
(statearr_22469_22519[(2)] = inst_22433);

(statearr_22469_22519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (21))){
var inst_22453 = (state_22460[(2)]);
var state_22460__$1 = (function (){var statearr_22470 = state_22460;
(statearr_22470[(9)] = inst_22453);

return statearr_22470;
})();
var statearr_22471_22520 = state_22460__$1;
(statearr_22471_22520[(2)] = null);

(statearr_22471_22520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (13))){
var inst_22415 = (state_22460[(10)]);
var inst_22417 = cljs.core.chunked_seq_QMARK_.call(null,inst_22415);
var state_22460__$1 = state_22460;
if(inst_22417){
var statearr_22472_22521 = state_22460__$1;
(statearr_22472_22521[(1)] = (16));

} else {
var statearr_22473_22522 = state_22460__$1;
(statearr_22473_22522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (22))){
var inst_22445 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
if(cljs.core.truth_(inst_22445)){
var statearr_22474_22523 = state_22460__$1;
(statearr_22474_22523[(1)] = (23));

} else {
var statearr_22475_22524 = state_22460__$1;
(statearr_22475_22524[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (6))){
var inst_22439 = (state_22460[(7)]);
var inst_22391 = (state_22460[(8)]);
var inst_22441 = (state_22460[(11)]);
var inst_22439__$1 = topic_fn.call(null,inst_22391);
var inst_22440 = cljs.core.deref.call(null,mults);
var inst_22441__$1 = cljs.core.get.call(null,inst_22440,inst_22439__$1);
var state_22460__$1 = (function (){var statearr_22476 = state_22460;
(statearr_22476[(7)] = inst_22439__$1);

(statearr_22476[(11)] = inst_22441__$1);

return statearr_22476;
})();
if(cljs.core.truth_(inst_22441__$1)){
var statearr_22477_22525 = state_22460__$1;
(statearr_22477_22525[(1)] = (19));

} else {
var statearr_22478_22526 = state_22460__$1;
(statearr_22478_22526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (25))){
var inst_22450 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
var statearr_22479_22527 = state_22460__$1;
(statearr_22479_22527[(2)] = inst_22450);

(statearr_22479_22527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (17))){
var inst_22415 = (state_22460[(10)]);
var inst_22424 = cljs.core.first.call(null,inst_22415);
var inst_22425 = cljs.core.async.muxch_STAR_.call(null,inst_22424);
var inst_22426 = cljs.core.async.close_BANG_.call(null,inst_22425);
var inst_22427 = cljs.core.next.call(null,inst_22415);
var inst_22401 = inst_22427;
var inst_22402 = null;
var inst_22403 = (0);
var inst_22404 = (0);
var state_22460__$1 = (function (){var statearr_22480 = state_22460;
(statearr_22480[(12)] = inst_22403);

(statearr_22480[(13)] = inst_22401);

(statearr_22480[(14)] = inst_22402);

(statearr_22480[(15)] = inst_22404);

(statearr_22480[(16)] = inst_22426);

return statearr_22480;
})();
var statearr_22481_22528 = state_22460__$1;
(statearr_22481_22528[(2)] = null);

(statearr_22481_22528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (3))){
var inst_22458 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22460__$1,inst_22458);
} else {
if((state_val_22461 === (12))){
var inst_22435 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
var statearr_22482_22529 = state_22460__$1;
(statearr_22482_22529[(2)] = inst_22435);

(statearr_22482_22529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (2))){
var state_22460__$1 = state_22460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22460__$1,(4),ch);
} else {
if((state_val_22461 === (23))){
var state_22460__$1 = state_22460;
var statearr_22483_22530 = state_22460__$1;
(statearr_22483_22530[(2)] = null);

(statearr_22483_22530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (19))){
var inst_22391 = (state_22460[(8)]);
var inst_22441 = (state_22460[(11)]);
var inst_22443 = cljs.core.async.muxch_STAR_.call(null,inst_22441);
var state_22460__$1 = state_22460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22460__$1,(22),inst_22443,inst_22391);
} else {
if((state_val_22461 === (11))){
var inst_22401 = (state_22460[(13)]);
var inst_22415 = (state_22460[(10)]);
var inst_22415__$1 = cljs.core.seq.call(null,inst_22401);
var state_22460__$1 = (function (){var statearr_22484 = state_22460;
(statearr_22484[(10)] = inst_22415__$1);

return statearr_22484;
})();
if(inst_22415__$1){
var statearr_22485_22531 = state_22460__$1;
(statearr_22485_22531[(1)] = (13));

} else {
var statearr_22486_22532 = state_22460__$1;
(statearr_22486_22532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (9))){
var inst_22437 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
var statearr_22487_22533 = state_22460__$1;
(statearr_22487_22533[(2)] = inst_22437);

(statearr_22487_22533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (5))){
var inst_22398 = cljs.core.deref.call(null,mults);
var inst_22399 = cljs.core.vals.call(null,inst_22398);
var inst_22400 = cljs.core.seq.call(null,inst_22399);
var inst_22401 = inst_22400;
var inst_22402 = null;
var inst_22403 = (0);
var inst_22404 = (0);
var state_22460__$1 = (function (){var statearr_22488 = state_22460;
(statearr_22488[(12)] = inst_22403);

(statearr_22488[(13)] = inst_22401);

(statearr_22488[(14)] = inst_22402);

(statearr_22488[(15)] = inst_22404);

return statearr_22488;
})();
var statearr_22489_22534 = state_22460__$1;
(statearr_22489_22534[(2)] = null);

(statearr_22489_22534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (14))){
var state_22460__$1 = state_22460;
var statearr_22493_22535 = state_22460__$1;
(statearr_22493_22535[(2)] = null);

(statearr_22493_22535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (16))){
var inst_22415 = (state_22460[(10)]);
var inst_22419 = cljs.core.chunk_first.call(null,inst_22415);
var inst_22420 = cljs.core.chunk_rest.call(null,inst_22415);
var inst_22421 = cljs.core.count.call(null,inst_22419);
var inst_22401 = inst_22420;
var inst_22402 = inst_22419;
var inst_22403 = inst_22421;
var inst_22404 = (0);
var state_22460__$1 = (function (){var statearr_22494 = state_22460;
(statearr_22494[(12)] = inst_22403);

(statearr_22494[(13)] = inst_22401);

(statearr_22494[(14)] = inst_22402);

(statearr_22494[(15)] = inst_22404);

return statearr_22494;
})();
var statearr_22495_22536 = state_22460__$1;
(statearr_22495_22536[(2)] = null);

(statearr_22495_22536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (10))){
var inst_22403 = (state_22460[(12)]);
var inst_22401 = (state_22460[(13)]);
var inst_22402 = (state_22460[(14)]);
var inst_22404 = (state_22460[(15)]);
var inst_22409 = cljs.core._nth.call(null,inst_22402,inst_22404);
var inst_22410 = cljs.core.async.muxch_STAR_.call(null,inst_22409);
var inst_22411 = cljs.core.async.close_BANG_.call(null,inst_22410);
var inst_22412 = (inst_22404 + (1));
var tmp22490 = inst_22403;
var tmp22491 = inst_22401;
var tmp22492 = inst_22402;
var inst_22401__$1 = tmp22491;
var inst_22402__$1 = tmp22492;
var inst_22403__$1 = tmp22490;
var inst_22404__$1 = inst_22412;
var state_22460__$1 = (function (){var statearr_22496 = state_22460;
(statearr_22496[(12)] = inst_22403__$1);

(statearr_22496[(13)] = inst_22401__$1);

(statearr_22496[(17)] = inst_22411);

(statearr_22496[(14)] = inst_22402__$1);

(statearr_22496[(15)] = inst_22404__$1);

return statearr_22496;
})();
var statearr_22497_22537 = state_22460__$1;
(statearr_22497_22537[(2)] = null);

(statearr_22497_22537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (18))){
var inst_22430 = (state_22460[(2)]);
var state_22460__$1 = state_22460;
var statearr_22498_22538 = state_22460__$1;
(statearr_22498_22538[(2)] = inst_22430);

(statearr_22498_22538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22461 === (8))){
var inst_22403 = (state_22460[(12)]);
var inst_22404 = (state_22460[(15)]);
var inst_22406 = (inst_22404 < inst_22403);
var inst_22407 = inst_22406;
var state_22460__$1 = state_22460;
if(cljs.core.truth_(inst_22407)){
var statearr_22499_22539 = state_22460__$1;
(statearr_22499_22539[(1)] = (10));

} else {
var statearr_22500_22540 = state_22460__$1;
(statearr_22500_22540[(1)] = (11));

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
});})(c__20613__auto___22512,mults,ensure_mult,p))
;
return ((function (switch__20501__auto__,c__20613__auto___22512,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_22504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22504[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_22504[(1)] = (1));

return statearr_22504;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_22460){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_22460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e22505){if((e22505 instanceof Object)){
var ex__20505__auto__ = e22505;
var statearr_22506_22541 = state_22460;
(statearr_22506_22541[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22542 = state_22460;
state_22460 = G__22542;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_22460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_22460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___22512,mults,ensure_mult,p))
})();
var state__20615__auto__ = (function (){var statearr_22507 = f__20614__auto__.call(null);
(statearr_22507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___22512);

return statearr_22507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___22512,mults,ensure_mult,p))
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
var args22543 = [];
var len__19487__auto___22546 = arguments.length;
var i__19488__auto___22547 = (0);
while(true){
if((i__19488__auto___22547 < len__19487__auto___22546)){
args22543.push((arguments[i__19488__auto___22547]));

var G__22548 = (i__19488__auto___22547 + (1));
i__19488__auto___22547 = G__22548;
continue;
} else {
}
break;
}

var G__22545 = args22543.length;
switch (G__22545) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22543.length)].join('')));

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
var args22550 = [];
var len__19487__auto___22553 = arguments.length;
var i__19488__auto___22554 = (0);
while(true){
if((i__19488__auto___22554 < len__19487__auto___22553)){
args22550.push((arguments[i__19488__auto___22554]));

var G__22555 = (i__19488__auto___22554 + (1));
i__19488__auto___22554 = G__22555;
continue;
} else {
}
break;
}

var G__22552 = args22550.length;
switch (G__22552) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22550.length)].join('')));

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
var args22557 = [];
var len__19487__auto___22628 = arguments.length;
var i__19488__auto___22629 = (0);
while(true){
if((i__19488__auto___22629 < len__19487__auto___22628)){
args22557.push((arguments[i__19488__auto___22629]));

var G__22630 = (i__19488__auto___22629 + (1));
i__19488__auto___22629 = G__22630;
continue;
} else {
}
break;
}

var G__22559 = args22557.length;
switch (G__22559) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22557.length)].join('')));

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
var c__20613__auto___22632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___22632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___22632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22598){
var state_val_22599 = (state_22598[(1)]);
if((state_val_22599 === (7))){
var state_22598__$1 = state_22598;
var statearr_22600_22633 = state_22598__$1;
(statearr_22600_22633[(2)] = null);

(statearr_22600_22633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (1))){
var state_22598__$1 = state_22598;
var statearr_22601_22634 = state_22598__$1;
(statearr_22601_22634[(2)] = null);

(statearr_22601_22634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (4))){
var inst_22562 = (state_22598[(7)]);
var inst_22564 = (inst_22562 < cnt);
var state_22598__$1 = state_22598;
if(cljs.core.truth_(inst_22564)){
var statearr_22602_22635 = state_22598__$1;
(statearr_22602_22635[(1)] = (6));

} else {
var statearr_22603_22636 = state_22598__$1;
(statearr_22603_22636[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (15))){
var inst_22594 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22604_22637 = state_22598__$1;
(statearr_22604_22637[(2)] = inst_22594);

(statearr_22604_22637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (13))){
var inst_22587 = cljs.core.async.close_BANG_.call(null,out);
var state_22598__$1 = state_22598;
var statearr_22605_22638 = state_22598__$1;
(statearr_22605_22638[(2)] = inst_22587);

(statearr_22605_22638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (6))){
var state_22598__$1 = state_22598;
var statearr_22606_22639 = state_22598__$1;
(statearr_22606_22639[(2)] = null);

(statearr_22606_22639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (3))){
var inst_22596 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22598__$1,inst_22596);
} else {
if((state_val_22599 === (12))){
var inst_22584 = (state_22598[(8)]);
var inst_22584__$1 = (state_22598[(2)]);
var inst_22585 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22584__$1);
var state_22598__$1 = (function (){var statearr_22607 = state_22598;
(statearr_22607[(8)] = inst_22584__$1);

return statearr_22607;
})();
if(cljs.core.truth_(inst_22585)){
var statearr_22608_22640 = state_22598__$1;
(statearr_22608_22640[(1)] = (13));

} else {
var statearr_22609_22641 = state_22598__$1;
(statearr_22609_22641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (2))){
var inst_22561 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22562 = (0);
var state_22598__$1 = (function (){var statearr_22610 = state_22598;
(statearr_22610[(9)] = inst_22561);

(statearr_22610[(7)] = inst_22562);

return statearr_22610;
})();
var statearr_22611_22642 = state_22598__$1;
(statearr_22611_22642[(2)] = null);

(statearr_22611_22642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (11))){
var inst_22562 = (state_22598[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22598,(10),Object,null,(9));
var inst_22571 = chs__$1.call(null,inst_22562);
var inst_22572 = done.call(null,inst_22562);
var inst_22573 = cljs.core.async.take_BANG_.call(null,inst_22571,inst_22572);
var state_22598__$1 = state_22598;
var statearr_22612_22643 = state_22598__$1;
(statearr_22612_22643[(2)] = inst_22573);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (9))){
var inst_22562 = (state_22598[(7)]);
var inst_22575 = (state_22598[(2)]);
var inst_22576 = (inst_22562 + (1));
var inst_22562__$1 = inst_22576;
var state_22598__$1 = (function (){var statearr_22613 = state_22598;
(statearr_22613[(7)] = inst_22562__$1);

(statearr_22613[(10)] = inst_22575);

return statearr_22613;
})();
var statearr_22614_22644 = state_22598__$1;
(statearr_22614_22644[(2)] = null);

(statearr_22614_22644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (5))){
var inst_22582 = (state_22598[(2)]);
var state_22598__$1 = (function (){var statearr_22615 = state_22598;
(statearr_22615[(11)] = inst_22582);

return statearr_22615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22598__$1,(12),dchan);
} else {
if((state_val_22599 === (14))){
var inst_22584 = (state_22598[(8)]);
var inst_22589 = cljs.core.apply.call(null,f,inst_22584);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22598__$1,(16),out,inst_22589);
} else {
if((state_val_22599 === (16))){
var inst_22591 = (state_22598[(2)]);
var state_22598__$1 = (function (){var statearr_22616 = state_22598;
(statearr_22616[(12)] = inst_22591);

return statearr_22616;
})();
var statearr_22617_22645 = state_22598__$1;
(statearr_22617_22645[(2)] = null);

(statearr_22617_22645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (10))){
var inst_22566 = (state_22598[(2)]);
var inst_22567 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22598__$1 = (function (){var statearr_22618 = state_22598;
(statearr_22618[(13)] = inst_22566);

return statearr_22618;
})();
var statearr_22619_22646 = state_22598__$1;
(statearr_22619_22646[(2)] = inst_22567);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (8))){
var inst_22580 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22620_22647 = state_22598__$1;
(statearr_22620_22647[(2)] = inst_22580);

(statearr_22620_22647[(1)] = (5));


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
});})(c__20613__auto___22632,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20501__auto__,c__20613__auto___22632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_22624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22624[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_22624[(1)] = (1));

return statearr_22624;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_22598){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_22598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e22625){if((e22625 instanceof Object)){
var ex__20505__auto__ = e22625;
var statearr_22626_22648 = state_22598;
(statearr_22626_22648[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22649 = state_22598;
state_22598 = G__22649;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_22598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_22598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___22632,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20615__auto__ = (function (){var statearr_22627 = f__20614__auto__.call(null);
(statearr_22627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___22632);

return statearr_22627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___22632,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22651 = [];
var len__19487__auto___22707 = arguments.length;
var i__19488__auto___22708 = (0);
while(true){
if((i__19488__auto___22708 < len__19487__auto___22707)){
args22651.push((arguments[i__19488__auto___22708]));

var G__22709 = (i__19488__auto___22708 + (1));
i__19488__auto___22708 = G__22709;
continue;
} else {
}
break;
}

var G__22653 = args22651.length;
switch (G__22653) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22651.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___22711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___22711,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___22711,out){
return (function (state_22683){
var state_val_22684 = (state_22683[(1)]);
if((state_val_22684 === (7))){
var inst_22663 = (state_22683[(7)]);
var inst_22662 = (state_22683[(8)]);
var inst_22662__$1 = (state_22683[(2)]);
var inst_22663__$1 = cljs.core.nth.call(null,inst_22662__$1,(0),null);
var inst_22664 = cljs.core.nth.call(null,inst_22662__$1,(1),null);
var inst_22665 = (inst_22663__$1 == null);
var state_22683__$1 = (function (){var statearr_22685 = state_22683;
(statearr_22685[(9)] = inst_22664);

(statearr_22685[(7)] = inst_22663__$1);

(statearr_22685[(8)] = inst_22662__$1);

return statearr_22685;
})();
if(cljs.core.truth_(inst_22665)){
var statearr_22686_22712 = state_22683__$1;
(statearr_22686_22712[(1)] = (8));

} else {
var statearr_22687_22713 = state_22683__$1;
(statearr_22687_22713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (1))){
var inst_22654 = cljs.core.vec.call(null,chs);
var inst_22655 = inst_22654;
var state_22683__$1 = (function (){var statearr_22688 = state_22683;
(statearr_22688[(10)] = inst_22655);

return statearr_22688;
})();
var statearr_22689_22714 = state_22683__$1;
(statearr_22689_22714[(2)] = null);

(statearr_22689_22714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (4))){
var inst_22655 = (state_22683[(10)]);
var state_22683__$1 = state_22683;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22683__$1,(7),inst_22655);
} else {
if((state_val_22684 === (6))){
var inst_22679 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
var statearr_22690_22715 = state_22683__$1;
(statearr_22690_22715[(2)] = inst_22679);

(statearr_22690_22715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (3))){
var inst_22681 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22683__$1,inst_22681);
} else {
if((state_val_22684 === (2))){
var inst_22655 = (state_22683[(10)]);
var inst_22657 = cljs.core.count.call(null,inst_22655);
var inst_22658 = (inst_22657 > (0));
var state_22683__$1 = state_22683;
if(cljs.core.truth_(inst_22658)){
var statearr_22692_22716 = state_22683__$1;
(statearr_22692_22716[(1)] = (4));

} else {
var statearr_22693_22717 = state_22683__$1;
(statearr_22693_22717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (11))){
var inst_22655 = (state_22683[(10)]);
var inst_22672 = (state_22683[(2)]);
var tmp22691 = inst_22655;
var inst_22655__$1 = tmp22691;
var state_22683__$1 = (function (){var statearr_22694 = state_22683;
(statearr_22694[(10)] = inst_22655__$1);

(statearr_22694[(11)] = inst_22672);

return statearr_22694;
})();
var statearr_22695_22718 = state_22683__$1;
(statearr_22695_22718[(2)] = null);

(statearr_22695_22718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (9))){
var inst_22663 = (state_22683[(7)]);
var state_22683__$1 = state_22683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22683__$1,(11),out,inst_22663);
} else {
if((state_val_22684 === (5))){
var inst_22677 = cljs.core.async.close_BANG_.call(null,out);
var state_22683__$1 = state_22683;
var statearr_22696_22719 = state_22683__$1;
(statearr_22696_22719[(2)] = inst_22677);

(statearr_22696_22719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (10))){
var inst_22675 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
var statearr_22697_22720 = state_22683__$1;
(statearr_22697_22720[(2)] = inst_22675);

(statearr_22697_22720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (8))){
var inst_22655 = (state_22683[(10)]);
var inst_22664 = (state_22683[(9)]);
var inst_22663 = (state_22683[(7)]);
var inst_22662 = (state_22683[(8)]);
var inst_22667 = (function (){var cs = inst_22655;
var vec__22660 = inst_22662;
var v = inst_22663;
var c = inst_22664;
return ((function (cs,vec__22660,v,c,inst_22655,inst_22664,inst_22663,inst_22662,state_val_22684,c__20613__auto___22711,out){
return (function (p1__22650_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22650_SHARP_);
});
;})(cs,vec__22660,v,c,inst_22655,inst_22664,inst_22663,inst_22662,state_val_22684,c__20613__auto___22711,out))
})();
var inst_22668 = cljs.core.filterv.call(null,inst_22667,inst_22655);
var inst_22655__$1 = inst_22668;
var state_22683__$1 = (function (){var statearr_22698 = state_22683;
(statearr_22698[(10)] = inst_22655__$1);

return statearr_22698;
})();
var statearr_22699_22721 = state_22683__$1;
(statearr_22699_22721[(2)] = null);

(statearr_22699_22721[(1)] = (2));


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
});})(c__20613__auto___22711,out))
;
return ((function (switch__20501__auto__,c__20613__auto___22711,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_22703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22703[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_22703[(1)] = (1));

return statearr_22703;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_22683){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_22683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e22704){if((e22704 instanceof Object)){
var ex__20505__auto__ = e22704;
var statearr_22705_22722 = state_22683;
(statearr_22705_22722[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22723 = state_22683;
state_22683 = G__22723;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_22683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_22683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___22711,out))
})();
var state__20615__auto__ = (function (){var statearr_22706 = f__20614__auto__.call(null);
(statearr_22706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___22711);

return statearr_22706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___22711,out))
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
var args22724 = [];
var len__19487__auto___22773 = arguments.length;
var i__19488__auto___22774 = (0);
while(true){
if((i__19488__auto___22774 < len__19487__auto___22773)){
args22724.push((arguments[i__19488__auto___22774]));

var G__22775 = (i__19488__auto___22774 + (1));
i__19488__auto___22774 = G__22775;
continue;
} else {
}
break;
}

var G__22726 = args22724.length;
switch (G__22726) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22724.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___22777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___22777,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___22777,out){
return (function (state_22750){
var state_val_22751 = (state_22750[(1)]);
if((state_val_22751 === (7))){
var inst_22732 = (state_22750[(7)]);
var inst_22732__$1 = (state_22750[(2)]);
var inst_22733 = (inst_22732__$1 == null);
var inst_22734 = cljs.core.not.call(null,inst_22733);
var state_22750__$1 = (function (){var statearr_22752 = state_22750;
(statearr_22752[(7)] = inst_22732__$1);

return statearr_22752;
})();
if(inst_22734){
var statearr_22753_22778 = state_22750__$1;
(statearr_22753_22778[(1)] = (8));

} else {
var statearr_22754_22779 = state_22750__$1;
(statearr_22754_22779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (1))){
var inst_22727 = (0);
var state_22750__$1 = (function (){var statearr_22755 = state_22750;
(statearr_22755[(8)] = inst_22727);

return statearr_22755;
})();
var statearr_22756_22780 = state_22750__$1;
(statearr_22756_22780[(2)] = null);

(statearr_22756_22780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (4))){
var state_22750__$1 = state_22750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22750__$1,(7),ch);
} else {
if((state_val_22751 === (6))){
var inst_22745 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22757_22781 = state_22750__$1;
(statearr_22757_22781[(2)] = inst_22745);

(statearr_22757_22781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (3))){
var inst_22747 = (state_22750[(2)]);
var inst_22748 = cljs.core.async.close_BANG_.call(null,out);
var state_22750__$1 = (function (){var statearr_22758 = state_22750;
(statearr_22758[(9)] = inst_22747);

return statearr_22758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22750__$1,inst_22748);
} else {
if((state_val_22751 === (2))){
var inst_22727 = (state_22750[(8)]);
var inst_22729 = (inst_22727 < n);
var state_22750__$1 = state_22750;
if(cljs.core.truth_(inst_22729)){
var statearr_22759_22782 = state_22750__$1;
(statearr_22759_22782[(1)] = (4));

} else {
var statearr_22760_22783 = state_22750__$1;
(statearr_22760_22783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (11))){
var inst_22727 = (state_22750[(8)]);
var inst_22737 = (state_22750[(2)]);
var inst_22738 = (inst_22727 + (1));
var inst_22727__$1 = inst_22738;
var state_22750__$1 = (function (){var statearr_22761 = state_22750;
(statearr_22761[(8)] = inst_22727__$1);

(statearr_22761[(10)] = inst_22737);

return statearr_22761;
})();
var statearr_22762_22784 = state_22750__$1;
(statearr_22762_22784[(2)] = null);

(statearr_22762_22784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (9))){
var state_22750__$1 = state_22750;
var statearr_22763_22785 = state_22750__$1;
(statearr_22763_22785[(2)] = null);

(statearr_22763_22785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (5))){
var state_22750__$1 = state_22750;
var statearr_22764_22786 = state_22750__$1;
(statearr_22764_22786[(2)] = null);

(statearr_22764_22786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (10))){
var inst_22742 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22765_22787 = state_22750__$1;
(statearr_22765_22787[(2)] = inst_22742);

(statearr_22765_22787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (8))){
var inst_22732 = (state_22750[(7)]);
var state_22750__$1 = state_22750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22750__$1,(11),out,inst_22732);
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
});})(c__20613__auto___22777,out))
;
return ((function (switch__20501__auto__,c__20613__auto___22777,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_22769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22769[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_22769[(1)] = (1));

return statearr_22769;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_22750){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_22750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e22770){if((e22770 instanceof Object)){
var ex__20505__auto__ = e22770;
var statearr_22771_22788 = state_22750;
(statearr_22771_22788[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22789 = state_22750;
state_22750 = G__22789;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_22750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_22750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___22777,out))
})();
var state__20615__auto__ = (function (){var statearr_22772 = f__20614__auto__.call(null);
(statearr_22772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___22777);

return statearr_22772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___22777,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22797 = (function (map_LT_,f,ch,meta22798){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22798 = meta22798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22799,meta22798__$1){
var self__ = this;
var _22799__$1 = this;
return (new cljs.core.async.t_cljs$core$async22797(self__.map_LT_,self__.f,self__.ch,meta22798__$1));
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22799){
var self__ = this;
var _22799__$1 = this;
return self__.meta22798;
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22800 = (function (map_LT_,f,ch,meta22798,_,fn1,meta22801){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22798 = meta22798;
this._ = _;
this.fn1 = fn1;
this.meta22801 = meta22801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22802,meta22801__$1){
var self__ = this;
var _22802__$1 = this;
return (new cljs.core.async.t_cljs$core$async22800(self__.map_LT_,self__.f,self__.ch,self__.meta22798,self__._,self__.fn1,meta22801__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22802){
var self__ = this;
var _22802__$1 = this;
return self__.meta22801;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22790_SHARP_){
return f1.call(null,(((p1__22790_SHARP_ == null))?null:self__.f.call(null,p1__22790_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22800.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22798","meta22798",1001965873,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22797","cljs.core.async/t_cljs$core$async22797",67644031,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22801","meta22801",-1074908560,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22800";

cljs.core.async.t_cljs$core$async22800.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async22800");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22800 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22800(map_LT___$1,f__$1,ch__$1,meta22798__$1,___$2,fn1__$1,meta22801){
return (new cljs.core.async.t_cljs$core$async22800(map_LT___$1,f__$1,ch__$1,meta22798__$1,___$2,fn1__$1,meta22801));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22800(self__.map_LT_,self__.f,self__.ch,self__.meta22798,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22798","meta22798",1001965873,null)], null);
});

cljs.core.async.t_cljs$core$async22797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22797";

cljs.core.async.t_cljs$core$async22797.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async22797");
});

cljs.core.async.__GT_t_cljs$core$async22797 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22797(map_LT___$1,f__$1,ch__$1,meta22798){
return (new cljs.core.async.t_cljs$core$async22797(map_LT___$1,f__$1,ch__$1,meta22798));
});

}

return (new cljs.core.async.t_cljs$core$async22797(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22806 = (function (map_GT_,f,ch,meta22807){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22807 = meta22807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22808,meta22807__$1){
var self__ = this;
var _22808__$1 = this;
return (new cljs.core.async.t_cljs$core$async22806(self__.map_GT_,self__.f,self__.ch,meta22807__$1));
});

cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22808){
var self__ = this;
var _22808__$1 = this;
return self__.meta22807;
});

cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22807","meta22807",529227713,null)], null);
});

cljs.core.async.t_cljs$core$async22806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22806";

cljs.core.async.t_cljs$core$async22806.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async22806");
});

cljs.core.async.__GT_t_cljs$core$async22806 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22806(map_GT___$1,f__$1,ch__$1,meta22807){
return (new cljs.core.async.t_cljs$core$async22806(map_GT___$1,f__$1,ch__$1,meta22807));
});

}

return (new cljs.core.async.t_cljs$core$async22806(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22812 = (function (filter_GT_,p,ch,meta22813){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22813 = meta22813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22814,meta22813__$1){
var self__ = this;
var _22814__$1 = this;
return (new cljs.core.async.t_cljs$core$async22812(self__.filter_GT_,self__.p,self__.ch,meta22813__$1));
});

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22814){
var self__ = this;
var _22814__$1 = this;
return self__.meta22813;
});

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22813","meta22813",-1823288563,null)], null);
});

cljs.core.async.t_cljs$core$async22812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22812";

cljs.core.async.t_cljs$core$async22812.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async22812");
});

cljs.core.async.__GT_t_cljs$core$async22812 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22812(filter_GT___$1,p__$1,ch__$1,meta22813){
return (new cljs.core.async.t_cljs$core$async22812(filter_GT___$1,p__$1,ch__$1,meta22813));
});

}

return (new cljs.core.async.t_cljs$core$async22812(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22815 = [];
var len__19487__auto___22859 = arguments.length;
var i__19488__auto___22860 = (0);
while(true){
if((i__19488__auto___22860 < len__19487__auto___22859)){
args22815.push((arguments[i__19488__auto___22860]));

var G__22861 = (i__19488__auto___22860 + (1));
i__19488__auto___22860 = G__22861;
continue;
} else {
}
break;
}

var G__22817 = args22815.length;
switch (G__22817) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22815.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___22863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___22863,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___22863,out){
return (function (state_22838){
var state_val_22839 = (state_22838[(1)]);
if((state_val_22839 === (7))){
var inst_22834 = (state_22838[(2)]);
var state_22838__$1 = state_22838;
var statearr_22840_22864 = state_22838__$1;
(statearr_22840_22864[(2)] = inst_22834);

(statearr_22840_22864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (1))){
var state_22838__$1 = state_22838;
var statearr_22841_22865 = state_22838__$1;
(statearr_22841_22865[(2)] = null);

(statearr_22841_22865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (4))){
var inst_22820 = (state_22838[(7)]);
var inst_22820__$1 = (state_22838[(2)]);
var inst_22821 = (inst_22820__$1 == null);
var state_22838__$1 = (function (){var statearr_22842 = state_22838;
(statearr_22842[(7)] = inst_22820__$1);

return statearr_22842;
})();
if(cljs.core.truth_(inst_22821)){
var statearr_22843_22866 = state_22838__$1;
(statearr_22843_22866[(1)] = (5));

} else {
var statearr_22844_22867 = state_22838__$1;
(statearr_22844_22867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (6))){
var inst_22820 = (state_22838[(7)]);
var inst_22825 = p.call(null,inst_22820);
var state_22838__$1 = state_22838;
if(cljs.core.truth_(inst_22825)){
var statearr_22845_22868 = state_22838__$1;
(statearr_22845_22868[(1)] = (8));

} else {
var statearr_22846_22869 = state_22838__$1;
(statearr_22846_22869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (3))){
var inst_22836 = (state_22838[(2)]);
var state_22838__$1 = state_22838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22838__$1,inst_22836);
} else {
if((state_val_22839 === (2))){
var state_22838__$1 = state_22838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22838__$1,(4),ch);
} else {
if((state_val_22839 === (11))){
var inst_22828 = (state_22838[(2)]);
var state_22838__$1 = state_22838;
var statearr_22847_22870 = state_22838__$1;
(statearr_22847_22870[(2)] = inst_22828);

(statearr_22847_22870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (9))){
var state_22838__$1 = state_22838;
var statearr_22848_22871 = state_22838__$1;
(statearr_22848_22871[(2)] = null);

(statearr_22848_22871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (5))){
var inst_22823 = cljs.core.async.close_BANG_.call(null,out);
var state_22838__$1 = state_22838;
var statearr_22849_22872 = state_22838__$1;
(statearr_22849_22872[(2)] = inst_22823);

(statearr_22849_22872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (10))){
var inst_22831 = (state_22838[(2)]);
var state_22838__$1 = (function (){var statearr_22850 = state_22838;
(statearr_22850[(8)] = inst_22831);

return statearr_22850;
})();
var statearr_22851_22873 = state_22838__$1;
(statearr_22851_22873[(2)] = null);

(statearr_22851_22873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (8))){
var inst_22820 = (state_22838[(7)]);
var state_22838__$1 = state_22838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22838__$1,(11),out,inst_22820);
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
});})(c__20613__auto___22863,out))
;
return ((function (switch__20501__auto__,c__20613__auto___22863,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_22855 = [null,null,null,null,null,null,null,null,null];
(statearr_22855[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_22855[(1)] = (1));

return statearr_22855;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_22838){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_22838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e22856){if((e22856 instanceof Object)){
var ex__20505__auto__ = e22856;
var statearr_22857_22874 = state_22838;
(statearr_22857_22874[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22875 = state_22838;
state_22838 = G__22875;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_22838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_22838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___22863,out))
})();
var state__20615__auto__ = (function (){var statearr_22858 = f__20614__auto__.call(null);
(statearr_22858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___22863);

return statearr_22858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___22863,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22876 = [];
var len__19487__auto___22879 = arguments.length;
var i__19488__auto___22880 = (0);
while(true){
if((i__19488__auto___22880 < len__19487__auto___22879)){
args22876.push((arguments[i__19488__auto___22880]));

var G__22881 = (i__19488__auto___22880 + (1));
i__19488__auto___22880 = G__22881;
continue;
} else {
}
break;
}

var G__22878 = args22876.length;
switch (G__22878) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22876.length)].join('')));

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
return (function (state_23048){
var state_val_23049 = (state_23048[(1)]);
if((state_val_23049 === (7))){
var inst_23044 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23050_23091 = state_23048__$1;
(statearr_23050_23091[(2)] = inst_23044);

(statearr_23050_23091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (20))){
var inst_23014 = (state_23048[(7)]);
var inst_23025 = (state_23048[(2)]);
var inst_23026 = cljs.core.next.call(null,inst_23014);
var inst_23000 = inst_23026;
var inst_23001 = null;
var inst_23002 = (0);
var inst_23003 = (0);
var state_23048__$1 = (function (){var statearr_23051 = state_23048;
(statearr_23051[(8)] = inst_23000);

(statearr_23051[(9)] = inst_23002);

(statearr_23051[(10)] = inst_23001);

(statearr_23051[(11)] = inst_23025);

(statearr_23051[(12)] = inst_23003);

return statearr_23051;
})();
var statearr_23052_23092 = state_23048__$1;
(statearr_23052_23092[(2)] = null);

(statearr_23052_23092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (1))){
var state_23048__$1 = state_23048;
var statearr_23053_23093 = state_23048__$1;
(statearr_23053_23093[(2)] = null);

(statearr_23053_23093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (4))){
var inst_22989 = (state_23048[(13)]);
var inst_22989__$1 = (state_23048[(2)]);
var inst_22990 = (inst_22989__$1 == null);
var state_23048__$1 = (function (){var statearr_23054 = state_23048;
(statearr_23054[(13)] = inst_22989__$1);

return statearr_23054;
})();
if(cljs.core.truth_(inst_22990)){
var statearr_23055_23094 = state_23048__$1;
(statearr_23055_23094[(1)] = (5));

} else {
var statearr_23056_23095 = state_23048__$1;
(statearr_23056_23095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (15))){
var state_23048__$1 = state_23048;
var statearr_23060_23096 = state_23048__$1;
(statearr_23060_23096[(2)] = null);

(statearr_23060_23096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (21))){
var state_23048__$1 = state_23048;
var statearr_23061_23097 = state_23048__$1;
(statearr_23061_23097[(2)] = null);

(statearr_23061_23097[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (13))){
var inst_23000 = (state_23048[(8)]);
var inst_23002 = (state_23048[(9)]);
var inst_23001 = (state_23048[(10)]);
var inst_23003 = (state_23048[(12)]);
var inst_23010 = (state_23048[(2)]);
var inst_23011 = (inst_23003 + (1));
var tmp23057 = inst_23000;
var tmp23058 = inst_23002;
var tmp23059 = inst_23001;
var inst_23000__$1 = tmp23057;
var inst_23001__$1 = tmp23059;
var inst_23002__$1 = tmp23058;
var inst_23003__$1 = inst_23011;
var state_23048__$1 = (function (){var statearr_23062 = state_23048;
(statearr_23062[(8)] = inst_23000__$1);

(statearr_23062[(9)] = inst_23002__$1);

(statearr_23062[(10)] = inst_23001__$1);

(statearr_23062[(12)] = inst_23003__$1);

(statearr_23062[(14)] = inst_23010);

return statearr_23062;
})();
var statearr_23063_23098 = state_23048__$1;
(statearr_23063_23098[(2)] = null);

(statearr_23063_23098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (22))){
var state_23048__$1 = state_23048;
var statearr_23064_23099 = state_23048__$1;
(statearr_23064_23099[(2)] = null);

(statearr_23064_23099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (6))){
var inst_22989 = (state_23048[(13)]);
var inst_22998 = f.call(null,inst_22989);
var inst_22999 = cljs.core.seq.call(null,inst_22998);
var inst_23000 = inst_22999;
var inst_23001 = null;
var inst_23002 = (0);
var inst_23003 = (0);
var state_23048__$1 = (function (){var statearr_23065 = state_23048;
(statearr_23065[(8)] = inst_23000);

(statearr_23065[(9)] = inst_23002);

(statearr_23065[(10)] = inst_23001);

(statearr_23065[(12)] = inst_23003);

return statearr_23065;
})();
var statearr_23066_23100 = state_23048__$1;
(statearr_23066_23100[(2)] = null);

(statearr_23066_23100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (17))){
var inst_23014 = (state_23048[(7)]);
var inst_23018 = cljs.core.chunk_first.call(null,inst_23014);
var inst_23019 = cljs.core.chunk_rest.call(null,inst_23014);
var inst_23020 = cljs.core.count.call(null,inst_23018);
var inst_23000 = inst_23019;
var inst_23001 = inst_23018;
var inst_23002 = inst_23020;
var inst_23003 = (0);
var state_23048__$1 = (function (){var statearr_23067 = state_23048;
(statearr_23067[(8)] = inst_23000);

(statearr_23067[(9)] = inst_23002);

(statearr_23067[(10)] = inst_23001);

(statearr_23067[(12)] = inst_23003);

return statearr_23067;
})();
var statearr_23068_23101 = state_23048__$1;
(statearr_23068_23101[(2)] = null);

(statearr_23068_23101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (3))){
var inst_23046 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23048__$1,inst_23046);
} else {
if((state_val_23049 === (12))){
var inst_23034 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23069_23102 = state_23048__$1;
(statearr_23069_23102[(2)] = inst_23034);

(statearr_23069_23102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (2))){
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23048__$1,(4),in$);
} else {
if((state_val_23049 === (23))){
var inst_23042 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23070_23103 = state_23048__$1;
(statearr_23070_23103[(2)] = inst_23042);

(statearr_23070_23103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (19))){
var inst_23029 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23071_23104 = state_23048__$1;
(statearr_23071_23104[(2)] = inst_23029);

(statearr_23071_23104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (11))){
var inst_23000 = (state_23048[(8)]);
var inst_23014 = (state_23048[(7)]);
var inst_23014__$1 = cljs.core.seq.call(null,inst_23000);
var state_23048__$1 = (function (){var statearr_23072 = state_23048;
(statearr_23072[(7)] = inst_23014__$1);

return statearr_23072;
})();
if(inst_23014__$1){
var statearr_23073_23105 = state_23048__$1;
(statearr_23073_23105[(1)] = (14));

} else {
var statearr_23074_23106 = state_23048__$1;
(statearr_23074_23106[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (9))){
var inst_23036 = (state_23048[(2)]);
var inst_23037 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23048__$1 = (function (){var statearr_23075 = state_23048;
(statearr_23075[(15)] = inst_23036);

return statearr_23075;
})();
if(cljs.core.truth_(inst_23037)){
var statearr_23076_23107 = state_23048__$1;
(statearr_23076_23107[(1)] = (21));

} else {
var statearr_23077_23108 = state_23048__$1;
(statearr_23077_23108[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (5))){
var inst_22992 = cljs.core.async.close_BANG_.call(null,out);
var state_23048__$1 = state_23048;
var statearr_23078_23109 = state_23048__$1;
(statearr_23078_23109[(2)] = inst_22992);

(statearr_23078_23109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (14))){
var inst_23014 = (state_23048[(7)]);
var inst_23016 = cljs.core.chunked_seq_QMARK_.call(null,inst_23014);
var state_23048__$1 = state_23048;
if(inst_23016){
var statearr_23079_23110 = state_23048__$1;
(statearr_23079_23110[(1)] = (17));

} else {
var statearr_23080_23111 = state_23048__$1;
(statearr_23080_23111[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (16))){
var inst_23032 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23081_23112 = state_23048__$1;
(statearr_23081_23112[(2)] = inst_23032);

(statearr_23081_23112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (10))){
var inst_23001 = (state_23048[(10)]);
var inst_23003 = (state_23048[(12)]);
var inst_23008 = cljs.core._nth.call(null,inst_23001,inst_23003);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23048__$1,(13),out,inst_23008);
} else {
if((state_val_23049 === (18))){
var inst_23014 = (state_23048[(7)]);
var inst_23023 = cljs.core.first.call(null,inst_23014);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23048__$1,(20),out,inst_23023);
} else {
if((state_val_23049 === (8))){
var inst_23002 = (state_23048[(9)]);
var inst_23003 = (state_23048[(12)]);
var inst_23005 = (inst_23003 < inst_23002);
var inst_23006 = inst_23005;
var state_23048__$1 = state_23048;
if(cljs.core.truth_(inst_23006)){
var statearr_23082_23113 = state_23048__$1;
(statearr_23082_23113[(1)] = (10));

} else {
var statearr_23083_23114 = state_23048__$1;
(statearr_23083_23114[(1)] = (11));

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
var statearr_23087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23087[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__);

(statearr_23087[(1)] = (1));

return statearr_23087;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1 = (function (state_23048){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_23048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e23088){if((e23088 instanceof Object)){
var ex__20505__auto__ = e23088;
var statearr_23089_23115 = state_23048;
(statearr_23089_23115[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23116 = state_23048;
state_23048 = G__23116;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__ = function(state_23048){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1.call(this,state_23048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_23090 = f__20614__auto__.call(null);
(statearr_23090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_23090;
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
var args23117 = [];
var len__19487__auto___23120 = arguments.length;
var i__19488__auto___23121 = (0);
while(true){
if((i__19488__auto___23121 < len__19487__auto___23120)){
args23117.push((arguments[i__19488__auto___23121]));

var G__23122 = (i__19488__auto___23121 + (1));
i__19488__auto___23121 = G__23122;
continue;
} else {
}
break;
}

var G__23119 = args23117.length;
switch (G__23119) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23117.length)].join('')));

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
var args23124 = [];
var len__19487__auto___23127 = arguments.length;
var i__19488__auto___23128 = (0);
while(true){
if((i__19488__auto___23128 < len__19487__auto___23127)){
args23124.push((arguments[i__19488__auto___23128]));

var G__23129 = (i__19488__auto___23128 + (1));
i__19488__auto___23128 = G__23129;
continue;
} else {
}
break;
}

var G__23126 = args23124.length;
switch (G__23126) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23124.length)].join('')));

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
var args23131 = [];
var len__19487__auto___23182 = arguments.length;
var i__19488__auto___23183 = (0);
while(true){
if((i__19488__auto___23183 < len__19487__auto___23182)){
args23131.push((arguments[i__19488__auto___23183]));

var G__23184 = (i__19488__auto___23183 + (1));
i__19488__auto___23183 = G__23184;
continue;
} else {
}
break;
}

var G__23133 = args23131.length;
switch (G__23133) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23131.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___23186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___23186,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___23186,out){
return (function (state_23157){
var state_val_23158 = (state_23157[(1)]);
if((state_val_23158 === (7))){
var inst_23152 = (state_23157[(2)]);
var state_23157__$1 = state_23157;
var statearr_23159_23187 = state_23157__$1;
(statearr_23159_23187[(2)] = inst_23152);

(statearr_23159_23187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23158 === (1))){
var inst_23134 = null;
var state_23157__$1 = (function (){var statearr_23160 = state_23157;
(statearr_23160[(7)] = inst_23134);

return statearr_23160;
})();
var statearr_23161_23188 = state_23157__$1;
(statearr_23161_23188[(2)] = null);

(statearr_23161_23188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23158 === (4))){
var inst_23137 = (state_23157[(8)]);
var inst_23137__$1 = (state_23157[(2)]);
var inst_23138 = (inst_23137__$1 == null);
var inst_23139 = cljs.core.not.call(null,inst_23138);
var state_23157__$1 = (function (){var statearr_23162 = state_23157;
(statearr_23162[(8)] = inst_23137__$1);

return statearr_23162;
})();
if(inst_23139){
var statearr_23163_23189 = state_23157__$1;
(statearr_23163_23189[(1)] = (5));

} else {
var statearr_23164_23190 = state_23157__$1;
(statearr_23164_23190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23158 === (6))){
var state_23157__$1 = state_23157;
var statearr_23165_23191 = state_23157__$1;
(statearr_23165_23191[(2)] = null);

(statearr_23165_23191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23158 === (3))){
var inst_23154 = (state_23157[(2)]);
var inst_23155 = cljs.core.async.close_BANG_.call(null,out);
var state_23157__$1 = (function (){var statearr_23166 = state_23157;
(statearr_23166[(9)] = inst_23154);

return statearr_23166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23157__$1,inst_23155);
} else {
if((state_val_23158 === (2))){
var state_23157__$1 = state_23157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23157__$1,(4),ch);
} else {
if((state_val_23158 === (11))){
var inst_23137 = (state_23157[(8)]);
var inst_23146 = (state_23157[(2)]);
var inst_23134 = inst_23137;
var state_23157__$1 = (function (){var statearr_23167 = state_23157;
(statearr_23167[(10)] = inst_23146);

(statearr_23167[(7)] = inst_23134);

return statearr_23167;
})();
var statearr_23168_23192 = state_23157__$1;
(statearr_23168_23192[(2)] = null);

(statearr_23168_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23158 === (9))){
var inst_23137 = (state_23157[(8)]);
var state_23157__$1 = state_23157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23157__$1,(11),out,inst_23137);
} else {
if((state_val_23158 === (5))){
var inst_23137 = (state_23157[(8)]);
var inst_23134 = (state_23157[(7)]);
var inst_23141 = cljs.core._EQ_.call(null,inst_23137,inst_23134);
var state_23157__$1 = state_23157;
if(inst_23141){
var statearr_23170_23193 = state_23157__$1;
(statearr_23170_23193[(1)] = (8));

} else {
var statearr_23171_23194 = state_23157__$1;
(statearr_23171_23194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23158 === (10))){
var inst_23149 = (state_23157[(2)]);
var state_23157__$1 = state_23157;
var statearr_23172_23195 = state_23157__$1;
(statearr_23172_23195[(2)] = inst_23149);

(statearr_23172_23195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23158 === (8))){
var inst_23134 = (state_23157[(7)]);
var tmp23169 = inst_23134;
var inst_23134__$1 = tmp23169;
var state_23157__$1 = (function (){var statearr_23173 = state_23157;
(statearr_23173[(7)] = inst_23134__$1);

return statearr_23173;
})();
var statearr_23174_23196 = state_23157__$1;
(statearr_23174_23196[(2)] = null);

(statearr_23174_23196[(1)] = (2));


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
});})(c__20613__auto___23186,out))
;
return ((function (switch__20501__auto__,c__20613__auto___23186,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_23178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23178[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_23178[(1)] = (1));

return statearr_23178;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_23157){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_23157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e23179){if((e23179 instanceof Object)){
var ex__20505__auto__ = e23179;
var statearr_23180_23197 = state_23157;
(statearr_23180_23197[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23198 = state_23157;
state_23157 = G__23198;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_23157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_23157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___23186,out))
})();
var state__20615__auto__ = (function (){var statearr_23181 = f__20614__auto__.call(null);
(statearr_23181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___23186);

return statearr_23181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___23186,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23199 = [];
var len__19487__auto___23269 = arguments.length;
var i__19488__auto___23270 = (0);
while(true){
if((i__19488__auto___23270 < len__19487__auto___23269)){
args23199.push((arguments[i__19488__auto___23270]));

var G__23271 = (i__19488__auto___23270 + (1));
i__19488__auto___23270 = G__23271;
continue;
} else {
}
break;
}

var G__23201 = args23199.length;
switch (G__23201) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23199.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___23273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___23273,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___23273,out){
return (function (state_23239){
var state_val_23240 = (state_23239[(1)]);
if((state_val_23240 === (7))){
var inst_23235 = (state_23239[(2)]);
var state_23239__$1 = state_23239;
var statearr_23241_23274 = state_23239__$1;
(statearr_23241_23274[(2)] = inst_23235);

(statearr_23241_23274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (1))){
var inst_23202 = (new Array(n));
var inst_23203 = inst_23202;
var inst_23204 = (0);
var state_23239__$1 = (function (){var statearr_23242 = state_23239;
(statearr_23242[(7)] = inst_23204);

(statearr_23242[(8)] = inst_23203);

return statearr_23242;
})();
var statearr_23243_23275 = state_23239__$1;
(statearr_23243_23275[(2)] = null);

(statearr_23243_23275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (4))){
var inst_23207 = (state_23239[(9)]);
var inst_23207__$1 = (state_23239[(2)]);
var inst_23208 = (inst_23207__$1 == null);
var inst_23209 = cljs.core.not.call(null,inst_23208);
var state_23239__$1 = (function (){var statearr_23244 = state_23239;
(statearr_23244[(9)] = inst_23207__$1);

return statearr_23244;
})();
if(inst_23209){
var statearr_23245_23276 = state_23239__$1;
(statearr_23245_23276[(1)] = (5));

} else {
var statearr_23246_23277 = state_23239__$1;
(statearr_23246_23277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (15))){
var inst_23229 = (state_23239[(2)]);
var state_23239__$1 = state_23239;
var statearr_23247_23278 = state_23239__$1;
(statearr_23247_23278[(2)] = inst_23229);

(statearr_23247_23278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (13))){
var state_23239__$1 = state_23239;
var statearr_23248_23279 = state_23239__$1;
(statearr_23248_23279[(2)] = null);

(statearr_23248_23279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (6))){
var inst_23204 = (state_23239[(7)]);
var inst_23225 = (inst_23204 > (0));
var state_23239__$1 = state_23239;
if(cljs.core.truth_(inst_23225)){
var statearr_23249_23280 = state_23239__$1;
(statearr_23249_23280[(1)] = (12));

} else {
var statearr_23250_23281 = state_23239__$1;
(statearr_23250_23281[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (3))){
var inst_23237 = (state_23239[(2)]);
var state_23239__$1 = state_23239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23239__$1,inst_23237);
} else {
if((state_val_23240 === (12))){
var inst_23203 = (state_23239[(8)]);
var inst_23227 = cljs.core.vec.call(null,inst_23203);
var state_23239__$1 = state_23239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23239__$1,(15),out,inst_23227);
} else {
if((state_val_23240 === (2))){
var state_23239__$1 = state_23239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23239__$1,(4),ch);
} else {
if((state_val_23240 === (11))){
var inst_23219 = (state_23239[(2)]);
var inst_23220 = (new Array(n));
var inst_23203 = inst_23220;
var inst_23204 = (0);
var state_23239__$1 = (function (){var statearr_23251 = state_23239;
(statearr_23251[(10)] = inst_23219);

(statearr_23251[(7)] = inst_23204);

(statearr_23251[(8)] = inst_23203);

return statearr_23251;
})();
var statearr_23252_23282 = state_23239__$1;
(statearr_23252_23282[(2)] = null);

(statearr_23252_23282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (9))){
var inst_23203 = (state_23239[(8)]);
var inst_23217 = cljs.core.vec.call(null,inst_23203);
var state_23239__$1 = state_23239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23239__$1,(11),out,inst_23217);
} else {
if((state_val_23240 === (5))){
var inst_23207 = (state_23239[(9)]);
var inst_23204 = (state_23239[(7)]);
var inst_23212 = (state_23239[(11)]);
var inst_23203 = (state_23239[(8)]);
var inst_23211 = (inst_23203[inst_23204] = inst_23207);
var inst_23212__$1 = (inst_23204 + (1));
var inst_23213 = (inst_23212__$1 < n);
var state_23239__$1 = (function (){var statearr_23253 = state_23239;
(statearr_23253[(11)] = inst_23212__$1);

(statearr_23253[(12)] = inst_23211);

return statearr_23253;
})();
if(cljs.core.truth_(inst_23213)){
var statearr_23254_23283 = state_23239__$1;
(statearr_23254_23283[(1)] = (8));

} else {
var statearr_23255_23284 = state_23239__$1;
(statearr_23255_23284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (14))){
var inst_23232 = (state_23239[(2)]);
var inst_23233 = cljs.core.async.close_BANG_.call(null,out);
var state_23239__$1 = (function (){var statearr_23257 = state_23239;
(statearr_23257[(13)] = inst_23232);

return statearr_23257;
})();
var statearr_23258_23285 = state_23239__$1;
(statearr_23258_23285[(2)] = inst_23233);

(statearr_23258_23285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (10))){
var inst_23223 = (state_23239[(2)]);
var state_23239__$1 = state_23239;
var statearr_23259_23286 = state_23239__$1;
(statearr_23259_23286[(2)] = inst_23223);

(statearr_23259_23286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23240 === (8))){
var inst_23212 = (state_23239[(11)]);
var inst_23203 = (state_23239[(8)]);
var tmp23256 = inst_23203;
var inst_23203__$1 = tmp23256;
var inst_23204 = inst_23212;
var state_23239__$1 = (function (){var statearr_23260 = state_23239;
(statearr_23260[(7)] = inst_23204);

(statearr_23260[(8)] = inst_23203__$1);

return statearr_23260;
})();
var statearr_23261_23287 = state_23239__$1;
(statearr_23261_23287[(2)] = null);

(statearr_23261_23287[(1)] = (2));


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
});})(c__20613__auto___23273,out))
;
return ((function (switch__20501__auto__,c__20613__auto___23273,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_23265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23265[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_23265[(1)] = (1));

return statearr_23265;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_23239){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_23239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e23266){if((e23266 instanceof Object)){
var ex__20505__auto__ = e23266;
var statearr_23267_23288 = state_23239;
(statearr_23267_23288[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23289 = state_23239;
state_23239 = G__23289;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_23239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_23239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___23273,out))
})();
var state__20615__auto__ = (function (){var statearr_23268 = f__20614__auto__.call(null);
(statearr_23268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___23273);

return statearr_23268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___23273,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23290 = [];
var len__19487__auto___23364 = arguments.length;
var i__19488__auto___23365 = (0);
while(true){
if((i__19488__auto___23365 < len__19487__auto___23364)){
args23290.push((arguments[i__19488__auto___23365]));

var G__23366 = (i__19488__auto___23365 + (1));
i__19488__auto___23365 = G__23366;
continue;
} else {
}
break;
}

var G__23292 = args23290.length;
switch (G__23292) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23290.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___23368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___23368,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___23368,out){
return (function (state_23334){
var state_val_23335 = (state_23334[(1)]);
if((state_val_23335 === (7))){
var inst_23330 = (state_23334[(2)]);
var state_23334__$1 = state_23334;
var statearr_23336_23369 = state_23334__$1;
(statearr_23336_23369[(2)] = inst_23330);

(statearr_23336_23369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (1))){
var inst_23293 = [];
var inst_23294 = inst_23293;
var inst_23295 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23334__$1 = (function (){var statearr_23337 = state_23334;
(statearr_23337[(7)] = inst_23294);

(statearr_23337[(8)] = inst_23295);

return statearr_23337;
})();
var statearr_23338_23370 = state_23334__$1;
(statearr_23338_23370[(2)] = null);

(statearr_23338_23370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (4))){
var inst_23298 = (state_23334[(9)]);
var inst_23298__$1 = (state_23334[(2)]);
var inst_23299 = (inst_23298__$1 == null);
var inst_23300 = cljs.core.not.call(null,inst_23299);
var state_23334__$1 = (function (){var statearr_23339 = state_23334;
(statearr_23339[(9)] = inst_23298__$1);

return statearr_23339;
})();
if(inst_23300){
var statearr_23340_23371 = state_23334__$1;
(statearr_23340_23371[(1)] = (5));

} else {
var statearr_23341_23372 = state_23334__$1;
(statearr_23341_23372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (15))){
var inst_23324 = (state_23334[(2)]);
var state_23334__$1 = state_23334;
var statearr_23342_23373 = state_23334__$1;
(statearr_23342_23373[(2)] = inst_23324);

(statearr_23342_23373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (13))){
var state_23334__$1 = state_23334;
var statearr_23343_23374 = state_23334__$1;
(statearr_23343_23374[(2)] = null);

(statearr_23343_23374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (6))){
var inst_23294 = (state_23334[(7)]);
var inst_23319 = inst_23294.length;
var inst_23320 = (inst_23319 > (0));
var state_23334__$1 = state_23334;
if(cljs.core.truth_(inst_23320)){
var statearr_23344_23375 = state_23334__$1;
(statearr_23344_23375[(1)] = (12));

} else {
var statearr_23345_23376 = state_23334__$1;
(statearr_23345_23376[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (3))){
var inst_23332 = (state_23334[(2)]);
var state_23334__$1 = state_23334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23334__$1,inst_23332);
} else {
if((state_val_23335 === (12))){
var inst_23294 = (state_23334[(7)]);
var inst_23322 = cljs.core.vec.call(null,inst_23294);
var state_23334__$1 = state_23334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23334__$1,(15),out,inst_23322);
} else {
if((state_val_23335 === (2))){
var state_23334__$1 = state_23334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23334__$1,(4),ch);
} else {
if((state_val_23335 === (11))){
var inst_23298 = (state_23334[(9)]);
var inst_23302 = (state_23334[(10)]);
var inst_23312 = (state_23334[(2)]);
var inst_23313 = [];
var inst_23314 = inst_23313.push(inst_23298);
var inst_23294 = inst_23313;
var inst_23295 = inst_23302;
var state_23334__$1 = (function (){var statearr_23346 = state_23334;
(statearr_23346[(11)] = inst_23312);

(statearr_23346[(7)] = inst_23294);

(statearr_23346[(12)] = inst_23314);

(statearr_23346[(8)] = inst_23295);

return statearr_23346;
})();
var statearr_23347_23377 = state_23334__$1;
(statearr_23347_23377[(2)] = null);

(statearr_23347_23377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (9))){
var inst_23294 = (state_23334[(7)]);
var inst_23310 = cljs.core.vec.call(null,inst_23294);
var state_23334__$1 = state_23334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23334__$1,(11),out,inst_23310);
} else {
if((state_val_23335 === (5))){
var inst_23298 = (state_23334[(9)]);
var inst_23302 = (state_23334[(10)]);
var inst_23295 = (state_23334[(8)]);
var inst_23302__$1 = f.call(null,inst_23298);
var inst_23303 = cljs.core._EQ_.call(null,inst_23302__$1,inst_23295);
var inst_23304 = cljs.core.keyword_identical_QMARK_.call(null,inst_23295,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23305 = (inst_23303) || (inst_23304);
var state_23334__$1 = (function (){var statearr_23348 = state_23334;
(statearr_23348[(10)] = inst_23302__$1);

return statearr_23348;
})();
if(cljs.core.truth_(inst_23305)){
var statearr_23349_23378 = state_23334__$1;
(statearr_23349_23378[(1)] = (8));

} else {
var statearr_23350_23379 = state_23334__$1;
(statearr_23350_23379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (14))){
var inst_23327 = (state_23334[(2)]);
var inst_23328 = cljs.core.async.close_BANG_.call(null,out);
var state_23334__$1 = (function (){var statearr_23352 = state_23334;
(statearr_23352[(13)] = inst_23327);

return statearr_23352;
})();
var statearr_23353_23380 = state_23334__$1;
(statearr_23353_23380[(2)] = inst_23328);

(statearr_23353_23380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (10))){
var inst_23317 = (state_23334[(2)]);
var state_23334__$1 = state_23334;
var statearr_23354_23381 = state_23334__$1;
(statearr_23354_23381[(2)] = inst_23317);

(statearr_23354_23381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23335 === (8))){
var inst_23298 = (state_23334[(9)]);
var inst_23302 = (state_23334[(10)]);
var inst_23294 = (state_23334[(7)]);
var inst_23307 = inst_23294.push(inst_23298);
var tmp23351 = inst_23294;
var inst_23294__$1 = tmp23351;
var inst_23295 = inst_23302;
var state_23334__$1 = (function (){var statearr_23355 = state_23334;
(statearr_23355[(14)] = inst_23307);

(statearr_23355[(7)] = inst_23294__$1);

(statearr_23355[(8)] = inst_23295);

return statearr_23355;
})();
var statearr_23356_23382 = state_23334__$1;
(statearr_23356_23382[(2)] = null);

(statearr_23356_23382[(1)] = (2));


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
});})(c__20613__auto___23368,out))
;
return ((function (switch__20501__auto__,c__20613__auto___23368,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_23360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23360[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_23360[(1)] = (1));

return statearr_23360;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_23334){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_23334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e23361){if((e23361 instanceof Object)){
var ex__20505__auto__ = e23361;
var statearr_23362_23383 = state_23334;
(statearr_23362_23383[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23384 = state_23334;
state_23334 = G__23384;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_23334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_23334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___23368,out))
})();
var state__20615__auto__ = (function (){var statearr_23363 = f__20614__auto__.call(null);
(statearr_23363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___23368);

return statearr_23363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___23368,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map