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
var len__19786__auto___24375 = arguments.length;
var i__19787__auto___24376 = (0);
while(true){
if((i__19787__auto___24376 < len__19786__auto___24375)){
args__19793__auto__.push((arguments[i__19787__auto___24376]));

var G__24377 = (i__19787__auto___24376 + (1));
i__19787__auto___24376 = G__24377;
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

dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq24373){
var G__24374 = cljs.core.first.call(null,seq24373);
var seq24373__$1 = cljs.core.next.call(null,seq24373);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__24374,seq24373__$1);
});
dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24380 = arguments.length;
var i__19787__auto___24381 = (0);
while(true){
if((i__19787__auto___24381 < len__19786__auto___24380)){
args__19793__auto__.push((arguments[i__19787__auto___24381]));

var G__24382 = (i__19787__auto___24381 + (1));
i__19787__auto___24381 = G__24382;
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

dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq24378){
var G__24379 = cljs.core.first.call(null,seq24378);
var seq24378__$1 = cljs.core.next.call(null,seq24378);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__24379,seq24378__$1);
});
dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24386 = arguments.length;
var i__19787__auto___24387 = (0);
while(true){
if((i__19787__auto___24387 < len__19786__auto___24386)){
args__19793__auto__.push((arguments[i__19787__auto___24387]));

var G__24388 = (i__19787__auto___24387 + (1));
i__19787__auto___24387 = G__24388;
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

dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq24383){
var G__24384 = cljs.core.first.call(null,seq24383);
var seq24383__$1 = cljs.core.next.call(null,seq24383);
var G__24385 = cljs.core.first.call(null,seq24383__$1);
var seq24383__$2 = cljs.core.next.call(null,seq24383__$1);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(G__24384,G__24385,seq24383__$2);
});
dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24392 = arguments.length;
var i__19787__auto___24393 = (0);
while(true){
if((i__19787__auto___24393 < len__19786__auto___24392)){
args__19793__auto__.push((arguments[i__19787__auto___24393]));

var G__24394 = (i__19787__auto___24393 + (1));
i__19787__auto___24393 = G__24394;
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

dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq24389){
var G__24390 = cljs.core.first.call(null,seq24389);
var seq24389__$1 = cljs.core.next.call(null,seq24389);
var G__24391 = cljs.core.first.call(null,seq24389__$1);
var seq24389__$2 = cljs.core.next.call(null,seq24389__$1);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(G__24390,G__24391,seq24389__$2);
});
dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24398 = arguments.length;
var i__19787__auto___24399 = (0);
while(true){
if((i__19787__auto___24399 < len__19786__auto___24398)){
args__19793__auto__.push((arguments[i__19787__auto___24399]));

var G__24400 = (i__19787__auto___24399 + (1));
i__19787__auto___24399 = G__24400;
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

dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq24395){
var G__24396 = cljs.core.first.call(null,seq24395);
var seq24395__$1 = cljs.core.next.call(null,seq24395);
var G__24397 = cljs.core.first.call(null,seq24395__$1);
var seq24395__$2 = cljs.core.next.call(null,seq24395__$1);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(G__24396,G__24397,seq24395__$2);
});
dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24405 = arguments.length;
var i__19787__auto___24406 = (0);
while(true){
if((i__19787__auto___24406 < len__19786__auto___24405)){
args__19793__auto__.push((arguments[i__19787__auto___24406]));

var G__24407 = (i__19787__auto___24406 + (1));
i__19787__auto___24406 = G__24407;
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

dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq24401){
var G__24402 = cljs.core.first.call(null,seq24401);
var seq24401__$1 = cljs.core.next.call(null,seq24401);
var G__24403 = cljs.core.first.call(null,seq24401__$1);
var seq24401__$2 = cljs.core.next.call(null,seq24401__$1);
var G__24404 = cljs.core.first.call(null,seq24401__$2);
var seq24401__$3 = cljs.core.next.call(null,seq24401__$2);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24402,G__24403,G__24404,seq24401__$3);
});
dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24409 = arguments.length;
var i__19787__auto___24410 = (0);
while(true){
if((i__19787__auto___24410 < len__19786__auto___24409)){
args__19793__auto__.push((arguments[i__19787__auto___24410]));

var G__24411 = (i__19787__auto___24410 + (1));
i__19787__auto___24410 = G__24411;
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

dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq24408){
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24408));
});
dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24413 = arguments.length;
var i__19787__auto___24414 = (0);
while(true){
if((i__19787__auto___24414 < len__19786__auto___24413)){
args__19793__auto__.push((arguments[i__19787__auto___24414]));

var G__24415 = (i__19787__auto___24414 + (1));
i__19787__auto___24414 = G__24415;
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

dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq24412){
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24412));
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
return (function (p1__24416_SHARP_){
return cljs.core.subs.call(null,p1__24416_SHARP_,common_prefix_length);
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
var G__24418 = kind;
switch (G__24418) {
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
var _STAR_print_level_STAR_24422 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_24423 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-level","dirac-print-level",1233865961));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-length","dirac-print-length",1240393954));

try{return {"status": "success", "value": [cljs.core.str(value)].join('')};
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_24423;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_24422;
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