// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.canvas');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina.core');
goog.require('hiccups.runtime');
goog.require('goog.events.EventType');
goog.require('reagent.core');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('thesis.content_script.draw');
goog.require('domina.events');
goog.require('goog.events');
goog.require('thesis.content_script.image');
goog.require('thesis.content_script.animation');
if(typeof thesis.content_script.canvas.app_db !== 'undefined'){
} else {
thesis.content_script.canvas.app_db = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"normalize-size","normalize-size",-2080190737),new cljs.core.Keyword(null,"center-point","center-point",-1441426383),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"data","data",-232669377)],[(0),null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null),(0),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),(1),"start",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["outbrain.com",(1),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["disqus.com",(1),true], null)], null)], null)]));
}
thesis.content_script.canvas.dim = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null));
thesis.content_script.canvas.data = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
thesis.content_script.canvas.shift = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift","shift",997140064)], null));
thesis.content_script.canvas.offset = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null));
thesis.content_script.canvas.view = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null));
thesis.content_script.canvas.normalize = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalize","normalize",-1904390051)], null));
thesis.content_script.canvas.center_point_x = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-point","center-point",-1441426383),new cljs.core.Keyword(null,"x","x",2099068185)], null));
thesis.content_script.canvas.center_point_y = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-point","center-point",-1441426383),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
thesis.content_script.canvas.space = reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475)], null));
thesis.content_script.canvas.reactions = cljs.core.map_indexed.call(null,(function (p1__15563_SHARP_){
return thesis.content_script.animation.spring.call(null,reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),p1__15563_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)));
}),cljs.core.deref.call(null,thesis.content_script.canvas.data));
thesis.content_script.canvas.shift_spring = thesis.content_script.animation.spring.call(null,thesis.content_script.canvas.shift);
thesis.content_script.canvas.ospring = thesis.content_script.animation.spring.call(null,thesis.content_script.canvas.offset);
thesis.content_script.canvas.center_spring_x = thesis.content_script.animation.spring.call(null,thesis.content_script.canvas.center_point_x);
thesis.content_script.canvas.center_spring_y = thesis.content_script.animation.spring.call(null,thesis.content_script.canvas.center_point_y);
if(typeof thesis.content_script.canvas.resize_chan !== 'undefined'){
} else {
thesis.content_script.canvas.resize_chan = cljs.core.async.chan.call(null);
}
if(typeof thesis.content_script.canvas.scroll_chan !== 'undefined'){
} else {
thesis.content_script.canvas.scroll_chan = cljs.core.async.chan.call(null);
}
thesis.content_script.canvas.tabdict = cljs.core.atom.call(null,null);
thesis.content_script.canvas.state_chan = cljs.core.async.chan.call(null);
thesis.content_script.canvas.img_chan = cljs.core.atom.call(null,null);
thesis.content_script.canvas.img_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),(0),new cljs.core.Keyword(null,"ry","ry",-334598563),(0)], null));
thesis.content_script.canvas.img_spring = thesis.content_script.animation.spring.call(null,thesis.content_script.canvas.img_state);
thesis.content_script.canvas.randomize_data = (function thesis$content_script$canvas$randomize_data(){
return cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.data,cljs.core.reduce.call(null,(function (p1__15574_SHARP_,p2__15575_SHARP_){
return cljs.core.conj.call(null,p1__15574_SHARP_,cljs.core.assoc.call(null,p2__15575_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((40) + (cljs.core.rand.call(null) * (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim)) - (80)))),new cljs.core.Keyword(null,"y","y",-1757859776),((40) + (cljs.core.rand.call(null) * (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim)) - (80))))], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),cljs.core.get_in.call(null,p2__15575_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(1)], null))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,thesis.content_script.canvas.data)));
});
thesis.content_script.canvas.align_right = (function thesis$content_script$canvas$align_right(){
return cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.data,cljs.core.reduce.call(null,(function (p1__15579_SHARP_,p2__15580_SHARP_){
return cljs.core.conj.call(null,p1__15579_SHARP_,cljs.core.assoc.call(null,p2__15580_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.2 * new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim))),new cljs.core.Keyword(null,"y","y",-1757859776),((0.5 + cljs.core.count.call(null,p1__15579_SHARP_)) * (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim)) / cljs.core.count.call(null,cljs.core.deref.call(null,thesis.content_script.canvas.data))))], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(8)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,thesis.content_script.canvas.data)));
});
thesis.content_script.canvas.single_view = (function thesis$content_script$canvas$single_view(){
return cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.data,cljs.core.reduce.call(null,(function (p1__15592_SHARP_,p2__15593_SHARP_){
return cljs.core.conj.call(null,p1__15592_SHARP_,cljs.core.assoc.call(null,p2__15593_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__15592_SHARP_),(1)))?(100):(-200)),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var pred__15608 = cljs.core._EQ_;
var expr__15609 = cljs.core.count.call(null,p1__15592_SHARP_);
if(cljs.core.truth_(pred__15608.call(null,(1),expr__15609))){
return (100);
} else {
return cljs.core.get_in.call(null,p2__15593_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
}
})()], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),((cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__15592_SHARP_),(1)))?(15):(1))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,thesis.content_script.canvas.data)));
});
thesis.content_script.canvas.get_springs = (function thesis$content_script$canvas$get_springs(data){
return cljs.core.reduce.call(null,(function (p1__15611_SHARP_){
return cljs.core.conj.call(null,p1__15611_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.count.call(null,p1__15611_SHARP_),new cljs.core.Keyword(null,"x","x",2099068185),thesis.content_script.animation.spring.call(null,reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.count.call(null,p1__15611_SHARP_),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null))),new cljs.core.Keyword(null,"y","y",-1757859776),thesis.content_script.animation.spring.call(null,reagent.core.cursor.call(null,thesis.content_script.canvas.app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.count.call(null,p1__15611_SHARP_),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null)))], null));
}),cljs.core.PersistentVector.EMPTY,data);
});
thesis.content_script.canvas.springs = thesis.content_script.canvas.get_springs.call(null,cljs.core.deref.call(null,thesis.content_script.canvas.data));
thesis.content_script.canvas.switch_page = (function thesis$content_script$canvas$switch_page(){
var h = (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim)) / (1));
return cljs.core.swap_BANG_.call(null,thesis.content_script.canvas.offset,((function (h){
return (function (p1__15612_SHARP_){
var pred__15616 = cljs.core._EQ_;
var expr__15617 = p1__15612_SHARP_;
if(cljs.core.truth_(pred__15616.call(null,(0),expr__15617))){
return h;
} else {
if(cljs.core.truth_(pred__15616.call(null,h,expr__15617))){
return (0);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15617)].join('')));
}
}
});})(h))
);
});
thesis.content_script.canvas.switch_state = (function thesis$content_script$canvas$switch_state(chan){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_15772){
var state_val_15773 = (state_15772[(1)]);
if((state_val_15773 === (7))){
var inst_15767 = (state_15772[(2)]);
var state_15772__$1 = (function (){var statearr_15775 = state_15772;
(statearr_15775[(7)] = inst_15767);

return statearr_15775;
})();
var statearr_15776_15857 = state_15772__$1;
(statearr_15776_15857[(2)] = null);

(statearr_15776_15857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (1))){
var state_15772__$1 = state_15772;
var statearr_15777_15866 = state_15772__$1;
(statearr_15777_15866[(2)] = null);

(statearr_15777_15866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (4))){
var inst_15732 = (state_15772[(8)]);
var inst_15732__$1 = (state_15772[(2)]);
var inst_15736 = cljs.core._EQ_.call(null,"page",inst_15732__$1);
var state_15772__$1 = (function (){var statearr_15779 = state_15772;
(statearr_15779[(8)] = inst_15732__$1);

return statearr_15779;
})();
if(inst_15736){
var statearr_15780_15877 = state_15772__$1;
(statearr_15780_15877[(1)] = (5));

} else {
var statearr_15781_15883 = state_15772__$1;
(statearr_15781_15883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (15))){
var inst_15732 = (state_15772[(8)]);
var inst_15753 = cljs.core._EQ_.call(null,"single",inst_15732);
var state_15772__$1 = state_15772;
if(inst_15753){
var statearr_15782_15889 = state_15772__$1;
(statearr_15782_15889[(1)] = (17));

} else {
var statearr_15783_15890 = state_15772__$1;
(statearr_15783_15890[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (13))){
var inst_15763 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
var statearr_15784_15891 = state_15772__$1;
(statearr_15784_15891[(2)] = inst_15763);

(statearr_15784_15891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (6))){
var inst_15732 = (state_15772[(8)]);
var inst_15741 = cljs.core._EQ_.call(null,"hu",inst_15732);
var state_15772__$1 = state_15772;
if(inst_15741){
var statearr_15785_16057 = state_15772__$1;
(statearr_15785_16057[(1)] = (8));

} else {
var statearr_15786_16058 = state_15772__$1;
(statearr_15786_16058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (17))){
var inst_15755 = thesis.content_script.canvas.single_view.call(null);
var state_15772__$1 = state_15772;
var statearr_15787_16059 = state_15772__$1;
(statearr_15787_16059[(2)] = inst_15755);

(statearr_15787_16059[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (3))){
var inst_15770 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15772__$1,inst_15770);
} else {
if((state_val_15773 === (12))){
var inst_15732 = (state_15772[(8)]);
var inst_15749 = cljs.core._EQ_.call(null,"align",inst_15732);
var state_15772__$1 = state_15772;
if(inst_15749){
var statearr_15789_16060 = state_15772__$1;
(statearr_15789_16060[(1)] = (14));

} else {
var statearr_15790_16061 = state_15772__$1;
(statearr_15790_16061[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (2))){
var state_15772__$1 = state_15772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15772__$1,(4),chan);
} else {
if((state_val_15773 === (19))){
var inst_15759 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
var statearr_15791_16062 = state_15772__$1;
(statearr_15791_16062[(2)] = inst_15759);

(statearr_15791_16062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (11))){
var inst_15747 = thesis.content_script.canvas.randomize_data.call(null);
var state_15772__$1 = state_15772;
var statearr_15792_16069 = state_15772__$1;
(statearr_15792_16069[(2)] = inst_15747);

(statearr_15792_16069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (9))){
var inst_15732 = (state_15772[(8)]);
var inst_15745 = cljs.core._EQ_.call(null,"randomize",inst_15732);
var state_15772__$1 = state_15772;
if(inst_15745){
var statearr_15793_16072 = state_15772__$1;
(statearr_15793_16072[(1)] = (11));

} else {
var statearr_15794_16073 = state_15772__$1;
(statearr_15794_16073[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (5))){
var inst_15732 = (state_15772[(8)]);
var inst_15738 = (function (){var msg = inst_15732;
var pred__15733 = cljs.core._EQ_;
var expr__15734 = inst_15732;
return ((function (msg,pred__15733,expr__15734,inst_15732,state_val_15773,c__8864__auto__){
return (function (p1__15619_SHARP_){
var pred__15803 = cljs.core._EQ_;
var expr__15804 = p1__15619_SHARP_;
if(cljs.core.truth_(pred__15803.call(null,(0),expr__15804))){
return (1);
} else {
if(cljs.core.truth_(pred__15803.call(null,(1),expr__15804))){
return (-1);
} else {
if(cljs.core.truth_(pred__15803.call(null,(-1),expr__15804))){
return (0);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15804)].join('')));
}
}
}
});
;})(msg,pred__15733,expr__15734,inst_15732,state_val_15773,c__8864__auto__))
})();
var inst_15739 = cljs.core.swap_BANG_.call(null,thesis.content_script.canvas.shift,inst_15738);
var state_15772__$1 = state_15772;
var statearr_15815_16081 = state_15772__$1;
(statearr_15815_16081[(2)] = inst_15739);

(statearr_15815_16081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (14))){
var inst_15751 = thesis.content_script.canvas.align_right.call(null);
var state_15772__$1 = state_15772;
var statearr_15816_16091 = state_15772__$1;
(statearr_15816_16091[(2)] = inst_15751);

(statearr_15816_16091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (16))){
var inst_15761 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
var statearr_15818_16092 = state_15772__$1;
(statearr_15818_16092[(2)] = inst_15761);

(statearr_15818_16092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (10))){
var inst_15765 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
var statearr_15824_16098 = state_15772__$1;
(statearr_15824_16098[(2)] = inst_15765);

(statearr_15824_16098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (18))){
var state_15772__$1 = state_15772;
var statearr_15825_16101 = state_15772__$1;
(statearr_15825_16101[(2)] = null);

(statearr_15825_16101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (8))){
var inst_15743 = thesis.content_script.canvas.switch_page.call(null);
var state_15772__$1 = state_15772;
var statearr_15826_16103 = state_15772__$1;
(statearr_15826_16103[(2)] = inst_15743);

(statearr_15826_16103[(1)] = (10));


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
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$canvas$switch_state_$_state_machine__8706__auto__ = null;
var thesis$content_script$canvas$switch_state_$_state_machine__8706__auto____0 = (function (){
var statearr_15834 = [null,null,null,null,null,null,null,null,null];
(statearr_15834[(0)] = thesis$content_script$canvas$switch_state_$_state_machine__8706__auto__);

(statearr_15834[(1)] = (1));

return statearr_15834;
});
var thesis$content_script$canvas$switch_state_$_state_machine__8706__auto____1 = (function (state_15772){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_15772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e15836){if((e15836 instanceof Object)){
var ex__8709__auto__ = e15836;
var statearr_15838_16104 = state_15772;
(statearr_15838_16104[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16117 = state_15772;
state_15772 = G__16117;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$canvas$switch_state_$_state_machine__8706__auto__ = function(state_15772){
switch(arguments.length){
case 0:
return thesis$content_script$canvas$switch_state_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$canvas$switch_state_$_state_machine__8706__auto____1.call(this,state_15772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$canvas$switch_state_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$canvas$switch_state_$_state_machine__8706__auto____0;
thesis$content_script$canvas$switch_state_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$canvas$switch_state_$_state_machine__8706__auto____1;
return thesis$content_script$canvas$switch_state_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_15840 = f__8865__auto__.call(null);
(statearr_15840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_15840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
});
thesis.content_script.canvas.switch_state.call(null,thesis.content_script.canvas.state_chan);
thesis.content_script.canvas.add_image_listeners = (function thesis$content_script$canvas$add_image_listeners(){
window.addEventListener("wheel",(function (p1__16122_SHARP_){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_16261){
var state_val_16262 = (state_16261[(1)]);
if((state_val_16262 === (1))){
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16261__$1,(2),thesis.content_script.canvas.scroll_chan,p1__16122_SHARP_);
} else {
if((state_val_16262 === (2))){
var inst_16259 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16261__$1,inst_16259);
} else {
return null;
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_16269 = [null,null,null,null,null,null,null];
(statearr_16269[(0)] = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__);

(statearr_16269[(1)] = (1));

return statearr_16269;
});
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_16261){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_16261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16270){if((e16270 instanceof Object)){
var ex__8709__auto__ = e16270;
var statearr_16271_16395 = state_16261;
(statearr_16271_16395[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16396 = state_16261;
state_16261 = G__16396;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = function(state_16261){
switch(arguments.length){
case 0:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_16261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_16272 = f__8865__auto__.call(null);
(statearr_16272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_16272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

window.addEventListener("resize",(function (e){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_16276){
var state_val_16277 = (state_16276[(1)]);
if((state_val_16277 === (1))){
var state_16276__$1 = state_16276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16276__$1,(2),thesis.content_script.canvas.resize_chan,"hu");
} else {
if((state_val_16277 === (2))){
var inst_16274 = (state_16276[(2)]);
var state_16276__$1 = state_16276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16276__$1,inst_16274);
} else {
return null;
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_16289 = [null,null,null,null,null,null,null];
(statearr_16289[(0)] = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__);

(statearr_16289[(1)] = (1));

return statearr_16289;
});
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_16276){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_16276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16290){if((e16290 instanceof Object)){
var ex__8709__auto__ = e16290;
var statearr_16291_16420 = state_16276;
(statearr_16291_16420[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16421 = state_16276;
state_16276 = G__16421;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = function(state_16276){
switch(arguments.length){
case 0:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_16276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_16299 = f__8865__auto__.call(null);
(statearr_16299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_16299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

window.addEventListener("mousedown",(function (){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_16303){
var state_val_16304 = (state_16303[(1)]);
if((state_val_16304 === (1))){
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16303__$1,(2),thesis.content_script.canvas.state_chan,"mouse");
} else {
if((state_val_16304 === (2))){
var inst_16301 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16303__$1,inst_16301);
} else {
return null;
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_16316 = [null,null,null,null,null,null,null];
(statearr_16316[(0)] = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__);

(statearr_16316[(1)] = (1));

return statearr_16316;
});
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_16303){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_16303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16317){if((e16317 instanceof Object)){
var ex__8709__auto__ = e16317;
var statearr_16318_16426 = state_16303;
(statearr_16318_16426[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16427 = state_16303;
state_16303 = G__16427;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = function(state_16303){
switch(arguments.length){
case 0:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_16303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_16319 = f__8865__auto__.call(null);
(statearr_16319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_16319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

window.addEventListener("keydown",(function (p1__16123_SHARP_){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_16348){
var state_val_16349 = (state_16348[(1)]);
if((state_val_16349 === (7))){
var inst_16323 = (state_16348[(7)]);
var inst_16330 = cljs.core._EQ_.call(null,"KeyA",inst_16323);
var state_16348__$1 = state_16348;
if(inst_16330){
var statearr_16350_16428 = state_16348__$1;
(statearr_16350_16428[(1)] = (9));

} else {
var statearr_16351_16429 = state_16348__$1;
(statearr_16351_16429[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (1))){
var inst_16323 = (state_16348[(7)]);
var inst_16323__$1 = p1__16123_SHARP_.code;
var inst_16324 = cljs.core._EQ_.call(null,"KeyJ",inst_16323__$1);
var state_16348__$1 = (function (){var statearr_16352 = state_16348;
(statearr_16352[(7)] = inst_16323__$1);

return statearr_16352;
})();
if(inst_16324){
var statearr_16353_16430 = state_16348__$1;
(statearr_16353_16430[(1)] = (3));

} else {
var statearr_16354_16431 = state_16348__$1;
(statearr_16354_16431[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (4))){
var inst_16323 = (state_16348[(7)]);
var inst_16327 = cljs.core._EQ_.call(null,"KeyS",inst_16323);
var state_16348__$1 = state_16348;
if(inst_16327){
var statearr_16355_16435 = state_16348__$1;
(statearr_16355_16435[(1)] = (6));

} else {
var statearr_16356_16436 = state_16348__$1;
(statearr_16356_16436[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (13))){
var inst_16336 = [cljs.core.str("default")].join('');
var state_16348__$1 = state_16348;
var statearr_16357_16446 = state_16348__$1;
(statearr_16357_16446[(2)] = inst_16336);

(statearr_16357_16446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (6))){
var state_16348__$1 = state_16348;
var statearr_16358_16447 = state_16348__$1;
(statearr_16358_16447[(2)] = "single");

(statearr_16358_16447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (3))){
var state_16348__$1 = state_16348;
var statearr_16359_16459 = state_16348__$1;
(statearr_16359_16459[(2)] = "page");

(statearr_16359_16459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (12))){
var state_16348__$1 = state_16348;
var statearr_16360_16460 = state_16348__$1;
(statearr_16360_16460[(2)] = "randomize");

(statearr_16360_16460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (2))){
var inst_16346 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16348__$1,inst_16346);
} else {
if((state_val_16349 === (11))){
var inst_16340 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16361_16462 = state_16348__$1;
(statearr_16361_16462[(2)] = inst_16340);

(statearr_16361_16462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (9))){
var state_16348__$1 = state_16348;
var statearr_16362_16463 = state_16348__$1;
(statearr_16362_16463[(2)] = "align");

(statearr_16362_16463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (5))){
var inst_16344 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16348__$1,(2),thesis.content_script.canvas.state_chan,inst_16344);
} else {
if((state_val_16349 === (14))){
var inst_16338 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16363_16464 = state_16348__$1;
(statearr_16363_16464[(2)] = inst_16338);

(statearr_16363_16464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (10))){
var inst_16323 = (state_16348[(7)]);
var inst_16333 = cljs.core._EQ_.call(null,"KeyR",inst_16323);
var state_16348__$1 = state_16348;
if(inst_16333){
var statearr_16364_16465 = state_16348__$1;
(statearr_16364_16465[(1)] = (12));

} else {
var statearr_16365_16466 = state_16348__$1;
(statearr_16365_16466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (8))){
var inst_16342 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16366_16467 = state_16348__$1;
(statearr_16366_16467[(2)] = inst_16342);

(statearr_16366_16467[(1)] = (5));


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
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_16370 = [null,null,null,null,null,null,null,null];
(statearr_16370[(0)] = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__);

(statearr_16370[(1)] = (1));

return statearr_16370;
});
var thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_16348){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_16348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16371){if((e16371 instanceof Object)){
var ex__8709__auto__ = e16371;
var statearr_16372_16470 = state_16348;
(statearr_16372_16470[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16473 = state_16348;
state_16348 = G__16473;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__ = function(state_16348){
switch(arguments.length){
case 0:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_16348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$canvas$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_16373 = f__8865__auto__.call(null);
(statearr_16373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_16373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

domina.events.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),(function (e){
return null;
}));

return domina.events.listen_BANG_.call(null,domina.core.by_class.call(null,"ext-image"),new cljs.core.Keyword(null,"webkitAnimationEnd","webkitAnimationEnd",1142194642),(function (evt){
return cljs.core.println.call(null,[cljs.core.str("ende"),cljs.core.str(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(evt))].join(''));
}));
});
thesis.content_script.canvas.get_initial_coordinates = (function thesis$content_script$canvas$get_initial_coordinates(datac){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim));
var h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim));
var data = cljs.core.deref.call(null,datac);
return cljs.core.map_indexed.call(null,((function (w,h,data){
return (function (p1__16504_SHARP_,p2__16503_SHARP_){
return cljs.core.update_in.call(null,p2__16503_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,((0.5 + p1__16504_SHARP_) * (h / cljs.core.count.call(null,data))));
});})(w,h,data))
,data);
});
thesis.content_script.canvas.watch_resize_BANG_ = (function thesis$content_script$canvas$watch_resize_BANG_(){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_16556){
var state_val_16557 = (state_16556[(1)]);
if((state_val_16557 === (1))){
var state_16556__$1 = state_16556;
var statearr_16558_16568 = state_16556__$1;
(statearr_16558_16568[(2)] = null);

(statearr_16558_16568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16557 === (2))){
var state_16556__$1 = state_16556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16556__$1,(4),thesis.content_script.canvas.resize_chan);
} else {
if((state_val_16557 === (3))){
var inst_16554 = (state_16556[(2)]);
var state_16556__$1 = state_16556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16556__$1,inst_16554);
} else {
if((state_val_16557 === (4))){
var inst_16549 = (state_16556[(2)]);
var inst_16550 = (function (){return ((function (inst_16549,state_val_16557,c__8864__auto__){
return (function (p1__16511_SHARP_){
return cljs.core.assoc.call(null,p1__16511_SHARP_,new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight);
});
;})(inst_16549,state_val_16557,c__8864__auto__))
})();
var inst_16551 = cljs.core.swap_BANG_.call(null,thesis.content_script.canvas.dim,inst_16550);
var state_16556__$1 = (function (){var statearr_16559 = state_16556;
(statearr_16559[(7)] = inst_16549);

(statearr_16559[(8)] = inst_16551);

return statearr_16559;
})();
var statearr_16560_16571 = state_16556__$1;
(statearr_16560_16571[(2)] = null);

(statearr_16560_16571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto__ = null;
var thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto____0 = (function (){
var statearr_16564 = [null,null,null,null,null,null,null,null,null];
(statearr_16564[(0)] = thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto__);

(statearr_16564[(1)] = (1));

return statearr_16564;
});
var thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto____1 = (function (state_16556){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_16556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16565){if((e16565 instanceof Object)){
var ex__8709__auto__ = e16565;
var statearr_16566_16579 = state_16556;
(statearr_16566_16579[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16581 = state_16556;
state_16556 = G__16581;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto__ = function(state_16556){
switch(arguments.length){
case 0:
return thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto____1.call(this,state_16556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto____0;
thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto____1;
return thesis$content_script$canvas$watch_resize_BANG__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_16567 = f__8865__auto__.call(null);
(statearr_16567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_16567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
});
thesis.content_script.canvas.watch_scroll_BANG_ = (function thesis$content_script$canvas$watch_scroll_BANG_(){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_16617){
var state_val_16618 = (state_16617[(1)]);
if((state_val_16618 === (1))){
var state_16617__$1 = state_16617;
var statearr_16619_16636 = state_16617__$1;
(statearr_16619_16636[(2)] = null);

(statearr_16619_16636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (2))){
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16617__$1,(4),thesis.content_script.canvas.scroll_chan);
} else {
if((state_val_16618 === (3))){
var inst_16615 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16617__$1,inst_16615);
} else {
if((state_val_16618 === (4))){
var inst_16608 = (state_16617[(2)]);
var inst_16609 = inst_16608.deltaY;
var inst_16610 = cljs.core.println.call(null,inst_16609);
var inst_16611 = (function (){var dy = inst_16609;
return ((function (dy,inst_16608,inst_16609,inst_16610,state_val_16618,c__8864__auto__){
return (function (){
return (cljs.core.deref.call(null,thesis.content_script.canvas.offset) + dy);
});
;})(dy,inst_16608,inst_16609,inst_16610,state_val_16618,c__8864__auto__))
})();
var inst_16612 = cljs.core.swap_BANG_.call(null,thesis.content_script.canvas.offset,inst_16611);
var state_16617__$1 = (function (){var statearr_16620 = state_16617;
(statearr_16620[(7)] = inst_16610);

(statearr_16620[(8)] = inst_16612);

return statearr_16620;
})();
var statearr_16621_16637 = state_16617__$1;
(statearr_16621_16637[(2)] = null);

(statearr_16621_16637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto__ = null;
var thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto____0 = (function (){
var statearr_16625 = [null,null,null,null,null,null,null,null,null];
(statearr_16625[(0)] = thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto__);

(statearr_16625[(1)] = (1));

return statearr_16625;
});
var thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto____1 = (function (state_16617){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_16617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16626){if((e16626 instanceof Object)){
var ex__8709__auto__ = e16626;
var statearr_16627_16674 = state_16617;
(statearr_16627_16674[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16689 = state_16617;
state_16617 = G__16689;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto__ = function(state_16617){
switch(arguments.length){
case 0:
return thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto____1.call(this,state_16617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto____0;
thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto____1;
return thesis$content_script$canvas$watch_scroll_BANG__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_16628 = f__8865__auto__.call(null);
(statearr_16628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_16628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
});
thesis.content_script.canvas.setup = (function thesis$content_script$canvas$setup(){
cljs.core.swap_BANG_.call(null,thesis.content_script.canvas.dim,(function (p1__16690_SHARP_){
return cljs.core.assoc.call(null,p1__16690_SHARP_,new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight);
}));

thesis.content_script.canvas.get_initial_coordinates.call(null,thesis.content_script.canvas.data);

thesis.content_script.canvas.randomize_data.call(null);

thesis.content_script.canvas.watch_scroll_BANG_.call(null);

thesis.content_script.canvas.watch_resize_BANG_.call(null);

cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.center_point_x,(0));

cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.center_point_y,(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim)) / (2)));

return domina.core.append_BANG_.call(null,domina.css.sel.call(null,"body"),[cljs.core.str(((cljs.core.not.call(null,domina.core.by_id.call(null,"ext-canvas-container")))?[cljs.core.str("<div id=\"ext-canvas-container\"></div>")].join(''):null))].join(''));
});
thesis.content_script.canvas.sc_overview = (function thesis$content_script$canvas$sc_overview(form,data){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16705_SHARP_){
return thesis.content_script.draw.draw_text.call(null,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,data,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"y","y",-1757859776))], null),cljs.core.get_in.call(null,p1__16705_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0)], null)),(25));
}),data));
});
thesis.content_script.canvas.sc_tabdict = (function thesis$content_script$canvas$sc_tabdict(form,center){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (p1__16708_SHARP_,p2__16709_SHARP_){
return thesis.content_script.draw.draw_text.call(null,form,(new Vector((20),((20) + ((70) * p1__16708_SHARP_)))),p2__16709_SHARP_,(15));
}),cljs.core.deref.call(null,thesis.content_script.canvas.tabdict)));
});
thesis.content_script.canvas.sc_satellites = (function thesis$content_script$canvas$sc_satellites(form,center,data,osf){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16712_SHARP_){
return thesis.content_script.draw.draw_entity.call(null,form,center,p1__16712_SHARP_,osf);
}),data));
});
thesis.content_script.canvas.sc_clusters = (function thesis$content_script$canvas$sc_clusters(form,center,data){
return cljs.core.reduce.call(null,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.PersistentVector.EMPTY,data);
});
thesis.content_script.canvas.get_visible_elements = (function thesis$content_script$canvas$get_visible_elements(data){
return cljs.core.filter.call(null,(function (p1__16714_SHARP_){
var and__6196__auto__ = (cljs.core.get_in.call(null,p1__16714_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)) < new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim)));
if(and__6196__auto__){
var and__6196__auto____$1 = (cljs.core.get_in.call(null,p1__16714_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"h","h",1109658740)], null)) < new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim)));
if(and__6196__auto____$1){
return data;
} else {
return and__6196__auto____$1;
}
} else {
return and__6196__auto__;
}
}));
});
thesis.content_script.canvas.get_elements = (function thesis$content_script$canvas$get_elements(spr){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16743_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref.call(null,cljs.core.get.call(null,p1__16743_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.deref.call(null,cljs.core.get.call(null,p1__16743_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get_in.call(null,cljs.core.deref.call(null,thesis.content_script.canvas.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,p1__16743_SHARP_,new cljs.core.Keyword(null,"no","no",-390373634)),new cljs.core.Keyword(null,"data","data",-232669377)], null)),new cljs.core.Keyword(null,"display-size","display-size",1805257182),cljs.core.get_in.call(null,cljs.core.deref.call(null,thesis.content_script.canvas.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,p1__16743_SHARP_,new cljs.core.Keyword(null,"no","no",-390373634)),new cljs.core.Keyword(null,"display-size","display-size",1805257182)], null)));
}),spr));
});
thesis.content_script.canvas.offspringify = (function thesis$content_script$canvas$offspringify(data){
return cljs.core.map.call(null,(function (p1__16749_SHARP_){
return cljs.core.assoc_in.call(null,p1__16749_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.deref.call(null,thesis.content_script.canvas.ospring) + cljs.core.get_in.call(null,p1__16749_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null))));
}),data);
});
thesis.content_script.canvas.draw = (function thesis$content_script$canvas$draw(var_args){
var args16751 = [];
var len__7278__auto___16758 = arguments.length;
var i__7279__auto___16760 = (0);
while(true){
if((i__7279__auto___16760 < len__7278__auto___16758)){
args16751.push((arguments[i__7279__auto___16760]));

var G__16762 = (i__7279__auto___16760 + (1));
i__7279__auto___16760 = G__16762;
continue;
} else {
}
break;
}

var G__16753 = args16751.length;
switch (G__16753) {
case 6:
return thesis.content_script.canvas.draw.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 2:
return thesis.content_script.canvas.draw.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16751.length)].join('')));

}
});

thesis.content_script.canvas.draw.cljs$core$IFn$_invoke$arity$6 = (function (time,form,w,h,center,data){
var os = cljs.core.deref.call(null,thesis.content_script.canvas.ospring);
var osf = cljs.core.deref.call(null,thesis.content_script.canvas.offset);
var space = cljs.core.deref.call(null,thesis.content_script.canvas.space);
space.ctx.clearRect((0),(0),w,h);

var pred__16754_16765 = cljs.core._EQ_;
var expr__16755_16766 = cljs.core.deref.call(null,thesis.content_script.canvas.view);
if(cljs.core.truth_(pred__16754_16765.call(null,"start",expr__16755_16766))){
thesis.content_script.canvas.sc_satellites.call(null,form,center,data,osf);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16755_16766)].join('')));
}

return window.requestAnimationFrame(((function (os,osf,space){
return (function (p1__16750_SHARP_){
thesis.content_script.canvas.draw.call(null,p1__16750_SHARP_,form);

return thesis.content_script.image.draw_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),((0) - (time / (100))),new cljs.core.Keyword(null,"rx","rx",1627208482),(0),new cljs.core.Keyword(null,"ry","ry",-334598563),((0) + (time / (100000))),new cljs.core.Keyword(null,"rz","rz",386461181),(0),new cljs.core.Keyword(null,"display","display",242065432),false], null));
});})(os,osf,space))
);
});

thesis.content_script.canvas.draw.cljs$core$IFn$_invoke$arity$2 = (function (time,form){
var h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim));
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.canvas.dim));
return thesis.content_script.canvas.draw.call(null,time,form,w,h,(new Vector(cljs.core.deref.call(null,thesis.content_script.canvas.center_spring_x),cljs.core.deref.call(null,thesis.content_script.canvas.center_spring_y))).add((1),cljs.core.deref.call(null,thesis.content_script.canvas.offset)),thesis.content_script.canvas.get_elements.call(null,thesis.content_script.canvas.springs));
});

thesis.content_script.canvas.draw.cljs$lang$maxFixedArity = 6;
thesis.content_script.canvas.init_BANG_ = (function thesis$content_script$canvas$init_BANG_(img,tab_dict){
var div = domina.core.by_id.call(null,"ext-canvas-container");
var ichan = thesis.content_script.image.init_BANG_.call(null,img);
cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.tabdict,tab_dict);

cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.img_chan,ichan);

if((div == null)){
cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.data,cljs.core.doall.call(null,cljs.core.map.call(null,((function (div,ichan){
return (function (p1__16778_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"display-size","display-size",1805257182),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((1) + cljs.core.rand.call(null,(20))),new cljs.core.Keyword(null,"y","y",-1757859776),((1) + cljs.core.rand.call(null,(50)))], null),((5) + cljs.core.rand.call(null,(15))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16778_SHARP_,(4),false], null)]);
});})(div,ichan))
,cljs.core.vec.call(null,tab_dict))));

thesis.content_script.canvas.setup.call(null);

new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yldbt.com",(3),false], null)], null);

cljs.core.reset_BANG_.call(null,thesis.content_script.canvas.space,(new CanvasSpace()).display("#ext-canvas-container").refresh(true));

return thesis.content_script.canvas.draw.call(null,(0),(new Form(cljs.core.deref.call(null,thesis.content_script.canvas.space))));
} else {
domina.core.destroy_BANG_.call(null,div);

return domina.core.destroy_BANG_.call(null,domina.core.by_id.call(null,"ext-image"));
}
});

//# sourceMappingURL=canvas.js.map