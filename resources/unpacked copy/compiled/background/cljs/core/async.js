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
var args37134 = [];
var len__19487__auto___37140 = arguments.length;
var i__19488__auto___37141 = (0);
while(true){
if((i__19488__auto___37141 < len__19487__auto___37140)){
args37134.push((arguments[i__19488__auto___37141]));

var G__37142 = (i__19488__auto___37141 + (1));
i__19488__auto___37141 = G__37142;
continue;
} else {
}
break;
}

var G__37136 = args37134.length;
switch (G__37136) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37134.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37137 = (function (f,blockable,meta37138){
this.f = f;
this.blockable = blockable;
this.meta37138 = meta37138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37139,meta37138__$1){
var self__ = this;
var _37139__$1 = this;
return (new cljs.core.async.t_cljs$core$async37137(self__.f,self__.blockable,meta37138__$1));
});

cljs.core.async.t_cljs$core$async37137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37139){
var self__ = this;
var _37139__$1 = this;
return self__.meta37138;
});

cljs.core.async.t_cljs$core$async37137.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37138","meta37138",-531783767,null)], null);
});

cljs.core.async.t_cljs$core$async37137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37137";

cljs.core.async.t_cljs$core$async37137.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async37137");
});

cljs.core.async.__GT_t_cljs$core$async37137 = (function cljs$core$async$__GT_t_cljs$core$async37137(f__$1,blockable__$1,meta37138){
return (new cljs.core.async.t_cljs$core$async37137(f__$1,blockable__$1,meta37138));
});

}

return (new cljs.core.async.t_cljs$core$async37137(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args37146 = [];
var len__19487__auto___37149 = arguments.length;
var i__19488__auto___37150 = (0);
while(true){
if((i__19488__auto___37150 < len__19487__auto___37149)){
args37146.push((arguments[i__19488__auto___37150]));

var G__37151 = (i__19488__auto___37150 + (1));
i__19488__auto___37150 = G__37151;
continue;
} else {
}
break;
}

var G__37148 = args37146.length;
switch (G__37148) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37146.length)].join('')));

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
var args37153 = [];
var len__19487__auto___37156 = arguments.length;
var i__19488__auto___37157 = (0);
while(true){
if((i__19488__auto___37157 < len__19487__auto___37156)){
args37153.push((arguments[i__19488__auto___37157]));

var G__37158 = (i__19488__auto___37157 + (1));
i__19488__auto___37157 = G__37158;
continue;
} else {
}
break;
}

var G__37155 = args37153.length;
switch (G__37155) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37153.length)].join('')));

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
var args37160 = [];
var len__19487__auto___37163 = arguments.length;
var i__19488__auto___37164 = (0);
while(true){
if((i__19488__auto___37164 < len__19487__auto___37163)){
args37160.push((arguments[i__19488__auto___37164]));

var G__37165 = (i__19488__auto___37164 + (1));
i__19488__auto___37164 = G__37165;
continue;
} else {
}
break;
}

var G__37162 = args37160.length;
switch (G__37162) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37160.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37167 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37167);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37167,ret){
return (function (){
return fn1.call(null,val_37167);
});})(val_37167,ret))
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
var args37168 = [];
var len__19487__auto___37171 = arguments.length;
var i__19488__auto___37172 = (0);
while(true){
if((i__19488__auto___37172 < len__19487__auto___37171)){
args37168.push((arguments[i__19488__auto___37172]));

var G__37173 = (i__19488__auto___37172 + (1));
i__19488__auto___37172 = G__37173;
continue;
} else {
}
break;
}

var G__37170 = args37168.length;
switch (G__37170) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37168.length)].join('')));

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
var n__19332__auto___37175 = n;
var x_37176 = (0);
while(true){
if((x_37176 < n__19332__auto___37175)){
(a[x_37176] = (0));

var G__37177 = (x_37176 + (1));
x_37176 = G__37177;
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

var G__37178 = (i + (1));
i = G__37178;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37182 = (function (alt_flag,flag,meta37183){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37183 = meta37183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37184,meta37183__$1){
var self__ = this;
var _37184__$1 = this;
return (new cljs.core.async.t_cljs$core$async37182(self__.alt_flag,self__.flag,meta37183__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37184){
var self__ = this;
var _37184__$1 = this;
return self__.meta37183;
});})(flag))
;

cljs.core.async.t_cljs$core$async37182.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37182.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37183","meta37183",443553824,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37182";

cljs.core.async.t_cljs$core$async37182.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async37182");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37182 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37182(alt_flag__$1,flag__$1,meta37183){
return (new cljs.core.async.t_cljs$core$async37182(alt_flag__$1,flag__$1,meta37183));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37182(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37188 = (function (alt_handler,flag,cb,meta37189){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37189 = meta37189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37190,meta37189__$1){
var self__ = this;
var _37190__$1 = this;
return (new cljs.core.async.t_cljs$core$async37188(self__.alt_handler,self__.flag,self__.cb,meta37189__$1));
});

cljs.core.async.t_cljs$core$async37188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37190){
var self__ = this;
var _37190__$1 = this;
return self__.meta37189;
});

cljs.core.async.t_cljs$core$async37188.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37189","meta37189",-455521933,null)], null);
});

cljs.core.async.t_cljs$core$async37188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37188";

cljs.core.async.t_cljs$core$async37188.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async37188");
});

cljs.core.async.__GT_t_cljs$core$async37188 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37188(alt_handler__$1,flag__$1,cb__$1,meta37189){
return (new cljs.core.async.t_cljs$core$async37188(alt_handler__$1,flag__$1,cb__$1,meta37189));
});

}

return (new cljs.core.async.t_cljs$core$async37188(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37191_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37191_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37192_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37192_SHARP_,port], null));
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
var G__37193 = (i + (1));
i = G__37193;
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
var len__19487__auto___37199 = arguments.length;
var i__19488__auto___37200 = (0);
while(true){
if((i__19488__auto___37200 < len__19487__auto___37199)){
args__19494__auto__.push((arguments[i__19488__auto___37200]));

var G__37201 = (i__19488__auto___37200 + (1));
i__19488__auto___37200 = G__37201;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37196){
var map__37197 = p__37196;
var map__37197__$1 = ((((!((map__37197 == null)))?((((map__37197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37197):map__37197);
var opts = map__37197__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37194){
var G__37195 = cljs.core.first.call(null,seq37194);
var seq37194__$1 = cljs.core.next.call(null,seq37194);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37195,seq37194__$1);
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
var args37202 = [];
var len__19487__auto___37252 = arguments.length;
var i__19488__auto___37253 = (0);
while(true){
if((i__19488__auto___37253 < len__19487__auto___37252)){
args37202.push((arguments[i__19488__auto___37253]));

var G__37254 = (i__19488__auto___37253 + (1));
i__19488__auto___37253 = G__37254;
continue;
} else {
}
break;
}

var G__37204 = args37202.length;
switch (G__37204) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37202.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20613__auto___37256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___37256){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___37256){
return (function (state_37228){
var state_val_37229 = (state_37228[(1)]);
if((state_val_37229 === (7))){
var inst_37224 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
var statearr_37230_37257 = state_37228__$1;
(statearr_37230_37257[(2)] = inst_37224);

(statearr_37230_37257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (1))){
var state_37228__$1 = state_37228;
var statearr_37231_37258 = state_37228__$1;
(statearr_37231_37258[(2)] = null);

(statearr_37231_37258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (4))){
var inst_37207 = (state_37228[(7)]);
var inst_37207__$1 = (state_37228[(2)]);
var inst_37208 = (inst_37207__$1 == null);
var state_37228__$1 = (function (){var statearr_37232 = state_37228;
(statearr_37232[(7)] = inst_37207__$1);

return statearr_37232;
})();
if(cljs.core.truth_(inst_37208)){
var statearr_37233_37259 = state_37228__$1;
(statearr_37233_37259[(1)] = (5));

} else {
var statearr_37234_37260 = state_37228__$1;
(statearr_37234_37260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (13))){
var state_37228__$1 = state_37228;
var statearr_37235_37261 = state_37228__$1;
(statearr_37235_37261[(2)] = null);

(statearr_37235_37261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (6))){
var inst_37207 = (state_37228[(7)]);
var state_37228__$1 = state_37228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37228__$1,(11),to,inst_37207);
} else {
if((state_val_37229 === (3))){
var inst_37226 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37228__$1,inst_37226);
} else {
if((state_val_37229 === (12))){
var state_37228__$1 = state_37228;
var statearr_37236_37262 = state_37228__$1;
(statearr_37236_37262[(2)] = null);

(statearr_37236_37262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (2))){
var state_37228__$1 = state_37228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37228__$1,(4),from);
} else {
if((state_val_37229 === (11))){
var inst_37217 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
if(cljs.core.truth_(inst_37217)){
var statearr_37237_37263 = state_37228__$1;
(statearr_37237_37263[(1)] = (12));

} else {
var statearr_37238_37264 = state_37228__$1;
(statearr_37238_37264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (9))){
var state_37228__$1 = state_37228;
var statearr_37239_37265 = state_37228__$1;
(statearr_37239_37265[(2)] = null);

(statearr_37239_37265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (5))){
var state_37228__$1 = state_37228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37240_37266 = state_37228__$1;
(statearr_37240_37266[(1)] = (8));

} else {
var statearr_37241_37267 = state_37228__$1;
(statearr_37241_37267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (14))){
var inst_37222 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
var statearr_37242_37268 = state_37228__$1;
(statearr_37242_37268[(2)] = inst_37222);

(statearr_37242_37268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (10))){
var inst_37214 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
var statearr_37243_37269 = state_37228__$1;
(statearr_37243_37269[(2)] = inst_37214);

(statearr_37243_37269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (8))){
var inst_37211 = cljs.core.async.close_BANG_.call(null,to);
var state_37228__$1 = state_37228;
var statearr_37244_37270 = state_37228__$1;
(statearr_37244_37270[(2)] = inst_37211);

(statearr_37244_37270[(1)] = (10));


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
});})(c__20613__auto___37256))
;
return ((function (switch__20501__auto__,c__20613__auto___37256){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_37248 = [null,null,null,null,null,null,null,null];
(statearr_37248[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_37248[(1)] = (1));

return statearr_37248;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_37228){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37249){if((e37249 instanceof Object)){
var ex__20505__auto__ = e37249;
var statearr_37250_37271 = state_37228;
(statearr_37250_37271[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37272 = state_37228;
state_37228 = G__37272;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_37228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_37228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___37256))
})();
var state__20615__auto__ = (function (){var statearr_37251 = f__20614__auto__.call(null);
(statearr_37251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___37256);

return statearr_37251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___37256))
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
return (function (p__37456){
var vec__37457 = p__37456;
var v = cljs.core.nth.call(null,vec__37457,(0),null);
var p = cljs.core.nth.call(null,vec__37457,(1),null);
var job = vec__37457;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20613__auto___37639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___37639,res,vec__37457,v,p,job,jobs,results){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___37639,res,vec__37457,v,p,job,jobs,results){
return (function (state_37462){
var state_val_37463 = (state_37462[(1)]);
if((state_val_37463 === (1))){
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37462__$1,(2),res,v);
} else {
if((state_val_37463 === (2))){
var inst_37459 = (state_37462[(2)]);
var inst_37460 = cljs.core.async.close_BANG_.call(null,res);
var state_37462__$1 = (function (){var statearr_37464 = state_37462;
(statearr_37464[(7)] = inst_37459);

return statearr_37464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37462__$1,inst_37460);
} else {
return null;
}
}
});})(c__20613__auto___37639,res,vec__37457,v,p,job,jobs,results))
;
return ((function (switch__20501__auto__,c__20613__auto___37639,res,vec__37457,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_37468 = [null,null,null,null,null,null,null,null];
(statearr_37468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_37468[(1)] = (1));

return statearr_37468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_37462){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37469){if((e37469 instanceof Object)){
var ex__20505__auto__ = e37469;
var statearr_37470_37640 = state_37462;
(statearr_37470_37640[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37641 = state_37462;
state_37462 = G__37641;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_37462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_37462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___37639,res,vec__37457,v,p,job,jobs,results))
})();
var state__20615__auto__ = (function (){var statearr_37471 = f__20614__auto__.call(null);
(statearr_37471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___37639);

return statearr_37471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___37639,res,vec__37457,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37472){
var vec__37473 = p__37472;
var v = cljs.core.nth.call(null,vec__37473,(0),null);
var p = cljs.core.nth.call(null,vec__37473,(1),null);
var job = vec__37473;
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
var n__19332__auto___37642 = n;
var __37643 = (0);
while(true){
if((__37643 < n__19332__auto___37642)){
var G__37474_37644 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37474_37644) {
case "compute":
var c__20613__auto___37646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37643,c__20613__auto___37646,G__37474_37644,n__19332__auto___37642,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (__37643,c__20613__auto___37646,G__37474_37644,n__19332__auto___37642,jobs,results,process,async){
return (function (state_37487){
var state_val_37488 = (state_37487[(1)]);
if((state_val_37488 === (1))){
var state_37487__$1 = state_37487;
var statearr_37489_37647 = state_37487__$1;
(statearr_37489_37647[(2)] = null);

(statearr_37489_37647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (2))){
var state_37487__$1 = state_37487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37487__$1,(4),jobs);
} else {
if((state_val_37488 === (3))){
var inst_37485 = (state_37487[(2)]);
var state_37487__$1 = state_37487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37487__$1,inst_37485);
} else {
if((state_val_37488 === (4))){
var inst_37477 = (state_37487[(2)]);
var inst_37478 = process.call(null,inst_37477);
var state_37487__$1 = state_37487;
if(cljs.core.truth_(inst_37478)){
var statearr_37490_37648 = state_37487__$1;
(statearr_37490_37648[(1)] = (5));

} else {
var statearr_37491_37649 = state_37487__$1;
(statearr_37491_37649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (5))){
var state_37487__$1 = state_37487;
var statearr_37492_37650 = state_37487__$1;
(statearr_37492_37650[(2)] = null);

(statearr_37492_37650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (6))){
var state_37487__$1 = state_37487;
var statearr_37493_37651 = state_37487__$1;
(statearr_37493_37651[(2)] = null);

(statearr_37493_37651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (7))){
var inst_37483 = (state_37487[(2)]);
var state_37487__$1 = state_37487;
var statearr_37494_37652 = state_37487__$1;
(statearr_37494_37652[(2)] = inst_37483);

(statearr_37494_37652[(1)] = (3));


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
});})(__37643,c__20613__auto___37646,G__37474_37644,n__19332__auto___37642,jobs,results,process,async))
;
return ((function (__37643,switch__20501__auto__,c__20613__auto___37646,G__37474_37644,n__19332__auto___37642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_37498 = [null,null,null,null,null,null,null];
(statearr_37498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_37498[(1)] = (1));

return statearr_37498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_37487){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37499){if((e37499 instanceof Object)){
var ex__20505__auto__ = e37499;
var statearr_37500_37653 = state_37487;
(statearr_37500_37653[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37654 = state_37487;
state_37487 = G__37654;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_37487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_37487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(__37643,switch__20501__auto__,c__20613__auto___37646,G__37474_37644,n__19332__auto___37642,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_37501 = f__20614__auto__.call(null);
(statearr_37501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___37646);

return statearr_37501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(__37643,c__20613__auto___37646,G__37474_37644,n__19332__auto___37642,jobs,results,process,async))
);


break;
case "async":
var c__20613__auto___37655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37643,c__20613__auto___37655,G__37474_37644,n__19332__auto___37642,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (__37643,c__20613__auto___37655,G__37474_37644,n__19332__auto___37642,jobs,results,process,async){
return (function (state_37514){
var state_val_37515 = (state_37514[(1)]);
if((state_val_37515 === (1))){
var state_37514__$1 = state_37514;
var statearr_37516_37656 = state_37514__$1;
(statearr_37516_37656[(2)] = null);

(statearr_37516_37656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (2))){
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37514__$1,(4),jobs);
} else {
if((state_val_37515 === (3))){
var inst_37512 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37514__$1,inst_37512);
} else {
if((state_val_37515 === (4))){
var inst_37504 = (state_37514[(2)]);
var inst_37505 = async.call(null,inst_37504);
var state_37514__$1 = state_37514;
if(cljs.core.truth_(inst_37505)){
var statearr_37517_37657 = state_37514__$1;
(statearr_37517_37657[(1)] = (5));

} else {
var statearr_37518_37658 = state_37514__$1;
(statearr_37518_37658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (5))){
var state_37514__$1 = state_37514;
var statearr_37519_37659 = state_37514__$1;
(statearr_37519_37659[(2)] = null);

(statearr_37519_37659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (6))){
var state_37514__$1 = state_37514;
var statearr_37520_37660 = state_37514__$1;
(statearr_37520_37660[(2)] = null);

(statearr_37520_37660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (7))){
var inst_37510 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37521_37661 = state_37514__$1;
(statearr_37521_37661[(2)] = inst_37510);

(statearr_37521_37661[(1)] = (3));


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
});})(__37643,c__20613__auto___37655,G__37474_37644,n__19332__auto___37642,jobs,results,process,async))
;
return ((function (__37643,switch__20501__auto__,c__20613__auto___37655,G__37474_37644,n__19332__auto___37642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_37525 = [null,null,null,null,null,null,null];
(statearr_37525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_37525[(1)] = (1));

return statearr_37525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_37514){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37526){if((e37526 instanceof Object)){
var ex__20505__auto__ = e37526;
var statearr_37527_37662 = state_37514;
(statearr_37527_37662[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37663 = state_37514;
state_37514 = G__37663;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_37514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_37514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(__37643,switch__20501__auto__,c__20613__auto___37655,G__37474_37644,n__19332__auto___37642,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_37528 = f__20614__auto__.call(null);
(statearr_37528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___37655);

return statearr_37528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(__37643,c__20613__auto___37655,G__37474_37644,n__19332__auto___37642,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37664 = (__37643 + (1));
__37643 = G__37664;
continue;
} else {
}
break;
}

var c__20613__auto___37665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___37665,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___37665,jobs,results,process,async){
return (function (state_37550){
var state_val_37551 = (state_37550[(1)]);
if((state_val_37551 === (1))){
var state_37550__$1 = state_37550;
var statearr_37552_37666 = state_37550__$1;
(statearr_37552_37666[(2)] = null);

(statearr_37552_37666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37551 === (2))){
var state_37550__$1 = state_37550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37550__$1,(4),from);
} else {
if((state_val_37551 === (3))){
var inst_37548 = (state_37550[(2)]);
var state_37550__$1 = state_37550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37550__$1,inst_37548);
} else {
if((state_val_37551 === (4))){
var inst_37531 = (state_37550[(7)]);
var inst_37531__$1 = (state_37550[(2)]);
var inst_37532 = (inst_37531__$1 == null);
var state_37550__$1 = (function (){var statearr_37553 = state_37550;
(statearr_37553[(7)] = inst_37531__$1);

return statearr_37553;
})();
if(cljs.core.truth_(inst_37532)){
var statearr_37554_37667 = state_37550__$1;
(statearr_37554_37667[(1)] = (5));

} else {
var statearr_37555_37668 = state_37550__$1;
(statearr_37555_37668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37551 === (5))){
var inst_37534 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37550__$1 = state_37550;
var statearr_37556_37669 = state_37550__$1;
(statearr_37556_37669[(2)] = inst_37534);

(statearr_37556_37669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37551 === (6))){
var inst_37531 = (state_37550[(7)]);
var inst_37536 = (state_37550[(8)]);
var inst_37536__$1 = cljs.core.async.chan.call(null,(1));
var inst_37537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37538 = [inst_37531,inst_37536__$1];
var inst_37539 = (new cljs.core.PersistentVector(null,2,(5),inst_37537,inst_37538,null));
var state_37550__$1 = (function (){var statearr_37557 = state_37550;
(statearr_37557[(8)] = inst_37536__$1);

return statearr_37557;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37550__$1,(8),jobs,inst_37539);
} else {
if((state_val_37551 === (7))){
var inst_37546 = (state_37550[(2)]);
var state_37550__$1 = state_37550;
var statearr_37558_37670 = state_37550__$1;
(statearr_37558_37670[(2)] = inst_37546);

(statearr_37558_37670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37551 === (8))){
var inst_37536 = (state_37550[(8)]);
var inst_37541 = (state_37550[(2)]);
var state_37550__$1 = (function (){var statearr_37559 = state_37550;
(statearr_37559[(9)] = inst_37541);

return statearr_37559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37550__$1,(9),results,inst_37536);
} else {
if((state_val_37551 === (9))){
var inst_37543 = (state_37550[(2)]);
var state_37550__$1 = (function (){var statearr_37560 = state_37550;
(statearr_37560[(10)] = inst_37543);

return statearr_37560;
})();
var statearr_37561_37671 = state_37550__$1;
(statearr_37561_37671[(2)] = null);

(statearr_37561_37671[(1)] = (2));


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
});})(c__20613__auto___37665,jobs,results,process,async))
;
return ((function (switch__20501__auto__,c__20613__auto___37665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0 = (function (){
var statearr_37565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_37565[(1)] = (1));

return statearr_37565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_37550){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37566){if((e37566 instanceof Object)){
var ex__20505__auto__ = e37566;
var statearr_37567_37672 = state_37550;
(statearr_37567_37672[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37673 = state_37550;
state_37550 = G__37673;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_37550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_37550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___37665,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_37568 = f__20614__auto__.call(null);
(statearr_37568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___37665);

return statearr_37568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___37665,jobs,results,process,async))
);


var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,jobs,results,process,async){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,jobs,results,process,async){
return (function (state_37606){
var state_val_37607 = (state_37606[(1)]);
if((state_val_37607 === (7))){
var inst_37602 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37608_37674 = state_37606__$1;
(statearr_37608_37674[(2)] = inst_37602);

(statearr_37608_37674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (20))){
var state_37606__$1 = state_37606;
var statearr_37609_37675 = state_37606__$1;
(statearr_37609_37675[(2)] = null);

(statearr_37609_37675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (1))){
var state_37606__$1 = state_37606;
var statearr_37610_37676 = state_37606__$1;
(statearr_37610_37676[(2)] = null);

(statearr_37610_37676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (4))){
var inst_37571 = (state_37606[(7)]);
var inst_37571__$1 = (state_37606[(2)]);
var inst_37572 = (inst_37571__$1 == null);
var state_37606__$1 = (function (){var statearr_37611 = state_37606;
(statearr_37611[(7)] = inst_37571__$1);

return statearr_37611;
})();
if(cljs.core.truth_(inst_37572)){
var statearr_37612_37677 = state_37606__$1;
(statearr_37612_37677[(1)] = (5));

} else {
var statearr_37613_37678 = state_37606__$1;
(statearr_37613_37678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (15))){
var inst_37584 = (state_37606[(8)]);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37606__$1,(18),to,inst_37584);
} else {
if((state_val_37607 === (21))){
var inst_37597 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37614_37679 = state_37606__$1;
(statearr_37614_37679[(2)] = inst_37597);

(statearr_37614_37679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (13))){
var inst_37599 = (state_37606[(2)]);
var state_37606__$1 = (function (){var statearr_37615 = state_37606;
(statearr_37615[(9)] = inst_37599);

return statearr_37615;
})();
var statearr_37616_37680 = state_37606__$1;
(statearr_37616_37680[(2)] = null);

(statearr_37616_37680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (6))){
var inst_37571 = (state_37606[(7)]);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37606__$1,(11),inst_37571);
} else {
if((state_val_37607 === (17))){
var inst_37592 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
if(cljs.core.truth_(inst_37592)){
var statearr_37617_37681 = state_37606__$1;
(statearr_37617_37681[(1)] = (19));

} else {
var statearr_37618_37682 = state_37606__$1;
(statearr_37618_37682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (3))){
var inst_37604 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37606__$1,inst_37604);
} else {
if((state_val_37607 === (12))){
var inst_37581 = (state_37606[(10)]);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37606__$1,(14),inst_37581);
} else {
if((state_val_37607 === (2))){
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37606__$1,(4),results);
} else {
if((state_val_37607 === (19))){
var state_37606__$1 = state_37606;
var statearr_37619_37683 = state_37606__$1;
(statearr_37619_37683[(2)] = null);

(statearr_37619_37683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (11))){
var inst_37581 = (state_37606[(2)]);
var state_37606__$1 = (function (){var statearr_37620 = state_37606;
(statearr_37620[(10)] = inst_37581);

return statearr_37620;
})();
var statearr_37621_37684 = state_37606__$1;
(statearr_37621_37684[(2)] = null);

(statearr_37621_37684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (9))){
var state_37606__$1 = state_37606;
var statearr_37622_37685 = state_37606__$1;
(statearr_37622_37685[(2)] = null);

(statearr_37622_37685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (5))){
var state_37606__$1 = state_37606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37623_37686 = state_37606__$1;
(statearr_37623_37686[(1)] = (8));

} else {
var statearr_37624_37687 = state_37606__$1;
(statearr_37624_37687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (14))){
var inst_37586 = (state_37606[(11)]);
var inst_37584 = (state_37606[(8)]);
var inst_37584__$1 = (state_37606[(2)]);
var inst_37585 = (inst_37584__$1 == null);
var inst_37586__$1 = cljs.core.not.call(null,inst_37585);
var state_37606__$1 = (function (){var statearr_37625 = state_37606;
(statearr_37625[(11)] = inst_37586__$1);

(statearr_37625[(8)] = inst_37584__$1);

return statearr_37625;
})();
if(inst_37586__$1){
var statearr_37626_37688 = state_37606__$1;
(statearr_37626_37688[(1)] = (15));

} else {
var statearr_37627_37689 = state_37606__$1;
(statearr_37627_37689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (16))){
var inst_37586 = (state_37606[(11)]);
var state_37606__$1 = state_37606;
var statearr_37628_37690 = state_37606__$1;
(statearr_37628_37690[(2)] = inst_37586);

(statearr_37628_37690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (10))){
var inst_37578 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37629_37691 = state_37606__$1;
(statearr_37629_37691[(2)] = inst_37578);

(statearr_37629_37691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (18))){
var inst_37589 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37630_37692 = state_37606__$1;
(statearr_37630_37692[(2)] = inst_37589);

(statearr_37630_37692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (8))){
var inst_37575 = cljs.core.async.close_BANG_.call(null,to);
var state_37606__$1 = state_37606;
var statearr_37631_37693 = state_37606__$1;
(statearr_37631_37693[(2)] = inst_37575);

(statearr_37631_37693[(1)] = (10));


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
var statearr_37635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__);

(statearr_37635[(1)] = (1));

return statearr_37635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1 = (function (state_37606){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37636){if((e37636 instanceof Object)){
var ex__20505__auto__ = e37636;
var statearr_37637_37694 = state_37606;
(statearr_37637_37694[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37695 = state_37606;
state_37606 = G__37695;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__ = function(state_37606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1.call(this,state_37606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,jobs,results,process,async))
})();
var state__20615__auto__ = (function (){var statearr_37638 = f__20614__auto__.call(null);
(statearr_37638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_37638;
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
var args37696 = [];
var len__19487__auto___37699 = arguments.length;
var i__19488__auto___37700 = (0);
while(true){
if((i__19488__auto___37700 < len__19487__auto___37699)){
args37696.push((arguments[i__19488__auto___37700]));

var G__37701 = (i__19488__auto___37700 + (1));
i__19488__auto___37700 = G__37701;
continue;
} else {
}
break;
}

var G__37698 = args37696.length;
switch (G__37698) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37696.length)].join('')));

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
var args37703 = [];
var len__19487__auto___37706 = arguments.length;
var i__19488__auto___37707 = (0);
while(true){
if((i__19488__auto___37707 < len__19487__auto___37706)){
args37703.push((arguments[i__19488__auto___37707]));

var G__37708 = (i__19488__auto___37707 + (1));
i__19488__auto___37707 = G__37708;
continue;
} else {
}
break;
}

var G__37705 = args37703.length;
switch (G__37705) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37703.length)].join('')));

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
var args37710 = [];
var len__19487__auto___37763 = arguments.length;
var i__19488__auto___37764 = (0);
while(true){
if((i__19488__auto___37764 < len__19487__auto___37763)){
args37710.push((arguments[i__19488__auto___37764]));

var G__37765 = (i__19488__auto___37764 + (1));
i__19488__auto___37764 = G__37765;
continue;
} else {
}
break;
}

var G__37712 = args37710.length;
switch (G__37712) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37710.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20613__auto___37767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___37767,tc,fc){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___37767,tc,fc){
return (function (state_37738){
var state_val_37739 = (state_37738[(1)]);
if((state_val_37739 === (7))){
var inst_37734 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
var statearr_37740_37768 = state_37738__$1;
(statearr_37740_37768[(2)] = inst_37734);

(statearr_37740_37768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (1))){
var state_37738__$1 = state_37738;
var statearr_37741_37769 = state_37738__$1;
(statearr_37741_37769[(2)] = null);

(statearr_37741_37769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (4))){
var inst_37715 = (state_37738[(7)]);
var inst_37715__$1 = (state_37738[(2)]);
var inst_37716 = (inst_37715__$1 == null);
var state_37738__$1 = (function (){var statearr_37742 = state_37738;
(statearr_37742[(7)] = inst_37715__$1);

return statearr_37742;
})();
if(cljs.core.truth_(inst_37716)){
var statearr_37743_37770 = state_37738__$1;
(statearr_37743_37770[(1)] = (5));

} else {
var statearr_37744_37771 = state_37738__$1;
(statearr_37744_37771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (13))){
var state_37738__$1 = state_37738;
var statearr_37745_37772 = state_37738__$1;
(statearr_37745_37772[(2)] = null);

(statearr_37745_37772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (6))){
var inst_37715 = (state_37738[(7)]);
var inst_37721 = p.call(null,inst_37715);
var state_37738__$1 = state_37738;
if(cljs.core.truth_(inst_37721)){
var statearr_37746_37773 = state_37738__$1;
(statearr_37746_37773[(1)] = (9));

} else {
var statearr_37747_37774 = state_37738__$1;
(statearr_37747_37774[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (3))){
var inst_37736 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37738__$1,inst_37736);
} else {
if((state_val_37739 === (12))){
var state_37738__$1 = state_37738;
var statearr_37748_37775 = state_37738__$1;
(statearr_37748_37775[(2)] = null);

(statearr_37748_37775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (2))){
var state_37738__$1 = state_37738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37738__$1,(4),ch);
} else {
if((state_val_37739 === (11))){
var inst_37715 = (state_37738[(7)]);
var inst_37725 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37738__$1,(8),inst_37725,inst_37715);
} else {
if((state_val_37739 === (9))){
var state_37738__$1 = state_37738;
var statearr_37749_37776 = state_37738__$1;
(statearr_37749_37776[(2)] = tc);

(statearr_37749_37776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (5))){
var inst_37718 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37719 = cljs.core.async.close_BANG_.call(null,fc);
var state_37738__$1 = (function (){var statearr_37750 = state_37738;
(statearr_37750[(8)] = inst_37718);

return statearr_37750;
})();
var statearr_37751_37777 = state_37738__$1;
(statearr_37751_37777[(2)] = inst_37719);

(statearr_37751_37777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (14))){
var inst_37732 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
var statearr_37752_37778 = state_37738__$1;
(statearr_37752_37778[(2)] = inst_37732);

(statearr_37752_37778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (10))){
var state_37738__$1 = state_37738;
var statearr_37753_37779 = state_37738__$1;
(statearr_37753_37779[(2)] = fc);

(statearr_37753_37779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (8))){
var inst_37727 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
if(cljs.core.truth_(inst_37727)){
var statearr_37754_37780 = state_37738__$1;
(statearr_37754_37780[(1)] = (12));

} else {
var statearr_37755_37781 = state_37738__$1;
(statearr_37755_37781[(1)] = (13));

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
});})(c__20613__auto___37767,tc,fc))
;
return ((function (switch__20501__auto__,c__20613__auto___37767,tc,fc){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_37759 = [null,null,null,null,null,null,null,null,null];
(statearr_37759[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_37759[(1)] = (1));

return statearr_37759;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_37738){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37760){if((e37760 instanceof Object)){
var ex__20505__auto__ = e37760;
var statearr_37761_37782 = state_37738;
(statearr_37761_37782[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37783 = state_37738;
state_37738 = G__37783;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_37738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_37738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___37767,tc,fc))
})();
var state__20615__auto__ = (function (){var statearr_37762 = f__20614__auto__.call(null);
(statearr_37762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___37767);

return statearr_37762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___37767,tc,fc))
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
return (function (state_37847){
var state_val_37848 = (state_37847[(1)]);
if((state_val_37848 === (7))){
var inst_37843 = (state_37847[(2)]);
var state_37847__$1 = state_37847;
var statearr_37849_37870 = state_37847__$1;
(statearr_37849_37870[(2)] = inst_37843);

(statearr_37849_37870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37848 === (1))){
var inst_37827 = init;
var state_37847__$1 = (function (){var statearr_37850 = state_37847;
(statearr_37850[(7)] = inst_37827);

return statearr_37850;
})();
var statearr_37851_37871 = state_37847__$1;
(statearr_37851_37871[(2)] = null);

(statearr_37851_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37848 === (4))){
var inst_37830 = (state_37847[(8)]);
var inst_37830__$1 = (state_37847[(2)]);
var inst_37831 = (inst_37830__$1 == null);
var state_37847__$1 = (function (){var statearr_37852 = state_37847;
(statearr_37852[(8)] = inst_37830__$1);

return statearr_37852;
})();
if(cljs.core.truth_(inst_37831)){
var statearr_37853_37872 = state_37847__$1;
(statearr_37853_37872[(1)] = (5));

} else {
var statearr_37854_37873 = state_37847__$1;
(statearr_37854_37873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37848 === (6))){
var inst_37830 = (state_37847[(8)]);
var inst_37834 = (state_37847[(9)]);
var inst_37827 = (state_37847[(7)]);
var inst_37834__$1 = f.call(null,inst_37827,inst_37830);
var inst_37835 = cljs.core.reduced_QMARK_.call(null,inst_37834__$1);
var state_37847__$1 = (function (){var statearr_37855 = state_37847;
(statearr_37855[(9)] = inst_37834__$1);

return statearr_37855;
})();
if(inst_37835){
var statearr_37856_37874 = state_37847__$1;
(statearr_37856_37874[(1)] = (8));

} else {
var statearr_37857_37875 = state_37847__$1;
(statearr_37857_37875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37848 === (3))){
var inst_37845 = (state_37847[(2)]);
var state_37847__$1 = state_37847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37847__$1,inst_37845);
} else {
if((state_val_37848 === (2))){
var state_37847__$1 = state_37847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37847__$1,(4),ch);
} else {
if((state_val_37848 === (9))){
var inst_37834 = (state_37847[(9)]);
var inst_37827 = inst_37834;
var state_37847__$1 = (function (){var statearr_37858 = state_37847;
(statearr_37858[(7)] = inst_37827);

return statearr_37858;
})();
var statearr_37859_37876 = state_37847__$1;
(statearr_37859_37876[(2)] = null);

(statearr_37859_37876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37848 === (5))){
var inst_37827 = (state_37847[(7)]);
var state_37847__$1 = state_37847;
var statearr_37860_37877 = state_37847__$1;
(statearr_37860_37877[(2)] = inst_37827);

(statearr_37860_37877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37848 === (10))){
var inst_37841 = (state_37847[(2)]);
var state_37847__$1 = state_37847;
var statearr_37861_37878 = state_37847__$1;
(statearr_37861_37878[(2)] = inst_37841);

(statearr_37861_37878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37848 === (8))){
var inst_37834 = (state_37847[(9)]);
var inst_37837 = cljs.core.deref.call(null,inst_37834);
var state_37847__$1 = state_37847;
var statearr_37862_37879 = state_37847__$1;
(statearr_37862_37879[(2)] = inst_37837);

(statearr_37862_37879[(1)] = (10));


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
var statearr_37866 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37866[(0)] = cljs$core$async$reduce_$_state_machine__20502__auto__);

(statearr_37866[(1)] = (1));

return statearr_37866;
});
var cljs$core$async$reduce_$_state_machine__20502__auto____1 = (function (state_37847){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37867){if((e37867 instanceof Object)){
var ex__20505__auto__ = e37867;
var statearr_37868_37880 = state_37847;
(statearr_37868_37880[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37881 = state_37847;
state_37847 = G__37881;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20502__auto__ = function(state_37847){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20502__auto____1.call(this,state_37847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20502__auto____0;
cljs$core$async$reduce_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20502__auto____1;
return cljs$core$async$reduce_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_37869 = f__20614__auto__.call(null);
(statearr_37869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_37869;
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
var args37882 = [];
var len__19487__auto___37934 = arguments.length;
var i__19488__auto___37935 = (0);
while(true){
if((i__19488__auto___37935 < len__19487__auto___37934)){
args37882.push((arguments[i__19488__auto___37935]));

var G__37936 = (i__19488__auto___37935 + (1));
i__19488__auto___37935 = G__37936;
continue;
} else {
}
break;
}

var G__37884 = args37882.length;
switch (G__37884) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37882.length)].join('')));

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
return (function (state_37909){
var state_val_37910 = (state_37909[(1)]);
if((state_val_37910 === (7))){
var inst_37891 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
var statearr_37911_37938 = state_37909__$1;
(statearr_37911_37938[(2)] = inst_37891);

(statearr_37911_37938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (1))){
var inst_37885 = cljs.core.seq.call(null,coll);
var inst_37886 = inst_37885;
var state_37909__$1 = (function (){var statearr_37912 = state_37909;
(statearr_37912[(7)] = inst_37886);

return statearr_37912;
})();
var statearr_37913_37939 = state_37909__$1;
(statearr_37913_37939[(2)] = null);

(statearr_37913_37939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (4))){
var inst_37886 = (state_37909[(7)]);
var inst_37889 = cljs.core.first.call(null,inst_37886);
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37909__$1,(7),ch,inst_37889);
} else {
if((state_val_37910 === (13))){
var inst_37903 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
var statearr_37914_37940 = state_37909__$1;
(statearr_37914_37940[(2)] = inst_37903);

(statearr_37914_37940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (6))){
var inst_37894 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
if(cljs.core.truth_(inst_37894)){
var statearr_37915_37941 = state_37909__$1;
(statearr_37915_37941[(1)] = (8));

} else {
var statearr_37916_37942 = state_37909__$1;
(statearr_37916_37942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (3))){
var inst_37907 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37909__$1,inst_37907);
} else {
if((state_val_37910 === (12))){
var state_37909__$1 = state_37909;
var statearr_37917_37943 = state_37909__$1;
(statearr_37917_37943[(2)] = null);

(statearr_37917_37943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (2))){
var inst_37886 = (state_37909[(7)]);
var state_37909__$1 = state_37909;
if(cljs.core.truth_(inst_37886)){
var statearr_37918_37944 = state_37909__$1;
(statearr_37918_37944[(1)] = (4));

} else {
var statearr_37919_37945 = state_37909__$1;
(statearr_37919_37945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (11))){
var inst_37900 = cljs.core.async.close_BANG_.call(null,ch);
var state_37909__$1 = state_37909;
var statearr_37920_37946 = state_37909__$1;
(statearr_37920_37946[(2)] = inst_37900);

(statearr_37920_37946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (9))){
var state_37909__$1 = state_37909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37921_37947 = state_37909__$1;
(statearr_37921_37947[(1)] = (11));

} else {
var statearr_37922_37948 = state_37909__$1;
(statearr_37922_37948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (5))){
var inst_37886 = (state_37909[(7)]);
var state_37909__$1 = state_37909;
var statearr_37923_37949 = state_37909__$1;
(statearr_37923_37949[(2)] = inst_37886);

(statearr_37923_37949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (10))){
var inst_37905 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
var statearr_37924_37950 = state_37909__$1;
(statearr_37924_37950[(2)] = inst_37905);

(statearr_37924_37950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (8))){
var inst_37886 = (state_37909[(7)]);
var inst_37896 = cljs.core.next.call(null,inst_37886);
var inst_37886__$1 = inst_37896;
var state_37909__$1 = (function (){var statearr_37925 = state_37909;
(statearr_37925[(7)] = inst_37886__$1);

return statearr_37925;
})();
var statearr_37926_37951 = state_37909__$1;
(statearr_37926_37951[(2)] = null);

(statearr_37926_37951[(1)] = (2));


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
var statearr_37930 = [null,null,null,null,null,null,null,null];
(statearr_37930[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_37930[(1)] = (1));

return statearr_37930;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_37909){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_37909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e37931){if((e37931 instanceof Object)){
var ex__20505__auto__ = e37931;
var statearr_37932_37952 = state_37909;
(statearr_37932_37952[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37953 = state_37909;
state_37909 = G__37953;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_37909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_37909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_37933 = f__20614__auto__.call(null);
(statearr_37933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_37933;
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
if(typeof cljs.core.async.t_cljs$core$async38175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38175 = (function (mult,ch,cs,meta38176){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38176 = meta38176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38177,meta38176__$1){
var self__ = this;
var _38177__$1 = this;
return (new cljs.core.async.t_cljs$core$async38175(self__.mult,self__.ch,self__.cs,meta38176__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38177){
var self__ = this;
var _38177__$1 = this;
return self__.meta38176;
});})(cs))
;

cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38175.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38176","meta38176",-1353815147,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38175";

cljs.core.async.t_cljs$core$async38175.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async38175");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38175 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38175(mult__$1,ch__$1,cs__$1,meta38176){
return (new cljs.core.async.t_cljs$core$async38175(mult__$1,ch__$1,cs__$1,meta38176));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38175(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20613__auto___38396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___38396,cs,m,dchan,dctr,done){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___38396,cs,m,dchan,dctr,done){
return (function (state_38308){
var state_val_38309 = (state_38308[(1)]);
if((state_val_38309 === (7))){
var inst_38304 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38310_38397 = state_38308__$1;
(statearr_38310_38397[(2)] = inst_38304);

(statearr_38310_38397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (20))){
var inst_38209 = (state_38308[(7)]);
var inst_38219 = cljs.core.first.call(null,inst_38209);
var inst_38220 = cljs.core.nth.call(null,inst_38219,(0),null);
var inst_38221 = cljs.core.nth.call(null,inst_38219,(1),null);
var state_38308__$1 = (function (){var statearr_38311 = state_38308;
(statearr_38311[(8)] = inst_38220);

return statearr_38311;
})();
if(cljs.core.truth_(inst_38221)){
var statearr_38312_38398 = state_38308__$1;
(statearr_38312_38398[(1)] = (22));

} else {
var statearr_38313_38399 = state_38308__$1;
(statearr_38313_38399[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (27))){
var inst_38256 = (state_38308[(9)]);
var inst_38251 = (state_38308[(10)]);
var inst_38180 = (state_38308[(11)]);
var inst_38249 = (state_38308[(12)]);
var inst_38256__$1 = cljs.core._nth.call(null,inst_38249,inst_38251);
var inst_38257 = cljs.core.async.put_BANG_.call(null,inst_38256__$1,inst_38180,done);
var state_38308__$1 = (function (){var statearr_38314 = state_38308;
(statearr_38314[(9)] = inst_38256__$1);

return statearr_38314;
})();
if(cljs.core.truth_(inst_38257)){
var statearr_38315_38400 = state_38308__$1;
(statearr_38315_38400[(1)] = (30));

} else {
var statearr_38316_38401 = state_38308__$1;
(statearr_38316_38401[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (1))){
var state_38308__$1 = state_38308;
var statearr_38317_38402 = state_38308__$1;
(statearr_38317_38402[(2)] = null);

(statearr_38317_38402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (24))){
var inst_38209 = (state_38308[(7)]);
var inst_38226 = (state_38308[(2)]);
var inst_38227 = cljs.core.next.call(null,inst_38209);
var inst_38189 = inst_38227;
var inst_38190 = null;
var inst_38191 = (0);
var inst_38192 = (0);
var state_38308__$1 = (function (){var statearr_38318 = state_38308;
(statearr_38318[(13)] = inst_38190);

(statearr_38318[(14)] = inst_38226);

(statearr_38318[(15)] = inst_38189);

(statearr_38318[(16)] = inst_38191);

(statearr_38318[(17)] = inst_38192);

return statearr_38318;
})();
var statearr_38319_38403 = state_38308__$1;
(statearr_38319_38403[(2)] = null);

(statearr_38319_38403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (39))){
var state_38308__$1 = state_38308;
var statearr_38323_38404 = state_38308__$1;
(statearr_38323_38404[(2)] = null);

(statearr_38323_38404[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (4))){
var inst_38180 = (state_38308[(11)]);
var inst_38180__$1 = (state_38308[(2)]);
var inst_38181 = (inst_38180__$1 == null);
var state_38308__$1 = (function (){var statearr_38324 = state_38308;
(statearr_38324[(11)] = inst_38180__$1);

return statearr_38324;
})();
if(cljs.core.truth_(inst_38181)){
var statearr_38325_38405 = state_38308__$1;
(statearr_38325_38405[(1)] = (5));

} else {
var statearr_38326_38406 = state_38308__$1;
(statearr_38326_38406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (15))){
var inst_38190 = (state_38308[(13)]);
var inst_38189 = (state_38308[(15)]);
var inst_38191 = (state_38308[(16)]);
var inst_38192 = (state_38308[(17)]);
var inst_38205 = (state_38308[(2)]);
var inst_38206 = (inst_38192 + (1));
var tmp38320 = inst_38190;
var tmp38321 = inst_38189;
var tmp38322 = inst_38191;
var inst_38189__$1 = tmp38321;
var inst_38190__$1 = tmp38320;
var inst_38191__$1 = tmp38322;
var inst_38192__$1 = inst_38206;
var state_38308__$1 = (function (){var statearr_38327 = state_38308;
(statearr_38327[(13)] = inst_38190__$1);

(statearr_38327[(15)] = inst_38189__$1);

(statearr_38327[(16)] = inst_38191__$1);

(statearr_38327[(18)] = inst_38205);

(statearr_38327[(17)] = inst_38192__$1);

return statearr_38327;
})();
var statearr_38328_38407 = state_38308__$1;
(statearr_38328_38407[(2)] = null);

(statearr_38328_38407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (21))){
var inst_38230 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38332_38408 = state_38308__$1;
(statearr_38332_38408[(2)] = inst_38230);

(statearr_38332_38408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (31))){
var inst_38256 = (state_38308[(9)]);
var inst_38260 = done.call(null,null);
var inst_38261 = cljs.core.async.untap_STAR_.call(null,m,inst_38256);
var state_38308__$1 = (function (){var statearr_38333 = state_38308;
(statearr_38333[(19)] = inst_38260);

return statearr_38333;
})();
var statearr_38334_38409 = state_38308__$1;
(statearr_38334_38409[(2)] = inst_38261);

(statearr_38334_38409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (32))){
var inst_38251 = (state_38308[(10)]);
var inst_38248 = (state_38308[(20)]);
var inst_38250 = (state_38308[(21)]);
var inst_38249 = (state_38308[(12)]);
var inst_38263 = (state_38308[(2)]);
var inst_38264 = (inst_38251 + (1));
var tmp38329 = inst_38248;
var tmp38330 = inst_38250;
var tmp38331 = inst_38249;
var inst_38248__$1 = tmp38329;
var inst_38249__$1 = tmp38331;
var inst_38250__$1 = tmp38330;
var inst_38251__$1 = inst_38264;
var state_38308__$1 = (function (){var statearr_38335 = state_38308;
(statearr_38335[(22)] = inst_38263);

(statearr_38335[(10)] = inst_38251__$1);

(statearr_38335[(20)] = inst_38248__$1);

(statearr_38335[(21)] = inst_38250__$1);

(statearr_38335[(12)] = inst_38249__$1);

return statearr_38335;
})();
var statearr_38336_38410 = state_38308__$1;
(statearr_38336_38410[(2)] = null);

(statearr_38336_38410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (40))){
var inst_38276 = (state_38308[(23)]);
var inst_38280 = done.call(null,null);
var inst_38281 = cljs.core.async.untap_STAR_.call(null,m,inst_38276);
var state_38308__$1 = (function (){var statearr_38337 = state_38308;
(statearr_38337[(24)] = inst_38280);

return statearr_38337;
})();
var statearr_38338_38411 = state_38308__$1;
(statearr_38338_38411[(2)] = inst_38281);

(statearr_38338_38411[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (33))){
var inst_38267 = (state_38308[(25)]);
var inst_38269 = cljs.core.chunked_seq_QMARK_.call(null,inst_38267);
var state_38308__$1 = state_38308;
if(inst_38269){
var statearr_38339_38412 = state_38308__$1;
(statearr_38339_38412[(1)] = (36));

} else {
var statearr_38340_38413 = state_38308__$1;
(statearr_38340_38413[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (13))){
var inst_38199 = (state_38308[(26)]);
var inst_38202 = cljs.core.async.close_BANG_.call(null,inst_38199);
var state_38308__$1 = state_38308;
var statearr_38341_38414 = state_38308__$1;
(statearr_38341_38414[(2)] = inst_38202);

(statearr_38341_38414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (22))){
var inst_38220 = (state_38308[(8)]);
var inst_38223 = cljs.core.async.close_BANG_.call(null,inst_38220);
var state_38308__$1 = state_38308;
var statearr_38342_38415 = state_38308__$1;
(statearr_38342_38415[(2)] = inst_38223);

(statearr_38342_38415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (36))){
var inst_38267 = (state_38308[(25)]);
var inst_38271 = cljs.core.chunk_first.call(null,inst_38267);
var inst_38272 = cljs.core.chunk_rest.call(null,inst_38267);
var inst_38273 = cljs.core.count.call(null,inst_38271);
var inst_38248 = inst_38272;
var inst_38249 = inst_38271;
var inst_38250 = inst_38273;
var inst_38251 = (0);
var state_38308__$1 = (function (){var statearr_38343 = state_38308;
(statearr_38343[(10)] = inst_38251);

(statearr_38343[(20)] = inst_38248);

(statearr_38343[(21)] = inst_38250);

(statearr_38343[(12)] = inst_38249);

return statearr_38343;
})();
var statearr_38344_38416 = state_38308__$1;
(statearr_38344_38416[(2)] = null);

(statearr_38344_38416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (41))){
var inst_38267 = (state_38308[(25)]);
var inst_38283 = (state_38308[(2)]);
var inst_38284 = cljs.core.next.call(null,inst_38267);
var inst_38248 = inst_38284;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38308__$1 = (function (){var statearr_38345 = state_38308;
(statearr_38345[(10)] = inst_38251);

(statearr_38345[(20)] = inst_38248);

(statearr_38345[(21)] = inst_38250);

(statearr_38345[(12)] = inst_38249);

(statearr_38345[(27)] = inst_38283);

return statearr_38345;
})();
var statearr_38346_38417 = state_38308__$1;
(statearr_38346_38417[(2)] = null);

(statearr_38346_38417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (43))){
var state_38308__$1 = state_38308;
var statearr_38347_38418 = state_38308__$1;
(statearr_38347_38418[(2)] = null);

(statearr_38347_38418[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (29))){
var inst_38292 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38348_38419 = state_38308__$1;
(statearr_38348_38419[(2)] = inst_38292);

(statearr_38348_38419[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (44))){
var inst_38301 = (state_38308[(2)]);
var state_38308__$1 = (function (){var statearr_38349 = state_38308;
(statearr_38349[(28)] = inst_38301);

return statearr_38349;
})();
var statearr_38350_38420 = state_38308__$1;
(statearr_38350_38420[(2)] = null);

(statearr_38350_38420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (6))){
var inst_38240 = (state_38308[(29)]);
var inst_38239 = cljs.core.deref.call(null,cs);
var inst_38240__$1 = cljs.core.keys.call(null,inst_38239);
var inst_38241 = cljs.core.count.call(null,inst_38240__$1);
var inst_38242 = cljs.core.reset_BANG_.call(null,dctr,inst_38241);
var inst_38247 = cljs.core.seq.call(null,inst_38240__$1);
var inst_38248 = inst_38247;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38308__$1 = (function (){var statearr_38351 = state_38308;
(statearr_38351[(30)] = inst_38242);

(statearr_38351[(29)] = inst_38240__$1);

(statearr_38351[(10)] = inst_38251);

(statearr_38351[(20)] = inst_38248);

(statearr_38351[(21)] = inst_38250);

(statearr_38351[(12)] = inst_38249);

return statearr_38351;
})();
var statearr_38352_38421 = state_38308__$1;
(statearr_38352_38421[(2)] = null);

(statearr_38352_38421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (28))){
var inst_38267 = (state_38308[(25)]);
var inst_38248 = (state_38308[(20)]);
var inst_38267__$1 = cljs.core.seq.call(null,inst_38248);
var state_38308__$1 = (function (){var statearr_38353 = state_38308;
(statearr_38353[(25)] = inst_38267__$1);

return statearr_38353;
})();
if(inst_38267__$1){
var statearr_38354_38422 = state_38308__$1;
(statearr_38354_38422[(1)] = (33));

} else {
var statearr_38355_38423 = state_38308__$1;
(statearr_38355_38423[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (25))){
var inst_38251 = (state_38308[(10)]);
var inst_38250 = (state_38308[(21)]);
var inst_38253 = (inst_38251 < inst_38250);
var inst_38254 = inst_38253;
var state_38308__$1 = state_38308;
if(cljs.core.truth_(inst_38254)){
var statearr_38356_38424 = state_38308__$1;
(statearr_38356_38424[(1)] = (27));

} else {
var statearr_38357_38425 = state_38308__$1;
(statearr_38357_38425[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (34))){
var state_38308__$1 = state_38308;
var statearr_38358_38426 = state_38308__$1;
(statearr_38358_38426[(2)] = null);

(statearr_38358_38426[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (17))){
var state_38308__$1 = state_38308;
var statearr_38359_38427 = state_38308__$1;
(statearr_38359_38427[(2)] = null);

(statearr_38359_38427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (3))){
var inst_38306 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38308__$1,inst_38306);
} else {
if((state_val_38309 === (12))){
var inst_38235 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38360_38428 = state_38308__$1;
(statearr_38360_38428[(2)] = inst_38235);

(statearr_38360_38428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (2))){
var state_38308__$1 = state_38308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38308__$1,(4),ch);
} else {
if((state_val_38309 === (23))){
var state_38308__$1 = state_38308;
var statearr_38361_38429 = state_38308__$1;
(statearr_38361_38429[(2)] = null);

(statearr_38361_38429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (35))){
var inst_38290 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38362_38430 = state_38308__$1;
(statearr_38362_38430[(2)] = inst_38290);

(statearr_38362_38430[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (19))){
var inst_38209 = (state_38308[(7)]);
var inst_38213 = cljs.core.chunk_first.call(null,inst_38209);
var inst_38214 = cljs.core.chunk_rest.call(null,inst_38209);
var inst_38215 = cljs.core.count.call(null,inst_38213);
var inst_38189 = inst_38214;
var inst_38190 = inst_38213;
var inst_38191 = inst_38215;
var inst_38192 = (0);
var state_38308__$1 = (function (){var statearr_38363 = state_38308;
(statearr_38363[(13)] = inst_38190);

(statearr_38363[(15)] = inst_38189);

(statearr_38363[(16)] = inst_38191);

(statearr_38363[(17)] = inst_38192);

return statearr_38363;
})();
var statearr_38364_38431 = state_38308__$1;
(statearr_38364_38431[(2)] = null);

(statearr_38364_38431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (11))){
var inst_38209 = (state_38308[(7)]);
var inst_38189 = (state_38308[(15)]);
var inst_38209__$1 = cljs.core.seq.call(null,inst_38189);
var state_38308__$1 = (function (){var statearr_38365 = state_38308;
(statearr_38365[(7)] = inst_38209__$1);

return statearr_38365;
})();
if(inst_38209__$1){
var statearr_38366_38432 = state_38308__$1;
(statearr_38366_38432[(1)] = (16));

} else {
var statearr_38367_38433 = state_38308__$1;
(statearr_38367_38433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (9))){
var inst_38237 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38368_38434 = state_38308__$1;
(statearr_38368_38434[(2)] = inst_38237);

(statearr_38368_38434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (5))){
var inst_38187 = cljs.core.deref.call(null,cs);
var inst_38188 = cljs.core.seq.call(null,inst_38187);
var inst_38189 = inst_38188;
var inst_38190 = null;
var inst_38191 = (0);
var inst_38192 = (0);
var state_38308__$1 = (function (){var statearr_38369 = state_38308;
(statearr_38369[(13)] = inst_38190);

(statearr_38369[(15)] = inst_38189);

(statearr_38369[(16)] = inst_38191);

(statearr_38369[(17)] = inst_38192);

return statearr_38369;
})();
var statearr_38370_38435 = state_38308__$1;
(statearr_38370_38435[(2)] = null);

(statearr_38370_38435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (14))){
var state_38308__$1 = state_38308;
var statearr_38371_38436 = state_38308__$1;
(statearr_38371_38436[(2)] = null);

(statearr_38371_38436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (45))){
var inst_38298 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38372_38437 = state_38308__$1;
(statearr_38372_38437[(2)] = inst_38298);

(statearr_38372_38437[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (26))){
var inst_38240 = (state_38308[(29)]);
var inst_38294 = (state_38308[(2)]);
var inst_38295 = cljs.core.seq.call(null,inst_38240);
var state_38308__$1 = (function (){var statearr_38373 = state_38308;
(statearr_38373[(31)] = inst_38294);

return statearr_38373;
})();
if(inst_38295){
var statearr_38374_38438 = state_38308__$1;
(statearr_38374_38438[(1)] = (42));

} else {
var statearr_38375_38439 = state_38308__$1;
(statearr_38375_38439[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (16))){
var inst_38209 = (state_38308[(7)]);
var inst_38211 = cljs.core.chunked_seq_QMARK_.call(null,inst_38209);
var state_38308__$1 = state_38308;
if(inst_38211){
var statearr_38376_38440 = state_38308__$1;
(statearr_38376_38440[(1)] = (19));

} else {
var statearr_38377_38441 = state_38308__$1;
(statearr_38377_38441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (38))){
var inst_38287 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38378_38442 = state_38308__$1;
(statearr_38378_38442[(2)] = inst_38287);

(statearr_38378_38442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (30))){
var state_38308__$1 = state_38308;
var statearr_38379_38443 = state_38308__$1;
(statearr_38379_38443[(2)] = null);

(statearr_38379_38443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (10))){
var inst_38190 = (state_38308[(13)]);
var inst_38192 = (state_38308[(17)]);
var inst_38198 = cljs.core._nth.call(null,inst_38190,inst_38192);
var inst_38199 = cljs.core.nth.call(null,inst_38198,(0),null);
var inst_38200 = cljs.core.nth.call(null,inst_38198,(1),null);
var state_38308__$1 = (function (){var statearr_38380 = state_38308;
(statearr_38380[(26)] = inst_38199);

return statearr_38380;
})();
if(cljs.core.truth_(inst_38200)){
var statearr_38381_38444 = state_38308__$1;
(statearr_38381_38444[(1)] = (13));

} else {
var statearr_38382_38445 = state_38308__$1;
(statearr_38382_38445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (18))){
var inst_38233 = (state_38308[(2)]);
var state_38308__$1 = state_38308;
var statearr_38383_38446 = state_38308__$1;
(statearr_38383_38446[(2)] = inst_38233);

(statearr_38383_38446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (42))){
var state_38308__$1 = state_38308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38308__$1,(45),dchan);
} else {
if((state_val_38309 === (37))){
var inst_38276 = (state_38308[(23)]);
var inst_38180 = (state_38308[(11)]);
var inst_38267 = (state_38308[(25)]);
var inst_38276__$1 = cljs.core.first.call(null,inst_38267);
var inst_38277 = cljs.core.async.put_BANG_.call(null,inst_38276__$1,inst_38180,done);
var state_38308__$1 = (function (){var statearr_38384 = state_38308;
(statearr_38384[(23)] = inst_38276__$1);

return statearr_38384;
})();
if(cljs.core.truth_(inst_38277)){
var statearr_38385_38447 = state_38308__$1;
(statearr_38385_38447[(1)] = (39));

} else {
var statearr_38386_38448 = state_38308__$1;
(statearr_38386_38448[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38309 === (8))){
var inst_38191 = (state_38308[(16)]);
var inst_38192 = (state_38308[(17)]);
var inst_38194 = (inst_38192 < inst_38191);
var inst_38195 = inst_38194;
var state_38308__$1 = state_38308;
if(cljs.core.truth_(inst_38195)){
var statearr_38387_38449 = state_38308__$1;
(statearr_38387_38449[(1)] = (10));

} else {
var statearr_38388_38450 = state_38308__$1;
(statearr_38388_38450[(1)] = (11));

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
});})(c__20613__auto___38396,cs,m,dchan,dctr,done))
;
return ((function (switch__20501__auto__,c__20613__auto___38396,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20502__auto__ = null;
var cljs$core$async$mult_$_state_machine__20502__auto____0 = (function (){
var statearr_38392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38392[(0)] = cljs$core$async$mult_$_state_machine__20502__auto__);

(statearr_38392[(1)] = (1));

return statearr_38392;
});
var cljs$core$async$mult_$_state_machine__20502__auto____1 = (function (state_38308){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_38308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e38393){if((e38393 instanceof Object)){
var ex__20505__auto__ = e38393;
var statearr_38394_38451 = state_38308;
(statearr_38394_38451[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38452 = state_38308;
state_38308 = G__38452;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20502__auto__ = function(state_38308){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20502__auto____1.call(this,state_38308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20502__auto____0;
cljs$core$async$mult_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20502__auto____1;
return cljs$core$async$mult_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___38396,cs,m,dchan,dctr,done))
})();
var state__20615__auto__ = (function (){var statearr_38395 = f__20614__auto__.call(null);
(statearr_38395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___38396);

return statearr_38395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___38396,cs,m,dchan,dctr,done))
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
var args38453 = [];
var len__19487__auto___38456 = arguments.length;
var i__19488__auto___38457 = (0);
while(true){
if((i__19488__auto___38457 < len__19487__auto___38456)){
args38453.push((arguments[i__19488__auto___38457]));

var G__38458 = (i__19488__auto___38457 + (1));
i__19488__auto___38457 = G__38458;
continue;
} else {
}
break;
}

var G__38455 = args38453.length;
switch (G__38455) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38453.length)].join('')));

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
var len__19487__auto___38470 = arguments.length;
var i__19488__auto___38471 = (0);
while(true){
if((i__19488__auto___38471 < len__19487__auto___38470)){
args__19494__auto__.push((arguments[i__19488__auto___38471]));

var G__38472 = (i__19488__auto___38471 + (1));
i__19488__auto___38471 = G__38472;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38464){
var map__38465 = p__38464;
var map__38465__$1 = ((((!((map__38465 == null)))?((((map__38465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38465):map__38465);
var opts = map__38465__$1;
var statearr_38467_38473 = state;
(statearr_38467_38473[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38465,map__38465__$1,opts){
return (function (val){
var statearr_38468_38474 = state;
(statearr_38468_38474[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38465,map__38465__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38469_38475 = state;
(statearr_38469_38475[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38460){
var G__38461 = cljs.core.first.call(null,seq38460);
var seq38460__$1 = cljs.core.next.call(null,seq38460);
var G__38462 = cljs.core.first.call(null,seq38460__$1);
var seq38460__$2 = cljs.core.next.call(null,seq38460__$1);
var G__38463 = cljs.core.first.call(null,seq38460__$2);
var seq38460__$3 = cljs.core.next.call(null,seq38460__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38461,G__38462,G__38463,seq38460__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38639 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38640){
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
this.meta38640 = meta38640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38641,meta38640__$1){
var self__ = this;
var _38641__$1 = this;
return (new cljs.core.async.t_cljs$core$async38639(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38640__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38641){
var self__ = this;
var _38641__$1 = this;
return self__.meta38640;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38639.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38640","meta38640",340113074,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38639";

cljs.core.async.t_cljs$core$async38639.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async38639");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38639 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38639(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38640){
return (new cljs.core.async.t_cljs$core$async38639(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38640));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38639(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20613__auto___38802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___38802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___38802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38739){
var state_val_38740 = (state_38739[(1)]);
if((state_val_38740 === (7))){
var inst_38657 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38741_38803 = state_38739__$1;
(statearr_38741_38803[(2)] = inst_38657);

(statearr_38741_38803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (20))){
var inst_38669 = (state_38739[(7)]);
var state_38739__$1 = state_38739;
var statearr_38742_38804 = state_38739__$1;
(statearr_38742_38804[(2)] = inst_38669);

(statearr_38742_38804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (27))){
var state_38739__$1 = state_38739;
var statearr_38743_38805 = state_38739__$1;
(statearr_38743_38805[(2)] = null);

(statearr_38743_38805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (1))){
var inst_38645 = (state_38739[(8)]);
var inst_38645__$1 = calc_state.call(null);
var inst_38647 = (inst_38645__$1 == null);
var inst_38648 = cljs.core.not.call(null,inst_38647);
var state_38739__$1 = (function (){var statearr_38744 = state_38739;
(statearr_38744[(8)] = inst_38645__$1);

return statearr_38744;
})();
if(inst_38648){
var statearr_38745_38806 = state_38739__$1;
(statearr_38745_38806[(1)] = (2));

} else {
var statearr_38746_38807 = state_38739__$1;
(statearr_38746_38807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (24))){
var inst_38699 = (state_38739[(9)]);
var inst_38692 = (state_38739[(10)]);
var inst_38713 = (state_38739[(11)]);
var inst_38713__$1 = inst_38692.call(null,inst_38699);
var state_38739__$1 = (function (){var statearr_38747 = state_38739;
(statearr_38747[(11)] = inst_38713__$1);

return statearr_38747;
})();
if(cljs.core.truth_(inst_38713__$1)){
var statearr_38748_38808 = state_38739__$1;
(statearr_38748_38808[(1)] = (29));

} else {
var statearr_38749_38809 = state_38739__$1;
(statearr_38749_38809[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (4))){
var inst_38660 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38660)){
var statearr_38750_38810 = state_38739__$1;
(statearr_38750_38810[(1)] = (8));

} else {
var statearr_38751_38811 = state_38739__$1;
(statearr_38751_38811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (15))){
var inst_38686 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38686)){
var statearr_38752_38812 = state_38739__$1;
(statearr_38752_38812[(1)] = (19));

} else {
var statearr_38753_38813 = state_38739__$1;
(statearr_38753_38813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (21))){
var inst_38691 = (state_38739[(12)]);
var inst_38691__$1 = (state_38739[(2)]);
var inst_38692 = cljs.core.get.call(null,inst_38691__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38693 = cljs.core.get.call(null,inst_38691__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38694 = cljs.core.get.call(null,inst_38691__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38739__$1 = (function (){var statearr_38754 = state_38739;
(statearr_38754[(10)] = inst_38692);

(statearr_38754[(13)] = inst_38693);

(statearr_38754[(12)] = inst_38691__$1);

return statearr_38754;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38739__$1,(22),inst_38694);
} else {
if((state_val_38740 === (31))){
var inst_38721 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38721)){
var statearr_38755_38814 = state_38739__$1;
(statearr_38755_38814[(1)] = (32));

} else {
var statearr_38756_38815 = state_38739__$1;
(statearr_38756_38815[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (32))){
var inst_38698 = (state_38739[(14)]);
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38739__$1,(35),out,inst_38698);
} else {
if((state_val_38740 === (33))){
var inst_38691 = (state_38739[(12)]);
var inst_38669 = inst_38691;
var state_38739__$1 = (function (){var statearr_38757 = state_38739;
(statearr_38757[(7)] = inst_38669);

return statearr_38757;
})();
var statearr_38758_38816 = state_38739__$1;
(statearr_38758_38816[(2)] = null);

(statearr_38758_38816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (13))){
var inst_38669 = (state_38739[(7)]);
var inst_38676 = inst_38669.cljs$lang$protocol_mask$partition0$;
var inst_38677 = (inst_38676 & (64));
var inst_38678 = inst_38669.cljs$core$ISeq$;
var inst_38679 = (inst_38677) || (inst_38678);
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38679)){
var statearr_38759_38817 = state_38739__$1;
(statearr_38759_38817[(1)] = (16));

} else {
var statearr_38760_38818 = state_38739__$1;
(statearr_38760_38818[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (22))){
var inst_38699 = (state_38739[(9)]);
var inst_38698 = (state_38739[(14)]);
var inst_38697 = (state_38739[(2)]);
var inst_38698__$1 = cljs.core.nth.call(null,inst_38697,(0),null);
var inst_38699__$1 = cljs.core.nth.call(null,inst_38697,(1),null);
var inst_38700 = (inst_38698__$1 == null);
var inst_38701 = cljs.core._EQ_.call(null,inst_38699__$1,change);
var inst_38702 = (inst_38700) || (inst_38701);
var state_38739__$1 = (function (){var statearr_38761 = state_38739;
(statearr_38761[(9)] = inst_38699__$1);

(statearr_38761[(14)] = inst_38698__$1);

return statearr_38761;
})();
if(cljs.core.truth_(inst_38702)){
var statearr_38762_38819 = state_38739__$1;
(statearr_38762_38819[(1)] = (23));

} else {
var statearr_38763_38820 = state_38739__$1;
(statearr_38763_38820[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (36))){
var inst_38691 = (state_38739[(12)]);
var inst_38669 = inst_38691;
var state_38739__$1 = (function (){var statearr_38764 = state_38739;
(statearr_38764[(7)] = inst_38669);

return statearr_38764;
})();
var statearr_38765_38821 = state_38739__$1;
(statearr_38765_38821[(2)] = null);

(statearr_38765_38821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (29))){
var inst_38713 = (state_38739[(11)]);
var state_38739__$1 = state_38739;
var statearr_38766_38822 = state_38739__$1;
(statearr_38766_38822[(2)] = inst_38713);

(statearr_38766_38822[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (6))){
var state_38739__$1 = state_38739;
var statearr_38767_38823 = state_38739__$1;
(statearr_38767_38823[(2)] = false);

(statearr_38767_38823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (28))){
var inst_38709 = (state_38739[(2)]);
var inst_38710 = calc_state.call(null);
var inst_38669 = inst_38710;
var state_38739__$1 = (function (){var statearr_38768 = state_38739;
(statearr_38768[(15)] = inst_38709);

(statearr_38768[(7)] = inst_38669);

return statearr_38768;
})();
var statearr_38769_38824 = state_38739__$1;
(statearr_38769_38824[(2)] = null);

(statearr_38769_38824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (25))){
var inst_38735 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38770_38825 = state_38739__$1;
(statearr_38770_38825[(2)] = inst_38735);

(statearr_38770_38825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (34))){
var inst_38733 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38771_38826 = state_38739__$1;
(statearr_38771_38826[(2)] = inst_38733);

(statearr_38771_38826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (17))){
var state_38739__$1 = state_38739;
var statearr_38772_38827 = state_38739__$1;
(statearr_38772_38827[(2)] = false);

(statearr_38772_38827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (3))){
var state_38739__$1 = state_38739;
var statearr_38773_38828 = state_38739__$1;
(statearr_38773_38828[(2)] = false);

(statearr_38773_38828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (12))){
var inst_38737 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38739__$1,inst_38737);
} else {
if((state_val_38740 === (2))){
var inst_38645 = (state_38739[(8)]);
var inst_38650 = inst_38645.cljs$lang$protocol_mask$partition0$;
var inst_38651 = (inst_38650 & (64));
var inst_38652 = inst_38645.cljs$core$ISeq$;
var inst_38653 = (inst_38651) || (inst_38652);
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38653)){
var statearr_38774_38829 = state_38739__$1;
(statearr_38774_38829[(1)] = (5));

} else {
var statearr_38775_38830 = state_38739__$1;
(statearr_38775_38830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (23))){
var inst_38698 = (state_38739[(14)]);
var inst_38704 = (inst_38698 == null);
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38704)){
var statearr_38776_38831 = state_38739__$1;
(statearr_38776_38831[(1)] = (26));

} else {
var statearr_38777_38832 = state_38739__$1;
(statearr_38777_38832[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (35))){
var inst_38724 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38724)){
var statearr_38778_38833 = state_38739__$1;
(statearr_38778_38833[(1)] = (36));

} else {
var statearr_38779_38834 = state_38739__$1;
(statearr_38779_38834[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (19))){
var inst_38669 = (state_38739[(7)]);
var inst_38688 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38669);
var state_38739__$1 = state_38739;
var statearr_38780_38835 = state_38739__$1;
(statearr_38780_38835[(2)] = inst_38688);

(statearr_38780_38835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (11))){
var inst_38669 = (state_38739[(7)]);
var inst_38673 = (inst_38669 == null);
var inst_38674 = cljs.core.not.call(null,inst_38673);
var state_38739__$1 = state_38739;
if(inst_38674){
var statearr_38781_38836 = state_38739__$1;
(statearr_38781_38836[(1)] = (13));

} else {
var statearr_38782_38837 = state_38739__$1;
(statearr_38782_38837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (9))){
var inst_38645 = (state_38739[(8)]);
var state_38739__$1 = state_38739;
var statearr_38783_38838 = state_38739__$1;
(statearr_38783_38838[(2)] = inst_38645);

(statearr_38783_38838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (5))){
var state_38739__$1 = state_38739;
var statearr_38784_38839 = state_38739__$1;
(statearr_38784_38839[(2)] = true);

(statearr_38784_38839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (14))){
var state_38739__$1 = state_38739;
var statearr_38785_38840 = state_38739__$1;
(statearr_38785_38840[(2)] = false);

(statearr_38785_38840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (26))){
var inst_38699 = (state_38739[(9)]);
var inst_38706 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38699);
var state_38739__$1 = state_38739;
var statearr_38786_38841 = state_38739__$1;
(statearr_38786_38841[(2)] = inst_38706);

(statearr_38786_38841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (16))){
var state_38739__$1 = state_38739;
var statearr_38787_38842 = state_38739__$1;
(statearr_38787_38842[(2)] = true);

(statearr_38787_38842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (38))){
var inst_38729 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38788_38843 = state_38739__$1;
(statearr_38788_38843[(2)] = inst_38729);

(statearr_38788_38843[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (30))){
var inst_38699 = (state_38739[(9)]);
var inst_38692 = (state_38739[(10)]);
var inst_38693 = (state_38739[(13)]);
var inst_38716 = cljs.core.empty_QMARK_.call(null,inst_38692);
var inst_38717 = inst_38693.call(null,inst_38699);
var inst_38718 = cljs.core.not.call(null,inst_38717);
var inst_38719 = (inst_38716) && (inst_38718);
var state_38739__$1 = state_38739;
var statearr_38789_38844 = state_38739__$1;
(statearr_38789_38844[(2)] = inst_38719);

(statearr_38789_38844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (10))){
var inst_38645 = (state_38739[(8)]);
var inst_38665 = (state_38739[(2)]);
var inst_38666 = cljs.core.get.call(null,inst_38665,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38667 = cljs.core.get.call(null,inst_38665,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38668 = cljs.core.get.call(null,inst_38665,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38669 = inst_38645;
var state_38739__$1 = (function (){var statearr_38790 = state_38739;
(statearr_38790[(7)] = inst_38669);

(statearr_38790[(16)] = inst_38668);

(statearr_38790[(17)] = inst_38666);

(statearr_38790[(18)] = inst_38667);

return statearr_38790;
})();
var statearr_38791_38845 = state_38739__$1;
(statearr_38791_38845[(2)] = null);

(statearr_38791_38845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (18))){
var inst_38683 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38792_38846 = state_38739__$1;
(statearr_38792_38846[(2)] = inst_38683);

(statearr_38792_38846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (37))){
var state_38739__$1 = state_38739;
var statearr_38793_38847 = state_38739__$1;
(statearr_38793_38847[(2)] = null);

(statearr_38793_38847[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (8))){
var inst_38645 = (state_38739[(8)]);
var inst_38662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38645);
var state_38739__$1 = state_38739;
var statearr_38794_38848 = state_38739__$1;
(statearr_38794_38848[(2)] = inst_38662);

(statearr_38794_38848[(1)] = (10));


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
});})(c__20613__auto___38802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20501__auto__,c__20613__auto___38802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20502__auto__ = null;
var cljs$core$async$mix_$_state_machine__20502__auto____0 = (function (){
var statearr_38798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38798[(0)] = cljs$core$async$mix_$_state_machine__20502__auto__);

(statearr_38798[(1)] = (1));

return statearr_38798;
});
var cljs$core$async$mix_$_state_machine__20502__auto____1 = (function (state_38739){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_38739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e38799){if((e38799 instanceof Object)){
var ex__20505__auto__ = e38799;
var statearr_38800_38849 = state_38739;
(statearr_38800_38849[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38850 = state_38739;
state_38739 = G__38850;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20502__auto__ = function(state_38739){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20502__auto____1.call(this,state_38739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20502__auto____0;
cljs$core$async$mix_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20502__auto____1;
return cljs$core$async$mix_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___38802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20615__auto__ = (function (){var statearr_38801 = f__20614__auto__.call(null);
(statearr_38801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___38802);

return statearr_38801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___38802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args38851 = [];
var len__19487__auto___38854 = arguments.length;
var i__19488__auto___38855 = (0);
while(true){
if((i__19488__auto___38855 < len__19487__auto___38854)){
args38851.push((arguments[i__19488__auto___38855]));

var G__38856 = (i__19488__auto___38855 + (1));
i__19488__auto___38855 = G__38856;
continue;
} else {
}
break;
}

var G__38853 = args38851.length;
switch (G__38853) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38851.length)].join('')));

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
var args38859 = [];
var len__19487__auto___38984 = arguments.length;
var i__19488__auto___38985 = (0);
while(true){
if((i__19488__auto___38985 < len__19487__auto___38984)){
args38859.push((arguments[i__19488__auto___38985]));

var G__38986 = (i__19488__auto___38985 + (1));
i__19488__auto___38985 = G__38986;
continue;
} else {
}
break;
}

var G__38861 = args38859.length;
switch (G__38861) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38859.length)].join('')));

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
return (function (p1__38858_SHARP_){
if(cljs.core.truth_(p1__38858_SHARP_.call(null,topic))){
return p1__38858_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18417__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38862 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38863){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38863 = meta38863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38864,meta38863__$1){
var self__ = this;
var _38864__$1 = this;
return (new cljs.core.async.t_cljs$core$async38862(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38863__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38864){
var self__ = this;
var _38864__$1 = this;
return self__.meta38863;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38862.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38863","meta38863",1830149540,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38862";

cljs.core.async.t_cljs$core$async38862.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async38862");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38862 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38863){
return (new cljs.core.async.t_cljs$core$async38862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38863));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38862(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20613__auto___38988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___38988,mults,ensure_mult,p){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___38988,mults,ensure_mult,p){
return (function (state_38936){
var state_val_38937 = (state_38936[(1)]);
if((state_val_38937 === (7))){
var inst_38932 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_38938_38989 = state_38936__$1;
(statearr_38938_38989[(2)] = inst_38932);

(statearr_38938_38989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (20))){
var state_38936__$1 = state_38936;
var statearr_38939_38990 = state_38936__$1;
(statearr_38939_38990[(2)] = null);

(statearr_38939_38990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (1))){
var state_38936__$1 = state_38936;
var statearr_38940_38991 = state_38936__$1;
(statearr_38940_38991[(2)] = null);

(statearr_38940_38991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (24))){
var inst_38915 = (state_38936[(7)]);
var inst_38924 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38915);
var state_38936__$1 = state_38936;
var statearr_38941_38992 = state_38936__$1;
(statearr_38941_38992[(2)] = inst_38924);

(statearr_38941_38992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (4))){
var inst_38867 = (state_38936[(8)]);
var inst_38867__$1 = (state_38936[(2)]);
var inst_38868 = (inst_38867__$1 == null);
var state_38936__$1 = (function (){var statearr_38942 = state_38936;
(statearr_38942[(8)] = inst_38867__$1);

return statearr_38942;
})();
if(cljs.core.truth_(inst_38868)){
var statearr_38943_38993 = state_38936__$1;
(statearr_38943_38993[(1)] = (5));

} else {
var statearr_38944_38994 = state_38936__$1;
(statearr_38944_38994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (15))){
var inst_38909 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_38945_38995 = state_38936__$1;
(statearr_38945_38995[(2)] = inst_38909);

(statearr_38945_38995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (21))){
var inst_38929 = (state_38936[(2)]);
var state_38936__$1 = (function (){var statearr_38946 = state_38936;
(statearr_38946[(9)] = inst_38929);

return statearr_38946;
})();
var statearr_38947_38996 = state_38936__$1;
(statearr_38947_38996[(2)] = null);

(statearr_38947_38996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (13))){
var inst_38891 = (state_38936[(10)]);
var inst_38893 = cljs.core.chunked_seq_QMARK_.call(null,inst_38891);
var state_38936__$1 = state_38936;
if(inst_38893){
var statearr_38948_38997 = state_38936__$1;
(statearr_38948_38997[(1)] = (16));

} else {
var statearr_38949_38998 = state_38936__$1;
(statearr_38949_38998[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (22))){
var inst_38921 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
if(cljs.core.truth_(inst_38921)){
var statearr_38950_38999 = state_38936__$1;
(statearr_38950_38999[(1)] = (23));

} else {
var statearr_38951_39000 = state_38936__$1;
(statearr_38951_39000[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (6))){
var inst_38915 = (state_38936[(7)]);
var inst_38867 = (state_38936[(8)]);
var inst_38917 = (state_38936[(11)]);
var inst_38915__$1 = topic_fn.call(null,inst_38867);
var inst_38916 = cljs.core.deref.call(null,mults);
var inst_38917__$1 = cljs.core.get.call(null,inst_38916,inst_38915__$1);
var state_38936__$1 = (function (){var statearr_38952 = state_38936;
(statearr_38952[(7)] = inst_38915__$1);

(statearr_38952[(11)] = inst_38917__$1);

return statearr_38952;
})();
if(cljs.core.truth_(inst_38917__$1)){
var statearr_38953_39001 = state_38936__$1;
(statearr_38953_39001[(1)] = (19));

} else {
var statearr_38954_39002 = state_38936__$1;
(statearr_38954_39002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (25))){
var inst_38926 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_38955_39003 = state_38936__$1;
(statearr_38955_39003[(2)] = inst_38926);

(statearr_38955_39003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (17))){
var inst_38891 = (state_38936[(10)]);
var inst_38900 = cljs.core.first.call(null,inst_38891);
var inst_38901 = cljs.core.async.muxch_STAR_.call(null,inst_38900);
var inst_38902 = cljs.core.async.close_BANG_.call(null,inst_38901);
var inst_38903 = cljs.core.next.call(null,inst_38891);
var inst_38877 = inst_38903;
var inst_38878 = null;
var inst_38879 = (0);
var inst_38880 = (0);
var state_38936__$1 = (function (){var statearr_38956 = state_38936;
(statearr_38956[(12)] = inst_38878);

(statearr_38956[(13)] = inst_38880);

(statearr_38956[(14)] = inst_38879);

(statearr_38956[(15)] = inst_38877);

(statearr_38956[(16)] = inst_38902);

return statearr_38956;
})();
var statearr_38957_39004 = state_38936__$1;
(statearr_38957_39004[(2)] = null);

(statearr_38957_39004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (3))){
var inst_38934 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38936__$1,inst_38934);
} else {
if((state_val_38937 === (12))){
var inst_38911 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_38958_39005 = state_38936__$1;
(statearr_38958_39005[(2)] = inst_38911);

(statearr_38958_39005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (2))){
var state_38936__$1 = state_38936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38936__$1,(4),ch);
} else {
if((state_val_38937 === (23))){
var state_38936__$1 = state_38936;
var statearr_38959_39006 = state_38936__$1;
(statearr_38959_39006[(2)] = null);

(statearr_38959_39006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (19))){
var inst_38867 = (state_38936[(8)]);
var inst_38917 = (state_38936[(11)]);
var inst_38919 = cljs.core.async.muxch_STAR_.call(null,inst_38917);
var state_38936__$1 = state_38936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38936__$1,(22),inst_38919,inst_38867);
} else {
if((state_val_38937 === (11))){
var inst_38877 = (state_38936[(15)]);
var inst_38891 = (state_38936[(10)]);
var inst_38891__$1 = cljs.core.seq.call(null,inst_38877);
var state_38936__$1 = (function (){var statearr_38960 = state_38936;
(statearr_38960[(10)] = inst_38891__$1);

return statearr_38960;
})();
if(inst_38891__$1){
var statearr_38961_39007 = state_38936__$1;
(statearr_38961_39007[(1)] = (13));

} else {
var statearr_38962_39008 = state_38936__$1;
(statearr_38962_39008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (9))){
var inst_38913 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_38963_39009 = state_38936__$1;
(statearr_38963_39009[(2)] = inst_38913);

(statearr_38963_39009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (5))){
var inst_38874 = cljs.core.deref.call(null,mults);
var inst_38875 = cljs.core.vals.call(null,inst_38874);
var inst_38876 = cljs.core.seq.call(null,inst_38875);
var inst_38877 = inst_38876;
var inst_38878 = null;
var inst_38879 = (0);
var inst_38880 = (0);
var state_38936__$1 = (function (){var statearr_38964 = state_38936;
(statearr_38964[(12)] = inst_38878);

(statearr_38964[(13)] = inst_38880);

(statearr_38964[(14)] = inst_38879);

(statearr_38964[(15)] = inst_38877);

return statearr_38964;
})();
var statearr_38965_39010 = state_38936__$1;
(statearr_38965_39010[(2)] = null);

(statearr_38965_39010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (14))){
var state_38936__$1 = state_38936;
var statearr_38969_39011 = state_38936__$1;
(statearr_38969_39011[(2)] = null);

(statearr_38969_39011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (16))){
var inst_38891 = (state_38936[(10)]);
var inst_38895 = cljs.core.chunk_first.call(null,inst_38891);
var inst_38896 = cljs.core.chunk_rest.call(null,inst_38891);
var inst_38897 = cljs.core.count.call(null,inst_38895);
var inst_38877 = inst_38896;
var inst_38878 = inst_38895;
var inst_38879 = inst_38897;
var inst_38880 = (0);
var state_38936__$1 = (function (){var statearr_38970 = state_38936;
(statearr_38970[(12)] = inst_38878);

(statearr_38970[(13)] = inst_38880);

(statearr_38970[(14)] = inst_38879);

(statearr_38970[(15)] = inst_38877);

return statearr_38970;
})();
var statearr_38971_39012 = state_38936__$1;
(statearr_38971_39012[(2)] = null);

(statearr_38971_39012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (10))){
var inst_38878 = (state_38936[(12)]);
var inst_38880 = (state_38936[(13)]);
var inst_38879 = (state_38936[(14)]);
var inst_38877 = (state_38936[(15)]);
var inst_38885 = cljs.core._nth.call(null,inst_38878,inst_38880);
var inst_38886 = cljs.core.async.muxch_STAR_.call(null,inst_38885);
var inst_38887 = cljs.core.async.close_BANG_.call(null,inst_38886);
var inst_38888 = (inst_38880 + (1));
var tmp38966 = inst_38878;
var tmp38967 = inst_38879;
var tmp38968 = inst_38877;
var inst_38877__$1 = tmp38968;
var inst_38878__$1 = tmp38966;
var inst_38879__$1 = tmp38967;
var inst_38880__$1 = inst_38888;
var state_38936__$1 = (function (){var statearr_38972 = state_38936;
(statearr_38972[(12)] = inst_38878__$1);

(statearr_38972[(13)] = inst_38880__$1);

(statearr_38972[(14)] = inst_38879__$1);

(statearr_38972[(15)] = inst_38877__$1);

(statearr_38972[(17)] = inst_38887);

return statearr_38972;
})();
var statearr_38973_39013 = state_38936__$1;
(statearr_38973_39013[(2)] = null);

(statearr_38973_39013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (18))){
var inst_38906 = (state_38936[(2)]);
var state_38936__$1 = state_38936;
var statearr_38974_39014 = state_38936__$1;
(statearr_38974_39014[(2)] = inst_38906);

(statearr_38974_39014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38937 === (8))){
var inst_38880 = (state_38936[(13)]);
var inst_38879 = (state_38936[(14)]);
var inst_38882 = (inst_38880 < inst_38879);
var inst_38883 = inst_38882;
var state_38936__$1 = state_38936;
if(cljs.core.truth_(inst_38883)){
var statearr_38975_39015 = state_38936__$1;
(statearr_38975_39015[(1)] = (10));

} else {
var statearr_38976_39016 = state_38936__$1;
(statearr_38976_39016[(1)] = (11));

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
});})(c__20613__auto___38988,mults,ensure_mult,p))
;
return ((function (switch__20501__auto__,c__20613__auto___38988,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_38980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38980[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_38980[(1)] = (1));

return statearr_38980;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_38936){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_38936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e38981){if((e38981 instanceof Object)){
var ex__20505__auto__ = e38981;
var statearr_38982_39017 = state_38936;
(statearr_38982_39017[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39018 = state_38936;
state_38936 = G__39018;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_38936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_38936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___38988,mults,ensure_mult,p))
})();
var state__20615__auto__ = (function (){var statearr_38983 = f__20614__auto__.call(null);
(statearr_38983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___38988);

return statearr_38983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___38988,mults,ensure_mult,p))
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
var args39019 = [];
var len__19487__auto___39022 = arguments.length;
var i__19488__auto___39023 = (0);
while(true){
if((i__19488__auto___39023 < len__19487__auto___39022)){
args39019.push((arguments[i__19488__auto___39023]));

var G__39024 = (i__19488__auto___39023 + (1));
i__19488__auto___39023 = G__39024;
continue;
} else {
}
break;
}

var G__39021 = args39019.length;
switch (G__39021) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39019.length)].join('')));

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
var args39026 = [];
var len__19487__auto___39029 = arguments.length;
var i__19488__auto___39030 = (0);
while(true){
if((i__19488__auto___39030 < len__19487__auto___39029)){
args39026.push((arguments[i__19488__auto___39030]));

var G__39031 = (i__19488__auto___39030 + (1));
i__19488__auto___39030 = G__39031;
continue;
} else {
}
break;
}

var G__39028 = args39026.length;
switch (G__39028) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39026.length)].join('')));

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
var args39033 = [];
var len__19487__auto___39104 = arguments.length;
var i__19488__auto___39105 = (0);
while(true){
if((i__19488__auto___39105 < len__19487__auto___39104)){
args39033.push((arguments[i__19488__auto___39105]));

var G__39106 = (i__19488__auto___39105 + (1));
i__19488__auto___39105 = G__39106;
continue;
} else {
}
break;
}

var G__39035 = args39033.length;
switch (G__39035) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39033.length)].join('')));

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
var c__20613__auto___39108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___39108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___39108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39074){
var state_val_39075 = (state_39074[(1)]);
if((state_val_39075 === (7))){
var state_39074__$1 = state_39074;
var statearr_39076_39109 = state_39074__$1;
(statearr_39076_39109[(2)] = null);

(statearr_39076_39109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (1))){
var state_39074__$1 = state_39074;
var statearr_39077_39110 = state_39074__$1;
(statearr_39077_39110[(2)] = null);

(statearr_39077_39110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (4))){
var inst_39038 = (state_39074[(7)]);
var inst_39040 = (inst_39038 < cnt);
var state_39074__$1 = state_39074;
if(cljs.core.truth_(inst_39040)){
var statearr_39078_39111 = state_39074__$1;
(statearr_39078_39111[(1)] = (6));

} else {
var statearr_39079_39112 = state_39074__$1;
(statearr_39079_39112[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (15))){
var inst_39070 = (state_39074[(2)]);
var state_39074__$1 = state_39074;
var statearr_39080_39113 = state_39074__$1;
(statearr_39080_39113[(2)] = inst_39070);

(statearr_39080_39113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (13))){
var inst_39063 = cljs.core.async.close_BANG_.call(null,out);
var state_39074__$1 = state_39074;
var statearr_39081_39114 = state_39074__$1;
(statearr_39081_39114[(2)] = inst_39063);

(statearr_39081_39114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (6))){
var state_39074__$1 = state_39074;
var statearr_39082_39115 = state_39074__$1;
(statearr_39082_39115[(2)] = null);

(statearr_39082_39115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (3))){
var inst_39072 = (state_39074[(2)]);
var state_39074__$1 = state_39074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39074__$1,inst_39072);
} else {
if((state_val_39075 === (12))){
var inst_39060 = (state_39074[(8)]);
var inst_39060__$1 = (state_39074[(2)]);
var inst_39061 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39060__$1);
var state_39074__$1 = (function (){var statearr_39083 = state_39074;
(statearr_39083[(8)] = inst_39060__$1);

return statearr_39083;
})();
if(cljs.core.truth_(inst_39061)){
var statearr_39084_39116 = state_39074__$1;
(statearr_39084_39116[(1)] = (13));

} else {
var statearr_39085_39117 = state_39074__$1;
(statearr_39085_39117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (2))){
var inst_39037 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39038 = (0);
var state_39074__$1 = (function (){var statearr_39086 = state_39074;
(statearr_39086[(7)] = inst_39038);

(statearr_39086[(9)] = inst_39037);

return statearr_39086;
})();
var statearr_39087_39118 = state_39074__$1;
(statearr_39087_39118[(2)] = null);

(statearr_39087_39118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (11))){
var inst_39038 = (state_39074[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39074,(10),Object,null,(9));
var inst_39047 = chs__$1.call(null,inst_39038);
var inst_39048 = done.call(null,inst_39038);
var inst_39049 = cljs.core.async.take_BANG_.call(null,inst_39047,inst_39048);
var state_39074__$1 = state_39074;
var statearr_39088_39119 = state_39074__$1;
(statearr_39088_39119[(2)] = inst_39049);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39074__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (9))){
var inst_39038 = (state_39074[(7)]);
var inst_39051 = (state_39074[(2)]);
var inst_39052 = (inst_39038 + (1));
var inst_39038__$1 = inst_39052;
var state_39074__$1 = (function (){var statearr_39089 = state_39074;
(statearr_39089[(7)] = inst_39038__$1);

(statearr_39089[(10)] = inst_39051);

return statearr_39089;
})();
var statearr_39090_39120 = state_39074__$1;
(statearr_39090_39120[(2)] = null);

(statearr_39090_39120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (5))){
var inst_39058 = (state_39074[(2)]);
var state_39074__$1 = (function (){var statearr_39091 = state_39074;
(statearr_39091[(11)] = inst_39058);

return statearr_39091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39074__$1,(12),dchan);
} else {
if((state_val_39075 === (14))){
var inst_39060 = (state_39074[(8)]);
var inst_39065 = cljs.core.apply.call(null,f,inst_39060);
var state_39074__$1 = state_39074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39074__$1,(16),out,inst_39065);
} else {
if((state_val_39075 === (16))){
var inst_39067 = (state_39074[(2)]);
var state_39074__$1 = (function (){var statearr_39092 = state_39074;
(statearr_39092[(12)] = inst_39067);

return statearr_39092;
})();
var statearr_39093_39121 = state_39074__$1;
(statearr_39093_39121[(2)] = null);

(statearr_39093_39121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (10))){
var inst_39042 = (state_39074[(2)]);
var inst_39043 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39074__$1 = (function (){var statearr_39094 = state_39074;
(statearr_39094[(13)] = inst_39042);

return statearr_39094;
})();
var statearr_39095_39122 = state_39074__$1;
(statearr_39095_39122[(2)] = inst_39043);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39074__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39075 === (8))){
var inst_39056 = (state_39074[(2)]);
var state_39074__$1 = state_39074;
var statearr_39096_39123 = state_39074__$1;
(statearr_39096_39123[(2)] = inst_39056);

(statearr_39096_39123[(1)] = (5));


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
});})(c__20613__auto___39108,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20501__auto__,c__20613__auto___39108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_39100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39100[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_39100[(1)] = (1));

return statearr_39100;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_39074){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39101){if((e39101 instanceof Object)){
var ex__20505__auto__ = e39101;
var statearr_39102_39124 = state_39074;
(statearr_39102_39124[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39125 = state_39074;
state_39074 = G__39125;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_39074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_39074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___39108,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20615__auto__ = (function (){var statearr_39103 = f__20614__auto__.call(null);
(statearr_39103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___39108);

return statearr_39103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___39108,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args39127 = [];
var len__19487__auto___39183 = arguments.length;
var i__19488__auto___39184 = (0);
while(true){
if((i__19488__auto___39184 < len__19487__auto___39183)){
args39127.push((arguments[i__19488__auto___39184]));

var G__39185 = (i__19488__auto___39184 + (1));
i__19488__auto___39184 = G__39185;
continue;
} else {
}
break;
}

var G__39129 = args39127.length;
switch (G__39129) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39127.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___39187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___39187,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___39187,out){
return (function (state_39159){
var state_val_39160 = (state_39159[(1)]);
if((state_val_39160 === (7))){
var inst_39139 = (state_39159[(7)]);
var inst_39138 = (state_39159[(8)]);
var inst_39138__$1 = (state_39159[(2)]);
var inst_39139__$1 = cljs.core.nth.call(null,inst_39138__$1,(0),null);
var inst_39140 = cljs.core.nth.call(null,inst_39138__$1,(1),null);
var inst_39141 = (inst_39139__$1 == null);
var state_39159__$1 = (function (){var statearr_39161 = state_39159;
(statearr_39161[(9)] = inst_39140);

(statearr_39161[(7)] = inst_39139__$1);

(statearr_39161[(8)] = inst_39138__$1);

return statearr_39161;
})();
if(cljs.core.truth_(inst_39141)){
var statearr_39162_39188 = state_39159__$1;
(statearr_39162_39188[(1)] = (8));

} else {
var statearr_39163_39189 = state_39159__$1;
(statearr_39163_39189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (1))){
var inst_39130 = cljs.core.vec.call(null,chs);
var inst_39131 = inst_39130;
var state_39159__$1 = (function (){var statearr_39164 = state_39159;
(statearr_39164[(10)] = inst_39131);

return statearr_39164;
})();
var statearr_39165_39190 = state_39159__$1;
(statearr_39165_39190[(2)] = null);

(statearr_39165_39190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (4))){
var inst_39131 = (state_39159[(10)]);
var state_39159__$1 = state_39159;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39159__$1,(7),inst_39131);
} else {
if((state_val_39160 === (6))){
var inst_39155 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39166_39191 = state_39159__$1;
(statearr_39166_39191[(2)] = inst_39155);

(statearr_39166_39191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (3))){
var inst_39157 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39159__$1,inst_39157);
} else {
if((state_val_39160 === (2))){
var inst_39131 = (state_39159[(10)]);
var inst_39133 = cljs.core.count.call(null,inst_39131);
var inst_39134 = (inst_39133 > (0));
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39134)){
var statearr_39168_39192 = state_39159__$1;
(statearr_39168_39192[(1)] = (4));

} else {
var statearr_39169_39193 = state_39159__$1;
(statearr_39169_39193[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (11))){
var inst_39131 = (state_39159[(10)]);
var inst_39148 = (state_39159[(2)]);
var tmp39167 = inst_39131;
var inst_39131__$1 = tmp39167;
var state_39159__$1 = (function (){var statearr_39170 = state_39159;
(statearr_39170[(11)] = inst_39148);

(statearr_39170[(10)] = inst_39131__$1);

return statearr_39170;
})();
var statearr_39171_39194 = state_39159__$1;
(statearr_39171_39194[(2)] = null);

(statearr_39171_39194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (9))){
var inst_39139 = (state_39159[(7)]);
var state_39159__$1 = state_39159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39159__$1,(11),out,inst_39139);
} else {
if((state_val_39160 === (5))){
var inst_39153 = cljs.core.async.close_BANG_.call(null,out);
var state_39159__$1 = state_39159;
var statearr_39172_39195 = state_39159__$1;
(statearr_39172_39195[(2)] = inst_39153);

(statearr_39172_39195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (10))){
var inst_39151 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39173_39196 = state_39159__$1;
(statearr_39173_39196[(2)] = inst_39151);

(statearr_39173_39196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (8))){
var inst_39131 = (state_39159[(10)]);
var inst_39140 = (state_39159[(9)]);
var inst_39139 = (state_39159[(7)]);
var inst_39138 = (state_39159[(8)]);
var inst_39143 = (function (){var cs = inst_39131;
var vec__39136 = inst_39138;
var v = inst_39139;
var c = inst_39140;
return ((function (cs,vec__39136,v,c,inst_39131,inst_39140,inst_39139,inst_39138,state_val_39160,c__20613__auto___39187,out){
return (function (p1__39126_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39126_SHARP_);
});
;})(cs,vec__39136,v,c,inst_39131,inst_39140,inst_39139,inst_39138,state_val_39160,c__20613__auto___39187,out))
})();
var inst_39144 = cljs.core.filterv.call(null,inst_39143,inst_39131);
var inst_39131__$1 = inst_39144;
var state_39159__$1 = (function (){var statearr_39174 = state_39159;
(statearr_39174[(10)] = inst_39131__$1);

return statearr_39174;
})();
var statearr_39175_39197 = state_39159__$1;
(statearr_39175_39197[(2)] = null);

(statearr_39175_39197[(1)] = (2));


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
});})(c__20613__auto___39187,out))
;
return ((function (switch__20501__auto__,c__20613__auto___39187,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_39179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39179[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_39179[(1)] = (1));

return statearr_39179;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_39159){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39180){if((e39180 instanceof Object)){
var ex__20505__auto__ = e39180;
var statearr_39181_39198 = state_39159;
(statearr_39181_39198[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39199 = state_39159;
state_39159 = G__39199;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_39159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_39159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___39187,out))
})();
var state__20615__auto__ = (function (){var statearr_39182 = f__20614__auto__.call(null);
(statearr_39182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___39187);

return statearr_39182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___39187,out))
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
var args39200 = [];
var len__19487__auto___39249 = arguments.length;
var i__19488__auto___39250 = (0);
while(true){
if((i__19488__auto___39250 < len__19487__auto___39249)){
args39200.push((arguments[i__19488__auto___39250]));

var G__39251 = (i__19488__auto___39250 + (1));
i__19488__auto___39250 = G__39251;
continue;
} else {
}
break;
}

var G__39202 = args39200.length;
switch (G__39202) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39200.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___39253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___39253,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___39253,out){
return (function (state_39226){
var state_val_39227 = (state_39226[(1)]);
if((state_val_39227 === (7))){
var inst_39208 = (state_39226[(7)]);
var inst_39208__$1 = (state_39226[(2)]);
var inst_39209 = (inst_39208__$1 == null);
var inst_39210 = cljs.core.not.call(null,inst_39209);
var state_39226__$1 = (function (){var statearr_39228 = state_39226;
(statearr_39228[(7)] = inst_39208__$1);

return statearr_39228;
})();
if(inst_39210){
var statearr_39229_39254 = state_39226__$1;
(statearr_39229_39254[(1)] = (8));

} else {
var statearr_39230_39255 = state_39226__$1;
(statearr_39230_39255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (1))){
var inst_39203 = (0);
var state_39226__$1 = (function (){var statearr_39231 = state_39226;
(statearr_39231[(8)] = inst_39203);

return statearr_39231;
})();
var statearr_39232_39256 = state_39226__$1;
(statearr_39232_39256[(2)] = null);

(statearr_39232_39256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (4))){
var state_39226__$1 = state_39226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39226__$1,(7),ch);
} else {
if((state_val_39227 === (6))){
var inst_39221 = (state_39226[(2)]);
var state_39226__$1 = state_39226;
var statearr_39233_39257 = state_39226__$1;
(statearr_39233_39257[(2)] = inst_39221);

(statearr_39233_39257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (3))){
var inst_39223 = (state_39226[(2)]);
var inst_39224 = cljs.core.async.close_BANG_.call(null,out);
var state_39226__$1 = (function (){var statearr_39234 = state_39226;
(statearr_39234[(9)] = inst_39223);

return statearr_39234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39226__$1,inst_39224);
} else {
if((state_val_39227 === (2))){
var inst_39203 = (state_39226[(8)]);
var inst_39205 = (inst_39203 < n);
var state_39226__$1 = state_39226;
if(cljs.core.truth_(inst_39205)){
var statearr_39235_39258 = state_39226__$1;
(statearr_39235_39258[(1)] = (4));

} else {
var statearr_39236_39259 = state_39226__$1;
(statearr_39236_39259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (11))){
var inst_39203 = (state_39226[(8)]);
var inst_39213 = (state_39226[(2)]);
var inst_39214 = (inst_39203 + (1));
var inst_39203__$1 = inst_39214;
var state_39226__$1 = (function (){var statearr_39237 = state_39226;
(statearr_39237[(8)] = inst_39203__$1);

(statearr_39237[(10)] = inst_39213);

return statearr_39237;
})();
var statearr_39238_39260 = state_39226__$1;
(statearr_39238_39260[(2)] = null);

(statearr_39238_39260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (9))){
var state_39226__$1 = state_39226;
var statearr_39239_39261 = state_39226__$1;
(statearr_39239_39261[(2)] = null);

(statearr_39239_39261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (5))){
var state_39226__$1 = state_39226;
var statearr_39240_39262 = state_39226__$1;
(statearr_39240_39262[(2)] = null);

(statearr_39240_39262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (10))){
var inst_39218 = (state_39226[(2)]);
var state_39226__$1 = state_39226;
var statearr_39241_39263 = state_39226__$1;
(statearr_39241_39263[(2)] = inst_39218);

(statearr_39241_39263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39227 === (8))){
var inst_39208 = (state_39226[(7)]);
var state_39226__$1 = state_39226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39226__$1,(11),out,inst_39208);
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
});})(c__20613__auto___39253,out))
;
return ((function (switch__20501__auto__,c__20613__auto___39253,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_39245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39245[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_39245[(1)] = (1));

return statearr_39245;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_39226){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39246){if((e39246 instanceof Object)){
var ex__20505__auto__ = e39246;
var statearr_39247_39264 = state_39226;
(statearr_39247_39264[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39265 = state_39226;
state_39226 = G__39265;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_39226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_39226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___39253,out))
})();
var state__20615__auto__ = (function (){var statearr_39248 = f__20614__auto__.call(null);
(statearr_39248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___39253);

return statearr_39248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___39253,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39273 = (function (map_LT_,f,ch,meta39274){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39274 = meta39274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39275,meta39274__$1){
var self__ = this;
var _39275__$1 = this;
return (new cljs.core.async.t_cljs$core$async39273(self__.map_LT_,self__.f,self__.ch,meta39274__$1));
});

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39275){
var self__ = this;
var _39275__$1 = this;
return self__.meta39274;
});

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39276 = (function (map_LT_,f,ch,meta39274,_,fn1,meta39277){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39274 = meta39274;
this._ = _;
this.fn1 = fn1;
this.meta39277 = meta39277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39278,meta39277__$1){
var self__ = this;
var _39278__$1 = this;
return (new cljs.core.async.t_cljs$core$async39276(self__.map_LT_,self__.f,self__.ch,self__.meta39274,self__._,self__.fn1,meta39277__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39278){
var self__ = this;
var _39278__$1 = this;
return self__.meta39277;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39276.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39266_SHARP_){
return f1.call(null,(((p1__39266_SHARP_ == null))?null:self__.f.call(null,p1__39266_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39276.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39274","meta39274",495863555,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39273","cljs.core.async/t_cljs$core$async39273",-1807580820,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39277","meta39277",1385146611,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39276";

cljs.core.async.t_cljs$core$async39276.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async39276");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39276 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39276(map_LT___$1,f__$1,ch__$1,meta39274__$1,___$2,fn1__$1,meta39277){
return (new cljs.core.async.t_cljs$core$async39276(map_LT___$1,f__$1,ch__$1,meta39274__$1,___$2,fn1__$1,meta39277));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39276(self__.map_LT_,self__.f,self__.ch,self__.meta39274,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39274","meta39274",495863555,null)], null);
});

cljs.core.async.t_cljs$core$async39273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39273";

cljs.core.async.t_cljs$core$async39273.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async39273");
});

cljs.core.async.__GT_t_cljs$core$async39273 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39273(map_LT___$1,f__$1,ch__$1,meta39274){
return (new cljs.core.async.t_cljs$core$async39273(map_LT___$1,f__$1,ch__$1,meta39274));
});

}

return (new cljs.core.async.t_cljs$core$async39273(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39282 = (function (map_GT_,f,ch,meta39283){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39283 = meta39283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39284,meta39283__$1){
var self__ = this;
var _39284__$1 = this;
return (new cljs.core.async.t_cljs$core$async39282(self__.map_GT_,self__.f,self__.ch,meta39283__$1));
});

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39284){
var self__ = this;
var _39284__$1 = this;
return self__.meta39283;
});

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39283","meta39283",-1170436466,null)], null);
});

cljs.core.async.t_cljs$core$async39282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39282";

cljs.core.async.t_cljs$core$async39282.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async39282");
});

cljs.core.async.__GT_t_cljs$core$async39282 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39282(map_GT___$1,f__$1,ch__$1,meta39283){
return (new cljs.core.async.t_cljs$core$async39282(map_GT___$1,f__$1,ch__$1,meta39283));
});

}

return (new cljs.core.async.t_cljs$core$async39282(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39288 = (function (filter_GT_,p,ch,meta39289){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39289 = meta39289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39290,meta39289__$1){
var self__ = this;
var _39290__$1 = this;
return (new cljs.core.async.t_cljs$core$async39288(self__.filter_GT_,self__.p,self__.ch,meta39289__$1));
});

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39290){
var self__ = this;
var _39290__$1 = this;
return self__.meta39289;
});

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39289","meta39289",-249542135,null)], null);
});

cljs.core.async.t_cljs$core$async39288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39288";

cljs.core.async.t_cljs$core$async39288.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"cljs.core.async/t_cljs$core$async39288");
});

cljs.core.async.__GT_t_cljs$core$async39288 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39288(filter_GT___$1,p__$1,ch__$1,meta39289){
return (new cljs.core.async.t_cljs$core$async39288(filter_GT___$1,p__$1,ch__$1,meta39289));
});

}

return (new cljs.core.async.t_cljs$core$async39288(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args39291 = [];
var len__19487__auto___39335 = arguments.length;
var i__19488__auto___39336 = (0);
while(true){
if((i__19488__auto___39336 < len__19487__auto___39335)){
args39291.push((arguments[i__19488__auto___39336]));

var G__39337 = (i__19488__auto___39336 + (1));
i__19488__auto___39336 = G__39337;
continue;
} else {
}
break;
}

var G__39293 = args39291.length;
switch (G__39293) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39291.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___39339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___39339,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___39339,out){
return (function (state_39314){
var state_val_39315 = (state_39314[(1)]);
if((state_val_39315 === (7))){
var inst_39310 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
var statearr_39316_39340 = state_39314__$1;
(statearr_39316_39340[(2)] = inst_39310);

(statearr_39316_39340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (1))){
var state_39314__$1 = state_39314;
var statearr_39317_39341 = state_39314__$1;
(statearr_39317_39341[(2)] = null);

(statearr_39317_39341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (4))){
var inst_39296 = (state_39314[(7)]);
var inst_39296__$1 = (state_39314[(2)]);
var inst_39297 = (inst_39296__$1 == null);
var state_39314__$1 = (function (){var statearr_39318 = state_39314;
(statearr_39318[(7)] = inst_39296__$1);

return statearr_39318;
})();
if(cljs.core.truth_(inst_39297)){
var statearr_39319_39342 = state_39314__$1;
(statearr_39319_39342[(1)] = (5));

} else {
var statearr_39320_39343 = state_39314__$1;
(statearr_39320_39343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (6))){
var inst_39296 = (state_39314[(7)]);
var inst_39301 = p.call(null,inst_39296);
var state_39314__$1 = state_39314;
if(cljs.core.truth_(inst_39301)){
var statearr_39321_39344 = state_39314__$1;
(statearr_39321_39344[(1)] = (8));

} else {
var statearr_39322_39345 = state_39314__$1;
(statearr_39322_39345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (3))){
var inst_39312 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39314__$1,inst_39312);
} else {
if((state_val_39315 === (2))){
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39314__$1,(4),ch);
} else {
if((state_val_39315 === (11))){
var inst_39304 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
var statearr_39323_39346 = state_39314__$1;
(statearr_39323_39346[(2)] = inst_39304);

(statearr_39323_39346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (9))){
var state_39314__$1 = state_39314;
var statearr_39324_39347 = state_39314__$1;
(statearr_39324_39347[(2)] = null);

(statearr_39324_39347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (5))){
var inst_39299 = cljs.core.async.close_BANG_.call(null,out);
var state_39314__$1 = state_39314;
var statearr_39325_39348 = state_39314__$1;
(statearr_39325_39348[(2)] = inst_39299);

(statearr_39325_39348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (10))){
var inst_39307 = (state_39314[(2)]);
var state_39314__$1 = (function (){var statearr_39326 = state_39314;
(statearr_39326[(8)] = inst_39307);

return statearr_39326;
})();
var statearr_39327_39349 = state_39314__$1;
(statearr_39327_39349[(2)] = null);

(statearr_39327_39349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (8))){
var inst_39296 = (state_39314[(7)]);
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39314__$1,(11),out,inst_39296);
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
});})(c__20613__auto___39339,out))
;
return ((function (switch__20501__auto__,c__20613__auto___39339,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_39331 = [null,null,null,null,null,null,null,null,null];
(statearr_39331[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_39331[(1)] = (1));

return statearr_39331;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_39314){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39332){if((e39332 instanceof Object)){
var ex__20505__auto__ = e39332;
var statearr_39333_39350 = state_39314;
(statearr_39333_39350[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39351 = state_39314;
state_39314 = G__39351;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_39314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_39314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___39339,out))
})();
var state__20615__auto__ = (function (){var statearr_39334 = f__20614__auto__.call(null);
(statearr_39334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___39339);

return statearr_39334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___39339,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39352 = [];
var len__19487__auto___39355 = arguments.length;
var i__19488__auto___39356 = (0);
while(true){
if((i__19488__auto___39356 < len__19487__auto___39355)){
args39352.push((arguments[i__19488__auto___39356]));

var G__39357 = (i__19488__auto___39356 + (1));
i__19488__auto___39356 = G__39357;
continue;
} else {
}
break;
}

var G__39354 = args39352.length;
switch (G__39354) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39352.length)].join('')));

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
return (function (state_39524){
var state_val_39525 = (state_39524[(1)]);
if((state_val_39525 === (7))){
var inst_39520 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39526_39567 = state_39524__$1;
(statearr_39526_39567[(2)] = inst_39520);

(statearr_39526_39567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (20))){
var inst_39490 = (state_39524[(7)]);
var inst_39501 = (state_39524[(2)]);
var inst_39502 = cljs.core.next.call(null,inst_39490);
var inst_39476 = inst_39502;
var inst_39477 = null;
var inst_39478 = (0);
var inst_39479 = (0);
var state_39524__$1 = (function (){var statearr_39527 = state_39524;
(statearr_39527[(8)] = inst_39479);

(statearr_39527[(9)] = inst_39477);

(statearr_39527[(10)] = inst_39476);

(statearr_39527[(11)] = inst_39501);

(statearr_39527[(12)] = inst_39478);

return statearr_39527;
})();
var statearr_39528_39568 = state_39524__$1;
(statearr_39528_39568[(2)] = null);

(statearr_39528_39568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (1))){
var state_39524__$1 = state_39524;
var statearr_39529_39569 = state_39524__$1;
(statearr_39529_39569[(2)] = null);

(statearr_39529_39569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (4))){
var inst_39465 = (state_39524[(13)]);
var inst_39465__$1 = (state_39524[(2)]);
var inst_39466 = (inst_39465__$1 == null);
var state_39524__$1 = (function (){var statearr_39530 = state_39524;
(statearr_39530[(13)] = inst_39465__$1);

return statearr_39530;
})();
if(cljs.core.truth_(inst_39466)){
var statearr_39531_39570 = state_39524__$1;
(statearr_39531_39570[(1)] = (5));

} else {
var statearr_39532_39571 = state_39524__$1;
(statearr_39532_39571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (15))){
var state_39524__$1 = state_39524;
var statearr_39536_39572 = state_39524__$1;
(statearr_39536_39572[(2)] = null);

(statearr_39536_39572[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (21))){
var state_39524__$1 = state_39524;
var statearr_39537_39573 = state_39524__$1;
(statearr_39537_39573[(2)] = null);

(statearr_39537_39573[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (13))){
var inst_39479 = (state_39524[(8)]);
var inst_39477 = (state_39524[(9)]);
var inst_39476 = (state_39524[(10)]);
var inst_39478 = (state_39524[(12)]);
var inst_39486 = (state_39524[(2)]);
var inst_39487 = (inst_39479 + (1));
var tmp39533 = inst_39477;
var tmp39534 = inst_39476;
var tmp39535 = inst_39478;
var inst_39476__$1 = tmp39534;
var inst_39477__$1 = tmp39533;
var inst_39478__$1 = tmp39535;
var inst_39479__$1 = inst_39487;
var state_39524__$1 = (function (){var statearr_39538 = state_39524;
(statearr_39538[(8)] = inst_39479__$1);

(statearr_39538[(9)] = inst_39477__$1);

(statearr_39538[(10)] = inst_39476__$1);

(statearr_39538[(12)] = inst_39478__$1);

(statearr_39538[(14)] = inst_39486);

return statearr_39538;
})();
var statearr_39539_39574 = state_39524__$1;
(statearr_39539_39574[(2)] = null);

(statearr_39539_39574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (22))){
var state_39524__$1 = state_39524;
var statearr_39540_39575 = state_39524__$1;
(statearr_39540_39575[(2)] = null);

(statearr_39540_39575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (6))){
var inst_39465 = (state_39524[(13)]);
var inst_39474 = f.call(null,inst_39465);
var inst_39475 = cljs.core.seq.call(null,inst_39474);
var inst_39476 = inst_39475;
var inst_39477 = null;
var inst_39478 = (0);
var inst_39479 = (0);
var state_39524__$1 = (function (){var statearr_39541 = state_39524;
(statearr_39541[(8)] = inst_39479);

(statearr_39541[(9)] = inst_39477);

(statearr_39541[(10)] = inst_39476);

(statearr_39541[(12)] = inst_39478);

return statearr_39541;
})();
var statearr_39542_39576 = state_39524__$1;
(statearr_39542_39576[(2)] = null);

(statearr_39542_39576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (17))){
var inst_39490 = (state_39524[(7)]);
var inst_39494 = cljs.core.chunk_first.call(null,inst_39490);
var inst_39495 = cljs.core.chunk_rest.call(null,inst_39490);
var inst_39496 = cljs.core.count.call(null,inst_39494);
var inst_39476 = inst_39495;
var inst_39477 = inst_39494;
var inst_39478 = inst_39496;
var inst_39479 = (0);
var state_39524__$1 = (function (){var statearr_39543 = state_39524;
(statearr_39543[(8)] = inst_39479);

(statearr_39543[(9)] = inst_39477);

(statearr_39543[(10)] = inst_39476);

(statearr_39543[(12)] = inst_39478);

return statearr_39543;
})();
var statearr_39544_39577 = state_39524__$1;
(statearr_39544_39577[(2)] = null);

(statearr_39544_39577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (3))){
var inst_39522 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39524__$1,inst_39522);
} else {
if((state_val_39525 === (12))){
var inst_39510 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39545_39578 = state_39524__$1;
(statearr_39545_39578[(2)] = inst_39510);

(statearr_39545_39578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (2))){
var state_39524__$1 = state_39524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39524__$1,(4),in$);
} else {
if((state_val_39525 === (23))){
var inst_39518 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39546_39579 = state_39524__$1;
(statearr_39546_39579[(2)] = inst_39518);

(statearr_39546_39579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (19))){
var inst_39505 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39547_39580 = state_39524__$1;
(statearr_39547_39580[(2)] = inst_39505);

(statearr_39547_39580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (11))){
var inst_39476 = (state_39524[(10)]);
var inst_39490 = (state_39524[(7)]);
var inst_39490__$1 = cljs.core.seq.call(null,inst_39476);
var state_39524__$1 = (function (){var statearr_39548 = state_39524;
(statearr_39548[(7)] = inst_39490__$1);

return statearr_39548;
})();
if(inst_39490__$1){
var statearr_39549_39581 = state_39524__$1;
(statearr_39549_39581[(1)] = (14));

} else {
var statearr_39550_39582 = state_39524__$1;
(statearr_39550_39582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (9))){
var inst_39512 = (state_39524[(2)]);
var inst_39513 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39524__$1 = (function (){var statearr_39551 = state_39524;
(statearr_39551[(15)] = inst_39512);

return statearr_39551;
})();
if(cljs.core.truth_(inst_39513)){
var statearr_39552_39583 = state_39524__$1;
(statearr_39552_39583[(1)] = (21));

} else {
var statearr_39553_39584 = state_39524__$1;
(statearr_39553_39584[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (5))){
var inst_39468 = cljs.core.async.close_BANG_.call(null,out);
var state_39524__$1 = state_39524;
var statearr_39554_39585 = state_39524__$1;
(statearr_39554_39585[(2)] = inst_39468);

(statearr_39554_39585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (14))){
var inst_39490 = (state_39524[(7)]);
var inst_39492 = cljs.core.chunked_seq_QMARK_.call(null,inst_39490);
var state_39524__$1 = state_39524;
if(inst_39492){
var statearr_39555_39586 = state_39524__$1;
(statearr_39555_39586[(1)] = (17));

} else {
var statearr_39556_39587 = state_39524__$1;
(statearr_39556_39587[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (16))){
var inst_39508 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39557_39588 = state_39524__$1;
(statearr_39557_39588[(2)] = inst_39508);

(statearr_39557_39588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (10))){
var inst_39479 = (state_39524[(8)]);
var inst_39477 = (state_39524[(9)]);
var inst_39484 = cljs.core._nth.call(null,inst_39477,inst_39479);
var state_39524__$1 = state_39524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39524__$1,(13),out,inst_39484);
} else {
if((state_val_39525 === (18))){
var inst_39490 = (state_39524[(7)]);
var inst_39499 = cljs.core.first.call(null,inst_39490);
var state_39524__$1 = state_39524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39524__$1,(20),out,inst_39499);
} else {
if((state_val_39525 === (8))){
var inst_39479 = (state_39524[(8)]);
var inst_39478 = (state_39524[(12)]);
var inst_39481 = (inst_39479 < inst_39478);
var inst_39482 = inst_39481;
var state_39524__$1 = state_39524;
if(cljs.core.truth_(inst_39482)){
var statearr_39558_39589 = state_39524__$1;
(statearr_39558_39589[(1)] = (10));

} else {
var statearr_39559_39590 = state_39524__$1;
(statearr_39559_39590[(1)] = (11));

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
var statearr_39563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39563[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__);

(statearr_39563[(1)] = (1));

return statearr_39563;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1 = (function (state_39524){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39564){if((e39564 instanceof Object)){
var ex__20505__auto__ = e39564;
var statearr_39565_39591 = state_39524;
(statearr_39565_39591[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39592 = state_39524;
state_39524 = G__39592;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__ = function(state_39524){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1.call(this,state_39524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_39566 = f__20614__auto__.call(null);
(statearr_39566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_39566;
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
var args39593 = [];
var len__19487__auto___39596 = arguments.length;
var i__19488__auto___39597 = (0);
while(true){
if((i__19488__auto___39597 < len__19487__auto___39596)){
args39593.push((arguments[i__19488__auto___39597]));

var G__39598 = (i__19488__auto___39597 + (1));
i__19488__auto___39597 = G__39598;
continue;
} else {
}
break;
}

var G__39595 = args39593.length;
switch (G__39595) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39593.length)].join('')));

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
var args39600 = [];
var len__19487__auto___39603 = arguments.length;
var i__19488__auto___39604 = (0);
while(true){
if((i__19488__auto___39604 < len__19487__auto___39603)){
args39600.push((arguments[i__19488__auto___39604]));

var G__39605 = (i__19488__auto___39604 + (1));
i__19488__auto___39604 = G__39605;
continue;
} else {
}
break;
}

var G__39602 = args39600.length;
switch (G__39602) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39600.length)].join('')));

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
var args39607 = [];
var len__19487__auto___39658 = arguments.length;
var i__19488__auto___39659 = (0);
while(true){
if((i__19488__auto___39659 < len__19487__auto___39658)){
args39607.push((arguments[i__19488__auto___39659]));

var G__39660 = (i__19488__auto___39659 + (1));
i__19488__auto___39659 = G__39660;
continue;
} else {
}
break;
}

var G__39609 = args39607.length;
switch (G__39609) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39607.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___39662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___39662,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___39662,out){
return (function (state_39633){
var state_val_39634 = (state_39633[(1)]);
if((state_val_39634 === (7))){
var inst_39628 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
var statearr_39635_39663 = state_39633__$1;
(statearr_39635_39663[(2)] = inst_39628);

(statearr_39635_39663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (1))){
var inst_39610 = null;
var state_39633__$1 = (function (){var statearr_39636 = state_39633;
(statearr_39636[(7)] = inst_39610);

return statearr_39636;
})();
var statearr_39637_39664 = state_39633__$1;
(statearr_39637_39664[(2)] = null);

(statearr_39637_39664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (4))){
var inst_39613 = (state_39633[(8)]);
var inst_39613__$1 = (state_39633[(2)]);
var inst_39614 = (inst_39613__$1 == null);
var inst_39615 = cljs.core.not.call(null,inst_39614);
var state_39633__$1 = (function (){var statearr_39638 = state_39633;
(statearr_39638[(8)] = inst_39613__$1);

return statearr_39638;
})();
if(inst_39615){
var statearr_39639_39665 = state_39633__$1;
(statearr_39639_39665[(1)] = (5));

} else {
var statearr_39640_39666 = state_39633__$1;
(statearr_39640_39666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (6))){
var state_39633__$1 = state_39633;
var statearr_39641_39667 = state_39633__$1;
(statearr_39641_39667[(2)] = null);

(statearr_39641_39667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (3))){
var inst_39630 = (state_39633[(2)]);
var inst_39631 = cljs.core.async.close_BANG_.call(null,out);
var state_39633__$1 = (function (){var statearr_39642 = state_39633;
(statearr_39642[(9)] = inst_39630);

return statearr_39642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39633__$1,inst_39631);
} else {
if((state_val_39634 === (2))){
var state_39633__$1 = state_39633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39633__$1,(4),ch);
} else {
if((state_val_39634 === (11))){
var inst_39613 = (state_39633[(8)]);
var inst_39622 = (state_39633[(2)]);
var inst_39610 = inst_39613;
var state_39633__$1 = (function (){var statearr_39643 = state_39633;
(statearr_39643[(7)] = inst_39610);

(statearr_39643[(10)] = inst_39622);

return statearr_39643;
})();
var statearr_39644_39668 = state_39633__$1;
(statearr_39644_39668[(2)] = null);

(statearr_39644_39668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (9))){
var inst_39613 = (state_39633[(8)]);
var state_39633__$1 = state_39633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39633__$1,(11),out,inst_39613);
} else {
if((state_val_39634 === (5))){
var inst_39610 = (state_39633[(7)]);
var inst_39613 = (state_39633[(8)]);
var inst_39617 = cljs.core._EQ_.call(null,inst_39613,inst_39610);
var state_39633__$1 = state_39633;
if(inst_39617){
var statearr_39646_39669 = state_39633__$1;
(statearr_39646_39669[(1)] = (8));

} else {
var statearr_39647_39670 = state_39633__$1;
(statearr_39647_39670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (10))){
var inst_39625 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
var statearr_39648_39671 = state_39633__$1;
(statearr_39648_39671[(2)] = inst_39625);

(statearr_39648_39671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39634 === (8))){
var inst_39610 = (state_39633[(7)]);
var tmp39645 = inst_39610;
var inst_39610__$1 = tmp39645;
var state_39633__$1 = (function (){var statearr_39649 = state_39633;
(statearr_39649[(7)] = inst_39610__$1);

return statearr_39649;
})();
var statearr_39650_39672 = state_39633__$1;
(statearr_39650_39672[(2)] = null);

(statearr_39650_39672[(1)] = (2));


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
});})(c__20613__auto___39662,out))
;
return ((function (switch__20501__auto__,c__20613__auto___39662,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_39654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39654[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_39654[(1)] = (1));

return statearr_39654;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_39633){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39655){if((e39655 instanceof Object)){
var ex__20505__auto__ = e39655;
var statearr_39656_39673 = state_39633;
(statearr_39656_39673[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39674 = state_39633;
state_39633 = G__39674;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_39633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_39633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___39662,out))
})();
var state__20615__auto__ = (function (){var statearr_39657 = f__20614__auto__.call(null);
(statearr_39657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___39662);

return statearr_39657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___39662,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39675 = [];
var len__19487__auto___39745 = arguments.length;
var i__19488__auto___39746 = (0);
while(true){
if((i__19488__auto___39746 < len__19487__auto___39745)){
args39675.push((arguments[i__19488__auto___39746]));

var G__39747 = (i__19488__auto___39746 + (1));
i__19488__auto___39746 = G__39747;
continue;
} else {
}
break;
}

var G__39677 = args39675.length;
switch (G__39677) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39675.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___39749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___39749,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___39749,out){
return (function (state_39715){
var state_val_39716 = (state_39715[(1)]);
if((state_val_39716 === (7))){
var inst_39711 = (state_39715[(2)]);
var state_39715__$1 = state_39715;
var statearr_39717_39750 = state_39715__$1;
(statearr_39717_39750[(2)] = inst_39711);

(statearr_39717_39750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (1))){
var inst_39678 = (new Array(n));
var inst_39679 = inst_39678;
var inst_39680 = (0);
var state_39715__$1 = (function (){var statearr_39718 = state_39715;
(statearr_39718[(7)] = inst_39679);

(statearr_39718[(8)] = inst_39680);

return statearr_39718;
})();
var statearr_39719_39751 = state_39715__$1;
(statearr_39719_39751[(2)] = null);

(statearr_39719_39751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (4))){
var inst_39683 = (state_39715[(9)]);
var inst_39683__$1 = (state_39715[(2)]);
var inst_39684 = (inst_39683__$1 == null);
var inst_39685 = cljs.core.not.call(null,inst_39684);
var state_39715__$1 = (function (){var statearr_39720 = state_39715;
(statearr_39720[(9)] = inst_39683__$1);

return statearr_39720;
})();
if(inst_39685){
var statearr_39721_39752 = state_39715__$1;
(statearr_39721_39752[(1)] = (5));

} else {
var statearr_39722_39753 = state_39715__$1;
(statearr_39722_39753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (15))){
var inst_39705 = (state_39715[(2)]);
var state_39715__$1 = state_39715;
var statearr_39723_39754 = state_39715__$1;
(statearr_39723_39754[(2)] = inst_39705);

(statearr_39723_39754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (13))){
var state_39715__$1 = state_39715;
var statearr_39724_39755 = state_39715__$1;
(statearr_39724_39755[(2)] = null);

(statearr_39724_39755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (6))){
var inst_39680 = (state_39715[(8)]);
var inst_39701 = (inst_39680 > (0));
var state_39715__$1 = state_39715;
if(cljs.core.truth_(inst_39701)){
var statearr_39725_39756 = state_39715__$1;
(statearr_39725_39756[(1)] = (12));

} else {
var statearr_39726_39757 = state_39715__$1;
(statearr_39726_39757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (3))){
var inst_39713 = (state_39715[(2)]);
var state_39715__$1 = state_39715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39715__$1,inst_39713);
} else {
if((state_val_39716 === (12))){
var inst_39679 = (state_39715[(7)]);
var inst_39703 = cljs.core.vec.call(null,inst_39679);
var state_39715__$1 = state_39715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39715__$1,(15),out,inst_39703);
} else {
if((state_val_39716 === (2))){
var state_39715__$1 = state_39715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39715__$1,(4),ch);
} else {
if((state_val_39716 === (11))){
var inst_39695 = (state_39715[(2)]);
var inst_39696 = (new Array(n));
var inst_39679 = inst_39696;
var inst_39680 = (0);
var state_39715__$1 = (function (){var statearr_39727 = state_39715;
(statearr_39727[(10)] = inst_39695);

(statearr_39727[(7)] = inst_39679);

(statearr_39727[(8)] = inst_39680);

return statearr_39727;
})();
var statearr_39728_39758 = state_39715__$1;
(statearr_39728_39758[(2)] = null);

(statearr_39728_39758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (9))){
var inst_39679 = (state_39715[(7)]);
var inst_39693 = cljs.core.vec.call(null,inst_39679);
var state_39715__$1 = state_39715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39715__$1,(11),out,inst_39693);
} else {
if((state_val_39716 === (5))){
var inst_39688 = (state_39715[(11)]);
var inst_39679 = (state_39715[(7)]);
var inst_39683 = (state_39715[(9)]);
var inst_39680 = (state_39715[(8)]);
var inst_39687 = (inst_39679[inst_39680] = inst_39683);
var inst_39688__$1 = (inst_39680 + (1));
var inst_39689 = (inst_39688__$1 < n);
var state_39715__$1 = (function (){var statearr_39729 = state_39715;
(statearr_39729[(11)] = inst_39688__$1);

(statearr_39729[(12)] = inst_39687);

return statearr_39729;
})();
if(cljs.core.truth_(inst_39689)){
var statearr_39730_39759 = state_39715__$1;
(statearr_39730_39759[(1)] = (8));

} else {
var statearr_39731_39760 = state_39715__$1;
(statearr_39731_39760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (14))){
var inst_39708 = (state_39715[(2)]);
var inst_39709 = cljs.core.async.close_BANG_.call(null,out);
var state_39715__$1 = (function (){var statearr_39733 = state_39715;
(statearr_39733[(13)] = inst_39708);

return statearr_39733;
})();
var statearr_39734_39761 = state_39715__$1;
(statearr_39734_39761[(2)] = inst_39709);

(statearr_39734_39761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (10))){
var inst_39699 = (state_39715[(2)]);
var state_39715__$1 = state_39715;
var statearr_39735_39762 = state_39715__$1;
(statearr_39735_39762[(2)] = inst_39699);

(statearr_39735_39762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39716 === (8))){
var inst_39688 = (state_39715[(11)]);
var inst_39679 = (state_39715[(7)]);
var tmp39732 = inst_39679;
var inst_39679__$1 = tmp39732;
var inst_39680 = inst_39688;
var state_39715__$1 = (function (){var statearr_39736 = state_39715;
(statearr_39736[(7)] = inst_39679__$1);

(statearr_39736[(8)] = inst_39680);

return statearr_39736;
})();
var statearr_39737_39763 = state_39715__$1;
(statearr_39737_39763[(2)] = null);

(statearr_39737_39763[(1)] = (2));


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
});})(c__20613__auto___39749,out))
;
return ((function (switch__20501__auto__,c__20613__auto___39749,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_39741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39741[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_39741[(1)] = (1));

return statearr_39741;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_39715){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39742){if((e39742 instanceof Object)){
var ex__20505__auto__ = e39742;
var statearr_39743_39764 = state_39715;
(statearr_39743_39764[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39765 = state_39715;
state_39715 = G__39765;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_39715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_39715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___39749,out))
})();
var state__20615__auto__ = (function (){var statearr_39744 = f__20614__auto__.call(null);
(statearr_39744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___39749);

return statearr_39744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___39749,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39766 = [];
var len__19487__auto___39840 = arguments.length;
var i__19488__auto___39841 = (0);
while(true){
if((i__19488__auto___39841 < len__19487__auto___39840)){
args39766.push((arguments[i__19488__auto___39841]));

var G__39842 = (i__19488__auto___39841 + (1));
i__19488__auto___39841 = G__39842;
continue;
} else {
}
break;
}

var G__39768 = args39766.length;
switch (G__39768) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39766.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20613__auto___39844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___39844,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___39844,out){
return (function (state_39810){
var state_val_39811 = (state_39810[(1)]);
if((state_val_39811 === (7))){
var inst_39806 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39812_39845 = state_39810__$1;
(statearr_39812_39845[(2)] = inst_39806);

(statearr_39812_39845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (1))){
var inst_39769 = [];
var inst_39770 = inst_39769;
var inst_39771 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39810__$1 = (function (){var statearr_39813 = state_39810;
(statearr_39813[(7)] = inst_39771);

(statearr_39813[(8)] = inst_39770);

return statearr_39813;
})();
var statearr_39814_39846 = state_39810__$1;
(statearr_39814_39846[(2)] = null);

(statearr_39814_39846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (4))){
var inst_39774 = (state_39810[(9)]);
var inst_39774__$1 = (state_39810[(2)]);
var inst_39775 = (inst_39774__$1 == null);
var inst_39776 = cljs.core.not.call(null,inst_39775);
var state_39810__$1 = (function (){var statearr_39815 = state_39810;
(statearr_39815[(9)] = inst_39774__$1);

return statearr_39815;
})();
if(inst_39776){
var statearr_39816_39847 = state_39810__$1;
(statearr_39816_39847[(1)] = (5));

} else {
var statearr_39817_39848 = state_39810__$1;
(statearr_39817_39848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (15))){
var inst_39800 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39818_39849 = state_39810__$1;
(statearr_39818_39849[(2)] = inst_39800);

(statearr_39818_39849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (13))){
var state_39810__$1 = state_39810;
var statearr_39819_39850 = state_39810__$1;
(statearr_39819_39850[(2)] = null);

(statearr_39819_39850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (6))){
var inst_39770 = (state_39810[(8)]);
var inst_39795 = inst_39770.length;
var inst_39796 = (inst_39795 > (0));
var state_39810__$1 = state_39810;
if(cljs.core.truth_(inst_39796)){
var statearr_39820_39851 = state_39810__$1;
(statearr_39820_39851[(1)] = (12));

} else {
var statearr_39821_39852 = state_39810__$1;
(statearr_39821_39852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (3))){
var inst_39808 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39810__$1,inst_39808);
} else {
if((state_val_39811 === (12))){
var inst_39770 = (state_39810[(8)]);
var inst_39798 = cljs.core.vec.call(null,inst_39770);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39810__$1,(15),out,inst_39798);
} else {
if((state_val_39811 === (2))){
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39810__$1,(4),ch);
} else {
if((state_val_39811 === (11))){
var inst_39774 = (state_39810[(9)]);
var inst_39778 = (state_39810[(10)]);
var inst_39788 = (state_39810[(2)]);
var inst_39789 = [];
var inst_39790 = inst_39789.push(inst_39774);
var inst_39770 = inst_39789;
var inst_39771 = inst_39778;
var state_39810__$1 = (function (){var statearr_39822 = state_39810;
(statearr_39822[(11)] = inst_39788);

(statearr_39822[(12)] = inst_39790);

(statearr_39822[(7)] = inst_39771);

(statearr_39822[(8)] = inst_39770);

return statearr_39822;
})();
var statearr_39823_39853 = state_39810__$1;
(statearr_39823_39853[(2)] = null);

(statearr_39823_39853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (9))){
var inst_39770 = (state_39810[(8)]);
var inst_39786 = cljs.core.vec.call(null,inst_39770);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39810__$1,(11),out,inst_39786);
} else {
if((state_val_39811 === (5))){
var inst_39774 = (state_39810[(9)]);
var inst_39778 = (state_39810[(10)]);
var inst_39771 = (state_39810[(7)]);
var inst_39778__$1 = f.call(null,inst_39774);
var inst_39779 = cljs.core._EQ_.call(null,inst_39778__$1,inst_39771);
var inst_39780 = cljs.core.keyword_identical_QMARK_.call(null,inst_39771,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39781 = (inst_39779) || (inst_39780);
var state_39810__$1 = (function (){var statearr_39824 = state_39810;
(statearr_39824[(10)] = inst_39778__$1);

return statearr_39824;
})();
if(cljs.core.truth_(inst_39781)){
var statearr_39825_39854 = state_39810__$1;
(statearr_39825_39854[(1)] = (8));

} else {
var statearr_39826_39855 = state_39810__$1;
(statearr_39826_39855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (14))){
var inst_39803 = (state_39810[(2)]);
var inst_39804 = cljs.core.async.close_BANG_.call(null,out);
var state_39810__$1 = (function (){var statearr_39828 = state_39810;
(statearr_39828[(13)] = inst_39803);

return statearr_39828;
})();
var statearr_39829_39856 = state_39810__$1;
(statearr_39829_39856[(2)] = inst_39804);

(statearr_39829_39856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (10))){
var inst_39793 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39830_39857 = state_39810__$1;
(statearr_39830_39857[(2)] = inst_39793);

(statearr_39830_39857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (8))){
var inst_39774 = (state_39810[(9)]);
var inst_39778 = (state_39810[(10)]);
var inst_39770 = (state_39810[(8)]);
var inst_39783 = inst_39770.push(inst_39774);
var tmp39827 = inst_39770;
var inst_39770__$1 = tmp39827;
var inst_39771 = inst_39778;
var state_39810__$1 = (function (){var statearr_39831 = state_39810;
(statearr_39831[(7)] = inst_39771);

(statearr_39831[(14)] = inst_39783);

(statearr_39831[(8)] = inst_39770__$1);

return statearr_39831;
})();
var statearr_39832_39858 = state_39810__$1;
(statearr_39832_39858[(2)] = null);

(statearr_39832_39858[(1)] = (2));


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
});})(c__20613__auto___39844,out))
;
return ((function (switch__20501__auto__,c__20613__auto___39844,out){
return (function() {
var cljs$core$async$state_machine__20502__auto__ = null;
var cljs$core$async$state_machine__20502__auto____0 = (function (){
var statearr_39836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39836[(0)] = cljs$core$async$state_machine__20502__auto__);

(statearr_39836[(1)] = (1));

return statearr_39836;
});
var cljs$core$async$state_machine__20502__auto____1 = (function (state_39810){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_39810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e39837){if((e39837 instanceof Object)){
var ex__20505__auto__ = e39837;
var statearr_39838_39859 = state_39810;
(statearr_39838_39859[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39860 = state_39810;
state_39810 = G__39860;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
cljs$core$async$state_machine__20502__auto__ = function(state_39810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20502__auto____1.call(this,state_39810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20502__auto____0;
cljs$core$async$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20502__auto____1;
return cljs$core$async$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___39844,out))
})();
var state__20615__auto__ = (function (){var statearr_39839 = f__20614__auto__.call(null);
(statearr_39839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___39844);

return statearr_39839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___39844,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map