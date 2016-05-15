// Compiled by ClojureScript 1.8.51 {}
goog.provide('dirac.runtime.prefs');
goog.require('cljs.core');
dirac.runtime.prefs.default_prefs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"weasel-auto-reconnect","weasel-auto-reconnect",-1029132223),new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239),new cljs.core.Keyword(null,"dirac-print-length","dirac-print-length",1240393954),new cljs.core.Keyword(null,"eval-time-limit","eval-time-limit",1470179717),new cljs.core.Keyword(null,"agent-verbose","agent-verbose",714204005),new cljs.core.Keyword(null,"agent-response-timeout","agent-response-timeout",-104323929),new cljs.core.Keyword(null,"dirac-print-level","dirac-print-level",1233865961),new cljs.core.Keyword(null,"agent-host","agent-host",-544377515),new cljs.core.Keyword(null,"context-availablity-total-time-limit","context-availablity-total-time-limit",-1092534443),new cljs.core.Keyword(null,"weasel-verbose","weasel-verbose",613531446),new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847),new cljs.core.Keyword(null,"weasel-pre-eval-delay","weasel-pre-eval-delay",1053650811),new cljs.core.Keyword(null,"install-check-next-trial-waiting-time","install-check-next-trial-waiting-time",1679580093),new cljs.core.Keyword(null,"install-check-eval-time-limit","install-check-eval-time-limit",-1484307459),new cljs.core.Keyword(null,"agent-port","agent-port",1866425630),new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370),new cljs.core.Keyword(null,"agent-auto-reconnect","agent-auto-reconnect",-416343458),new cljs.core.Keyword(null,"install-check-total-time-limit","install-check-total-time-limit",-912454882),new cljs.core.Keyword(null,"context-availablity-next-trial-waiting-time","context-availablity-next-trial-waiting-time",-1183694497)],[false,"color:red",(10),(10000),false,(5000),(1),"localhost",(3000),false,"unidentified",(100),(500),(300),"8231",false,true,(5000),(10)]);
dirac.runtime.prefs.static_prefs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847),"jacobmbr/thesis"], null);
dirac.runtime.prefs.current_prefs = cljs.core.atom.call(null,cljs.core.merge.call(null,dirac.runtime.prefs.default_prefs,dirac.runtime.prefs.static_prefs));
dirac.runtime.prefs.get_prefs = (function dirac$runtime$prefs$get_prefs(){
return cljs.core.deref.call(null,dirac.runtime.prefs.current_prefs);
});
dirac.runtime.prefs.pref = (function dirac$runtime$prefs$pref(key){
return key.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
dirac.runtime.prefs.set_prefs_BANG_ = (function dirac$runtime$prefs$set_prefs_BANG_(new_prefs){
return cljs.core.reset_BANG_.call(null,dirac.runtime.prefs.current_prefs,new_prefs);
});
dirac.runtime.prefs.set_pref_BANG_ = (function dirac$runtime$prefs$set_pref_BANG_(key,val){
return cljs.core.swap_BANG_.call(null,dirac.runtime.prefs.current_prefs,cljs.core.assoc,key,val);
});
dirac.runtime.prefs.merge_prefs_BANG_ = (function dirac$runtime$prefs$merge_prefs_BANG_(m){
return cljs.core.swap_BANG_.call(null,dirac.runtime.prefs.current_prefs,cljs.core.merge,m);
});
dirac.runtime.prefs.update_pref_BANG_ = (function dirac$runtime$prefs$update_pref_BANG_(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24368 = arguments.length;
var i__19787__auto___24369 = (0);
while(true){
if((i__19787__auto___24369 < len__19786__auto___24368)){
args__19793__auto__.push((arguments[i__19787__auto___24369]));

var G__24370 = (i__19787__auto___24369 + (1));
i__19787__auto___24369 = G__24370;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((2) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((2)),(0),null)):null);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19794__auto__);
});

dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,dirac.runtime.prefs.current_prefs,cljs.core.update,key,f,args);
});

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq24365){
var G__24366 = cljs.core.first.call(null,seq24365);
var seq24365__$1 = cljs.core.next.call(null,seq24365);
var G__24367 = cljs.core.first.call(null,seq24365__$1);
var seq24365__$2 = cljs.core.next.call(null,seq24365__$1);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24366,G__24367,seq24365__$2);
});

//# sourceMappingURL=prefs.js.map