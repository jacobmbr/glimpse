// Compiled by ClojureScript 1.8.51 {}
goog.provide('dirac.runtime.repl');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('dirac.runtime.prefs');
goog.require('clojure.string');
goog.require('goog.labs.userAgent.browser');
dirac.runtime.repl.available_QMARK_ = (function dirac$runtime$repl$available_QMARK_(){
var and__18704__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__18704__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__18704__auto__;
}
});
dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
dirac.runtime.repl.console_tunnel = (function dirac$runtime$repl$console_tunnel(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20045 = arguments.length;
var i__19787__auto___20046 = (0);
while(true){
if((i__19787__auto___20046 < len__19786__auto___20045)){
args__19793__auto__.push((arguments[i__19787__auto___20046]));

var G__20047 = (i__19787__auto___20046 + (1));
i__19787__auto___20046 = G__20047;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((1) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19794__auto__);
});

dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.into_array.call(null,args));
});

dirac.runtime.repl.console_tunnel.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq20043){
var G__20044 = cljs.core.first.call(null,seq20043);
var seq20043__$1 = cljs.core.next.call(null,seq20043);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__20044,seq20043__$1);
});
dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20050 = arguments.length;
var i__19787__auto___20051 = (0);
while(true){
if((i__19787__auto___20051 < len__19786__auto___20050)){
args__19793__auto__.push((arguments[i__19787__auto___20051]));

var G__20052 = (i__19787__auto___20051 + (1));
i__19787__auto___20051 = G__20052;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((1) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19794__auto__);
});

dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_msg_args.call(null,name,args));
});

dirac.runtime.repl.call_dirac.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq20048){
var G__20049 = cljs.core.first.call(null,seq20048);
var seq20048__$1 = cljs.core.next.call(null,seq20048);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__20049,seq20048__$1);
});
dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20056 = arguments.length;
var i__19787__auto___20057 = (0);
while(true){
if((i__19787__auto___20057 < len__19786__auto___20056)){
args__19793__auto__.push((arguments[i__19787__auto___20057]));

var G__20058 = (i__19787__auto___20057 + (1));
i__19787__auto___20057 = G__20058;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((2) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19794__auto__);
});

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.log.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq20053){
var G__20054 = cljs.core.first.call(null,seq20053);
var seq20053__$1 = cljs.core.next.call(null,seq20053);
var G__20055 = cljs.core.first.call(null,seq20053__$1);
var seq20053__$2 = cljs.core.next.call(null,seq20053__$1);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(G__20054,G__20055,seq20053__$2);
});
dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20062 = arguments.length;
var i__19787__auto___20063 = (0);
while(true){
if((i__19787__auto___20063 < len__19786__auto___20062)){
args__19793__auto__.push((arguments[i__19787__auto___20063]));

var G__20064 = (i__19787__auto___20063 + (1));
i__19787__auto___20063 = G__20064;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((2) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19794__auto__);
});

dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"warn",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.warn.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq20059){
var G__20060 = cljs.core.first.call(null,seq20059);
var seq20059__$1 = cljs.core.next.call(null,seq20059);
var G__20061 = cljs.core.first.call(null,seq20059__$1);
var seq20059__$2 = cljs.core.next.call(null,seq20059__$1);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(G__20060,G__20061,seq20059__$2);
});
dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20068 = arguments.length;
var i__19787__auto___20069 = (0);
while(true){
if((i__19787__auto___20069 < len__19786__auto___20068)){
args__19793__auto__.push((arguments[i__19787__auto___20069]));

var G__20070 = (i__19787__auto___20069 + (1));
i__19787__auto___20069 = G__20070;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((2) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19794__auto__);
});

dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"error",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.error.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq20065){
var G__20066 = cljs.core.first.call(null,seq20065);
var seq20065__$1 = cljs.core.next.call(null,seq20065);
var G__20067 = cljs.core.first.call(null,seq20065__$1);
var seq20065__$2 = cljs.core.next.call(null,seq20065__$1);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(G__20066,G__20067,seq20065__$2);
});
dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20075 = arguments.length;
var i__19787__auto___20076 = (0);
while(true){
if((i__19787__auto___20076 < len__19786__auto___20075)){
args__19793__auto__.push((arguments[i__19787__auto___20076]));

var G__20077 = (i__19787__auto___20076 + (1));
i__19787__auto___20076 = G__20077;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((3) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((3)),(0),null)):null);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19794__auto__);
});

dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.group_STAR_.cljs$lang$maxFixedArity = (3);

dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq20071){
var G__20072 = cljs.core.first.call(null,seq20071);
var seq20071__$1 = cljs.core.next.call(null,seq20071);
var G__20073 = cljs.core.first.call(null,seq20071__$1);
var seq20071__$2 = cljs.core.next.call(null,seq20071__$1);
var G__20074 = cljs.core.first.call(null,seq20071__$2);
var seq20071__$3 = cljs.core.next.call(null,seq20071__$2);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20072,G__20073,G__20074,seq20071__$3);
});
dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20079 = arguments.length;
var i__19787__auto___20080 = (0);
while(true){
if((i__19787__auto___20080 < len__19786__auto___20079)){
args__19793__auto__.push((arguments[i__19787__auto___20080]));

var G__20081 = (i__19787__auto___20080 + (1));
i__19787__auto___20080 = G__20081;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((0) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__19794__auto__);
});

dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,true,args);
});

dirac.runtime.repl.group_collapsed.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq20078){
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20078));
});
dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__19793__auto__ = [];
var len__19786__auto___20083 = arguments.length;
var i__19787__auto___20084 = (0);
while(true){
if((i__19787__auto___20084 < len__19786__auto___20083)){
args__19793__auto__.push((arguments[i__19787__auto___20084]));

var G__20085 = (i__19787__auto___20084 + (1));
i__19787__auto___20084 = G__20085;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((0) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(argseq__19794__auto__);
});

dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,false,args);
});

dirac.runtime.repl.group.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq20082){
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20082));
});
dirac.runtime.repl.group_end = (function dirac$runtime$repl$group_end(){
return console.groupEnd();
});
dirac.runtime.repl.detect_and_strip = (function dirac$runtime$repl$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count.call(null,prefix);
var s = cljs.core.subs.call(null,text,(0),prefix_len);
if(cljs.core._EQ_.call(null,s,prefix)){
return clojure.string.triml.call(null,cljs.core.subs.call(null,text,prefix_len));
} else {
return null;
}
});
dirac.runtime.repl.get_whitespace_prefix_length = (function dirac$runtime$repl$get_whitespace_prefix_length(line){
var temp__4655__auto__ = cljs.core.re_find.call(null,/^([ ]+)/,line);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return cljs.core.count.call(null,cljs.core.second.call(null,m));
} else {
return (0);
}
});
dirac.runtime.repl.remove_common_whitespace_prefix = (function dirac$runtime$repl$remove_common_whitespace_prefix(text){
var text_with_spaces = clojure.string.replace.call(null,text,"\t","  ");
var lines = clojure.string.split.call(null,text_with_spaces,/\n/);
var common_prefix_length = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,dirac.runtime.repl.get_whitespace_prefix_length,lines));
if((common_prefix_length > (0))){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,((function (text_with_spaces,lines,common_prefix_length){
return (function (p1__20086_SHARP_){
return cljs.core.subs.call(null,p1__20086_SHARP_,common_prefix_length);
});})(text_with_spaces,lines,common_prefix_length))
,lines));
} else {
return text;
}
});
dirac.runtime.repl.present_java_trace = (function dirac$runtime$repl$present_java_trace(request_id,text){
var lines = clojure.string.split.call(null,text,/\n/);
var first_line = cljs.core.first.call(null,lines);
var rest_content = clojure.string.join.call(null,"\n",cljs.core.rest.call(null,lines));
if(cljs.core.empty_QMARK_.call(null,rest_content)){
return dirac.runtime.repl.error.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),first_line);
} else {
dirac.runtime.repl.group_collapsed.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"%c%s",dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239)),first_line);

dirac.runtime.repl.log.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),dirac.runtime.repl.remove_common_whitespace_prefix.call(null,rest_content));

return dirac.runtime.repl.group_end.call(null);
}
});
dirac.runtime.repl.api_version = (3);
dirac.runtime.repl.get_api_version = (function dirac$runtime$repl$get_api_version(){
return dirac.runtime.repl.api_version;
});
goog.exportSymbol('dirac.runtime.repl.get_api_version', dirac.runtime.repl.get_api_version);
dirac.runtime.repl.get_effective_config = (function dirac$runtime$repl$get_effective_config(){
return cljs.core.clj__GT_js.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
goog.exportSymbol('dirac.runtime.repl.get_effective_config', dirac.runtime.repl.get_effective_config);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation result.
 */
dirac.runtime.repl.present_repl_result = (function dirac$runtime$repl$present_repl_result(request_id,value){
dirac.runtime.repl.log.call(null,request_id,"result",value);

return value;
});
goog.exportSymbol('dirac.runtime.repl.present_repl_result', dirac.runtime.repl.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation exception.
 */
dirac.runtime.repl.present_repl_exception = (function dirac$runtime$repl$present_repl_exception(request_id,exception){
return dirac.runtime.repl.error.call(null,request_id,"exception",exception);
});
goog.exportSymbol('dirac.runtime.repl.present_repl_exception', dirac.runtime.repl.present_repl_exception);
dirac.runtime.repl.present_output = (function dirac$runtime$repl$present_output(request_id,kind,text){
var G__20088 = kind;
switch (G__20088) {
case "java-trace":
return dirac.runtime.repl.present_java_trace.call(null,request_id,text);

break;
default:
var temp__4655__auto__ = dirac.runtime.repl.detect_and_strip.call(null,"WARNING:",text);
if(cljs.core.truth_(temp__4655__auto__)){
var warning_msg = temp__4655__auto__;
return dirac.runtime.repl.warn.call(null,request_id,"warning",warning_msg);
} else {
var temp__4655__auto____$1 = dirac.runtime.repl.detect_and_strip.call(null,"ERROR:",text);
if(cljs.core.truth_(temp__4655__auto____$1)){
var error_msg = temp__4655__auto____$1;
return dirac.runtime.repl.error.call(null,request_id,"error",error_msg);
} else {
return dirac.runtime.repl.log.call(null,request_id,kind,text);
}
}

}
});
goog.exportSymbol('dirac.runtime.repl.present_output', dirac.runtime.repl.present_output);
/**
 * This is a postprocessing function wrapping weasel javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length.
 */
dirac.runtime.repl.postprocess_successful_eval = (function dirac$runtime$repl$postprocess_successful_eval(value){
var _STAR_print_level_STAR_20092 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_20093 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-level","dirac-print-level",1233865961));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-length","dirac-print-length",1240393954));

try{return {"status": "success", "value": [cljs.core.str(value)].join('')};
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_20093;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_20092;
}});
goog.exportSymbol('dirac.runtime.repl.postprocess_successful_eval', dirac.runtime.repl.postprocess_successful_eval);
dirac.runtime.repl.postprocess_unsuccessful_eval = (function dirac$runtime$repl$postprocess_unsuccessful_eval(ex){

return {"status": "exception", "value": cljs.core.pr_str.call(null,ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?ex.stack:"No stacktrace available.")};
});
goog.exportSymbol('dirac.runtime.repl.postprocess_unsuccessful_eval', dirac.runtime.repl.postprocess_unsuccessful_eval);
dirac.runtime.repl.installed_QMARK_ = (function dirac$runtime$repl$installed_QMARK_(){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_;
});
dirac.runtime.repl.install_BANG_ = (function dirac$runtime$repl$install_BANG_(){
if(cljs.core.truth_((function (){var and__18704__auto__ = cljs.core.not.call(null,dirac.runtime.repl.installed_QMARK_.call(null));
if(and__18704__auto__){
return dirac.runtime.repl.available_QMARK_.call(null);
} else {
return and__18704__auto__;
}
})())){
clojure.browser.repl.bootstrap.call(null);

dirac.runtime.repl._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
dirac.runtime.repl.uninstall_BANG_ = (function dirac$runtime$repl$uninstall_BANG_(){
if(cljs.core.truth_(dirac.runtime.repl.installed_QMARK_.call(null))){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});

//# sourceMappingURL=repl.js.map