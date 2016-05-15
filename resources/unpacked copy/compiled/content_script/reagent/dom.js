// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6208__auto__ = (function (){var and__6196__auto__ = typeof ReactDOM !== 'undefined';
if(and__6196__auto__){
return ReactDOM;
} else {
return and__6196__auto__;
}
})();
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
var and__6196__auto__ = typeof require !== 'undefined';
if(and__6196__auto__){
return require("react-dom");
} else {
return and__6196__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_14278 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_14278){
return (function (){
var _STAR_always_update_STAR_14279 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14279;
}});})(_STAR_always_update_STAR_14278))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14278;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args14280 = [];
var len__7278__auto___14287 = arguments.length;
var i__7279__auto___14288 = (0);
while(true){
if((i__7279__auto___14288 < len__7278__auto___14287)){
args14280.push((arguments[i__7279__auto___14288]));

var G__14289 = (i__7279__auto___14288 + (1));
i__7279__auto___14288 = G__14289;
continue;
} else {
}
break;
}

var G__14286 = args14280.length;
switch (G__14286) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14280.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__14298_14302 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__14299_14303 = null;
var count__14300_14304 = (0);
var i__14301_14305 = (0);
while(true){
if((i__14301_14305 < count__14300_14304)){
var v_14306 = cljs.core._nth.call(null,chunk__14299_14303,i__14301_14305);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_14306);

var G__14307 = seq__14298_14302;
var G__14308 = chunk__14299_14303;
var G__14309 = count__14300_14304;
var G__14310 = (i__14301_14305 + (1));
seq__14298_14302 = G__14307;
chunk__14299_14303 = G__14308;
count__14300_14304 = G__14309;
i__14301_14305 = G__14310;
continue;
} else {
var temp__4657__auto___14311 = cljs.core.seq.call(null,seq__14298_14302);
if(temp__4657__auto___14311){
var seq__14298_14312__$1 = temp__4657__auto___14311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14298_14312__$1)){
var c__7019__auto___14313 = cljs.core.chunk_first.call(null,seq__14298_14312__$1);
var G__14314 = cljs.core.chunk_rest.call(null,seq__14298_14312__$1);
var G__14315 = c__7019__auto___14313;
var G__14316 = cljs.core.count.call(null,c__7019__auto___14313);
var G__14317 = (0);
seq__14298_14302 = G__14314;
chunk__14299_14303 = G__14315;
count__14300_14304 = G__14316;
i__14301_14305 = G__14317;
continue;
} else {
var v_14318 = cljs.core.first.call(null,seq__14298_14312__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_14318);

var G__14319 = cljs.core.next.call(null,seq__14298_14312__$1);
var G__14320 = null;
var G__14321 = (0);
var G__14322 = (0);
seq__14298_14302 = G__14319;
chunk__14299_14303 = G__14320;
count__14300_14304 = G__14321;
i__14301_14305 = G__14322;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map