// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.storage');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.storage.sync_STAR_ = (function chromex$ext$storage$sync_STAR_(config){
var result_15403 = (function (){var final_args_array_15404 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.sync");
var ns_15405 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"storage");
} else {
return null;
}
})();

var config__8788__auto___15409 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15409))){
var logger__8789__auto___15410 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15409);
var prefix__8790__auto___15411 = ["accessing:","chrome.storage.sync"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___15410)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___15409)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___15410.apply(null,prefix__8790__auto___15411.concat(final_args_array_15404));
} else {
}

var target_15406 = goog.object.get(ns_15405,"sync");
return target_15406;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_15403);
});
chromex.ext.storage.local_STAR_ = (function chromex$ext$storage$local_STAR_(config){
var result_15417 = (function (){var final_args_array_15418 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.local");
var ns_15419 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"storage");
} else {
return null;
}
})();

var config__8788__auto___15424 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15424))){
var logger__8789__auto___15425 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15424);
var prefix__8790__auto___15426 = ["accessing:","chrome.storage.local"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___15425)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___15424)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___15425.apply(null,prefix__8790__auto___15426.concat(final_args_array_15418));
} else {
}

var target_15420 = goog.object.get(ns_15419,"local");
return target_15420;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_15417);
});
chromex.ext.storage.managed_STAR_ = (function chromex$ext$storage$managed_STAR_(config){
var result_15431 = (function (){var final_args_array_15432 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.managed");
var ns_15433 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"storage");
} else {
return null;
}
})();

var config__8788__auto___15481 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15481))){
var logger__8789__auto___15483 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15481);
var prefix__8790__auto___15484 = ["accessing:","chrome.storage.managed"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___15483)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___15481)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___15483.apply(null,prefix__8790__auto___15484.concat(final_args_array_15432));
} else {
}

var target_15434 = goog.object.get(ns_15433,"managed");
return target_15434;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_15431);
});
chromex.ext.storage.on_changed_STAR_ = (function chromex$ext$storage$on_changed_STAR_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___15510 = arguments.length;
var i__7279__auto___15512 = (0);
while(true){
if((i__7279__auto___15512 < len__7278__auto___15510)){
args__7285__auto__.push((arguments[i__7279__auto___15512]));

var G__15513 = (i__7279__auto___15512 + (1));
i__7279__auto___15512 = G__15513;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_15493 = (function (){var config__8759__auto__ = config;
var handler_key__8760__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__8761__auto__ = handler_key__8760__auto__.call(null,config__8759__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__8761__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__8760__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__8759__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__8761__auto__)")].join('')));
}

return handler__8761__auto__.call(null,config__8759__auto__,new cljs.core.Keyword("chromex.ext.storage","on-changed","chromex.ext.storage/on-changed",-1738146817),channel);
})();
var handler_fn_15494 = ((function (event_fn_15493){
return (function (cb_changes_15496,cb_area_name_15497){
return event_fn_15493.call(null,cb_changes_15496,cb_area_name_15497);
});})(event_fn_15493))
;
var logging_fn__12038__auto__ = ((function (event_fn_15493,handler_fn_15494){
return (function (cb_param_changes_15498,cb_param_area_name_15499){
var config__8788__auto___15524 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15524))){
var logger__8789__auto___15525 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__8788__auto___15524);
var prefix__8790__auto___15526 = ["event:","chrome.storage.onChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__8789__auto___15525)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8788__auto___15524)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__8789__auto__)")].join('')));
}

logger__8789__auto___15525.apply(null,prefix__8790__auto___15526.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_changes_15498,cb_param_area_name_15499], null))));
} else {
}

return handler_fn_15494.call(null,cb_param_changes_15498,cb_param_area_name_15499);
});})(event_fn_15493,handler_fn_15494))
;
var ns_obj_15495 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8743__auto__ = temp__4657__auto__;
return goog.object.get(o__8743__auto__,"storage");
} else {
return null;
}
})();
var config__8792__auto___15532 = config;
var api_check_fn__8793__auto___15533 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__8792__auto___15532);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__8793__auto___15533)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__8792__auto___15532)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__8793__auto__)")].join('')));
}

api_check_fn__8793__auto___15533.call(null,"chrome.storage.onChanged",ns_obj_15495,"onChanged");

var event_obj__12039__auto__ = goog.object.get(ns_obj_15495,"onChanged");
var result__12040__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__12039__auto__,logging_fn__12038__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__12040__auto__,args);

return result__12040__auto__;
});

chromex.ext.storage.on_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.storage.on_changed_STAR_.cljs$lang$applyTo = (function (seq15488){
var G__15489 = cljs.core.first.call(null,seq15488);
var seq15488__$1 = cljs.core.next.call(null,seq15488);
var G__15490 = cljs.core.first.call(null,seq15488__$1);
var seq15488__$2 = cljs.core.next.call(null,seq15488__$1);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__15489,G__15490,seq15488__$2);
});

//# sourceMappingURL=storage.js.map