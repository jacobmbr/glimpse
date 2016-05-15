// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.marshalling');
goog.require('cljs.core');
goog.require('chromex.protocols');
goog.require('chromex.config');
goog.require('chromex.chrome_port');
goog.require('chromex.chrome_storage_area');
chromex.marshalling.from_native_chrome_port = (function chromex$marshalling$from_native_chrome_port(config,native_chrome_port){
return chromex.chrome_port.make_chrome_port.call(null,config,native_chrome_port);
});
chromex.marshalling.to_native_chrome_port = (function chromex$marshalling$to_native_chrome_port(_config,chrome_port){
if(((!((chrome_port == null)))?(((false) || (chrome_port.chromex$protocols$IChromePort$))?true:(((!chrome_port.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromePort,chrome_port):false)):cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromePort,chrome_port))){
} else {
throw (new Error("Assert failed: (satisfies? protocols/IChromePort chrome-port)"));
}

return chromex.protocols.get_native_port.call(null,chrome_port);
});
chromex.marshalling.from_native_chrome_storage_area = (function chromex$marshalling$from_native_chrome_storage_area(config,native_chrome_storage_area){
return chromex.chrome_storage_area.make_chrome_storage_area.call(null,config,native_chrome_storage_area);
});
chromex.marshalling.to_native_chrome_storage_area = (function chromex$marshalling$to_native_chrome_storage_area(_config,chrome_storage_area){
if(((!((chrome_storage_area == null)))?(((false) || (chrome_storage_area.chromex$protocols$IChromeStorageArea$))?true:(((!chrome_storage_area.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromeStorageArea,chrome_storage_area):false)):cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromeStorageArea,chrome_storage_area))){
} else {
throw (new Error("Assert failed: (satisfies? protocols/IChromeStorageArea chrome-storage-area)"));
}

return chromex.protocols.get_native_storage_area.call(null,chrome_storage_area);
});

//# sourceMappingURL=marshalling.js.map