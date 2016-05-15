// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.runtime');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.runtime.last_error_STAR_ = (function chromex$ext$runtime$last_error_STAR_(config){
var result_40002 = (function (){var final_args_array_40003 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.lastError");
var ns_40004 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();

var config__23449__auto___40006 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40006))){
var logger__23450__auto___40007 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40006);
var prefix__23451__auto___40008 = ["accessing:","chrome.runtime.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40007)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40006)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40007.apply(null,prefix__23451__auto___40008.concat(final_args_array_40003));
} else {
}

var target_40005 = goog.object.get(ns_40004,"lastError");
return target_40005;
})();
return result_40002;
});
chromex.ext.runtime.id_STAR_ = (function chromex$ext$runtime$id_STAR_(config){
var result_40013 = (function (){var final_args_array_40014 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.id");
var ns_40015 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();

var config__23449__auto___40017 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40017))){
var logger__23450__auto___40018 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40017);
var prefix__23451__auto___40019 = ["accessing:","chrome.runtime.id"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40018)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40017)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40018.apply(null,prefix__23451__auto___40019.concat(final_args_array_40014));
} else {
}

var target_40016 = goog.object.get(ns_40015,"id");
return target_40016;
})();
return result_40013;
});
chromex.ext.runtime.get_background_page_STAR_ = (function chromex$ext$runtime$get_background_page_STAR_(config){
var callback_chan_40027 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_40029_40034 = ((function (callback_chan_40027){
return (function (cb_background_page_40033){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-background-page","chromex.ext.runtime/get-background-page",2138227095),new cljs.core.Keyword(null,"name","name",1843675177),"getBackgroundPage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"background-page",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40027);
})().call(null,cb_background_page_40033);
});})(callback_chan_40027))
;
var result_40028_40035 = (function (){var final_args_array_40030 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_40029_40034,"callback",null], null)], null),"chrome.runtime.getBackgroundPage");
var ns_40031 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40036 = config;
var api_check_fn__23454__auto___40037 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40036);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40037)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40036)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40037.call(null,"chrome.runtime.getBackgroundPage",ns_40031,"getBackgroundPage");

var config__23449__auto___40038 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40038))){
var logger__23450__auto___40039 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40038);
var prefix__23451__auto___40040 = ["calling:","chrome.runtime.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40039)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40038)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40039.apply(null,prefix__23451__auto___40040.concat(final_args_array_40030));
} else {
}

var target_40032 = goog.object.get(ns_40031,"getBackgroundPage");
return target_40032.apply(ns_40031,final_args_array_40030);
})();

return callback_chan_40027;
});
chromex.ext.runtime.open_options_page_STAR_ = (function chromex$ext$runtime$open_options_page_STAR_(config){
var callback_chan_40047 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_40049_40053 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","open-options-page","chromex.ext.runtime/open-options-page",-236868215),new cljs.core.Keyword(null,"name","name",1843675177),"openOptionsPage",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40047);
})();
var result_40048_40054 = (function (){var final_args_array_40050 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_40049_40053,"callback",true], null)], null),"chrome.runtime.openOptionsPage");
var ns_40051 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40055 = config;
var api_check_fn__23454__auto___40056 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40055);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40056)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40055)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40056.call(null,"chrome.runtime.openOptionsPage",ns_40051,"openOptionsPage");

var config__23449__auto___40057 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40057))){
var logger__23450__auto___40058 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40057);
var prefix__23451__auto___40059 = ["calling:","chrome.runtime.openOptionsPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40058)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40057)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40058.apply(null,prefix__23451__auto___40059.concat(final_args_array_40050));
} else {
}

var target_40052 = goog.object.get(ns_40051,"openOptionsPage");
return target_40052.apply(ns_40051,final_args_array_40050);
})();

return callback_chan_40047;
});
chromex.ext.runtime.get_manifest_STAR_ = (function chromex$ext$runtime$get_manifest_STAR_(config){
var result_40064 = (function (){var final_args_array_40065 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.getManifest");
var ns_40066 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40068 = config;
var api_check_fn__23454__auto___40069 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40068);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40069)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40068)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40069.call(null,"chrome.runtime.getManifest",ns_40066,"getManifest");

var config__23449__auto___40070 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40070))){
var logger__23450__auto___40071 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40070);
var prefix__23451__auto___40072 = ["calling:","chrome.runtime.getManifest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40071)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40070)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40071.apply(null,prefix__23451__auto___40072.concat(final_args_array_40065));
} else {
}

var target_40067 = goog.object.get(ns_40066,"getManifest");
return target_40067.apply(ns_40066,final_args_array_40065);
})();
return result_40064;
});
chromex.ext.runtime.get_url_STAR_ = (function chromex$ext$runtime$get_url_STAR_(config,path){
var marshalled_path_40080 = (function (){var omit_test_40084 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40084,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40084;
}
})();
var result_40079 = (function (){var final_args_array_40081 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_40080,"path",null], null)], null),"chrome.runtime.getURL");
var ns_40082 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40085 = config;
var api_check_fn__23454__auto___40086 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40085);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40086)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40085)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40086.call(null,"chrome.runtime.getURL",ns_40082,"getURL");

var config__23449__auto___40087 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40087))){
var logger__23450__auto___40088 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40087);
var prefix__23451__auto___40089 = ["calling:","chrome.runtime.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40088)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40087)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40088.apply(null,prefix__23451__auto___40089.concat(final_args_array_40081));
} else {
}

var target_40083 = goog.object.get(ns_40082,"getURL");
return target_40083.apply(ns_40082,final_args_array_40081);
})();
return result_40079;
});
chromex.ext.runtime.set_uninstall_url_STAR_ = (function chromex$ext$runtime$set_uninstall_url_STAR_(config,url){
var callback_chan_40098 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_url_40100_40106 = (function (){var omit_test_40105 = url;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40105,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40105;
}
})();
var marshalled_callback_40101_40107 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","set-uninstall-url","chromex.ext.runtime/set-uninstall-url",-1010845784),new cljs.core.Keyword(null,"name","name",1843675177),"setUninstallURL",new cljs.core.Keyword(null,"since","since",315379842),"41",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40098);
})();
var result_40099_40108 = (function (){var final_args_array_40102 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_url_40100_40106,"url",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_40101_40107,"callback",true], null)], null),"chrome.runtime.setUninstallURL");
var ns_40103 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40109 = config;
var api_check_fn__23454__auto___40110 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40109);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40110)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40109)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40110.call(null,"chrome.runtime.setUninstallURL",ns_40103,"setUninstallURL");

var config__23449__auto___40111 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40111))){
var logger__23450__auto___40112 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40111);
var prefix__23451__auto___40113 = ["calling:","chrome.runtime.setUninstallURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40112)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40111)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40112.apply(null,prefix__23451__auto___40113.concat(final_args_array_40102));
} else {
}

var target_40104 = goog.object.get(ns_40103,"setUninstallURL");
return target_40104.apply(ns_40103,final_args_array_40102);
})();

return callback_chan_40098;
});
chromex.ext.runtime.reload_STAR_ = (function chromex$ext$runtime$reload_STAR_(config){
var result_40118 = (function (){var final_args_array_40119 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.reload");
var ns_40120 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40122 = config;
var api_check_fn__23454__auto___40123 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40122);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40123)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40122)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40123.call(null,"chrome.runtime.reload",ns_40120,"reload");

var config__23449__auto___40124 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40124))){
var logger__23450__auto___40125 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40124);
var prefix__23451__auto___40126 = ["calling:","chrome.runtime.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40125)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40124)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40125.apply(null,prefix__23451__auto___40126.concat(final_args_array_40119));
} else {
}

var target_40121 = goog.object.get(ns_40120,"reload");
return target_40121.apply(ns_40120,final_args_array_40119);
})();
return result_40118;
});
chromex.ext.runtime.request_update_check_STAR_ = (function chromex$ext$runtime$request_update_check_STAR_(config){
var callback_chan_40135 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_40137_40143 = ((function (callback_chan_40135){
return (function (cb_status_40141,cb_details_40142){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","request-update-check","chromex.ext.runtime/request-update-check",-1504783873),new cljs.core.Keyword(null,"name","name",1843675177),"requestUpdateCheck",new cljs.core.Keyword(null,"since","since",315379842),"25",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"status",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.RequestUpdateCheckStatus"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40135);
})().call(null,cb_status_40141,cb_details_40142);
});})(callback_chan_40135))
;
var result_40136_40144 = (function (){var final_args_array_40138 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_40137_40143,"callback",null], null)], null),"chrome.runtime.requestUpdateCheck");
var ns_40139 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40145 = config;
var api_check_fn__23454__auto___40146 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40145);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40146)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40145)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40146.call(null,"chrome.runtime.requestUpdateCheck",ns_40139,"requestUpdateCheck");

var config__23449__auto___40147 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40147))){
var logger__23450__auto___40148 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40147);
var prefix__23451__auto___40149 = ["calling:","chrome.runtime.requestUpdateCheck"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40148)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40147)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40148.apply(null,prefix__23451__auto___40149.concat(final_args_array_40138));
} else {
}

var target_40140 = goog.object.get(ns_40139,"requestUpdateCheck");
return target_40140.apply(ns_40139,final_args_array_40138);
})();

return callback_chan_40135;
});
chromex.ext.runtime.restart_STAR_ = (function chromex$ext$runtime$restart_STAR_(config){
var result_40154 = (function (){var final_args_array_40155 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.restart");
var ns_40156 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40158 = config;
var api_check_fn__23454__auto___40159 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40158);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40159)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40158)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40159.call(null,"chrome.runtime.restart",ns_40156,"restart");

var config__23449__auto___40160 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40160))){
var logger__23450__auto___40161 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40160);
var prefix__23451__auto___40162 = ["calling:","chrome.runtime.restart"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40161)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40160)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40161.apply(null,prefix__23451__auto___40162.concat(final_args_array_40155));
} else {
}

var target_40157 = goog.object.get(ns_40156,"restart");
return target_40157.apply(ns_40156,final_args_array_40155);
})();
return result_40154;
});
chromex.ext.runtime.connect_STAR_ = (function chromex$ext$runtime$connect_STAR_(config,extension_id,connect_info){
var marshalled_extension_id_40172 = (function (){var omit_test_40177 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40177,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40177;
}
})();
var marshalled_connect_info_40173 = (function (){var omit_test_40178 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40178,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40178;
}
})();
var result_40171 = (function (){var final_args_array_40174 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_40172,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_40173,"connect-info",true], null)], null),"chrome.runtime.connect");
var ns_40175 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40179 = config;
var api_check_fn__23454__auto___40180 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40179);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40180)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40179)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40180.call(null,"chrome.runtime.connect",ns_40175,"connect");

var config__23449__auto___40181 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40181))){
var logger__23450__auto___40182 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40181);
var prefix__23451__auto___40183 = ["calling:","chrome.runtime.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40182)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40181)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40182.apply(null,prefix__23451__auto___40183.concat(final_args_array_40174));
} else {
}

var target_40176 = goog.object.get(ns_40175,"connect");
return target_40176.apply(ns_40175,final_args_array_40174);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_40171);
});
chromex.ext.runtime.connect_native_STAR_ = (function chromex$ext$runtime$connect_native_STAR_(config,application){
var marshalled_application_40191 = (function (){var omit_test_40195 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40195,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40195;
}
})();
var result_40190 = (function (){var final_args_array_40192 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_40191,"application",null], null)], null),"chrome.runtime.connectNative");
var ns_40193 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40196 = config;
var api_check_fn__23454__auto___40197 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40196);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40197)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40196)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40197.call(null,"chrome.runtime.connectNative",ns_40193,"connectNative");

var config__23449__auto___40198 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40198))){
var logger__23450__auto___40199 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40198);
var prefix__23451__auto___40200 = ["calling:","chrome.runtime.connectNative"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40199)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40198)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40199.apply(null,prefix__23451__auto___40200.concat(final_args_array_40192));
} else {
}

var target_40194 = goog.object.get(ns_40193,"connectNative");
return target_40194.apply(ns_40193,final_args_array_40192);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_40190);
});
chromex.ext.runtime.send_message_STAR_ = (function chromex$ext$runtime$send_message_STAR_(config,extension_id,message,options){
var callback_chan_40214 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_extension_id_40216_40227 = (function (){var omit_test_40223 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40223,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40223;
}
})();
var marshalled_message_40217_40228 = (function (){var omit_test_40224 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40224,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40224;
}
})();
var marshalled_options_40218_40229 = (function (){var omit_test_40225 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40225,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40225;
}
})();
var marshalled_response_callback_40219_40230 = ((function (marshalled_extension_id_40216_40227,marshalled_message_40217_40228,marshalled_options_40218_40229,callback_chan_40214){
return (function (cb_response_40226){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-message","chromex.ext.runtime/send-message",-500803608),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"26",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40214);
})().call(null,cb_response_40226);
});})(marshalled_extension_id_40216_40227,marshalled_message_40217_40228,marshalled_options_40218_40229,callback_chan_40214))
;
var result_40215_40231 = (function (){var final_args_array_40220 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_40216_40227,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_40217_40228,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_40218_40229,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_40219_40230,"response-callback",true], null)], null),"chrome.runtime.sendMessage");
var ns_40221 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40232 = config;
var api_check_fn__23454__auto___40233 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40232);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40233)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40232)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40233.call(null,"chrome.runtime.sendMessage",ns_40221,"sendMessage");

var config__23449__auto___40234 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40234))){
var logger__23450__auto___40235 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40234);
var prefix__23451__auto___40236 = ["calling:","chrome.runtime.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40235)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40234)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40235.apply(null,prefix__23451__auto___40236.concat(final_args_array_40220));
} else {
}

var target_40222 = goog.object.get(ns_40221,"sendMessage");
return target_40222.apply(ns_40221,final_args_array_40220);
})();

return callback_chan_40214;
});
chromex.ext.runtime.send_native_message_STAR_ = (function chromex$ext$runtime$send_native_message_STAR_(config,application,message){
var callback_chan_40248 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_application_40250_40259 = (function (){var omit_test_40256 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40256,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40256;
}
})();
var marshalled_message_40251_40260 = (function (){var omit_test_40257 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_40257,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_40257;
}
})();
var marshalled_response_callback_40252_40261 = ((function (marshalled_application_40250_40259,marshalled_message_40251_40260,callback_chan_40248){
return (function (cb_response_40258){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-native-message","chromex.ext.runtime/send-native-message",-489769559),new cljs.core.Keyword(null,"name","name",1843675177),"sendNativeMessage",new cljs.core.Keyword(null,"since","since",315379842),"28",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"application",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40248);
})().call(null,cb_response_40258);
});})(marshalled_application_40250_40259,marshalled_message_40251_40260,callback_chan_40248))
;
var result_40249_40262 = (function (){var final_args_array_40253 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_40250_40259,"application",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_40251_40260,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_40252_40261,"response-callback",true], null)], null),"chrome.runtime.sendNativeMessage");
var ns_40254 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40263 = config;
var api_check_fn__23454__auto___40264 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40263);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40264)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40263)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40264.call(null,"chrome.runtime.sendNativeMessage",ns_40254,"sendNativeMessage");

var config__23449__auto___40265 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40265))){
var logger__23450__auto___40266 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40265);
var prefix__23451__auto___40267 = ["calling:","chrome.runtime.sendNativeMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40266)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40265)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40266.apply(null,prefix__23451__auto___40267.concat(final_args_array_40253));
} else {
}

var target_40255 = goog.object.get(ns_40254,"sendNativeMessage");
return target_40255.apply(ns_40254,final_args_array_40253);
})();

return callback_chan_40248;
});
chromex.ext.runtime.get_platform_info_STAR_ = (function chromex$ext$runtime$get_platform_info_STAR_(config){
var callback_chan_40275 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_40277_40282 = ((function (callback_chan_40275){
return (function (cb_platform_info_40281){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-platform-info","chromex.ext.runtime/get-platform-info",573309082),new cljs.core.Keyword(null,"name","name",1843675177),"getPlatformInfo",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"platform-info",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.PlatformInfo"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40275);
})().call(null,cb_platform_info_40281);
});})(callback_chan_40275))
;
var result_40276_40283 = (function (){var final_args_array_40278 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_40277_40282,"callback",null], null)], null),"chrome.runtime.getPlatformInfo");
var ns_40279 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40284 = config;
var api_check_fn__23454__auto___40285 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40284);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40285)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40284)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40285.call(null,"chrome.runtime.getPlatformInfo",ns_40279,"getPlatformInfo");

var config__23449__auto___40286 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40286))){
var logger__23450__auto___40287 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40286);
var prefix__23451__auto___40288 = ["calling:","chrome.runtime.getPlatformInfo"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40287)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40286)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40287.apply(null,prefix__23451__auto___40288.concat(final_args_array_40278));
} else {
}

var target_40280 = goog.object.get(ns_40279,"getPlatformInfo");
return target_40280.apply(ns_40279,final_args_array_40278);
})();

return callback_chan_40275;
});
chromex.ext.runtime.get_package_directory_entry_STAR_ = (function chromex$ext$runtime$get_package_directory_entry_STAR_(config){
var callback_chan_40296 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_40298_40303 = ((function (callback_chan_40296){
return (function (cb_directory_entry_40302){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-package-directory-entry","chromex.ext.runtime/get-package-directory-entry",-1404865573),new cljs.core.Keyword(null,"name","name",1843675177),"getPackageDirectoryEntry",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"directory-entry",new cljs.core.Keyword(null,"type","type",1174270348),"DirectoryEntry"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_40296);
})().call(null,cb_directory_entry_40302);
});})(callback_chan_40296))
;
var result_40297_40304 = (function (){var final_args_array_40299 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_40298_40303,"callback",null], null)], null),"chrome.runtime.getPackageDirectoryEntry");
var ns_40300 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40305 = config;
var api_check_fn__23454__auto___40306 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40305);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40306)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40305)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40306.call(null,"chrome.runtime.getPackageDirectoryEntry",ns_40300,"getPackageDirectoryEntry");

var config__23449__auto___40307 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40307))){
var logger__23450__auto___40308 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40307);
var prefix__23451__auto___40309 = ["calling:","chrome.runtime.getPackageDirectoryEntry"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40308)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40307)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40308.apply(null,prefix__23451__auto___40309.concat(final_args_array_40299));
} else {
}

var target_40301 = goog.object.get(ns_40300,"getPackageDirectoryEntry");
return target_40301.apply(ns_40300,final_args_array_40299);
})();

return callback_chan_40296;
});
chromex.ext.runtime.on_startup_STAR_ = (function chromex$ext$runtime$on_startup_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40316 = arguments.length;
var i__19488__auto___40317 = (0);
while(true){
if((i__19488__auto___40317 < len__19487__auto___40316)){
args__19494__auto__.push((arguments[i__19488__auto___40317]));

var G__40318 = (i__19488__auto___40317 + (1));
i__19488__auto___40317 = G__40318;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40313 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-startup","chromex.ext.runtime/on-startup",-1208972204),channel);
})();
var handler_fn_40314 = event_fn_40313;
var logging_fn__23751__auto__ = ((function (event_fn_40313,handler_fn_40314){
return (function (){
var config__23449__auto___40319 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40319))){
var logger__23450__auto___40320 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40319);
var prefix__23451__auto___40321 = ["event:","chrome.runtime.onStartup"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40320)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40319)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40320.apply(null,prefix__23451__auto___40321.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_40314.call(null);
});})(event_fn_40313,handler_fn_40314))
;
var ns_obj_40315 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40322 = config;
var api_check_fn__23454__auto___40323 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40322);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40323)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40322)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40323.call(null,"chrome.runtime.onStartup",ns_obj_40315,"onStartup");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40315,"onStartup");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_startup_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_startup_STAR_.cljs$lang$applyTo = (function (seq40310){
var G__40311 = cljs.core.first.call(null,seq40310);
var seq40310__$1 = cljs.core.next.call(null,seq40310);
var G__40312 = cljs.core.first.call(null,seq40310__$1);
var seq40310__$2 = cljs.core.next.call(null,seq40310__$1);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40311,G__40312,seq40310__$2);
});
chromex.ext.runtime.on_installed_STAR_ = (function chromex$ext$runtime$on_installed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40332 = arguments.length;
var i__19488__auto___40333 = (0);
while(true){
if((i__19488__auto___40333 < len__19487__auto___40332)){
args__19494__auto__.push((arguments[i__19488__auto___40333]));

var G__40334 = (i__19488__auto___40333 + (1));
i__19488__auto___40333 = G__40334;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40327 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-installed","chromex.ext.runtime/on-installed",1653814653),channel);
})();
var handler_fn_40328 = ((function (event_fn_40327){
return (function (cb_details_40330){
return event_fn_40327.call(null,cb_details_40330);
});})(event_fn_40327))
;
var logging_fn__23751__auto__ = ((function (event_fn_40327,handler_fn_40328){
return (function (cb_param_details_40331){
var config__23449__auto___40335 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40335))){
var logger__23450__auto___40336 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40335);
var prefix__23451__auto___40337 = ["event:","chrome.runtime.onInstalled"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40336)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40335)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40336.apply(null,prefix__23451__auto___40337.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_40331], null))));
} else {
}

return handler_fn_40328.call(null,cb_param_details_40331);
});})(event_fn_40327,handler_fn_40328))
;
var ns_obj_40329 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40338 = config;
var api_check_fn__23454__auto___40339 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40338);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40339)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40338)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40339.call(null,"chrome.runtime.onInstalled",ns_obj_40329,"onInstalled");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40329,"onInstalled");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_installed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_installed_STAR_.cljs$lang$applyTo = (function (seq40324){
var G__40325 = cljs.core.first.call(null,seq40324);
var seq40324__$1 = cljs.core.next.call(null,seq40324);
var G__40326 = cljs.core.first.call(null,seq40324__$1);
var seq40324__$2 = cljs.core.next.call(null,seq40324__$1);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40325,G__40326,seq40324__$2);
});
chromex.ext.runtime.on_suspend_STAR_ = (function chromex$ext$runtime$on_suspend_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40346 = arguments.length;
var i__19488__auto___40347 = (0);
while(true){
if((i__19488__auto___40347 < len__19487__auto___40346)){
args__19494__auto__.push((arguments[i__19488__auto___40347]));

var G__40348 = (i__19488__auto___40347 + (1));
i__19488__auto___40347 = G__40348;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40343 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend","chromex.ext.runtime/on-suspend",-1228920175),channel);
})();
var handler_fn_40344 = event_fn_40343;
var logging_fn__23751__auto__ = ((function (event_fn_40343,handler_fn_40344){
return (function (){
var config__23449__auto___40349 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40349))){
var logger__23450__auto___40350 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40349);
var prefix__23451__auto___40351 = ["event:","chrome.runtime.onSuspend"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40350)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40349)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40350.apply(null,prefix__23451__auto___40351.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_40344.call(null);
});})(event_fn_40343,handler_fn_40344))
;
var ns_obj_40345 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40352 = config;
var api_check_fn__23454__auto___40353 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40352);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40353)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40352)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40353.call(null,"chrome.runtime.onSuspend",ns_obj_40345,"onSuspend");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40345,"onSuspend");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$applyTo = (function (seq40340){
var G__40341 = cljs.core.first.call(null,seq40340);
var seq40340__$1 = cljs.core.next.call(null,seq40340);
var G__40342 = cljs.core.first.call(null,seq40340__$1);
var seq40340__$2 = cljs.core.next.call(null,seq40340__$1);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40341,G__40342,seq40340__$2);
});
chromex.ext.runtime.on_suspend_canceled_STAR_ = (function chromex$ext$runtime$on_suspend_canceled_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40360 = arguments.length;
var i__19488__auto___40361 = (0);
while(true){
if((i__19488__auto___40361 < len__19487__auto___40360)){
args__19494__auto__.push((arguments[i__19488__auto___40361]));

var G__40362 = (i__19488__auto___40361 + (1));
i__19488__auto___40361 = G__40362;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40357 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend-canceled","chromex.ext.runtime/on-suspend-canceled",-827432771),channel);
})();
var handler_fn_40358 = event_fn_40357;
var logging_fn__23751__auto__ = ((function (event_fn_40357,handler_fn_40358){
return (function (){
var config__23449__auto___40363 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40363))){
var logger__23450__auto___40364 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40363);
var prefix__23451__auto___40365 = ["event:","chrome.runtime.onSuspendCanceled"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40364)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40363)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40364.apply(null,prefix__23451__auto___40365.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_40358.call(null);
});})(event_fn_40357,handler_fn_40358))
;
var ns_obj_40359 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40366 = config;
var api_check_fn__23454__auto___40367 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40366);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40367)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40366)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40367.call(null,"chrome.runtime.onSuspendCanceled",ns_obj_40359,"onSuspendCanceled");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40359,"onSuspendCanceled");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$applyTo = (function (seq40354){
var G__40355 = cljs.core.first.call(null,seq40354);
var seq40354__$1 = cljs.core.next.call(null,seq40354);
var G__40356 = cljs.core.first.call(null,seq40354__$1);
var seq40354__$2 = cljs.core.next.call(null,seq40354__$1);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40355,G__40356,seq40354__$2);
});
chromex.ext.runtime.on_update_available_STAR_ = (function chromex$ext$runtime$on_update_available_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40376 = arguments.length;
var i__19488__auto___40377 = (0);
while(true){
if((i__19488__auto___40377 < len__19487__auto___40376)){
args__19494__auto__.push((arguments[i__19488__auto___40377]));

var G__40378 = (i__19488__auto___40377 + (1));
i__19488__auto___40377 = G__40378;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40371 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-update-available","chromex.ext.runtime/on-update-available",-1242137249),channel);
})();
var handler_fn_40372 = ((function (event_fn_40371){
return (function (cb_details_40374){
return event_fn_40371.call(null,cb_details_40374);
});})(event_fn_40371))
;
var logging_fn__23751__auto__ = ((function (event_fn_40371,handler_fn_40372){
return (function (cb_param_details_40375){
var config__23449__auto___40379 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40379))){
var logger__23450__auto___40380 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40379);
var prefix__23451__auto___40381 = ["event:","chrome.runtime.onUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40380)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40379)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40380.apply(null,prefix__23451__auto___40381.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_40375], null))));
} else {
}

return handler_fn_40372.call(null,cb_param_details_40375);
});})(event_fn_40371,handler_fn_40372))
;
var ns_obj_40373 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40382 = config;
var api_check_fn__23454__auto___40383 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40382);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40383)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40382)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40383.call(null,"chrome.runtime.onUpdateAvailable",ns_obj_40373,"onUpdateAvailable");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40373,"onUpdateAvailable");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$applyTo = (function (seq40368){
var G__40369 = cljs.core.first.call(null,seq40368);
var seq40368__$1 = cljs.core.next.call(null,seq40368);
var G__40370 = cljs.core.first.call(null,seq40368__$1);
var seq40368__$2 = cljs.core.next.call(null,seq40368__$1);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40369,G__40370,seq40368__$2);
});
chromex.ext.runtime.on_browser_update_available_STAR_ = (function chromex$ext$runtime$on_browser_update_available_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40390 = arguments.length;
var i__19488__auto___40391 = (0);
while(true){
if((i__19488__auto___40391 < len__19487__auto___40390)){
args__19494__auto__.push((arguments[i__19488__auto___40391]));

var G__40392 = (i__19488__auto___40391 + (1));
i__19488__auto___40391 = G__40392;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40387 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-browser-update-available","chromex.ext.runtime/on-browser-update-available",-2070315485),channel);
})();
var handler_fn_40388 = event_fn_40387;
var logging_fn__23751__auto__ = ((function (event_fn_40387,handler_fn_40388){
return (function (){
var config__23449__auto___40393 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40393))){
var logger__23450__auto___40394 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40393);
var prefix__23451__auto___40395 = ["event:","chrome.runtime.onBrowserUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40394)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40393)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40394.apply(null,prefix__23451__auto___40395.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_40388.call(null);
});})(event_fn_40387,handler_fn_40388))
;
var ns_obj_40389 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40396 = config;
var api_check_fn__23454__auto___40397 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40396);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40397)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40396)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40397.call(null,"chrome.runtime.onBrowserUpdateAvailable",ns_obj_40389,"onBrowserUpdateAvailable");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40389,"onBrowserUpdateAvailable");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$applyTo = (function (seq40384){
var G__40385 = cljs.core.first.call(null,seq40384);
var seq40384__$1 = cljs.core.next.call(null,seq40384);
var G__40386 = cljs.core.first.call(null,seq40384__$1);
var seq40384__$2 = cljs.core.next.call(null,seq40384__$1);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40385,G__40386,seq40384__$2);
});
chromex.ext.runtime.on_connect_STAR_ = (function chromex$ext$runtime$on_connect_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40406 = arguments.length;
var i__19488__auto___40407 = (0);
while(true){
if((i__19488__auto___40407 < len__19487__auto___40406)){
args__19494__auto__.push((arguments[i__19488__auto___40407]));

var G__40408 = (i__19488__auto___40407 + (1));
i__19488__auto___40407 = G__40408;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40401 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect","chromex.ext.runtime/on-connect",-693825711),channel);
})();
var handler_fn_40402 = ((function (event_fn_40401){
return (function (cb_port_40404){
return event_fn_40401.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_40404));
});})(event_fn_40401))
;
var logging_fn__23751__auto__ = ((function (event_fn_40401,handler_fn_40402){
return (function (cb_param_port_40405){
var config__23449__auto___40409 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40409))){
var logger__23450__auto___40410 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40409);
var prefix__23451__auto___40411 = ["event:","chrome.runtime.onConnect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40410)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40409)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40410.apply(null,prefix__23451__auto___40411.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_40405], null))));
} else {
}

return handler_fn_40402.call(null,cb_param_port_40405);
});})(event_fn_40401,handler_fn_40402))
;
var ns_obj_40403 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40412 = config;
var api_check_fn__23454__auto___40413 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40412);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40413)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40412)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40413.call(null,"chrome.runtime.onConnect",ns_obj_40403,"onConnect");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40403,"onConnect");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_connect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_STAR_.cljs$lang$applyTo = (function (seq40398){
var G__40399 = cljs.core.first.call(null,seq40398);
var seq40398__$1 = cljs.core.next.call(null,seq40398);
var G__40400 = cljs.core.first.call(null,seq40398__$1);
var seq40398__$2 = cljs.core.next.call(null,seq40398__$1);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40399,G__40400,seq40398__$2);
});
chromex.ext.runtime.on_connect_external_STAR_ = (function chromex$ext$runtime$on_connect_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40422 = arguments.length;
var i__19488__auto___40423 = (0);
while(true){
if((i__19488__auto___40423 < len__19487__auto___40422)){
args__19494__auto__.push((arguments[i__19488__auto___40423]));

var G__40424 = (i__19488__auto___40423 + (1));
i__19488__auto___40423 = G__40424;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40417 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect-external","chromex.ext.runtime/on-connect-external",-2057644994),channel);
})();
var handler_fn_40418 = ((function (event_fn_40417){
return (function (cb_port_40420){
return event_fn_40417.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_40420));
});})(event_fn_40417))
;
var logging_fn__23751__auto__ = ((function (event_fn_40417,handler_fn_40418){
return (function (cb_param_port_40421){
var config__23449__auto___40425 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40425))){
var logger__23450__auto___40426 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40425);
var prefix__23451__auto___40427 = ["event:","chrome.runtime.onConnectExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40426)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40425)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40426.apply(null,prefix__23451__auto___40427.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_40421], null))));
} else {
}

return handler_fn_40418.call(null,cb_param_port_40421);
});})(event_fn_40417,handler_fn_40418))
;
var ns_obj_40419 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40428 = config;
var api_check_fn__23454__auto___40429 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40428);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40429)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40428)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40429.call(null,"chrome.runtime.onConnectExternal",ns_obj_40419,"onConnectExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40419,"onConnectExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$applyTo = (function (seq40414){
var G__40415 = cljs.core.first.call(null,seq40414);
var seq40414__$1 = cljs.core.next.call(null,seq40414);
var G__40416 = cljs.core.first.call(null,seq40414__$1);
var seq40414__$2 = cljs.core.next.call(null,seq40414__$1);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40415,G__40416,seq40414__$2);
});
chromex.ext.runtime.on_message_STAR_ = (function chromex$ext$runtime$on_message_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40442 = arguments.length;
var i__19488__auto___40443 = (0);
while(true){
if((i__19488__auto___40443 < len__19487__auto___40442)){
args__19494__auto__.push((arguments[i__19488__auto___40443]));

var G__40444 = (i__19488__auto___40443 + (1));
i__19488__auto___40443 = G__40444;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40433 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message","chromex.ext.runtime/on-message",2147364293),channel);
})();
var handler_fn_40434 = ((function (event_fn_40433){
return (function (cb_message_40436,cb_sender_40437,cb_send_response_40438){
return event_fn_40433.call(null,cb_message_40436,cb_sender_40437,cb_send_response_40438);
});})(event_fn_40433))
;
var logging_fn__23751__auto__ = ((function (event_fn_40433,handler_fn_40434){
return (function (cb_param_message_40439,cb_param_sender_40440,cb_param_send_response_40441){
var config__23449__auto___40445 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40445))){
var logger__23450__auto___40446 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40445);
var prefix__23451__auto___40447 = ["event:","chrome.runtime.onMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40446)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40445)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40446.apply(null,prefix__23451__auto___40447.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_40439,cb_param_sender_40440,cb_param_send_response_40441], null))));
} else {
}

return handler_fn_40434.call(null,cb_param_message_40439,cb_param_sender_40440,cb_param_send_response_40441);
});})(event_fn_40433,handler_fn_40434))
;
var ns_obj_40435 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40448 = config;
var api_check_fn__23454__auto___40449 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40448);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40449)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40448)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40449.call(null,"chrome.runtime.onMessage",ns_obj_40435,"onMessage");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40435,"onMessage");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_message_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_STAR_.cljs$lang$applyTo = (function (seq40430){
var G__40431 = cljs.core.first.call(null,seq40430);
var seq40430__$1 = cljs.core.next.call(null,seq40430);
var G__40432 = cljs.core.first.call(null,seq40430__$1);
var seq40430__$2 = cljs.core.next.call(null,seq40430__$1);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40431,G__40432,seq40430__$2);
});
chromex.ext.runtime.on_message_external_STAR_ = (function chromex$ext$runtime$on_message_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40462 = arguments.length;
var i__19488__auto___40463 = (0);
while(true){
if((i__19488__auto___40463 < len__19487__auto___40462)){
args__19494__auto__.push((arguments[i__19488__auto___40463]));

var G__40464 = (i__19488__auto___40463 + (1));
i__19488__auto___40463 = G__40464;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40453 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message-external","chromex.ext.runtime/on-message-external",-779703990),channel);
})();
var handler_fn_40454 = ((function (event_fn_40453){
return (function (cb_message_40456,cb_sender_40457,cb_send_response_40458){
return event_fn_40453.call(null,cb_message_40456,cb_sender_40457,cb_send_response_40458);
});})(event_fn_40453))
;
var logging_fn__23751__auto__ = ((function (event_fn_40453,handler_fn_40454){
return (function (cb_param_message_40459,cb_param_sender_40460,cb_param_send_response_40461){
var config__23449__auto___40465 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40465))){
var logger__23450__auto___40466 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40465);
var prefix__23451__auto___40467 = ["event:","chrome.runtime.onMessageExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40466)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40465)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40466.apply(null,prefix__23451__auto___40467.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_40459,cb_param_sender_40460,cb_param_send_response_40461], null))));
} else {
}

return handler_fn_40454.call(null,cb_param_message_40459,cb_param_sender_40460,cb_param_send_response_40461);
});})(event_fn_40453,handler_fn_40454))
;
var ns_obj_40455 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40468 = config;
var api_check_fn__23454__auto___40469 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40468);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40469)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40468)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40469.call(null,"chrome.runtime.onMessageExternal",ns_obj_40455,"onMessageExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40455,"onMessageExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$applyTo = (function (seq40450){
var G__40451 = cljs.core.first.call(null,seq40450);
var seq40450__$1 = cljs.core.next.call(null,seq40450);
var G__40452 = cljs.core.first.call(null,seq40450__$1);
var seq40450__$2 = cljs.core.next.call(null,seq40450__$1);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40451,G__40452,seq40450__$2);
});
chromex.ext.runtime.on_restart_required_STAR_ = (function chromex$ext$runtime$on_restart_required_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___40478 = arguments.length;
var i__19488__auto___40479 = (0);
while(true){
if((i__19488__auto___40479 < len__19487__auto___40478)){
args__19494__auto__.push((arguments[i__19488__auto___40479]));

var G__40480 = (i__19488__auto___40479 + (1));
i__19488__auto___40479 = G__40480;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_40473 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-restart-required","chromex.ext.runtime/on-restart-required",-754128621),channel);
})();
var handler_fn_40474 = ((function (event_fn_40473){
return (function (cb_reason_40476){
return event_fn_40473.call(null,cb_reason_40476);
});})(event_fn_40473))
;
var logging_fn__23751__auto__ = ((function (event_fn_40473,handler_fn_40474){
return (function (cb_param_reason_40477){
var config__23449__auto___40481 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40481))){
var logger__23450__auto___40482 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___40481);
var prefix__23451__auto___40483 = ["event:","chrome.runtime.onRestartRequired"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___40482)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___40481)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___40482.apply(null,prefix__23451__auto___40483.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_reason_40477], null))));
} else {
}

return handler_fn_40474.call(null,cb_param_reason_40477);
});})(event_fn_40473,handler_fn_40474))
;
var ns_obj_40475 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"runtime");
} else {
return null;
}
})();
var config__23453__auto___40484 = config;
var api_check_fn__23454__auto___40485 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___40484);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___40485)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___40484)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___40485.call(null,"chrome.runtime.onRestartRequired",ns_obj_40475,"onRestartRequired");

var event_obj__23752__auto__ = goog.object.get(ns_obj_40475,"onRestartRequired");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$applyTo = (function (seq40470){
var G__40471 = cljs.core.first.call(null,seq40470);
var seq40470__$1 = cljs.core.next.call(null,seq40470);
var G__40472 = cljs.core.first.call(null,seq40470__$1);
var seq40470__$2 = cljs.core.next.call(null,seq40470__$1);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40471,G__40472,seq40470__$2);
});

//# sourceMappingURL=runtime.js.map