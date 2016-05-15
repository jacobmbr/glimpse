// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26368 = cljs.core._EQ_;
var expr__26369 = (function (){var or__18417__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e26372){if((e26372 instanceof Error)){
var e = e26372;
return false;
} else {
throw e26372;

}
}})();
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26368.call(null,"true",expr__26369))){
return true;
} else {
if(cljs.core.truth_(pred__26368.call(null,"false",expr__26369))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26369)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e26374){if((e26374 instanceof Error)){
var e = e26374;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26374;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19494__auto__ = [];
var len__19487__auto___26376 = arguments.length;
var i__19488__auto___26377 = (0);
while(true){
if((i__19488__auto___26377 < len__19487__auto___26376)){
args__19494__auto__.push((arguments[i__19488__auto___26377]));

var G__26378 = (i__19488__auto___26377 + (1));
i__19488__auto___26377 = G__26378;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26375){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26375));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26379){
var map__26382 = p__26379;
var map__26382__$1 = ((((!((map__26382 == null)))?((((map__26382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var message = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18417__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18405__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18405__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18405__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20613__auto___26544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___26544,ch){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___26544,ch){
return (function (state_26513){
var state_val_26514 = (state_26513[(1)]);
if((state_val_26514 === (7))){
var inst_26509 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26515_26545 = state_26513__$1;
(statearr_26515_26545[(2)] = inst_26509);

(statearr_26515_26545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (1))){
var state_26513__$1 = state_26513;
var statearr_26516_26546 = state_26513__$1;
(statearr_26516_26546[(2)] = null);

(statearr_26516_26546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (4))){
var inst_26466 = (state_26513[(7)]);
var inst_26466__$1 = (state_26513[(2)]);
var state_26513__$1 = (function (){var statearr_26517 = state_26513;
(statearr_26517[(7)] = inst_26466__$1);

return statearr_26517;
})();
if(cljs.core.truth_(inst_26466__$1)){
var statearr_26518_26547 = state_26513__$1;
(statearr_26518_26547[(1)] = (5));

} else {
var statearr_26519_26548 = state_26513__$1;
(statearr_26519_26548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (15))){
var inst_26473 = (state_26513[(8)]);
var inst_26488 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26473);
var inst_26489 = cljs.core.first.call(null,inst_26488);
var inst_26490 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26489);
var inst_26491 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26490)].join('');
var inst_26492 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26491);
var state_26513__$1 = state_26513;
var statearr_26520_26549 = state_26513__$1;
(statearr_26520_26549[(2)] = inst_26492);

(statearr_26520_26549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (13))){
var inst_26497 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26521_26550 = state_26513__$1;
(statearr_26521_26550[(2)] = inst_26497);

(statearr_26521_26550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (6))){
var state_26513__$1 = state_26513;
var statearr_26522_26551 = state_26513__$1;
(statearr_26522_26551[(2)] = null);

(statearr_26522_26551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (17))){
var inst_26495 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26523_26552 = state_26513__$1;
(statearr_26523_26552[(2)] = inst_26495);

(statearr_26523_26552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (3))){
var inst_26511 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26513__$1,inst_26511);
} else {
if((state_val_26514 === (12))){
var inst_26472 = (state_26513[(9)]);
var inst_26486 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26472,opts);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26486)){
var statearr_26524_26553 = state_26513__$1;
(statearr_26524_26553[(1)] = (15));

} else {
var statearr_26525_26554 = state_26513__$1;
(statearr_26525_26554[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (2))){
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(4),ch);
} else {
if((state_val_26514 === (11))){
var inst_26473 = (state_26513[(8)]);
var inst_26478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26479 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26473);
var inst_26480 = cljs.core.async.timeout.call(null,(1000));
var inst_26481 = [inst_26479,inst_26480];
var inst_26482 = (new cljs.core.PersistentVector(null,2,(5),inst_26478,inst_26481,null));
var state_26513__$1 = state_26513;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26513__$1,(14),inst_26482);
} else {
if((state_val_26514 === (9))){
var inst_26473 = (state_26513[(8)]);
var inst_26499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26500 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26473);
var inst_26501 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26500);
var inst_26502 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26501)].join('');
var inst_26503 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26502);
var state_26513__$1 = (function (){var statearr_26526 = state_26513;
(statearr_26526[(10)] = inst_26499);

return statearr_26526;
})();
var statearr_26527_26555 = state_26513__$1;
(statearr_26527_26555[(2)] = inst_26503);

(statearr_26527_26555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (5))){
var inst_26466 = (state_26513[(7)]);
var inst_26468 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26469 = (new cljs.core.PersistentArrayMap(null,2,inst_26468,null));
var inst_26470 = (new cljs.core.PersistentHashSet(null,inst_26469,null));
var inst_26471 = figwheel.client.focus_msgs.call(null,inst_26470,inst_26466);
var inst_26472 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26471);
var inst_26473 = cljs.core.first.call(null,inst_26471);
var inst_26474 = figwheel.client.autoload_QMARK_.call(null);
var state_26513__$1 = (function (){var statearr_26528 = state_26513;
(statearr_26528[(8)] = inst_26473);

(statearr_26528[(9)] = inst_26472);

return statearr_26528;
})();
if(cljs.core.truth_(inst_26474)){
var statearr_26529_26556 = state_26513__$1;
(statearr_26529_26556[(1)] = (8));

} else {
var statearr_26530_26557 = state_26513__$1;
(statearr_26530_26557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (14))){
var inst_26484 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26531_26558 = state_26513__$1;
(statearr_26531_26558[(2)] = inst_26484);

(statearr_26531_26558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (16))){
var state_26513__$1 = state_26513;
var statearr_26532_26559 = state_26513__$1;
(statearr_26532_26559[(2)] = null);

(statearr_26532_26559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (10))){
var inst_26505 = (state_26513[(2)]);
var state_26513__$1 = (function (){var statearr_26533 = state_26513;
(statearr_26533[(11)] = inst_26505);

return statearr_26533;
})();
var statearr_26534_26560 = state_26513__$1;
(statearr_26534_26560[(2)] = null);

(statearr_26534_26560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (8))){
var inst_26472 = (state_26513[(9)]);
var inst_26476 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26472,opts);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26476)){
var statearr_26535_26561 = state_26513__$1;
(statearr_26535_26561[(1)] = (11));

} else {
var statearr_26536_26562 = state_26513__$1;
(statearr_26536_26562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20613__auto___26544,ch))
;
return ((function (switch__20501__auto__,c__20613__auto___26544,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0 = (function (){
var statearr_26540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26540[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__);

(statearr_26540[(1)] = (1));

return statearr_26540;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1 = (function (state_26513){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_26513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e26541){if((e26541 instanceof Object)){
var ex__20505__auto__ = e26541;
var statearr_26542_26563 = state_26513;
(statearr_26542_26563[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26564 = state_26513;
state_26513 = G__26564;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__ = function(state_26513){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1.call(this,state_26513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___26544,ch))
})();
var state__20615__auto__ = (function (){var statearr_26543 = f__20614__auto__.call(null);
(statearr_26543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___26544);

return statearr_26543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___26544,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26565_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26565_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26572 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26572){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26570 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26571 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26571;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26570;
}}catch (e26569){if((e26569 instanceof Error)){
var e = e26569;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26572], null));
} else {
var e = e26569;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26572))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26573){
var map__26580 = p__26573;
var map__26580__$1 = ((((!((map__26580 == null)))?((((map__26580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26580):map__26580);
var opts = map__26580__$1;
var build_id = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26580,map__26580__$1,opts,build_id){
return (function (p__26582){
var vec__26583 = p__26582;
var map__26584 = cljs.core.nth.call(null,vec__26583,(0),null);
var map__26584__$1 = ((((!((map__26584 == null)))?((((map__26584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26584):map__26584);
var msg = map__26584__$1;
var msg_name = cljs.core.get.call(null,map__26584__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26583,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26583,map__26584,map__26584__$1,msg,msg_name,_,map__26580,map__26580__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26583,map__26584,map__26584__$1,msg,msg_name,_,map__26580,map__26580__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26580,map__26580__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26590){
var vec__26591 = p__26590;
var map__26592 = cljs.core.nth.call(null,vec__26591,(0),null);
var map__26592__$1 = ((((!((map__26592 == null)))?((((map__26592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26592):map__26592);
var msg = map__26592__$1;
var msg_name = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26591,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26594){
var map__26604 = p__26594;
var map__26604__$1 = ((((!((map__26604 == null)))?((((map__26604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26604):map__26604);
var on_compile_warning = cljs.core.get.call(null,map__26604__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26604__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26604,map__26604__$1,on_compile_warning,on_compile_fail){
return (function (p__26606){
var vec__26607 = p__26606;
var map__26608 = cljs.core.nth.call(null,vec__26607,(0),null);
var map__26608__$1 = ((((!((map__26608 == null)))?((((map__26608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26608):map__26608);
var msg = map__26608__$1;
var msg_name = cljs.core.get.call(null,map__26608__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26607,(1));
var pred__26610 = cljs.core._EQ_;
var expr__26611 = msg_name;
if(cljs.core.truth_(pred__26610.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26611))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26610.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26611))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26604,map__26604__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,msg_hist,msg_names,msg){
return (function (state_26827){
var state_val_26828 = (state_26827[(1)]);
if((state_val_26828 === (7))){
var inst_26751 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26751)){
var statearr_26829_26875 = state_26827__$1;
(statearr_26829_26875[(1)] = (8));

} else {
var statearr_26830_26876 = state_26827__$1;
(statearr_26830_26876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (20))){
var inst_26821 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26831_26877 = state_26827__$1;
(statearr_26831_26877[(2)] = inst_26821);

(statearr_26831_26877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (27))){
var inst_26817 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26832_26878 = state_26827__$1;
(statearr_26832_26878[(2)] = inst_26817);

(statearr_26832_26878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (1))){
var inst_26744 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26744)){
var statearr_26833_26879 = state_26827__$1;
(statearr_26833_26879[(1)] = (2));

} else {
var statearr_26834_26880 = state_26827__$1;
(statearr_26834_26880[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (24))){
var inst_26819 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26835_26881 = state_26827__$1;
(statearr_26835_26881[(2)] = inst_26819);

(statearr_26835_26881[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (4))){
var inst_26825 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26827__$1,inst_26825);
} else {
if((state_val_26828 === (15))){
var inst_26823 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26836_26882 = state_26827__$1;
(statearr_26836_26882[(2)] = inst_26823);

(statearr_26836_26882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (21))){
var inst_26782 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26837_26883 = state_26827__$1;
(statearr_26837_26883[(2)] = inst_26782);

(statearr_26837_26883[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (31))){
var inst_26806 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26806)){
var statearr_26838_26884 = state_26827__$1;
(statearr_26838_26884[(1)] = (34));

} else {
var statearr_26839_26885 = state_26827__$1;
(statearr_26839_26885[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (32))){
var inst_26815 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26840_26886 = state_26827__$1;
(statearr_26840_26886[(2)] = inst_26815);

(statearr_26840_26886[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (33))){
var inst_26804 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26841_26887 = state_26827__$1;
(statearr_26841_26887[(2)] = inst_26804);

(statearr_26841_26887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (13))){
var inst_26765 = figwheel.client.heads_up.clear.call(null);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(16),inst_26765);
} else {
if((state_val_26828 === (22))){
var inst_26786 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26787 = figwheel.client.heads_up.append_message.call(null,inst_26786);
var state_26827__$1 = state_26827;
var statearr_26842_26888 = state_26827__$1;
(statearr_26842_26888[(2)] = inst_26787);

(statearr_26842_26888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (36))){
var inst_26813 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26843_26889 = state_26827__$1;
(statearr_26843_26889[(2)] = inst_26813);

(statearr_26843_26889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (29))){
var inst_26797 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26844_26890 = state_26827__$1;
(statearr_26844_26890[(2)] = inst_26797);

(statearr_26844_26890[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (6))){
var inst_26746 = (state_26827[(7)]);
var state_26827__$1 = state_26827;
var statearr_26845_26891 = state_26827__$1;
(statearr_26845_26891[(2)] = inst_26746);

(statearr_26845_26891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (28))){
var inst_26793 = (state_26827[(2)]);
var inst_26794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26795 = figwheel.client.heads_up.display_warning.call(null,inst_26794);
var state_26827__$1 = (function (){var statearr_26846 = state_26827;
(statearr_26846[(8)] = inst_26793);

return statearr_26846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(29),inst_26795);
} else {
if((state_val_26828 === (25))){
var inst_26791 = figwheel.client.heads_up.clear.call(null);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(28),inst_26791);
} else {
if((state_val_26828 === (34))){
var inst_26808 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(37),inst_26808);
} else {
if((state_val_26828 === (17))){
var inst_26773 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26847_26892 = state_26827__$1;
(statearr_26847_26892[(2)] = inst_26773);

(statearr_26847_26892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (3))){
var inst_26763 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26763)){
var statearr_26848_26893 = state_26827__$1;
(statearr_26848_26893[(1)] = (13));

} else {
var statearr_26849_26894 = state_26827__$1;
(statearr_26849_26894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (12))){
var inst_26759 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26850_26895 = state_26827__$1;
(statearr_26850_26895[(2)] = inst_26759);

(statearr_26850_26895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (2))){
var inst_26746 = (state_26827[(7)]);
var inst_26746__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26827__$1 = (function (){var statearr_26851 = state_26827;
(statearr_26851[(7)] = inst_26746__$1);

return statearr_26851;
})();
if(cljs.core.truth_(inst_26746__$1)){
var statearr_26852_26896 = state_26827__$1;
(statearr_26852_26896[(1)] = (5));

} else {
var statearr_26853_26897 = state_26827__$1;
(statearr_26853_26897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (23))){
var inst_26789 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26789)){
var statearr_26854_26898 = state_26827__$1;
(statearr_26854_26898[(1)] = (25));

} else {
var statearr_26855_26899 = state_26827__$1;
(statearr_26855_26899[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (35))){
var state_26827__$1 = state_26827;
var statearr_26856_26900 = state_26827__$1;
(statearr_26856_26900[(2)] = null);

(statearr_26856_26900[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (19))){
var inst_26784 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26784)){
var statearr_26857_26901 = state_26827__$1;
(statearr_26857_26901[(1)] = (22));

} else {
var statearr_26858_26902 = state_26827__$1;
(statearr_26858_26902[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (11))){
var inst_26755 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26859_26903 = state_26827__$1;
(statearr_26859_26903[(2)] = inst_26755);

(statearr_26859_26903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (9))){
var inst_26757 = figwheel.client.heads_up.clear.call(null);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(12),inst_26757);
} else {
if((state_val_26828 === (5))){
var inst_26748 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26827__$1 = state_26827;
var statearr_26860_26904 = state_26827__$1;
(statearr_26860_26904[(2)] = inst_26748);

(statearr_26860_26904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (14))){
var inst_26775 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26775)){
var statearr_26861_26905 = state_26827__$1;
(statearr_26861_26905[(1)] = (18));

} else {
var statearr_26862_26906 = state_26827__$1;
(statearr_26862_26906[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (26))){
var inst_26799 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26799)){
var statearr_26863_26907 = state_26827__$1;
(statearr_26863_26907[(1)] = (30));

} else {
var statearr_26864_26908 = state_26827__$1;
(statearr_26864_26908[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (16))){
var inst_26767 = (state_26827[(2)]);
var inst_26768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26769 = figwheel.client.format_messages.call(null,inst_26768);
var inst_26770 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26771 = figwheel.client.heads_up.display_error.call(null,inst_26769,inst_26770);
var state_26827__$1 = (function (){var statearr_26865 = state_26827;
(statearr_26865[(9)] = inst_26767);

return statearr_26865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(17),inst_26771);
} else {
if((state_val_26828 === (30))){
var inst_26801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26802 = figwheel.client.heads_up.display_warning.call(null,inst_26801);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(33),inst_26802);
} else {
if((state_val_26828 === (10))){
var inst_26761 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26866_26909 = state_26827__$1;
(statearr_26866_26909[(2)] = inst_26761);

(statearr_26866_26909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (18))){
var inst_26777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26778 = figwheel.client.format_messages.call(null,inst_26777);
var inst_26779 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26780 = figwheel.client.heads_up.display_error.call(null,inst_26778,inst_26779);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(21),inst_26780);
} else {
if((state_val_26828 === (37))){
var inst_26810 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26867_26910 = state_26827__$1;
(statearr_26867_26910[(2)] = inst_26810);

(statearr_26867_26910[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (8))){
var inst_26753 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(11),inst_26753);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20613__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20501__auto__,c__20613__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____0 = (function (){
var statearr_26871 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26871[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__);

(statearr_26871[(1)] = (1));

return statearr_26871;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1 = (function (state_26827){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_26827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e26872){if((e26872 instanceof Object)){
var ex__20505__auto__ = e26872;
var statearr_26873_26911 = state_26827;
(statearr_26873_26911[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26912 = state_26827;
state_26827 = G__26912;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__ = function(state_26827){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1.call(this,state_26827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,msg_hist,msg_names,msg))
})();
var state__20615__auto__ = (function (){var statearr_26874 = f__20614__auto__.call(null);
(statearr_26874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_26874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,msg_hist,msg_names,msg))
);

return c__20613__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20613__auto___26975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___26975,ch){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___26975,ch){
return (function (state_26958){
var state_val_26959 = (state_26958[(1)]);
if((state_val_26959 === (1))){
var state_26958__$1 = state_26958;
var statearr_26960_26976 = state_26958__$1;
(statearr_26960_26976[(2)] = null);

(statearr_26960_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (2))){
var state_26958__$1 = state_26958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26958__$1,(4),ch);
} else {
if((state_val_26959 === (3))){
var inst_26956 = (state_26958[(2)]);
var state_26958__$1 = state_26958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26958__$1,inst_26956);
} else {
if((state_val_26959 === (4))){
var inst_26946 = (state_26958[(7)]);
var inst_26946__$1 = (state_26958[(2)]);
var state_26958__$1 = (function (){var statearr_26961 = state_26958;
(statearr_26961[(7)] = inst_26946__$1);

return statearr_26961;
})();
if(cljs.core.truth_(inst_26946__$1)){
var statearr_26962_26977 = state_26958__$1;
(statearr_26962_26977[(1)] = (5));

} else {
var statearr_26963_26978 = state_26958__$1;
(statearr_26963_26978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (5))){
var inst_26946 = (state_26958[(7)]);
var inst_26948 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26946);
var state_26958__$1 = state_26958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26958__$1,(8),inst_26948);
} else {
if((state_val_26959 === (6))){
var state_26958__$1 = state_26958;
var statearr_26964_26979 = state_26958__$1;
(statearr_26964_26979[(2)] = null);

(statearr_26964_26979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (7))){
var inst_26954 = (state_26958[(2)]);
var state_26958__$1 = state_26958;
var statearr_26965_26980 = state_26958__$1;
(statearr_26965_26980[(2)] = inst_26954);

(statearr_26965_26980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26959 === (8))){
var inst_26950 = (state_26958[(2)]);
var state_26958__$1 = (function (){var statearr_26966 = state_26958;
(statearr_26966[(8)] = inst_26950);

return statearr_26966;
})();
var statearr_26967_26981 = state_26958__$1;
(statearr_26967_26981[(2)] = null);

(statearr_26967_26981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20613__auto___26975,ch))
;
return ((function (switch__20501__auto__,c__20613__auto___26975,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0 = (function (){
var statearr_26971 = [null,null,null,null,null,null,null,null,null];
(statearr_26971[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20502__auto__);

(statearr_26971[(1)] = (1));

return statearr_26971;
});
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1 = (function (state_26958){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_26958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e26972){if((e26972 instanceof Object)){
var ex__20505__auto__ = e26972;
var statearr_26973_26982 = state_26958;
(statearr_26973_26982[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26958;
state_26958 = G__26983;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__ = function(state_26958){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1.call(this,state_26958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___26975,ch))
})();
var state__20615__auto__ = (function (){var statearr_26974 = f__20614__auto__.call(null);
(statearr_26974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___26975);

return statearr_26974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___26975,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_27004){
var state_val_27005 = (state_27004[(1)]);
if((state_val_27005 === (1))){
var inst_26999 = cljs.core.async.timeout.call(null,(3000));
var state_27004__$1 = state_27004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27004__$1,(2),inst_26999);
} else {
if((state_val_27005 === (2))){
var inst_27001 = (state_27004[(2)]);
var inst_27002 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27004__$1 = (function (){var statearr_27006 = state_27004;
(statearr_27006[(7)] = inst_27001);

return statearr_27006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27004__$1,inst_27002);
} else {
return null;
}
}
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____0 = (function (){
var statearr_27010 = [null,null,null,null,null,null,null,null];
(statearr_27010[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__);

(statearr_27010[(1)] = (1));

return statearr_27010;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1 = (function (state_27004){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_27004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e27011){if((e27011 instanceof Object)){
var ex__20505__auto__ = e27011;
var statearr_27012_27014 = state_27004;
(statearr_27012_27014[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_27004;
state_27004 = G__27015;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__ = function(state_27004){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1.call(this,state_27004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_27013 = f__20614__auto__.call(null);
(statearr_27013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_27013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27016){
var map__27023 = p__27016;
var map__27023__$1 = ((((!((map__27023 == null)))?((((map__27023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27023):map__27023);
var ed = map__27023__$1;
var formatted_exception = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27025_27029 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27026_27030 = null;
var count__27027_27031 = (0);
var i__27028_27032 = (0);
while(true){
if((i__27028_27032 < count__27027_27031)){
var msg_27033 = cljs.core._nth.call(null,chunk__27026_27030,i__27028_27032);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27033);

var G__27034 = seq__27025_27029;
var G__27035 = chunk__27026_27030;
var G__27036 = count__27027_27031;
var G__27037 = (i__27028_27032 + (1));
seq__27025_27029 = G__27034;
chunk__27026_27030 = G__27035;
count__27027_27031 = G__27036;
i__27028_27032 = G__27037;
continue;
} else {
var temp__4657__auto___27038 = cljs.core.seq.call(null,seq__27025_27029);
if(temp__4657__auto___27038){
var seq__27025_27039__$1 = temp__4657__auto___27038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27025_27039__$1)){
var c__19228__auto___27040 = cljs.core.chunk_first.call(null,seq__27025_27039__$1);
var G__27041 = cljs.core.chunk_rest.call(null,seq__27025_27039__$1);
var G__27042 = c__19228__auto___27040;
var G__27043 = cljs.core.count.call(null,c__19228__auto___27040);
var G__27044 = (0);
seq__27025_27029 = G__27041;
chunk__27026_27030 = G__27042;
count__27027_27031 = G__27043;
i__27028_27032 = G__27044;
continue;
} else {
var msg_27045 = cljs.core.first.call(null,seq__27025_27039__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27045);

var G__27046 = cljs.core.next.call(null,seq__27025_27039__$1);
var G__27047 = null;
var G__27048 = (0);
var G__27049 = (0);
seq__27025_27029 = G__27046;
chunk__27026_27030 = G__27047;
count__27027_27031 = G__27048;
i__27028_27032 = G__27049;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27050){
var map__27053 = p__27050;
var map__27053__$1 = ((((!((map__27053 == null)))?((((map__27053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27053):map__27053);
var w = map__27053__$1;
var message = cljs.core.get.call(null,map__27053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18405__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18405__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18405__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27061 = cljs.core.seq.call(null,plugins);
var chunk__27062 = null;
var count__27063 = (0);
var i__27064 = (0);
while(true){
if((i__27064 < count__27063)){
var vec__27065 = cljs.core._nth.call(null,chunk__27062,i__27064);
var k = cljs.core.nth.call(null,vec__27065,(0),null);
var plugin = cljs.core.nth.call(null,vec__27065,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27067 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27061,chunk__27062,count__27063,i__27064,pl_27067,vec__27065,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27067.call(null,msg_hist);
});})(seq__27061,chunk__27062,count__27063,i__27064,pl_27067,vec__27065,k,plugin))
);
} else {
}

var G__27068 = seq__27061;
var G__27069 = chunk__27062;
var G__27070 = count__27063;
var G__27071 = (i__27064 + (1));
seq__27061 = G__27068;
chunk__27062 = G__27069;
count__27063 = G__27070;
i__27064 = G__27071;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27061);
if(temp__4657__auto__){
var seq__27061__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27061__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__27061__$1);
var G__27072 = cljs.core.chunk_rest.call(null,seq__27061__$1);
var G__27073 = c__19228__auto__;
var G__27074 = cljs.core.count.call(null,c__19228__auto__);
var G__27075 = (0);
seq__27061 = G__27072;
chunk__27062 = G__27073;
count__27063 = G__27074;
i__27064 = G__27075;
continue;
} else {
var vec__27066 = cljs.core.first.call(null,seq__27061__$1);
var k = cljs.core.nth.call(null,vec__27066,(0),null);
var plugin = cljs.core.nth.call(null,vec__27066,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27076 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27061,chunk__27062,count__27063,i__27064,pl_27076,vec__27066,k,plugin,seq__27061__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27076.call(null,msg_hist);
});})(seq__27061,chunk__27062,count__27063,i__27064,pl_27076,vec__27066,k,plugin,seq__27061__$1,temp__4657__auto__))
);
} else {
}

var G__27077 = cljs.core.next.call(null,seq__27061__$1);
var G__27078 = null;
var G__27079 = (0);
var G__27080 = (0);
seq__27061 = G__27077;
chunk__27062 = G__27078;
count__27063 = G__27079;
i__27064 = G__27080;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27081 = [];
var len__19487__auto___27084 = arguments.length;
var i__19488__auto___27085 = (0);
while(true){
if((i__19488__auto___27085 < len__19487__auto___27084)){
args27081.push((arguments[i__19488__auto___27085]));

var G__27086 = (i__19488__auto___27085 + (1));
i__19488__auto___27085 = G__27086;
continue;
} else {
}
break;
}

var G__27083 = args27081.length;
switch (G__27083) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27081.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19494__auto__ = [];
var len__19487__auto___27092 = arguments.length;
var i__19488__auto___27093 = (0);
while(true){
if((i__19488__auto___27093 < len__19487__auto___27092)){
args__19494__auto__.push((arguments[i__19488__auto___27093]));

var G__27094 = (i__19488__auto___27093 + (1));
i__19488__auto___27093 = G__27094;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27089){
var map__27090 = p__27089;
var map__27090__$1 = ((((!((map__27090 == null)))?((((map__27090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27090):map__27090);
var opts = map__27090__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27088){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27088));
});

//# sourceMappingURL=client.js.map