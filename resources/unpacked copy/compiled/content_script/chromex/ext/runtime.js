// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.runtime');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.runtime.last_error_STAR_ = (function chromex$ext$runtime$last_error_STAR_(config){
var result_12280 = (function (){var final_args_array_12281 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.lastError");
var ns_12282 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();

var config__8788__auto___12284 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12284))){
var logger__8789__auto___12285 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12284);
var prefix__8790__auto___12286 = ["accessing:","chrome.runtime.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12285)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12284)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12285.apply(null,prefix__8790__auto___12286.concat(final_args_array_12281));
} else {
}

var target_12283 = goog.object.get(ns_12282,"lastError");
return target_12283;
})();
return result_12280;
});
chromex.ext.runtime.id_STAR_ = (function chromex$ext$runtime$id_STAR_(config){
var result_12291 = (function (){var final_args_array_12292 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.id");
var ns_12293 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();

var config__8788__auto___12295 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12295))){
var logger__8789__auto___12296 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12295);
var prefix__8790__auto___12297 = ["accessing:","chrome.runtime.id"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12296)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12295)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12296.apply(null,prefix__8790__auto___12297.concat(final_args_array_12292));
} else {
}

var target_12294 = goog.object.get(ns_12293,"id");
return target_12294;
})();
return result_12291;
});
chromex.ext.runtime.get_background_page_STAR_ = (function chromex$ext$runtime$get_background_page_STAR_(config){
var callback_chan_12337 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_callback_12339_12353 = ((function (callback_chan_12337){
return (function (cb_background_page_12343){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-background-page","chromex.ext.runtime/get-background-page",2138227095),new cljs.core.Keyword(null,"name","name",1843675177),"getBackgroundPage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"background-page",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_12337);
})().call(null,cb_background_page_12343);
});})(callback_chan_12337))
;
var result_12338_12354 = (function (){var final_args_array_12340 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_12339_12353,"callback",null], null)], null),"chrome.runtime.getBackgroundPage");
var ns_12341 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12381 = config;
var api_check_fn__8793__auto___12382 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12381);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12382)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12381)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12382.call(null,"chrome.runtime.getBackgroundPage",ns_12341,"getBackgroundPage");

var config__8788__auto___12383 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12383))){
var logger__8789__auto___12384 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12383);
var prefix__8790__auto___12385 = ["calling:","chrome.runtime.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12384)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12383)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12384.apply(null,prefix__8790__auto___12385.concat(final_args_array_12340));
} else {
}

var target_12342 = goog.object.get(ns_12341,"getBackgroundPage");
return target_12342.apply(ns_12341,final_args_array_12340);
})();

return callback_chan_12337;
});
chromex.ext.runtime.open_options_page_STAR_ = (function chromex$ext$runtime$open_options_page_STAR_(config){
var callback_chan_12393 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_callback_12395_12403 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","open-options-page","chromex.ext.runtime/open-options-page",-236868215),new cljs.core.Keyword(null,"name","name",1843675177),"openOptionsPage",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_12393);
})();
var result_12394_12404 = (function (){var final_args_array_12396 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_12395_12403,"callback",true], null)], null),"chrome.runtime.openOptionsPage");
var ns_12397 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12408 = config;
var api_check_fn__8793__auto___12409 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12408);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12409)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12408)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12409.call(null,"chrome.runtime.openOptionsPage",ns_12397,"openOptionsPage");

var config__8788__auto___12410 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12410))){
var logger__8789__auto___12411 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12410);
var prefix__8790__auto___12412 = ["calling:","chrome.runtime.openOptionsPage"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12411)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12410)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12411.apply(null,prefix__8790__auto___12412.concat(final_args_array_12396));
} else {
}

var target_12398 = goog.object.get(ns_12397,"openOptionsPage");
return target_12398.apply(ns_12397,final_args_array_12396);
})();

return callback_chan_12393;
});
chromex.ext.runtime.get_manifest_STAR_ = (function chromex$ext$runtime$get_manifest_STAR_(config){
var result_12426 = (function (){var final_args_array_12427 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.getManifest");
var ns_12428 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12430 = config;
var api_check_fn__8793__auto___12431 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12430);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12431)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12430)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12431.call(null,"chrome.runtime.getManifest",ns_12428,"getManifest");

var config__8788__auto___12435 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12435))){
var logger__8789__auto___12436 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12435);
var prefix__8790__auto___12437 = ["calling:","chrome.runtime.getManifest"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12436)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12435)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12436.apply(null,prefix__8790__auto___12437.concat(final_args_array_12427));
} else {
}

var target_12429 = goog.object.get(ns_12428,"getManifest");
return target_12429.apply(ns_12428,final_args_array_12427);
})();
return result_12426;
});
chromex.ext.runtime.get_url_STAR_ = (function chromex$ext$runtime$get_url_STAR_(config,path){
var marshalled_path_12460 = (function (){var omit_test_12464 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12464,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12464;
}
})();
var result_12459 = (function (){var final_args_array_12461 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_12460,"path",null], null)], null),"chrome.runtime.getURL");
var ns_12462 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12486 = config;
var api_check_fn__8793__auto___12487 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12486);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12487)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12486)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12487.call(null,"chrome.runtime.getURL",ns_12462,"getURL");

var config__8788__auto___12509 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12509))){
var logger__8789__auto___12510 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12509);
var prefix__8790__auto___12511 = ["calling:","chrome.runtime.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12510)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12509)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12510.apply(null,prefix__8790__auto___12511.concat(final_args_array_12461));
} else {
}

var target_12463 = goog.object.get(ns_12462,"getURL");
return target_12463.apply(ns_12462,final_args_array_12461);
})();
return result_12459;
});
chromex.ext.runtime.set_uninstall_url_STAR_ = (function chromex$ext$runtime$set_uninstall_url_STAR_(config,url){
var callback_chan_12523 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_url_12525_12531 = (function (){var omit_test_12530 = url;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12530,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12530;
}
})();
var marshalled_callback_12526_12532 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","set-uninstall-url","chromex.ext.runtime/set-uninstall-url",-1010845784),new cljs.core.Keyword(null,"name","name",1843675177),"setUninstallURL",new cljs.core.Keyword(null,"since","since",315379842),"41",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_12523);
})();
var result_12524_12533 = (function (){var final_args_array_12527 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_url_12525_12531,"url",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_12526_12532,"callback",true], null)], null),"chrome.runtime.setUninstallURL");
var ns_12528 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12569 = config;
var api_check_fn__8793__auto___12570 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12569);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12570)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12569)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12570.call(null,"chrome.runtime.setUninstallURL",ns_12528,"setUninstallURL");

var config__8788__auto___12576 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12576))){
var logger__8789__auto___12581 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12576);
var prefix__8790__auto___12582 = ["calling:","chrome.runtime.setUninstallURL"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12581)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12576)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12581.apply(null,prefix__8790__auto___12582.concat(final_args_array_12527));
} else {
}

var target_12529 = goog.object.get(ns_12528,"setUninstallURL");
return target_12529.apply(ns_12528,final_args_array_12527);
})();

return callback_chan_12523;
});
chromex.ext.runtime.reload_STAR_ = (function chromex$ext$runtime$reload_STAR_(config){
var result_12599 = (function (){var final_args_array_12600 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.reload");
var ns_12601 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12603 = config;
var api_check_fn__8793__auto___12604 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12603);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12604)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12603)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12604.call(null,"chrome.runtime.reload",ns_12601,"reload");

var config__8788__auto___12605 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12605))){
var logger__8789__auto___12606 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12605);
var prefix__8790__auto___12607 = ["calling:","chrome.runtime.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12606)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12605)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12606.apply(null,prefix__8790__auto___12607.concat(final_args_array_12600));
} else {
}

var target_12602 = goog.object.get(ns_12601,"reload");
return target_12602.apply(ns_12601,final_args_array_12600);
})();
return result_12599;
});
chromex.ext.runtime.request_update_check_STAR_ = (function chromex$ext$runtime$request_update_check_STAR_(config){
var callback_chan_12616 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_callback_12618_12665 = ((function (callback_chan_12616){
return (function (cb_status_12622,cb_details_12623){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","request-update-check","chromex.ext.runtime/request-update-check",-1504783873),new cljs.core.Keyword(null,"name","name",1843675177),"requestUpdateCheck",new cljs.core.Keyword(null,"since","since",315379842),"25",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"status",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.RequestUpdateCheckStatus"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_12616);
})().call(null,cb_status_12622,cb_details_12623);
});})(callback_chan_12616))
;
var result_12617_12666 = (function (){var final_args_array_12619 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_12618_12665,"callback",null], null)], null),"chrome.runtime.requestUpdateCheck");
var ns_12620 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12684 = config;
var api_check_fn__8793__auto___12685 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12684);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12685)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12684)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12685.call(null,"chrome.runtime.requestUpdateCheck",ns_12620,"requestUpdateCheck");

var config__8788__auto___12686 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12686))){
var logger__8789__auto___12687 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12686);
var prefix__8790__auto___12688 = ["calling:","chrome.runtime.requestUpdateCheck"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12687)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12686)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12687.apply(null,prefix__8790__auto___12688.concat(final_args_array_12619));
} else {
}

var target_12621 = goog.object.get(ns_12620,"requestUpdateCheck");
return target_12621.apply(ns_12620,final_args_array_12619);
})();

return callback_chan_12616;
});
chromex.ext.runtime.restart_STAR_ = (function chromex$ext$runtime$restart_STAR_(config){
var result_12693 = (function (){var final_args_array_12694 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.restart");
var ns_12695 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12697 = config;
var api_check_fn__8793__auto___12698 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12697);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12698)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12697)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12698.call(null,"chrome.runtime.restart",ns_12695,"restart");

var config__8788__auto___12699 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12699))){
var logger__8789__auto___12700 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12699);
var prefix__8790__auto___12701 = ["calling:","chrome.runtime.restart"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12700)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12699)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12700.apply(null,prefix__8790__auto___12701.concat(final_args_array_12694));
} else {
}

var target_12696 = goog.object.get(ns_12695,"restart");
return target_12696.apply(ns_12695,final_args_array_12694);
})();
return result_12693;
});
chromex.ext.runtime.connect_STAR_ = (function chromex$ext$runtime$connect_STAR_(config,extension_id,connect_info){
var marshalled_extension_id_12758 = (function (){var omit_test_12763 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12763,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12763;
}
})();
var marshalled_connect_info_12759 = (function (){var omit_test_12764 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12764,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12764;
}
})();
var result_12757 = (function (){var final_args_array_12760 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_12758,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_12759,"connect-info",true], null)], null),"chrome.runtime.connect");
var ns_12761 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12768 = config;
var api_check_fn__8793__auto___12769 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12768);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12769)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12768)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12769.call(null,"chrome.runtime.connect",ns_12761,"connect");

var config__8788__auto___12771 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12771))){
var logger__8789__auto___12772 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12771);
var prefix__8790__auto___12773 = ["calling:","chrome.runtime.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12772)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12771)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12772.apply(null,prefix__8790__auto___12773.concat(final_args_array_12760));
} else {
}

var target_12762 = goog.object.get(ns_12761,"connect");
return target_12762.apply(ns_12761,final_args_array_12760);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_12757);
});
chromex.ext.runtime.connect_native_STAR_ = (function chromex$ext$runtime$connect_native_STAR_(config,application){
var marshalled_application_12787 = (function (){var omit_test_12791 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12791,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12791;
}
})();
var result_12786 = (function (){var final_args_array_12788 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_12787,"application",null], null)], null),"chrome.runtime.connectNative");
var ns_12789 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12836 = config;
var api_check_fn__8793__auto___12837 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12836);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12837)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12836)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12837.call(null,"chrome.runtime.connectNative",ns_12789,"connectNative");

var config__8788__auto___12852 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12852))){
var logger__8789__auto___12853 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12852);
var prefix__8790__auto___12854 = ["calling:","chrome.runtime.connectNative"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12853)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12852)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12853.apply(null,prefix__8790__auto___12854.concat(final_args_array_12788));
} else {
}

var target_12790 = goog.object.get(ns_12789,"connectNative");
return target_12790.apply(ns_12789,final_args_array_12788);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_12786);
});
chromex.ext.runtime.send_message_STAR_ = (function chromex$ext$runtime$send_message_STAR_(config,extension_id,message,options){
var callback_chan_12868 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_extension_id_12870_12881 = (function (){var omit_test_12877 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12877,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12877;
}
})();
var marshalled_message_12871_12882 = (function (){var omit_test_12878 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12878,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12878;
}
})();
var marshalled_options_12872_12883 = (function (){var omit_test_12879 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_12879,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_12879;
}
})();
var marshalled_response_callback_12873_12884 = ((function (marshalled_extension_id_12870_12881,marshalled_message_12871_12882,marshalled_options_12872_12883,callback_chan_12868){
return (function (cb_response_12880){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-message","chromex.ext.runtime/send-message",-500803608),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"26",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_12868);
})().call(null,cb_response_12880);
});})(marshalled_extension_id_12870_12881,marshalled_message_12871_12882,marshalled_options_12872_12883,callback_chan_12868))
;
var result_12869_12885 = (function (){var final_args_array_12874 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_12870_12881,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_12871_12882,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_12872_12883,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_12873_12884,"response-callback",true], null)], null),"chrome.runtime.sendMessage");
var ns_12875 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___12979 = config;
var api_check_fn__8793__auto___12980 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___12979);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___12980)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___12979)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___12980.call(null,"chrome.runtime.sendMessage",ns_12875,"sendMessage");

var config__8788__auto___12981 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12981))){
var logger__8789__auto___12982 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___12981);
var prefix__8790__auto___12983 = ["calling:","chrome.runtime.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___12982)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___12981)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___12982.apply(null,prefix__8790__auto___12983.concat(final_args_array_12874));
} else {
}

var target_12876 = goog.object.get(ns_12875,"sendMessage");
return target_12876.apply(ns_12875,final_args_array_12874);
})();

return callback_chan_12868;
});
chromex.ext.runtime.send_native_message_STAR_ = (function chromex$ext$runtime$send_native_message_STAR_(config,application,message){
var callback_chan_12999 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_application_13001_13089 = (function (){var omit_test_13007 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_13007,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_13007;
}
})();
var marshalled_message_13002_13090 = (function (){var omit_test_13008 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_13008,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_13008;
}
})();
var marshalled_response_callback_13003_13091 = ((function (marshalled_application_13001_13089,marshalled_message_13002_13090,callback_chan_12999){
return (function (cb_response_13009){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-native-message","chromex.ext.runtime/send-native-message",-489769559),new cljs.core.Keyword(null,"name","name",1843675177),"sendNativeMessage",new cljs.core.Keyword(null,"since","since",315379842),"28",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"application",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_12999);
})().call(null,cb_response_13009);
});})(marshalled_application_13001_13089,marshalled_message_13002_13090,callback_chan_12999))
;
var result_13000_13092 = (function (){var final_args_array_13004 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_13001_13089,"application",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_13002_13090,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_13003_13091,"response-callback",true], null)], null),"chrome.runtime.sendNativeMessage");
var ns_13005 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13093 = config;
var api_check_fn__8793__auto___13094 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13093);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13094)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13093)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13094.call(null,"chrome.runtime.sendNativeMessage",ns_13005,"sendNativeMessage");

var config__8788__auto___13099 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13099))){
var logger__8789__auto___13100 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13099);
var prefix__8790__auto___13101 = ["calling:","chrome.runtime.sendNativeMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13100)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13099)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13100.apply(null,prefix__8790__auto___13101.concat(final_args_array_13004));
} else {
}

var target_13006 = goog.object.get(ns_13005,"sendNativeMessage");
return target_13006.apply(ns_13005,final_args_array_13004);
})();

return callback_chan_12999;
});
chromex.ext.runtime.get_platform_info_STAR_ = (function chromex$ext$runtime$get_platform_info_STAR_(config){
var callback_chan_13132 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_callback_13134_13209 = ((function (callback_chan_13132){
return (function (cb_platform_info_13138){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-platform-info","chromex.ext.runtime/get-platform-info",573309082),new cljs.core.Keyword(null,"name","name",1843675177),"getPlatformInfo",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"platform-info",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.PlatformInfo"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_13132);
})().call(null,cb_platform_info_13138);
});})(callback_chan_13132))
;
var result_13133_13210 = (function (){var final_args_array_13135 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_13134_13209,"callback",null], null)], null),"chrome.runtime.getPlatformInfo");
var ns_13136 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13213 = config;
var api_check_fn__8793__auto___13214 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13213);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13214)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13213)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13214.call(null,"chrome.runtime.getPlatformInfo",ns_13136,"getPlatformInfo");

var config__8788__auto___13215 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13215))){
var logger__8789__auto___13216 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13215);
var prefix__8790__auto___13217 = ["calling:","chrome.runtime.getPlatformInfo"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13216)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13215)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13216.apply(null,prefix__8790__auto___13217.concat(final_args_array_13135));
} else {
}

var target_13137 = goog.object.get(ns_13136,"getPlatformInfo");
return target_13137.apply(ns_13136,final_args_array_13135);
})();

return callback_chan_13132;
});
chromex.ext.runtime.get_package_directory_entry_STAR_ = (function chromex$ext$runtime$get_package_directory_entry_STAR_(config){
var callback_chan_13226 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_callback_13228_13236 = ((function (callback_chan_13226){
return (function (cb_directory_entry_13232){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-package-directory-entry","chromex.ext.runtime/get-package-directory-entry",-1404865573),new cljs.core.Keyword(null,"name","name",1843675177),"getPackageDirectoryEntry",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"directory-entry",new cljs.core.Keyword(null,"type","type",1174270348),"DirectoryEntry"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_13226);
})().call(null,cb_directory_entry_13232);
});})(callback_chan_13226))
;
var result_13227_13237 = (function (){var final_args_array_13229 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_13228_13236,"callback",null], null)], null),"chrome.runtime.getPackageDirectoryEntry");
var ns_13230 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13242 = config;
var api_check_fn__8793__auto___13243 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13242);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13243)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13242)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13243.call(null,"chrome.runtime.getPackageDirectoryEntry",ns_13230,"getPackageDirectoryEntry");

var config__8788__auto___13244 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13244))){
var logger__8789__auto___13246 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13244);
var prefix__8790__auto___13247 = ["calling:","chrome.runtime.getPackageDirectoryEntry"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13246)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13244)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13246.apply(null,prefix__8790__auto___13247.concat(final_args_array_13229));
} else {
}

var target_13231 = goog.object.get(ns_13230,"getPackageDirectoryEntry");
return target_13231.apply(ns_13230,final_args_array_13229);
})();

return callback_chan_13226;
});
chromex.ext.runtime.on_startup_STAR_ = (function chromex$ext$runtime$on_startup_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13301 = arguments.length;
var i__7279__auto___13302 = (0);
while(true){
if((i__7279__auto___13302 < len__7278__auto___13301)){
args__7285__auto__.push((arguments[i__7279__auto___13302]));

var G__13303 = (i__7279__auto___13302 + (1));
i__7279__auto___13302 = G__13303;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13251 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-startup","chromex.ext.runtime/on-startup",-1208972204),channel);
})();
var handler_fn_13252 = event_fn_13251;
var logging_fn__12038__auto__ = ((function (event_fn_13251,handler_fn_13252){
return (function (){
var config__8788__auto___13304 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13304))){
var logger__8789__auto___13305 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13304);
var prefix__8790__auto___13306 = ["event:","chrome.runtime.onStartup"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13305)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13304)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13305.apply(null,prefix__8790__auto___13306.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_13252.call(null);
});})(event_fn_13251,handler_fn_13252))
;
var ns_obj_13253 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13307 = config;
var api_check_fn__8793__auto___13308 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13307);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13308)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13307)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13308.call(null,"chrome.runtime.onStartup",ns_obj_13253,"onStartup");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13253,"onStartup");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_startup_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_startup_STAR_.cljs$lang$applyTo = (function (seq13248){
var G__13249 = cljs.core.first.call(null,seq13248);
var seq13248__$1 = cljs.core.next.call(null,seq13248);
var G__13250 = cljs.core.first.call(null,seq13248__$1);
var seq13248__$2 = cljs.core.next.call(null,seq13248__$1);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13249,G__13250,seq13248__$2);
});
chromex.ext.runtime.on_installed_STAR_ = (function chromex$ext$runtime$on_installed_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13317 = arguments.length;
var i__7279__auto___13318 = (0);
while(true){
if((i__7279__auto___13318 < len__7278__auto___13317)){
args__7285__auto__.push((arguments[i__7279__auto___13318]));

var G__13319 = (i__7279__auto___13318 + (1));
i__7279__auto___13318 = G__13319;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13312 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-installed","chromex.ext.runtime/on-installed",1653814653),channel);
})();
var handler_fn_13313 = ((function (event_fn_13312){
return (function (cb_details_13315){
return event_fn_13312.call(null,cb_details_13315);
});})(event_fn_13312))
;
var logging_fn__12038__auto__ = ((function (event_fn_13312,handler_fn_13313){
return (function (cb_param_details_13316){
var config__8788__auto___13320 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13320))){
var logger__8789__auto___13321 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13320);
var prefix__8790__auto___13322 = ["event:","chrome.runtime.onInstalled"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13321)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13320)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13321.apply(null,prefix__8790__auto___13322.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_13316], null))));
} else {
}

return handler_fn_13313.call(null,cb_param_details_13316);
});})(event_fn_13312,handler_fn_13313))
;
var ns_obj_13314 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13323 = config;
var api_check_fn__8793__auto___13324 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13323);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13324)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13323)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13324.call(null,"chrome.runtime.onInstalled",ns_obj_13314,"onInstalled");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13314,"onInstalled");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_installed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_installed_STAR_.cljs$lang$applyTo = (function (seq13309){
var G__13310 = cljs.core.first.call(null,seq13309);
var seq13309__$1 = cljs.core.next.call(null,seq13309);
var G__13311 = cljs.core.first.call(null,seq13309__$1);
var seq13309__$2 = cljs.core.next.call(null,seq13309__$1);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13310,G__13311,seq13309__$2);
});
chromex.ext.runtime.on_suspend_STAR_ = (function chromex$ext$runtime$on_suspend_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13331 = arguments.length;
var i__7279__auto___13332 = (0);
while(true){
if((i__7279__auto___13332 < len__7278__auto___13331)){
args__7285__auto__.push((arguments[i__7279__auto___13332]));

var G__13333 = (i__7279__auto___13332 + (1));
i__7279__auto___13332 = G__13333;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13328 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend","chromex.ext.runtime/on-suspend",-1228920175),channel);
})();
var handler_fn_13329 = event_fn_13328;
var logging_fn__12038__auto__ = ((function (event_fn_13328,handler_fn_13329){
return (function (){
var config__8788__auto___13334 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13334))){
var logger__8789__auto___13335 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13334);
var prefix__8790__auto___13336 = ["event:","chrome.runtime.onSuspend"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13335)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13334)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13335.apply(null,prefix__8790__auto___13336.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_13329.call(null);
});})(event_fn_13328,handler_fn_13329))
;
var ns_obj_13330 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13337 = config;
var api_check_fn__8793__auto___13338 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13337);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13338)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13337)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13338.call(null,"chrome.runtime.onSuspend",ns_obj_13330,"onSuspend");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13330,"onSuspend");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$applyTo = (function (seq13325){
var G__13326 = cljs.core.first.call(null,seq13325);
var seq13325__$1 = cljs.core.next.call(null,seq13325);
var G__13327 = cljs.core.first.call(null,seq13325__$1);
var seq13325__$2 = cljs.core.next.call(null,seq13325__$1);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13326,G__13327,seq13325__$2);
});
chromex.ext.runtime.on_suspend_canceled_STAR_ = (function chromex$ext$runtime$on_suspend_canceled_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13435 = arguments.length;
var i__7279__auto___13436 = (0);
while(true){
if((i__7279__auto___13436 < len__7278__auto___13435)){
args__7285__auto__.push((arguments[i__7279__auto___13436]));

var G__13437 = (i__7279__auto___13436 + (1));
i__7279__auto___13436 = G__13437;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13416 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend-canceled","chromex.ext.runtime/on-suspend-canceled",-827432771),channel);
})();
var handler_fn_13417 = event_fn_13416;
var logging_fn__12038__auto__ = ((function (event_fn_13416,handler_fn_13417){
return (function (){
var config__8788__auto___13471 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13471))){
var logger__8789__auto___13474 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13471);
var prefix__8790__auto___13475 = ["event:","chrome.runtime.onSuspendCanceled"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13474)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13471)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13474.apply(null,prefix__8790__auto___13475.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_13417.call(null);
});})(event_fn_13416,handler_fn_13417))
;
var ns_obj_13418 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13511 = config;
var api_check_fn__8793__auto___13512 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13511);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13512)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13511)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13512.call(null,"chrome.runtime.onSuspendCanceled",ns_obj_13418,"onSuspendCanceled");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13418,"onSuspendCanceled");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$applyTo = (function (seq13339){
var G__13340 = cljs.core.first.call(null,seq13339);
var seq13339__$1 = cljs.core.next.call(null,seq13339);
var G__13341 = cljs.core.first.call(null,seq13339__$1);
var seq13339__$2 = cljs.core.next.call(null,seq13339__$1);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13340,G__13341,seq13339__$2);
});
chromex.ext.runtime.on_update_available_STAR_ = (function chromex$ext$runtime$on_update_available_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13589 = arguments.length;
var i__7279__auto___13590 = (0);
while(true){
if((i__7279__auto___13590 < len__7278__auto___13589)){
args__7285__auto__.push((arguments[i__7279__auto___13590]));

var G__13591 = (i__7279__auto___13590 + (1));
i__7279__auto___13590 = G__13591;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13584 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-update-available","chromex.ext.runtime/on-update-available",-1242137249),channel);
})();
var handler_fn_13585 = ((function (event_fn_13584){
return (function (cb_details_13587){
return event_fn_13584.call(null,cb_details_13587);
});})(event_fn_13584))
;
var logging_fn__12038__auto__ = ((function (event_fn_13584,handler_fn_13585){
return (function (cb_param_details_13588){
var config__8788__auto___13592 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13592))){
var logger__8789__auto___13593 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13592);
var prefix__8790__auto___13594 = ["event:","chrome.runtime.onUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13593)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13592)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13593.apply(null,prefix__8790__auto___13594.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_13588], null))));
} else {
}

return handler_fn_13585.call(null,cb_param_details_13588);
});})(event_fn_13584,handler_fn_13585))
;
var ns_obj_13586 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13607 = config;
var api_check_fn__8793__auto___13608 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13607);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13608)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13607)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13608.call(null,"chrome.runtime.onUpdateAvailable",ns_obj_13586,"onUpdateAvailable");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13586,"onUpdateAvailable");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$applyTo = (function (seq13581){
var G__13582 = cljs.core.first.call(null,seq13581);
var seq13581__$1 = cljs.core.next.call(null,seq13581);
var G__13583 = cljs.core.first.call(null,seq13581__$1);
var seq13581__$2 = cljs.core.next.call(null,seq13581__$1);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13582,G__13583,seq13581__$2);
});
chromex.ext.runtime.on_browser_update_available_STAR_ = (function chromex$ext$runtime$on_browser_update_available_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13668 = arguments.length;
var i__7279__auto___13669 = (0);
while(true){
if((i__7279__auto___13669 < len__7278__auto___13668)){
args__7285__auto__.push((arguments[i__7279__auto___13669]));

var G__13671 = (i__7279__auto___13669 + (1));
i__7279__auto___13669 = G__13671;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13665 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-browser-update-available","chromex.ext.runtime/on-browser-update-available",-2070315485),channel);
})();
var handler_fn_13666 = event_fn_13665;
var logging_fn__12038__auto__ = ((function (event_fn_13665,handler_fn_13666){
return (function (){
var config__8788__auto___13673 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13673))){
var logger__8789__auto___13674 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13673);
var prefix__8790__auto___13675 = ["event:","chrome.runtime.onBrowserUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13674)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13673)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13674.apply(null,prefix__8790__auto___13675.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_13666.call(null);
});})(event_fn_13665,handler_fn_13666))
;
var ns_obj_13667 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13676 = config;
var api_check_fn__8793__auto___13677 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13676);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13677)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13676)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13677.call(null,"chrome.runtime.onBrowserUpdateAvailable",ns_obj_13667,"onBrowserUpdateAvailable");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13667,"onBrowserUpdateAvailable");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$applyTo = (function (seq13662){
var G__13663 = cljs.core.first.call(null,seq13662);
var seq13662__$1 = cljs.core.next.call(null,seq13662);
var G__13664 = cljs.core.first.call(null,seq13662__$1);
var seq13662__$2 = cljs.core.next.call(null,seq13662__$1);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13663,G__13664,seq13662__$2);
});
chromex.ext.runtime.on_connect_STAR_ = (function chromex$ext$runtime$on_connect_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13689 = arguments.length;
var i__7279__auto___13690 = (0);
while(true){
if((i__7279__auto___13690 < len__7278__auto___13689)){
args__7285__auto__.push((arguments[i__7279__auto___13690]));

var G__13691 = (i__7279__auto___13690 + (1));
i__7279__auto___13690 = G__13691;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13684 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect","chromex.ext.runtime/on-connect",-693825711),channel);
})();
var handler_fn_13685 = ((function (event_fn_13684){
return (function (cb_port_13687){
return event_fn_13684.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_13687));
});})(event_fn_13684))
;
var logging_fn__12038__auto__ = ((function (event_fn_13684,handler_fn_13685){
return (function (cb_param_port_13688){
var config__8788__auto___13692 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13692))){
var logger__8789__auto___13693 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13692);
var prefix__8790__auto___13694 = ["event:","chrome.runtime.onConnect"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13693)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13692)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13693.apply(null,prefix__8790__auto___13694.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_13688], null))));
} else {
}

return handler_fn_13685.call(null,cb_param_port_13688);
});})(event_fn_13684,handler_fn_13685))
;
var ns_obj_13686 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13695 = config;
var api_check_fn__8793__auto___13696 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13695);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13696)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13695)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13696.call(null,"chrome.runtime.onConnect",ns_obj_13686,"onConnect");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13686,"onConnect");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_connect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_STAR_.cljs$lang$applyTo = (function (seq13681){
var G__13682 = cljs.core.first.call(null,seq13681);
var seq13681__$1 = cljs.core.next.call(null,seq13681);
var G__13683 = cljs.core.first.call(null,seq13681__$1);
var seq13681__$2 = cljs.core.next.call(null,seq13681__$1);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13682,G__13683,seq13681__$2);
});
chromex.ext.runtime.on_connect_external_STAR_ = (function chromex$ext$runtime$on_connect_external_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13715 = arguments.length;
var i__7279__auto___13716 = (0);
while(true){
if((i__7279__auto___13716 < len__7278__auto___13715)){
args__7285__auto__.push((arguments[i__7279__auto___13716]));

var G__13717 = (i__7279__auto___13716 + (1));
i__7279__auto___13716 = G__13717;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13710 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect-external","chromex.ext.runtime/on-connect-external",-2057644994),channel);
})();
var handler_fn_13711 = ((function (event_fn_13710){
return (function (cb_port_13713){
return event_fn_13710.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_13713));
});})(event_fn_13710))
;
var logging_fn__12038__auto__ = ((function (event_fn_13710,handler_fn_13711){
return (function (cb_param_port_13714){
var config__8788__auto___13724 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13724))){
var logger__8789__auto___13726 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13724);
var prefix__8790__auto___13727 = ["event:","chrome.runtime.onConnectExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13726)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13724)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13726.apply(null,prefix__8790__auto___13727.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_13714], null))));
} else {
}

return handler_fn_13711.call(null,cb_param_port_13714);
});})(event_fn_13710,handler_fn_13711))
;
var ns_obj_13712 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13728 = config;
var api_check_fn__8793__auto___13729 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13728);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13729)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13728)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13729.call(null,"chrome.runtime.onConnectExternal",ns_obj_13712,"onConnectExternal");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13712,"onConnectExternal");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$applyTo = (function (seq13697){
var G__13698 = cljs.core.first.call(null,seq13697);
var seq13697__$1 = cljs.core.next.call(null,seq13697);
var G__13699 = cljs.core.first.call(null,seq13697__$1);
var seq13697__$2 = cljs.core.next.call(null,seq13697__$1);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13698,G__13699,seq13697__$2);
});
chromex.ext.runtime.on_message_STAR_ = (function chromex$ext$runtime$on_message_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13749 = arguments.length;
var i__7279__auto___13750 = (0);
while(true){
if((i__7279__auto___13750 < len__7278__auto___13749)){
args__7285__auto__.push((arguments[i__7279__auto___13750]));

var G__13751 = (i__7279__auto___13750 + (1));
i__7279__auto___13750 = G__13751;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13739 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message","chromex.ext.runtime/on-message",2147364293),channel);
})();
var handler_fn_13740 = ((function (event_fn_13739){
return (function (cb_message_13742,cb_sender_13743,cb_send_response_13744){
return event_fn_13739.call(null,cb_message_13742,cb_sender_13743,cb_send_response_13744);
});})(event_fn_13739))
;
var logging_fn__12038__auto__ = ((function (event_fn_13739,handler_fn_13740){
return (function (cb_param_message_13745,cb_param_sender_13746,cb_param_send_response_13747){
var config__8788__auto___13752 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13752))){
var logger__8789__auto___13753 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13752);
var prefix__8790__auto___13754 = ["event:","chrome.runtime.onMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13753)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13752)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13753.apply(null,prefix__8790__auto___13754.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_13745,cb_param_sender_13746,cb_param_send_response_13747], null))));
} else {
}

return handler_fn_13740.call(null,cb_param_message_13745,cb_param_sender_13746,cb_param_send_response_13747);
});})(event_fn_13739,handler_fn_13740))
;
var ns_obj_13741 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13795 = config;
var api_check_fn__8793__auto___13796 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13795);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13796)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13795)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13796.call(null,"chrome.runtime.onMessage",ns_obj_13741,"onMessage");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13741,"onMessage");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_message_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_STAR_.cljs$lang$applyTo = (function (seq13730){
var G__13731 = cljs.core.first.call(null,seq13730);
var seq13730__$1 = cljs.core.next.call(null,seq13730);
var G__13732 = cljs.core.first.call(null,seq13730__$1);
var seq13730__$2 = cljs.core.next.call(null,seq13730__$1);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13731,G__13732,seq13730__$2);
});
chromex.ext.runtime.on_message_external_STAR_ = (function chromex$ext$runtime$on_message_external_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13809 = arguments.length;
var i__7279__auto___13810 = (0);
while(true){
if((i__7279__auto___13810 < len__7278__auto___13809)){
args__7285__auto__.push((arguments[i__7279__auto___13810]));

var G__13811 = (i__7279__auto___13810 + (1));
i__7279__auto___13810 = G__13811;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13800 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message-external","chromex.ext.runtime/on-message-external",-779703990),channel);
})();
var handler_fn_13801 = ((function (event_fn_13800){
return (function (cb_message_13803,cb_sender_13804,cb_send_response_13805){
return event_fn_13800.call(null,cb_message_13803,cb_sender_13804,cb_send_response_13805);
});})(event_fn_13800))
;
var logging_fn__12038__auto__ = ((function (event_fn_13800,handler_fn_13801){
return (function (cb_param_message_13806,cb_param_sender_13807,cb_param_send_response_13808){
var config__8788__auto___13814 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13814))){
var logger__8789__auto___13815 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13814);
var prefix__8790__auto___13816 = ["event:","chrome.runtime.onMessageExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13815)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13814)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13815.apply(null,prefix__8790__auto___13816.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_13806,cb_param_sender_13807,cb_param_send_response_13808], null))));
} else {
}

return handler_fn_13801.call(null,cb_param_message_13806,cb_param_sender_13807,cb_param_send_response_13808);
});})(event_fn_13800,handler_fn_13801))
;
var ns_obj_13802 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13824 = config;
var api_check_fn__8793__auto___13825 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13824);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13825)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13824)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13825.call(null,"chrome.runtime.onMessageExternal",ns_obj_13802,"onMessageExternal");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13802,"onMessageExternal");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$applyTo = (function (seq13797){
var G__13798 = cljs.core.first.call(null,seq13797);
var seq13797__$1 = cljs.core.next.call(null,seq13797);
var G__13799 = cljs.core.first.call(null,seq13797__$1);
var seq13797__$2 = cljs.core.next.call(null,seq13797__$1);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13798,G__13799,seq13797__$2);
});
chromex.ext.runtime.on_restart_required_STAR_ = (function chromex$ext$runtime$on_restart_required_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___13845 = arguments.length;
var i__7279__auto___13846 = (0);
while(true){
if((i__7279__auto___13846 < len__7278__auto___13845)){
args__7285__auto__.push((arguments[i__7279__auto___13846]));

var G__13847 = (i__7279__auto___13846 + (1));
i__7279__auto___13846 = G__13847;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_13839 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-restart-required","chromex.ext.runtime/on-restart-required",-754128621),channel);
})();
var handler_fn_13840 = ((function (event_fn_13839){
return (function (cb_reason_13842){
return event_fn_13839.call(null,cb_reason_13842);
});})(event_fn_13839))
;
var logging_fn__12038__auto__ = ((function (event_fn_13839,handler_fn_13840){
return (function (cb_param_reason_13843){
var config__8788__auto___13849 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13849))){
var logger__8789__auto___13850 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___13849);
var prefix__8790__auto___13851 = ["event:","chrome.runtime.onRestartRequired"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___13850)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___13849)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___13850.apply(null,prefix__8790__auto___13851.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_reason_13843], null))));
} else {
}

return handler_fn_13840.call(null,cb_param_reason_13843);
});})(event_fn_13839,handler_fn_13840))
;
var ns_obj_13841 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"runtime");
} else {
return null;
}
})();
var config__8792__auto___13853 = config;
var api_check_fn__8793__auto___13854 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___13853);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___13854)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___13853)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___13854.call(null,"chrome.runtime.onRestartRequired",ns_obj_13841,"onRestartRequired");

var event_obj__12039__auto__ = goog.object.get(ns_obj_13841,"onRestartRequired");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$applyTo = (function (seq13835){
var G__13836 = cljs.core.first.call(null,seq13835);
var seq13835__$1 = cljs.core.next.call(null,seq13835);
var G__13837 = cljs.core.first.call(null,seq13835__$1);
var seq13835__$2 = cljs.core.next.call(null,seq13835__$1);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13836,G__13837,seq13835__$2);
});

//# sourceMappingURL=runtime.js.map