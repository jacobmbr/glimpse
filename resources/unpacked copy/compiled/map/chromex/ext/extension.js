// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.extension');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.extension.last_error_STAR_ = (function chromex$ext$extension$last_error_STAR_(config){
var result_33004 = (function (){var final_args_array_33005 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.lastError");
var ns_33006 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();

var config__23449__auto___33008 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33008))){
var logger__23450__auto___33009 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33008);
var prefix__23451__auto___33010 = ["accessing:","chrome.extension.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33009)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33008)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33009.apply(null,prefix__23451__auto___33010.concat(final_args_array_33005));
} else {
}

var target_33007 = goog.object.get(ns_33006,"lastError");
return target_33007;
})();
return result_33004;
});
chromex.ext.extension.in_incognito_context_STAR_ = (function chromex$ext$extension$in_incognito_context_STAR_(config){
var result_33015 = (function (){var final_args_array_33016 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.inIncognitoContext");
var ns_33017 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();

var config__23449__auto___33019 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33019))){
var logger__23450__auto___33020 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33019);
var prefix__23451__auto___33021 = ["accessing:","chrome.extension.inIncognitoContext"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33020)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33019)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33020.apply(null,prefix__23451__auto___33021.concat(final_args_array_33016));
} else {
}

var target_33018 = goog.object.get(ns_33017,"inIncognitoContext");
return target_33018;
})();
return result_33015;
});
chromex.ext.extension.send_request_STAR_ = (function chromex$ext$extension$send_request_STAR_(config,extension_id,request){
var callback_chan_33033 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_extension_id_33035_33044 = (function (){var omit_test_33041 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_33041,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_33041;
}
})();
var marshalled_request_33036_33045 = (function (){var omit_test_33042 = request;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_33042,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_33042;
}
})();
var marshalled_response_callback_33037_33046 = ((function (marshalled_extension_id_33035_33044,marshalled_request_33036_33045,callback_chan_33033){
return (function (cb_response_33043){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","send-request","chromex.ext.extension/send-request",-1627447591),new cljs.core.Keyword(null,"name","name",1843675177),"sendRequest",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'runtime.sendMessage'.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"request",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_33033);
})().call(null,cb_response_33043);
});})(marshalled_extension_id_33035_33044,marshalled_request_33036_33045,callback_chan_33033))
;
var result_33034_33047 = (function (){var final_args_array_33038 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_33035_33044,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_request_33036_33045,"request",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_33037_33046,"response-callback",true], null)], null),"chrome.extension.sendRequest");
var ns_33039 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33048 = config;
var api_check_fn__23454__auto___33049 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33048);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33049)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33048)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33049.call(null,"chrome.extension.sendRequest",ns_33039,"sendRequest");

var config__23449__auto___33050 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33050))){
var logger__23450__auto___33051 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33050);
var prefix__23451__auto___33052 = ["calling:","chrome.extension.sendRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33051)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33050)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33051.apply(null,prefix__23451__auto___33052.concat(final_args_array_33038));
} else {
}

var target_33040 = goog.object.get(ns_33039,"sendRequest");
return target_33040.apply(ns_33039,final_args_array_33038);
})();

return callback_chan_33033;
});
chromex.ext.extension.get_url_STAR_ = (function chromex$ext$extension$get_url_STAR_(config,path){
var marshalled_path_33060 = (function (){var omit_test_33064 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_33064,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_33064;
}
})();
var result_33059 = (function (){var final_args_array_33061 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_33060,"path",null], null)], null),"chrome.extension.getURL");
var ns_33062 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33065 = config;
var api_check_fn__23454__auto___33066 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33065);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33066)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33065)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33066.call(null,"chrome.extension.getURL",ns_33062,"getURL");

var config__23449__auto___33067 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33067))){
var logger__23450__auto___33068 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33067);
var prefix__23451__auto___33069 = ["calling:","chrome.extension.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33068)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33067)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33068.apply(null,prefix__23451__auto___33069.concat(final_args_array_33061));
} else {
}

var target_33063 = goog.object.get(ns_33062,"getURL");
return target_33063.apply(ns_33062,final_args_array_33061);
})();
return result_33059;
});
chromex.ext.extension.get_views_STAR_ = (function chromex$ext$extension$get_views_STAR_(config,fetch_properties){
var marshalled_fetch_properties_33077 = (function (){var omit_test_33081 = fetch_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_33081,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_33081;
}
})();
var result_33076 = (function (){var final_args_array_33078 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_fetch_properties_33077,"fetch-properties",true], null)], null),"chrome.extension.getViews");
var ns_33079 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33082 = config;
var api_check_fn__23454__auto___33083 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33082);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33083)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33082)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33083.call(null,"chrome.extension.getViews",ns_33079,"getViews");

var config__23449__auto___33084 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33084))){
var logger__23450__auto___33085 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33084);
var prefix__23451__auto___33086 = ["calling:","chrome.extension.getViews"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33085)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33084)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33085.apply(null,prefix__23451__auto___33086.concat(final_args_array_33078));
} else {
}

var target_33080 = goog.object.get(ns_33079,"getViews");
return target_33080.apply(ns_33079,final_args_array_33078);
})();
return result_33076;
});
chromex.ext.extension.get_background_page_STAR_ = (function chromex$ext$extension$get_background_page_STAR_(config){
var result_33091 = (function (){var final_args_array_33092 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.getBackgroundPage");
var ns_33093 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33095 = config;
var api_check_fn__23454__auto___33096 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33095);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33096)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33095)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33096.call(null,"chrome.extension.getBackgroundPage",ns_33093,"getBackgroundPage");

var config__23449__auto___33097 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33097))){
var logger__23450__auto___33098 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33097);
var prefix__23451__auto___33099 = ["calling:","chrome.extension.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33098)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33097)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33098.apply(null,prefix__23451__auto___33099.concat(final_args_array_33092));
} else {
}

var target_33094 = goog.object.get(ns_33093,"getBackgroundPage");
return target_33094.apply(ns_33093,final_args_array_33092);
})();
return result_33091;
});
chromex.ext.extension.get_extension_tabs_STAR_ = (function chromex$ext$extension$get_extension_tabs_STAR_(config,window_id){
var marshalled_window_id_33107 = (function (){var omit_test_33111 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_33111,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_33111;
}
})();
var result_33106 = (function (){var final_args_array_33108 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_33107,"window-id",true], null)], null),"chrome.extension.getExtensionTabs");
var ns_33109 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33112 = config;
var api_check_fn__23454__auto___33113 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33112);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33113)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33112)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33113.call(null,"chrome.extension.getExtensionTabs",ns_33109,"getExtensionTabs");

var config__23449__auto___33114 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33114))){
var logger__23450__auto___33115 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33114);
var prefix__23451__auto___33116 = ["calling:","chrome.extension.getExtensionTabs"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33115)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33114)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33115.apply(null,prefix__23451__auto___33116.concat(final_args_array_33108));
} else {
}

var target_33110 = goog.object.get(ns_33109,"getExtensionTabs");
return target_33110.apply(ns_33109,final_args_array_33108);
})();
return result_33106;
});
chromex.ext.extension.is_allowed_incognito_access_STAR_ = (function chromex$ext$extension$is_allowed_incognito_access_STAR_(config){
var callback_chan_33124 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_33126_33131 = ((function (callback_chan_33124){
return (function (cb_is_allowed_access_33130){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","is-allowed-incognito-access","chromex.ext.extension/is-allowed-incognito-access",1994060844),new cljs.core.Keyword(null,"name","name",1843675177),"isAllowedIncognitoAccess",new cljs.core.Keyword(null,"since","since",315379842),"12",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"is-allowed-access",new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_33124);
})().call(null,cb_is_allowed_access_33130);
});})(callback_chan_33124))
;
var result_33125_33132 = (function (){var final_args_array_33127 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_33126_33131,"callback",null], null)], null),"chrome.extension.isAllowedIncognitoAccess");
var ns_33128 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33133 = config;
var api_check_fn__23454__auto___33134 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33133);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33134)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33133)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33134.call(null,"chrome.extension.isAllowedIncognitoAccess",ns_33128,"isAllowedIncognitoAccess");

var config__23449__auto___33135 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33135))){
var logger__23450__auto___33136 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33135);
var prefix__23451__auto___33137 = ["calling:","chrome.extension.isAllowedIncognitoAccess"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33136)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33135)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33136.apply(null,prefix__23451__auto___33137.concat(final_args_array_33127));
} else {
}

var target_33129 = goog.object.get(ns_33128,"isAllowedIncognitoAccess");
return target_33129.apply(ns_33128,final_args_array_33127);
})();

return callback_chan_33124;
});
chromex.ext.extension.is_allowed_file_scheme_access_STAR_ = (function chromex$ext$extension$is_allowed_file_scheme_access_STAR_(config){
var callback_chan_33145 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_33147_33152 = ((function (callback_chan_33145){
return (function (cb_is_allowed_access_33151){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","is-allowed-file-scheme-access","chromex.ext.extension/is-allowed-file-scheme-access",-1145139318),new cljs.core.Keyword(null,"name","name",1843675177),"isAllowedFileSchemeAccess",new cljs.core.Keyword(null,"since","since",315379842),"12",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"is-allowed-access",new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_33145);
})().call(null,cb_is_allowed_access_33151);
});})(callback_chan_33145))
;
var result_33146_33153 = (function (){var final_args_array_33148 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_33147_33152,"callback",null], null)], null),"chrome.extension.isAllowedFileSchemeAccess");
var ns_33149 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33154 = config;
var api_check_fn__23454__auto___33155 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33154);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33155)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33154)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33155.call(null,"chrome.extension.isAllowedFileSchemeAccess",ns_33149,"isAllowedFileSchemeAccess");

var config__23449__auto___33156 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33156))){
var logger__23450__auto___33157 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33156);
var prefix__23451__auto___33158 = ["calling:","chrome.extension.isAllowedFileSchemeAccess"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33157)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33156)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33157.apply(null,prefix__23451__auto___33158.concat(final_args_array_33148));
} else {
}

var target_33150 = goog.object.get(ns_33149,"isAllowedFileSchemeAccess");
return target_33150.apply(ns_33149,final_args_array_33148);
})();

return callback_chan_33145;
});
chromex.ext.extension.set_update_url_data_STAR_ = (function chromex$ext$extension$set_update_url_data_STAR_(config,data){
var marshalled_data_33166 = (function (){var omit_test_33170 = data;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_33170,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_33170;
}
})();
var result_33165 = (function (){var final_args_array_33167 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_data_33166,"data",null], null)], null),"chrome.extension.setUpdateUrlData");
var ns_33168 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33171 = config;
var api_check_fn__23454__auto___33172 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33171);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33172)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33171)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33172.call(null,"chrome.extension.setUpdateUrlData",ns_33168,"setUpdateUrlData");

var config__23449__auto___33173 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33173))){
var logger__23450__auto___33174 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33173);
var prefix__23451__auto___33175 = ["calling:","chrome.extension.setUpdateUrlData"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33174)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33173)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33174.apply(null,prefix__23451__auto___33175.concat(final_args_array_33167));
} else {
}

var target_33169 = goog.object.get(ns_33168,"setUpdateUrlData");
return target_33169.apply(ns_33168,final_args_array_33167);
})();
return result_33165;
});
chromex.ext.extension.on_request_STAR_ = (function chromex$ext$extension$on_request_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___33188 = arguments.length;
var i__19488__auto___33189 = (0);
while(true){
if((i__19488__auto___33189 < len__19487__auto___33188)){
args__19494__auto__.push((arguments[i__19488__auto___33189]));

var G__33190 = (i__19488__auto___33189 + (1));
i__19488__auto___33189 = G__33190;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_33179 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.extension","on-request","chromex.ext.extension/on-request",1965416331),channel);
})();
var handler_fn_33180 = ((function (event_fn_33179){
return (function (cb_request_33182,cb_sender_33183,cb_send_response_33184){
return event_fn_33179.call(null,cb_request_33182,cb_sender_33183,cb_send_response_33184);
});})(event_fn_33179))
;
var logging_fn__23751__auto__ = ((function (event_fn_33179,handler_fn_33180){
return (function (cb_param_request_33185,cb_param_sender_33186,cb_param_send_response_33187){
var config__23449__auto___33191 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33191))){
var logger__23450__auto___33192 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33191);
var prefix__23451__auto___33193 = ["event:","chrome.extension.onRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33192)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33191)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33192.apply(null,prefix__23451__auto___33193.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_request_33185,cb_param_sender_33186,cb_param_send_response_33187], null))));
} else {
}

return handler_fn_33180.call(null,cb_param_request_33185,cb_param_sender_33186,cb_param_send_response_33187);
});})(event_fn_33179,handler_fn_33180))
;
var ns_obj_33181 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33194 = config;
var api_check_fn__23454__auto___33195 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33194);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33195)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33194)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33195.call(null,"chrome.extension.onRequest",ns_obj_33181,"onRequest");

var event_obj__23752__auto__ = goog.object.get(ns_obj_33181,"onRequest");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.extension.on_request_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.extension.on_request_STAR_.cljs$lang$applyTo = (function (seq33176){
var G__33177 = cljs.core.first.call(null,seq33176);
var seq33176__$1 = cljs.core.next.call(null,seq33176);
var G__33178 = cljs.core.first.call(null,seq33176__$1);
var seq33176__$2 = cljs.core.next.call(null,seq33176__$1);
return chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33177,G__33178,seq33176__$2);
});
chromex.ext.extension.on_request_external_STAR_ = (function chromex$ext$extension$on_request_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___33208 = arguments.length;
var i__19488__auto___33209 = (0);
while(true){
if((i__19488__auto___33209 < len__19487__auto___33208)){
args__19494__auto__.push((arguments[i__19488__auto___33209]));

var G__33210 = (i__19488__auto___33209 + (1));
i__19488__auto___33209 = G__33210;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_33199 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.extension","on-request-external","chromex.ext.extension/on-request-external",-869526687),channel);
})();
var handler_fn_33200 = ((function (event_fn_33199){
return (function (cb_request_33202,cb_sender_33203,cb_send_response_33204){
return event_fn_33199.call(null,cb_request_33202,cb_sender_33203,cb_send_response_33204);
});})(event_fn_33199))
;
var logging_fn__23751__auto__ = ((function (event_fn_33199,handler_fn_33200){
return (function (cb_param_request_33205,cb_param_sender_33206,cb_param_send_response_33207){
var config__23449__auto___33211 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33211))){
var logger__23450__auto___33212 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___33211);
var prefix__23451__auto___33213 = ["event:","chrome.extension.onRequestExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___33212)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___33211)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___33212.apply(null,prefix__23451__auto___33213.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_request_33205,cb_param_sender_33206,cb_param_send_response_33207], null))));
} else {
}

return handler_fn_33200.call(null,cb_param_request_33205,cb_param_sender_33206,cb_param_send_response_33207);
});})(event_fn_33199,handler_fn_33200))
;
var ns_obj_33201 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___33214 = config;
var api_check_fn__23454__auto___33215 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___33214);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___33215)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___33214)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___33215.call(null,"chrome.extension.onRequestExternal",ns_obj_33201,"onRequestExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_33201,"onRequestExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.extension.on_request_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.extension.on_request_external_STAR_.cljs$lang$applyTo = (function (seq33196){
var G__33197 = cljs.core.first.call(null,seq33196);
var seq33196__$1 = cljs.core.next.call(null,seq33196);
var G__33198 = cljs.core.first.call(null,seq33196__$1);
var seq33196__$2 = cljs.core.next.call(null,seq33196__$1);
return chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33197,G__33198,seq33196__$2);
});

//# sourceMappingURL=extension.js.map