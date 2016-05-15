// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.runtime');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.runtime.last_error_STAR_ = (function chromex$ext$runtime$last_error_STAR_(config){
var result_23952 = (function (){var final_args_array_23953 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.lastError");
var ns_23954 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();

var config__23449__auto___23956 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___23956))){
var logger__23450__auto___23957 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___23956);
var prefix__23451__auto___23958 = ["accessing:","chrome.runtime.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___23957)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___23956)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___23957.apply(null,prefix__23451__auto___23958.concat(final_args_array_23953));
} else {
}

var target_23955 = goog.object.get(ns_23954,"lastError");
return target_23955;
})();
return result_23952;
});
chromex.ext.runtime.id_STAR_ = (function chromex$ext$runtime$id_STAR_(config){
var result_23963 = (function (){var final_args_array_23964 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.id");
var ns_23965 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();

var config__23449__auto___23967 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___23967))){
var logger__23450__auto___23968 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___23967);
var prefix__23451__auto___23969 = ["accessing:","chrome.runtime.id"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___23968)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___23967)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___23968.apply(null,prefix__23451__auto___23969.concat(final_args_array_23964));
} else {
}

var target_23966 = goog.object.get(ns_23965,"id");
return target_23966;
})();
return result_23963;
});
chromex.ext.runtime.get_background_page_STAR_ = (function chromex$ext$runtime$get_background_page_STAR_(config){
var callback_chan_23977 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_23979_23984 = ((function (callback_chan_23977){
return (function (cb_background_page_23983){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-background-page","chromex.ext.runtime/get-background-page",2138227095),new cljs.core.Keyword(null,"name","name",1843675177),"getBackgroundPage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"background-page",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_23977);
})().call(null,cb_background_page_23983);
});})(callback_chan_23977))
;
var result_23978_23985 = (function (){var final_args_array_23980 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_23979_23984,"callback",null], null)], null),"chrome.runtime.getBackgroundPage");
var ns_23981 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___23986 = config;
var api_check_fn__23454__auto___23987 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___23986);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___23987)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___23986)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___23987.call(null,"chrome.runtime.getBackgroundPage",ns_23981,"getBackgroundPage");

var config__23449__auto___23988 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___23988))){
var logger__23450__auto___23989 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___23988);
var prefix__23451__auto___23990 = ["calling:","chrome.runtime.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___23989)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___23988)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___23989.apply(null,prefix__23451__auto___23990.concat(final_args_array_23980));
} else {
}

var target_23982 = goog.object.get(ns_23981,"getBackgroundPage");
return target_23982.apply(ns_23981,final_args_array_23980);
})();

return callback_chan_23977;
});
chromex.ext.runtime.open_options_page_STAR_ = (function chromex$ext$runtime$open_options_page_STAR_(config){
var callback_chan_23997 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_23999_24003 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","open-options-page","chromex.ext.runtime/open-options-page",-236868215),new cljs.core.Keyword(null,"name","name",1843675177),"openOptionsPage",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_23997);
})();
var result_23998_24004 = (function (){var final_args_array_24000 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_23999_24003,"callback",true], null)], null),"chrome.runtime.openOptionsPage");
var ns_24001 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24005 = config;
var api_check_fn__23454__auto___24006 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24005);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24006)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24005)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24006.call(null,"chrome.runtime.openOptionsPage",ns_24001,"openOptionsPage");

var config__23449__auto___24007 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24007))){
var logger__23450__auto___24008 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24007);
var prefix__23451__auto___24009 = ["calling:","chrome.runtime.openOptionsPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24008)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24007)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24008.apply(null,prefix__23451__auto___24009.concat(final_args_array_24000));
} else {
}

var target_24002 = goog.object.get(ns_24001,"openOptionsPage");
return target_24002.apply(ns_24001,final_args_array_24000);
})();

return callback_chan_23997;
});
chromex.ext.runtime.get_manifest_STAR_ = (function chromex$ext$runtime$get_manifest_STAR_(config){
var result_24014 = (function (){var final_args_array_24015 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.getManifest");
var ns_24016 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24018 = config;
var api_check_fn__23454__auto___24019 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24018);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24019)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24018)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24019.call(null,"chrome.runtime.getManifest",ns_24016,"getManifest");

var config__23449__auto___24020 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24020))){
var logger__23450__auto___24021 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24020);
var prefix__23451__auto___24022 = ["calling:","chrome.runtime.getManifest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24021)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24020)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24021.apply(null,prefix__23451__auto___24022.concat(final_args_array_24015));
} else {
}

var target_24017 = goog.object.get(ns_24016,"getManifest");
return target_24017.apply(ns_24016,final_args_array_24015);
})();
return result_24014;
});
chromex.ext.runtime.get_url_STAR_ = (function chromex$ext$runtime$get_url_STAR_(config,path){
var marshalled_path_24030 = (function (){var omit_test_24034 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24034,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24034;
}
})();
var result_24029 = (function (){var final_args_array_24031 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_24030,"path",null], null)], null),"chrome.runtime.getURL");
var ns_24032 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24035 = config;
var api_check_fn__23454__auto___24036 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24035);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24036)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24035)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24036.call(null,"chrome.runtime.getURL",ns_24032,"getURL");

var config__23449__auto___24037 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24037))){
var logger__23450__auto___24038 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24037);
var prefix__23451__auto___24039 = ["calling:","chrome.runtime.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24038)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24037)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24038.apply(null,prefix__23451__auto___24039.concat(final_args_array_24031));
} else {
}

var target_24033 = goog.object.get(ns_24032,"getURL");
return target_24033.apply(ns_24032,final_args_array_24031);
})();
return result_24029;
});
chromex.ext.runtime.set_uninstall_url_STAR_ = (function chromex$ext$runtime$set_uninstall_url_STAR_(config,url){
var callback_chan_24048 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_url_24050_24056 = (function (){var omit_test_24055 = url;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24055,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24055;
}
})();
var marshalled_callback_24051_24057 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","set-uninstall-url","chromex.ext.runtime/set-uninstall-url",-1010845784),new cljs.core.Keyword(null,"name","name",1843675177),"setUninstallURL",new cljs.core.Keyword(null,"since","since",315379842),"41",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_24048);
})();
var result_24049_24058 = (function (){var final_args_array_24052 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_url_24050_24056,"url",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_24051_24057,"callback",true], null)], null),"chrome.runtime.setUninstallURL");
var ns_24053 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24059 = config;
var api_check_fn__23454__auto___24060 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24059);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24060)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24059)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24060.call(null,"chrome.runtime.setUninstallURL",ns_24053,"setUninstallURL");

var config__23449__auto___24061 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24061))){
var logger__23450__auto___24062 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24061);
var prefix__23451__auto___24063 = ["calling:","chrome.runtime.setUninstallURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24062)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24061)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24062.apply(null,prefix__23451__auto___24063.concat(final_args_array_24052));
} else {
}

var target_24054 = goog.object.get(ns_24053,"setUninstallURL");
return target_24054.apply(ns_24053,final_args_array_24052);
})();

return callback_chan_24048;
});
chromex.ext.runtime.reload_STAR_ = (function chromex$ext$runtime$reload_STAR_(config){
var result_24068 = (function (){var final_args_array_24069 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.reload");
var ns_24070 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24072 = config;
var api_check_fn__23454__auto___24073 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24072);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24073)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24072)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24073.call(null,"chrome.runtime.reload",ns_24070,"reload");

var config__23449__auto___24074 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24074))){
var logger__23450__auto___24075 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24074);
var prefix__23451__auto___24076 = ["calling:","chrome.runtime.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24075)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24074)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24075.apply(null,prefix__23451__auto___24076.concat(final_args_array_24069));
} else {
}

var target_24071 = goog.object.get(ns_24070,"reload");
return target_24071.apply(ns_24070,final_args_array_24069);
})();
return result_24068;
});
chromex.ext.runtime.request_update_check_STAR_ = (function chromex$ext$runtime$request_update_check_STAR_(config){
var callback_chan_24085 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_24087_24093 = ((function (callback_chan_24085){
return (function (cb_status_24091,cb_details_24092){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","request-update-check","chromex.ext.runtime/request-update-check",-1504783873),new cljs.core.Keyword(null,"name","name",1843675177),"requestUpdateCheck",new cljs.core.Keyword(null,"since","since",315379842),"25",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"status",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.RequestUpdateCheckStatus"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_24085);
})().call(null,cb_status_24091,cb_details_24092);
});})(callback_chan_24085))
;
var result_24086_24094 = (function (){var final_args_array_24088 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_24087_24093,"callback",null], null)], null),"chrome.runtime.requestUpdateCheck");
var ns_24089 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24095 = config;
var api_check_fn__23454__auto___24096 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24095);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24096)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24095)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24096.call(null,"chrome.runtime.requestUpdateCheck",ns_24089,"requestUpdateCheck");

var config__23449__auto___24097 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24097))){
var logger__23450__auto___24098 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24097);
var prefix__23451__auto___24099 = ["calling:","chrome.runtime.requestUpdateCheck"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24098)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24097)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24098.apply(null,prefix__23451__auto___24099.concat(final_args_array_24088));
} else {
}

var target_24090 = goog.object.get(ns_24089,"requestUpdateCheck");
return target_24090.apply(ns_24089,final_args_array_24088);
})();

return callback_chan_24085;
});
chromex.ext.runtime.restart_STAR_ = (function chromex$ext$runtime$restart_STAR_(config){
var result_24104 = (function (){var final_args_array_24105 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.restart");
var ns_24106 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24108 = config;
var api_check_fn__23454__auto___24109 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24108);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24109)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24108)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24109.call(null,"chrome.runtime.restart",ns_24106,"restart");

var config__23449__auto___24110 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24110))){
var logger__23450__auto___24111 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24110);
var prefix__23451__auto___24112 = ["calling:","chrome.runtime.restart"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24111)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24110)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24111.apply(null,prefix__23451__auto___24112.concat(final_args_array_24105));
} else {
}

var target_24107 = goog.object.get(ns_24106,"restart");
return target_24107.apply(ns_24106,final_args_array_24105);
})();
return result_24104;
});
chromex.ext.runtime.connect_STAR_ = (function chromex$ext$runtime$connect_STAR_(config,extension_id,connect_info){
var marshalled_extension_id_24122 = (function (){var omit_test_24127 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24127,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24127;
}
})();
var marshalled_connect_info_24123 = (function (){var omit_test_24128 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24128,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24128;
}
})();
var result_24121 = (function (){var final_args_array_24124 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_24122,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_24123,"connect-info",true], null)], null),"chrome.runtime.connect");
var ns_24125 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24129 = config;
var api_check_fn__23454__auto___24130 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24129);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24130)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24129)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24130.call(null,"chrome.runtime.connect",ns_24125,"connect");

var config__23449__auto___24131 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24131))){
var logger__23450__auto___24132 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24131);
var prefix__23451__auto___24133 = ["calling:","chrome.runtime.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24132)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24131)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24132.apply(null,prefix__23451__auto___24133.concat(final_args_array_24124));
} else {
}

var target_24126 = goog.object.get(ns_24125,"connect");
return target_24126.apply(ns_24125,final_args_array_24124);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_24121);
});
chromex.ext.runtime.connect_native_STAR_ = (function chromex$ext$runtime$connect_native_STAR_(config,application){
var marshalled_application_24141 = (function (){var omit_test_24145 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24145,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24145;
}
})();
var result_24140 = (function (){var final_args_array_24142 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_24141,"application",null], null)], null),"chrome.runtime.connectNative");
var ns_24143 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24146 = config;
var api_check_fn__23454__auto___24147 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24146);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24147)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24146)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24147.call(null,"chrome.runtime.connectNative",ns_24143,"connectNative");

var config__23449__auto___24148 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24148))){
var logger__23450__auto___24149 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24148);
var prefix__23451__auto___24150 = ["calling:","chrome.runtime.connectNative"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24149)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24148)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24149.apply(null,prefix__23451__auto___24150.concat(final_args_array_24142));
} else {
}

var target_24144 = goog.object.get(ns_24143,"connectNative");
return target_24144.apply(ns_24143,final_args_array_24142);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_24140);
});
chromex.ext.runtime.send_message_STAR_ = (function chromex$ext$runtime$send_message_STAR_(config,extension_id,message,options){
var callback_chan_24164 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_extension_id_24166_24177 = (function (){var omit_test_24173 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24173,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24173;
}
})();
var marshalled_message_24167_24178 = (function (){var omit_test_24174 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24174,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24174;
}
})();
var marshalled_options_24168_24179 = (function (){var omit_test_24175 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24175,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24175;
}
})();
var marshalled_response_callback_24169_24180 = ((function (marshalled_extension_id_24166_24177,marshalled_message_24167_24178,marshalled_options_24168_24179,callback_chan_24164){
return (function (cb_response_24176){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-message","chromex.ext.runtime/send-message",-500803608),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"26",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_24164);
})().call(null,cb_response_24176);
});})(marshalled_extension_id_24166_24177,marshalled_message_24167_24178,marshalled_options_24168_24179,callback_chan_24164))
;
var result_24165_24181 = (function (){var final_args_array_24170 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_24166_24177,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_24167_24178,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_24168_24179,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_24169_24180,"response-callback",true], null)], null),"chrome.runtime.sendMessage");
var ns_24171 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24182 = config;
var api_check_fn__23454__auto___24183 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24182);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24183)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24182)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24183.call(null,"chrome.runtime.sendMessage",ns_24171,"sendMessage");

var config__23449__auto___24184 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24184))){
var logger__23450__auto___24185 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24184);
var prefix__23451__auto___24186 = ["calling:","chrome.runtime.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24185)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24184)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24185.apply(null,prefix__23451__auto___24186.concat(final_args_array_24170));
} else {
}

var target_24172 = goog.object.get(ns_24171,"sendMessage");
return target_24172.apply(ns_24171,final_args_array_24170);
})();

return callback_chan_24164;
});
chromex.ext.runtime.send_native_message_STAR_ = (function chromex$ext$runtime$send_native_message_STAR_(config,application,message){
var callback_chan_24198 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_application_24200_24209 = (function (){var omit_test_24206 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24206,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24206;
}
})();
var marshalled_message_24201_24210 = (function (){var omit_test_24207 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_24207,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_24207;
}
})();
var marshalled_response_callback_24202_24211 = ((function (marshalled_application_24200_24209,marshalled_message_24201_24210,callback_chan_24198){
return (function (cb_response_24208){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-native-message","chromex.ext.runtime/send-native-message",-489769559),new cljs.core.Keyword(null,"name","name",1843675177),"sendNativeMessage",new cljs.core.Keyword(null,"since","since",315379842),"28",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"application",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_24198);
})().call(null,cb_response_24208);
});})(marshalled_application_24200_24209,marshalled_message_24201_24210,callback_chan_24198))
;
var result_24199_24212 = (function (){var final_args_array_24203 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_24200_24209,"application",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_24201_24210,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_24202_24211,"response-callback",true], null)], null),"chrome.runtime.sendNativeMessage");
var ns_24204 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24213 = config;
var api_check_fn__23454__auto___24214 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24213);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24214)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24213)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24214.call(null,"chrome.runtime.sendNativeMessage",ns_24204,"sendNativeMessage");

var config__23449__auto___24215 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24215))){
var logger__23450__auto___24216 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24215);
var prefix__23451__auto___24217 = ["calling:","chrome.runtime.sendNativeMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24216)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24215)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24216.apply(null,prefix__23451__auto___24217.concat(final_args_array_24203));
} else {
}

var target_24205 = goog.object.get(ns_24204,"sendNativeMessage");
return target_24205.apply(ns_24204,final_args_array_24203);
})();

return callback_chan_24198;
});
chromex.ext.runtime.get_platform_info_STAR_ = (function chromex$ext$runtime$get_platform_info_STAR_(config){
var callback_chan_24225 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_24227_24232 = ((function (callback_chan_24225){
return (function (cb_platform_info_24231){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-platform-info","chromex.ext.runtime/get-platform-info",573309082),new cljs.core.Keyword(null,"name","name",1843675177),"getPlatformInfo",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"platform-info",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.PlatformInfo"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_24225);
})().call(null,cb_platform_info_24231);
});})(callback_chan_24225))
;
var result_24226_24233 = (function (){var final_args_array_24228 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_24227_24232,"callback",null], null)], null),"chrome.runtime.getPlatformInfo");
var ns_24229 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24234 = config;
var api_check_fn__23454__auto___24235 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24234);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24235)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24234)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24235.call(null,"chrome.runtime.getPlatformInfo",ns_24229,"getPlatformInfo");

var config__23449__auto___24236 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24236))){
var logger__23450__auto___24237 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24236);
var prefix__23451__auto___24238 = ["calling:","chrome.runtime.getPlatformInfo"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24237)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24236)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24237.apply(null,prefix__23451__auto___24238.concat(final_args_array_24228));
} else {
}

var target_24230 = goog.object.get(ns_24229,"getPlatformInfo");
return target_24230.apply(ns_24229,final_args_array_24228);
})();

return callback_chan_24225;
});
chromex.ext.runtime.get_package_directory_entry_STAR_ = (function chromex$ext$runtime$get_package_directory_entry_STAR_(config){
var callback_chan_24246 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_24248_24253 = ((function (callback_chan_24246){
return (function (cb_directory_entry_24252){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-package-directory-entry","chromex.ext.runtime/get-package-directory-entry",-1404865573),new cljs.core.Keyword(null,"name","name",1843675177),"getPackageDirectoryEntry",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"directory-entry",new cljs.core.Keyword(null,"type","type",1174270348),"DirectoryEntry"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_24246);
})().call(null,cb_directory_entry_24252);
});})(callback_chan_24246))
;
var result_24247_24254 = (function (){var final_args_array_24249 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_24248_24253,"callback",null], null)], null),"chrome.runtime.getPackageDirectoryEntry");
var ns_24250 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24255 = config;
var api_check_fn__23454__auto___24256 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24255);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24256)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24255)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24256.call(null,"chrome.runtime.getPackageDirectoryEntry",ns_24250,"getPackageDirectoryEntry");

var config__23449__auto___24257 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24257))){
var logger__23450__auto___24258 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24257);
var prefix__23451__auto___24259 = ["calling:","chrome.runtime.getPackageDirectoryEntry"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24258)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24257)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24258.apply(null,prefix__23451__auto___24259.concat(final_args_array_24249));
} else {
}

var target_24251 = goog.object.get(ns_24250,"getPackageDirectoryEntry");
return target_24251.apply(ns_24250,final_args_array_24249);
})();

return callback_chan_24246;
});
chromex.ext.runtime.on_startup_STAR_ = (function chromex$ext$runtime$on_startup_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24266 = arguments.length;
var i__19488__auto___24267 = (0);
while(true){
if((i__19488__auto___24267 < len__19487__auto___24266)){
args__19494__auto__.push((arguments[i__19488__auto___24267]));

var G__24268 = (i__19488__auto___24267 + (1));
i__19488__auto___24267 = G__24268;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24263 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-startup","chromex.ext.runtime/on-startup",-1208972204),channel);
})();
var handler_fn_24264 = event_fn_24263;
var logging_fn__23751__auto__ = ((function (event_fn_24263,handler_fn_24264){
return (function (){
var config__23449__auto___24269 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24269))){
var logger__23450__auto___24270 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24269);
var prefix__23451__auto___24271 = ["event:","chrome.runtime.onStartup"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24270)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24269)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24270.apply(null,prefix__23451__auto___24271.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_24264.call(null);
});})(event_fn_24263,handler_fn_24264))
;
var ns_obj_24265 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24272 = config;
var api_check_fn__23454__auto___24273 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24272);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24273)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24272)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24273.call(null,"chrome.runtime.onStartup",ns_obj_24265,"onStartup");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24265,"onStartup");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_startup_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_startup_STAR_.cljs$lang$applyTo = (function (seq24260){
var G__24261 = cljs.core.first.call(null,seq24260);
var seq24260__$1 = cljs.core.next.call(null,seq24260);
var G__24262 = cljs.core.first.call(null,seq24260__$1);
var seq24260__$2 = cljs.core.next.call(null,seq24260__$1);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24261,G__24262,seq24260__$2);
});
chromex.ext.runtime.on_installed_STAR_ = (function chromex$ext$runtime$on_installed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24282 = arguments.length;
var i__19488__auto___24283 = (0);
while(true){
if((i__19488__auto___24283 < len__19487__auto___24282)){
args__19494__auto__.push((arguments[i__19488__auto___24283]));

var G__24284 = (i__19488__auto___24283 + (1));
i__19488__auto___24283 = G__24284;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24277 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-installed","chromex.ext.runtime/on-installed",1653814653),channel);
})();
var handler_fn_24278 = ((function (event_fn_24277){
return (function (cb_details_24280){
return event_fn_24277.call(null,cb_details_24280);
});})(event_fn_24277))
;
var logging_fn__23751__auto__ = ((function (event_fn_24277,handler_fn_24278){
return (function (cb_param_details_24281){
var config__23449__auto___24285 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24285))){
var logger__23450__auto___24286 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24285);
var prefix__23451__auto___24287 = ["event:","chrome.runtime.onInstalled"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24286)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24285)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24286.apply(null,prefix__23451__auto___24287.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_24281], null))));
} else {
}

return handler_fn_24278.call(null,cb_param_details_24281);
});})(event_fn_24277,handler_fn_24278))
;
var ns_obj_24279 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24288 = config;
var api_check_fn__23454__auto___24289 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24288);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24289)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24288)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24289.call(null,"chrome.runtime.onInstalled",ns_obj_24279,"onInstalled");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24279,"onInstalled");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_installed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_installed_STAR_.cljs$lang$applyTo = (function (seq24274){
var G__24275 = cljs.core.first.call(null,seq24274);
var seq24274__$1 = cljs.core.next.call(null,seq24274);
var G__24276 = cljs.core.first.call(null,seq24274__$1);
var seq24274__$2 = cljs.core.next.call(null,seq24274__$1);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24275,G__24276,seq24274__$2);
});
chromex.ext.runtime.on_suspend_STAR_ = (function chromex$ext$runtime$on_suspend_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24296 = arguments.length;
var i__19488__auto___24297 = (0);
while(true){
if((i__19488__auto___24297 < len__19487__auto___24296)){
args__19494__auto__.push((arguments[i__19488__auto___24297]));

var G__24298 = (i__19488__auto___24297 + (1));
i__19488__auto___24297 = G__24298;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24293 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend","chromex.ext.runtime/on-suspend",-1228920175),channel);
})();
var handler_fn_24294 = event_fn_24293;
var logging_fn__23751__auto__ = ((function (event_fn_24293,handler_fn_24294){
return (function (){
var config__23449__auto___24299 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24299))){
var logger__23450__auto___24300 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24299);
var prefix__23451__auto___24301 = ["event:","chrome.runtime.onSuspend"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24300)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24299)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24300.apply(null,prefix__23451__auto___24301.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_24294.call(null);
});})(event_fn_24293,handler_fn_24294))
;
var ns_obj_24295 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24302 = config;
var api_check_fn__23454__auto___24303 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24302);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24303)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24302)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24303.call(null,"chrome.runtime.onSuspend",ns_obj_24295,"onSuspend");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24295,"onSuspend");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$applyTo = (function (seq24290){
var G__24291 = cljs.core.first.call(null,seq24290);
var seq24290__$1 = cljs.core.next.call(null,seq24290);
var G__24292 = cljs.core.first.call(null,seq24290__$1);
var seq24290__$2 = cljs.core.next.call(null,seq24290__$1);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24291,G__24292,seq24290__$2);
});
chromex.ext.runtime.on_suspend_canceled_STAR_ = (function chromex$ext$runtime$on_suspend_canceled_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24310 = arguments.length;
var i__19488__auto___24311 = (0);
while(true){
if((i__19488__auto___24311 < len__19487__auto___24310)){
args__19494__auto__.push((arguments[i__19488__auto___24311]));

var G__24312 = (i__19488__auto___24311 + (1));
i__19488__auto___24311 = G__24312;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24307 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend-canceled","chromex.ext.runtime/on-suspend-canceled",-827432771),channel);
})();
var handler_fn_24308 = event_fn_24307;
var logging_fn__23751__auto__ = ((function (event_fn_24307,handler_fn_24308){
return (function (){
var config__23449__auto___24313 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24313))){
var logger__23450__auto___24314 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24313);
var prefix__23451__auto___24315 = ["event:","chrome.runtime.onSuspendCanceled"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24314)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24313)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24314.apply(null,prefix__23451__auto___24315.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_24308.call(null);
});})(event_fn_24307,handler_fn_24308))
;
var ns_obj_24309 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24316 = config;
var api_check_fn__23454__auto___24317 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24316);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24317)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24316)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24317.call(null,"chrome.runtime.onSuspendCanceled",ns_obj_24309,"onSuspendCanceled");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24309,"onSuspendCanceled");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$applyTo = (function (seq24304){
var G__24305 = cljs.core.first.call(null,seq24304);
var seq24304__$1 = cljs.core.next.call(null,seq24304);
var G__24306 = cljs.core.first.call(null,seq24304__$1);
var seq24304__$2 = cljs.core.next.call(null,seq24304__$1);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24305,G__24306,seq24304__$2);
});
chromex.ext.runtime.on_update_available_STAR_ = (function chromex$ext$runtime$on_update_available_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24326 = arguments.length;
var i__19488__auto___24327 = (0);
while(true){
if((i__19488__auto___24327 < len__19487__auto___24326)){
args__19494__auto__.push((arguments[i__19488__auto___24327]));

var G__24328 = (i__19488__auto___24327 + (1));
i__19488__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24321 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-update-available","chromex.ext.runtime/on-update-available",-1242137249),channel);
})();
var handler_fn_24322 = ((function (event_fn_24321){
return (function (cb_details_24324){
return event_fn_24321.call(null,cb_details_24324);
});})(event_fn_24321))
;
var logging_fn__23751__auto__ = ((function (event_fn_24321,handler_fn_24322){
return (function (cb_param_details_24325){
var config__23449__auto___24329 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24329))){
var logger__23450__auto___24330 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24329);
var prefix__23451__auto___24331 = ["event:","chrome.runtime.onUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24330)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24329)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24330.apply(null,prefix__23451__auto___24331.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_24325], null))));
} else {
}

return handler_fn_24322.call(null,cb_param_details_24325);
});})(event_fn_24321,handler_fn_24322))
;
var ns_obj_24323 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24332 = config;
var api_check_fn__23454__auto___24333 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24332);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24333)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24332)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24333.call(null,"chrome.runtime.onUpdateAvailable",ns_obj_24323,"onUpdateAvailable");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24323,"onUpdateAvailable");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$applyTo = (function (seq24318){
var G__24319 = cljs.core.first.call(null,seq24318);
var seq24318__$1 = cljs.core.next.call(null,seq24318);
var G__24320 = cljs.core.first.call(null,seq24318__$1);
var seq24318__$2 = cljs.core.next.call(null,seq24318__$1);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24319,G__24320,seq24318__$2);
});
chromex.ext.runtime.on_browser_update_available_STAR_ = (function chromex$ext$runtime$on_browser_update_available_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24340 = arguments.length;
var i__19488__auto___24341 = (0);
while(true){
if((i__19488__auto___24341 < len__19487__auto___24340)){
args__19494__auto__.push((arguments[i__19488__auto___24341]));

var G__24342 = (i__19488__auto___24341 + (1));
i__19488__auto___24341 = G__24342;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24337 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-browser-update-available","chromex.ext.runtime/on-browser-update-available",-2070315485),channel);
})();
var handler_fn_24338 = event_fn_24337;
var logging_fn__23751__auto__ = ((function (event_fn_24337,handler_fn_24338){
return (function (){
var config__23449__auto___24343 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24343))){
var logger__23450__auto___24344 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24343);
var prefix__23451__auto___24345 = ["event:","chrome.runtime.onBrowserUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24344)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24343)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24344.apply(null,prefix__23451__auto___24345.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_24338.call(null);
});})(event_fn_24337,handler_fn_24338))
;
var ns_obj_24339 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24346 = config;
var api_check_fn__23454__auto___24347 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24346);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24347)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24346)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24347.call(null,"chrome.runtime.onBrowserUpdateAvailable",ns_obj_24339,"onBrowserUpdateAvailable");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24339,"onBrowserUpdateAvailable");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$applyTo = (function (seq24334){
var G__24335 = cljs.core.first.call(null,seq24334);
var seq24334__$1 = cljs.core.next.call(null,seq24334);
var G__24336 = cljs.core.first.call(null,seq24334__$1);
var seq24334__$2 = cljs.core.next.call(null,seq24334__$1);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24335,G__24336,seq24334__$2);
});
chromex.ext.runtime.on_connect_STAR_ = (function chromex$ext$runtime$on_connect_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24356 = arguments.length;
var i__19488__auto___24357 = (0);
while(true){
if((i__19488__auto___24357 < len__19487__auto___24356)){
args__19494__auto__.push((arguments[i__19488__auto___24357]));

var G__24358 = (i__19488__auto___24357 + (1));
i__19488__auto___24357 = G__24358;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24351 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect","chromex.ext.runtime/on-connect",-693825711),channel);
})();
var handler_fn_24352 = ((function (event_fn_24351){
return (function (cb_port_24354){
return event_fn_24351.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_24354));
});})(event_fn_24351))
;
var logging_fn__23751__auto__ = ((function (event_fn_24351,handler_fn_24352){
return (function (cb_param_port_24355){
var config__23449__auto___24359 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24359))){
var logger__23450__auto___24360 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24359);
var prefix__23451__auto___24361 = ["event:","chrome.runtime.onConnect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24360)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24359)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24360.apply(null,prefix__23451__auto___24361.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_24355], null))));
} else {
}

return handler_fn_24352.call(null,cb_param_port_24355);
});})(event_fn_24351,handler_fn_24352))
;
var ns_obj_24353 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24362 = config;
var api_check_fn__23454__auto___24363 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24362);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24363)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24362)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24363.call(null,"chrome.runtime.onConnect",ns_obj_24353,"onConnect");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24353,"onConnect");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_connect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_STAR_.cljs$lang$applyTo = (function (seq24348){
var G__24349 = cljs.core.first.call(null,seq24348);
var seq24348__$1 = cljs.core.next.call(null,seq24348);
var G__24350 = cljs.core.first.call(null,seq24348__$1);
var seq24348__$2 = cljs.core.next.call(null,seq24348__$1);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24349,G__24350,seq24348__$2);
});
chromex.ext.runtime.on_connect_external_STAR_ = (function chromex$ext$runtime$on_connect_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24372 = arguments.length;
var i__19488__auto___24373 = (0);
while(true){
if((i__19488__auto___24373 < len__19487__auto___24372)){
args__19494__auto__.push((arguments[i__19488__auto___24373]));

var G__24374 = (i__19488__auto___24373 + (1));
i__19488__auto___24373 = G__24374;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24367 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect-external","chromex.ext.runtime/on-connect-external",-2057644994),channel);
})();
var handler_fn_24368 = ((function (event_fn_24367){
return (function (cb_port_24370){
return event_fn_24367.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_24370));
});})(event_fn_24367))
;
var logging_fn__23751__auto__ = ((function (event_fn_24367,handler_fn_24368){
return (function (cb_param_port_24371){
var config__23449__auto___24375 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24375))){
var logger__23450__auto___24376 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24375);
var prefix__23451__auto___24377 = ["event:","chrome.runtime.onConnectExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24376)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24375)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24376.apply(null,prefix__23451__auto___24377.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_24371], null))));
} else {
}

return handler_fn_24368.call(null,cb_param_port_24371);
});})(event_fn_24367,handler_fn_24368))
;
var ns_obj_24369 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24378 = config;
var api_check_fn__23454__auto___24379 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24378);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24379)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24378)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24379.call(null,"chrome.runtime.onConnectExternal",ns_obj_24369,"onConnectExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24369,"onConnectExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$applyTo = (function (seq24364){
var G__24365 = cljs.core.first.call(null,seq24364);
var seq24364__$1 = cljs.core.next.call(null,seq24364);
var G__24366 = cljs.core.first.call(null,seq24364__$1);
var seq24364__$2 = cljs.core.next.call(null,seq24364__$1);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24365,G__24366,seq24364__$2);
});
chromex.ext.runtime.on_message_STAR_ = (function chromex$ext$runtime$on_message_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24392 = arguments.length;
var i__19488__auto___24393 = (0);
while(true){
if((i__19488__auto___24393 < len__19487__auto___24392)){
args__19494__auto__.push((arguments[i__19488__auto___24393]));

var G__24394 = (i__19488__auto___24393 + (1));
i__19488__auto___24393 = G__24394;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24383 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message","chromex.ext.runtime/on-message",2147364293),channel);
})();
var handler_fn_24384 = ((function (event_fn_24383){
return (function (cb_message_24386,cb_sender_24387,cb_send_response_24388){
return event_fn_24383.call(null,cb_message_24386,cb_sender_24387,cb_send_response_24388);
});})(event_fn_24383))
;
var logging_fn__23751__auto__ = ((function (event_fn_24383,handler_fn_24384){
return (function (cb_param_message_24389,cb_param_sender_24390,cb_param_send_response_24391){
var config__23449__auto___24395 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24395))){
var logger__23450__auto___24396 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24395);
var prefix__23451__auto___24397 = ["event:","chrome.runtime.onMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24396)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24395)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24396.apply(null,prefix__23451__auto___24397.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_24389,cb_param_sender_24390,cb_param_send_response_24391], null))));
} else {
}

return handler_fn_24384.call(null,cb_param_message_24389,cb_param_sender_24390,cb_param_send_response_24391);
});})(event_fn_24383,handler_fn_24384))
;
var ns_obj_24385 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24398 = config;
var api_check_fn__23454__auto___24399 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24398);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24399)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24398)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24399.call(null,"chrome.runtime.onMessage",ns_obj_24385,"onMessage");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24385,"onMessage");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_message_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_STAR_.cljs$lang$applyTo = (function (seq24380){
var G__24381 = cljs.core.first.call(null,seq24380);
var seq24380__$1 = cljs.core.next.call(null,seq24380);
var G__24382 = cljs.core.first.call(null,seq24380__$1);
var seq24380__$2 = cljs.core.next.call(null,seq24380__$1);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24381,G__24382,seq24380__$2);
});
chromex.ext.runtime.on_message_external_STAR_ = (function chromex$ext$runtime$on_message_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24412 = arguments.length;
var i__19488__auto___24413 = (0);
while(true){
if((i__19488__auto___24413 < len__19487__auto___24412)){
args__19494__auto__.push((arguments[i__19488__auto___24413]));

var G__24414 = (i__19488__auto___24413 + (1));
i__19488__auto___24413 = G__24414;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24403 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message-external","chromex.ext.runtime/on-message-external",-779703990),channel);
})();
var handler_fn_24404 = ((function (event_fn_24403){
return (function (cb_message_24406,cb_sender_24407,cb_send_response_24408){
return event_fn_24403.call(null,cb_message_24406,cb_sender_24407,cb_send_response_24408);
});})(event_fn_24403))
;
var logging_fn__23751__auto__ = ((function (event_fn_24403,handler_fn_24404){
return (function (cb_param_message_24409,cb_param_sender_24410,cb_param_send_response_24411){
var config__23449__auto___24415 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24415))){
var logger__23450__auto___24416 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24415);
var prefix__23451__auto___24417 = ["event:","chrome.runtime.onMessageExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24416)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24415)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24416.apply(null,prefix__23451__auto___24417.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_24409,cb_param_sender_24410,cb_param_send_response_24411], null))));
} else {
}

return handler_fn_24404.call(null,cb_param_message_24409,cb_param_sender_24410,cb_param_send_response_24411);
});})(event_fn_24403,handler_fn_24404))
;
var ns_obj_24405 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24418 = config;
var api_check_fn__23454__auto___24419 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24418);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24419)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24418)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24419.call(null,"chrome.runtime.onMessageExternal",ns_obj_24405,"onMessageExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24405,"onMessageExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$applyTo = (function (seq24400){
var G__24401 = cljs.core.first.call(null,seq24400);
var seq24400__$1 = cljs.core.next.call(null,seq24400);
var G__24402 = cljs.core.first.call(null,seq24400__$1);
var seq24400__$2 = cljs.core.next.call(null,seq24400__$1);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24401,G__24402,seq24400__$2);
});
chromex.ext.runtime.on_restart_required_STAR_ = (function chromex$ext$runtime$on_restart_required_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24428 = arguments.length;
var i__19488__auto___24429 = (0);
while(true){
if((i__19488__auto___24429 < len__19487__auto___24428)){
args__19494__auto__.push((arguments[i__19488__auto___24429]));

var G__24430 = (i__19488__auto___24429 + (1));
i__19488__auto___24429 = G__24430;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_24423 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-restart-required","chromex.ext.runtime/on-restart-required",-754128621),channel);
})();
var handler_fn_24424 = ((function (event_fn_24423){
return (function (cb_reason_24426){
return event_fn_24423.call(null,cb_reason_24426);
});})(event_fn_24423))
;
var logging_fn__23751__auto__ = ((function (event_fn_24423,handler_fn_24424){
return (function (cb_param_reason_24427){
var config__23449__auto___24431 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24431))){
var logger__23450__auto___24432 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___24431);
var prefix__23451__auto___24433 = ["event:","chrome.runtime.onRestartRequired"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___24432)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___24431)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___24432.apply(null,prefix__23451__auto___24433.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_reason_24427], null))));
} else {
}

return handler_fn_24424.call(null,cb_param_reason_24427);
});})(event_fn_24423,handler_fn_24424))
;
var ns_obj_24425 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___24434 = config;
var api_check_fn__23454__auto___24435 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___24434);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___24435)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___24434)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___24435.call(null,"chrome.runtime.onRestartRequired",ns_obj_24425,"onRestartRequired");

var event_obj__23752__auto__ = goog.object.get(ns_obj_24425,"onRestartRequired");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$applyTo = (function (seq24420){
var G__24421 = cljs.core.first.call(null,seq24420);
var seq24420__$1 = cljs.core.next.call(null,seq24420);
var G__24422 = cljs.core.first.call(null,seq24420__$1);
var seq24420__$2 = cljs.core.next.call(null,seq24420__$1);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24421,G__24422,seq24420__$2);
});

//# sourceMappingURL=runtime.js.map