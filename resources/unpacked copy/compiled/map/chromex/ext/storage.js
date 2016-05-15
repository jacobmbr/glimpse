// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.storage');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.storage.sync_STAR_ = (function chromex$ext$storage$sync_STAR_(config){
var result_31963 = (function (){var final_args_array_31964 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.sync");
var ns_31965 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();

var config__23449__auto___31967 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___31967))){
var logger__23450__auto___31968 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___31967);
var prefix__23451__auto___31969 = ["accessing:","chrome.storage.sync"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___31968)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___31967)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___31968.apply(null,prefix__23451__auto___31969.concat(final_args_array_31964));
} else {
}

var target_31966 = goog.object.get(ns_31965,"sync");
return target_31966;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_31963);
});
chromex.ext.storage.local_STAR_ = (function chromex$ext$storage$local_STAR_(config){
var result_31974 = (function (){var final_args_array_31975 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.local");
var ns_31976 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();

var config__23449__auto___31978 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___31978))){
var logger__23450__auto___31979 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___31978);
var prefix__23451__auto___31980 = ["accessing:","chrome.storage.local"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___31979)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___31978)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___31979.apply(null,prefix__23451__auto___31980.concat(final_args_array_31975));
} else {
}

var target_31977 = goog.object.get(ns_31976,"local");
return target_31977;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_31974);
});
chromex.ext.storage.managed_STAR_ = (function chromex$ext$storage$managed_STAR_(config){
var result_31985 = (function (){var final_args_array_31986 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.managed");
var ns_31987 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();

var config__23449__auto___31989 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___31989))){
var logger__23450__auto___31990 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___31989);
var prefix__23451__auto___31991 = ["accessing:","chrome.storage.managed"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___31990)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___31989)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___31990.apply(null,prefix__23451__auto___31991.concat(final_args_array_31986));
} else {
}

var target_31988 = goog.object.get(ns_31987,"managed");
return target_31988;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_31985);
});
chromex.ext.storage.on_changed_STAR_ = (function chromex$ext$storage$on_changed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___32002 = arguments.length;
var i__19488__auto___32003 = (0);
while(true){
if((i__19488__auto___32003 < len__19487__auto___32002)){
args__19494__auto__.push((arguments[i__19488__auto___32003]));

var G__32004 = (i__19488__auto___32003 + (1));
i__19488__auto___32003 = G__32004;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_31995 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.storage","on-changed","chromex.ext.storage/on-changed",-1738146817),channel);
})();
var handler_fn_31996 = ((function (event_fn_31995){
return (function (cb_changes_31998,cb_area_name_31999){
return event_fn_31995.call(null,cb_changes_31998,cb_area_name_31999);
});})(event_fn_31995))
;
var logging_fn__23751__auto__ = ((function (event_fn_31995,handler_fn_31996){
return (function (cb_param_changes_32000,cb_param_area_name_32001){
var config__23449__auto___32005 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___32005))){
var logger__23450__auto___32006 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___32005);
var prefix__23451__auto___32007 = ["event:","chrome.storage.onChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___32006)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___32005)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___32006.apply(null,prefix__23451__auto___32007.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_changes_32000,cb_param_area_name_32001], null))));
} else {
}

return handler_fn_31996.call(null,cb_param_changes_32000,cb_param_area_name_32001);
});})(event_fn_31995,handler_fn_31996))
;
var ns_obj_31997 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();
var config__23453__auto___32008 = config;
var api_check_fn__23454__auto___32009 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___32008);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___32009)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___32008)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___32009.call(null,"chrome.storage.onChanged",ns_obj_31997,"onChanged");

var event_obj__23752__auto__ = goog.object.get(ns_obj_31997,"onChanged");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.storage.on_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.storage.on_changed_STAR_.cljs$lang$applyTo = (function (seq31992){
var G__31993 = cljs.core.first.call(null,seq31992);
var seq31992__$1 = cljs.core.next.call(null,seq31992);
var G__31994 = cljs.core.first.call(null,seq31992__$1);
var seq31992__$2 = cljs.core.next.call(null,seq31992__$1);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__31993,G__31994,seq31992__$2);
});

//# sourceMappingURL=storage.js.map