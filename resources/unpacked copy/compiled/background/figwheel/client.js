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
var pred__45433 = cljs.core._EQ_;
var expr__45434 = (function (){var or__18417__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e45437){if((e45437 instanceof Error)){
var e = e45437;
return false;
} else {
throw e45437;

}
}})();
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45433.call(null,"true",expr__45434))){
return true;
} else {
if(cljs.core.truth_(pred__45433.call(null,"false",expr__45434))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45434)].join('')));
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
}catch (e45439){if((e45439 instanceof Error)){
var e = e45439;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e45439;

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
var len__19487__auto___45441 = arguments.length;
var i__19488__auto___45442 = (0);
while(true){
if((i__19488__auto___45442 < len__19487__auto___45441)){
args__19494__auto__.push((arguments[i__19488__auto___45442]));

var G__45443 = (i__19488__auto___45442 + (1));
i__19488__auto___45442 = G__45443;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq45440){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45440));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45444){
var map__45447 = p__45444;
var map__45447__$1 = ((((!((map__45447 == null)))?((((map__45447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45447):map__45447);
var message = cljs.core.get.call(null,map__45447__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45447__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20613__auto___45609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___45609,ch){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___45609,ch){
return (function (state_45578){
var state_val_45579 = (state_45578[(1)]);
if((state_val_45579 === (7))){
var inst_45574 = (state_45578[(2)]);
var state_45578__$1 = state_45578;
var statearr_45580_45610 = state_45578__$1;
(statearr_45580_45610[(2)] = inst_45574);

(statearr_45580_45610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (1))){
var state_45578__$1 = state_45578;
var statearr_45581_45611 = state_45578__$1;
(statearr_45581_45611[(2)] = null);

(statearr_45581_45611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (4))){
var inst_45531 = (state_45578[(7)]);
var inst_45531__$1 = (state_45578[(2)]);
var state_45578__$1 = (function (){var statearr_45582 = state_45578;
(statearr_45582[(7)] = inst_45531__$1);

return statearr_45582;
})();
if(cljs.core.truth_(inst_45531__$1)){
var statearr_45583_45612 = state_45578__$1;
(statearr_45583_45612[(1)] = (5));

} else {
var statearr_45584_45613 = state_45578__$1;
(statearr_45584_45613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (15))){
var inst_45538 = (state_45578[(8)]);
var inst_45553 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45538);
var inst_45554 = cljs.core.first.call(null,inst_45553);
var inst_45555 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45554);
var inst_45556 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_45555)].join('');
var inst_45557 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45556);
var state_45578__$1 = state_45578;
var statearr_45585_45614 = state_45578__$1;
(statearr_45585_45614[(2)] = inst_45557);

(statearr_45585_45614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (13))){
var inst_45562 = (state_45578[(2)]);
var state_45578__$1 = state_45578;
var statearr_45586_45615 = state_45578__$1;
(statearr_45586_45615[(2)] = inst_45562);

(statearr_45586_45615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (6))){
var state_45578__$1 = state_45578;
var statearr_45587_45616 = state_45578__$1;
(statearr_45587_45616[(2)] = null);

(statearr_45587_45616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (17))){
var inst_45560 = (state_45578[(2)]);
var state_45578__$1 = state_45578;
var statearr_45588_45617 = state_45578__$1;
(statearr_45588_45617[(2)] = inst_45560);

(statearr_45588_45617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (3))){
var inst_45576 = (state_45578[(2)]);
var state_45578__$1 = state_45578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45578__$1,inst_45576);
} else {
if((state_val_45579 === (12))){
var inst_45537 = (state_45578[(9)]);
var inst_45551 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45537,opts);
var state_45578__$1 = state_45578;
if(cljs.core.truth_(inst_45551)){
var statearr_45589_45618 = state_45578__$1;
(statearr_45589_45618[(1)] = (15));

} else {
var statearr_45590_45619 = state_45578__$1;
(statearr_45590_45619[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (2))){
var state_45578__$1 = state_45578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45578__$1,(4),ch);
} else {
if((state_val_45579 === (11))){
var inst_45538 = (state_45578[(8)]);
var inst_45543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45544 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45538);
var inst_45545 = cljs.core.async.timeout.call(null,(1000));
var inst_45546 = [inst_45544,inst_45545];
var inst_45547 = (new cljs.core.PersistentVector(null,2,(5),inst_45543,inst_45546,null));
var state_45578__$1 = state_45578;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45578__$1,(14),inst_45547);
} else {
if((state_val_45579 === (9))){
var inst_45538 = (state_45578[(8)]);
var inst_45564 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45565 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45538);
var inst_45566 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45565);
var inst_45567 = [cljs.core.str("Not loading: "),cljs.core.str(inst_45566)].join('');
var inst_45568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45567);
var state_45578__$1 = (function (){var statearr_45591 = state_45578;
(statearr_45591[(10)] = inst_45564);

return statearr_45591;
})();
var statearr_45592_45620 = state_45578__$1;
(statearr_45592_45620[(2)] = inst_45568);

(statearr_45592_45620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (5))){
var inst_45531 = (state_45578[(7)]);
var inst_45533 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45534 = (new cljs.core.PersistentArrayMap(null,2,inst_45533,null));
var inst_45535 = (new cljs.core.PersistentHashSet(null,inst_45534,null));
var inst_45536 = figwheel.client.focus_msgs.call(null,inst_45535,inst_45531);
var inst_45537 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45536);
var inst_45538 = cljs.core.first.call(null,inst_45536);
var inst_45539 = figwheel.client.autoload_QMARK_.call(null);
var state_45578__$1 = (function (){var statearr_45593 = state_45578;
(statearr_45593[(8)] = inst_45538);

(statearr_45593[(9)] = inst_45537);

return statearr_45593;
})();
if(cljs.core.truth_(inst_45539)){
var statearr_45594_45621 = state_45578__$1;
(statearr_45594_45621[(1)] = (8));

} else {
var statearr_45595_45622 = state_45578__$1;
(statearr_45595_45622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (14))){
var inst_45549 = (state_45578[(2)]);
var state_45578__$1 = state_45578;
var statearr_45596_45623 = state_45578__$1;
(statearr_45596_45623[(2)] = inst_45549);

(statearr_45596_45623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (16))){
var state_45578__$1 = state_45578;
var statearr_45597_45624 = state_45578__$1;
(statearr_45597_45624[(2)] = null);

(statearr_45597_45624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (10))){
var inst_45570 = (state_45578[(2)]);
var state_45578__$1 = (function (){var statearr_45598 = state_45578;
(statearr_45598[(11)] = inst_45570);

return statearr_45598;
})();
var statearr_45599_45625 = state_45578__$1;
(statearr_45599_45625[(2)] = null);

(statearr_45599_45625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45579 === (8))){
var inst_45537 = (state_45578[(9)]);
var inst_45541 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45537,opts);
var state_45578__$1 = state_45578;
if(cljs.core.truth_(inst_45541)){
var statearr_45600_45626 = state_45578__$1;
(statearr_45600_45626[(1)] = (11));

} else {
var statearr_45601_45627 = state_45578__$1;
(statearr_45601_45627[(1)] = (12));

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
});})(c__20613__auto___45609,ch))
;
return ((function (switch__20501__auto__,c__20613__auto___45609,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0 = (function (){
var statearr_45605 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45605[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__);

(statearr_45605[(1)] = (1));

return statearr_45605;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1 = (function (state_45578){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_45578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e45606){if((e45606 instanceof Object)){
var ex__20505__auto__ = e45606;
var statearr_45607_45628 = state_45578;
(statearr_45607_45628[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45629 = state_45578;
state_45578 = G__45629;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__ = function(state_45578){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1.call(this,state_45578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___45609,ch))
})();
var state__20615__auto__ = (function (){var statearr_45608 = f__20614__auto__.call(null);
(statearr_45608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___45609);

return statearr_45608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___45609,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45630_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45630_SHARP_));
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
var base_path_45637 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45637){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_45635 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_45636 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45636;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45635;
}}catch (e45634){if((e45634 instanceof Error)){
var e = e45634;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45637], null));
} else {
var e = e45634;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_45637))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45638){
var map__45645 = p__45638;
var map__45645__$1 = ((((!((map__45645 == null)))?((((map__45645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45645):map__45645);
var opts = map__45645__$1;
var build_id = cljs.core.get.call(null,map__45645__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45645,map__45645__$1,opts,build_id){
return (function (p__45647){
var vec__45648 = p__45647;
var map__45649 = cljs.core.nth.call(null,vec__45648,(0),null);
var map__45649__$1 = ((((!((map__45649 == null)))?((((map__45649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45649):map__45649);
var msg = map__45649__$1;
var msg_name = cljs.core.get.call(null,map__45649__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45648,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45648,map__45649,map__45649__$1,msg,msg_name,_,map__45645,map__45645__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45648,map__45649,map__45649__$1,msg,msg_name,_,map__45645,map__45645__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45645,map__45645__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45655){
var vec__45656 = p__45655;
var map__45657 = cljs.core.nth.call(null,vec__45656,(0),null);
var map__45657__$1 = ((((!((map__45657 == null)))?((((map__45657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45657):map__45657);
var msg = map__45657__$1;
var msg_name = cljs.core.get.call(null,map__45657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45656,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45659){
var map__45669 = p__45659;
var map__45669__$1 = ((((!((map__45669 == null)))?((((map__45669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45669):map__45669);
var on_compile_warning = cljs.core.get.call(null,map__45669__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45669__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45669,map__45669__$1,on_compile_warning,on_compile_fail){
return (function (p__45671){
var vec__45672 = p__45671;
var map__45673 = cljs.core.nth.call(null,vec__45672,(0),null);
var map__45673__$1 = ((((!((map__45673 == null)))?((((map__45673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45673):map__45673);
var msg = map__45673__$1;
var msg_name = cljs.core.get.call(null,map__45673__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45672,(1));
var pred__45675 = cljs.core._EQ_;
var expr__45676 = msg_name;
if(cljs.core.truth_(pred__45675.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45676))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45675.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45676))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45669,map__45669__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,msg_hist,msg_names,msg){
return (function (state_45892){
var state_val_45893 = (state_45892[(1)]);
if((state_val_45893 === (7))){
var inst_45816 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45816)){
var statearr_45894_45940 = state_45892__$1;
(statearr_45894_45940[(1)] = (8));

} else {
var statearr_45895_45941 = state_45892__$1;
(statearr_45895_45941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (20))){
var inst_45886 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45896_45942 = state_45892__$1;
(statearr_45896_45942[(2)] = inst_45886);

(statearr_45896_45942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (27))){
var inst_45882 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45897_45943 = state_45892__$1;
(statearr_45897_45943[(2)] = inst_45882);

(statearr_45897_45943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (1))){
var inst_45809 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45809)){
var statearr_45898_45944 = state_45892__$1;
(statearr_45898_45944[(1)] = (2));

} else {
var statearr_45899_45945 = state_45892__$1;
(statearr_45899_45945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (24))){
var inst_45884 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45900_45946 = state_45892__$1;
(statearr_45900_45946[(2)] = inst_45884);

(statearr_45900_45946[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (4))){
var inst_45890 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45892__$1,inst_45890);
} else {
if((state_val_45893 === (15))){
var inst_45888 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45901_45947 = state_45892__$1;
(statearr_45901_45947[(2)] = inst_45888);

(statearr_45901_45947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (21))){
var inst_45847 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45902_45948 = state_45892__$1;
(statearr_45902_45948[(2)] = inst_45847);

(statearr_45902_45948[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (31))){
var inst_45871 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45871)){
var statearr_45903_45949 = state_45892__$1;
(statearr_45903_45949[(1)] = (34));

} else {
var statearr_45904_45950 = state_45892__$1;
(statearr_45904_45950[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (32))){
var inst_45880 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45905_45951 = state_45892__$1;
(statearr_45905_45951[(2)] = inst_45880);

(statearr_45905_45951[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (33))){
var inst_45869 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45906_45952 = state_45892__$1;
(statearr_45906_45952[(2)] = inst_45869);

(statearr_45906_45952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (13))){
var inst_45830 = figwheel.client.heads_up.clear.call(null);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(16),inst_45830);
} else {
if((state_val_45893 === (22))){
var inst_45851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45852 = figwheel.client.heads_up.append_message.call(null,inst_45851);
var state_45892__$1 = state_45892;
var statearr_45907_45953 = state_45892__$1;
(statearr_45907_45953[(2)] = inst_45852);

(statearr_45907_45953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (36))){
var inst_45878 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45908_45954 = state_45892__$1;
(statearr_45908_45954[(2)] = inst_45878);

(statearr_45908_45954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (29))){
var inst_45862 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45909_45955 = state_45892__$1;
(statearr_45909_45955[(2)] = inst_45862);

(statearr_45909_45955[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (6))){
var inst_45811 = (state_45892[(7)]);
var state_45892__$1 = state_45892;
var statearr_45910_45956 = state_45892__$1;
(statearr_45910_45956[(2)] = inst_45811);

(statearr_45910_45956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (28))){
var inst_45858 = (state_45892[(2)]);
var inst_45859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45860 = figwheel.client.heads_up.display_warning.call(null,inst_45859);
var state_45892__$1 = (function (){var statearr_45911 = state_45892;
(statearr_45911[(8)] = inst_45858);

return statearr_45911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(29),inst_45860);
} else {
if((state_val_45893 === (25))){
var inst_45856 = figwheel.client.heads_up.clear.call(null);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(28),inst_45856);
} else {
if((state_val_45893 === (34))){
var inst_45873 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(37),inst_45873);
} else {
if((state_val_45893 === (17))){
var inst_45838 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45912_45957 = state_45892__$1;
(statearr_45912_45957[(2)] = inst_45838);

(statearr_45912_45957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (3))){
var inst_45828 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45828)){
var statearr_45913_45958 = state_45892__$1;
(statearr_45913_45958[(1)] = (13));

} else {
var statearr_45914_45959 = state_45892__$1;
(statearr_45914_45959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (12))){
var inst_45824 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45915_45960 = state_45892__$1;
(statearr_45915_45960[(2)] = inst_45824);

(statearr_45915_45960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (2))){
var inst_45811 = (state_45892[(7)]);
var inst_45811__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45892__$1 = (function (){var statearr_45916 = state_45892;
(statearr_45916[(7)] = inst_45811__$1);

return statearr_45916;
})();
if(cljs.core.truth_(inst_45811__$1)){
var statearr_45917_45961 = state_45892__$1;
(statearr_45917_45961[(1)] = (5));

} else {
var statearr_45918_45962 = state_45892__$1;
(statearr_45918_45962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (23))){
var inst_45854 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45854)){
var statearr_45919_45963 = state_45892__$1;
(statearr_45919_45963[(1)] = (25));

} else {
var statearr_45920_45964 = state_45892__$1;
(statearr_45920_45964[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (35))){
var state_45892__$1 = state_45892;
var statearr_45921_45965 = state_45892__$1;
(statearr_45921_45965[(2)] = null);

(statearr_45921_45965[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (19))){
var inst_45849 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45849)){
var statearr_45922_45966 = state_45892__$1;
(statearr_45922_45966[(1)] = (22));

} else {
var statearr_45923_45967 = state_45892__$1;
(statearr_45923_45967[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (11))){
var inst_45820 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45924_45968 = state_45892__$1;
(statearr_45924_45968[(2)] = inst_45820);

(statearr_45924_45968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (9))){
var inst_45822 = figwheel.client.heads_up.clear.call(null);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(12),inst_45822);
} else {
if((state_val_45893 === (5))){
var inst_45813 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45892__$1 = state_45892;
var statearr_45925_45969 = state_45892__$1;
(statearr_45925_45969[(2)] = inst_45813);

(statearr_45925_45969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (14))){
var inst_45840 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45840)){
var statearr_45926_45970 = state_45892__$1;
(statearr_45926_45970[(1)] = (18));

} else {
var statearr_45927_45971 = state_45892__$1;
(statearr_45927_45971[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (26))){
var inst_45864 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45892__$1 = state_45892;
if(cljs.core.truth_(inst_45864)){
var statearr_45928_45972 = state_45892__$1;
(statearr_45928_45972[(1)] = (30));

} else {
var statearr_45929_45973 = state_45892__$1;
(statearr_45929_45973[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (16))){
var inst_45832 = (state_45892[(2)]);
var inst_45833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45834 = figwheel.client.format_messages.call(null,inst_45833);
var inst_45835 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45836 = figwheel.client.heads_up.display_error.call(null,inst_45834,inst_45835);
var state_45892__$1 = (function (){var statearr_45930 = state_45892;
(statearr_45930[(9)] = inst_45832);

return statearr_45930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(17),inst_45836);
} else {
if((state_val_45893 === (30))){
var inst_45866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45867 = figwheel.client.heads_up.display_warning.call(null,inst_45866);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(33),inst_45867);
} else {
if((state_val_45893 === (10))){
var inst_45826 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45931_45974 = state_45892__$1;
(statearr_45931_45974[(2)] = inst_45826);

(statearr_45931_45974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (18))){
var inst_45842 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45843 = figwheel.client.format_messages.call(null,inst_45842);
var inst_45844 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45845 = figwheel.client.heads_up.display_error.call(null,inst_45843,inst_45844);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(21),inst_45845);
} else {
if((state_val_45893 === (37))){
var inst_45875 = (state_45892[(2)]);
var state_45892__$1 = state_45892;
var statearr_45932_45975 = state_45892__$1;
(statearr_45932_45975[(2)] = inst_45875);

(statearr_45932_45975[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45893 === (8))){
var inst_45818 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45892__$1 = state_45892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45892__$1,(11),inst_45818);
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
var statearr_45936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45936[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__);

(statearr_45936[(1)] = (1));

return statearr_45936;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1 = (function (state_45892){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_45892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e45937){if((e45937 instanceof Object)){
var ex__20505__auto__ = e45937;
var statearr_45938_45976 = state_45892;
(statearr_45938_45976[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45977 = state_45892;
state_45892 = G__45977;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__ = function(state_45892){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1.call(this,state_45892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,msg_hist,msg_names,msg))
})();
var state__20615__auto__ = (function (){var statearr_45939 = f__20614__auto__.call(null);
(statearr_45939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_45939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,msg_hist,msg_names,msg))
);

return c__20613__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20613__auto___46040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___46040,ch){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___46040,ch){
return (function (state_46023){
var state_val_46024 = (state_46023[(1)]);
if((state_val_46024 === (1))){
var state_46023__$1 = state_46023;
var statearr_46025_46041 = state_46023__$1;
(statearr_46025_46041[(2)] = null);

(statearr_46025_46041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (2))){
var state_46023__$1 = state_46023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46023__$1,(4),ch);
} else {
if((state_val_46024 === (3))){
var inst_46021 = (state_46023[(2)]);
var state_46023__$1 = state_46023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46023__$1,inst_46021);
} else {
if((state_val_46024 === (4))){
var inst_46011 = (state_46023[(7)]);
var inst_46011__$1 = (state_46023[(2)]);
var state_46023__$1 = (function (){var statearr_46026 = state_46023;
(statearr_46026[(7)] = inst_46011__$1);

return statearr_46026;
})();
if(cljs.core.truth_(inst_46011__$1)){
var statearr_46027_46042 = state_46023__$1;
(statearr_46027_46042[(1)] = (5));

} else {
var statearr_46028_46043 = state_46023__$1;
(statearr_46028_46043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (5))){
var inst_46011 = (state_46023[(7)]);
var inst_46013 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46011);
var state_46023__$1 = state_46023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46023__$1,(8),inst_46013);
} else {
if((state_val_46024 === (6))){
var state_46023__$1 = state_46023;
var statearr_46029_46044 = state_46023__$1;
(statearr_46029_46044[(2)] = null);

(statearr_46029_46044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (7))){
var inst_46019 = (state_46023[(2)]);
var state_46023__$1 = state_46023;
var statearr_46030_46045 = state_46023__$1;
(statearr_46030_46045[(2)] = inst_46019);

(statearr_46030_46045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (8))){
var inst_46015 = (state_46023[(2)]);
var state_46023__$1 = (function (){var statearr_46031 = state_46023;
(statearr_46031[(8)] = inst_46015);

return statearr_46031;
})();
var statearr_46032_46046 = state_46023__$1;
(statearr_46032_46046[(2)] = null);

(statearr_46032_46046[(1)] = (2));


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
});})(c__20613__auto___46040,ch))
;
return ((function (switch__20501__auto__,c__20613__auto___46040,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0 = (function (){
var statearr_46036 = [null,null,null,null,null,null,null,null,null];
(statearr_46036[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20502__auto__);

(statearr_46036[(1)] = (1));

return statearr_46036;
});
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1 = (function (state_46023){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_46023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e46037){if((e46037 instanceof Object)){
var ex__20505__auto__ = e46037;
var statearr_46038_46047 = state_46023;
(statearr_46038_46047[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46048 = state_46023;
state_46023 = G__46048;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__ = function(state_46023){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1.call(this,state_46023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___46040,ch))
})();
var state__20615__auto__ = (function (){var statearr_46039 = f__20614__auto__.call(null);
(statearr_46039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___46040);

return statearr_46039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___46040,ch))
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
return (function (state_46069){
var state_val_46070 = (state_46069[(1)]);
if((state_val_46070 === (1))){
var inst_46064 = cljs.core.async.timeout.call(null,(3000));
var state_46069__$1 = state_46069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46069__$1,(2),inst_46064);
} else {
if((state_val_46070 === (2))){
var inst_46066 = (state_46069[(2)]);
var inst_46067 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46069__$1 = (function (){var statearr_46071 = state_46069;
(statearr_46071[(7)] = inst_46066);

return statearr_46071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46069__$1,inst_46067);
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
var statearr_46075 = [null,null,null,null,null,null,null,null];
(statearr_46075[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__);

(statearr_46075[(1)] = (1));

return statearr_46075;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1 = (function (state_46069){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_46069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e46076){if((e46076 instanceof Object)){
var ex__20505__auto__ = e46076;
var statearr_46077_46079 = state_46069;
(statearr_46077_46079[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46080 = state_46069;
state_46069 = G__46080;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__ = function(state_46069){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1.call(this,state_46069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_46078 = f__20614__auto__.call(null);
(statearr_46078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_46078;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46081){
var map__46088 = p__46081;
var map__46088__$1 = ((((!((map__46088 == null)))?((((map__46088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46088):map__46088);
var ed = map__46088__$1;
var formatted_exception = cljs.core.get.call(null,map__46088__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46088__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46088__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46090_46094 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46091_46095 = null;
var count__46092_46096 = (0);
var i__46093_46097 = (0);
while(true){
if((i__46093_46097 < count__46092_46096)){
var msg_46098 = cljs.core._nth.call(null,chunk__46091_46095,i__46093_46097);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46098);

var G__46099 = seq__46090_46094;
var G__46100 = chunk__46091_46095;
var G__46101 = count__46092_46096;
var G__46102 = (i__46093_46097 + (1));
seq__46090_46094 = G__46099;
chunk__46091_46095 = G__46100;
count__46092_46096 = G__46101;
i__46093_46097 = G__46102;
continue;
} else {
var temp__4657__auto___46103 = cljs.core.seq.call(null,seq__46090_46094);
if(temp__4657__auto___46103){
var seq__46090_46104__$1 = temp__4657__auto___46103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46090_46104__$1)){
var c__19228__auto___46105 = cljs.core.chunk_first.call(null,seq__46090_46104__$1);
var G__46106 = cljs.core.chunk_rest.call(null,seq__46090_46104__$1);
var G__46107 = c__19228__auto___46105;
var G__46108 = cljs.core.count.call(null,c__19228__auto___46105);
var G__46109 = (0);
seq__46090_46094 = G__46106;
chunk__46091_46095 = G__46107;
count__46092_46096 = G__46108;
i__46093_46097 = G__46109;
continue;
} else {
var msg_46110 = cljs.core.first.call(null,seq__46090_46104__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46110);

var G__46111 = cljs.core.next.call(null,seq__46090_46104__$1);
var G__46112 = null;
var G__46113 = (0);
var G__46114 = (0);
seq__46090_46094 = G__46111;
chunk__46091_46095 = G__46112;
count__46092_46096 = G__46113;
i__46093_46097 = G__46114;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46115){
var map__46118 = p__46115;
var map__46118__$1 = ((((!((map__46118 == null)))?((((map__46118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46118):map__46118);
var w = map__46118__$1;
var message = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__46126 = cljs.core.seq.call(null,plugins);
var chunk__46127 = null;
var count__46128 = (0);
var i__46129 = (0);
while(true){
if((i__46129 < count__46128)){
var vec__46130 = cljs.core._nth.call(null,chunk__46127,i__46129);
var k = cljs.core.nth.call(null,vec__46130,(0),null);
var plugin = cljs.core.nth.call(null,vec__46130,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46132 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46126,chunk__46127,count__46128,i__46129,pl_46132,vec__46130,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46132.call(null,msg_hist);
});})(seq__46126,chunk__46127,count__46128,i__46129,pl_46132,vec__46130,k,plugin))
);
} else {
}

var G__46133 = seq__46126;
var G__46134 = chunk__46127;
var G__46135 = count__46128;
var G__46136 = (i__46129 + (1));
seq__46126 = G__46133;
chunk__46127 = G__46134;
count__46128 = G__46135;
i__46129 = G__46136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46126);
if(temp__4657__auto__){
var seq__46126__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46126__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__46126__$1);
var G__46137 = cljs.core.chunk_rest.call(null,seq__46126__$1);
var G__46138 = c__19228__auto__;
var G__46139 = cljs.core.count.call(null,c__19228__auto__);
var G__46140 = (0);
seq__46126 = G__46137;
chunk__46127 = G__46138;
count__46128 = G__46139;
i__46129 = G__46140;
continue;
} else {
var vec__46131 = cljs.core.first.call(null,seq__46126__$1);
var k = cljs.core.nth.call(null,vec__46131,(0),null);
var plugin = cljs.core.nth.call(null,vec__46131,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46141 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46126,chunk__46127,count__46128,i__46129,pl_46141,vec__46131,k,plugin,seq__46126__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46141.call(null,msg_hist);
});})(seq__46126,chunk__46127,count__46128,i__46129,pl_46141,vec__46131,k,plugin,seq__46126__$1,temp__4657__auto__))
);
} else {
}

var G__46142 = cljs.core.next.call(null,seq__46126__$1);
var G__46143 = null;
var G__46144 = (0);
var G__46145 = (0);
seq__46126 = G__46142;
chunk__46127 = G__46143;
count__46128 = G__46144;
i__46129 = G__46145;
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
var args46146 = [];
var len__19487__auto___46149 = arguments.length;
var i__19488__auto___46150 = (0);
while(true){
if((i__19488__auto___46150 < len__19487__auto___46149)){
args46146.push((arguments[i__19488__auto___46150]));

var G__46151 = (i__19488__auto___46150 + (1));
i__19488__auto___46150 = G__46151;
continue;
} else {
}
break;
}

var G__46148 = args46146.length;
switch (G__46148) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46146.length)].join('')));

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
var len__19487__auto___46157 = arguments.length;
var i__19488__auto___46158 = (0);
while(true){
if((i__19488__auto___46158 < len__19487__auto___46157)){
args__19494__auto__.push((arguments[i__19488__auto___46158]));

var G__46159 = (i__19488__auto___46158 + (1));
i__19488__auto___46158 = G__46159;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46154){
var map__46155 = p__46154;
var map__46155__$1 = ((((!((map__46155 == null)))?((((map__46155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46155):map__46155);
var opts = map__46155__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46153){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46153));
});

//# sourceMappingURL=client.js.map