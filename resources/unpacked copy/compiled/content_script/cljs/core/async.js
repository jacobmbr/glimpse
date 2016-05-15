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
var args8909 = [];
var len__7278__auto___8917 = arguments.length;
var i__7279__auto___8918 = (0);
while(true){
if((i__7279__auto___8918 < len__7278__auto___8917)){
args8909.push((arguments[i__7279__auto___8918]));

var G__8919 = (i__7279__auto___8918 + (1));
i__7279__auto___8918 = G__8919;
continue;
} else {
}
break;
}

var G__8913 = args8909.length;
switch (G__8913) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8909.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8914 = (function (f,blockable,meta8915){
this.f = f;
this.blockable = blockable;
this.meta8915 = meta8915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8916,meta8915__$1){
var self__ = this;
var _8916__$1 = this;
return (new cljs.core.async.t_cljs$core$async8914(self__.f,self__.blockable,meta8915__$1));
});

cljs.core.async.t_cljs$core$async8914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8916){
var self__ = this;
var _8916__$1 = this;
return self__.meta8915;
});

cljs.core.async.t_cljs$core$async8914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8915","meta8915",-965405298,null)], null);
});

cljs.core.async.t_cljs$core$async8914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8914";

cljs.core.async.t_cljs$core$async8914.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async8914");
});

cljs.core.async.__GT_t_cljs$core$async8914 = (function cljs$core$async$__GT_t_cljs$core$async8914(f__$1,blockable__$1,meta8915){
return (new cljs.core.async.t_cljs$core$async8914(f__$1,blockable__$1,meta8915));
});

}

return (new cljs.core.async.t_cljs$core$async8914(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args8928 = [];
var len__7278__auto___8931 = arguments.length;
var i__7279__auto___8932 = (0);
while(true){
if((i__7279__auto___8932 < len__7278__auto___8931)){
args8928.push((arguments[i__7279__auto___8932]));

var G__8933 = (i__7279__auto___8932 + (1));
i__7279__auto___8932 = G__8933;
continue;
} else {
}
break;
}

var G__8930 = args8928.length;
switch (G__8930) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8928.length)].join('')));

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
var args8935 = [];
var len__7278__auto___8938 = arguments.length;
var i__7279__auto___8939 = (0);
while(true){
if((i__7279__auto___8939 < len__7278__auto___8938)){
args8935.push((arguments[i__7279__auto___8939]));

var G__8940 = (i__7279__auto___8939 + (1));
i__7279__auto___8939 = G__8940;
continue;
} else {
}
break;
}

var G__8937 = args8935.length;
switch (G__8937) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8935.length)].join('')));

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
var args8942 = [];
var len__7278__auto___8945 = arguments.length;
var i__7279__auto___8946 = (0);
while(true){
if((i__7279__auto___8946 < len__7278__auto___8945)){
args8942.push((arguments[i__7279__auto___8946]));

var G__8947 = (i__7279__auto___8946 + (1));
i__7279__auto___8946 = G__8947;
continue;
} else {
}
break;
}

var G__8944 = args8942.length;
switch (G__8944) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8942.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8949 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8949);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8949,ret){
return (function (){
return fn1.call(null,val_8949);
});})(val_8949,ret))
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
var args8950 = [];
var len__7278__auto___8953 = arguments.length;
var i__7279__auto___8954 = (0);
while(true){
if((i__7279__auto___8954 < len__7278__auto___8953)){
args8950.push((arguments[i__7279__auto___8954]));

var G__8955 = (i__7279__auto___8954 + (1));
i__7279__auto___8954 = G__8955;
continue;
} else {
}
break;
}

var G__8952 = args8950.length;
switch (G__8952) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8950.length)].join('')));

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
var n__7123__auto___8957 = n;
var x_8958 = (0);
while(true){
if((x_8958 < n__7123__auto___8957)){
(a[x_8958] = (0));

var G__8959 = (x_8958 + (1));
x_8958 = G__8959;
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

var G__8960 = (i + (1));
i = G__8960;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8964 = (function (alt_flag,flag,meta8965){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8965 = meta8965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8966,meta8965__$1){
var self__ = this;
var _8966__$1 = this;
return (new cljs.core.async.t_cljs$core$async8964(self__.alt_flag,self__.flag,meta8965__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8966){
var self__ = this;
var _8966__$1 = this;
return self__.meta8965;
});})(flag))
;

cljs.core.async.t_cljs$core$async8964.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8964.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8964.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8965","meta8965",205150586,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8964";

cljs.core.async.t_cljs$core$async8964.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async8964");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8964 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8964(alt_flag__$1,flag__$1,meta8965){
return (new cljs.core.async.t_cljs$core$async8964(alt_flag__$1,flag__$1,meta8965));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8964(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8970 = (function (alt_handler,flag,cb,meta8971){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8971 = meta8971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8972,meta8971__$1){
var self__ = this;
var _8972__$1 = this;
return (new cljs.core.async.t_cljs$core$async8970(self__.alt_handler,self__.flag,self__.cb,meta8971__$1));
});

cljs.core.async.t_cljs$core$async8970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8972){
var self__ = this;
var _8972__$1 = this;
return self__.meta8971;
});

cljs.core.async.t_cljs$core$async8970.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8971","meta8971",-2065539498,null)], null);
});

cljs.core.async.t_cljs$core$async8970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8970";

cljs.core.async.t_cljs$core$async8970.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async8970");
});

cljs.core.async.__GT_t_cljs$core$async8970 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8970(alt_handler__$1,flag__$1,cb__$1,meta8971){
return (new cljs.core.async.t_cljs$core$async8970(alt_handler__$1,flag__$1,cb__$1,meta8971));
});

}

return (new cljs.core.async.t_cljs$core$async8970(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8973_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8973_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8974_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8974_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6208__auto__ = wport;
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8975 = (i + (1));
i = G__8975;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6208__auto__ = ret;
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6196__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6196__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6196__auto__;
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
var args__7285__auto__ = [];
var len__7278__auto___8981 = arguments.length;
var i__7279__auto___8982 = (0);
while(true){
if((i__7279__auto___8982 < len__7278__auto___8981)){
args__7285__auto__.push((arguments[i__7279__auto___8982]));

var G__8983 = (i__7279__auto___8982 + (1));
i__7279__auto___8982 = G__8983;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((1) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7286__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8978){
var map__8979 = p__8978;
var map__8979__$1 = ((((!((map__8979 == null)))?((((map__8979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8979):map__8979);
var opts = map__8979__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8976){
var G__8977 = cljs.core.first.call(null,seq8976);
var seq8976__$1 = cljs.core.next.call(null,seq8976);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8977,seq8976__$1);
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
var args8984 = [];
var len__7278__auto___9034 = arguments.length;
var i__7279__auto___9035 = (0);
while(true){
if((i__7279__auto___9035 < len__7278__auto___9034)){
args8984.push((arguments[i__7279__auto___9035]));

var G__9036 = (i__7279__auto___9035 + (1));
i__7279__auto___9035 = G__9036;
continue;
} else {
}
break;
}

var G__8986 = args8984.length;
switch (G__8986) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8984.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8864__auto___9038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___9038){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___9038){
return (function (state_9010){
var state_val_9011 = (state_9010[(1)]);
if((state_val_9011 === (7))){
var inst_9006 = (state_9010[(2)]);
var state_9010__$1 = state_9010;
var statearr_9012_9039 = state_9010__$1;
(statearr_9012_9039[(2)] = inst_9006);

(statearr_9012_9039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (1))){
var state_9010__$1 = state_9010;
var statearr_9013_9040 = state_9010__$1;
(statearr_9013_9040[(2)] = null);

(statearr_9013_9040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (4))){
var inst_8989 = (state_9010[(7)]);
var inst_8989__$1 = (state_9010[(2)]);
var inst_8990 = (inst_8989__$1 == null);
var state_9010__$1 = (function (){var statearr_9014 = state_9010;
(statearr_9014[(7)] = inst_8989__$1);

return statearr_9014;
})();
if(cljs.core.truth_(inst_8990)){
var statearr_9015_9041 = state_9010__$1;
(statearr_9015_9041[(1)] = (5));

} else {
var statearr_9016_9042 = state_9010__$1;
(statearr_9016_9042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (13))){
var state_9010__$1 = state_9010;
var statearr_9017_9043 = state_9010__$1;
(statearr_9017_9043[(2)] = null);

(statearr_9017_9043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (6))){
var inst_8989 = (state_9010[(7)]);
var state_9010__$1 = state_9010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9010__$1,(11),to,inst_8989);
} else {
if((state_val_9011 === (3))){
var inst_9008 = (state_9010[(2)]);
var state_9010__$1 = state_9010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9010__$1,inst_9008);
} else {
if((state_val_9011 === (12))){
var state_9010__$1 = state_9010;
var statearr_9018_9044 = state_9010__$1;
(statearr_9018_9044[(2)] = null);

(statearr_9018_9044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (2))){
var state_9010__$1 = state_9010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9010__$1,(4),from);
} else {
if((state_val_9011 === (11))){
var inst_8999 = (state_9010[(2)]);
var state_9010__$1 = state_9010;
if(cljs.core.truth_(inst_8999)){
var statearr_9019_9045 = state_9010__$1;
(statearr_9019_9045[(1)] = (12));

} else {
var statearr_9020_9046 = state_9010__$1;
(statearr_9020_9046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (9))){
var state_9010__$1 = state_9010;
var statearr_9021_9047 = state_9010__$1;
(statearr_9021_9047[(2)] = null);

(statearr_9021_9047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (5))){
var state_9010__$1 = state_9010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9022_9048 = state_9010__$1;
(statearr_9022_9048[(1)] = (8));

} else {
var statearr_9023_9049 = state_9010__$1;
(statearr_9023_9049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (14))){
var inst_9004 = (state_9010[(2)]);
var state_9010__$1 = state_9010;
var statearr_9024_9050 = state_9010__$1;
(statearr_9024_9050[(2)] = inst_9004);

(statearr_9024_9050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (10))){
var inst_8996 = (state_9010[(2)]);
var state_9010__$1 = state_9010;
var statearr_9025_9051 = state_9010__$1;
(statearr_9025_9051[(2)] = inst_8996);

(statearr_9025_9051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9011 === (8))){
var inst_8993 = cljs.core.async.close_BANG_.call(null,to);
var state_9010__$1 = state_9010;
var statearr_9026_9052 = state_9010__$1;
(statearr_9026_9052[(2)] = inst_8993);

(statearr_9026_9052[(1)] = (10));


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
});})(c__8864__auto___9038))
;
return ((function (switch__8705__auto__,c__8864__auto___9038){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_9030 = [null,null,null,null,null,null,null,null];
(statearr_9030[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_9030[(1)] = (1));

return statearr_9030;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_9010){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9031){if((e9031 instanceof Object)){
var ex__8709__auto__ = e9031;
var statearr_9032_9053 = state_9010;
(statearr_9032_9053[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9054 = state_9010;
state_9010 = G__9054;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_9010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_9010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___9038))
})();
var state__8866__auto__ = (function (){var statearr_9033 = f__8865__auto__.call(null);
(statearr_9033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___9038);

return statearr_9033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___9038))
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
return (function (p__9238){
var vec__9239 = p__9238;
var v = cljs.core.nth.call(null,vec__9239,(0),null);
var p = cljs.core.nth.call(null,vec__9239,(1),null);
var job = vec__9239;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8864__auto___9421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___9421,res,vec__9239,v,p,job,jobs,results){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___9421,res,vec__9239,v,p,job,jobs,results){
return (function (state_9244){
var state_val_9245 = (state_9244[(1)]);
if((state_val_9245 === (1))){
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9244__$1,(2),res,v);
} else {
if((state_val_9245 === (2))){
var inst_9241 = (state_9244[(2)]);
var inst_9242 = cljs.core.async.close_BANG_.call(null,res);
var state_9244__$1 = (function (){var statearr_9246 = state_9244;
(statearr_9246[(7)] = inst_9241);

return statearr_9246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9244__$1,inst_9242);
} else {
return null;
}
}
});})(c__8864__auto___9421,res,vec__9239,v,p,job,jobs,results))
;
return ((function (switch__8705__auto__,c__8864__auto___9421,res,vec__9239,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0 = (function (){
var statearr_9250 = [null,null,null,null,null,null,null,null];
(statearr_9250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__);

(statearr_9250[(1)] = (1));

return statearr_9250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1 = (function (state_9244){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9251){if((e9251 instanceof Object)){
var ex__8709__auto__ = e9251;
var statearr_9252_9422 = state_9244;
(statearr_9252_9422[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9423 = state_9244;
state_9244 = G__9423;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = function(state_9244){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1.call(this,state_9244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___9421,res,vec__9239,v,p,job,jobs,results))
})();
var state__8866__auto__ = (function (){var statearr_9253 = f__8865__auto__.call(null);
(statearr_9253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___9421);

return statearr_9253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___9421,res,vec__9239,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9254){
var vec__9255 = p__9254;
var v = cljs.core.nth.call(null,vec__9255,(0),null);
var p = cljs.core.nth.call(null,vec__9255,(1),null);
var job = vec__9255;
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
var n__7123__auto___9424 = n;
var __9425 = (0);
while(true){
if((__9425 < n__7123__auto___9424)){
var G__9256_9426 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9256_9426) {
case "compute":
var c__8864__auto___9428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9425,c__8864__auto___9428,G__9256_9426,n__7123__auto___9424,jobs,results,process,async){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (__9425,c__8864__auto___9428,G__9256_9426,n__7123__auto___9424,jobs,results,process,async){
return (function (state_9269){
var state_val_9270 = (state_9269[(1)]);
if((state_val_9270 === (1))){
var state_9269__$1 = state_9269;
var statearr_9271_9429 = state_9269__$1;
(statearr_9271_9429[(2)] = null);

(statearr_9271_9429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9270 === (2))){
var state_9269__$1 = state_9269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9269__$1,(4),jobs);
} else {
if((state_val_9270 === (3))){
var inst_9267 = (state_9269[(2)]);
var state_9269__$1 = state_9269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9269__$1,inst_9267);
} else {
if((state_val_9270 === (4))){
var inst_9259 = (state_9269[(2)]);
var inst_9260 = process.call(null,inst_9259);
var state_9269__$1 = state_9269;
if(cljs.core.truth_(inst_9260)){
var statearr_9272_9430 = state_9269__$1;
(statearr_9272_9430[(1)] = (5));

} else {
var statearr_9273_9431 = state_9269__$1;
(statearr_9273_9431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9270 === (5))){
var state_9269__$1 = state_9269;
var statearr_9274_9432 = state_9269__$1;
(statearr_9274_9432[(2)] = null);

(statearr_9274_9432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9270 === (6))){
var state_9269__$1 = state_9269;
var statearr_9275_9433 = state_9269__$1;
(statearr_9275_9433[(2)] = null);

(statearr_9275_9433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9270 === (7))){
var inst_9265 = (state_9269[(2)]);
var state_9269__$1 = state_9269;
var statearr_9276_9434 = state_9269__$1;
(statearr_9276_9434[(2)] = inst_9265);

(statearr_9276_9434[(1)] = (3));


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
});})(__9425,c__8864__auto___9428,G__9256_9426,n__7123__auto___9424,jobs,results,process,async))
;
return ((function (__9425,switch__8705__auto__,c__8864__auto___9428,G__9256_9426,n__7123__auto___9424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0 = (function (){
var statearr_9280 = [null,null,null,null,null,null,null];
(statearr_9280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__);

(statearr_9280[(1)] = (1));

return statearr_9280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1 = (function (state_9269){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9281){if((e9281 instanceof Object)){
var ex__8709__auto__ = e9281;
var statearr_9282_9435 = state_9269;
(statearr_9282_9435[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9436 = state_9269;
state_9269 = G__9436;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = function(state_9269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1.call(this,state_9269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__;
})()
;})(__9425,switch__8705__auto__,c__8864__auto___9428,G__9256_9426,n__7123__auto___9424,jobs,results,process,async))
})();
var state__8866__auto__ = (function (){var statearr_9283 = f__8865__auto__.call(null);
(statearr_9283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___9428);

return statearr_9283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(__9425,c__8864__auto___9428,G__9256_9426,n__7123__auto___9424,jobs,results,process,async))
);


break;
case "async":
var c__8864__auto___9437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9425,c__8864__auto___9437,G__9256_9426,n__7123__auto___9424,jobs,results,process,async){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (__9425,c__8864__auto___9437,G__9256_9426,n__7123__auto___9424,jobs,results,process,async){
return (function (state_9296){
var state_val_9297 = (state_9296[(1)]);
if((state_val_9297 === (1))){
var state_9296__$1 = state_9296;
var statearr_9298_9438 = state_9296__$1;
(statearr_9298_9438[(2)] = null);

(statearr_9298_9438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (2))){
var state_9296__$1 = state_9296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9296__$1,(4),jobs);
} else {
if((state_val_9297 === (3))){
var inst_9294 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9296__$1,inst_9294);
} else {
if((state_val_9297 === (4))){
var inst_9286 = (state_9296[(2)]);
var inst_9287 = async.call(null,inst_9286);
var state_9296__$1 = state_9296;
if(cljs.core.truth_(inst_9287)){
var statearr_9299_9439 = state_9296__$1;
(statearr_9299_9439[(1)] = (5));

} else {
var statearr_9300_9440 = state_9296__$1;
(statearr_9300_9440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (5))){
var state_9296__$1 = state_9296;
var statearr_9301_9441 = state_9296__$1;
(statearr_9301_9441[(2)] = null);

(statearr_9301_9441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (6))){
var state_9296__$1 = state_9296;
var statearr_9302_9442 = state_9296__$1;
(statearr_9302_9442[(2)] = null);

(statearr_9302_9442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (7))){
var inst_9292 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9303_9443 = state_9296__$1;
(statearr_9303_9443[(2)] = inst_9292);

(statearr_9303_9443[(1)] = (3));


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
});})(__9425,c__8864__auto___9437,G__9256_9426,n__7123__auto___9424,jobs,results,process,async))
;
return ((function (__9425,switch__8705__auto__,c__8864__auto___9437,G__9256_9426,n__7123__auto___9424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0 = (function (){
var statearr_9307 = [null,null,null,null,null,null,null];
(statearr_9307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__);

(statearr_9307[(1)] = (1));

return statearr_9307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1 = (function (state_9296){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9308){if((e9308 instanceof Object)){
var ex__8709__auto__ = e9308;
var statearr_9309_9444 = state_9296;
(statearr_9309_9444[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9445 = state_9296;
state_9296 = G__9445;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = function(state_9296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1.call(this,state_9296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__;
})()
;})(__9425,switch__8705__auto__,c__8864__auto___9437,G__9256_9426,n__7123__auto___9424,jobs,results,process,async))
})();
var state__8866__auto__ = (function (){var statearr_9310 = f__8865__auto__.call(null);
(statearr_9310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___9437);

return statearr_9310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(__9425,c__8864__auto___9437,G__9256_9426,n__7123__auto___9424,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9446 = (__9425 + (1));
__9425 = G__9446;
continue;
} else {
}
break;
}

var c__8864__auto___9447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___9447,jobs,results,process,async){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___9447,jobs,results,process,async){
return (function (state_9332){
var state_val_9333 = (state_9332[(1)]);
if((state_val_9333 === (1))){
var state_9332__$1 = state_9332;
var statearr_9334_9448 = state_9332__$1;
(statearr_9334_9448[(2)] = null);

(statearr_9334_9448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9333 === (2))){
var state_9332__$1 = state_9332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9332__$1,(4),from);
} else {
if((state_val_9333 === (3))){
var inst_9330 = (state_9332[(2)]);
var state_9332__$1 = state_9332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9332__$1,inst_9330);
} else {
if((state_val_9333 === (4))){
var inst_9313 = (state_9332[(7)]);
var inst_9313__$1 = (state_9332[(2)]);
var inst_9314 = (inst_9313__$1 == null);
var state_9332__$1 = (function (){var statearr_9335 = state_9332;
(statearr_9335[(7)] = inst_9313__$1);

return statearr_9335;
})();
if(cljs.core.truth_(inst_9314)){
var statearr_9336_9449 = state_9332__$1;
(statearr_9336_9449[(1)] = (5));

} else {
var statearr_9337_9450 = state_9332__$1;
(statearr_9337_9450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9333 === (5))){
var inst_9316 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9332__$1 = state_9332;
var statearr_9338_9451 = state_9332__$1;
(statearr_9338_9451[(2)] = inst_9316);

(statearr_9338_9451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9333 === (6))){
var inst_9318 = (state_9332[(8)]);
var inst_9313 = (state_9332[(7)]);
var inst_9318__$1 = cljs.core.async.chan.call(null,(1));
var inst_9319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9320 = [inst_9313,inst_9318__$1];
var inst_9321 = (new cljs.core.PersistentVector(null,2,(5),inst_9319,inst_9320,null));
var state_9332__$1 = (function (){var statearr_9339 = state_9332;
(statearr_9339[(8)] = inst_9318__$1);

return statearr_9339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9332__$1,(8),jobs,inst_9321);
} else {
if((state_val_9333 === (7))){
var inst_9328 = (state_9332[(2)]);
var state_9332__$1 = state_9332;
var statearr_9340_9452 = state_9332__$1;
(statearr_9340_9452[(2)] = inst_9328);

(statearr_9340_9452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9333 === (8))){
var inst_9318 = (state_9332[(8)]);
var inst_9323 = (state_9332[(2)]);
var state_9332__$1 = (function (){var statearr_9341 = state_9332;
(statearr_9341[(9)] = inst_9323);

return statearr_9341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9332__$1,(9),results,inst_9318);
} else {
if((state_val_9333 === (9))){
var inst_9325 = (state_9332[(2)]);
var state_9332__$1 = (function (){var statearr_9342 = state_9332;
(statearr_9342[(10)] = inst_9325);

return statearr_9342;
})();
var statearr_9343_9453 = state_9332__$1;
(statearr_9343_9453[(2)] = null);

(statearr_9343_9453[(1)] = (2));


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
});})(c__8864__auto___9447,jobs,results,process,async))
;
return ((function (switch__8705__auto__,c__8864__auto___9447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0 = (function (){
var statearr_9347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__);

(statearr_9347[(1)] = (1));

return statearr_9347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1 = (function (state_9332){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9348){if((e9348 instanceof Object)){
var ex__8709__auto__ = e9348;
var statearr_9349_9454 = state_9332;
(statearr_9349_9454[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9455 = state_9332;
state_9332 = G__9455;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = function(state_9332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1.call(this,state_9332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___9447,jobs,results,process,async))
})();
var state__8866__auto__ = (function (){var statearr_9350 = f__8865__auto__.call(null);
(statearr_9350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___9447);

return statearr_9350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___9447,jobs,results,process,async))
);


var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__,jobs,results,process,async){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__,jobs,results,process,async){
return (function (state_9388){
var state_val_9389 = (state_9388[(1)]);
if((state_val_9389 === (7))){
var inst_9384 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
var statearr_9390_9456 = state_9388__$1;
(statearr_9390_9456[(2)] = inst_9384);

(statearr_9390_9456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (20))){
var state_9388__$1 = state_9388;
var statearr_9391_9457 = state_9388__$1;
(statearr_9391_9457[(2)] = null);

(statearr_9391_9457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (1))){
var state_9388__$1 = state_9388;
var statearr_9392_9458 = state_9388__$1;
(statearr_9392_9458[(2)] = null);

(statearr_9392_9458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (4))){
var inst_9353 = (state_9388[(7)]);
var inst_9353__$1 = (state_9388[(2)]);
var inst_9354 = (inst_9353__$1 == null);
var state_9388__$1 = (function (){var statearr_9393 = state_9388;
(statearr_9393[(7)] = inst_9353__$1);

return statearr_9393;
})();
if(cljs.core.truth_(inst_9354)){
var statearr_9394_9459 = state_9388__$1;
(statearr_9394_9459[(1)] = (5));

} else {
var statearr_9395_9460 = state_9388__$1;
(statearr_9395_9460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (15))){
var inst_9366 = (state_9388[(8)]);
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9388__$1,(18),to,inst_9366);
} else {
if((state_val_9389 === (21))){
var inst_9379 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
var statearr_9396_9461 = state_9388__$1;
(statearr_9396_9461[(2)] = inst_9379);

(statearr_9396_9461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (13))){
var inst_9381 = (state_9388[(2)]);
var state_9388__$1 = (function (){var statearr_9397 = state_9388;
(statearr_9397[(9)] = inst_9381);

return statearr_9397;
})();
var statearr_9398_9462 = state_9388__$1;
(statearr_9398_9462[(2)] = null);

(statearr_9398_9462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (6))){
var inst_9353 = (state_9388[(7)]);
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9388__$1,(11),inst_9353);
} else {
if((state_val_9389 === (17))){
var inst_9374 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
if(cljs.core.truth_(inst_9374)){
var statearr_9399_9463 = state_9388__$1;
(statearr_9399_9463[(1)] = (19));

} else {
var statearr_9400_9464 = state_9388__$1;
(statearr_9400_9464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (3))){
var inst_9386 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9388__$1,inst_9386);
} else {
if((state_val_9389 === (12))){
var inst_9363 = (state_9388[(10)]);
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9388__$1,(14),inst_9363);
} else {
if((state_val_9389 === (2))){
var state_9388__$1 = state_9388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9388__$1,(4),results);
} else {
if((state_val_9389 === (19))){
var state_9388__$1 = state_9388;
var statearr_9401_9465 = state_9388__$1;
(statearr_9401_9465[(2)] = null);

(statearr_9401_9465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (11))){
var inst_9363 = (state_9388[(2)]);
var state_9388__$1 = (function (){var statearr_9402 = state_9388;
(statearr_9402[(10)] = inst_9363);

return statearr_9402;
})();
var statearr_9403_9466 = state_9388__$1;
(statearr_9403_9466[(2)] = null);

(statearr_9403_9466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (9))){
var state_9388__$1 = state_9388;
var statearr_9404_9467 = state_9388__$1;
(statearr_9404_9467[(2)] = null);

(statearr_9404_9467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (5))){
var state_9388__$1 = state_9388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9405_9468 = state_9388__$1;
(statearr_9405_9468[(1)] = (8));

} else {
var statearr_9406_9469 = state_9388__$1;
(statearr_9406_9469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (14))){
var inst_9366 = (state_9388[(8)]);
var inst_9368 = (state_9388[(11)]);
var inst_9366__$1 = (state_9388[(2)]);
var inst_9367 = (inst_9366__$1 == null);
var inst_9368__$1 = cljs.core.not.call(null,inst_9367);
var state_9388__$1 = (function (){var statearr_9407 = state_9388;
(statearr_9407[(8)] = inst_9366__$1);

(statearr_9407[(11)] = inst_9368__$1);

return statearr_9407;
})();
if(inst_9368__$1){
var statearr_9408_9470 = state_9388__$1;
(statearr_9408_9470[(1)] = (15));

} else {
var statearr_9409_9471 = state_9388__$1;
(statearr_9409_9471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (16))){
var inst_9368 = (state_9388[(11)]);
var state_9388__$1 = state_9388;
var statearr_9410_9472 = state_9388__$1;
(statearr_9410_9472[(2)] = inst_9368);

(statearr_9410_9472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (10))){
var inst_9360 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
var statearr_9411_9473 = state_9388__$1;
(statearr_9411_9473[(2)] = inst_9360);

(statearr_9411_9473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (18))){
var inst_9371 = (state_9388[(2)]);
var state_9388__$1 = state_9388;
var statearr_9412_9474 = state_9388__$1;
(statearr_9412_9474[(2)] = inst_9371);

(statearr_9412_9474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9389 === (8))){
var inst_9357 = cljs.core.async.close_BANG_.call(null,to);
var state_9388__$1 = state_9388;
var statearr_9413_9475 = state_9388__$1;
(statearr_9413_9475[(2)] = inst_9357);

(statearr_9413_9475[(1)] = (10));


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
});})(c__8864__auto__,jobs,results,process,async))
;
return ((function (switch__8705__auto__,c__8864__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0 = (function (){
var statearr_9417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__);

(statearr_9417[(1)] = (1));

return statearr_9417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1 = (function (state_9388){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9418){if((e9418 instanceof Object)){
var ex__8709__auto__ = e9418;
var statearr_9419_9476 = state_9388;
(statearr_9419_9476[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9477 = state_9388;
state_9388 = G__9477;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__ = function(state_9388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1.call(this,state_9388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__,jobs,results,process,async))
})();
var state__8866__auto__ = (function (){var statearr_9420 = f__8865__auto__.call(null);
(statearr_9420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_9420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__,jobs,results,process,async))
);

return c__8864__auto__;
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
var args9478 = [];
var len__7278__auto___9481 = arguments.length;
var i__7279__auto___9482 = (0);
while(true){
if((i__7279__auto___9482 < len__7278__auto___9481)){
args9478.push((arguments[i__7279__auto___9482]));

var G__9483 = (i__7279__auto___9482 + (1));
i__7279__auto___9482 = G__9483;
continue;
} else {
}
break;
}

var G__9480 = args9478.length;
switch (G__9480) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9478.length)].join('')));

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
var args9485 = [];
var len__7278__auto___9488 = arguments.length;
var i__7279__auto___9489 = (0);
while(true){
if((i__7279__auto___9489 < len__7278__auto___9488)){
args9485.push((arguments[i__7279__auto___9489]));

var G__9490 = (i__7279__auto___9489 + (1));
i__7279__auto___9489 = G__9490;
continue;
} else {
}
break;
}

var G__9487 = args9485.length;
switch (G__9487) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9485.length)].join('')));

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
var args9492 = [];
var len__7278__auto___9545 = arguments.length;
var i__7279__auto___9546 = (0);
while(true){
if((i__7279__auto___9546 < len__7278__auto___9545)){
args9492.push((arguments[i__7279__auto___9546]));

var G__9547 = (i__7279__auto___9546 + (1));
i__7279__auto___9546 = G__9547;
continue;
} else {
}
break;
}

var G__9494 = args9492.length;
switch (G__9494) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9492.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8864__auto___9549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___9549,tc,fc){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___9549,tc,fc){
return (function (state_9520){
var state_val_9521 = (state_9520[(1)]);
if((state_val_9521 === (7))){
var inst_9516 = (state_9520[(2)]);
var state_9520__$1 = state_9520;
var statearr_9522_9550 = state_9520__$1;
(statearr_9522_9550[(2)] = inst_9516);

(statearr_9522_9550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (1))){
var state_9520__$1 = state_9520;
var statearr_9523_9551 = state_9520__$1;
(statearr_9523_9551[(2)] = null);

(statearr_9523_9551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (4))){
var inst_9497 = (state_9520[(7)]);
var inst_9497__$1 = (state_9520[(2)]);
var inst_9498 = (inst_9497__$1 == null);
var state_9520__$1 = (function (){var statearr_9524 = state_9520;
(statearr_9524[(7)] = inst_9497__$1);

return statearr_9524;
})();
if(cljs.core.truth_(inst_9498)){
var statearr_9525_9552 = state_9520__$1;
(statearr_9525_9552[(1)] = (5));

} else {
var statearr_9526_9553 = state_9520__$1;
(statearr_9526_9553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (13))){
var state_9520__$1 = state_9520;
var statearr_9527_9554 = state_9520__$1;
(statearr_9527_9554[(2)] = null);

(statearr_9527_9554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (6))){
var inst_9497 = (state_9520[(7)]);
var inst_9503 = p.call(null,inst_9497);
var state_9520__$1 = state_9520;
if(cljs.core.truth_(inst_9503)){
var statearr_9528_9555 = state_9520__$1;
(statearr_9528_9555[(1)] = (9));

} else {
var statearr_9529_9556 = state_9520__$1;
(statearr_9529_9556[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (3))){
var inst_9518 = (state_9520[(2)]);
var state_9520__$1 = state_9520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9520__$1,inst_9518);
} else {
if((state_val_9521 === (12))){
var state_9520__$1 = state_9520;
var statearr_9530_9557 = state_9520__$1;
(statearr_9530_9557[(2)] = null);

(statearr_9530_9557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (2))){
var state_9520__$1 = state_9520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9520__$1,(4),ch);
} else {
if((state_val_9521 === (11))){
var inst_9497 = (state_9520[(7)]);
var inst_9507 = (state_9520[(2)]);
var state_9520__$1 = state_9520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9520__$1,(8),inst_9507,inst_9497);
} else {
if((state_val_9521 === (9))){
var state_9520__$1 = state_9520;
var statearr_9531_9558 = state_9520__$1;
(statearr_9531_9558[(2)] = tc);

(statearr_9531_9558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (5))){
var inst_9500 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9501 = cljs.core.async.close_BANG_.call(null,fc);
var state_9520__$1 = (function (){var statearr_9532 = state_9520;
(statearr_9532[(8)] = inst_9500);

return statearr_9532;
})();
var statearr_9533_9559 = state_9520__$1;
(statearr_9533_9559[(2)] = inst_9501);

(statearr_9533_9559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (14))){
var inst_9514 = (state_9520[(2)]);
var state_9520__$1 = state_9520;
var statearr_9534_9560 = state_9520__$1;
(statearr_9534_9560[(2)] = inst_9514);

(statearr_9534_9560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (10))){
var state_9520__$1 = state_9520;
var statearr_9535_9561 = state_9520__$1;
(statearr_9535_9561[(2)] = fc);

(statearr_9535_9561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9521 === (8))){
var inst_9509 = (state_9520[(2)]);
var state_9520__$1 = state_9520;
if(cljs.core.truth_(inst_9509)){
var statearr_9536_9562 = state_9520__$1;
(statearr_9536_9562[(1)] = (12));

} else {
var statearr_9537_9563 = state_9520__$1;
(statearr_9537_9563[(1)] = (13));

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
});})(c__8864__auto___9549,tc,fc))
;
return ((function (switch__8705__auto__,c__8864__auto___9549,tc,fc){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_9541 = [null,null,null,null,null,null,null,null,null];
(statearr_9541[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_9541[(1)] = (1));

return statearr_9541;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_9520){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9542){if((e9542 instanceof Object)){
var ex__8709__auto__ = e9542;
var statearr_9543_9564 = state_9520;
(statearr_9543_9564[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9565 = state_9520;
state_9520 = G__9565;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_9520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_9520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___9549,tc,fc))
})();
var state__8866__auto__ = (function (){var statearr_9544 = f__8865__auto__.call(null);
(statearr_9544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___9549);

return statearr_9544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___9549,tc,fc))
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
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_9629){
var state_val_9630 = (state_9629[(1)]);
if((state_val_9630 === (7))){
var inst_9625 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9631_9652 = state_9629__$1;
(statearr_9631_9652[(2)] = inst_9625);

(statearr_9631_9652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (1))){
var inst_9609 = init;
var state_9629__$1 = (function (){var statearr_9632 = state_9629;
(statearr_9632[(7)] = inst_9609);

return statearr_9632;
})();
var statearr_9633_9653 = state_9629__$1;
(statearr_9633_9653[(2)] = null);

(statearr_9633_9653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (4))){
var inst_9612 = (state_9629[(8)]);
var inst_9612__$1 = (state_9629[(2)]);
var inst_9613 = (inst_9612__$1 == null);
var state_9629__$1 = (function (){var statearr_9634 = state_9629;
(statearr_9634[(8)] = inst_9612__$1);

return statearr_9634;
})();
if(cljs.core.truth_(inst_9613)){
var statearr_9635_9654 = state_9629__$1;
(statearr_9635_9654[(1)] = (5));

} else {
var statearr_9636_9655 = state_9629__$1;
(statearr_9636_9655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (6))){
var inst_9612 = (state_9629[(8)]);
var inst_9609 = (state_9629[(7)]);
var inst_9616 = (state_9629[(9)]);
var inst_9616__$1 = f.call(null,inst_9609,inst_9612);
var inst_9617 = cljs.core.reduced_QMARK_.call(null,inst_9616__$1);
var state_9629__$1 = (function (){var statearr_9637 = state_9629;
(statearr_9637[(9)] = inst_9616__$1);

return statearr_9637;
})();
if(inst_9617){
var statearr_9638_9656 = state_9629__$1;
(statearr_9638_9656[(1)] = (8));

} else {
var statearr_9639_9657 = state_9629__$1;
(statearr_9639_9657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (3))){
var inst_9627 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9629__$1,inst_9627);
} else {
if((state_val_9630 === (2))){
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9629__$1,(4),ch);
} else {
if((state_val_9630 === (9))){
var inst_9616 = (state_9629[(9)]);
var inst_9609 = inst_9616;
var state_9629__$1 = (function (){var statearr_9640 = state_9629;
(statearr_9640[(7)] = inst_9609);

return statearr_9640;
})();
var statearr_9641_9658 = state_9629__$1;
(statearr_9641_9658[(2)] = null);

(statearr_9641_9658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (5))){
var inst_9609 = (state_9629[(7)]);
var state_9629__$1 = state_9629;
var statearr_9642_9659 = state_9629__$1;
(statearr_9642_9659[(2)] = inst_9609);

(statearr_9642_9659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (10))){
var inst_9623 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9643_9660 = state_9629__$1;
(statearr_9643_9660[(2)] = inst_9623);

(statearr_9643_9660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (8))){
var inst_9616 = (state_9629[(9)]);
var inst_9619 = cljs.core.deref.call(null,inst_9616);
var state_9629__$1 = state_9629;
var statearr_9644_9661 = state_9629__$1;
(statearr_9644_9661[(2)] = inst_9619);

(statearr_9644_9661[(1)] = (10));


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
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8706__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8706__auto____0 = (function (){
var statearr_9648 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9648[(0)] = cljs$core$async$reduce_$_state_machine__8706__auto__);

(statearr_9648[(1)] = (1));

return statearr_9648;
});
var cljs$core$async$reduce_$_state_machine__8706__auto____1 = (function (state_9629){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9649){if((e9649 instanceof Object)){
var ex__8709__auto__ = e9649;
var statearr_9650_9662 = state_9629;
(statearr_9650_9662[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9663 = state_9629;
state_9629 = G__9663;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8706__auto__ = function(state_9629){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8706__auto____1.call(this,state_9629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8706__auto____0;
cljs$core$async$reduce_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8706__auto____1;
return cljs$core$async$reduce_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_9651 = f__8865__auto__.call(null);
(statearr_9651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_9651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
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
var args9664 = [];
var len__7278__auto___9716 = arguments.length;
var i__7279__auto___9717 = (0);
while(true){
if((i__7279__auto___9717 < len__7278__auto___9716)){
args9664.push((arguments[i__7279__auto___9717]));

var G__9718 = (i__7279__auto___9717 + (1));
i__7279__auto___9717 = G__9718;
continue;
} else {
}
break;
}

var G__9666 = args9664.length;
switch (G__9666) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9664.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_9691){
var state_val_9692 = (state_9691[(1)]);
if((state_val_9692 === (7))){
var inst_9673 = (state_9691[(2)]);
var state_9691__$1 = state_9691;
var statearr_9693_9720 = state_9691__$1;
(statearr_9693_9720[(2)] = inst_9673);

(statearr_9693_9720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (1))){
var inst_9667 = cljs.core.seq.call(null,coll);
var inst_9668 = inst_9667;
var state_9691__$1 = (function (){var statearr_9694 = state_9691;
(statearr_9694[(7)] = inst_9668);

return statearr_9694;
})();
var statearr_9695_9721 = state_9691__$1;
(statearr_9695_9721[(2)] = null);

(statearr_9695_9721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (4))){
var inst_9668 = (state_9691[(7)]);
var inst_9671 = cljs.core.first.call(null,inst_9668);
var state_9691__$1 = state_9691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9691__$1,(7),ch,inst_9671);
} else {
if((state_val_9692 === (13))){
var inst_9685 = (state_9691[(2)]);
var state_9691__$1 = state_9691;
var statearr_9696_9722 = state_9691__$1;
(statearr_9696_9722[(2)] = inst_9685);

(statearr_9696_9722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (6))){
var inst_9676 = (state_9691[(2)]);
var state_9691__$1 = state_9691;
if(cljs.core.truth_(inst_9676)){
var statearr_9697_9723 = state_9691__$1;
(statearr_9697_9723[(1)] = (8));

} else {
var statearr_9698_9724 = state_9691__$1;
(statearr_9698_9724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (3))){
var inst_9689 = (state_9691[(2)]);
var state_9691__$1 = state_9691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9691__$1,inst_9689);
} else {
if((state_val_9692 === (12))){
var state_9691__$1 = state_9691;
var statearr_9699_9725 = state_9691__$1;
(statearr_9699_9725[(2)] = null);

(statearr_9699_9725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (2))){
var inst_9668 = (state_9691[(7)]);
var state_9691__$1 = state_9691;
if(cljs.core.truth_(inst_9668)){
var statearr_9700_9726 = state_9691__$1;
(statearr_9700_9726[(1)] = (4));

} else {
var statearr_9701_9727 = state_9691__$1;
(statearr_9701_9727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (11))){
var inst_9682 = cljs.core.async.close_BANG_.call(null,ch);
var state_9691__$1 = state_9691;
var statearr_9702_9728 = state_9691__$1;
(statearr_9702_9728[(2)] = inst_9682);

(statearr_9702_9728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (9))){
var state_9691__$1 = state_9691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9703_9729 = state_9691__$1;
(statearr_9703_9729[(1)] = (11));

} else {
var statearr_9704_9730 = state_9691__$1;
(statearr_9704_9730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (5))){
var inst_9668 = (state_9691[(7)]);
var state_9691__$1 = state_9691;
var statearr_9705_9731 = state_9691__$1;
(statearr_9705_9731[(2)] = inst_9668);

(statearr_9705_9731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (10))){
var inst_9687 = (state_9691[(2)]);
var state_9691__$1 = state_9691;
var statearr_9706_9732 = state_9691__$1;
(statearr_9706_9732[(2)] = inst_9687);

(statearr_9706_9732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9692 === (8))){
var inst_9668 = (state_9691[(7)]);
var inst_9678 = cljs.core.next.call(null,inst_9668);
var inst_9668__$1 = inst_9678;
var state_9691__$1 = (function (){var statearr_9707 = state_9691;
(statearr_9707[(7)] = inst_9668__$1);

return statearr_9707;
})();
var statearr_9708_9733 = state_9691__$1;
(statearr_9708_9733[(2)] = null);

(statearr_9708_9733[(1)] = (2));


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
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_9712 = [null,null,null,null,null,null,null,null];
(statearr_9712[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_9712[(1)] = (1));

return statearr_9712;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_9691){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_9691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e9713){if((e9713 instanceof Object)){
var ex__8709__auto__ = e9713;
var statearr_9714_9734 = state_9691;
(statearr_9714_9734[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9735 = state_9691;
state_9691 = G__9735;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_9691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_9691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_9715 = f__8865__auto__.call(null);
(statearr_9715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_9715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
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
var x__6871__auto__ = (((_ == null))?null:_);
var m__6872__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,_);
} else {
var m__6872__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,_);
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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6872__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m,ch);
} else {
var m__6872__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m,ch);
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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m);
} else {
var m__6872__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async9957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9957 = (function (mult,ch,cs,meta9958){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9958 = meta9958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9959,meta9958__$1){
var self__ = this;
var _9959__$1 = this;
return (new cljs.core.async.t_cljs$core$async9957(self__.mult,self__.ch,self__.cs,meta9958__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9959){
var self__ = this;
var _9959__$1 = this;
return self__.meta9958;
});})(cs))
;

cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9957.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9957.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9958","meta9958",-1643171205,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9957";

cljs.core.async.t_cljs$core$async9957.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async9957");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9957 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9957(mult__$1,ch__$1,cs__$1,meta9958){
return (new cljs.core.async.t_cljs$core$async9957(mult__$1,ch__$1,cs__$1,meta9958));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9957(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8864__auto___10178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___10178,cs,m,dchan,dctr,done){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___10178,cs,m,dchan,dctr,done){
return (function (state_10090){
var state_val_10091 = (state_10090[(1)]);
if((state_val_10091 === (7))){
var inst_10086 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10092_10179 = state_10090__$1;
(statearr_10092_10179[(2)] = inst_10086);

(statearr_10092_10179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (20))){
var inst_9991 = (state_10090[(7)]);
var inst_10001 = cljs.core.first.call(null,inst_9991);
var inst_10002 = cljs.core.nth.call(null,inst_10001,(0),null);
var inst_10003 = cljs.core.nth.call(null,inst_10001,(1),null);
var state_10090__$1 = (function (){var statearr_10093 = state_10090;
(statearr_10093[(8)] = inst_10002);

return statearr_10093;
})();
if(cljs.core.truth_(inst_10003)){
var statearr_10094_10180 = state_10090__$1;
(statearr_10094_10180[(1)] = (22));

} else {
var statearr_10095_10181 = state_10090__$1;
(statearr_10095_10181[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (27))){
var inst_10031 = (state_10090[(9)]);
var inst_10033 = (state_10090[(10)]);
var inst_9962 = (state_10090[(11)]);
var inst_10038 = (state_10090[(12)]);
var inst_10038__$1 = cljs.core._nth.call(null,inst_10031,inst_10033);
var inst_10039 = cljs.core.async.put_BANG_.call(null,inst_10038__$1,inst_9962,done);
var state_10090__$1 = (function (){var statearr_10096 = state_10090;
(statearr_10096[(12)] = inst_10038__$1);

return statearr_10096;
})();
if(cljs.core.truth_(inst_10039)){
var statearr_10097_10182 = state_10090__$1;
(statearr_10097_10182[(1)] = (30));

} else {
var statearr_10098_10183 = state_10090__$1;
(statearr_10098_10183[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (1))){
var state_10090__$1 = state_10090;
var statearr_10099_10184 = state_10090__$1;
(statearr_10099_10184[(2)] = null);

(statearr_10099_10184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (24))){
var inst_9991 = (state_10090[(7)]);
var inst_10008 = (state_10090[(2)]);
var inst_10009 = cljs.core.next.call(null,inst_9991);
var inst_9971 = inst_10009;
var inst_9972 = null;
var inst_9973 = (0);
var inst_9974 = (0);
var state_10090__$1 = (function (){var statearr_10100 = state_10090;
(statearr_10100[(13)] = inst_10008);

(statearr_10100[(14)] = inst_9972);

(statearr_10100[(15)] = inst_9971);

(statearr_10100[(16)] = inst_9974);

(statearr_10100[(17)] = inst_9973);

return statearr_10100;
})();
var statearr_10101_10185 = state_10090__$1;
(statearr_10101_10185[(2)] = null);

(statearr_10101_10185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (39))){
var state_10090__$1 = state_10090;
var statearr_10105_10186 = state_10090__$1;
(statearr_10105_10186[(2)] = null);

(statearr_10105_10186[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (4))){
var inst_9962 = (state_10090[(11)]);
var inst_9962__$1 = (state_10090[(2)]);
var inst_9963 = (inst_9962__$1 == null);
var state_10090__$1 = (function (){var statearr_10106 = state_10090;
(statearr_10106[(11)] = inst_9962__$1);

return statearr_10106;
})();
if(cljs.core.truth_(inst_9963)){
var statearr_10107_10187 = state_10090__$1;
(statearr_10107_10187[(1)] = (5));

} else {
var statearr_10108_10188 = state_10090__$1;
(statearr_10108_10188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (15))){
var inst_9972 = (state_10090[(14)]);
var inst_9971 = (state_10090[(15)]);
var inst_9974 = (state_10090[(16)]);
var inst_9973 = (state_10090[(17)]);
var inst_9987 = (state_10090[(2)]);
var inst_9988 = (inst_9974 + (1));
var tmp10102 = inst_9972;
var tmp10103 = inst_9971;
var tmp10104 = inst_9973;
var inst_9971__$1 = tmp10103;
var inst_9972__$1 = tmp10102;
var inst_9973__$1 = tmp10104;
var inst_9974__$1 = inst_9988;
var state_10090__$1 = (function (){var statearr_10109 = state_10090;
(statearr_10109[(18)] = inst_9987);

(statearr_10109[(14)] = inst_9972__$1);

(statearr_10109[(15)] = inst_9971__$1);

(statearr_10109[(16)] = inst_9974__$1);

(statearr_10109[(17)] = inst_9973__$1);

return statearr_10109;
})();
var statearr_10110_10189 = state_10090__$1;
(statearr_10110_10189[(2)] = null);

(statearr_10110_10189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (21))){
var inst_10012 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10114_10190 = state_10090__$1;
(statearr_10114_10190[(2)] = inst_10012);

(statearr_10114_10190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (31))){
var inst_10038 = (state_10090[(12)]);
var inst_10042 = done.call(null,null);
var inst_10043 = cljs.core.async.untap_STAR_.call(null,m,inst_10038);
var state_10090__$1 = (function (){var statearr_10115 = state_10090;
(statearr_10115[(19)] = inst_10042);

return statearr_10115;
})();
var statearr_10116_10191 = state_10090__$1;
(statearr_10116_10191[(2)] = inst_10043);

(statearr_10116_10191[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (32))){
var inst_10032 = (state_10090[(20)]);
var inst_10031 = (state_10090[(9)]);
var inst_10033 = (state_10090[(10)]);
var inst_10030 = (state_10090[(21)]);
var inst_10045 = (state_10090[(2)]);
var inst_10046 = (inst_10033 + (1));
var tmp10111 = inst_10032;
var tmp10112 = inst_10031;
var tmp10113 = inst_10030;
var inst_10030__$1 = tmp10113;
var inst_10031__$1 = tmp10112;
var inst_10032__$1 = tmp10111;
var inst_10033__$1 = inst_10046;
var state_10090__$1 = (function (){var statearr_10117 = state_10090;
(statearr_10117[(20)] = inst_10032__$1);

(statearr_10117[(9)] = inst_10031__$1);

(statearr_10117[(10)] = inst_10033__$1);

(statearr_10117[(21)] = inst_10030__$1);

(statearr_10117[(22)] = inst_10045);

return statearr_10117;
})();
var statearr_10118_10192 = state_10090__$1;
(statearr_10118_10192[(2)] = null);

(statearr_10118_10192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (40))){
var inst_10058 = (state_10090[(23)]);
var inst_10062 = done.call(null,null);
var inst_10063 = cljs.core.async.untap_STAR_.call(null,m,inst_10058);
var state_10090__$1 = (function (){var statearr_10119 = state_10090;
(statearr_10119[(24)] = inst_10062);

return statearr_10119;
})();
var statearr_10120_10193 = state_10090__$1;
(statearr_10120_10193[(2)] = inst_10063);

(statearr_10120_10193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (33))){
var inst_10049 = (state_10090[(25)]);
var inst_10051 = cljs.core.chunked_seq_QMARK_.call(null,inst_10049);
var state_10090__$1 = state_10090;
if(inst_10051){
var statearr_10121_10194 = state_10090__$1;
(statearr_10121_10194[(1)] = (36));

} else {
var statearr_10122_10195 = state_10090__$1;
(statearr_10122_10195[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (13))){
var inst_9981 = (state_10090[(26)]);
var inst_9984 = cljs.core.async.close_BANG_.call(null,inst_9981);
var state_10090__$1 = state_10090;
var statearr_10123_10196 = state_10090__$1;
(statearr_10123_10196[(2)] = inst_9984);

(statearr_10123_10196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (22))){
var inst_10002 = (state_10090[(8)]);
var inst_10005 = cljs.core.async.close_BANG_.call(null,inst_10002);
var state_10090__$1 = state_10090;
var statearr_10124_10197 = state_10090__$1;
(statearr_10124_10197[(2)] = inst_10005);

(statearr_10124_10197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (36))){
var inst_10049 = (state_10090[(25)]);
var inst_10053 = cljs.core.chunk_first.call(null,inst_10049);
var inst_10054 = cljs.core.chunk_rest.call(null,inst_10049);
var inst_10055 = cljs.core.count.call(null,inst_10053);
var inst_10030 = inst_10054;
var inst_10031 = inst_10053;
var inst_10032 = inst_10055;
var inst_10033 = (0);
var state_10090__$1 = (function (){var statearr_10125 = state_10090;
(statearr_10125[(20)] = inst_10032);

(statearr_10125[(9)] = inst_10031);

(statearr_10125[(10)] = inst_10033);

(statearr_10125[(21)] = inst_10030);

return statearr_10125;
})();
var statearr_10126_10198 = state_10090__$1;
(statearr_10126_10198[(2)] = null);

(statearr_10126_10198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (41))){
var inst_10049 = (state_10090[(25)]);
var inst_10065 = (state_10090[(2)]);
var inst_10066 = cljs.core.next.call(null,inst_10049);
var inst_10030 = inst_10066;
var inst_10031 = null;
var inst_10032 = (0);
var inst_10033 = (0);
var state_10090__$1 = (function (){var statearr_10127 = state_10090;
(statearr_10127[(20)] = inst_10032);

(statearr_10127[(9)] = inst_10031);

(statearr_10127[(10)] = inst_10033);

(statearr_10127[(21)] = inst_10030);

(statearr_10127[(27)] = inst_10065);

return statearr_10127;
})();
var statearr_10128_10199 = state_10090__$1;
(statearr_10128_10199[(2)] = null);

(statearr_10128_10199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (43))){
var state_10090__$1 = state_10090;
var statearr_10129_10200 = state_10090__$1;
(statearr_10129_10200[(2)] = null);

(statearr_10129_10200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (29))){
var inst_10074 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10130_10201 = state_10090__$1;
(statearr_10130_10201[(2)] = inst_10074);

(statearr_10130_10201[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (44))){
var inst_10083 = (state_10090[(2)]);
var state_10090__$1 = (function (){var statearr_10131 = state_10090;
(statearr_10131[(28)] = inst_10083);

return statearr_10131;
})();
var statearr_10132_10202 = state_10090__$1;
(statearr_10132_10202[(2)] = null);

(statearr_10132_10202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (6))){
var inst_10022 = (state_10090[(29)]);
var inst_10021 = cljs.core.deref.call(null,cs);
var inst_10022__$1 = cljs.core.keys.call(null,inst_10021);
var inst_10023 = cljs.core.count.call(null,inst_10022__$1);
var inst_10024 = cljs.core.reset_BANG_.call(null,dctr,inst_10023);
var inst_10029 = cljs.core.seq.call(null,inst_10022__$1);
var inst_10030 = inst_10029;
var inst_10031 = null;
var inst_10032 = (0);
var inst_10033 = (0);
var state_10090__$1 = (function (){var statearr_10133 = state_10090;
(statearr_10133[(20)] = inst_10032);

(statearr_10133[(9)] = inst_10031);

(statearr_10133[(10)] = inst_10033);

(statearr_10133[(30)] = inst_10024);

(statearr_10133[(29)] = inst_10022__$1);

(statearr_10133[(21)] = inst_10030);

return statearr_10133;
})();
var statearr_10134_10203 = state_10090__$1;
(statearr_10134_10203[(2)] = null);

(statearr_10134_10203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (28))){
var inst_10049 = (state_10090[(25)]);
var inst_10030 = (state_10090[(21)]);
var inst_10049__$1 = cljs.core.seq.call(null,inst_10030);
var state_10090__$1 = (function (){var statearr_10135 = state_10090;
(statearr_10135[(25)] = inst_10049__$1);

return statearr_10135;
})();
if(inst_10049__$1){
var statearr_10136_10204 = state_10090__$1;
(statearr_10136_10204[(1)] = (33));

} else {
var statearr_10137_10205 = state_10090__$1;
(statearr_10137_10205[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (25))){
var inst_10032 = (state_10090[(20)]);
var inst_10033 = (state_10090[(10)]);
var inst_10035 = (inst_10033 < inst_10032);
var inst_10036 = inst_10035;
var state_10090__$1 = state_10090;
if(cljs.core.truth_(inst_10036)){
var statearr_10138_10206 = state_10090__$1;
(statearr_10138_10206[(1)] = (27));

} else {
var statearr_10139_10207 = state_10090__$1;
(statearr_10139_10207[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (34))){
var state_10090__$1 = state_10090;
var statearr_10140_10208 = state_10090__$1;
(statearr_10140_10208[(2)] = null);

(statearr_10140_10208[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (17))){
var state_10090__$1 = state_10090;
var statearr_10141_10209 = state_10090__$1;
(statearr_10141_10209[(2)] = null);

(statearr_10141_10209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (3))){
var inst_10088 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10090__$1,inst_10088);
} else {
if((state_val_10091 === (12))){
var inst_10017 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10142_10210 = state_10090__$1;
(statearr_10142_10210[(2)] = inst_10017);

(statearr_10142_10210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (2))){
var state_10090__$1 = state_10090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10090__$1,(4),ch);
} else {
if((state_val_10091 === (23))){
var state_10090__$1 = state_10090;
var statearr_10143_10211 = state_10090__$1;
(statearr_10143_10211[(2)] = null);

(statearr_10143_10211[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (35))){
var inst_10072 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10144_10212 = state_10090__$1;
(statearr_10144_10212[(2)] = inst_10072);

(statearr_10144_10212[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (19))){
var inst_9991 = (state_10090[(7)]);
var inst_9995 = cljs.core.chunk_first.call(null,inst_9991);
var inst_9996 = cljs.core.chunk_rest.call(null,inst_9991);
var inst_9997 = cljs.core.count.call(null,inst_9995);
var inst_9971 = inst_9996;
var inst_9972 = inst_9995;
var inst_9973 = inst_9997;
var inst_9974 = (0);
var state_10090__$1 = (function (){var statearr_10145 = state_10090;
(statearr_10145[(14)] = inst_9972);

(statearr_10145[(15)] = inst_9971);

(statearr_10145[(16)] = inst_9974);

(statearr_10145[(17)] = inst_9973);

return statearr_10145;
})();
var statearr_10146_10213 = state_10090__$1;
(statearr_10146_10213[(2)] = null);

(statearr_10146_10213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (11))){
var inst_9991 = (state_10090[(7)]);
var inst_9971 = (state_10090[(15)]);
var inst_9991__$1 = cljs.core.seq.call(null,inst_9971);
var state_10090__$1 = (function (){var statearr_10147 = state_10090;
(statearr_10147[(7)] = inst_9991__$1);

return statearr_10147;
})();
if(inst_9991__$1){
var statearr_10148_10214 = state_10090__$1;
(statearr_10148_10214[(1)] = (16));

} else {
var statearr_10149_10215 = state_10090__$1;
(statearr_10149_10215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (9))){
var inst_10019 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10150_10216 = state_10090__$1;
(statearr_10150_10216[(2)] = inst_10019);

(statearr_10150_10216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (5))){
var inst_9969 = cljs.core.deref.call(null,cs);
var inst_9970 = cljs.core.seq.call(null,inst_9969);
var inst_9971 = inst_9970;
var inst_9972 = null;
var inst_9973 = (0);
var inst_9974 = (0);
var state_10090__$1 = (function (){var statearr_10151 = state_10090;
(statearr_10151[(14)] = inst_9972);

(statearr_10151[(15)] = inst_9971);

(statearr_10151[(16)] = inst_9974);

(statearr_10151[(17)] = inst_9973);

return statearr_10151;
})();
var statearr_10152_10217 = state_10090__$1;
(statearr_10152_10217[(2)] = null);

(statearr_10152_10217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (14))){
var state_10090__$1 = state_10090;
var statearr_10153_10218 = state_10090__$1;
(statearr_10153_10218[(2)] = null);

(statearr_10153_10218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (45))){
var inst_10080 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10154_10219 = state_10090__$1;
(statearr_10154_10219[(2)] = inst_10080);

(statearr_10154_10219[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (26))){
var inst_10022 = (state_10090[(29)]);
var inst_10076 = (state_10090[(2)]);
var inst_10077 = cljs.core.seq.call(null,inst_10022);
var state_10090__$1 = (function (){var statearr_10155 = state_10090;
(statearr_10155[(31)] = inst_10076);

return statearr_10155;
})();
if(inst_10077){
var statearr_10156_10220 = state_10090__$1;
(statearr_10156_10220[(1)] = (42));

} else {
var statearr_10157_10221 = state_10090__$1;
(statearr_10157_10221[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (16))){
var inst_9991 = (state_10090[(7)]);
var inst_9993 = cljs.core.chunked_seq_QMARK_.call(null,inst_9991);
var state_10090__$1 = state_10090;
if(inst_9993){
var statearr_10158_10222 = state_10090__$1;
(statearr_10158_10222[(1)] = (19));

} else {
var statearr_10159_10223 = state_10090__$1;
(statearr_10159_10223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (38))){
var inst_10069 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10160_10224 = state_10090__$1;
(statearr_10160_10224[(2)] = inst_10069);

(statearr_10160_10224[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (30))){
var state_10090__$1 = state_10090;
var statearr_10161_10225 = state_10090__$1;
(statearr_10161_10225[(2)] = null);

(statearr_10161_10225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (10))){
var inst_9972 = (state_10090[(14)]);
var inst_9974 = (state_10090[(16)]);
var inst_9980 = cljs.core._nth.call(null,inst_9972,inst_9974);
var inst_9981 = cljs.core.nth.call(null,inst_9980,(0),null);
var inst_9982 = cljs.core.nth.call(null,inst_9980,(1),null);
var state_10090__$1 = (function (){var statearr_10162 = state_10090;
(statearr_10162[(26)] = inst_9981);

return statearr_10162;
})();
if(cljs.core.truth_(inst_9982)){
var statearr_10163_10226 = state_10090__$1;
(statearr_10163_10226[(1)] = (13));

} else {
var statearr_10164_10227 = state_10090__$1;
(statearr_10164_10227[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (18))){
var inst_10015 = (state_10090[(2)]);
var state_10090__$1 = state_10090;
var statearr_10165_10228 = state_10090__$1;
(statearr_10165_10228[(2)] = inst_10015);

(statearr_10165_10228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (42))){
var state_10090__$1 = state_10090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10090__$1,(45),dchan);
} else {
if((state_val_10091 === (37))){
var inst_9962 = (state_10090[(11)]);
var inst_10049 = (state_10090[(25)]);
var inst_10058 = (state_10090[(23)]);
var inst_10058__$1 = cljs.core.first.call(null,inst_10049);
var inst_10059 = cljs.core.async.put_BANG_.call(null,inst_10058__$1,inst_9962,done);
var state_10090__$1 = (function (){var statearr_10166 = state_10090;
(statearr_10166[(23)] = inst_10058__$1);

return statearr_10166;
})();
if(cljs.core.truth_(inst_10059)){
var statearr_10167_10229 = state_10090__$1;
(statearr_10167_10229[(1)] = (39));

} else {
var statearr_10168_10230 = state_10090__$1;
(statearr_10168_10230[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10091 === (8))){
var inst_9974 = (state_10090[(16)]);
var inst_9973 = (state_10090[(17)]);
var inst_9976 = (inst_9974 < inst_9973);
var inst_9977 = inst_9976;
var state_10090__$1 = state_10090;
if(cljs.core.truth_(inst_9977)){
var statearr_10169_10231 = state_10090__$1;
(statearr_10169_10231[(1)] = (10));

} else {
var statearr_10170_10232 = state_10090__$1;
(statearr_10170_10232[(1)] = (11));

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
});})(c__8864__auto___10178,cs,m,dchan,dctr,done))
;
return ((function (switch__8705__auto__,c__8864__auto___10178,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8706__auto__ = null;
var cljs$core$async$mult_$_state_machine__8706__auto____0 = (function (){
var statearr_10174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10174[(0)] = cljs$core$async$mult_$_state_machine__8706__auto__);

(statearr_10174[(1)] = (1));

return statearr_10174;
});
var cljs$core$async$mult_$_state_machine__8706__auto____1 = (function (state_10090){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_10090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e10175){if((e10175 instanceof Object)){
var ex__8709__auto__ = e10175;
var statearr_10176_10233 = state_10090;
(statearr_10176_10233[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10234 = state_10090;
state_10090 = G__10234;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8706__auto__ = function(state_10090){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8706__auto____1.call(this,state_10090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8706__auto____0;
cljs$core$async$mult_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8706__auto____1;
return cljs$core$async$mult_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___10178,cs,m,dchan,dctr,done))
})();
var state__8866__auto__ = (function (){var statearr_10177 = f__8865__auto__.call(null);
(statearr_10177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___10178);

return statearr_10177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___10178,cs,m,dchan,dctr,done))
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
var args10235 = [];
var len__7278__auto___10238 = arguments.length;
var i__7279__auto___10239 = (0);
while(true){
if((i__7279__auto___10239 < len__7278__auto___10238)){
args10235.push((arguments[i__7279__auto___10239]));

var G__10240 = (i__7279__auto___10239 + (1));
i__7279__auto___10239 = G__10240;
continue;
} else {
}
break;
}

var G__10237 = args10235.length;
switch (G__10237) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10235.length)].join('')));

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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m,ch);
} else {
var m__6872__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m,ch);
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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m,ch);
} else {
var m__6872__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m,ch);
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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m);
} else {
var m__6872__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m);
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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m,state_map);
} else {
var m__6872__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m,state_map);
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
var x__6871__auto__ = (((m == null))?null:m);
var m__6872__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,m,mode);
} else {
var m__6872__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___10252 = arguments.length;
var i__7279__auto___10253 = (0);
while(true){
if((i__7279__auto___10253 < len__7278__auto___10252)){
args__7285__auto__.push((arguments[i__7279__auto___10253]));

var G__10254 = (i__7279__auto___10253 + (1));
i__7279__auto___10253 = G__10254;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((3) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7286__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10246){
var map__10247 = p__10246;
var map__10247__$1 = ((((!((map__10247 == null)))?((((map__10247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10247):map__10247);
var opts = map__10247__$1;
var statearr_10249_10255 = state;
(statearr_10249_10255[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10247,map__10247__$1,opts){
return (function (val){
var statearr_10250_10256 = state;
(statearr_10250_10256[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10247,map__10247__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10251_10257 = state;
(statearr_10251_10257[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10242){
var G__10243 = cljs.core.first.call(null,seq10242);
var seq10242__$1 = cljs.core.next.call(null,seq10242);
var G__10244 = cljs.core.first.call(null,seq10242__$1);
var seq10242__$2 = cljs.core.next.call(null,seq10242__$1);
var G__10245 = cljs.core.first.call(null,seq10242__$2);
var seq10242__$3 = cljs.core.next.call(null,seq10242__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10243,G__10244,G__10245,seq10242__$3);
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
if(typeof cljs.core.async.t_cljs$core$async10421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10421 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10422){
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
this.meta10422 = meta10422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10423,meta10422__$1){
var self__ = this;
var _10423__$1 = this;
return (new cljs.core.async.t_cljs$core$async10421(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10422__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10423){
var self__ = this;
var _10423__$1 = this;
return self__.meta10422;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10421.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10422","meta10422",-234731875,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10421";

cljs.core.async.t_cljs$core$async10421.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async10421");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10421 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10421(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10422){
return (new cljs.core.async.t_cljs$core$async10421(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10422));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10421(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8864__auto___10584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___10584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___10584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10521){
var state_val_10522 = (state_10521[(1)]);
if((state_val_10522 === (7))){
var inst_10439 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
var statearr_10523_10585 = state_10521__$1;
(statearr_10523_10585[(2)] = inst_10439);

(statearr_10523_10585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (20))){
var inst_10451 = (state_10521[(7)]);
var state_10521__$1 = state_10521;
var statearr_10524_10586 = state_10521__$1;
(statearr_10524_10586[(2)] = inst_10451);

(statearr_10524_10586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (27))){
var state_10521__$1 = state_10521;
var statearr_10525_10587 = state_10521__$1;
(statearr_10525_10587[(2)] = null);

(statearr_10525_10587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (1))){
var inst_10427 = (state_10521[(8)]);
var inst_10427__$1 = calc_state.call(null);
var inst_10429 = (inst_10427__$1 == null);
var inst_10430 = cljs.core.not.call(null,inst_10429);
var state_10521__$1 = (function (){var statearr_10526 = state_10521;
(statearr_10526[(8)] = inst_10427__$1);

return statearr_10526;
})();
if(inst_10430){
var statearr_10527_10588 = state_10521__$1;
(statearr_10527_10588[(1)] = (2));

} else {
var statearr_10528_10589 = state_10521__$1;
(statearr_10528_10589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (24))){
var inst_10495 = (state_10521[(9)]);
var inst_10474 = (state_10521[(10)]);
var inst_10481 = (state_10521[(11)]);
var inst_10495__$1 = inst_10474.call(null,inst_10481);
var state_10521__$1 = (function (){var statearr_10529 = state_10521;
(statearr_10529[(9)] = inst_10495__$1);

return statearr_10529;
})();
if(cljs.core.truth_(inst_10495__$1)){
var statearr_10530_10590 = state_10521__$1;
(statearr_10530_10590[(1)] = (29));

} else {
var statearr_10531_10591 = state_10521__$1;
(statearr_10531_10591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (4))){
var inst_10442 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
if(cljs.core.truth_(inst_10442)){
var statearr_10532_10592 = state_10521__$1;
(statearr_10532_10592[(1)] = (8));

} else {
var statearr_10533_10593 = state_10521__$1;
(statearr_10533_10593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (15))){
var inst_10468 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
if(cljs.core.truth_(inst_10468)){
var statearr_10534_10594 = state_10521__$1;
(statearr_10534_10594[(1)] = (19));

} else {
var statearr_10535_10595 = state_10521__$1;
(statearr_10535_10595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (21))){
var inst_10473 = (state_10521[(12)]);
var inst_10473__$1 = (state_10521[(2)]);
var inst_10474 = cljs.core.get.call(null,inst_10473__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10475 = cljs.core.get.call(null,inst_10473__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10476 = cljs.core.get.call(null,inst_10473__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10521__$1 = (function (){var statearr_10536 = state_10521;
(statearr_10536[(13)] = inst_10475);

(statearr_10536[(10)] = inst_10474);

(statearr_10536[(12)] = inst_10473__$1);

return statearr_10536;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10521__$1,(22),inst_10476);
} else {
if((state_val_10522 === (31))){
var inst_10503 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
if(cljs.core.truth_(inst_10503)){
var statearr_10537_10596 = state_10521__$1;
(statearr_10537_10596[(1)] = (32));

} else {
var statearr_10538_10597 = state_10521__$1;
(statearr_10538_10597[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (32))){
var inst_10480 = (state_10521[(14)]);
var state_10521__$1 = state_10521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10521__$1,(35),out,inst_10480);
} else {
if((state_val_10522 === (33))){
var inst_10473 = (state_10521[(12)]);
var inst_10451 = inst_10473;
var state_10521__$1 = (function (){var statearr_10539 = state_10521;
(statearr_10539[(7)] = inst_10451);

return statearr_10539;
})();
var statearr_10540_10598 = state_10521__$1;
(statearr_10540_10598[(2)] = null);

(statearr_10540_10598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (13))){
var inst_10451 = (state_10521[(7)]);
var inst_10458 = inst_10451.cljs$lang$protocol_mask$partition0$;
var inst_10459 = (inst_10458 & (64));
var inst_10460 = inst_10451.cljs$core$ISeq$;
var inst_10461 = (inst_10459) || (inst_10460);
var state_10521__$1 = state_10521;
if(cljs.core.truth_(inst_10461)){
var statearr_10541_10599 = state_10521__$1;
(statearr_10541_10599[(1)] = (16));

} else {
var statearr_10542_10600 = state_10521__$1;
(statearr_10542_10600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (22))){
var inst_10480 = (state_10521[(14)]);
var inst_10481 = (state_10521[(11)]);
var inst_10479 = (state_10521[(2)]);
var inst_10480__$1 = cljs.core.nth.call(null,inst_10479,(0),null);
var inst_10481__$1 = cljs.core.nth.call(null,inst_10479,(1),null);
var inst_10482 = (inst_10480__$1 == null);
var inst_10483 = cljs.core._EQ_.call(null,inst_10481__$1,change);
var inst_10484 = (inst_10482) || (inst_10483);
var state_10521__$1 = (function (){var statearr_10543 = state_10521;
(statearr_10543[(14)] = inst_10480__$1);

(statearr_10543[(11)] = inst_10481__$1);

return statearr_10543;
})();
if(cljs.core.truth_(inst_10484)){
var statearr_10544_10601 = state_10521__$1;
(statearr_10544_10601[(1)] = (23));

} else {
var statearr_10545_10602 = state_10521__$1;
(statearr_10545_10602[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (36))){
var inst_10473 = (state_10521[(12)]);
var inst_10451 = inst_10473;
var state_10521__$1 = (function (){var statearr_10546 = state_10521;
(statearr_10546[(7)] = inst_10451);

return statearr_10546;
})();
var statearr_10547_10603 = state_10521__$1;
(statearr_10547_10603[(2)] = null);

(statearr_10547_10603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (29))){
var inst_10495 = (state_10521[(9)]);
var state_10521__$1 = state_10521;
var statearr_10548_10604 = state_10521__$1;
(statearr_10548_10604[(2)] = inst_10495);

(statearr_10548_10604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (6))){
var state_10521__$1 = state_10521;
var statearr_10549_10605 = state_10521__$1;
(statearr_10549_10605[(2)] = false);

(statearr_10549_10605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (28))){
var inst_10491 = (state_10521[(2)]);
var inst_10492 = calc_state.call(null);
var inst_10451 = inst_10492;
var state_10521__$1 = (function (){var statearr_10550 = state_10521;
(statearr_10550[(7)] = inst_10451);

(statearr_10550[(15)] = inst_10491);

return statearr_10550;
})();
var statearr_10551_10606 = state_10521__$1;
(statearr_10551_10606[(2)] = null);

(statearr_10551_10606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (25))){
var inst_10517 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
var statearr_10552_10607 = state_10521__$1;
(statearr_10552_10607[(2)] = inst_10517);

(statearr_10552_10607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (34))){
var inst_10515 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
var statearr_10553_10608 = state_10521__$1;
(statearr_10553_10608[(2)] = inst_10515);

(statearr_10553_10608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (17))){
var state_10521__$1 = state_10521;
var statearr_10554_10609 = state_10521__$1;
(statearr_10554_10609[(2)] = false);

(statearr_10554_10609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (3))){
var state_10521__$1 = state_10521;
var statearr_10555_10610 = state_10521__$1;
(statearr_10555_10610[(2)] = false);

(statearr_10555_10610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (12))){
var inst_10519 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10521__$1,inst_10519);
} else {
if((state_val_10522 === (2))){
var inst_10427 = (state_10521[(8)]);
var inst_10432 = inst_10427.cljs$lang$protocol_mask$partition0$;
var inst_10433 = (inst_10432 & (64));
var inst_10434 = inst_10427.cljs$core$ISeq$;
var inst_10435 = (inst_10433) || (inst_10434);
var state_10521__$1 = state_10521;
if(cljs.core.truth_(inst_10435)){
var statearr_10556_10611 = state_10521__$1;
(statearr_10556_10611[(1)] = (5));

} else {
var statearr_10557_10612 = state_10521__$1;
(statearr_10557_10612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (23))){
var inst_10480 = (state_10521[(14)]);
var inst_10486 = (inst_10480 == null);
var state_10521__$1 = state_10521;
if(cljs.core.truth_(inst_10486)){
var statearr_10558_10613 = state_10521__$1;
(statearr_10558_10613[(1)] = (26));

} else {
var statearr_10559_10614 = state_10521__$1;
(statearr_10559_10614[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (35))){
var inst_10506 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
if(cljs.core.truth_(inst_10506)){
var statearr_10560_10615 = state_10521__$1;
(statearr_10560_10615[(1)] = (36));

} else {
var statearr_10561_10616 = state_10521__$1;
(statearr_10561_10616[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (19))){
var inst_10451 = (state_10521[(7)]);
var inst_10470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10451);
var state_10521__$1 = state_10521;
var statearr_10562_10617 = state_10521__$1;
(statearr_10562_10617[(2)] = inst_10470);

(statearr_10562_10617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (11))){
var inst_10451 = (state_10521[(7)]);
var inst_10455 = (inst_10451 == null);
var inst_10456 = cljs.core.not.call(null,inst_10455);
var state_10521__$1 = state_10521;
if(inst_10456){
var statearr_10563_10618 = state_10521__$1;
(statearr_10563_10618[(1)] = (13));

} else {
var statearr_10564_10619 = state_10521__$1;
(statearr_10564_10619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (9))){
var inst_10427 = (state_10521[(8)]);
var state_10521__$1 = state_10521;
var statearr_10565_10620 = state_10521__$1;
(statearr_10565_10620[(2)] = inst_10427);

(statearr_10565_10620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (5))){
var state_10521__$1 = state_10521;
var statearr_10566_10621 = state_10521__$1;
(statearr_10566_10621[(2)] = true);

(statearr_10566_10621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (14))){
var state_10521__$1 = state_10521;
var statearr_10567_10622 = state_10521__$1;
(statearr_10567_10622[(2)] = false);

(statearr_10567_10622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (26))){
var inst_10481 = (state_10521[(11)]);
var inst_10488 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10481);
var state_10521__$1 = state_10521;
var statearr_10568_10623 = state_10521__$1;
(statearr_10568_10623[(2)] = inst_10488);

(statearr_10568_10623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (16))){
var state_10521__$1 = state_10521;
var statearr_10569_10624 = state_10521__$1;
(statearr_10569_10624[(2)] = true);

(statearr_10569_10624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (38))){
var inst_10511 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
var statearr_10570_10625 = state_10521__$1;
(statearr_10570_10625[(2)] = inst_10511);

(statearr_10570_10625[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (30))){
var inst_10475 = (state_10521[(13)]);
var inst_10474 = (state_10521[(10)]);
var inst_10481 = (state_10521[(11)]);
var inst_10498 = cljs.core.empty_QMARK_.call(null,inst_10474);
var inst_10499 = inst_10475.call(null,inst_10481);
var inst_10500 = cljs.core.not.call(null,inst_10499);
var inst_10501 = (inst_10498) && (inst_10500);
var state_10521__$1 = state_10521;
var statearr_10571_10626 = state_10521__$1;
(statearr_10571_10626[(2)] = inst_10501);

(statearr_10571_10626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (10))){
var inst_10427 = (state_10521[(8)]);
var inst_10447 = (state_10521[(2)]);
var inst_10448 = cljs.core.get.call(null,inst_10447,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10449 = cljs.core.get.call(null,inst_10447,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10450 = cljs.core.get.call(null,inst_10447,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10451 = inst_10427;
var state_10521__$1 = (function (){var statearr_10572 = state_10521;
(statearr_10572[(16)] = inst_10450);

(statearr_10572[(7)] = inst_10451);

(statearr_10572[(17)] = inst_10448);

(statearr_10572[(18)] = inst_10449);

return statearr_10572;
})();
var statearr_10573_10627 = state_10521__$1;
(statearr_10573_10627[(2)] = null);

(statearr_10573_10627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (18))){
var inst_10465 = (state_10521[(2)]);
var state_10521__$1 = state_10521;
var statearr_10574_10628 = state_10521__$1;
(statearr_10574_10628[(2)] = inst_10465);

(statearr_10574_10628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (37))){
var state_10521__$1 = state_10521;
var statearr_10575_10629 = state_10521__$1;
(statearr_10575_10629[(2)] = null);

(statearr_10575_10629[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10522 === (8))){
var inst_10427 = (state_10521[(8)]);
var inst_10444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10427);
var state_10521__$1 = state_10521;
var statearr_10576_10630 = state_10521__$1;
(statearr_10576_10630[(2)] = inst_10444);

(statearr_10576_10630[(1)] = (10));


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
});})(c__8864__auto___10584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8705__auto__,c__8864__auto___10584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8706__auto__ = null;
var cljs$core$async$mix_$_state_machine__8706__auto____0 = (function (){
var statearr_10580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10580[(0)] = cljs$core$async$mix_$_state_machine__8706__auto__);

(statearr_10580[(1)] = (1));

return statearr_10580;
});
var cljs$core$async$mix_$_state_machine__8706__auto____1 = (function (state_10521){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_10521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e10581){if((e10581 instanceof Object)){
var ex__8709__auto__ = e10581;
var statearr_10582_10631 = state_10521;
(statearr_10582_10631[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10632 = state_10521;
state_10521 = G__10632;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8706__auto__ = function(state_10521){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8706__auto____1.call(this,state_10521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8706__auto____0;
cljs$core$async$mix_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8706__auto____1;
return cljs$core$async$mix_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___10584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8866__auto__ = (function (){var statearr_10583 = f__8865__auto__.call(null);
(statearr_10583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___10584);

return statearr_10583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___10584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6871__auto__ = (((p == null))?null:p);
var m__6872__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6872__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6871__auto__ = (((p == null))?null:p);
var m__6872__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,p,v,ch);
} else {
var m__6872__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10633 = [];
var len__7278__auto___10636 = arguments.length;
var i__7279__auto___10637 = (0);
while(true){
if((i__7279__auto___10637 < len__7278__auto___10636)){
args10633.push((arguments[i__7279__auto___10637]));

var G__10638 = (i__7279__auto___10637 + (1));
i__7279__auto___10637 = G__10638;
continue;
} else {
}
break;
}

var G__10635 = args10633.length;
switch (G__10635) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10633.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6871__auto__ = (((p == null))?null:p);
var m__6872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,p);
} else {
var m__6872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,p);
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
var x__6871__auto__ = (((p == null))?null:p);
var m__6872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,p,v);
} else {
var m__6872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,p,v);
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
var args10641 = [];
var len__7278__auto___10766 = arguments.length;
var i__7279__auto___10767 = (0);
while(true){
if((i__7279__auto___10767 < len__7278__auto___10766)){
args10641.push((arguments[i__7279__auto___10767]));

var G__10768 = (i__7279__auto___10767 + (1));
i__7279__auto___10767 = G__10768;
continue;
} else {
}
break;
}

var G__10643 = args10641.length;
switch (G__10643) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10641.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6208__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6208__auto__,mults){
return (function (p1__10640_SHARP_){
if(cljs.core.truth_(p1__10640_SHARP_.call(null,topic))){
return p1__10640_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10640_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6208__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10644 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10645){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10645 = meta10645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10646,meta10645__$1){
var self__ = this;
var _10646__$1 = this;
return (new cljs.core.async.t_cljs$core$async10644(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10645__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10646){
var self__ = this;
var _10646__$1 = this;
return self__.meta10645;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10644.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10645","meta10645",893388401,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10644";

cljs.core.async.t_cljs$core$async10644.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async10644");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10644 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10644(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10645){
return (new cljs.core.async.t_cljs$core$async10644(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10645));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10644(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8864__auto___10770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___10770,mults,ensure_mult,p){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___10770,mults,ensure_mult,p){
return (function (state_10718){
var state_val_10719 = (state_10718[(1)]);
if((state_val_10719 === (7))){
var inst_10714 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
var statearr_10720_10771 = state_10718__$1;
(statearr_10720_10771[(2)] = inst_10714);

(statearr_10720_10771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (20))){
var state_10718__$1 = state_10718;
var statearr_10721_10772 = state_10718__$1;
(statearr_10721_10772[(2)] = null);

(statearr_10721_10772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (1))){
var state_10718__$1 = state_10718;
var statearr_10722_10773 = state_10718__$1;
(statearr_10722_10773[(2)] = null);

(statearr_10722_10773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (24))){
var inst_10697 = (state_10718[(7)]);
var inst_10706 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10697);
var state_10718__$1 = state_10718;
var statearr_10723_10774 = state_10718__$1;
(statearr_10723_10774[(2)] = inst_10706);

(statearr_10723_10774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (4))){
var inst_10649 = (state_10718[(8)]);
var inst_10649__$1 = (state_10718[(2)]);
var inst_10650 = (inst_10649__$1 == null);
var state_10718__$1 = (function (){var statearr_10724 = state_10718;
(statearr_10724[(8)] = inst_10649__$1);

return statearr_10724;
})();
if(cljs.core.truth_(inst_10650)){
var statearr_10725_10775 = state_10718__$1;
(statearr_10725_10775[(1)] = (5));

} else {
var statearr_10726_10776 = state_10718__$1;
(statearr_10726_10776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (15))){
var inst_10691 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
var statearr_10727_10777 = state_10718__$1;
(statearr_10727_10777[(2)] = inst_10691);

(statearr_10727_10777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (21))){
var inst_10711 = (state_10718[(2)]);
var state_10718__$1 = (function (){var statearr_10728 = state_10718;
(statearr_10728[(9)] = inst_10711);

return statearr_10728;
})();
var statearr_10729_10778 = state_10718__$1;
(statearr_10729_10778[(2)] = null);

(statearr_10729_10778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (13))){
var inst_10673 = (state_10718[(10)]);
var inst_10675 = cljs.core.chunked_seq_QMARK_.call(null,inst_10673);
var state_10718__$1 = state_10718;
if(inst_10675){
var statearr_10730_10779 = state_10718__$1;
(statearr_10730_10779[(1)] = (16));

} else {
var statearr_10731_10780 = state_10718__$1;
(statearr_10731_10780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (22))){
var inst_10703 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
if(cljs.core.truth_(inst_10703)){
var statearr_10732_10781 = state_10718__$1;
(statearr_10732_10781[(1)] = (23));

} else {
var statearr_10733_10782 = state_10718__$1;
(statearr_10733_10782[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (6))){
var inst_10699 = (state_10718[(11)]);
var inst_10697 = (state_10718[(7)]);
var inst_10649 = (state_10718[(8)]);
var inst_10697__$1 = topic_fn.call(null,inst_10649);
var inst_10698 = cljs.core.deref.call(null,mults);
var inst_10699__$1 = cljs.core.get.call(null,inst_10698,inst_10697__$1);
var state_10718__$1 = (function (){var statearr_10734 = state_10718;
(statearr_10734[(11)] = inst_10699__$1);

(statearr_10734[(7)] = inst_10697__$1);

return statearr_10734;
})();
if(cljs.core.truth_(inst_10699__$1)){
var statearr_10735_10783 = state_10718__$1;
(statearr_10735_10783[(1)] = (19));

} else {
var statearr_10736_10784 = state_10718__$1;
(statearr_10736_10784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (25))){
var inst_10708 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
var statearr_10737_10785 = state_10718__$1;
(statearr_10737_10785[(2)] = inst_10708);

(statearr_10737_10785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (17))){
var inst_10673 = (state_10718[(10)]);
var inst_10682 = cljs.core.first.call(null,inst_10673);
var inst_10683 = cljs.core.async.muxch_STAR_.call(null,inst_10682);
var inst_10684 = cljs.core.async.close_BANG_.call(null,inst_10683);
var inst_10685 = cljs.core.next.call(null,inst_10673);
var inst_10659 = inst_10685;
var inst_10660 = null;
var inst_10661 = (0);
var inst_10662 = (0);
var state_10718__$1 = (function (){var statearr_10738 = state_10718;
(statearr_10738[(12)] = inst_10684);

(statearr_10738[(13)] = inst_10661);

(statearr_10738[(14)] = inst_10662);

(statearr_10738[(15)] = inst_10660);

(statearr_10738[(16)] = inst_10659);

return statearr_10738;
})();
var statearr_10739_10786 = state_10718__$1;
(statearr_10739_10786[(2)] = null);

(statearr_10739_10786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (3))){
var inst_10716 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10718__$1,inst_10716);
} else {
if((state_val_10719 === (12))){
var inst_10693 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
var statearr_10740_10787 = state_10718__$1;
(statearr_10740_10787[(2)] = inst_10693);

(statearr_10740_10787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (2))){
var state_10718__$1 = state_10718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10718__$1,(4),ch);
} else {
if((state_val_10719 === (23))){
var state_10718__$1 = state_10718;
var statearr_10741_10788 = state_10718__$1;
(statearr_10741_10788[(2)] = null);

(statearr_10741_10788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (19))){
var inst_10699 = (state_10718[(11)]);
var inst_10649 = (state_10718[(8)]);
var inst_10701 = cljs.core.async.muxch_STAR_.call(null,inst_10699);
var state_10718__$1 = state_10718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10718__$1,(22),inst_10701,inst_10649);
} else {
if((state_val_10719 === (11))){
var inst_10673 = (state_10718[(10)]);
var inst_10659 = (state_10718[(16)]);
var inst_10673__$1 = cljs.core.seq.call(null,inst_10659);
var state_10718__$1 = (function (){var statearr_10742 = state_10718;
(statearr_10742[(10)] = inst_10673__$1);

return statearr_10742;
})();
if(inst_10673__$1){
var statearr_10743_10789 = state_10718__$1;
(statearr_10743_10789[(1)] = (13));

} else {
var statearr_10744_10790 = state_10718__$1;
(statearr_10744_10790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (9))){
var inst_10695 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
var statearr_10745_10791 = state_10718__$1;
(statearr_10745_10791[(2)] = inst_10695);

(statearr_10745_10791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (5))){
var inst_10656 = cljs.core.deref.call(null,mults);
var inst_10657 = cljs.core.vals.call(null,inst_10656);
var inst_10658 = cljs.core.seq.call(null,inst_10657);
var inst_10659 = inst_10658;
var inst_10660 = null;
var inst_10661 = (0);
var inst_10662 = (0);
var state_10718__$1 = (function (){var statearr_10746 = state_10718;
(statearr_10746[(13)] = inst_10661);

(statearr_10746[(14)] = inst_10662);

(statearr_10746[(15)] = inst_10660);

(statearr_10746[(16)] = inst_10659);

return statearr_10746;
})();
var statearr_10747_10792 = state_10718__$1;
(statearr_10747_10792[(2)] = null);

(statearr_10747_10792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (14))){
var state_10718__$1 = state_10718;
var statearr_10751_10793 = state_10718__$1;
(statearr_10751_10793[(2)] = null);

(statearr_10751_10793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (16))){
var inst_10673 = (state_10718[(10)]);
var inst_10677 = cljs.core.chunk_first.call(null,inst_10673);
var inst_10678 = cljs.core.chunk_rest.call(null,inst_10673);
var inst_10679 = cljs.core.count.call(null,inst_10677);
var inst_10659 = inst_10678;
var inst_10660 = inst_10677;
var inst_10661 = inst_10679;
var inst_10662 = (0);
var state_10718__$1 = (function (){var statearr_10752 = state_10718;
(statearr_10752[(13)] = inst_10661);

(statearr_10752[(14)] = inst_10662);

(statearr_10752[(15)] = inst_10660);

(statearr_10752[(16)] = inst_10659);

return statearr_10752;
})();
var statearr_10753_10794 = state_10718__$1;
(statearr_10753_10794[(2)] = null);

(statearr_10753_10794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (10))){
var inst_10661 = (state_10718[(13)]);
var inst_10662 = (state_10718[(14)]);
var inst_10660 = (state_10718[(15)]);
var inst_10659 = (state_10718[(16)]);
var inst_10667 = cljs.core._nth.call(null,inst_10660,inst_10662);
var inst_10668 = cljs.core.async.muxch_STAR_.call(null,inst_10667);
var inst_10669 = cljs.core.async.close_BANG_.call(null,inst_10668);
var inst_10670 = (inst_10662 + (1));
var tmp10748 = inst_10661;
var tmp10749 = inst_10660;
var tmp10750 = inst_10659;
var inst_10659__$1 = tmp10750;
var inst_10660__$1 = tmp10749;
var inst_10661__$1 = tmp10748;
var inst_10662__$1 = inst_10670;
var state_10718__$1 = (function (){var statearr_10754 = state_10718;
(statearr_10754[(13)] = inst_10661__$1);

(statearr_10754[(14)] = inst_10662__$1);

(statearr_10754[(15)] = inst_10660__$1);

(statearr_10754[(17)] = inst_10669);

(statearr_10754[(16)] = inst_10659__$1);

return statearr_10754;
})();
var statearr_10755_10795 = state_10718__$1;
(statearr_10755_10795[(2)] = null);

(statearr_10755_10795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (18))){
var inst_10688 = (state_10718[(2)]);
var state_10718__$1 = state_10718;
var statearr_10756_10796 = state_10718__$1;
(statearr_10756_10796[(2)] = inst_10688);

(statearr_10756_10796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10719 === (8))){
var inst_10661 = (state_10718[(13)]);
var inst_10662 = (state_10718[(14)]);
var inst_10664 = (inst_10662 < inst_10661);
var inst_10665 = inst_10664;
var state_10718__$1 = state_10718;
if(cljs.core.truth_(inst_10665)){
var statearr_10757_10797 = state_10718__$1;
(statearr_10757_10797[(1)] = (10));

} else {
var statearr_10758_10798 = state_10718__$1;
(statearr_10758_10798[(1)] = (11));

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
});})(c__8864__auto___10770,mults,ensure_mult,p))
;
return ((function (switch__8705__auto__,c__8864__auto___10770,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_10762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10762[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_10762[(1)] = (1));

return statearr_10762;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_10718){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_10718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e10763){if((e10763 instanceof Object)){
var ex__8709__auto__ = e10763;
var statearr_10764_10799 = state_10718;
(statearr_10764_10799[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10800 = state_10718;
state_10718 = G__10800;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_10718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_10718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___10770,mults,ensure_mult,p))
})();
var state__8866__auto__ = (function (){var statearr_10765 = f__8865__auto__.call(null);
(statearr_10765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___10770);

return statearr_10765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___10770,mults,ensure_mult,p))
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
var args10801 = [];
var len__7278__auto___10804 = arguments.length;
var i__7279__auto___10805 = (0);
while(true){
if((i__7279__auto___10805 < len__7278__auto___10804)){
args10801.push((arguments[i__7279__auto___10805]));

var G__10806 = (i__7279__auto___10805 + (1));
i__7279__auto___10805 = G__10806;
continue;
} else {
}
break;
}

var G__10803 = args10801.length;
switch (G__10803) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10801.length)].join('')));

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
var args10808 = [];
var len__7278__auto___10811 = arguments.length;
var i__7279__auto___10812 = (0);
while(true){
if((i__7279__auto___10812 < len__7278__auto___10811)){
args10808.push((arguments[i__7279__auto___10812]));

var G__10813 = (i__7279__auto___10812 + (1));
i__7279__auto___10812 = G__10813;
continue;
} else {
}
break;
}

var G__10810 = args10808.length;
switch (G__10810) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10808.length)].join('')));

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
var args10815 = [];
var len__7278__auto___10886 = arguments.length;
var i__7279__auto___10887 = (0);
while(true){
if((i__7279__auto___10887 < len__7278__auto___10886)){
args10815.push((arguments[i__7279__auto___10887]));

var G__10888 = (i__7279__auto___10887 + (1));
i__7279__auto___10887 = G__10888;
continue;
} else {
}
break;
}

var G__10817 = args10815.length;
switch (G__10817) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10815.length)].join('')));

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
var c__8864__auto___10890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___10890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___10890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10856){
var state_val_10857 = (state_10856[(1)]);
if((state_val_10857 === (7))){
var state_10856__$1 = state_10856;
var statearr_10858_10891 = state_10856__$1;
(statearr_10858_10891[(2)] = null);

(statearr_10858_10891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (1))){
var state_10856__$1 = state_10856;
var statearr_10859_10892 = state_10856__$1;
(statearr_10859_10892[(2)] = null);

(statearr_10859_10892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (4))){
var inst_10820 = (state_10856[(7)]);
var inst_10822 = (inst_10820 < cnt);
var state_10856__$1 = state_10856;
if(cljs.core.truth_(inst_10822)){
var statearr_10860_10893 = state_10856__$1;
(statearr_10860_10893[(1)] = (6));

} else {
var statearr_10861_10894 = state_10856__$1;
(statearr_10861_10894[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (15))){
var inst_10852 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10862_10895 = state_10856__$1;
(statearr_10862_10895[(2)] = inst_10852);

(statearr_10862_10895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (13))){
var inst_10845 = cljs.core.async.close_BANG_.call(null,out);
var state_10856__$1 = state_10856;
var statearr_10863_10896 = state_10856__$1;
(statearr_10863_10896[(2)] = inst_10845);

(statearr_10863_10896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (6))){
var state_10856__$1 = state_10856;
var statearr_10864_10897 = state_10856__$1;
(statearr_10864_10897[(2)] = null);

(statearr_10864_10897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (3))){
var inst_10854 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10856__$1,inst_10854);
} else {
if((state_val_10857 === (12))){
var inst_10842 = (state_10856[(8)]);
var inst_10842__$1 = (state_10856[(2)]);
var inst_10843 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10842__$1);
var state_10856__$1 = (function (){var statearr_10865 = state_10856;
(statearr_10865[(8)] = inst_10842__$1);

return statearr_10865;
})();
if(cljs.core.truth_(inst_10843)){
var statearr_10866_10898 = state_10856__$1;
(statearr_10866_10898[(1)] = (13));

} else {
var statearr_10867_10899 = state_10856__$1;
(statearr_10867_10899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (2))){
var inst_10819 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10820 = (0);
var state_10856__$1 = (function (){var statearr_10868 = state_10856;
(statearr_10868[(9)] = inst_10819);

(statearr_10868[(7)] = inst_10820);

return statearr_10868;
})();
var statearr_10869_10900 = state_10856__$1;
(statearr_10869_10900[(2)] = null);

(statearr_10869_10900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (11))){
var inst_10820 = (state_10856[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10856,(10),Object,null,(9));
var inst_10829 = chs__$1.call(null,inst_10820);
var inst_10830 = done.call(null,inst_10820);
var inst_10831 = cljs.core.async.take_BANG_.call(null,inst_10829,inst_10830);
var state_10856__$1 = state_10856;
var statearr_10870_10901 = state_10856__$1;
(statearr_10870_10901[(2)] = inst_10831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10856__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (9))){
var inst_10820 = (state_10856[(7)]);
var inst_10833 = (state_10856[(2)]);
var inst_10834 = (inst_10820 + (1));
var inst_10820__$1 = inst_10834;
var state_10856__$1 = (function (){var statearr_10871 = state_10856;
(statearr_10871[(7)] = inst_10820__$1);

(statearr_10871[(10)] = inst_10833);

return statearr_10871;
})();
var statearr_10872_10902 = state_10856__$1;
(statearr_10872_10902[(2)] = null);

(statearr_10872_10902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (5))){
var inst_10840 = (state_10856[(2)]);
var state_10856__$1 = (function (){var statearr_10873 = state_10856;
(statearr_10873[(11)] = inst_10840);

return statearr_10873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10856__$1,(12),dchan);
} else {
if((state_val_10857 === (14))){
var inst_10842 = (state_10856[(8)]);
var inst_10847 = cljs.core.apply.call(null,f,inst_10842);
var state_10856__$1 = state_10856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10856__$1,(16),out,inst_10847);
} else {
if((state_val_10857 === (16))){
var inst_10849 = (state_10856[(2)]);
var state_10856__$1 = (function (){var statearr_10874 = state_10856;
(statearr_10874[(12)] = inst_10849);

return statearr_10874;
})();
var statearr_10875_10903 = state_10856__$1;
(statearr_10875_10903[(2)] = null);

(statearr_10875_10903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (10))){
var inst_10824 = (state_10856[(2)]);
var inst_10825 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10856__$1 = (function (){var statearr_10876 = state_10856;
(statearr_10876[(13)] = inst_10824);

return statearr_10876;
})();
var statearr_10877_10904 = state_10856__$1;
(statearr_10877_10904[(2)] = inst_10825);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10856__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (8))){
var inst_10838 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10878_10905 = state_10856__$1;
(statearr_10878_10905[(2)] = inst_10838);

(statearr_10878_10905[(1)] = (5));


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
});})(c__8864__auto___10890,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8705__auto__,c__8864__auto___10890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_10882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10882[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_10882[(1)] = (1));

return statearr_10882;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_10856){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_10856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e10883){if((e10883 instanceof Object)){
var ex__8709__auto__ = e10883;
var statearr_10884_10906 = state_10856;
(statearr_10884_10906[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10907 = state_10856;
state_10856 = G__10907;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_10856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_10856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___10890,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8866__auto__ = (function (){var statearr_10885 = f__8865__auto__.call(null);
(statearr_10885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___10890);

return statearr_10885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___10890,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args10909 = [];
var len__7278__auto___10965 = arguments.length;
var i__7279__auto___10966 = (0);
while(true){
if((i__7279__auto___10966 < len__7278__auto___10965)){
args10909.push((arguments[i__7279__auto___10966]));

var G__10967 = (i__7279__auto___10966 + (1));
i__7279__auto___10966 = G__10967;
continue;
} else {
}
break;
}

var G__10911 = args10909.length;
switch (G__10911) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10909.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8864__auto___10969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___10969,out){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___10969,out){
return (function (state_10941){
var state_val_10942 = (state_10941[(1)]);
if((state_val_10942 === (7))){
var inst_10921 = (state_10941[(7)]);
var inst_10920 = (state_10941[(8)]);
var inst_10920__$1 = (state_10941[(2)]);
var inst_10921__$1 = cljs.core.nth.call(null,inst_10920__$1,(0),null);
var inst_10922 = cljs.core.nth.call(null,inst_10920__$1,(1),null);
var inst_10923 = (inst_10921__$1 == null);
var state_10941__$1 = (function (){var statearr_10943 = state_10941;
(statearr_10943[(7)] = inst_10921__$1);

(statearr_10943[(8)] = inst_10920__$1);

(statearr_10943[(9)] = inst_10922);

return statearr_10943;
})();
if(cljs.core.truth_(inst_10923)){
var statearr_10944_10970 = state_10941__$1;
(statearr_10944_10970[(1)] = (8));

} else {
var statearr_10945_10971 = state_10941__$1;
(statearr_10945_10971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10942 === (1))){
var inst_10912 = cljs.core.vec.call(null,chs);
var inst_10913 = inst_10912;
var state_10941__$1 = (function (){var statearr_10946 = state_10941;
(statearr_10946[(10)] = inst_10913);

return statearr_10946;
})();
var statearr_10947_10972 = state_10941__$1;
(statearr_10947_10972[(2)] = null);

(statearr_10947_10972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10942 === (4))){
var inst_10913 = (state_10941[(10)]);
var state_10941__$1 = state_10941;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10941__$1,(7),inst_10913);
} else {
if((state_val_10942 === (6))){
var inst_10937 = (state_10941[(2)]);
var state_10941__$1 = state_10941;
var statearr_10948_10973 = state_10941__$1;
(statearr_10948_10973[(2)] = inst_10937);

(statearr_10948_10973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10942 === (3))){
var inst_10939 = (state_10941[(2)]);
var state_10941__$1 = state_10941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10941__$1,inst_10939);
} else {
if((state_val_10942 === (2))){
var inst_10913 = (state_10941[(10)]);
var inst_10915 = cljs.core.count.call(null,inst_10913);
var inst_10916 = (inst_10915 > (0));
var state_10941__$1 = state_10941;
if(cljs.core.truth_(inst_10916)){
var statearr_10950_10974 = state_10941__$1;
(statearr_10950_10974[(1)] = (4));

} else {
var statearr_10951_10975 = state_10941__$1;
(statearr_10951_10975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10942 === (11))){
var inst_10913 = (state_10941[(10)]);
var inst_10930 = (state_10941[(2)]);
var tmp10949 = inst_10913;
var inst_10913__$1 = tmp10949;
var state_10941__$1 = (function (){var statearr_10952 = state_10941;
(statearr_10952[(11)] = inst_10930);

(statearr_10952[(10)] = inst_10913__$1);

return statearr_10952;
})();
var statearr_10953_10976 = state_10941__$1;
(statearr_10953_10976[(2)] = null);

(statearr_10953_10976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10942 === (9))){
var inst_10921 = (state_10941[(7)]);
var state_10941__$1 = state_10941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10941__$1,(11),out,inst_10921);
} else {
if((state_val_10942 === (5))){
var inst_10935 = cljs.core.async.close_BANG_.call(null,out);
var state_10941__$1 = state_10941;
var statearr_10954_10977 = state_10941__$1;
(statearr_10954_10977[(2)] = inst_10935);

(statearr_10954_10977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10942 === (10))){
var inst_10933 = (state_10941[(2)]);
var state_10941__$1 = state_10941;
var statearr_10955_10978 = state_10941__$1;
(statearr_10955_10978[(2)] = inst_10933);

(statearr_10955_10978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10942 === (8))){
var inst_10921 = (state_10941[(7)]);
var inst_10920 = (state_10941[(8)]);
var inst_10913 = (state_10941[(10)]);
var inst_10922 = (state_10941[(9)]);
var inst_10925 = (function (){var cs = inst_10913;
var vec__10918 = inst_10920;
var v = inst_10921;
var c = inst_10922;
return ((function (cs,vec__10918,v,c,inst_10921,inst_10920,inst_10913,inst_10922,state_val_10942,c__8864__auto___10969,out){
return (function (p1__10908_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10908_SHARP_);
});
;})(cs,vec__10918,v,c,inst_10921,inst_10920,inst_10913,inst_10922,state_val_10942,c__8864__auto___10969,out))
})();
var inst_10926 = cljs.core.filterv.call(null,inst_10925,inst_10913);
var inst_10913__$1 = inst_10926;
var state_10941__$1 = (function (){var statearr_10956 = state_10941;
(statearr_10956[(10)] = inst_10913__$1);

return statearr_10956;
})();
var statearr_10957_10979 = state_10941__$1;
(statearr_10957_10979[(2)] = null);

(statearr_10957_10979[(1)] = (2));


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
});})(c__8864__auto___10969,out))
;
return ((function (switch__8705__auto__,c__8864__auto___10969,out){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_10961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10961[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_10961[(1)] = (1));

return statearr_10961;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_10941){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_10941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e10962){if((e10962 instanceof Object)){
var ex__8709__auto__ = e10962;
var statearr_10963_10980 = state_10941;
(statearr_10963_10980[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10981 = state_10941;
state_10941 = G__10981;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_10941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_10941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___10969,out))
})();
var state__8866__auto__ = (function (){var statearr_10964 = f__8865__auto__.call(null);
(statearr_10964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___10969);

return statearr_10964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___10969,out))
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
var args10982 = [];
var len__7278__auto___11031 = arguments.length;
var i__7279__auto___11032 = (0);
while(true){
if((i__7279__auto___11032 < len__7278__auto___11031)){
args10982.push((arguments[i__7279__auto___11032]));

var G__11033 = (i__7279__auto___11032 + (1));
i__7279__auto___11032 = G__11033;
continue;
} else {
}
break;
}

var G__10984 = args10982.length;
switch (G__10984) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10982.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8864__auto___11035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___11035,out){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___11035,out){
return (function (state_11008){
var state_val_11009 = (state_11008[(1)]);
if((state_val_11009 === (7))){
var inst_10990 = (state_11008[(7)]);
var inst_10990__$1 = (state_11008[(2)]);
var inst_10991 = (inst_10990__$1 == null);
var inst_10992 = cljs.core.not.call(null,inst_10991);
var state_11008__$1 = (function (){var statearr_11010 = state_11008;
(statearr_11010[(7)] = inst_10990__$1);

return statearr_11010;
})();
if(inst_10992){
var statearr_11011_11036 = state_11008__$1;
(statearr_11011_11036[(1)] = (8));

} else {
var statearr_11012_11037 = state_11008__$1;
(statearr_11012_11037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (1))){
var inst_10985 = (0);
var state_11008__$1 = (function (){var statearr_11013 = state_11008;
(statearr_11013[(8)] = inst_10985);

return statearr_11013;
})();
var statearr_11014_11038 = state_11008__$1;
(statearr_11014_11038[(2)] = null);

(statearr_11014_11038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (4))){
var state_11008__$1 = state_11008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11008__$1,(7),ch);
} else {
if((state_val_11009 === (6))){
var inst_11003 = (state_11008[(2)]);
var state_11008__$1 = state_11008;
var statearr_11015_11039 = state_11008__$1;
(statearr_11015_11039[(2)] = inst_11003);

(statearr_11015_11039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (3))){
var inst_11005 = (state_11008[(2)]);
var inst_11006 = cljs.core.async.close_BANG_.call(null,out);
var state_11008__$1 = (function (){var statearr_11016 = state_11008;
(statearr_11016[(9)] = inst_11005);

return statearr_11016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11008__$1,inst_11006);
} else {
if((state_val_11009 === (2))){
var inst_10985 = (state_11008[(8)]);
var inst_10987 = (inst_10985 < n);
var state_11008__$1 = state_11008;
if(cljs.core.truth_(inst_10987)){
var statearr_11017_11040 = state_11008__$1;
(statearr_11017_11040[(1)] = (4));

} else {
var statearr_11018_11041 = state_11008__$1;
(statearr_11018_11041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (11))){
var inst_10985 = (state_11008[(8)]);
var inst_10995 = (state_11008[(2)]);
var inst_10996 = (inst_10985 + (1));
var inst_10985__$1 = inst_10996;
var state_11008__$1 = (function (){var statearr_11019 = state_11008;
(statearr_11019[(10)] = inst_10995);

(statearr_11019[(8)] = inst_10985__$1);

return statearr_11019;
})();
var statearr_11020_11042 = state_11008__$1;
(statearr_11020_11042[(2)] = null);

(statearr_11020_11042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (9))){
var state_11008__$1 = state_11008;
var statearr_11021_11043 = state_11008__$1;
(statearr_11021_11043[(2)] = null);

(statearr_11021_11043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (5))){
var state_11008__$1 = state_11008;
var statearr_11022_11044 = state_11008__$1;
(statearr_11022_11044[(2)] = null);

(statearr_11022_11044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (10))){
var inst_11000 = (state_11008[(2)]);
var state_11008__$1 = state_11008;
var statearr_11023_11045 = state_11008__$1;
(statearr_11023_11045[(2)] = inst_11000);

(statearr_11023_11045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11009 === (8))){
var inst_10990 = (state_11008[(7)]);
var state_11008__$1 = state_11008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11008__$1,(11),out,inst_10990);
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
});})(c__8864__auto___11035,out))
;
return ((function (switch__8705__auto__,c__8864__auto___11035,out){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_11027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11027[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_11027[(1)] = (1));

return statearr_11027;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_11008){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_11008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e11028){if((e11028 instanceof Object)){
var ex__8709__auto__ = e11028;
var statearr_11029_11046 = state_11008;
(statearr_11029_11046[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11047 = state_11008;
state_11008 = G__11047;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_11008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_11008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___11035,out))
})();
var state__8866__auto__ = (function (){var statearr_11030 = f__8865__auto__.call(null);
(statearr_11030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___11035);

return statearr_11030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___11035,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11055 = (function (map_LT_,f,ch,meta11056){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11056 = meta11056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11057,meta11056__$1){
var self__ = this;
var _11057__$1 = this;
return (new cljs.core.async.t_cljs$core$async11055(self__.map_LT_,self__.f,self__.ch,meta11056__$1));
});

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11057){
var self__ = this;
var _11057__$1 = this;
return self__.meta11056;
});

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11058 = (function (map_LT_,f,ch,meta11056,_,fn1,meta11059){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11056 = meta11056;
this._ = _;
this.fn1 = fn1;
this.meta11059 = meta11059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11060,meta11059__$1){
var self__ = this;
var _11060__$1 = this;
return (new cljs.core.async.t_cljs$core$async11058(self__.map_LT_,self__.f,self__.ch,self__.meta11056,self__._,self__.fn1,meta11059__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11060){
var self__ = this;
var _11060__$1 = this;
return self__.meta11059;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11048_SHARP_){
return f1.call(null,(((p1__11048_SHARP_ == null))?null:self__.f.call(null,p1__11048_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11058.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11056","meta11056",-2114842539,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11055","cljs.core.async/t_cljs$core$async11055",1089400538,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11059","meta11059",-1354530946,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11058";

cljs.core.async.t_cljs$core$async11058.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async11058");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11058 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11058(map_LT___$1,f__$1,ch__$1,meta11056__$1,___$2,fn1__$1,meta11059){
return (new cljs.core.async.t_cljs$core$async11058(map_LT___$1,f__$1,ch__$1,meta11056__$1,___$2,fn1__$1,meta11059));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11058(self__.map_LT_,self__.f,self__.ch,self__.meta11056,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6196__auto__ = ret;
if(cljs.core.truth_(and__6196__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6196__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11056","meta11056",-2114842539,null)], null);
});

cljs.core.async.t_cljs$core$async11055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11055";

cljs.core.async.t_cljs$core$async11055.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async11055");
});

cljs.core.async.__GT_t_cljs$core$async11055 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11055(map_LT___$1,f__$1,ch__$1,meta11056){
return (new cljs.core.async.t_cljs$core$async11055(map_LT___$1,f__$1,ch__$1,meta11056));
});

}

return (new cljs.core.async.t_cljs$core$async11055(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11064 = (function (map_GT_,f,ch,meta11065){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11065 = meta11065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11066,meta11065__$1){
var self__ = this;
var _11066__$1 = this;
return (new cljs.core.async.t_cljs$core$async11064(self__.map_GT_,self__.f,self__.ch,meta11065__$1));
});

cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11066){
var self__ = this;
var _11066__$1 = this;
return self__.meta11065;
});

cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11065","meta11065",-1462411958,null)], null);
});

cljs.core.async.t_cljs$core$async11064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11064";

cljs.core.async.t_cljs$core$async11064.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async11064");
});

cljs.core.async.__GT_t_cljs$core$async11064 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11064(map_GT___$1,f__$1,ch__$1,meta11065){
return (new cljs.core.async.t_cljs$core$async11064(map_GT___$1,f__$1,ch__$1,meta11065));
});

}

return (new cljs.core.async.t_cljs$core$async11064(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11070 = (function (filter_GT_,p,ch,meta11071){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11071 = meta11071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11072,meta11071__$1){
var self__ = this;
var _11072__$1 = this;
return (new cljs.core.async.t_cljs$core$async11070(self__.filter_GT_,self__.p,self__.ch,meta11071__$1));
});

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11072){
var self__ = this;
var _11072__$1 = this;
return self__.meta11071;
});

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11071","meta11071",-1547856958,null)], null);
});

cljs.core.async.t_cljs$core$async11070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11070";

cljs.core.async.t_cljs$core$async11070.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"cljs.core.async/t_cljs$core$async11070");
});

cljs.core.async.__GT_t_cljs$core$async11070 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11070(filter_GT___$1,p__$1,ch__$1,meta11071){
return (new cljs.core.async.t_cljs$core$async11070(filter_GT___$1,p__$1,ch__$1,meta11071));
});

}

return (new cljs.core.async.t_cljs$core$async11070(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11073 = [];
var len__7278__auto___11117 = arguments.length;
var i__7279__auto___11118 = (0);
while(true){
if((i__7279__auto___11118 < len__7278__auto___11117)){
args11073.push((arguments[i__7279__auto___11118]));

var G__11119 = (i__7279__auto___11118 + (1));
i__7279__auto___11118 = G__11119;
continue;
} else {
}
break;
}

var G__11075 = args11073.length;
switch (G__11075) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11073.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8864__auto___11121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___11121,out){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___11121,out){
return (function (state_11096){
var state_val_11097 = (state_11096[(1)]);
if((state_val_11097 === (7))){
var inst_11092 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
var statearr_11098_11122 = state_11096__$1;
(statearr_11098_11122[(2)] = inst_11092);

(statearr_11098_11122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (1))){
var state_11096__$1 = state_11096;
var statearr_11099_11123 = state_11096__$1;
(statearr_11099_11123[(2)] = null);

(statearr_11099_11123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (4))){
var inst_11078 = (state_11096[(7)]);
var inst_11078__$1 = (state_11096[(2)]);
var inst_11079 = (inst_11078__$1 == null);
var state_11096__$1 = (function (){var statearr_11100 = state_11096;
(statearr_11100[(7)] = inst_11078__$1);

return statearr_11100;
})();
if(cljs.core.truth_(inst_11079)){
var statearr_11101_11124 = state_11096__$1;
(statearr_11101_11124[(1)] = (5));

} else {
var statearr_11102_11125 = state_11096__$1;
(statearr_11102_11125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (6))){
var inst_11078 = (state_11096[(7)]);
var inst_11083 = p.call(null,inst_11078);
var state_11096__$1 = state_11096;
if(cljs.core.truth_(inst_11083)){
var statearr_11103_11126 = state_11096__$1;
(statearr_11103_11126[(1)] = (8));

} else {
var statearr_11104_11127 = state_11096__$1;
(statearr_11104_11127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (3))){
var inst_11094 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11096__$1,inst_11094);
} else {
if((state_val_11097 === (2))){
var state_11096__$1 = state_11096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11096__$1,(4),ch);
} else {
if((state_val_11097 === (11))){
var inst_11086 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
var statearr_11105_11128 = state_11096__$1;
(statearr_11105_11128[(2)] = inst_11086);

(statearr_11105_11128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (9))){
var state_11096__$1 = state_11096;
var statearr_11106_11129 = state_11096__$1;
(statearr_11106_11129[(2)] = null);

(statearr_11106_11129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (5))){
var inst_11081 = cljs.core.async.close_BANG_.call(null,out);
var state_11096__$1 = state_11096;
var statearr_11107_11130 = state_11096__$1;
(statearr_11107_11130[(2)] = inst_11081);

(statearr_11107_11130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (10))){
var inst_11089 = (state_11096[(2)]);
var state_11096__$1 = (function (){var statearr_11108 = state_11096;
(statearr_11108[(8)] = inst_11089);

return statearr_11108;
})();
var statearr_11109_11131 = state_11096__$1;
(statearr_11109_11131[(2)] = null);

(statearr_11109_11131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (8))){
var inst_11078 = (state_11096[(7)]);
var state_11096__$1 = state_11096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11096__$1,(11),out,inst_11078);
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
});})(c__8864__auto___11121,out))
;
return ((function (switch__8705__auto__,c__8864__auto___11121,out){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_11113 = [null,null,null,null,null,null,null,null,null];
(statearr_11113[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_11113[(1)] = (1));

return statearr_11113;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_11096){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_11096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e11114){if((e11114 instanceof Object)){
var ex__8709__auto__ = e11114;
var statearr_11115_11132 = state_11096;
(statearr_11115_11132[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11133 = state_11096;
state_11096 = G__11133;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_11096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_11096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___11121,out))
})();
var state__8866__auto__ = (function (){var statearr_11116 = f__8865__auto__.call(null);
(statearr_11116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___11121);

return statearr_11116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___11121,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11134 = [];
var len__7278__auto___11137 = arguments.length;
var i__7279__auto___11138 = (0);
while(true){
if((i__7279__auto___11138 < len__7278__auto___11137)){
args11134.push((arguments[i__7279__auto___11138]));

var G__11139 = (i__7279__auto___11138 + (1));
i__7279__auto___11138 = G__11139;
continue;
} else {
}
break;
}

var G__11136 = args11134.length;
switch (G__11136) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11134.length)].join('')));

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
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_11306){
var state_val_11307 = (state_11306[(1)]);
if((state_val_11307 === (7))){
var inst_11302 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
var statearr_11308_11349 = state_11306__$1;
(statearr_11308_11349[(2)] = inst_11302);

(statearr_11308_11349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (20))){
var inst_11272 = (state_11306[(7)]);
var inst_11283 = (state_11306[(2)]);
var inst_11284 = cljs.core.next.call(null,inst_11272);
var inst_11258 = inst_11284;
var inst_11259 = null;
var inst_11260 = (0);
var inst_11261 = (0);
var state_11306__$1 = (function (){var statearr_11309 = state_11306;
(statearr_11309[(8)] = inst_11258);

(statearr_11309[(9)] = inst_11261);

(statearr_11309[(10)] = inst_11283);

(statearr_11309[(11)] = inst_11259);

(statearr_11309[(12)] = inst_11260);

return statearr_11309;
})();
var statearr_11310_11350 = state_11306__$1;
(statearr_11310_11350[(2)] = null);

(statearr_11310_11350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (1))){
var state_11306__$1 = state_11306;
var statearr_11311_11351 = state_11306__$1;
(statearr_11311_11351[(2)] = null);

(statearr_11311_11351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (4))){
var inst_11247 = (state_11306[(13)]);
var inst_11247__$1 = (state_11306[(2)]);
var inst_11248 = (inst_11247__$1 == null);
var state_11306__$1 = (function (){var statearr_11312 = state_11306;
(statearr_11312[(13)] = inst_11247__$1);

return statearr_11312;
})();
if(cljs.core.truth_(inst_11248)){
var statearr_11313_11352 = state_11306__$1;
(statearr_11313_11352[(1)] = (5));

} else {
var statearr_11314_11353 = state_11306__$1;
(statearr_11314_11353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (15))){
var state_11306__$1 = state_11306;
var statearr_11318_11354 = state_11306__$1;
(statearr_11318_11354[(2)] = null);

(statearr_11318_11354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (21))){
var state_11306__$1 = state_11306;
var statearr_11319_11355 = state_11306__$1;
(statearr_11319_11355[(2)] = null);

(statearr_11319_11355[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (13))){
var inst_11258 = (state_11306[(8)]);
var inst_11261 = (state_11306[(9)]);
var inst_11259 = (state_11306[(11)]);
var inst_11260 = (state_11306[(12)]);
var inst_11268 = (state_11306[(2)]);
var inst_11269 = (inst_11261 + (1));
var tmp11315 = inst_11258;
var tmp11316 = inst_11259;
var tmp11317 = inst_11260;
var inst_11258__$1 = tmp11315;
var inst_11259__$1 = tmp11316;
var inst_11260__$1 = tmp11317;
var inst_11261__$1 = inst_11269;
var state_11306__$1 = (function (){var statearr_11320 = state_11306;
(statearr_11320[(8)] = inst_11258__$1);

(statearr_11320[(9)] = inst_11261__$1);

(statearr_11320[(11)] = inst_11259__$1);

(statearr_11320[(14)] = inst_11268);

(statearr_11320[(12)] = inst_11260__$1);

return statearr_11320;
})();
var statearr_11321_11356 = state_11306__$1;
(statearr_11321_11356[(2)] = null);

(statearr_11321_11356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (22))){
var state_11306__$1 = state_11306;
var statearr_11322_11357 = state_11306__$1;
(statearr_11322_11357[(2)] = null);

(statearr_11322_11357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (6))){
var inst_11247 = (state_11306[(13)]);
var inst_11256 = f.call(null,inst_11247);
var inst_11257 = cljs.core.seq.call(null,inst_11256);
var inst_11258 = inst_11257;
var inst_11259 = null;
var inst_11260 = (0);
var inst_11261 = (0);
var state_11306__$1 = (function (){var statearr_11323 = state_11306;
(statearr_11323[(8)] = inst_11258);

(statearr_11323[(9)] = inst_11261);

(statearr_11323[(11)] = inst_11259);

(statearr_11323[(12)] = inst_11260);

return statearr_11323;
})();
var statearr_11324_11358 = state_11306__$1;
(statearr_11324_11358[(2)] = null);

(statearr_11324_11358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (17))){
var inst_11272 = (state_11306[(7)]);
var inst_11276 = cljs.core.chunk_first.call(null,inst_11272);
var inst_11277 = cljs.core.chunk_rest.call(null,inst_11272);
var inst_11278 = cljs.core.count.call(null,inst_11276);
var inst_11258 = inst_11277;
var inst_11259 = inst_11276;
var inst_11260 = inst_11278;
var inst_11261 = (0);
var state_11306__$1 = (function (){var statearr_11325 = state_11306;
(statearr_11325[(8)] = inst_11258);

(statearr_11325[(9)] = inst_11261);

(statearr_11325[(11)] = inst_11259);

(statearr_11325[(12)] = inst_11260);

return statearr_11325;
})();
var statearr_11326_11359 = state_11306__$1;
(statearr_11326_11359[(2)] = null);

(statearr_11326_11359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (3))){
var inst_11304 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11306__$1,inst_11304);
} else {
if((state_val_11307 === (12))){
var inst_11292 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
var statearr_11327_11360 = state_11306__$1;
(statearr_11327_11360[(2)] = inst_11292);

(statearr_11327_11360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (2))){
var state_11306__$1 = state_11306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11306__$1,(4),in$);
} else {
if((state_val_11307 === (23))){
var inst_11300 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
var statearr_11328_11361 = state_11306__$1;
(statearr_11328_11361[(2)] = inst_11300);

(statearr_11328_11361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (19))){
var inst_11287 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
var statearr_11329_11362 = state_11306__$1;
(statearr_11329_11362[(2)] = inst_11287);

(statearr_11329_11362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (11))){
var inst_11258 = (state_11306[(8)]);
var inst_11272 = (state_11306[(7)]);
var inst_11272__$1 = cljs.core.seq.call(null,inst_11258);
var state_11306__$1 = (function (){var statearr_11330 = state_11306;
(statearr_11330[(7)] = inst_11272__$1);

return statearr_11330;
})();
if(inst_11272__$1){
var statearr_11331_11363 = state_11306__$1;
(statearr_11331_11363[(1)] = (14));

} else {
var statearr_11332_11364 = state_11306__$1;
(statearr_11332_11364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (9))){
var inst_11294 = (state_11306[(2)]);
var inst_11295 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11306__$1 = (function (){var statearr_11333 = state_11306;
(statearr_11333[(15)] = inst_11294);

return statearr_11333;
})();
if(cljs.core.truth_(inst_11295)){
var statearr_11334_11365 = state_11306__$1;
(statearr_11334_11365[(1)] = (21));

} else {
var statearr_11335_11366 = state_11306__$1;
(statearr_11335_11366[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (5))){
var inst_11250 = cljs.core.async.close_BANG_.call(null,out);
var state_11306__$1 = state_11306;
var statearr_11336_11367 = state_11306__$1;
(statearr_11336_11367[(2)] = inst_11250);

(statearr_11336_11367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (14))){
var inst_11272 = (state_11306[(7)]);
var inst_11274 = cljs.core.chunked_seq_QMARK_.call(null,inst_11272);
var state_11306__$1 = state_11306;
if(inst_11274){
var statearr_11337_11368 = state_11306__$1;
(statearr_11337_11368[(1)] = (17));

} else {
var statearr_11338_11369 = state_11306__$1;
(statearr_11338_11369[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (16))){
var inst_11290 = (state_11306[(2)]);
var state_11306__$1 = state_11306;
var statearr_11339_11370 = state_11306__$1;
(statearr_11339_11370[(2)] = inst_11290);

(statearr_11339_11370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11307 === (10))){
var inst_11261 = (state_11306[(9)]);
var inst_11259 = (state_11306[(11)]);
var inst_11266 = cljs.core._nth.call(null,inst_11259,inst_11261);
var state_11306__$1 = state_11306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11306__$1,(13),out,inst_11266);
} else {
if((state_val_11307 === (18))){
var inst_11272 = (state_11306[(7)]);
var inst_11281 = cljs.core.first.call(null,inst_11272);
var state_11306__$1 = state_11306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11306__$1,(20),out,inst_11281);
} else {
if((state_val_11307 === (8))){
var inst_11261 = (state_11306[(9)]);
var inst_11260 = (state_11306[(12)]);
var inst_11263 = (inst_11261 < inst_11260);
var inst_11264 = inst_11263;
var state_11306__$1 = state_11306;
if(cljs.core.truth_(inst_11264)){
var statearr_11340_11371 = state_11306__$1;
(statearr_11340_11371[(1)] = (10));

} else {
var statearr_11341_11372 = state_11306__$1;
(statearr_11341_11372[(1)] = (11));

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
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8706__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8706__auto____0 = (function (){
var statearr_11345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11345[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8706__auto__);

(statearr_11345[(1)] = (1));

return statearr_11345;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8706__auto____1 = (function (state_11306){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_11306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e11346){if((e11346 instanceof Object)){
var ex__8709__auto__ = e11346;
var statearr_11347_11373 = state_11306;
(statearr_11347_11373[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11374 = state_11306;
state_11306 = G__11374;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8706__auto__ = function(state_11306){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8706__auto____1.call(this,state_11306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8706__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8706__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_11348 = f__8865__auto__.call(null);
(statearr_11348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_11348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11375 = [];
var len__7278__auto___11378 = arguments.length;
var i__7279__auto___11379 = (0);
while(true){
if((i__7279__auto___11379 < len__7278__auto___11378)){
args11375.push((arguments[i__7279__auto___11379]));

var G__11380 = (i__7279__auto___11379 + (1));
i__7279__auto___11379 = G__11380;
continue;
} else {
}
break;
}

var G__11377 = args11375.length;
switch (G__11377) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11375.length)].join('')));

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
var args11382 = [];
var len__7278__auto___11385 = arguments.length;
var i__7279__auto___11386 = (0);
while(true){
if((i__7279__auto___11386 < len__7278__auto___11385)){
args11382.push((arguments[i__7279__auto___11386]));

var G__11387 = (i__7279__auto___11386 + (1));
i__7279__auto___11386 = G__11387;
continue;
} else {
}
break;
}

var G__11384 = args11382.length;
switch (G__11384) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11382.length)].join('')));

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
var args11389 = [];
var len__7278__auto___11440 = arguments.length;
var i__7279__auto___11441 = (0);
while(true){
if((i__7279__auto___11441 < len__7278__auto___11440)){
args11389.push((arguments[i__7279__auto___11441]));

var G__11442 = (i__7279__auto___11441 + (1));
i__7279__auto___11441 = G__11442;
continue;
} else {
}
break;
}

var G__11391 = args11389.length;
switch (G__11391) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11389.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8864__auto___11444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___11444,out){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___11444,out){
return (function (state_11415){
var state_val_11416 = (state_11415[(1)]);
if((state_val_11416 === (7))){
var inst_11410 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
var statearr_11417_11445 = state_11415__$1;
(statearr_11417_11445[(2)] = inst_11410);

(statearr_11417_11445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (1))){
var inst_11392 = null;
var state_11415__$1 = (function (){var statearr_11418 = state_11415;
(statearr_11418[(7)] = inst_11392);

return statearr_11418;
})();
var statearr_11419_11446 = state_11415__$1;
(statearr_11419_11446[(2)] = null);

(statearr_11419_11446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (4))){
var inst_11395 = (state_11415[(8)]);
var inst_11395__$1 = (state_11415[(2)]);
var inst_11396 = (inst_11395__$1 == null);
var inst_11397 = cljs.core.not.call(null,inst_11396);
var state_11415__$1 = (function (){var statearr_11420 = state_11415;
(statearr_11420[(8)] = inst_11395__$1);

return statearr_11420;
})();
if(inst_11397){
var statearr_11421_11447 = state_11415__$1;
(statearr_11421_11447[(1)] = (5));

} else {
var statearr_11422_11448 = state_11415__$1;
(statearr_11422_11448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (6))){
var state_11415__$1 = state_11415;
var statearr_11423_11449 = state_11415__$1;
(statearr_11423_11449[(2)] = null);

(statearr_11423_11449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (3))){
var inst_11412 = (state_11415[(2)]);
var inst_11413 = cljs.core.async.close_BANG_.call(null,out);
var state_11415__$1 = (function (){var statearr_11424 = state_11415;
(statearr_11424[(9)] = inst_11412);

return statearr_11424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11415__$1,inst_11413);
} else {
if((state_val_11416 === (2))){
var state_11415__$1 = state_11415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11415__$1,(4),ch);
} else {
if((state_val_11416 === (11))){
var inst_11395 = (state_11415[(8)]);
var inst_11404 = (state_11415[(2)]);
var inst_11392 = inst_11395;
var state_11415__$1 = (function (){var statearr_11425 = state_11415;
(statearr_11425[(7)] = inst_11392);

(statearr_11425[(10)] = inst_11404);

return statearr_11425;
})();
var statearr_11426_11450 = state_11415__$1;
(statearr_11426_11450[(2)] = null);

(statearr_11426_11450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (9))){
var inst_11395 = (state_11415[(8)]);
var state_11415__$1 = state_11415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11415__$1,(11),out,inst_11395);
} else {
if((state_val_11416 === (5))){
var inst_11392 = (state_11415[(7)]);
var inst_11395 = (state_11415[(8)]);
var inst_11399 = cljs.core._EQ_.call(null,inst_11395,inst_11392);
var state_11415__$1 = state_11415;
if(inst_11399){
var statearr_11428_11451 = state_11415__$1;
(statearr_11428_11451[(1)] = (8));

} else {
var statearr_11429_11452 = state_11415__$1;
(statearr_11429_11452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (10))){
var inst_11407 = (state_11415[(2)]);
var state_11415__$1 = state_11415;
var statearr_11430_11453 = state_11415__$1;
(statearr_11430_11453[(2)] = inst_11407);

(statearr_11430_11453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11416 === (8))){
var inst_11392 = (state_11415[(7)]);
var tmp11427 = inst_11392;
var inst_11392__$1 = tmp11427;
var state_11415__$1 = (function (){var statearr_11431 = state_11415;
(statearr_11431[(7)] = inst_11392__$1);

return statearr_11431;
})();
var statearr_11432_11454 = state_11415__$1;
(statearr_11432_11454[(2)] = null);

(statearr_11432_11454[(1)] = (2));


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
});})(c__8864__auto___11444,out))
;
return ((function (switch__8705__auto__,c__8864__auto___11444,out){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_11436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11436[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_11436[(1)] = (1));

return statearr_11436;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_11415){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_11415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e11437){if((e11437 instanceof Object)){
var ex__8709__auto__ = e11437;
var statearr_11438_11455 = state_11415;
(statearr_11438_11455[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11456 = state_11415;
state_11415 = G__11456;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_11415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_11415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___11444,out))
})();
var state__8866__auto__ = (function (){var statearr_11439 = f__8865__auto__.call(null);
(statearr_11439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___11444);

return statearr_11439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___11444,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11457 = [];
var len__7278__auto___11527 = arguments.length;
var i__7279__auto___11528 = (0);
while(true){
if((i__7279__auto___11528 < len__7278__auto___11527)){
args11457.push((arguments[i__7279__auto___11528]));

var G__11529 = (i__7279__auto___11528 + (1));
i__7279__auto___11528 = G__11529;
continue;
} else {
}
break;
}

var G__11459 = args11457.length;
switch (G__11459) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11457.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8864__auto___11531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___11531,out){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___11531,out){
return (function (state_11497){
var state_val_11498 = (state_11497[(1)]);
if((state_val_11498 === (7))){
var inst_11493 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11499_11532 = state_11497__$1;
(statearr_11499_11532[(2)] = inst_11493);

(statearr_11499_11532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (1))){
var inst_11460 = (new Array(n));
var inst_11461 = inst_11460;
var inst_11462 = (0);
var state_11497__$1 = (function (){var statearr_11500 = state_11497;
(statearr_11500[(7)] = inst_11462);

(statearr_11500[(8)] = inst_11461);

return statearr_11500;
})();
var statearr_11501_11533 = state_11497__$1;
(statearr_11501_11533[(2)] = null);

(statearr_11501_11533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (4))){
var inst_11465 = (state_11497[(9)]);
var inst_11465__$1 = (state_11497[(2)]);
var inst_11466 = (inst_11465__$1 == null);
var inst_11467 = cljs.core.not.call(null,inst_11466);
var state_11497__$1 = (function (){var statearr_11502 = state_11497;
(statearr_11502[(9)] = inst_11465__$1);

return statearr_11502;
})();
if(inst_11467){
var statearr_11503_11534 = state_11497__$1;
(statearr_11503_11534[(1)] = (5));

} else {
var statearr_11504_11535 = state_11497__$1;
(statearr_11504_11535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (15))){
var inst_11487 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11505_11536 = state_11497__$1;
(statearr_11505_11536[(2)] = inst_11487);

(statearr_11505_11536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (13))){
var state_11497__$1 = state_11497;
var statearr_11506_11537 = state_11497__$1;
(statearr_11506_11537[(2)] = null);

(statearr_11506_11537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (6))){
var inst_11462 = (state_11497[(7)]);
var inst_11483 = (inst_11462 > (0));
var state_11497__$1 = state_11497;
if(cljs.core.truth_(inst_11483)){
var statearr_11507_11538 = state_11497__$1;
(statearr_11507_11538[(1)] = (12));

} else {
var statearr_11508_11539 = state_11497__$1;
(statearr_11508_11539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (3))){
var inst_11495 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11497__$1,inst_11495);
} else {
if((state_val_11498 === (12))){
var inst_11461 = (state_11497[(8)]);
var inst_11485 = cljs.core.vec.call(null,inst_11461);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11497__$1,(15),out,inst_11485);
} else {
if((state_val_11498 === (2))){
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11497__$1,(4),ch);
} else {
if((state_val_11498 === (11))){
var inst_11477 = (state_11497[(2)]);
var inst_11478 = (new Array(n));
var inst_11461 = inst_11478;
var inst_11462 = (0);
var state_11497__$1 = (function (){var statearr_11509 = state_11497;
(statearr_11509[(7)] = inst_11462);

(statearr_11509[(10)] = inst_11477);

(statearr_11509[(8)] = inst_11461);

return statearr_11509;
})();
var statearr_11510_11540 = state_11497__$1;
(statearr_11510_11540[(2)] = null);

(statearr_11510_11540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (9))){
var inst_11461 = (state_11497[(8)]);
var inst_11475 = cljs.core.vec.call(null,inst_11461);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11497__$1,(11),out,inst_11475);
} else {
if((state_val_11498 === (5))){
var inst_11462 = (state_11497[(7)]);
var inst_11470 = (state_11497[(11)]);
var inst_11465 = (state_11497[(9)]);
var inst_11461 = (state_11497[(8)]);
var inst_11469 = (inst_11461[inst_11462] = inst_11465);
var inst_11470__$1 = (inst_11462 + (1));
var inst_11471 = (inst_11470__$1 < n);
var state_11497__$1 = (function (){var statearr_11511 = state_11497;
(statearr_11511[(12)] = inst_11469);

(statearr_11511[(11)] = inst_11470__$1);

return statearr_11511;
})();
if(cljs.core.truth_(inst_11471)){
var statearr_11512_11541 = state_11497__$1;
(statearr_11512_11541[(1)] = (8));

} else {
var statearr_11513_11542 = state_11497__$1;
(statearr_11513_11542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (14))){
var inst_11490 = (state_11497[(2)]);
var inst_11491 = cljs.core.async.close_BANG_.call(null,out);
var state_11497__$1 = (function (){var statearr_11515 = state_11497;
(statearr_11515[(13)] = inst_11490);

return statearr_11515;
})();
var statearr_11516_11543 = state_11497__$1;
(statearr_11516_11543[(2)] = inst_11491);

(statearr_11516_11543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (10))){
var inst_11481 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11517_11544 = state_11497__$1;
(statearr_11517_11544[(2)] = inst_11481);

(statearr_11517_11544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (8))){
var inst_11470 = (state_11497[(11)]);
var inst_11461 = (state_11497[(8)]);
var tmp11514 = inst_11461;
var inst_11461__$1 = tmp11514;
var inst_11462 = inst_11470;
var state_11497__$1 = (function (){var statearr_11518 = state_11497;
(statearr_11518[(7)] = inst_11462);

(statearr_11518[(8)] = inst_11461__$1);

return statearr_11518;
})();
var statearr_11519_11545 = state_11497__$1;
(statearr_11519_11545[(2)] = null);

(statearr_11519_11545[(1)] = (2));


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
});})(c__8864__auto___11531,out))
;
return ((function (switch__8705__auto__,c__8864__auto___11531,out){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_11523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11523[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_11523[(1)] = (1));

return statearr_11523;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_11497){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_11497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e11524){if((e11524 instanceof Object)){
var ex__8709__auto__ = e11524;
var statearr_11525_11546 = state_11497;
(statearr_11525_11546[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11547 = state_11497;
state_11497 = G__11547;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___11531,out))
})();
var state__8866__auto__ = (function (){var statearr_11526 = f__8865__auto__.call(null);
(statearr_11526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___11531);

return statearr_11526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___11531,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11548 = [];
var len__7278__auto___11622 = arguments.length;
var i__7279__auto___11623 = (0);
while(true){
if((i__7279__auto___11623 < len__7278__auto___11622)){
args11548.push((arguments[i__7279__auto___11623]));

var G__11624 = (i__7279__auto___11623 + (1));
i__7279__auto___11623 = G__11624;
continue;
} else {
}
break;
}

var G__11550 = args11548.length;
switch (G__11550) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11548.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8864__auto___11626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___11626,out){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___11626,out){
return (function (state_11592){
var state_val_11593 = (state_11592[(1)]);
if((state_val_11593 === (7))){
var inst_11588 = (state_11592[(2)]);
var state_11592__$1 = state_11592;
var statearr_11594_11627 = state_11592__$1;
(statearr_11594_11627[(2)] = inst_11588);

(statearr_11594_11627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (1))){
var inst_11551 = [];
var inst_11552 = inst_11551;
var inst_11553 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11592__$1 = (function (){var statearr_11595 = state_11592;
(statearr_11595[(7)] = inst_11552);

(statearr_11595[(8)] = inst_11553);

return statearr_11595;
})();
var statearr_11596_11628 = state_11592__$1;
(statearr_11596_11628[(2)] = null);

(statearr_11596_11628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (4))){
var inst_11556 = (state_11592[(9)]);
var inst_11556__$1 = (state_11592[(2)]);
var inst_11557 = (inst_11556__$1 == null);
var inst_11558 = cljs.core.not.call(null,inst_11557);
var state_11592__$1 = (function (){var statearr_11597 = state_11592;
(statearr_11597[(9)] = inst_11556__$1);

return statearr_11597;
})();
if(inst_11558){
var statearr_11598_11629 = state_11592__$1;
(statearr_11598_11629[(1)] = (5));

} else {
var statearr_11599_11630 = state_11592__$1;
(statearr_11599_11630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (15))){
var inst_11582 = (state_11592[(2)]);
var state_11592__$1 = state_11592;
var statearr_11600_11631 = state_11592__$1;
(statearr_11600_11631[(2)] = inst_11582);

(statearr_11600_11631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (13))){
var state_11592__$1 = state_11592;
var statearr_11601_11632 = state_11592__$1;
(statearr_11601_11632[(2)] = null);

(statearr_11601_11632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (6))){
var inst_11552 = (state_11592[(7)]);
var inst_11577 = inst_11552.length;
var inst_11578 = (inst_11577 > (0));
var state_11592__$1 = state_11592;
if(cljs.core.truth_(inst_11578)){
var statearr_11602_11633 = state_11592__$1;
(statearr_11602_11633[(1)] = (12));

} else {
var statearr_11603_11634 = state_11592__$1;
(statearr_11603_11634[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (3))){
var inst_11590 = (state_11592[(2)]);
var state_11592__$1 = state_11592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11592__$1,inst_11590);
} else {
if((state_val_11593 === (12))){
var inst_11552 = (state_11592[(7)]);
var inst_11580 = cljs.core.vec.call(null,inst_11552);
var state_11592__$1 = state_11592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11592__$1,(15),out,inst_11580);
} else {
if((state_val_11593 === (2))){
var state_11592__$1 = state_11592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11592__$1,(4),ch);
} else {
if((state_val_11593 === (11))){
var inst_11556 = (state_11592[(9)]);
var inst_11560 = (state_11592[(10)]);
var inst_11570 = (state_11592[(2)]);
var inst_11571 = [];
var inst_11572 = inst_11571.push(inst_11556);
var inst_11552 = inst_11571;
var inst_11553 = inst_11560;
var state_11592__$1 = (function (){var statearr_11604 = state_11592;
(statearr_11604[(11)] = inst_11572);

(statearr_11604[(12)] = inst_11570);

(statearr_11604[(7)] = inst_11552);

(statearr_11604[(8)] = inst_11553);

return statearr_11604;
})();
var statearr_11605_11635 = state_11592__$1;
(statearr_11605_11635[(2)] = null);

(statearr_11605_11635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (9))){
var inst_11552 = (state_11592[(7)]);
var inst_11568 = cljs.core.vec.call(null,inst_11552);
var state_11592__$1 = state_11592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11592__$1,(11),out,inst_11568);
} else {
if((state_val_11593 === (5))){
var inst_11556 = (state_11592[(9)]);
var inst_11560 = (state_11592[(10)]);
var inst_11553 = (state_11592[(8)]);
var inst_11560__$1 = f.call(null,inst_11556);
var inst_11561 = cljs.core._EQ_.call(null,inst_11560__$1,inst_11553);
var inst_11562 = cljs.core.keyword_identical_QMARK_.call(null,inst_11553,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11563 = (inst_11561) || (inst_11562);
var state_11592__$1 = (function (){var statearr_11606 = state_11592;
(statearr_11606[(10)] = inst_11560__$1);

return statearr_11606;
})();
if(cljs.core.truth_(inst_11563)){
var statearr_11607_11636 = state_11592__$1;
(statearr_11607_11636[(1)] = (8));

} else {
var statearr_11608_11637 = state_11592__$1;
(statearr_11608_11637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (14))){
var inst_11585 = (state_11592[(2)]);
var inst_11586 = cljs.core.async.close_BANG_.call(null,out);
var state_11592__$1 = (function (){var statearr_11610 = state_11592;
(statearr_11610[(13)] = inst_11585);

return statearr_11610;
})();
var statearr_11611_11638 = state_11592__$1;
(statearr_11611_11638[(2)] = inst_11586);

(statearr_11611_11638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (10))){
var inst_11575 = (state_11592[(2)]);
var state_11592__$1 = state_11592;
var statearr_11612_11639 = state_11592__$1;
(statearr_11612_11639[(2)] = inst_11575);

(statearr_11612_11639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11593 === (8))){
var inst_11556 = (state_11592[(9)]);
var inst_11560 = (state_11592[(10)]);
var inst_11552 = (state_11592[(7)]);
var inst_11565 = inst_11552.push(inst_11556);
var tmp11609 = inst_11552;
var inst_11552__$1 = tmp11609;
var inst_11553 = inst_11560;
var state_11592__$1 = (function (){var statearr_11613 = state_11592;
(statearr_11613[(7)] = inst_11552__$1);

(statearr_11613[(8)] = inst_11553);

(statearr_11613[(14)] = inst_11565);

return statearr_11613;
})();
var statearr_11614_11640 = state_11592__$1;
(statearr_11614_11640[(2)] = null);

(statearr_11614_11640[(1)] = (2));


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
});})(c__8864__auto___11626,out))
;
return ((function (switch__8705__auto__,c__8864__auto___11626,out){
return (function() {
var cljs$core$async$state_machine__8706__auto__ = null;
var cljs$core$async$state_machine__8706__auto____0 = (function (){
var statearr_11618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11618[(0)] = cljs$core$async$state_machine__8706__auto__);

(statearr_11618[(1)] = (1));

return statearr_11618;
});
var cljs$core$async$state_machine__8706__auto____1 = (function (state_11592){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_11592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e11619){if((e11619 instanceof Object)){
var ex__8709__auto__ = e11619;
var statearr_11620_11641 = state_11592;
(statearr_11620_11641[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11642 = state_11592;
state_11592 = G__11642;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
cljs$core$async$state_machine__8706__auto__ = function(state_11592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8706__auto____1.call(this,state_11592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8706__auto____0;
cljs$core$async$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8706__auto____1;
return cljs$core$async$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___11626,out))
})();
var state__8866__auto__ = (function (){var statearr_11621 = f__8865__auto__.call(null);
(statearr_11621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___11626);

return statearr_11621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___11626,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map