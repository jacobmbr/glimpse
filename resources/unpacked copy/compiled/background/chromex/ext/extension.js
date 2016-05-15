// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.extension');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.extension.last_error_STAR_ = (function chromex$ext$extension$last_error_STAR_(config){
var result_42108 = (function (){var final_args_array_42109 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.lastError");
var ns_42110 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();

var config__23449__auto___42112 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42112))){
var logger__23450__auto___42113 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42112);
var prefix__23451__auto___42114 = ["accessing:","chrome.extension.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42113)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42112)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42113.apply(null,prefix__23451__auto___42114.concat(final_args_array_42109));
} else {
}

var target_42111 = goog.object.get(ns_42110,"lastError");
return target_42111;
})();
return result_42108;
});
chromex.ext.extension.in_incognito_context_STAR_ = (function chromex$ext$extension$in_incognito_context_STAR_(config){
var result_42119 = (function (){var final_args_array_42120 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.inIncognitoContext");
var ns_42121 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();

var config__23449__auto___42123 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42123))){
var logger__23450__auto___42124 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42123);
var prefix__23451__auto___42125 = ["accessing:","chrome.extension.inIncognitoContext"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42124)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42123)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42124.apply(null,prefix__23451__auto___42125.concat(final_args_array_42120));
} else {
}

var target_42122 = goog.object.get(ns_42121,"inIncognitoContext");
return target_42122;
})();
return result_42119;
});
chromex.ext.extension.send_request_STAR_ = (function chromex$ext$extension$send_request_STAR_(config,extension_id,request){
var callback_chan_42137 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_extension_id_42139_42148 = (function (){var omit_test_42145 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42145,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42145;
}
})();
var marshalled_request_42140_42149 = (function (){var omit_test_42146 = request;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42146,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42146;
}
})();
var marshalled_response_callback_42141_42150 = ((function (marshalled_extension_id_42139_42148,marshalled_request_42140_42149,callback_chan_42137){
return (function (cb_response_42147){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","send-request","chromex.ext.extension/send-request",-1627447591),new cljs.core.Keyword(null,"name","name",1843675177),"sendRequest",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'runtime.sendMessage'.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"request",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42137);
})().call(null,cb_response_42147);
});})(marshalled_extension_id_42139_42148,marshalled_request_42140_42149,callback_chan_42137))
;
var result_42138_42151 = (function (){var final_args_array_42142 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_42139_42148,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_request_42140_42149,"request",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_42141_42150,"response-callback",true], null)], null),"chrome.extension.sendRequest");
var ns_42143 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42152 = config;
var api_check_fn__23454__auto___42153 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42152);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42153)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42152)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42153.call(null,"chrome.extension.sendRequest",ns_42143,"sendRequest");

var config__23449__auto___42154 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42154))){
var logger__23450__auto___42155 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42154);
var prefix__23451__auto___42156 = ["calling:","chrome.extension.sendRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42155)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42154)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42155.apply(null,prefix__23451__auto___42156.concat(final_args_array_42142));
} else {
}

var target_42144 = goog.object.get(ns_42143,"sendRequest");
return target_42144.apply(ns_42143,final_args_array_42142);
})();

return callback_chan_42137;
});
chromex.ext.extension.get_url_STAR_ = (function chromex$ext$extension$get_url_STAR_(config,path){
var marshalled_path_42164 = (function (){var omit_test_42168 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42168,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42168;
}
})();
var result_42163 = (function (){var final_args_array_42165 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_42164,"path",null], null)], null),"chrome.extension.getURL");
var ns_42166 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42169 = config;
var api_check_fn__23454__auto___42170 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42169);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42170)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42169)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42170.call(null,"chrome.extension.getURL",ns_42166,"getURL");

var config__23449__auto___42171 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42171))){
var logger__23450__auto___42172 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42171);
var prefix__23451__auto___42173 = ["calling:","chrome.extension.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42172)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42171)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42172.apply(null,prefix__23451__auto___42173.concat(final_args_array_42165));
} else {
}

var target_42167 = goog.object.get(ns_42166,"getURL");
return target_42167.apply(ns_42166,final_args_array_42165);
})();
return result_42163;
});
chromex.ext.extension.get_views_STAR_ = (function chromex$ext$extension$get_views_STAR_(config,fetch_properties){
var marshalled_fetch_properties_42181 = (function (){var omit_test_42185 = fetch_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42185,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42185;
}
})();
var result_42180 = (function (){var final_args_array_42182 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_fetch_properties_42181,"fetch-properties",true], null)], null),"chrome.extension.getViews");
var ns_42183 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42186 = config;
var api_check_fn__23454__auto___42187 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42186);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42187)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42186)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42187.call(null,"chrome.extension.getViews",ns_42183,"getViews");

var config__23449__auto___42188 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42188))){
var logger__23450__auto___42189 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42188);
var prefix__23451__auto___42190 = ["calling:","chrome.extension.getViews"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42189)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42188)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42189.apply(null,prefix__23451__auto___42190.concat(final_args_array_42182));
} else {
}

var target_42184 = goog.object.get(ns_42183,"getViews");
return target_42184.apply(ns_42183,final_args_array_42182);
})();
return result_42180;
});
chromex.ext.extension.get_background_page_STAR_ = (function chromex$ext$extension$get_background_page_STAR_(config){
var result_42195 = (function (){var final_args_array_42196 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.extension.getBackgroundPage");
var ns_42197 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42199 = config;
var api_check_fn__23454__auto___42200 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42199);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42200)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42199)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42200.call(null,"chrome.extension.getBackgroundPage",ns_42197,"getBackgroundPage");

var config__23449__auto___42201 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42201))){
var logger__23450__auto___42202 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42201);
var prefix__23451__auto___42203 = ["calling:","chrome.extension.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42202)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42201)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42202.apply(null,prefix__23451__auto___42203.concat(final_args_array_42196));
} else {
}

var target_42198 = goog.object.get(ns_42197,"getBackgroundPage");
return target_42198.apply(ns_42197,final_args_array_42196);
})();
return result_42195;
});
chromex.ext.extension.get_extension_tabs_STAR_ = (function chromex$ext$extension$get_extension_tabs_STAR_(config,window_id){
var marshalled_window_id_42211 = (function (){var omit_test_42215 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42215,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42215;
}
})();
var result_42210 = (function (){var final_args_array_42212 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_42211,"window-id",true], null)], null),"chrome.extension.getExtensionTabs");
var ns_42213 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42216 = config;
var api_check_fn__23454__auto___42217 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42216);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42217)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42216)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42217.call(null,"chrome.extension.getExtensionTabs",ns_42213,"getExtensionTabs");

var config__23449__auto___42218 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42218))){
var logger__23450__auto___42219 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42218);
var prefix__23451__auto___42220 = ["calling:","chrome.extension.getExtensionTabs"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42219)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42218)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42219.apply(null,prefix__23451__auto___42220.concat(final_args_array_42212));
} else {
}

var target_42214 = goog.object.get(ns_42213,"getExtensionTabs");
return target_42214.apply(ns_42213,final_args_array_42212);
})();
return result_42210;
});
chromex.ext.extension.is_allowed_incognito_access_STAR_ = (function chromex$ext$extension$is_allowed_incognito_access_STAR_(config){
var callback_chan_42228 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_42230_42235 = ((function (callback_chan_42228){
return (function (cb_is_allowed_access_42234){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","is-allowed-incognito-access","chromex.ext.extension/is-allowed-incognito-access",1994060844),new cljs.core.Keyword(null,"name","name",1843675177),"isAllowedIncognitoAccess",new cljs.core.Keyword(null,"since","since",315379842),"12",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"is-allowed-access",new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42228);
})().call(null,cb_is_allowed_access_42234);
});})(callback_chan_42228))
;
var result_42229_42236 = (function (){var final_args_array_42231 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42230_42235,"callback",null], null)], null),"chrome.extension.isAllowedIncognitoAccess");
var ns_42232 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42237 = config;
var api_check_fn__23454__auto___42238 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42237);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42238)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42237)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42238.call(null,"chrome.extension.isAllowedIncognitoAccess",ns_42232,"isAllowedIncognitoAccess");

var config__23449__auto___42239 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42239))){
var logger__23450__auto___42240 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42239);
var prefix__23451__auto___42241 = ["calling:","chrome.extension.isAllowedIncognitoAccess"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42240)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42239)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42240.apply(null,prefix__23451__auto___42241.concat(final_args_array_42231));
} else {
}

var target_42233 = goog.object.get(ns_42232,"isAllowedIncognitoAccess");
return target_42233.apply(ns_42232,final_args_array_42231);
})();

return callback_chan_42228;
});
chromex.ext.extension.is_allowed_file_scheme_access_STAR_ = (function chromex$ext$extension$is_allowed_file_scheme_access_STAR_(config){
var callback_chan_42249 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_42251_42256 = ((function (callback_chan_42249){
return (function (cb_is_allowed_access_42255){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.extension","is-allowed-file-scheme-access","chromex.ext.extension/is-allowed-file-scheme-access",-1145139318),new cljs.core.Keyword(null,"name","name",1843675177),"isAllowedFileSchemeAccess",new cljs.core.Keyword(null,"since","since",315379842),"12",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"is-allowed-access",new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42249);
})().call(null,cb_is_allowed_access_42255);
});})(callback_chan_42249))
;
var result_42250_42257 = (function (){var final_args_array_42252 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42251_42256,"callback",null], null)], null),"chrome.extension.isAllowedFileSchemeAccess");
var ns_42253 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42258 = config;
var api_check_fn__23454__auto___42259 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42258);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42259)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42258)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42259.call(null,"chrome.extension.isAllowedFileSchemeAccess",ns_42253,"isAllowedFileSchemeAccess");

var config__23449__auto___42260 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42260))){
var logger__23450__auto___42261 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42260);
var prefix__23451__auto___42262 = ["calling:","chrome.extension.isAllowedFileSchemeAccess"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42261)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42260)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42261.apply(null,prefix__23451__auto___42262.concat(final_args_array_42252));
} else {
}

var target_42254 = goog.object.get(ns_42253,"isAllowedFileSchemeAccess");
return target_42254.apply(ns_42253,final_args_array_42252);
})();

return callback_chan_42249;
});
chromex.ext.extension.set_update_url_data_STAR_ = (function chromex$ext$extension$set_update_url_data_STAR_(config,data){
var marshalled_data_42270 = (function (){var omit_test_42274 = data;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42274,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42274;
}
})();
var result_42269 = (function (){var final_args_array_42271 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_data_42270,"data",null], null)], null),"chrome.extension.setUpdateUrlData");
var ns_42272 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42275 = config;
var api_check_fn__23454__auto___42276 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42275);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42276)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42275)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42276.call(null,"chrome.extension.setUpdateUrlData",ns_42272,"setUpdateUrlData");

var config__23449__auto___42277 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42277))){
var logger__23450__auto___42278 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42277);
var prefix__23451__auto___42279 = ["calling:","chrome.extension.setUpdateUrlData"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42278)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42277)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42278.apply(null,prefix__23451__auto___42279.concat(final_args_array_42271));
} else {
}

var target_42273 = goog.object.get(ns_42272,"setUpdateUrlData");
return target_42273.apply(ns_42272,final_args_array_42271);
})();
return result_42269;
});
chromex.ext.extension.on_request_STAR_ = (function chromex$ext$extension$on_request_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___42292 = arguments.length;
var i__19488__auto___42293 = (0);
while(true){
if((i__19488__auto___42293 < len__19487__auto___42292)){
args__19494__auto__.push((arguments[i__19488__auto___42293]));

var G__42294 = (i__19488__auto___42293 + (1));
i__19488__auto___42293 = G__42294;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_42283 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.extension","on-request","chromex.ext.extension/on-request",1965416331),channel);
})();
var handler_fn_42284 = ((function (event_fn_42283){
return (function (cb_request_42286,cb_sender_42287,cb_send_response_42288){
return event_fn_42283.call(null,cb_request_42286,cb_sender_42287,cb_send_response_42288);
});})(event_fn_42283))
;
var logging_fn__23751__auto__ = ((function (event_fn_42283,handler_fn_42284){
return (function (cb_param_request_42289,cb_param_sender_42290,cb_param_send_response_42291){
var config__23449__auto___42295 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42295))){
var logger__23450__auto___42296 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42295);
var prefix__23451__auto___42297 = ["event:","chrome.extension.onRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42296)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42295)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42296.apply(null,prefix__23451__auto___42297.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_request_42289,cb_param_sender_42290,cb_param_send_response_42291], null))));
} else {
}

return handler_fn_42284.call(null,cb_param_request_42289,cb_param_sender_42290,cb_param_send_response_42291);
});})(event_fn_42283,handler_fn_42284))
;
var ns_obj_42285 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42298 = config;
var api_check_fn__23454__auto___42299 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42298);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42299)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42298)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42299.call(null,"chrome.extension.onRequest",ns_obj_42285,"onRequest");

var event_obj__23752__auto__ = goog.object.get(ns_obj_42285,"onRequest");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.extension.on_request_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.extension.on_request_STAR_.cljs$lang$applyTo = (function (seq42280){
var G__42281 = cljs.core.first.call(null,seq42280);
var seq42280__$1 = cljs.core.next.call(null,seq42280);
var G__42282 = cljs.core.first.call(null,seq42280__$1);
var seq42280__$2 = cljs.core.next.call(null,seq42280__$1);
return chromex.ext.extension.on_request_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__42281,G__42282,seq42280__$2);
});
chromex.ext.extension.on_request_external_STAR_ = (function chromex$ext$extension$on_request_external_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___42312 = arguments.length;
var i__19488__auto___42313 = (0);
while(true){
if((i__19488__auto___42313 < len__19487__auto___42312)){
args__19494__auto__.push((arguments[i__19488__auto___42313]));

var G__42314 = (i__19488__auto___42313 + (1));
i__19488__auto___42313 = G__42314;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_42303 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.extension","on-request-external","chromex.ext.extension/on-request-external",-869526687),channel);
})();
var handler_fn_42304 = ((function (event_fn_42303){
return (function (cb_request_42306,cb_sender_42307,cb_send_response_42308){
return event_fn_42303.call(null,cb_request_42306,cb_sender_42307,cb_send_response_42308);
});})(event_fn_42303))
;
var logging_fn__23751__auto__ = ((function (event_fn_42303,handler_fn_42304){
return (function (cb_param_request_42309,cb_param_sender_42310,cb_param_send_response_42311){
var config__23449__auto___42315 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42315))){
var logger__23450__auto___42316 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42315);
var prefix__23451__auto___42317 = ["event:","chrome.extension.onRequestExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42316)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42315)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42316.apply(null,prefix__23451__auto___42317.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_request_42309,cb_param_sender_42310,cb_param_send_response_42311], null))));
} else {
}

return handler_fn_42304.call(null,cb_param_request_42309,cb_param_sender_42310,cb_param_send_response_42311);
});})(event_fn_42303,handler_fn_42304))
;
var ns_obj_42305 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"extension");
} else {
return null;
}
})();
var config__23453__auto___42318 = config;
var api_check_fn__23454__auto___42319 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42318);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42319)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42318)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42319.call(null,"chrome.extension.onRequestExternal",ns_obj_42305,"onRequestExternal");

var event_obj__23752__auto__ = goog.object.get(ns_obj_42305,"onRequestExternal");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.extension.on_request_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.extension.on_request_external_STAR_.cljs$lang$applyTo = (function (seq42300){
var G__42301 = cljs.core.first.call(null,seq42300);
var seq42300__$1 = cljs.core.next.call(null,seq42300);
var G__42302 = cljs.core.first.call(null,seq42300__$1);
var seq42300__$2 = cljs.core.next.call(null,seq42300__$1);
return chromex.ext.extension.on_request_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__42301,G__42302,seq42300__$2);
});

//# sourceMappingURL=extension.js.map