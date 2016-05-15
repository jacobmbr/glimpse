// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.web_request');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.web_request.max_handler_behavior_changed_calls_per10_minutes_STAR_ = (function chromex$ext$web_request$max_handler_behavior_changed_calls_per10_minutes_STAR_(config){
var result_41142 = (function (){var final_args_array_41143 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES");
var ns_41144 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();

var config__23449__auto___41146 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41146))){
var logger__23450__auto___41147 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41146);
var prefix__23451__auto___41148 = ["accessing:","chrome.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41147)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41146)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41147.apply(null,prefix__23451__auto___41148.concat(final_args_array_41143));
} else {
}

var target_41145 = goog.object.get(ns_41144,"MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES");
return target_41145;
})();
return result_41142;
});
chromex.ext.web_request.handler_behavior_changed_STAR_ = (function chromex$ext$web_request$handler_behavior_changed_STAR_(config){
var callback_chan_41155 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_41157_41161 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.web-request","handler-behavior-changed","chromex.ext.web-request/handler-behavior-changed",252009549),new cljs.core.Keyword(null,"name","name",1843675177),"handlerBehaviorChanged",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_41155);
})();
var result_41156_41162 = (function (){var final_args_array_41158 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_41157_41161,"callback",true], null)], null),"chrome.webRequest.handlerBehaviorChanged");
var ns_41159 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41163 = config;
var api_check_fn__23454__auto___41164 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41163);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41164)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41163)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41164.call(null,"chrome.webRequest.handlerBehaviorChanged",ns_41159,"handlerBehaviorChanged");

var config__23449__auto___41165 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41165))){
var logger__23450__auto___41166 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41165);
var prefix__23451__auto___41167 = ["calling:","chrome.webRequest.handlerBehaviorChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41166)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41165)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41166.apply(null,prefix__23451__auto___41167.concat(final_args_array_41158));
} else {
}

var target_41160 = goog.object.get(ns_41159,"handlerBehaviorChanged");
return target_41160.apply(ns_41159,final_args_array_41158);
})();

return callback_chan_41155;
});
chromex.ext.web_request.on_before_request_STAR_ = (function chromex$ext$web_request$on_before_request_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41176 = arguments.length;
var i__19488__auto___41177 = (0);
while(true){
if((i__19488__auto___41177 < len__19487__auto___41176)){
args__19494__auto__.push((arguments[i__19488__auto___41177]));

var G__41178 = (i__19488__auto___41177 + (1));
i__19488__auto___41177 = G__41178;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_before_request_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_before_request_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41171 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-before-request","chromex.ext.web-request/on-before-request",624356786),channel);
})();
var handler_fn_41172 = ((function (event_fn_41171){
return (function (cb_details_41174){
return event_fn_41171.call(null,cb_details_41174);
});})(event_fn_41171))
;
var logging_fn__23751__auto__ = ((function (event_fn_41171,handler_fn_41172){
return (function (cb_param_details_41175){
var config__23449__auto___41179 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41179))){
var logger__23450__auto___41180 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41179);
var prefix__23451__auto___41181 = ["event:","chrome.webRequest.onBeforeRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41180)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41179)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41180.apply(null,prefix__23451__auto___41181.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41175], null))));
} else {
}

return handler_fn_41172.call(null,cb_param_details_41175);
});})(event_fn_41171,handler_fn_41172))
;
var ns_obj_41173 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41182 = config;
var api_check_fn__23454__auto___41183 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41182);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41183)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41182)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41183.call(null,"chrome.webRequest.onBeforeRequest",ns_obj_41173,"onBeforeRequest");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41173,"onBeforeRequest");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_before_request_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_before_request_STAR_.cljs$lang$applyTo = (function (seq41168){
var G__41169 = cljs.core.first.call(null,seq41168);
var seq41168__$1 = cljs.core.next.call(null,seq41168);
var G__41170 = cljs.core.first.call(null,seq41168__$1);
var seq41168__$2 = cljs.core.next.call(null,seq41168__$1);
return chromex.ext.web_request.on_before_request_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41169,G__41170,seq41168__$2);
});
chromex.ext.web_request.on_before_send_headers_STAR_ = (function chromex$ext$web_request$on_before_send_headers_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41192 = arguments.length;
var i__19488__auto___41193 = (0);
while(true){
if((i__19488__auto___41193 < len__19487__auto___41192)){
args__19494__auto__.push((arguments[i__19488__auto___41193]));

var G__41194 = (i__19488__auto___41193 + (1));
i__19488__auto___41193 = G__41194;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_before_send_headers_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_before_send_headers_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41187 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-before-send-headers","chromex.ext.web-request/on-before-send-headers",2127356477),channel);
})();
var handler_fn_41188 = ((function (event_fn_41187){
return (function (cb_details_41190){
return event_fn_41187.call(null,cb_details_41190);
});})(event_fn_41187))
;
var logging_fn__23751__auto__ = ((function (event_fn_41187,handler_fn_41188){
return (function (cb_param_details_41191){
var config__23449__auto___41195 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41195))){
var logger__23450__auto___41196 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41195);
var prefix__23451__auto___41197 = ["event:","chrome.webRequest.onBeforeSendHeaders"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41196)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41195)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41196.apply(null,prefix__23451__auto___41197.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41191], null))));
} else {
}

return handler_fn_41188.call(null,cb_param_details_41191);
});})(event_fn_41187,handler_fn_41188))
;
var ns_obj_41189 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41198 = config;
var api_check_fn__23454__auto___41199 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41198);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41199)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41198)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41199.call(null,"chrome.webRequest.onBeforeSendHeaders",ns_obj_41189,"onBeforeSendHeaders");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41189,"onBeforeSendHeaders");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_before_send_headers_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_before_send_headers_STAR_.cljs$lang$applyTo = (function (seq41184){
var G__41185 = cljs.core.first.call(null,seq41184);
var seq41184__$1 = cljs.core.next.call(null,seq41184);
var G__41186 = cljs.core.first.call(null,seq41184__$1);
var seq41184__$2 = cljs.core.next.call(null,seq41184__$1);
return chromex.ext.web_request.on_before_send_headers_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41185,G__41186,seq41184__$2);
});
chromex.ext.web_request.on_send_headers_STAR_ = (function chromex$ext$web_request$on_send_headers_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41208 = arguments.length;
var i__19488__auto___41209 = (0);
while(true){
if((i__19488__auto___41209 < len__19487__auto___41208)){
args__19494__auto__.push((arguments[i__19488__auto___41209]));

var G__41210 = (i__19488__auto___41209 + (1));
i__19488__auto___41209 = G__41210;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_send_headers_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_send_headers_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41203 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-send-headers","chromex.ext.web-request/on-send-headers",-2008315460),channel);
})();
var handler_fn_41204 = ((function (event_fn_41203){
return (function (cb_details_41206){
return event_fn_41203.call(null,cb_details_41206);
});})(event_fn_41203))
;
var logging_fn__23751__auto__ = ((function (event_fn_41203,handler_fn_41204){
return (function (cb_param_details_41207){
var config__23449__auto___41211 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41211))){
var logger__23450__auto___41212 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41211);
var prefix__23451__auto___41213 = ["event:","chrome.webRequest.onSendHeaders"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41212)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41211)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41212.apply(null,prefix__23451__auto___41213.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41207], null))));
} else {
}

return handler_fn_41204.call(null,cb_param_details_41207);
});})(event_fn_41203,handler_fn_41204))
;
var ns_obj_41205 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41214 = config;
var api_check_fn__23454__auto___41215 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41214);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41215)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41214)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41215.call(null,"chrome.webRequest.onSendHeaders",ns_obj_41205,"onSendHeaders");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41205,"onSendHeaders");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_send_headers_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_send_headers_STAR_.cljs$lang$applyTo = (function (seq41200){
var G__41201 = cljs.core.first.call(null,seq41200);
var seq41200__$1 = cljs.core.next.call(null,seq41200);
var G__41202 = cljs.core.first.call(null,seq41200__$1);
var seq41200__$2 = cljs.core.next.call(null,seq41200__$1);
return chromex.ext.web_request.on_send_headers_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41201,G__41202,seq41200__$2);
});
chromex.ext.web_request.on_headers_received_STAR_ = (function chromex$ext$web_request$on_headers_received_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41224 = arguments.length;
var i__19488__auto___41225 = (0);
while(true){
if((i__19488__auto___41225 < len__19487__auto___41224)){
args__19494__auto__.push((arguments[i__19488__auto___41225]));

var G__41226 = (i__19488__auto___41225 + (1));
i__19488__auto___41225 = G__41226;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_headers_received_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_headers_received_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41219 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-headers-received","chromex.ext.web-request/on-headers-received",-1393822051),channel);
})();
var handler_fn_41220 = ((function (event_fn_41219){
return (function (cb_details_41222){
return event_fn_41219.call(null,cb_details_41222);
});})(event_fn_41219))
;
var logging_fn__23751__auto__ = ((function (event_fn_41219,handler_fn_41220){
return (function (cb_param_details_41223){
var config__23449__auto___41227 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41227))){
var logger__23450__auto___41228 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41227);
var prefix__23451__auto___41229 = ["event:","chrome.webRequest.onHeadersReceived"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41228)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41227)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41228.apply(null,prefix__23451__auto___41229.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41223], null))));
} else {
}

return handler_fn_41220.call(null,cb_param_details_41223);
});})(event_fn_41219,handler_fn_41220))
;
var ns_obj_41221 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41230 = config;
var api_check_fn__23454__auto___41231 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41230);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41231)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41230)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41231.call(null,"chrome.webRequest.onHeadersReceived",ns_obj_41221,"onHeadersReceived");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41221,"onHeadersReceived");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_headers_received_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_headers_received_STAR_.cljs$lang$applyTo = (function (seq41216){
var G__41217 = cljs.core.first.call(null,seq41216);
var seq41216__$1 = cljs.core.next.call(null,seq41216);
var G__41218 = cljs.core.first.call(null,seq41216__$1);
var seq41216__$2 = cljs.core.next.call(null,seq41216__$1);
return chromex.ext.web_request.on_headers_received_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41217,G__41218,seq41216__$2);
});
chromex.ext.web_request.on_auth_required_STAR_ = (function chromex$ext$web_request$on_auth_required_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41242 = arguments.length;
var i__19488__auto___41243 = (0);
while(true){
if((i__19488__auto___41243 < len__19487__auto___41242)){
args__19494__auto__.push((arguments[i__19488__auto___41243]));

var G__41244 = (i__19488__auto___41243 + (1));
i__19488__auto___41243 = G__41244;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_auth_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_auth_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41235 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-auth-required","chromex.ext.web-request/on-auth-required",-2142522223),channel);
})();
var handler_fn_41236 = ((function (event_fn_41235){
return (function (cb_details_41238,cb_callback_41239){
return event_fn_41235.call(null,cb_details_41238,cb_callback_41239);
});})(event_fn_41235))
;
var logging_fn__23751__auto__ = ((function (event_fn_41235,handler_fn_41236){
return (function (cb_param_details_41240,cb_param_callback_41241){
var config__23449__auto___41245 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41245))){
var logger__23450__auto___41246 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41245);
var prefix__23451__auto___41247 = ["event:","chrome.webRequest.onAuthRequired"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41246)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41245)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41246.apply(null,prefix__23451__auto___41247.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41240,cb_param_callback_41241], null))));
} else {
}

return handler_fn_41236.call(null,cb_param_details_41240,cb_param_callback_41241);
});})(event_fn_41235,handler_fn_41236))
;
var ns_obj_41237 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41248 = config;
var api_check_fn__23454__auto___41249 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41248);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41249)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41248)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41249.call(null,"chrome.webRequest.onAuthRequired",ns_obj_41237,"onAuthRequired");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41237,"onAuthRequired");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_auth_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_auth_required_STAR_.cljs$lang$applyTo = (function (seq41232){
var G__41233 = cljs.core.first.call(null,seq41232);
var seq41232__$1 = cljs.core.next.call(null,seq41232);
var G__41234 = cljs.core.first.call(null,seq41232__$1);
var seq41232__$2 = cljs.core.next.call(null,seq41232__$1);
return chromex.ext.web_request.on_auth_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41233,G__41234,seq41232__$2);
});
chromex.ext.web_request.on_response_started_STAR_ = (function chromex$ext$web_request$on_response_started_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41258 = arguments.length;
var i__19488__auto___41259 = (0);
while(true){
if((i__19488__auto___41259 < len__19487__auto___41258)){
args__19494__auto__.push((arguments[i__19488__auto___41259]));

var G__41260 = (i__19488__auto___41259 + (1));
i__19488__auto___41259 = G__41260;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_response_started_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_response_started_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41253 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-response-started","chromex.ext.web-request/on-response-started",423325176),channel);
})();
var handler_fn_41254 = ((function (event_fn_41253){
return (function (cb_details_41256){
return event_fn_41253.call(null,cb_details_41256);
});})(event_fn_41253))
;
var logging_fn__23751__auto__ = ((function (event_fn_41253,handler_fn_41254){
return (function (cb_param_details_41257){
var config__23449__auto___41261 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41261))){
var logger__23450__auto___41262 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41261);
var prefix__23451__auto___41263 = ["event:","chrome.webRequest.onResponseStarted"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41262)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41261)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41262.apply(null,prefix__23451__auto___41263.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41257], null))));
} else {
}

return handler_fn_41254.call(null,cb_param_details_41257);
});})(event_fn_41253,handler_fn_41254))
;
var ns_obj_41255 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41264 = config;
var api_check_fn__23454__auto___41265 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41264);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41265)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41264)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41265.call(null,"chrome.webRequest.onResponseStarted",ns_obj_41255,"onResponseStarted");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41255,"onResponseStarted");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_response_started_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_response_started_STAR_.cljs$lang$applyTo = (function (seq41250){
var G__41251 = cljs.core.first.call(null,seq41250);
var seq41250__$1 = cljs.core.next.call(null,seq41250);
var G__41252 = cljs.core.first.call(null,seq41250__$1);
var seq41250__$2 = cljs.core.next.call(null,seq41250__$1);
return chromex.ext.web_request.on_response_started_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41251,G__41252,seq41250__$2);
});
chromex.ext.web_request.on_before_redirect_STAR_ = (function chromex$ext$web_request$on_before_redirect_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41274 = arguments.length;
var i__19488__auto___41275 = (0);
while(true){
if((i__19488__auto___41275 < len__19487__auto___41274)){
args__19494__auto__.push((arguments[i__19488__auto___41275]));

var G__41276 = (i__19488__auto___41275 + (1));
i__19488__auto___41275 = G__41276;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_before_redirect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_before_redirect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41269 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-before-redirect","chromex.ext.web-request/on-before-redirect",-45462324),channel);
})();
var handler_fn_41270 = ((function (event_fn_41269){
return (function (cb_details_41272){
return event_fn_41269.call(null,cb_details_41272);
});})(event_fn_41269))
;
var logging_fn__23751__auto__ = ((function (event_fn_41269,handler_fn_41270){
return (function (cb_param_details_41273){
var config__23449__auto___41277 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41277))){
var logger__23450__auto___41278 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41277);
var prefix__23451__auto___41279 = ["event:","chrome.webRequest.onBeforeRedirect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41278)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41277)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41278.apply(null,prefix__23451__auto___41279.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41273], null))));
} else {
}

return handler_fn_41270.call(null,cb_param_details_41273);
});})(event_fn_41269,handler_fn_41270))
;
var ns_obj_41271 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41280 = config;
var api_check_fn__23454__auto___41281 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41280);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41281)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41280)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41281.call(null,"chrome.webRequest.onBeforeRedirect",ns_obj_41271,"onBeforeRedirect");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41271,"onBeforeRedirect");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_before_redirect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_before_redirect_STAR_.cljs$lang$applyTo = (function (seq41266){
var G__41267 = cljs.core.first.call(null,seq41266);
var seq41266__$1 = cljs.core.next.call(null,seq41266);
var G__41268 = cljs.core.first.call(null,seq41266__$1);
var seq41266__$2 = cljs.core.next.call(null,seq41266__$1);
return chromex.ext.web_request.on_before_redirect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41267,G__41268,seq41266__$2);
});
chromex.ext.web_request.on_completed_STAR_ = (function chromex$ext$web_request$on_completed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41290 = arguments.length;
var i__19488__auto___41291 = (0);
while(true){
if((i__19488__auto___41291 < len__19487__auto___41290)){
args__19494__auto__.push((arguments[i__19488__auto___41291]));

var G__41292 = (i__19488__auto___41291 + (1));
i__19488__auto___41291 = G__41292;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_completed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_completed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41285 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-completed","chromex.ext.web-request/on-completed",966962263),channel);
})();
var handler_fn_41286 = ((function (event_fn_41285){
return (function (cb_details_41288){
return event_fn_41285.call(null,cb_details_41288);
});})(event_fn_41285))
;
var logging_fn__23751__auto__ = ((function (event_fn_41285,handler_fn_41286){
return (function (cb_param_details_41289){
var config__23449__auto___41293 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41293))){
var logger__23450__auto___41294 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41293);
var prefix__23451__auto___41295 = ["event:","chrome.webRequest.onCompleted"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41294)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41293)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41294.apply(null,prefix__23451__auto___41295.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41289], null))));
} else {
}

return handler_fn_41286.call(null,cb_param_details_41289);
});})(event_fn_41285,handler_fn_41286))
;
var ns_obj_41287 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41296 = config;
var api_check_fn__23454__auto___41297 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41296);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41297)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41296)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41297.call(null,"chrome.webRequest.onCompleted",ns_obj_41287,"onCompleted");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41287,"onCompleted");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_completed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_completed_STAR_.cljs$lang$applyTo = (function (seq41282){
var G__41283 = cljs.core.first.call(null,seq41282);
var seq41282__$1 = cljs.core.next.call(null,seq41282);
var G__41284 = cljs.core.first.call(null,seq41282__$1);
var seq41282__$2 = cljs.core.next.call(null,seq41282__$1);
return chromex.ext.web_request.on_completed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41283,G__41284,seq41282__$2);
});
chromex.ext.web_request.on_error_occurred_STAR_ = (function chromex$ext$web_request$on_error_occurred_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41306 = arguments.length;
var i__19488__auto___41307 = (0);
while(true){
if((i__19488__auto___41307 < len__19487__auto___41306)){
args__19494__auto__.push((arguments[i__19488__auto___41307]));

var G__41308 = (i__19488__auto___41307 + (1));
i__19488__auto___41307 = G__41308;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.web_request.on_error_occurred_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.web_request.on_error_occurred_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41301 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.web-request","on-error-occurred","chromex.ext.web-request/on-error-occurred",-1798002270),channel);
})();
var handler_fn_41302 = ((function (event_fn_41301){
return (function (cb_details_41304){
return event_fn_41301.call(null,cb_details_41304);
});})(event_fn_41301))
;
var logging_fn__23751__auto__ = ((function (event_fn_41301,handler_fn_41302){
return (function (cb_param_details_41305){
var config__23449__auto___41309 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41309))){
var logger__23450__auto___41310 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41309);
var prefix__23451__auto___41311 = ["event:","chrome.webRequest.onErrorOccurred"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41310)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41309)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41310.apply(null,prefix__23451__auto___41311.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_41305], null))));
} else {
}

return handler_fn_41302.call(null,cb_param_details_41305);
});})(event_fn_41301,handler_fn_41302))
;
var ns_obj_41303 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"webRequest");
} else {
return null;
}
})();
var config__23453__auto___41312 = config;
var api_check_fn__23454__auto___41313 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41312);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41313)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41312)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41313.call(null,"chrome.webRequest.onErrorOccurred",ns_obj_41303,"onErrorOccurred");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41303,"onErrorOccurred");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.web_request.on_error_occurred_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.web_request.on_error_occurred_STAR_.cljs$lang$applyTo = (function (seq41298){
var G__41299 = cljs.core.first.call(null,seq41298);
var seq41298__$1 = cljs.core.next.call(null,seq41298);
var G__41300 = cljs.core.first.call(null,seq41298__$1);
var seq41298__$2 = cljs.core.next.call(null,seq41298__$1);
return chromex.ext.web_request.on_error_occurred_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41299,G__41300,seq41298__$2);
});

//# sourceMappingURL=web_request.js.map