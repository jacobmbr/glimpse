// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.runtime');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.runtime.last_error_STAR_ = (function chromex$ext$runtime$last_error_STAR_(config){
var result_30275 = (function (){var final_args_array_30276 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.lastError");
var ns_30277 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();

var config__23449__auto___30279 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30279))){
var logger__23450__auto___30280 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30279);
var prefix__23451__auto___30281 = ["accessing:","chrome.runtime.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30280)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30279)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30280.apply(null,prefix__23451__auto___30281.concat(final_args_array_30276));
} else {
}

var target_30278 = goog.object.get(ns_30277,"lastError");
return target_30278;
})();
return result_30275;
});
chromex.ext.runtime.id_STAR_ = (function chromex$ext$runtime$id_STAR_(config){
var result_30286 = (function (){var final_args_array_30287 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.id");
var ns_30288 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();

var config__23449__auto___30290 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30290))){
var logger__23450__auto___30291 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30290);
var prefix__23451__auto___30292 = ["accessing:","chrome.runtime.id"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30291)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30290)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30291.apply(null,prefix__23451__auto___30292.concat(final_args_array_30287));
} else {
}

var target_30289 = goog.object.get(ns_30288,"id");
return target_30289;
})();
return result_30286;
});
chromex.ext.runtime.get_background_page_STAR_ = (function chromex$ext$runtime$get_background_page_STAR_(config){
var callback_chan_30300 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_30302_30307 = ((function (callback_chan_30300){
return (function (cb_background_page_30306){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-background-page","chromex.ext.runtime/get-background-page",2138227095),new cljs.core.Keyword(null,"name","name",1843675177),"getBackgroundPage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"background-page",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30300);
})().call(null,cb_background_page_30306);
});})(callback_chan_30300))
;
var result_30301_30308 = (function (){var final_args_array_30303 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_30302_30307,"callback",null], null)], null),"chrome.runtime.getBackgroundPage");
var ns_30304 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30309 = config;
var api_check_fn__23454__auto___30310 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30309);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30310)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30309)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30310.call(null,"chrome.runtime.getBackgroundPage",ns_30304,"getBackgroundPage");

var config__23449__auto___30311 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30311))){
var logger__23450__auto___30312 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30311);
var prefix__23451__auto___30313 = ["calling:","chrome.runtime.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30312)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30311)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30312.apply(null,prefix__23451__auto___30313.concat(final_args_array_30303));
} else {
}

var target_30305 = goog.object.get(ns_30304,"getBackgroundPage");
return target_30305.apply(ns_30304,final_args_array_30303);
})();

return callback_chan_30300;
});
chromex.ext.runtime.open_options_page_STAR_ = (function chromex$ext$runtime$open_options_page_STAR_(config){
var callback_chan_30320 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_30322_30326 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","open-options-page","chromex.ext.runtime/open-options-page",-236868215),new cljs.core.Keyword(null,"name","name",1843675177),"openOptionsPage",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30320);
})();
var result_30321_30327 = (function (){var final_args_array_30323 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_30322_30326,"callback",true], null)], null),"chrome.runtime.openOptionsPage");
var ns_30324 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30328 = config;
var api_check_fn__23454__auto___30329 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30328);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30329)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30328)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30329.call(null,"chrome.runtime.openOptionsPage",ns_30324,"openOptionsPage");

var config__23449__auto___30330 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30330))){
var logger__23450__auto___30331 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30330);
var prefix__23451__auto___30332 = ["calling:","chrome.runtime.openOptionsPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30331)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30330)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30331.apply(null,prefix__23451__auto___30332.concat(final_args_array_30323));
} else {
}

var target_30325 = goog.object.get(ns_30324,"openOptionsPage");
return target_30325.apply(ns_30324,final_args_array_30323);
})();

return callback_chan_30320;
});
chromex.ext.runtime.get_manifest_STAR_ = (function chromex$ext$runtime$get_manifest_STAR_(config){
var result_30337 = (function (){var final_args_array_30338 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.getManifest");
var ns_30339 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30341 = config;
var api_check_fn__23454__auto___30342 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30341);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30342)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30341)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30342.call(null,"chrome.runtime.getManifest",ns_30339,"getManifest");

var config__23449__auto___30343 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30343))){
var logger__23450__auto___30344 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30343);
var prefix__23451__auto___30345 = ["calling:","chrome.runtime.getManifest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30344)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30343)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30344.apply(null,prefix__23451__auto___30345.concat(final_args_array_30338));
} else {
}

var target_30340 = goog.object.get(ns_30339,"getManifest");
return target_30340.apply(ns_30339,final_args_array_30338);
})();
return result_30337;
});
chromex.ext.runtime.get_url_STAR_ = (function chromex$ext$runtime$get_url_STAR_(config,path){
var marshalled_path_30353 = (function (){var omit_test_30357 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30357,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30357;
}
})();
var result_30352 = (function (){var final_args_array_30354 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_30353,"path",null], null)], null),"chrome.runtime.getURL");
var ns_30355 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30358 = config;
var api_check_fn__23454__auto___30359 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30358);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30359)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30358)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30359.call(null,"chrome.runtime.getURL",ns_30355,"getURL");

var config__23449__auto___30360 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30360))){
var logger__23450__auto___30361 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30360);
var prefix__23451__auto___30362 = ["calling:","chrome.runtime.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30361)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30360)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30361.apply(null,prefix__23451__auto___30362.concat(final_args_array_30354));
} else {
}

var target_30356 = goog.object.get(ns_30355,"getURL");
return target_30356.apply(ns_30355,final_args_array_30354);
})();
return result_30352;
});
chromex.ext.runtime.set_uninstall_url_STAR_ = (function chromex$ext$runtime$set_uninstall_url_STAR_(config,url){
var callback_chan_30371 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_url_30373_30379 = (function (){var omit_test_30378 = url;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30378,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30378;
}
})();
var marshalled_callback_30374_30380 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","set-uninstall-url","chromex.ext.runtime/set-uninstall-url",-1010845784),new cljs.core.Keyword(null,"name","name",1843675177),"setUninstallURL",new cljs.core.Keyword(null,"since","since",315379842),"41",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30371);
})();
var result_30372_30381 = (function (){var final_args_array_30375 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_url_30373_30379,"url",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_30374_30380,"callback",true], null)], null),"chrome.runtime.setUninstallURL");
var ns_30376 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30382 = config;
var api_check_fn__23454__auto___30383 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30382);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30383)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30382)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30383.call(null,"chrome.runtime.setUninstallURL",ns_30376,"setUninstallURL");

var config__23449__auto___30384 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30384))){
var logger__23450__auto___30385 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30384);
var prefix__23451__auto___30386 = ["calling:","chrome.runtime.setUninstallURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30385)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30384)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30385.apply(null,prefix__23451__auto___30386.concat(final_args_array_30375));
} else {
}

var target_30377 = goog.object.get(ns_30376,"setUninstallURL");
return target_30377.apply(ns_30376,final_args_array_30375);
})();

return callback_chan_30371;
});
chromex.ext.runtime.reload_STAR_ = (function chromex$ext$runtime$reload_STAR_(config){
var result_30391 = (function (){var final_args_array_30392 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.reload");
var ns_30393 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30395 = config;
var api_check_fn__23454__auto___30396 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30395);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30396)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30395)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30396.call(null,"chrome.runtime.reload",ns_30393,"reload");

var config__23449__auto___30397 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30397))){
var logger__23450__auto___30398 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30397);
var prefix__23451__auto___30399 = ["calling:","chrome.runtime.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30398)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30397)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30398.apply(null,prefix__23451__auto___30399.concat(final_args_array_30392));
} else {
}

var target_30394 = goog.object.get(ns_30393,"reload");
return target_30394.apply(ns_30393,final_args_array_30392);
})();
return result_30391;
});
chromex.ext.runtime.request_update_check_STAR_ = (function chromex$ext$runtime$request_update_check_STAR_(config){
var callback_chan_30408 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_30410_30416 = ((function (callback_chan_30408){
return (function (cb_status_30414,cb_details_30415){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","request-update-check","chromex.ext.runtime/request-update-check",-1504783873),new cljs.core.Keyword(null,"name","name",1843675177),"requestUpdateCheck",new cljs.core.Keyword(null,"since","since",315379842),"25",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"status",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.RequestUpdateCheckStatus"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30408);
})().call(null,cb_status_30414,cb_details_30415);
});})(callback_chan_30408))
;
var result_30409_30417 = (function (){var final_args_array_30411 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_30410_30416,"callback",null], null)], null),"chrome.runtime.requestUpdateCheck");
var ns_30412 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30418 = config;
var api_check_fn__23454__auto___30419 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30418);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30419)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30418)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30419.call(null,"chrome.runtime.requestUpdateCheck",ns_30412,"requestUpdateCheck");

var config__23449__auto___30420 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30420))){
var logger__23450__auto___30421 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30420);
var prefix__23451__auto___30422 = ["calling:","chrome.runtime.requestUpdateCheck"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30421)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30420)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30421.apply(null,prefix__23451__auto___30422.concat(final_args_array_30411));
} else {
}

var target_30413 = goog.object.get(ns_30412,"requestUpdateCheck");
return target_30413.apply(ns_30412,final_args_array_30411);
})();

return callback_chan_30408;
});
chromex.ext.runtime.restart_STAR_ = (function chromex$ext$runtime$restart_STAR_(config){
var result_30427 = (function (){var final_args_array_30428 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.restart");
var ns_30429 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30431 = config;
var api_check_fn__23454__auto___30432 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30431);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30432)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30431)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30432.call(null,"chrome.runtime.restart",ns_30429,"restart");

var config__23449__auto___30433 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30433))){
var logger__23450__auto___30434 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30433);
var prefix__23451__auto___30435 = ["calling:","chrome.runtime.restart"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30434)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30433)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30434.apply(null,prefix__23451__auto___30435.concat(final_args_array_30428));
} else {
}

var target_30430 = goog.object.get(ns_30429,"restart");
return target_30430.apply(ns_30429,final_args_array_30428);
})();
return result_30427;
});
chromex.ext.runtime.connect_STAR_ = (function chromex$ext$runtime$connect_STAR_(config,extension_id,connect_info){
var marshalled_extension_id_30445 = (function (){var omit_test_30450 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30450,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30450;
}
})();
var marshalled_connect_info_30446 = (function (){var omit_test_30451 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30451,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30451;
}
})();
var result_30444 = (function (){var final_args_array_30447 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_30445,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_30446,"connect-info",true], null)], null),"chrome.runtime.connect");
var ns_30448 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30452 = config;
var api_check_fn__23454__auto___30453 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30452);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30453)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30452)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30453.call(null,"chrome.runtime.connect",ns_30448,"connect");

var config__23449__auto___30454 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30454))){
var logger__23450__auto___30455 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30454);
var prefix__23451__auto___30456 = ["calling:","chrome.runtime.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30455)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30454)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30455.apply(null,prefix__23451__auto___30456.concat(final_args_array_30447));
} else {
}

var target_30449 = goog.object.get(ns_30448,"connect");
return target_30449.apply(ns_30448,final_args_array_30447);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_30444);
});
chromex.ext.runtime.connect_native_STAR_ = (function chromex$ext$runtime$connect_native_STAR_(config,application){
var marshalled_application_30464 = (function (){var omit_test_30468 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30468,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30468;
}
})();
var result_30463 = (function (){var final_args_array_30465 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_30464,"application",null], null)], null),"chrome.runtime.connectNative");
var ns_30466 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30469 = config;
var api_check_fn__23454__auto___30470 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30469);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30470)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30469)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30470.call(null,"chrome.runtime.connectNative",ns_30466,"connectNative");

var config__23449__auto___30471 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30471))){
var logger__23450__auto___30472 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30471);
var prefix__23451__auto___30473 = ["calling:","chrome.runtime.connectNative"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30472)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30471)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30472.apply(null,prefix__23451__auto___30473.concat(final_args_array_30465));
} else {
}

var target_30467 = goog.object.get(ns_30466,"connectNative");
return target_30467.apply(ns_30466,final_args_array_30465);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_30463);
});
chromex.ext.runtime.send_message_STAR_ = (function chromex$ext$runtime$send_message_STAR_(config,extension_id,message,options){
var callback_chan_30487 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_extension_id_30489_30500 = (function (){var omit_test_30496 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30496,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30496;
}
})();
var marshalled_message_30490_30501 = (function (){var omit_test_30497 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30497,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30497;
}
})();
var marshalled_options_30491_30502 = (function (){var omit_test_30498 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30498,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30498;
}
})();
var marshalled_response_callback_30492_30503 = ((function (marshalled_extension_id_30489_30500,marshalled_message_30490_30501,marshalled_options_30491_30502,callback_chan_30487){
return (function (cb_response_30499){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-message","chromex.ext.runtime/send-message",-500803608),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"26",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30487);
})().call(null,cb_response_30499);
});})(marshalled_extension_id_30489_30500,marshalled_message_30490_30501,marshalled_options_30491_30502,callback_chan_30487))
;
var result_30488_30504 = (function (){var final_args_array_30493 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_30489_30500,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_30490_30501,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_30491_30502,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_30492_30503,"response-callback",true], null)], null),"chrome.runtime.sendMessage");
var ns_30494 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30505 = config;
var api_check_fn__23454__auto___30506 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30505);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30506)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30505)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30506.call(null,"chrome.runtime.sendMessage",ns_30494,"sendMessage");

var config__23449__auto___30507 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30507))){
var logger__23450__auto___30508 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30507);
var prefix__23451__auto___30509 = ["calling:","chrome.runtime.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30508)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30507)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30508.apply(null,prefix__23451__auto___30509.concat(final_args_array_30493));
} else {
}

var target_30495 = goog.object.get(ns_30494,"sendMessage");
return target_30495.apply(ns_30494,final_args_array_30493);
})();

return callback_chan_30487;
});
chromex.ext.runtime.send_native_message_STAR_ = (function chromex$ext$runtime$send_native_message_STAR_(config,application,message){
var callback_chan_30521 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_application_30523_30532 = (function (){var omit_test_30529 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30529,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30529;
}
})();
var marshalled_message_30524_30533 = (function (){var omit_test_30530 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_30530,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_30530;
}
})();
var marshalled_response_callback_30525_30534 = ((function (marshalled_application_30523_30532,marshalled_message_30524_30533,callback_chan_30521){
return (function (cb_response_30531){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-native-message","chromex.ext.runtime/send-native-message",-489769559),new cljs.core.Keyword(null,"name","name",1843675177),"sendNativeMessage",new cljs.core.Keyword(null,"since","since",315379842),"28",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"application",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30521);
})().call(null,cb_response_30531);
});})(marshalled_application_30523_30532,marshalled_message_30524_30533,callback_chan_30521))
;
var result_30522_30535 = (function (){var final_args_array_30526 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_30523_30532,"application",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_30524_30533,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_30525_30534,"response-callback",true], null)], null),"chrome.runtime.sendNativeMessage");
var ns_30527 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30536 = config;
var api_check_fn__23454__auto___30537 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30536);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30537)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30536)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30537.call(null,"chrome.runtime.sendNativeMessage",ns_30527,"sendNativeMessage");

var config__23449__auto___30538 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30538))){
var logger__23450__auto___30539 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30538);
var prefix__23451__auto___30540 = ["calling:","chrome.runtime.sendNativeMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30539)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30538)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30539.apply(null,prefix__23451__auto___30540.concat(final_args_array_30526));
} else {
}

var target_30528 = goog.object.get(ns_30527,"sendNativeMessage");
return target_30528.apply(ns_30527,final_args_array_30526);
})();

return callback_chan_30521;
});
chromex.ext.runtime.get_platform_info_STAR_ = (function chromex$ext$runtime$get_platform_info_STAR_(config){
var callback_chan_30548 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_30550_30555 = ((function (callback_chan_30548){
return (function (cb_platform_info_30554){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-platform-info","chromex.ext.runtime/get-platform-info",573309082),new cljs.core.Keyword(null,"name","name",1843675177),"getPlatformInfo",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"platform-info",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.PlatformInfo"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30548);
})().call(null,cb_platform_info_30554);
});})(callback_chan_30548))
;
var result_30549_30556 = (function (){var final_args_array_30551 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_30550_30555,"callback",null], null)], null),"chrome.runtime.getPlatformInfo");
var ns_30552 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30557 = config;
var api_check_fn__23454__auto___30558 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30557);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30558)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30557)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30558.call(null,"chrome.runtime.getPlatformInfo",ns_30552,"getPlatformInfo");

var config__23449__auto___30559 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30559))){
var logger__23450__auto___30560 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30559);
var prefix__23451__auto___30561 = ["calling:","chrome.runtime.getPlatformInfo"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30560)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30559)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30560.apply(null,prefix__23451__auto___30561.concat(final_args_array_30551));
} else {
}

var target_30553 = goog.object.get(ns_30552,"getPlatformInfo");
return target_30553.apply(ns_30552,final_args_array_30551);
})();

return callback_chan_30548;
});
chromex.ext.runtime.get_package_directory_entry_STAR_ = (function chromex$ext$runtime$get_package_directory_entry_STAR_(config){
var callback_chan_30569 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_30571_30576 = ((function (callback_chan_30569){
return (function (cb_directory_entry_30575){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-package-directory-entry","chromex.ext.runtime/get-package-directory-entry",-1404865573),new cljs.core.Keyword(null,"name","name",1843675177),"getPackageDirectoryEntry",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"directory-entry",new cljs.core.Keyword(null,"type","type",1174270348),"DirectoryEntry"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_30569);
})().call(null,cb_directory_entry_30575);
});})(callback_chan_30569))
;
var result_30570_30577 = (function (){var final_args_array_30572 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_30571_30576,"callback",null], null)], null),"chrome.runtime.getPackageDirectoryEntry");
var ns_30573 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30578 = config;
var api_check_fn__23454__auto___30579 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30578);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30579)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30578)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30579.call(null,"chrome.runtime.getPackageDirectoryEntry",ns_30573,"getPackageDirectoryEntry");

var config__23449__auto___30580 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30580))){
var logger__23450__auto___30581 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30580);
var prefix__23451__auto___30582 = ["calling:","chrome.runtime.getPackageDirectoryEntry"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30581)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30580)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30581.apply(null,prefix__23451__auto___30582.concat(final_args_array_30572));
} else {
}

var target_30574 = goog.object.get(ns_30573,"getPackageDirectoryEntry");
return target_30574.apply(ns_30573,final_args_array_30572);
})();

return callback_chan_30569;
});
chromex.ext.runtime.on_startup_STAR_ = (function chromex$ext$runtime$on_startup_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30589 = arguments.length;
var i__19488__auto___30590 = (0);
while(true){
if((i__19488__auto___30590 < len__19487__auto___30589)){
args__19494__auto__.push((arguments[i__19488__auto___30590]));

var G__30591 = (i__19488__auto___30590 + (1));
i__19488__auto___30590 = G__30591;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30586 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-startup","chromex.ext.runtime/on-startup",-1208972204),channel);
})();
var handler_fn_30587 = event_fn_30586;
var logging_fn__23751__auto__ = ((function (event_fn_30586,handler_fn_30587){
return (function (){
var config__23449__auto___30592 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30592))){
var logger__23450__auto___30593 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30592);
var prefix__23451__auto___30594 = ["event:","chrome.runtime.onStartup"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30593)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30592)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30593.apply(null,prefix__23451__auto___30594.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_30587.call(null);
});})(event_fn_30586,handler_fn_30587))
;
var ns_obj_30588 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30595 = config;
var api_check_fn__23454__auto___30596 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30595);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30596)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30595)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30596.call(null,"chrome.runtime.onStartup",ns_obj_30588,"onStartup");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30588,"onStartup");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_startup_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_startup_STAR_.cljs$lang$applyTo = (function (seq30583){
var G__30584 = cljs.core.first.call(null,seq30583);
var seq30583__$1 = cljs.core.next.call(null,seq30583);
var G__30585 = cljs.core.first.call(null,seq30583__$1);
var seq30583__$2 = cljs.core.next.call(null,seq30583__$1);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30584,G__30585,seq30583__$2);
});
chromex.ext.runtime.on_installed_STAR_ = (function chromex$ext$runtime$on_installed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30605 = arguments.length;
var i__19488__auto___30606 = (0);
while(true){
if((i__19488__auto___30606 < len__19487__auto___30605)){
args__19494__auto__.push((arguments[i__19488__auto___30606]));

var G__30607 = (i__19488__auto___30606 + (1));
i__19488__auto___30606 = G__30607;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30600 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-installed","chromex.ext.runtime/on-installed",1653814653),channel);
})();
var handler_fn_30601 = ((function (event_fn_30600){
return (function (cb_details_30603){
return event_fn_30600.call(null,cb_details_30603);
});})(event_fn_30600))
;
var logging_fn__23751__auto__ = ((function (event_fn_30600,handler_fn_30601){
return (function (cb_param_details_30604){
var config__23449__auto___30608 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30608))){
var logger__23450__auto___30609 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30608);
var prefix__23451__auto___30610 = ["event:","chrome.runtime.onInstalled"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30609)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30608)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30609.apply(null,prefix__23451__auto___30610.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_30604], null))));
} else {
}

return handler_fn_30601.call(null,cb_param_details_30604);
});})(event_fn_30600,handler_fn_30601))
;
var ns_obj_30602 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30611 = config;
var api_check_fn__23454__auto___30612 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30611);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30612)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30611)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30612.call(null,"chrome.runtime.onInstalled",ns_obj_30602,"onInstalled");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30602,"onInstalled");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_installed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_installed_STAR_.cljs$lang$applyTo = (function (seq30597){
var G__30598 = cljs.core.first.call(null,seq30597);
var seq30597__$1 = cljs.core.next.call(null,seq30597);
var G__30599 = cljs.core.first.call(null,seq30597__$1);
var seq30597__$2 = cljs.core.next.call(null,seq30597__$1);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30598,G__30599,seq30597__$2);
});
chromex.ext.runtime.on_suspend_STAR_ = (function chromex$ext$runtime$on_suspend_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30619 = arguments.length;
var i__19488__auto___30620 = (0);
while(true){
if((i__19488__auto___30620 < len__19487__auto___30619)){
args__19494__auto__.push((arguments[i__19488__auto___30620]));

var G__30621 = (i__19488__auto___30620 + (1));
i__19488__auto___30620 = G__30621;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30616 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend","chromex.ext.runtime/on-suspend",-1228920175),channel);
})();
var handler_fn_30617 = event_fn_30616;
var logging_fn__23751__auto__ = ((function (event_fn_30616,handler_fn_30617){
return (function (){
var config__23449__auto___30622 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30622))){
var logger__23450__auto___30623 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30622);
var prefix__23451__auto___30624 = ["event:","chrome.runtime.onSuspend"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30623)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30622)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30623.apply(null,prefix__23451__auto___30624.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_30617.call(null);
});})(event_fn_30616,handler_fn_30617))
;
var ns_obj_30618 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30625 = config;
var api_check_fn__23454__auto___30626 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30625);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30626)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30625)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30626.call(null,"chrome.runtime.onSuspend",ns_obj_30618,"onSuspend");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30618,"onSuspend");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$applyTo = (function (seq30613){
var G__30614 = cljs.core.first.call(null,seq30613);
var seq30613__$1 = cljs.core.next.call(null,seq30613);
var G__30615 = cljs.core.first.call(null,seq30613__$1);
var seq30613__$2 = cljs.core.next.call(null,seq30613__$1);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30614,G__30615,seq30613__$2);
});
chromex.ext.runtime.on_suspend_canceled_STAR_ = (function chromex$ext$runtime$on_suspend_canceled_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30633 = arguments.length;
var i__19488__auto___30634 = (0);
while(true){
if((i__19488__auto___30634 < len__19487__auto___30633)){
args__19494__auto__.push((arguments[i__19488__auto___30634]));

var G__30635 = (i__19488__auto___30634 + (1));
i__19488__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30630 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend-canceled","chromex.ext.runtime/on-suspend-canceled",-827432771),channel);
})();
var handler_fn_30631 = event_fn_30630;
var logging_fn__23751__auto__ = ((function (event_fn_30630,handler_fn_30631){
return (function (){
var config__23449__auto___30636 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30636))){
var logger__23450__auto___30637 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30636);
var prefix__23451__auto___30638 = ["event:","chrome.runtime.onSuspendCanceled"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30637)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30636)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30637.apply(null,prefix__23451__auto___30638.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_30631.call(null);
});})(event_fn_30630,handler_fn_30631))
;
var ns_obj_30632 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30639 = config;
var api_check_fn__23454__auto___30640 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30639);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30640)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30639)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30640.call(null,"chrome.runtime.onSuspendCanceled",ns_obj_30632,"onSuspendCanceled");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30632,"onSuspendCanceled");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$applyTo = (function (seq30627){
var G__30628 = cljs.core.first.call(null,seq30627);
var seq30627__$1 = cljs.core.next.call(null,seq30627);
var G__30629 = cljs.core.first.call(null,seq30627__$1);
var seq30627__$2 = cljs.core.next.call(null,seq30627__$1);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30628,G__30629,seq30627__$2);
});
chromex.ext.runtime.on_update_available_STAR_ = (function chromex$ext$runtime$on_update_available_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30649 = arguments.length;
var i__19488__auto___30650 = (0);
while(true){
if((i__19488__auto___30650 < len__19487__auto___30649)){
args__19494__auto__.push((arguments[i__19488__auto___30650]));

var G__30651 = (i__19488__auto___30650 + (1));
i__19488__auto___30650 = G__30651;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30644 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-update-available","chromex.ext.runtime/on-update-available",-1242137249),channel);
})();
var handler_fn_30645 = ((function (event_fn_30644){
return (function (cb_details_30647){
return event_fn_30644.call(null,cb_details_30647);
});})(event_fn_30644))
;
var logging_fn__23751__auto__ = ((function (event_fn_30644,handler_fn_30645){
return (function (cb_param_details_30648){
var config__23449__auto___30652 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30652))){
var logger__23450__auto___30653 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30652);
var prefix__23451__auto___30654 = ["event:","chrome.runtime.onUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30653)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30652)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30653.apply(null,prefix__23451__auto___30654.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_30648], null))));
} else {
}

return handler_fn_30645.call(null,cb_param_details_30648);
});})(event_fn_30644,handler_fn_30645))
;
var ns_obj_30646 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30655 = config;
var api_check_fn__23454__auto___30656 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30655);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30656)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30655)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30656.call(null,"chrome.runtime.onUpdateAvailable",ns_obj_30646,"onUpdateAvailable");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30646,"onUpdateAvailable");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$applyTo = (function (seq30641){
var G__30642 = cljs.core.first.call(null,seq30641);
var seq30641__$1 = cljs.core.next.call(null,seq30641);
var G__30643 = cljs.core.first.call(null,seq30641__$1);
var seq30641__$2 = cljs.core.next.call(null,seq30641__$1);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30642,G__30643,seq30641__$2);
});
chromex.ext.runtime.on_browser_update_available_STAR_ = (function chromex$ext$runtime$on_browser_update_available_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30663 = arguments.length;
var i__19488__auto___30664 = (0);
while(true){
if((i__19488__auto___30664 < len__19487__auto___30663)){
args__19494__auto__.push((arguments[i__19488__auto___30664]));

var G__30665 = (i__19488__auto___30664 + (1));
i__19488__auto___30664 = G__30665;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30660 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-browser-update-available","chromex.ext.runtime/on-browser-update-available",-2070315485),channel);
})();
var handler_fn_30661 = event_fn_30660;
var logging_fn__23751__auto__ = ((function (event_fn_30660,handler_fn_30661){
return (function (){
var config__23449__auto___30666 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30666))){
var logger__23450__auto___30667 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30666);
var prefix__23451__auto___30668 = ["event:","chrome.runtime.onBrowserUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30667)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30666)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30667.apply(null,prefix__23451__auto___30668.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_30661.call(null);
});})(event_fn_30660,handler_fn_30661))
;
var ns_obj_30662 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30669 = config;
var api_check_fn__23454__auto___30670 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30669);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30670)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30669)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30670.call(null,"chrome.runtime.onBrowserUpdateAvailable",ns_obj_30662,"onBrowserUpdateAvailable");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30662,"onBrowserUpdateAvailable");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$applyTo = (function (seq30657){
var G__30658 = cljs.core.first.call(null,seq30657);
var seq30657__$1 = cljs.core.next.call(null,seq30657);
var G__30659 = cljs.core.first.call(null,seq30657__$1);
var seq30657__$2 = cljs.core.next.call(null,seq30657__$1);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30658,G__30659,seq30657__$2);
});
chromex.ext.runtime.on_connect_STAR_ = (function chromex$ext$runtime$on_connect_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30679 = arguments.length;
var i__19488__auto___30680 = (0);
while(true){
if((i__19488__auto___30680 < len__19487__auto___30679)){
args__19494__auto__.push((arguments[i__19488__auto___30680]));

var G__30681 = (i__19488__auto___30680 + (1));
i__19488__auto___30680 = G__30681;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30674 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect","chromex.ext.runtime/on-connect",-693825711),channel);
})();
var handler_fn_30675 = ((function (event_fn_30674){
return (function (cb_port_30677){
return event_fn_30674.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_30677));
});})(event_fn_30674))
;
var logging_fn__23751__auto__ = ((function (event_fn_30674,handler_fn_30675){
return (function (cb_param_port_30678){
var config__23449__auto___30682 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30682))){
var logger__23450__auto___30683 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30682);
var prefix__23451__auto___30684 = ["event:","chrome.runtime.onConnect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30683)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30682)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30683.apply(null,prefix__23451__auto___30684.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_30678], null))));
} else {
}

return handler_fn_30675.call(null,cb_param_port_30678);
});})(event_fn_30674,handler_fn_30675))
;
var ns_obj_30676 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30685 = config;
var api_check_fn__23454__auto___30686 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30685);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30686)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30685)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30686.call(null,"chrome.runtime.onConnect",ns_obj_30676,"onConnect");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30676,"onConnect");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_connect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_STAR_.cljs$lang$applyTo = (function (seq30671){
var G__30672 = cljs.core.first.call(null,seq30671);
var seq30671__$1 = cljs.core.next.call(null,seq30671);
var G__30673 = cljs.core.first.call(null,seq30671__$1);
var seq30671__$2 = cljs.core.next.call(null,seq30671__$1);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30672,G__30673,seq30671__$2);
});
chromex.ext.runtime.on_connect_external_STAR_ = (function chromex$ext$runtime$on_connect_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30695 = arguments.length;
var i__19488__auto___30696 = (0);
while(true){
if((i__19488__auto___30696 < len__19487__auto___30695)){
args__19494__auto__.push((arguments[i__19488__auto___30696]));

var G__30697 = (i__19488__auto___30696 + (1));
i__19488__auto___30696 = G__30697;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30690 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect-external","chromex.ext.runtime/on-connect-external",-2057644994),channel);
})();
var handler_fn_30691 = ((function (event_fn_30690){
return (function (cb_port_30693){
return event_fn_30690.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_30693));
});})(event_fn_30690))
;
var logging_fn__23751__auto__ = ((function (event_fn_30690,handler_fn_30691){
return (function (cb_param_port_30694){
var config__23449__auto___30698 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30698))){
var logger__23450__auto___30699 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30698);
var prefix__23451__auto___30700 = ["event:","chrome.runtime.onConnectExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30699)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30698)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30699.apply(null,prefix__23451__auto___30700.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_30694], null))));
} else {
}

return handler_fn_30691.call(null,cb_param_port_30694);
});})(event_fn_30690,handler_fn_30691))
;
var ns_obj_30692 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30701 = config;
var api_check_fn__23454__auto___30702 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30701);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30702)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30701)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30702.call(null,"chrome.runtime.onConnectExternal",ns_obj_30692,"onConnectExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30692,"onConnectExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$applyTo = (function (seq30687){
var G__30688 = cljs.core.first.call(null,seq30687);
var seq30687__$1 = cljs.core.next.call(null,seq30687);
var G__30689 = cljs.core.first.call(null,seq30687__$1);
var seq30687__$2 = cljs.core.next.call(null,seq30687__$1);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30688,G__30689,seq30687__$2);
});
chromex.ext.runtime.on_message_STAR_ = (function chromex$ext$runtime$on_message_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30715 = arguments.length;
var i__19488__auto___30716 = (0);
while(true){
if((i__19488__auto___30716 < len__19487__auto___30715)){
args__19494__auto__.push((arguments[i__19488__auto___30716]));

var G__30717 = (i__19488__auto___30716 + (1));
i__19488__auto___30716 = G__30717;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30706 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message","chromex.ext.runtime/on-message",2147364293),channel);
})();
var handler_fn_30707 = ((function (event_fn_30706){
return (function (cb_message_30709,cb_sender_30710,cb_send_response_30711){
return event_fn_30706.call(null,cb_message_30709,cb_sender_30710,cb_send_response_30711);
});})(event_fn_30706))
;
var logging_fn__23751__auto__ = ((function (event_fn_30706,handler_fn_30707){
return (function (cb_param_message_30712,cb_param_sender_30713,cb_param_send_response_30714){
var config__23449__auto___30718 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30718))){
var logger__23450__auto___30719 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30718);
var prefix__23451__auto___30720 = ["event:","chrome.runtime.onMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30719)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30718)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30719.apply(null,prefix__23451__auto___30720.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_30712,cb_param_sender_30713,cb_param_send_response_30714], null))));
} else {
}

return handler_fn_30707.call(null,cb_param_message_30712,cb_param_sender_30713,cb_param_send_response_30714);
});})(event_fn_30706,handler_fn_30707))
;
var ns_obj_30708 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30721 = config;
var api_check_fn__23454__auto___30722 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30721);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30722)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30721)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30722.call(null,"chrome.runtime.onMessage",ns_obj_30708,"onMessage");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30708,"onMessage");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_message_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_STAR_.cljs$lang$applyTo = (function (seq30703){
var G__30704 = cljs.core.first.call(null,seq30703);
var seq30703__$1 = cljs.core.next.call(null,seq30703);
var G__30705 = cljs.core.first.call(null,seq30703__$1);
var seq30703__$2 = cljs.core.next.call(null,seq30703__$1);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30704,G__30705,seq30703__$2);
});
chromex.ext.runtime.on_message_external_STAR_ = (function chromex$ext$runtime$on_message_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30735 = arguments.length;
var i__19488__auto___30736 = (0);
while(true){
if((i__19488__auto___30736 < len__19487__auto___30735)){
args__19494__auto__.push((arguments[i__19488__auto___30736]));

var G__30737 = (i__19488__auto___30736 + (1));
i__19488__auto___30736 = G__30737;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30726 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message-external","chromex.ext.runtime/on-message-external",-779703990),channel);
})();
var handler_fn_30727 = ((function (event_fn_30726){
return (function (cb_message_30729,cb_sender_30730,cb_send_response_30731){
return event_fn_30726.call(null,cb_message_30729,cb_sender_30730,cb_send_response_30731);
});})(event_fn_30726))
;
var logging_fn__23751__auto__ = ((function (event_fn_30726,handler_fn_30727){
return (function (cb_param_message_30732,cb_param_sender_30733,cb_param_send_response_30734){
var config__23449__auto___30738 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30738))){
var logger__23450__auto___30739 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30738);
var prefix__23451__auto___30740 = ["event:","chrome.runtime.onMessageExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30739)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30738)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30739.apply(null,prefix__23451__auto___30740.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_30732,cb_param_sender_30733,cb_param_send_response_30734], null))));
} else {
}

return handler_fn_30727.call(null,cb_param_message_30732,cb_param_sender_30733,cb_param_send_response_30734);
});})(event_fn_30726,handler_fn_30727))
;
var ns_obj_30728 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30741 = config;
var api_check_fn__23454__auto___30742 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30741);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30742)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30741)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30742.call(null,"chrome.runtime.onMessageExternal",ns_obj_30728,"onMessageExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30728,"onMessageExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$applyTo = (function (seq30723){
var G__30724 = cljs.core.first.call(null,seq30723);
var seq30723__$1 = cljs.core.next.call(null,seq30723);
var G__30725 = cljs.core.first.call(null,seq30723__$1);
var seq30723__$2 = cljs.core.next.call(null,seq30723__$1);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30724,G__30725,seq30723__$2);
});
chromex.ext.runtime.on_restart_required_STAR_ = (function chromex$ext$runtime$on_restart_required_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30751 = arguments.length;
var i__19488__auto___30752 = (0);
while(true){
if((i__19488__auto___30752 < len__19487__auto___30751)){
args__19494__auto__.push((arguments[i__19488__auto___30752]));

var G__30753 = (i__19488__auto___30752 + (1));
i__19488__auto___30752 = G__30753;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_30746 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-restart-required","chromex.ext.runtime/on-restart-required",-754128621),channel);
})();
var handler_fn_30747 = ((function (event_fn_30746){
return (function (cb_reason_30749){
return event_fn_30746.call(null,cb_reason_30749);
});})(event_fn_30746))
;
var logging_fn__23751__auto__ = ((function (event_fn_30746,handler_fn_30747){
return (function (cb_param_reason_30750){
var config__23449__auto___30754 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30754))){
var logger__23450__auto___30755 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___30754);
var prefix__23451__auto___30756 = ["event:","chrome.runtime.onRestartRequired"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___30755)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___30754)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___30755.apply(null,prefix__23451__auto___30756.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_reason_30750], null))));
} else {
}

return handler_fn_30747.call(null,cb_param_reason_30750);
});})(event_fn_30746,handler_fn_30747))
;
var ns_obj_30748 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___30757 = config;
var api_check_fn__23454__auto___30758 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___30757);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___30758)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___30757)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___30758.call(null,"chrome.runtime.onRestartRequired",ns_obj_30748,"onRestartRequired");

var event_obj__23752__auto__ = goog.object.get(ns_obj_30748,"onRestartRequired");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$applyTo = (function (seq30743){
var G__30744 = cljs.core.first.call(null,seq30743);
var seq30743__$1 = cljs.core.next.call(null,seq30743);
var G__30745 = cljs.core.first.call(null,seq30743__$1);
var seq30743__$2 = cljs.core.next.call(null,seq30743__$1);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30744,G__30745,seq30743__$2);
});

//# sourceMappingURL=runtime.js.map