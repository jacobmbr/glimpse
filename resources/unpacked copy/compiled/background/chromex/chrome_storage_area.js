// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.chrome_storage_area');
goog.require('cljs.core');
goog.require('chromex.support');
goog.require('chromex.protocols');

/**
* @constructor
 * @implements {chromex.protocols.IChromeStorageArea}
*/
chromex.chrome_storage_area.ChromeStorageArea = (function (native_chrome_storage_area,channel_factory,callback_factory){
this.native_chrome_storage_area = native_chrome_storage_area;
this.channel_factory = channel_factory;
this.callback_factory = callback_factory;
})
chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$ = true;

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_native_storage_area$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.native_chrome_storage_area;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chromex.protocols.get.call(null,this$__$1,null);
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var o__23395__auto___39983 = self__.native_chrome_storage_area;
goog.object.get(o__23395__auto___39983,"get").call(o__23395__auto___39983,keys,self__.callback_factory.call(null,channel));

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chromex.protocols.get_bytes_in_use.call(null,this$__$1,null);
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var o__23395__auto___39984 = self__.native_chrome_storage_area;
goog.object.get(o__23395__auto___39984,"getBytesInUse").call(o__23395__auto___39984,keys,self__.callback_factory.call(null,channel));

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$set$arity$2 = (function (_this,items){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var o__23395__auto___39985 = self__.native_chrome_storage_area;
goog.object.get(o__23395__auto___39985,"set").call(o__23395__auto___39985,items,self__.callback_factory.call(null,channel));

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$remove$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var o__23395__auto___39986 = self__.native_chrome_storage_area;
goog.object.get(o__23395__auto___39986,"remove").call(o__23395__auto___39986,keys,self__.callback_factory.call(null,channel));

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$clear$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var o__23395__auto___39987 = self__.native_chrome_storage_area;
goog.object.get(o__23395__auto___39987,"clear").call(o__23395__auto___39987,self__.callback_factory.call(null,channel));

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"native-chrome-storage-area","native-chrome-storage-area",-1884589295,null),new cljs.core.Symbol(null,"channel-factory","channel-factory",-705139767,null),new cljs.core.Symbol(null,"callback-factory","callback-factory",-808206009,null)], null);
});

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$type = true;

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$ctorStr = "chromex.chrome-storage-area/ChromeStorageArea";

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"chromex.chrome-storage-area/ChromeStorageArea");
});

chromex.chrome_storage_area.__GT_ChromeStorageArea = (function chromex$chrome_storage_area$__GT_ChromeStorageArea(native_chrome_storage_area,channel_factory,callback_factory){
return (new chromex.chrome_storage_area.ChromeStorageArea(native_chrome_storage_area,channel_factory,callback_factory));
});

chromex.chrome_storage_area.make_chrome_storage_area = (function chromex$chrome_storage_area$make_chrome_storage_area(config,native_chrome_storage_area){
if(cljs.core.truth_(native_chrome_storage_area)){
} else {
throw (new Error("Assert failed: native-chrome-storage-area"));
}

return (new chromex.chrome_storage_area.ChromeStorageArea(native_chrome_storage_area,(function (){var config__23429__auto__ = config;
var handler_key__23430__auto__ = new cljs.core.Keyword(null,"chrome-storage-area-callback-channel-factory","chrome-storage-area-callback-channel-factory",573191526);
var handler__23431__auto__ = handler_key__23430__auto__.call(null,config__23429__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23431__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23430__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23429__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23431__auto__)")].join('')));
}

return cljs.core.partial.call(null,handler__23431__auto__,config__23429__auto__);
})(),(function (){var config__23429__auto__ = config;
var handler_key__23430__auto__ = new cljs.core.Keyword(null,"chrome-storage-area-callback-fn-factory","chrome-storage-area-callback-fn-factory",575077111);
var handler__23431__auto__ = handler_key__23430__auto__.call(null,config__23429__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23431__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23430__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23429__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23431__auto__)")].join('')));
}

return cljs.core.partial.call(null,handler__23431__auto__,config__23429__auto__);
})()));
});

//# sourceMappingURL=chrome_storage_area.js.map