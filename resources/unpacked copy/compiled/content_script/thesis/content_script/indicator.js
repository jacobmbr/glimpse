// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.indicator');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('domina.css');
thesis.content_script.indicator.domains = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
thesis.content_script.indicator.ind_chan = cljs.core.atom.call(null,null);
thesis.content_script.indicator.add_domain = (function thesis$content_script$indicator$add_domain(d){
var seq__11164 = cljs.core.seq.call(null,cljs.core.vec.call(null,d));
var chunk__11165 = null;
var count__11166 = (0);
var i__11167 = (0);
while(true){
if((i__11167 < count__11166)){
var el = cljs.core._nth.call(null,chunk__11165,i__11167);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,thesis.content_script.indicator.domains),el))){
cljs.core.swap_BANG_.call(null,thesis.content_script.indicator.domains,cljs.core.conj,el);
} else {
}

var G__11168 = seq__11164;
var G__11169 = chunk__11165;
var G__11170 = count__11166;
var G__11171 = (i__11167 + (1));
seq__11164 = G__11168;
chunk__11165 = G__11169;
count__11166 = G__11170;
i__11167 = G__11171;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11164);
if(temp__4657__auto__){
var seq__11164__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11164__$1)){
var c__7019__auto__ = cljs.core.chunk_first.call(null,seq__11164__$1);
var G__11172 = cljs.core.chunk_rest.call(null,seq__11164__$1);
var G__11173 = c__7019__auto__;
var G__11174 = cljs.core.count.call(null,c__7019__auto__);
var G__11175 = (0);
seq__11164 = G__11172;
chunk__11165 = G__11173;
count__11166 = G__11174;
i__11167 = G__11175;
continue;
} else {
var el = cljs.core.first.call(null,seq__11164__$1);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,thesis.content_script.indicator.domains),el))){
cljs.core.swap_BANG_.call(null,thesis.content_script.indicator.domains,cljs.core.conj,el);
} else {
}

var G__11176 = cljs.core.next.call(null,seq__11164__$1);
var G__11177 = null;
var G__11178 = (0);
var G__11179 = (0);
seq__11164 = G__11176;
chunk__11165 = G__11177;
count__11166 = G__11178;
i__11167 = G__11179;
continue;
}
} else {
return null;
}
}
break;
}
});
thesis.content_script.indicator.draw_on_canvas = (function thesis$content_script$indicator$draw_on_canvas(space,form,vectors,n){
space.ctx.clearRect((0),(0),(50),(50));

var v = (new Vector((25),(25)));
var seq__11184 = cljs.core.seq.call(null,vectors);
var chunk__11185 = null;
var count__11186 = (0);
var i__11187 = (0);
while(true){
if((i__11187 < count__11186)){
var i = cljs.core._nth.call(null,chunk__11185,i__11187);
form.stroke("rgba(180,180,180,0.4)",(1));

form.line((new Pair((25),(25))).to((new Point(i))));

form.stroke((0)).fill("rgba(200,0,0,0.5)").circle((new Circle(i.rotate2D((Const.one_degree * cljs.core.rand.call(null,(1))),(new Point((25),(25)))))).setRadius((2)));

var G__11188 = seq__11184;
var G__11189 = chunk__11185;
var G__11190 = count__11186;
var G__11191 = (i__11187 + (1));
seq__11184 = G__11188;
chunk__11185 = G__11189;
count__11186 = G__11190;
i__11187 = G__11191;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11184);
if(temp__4657__auto__){
var seq__11184__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11184__$1)){
var c__7019__auto__ = cljs.core.chunk_first.call(null,seq__11184__$1);
var G__11192 = cljs.core.chunk_rest.call(null,seq__11184__$1);
var G__11193 = c__7019__auto__;
var G__11194 = cljs.core.count.call(null,c__7019__auto__);
var G__11195 = (0);
seq__11184 = G__11192;
chunk__11185 = G__11193;
count__11186 = G__11194;
i__11187 = G__11195;
continue;
} else {
var i = cljs.core.first.call(null,seq__11184__$1);
form.stroke("rgba(180,180,180,0.4)",(1));

form.line((new Pair((25),(25))).to((new Point(i))));

form.stroke((0)).fill("rgba(200,0,0,0.5)").circle((new Circle(i.rotate2D((Const.one_degree * cljs.core.rand.call(null,(1))),(new Point((25),(25)))))).setRadius((2)));

var G__11196 = cljs.core.next.call(null,seq__11184__$1);
var G__11197 = null;
var G__11198 = (0);
var G__11199 = (0);
seq__11184 = G__11196;
chunk__11185 = G__11197;
count__11186 = G__11198;
i__11187 = G__11199;
continue;
}
} else {
return null;
}
}
break;
}
});
thesis.content_script.indicator.make_vector = (function thesis$content_script$indicator$make_vector(){
return (new Vector(cljs.core.rand.call(null,(15)),cljs.core.rand.call(null,(15)))).moveBy((new Point((25),(25)))).rotate2D((cljs.core.rand.call(null,(360)) * Const.one_degree),(new Point((25),(25))));
});
thesis.content_script.indicator.canvas = (function thesis$content_script$indicator$canvas(){
var d = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,thesis.content_script.indicator.domains));
}));
var vectors = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var dom_node = reagent.core.atom.call(null,null);
var space = reagent.core.atom.call(null,null);
var form = reagent.core.atom.call(null,null);
var draw_chan = cljs.core.async.chan.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (d,vectors,dom_node,space,form,draw_chan){
return (function (this$){
cljs.core.reset_BANG_.call(null,dom_node,reagent.core.dom_node.call(null,this$));

cljs.core.reset_BANG_.call(null,space,(new CanvasSpace("ext-space")).display("#ext-canvas"));

cljs.core.reset_BANG_.call(null,form,(new Form(cljs.core.deref.call(null,space))));

var c__9710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9710__auto__,d,vectors,dom_node,space,form,draw_chan){
return (function (){
var f__9711__auto__ = (function (){var switch__9558__auto__ = ((function (c__9710__auto__,d,vectors,dom_node,space,form,draw_chan){
return (function (state_11256){
var state_val_11257 = (state_11256[(1)]);
if((state_val_11257 === (1))){
var inst_11241 = (0);
var state_11256__$1 = (function (){var statearr_11258 = state_11256;
(statearr_11258[(7)] = inst_11241);

return statearr_11258;
})();
var statearr_11259_11282 = state_11256__$1;
(statearr_11259_11282[(2)] = null);

(statearr_11259_11282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (2))){
var inst_11241 = (state_11256[(7)]);
var inst_11243 = (function (){var i = inst_11241;
return ((function (i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan){
return (function (){
var c__9710__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9710__auto____$1,i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan){
return (function (){
var f__9711__auto__ = (function (){var switch__9558__auto__ = ((function (c__9710__auto____$1,i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan){
return (function (state_11263){
var state_val_11264 = (state_11263[(1)]);
if((state_val_11264 === (1))){
var state_11263__$1 = state_11263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11263__$1,(2),draw_chan,"hu");
} else {
if((state_val_11264 === (2))){
var inst_11261 = (state_11263[(2)]);
var state_11263__$1 = state_11263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11263__$1,inst_11261);
} else {
return null;
}
}
});})(c__9710__auto____$1,i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan))
;
return ((function (switch__9558__auto__,c__9710__auto____$1,i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan){
return (function() {
var thesis$content_script$indicator$canvas_$_state_machine__9559__auto__ = null;
var thesis$content_script$indicator$canvas_$_state_machine__9559__auto____0 = (function (){
var statearr_11268 = [null,null,null,null,null,null,null];
(statearr_11268[(0)] = thesis$content_script$indicator$canvas_$_state_machine__9559__auto__);

(statearr_11268[(1)] = (1));

return statearr_11268;
});
var thesis$content_script$indicator$canvas_$_state_machine__9559__auto____1 = (function (state_11263){
while(true){
var ret_value__9560__auto__ = (function (){try{while(true){
var result__9561__auto__ = switch__9558__auto__.call(null,state_11263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9561__auto__;
}
break;
}
}catch (e11269){if((e11269 instanceof Object)){
var ex__9562__auto__ = e11269;
var statearr_11270_11283 = state_11263;
(statearr_11270_11283[(5)] = ex__9562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11284 = state_11263;
state_11263 = G__11284;
continue;
} else {
return ret_value__9560__auto__;
}
break;
}
});
thesis$content_script$indicator$canvas_$_state_machine__9559__auto__ = function(state_11263){
switch(arguments.length){
case 0:
return thesis$content_script$indicator$canvas_$_state_machine__9559__auto____0.call(this);
case 1:
return thesis$content_script$indicator$canvas_$_state_machine__9559__auto____1.call(this,state_11263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$indicator$canvas_$_state_machine__9559__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$indicator$canvas_$_state_machine__9559__auto____0;
thesis$content_script$indicator$canvas_$_state_machine__9559__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$indicator$canvas_$_state_machine__9559__auto____1;
return thesis$content_script$indicator$canvas_$_state_machine__9559__auto__;
})()
;})(switch__9558__auto__,c__9710__auto____$1,i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan))
})();
var state__9712__auto__ = (function (){var statearr_11271 = f__9711__auto__.call(null);
(statearr_11271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9710__auto____$1);

return statearr_11271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9712__auto__);
});})(c__9710__auto____$1,i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan))
);

return c__9710__auto____$1;
});
;})(i,inst_11241,state_val_11257,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan))
})();
var inst_11244 = window.requestAnimationFrame(inst_11243);
var inst_11245 = cljs.core.deref.call(null,space);
var inst_11246 = cljs.core.deref.call(null,form);
var inst_11247 = cljs.core.deref.call(null,vectors);
var inst_11248 = thesis.content_script.indicator.draw_on_canvas.call(null,inst_11245,inst_11246,inst_11247,inst_11241);
var state_11256__$1 = (function (){var statearr_11272 = state_11256;
(statearr_11272[(8)] = inst_11244);

(statearr_11272[(9)] = inst_11248);

return statearr_11272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11256__$1,(4),draw_chan);
} else {
if((state_val_11257 === (3))){
var inst_11254 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11256__$1,inst_11254);
} else {
if((state_val_11257 === (4))){
var inst_11241 = (state_11256[(7)]);
var inst_11250 = (state_11256[(2)]);
var inst_11251 = (inst_11241 + (1));
var inst_11241__$1 = inst_11251;
var state_11256__$1 = (function (){var statearr_11273 = state_11256;
(statearr_11273[(7)] = inst_11241__$1);

(statearr_11273[(10)] = inst_11250);

return statearr_11273;
})();
var statearr_11274_11285 = state_11256__$1;
(statearr_11274_11285[(2)] = null);

(statearr_11274_11285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__9710__auto__,d,vectors,dom_node,space,form,draw_chan))
;
return ((function (switch__9558__auto__,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan){
return (function() {
var thesis$content_script$indicator$canvas_$_state_machine__9559__auto__ = null;
var thesis$content_script$indicator$canvas_$_state_machine__9559__auto____0 = (function (){
var statearr_11278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11278[(0)] = thesis$content_script$indicator$canvas_$_state_machine__9559__auto__);

(statearr_11278[(1)] = (1));

return statearr_11278;
});
var thesis$content_script$indicator$canvas_$_state_machine__9559__auto____1 = (function (state_11256){
while(true){
var ret_value__9560__auto__ = (function (){try{while(true){
var result__9561__auto__ = switch__9558__auto__.call(null,state_11256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9561__auto__;
}
break;
}
}catch (e11279){if((e11279 instanceof Object)){
var ex__9562__auto__ = e11279;
var statearr_11280_11286 = state_11256;
(statearr_11280_11286[(5)] = ex__9562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11287 = state_11256;
state_11256 = G__11287;
continue;
} else {
return ret_value__9560__auto__;
}
break;
}
});
thesis$content_script$indicator$canvas_$_state_machine__9559__auto__ = function(state_11256){
switch(arguments.length){
case 0:
return thesis$content_script$indicator$canvas_$_state_machine__9559__auto____0.call(this);
case 1:
return thesis$content_script$indicator$canvas_$_state_machine__9559__auto____1.call(this,state_11256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$indicator$canvas_$_state_machine__9559__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$indicator$canvas_$_state_machine__9559__auto____0;
thesis$content_script$indicator$canvas_$_state_machine__9559__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$indicator$canvas_$_state_machine__9559__auto____1;
return thesis$content_script$indicator$canvas_$_state_machine__9559__auto__;
})()
;})(switch__9558__auto__,c__9710__auto__,d,vectors,dom_node,space,form,draw_chan))
})();
var state__9712__auto__ = (function (){var statearr_11281 = f__9711__auto__.call(null);
(statearr_11281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9710__auto__);

return statearr_11281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9712__auto__);
});})(c__9710__auto__,d,vectors,dom_node,space,form,draw_chan))
);

return c__9710__auto__;
});})(d,vectors,dom_node,space,form,draw_chan))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (d,vectors,dom_node,space,form,draw_chan){
return (function (){
var n__7123__auto__ = (cljs.core.deref.call(null,d) - cljs.core.count.call(null,cljs.core.deref.call(null,vectors)));
var n = (0);
while(true){
if((n < n__7123__auto__)){
cljs.core.swap_BANG_.call(null,vectors,cljs.core.conj,thesis.content_script.indicator.make_vector.call(null));

var G__11288 = (n + (1));
n = G__11288;
continue;
} else {
return null;
}
break;
}
});})(d,vectors,dom_node,space,form,draw_chan))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (d,vectors,dom_node,space,form,draw_chan){
return (function thesis$content_script$indicator$canvas_$_a_canvas(){
cljs.core.deref.call(null,thesis.content_script.indicator.domains);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,vectors,dom_node,space,form,draw_chan){
return (function (){
return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,thesis.content_script.indicator.ind_chan),"huhu");
});})(d,vectors,dom_node,space,form,draw_chan))
,new cljs.core.Keyword(null,"id","id",-1388402092),"ext-canvas"], null)], null);
});})(d,vectors,dom_node,space,form,draw_chan))
], null));
});
thesis.content_script.indicator.indicator_component = (function thesis$content_script$indicator$indicator_component(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ext-indicator",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"right","right",-452581833),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.indicator.canvas], null)], null);
});
});
thesis.content_script.indicator.init_BANG_ = (function thesis$content_script$indicator$init_BANG_(){
domina.core.append_BANG_.call(null,domina.css.sel.call(null,"body"),[cljs.core.str("<div id=\"ext-indicator-con\" style=\"{:positon &quot;fixed&quot;, :right &quot;0px&quot;, :bottom &quot;0px&quot;, :z-index &quot;1000000091 !important&quot;}\"></div>")].join(''));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.indicator.indicator_component], null),domina.core.by_id.call(null,"ext-indicator-con"));

cljs.core.reset_BANG_.call(null,thesis.content_script.indicator.ind_chan,cljs.core.async.chan.call(null));

return cljs.core.deref.call(null,thesis.content_script.indicator.ind_chan);
});

//# sourceMappingURL=indicator.js.map