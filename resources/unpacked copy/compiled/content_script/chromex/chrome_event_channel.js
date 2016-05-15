// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.chrome_event_channel');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('chromex.protocols');

/**
* @constructor
 * @implements {chromex.protocols.IChromeEventChannel}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
chromex.chrome_event_channel.ChromeEventChannel = (function (chan,subscriptions){
this.chan = chan;
this.subscriptions = subscriptions;
})
chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$ = true;

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$register_BANG_$arity$2 = (function (_this,subscription){
var self__ = this;
var _this__$1 = this;
return self__.subscriptions = cljs.core.conj.call(null,self__.subscriptions,subscription);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$unregister_BANG_$arity$2 = (function (_this,subscription){
var self__ = this;
var _this__$1 = this;
return self__.subscriptions = cljs.core.disj.call(null,self__.subscriptions,subscription);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$unsubscribe_all_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var seq__8224_8247 = cljs.core.seq.call(null,self__.subscriptions);
var chunk__8225_8248 = null;
var count__8226_8249 = (0);
var i__8227_8250 = (0);
while(true){
if((i__8227_8250 < count__8226_8249)){
var subscription_8255 = cljs.core._nth.call(null,chunk__8225_8248,i__8227_8250);
chromex.protocols.unsubscribe_BANG_.call(null,subscription_8255);

var G__8256 = seq__8224_8247;
var G__8257 = chunk__8225_8248;
var G__8258 = count__8226_8249;
var G__8259 = (i__8227_8250 + (1));
seq__8224_8247 = G__8256;
chunk__8225_8248 = G__8257;
count__8226_8249 = G__8258;
i__8227_8250 = G__8259;
continue;
} else {
var temp__4657__auto___8260 = cljs.core.seq.call(null,seq__8224_8247);
if(temp__4657__auto___8260){
var seq__8224_8261__$1 = temp__4657__auto___8260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8224_8261__$1)){
var c__7019__auto___8262 = cljs.core.chunk_first.call(null,seq__8224_8261__$1);
var G__8263 = cljs.core.chunk_rest.call(null,seq__8224_8261__$1);
var G__8264 = c__7019__auto___8262;
var G__8265 = cljs.core.count.call(null,c__7019__auto___8262);
var G__8266 = (0);
seq__8224_8247 = G__8263;
chunk__8225_8248 = G__8264;
count__8226_8249 = G__8265;
i__8227_8250 = G__8266;
continue;
} else {
var subscription_8267 = cljs.core.first.call(null,seq__8224_8261__$1);
chromex.protocols.unsubscribe_BANG_.call(null,subscription_8267);

var G__8317 = cljs.core.next.call(null,seq__8224_8261__$1);
var G__8318 = null;
var G__8319 = (0);
var G__8320 = (0);
seq__8224_8247 = G__8317;
chunk__8225_8248 = G__8318;
count__8226_8249 = G__8319;
i__8227_8250 = G__8320;
continue;
}
} else {
}
}
break;
}

return self__.subscriptions = cljs.core.PersistentHashSet.EMPTY;
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_this,val,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.chan,val,handler);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_this,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.chan,handler);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.chan);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
chromex.protocols.unsubscribe_all_BANG_.call(null,this$__$1);

return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.chan);
});

chromex.chrome_event_channel.ChromeEventChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chan","chan",-462490168,null),cljs.core.with_meta(new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$type = true;

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$ctorStr = "chromex.chrome-event-channel/ChromeEventChannel";

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"chromex.chrome-event-channel/ChromeEventChannel");
});

chromex.chrome_event_channel.__GT_ChromeEventChannel = (function chromex$chrome_event_channel$__GT_ChromeEventChannel(chan,subscriptions){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,subscriptions));
});

chromex.chrome_event_channel.make_chrome_event_channel = (function chromex$chrome_event_channel$make_chrome_event_channel(chan){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,cljs.core.PersistentHashSet.EMPTY));
});

//# sourceMappingURL=chrome_event_channel.js.map