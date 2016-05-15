// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.storage');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.storage.sync_STAR_ = (function chromex$ext$storage$sync_STAR_(config){
var result_41816 = (function (){var final_args_array_41817 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.sync");
var ns_41818 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();

var config__23449__auto___41820 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41820))){
var logger__23450__auto___41821 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41820);
var prefix__23451__auto___41822 = ["accessing:","chrome.storage.sync"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41821)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41820)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41821.apply(null,prefix__23451__auto___41822.concat(final_args_array_41817));
} else {
}

var target_41819 = goog.object.get(ns_41818,"sync");
return target_41819;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_41816);
});
chromex.ext.storage.local_STAR_ = (function chromex$ext$storage$local_STAR_(config){
var result_41827 = (function (){var final_args_array_41828 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.local");
var ns_41829 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();

var config__23449__auto___41831 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41831))){
var logger__23450__auto___41832 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41831);
var prefix__23451__auto___41833 = ["accessing:","chrome.storage.local"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41832)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41831)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41832.apply(null,prefix__23451__auto___41833.concat(final_args_array_41828));
} else {
}

var target_41830 = goog.object.get(ns_41829,"local");
return target_41830;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_41827);
});
chromex.ext.storage.managed_STAR_ = (function chromex$ext$storage$managed_STAR_(config){
var result_41838 = (function (){var final_args_array_41839 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.managed");
var ns_41840 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();

var config__23449__auto___41842 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41842))){
var logger__23450__auto___41843 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41842);
var prefix__23451__auto___41844 = ["accessing:","chrome.storage.managed"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41843)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41842)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41843.apply(null,prefix__23451__auto___41844.concat(final_args_array_41839));
} else {
}

var target_41841 = goog.object.get(ns_41840,"managed");
return target_41841;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_41838);
});
chromex.ext.storage.on_changed_STAR_ = (function chromex$ext$storage$on_changed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41855 = arguments.length;
var i__19488__auto___41856 = (0);
while(true){
if((i__19488__auto___41856 < len__19487__auto___41855)){
args__19494__auto__.push((arguments[i__19488__auto___41856]));

var G__41857 = (i__19488__auto___41856 + (1));
i__19488__auto___41856 = G__41857;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41848 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.storage","on-changed","chromex.ext.storage/on-changed",-1738146817),channel);
})();
var handler_fn_41849 = ((function (event_fn_41848){
return (function (cb_changes_41851,cb_area_name_41852){
return event_fn_41848.call(null,cb_changes_41851,cb_area_name_41852);
});})(event_fn_41848))
;
var logging_fn__23751__auto__ = ((function (event_fn_41848,handler_fn_41849){
return (function (cb_param_changes_41853,cb_param_area_name_41854){
var config__23449__auto___41858 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41858))){
var logger__23450__auto___41859 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41858);
var prefix__23451__auto___41860 = ["event:","chrome.storage.onChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41859)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41858)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41859.apply(null,prefix__23451__auto___41860.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_changes_41853,cb_param_area_name_41854], null))));
} else {
}

return handler_fn_41849.call(null,cb_param_changes_41853,cb_param_area_name_41854);
});})(event_fn_41848,handler_fn_41849))
;
var ns_obj_41850 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"storage");
} else {
return null;
}
})();
var config__23453__auto___41861 = config;
var api_check_fn__23454__auto___41862 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41861);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41862)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41861)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41862.call(null,"chrome.storage.onChanged",ns_obj_41850,"onChanged");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41850,"onChanged");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.storage.on_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.storage.on_changed_STAR_.cljs$lang$applyTo = (function (seq41845){
var G__41846 = cljs.core.first.call(null,seq41845);
var seq41845__$1 = cljs.core.next.call(null,seq41845);
var G__41847 = cljs.core.first.call(null,seq41845__$1);
var seq41845__$2 = cljs.core.next.call(null,seq41845__$1);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41846,G__41847,seq41845__$2);
});

//# sourceMappingURL=storage.js.map