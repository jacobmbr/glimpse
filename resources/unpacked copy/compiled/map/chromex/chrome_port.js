// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.chrome_port');
goog.require('cljs.core');
goog.require('chromex.support');
goog.require('chromex.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');

/**
* @constructor
 * @implements {chromex.protocols.IChromePort}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {chromex.protocols.IChromePortState}
*/
chromex.chrome_port.ChromePort = (function (config,native_chrome_port,channel,connected_QMARK_){
this.config = config;
this.native_chrome_port = native_chrome_port;
this.channel = channel;
this.connected_QMARK_ = connected_QMARK_;
})
chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$ = true;

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_native_port$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.native_chrome_port;
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_name$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return goog.object.get(self__.native_chrome_port,"name");
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_sender$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return goog.object.get(self__.native_chrome_port,"sender");
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$post_message_BANG_$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
if((message == null)){
var config__23420__auto__ = self__.config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-post-message-called-with-nil","chrome-port-post-message-called-with-nil",864934312);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,this$__$1);
} else {
if(cljs.core.truth_(self__.connected_QMARK_)){
var o__23395__auto__ = self__.native_chrome_port;
return goog.object.get(o__23395__auto__,"postMessage").call(o__23395__auto__,message);
} else {
var config__23420__auto__ = self__.config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-post-message-called-on-disconnected-port","chrome-port-post-message-called-on-disconnected-port",-1329006944);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,this$__$1);
}
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$disconnect_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var o__23395__auto__ = self__.native_chrome_port;
return goog.object.get(o__23395__auto__,"disconnect").call(o__23395__auto__);
} else {
var config__23420__auto__ = self__.config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-disconnect-called-on-disconnected-port","chrome-port-disconnect-called-on-disconnected-port",-1526797777);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,this$__$1);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var on_disconnect_event = goog.object.get(self__.native_chrome_port,"onDisconnect");
if(cljs.core.truth_(on_disconnect_event)){
} else {
throw (new Error("Assert failed: on-disconnect-event"));
}

var o__23395__auto__ = on_disconnect_event;
return goog.object.get(o__23395__auto__,"addListener").call(o__23395__auto__,callback);
} else {
var config__23420__auto__ = self__.config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-on-disconnect-called-on-disconnected-port","chrome-port-on-disconnect-called-on-disconnected-port",-269858172);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,this$__$1);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$on_message_BANG_$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var on_message_event = goog.object.get(self__.native_chrome_port,"onMessage");
if(cljs.core.truth_(on_message_event)){
} else {
throw (new Error("Assert failed: on-message-event"));
}

var o__23395__auto__ = on_message_event;
return goog.object.get(o__23395__auto__,"addListener").call(o__23395__auto__,callback);
} else {
var config__23420__auto__ = self__.config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-on-message-called-on-disconnected-port","chrome-port-on-message-called-on-disconnected-port",1590595021);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,this$__$1);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$ = true;

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$set_connected_BANG_$arity$2 = (function (_this,val){
var self__ = this;
var _this__$1 = this;
return self__.connected_QMARK_ = val;
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$put_message_BANG_$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
return cljs.core.async.put_BANG_.call(null,self__.channel,message);
} else {
var config__23420__auto__ = self__.config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-put-message-called-on-disconnected-port","chrome-port-put-message-called-on-disconnected-port",1479634211);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,this$__$1,message);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$close_resources_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.channel);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_this,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.channel,handler);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.channel);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chromex.protocols.disconnect_BANG_.call(null,this$__$1);
});

chromex.chrome_port.ChromePort.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"native-chrome-port","native-chrome-port",1837388003,null),new cljs.core.Symbol(null,"channel","channel",-1920248077,null),cljs.core.with_meta(new cljs.core.Symbol(null,"connected?","connected?",442980140,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

chromex.chrome_port.ChromePort.cljs$lang$type = true;

chromex.chrome_port.ChromePort.cljs$lang$ctorStr = "chromex.chrome-port/ChromePort";

chromex.chrome_port.ChromePort.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"chromex.chrome-port/ChromePort");
});

chromex.chrome_port.__GT_ChromePort = (function chromex$chrome_port$__GT_ChromePort(config,native_chrome_port,channel,connected_QMARK_){
return (new chromex.chrome_port.ChromePort(config,native_chrome_port,channel,connected_QMARK_));
});

chromex.chrome_port.make_chrome_port = (function chromex$chrome_port$make_chrome_port(config,native_chrome_port){
if(cljs.core.truth_(native_chrome_port)){
} else {
throw (new Error("Assert failed: native-chrome-port"));
}

var channel = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-channel-factory","chrome-port-channel-factory",393485192);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var chrome_port = (new chromex.chrome_port.ChromePort(config,native_chrome_port,channel,true));
chromex.protocols.on_message_BANG_.call(null,chrome_port,(function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-on-message-fn-factory","chrome-port-on-message-fn-factory",1295000398);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,chrome_port);
})());

chromex.protocols.on_disconnect_BANG_.call(null,chrome_port,(function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-on-disconnect-fn-factory","chrome-port-on-disconnect-fn-factory",-501244675);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,chrome_port);
})());

return chrome_port;
});

//# sourceMappingURL=chrome_port.js.map