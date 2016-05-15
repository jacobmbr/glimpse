// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.extension');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.extension.last_error_STAR_ = (function chromex$ext$extension$last_error_STAR_(config){
var result_15556 = (function (){var final_args_array_15557 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.lastError");
var ns_15558 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();

var config__8788__auto___15560 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15560))){
var logger__8789__auto___15561 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15560);
var prefix__8790__auto___15562 = ["accessing:","chrome.extension.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___15561)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___15560)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___15561.apply(null,prefix__8790__auto___15562.concat(final_args_array_15557));
} else {
}

var target_15559 = goog.object.get(ns_15558,"lastError");
return target_15559;
})();
return result_15556;
});
chromex.ext.extension.in_incognito_context_STAR_ = (function chromex$ext$extension$in_incognito_context_STAR_(config){
var result_15569 = (function (){var final_args_array_15570 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.inIncognitoContext");
var ns_15571 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();

var config__8788__auto___15576 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15576))){
var logger__8789__auto___15577 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15576);
var prefix__8790__auto___15578 = ["accessing:","chrome.extension.inIncognitoContext"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___15577)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___15576)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___15577.apply(null,prefix__8790__auto___15578.concat(final_args_array_15570));
} else {
}

var target_15572 = goog.object.get(ns_15571,"inIncognitoContext");
return target_15572;
})();
return result_15569;
});
chromex.ext.extension.send_request_STAR_ = (function chromex$ext$extension$send_request_STAR_(config,extension_id,request){
var callback_chan_15597 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_extension_id_15599_15885 = (function (){var omit_test_15605 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_15605,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_15605;
}
})();
var marshalled_request_15600_15886 = (function (){var omit_test_15606 = request;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_15606,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_15606;
}
})();
var marshalled_response_callback_15601_15887 = ((function (marshalled_extension_id_15599_15885,marshalled_request_15600_15886,callback_chan_15597){
return (function (cb_response_15607){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","send-request","chromex.ext.extension/send-request",-1627447591),new cljs.core.Keyword(null,"name","name",1843675177),"sendRequest",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'runtime.sendMessage'.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"request",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_15597);
})().call(null,cb_response_15607);
});})(marshalled_extension_id_15599_15885,marshalled_request_15600_15886,callback_chan_15597))
;
var result_15598_15888 = (function (){var final_args_array_15602 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_15599_15885,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_request_15600_15886,"request",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_15601_15887,"response-callback",true], null)], null),"chrome.extension.sendRequest");
var ns_15603 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___15892 = config;
var api_check_fn__8793__auto___15893 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___15892);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___15893)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___15892)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___15893.call(null,"chrome.extension.sendRequest",ns_15603,"sendRequest");

var config__8788__auto___15894 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15894))){
var logger__8789__auto___15895 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15894);
var prefix__8790__auto___15896 = ["calling:","chrome.extension.sendRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___15895)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___15894)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___15895.apply(null,prefix__8790__auto___15896.concat(final_args_array_15602));
} else {
}

var target_15604 = goog.object.get(ns_15603,"sendRequest");
return target_15604.apply(ns_15603,final_args_array_15602);
})();

return callback_chan_15597;
});
chromex.ext.extension.get_url_STAR_ = (function chromex$ext$extension$get_url_STAR_(config,path){
var marshalled_path_15904 = (function (){var omit_test_15908 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_15908,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_15908;
}
})();
var result_15903 = (function (){var final_args_array_15905 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_15904,"path",null], null)], null),"chrome.extension.getURL");
var ns_15906 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16046 = config;
var api_check_fn__8793__auto___16047 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16046);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16047)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16046)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16047.call(null,"chrome.extension.getURL",ns_15906,"getURL");

var config__8788__auto___16048 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16048))){
var logger__8789__auto___16049 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16048);
var prefix__8790__auto___16050 = ["calling:","chrome.extension.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16049)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16048)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16049.apply(null,prefix__8790__auto___16050.concat(final_args_array_15905));
} else {
}

var target_15907 = goog.object.get(ns_15906,"getURL");
return target_15907.apply(ns_15906,final_args_array_15905);
})();
return result_15903;
});
chromex.ext.extension.get_views_STAR_ = (function chromex$ext$extension$get_views_STAR_(config,fetch_properties){
var marshalled_fetch_properties_16064 = (function (){var omit_test_16068 = fetch_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_16068,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_16068;
}
})();
var result_16063 = (function (){var final_args_array_16065 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_fetch_properties_16064,"fetch-properties",true], null)], null),"chrome.extension.getViews");
var ns_16066 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16070 = config;
var api_check_fn__8793__auto___16071 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16070);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16071)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16070)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16071.call(null,"chrome.extension.getViews",ns_16066,"getViews");

var config__8788__auto___16074 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16074))){
var logger__8789__auto___16075 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16074);
var prefix__8790__auto___16076 = ["calling:","chrome.extension.getViews"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16075)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16074)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16075.apply(null,prefix__8790__auto___16076.concat(final_args_array_16065));
} else {
}

var target_16067 = goog.object.get(ns_16066,"getViews");
return target_16067.apply(ns_16066,final_args_array_16065);
})();
return result_16063;
});
chromex.ext.extension.get_background_page_STAR_ = (function chromex$ext$extension$get_background_page_STAR_(config){
var result_16082 = (function (){var final_args_array_16083 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.getBackgroundPage");
var ns_16084 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16086 = config;
var api_check_fn__8793__auto___16087 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16086);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16087)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16086)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16087.call(null,"chrome.extension.getBackgroundPage",ns_16084,"getBackgroundPage");

var config__8788__auto___16088 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16088))){
var logger__8789__auto___16089 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16088);
var prefix__8790__auto___16090 = ["calling:","chrome.extension.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16089)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16088)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16089.apply(null,prefix__8790__auto___16090.concat(final_args_array_16083));
} else {
}

var target_16085 = goog.object.get(ns_16084,"getBackgroundPage");
return target_16085.apply(ns_16084,final_args_array_16083);
})();
return result_16082;
});
chromex.ext.extension.get_extension_tabs_STAR_ = (function chromex$ext$extension$get_extension_tabs_STAR_(config,window_id){
var marshalled_window_id_16112 = (function (){var omit_test_16116 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_16116,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_16116;
}
})();
var result_16111 = (function (){var final_args_array_16113 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_16112,"window-id",true], null)], null),"chrome.extension.getExtensionTabs");
var ns_16114 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16147 = config;
var api_check_fn__8793__auto___16148 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16147);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16148)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16147)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16148.call(null,"chrome.extension.getExtensionTabs",ns_16114,"getExtensionTabs");

var config__8788__auto___16150 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16150))){
var logger__8789__auto___16151 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16150);
var prefix__8790__auto___16152 = ["calling:","chrome.extension.getExtensionTabs"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16151)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16150)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16151.apply(null,prefix__8790__auto___16152.concat(final_args_array_16113));
} else {
}

var target_16115 = goog.object.get(ns_16114,"getExtensionTabs");
return target_16115.apply(ns_16114,final_args_array_16113);
})();
return result_16111;
});
chromex.ext.extension.is_allowed_incognito_access_STAR_ = (function chromex$ext$extension$is_allowed_incognito_access_STAR_(config){
var callback_chan_16160 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_callback_16162_16171 = ((function (callback_chan_16160){
return (function (cb_is_allowed_access_16166){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","is-allowed-incognito-access","chromex.ext.extension/is-allowed-incognito-access",1994060844),new cljs.core.Keyword(null,"name","name",1843675177),"isAllowedIncognitoAccess",new cljs.core.Keyword(null,"since","since",315379842),"12",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"is-allowed-access",new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_16160);
})().call(null,cb_is_allowed_access_16166);
});})(callback_chan_16160))
;
var result_16161_16172 = (function (){var final_args_array_16163 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_16162_16171,"callback",null], null)], null),"chrome.extension.isAllowedIncognitoAccess");
var ns_16164 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16256 = config;
var api_check_fn__8793__auto___16257 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16256);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16257)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16256)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16257.call(null,"chrome.extension.isAllowedIncognitoAccess",ns_16164,"isAllowedIncognitoAccess");

var config__8788__auto___16264 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16264))){
var logger__8789__auto___16267 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16264);
var prefix__8790__auto___16268 = ["calling:","chrome.extension.isAllowedIncognitoAccess"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16267)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16264)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16267.apply(null,prefix__8790__auto___16268.concat(final_args_array_16163));
} else {
}

var target_16165 = goog.object.get(ns_16164,"isAllowedIncognitoAccess");
return target_16165.apply(ns_16164,final_args_array_16163);
})();

return callback_chan_16160;
});
chromex.ext.extension.is_allowed_file_scheme_access_STAR_ = (function chromex$ext$extension$is_allowed_file_scheme_access_STAR_(config){
var callback_chan_16292 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__);
})();
var marshalled_callback_16294_16374 = ((function (callback_chan_16292){
return (function (cb_is_allowed_access_16298){
return (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","is-allowed-file-scheme-access","chromex.ext.extension/is-allowed-file-scheme-access",-1145139318),new cljs.core.Keyword(null,"name","name",1843675177),"isAllowedFileSchemeAccess",new cljs.core.Keyword(null,"since","since",315379842),"12",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"is-allowed-access",new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_16292);
})().call(null,cb_is_allowed_access_16298);
});})(callback_chan_16292))
;
var result_16293_16375 = (function (){var final_args_array_16295 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_16294_16374,"callback",null], null)], null),"chrome.extension.isAllowedFileSchemeAccess");
var ns_16296 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16376 = config;
var api_check_fn__8793__auto___16377 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16376);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16377)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16376)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16377.call(null,"chrome.extension.isAllowedFileSchemeAccess",ns_16296,"isAllowedFileSchemeAccess");

var config__8788__auto___16378 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16378))){
var logger__8789__auto___16379 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16378);
var prefix__8790__auto___16380 = ["calling:","chrome.extension.isAllowedFileSchemeAccess"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16379)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16378)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16379.apply(null,prefix__8790__auto___16380.concat(final_args_array_16295));
} else {
}

var target_16297 = goog.object.get(ns_16296,"isAllowedFileSchemeAccess");
return target_16297.apply(ns_16296,final_args_array_16295);
})();

return callback_chan_16292;
});
chromex.ext.extension.set_update_url_data_STAR_ = (function chromex$ext$extension$set_update_url_data_STAR_(config,data){
var marshalled_data_16388 = (function (){var omit_test_16392 = data;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_16392,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_16392;
}
})();
var result_16387 = (function (){var final_args_array_16389 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_data_16388,"data",null], null)], null),"chrome.extension.setUpdateUrlData");
var ns_16390 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16397 = config;
var api_check_fn__8793__auto___16398 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16397);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16398)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16397)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16398.call(null,"chrome.extension.setUpdateUrlData",ns_16390,"setUpdateUrlData");

var config__8788__auto___16399 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16399))){
var logger__8789__auto___16400 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16399);
var prefix__8790__auto___16401 = ["calling:","chrome.extension.setUpdateUrlData"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16400)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16399)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16400.apply(null,prefix__8790__auto___16401.concat(final_args_array_16389));
} else {
}

var target_16391 = goog.object.get(ns_16390,"setUpdateUrlData");
return target_16391.apply(ns_16390,final_args_array_16389);
})();
return result_16387;
});
chromex.ext.extension.on_request_STAR_ = (function chromex$ext$extension$on_request_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___16414 = arguments.length;
var i__7279__auto___16415 = (0);
while(true){
if((i__7279__auto___16415 < len__7278__auto___16414)){
args__7285__auto__.push((arguments[i__7279__auto___16415]));

var G__16416 = (i__7279__auto___16415 + (1));
i__7279__auto___16415 = G__16416;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_16405 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.extension","on-request","chromex.ext.extension/on-request",1965416331),channel);
})();
var handler_fn_16406 = ((function (event_fn_16405){
return (function (cb_request_16408,cb_sender_16409,cb_send_response_16410){
return event_fn_16405.call(null,cb_request_16408,cb_sender_16409,cb_send_response_16410);
});})(event_fn_16405))
;
var logging_fn__12038__auto__ = ((function (event_fn_16405,handler_fn_16406){
return (function (cb_param_request_16411,cb_param_sender_16412,cb_param_send_response_16413){
var config__8788__auto___16417 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16417))){
var logger__8789__auto___16418 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16417);
var prefix__8790__auto___16419 = ["event:","chrome.extension.onRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16418)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16417)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16418.apply(null,prefix__8790__auto___16419.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_request_16411,cb_param_sender_16412,cb_param_send_response_16413], null))));
} else {
}

return handler_fn_16406.call(null,cb_param_request_16411,cb_param_sender_16412,cb_param_send_response_16413);
});})(event_fn_16405,handler_fn_16406))
;
var ns_obj_16407 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16424 = config;
var api_check_fn__8793__auto___16425 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16424);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16425)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16424)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16425.call(null,"chrome.extension.onRequest",ns_obj_16407,"onRequest");

var event_obj__12039__auto__ = goog.object.get(ns_obj_16407,"onRequest");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.extension.on_request_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.extension.on_request_STAR_.cljs$lang$applyTo = (function (seq16402){
var G__16403 = cljs.core.first.call(null,seq16402);
var seq16402__$1 = cljs.core.next.call(null,seq16402);
var G__16404 = cljs.core.first.call(null,seq16402__$1);
var seq16402__$2 = cljs.core.next.call(null,seq16402__$1);
return chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__16403,G__16404,seq16402__$2);
});
chromex.ext.extension.on_request_external_STAR_ = (function chromex$ext$extension$on_request_external_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___16448 = arguments.length;
var i__7279__auto___16449 = (0);
while(true){
if((i__7279__auto___16449 < len__7278__auto___16448)){
args__7285__auto__.push((arguments[i__7279__auto___16449]));

var G__16450 = (i__7279__auto___16449 + (1));
i__7279__auto___16449 = G__16450;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_16437 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.extension","on-request-external","chromex.ext.extension/on-request-external",-869526687),channel);
})();
var handler_fn_16438 = ((function (event_fn_16437){
return (function (cb_request_16440,cb_sender_16441,cb_send_response_16442){
return event_fn_16437.call(null,cb_request_16440,cb_sender_16441,cb_send_response_16442);
});})(event_fn_16437))
;
var logging_fn__12038__auto__ = ((function (event_fn_16437,handler_fn_16438){
return (function (cb_param_request_16443,cb_param_sender_16444,cb_param_send_response_16445){
var config__8788__auto___16453 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16453))){
var logger__8789__auto___16454 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___16453);
var prefix__8790__auto___16455 = ["event:","chrome.extension.onRequestExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___16454)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___16453)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___16454.apply(null,prefix__8790__auto___16455.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_request_16443,cb_param_sender_16444,cb_param_send_response_16445], null))));
} else {
}

return handler_fn_16438.call(null,cb_param_request_16443,cb_param_sender_16444,cb_param_send_response_16445);
});})(event_fn_16437,handler_fn_16438))
;
var ns_obj_16439 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"extension");
} else {
return null;
}
})();
var config__8792__auto___16457 = config;
var api_check_fn__8793__auto___16458 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___16457);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___16458)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___16457)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___16458.call(null,"chrome.extension.onRequestExternal",ns_obj_16439,"onRequestExternal");

var event_obj__12039__auto__ = goog.object.get(ns_obj_16439,"onRequestExternal");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.extension.on_request_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.extension.on_request_external_STAR_.cljs$lang$applyTo = (function (seq16432){
var G__16433 = cljs.core.first.call(null,seq16432);
var seq16432__$1 = cljs.core.next.call(null,seq16432);
var G__16434 = cljs.core.first.call(null,seq16432__$1);
var seq16432__$2 = cljs.core.next.call(null,seq16432__$1);
return chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__16433,G__16434,seq16432__$2);
});

//# sourceMappingURL=extension.js.map