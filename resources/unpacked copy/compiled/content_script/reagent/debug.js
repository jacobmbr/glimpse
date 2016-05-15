// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__11917__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11918__i = 0, G__11918__a = new Array(arguments.length -  0);
while (G__11918__i < G__11918__a.length) {G__11918__a[G__11918__i] = arguments[G__11918__i + 0]; ++G__11918__i;}
  args = new cljs.core.IndexedSeq(G__11918__a,0);
} 
return G__11917__delegate.call(this,args);};
G__11917.cljs$lang$maxFixedArity = 0;
G__11917.cljs$lang$applyTo = (function (arglist__11919){
var args = cljs.core.seq(arglist__11919);
return G__11917__delegate(args);
});
G__11917.cljs$core$IFn$_invoke$arity$variadic = G__11917__delegate;
return G__11917;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11920__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11921__i = 0, G__11921__a = new Array(arguments.length -  0);
while (G__11921__i < G__11921__a.length) {G__11921__a[G__11921__i] = arguments[G__11921__i + 0]; ++G__11921__i;}
  args = new cljs.core.IndexedSeq(G__11921__a,0);
} 
return G__11920__delegate.call(this,args);};
G__11920.cljs$lang$maxFixedArity = 0;
G__11920.cljs$lang$applyTo = (function (arglist__11924){
var args = cljs.core.seq(arglist__11924);
return G__11920__delegate(args);
});
G__11920.cljs$core$IFn$_invoke$arity$variadic = G__11920__delegate;
return G__11920;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map