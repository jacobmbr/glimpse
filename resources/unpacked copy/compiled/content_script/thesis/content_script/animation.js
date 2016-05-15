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
var args14955 = [];
var len__7278__auto___14977 = arguments.length;
var i__7279__auto___14978 = (0);
while(true){
if((i__7279__auto___14978 < len__7278__auto___14977)){
args14955.push((arguments[i__7279__auto___14978]));

var G__14979 = (i__7279__auto___14978 + (1));
i__7279__auto___14978 = G__14979;
continue;
} else {
}
break;
}

var G__14957 = args14955.length;
switch (G__14957) {
case 2:
return thesis.content_script.animation.pop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thesis.content_script.animation.pop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14955.length)].join('')));

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

var map__14971 = options__$1;
var map__14971__$1 = ((((!((map__14971 == null)))?((((map__14971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14971):map__14971);
var duration = cljs.core.get.call(null,map__14971__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(300));
var easing = cljs.core.get.call(null,map__14971__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
var t = (thesis.content_script.animation.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(condition__$1)?scale:((1) - scale));
if((t < duration)){
requestAnimationFrame(((function (map__14971,map__14971__$1,duration,easing,t,scale,scale__$1,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__14971,map__14971__$1,duration,easing,t,scale,scale__$1,anim))
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
var args15005 = [];
var len__7278__auto___15039 = arguments.length;
var i__7279__auto___15041 = (0);
while(true){
if((i__7279__auto___15041 < len__7278__auto___15039)){
args15005.push((arguments[i__7279__auto___15041]));

var G__15043 = (i__7279__auto___15041 + (1));
i__7279__auto___15041 = G__15043;
continue;
} else {
}
break;
}

var G__15022 = args15005.length;
switch (G__15022) {
case 3:
return thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15005.length)].join('')));

}
});

thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$3 = (function (condition,a,b){
return thesis.content_script.animation.interpolate_if.call(null,condition,a,b,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.interpolate_if.cljs$core$IFn$_invoke$arity$4 = (function (condition,a,b,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),a], null));
var map__15025 = options;
var map__15025__$1 = ((((!((map__15025 == null)))?((((map__15025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15025):map__15025);
var duration = cljs.core.get.call(null,map__15025__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__15025__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__15025,map__15025__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),thesis.content_script.animation.now.call(null),new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"from","from",1815293044),a,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var t = (thesis.content_script.animation.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(cljs.core.deref.call(null,condition))?scale:((1) - scale));
if((t < duration)){
setTimeout(((function (t,scale,scale__$1,anim,map__15025,map__15025__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(t,scale,scale__$1,anim,map__15025,map__15025__$1,duration,easing))
);

return ((a * ((1) - scale__$1)) + (b * scale__$1));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,condition))){
return b;
} else {
return a;
}
}
});})(anim,map__15025,map__15025__$1,duration,easing))
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
var args15090 = [];
var len__7278__auto___15101 = arguments.length;
var i__7279__auto___15102 = (0);
while(true){
if((i__7279__auto___15102 < len__7278__auto___15101)){
args15090.push((arguments[i__7279__auto___15102]));

var G__15103 = (i__7279__auto___15102 + (1));
i__7279__auto___15102 = G__15103;
continue;
} else {
}
break;
}

var G__15097 = args15090.length;
switch (G__15097) {
case 1:
return thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15090.length)].join('')));

}
});

thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thesis.content_script.animation.interpolate_to.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.interpolate_to.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"at","at",1476951349),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"start","start",-355208981),thesis.content_script.animation.now.call(null)], null));
var map__15099 = options;
var map__15099__$1 = ((((!((map__15099 == null)))?((((map__15099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15099):map__15099);
var duration = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__15099,map__15099__$1,duration,easing){
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
setTimeout(((function (at,t,scale,a,b,anim,map__15099,map__15099__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"at","at",1476951349),at,new cljs.core.Keyword(null,"frame","frame",-1711082588),(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)) + (1)));
});})(at,t,scale,a,b,anim,map__15099,map__15099__$1,duration,easing))
);

return at;
} else {
return b;
}
});})(anim,map__15099,map__15099__$1,duration,easing))
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
var args15108 = [];
var len__7278__auto___15115 = arguments.length;
var i__7279__auto___15116 = (0);
while(true){
if((i__7279__auto___15116 < len__7278__auto___15115)){
args15108.push((arguments[i__7279__auto___15116]));

var G__15120 = (i__7279__auto___15116 + (1));
i__7279__auto___15116 = G__15120;
continue;
} else {
}
break;
}

var G__15110 = args15108.length;
switch (G__15110) {
case 2:
return thesis.content_script.animation.interpolate_arg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thesis.content_script.animation.interpolate_arg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15108.length)].join('')));

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

var map__15113 = options__$1;
var map__15113__$1 = ((((!((map__15113 == null)))?((((map__15113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15113):map__15113);
var easing = cljs.core.get.call(null,map__15113__$1,new cljs.core.Keyword(null,"easing","easing",735372043),thesis.content_script.animation.interpolate);
var duration = cljs.core.get.call(null,map__15113__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var t = (thesis.content_script.animation.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
if((t < duration)){
setTimeout(((function (map__15113,map__15113__$1,easing,duration,t,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__15113,map__15113__$1,easing,duration,t,anim))
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
thesis.content_script.animation.evaluate = (function thesis$content_script$animation$evaluate(x2,dt,x,v,a,p__15147){
var map__15153 = p__15147;
var map__15153__$1 = ((((!((map__15153 == null)))?((((map__15153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15153):map__15153);
var mass = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var stiffness = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962));
var damping = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"damping","damping",1054389681));
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
var vec__15177 = thesis.content_script.animation.evaluate.call(null,x2,0.0,x,v,0.0,options);
var av = cljs.core.nth.call(null,vec__15177,(0),null);
var aa = cljs.core.nth.call(null,vec__15177,(1),null);
var vec__15178 = thesis.content_script.animation.evaluate.call(null,x2,dt2,x,av,aa,options);
var bv = cljs.core.nth.call(null,vec__15178,(0),null);
var ba = cljs.core.nth.call(null,vec__15178,(1),null);
var vec__15179 = thesis.content_script.animation.evaluate.call(null,x2,dt2,x,bv,ba,options);
var cv = cljs.core.nth.call(null,vec__15179,(0),null);
var ca = cljs.core.nth.call(null,vec__15179,(1),null);
var vec__15180 = thesis.content_script.animation.evaluate.call(null,x2,dt,x,cv,ca,options);
var dv = cljs.core.nth.call(null,vec__15180,(0),null);
var da = cljs.core.nth.call(null,vec__15180,(1),null);
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
var args15192 = [];
var len__7278__auto___15209 = arguments.length;
var i__7279__auto___15210 = (0);
while(true){
if((i__7279__auto___15210 < len__7278__auto___15209)){
args15192.push((arguments[i__7279__auto___15210]));

var G__15212 = (i__7279__auto___15210 + (1));
i__7279__auto___15210 = G__15212;
continue;
} else {
}
break;
}

var G__15194 = args15192.length;
switch (G__15194) {
case 1:
return thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15192.length)].join('')));

}
});

thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$1 = (function (x2){
return thesis.content_script.animation.spring.call(null,x2,cljs.core.PersistentArrayMap.EMPTY);
});

thesis.content_script.animation.spring.cljs$core$IFn$_invoke$arity$2 = (function (x2,options){
var map__15195 = options;
var map__15195__$1 = ((((!((map__15195 == null)))?((((map__15195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15195):map__15195);
var from = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x2));
var velocity = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),(0));
var stiffness = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(1));
var mass = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046),(10));
var damping = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"damping","damping",1054389681),(1));
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),thesis.content_script.animation.now.call(null),new cljs.core.Keyword(null,"x","x",2099068185),from,new cljs.core.Keyword(null,"v","v",21465059),velocity], null));
return reagent.ratom.make_reaction.call(null,((function (map__15195,map__15195__$1,from,velocity,stiffness,mass,damping,anim){
return (function (){
var map__15197 = cljs.core.deref.call(null,anim);
var map__15197__$1 = ((((!((map__15197 == null)))?((((map__15197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15197):map__15197);
var x = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var v = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"v","v",21465059));
var t = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var t2 = thesis.content_script.animation.now.call(null);
var dt = (function (){var x__6546__auto__ = (1);
var y__6547__auto__ = ((t2 - t) / 10.0);
return ((x__6546__auto__ < y__6547__auto__) ? x__6546__auto__ : y__6547__auto__);
})();
if(cljs.core.truth_((function (){var and__6196__auto__ = thesis.content_script.animation.small.call(null,(x - cljs.core.deref.call(null,x2)));
if(cljs.core.truth_(and__6196__auto__)){
return thesis.content_script.animation.small.call(null,v);
} else {
return and__6196__auto__;
}
})())){
return cljs.core.deref.call(null,x2);
} else {
var vec__15203 = thesis.content_script.animation.integrate_rk4.call(null,cljs.core.deref.call(null,x2),dt,x,v,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mass","mass",-2138950046),mass,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),stiffness,new cljs.core.Keyword(null,"damping","damping",1054389681),damping], null));
var x__$1 = cljs.core.nth.call(null,vec__15203,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__15203,(1),null);
setTimeout(((function (vec__15203,x__$1,v__$1,map__15197,map__15197__$1,x,v,t,t2,dt,map__15195,map__15195__$1,from,velocity,stiffness,mass,damping,anim){
return (function (){
return cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t2,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
});})(vec__15203,x__$1,v__$1,map__15197,map__15197__$1,x,v,t,t2,dt,map__15195,map__15195__$1,from,velocity,stiffness,mass,damping,anim))
);

return x__$1;
}
});})(map__15195,map__15195__$1,from,velocity,stiffness,mass,damping,anim))
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
var args__7285__auto__ = [];
var len__7278__auto___15272 = arguments.length;
var i__7279__auto___15273 = (0);
while(true){
if((i__7279__auto___15273 < len__7278__auto___15272)){
args__7285__auto__.push((arguments[i__7279__auto___15273]));

var G__15274 = (i__7279__auto___15273 + (1));
i__7279__auto___15273 = G__15274;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((3) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((3)),(0),null)):null);
return thesis.content_script.animation.and_then.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7286__auto__);
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

thesis.content_script.animation.and_then.cljs$lang$applyTo = (function (seq15247){
var G__15248 = cljs.core.first.call(null,seq15247);
var seq15247__$1 = cljs.core.next.call(null,seq15247);
var G__15249 = cljs.core.first.call(null,seq15247__$1);
var seq15247__$2 = cljs.core.next.call(null,seq15247__$1);
var G__15250 = cljs.core.first.call(null,seq15247__$2);
var seq15247__$3 = cljs.core.next.call(null,seq15247__$2);
return thesis.content_script.animation.and_then.cljs$core$IFn$_invoke$arity$variadic(G__15248,G__15249,G__15250,seq15247__$3);
});
/**
 * Given a sequence of inputs, will consume them depending on their type:
 *   numbers will be a sleep in milliseconds
 *   functions will be called with no arguments
 *   vectors will be rendered as reagent components.
 */
thesis.content_script.animation.timeline = (function thesis$content_script$animation$timeline(var_args){
var args__7285__auto__ = [];
var len__7278__auto___15344 = arguments.length;
var i__7279__auto___15345 = (0);
while(true){
if((i__7279__auto___15345 < len__7278__auto___15344)){
args__7285__auto__.push((arguments[i__7279__auto___15345]));

var G__15346 = (i__7279__auto___15345 + (1));
i__7279__auto___15345 = G__15346;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((1) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((1)),(0),null)):null);
return thesis.content_script.animation.timeline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7286__auto__);
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

thesis.content_script.animation.timeline.cljs$lang$applyTo = (function (seq15335){
var G__15336 = cljs.core.first.call(null,seq15335);
var seq15335__$1 = cljs.core.next.call(null,seq15335);
return thesis.content_script.animation.timeline.cljs$core$IFn$_invoke$arity$variadic(G__15336,seq15335__$1);
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