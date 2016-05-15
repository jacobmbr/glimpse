// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
chromex.protocols.IChromeEventSubscription = function(){};

chromex.protocols.subscribe_BANG_ = (function chromex$protocols$subscribe_BANG_(var_args){
var args19560 = [];
var len__19487__auto___19563 = arguments.length;
var i__19488__auto___19564 = (0);
while(true){
if((i__19488__auto___19564 < len__19487__auto___19563)){
args19560.push((arguments[i__19488__auto___19564]));

var G__19565 = (i__19488__auto___19564 + (1));
i__19488__auto___19564 = G__19565;
continue;
} else {
}
break;
}

var G__19562 = args19560.length;
switch (G__19562) {
case 1:
return chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19560.length)].join('')));

}
});

chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$1 == null)))){
return this$.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.subscribe_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.subscribe_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeEventSubscription.subscribe!",this$);
}
}
}
});

chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,extra_args){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$2(this$,extra_args);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.subscribe_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,extra_args);
} else {
var m__19081__auto____$1 = (chromex.protocols.subscribe_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,extra_args);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeEventSubscription.subscribe!",this$);
}
}
}
});

chromex.protocols.subscribe_BANG_.cljs$lang$maxFixedArity = 2;

chromex.protocols.unsubscribe_BANG_ = (function chromex$protocols$unsubscribe_BANG_(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeEventSubscription$unsubscribe_BANG_$arity$1 == null)))){
return this$.chromex$protocols$IChromeEventSubscription$unsubscribe_BANG_$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.unsubscribe_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.unsubscribe_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeEventSubscription.unsubscribe!",this$);
}
}
}
});


/**
 * @interface
 */
chromex.protocols.IChromeEventChannel = function(){};

chromex.protocols.register_BANG_ = (function chromex$protocols$register_BANG_(this$,subscription){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeEventChannel$register_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromeEventChannel$register_BANG_$arity$2(this$,subscription);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.register_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,subscription);
} else {
var m__19081__auto____$1 = (chromex.protocols.register_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,subscription);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeEventChannel.register!",this$);
}
}
}
});

chromex.protocols.unregister_BANG_ = (function chromex$protocols$unregister_BANG_(this$,subscription){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeEventChannel$unregister_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromeEventChannel$unregister_BANG_$arity$2(this$,subscription);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.unregister_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,subscription);
} else {
var m__19081__auto____$1 = (chromex.protocols.unregister_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,subscription);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeEventChannel.unregister!",this$);
}
}
}
});

chromex.protocols.unsubscribe_all_BANG_ = (function chromex$protocols$unsubscribe_all_BANG_(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeEventChannel$unsubscribe_all_BANG_$arity$1 == null)))){
return this$.chromex$protocols$IChromeEventChannel$unsubscribe_all_BANG_$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.unsubscribe_all_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.unsubscribe_all_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeEventChannel.unsubscribe-all!",this$);
}
}
}
});


/**
 * a wrapper for https://developer.chrome.com/extensions/runtime#type-Port
 * @interface
 */
chromex.protocols.IChromePort = function(){};

chromex.protocols.get_native_port = (function chromex$protocols$get_native_port(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePort$get_native_port$arity$1 == null)))){
return this$.chromex$protocols$IChromePort$get_native_port$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get_native_port[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.get_native_port["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.get-native-port",this$);
}
}
}
});

chromex.protocols.get_name = (function chromex$protocols$get_name(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePort$get_name$arity$1 == null)))){
return this$.chromex$protocols$IChromePort$get_name$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get_name[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.get_name["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.get-name",this$);
}
}
}
});

chromex.protocols.get_sender = (function chromex$protocols$get_sender(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePort$get_sender$arity$1 == null)))){
return this$.chromex$protocols$IChromePort$get_sender$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get_sender[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.get_sender["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.get-sender",this$);
}
}
}
});

chromex.protocols.post_message_BANG_ = (function chromex$protocols$post_message_BANG_(this$,message){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePort$post_message_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromePort$post_message_BANG_$arity$2(this$,message);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.post_message_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,message);
} else {
var m__19081__auto____$1 = (chromex.protocols.post_message_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,message);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.post-message!",this$);
}
}
}
});

chromex.protocols.disconnect_BANG_ = (function chromex$protocols$disconnect_BANG_(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePort$disconnect_BANG_$arity$1 == null)))){
return this$.chromex$protocols$IChromePort$disconnect_BANG_$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.disconnect_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.disconnect_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.disconnect!",this$);
}
}
}
});

chromex.protocols.on_disconnect_BANG_ = (function chromex$protocols$on_disconnect_BANG_(this$,callback){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2(this$,callback);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.on_disconnect_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,callback);
} else {
var m__19081__auto____$1 = (chromex.protocols.on_disconnect_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.on-disconnect!",this$);
}
}
}
});

chromex.protocols.on_message_BANG_ = (function chromex$protocols$on_message_BANG_(this$,callback){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePort$on_message_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromePort$on_message_BANG_$arity$2(this$,callback);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.on_message_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,callback);
} else {
var m__19081__auto____$1 = (chromex.protocols.on_message_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.on-message!",this$);
}
}
}
});


/**
 * @interface
 */
chromex.protocols.IChromePortState = function(){};

chromex.protocols.set_connected_BANG_ = (function chromex$protocols$set_connected_BANG_(this$,val){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePortState$set_connected_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromePortState$set_connected_BANG_$arity$2(this$,val);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.set_connected_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,val);
} else {
var m__19081__auto____$1 = (chromex.protocols.set_connected_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,val);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePortState.set-connected!",this$);
}
}
}
});

chromex.protocols.put_message_BANG_ = (function chromex$protocols$put_message_BANG_(this$,message){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePortState$put_message_BANG_$arity$2 == null)))){
return this$.chromex$protocols$IChromePortState$put_message_BANG_$arity$2(this$,message);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.put_message_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,message);
} else {
var m__19081__auto____$1 = (chromex.protocols.put_message_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,message);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePortState.put-message!",this$);
}
}
}
});

chromex.protocols.close_resources_BANG_ = (function chromex$protocols$close_resources_BANG_(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromePortState$close_resources_BANG_$arity$1 == null)))){
return this$.chromex$protocols$IChromePortState$close_resources_BANG_$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.close_resources_BANG_[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.close_resources_BANG_["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePortState.close-resources!",this$);
}
}
}
});


/**
 * a wrapper for https://developer.chrome.com/extensions/storage#type-StorageArea
 * @interface
 */
chromex.protocols.IChromeStorageArea = function(){};

chromex.protocols.get_native_storage_area = (function chromex$protocols$get_native_storage_area(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$get_native_storage_area$arity$1 == null)))){
return this$.chromex$protocols$IChromeStorageArea$get_native_storage_area$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get_native_storage_area[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.get_native_storage_area["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.get-native-storage-area",this$);
}
}
}
});

chromex.protocols.get = (function chromex$protocols$get(var_args){
var args19567 = [];
var len__19487__auto___19573 = arguments.length;
var i__19488__auto___19574 = (0);
while(true){
if((i__19488__auto___19574 < len__19487__auto___19573)){
args19567.push((arguments[i__19488__auto___19574]));

var G__19575 = (i__19488__auto___19574 + (1));
i__19488__auto___19574 = G__19575;
continue;
} else {
}
break;
}

var G__19569 = args19567.length;
switch (G__19569) {
case 1:
return chromex.protocols.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chromex.protocols.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19567.length)].join('')));

}
});

chromex.protocols.get.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$get$arity$1 == null)))){
return this$.chromex$protocols$IChromeStorageArea$get$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.get["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.get",this$);
}
}
}
});

chromex.protocols.get.cljs$core$IFn$_invoke$arity$2 = (function (this$,keys){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$get$arity$2 == null)))){
return this$.chromex$protocols$IChromeStorageArea$get$arity$2(this$,keys);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,keys);
} else {
var m__19081__auto____$1 = (chromex.protocols.get["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,keys);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.get",this$);
}
}
}
});

chromex.protocols.get.cljs$lang$maxFixedArity = 2;

chromex.protocols.get_bytes_in_use = (function chromex$protocols$get_bytes_in_use(var_args){
var args19570 = [];
var len__19487__auto___19577 = arguments.length;
var i__19488__auto___19578 = (0);
while(true){
if((i__19488__auto___19578 < len__19487__auto___19577)){
args19570.push((arguments[i__19488__auto___19578]));

var G__19579 = (i__19488__auto___19578 + (1));
i__19488__auto___19578 = G__19579;
continue;
} else {
}
break;
}

var G__19572 = args19570.length;
switch (G__19572) {
case 1:
return chromex.protocols.get_bytes_in_use.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chromex.protocols.get_bytes_in_use.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19570.length)].join('')));

}
});

chromex.protocols.get_bytes_in_use.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$1 == null)))){
return this$.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get_bytes_in_use[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.get_bytes_in_use["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.get-bytes-in-use",this$);
}
}
}
});

chromex.protocols.get_bytes_in_use.cljs$core$IFn$_invoke$arity$2 = (function (this$,keys){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$2 == null)))){
return this$.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$2(this$,keys);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.get_bytes_in_use[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,keys);
} else {
var m__19081__auto____$1 = (chromex.protocols.get_bytes_in_use["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,keys);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.get-bytes-in-use",this$);
}
}
}
});

chromex.protocols.get_bytes_in_use.cljs$lang$maxFixedArity = 2;

chromex.protocols.set = (function chromex$protocols$set(this$,items){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$set$arity$2 == null)))){
return this$.chromex$protocols$IChromeStorageArea$set$arity$2(this$,items);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.set[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,items);
} else {
var m__19081__auto____$1 = (chromex.protocols.set["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,items);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.set",this$);
}
}
}
});

chromex.protocols.remove = (function chromex$protocols$remove(this$,keys){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$remove$arity$2 == null)))){
return this$.chromex$protocols$IChromeStorageArea$remove$arity$2(this$,keys);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.remove[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$,keys);
} else {
var m__19081__auto____$1 = (chromex.protocols.remove["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$,keys);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.remove",this$);
}
}
}
});

chromex.protocols.clear = (function chromex$protocols$clear(this$){
if((!((this$ == null))) && (!((this$.chromex$protocols$IChromeStorageArea$clear$arity$1 == null)))){
return this$.chromex$protocols$IChromeStorageArea$clear$arity$1(this$);
} else {
var x__19080__auto__ = (((this$ == null))?null:this$);
var m__19081__auto__ = (chromex.protocols.clear[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,this$);
} else {
var m__19081__auto____$1 = (chromex.protocols.clear["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromeStorageArea.clear",this$);
}
}
}
});


//# sourceMappingURL=protocols.js.map