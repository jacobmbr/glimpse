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
var seq__23478_23482 = cljs.core.seq.call(null,self__.subscriptions);
var chunk__23479_23483 = null;
var count__23480_23484 = (0);
var i__23481_23485 = (0);
while(true){
if((i__23481_23485 < count__23480_23484)){
var subscription_23486 = cljs.core._nth.call(null,chunk__23479_23483,i__23481_23485);
chromex.protocols.unsubscribe_BANG_.call(null,subscription_23486);

var G__23487 = seq__23478_23482;
var G__23488 = chunk__23479_23483;
var G__23489 = count__23480_23484;
var G__23490 = (i__23481_23485 + (1));
seq__23478_23482 = G__23487;
chunk__23479_23483 = G__23488;
count__23480_23484 = G__23489;
i__23481_23485 = G__23490;
continue;
} else {
var temp__4657__auto___23491 = cljs.core.seq.call(null,seq__23478_23482);
if(temp__4657__auto___23491){
var seq__23478_23492__$1 = temp__4657__auto___23491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23478_23492__$1)){
var c__19228__auto___23493 = cljs.core.chunk_first.call(null,seq__23478_23492__$1);
var G__23494 = cljs.core.chunk_rest.call(null,seq__23478_23492__$1);
var G__23495 = c__19228__auto___23493;
var G__23496 = cljs.core.count.call(null,c__19228__auto___23493);
var G__23497 = (0);
seq__23478_23482 = G__23494;
chunk__23479_23483 = G__23495;
count__23480_23484 = G__23496;
i__23481_23485 = G__23497;
continue;
} else {
var subscription_23498 = cljs.core.first.call(null,seq__23478_23492__$1);
chromex.protocols.unsubscribe_BANG_.call(null,subscription_23498);

var G__23499 = cljs.core.next.call(null,seq__23478_23492__$1);
var G__23500 = null;
var G__23501 = (0);
var G__23502 = (0);
seq__23478_23482 = G__23499;
chunk__23479_23483 = G__23500;
count__23480_23484 = G__23501;
i__23481_23485 = G__23502;
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

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"chromex.chrome-event-channel/ChromeEventChannel");
});

chromex.chrome_event_channel.__GT_ChromeEventChannel = (function chromex$chrome_event_channel$__GT_ChromeEventChannel(chan,subscriptions){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,subscriptions));
});

chromex.chrome_event_channel.make_chrome_event_channel = (function chromex$chrome_event_channel$make_chrome_event_channel(chan){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,cljs.core.PersistentHashSet.EMPTY));
});

//# sourceMappingURL=chrome_event_channel.js.map