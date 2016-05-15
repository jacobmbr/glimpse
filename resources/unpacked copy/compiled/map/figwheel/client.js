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
var pred__36135 = cljs.core._EQ_;
var expr__36136 = (function (){var or__18417__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36139){if((e36139 instanceof Error)){
var e = e36139;
return false;
} else {
throw e36139;

}
}})();
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36135.call(null,"true",expr__36136))){
return true;
} else {
if(cljs.core.truth_(pred__36135.call(null,"false",expr__36136))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36136)].join('')));
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
}catch (e36141){if((e36141 instanceof Error)){
var e = e36141;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36141;

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
var len__19487__auto___36143 = arguments.length;
var i__19488__auto___36144 = (0);
while(true){
if((i__19488__auto___36144 < len__19487__auto___36143)){
args__19494__auto__.push((arguments[i__19488__auto___36144]));

var G__36145 = (i__19488__auto___36144 + (1));
i__19488__auto___36144 = G__36145;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq36142){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36142));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36146){
var map__36149 = p__36146;
var map__36149__$1 = ((((!((map__36149 == null)))?((((map__36149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36149):map__36149);
var message = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20613__auto___36311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___36311,ch){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___36311,ch){
return (function (state_36280){
var state_val_36281 = (state_36280[(1)]);
if((state_val_36281 === (7))){
var inst_36276 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36282_36312 = state_36280__$1;
(statearr_36282_36312[(2)] = inst_36276);

(statearr_36282_36312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (1))){
var state_36280__$1 = state_36280;
var statearr_36283_36313 = state_36280__$1;
(statearr_36283_36313[(2)] = null);

(statearr_36283_36313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (4))){
var inst_36233 = (state_36280[(7)]);
var inst_36233__$1 = (state_36280[(2)]);
var state_36280__$1 = (function (){var statearr_36284 = state_36280;
(statearr_36284[(7)] = inst_36233__$1);

return statearr_36284;
})();
if(cljs.core.truth_(inst_36233__$1)){
var statearr_36285_36314 = state_36280__$1;
(statearr_36285_36314[(1)] = (5));

} else {
var statearr_36286_36315 = state_36280__$1;
(statearr_36286_36315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (15))){
var inst_36240 = (state_36280[(8)]);
var inst_36255 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36240);
var inst_36256 = cljs.core.first.call(null,inst_36255);
var inst_36257 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36256);
var inst_36258 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36257)].join('');
var inst_36259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36258);
var state_36280__$1 = state_36280;
var statearr_36287_36316 = state_36280__$1;
(statearr_36287_36316[(2)] = inst_36259);

(statearr_36287_36316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (13))){
var inst_36264 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36288_36317 = state_36280__$1;
(statearr_36288_36317[(2)] = inst_36264);

(statearr_36288_36317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (6))){
var state_36280__$1 = state_36280;
var statearr_36289_36318 = state_36280__$1;
(statearr_36289_36318[(2)] = null);

(statearr_36289_36318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (17))){
var inst_36262 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36290_36319 = state_36280__$1;
(statearr_36290_36319[(2)] = inst_36262);

(statearr_36290_36319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (3))){
var inst_36278 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36280__$1,inst_36278);
} else {
if((state_val_36281 === (12))){
var inst_36239 = (state_36280[(9)]);
var inst_36253 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36239,opts);
var state_36280__$1 = state_36280;
if(cljs.core.truth_(inst_36253)){
var statearr_36291_36320 = state_36280__$1;
(statearr_36291_36320[(1)] = (15));

} else {
var statearr_36292_36321 = state_36280__$1;
(statearr_36292_36321[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (2))){
var state_36280__$1 = state_36280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36280__$1,(4),ch);
} else {
if((state_val_36281 === (11))){
var inst_36240 = (state_36280[(8)]);
var inst_36245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36246 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36240);
var inst_36247 = cljs.core.async.timeout.call(null,(1000));
var inst_36248 = [inst_36246,inst_36247];
var inst_36249 = (new cljs.core.PersistentVector(null,2,(5),inst_36245,inst_36248,null));
var state_36280__$1 = state_36280;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36280__$1,(14),inst_36249);
} else {
if((state_val_36281 === (9))){
var inst_36240 = (state_36280[(8)]);
var inst_36266 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36267 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36240);
var inst_36268 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36267);
var inst_36269 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36268)].join('');
var inst_36270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36269);
var state_36280__$1 = (function (){var statearr_36293 = state_36280;
(statearr_36293[(10)] = inst_36266);

return statearr_36293;
})();
var statearr_36294_36322 = state_36280__$1;
(statearr_36294_36322[(2)] = inst_36270);

(statearr_36294_36322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (5))){
var inst_36233 = (state_36280[(7)]);
var inst_36235 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36236 = (new cljs.core.PersistentArrayMap(null,2,inst_36235,null));
var inst_36237 = (new cljs.core.PersistentHashSet(null,inst_36236,null));
var inst_36238 = figwheel.client.focus_msgs.call(null,inst_36237,inst_36233);
var inst_36239 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36238);
var inst_36240 = cljs.core.first.call(null,inst_36238);
var inst_36241 = figwheel.client.autoload_QMARK_.call(null);
var state_36280__$1 = (function (){var statearr_36295 = state_36280;
(statearr_36295[(8)] = inst_36240);

(statearr_36295[(9)] = inst_36239);

return statearr_36295;
})();
if(cljs.core.truth_(inst_36241)){
var statearr_36296_36323 = state_36280__$1;
(statearr_36296_36323[(1)] = (8));

} else {
var statearr_36297_36324 = state_36280__$1;
(statearr_36297_36324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (14))){
var inst_36251 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36298_36325 = state_36280__$1;
(statearr_36298_36325[(2)] = inst_36251);

(statearr_36298_36325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (16))){
var state_36280__$1 = state_36280;
var statearr_36299_36326 = state_36280__$1;
(statearr_36299_36326[(2)] = null);

(statearr_36299_36326[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (10))){
var inst_36272 = (state_36280[(2)]);
var state_36280__$1 = (function (){var statearr_36300 = state_36280;
(statearr_36300[(11)] = inst_36272);

return statearr_36300;
})();
var statearr_36301_36327 = state_36280__$1;
(statearr_36301_36327[(2)] = null);

(statearr_36301_36327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (8))){
var inst_36239 = (state_36280[(9)]);
var inst_36243 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36239,opts);
var state_36280__$1 = state_36280;
if(cljs.core.truth_(inst_36243)){
var statearr_36302_36328 = state_36280__$1;
(statearr_36302_36328[(1)] = (11));

} else {
var statearr_36303_36329 = state_36280__$1;
(statearr_36303_36329[(1)] = (12));

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
});})(c__20613__auto___36311,ch))
;
return ((function (switch__20501__auto__,c__20613__auto___36311,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0 = (function (){
var statearr_36307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36307[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__);

(statearr_36307[(1)] = (1));

return statearr_36307;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1 = (function (state_36280){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_36280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e36308){if((e36308 instanceof Object)){
var ex__20505__auto__ = e36308;
var statearr_36309_36330 = state_36280;
(statearr_36309_36330[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36331 = state_36280;
state_36280 = G__36331;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__ = function(state_36280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1.call(this,state_36280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20502__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___36311,ch))
})();
var state__20615__auto__ = (function (){var statearr_36310 = f__20614__auto__.call(null);
(statearr_36310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___36311);

return statearr_36310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___36311,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36332_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36332_SHARP_));
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
var base_path_36339 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36339){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_36337 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_36338 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36338;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36337;
}}catch (e36336){if((e36336 instanceof Error)){
var e = e36336;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36339], null));
} else {
var e = e36336;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36339))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36340){
var map__36347 = p__36340;
var map__36347__$1 = ((((!((map__36347 == null)))?((((map__36347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36347):map__36347);
var opts = map__36347__$1;
var build_id = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36347,map__36347__$1,opts,build_id){
return (function (p__36349){
var vec__36350 = p__36349;
var map__36351 = cljs.core.nth.call(null,vec__36350,(0),null);
var map__36351__$1 = ((((!((map__36351 == null)))?((((map__36351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36351):map__36351);
var msg = map__36351__$1;
var msg_name = cljs.core.get.call(null,map__36351__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36350,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36350,map__36351,map__36351__$1,msg,msg_name,_,map__36347,map__36347__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36350,map__36351,map__36351__$1,msg,msg_name,_,map__36347,map__36347__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36347,map__36347__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36357){
var vec__36358 = p__36357;
var map__36359 = cljs.core.nth.call(null,vec__36358,(0),null);
var map__36359__$1 = ((((!((map__36359 == null)))?((((map__36359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36359):map__36359);
var msg = map__36359__$1;
var msg_name = cljs.core.get.call(null,map__36359__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36358,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36361){
var map__36371 = p__36361;
var map__36371__$1 = ((((!((map__36371 == null)))?((((map__36371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36371):map__36371);
var on_compile_warning = cljs.core.get.call(null,map__36371__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36371__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36371,map__36371__$1,on_compile_warning,on_compile_fail){
return (function (p__36373){
var vec__36374 = p__36373;
var map__36375 = cljs.core.nth.call(null,vec__36374,(0),null);
var map__36375__$1 = ((((!((map__36375 == null)))?((((map__36375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36375):map__36375);
var msg = map__36375__$1;
var msg_name = cljs.core.get.call(null,map__36375__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36374,(1));
var pred__36377 = cljs.core._EQ_;
var expr__36378 = msg_name;
if(cljs.core.truth_(pred__36377.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36378))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36377.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36378))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36371,map__36371__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,msg_hist,msg_names,msg){
return (function (state_36594){
var state_val_36595 = (state_36594[(1)]);
if((state_val_36595 === (7))){
var inst_36518 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36518)){
var statearr_36596_36642 = state_36594__$1;
(statearr_36596_36642[(1)] = (8));

} else {
var statearr_36597_36643 = state_36594__$1;
(statearr_36597_36643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (20))){
var inst_36588 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36598_36644 = state_36594__$1;
(statearr_36598_36644[(2)] = inst_36588);

(statearr_36598_36644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (27))){
var inst_36584 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36599_36645 = state_36594__$1;
(statearr_36599_36645[(2)] = inst_36584);

(statearr_36599_36645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (1))){
var inst_36511 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36511)){
var statearr_36600_36646 = state_36594__$1;
(statearr_36600_36646[(1)] = (2));

} else {
var statearr_36601_36647 = state_36594__$1;
(statearr_36601_36647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (24))){
var inst_36586 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36602_36648 = state_36594__$1;
(statearr_36602_36648[(2)] = inst_36586);

(statearr_36602_36648[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (4))){
var inst_36592 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36594__$1,inst_36592);
} else {
if((state_val_36595 === (15))){
var inst_36590 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36603_36649 = state_36594__$1;
(statearr_36603_36649[(2)] = inst_36590);

(statearr_36603_36649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (21))){
var inst_36549 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36604_36650 = state_36594__$1;
(statearr_36604_36650[(2)] = inst_36549);

(statearr_36604_36650[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (31))){
var inst_36573 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36573)){
var statearr_36605_36651 = state_36594__$1;
(statearr_36605_36651[(1)] = (34));

} else {
var statearr_36606_36652 = state_36594__$1;
(statearr_36606_36652[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (32))){
var inst_36582 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36607_36653 = state_36594__$1;
(statearr_36607_36653[(2)] = inst_36582);

(statearr_36607_36653[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (33))){
var inst_36571 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36608_36654 = state_36594__$1;
(statearr_36608_36654[(2)] = inst_36571);

(statearr_36608_36654[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (13))){
var inst_36532 = figwheel.client.heads_up.clear.call(null);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(16),inst_36532);
} else {
if((state_val_36595 === (22))){
var inst_36553 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36554 = figwheel.client.heads_up.append_message.call(null,inst_36553);
var state_36594__$1 = state_36594;
var statearr_36609_36655 = state_36594__$1;
(statearr_36609_36655[(2)] = inst_36554);

(statearr_36609_36655[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (36))){
var inst_36580 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36610_36656 = state_36594__$1;
(statearr_36610_36656[(2)] = inst_36580);

(statearr_36610_36656[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (29))){
var inst_36564 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36611_36657 = state_36594__$1;
(statearr_36611_36657[(2)] = inst_36564);

(statearr_36611_36657[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (6))){
var inst_36513 = (state_36594[(7)]);
var state_36594__$1 = state_36594;
var statearr_36612_36658 = state_36594__$1;
(statearr_36612_36658[(2)] = inst_36513);

(statearr_36612_36658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (28))){
var inst_36560 = (state_36594[(2)]);
var inst_36561 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36562 = figwheel.client.heads_up.display_warning.call(null,inst_36561);
var state_36594__$1 = (function (){var statearr_36613 = state_36594;
(statearr_36613[(8)] = inst_36560);

return statearr_36613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(29),inst_36562);
} else {
if((state_val_36595 === (25))){
var inst_36558 = figwheel.client.heads_up.clear.call(null);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(28),inst_36558);
} else {
if((state_val_36595 === (34))){
var inst_36575 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(37),inst_36575);
} else {
if((state_val_36595 === (17))){
var inst_36540 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36614_36659 = state_36594__$1;
(statearr_36614_36659[(2)] = inst_36540);

(statearr_36614_36659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (3))){
var inst_36530 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36530)){
var statearr_36615_36660 = state_36594__$1;
(statearr_36615_36660[(1)] = (13));

} else {
var statearr_36616_36661 = state_36594__$1;
(statearr_36616_36661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (12))){
var inst_36526 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36617_36662 = state_36594__$1;
(statearr_36617_36662[(2)] = inst_36526);

(statearr_36617_36662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (2))){
var inst_36513 = (state_36594[(7)]);
var inst_36513__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36594__$1 = (function (){var statearr_36618 = state_36594;
(statearr_36618[(7)] = inst_36513__$1);

return statearr_36618;
})();
if(cljs.core.truth_(inst_36513__$1)){
var statearr_36619_36663 = state_36594__$1;
(statearr_36619_36663[(1)] = (5));

} else {
var statearr_36620_36664 = state_36594__$1;
(statearr_36620_36664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (23))){
var inst_36556 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36556)){
var statearr_36621_36665 = state_36594__$1;
(statearr_36621_36665[(1)] = (25));

} else {
var statearr_36622_36666 = state_36594__$1;
(statearr_36622_36666[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (35))){
var state_36594__$1 = state_36594;
var statearr_36623_36667 = state_36594__$1;
(statearr_36623_36667[(2)] = null);

(statearr_36623_36667[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (19))){
var inst_36551 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36551)){
var statearr_36624_36668 = state_36594__$1;
(statearr_36624_36668[(1)] = (22));

} else {
var statearr_36625_36669 = state_36594__$1;
(statearr_36625_36669[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (11))){
var inst_36522 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36626_36670 = state_36594__$1;
(statearr_36626_36670[(2)] = inst_36522);

(statearr_36626_36670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (9))){
var inst_36524 = figwheel.client.heads_up.clear.call(null);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(12),inst_36524);
} else {
if((state_val_36595 === (5))){
var inst_36515 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36594__$1 = state_36594;
var statearr_36627_36671 = state_36594__$1;
(statearr_36627_36671[(2)] = inst_36515);

(statearr_36627_36671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (14))){
var inst_36542 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36542)){
var statearr_36628_36672 = state_36594__$1;
(statearr_36628_36672[(1)] = (18));

} else {
var statearr_36629_36673 = state_36594__$1;
(statearr_36629_36673[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (26))){
var inst_36566 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36566)){
var statearr_36630_36674 = state_36594__$1;
(statearr_36630_36674[(1)] = (30));

} else {
var statearr_36631_36675 = state_36594__$1;
(statearr_36631_36675[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (16))){
var inst_36534 = (state_36594[(2)]);
var inst_36535 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36536 = figwheel.client.format_messages.call(null,inst_36535);
var inst_36537 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36538 = figwheel.client.heads_up.display_error.call(null,inst_36536,inst_36537);
var state_36594__$1 = (function (){var statearr_36632 = state_36594;
(statearr_36632[(9)] = inst_36534);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(17),inst_36538);
} else {
if((state_val_36595 === (30))){
var inst_36568 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36569 = figwheel.client.heads_up.display_warning.call(null,inst_36568);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(33),inst_36569);
} else {
if((state_val_36595 === (10))){
var inst_36528 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36633_36676 = state_36594__$1;
(statearr_36633_36676[(2)] = inst_36528);

(statearr_36633_36676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (18))){
var inst_36544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36545 = figwheel.client.format_messages.call(null,inst_36544);
var inst_36546 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36547 = figwheel.client.heads_up.display_error.call(null,inst_36545,inst_36546);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(21),inst_36547);
} else {
if((state_val_36595 === (37))){
var inst_36577 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36634_36677 = state_36594__$1;
(statearr_36634_36677[(2)] = inst_36577);

(statearr_36634_36677[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (8))){
var inst_36520 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(11),inst_36520);
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
var statearr_36638 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36638[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__);

(statearr_36638[(1)] = (1));

return statearr_36638;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1 = (function (state_36594){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_36594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e36639){if((e36639 instanceof Object)){
var ex__20505__auto__ = e36639;
var statearr_36640_36678 = state_36594;
(statearr_36640_36678[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36679 = state_36594;
state_36594 = G__36679;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__ = function(state_36594){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1.call(this,state_36594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,msg_hist,msg_names,msg))
})();
var state__20615__auto__ = (function (){var statearr_36641 = f__20614__auto__.call(null);
(statearr_36641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_36641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,msg_hist,msg_names,msg))
);

return c__20613__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20613__auto___36742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___36742,ch){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___36742,ch){
return (function (state_36725){
var state_val_36726 = (state_36725[(1)]);
if((state_val_36726 === (1))){
var state_36725__$1 = state_36725;
var statearr_36727_36743 = state_36725__$1;
(statearr_36727_36743[(2)] = null);

(statearr_36727_36743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (2))){
var state_36725__$1 = state_36725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36725__$1,(4),ch);
} else {
if((state_val_36726 === (3))){
var inst_36723 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36725__$1,inst_36723);
} else {
if((state_val_36726 === (4))){
var inst_36713 = (state_36725[(7)]);
var inst_36713__$1 = (state_36725[(2)]);
var state_36725__$1 = (function (){var statearr_36728 = state_36725;
(statearr_36728[(7)] = inst_36713__$1);

return statearr_36728;
})();
if(cljs.core.truth_(inst_36713__$1)){
var statearr_36729_36744 = state_36725__$1;
(statearr_36729_36744[(1)] = (5));

} else {
var statearr_36730_36745 = state_36725__$1;
(statearr_36730_36745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (5))){
var inst_36713 = (state_36725[(7)]);
var inst_36715 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36713);
var state_36725__$1 = state_36725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36725__$1,(8),inst_36715);
} else {
if((state_val_36726 === (6))){
var state_36725__$1 = state_36725;
var statearr_36731_36746 = state_36725__$1;
(statearr_36731_36746[(2)] = null);

(statearr_36731_36746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (7))){
var inst_36721 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
var statearr_36732_36747 = state_36725__$1;
(statearr_36732_36747[(2)] = inst_36721);

(statearr_36732_36747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (8))){
var inst_36717 = (state_36725[(2)]);
var state_36725__$1 = (function (){var statearr_36733 = state_36725;
(statearr_36733[(8)] = inst_36717);

return statearr_36733;
})();
var statearr_36734_36748 = state_36725__$1;
(statearr_36734_36748[(2)] = null);

(statearr_36734_36748[(1)] = (2));


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
});})(c__20613__auto___36742,ch))
;
return ((function (switch__20501__auto__,c__20613__auto___36742,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0 = (function (){
var statearr_36738 = [null,null,null,null,null,null,null,null,null];
(statearr_36738[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20502__auto__);

(statearr_36738[(1)] = (1));

return statearr_36738;
});
var figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1 = (function (state_36725){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_36725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e36739){if((e36739 instanceof Object)){
var ex__20505__auto__ = e36739;
var statearr_36740_36749 = state_36725;
(statearr_36740_36749[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36750 = state_36725;
state_36725 = G__36750;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__ = function(state_36725){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1.call(this,state_36725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20502__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20502__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___36742,ch))
})();
var state__20615__auto__ = (function (){var statearr_36741 = f__20614__auto__.call(null);
(statearr_36741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___36742);

return statearr_36741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___36742,ch))
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
return (function (state_36771){
var state_val_36772 = (state_36771[(1)]);
if((state_val_36772 === (1))){
var inst_36766 = cljs.core.async.timeout.call(null,(3000));
var state_36771__$1 = state_36771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36771__$1,(2),inst_36766);
} else {
if((state_val_36772 === (2))){
var inst_36768 = (state_36771[(2)]);
var inst_36769 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36771__$1 = (function (){var statearr_36773 = state_36771;
(statearr_36773[(7)] = inst_36768);

return statearr_36773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36771__$1,inst_36769);
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
var statearr_36777 = [null,null,null,null,null,null,null,null];
(statearr_36777[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__);

(statearr_36777[(1)] = (1));

return statearr_36777;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1 = (function (state_36771){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_36771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e36778){if((e36778 instanceof Object)){
var ex__20505__auto__ = e36778;
var statearr_36779_36781 = state_36771;
(statearr_36779_36781[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36782 = state_36771;
state_36771 = G__36782;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__ = function(state_36771){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1.call(this,state_36771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20502__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_36780 = f__20614__auto__.call(null);
(statearr_36780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_36780;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36783){
var map__36790 = p__36783;
var map__36790__$1 = ((((!((map__36790 == null)))?((((map__36790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36790):map__36790);
var ed = map__36790__$1;
var formatted_exception = cljs.core.get.call(null,map__36790__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36790__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36790__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36792_36796 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36793_36797 = null;
var count__36794_36798 = (0);
var i__36795_36799 = (0);
while(true){
if((i__36795_36799 < count__36794_36798)){
var msg_36800 = cljs.core._nth.call(null,chunk__36793_36797,i__36795_36799);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36800);

var G__36801 = seq__36792_36796;
var G__36802 = chunk__36793_36797;
var G__36803 = count__36794_36798;
var G__36804 = (i__36795_36799 + (1));
seq__36792_36796 = G__36801;
chunk__36793_36797 = G__36802;
count__36794_36798 = G__36803;
i__36795_36799 = G__36804;
continue;
} else {
var temp__4657__auto___36805 = cljs.core.seq.call(null,seq__36792_36796);
if(temp__4657__auto___36805){
var seq__36792_36806__$1 = temp__4657__auto___36805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36792_36806__$1)){
var c__19228__auto___36807 = cljs.core.chunk_first.call(null,seq__36792_36806__$1);
var G__36808 = cljs.core.chunk_rest.call(null,seq__36792_36806__$1);
var G__36809 = c__19228__auto___36807;
var G__36810 = cljs.core.count.call(null,c__19228__auto___36807);
var G__36811 = (0);
seq__36792_36796 = G__36808;
chunk__36793_36797 = G__36809;
count__36794_36798 = G__36810;
i__36795_36799 = G__36811;
continue;
} else {
var msg_36812 = cljs.core.first.call(null,seq__36792_36806__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36812);

var G__36813 = cljs.core.next.call(null,seq__36792_36806__$1);
var G__36814 = null;
var G__36815 = (0);
var G__36816 = (0);
seq__36792_36796 = G__36813;
chunk__36793_36797 = G__36814;
count__36794_36798 = G__36815;
i__36795_36799 = G__36816;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36817){
var map__36820 = p__36817;
var map__36820__$1 = ((((!((map__36820 == null)))?((((map__36820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36820):map__36820);
var w = map__36820__$1;
var message = cljs.core.get.call(null,map__36820__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__36828 = cljs.core.seq.call(null,plugins);
var chunk__36829 = null;
var count__36830 = (0);
var i__36831 = (0);
while(true){
if((i__36831 < count__36830)){
var vec__36832 = cljs.core._nth.call(null,chunk__36829,i__36831);
var k = cljs.core.nth.call(null,vec__36832,(0),null);
var plugin = cljs.core.nth.call(null,vec__36832,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36834 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36828,chunk__36829,count__36830,i__36831,pl_36834,vec__36832,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36834.call(null,msg_hist);
});})(seq__36828,chunk__36829,count__36830,i__36831,pl_36834,vec__36832,k,plugin))
);
} else {
}

var G__36835 = seq__36828;
var G__36836 = chunk__36829;
var G__36837 = count__36830;
var G__36838 = (i__36831 + (1));
seq__36828 = G__36835;
chunk__36829 = G__36836;
count__36830 = G__36837;
i__36831 = G__36838;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36828);
if(temp__4657__auto__){
var seq__36828__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36828__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__36828__$1);
var G__36839 = cljs.core.chunk_rest.call(null,seq__36828__$1);
var G__36840 = c__19228__auto__;
var G__36841 = cljs.core.count.call(null,c__19228__auto__);
var G__36842 = (0);
seq__36828 = G__36839;
chunk__36829 = G__36840;
count__36830 = G__36841;
i__36831 = G__36842;
continue;
} else {
var vec__36833 = cljs.core.first.call(null,seq__36828__$1);
var k = cljs.core.nth.call(null,vec__36833,(0),null);
var plugin = cljs.core.nth.call(null,vec__36833,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36843 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36828,chunk__36829,count__36830,i__36831,pl_36843,vec__36833,k,plugin,seq__36828__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36843.call(null,msg_hist);
});})(seq__36828,chunk__36829,count__36830,i__36831,pl_36843,vec__36833,k,plugin,seq__36828__$1,temp__4657__auto__))
);
} else {
}

var G__36844 = cljs.core.next.call(null,seq__36828__$1);
var G__36845 = null;
var G__36846 = (0);
var G__36847 = (0);
seq__36828 = G__36844;
chunk__36829 = G__36845;
count__36830 = G__36846;
i__36831 = G__36847;
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
var args36848 = [];
var len__19487__auto___36851 = arguments.length;
var i__19488__auto___36852 = (0);
while(true){
if((i__19488__auto___36852 < len__19487__auto___36851)){
args36848.push((arguments[i__19488__auto___36852]));

var G__36853 = (i__19488__auto___36852 + (1));
i__19488__auto___36852 = G__36853;
continue;
} else {
}
break;
}

var G__36850 = args36848.length;
switch (G__36850) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36848.length)].join('')));

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
var len__19487__auto___36859 = arguments.length;
var i__19488__auto___36860 = (0);
while(true){
if((i__19488__auto___36860 < len__19487__auto___36859)){
args__19494__auto__.push((arguments[i__19488__auto___36860]));

var G__36861 = (i__19488__auto___36860 + (1));
i__19488__auto___36860 = G__36861;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36856){
var map__36857 = p__36856;
var map__36857__$1 = ((((!((map__36857 == null)))?((((map__36857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36857):map__36857);
var opts = map__36857__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36855){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36855));
});

//# sourceMappingURL=client.js.map