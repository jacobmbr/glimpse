// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.animation');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.dom');
thesis.content_script.animation.now = (function thesis$content_script$animation$now(){
return (new Date());
});
/**
 * Calculates a value between a and b relative to t in duration.
 */
thesis.content_script.animation.interpolate = (function thesis$content_script$animation$interpolate(a,b,duration,t){
if((t <= (0))){
return a;
} else {
if((t >= duration)){
return b;
} else {
return (a + ((t * (b - a)) / duration));

}
}
});
/**
 * Wraps a component to animate creation and destruction.
 *   Takes a condition ratom and a vector or value to be rendered.
 *   Options can contain duration (milliseconds)
 *   and easing (a function that takes a b duration t).
 */
thesis.content_script.animation.pop_when = (function thesis$content_script$animation$pop_when(var_args){
var args33871 = [];
var len__19487__auto___33878 = arguments.length;
var i__19488__auto___33879 = (0);
while(true){
if((i__19488__auto___33879 < len__19487__auto___33878)){
args33871.push((arguments[i__19488__auto___33879]));

var G__33880 = (i__19488__auto___33879 + (1));
i__19488__auto___33879 = G__33880;
continue;
} else {
}
break;
}

var G__33873 = args33871.length;
switch (G__33873) {
case 2:
return thesis.content_script.animation.pop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thesis.content_script.animation.pop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33871.length)].join('')));

}
});

thesis.content_script.animation.pop_when.cljs$core$IFn$_invoke$arity$2 = (function (condition,then){
return thesis.content_script.animation.pop_when.call(null,condition,then,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.pop_when.cljs$core$IFn$_invoke$arity$3 = (function (condition,then,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),condition], null));
return ((function (anim){
return (function thesis$content_script$animation$a_pop_when(condition__$1,then__$1,options__$1){
if(cljs.core.not_EQ_.call(null,condition__$1,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),thesis.content_script.animation.now.call(null),new cljs.core.Keyword(null,"from","from",1815293044),condition__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var map__33876 = options__$1;
var map__33876__$1 = ((((!((map__33876 == null)))?((((map__33876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33876):map__33876);
var duration = cljs.core.get.call(null,map__33876__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(300));
var easing = cljs.core.get.call(null,map__33876__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
var t = (thesis.content_script.animation.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(condition__$1)?scale:((1) - scale));
if((t < duration)){
requestAnimationFrame(((function (map__33876,map__33876__$1,duration,easing,t,scale,scale__$1,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__33876,map__33876__$1,duration,easing,t,scale,scale__$1,anim))
);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str(scale__$1),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),scale__$1], null)], null),then__$1], null);
} else {
if(cljs.core.truth_(condition__$1)){
return then__$1;
} else {
return null;
}
}
});
;})(anim))
});

thesis.content_script.animation.pop_when.cljs$lang$maxFixedArity = 3;
/**
 * Creates an event handler that will toggle a given ratom.
 */
thesis.content_script.animation.toggle_handler = (function thesis$content_script$animation$toggle_handler(ratom){
return (function thesis$content_script$animation$toggle_handler_$_a_toggle_handler(e){
cljs.core.swap_BANG_.call(null,ratom,cljs.core.not);

return e;
});
});
/**
 * Returns a map suitable for merging with component properties,
 *   that will keep a given ratom updated with the mouseover status.
 */
thesis.content_script.animation.mouse_watcher = (function thesis$content_script$animation$mouse_watcher(ratom){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function thesis$content_script$animation$mouse_watcher_$_timeline_mouse_over(e){
cljs.core.reset_BANG_.call(null,ratom,true);

return e;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function thesis$content_script$animation$mouse_watcher_$_timeline_mouse_out(e){
cljs.core.reset_BANG_.call(null,ratom,false);

return e;
})], null);
});
/**
 * Interpolates between two values when the conditon changes.
 *   Takes a condition ratom to watch, and 2 vectors or values to render.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
thesis.content_script.animation.interpolate_if = (function thesis$content_script$animation$interpolate_if(var_args){
var args33882 = [];
var len__19487__auto___33887 = arguments.length;
var i__19488__auto___33888 = (0);
while(true){
if((i__19488__auto___33888 < len__19487__auto___33887)){
args33882.push((arguments[i__19488__auto___33888]));

var G__33889 = (i__19488__auto___33888 + (1));
i__19488__auto___33888 = G__33889;
continue;
} else {
}
break;
}

var G__33884 = args33882.length;
switch (G__33884) {
case 3:
return thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33882.length)].join('')));

}
});

thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$3 = (function (condition,a,b){
return thesis.content_script.animation.interpolate_if.call(null,condition,a,b,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$4 = (function (condition,a,b,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),a], null));
var map__33885 = options;
var map__33885__$1 = ((((!((map__33885 == null)))?((((map__33885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33885):map__33885);
var duration = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__33885,map__33885__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),thesis.content_script.animation.now.call(null),new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"from","from",1815293044),a,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var t = (thesis.content_script.animation.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(cljs.core.deref.call(null,condition))?scale:((1) - scale));
if((t < duration)){
setTimeout(((function (t,scale,scale__$1,anim,map__33885,map__33885__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(t,scale,scale__$1,anim,map__33885,map__33885__$1,duration,easing))
);

return ((a * ((1) - scale__$1)) + (b * scale__$1));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,condition))){
return b;
} else {
return a;
}
}
});})(anim,map__33885,map__33885__$1,duration,easing))
);
});

thesis.content_script.animation.interpolate_if.cljs$lang$maxFixedArity = 4;
/**
 * Interpolates toward new values.
 *   Takes a ratom which stores a numeric value.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
thesis.content_script.animation.interpolate_to = (function thesis$content_script$animation$interpolate_to(var_args){
var args33891 = [];
var len__19487__auto___33896 = arguments.length;
var i__19488__auto___33897 = (0);
while(true){
if((i__19488__auto___33897 < len__19487__auto___33896)){
args33891.push((arguments[i__19488__auto___33897]));

var G__33898 = (i__19488__auto___33897 + (1));
i__19488__auto___33897 = G__33898;
continue;
} else {
}
break;
}

var G__33893 = args33891.length;
switch (G__33893) {
case 1:
return thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33891.length)].join('')));

}
});

thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thesis.content_script.animation.interpolate_to.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"at","at",1476951349),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"start","start",-355208981),thesis.content_script.animation.now.call(null)], null));
var map__33894 = options;
var map__33894__$1 = ((((!((map__33894 == null)))?((((map__33894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33894):map__33894);
var duration = cljs.core.get.call(null,map__33894__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__33894__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__33894,map__33894__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),cljs.core.deref.call(null,x))){
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),thesis.content_script.animation.now.call(null),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
} else {
}

var t = (thesis.content_script.animation.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var a = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim));
var b = cljs.core.deref.call(null,x);
if((t < duration)){
var at = ((a * ((1) - scale)) + (b * scale));
setTimeout(((function (at,t,scale,a,b,anim,map__33894,map__33894__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"at","at",1476951349),at,new cljs.core.Keyword(null,"frame","frame",-1711082588),(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)) + (1)));
});})(at,t,scale,a,b,anim,map__33894,map__33894__$1,duration,easing))
);

return at;
} else {
return b;
}
});})(anim,map__33894,map__33894__$1,duration,easing))
);
});

thesis.content_script.animation.interpolate_to.cljs$lang$maxFixedArity = 2;
/**
 * Interpolates the argument of a component to x.
 *   Will call the given component with values approaching x.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
thesis.content_script.animation.interpolate_arg = (function thesis$content_script$animation$interpolate_arg(var_args){
var args33900 = [];
var len__19487__auto___33907 = arguments.length;
var i__19488__auto___33908 = (0);
while(true){
if((i__19488__auto___33908 < len__19487__auto___33907)){
args33900.push((arguments[i__19488__auto___33908]));

var G__33909 = (i__19488__auto___33908 + (1));
i__19488__auto___33908 = G__33909;
continue;
} else {
}
break;
}

var G__33902 = args33900.length;
switch (G__33902) {
case 2:
return thesis.content_script.animation.interpolate_arg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thesis.content_script.animation.interpolate_arg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33900.length)].join('')));

}
});

thesis.content_script.animation.interpolate_arg.cljs$core$IFn$_invoke$arity$2 = (function (component,x){
return thesis.content_script.animation.interpolate_arg.call(null,component,x,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.interpolate_arg.cljs$core$IFn$_invoke$arity$3 = (function (component,x,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"to","to",192099007),x,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"current","current",-1088038603),x], null));
return ((function (anim){
return (function thesis$content_script$animation$an_interpolate_arg(component__$1,x__$1,options__$1){
if(cljs.core.not_EQ_.call(null,x__$1,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),thesis.content_script.animation.now.call(null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),new cljs.core.Keyword(null,"to","to",192099007),x__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
} else {
}

var map__33905 = options__$1;
var map__33905__$1 = ((((!((map__33905 == null)))?((((map__33905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33905):map__33905);
var easing = cljs.core.get.call(null,map__33905__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
var duration = cljs.core.get.call(null,map__33905__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var t = (thesis.content_script.animation.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
if((t < duration)){
setTimeout(((function (map__33905,map__33905__$1,easing,duration,t,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__33905,map__33905__$1,easing,duration,t,anim))
);

var i = easing.call(null,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),x__$1,duration,t);
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),i);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,i], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,x__$1], null);
}
});
;})(anim))
});

thesis.content_script.animation.interpolate_arg.cljs$lang$maxFixedArity = 3;
thesis.content_script.animation.mass = (10);
thesis.content_script.animation.stiffness = (1);
thesis.content_script.animation.damping = (1);
/**
 * This is where the spring physics formula is applied.
 */
thesis.content_script.animation.evaluate = (function thesis$content_script$animation$evaluate(x2,dt,x,v,a,p__33911){
var map__33914 = p__33911;
var map__33914__$1 = ((((!((map__33914 == null)))?((((map__33914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33914):map__33914);
var mass = cljs.core.get.call(null,map__33914__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var stiffness = cljs.core.get.call(null,map__33914__$1,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962));
var damping = cljs.core.get.call(null,map__33914__$1,new cljs.core.Keyword(null,"damping","damping",1054389681));
var x__$1 = (x + (v * dt));
var v__$1 = (v + (a * dt));
var f = ((stiffness * (x2 - x__$1)) - (damping * v__$1));
var a__$1 = (f / mass);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,a__$1], null);
});
/**
 * Takes an itegration step from numbers x to x2 over time dt,
 *   with a present velocity v.
 */
thesis.content_script.animation.integrate_rk4 = (function thesis$content_script$animation$integrate_rk4(x2,dt,x,v,options){
var dt2 = (dt * 0.5);
var vec__33920 = thesis.content_script.animation.evaluate.call(null,x2,0.0,x,v,0.0,options);
var av = cljs.core.nth.call(null,vec__33920,(0),null);
var aa = cljs.core.nth.call(null,vec__33920,(1),null);
var vec__33921 = thesis.content_script.animation.evaluate.call(null,x2,dt2,x,av,aa,options);
var bv = cljs.core.nth.call(null,vec__33921,(0),null);
var ba = cljs.core.nth.call(null,vec__33921,(1),null);
var vec__33922 = thesis.content_script.animation.evaluate.call(null,x2,dt2,x,bv,ba,options);
var cv = cljs.core.nth.call(null,vec__33922,(0),null);
var ca = cljs.core.nth.call(null,vec__33922,(1),null);
var vec__33923 = thesis.content_script.animation.evaluate.call(null,x2,dt,x,cv,ca,options);
var dv = cljs.core.nth.call(null,vec__33923,(0),null);
var da = cljs.core.nth.call(null,vec__33923,(1),null);
var dx = (((av + (2.0 * (bv + cv))) + dv) / 6.0);
var dv__$1 = (((aa + (2.0 * (ba + ca))) + da) / 6.0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dx * dt)),(v + (dv__$1 * dt))], null);
});
thesis.content_script.animation.small = (function thesis$content_script$animation$small(x){
return (Math.abs(x) < 0.1);
});
/**
 * Useful for wrapping a value in your component to make it springy.
 *   Returns a reaction that will take values approaching x2,
 *   updating every time Reagent calls requestAnimationFrame.
 *   Integrates a physical spring simulation for each step.
 *   Options can contain:
 *   from - a value to start from (initial value is used if absent).
 *   velocity of the mass on the spring (initially 0 if absent).
 *   mass, stiffness, damping of the spring.
 */
thesis.content_script.animation.spring = (function thesis$content_script$animation$spring(var_args){
var args33924 = [];
var len__19487__auto___33932 = arguments.length;
var i__19488__auto___33933 = (0);
while(true){
if((i__19488__auto___33933 < len__19487__auto___33932)){
args33924.push((arguments[i__19488__auto___33933]));

var G__33934 = (i__19488__auto___33933 + (1));
i__19488__auto___33933 = G__33934;
continue;
} else {
}
break;
}

var G__33926 = args33924.length;
switch (G__33926) {
case 1:
return thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33924.length)].join('')));

}
});

thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$1 = (function (x2){
return thesis.content_script.animation.spring.call(null,x2,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$2 = (function (x2,options){
var map__33927 = options;
var map__33927__$1 = ((((!((map__33927 == null)))?((((map__33927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33927):map__33927);
var from = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x2));
var velocity = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),(0));
var stiffness = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(1));
var mass = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046),(10));
var damping = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword(null,"damping","damping",1054389681),(1));
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),thesis.content_script.animation.now.call(null),new cljs.core.Keyword(null,"x","x",2099068185),from,new cljs.core.Keyword(null,"v","v",21465059),velocity], null));
return reagent.ratom.make_reaction.call(null,((function (map__33927,map__33927__$1,from,velocity,stiffness,mass,damping,anim){
return (function (){
var map__33929 = cljs.core.deref.call(null,anim);
var map__33929__$1 = ((((!((map__33929 == null)))?((((map__33929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33929):map__33929);
var x = cljs.core.get.call(null,map__33929__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var v = cljs.core.get.call(null,map__33929__$1,new cljs.core.Keyword(null,"v","v",21465059));
var t = cljs.core.get.call(null,map__33929__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var t2 = thesis.content_script.animation.now.call(null);
var dt = (function (){var x__18755__auto__ = (1);
var y__18756__auto__ = ((t2 - t) / 10.0);
return ((x__18755__auto__ < y__18756__auto__) ? x__18755__auto__ : y__18756__auto__);
})();
if(cljs.core.truth_((function (){var and__18405__auto__ = thesis.content_script.animation.small.call(null,(x - cljs.core.deref.call(null,x2)));
if(cljs.core.truth_(and__18405__auto__)){
return thesis.content_script.animation.small.call(null,v);
} else {
return and__18405__auto__;
}
})())){
return cljs.core.deref.call(null,x2);
} else {
var vec__33931 = thesis.content_script.animation.integrate_rk4.call(null,cljs.core.deref.call(null,x2),dt,x,v,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mass","mass",-2138950046),mass,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),stiffness,new cljs.core.Keyword(null,"damping","damping",1054389681),damping], null));
var x__$1 = cljs.core.nth.call(null,vec__33931,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__33931,(1),null);
setTimeout(((function (vec__33931,x__$1,v__$1,map__33929,map__33929__$1,x,v,t,t2,dt,map__33927,map__33927__$1,from,velocity,stiffness,mass,damping,anim){
return (function (){
return cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t2,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
});})(vec__33931,x__$1,v__$1,map__33929,map__33929__$1,x,v,t,t2,dt,map__33927,map__33927__$1,from,velocity,stiffness,mass,damping,anim))
);

return x__$1;
}
});})(map__33927,map__33927__$1,from,velocity,stiffness,mass,damping,anim))
);
});

thesis.content_script.animation.spring.cljs$lang$maxFixedArity = 2;
/**
 * Watch a ref only while mounted in the DOM.
 */
thesis.content_script.animation.watch = (function thesis$content_script$animation$watch(r,f){
var k = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"watch"));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"watch",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (k){
return (function thesis$content_script$animation$watch_$_watch_did_mount(this$){
return cljs.core.add_watch.call(null,r,k,f);
});})(k))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (k){
return (function thesis$content_script$animation$watch_$_watch_will_unmount(this$){
return cljs.core.remove_watch.call(null,r,k);
});})(k))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (k){
return (function thesis$content_script$animation$watch_$_watch_render(r__$1,f__$1){
return null;
});})(k))
], null));
});
/**
 * Call function f every period t while mounted in the DOM.
 */
thesis.content_script.animation.interval = (function thesis$content_script$animation$interval(f,t){
var id = cljs.core.atom.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id){
return (function thesis$content_script$animation$interval_$_interval_did_mount(this$){
return cljs.core.reset_BANG_.call(null,id,setInterval(f,t));
});})(id))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id){
return (function thesis$content_script$animation$interval_$_interval_will_unmount(this$){
return clearInterval(cljs.core.deref.call(null,id));
});})(id))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id){
return (function thesis$content_script$animation$interval_$_interval_render(){
return null;
});})(id))
], null));
});
/**
 * Call function f period t in milliseconds after being mounted in the DOM,
 *   only if still mounted.
 */
thesis.content_script.animation.timeout = (function thesis$content_script$animation$timeout(f,t){
var id = cljs.core.atom.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"timeout",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id){
return (function thesis$content_script$animation$timeout_$_timeout_did_mount(this$){
return cljs.core.reset_BANG_.call(null,id,setTimeout(f,t));
});})(id))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id){
return (function thesis$content_script$animation$timeout_$_timeout_will_unmount(this$){
return clearTimeout(cljs.core.deref.call(null,id));
});})(id))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id){
return (function thesis$content_script$animation$timeout_$_timeout_render(){
return null;
});})(id))
], null));
});
/**
 * Use timeline instead of this function directly.
 *   Provides a way to express a sequence of actions and pauses.
 *   Takes an id atom, element ratom,
 *   and a sequence of numbers and/or callback functions and/or vectors.
 *   Treats numbers as a wait timeout in milliseconds,
 *   calls callbacks after the elapsed time.
 *   id is reset as the timeout reference for cleanup.
 *   element is reset to vectors for rendering. 
 */
thesis.content_script.animation.and_then = (function thesis$content_script$animation$and_then(var_args){
var args__19494__auto__ = [];
var len__19487__auto___33940 = arguments.length;
var i__19488__auto___33941 = (0);
while(true){
if((i__19488__auto___33941 < len__19487__auto___33940)){
args__19494__auto__.push((arguments[i__19488__auto___33941]));

var G__33942 = (i__19488__auto___33941 + (1));
i__19488__auto___33941 = G__33942;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return thesis.content_script.animation.and_then.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

thesis.content_script.animation.and_then.cljs$core$IFn$_invoke$arity$variadic = (function (id,element,x,more){
if(typeof x === 'number'){
if(cljs.core.seq.call(null,more)){
return cljs.core.reset_BANG_.call(null,id,setTimeout((function (){
return cljs.core.apply.call(null,thesis.content_script.animation.and_then,id,element,more);
}),x));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
cljs.core.reset_BANG_.call(null,element,x);

if(cljs.core.seq.call(null,more)){
return cljs.core.apply.call(null,thesis.content_script.animation.and_then,id,element,more);
} else {
return null;
}
} else {
if((cljs.core.ifn_QMARK_.call(null,x)) && (!(cljs.core.coll_QMARK_.call(null,x))) && (!(cljs.core.map_QMARK_.call(null,x)))){
x.call(null);

if(cljs.core.seq.call(null,more)){
return cljs.core.apply.call(null,thesis.content_script.animation.and_then,id,element,more);
} else {
return null;
}
} else {
return cljs.core.apply.call(null,thesis.content_script.animation.and_then,id,element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("timeline encountered unexpected type "),cljs.core.str(cljs.core.type.call(null,x))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.call(null,x)], null)], null),more);

}
}
}
});

thesis.content_script.animation.and_then.cljs$lang$maxFixedArity = (3);

thesis.content_script.animation.and_then.cljs$lang$applyTo = (function (seq33936){
var G__33937 = cljs.core.first.call(null,seq33936);
var seq33936__$1 = cljs.core.next.call(null,seq33936);
var G__33938 = cljs.core.first.call(null,seq33936__$1);
var seq33936__$2 = cljs.core.next.call(null,seq33936__$1);
var G__33939 = cljs.core.first.call(null,seq33936__$2);
var seq33936__$3 = cljs.core.next.call(null,seq33936__$2);
return thesis.content_script.animation.and_then.cljs$core$IFn$_invoke$arity$variadic(G__33937,G__33938,G__33939,seq33936__$3);
});
/**
 * Given a sequence of inputs, will consume them depending on their type:
 *   numbers will be a sleep in milliseconds
 *   functions will be called with no arguments
 *   vectors will be rendered as reagent components.
 */
thesis.content_script.animation.timeline = (function thesis$content_script$animation$timeline(var_args){
var args__19494__auto__ = [];
var len__19487__auto___33945 = arguments.length;
var i__19488__auto___33946 = (0);
while(true){
if((i__19488__auto___33946 < len__19487__auto___33945)){
args__19494__auto__.push((arguments[i__19488__auto___33946]));

var G__33947 = (i__19488__auto___33946 + (1));
i__19488__auto___33946 = G__33947;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return thesis.content_script.animation.timeline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

thesis.content_script.animation.timeline.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
var id = cljs.core.atom.call(null,null);
var element = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id,element){
return (function thesis$content_script$animation$timeout_did_mount(this$){
return cljs.core.apply.call(null,thesis.content_script.animation.and_then,id,element,x,xs);
});})(id,element))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id,element){
return (function thesis$content_script$animation$timeout_will_unmount(this$){
if(cljs.core.truth_(cljs.core.deref.call(null,id))){
return clearTimeout(cljs.core.deref.call(null,id));
} else {
return null;
}
});})(id,element))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id,element){
return (function thesis$content_script$animation$timeout_render(){
return cljs.core.deref.call(null,element);
});})(id,element))
], null));
});

thesis.content_script.animation.timeline.cljs$lang$maxFixedArity = (1);

thesis.content_script.animation.timeline.cljs$lang$applyTo = (function (seq33943){
var G__33944 = cljs.core.first.call(null,seq33943);
var seq33943__$1 = cljs.core.next.call(null,seq33943);
return thesis.content_script.animation.timeline.cljs$core$IFn$_invoke$arity$variadic(G__33944,seq33943__$1);
});
/**
 * Gets the current document y scroll position.
 */
thesis.content_script.animation.get_scroll_y = (function thesis$content_script$animation$get_scroll_y(){
return goog.dom.getDocumentScroll().y;
});
/**
 * Gets the current document y scroll position.
 */
thesis.content_script.animation.get_scroll = thesis.content_script.animation.get_scroll_y;
/**
 * Gets the current document x scroll position.
 */
thesis.content_script.animation.get_scroll_x = (function thesis$content_script$animation$get_scroll_x(){
return goog.dom.getDocumentScroll().x;
});
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
thesis.content_script.animation.scroll_y = reagent.core.atom.call(null,thesis.content_script.animation.get_scroll_y.call(null));
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
thesis.content_script.animation.scroll = thesis.content_script.animation.scroll_y;
/**
 * A ratom for watching the current document x scroll,
 *   will be updated when there is a scroll event.
 */
thesis.content_script.animation.scroll_x = reagent.core.atom.call(null,thesis.content_script.animation.get_scroll_x.call(null));
goog.events.listen(window,goog.events.EventType.SCROLL,(function thesis$content_script$animation$a_scroll(e){
cljs.core.reset_BANG_.call(null,thesis.content_script.animation.scroll_y,thesis.content_script.animation.get_scroll_y.call(null));

return cljs.core.reset_BANG_.call(null,thesis.content_script.animation.scroll_x,thesis.content_script.animation.get_scroll_x.call(null));
}));

//# sourceMappingURL=animation.js.map