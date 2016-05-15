// Compiled by ClojureScript 1.8.51 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__15131_SHARP_){
return console.log(p1__15131_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__15132_SHARP_){
return console.warn(p1__15132_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__15133_SHARP_){
return console.error(p1__15133_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__15134_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__15134_SHARP_);
} else {
return console.log(p1__15134_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__7285__auto__ = [];
var len__7278__auto___15140 = arguments.length;
var i__7279__auto___15141 = (0);
while(true){
if((i__7279__auto___15141 < len__7278__auto___15140)){
args__7285__auto__.push((arguments[i__7279__auto___15141]));

var G__15142 = (i__7279__auto___15141 + (1));
i__7279__auto___15141 = G__15142;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq15137){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15137));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__7285__auto__ = [];
var len__7278__auto___15149 = arguments.length;
var i__7279__auto___15151 = (0);
while(true){
if((i__7279__auto___15151 < len__7278__auto___15149)){
args__7285__auto__.push((arguments[i__7279__auto___15151]));

var G__15152 = (i__7279__auto___15151 + (1));
i__7279__auto___15151 = G__15152;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq15146){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15146));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__7285__auto__ = [];
var len__7278__auto___15156 = arguments.length;
var i__7279__auto___15157 = (0);
while(true){
if((i__7279__auto___15157 < len__7278__auto___15156)){
args__7285__auto__.push((arguments[i__7279__auto___15157]));

var G__15158 = (i__7279__auto___15157 + (1));
i__7279__auto___15157 = G__15158;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq15155){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15155));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__7285__auto__ = [];
var len__7278__auto___15189 = arguments.length;
var i__7279__auto___15190 = (0);
while(true){
if((i__7279__auto___15190 < len__7278__auto___15189)){
args__7285__auto__.push((arguments[i__7279__auto___15190]));

var G__15191 = (i__7279__auto___15190 + (1));
i__7279__auto___15190 = G__15191;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq15183){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15183));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__7285__auto__ = [];
var len__7278__auto___15214 = arguments.length;
var i__7279__auto___15215 = (0);
while(true){
if((i__7279__auto___15215 < len__7278__auto___15214)){
args__7285__auto__.push((arguments[i__7279__auto___15215]));

var G__15216 = (i__7279__auto___15215 + (1));
i__7279__auto___15215 = G__15216;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq15211){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15211));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map