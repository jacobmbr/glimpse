// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.core');
goog.require('cljs.core');
goog.require('chromex.ext.runtime');
goog.require('thesis.content_script.draw');
goog.require('chromex.protocols');
goog.require('thesis.content_script.indicator');
goog.require('thesis.content_script.canvas');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('thesis.content_script.handlers');
goog.require('devtools.core');
goog.require('thesis.content_script.gui');
goog.require('thesis.dev');
goog.require('re_frame.core');
thesis.content_script.core.background_chan = cljs.core.atom.call(null,null);
thesis.content_script.core.count_chan = cljs.core.async.chan.call(null);
thesis.content_script.core.counts = cljs.core.atom.call(null,null);
thesis.content_script.core.run_gui_loop_BANG_ = (function thesis$content_script$core$run_gui_loop_BANG_(msg_chan){
var c__8570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8549__auto__ = ((function (c__8570__auto__){
return (function (state_10618){
var state_val_10619 = (state_10618[(1)]);
if((state_val_10619 === (1))){
var state_10618__$1 = state_10618;
var statearr_10620_10635 = state_10618__$1;
(statearr_10620_10635[(2)] = null);

(statearr_10620_10635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10619 === (2))){
var state_10618__$1 = state_10618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10618__$1,(4),msg_chan);
} else {
if((state_val_10619 === (3))){
var inst_10616 = (state_10618[(2)]);
var state_10618__$1 = state_10618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10618__$1,inst_10616);
} else {
if((state_val_10619 === (4))){
var inst_10604 = (state_10618[(7)]);
var inst_10604__$1 = (state_10618[(2)]);
var state_10618__$1 = (function (){var statearr_10621 = state_10618;
(statearr_10621[(7)] = inst_10604__$1);

return statearr_10621;
})();
if(cljs.core.truth_(inst_10604__$1)){
var statearr_10622_10636 = state_10618__$1;
(statearr_10622_10636[(1)] = (5));

} else {
var statearr_10623_10637 = state_10618__$1;
(statearr_10623_10637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10619 === (5))){
var inst_10604 = (state_10618[(7)]);
var inst_10606 = console.log("gui loop",inst_10604);
var inst_10607 = cljs.core.deref.call(null,thesis.content_script.core.background_chan);
var inst_10608 = cljs.core.assoc.call(null,inst_10604,new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"open-tab");
var inst_10609 = cljs.core.clj__GT_js.call(null,inst_10608);
var inst_10610 = chromex.protocols.post_message_BANG_.call(null,inst_10607,inst_10609);
var state_10618__$1 = (function (){var statearr_10624 = state_10618;
(statearr_10624[(8)] = inst_10610);

(statearr_10624[(9)] = inst_10606);

return statearr_10624;
})();
var statearr_10625_10638 = state_10618__$1;
(statearr_10625_10638[(2)] = null);

(statearr_10625_10638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10619 === (6))){
var state_10618__$1 = state_10618;
var statearr_10626_10639 = state_10618__$1;
(statearr_10626_10639[(2)] = null);

(statearr_10626_10639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10619 === (7))){
var inst_10614 = (state_10618[(2)]);
var state_10618__$1 = state_10618;
var statearr_10627_10640 = state_10618__$1;
(statearr_10627_10640[(2)] = inst_10614);

(statearr_10627_10640[(1)] = (3));


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
});})(c__8570__auto__))
;
return ((function (switch__8549__auto__,c__8570__auto__){
return (function() {
var thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto__ = null;
var thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto____0 = (function (){
var statearr_10631 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10631[(0)] = thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto__);

(statearr_10631[(1)] = (1));

return statearr_10631;
});
var thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto____1 = (function (state_10618){
while(true){
var ret_value__8551__auto__ = (function (){try{while(true){
var result__8552__auto__ = switch__8549__auto__.call(null,state_10618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8552__auto__;
}
break;
}
}catch (e10632){if((e10632 instanceof Object)){
var ex__8553__auto__ = e10632;
var statearr_10633_10641 = state_10618;
(statearr_10633_10641[(5)] = ex__8553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10642 = state_10618;
state_10618 = G__10642;
continue;
} else {
return ret_value__8551__auto__;
}
break;
}
});
thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto__ = function(state_10618){
switch(arguments.length){
case 0:
return thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto____0.call(this);
case 1:
return thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto____1.call(this,state_10618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto____0;
thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto____1;
return thesis$content_script$core$run_gui_loop_BANG__$_state_machine__8550__auto__;
})()
;})(switch__8549__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_10634 = f__8571__auto__.call(null);
(statearr_10634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_10634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
thesis.content_script.core.process_message_BANG_ = (function thesis$content_script$core$process_message_BANG_(msg){
var pred__10674 = cljs.core._EQ_;
var expr__10675 = msg.type;
if(cljs.core.truth_(pred__10674.call(null,"init",expr__10675))){
var img = msg.img;
var tabdict = msg.tabdict;
var core_chan = cljs.core.async.chan.call(null);
var c__8570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8570__auto__,img,tabdict,core_chan,pred__10674,expr__10675){
return (function (){
var f__8571__auto__ = (function (){var switch__8549__auto__ = ((function (c__8570__auto__,img,tabdict,core_chan,pred__10674,expr__10675){
return (function (state_10691){
var state_val_10692 = (state_10691[(1)]);
if((state_val_10692 === (1))){
var inst_10677 = cljs.core.deref.call(null,thesis.content_script.core.counts);
var inst_10678 = (inst_10677 == null);
var state_10691__$1 = state_10691;
if(cljs.core.truth_(inst_10678)){
var statearr_10693_10705 = state_10691__$1;
(statearr_10693_10705[(1)] = (2));

} else {
var statearr_10694_10706 = state_10691__$1;
(statearr_10694_10706[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (2))){
var state_10691__$1 = state_10691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10691__$1,(5),thesis.content_script.core.count_chan);
} else {
if((state_val_10692 === (3))){
var state_10691__$1 = state_10691;
var statearr_10695_10707 = state_10691__$1;
(statearr_10695_10707[(2)] = null);

(statearr_10695_10707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (4))){
var inst_10685 = (state_10691[(2)]);
var inst_10686 = msg.url;
var inst_10687 = cljs.core.deref.call(null,thesis.content_script.core.counts);
var inst_10688 = thesis.content_script.gui.init_BANG_.call(null,img,tabdict,inst_10686,inst_10687,core_chan);
var inst_10689 = thesis.content_script.core.run_gui_loop_BANG_.call(null,core_chan);
var state_10691__$1 = (function (){var statearr_10696 = state_10691;
(statearr_10696[(7)] = inst_10688);

(statearr_10696[(8)] = inst_10685);

return statearr_10696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10691__$1,inst_10689);
} else {
if((state_val_10692 === (5))){
var inst_10681 = (state_10691[(2)]);
var inst_10682 = cljs.core.reset_BANG_.call(null,thesis.content_script.core.counts,inst_10681);
var state_10691__$1 = state_10691;
var statearr_10697_10708 = state_10691__$1;
(statearr_10697_10708[(2)] = inst_10682);

(statearr_10697_10708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__8570__auto__,img,tabdict,core_chan,pred__10674,expr__10675))
;
return ((function (switch__8549__auto__,c__8570__auto__,img,tabdict,core_chan,pred__10674,expr__10675){
return (function() {
var thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto__ = null;
var thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto____0 = (function (){
var statearr_10701 = [null,null,null,null,null,null,null,null,null];
(statearr_10701[(0)] = thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto__);

(statearr_10701[(1)] = (1));

return statearr_10701;
});
var thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto____1 = (function (state_10691){
while(true){
var ret_value__8551__auto__ = (function (){try{while(true){
var result__8552__auto__ = switch__8549__auto__.call(null,state_10691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8552__auto__;
}
break;
}
}catch (e10702){if((e10702 instanceof Object)){
var ex__8553__auto__ = e10702;
var statearr_10703_10709 = state_10691;
(statearr_10703_10709[(5)] = ex__8553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10710 = state_10691;
state_10691 = G__10710;
continue;
} else {
return ret_value__8551__auto__;
}
break;
}
});
thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto__ = function(state_10691){
switch(arguments.length){
case 0:
return thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto____0.call(this);
case 1:
return thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto____1.call(this,state_10691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto____0;
thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto____1;
return thesis$content_script$core$process_message_BANG__$_state_machine__8550__auto__;
})()
;})(switch__8549__auto__,c__8570__auto__,img,tabdict,core_chan,pred__10674,expr__10675))
})();
var state__8572__auto__ = (function (){var statearr_10704 = f__8571__auto__.call(null);
(statearr_10704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_10704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8572__auto__);
});})(c__8570__auto__,img,tabdict,core_chan,pred__10674,expr__10675))
);

return c__8570__auto__;
} else {
if(cljs.core.truth_(pred__10674.call(null,"new-request",expr__10675))){
return thesis.content_script.indicator.add_domain.call(null,msg.tabdict);
} else {
if(cljs.core.truth_(pred__10674.call(null,"domains-info",expr__10675))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-domain-info","update-domain-info",-1242520581),msg.res], null));
} else {
if(cljs.core._EQ_.call(null,msg.restype,"distinct-domains")){
return cljs.core.async.put_BANG_.call(null,thesis.content_script.core.count_chan,msg.data);
} else {
console.log(msg);

return null;
}
}
}
}
});
thesis.content_script.core.run_message_loop_BANG_ = (function thesis$content_script$core$run_message_loop_BANG_(message_channel){
console.log("CONTENT SCRIPT: starting message loop...");


var c__8570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8549__auto__ = ((function (c__8570__auto__){
return (function (state_10755){
var state_val_10756 = (state_10755[(1)]);
if((state_val_10756 === (1))){
var state_10755__$1 = state_10755;
var statearr_10757_10773 = state_10755__$1;
(statearr_10757_10773[(2)] = null);

(statearr_10757_10773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (2))){
var state_10755__$1 = state_10755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10755__$1,(4),message_channel);
} else {
if((state_val_10756 === (3))){
var inst_10753 = (state_10755[(2)]);
var state_10755__$1 = state_10755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10755__$1,inst_10753);
} else {
if((state_val_10756 === (4))){
var inst_10744 = (state_10755[(7)]);
var inst_10744__$1 = (state_10755[(2)]);
var state_10755__$1 = (function (){var statearr_10758 = state_10755;
(statearr_10758[(7)] = inst_10744__$1);

return statearr_10758;
})();
if(cljs.core.truth_(inst_10744__$1)){
var statearr_10759_10774 = state_10755__$1;
(statearr_10759_10774[(1)] = (5));

} else {
var statearr_10760_10775 = state_10755__$1;
(statearr_10760_10775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (5))){
var inst_10744 = (state_10755[(7)]);
var inst_10746 = thesis.content_script.core.process_message_BANG_.call(null,inst_10744);
var state_10755__$1 = (function (){var statearr_10761 = state_10755;
(statearr_10761[(8)] = inst_10746);

return statearr_10761;
})();
var statearr_10762_10776 = state_10755__$1;
(statearr_10762_10776[(2)] = null);

(statearr_10762_10776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (6))){
var state_10755__$1 = state_10755;
var statearr_10763_10777 = state_10755__$1;
(statearr_10763_10777[(2)] = null);

(statearr_10763_10777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (7))){
var inst_10750 = (state_10755[(2)]);
var inst_10751 = console.log("CONTENT SCRIPT: leaving message loop");
var state_10755__$1 = (function (){var statearr_10764 = state_10755;
(statearr_10764[(9)] = inst_10751);

(statearr_10764[(10)] = inst_10750);

return statearr_10764;
})();
var statearr_10765_10778 = state_10755__$1;
(statearr_10765_10778[(2)] = null);

(statearr_10765_10778[(1)] = (3));


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
});})(c__8570__auto__))
;
return ((function (switch__8549__auto__,c__8570__auto__){
return (function() {
var thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto__ = null;
var thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto____0 = (function (){
var statearr_10769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10769[(0)] = thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto__);

(statearr_10769[(1)] = (1));

return statearr_10769;
});
var thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto____1 = (function (state_10755){
while(true){
var ret_value__8551__auto__ = (function (){try{while(true){
var result__8552__auto__ = switch__8549__auto__.call(null,state_10755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8552__auto__;
}
break;
}
}catch (e10770){if((e10770 instanceof Object)){
var ex__8553__auto__ = e10770;
var statearr_10771_10779 = state_10755;
(statearr_10771_10779[(5)] = ex__8553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10780 = state_10755;
state_10755 = G__10780;
continue;
} else {
return ret_value__8551__auto__;
}
break;
}
});
thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto__ = function(state_10755){
switch(arguments.length){
case 0:
return thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto____0.call(this);
case 1:
return thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto____1.call(this,state_10755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto____0;
thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto____1;
return thesis$content_script$core$run_message_loop_BANG__$_state_machine__8550__auto__;
})()
;})(switch__8549__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_10772 = f__8571__auto__.call(null);
(statearr_10772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_10772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
thesis.content_script.core.run_indicator_message_loop_BANG_ = (function thesis$content_script$core$run_indicator_message_loop_BANG_(ind_chan){
var c__8570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8549__auto__ = ((function (c__8570__auto__){
return (function (state_10831){
var state_val_10832 = (state_10831[(1)]);
if((state_val_10832 === (1))){
var state_10831__$1 = state_10831;
var statearr_10833_10847 = state_10831__$1;
(statearr_10833_10847[(2)] = null);

(statearr_10833_10847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10832 === (2))){
var state_10831__$1 = state_10831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10831__$1,(4),ind_chan);
} else {
if((state_val_10832 === (3))){
var inst_10829 = (state_10831[(2)]);
var state_10831__$1 = state_10831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10831__$1,inst_10829);
} else {
if((state_val_10832 === (4))){
var inst_10816 = (state_10831[(2)]);
var state_10831__$1 = state_10831;
if(cljs.core.truth_(inst_10816)){
var statearr_10834_10848 = state_10831__$1;
(statearr_10834_10848[(1)] = (5));

} else {
var statearr_10835_10849 = state_10831__$1;
(statearr_10835_10849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10832 === (5))){
var inst_10818 = cljs.core.deref.call(null,thesis.content_script.core.background_chan);
var inst_10819 = [new cljs.core.Keyword(null,"reqtype","reqtype",978083957)];
var inst_10820 = ["ind-clicked!"];
var inst_10821 = cljs.core.PersistentHashMap.fromArrays(inst_10819,inst_10820);
var inst_10822 = cljs.core.clj__GT_js.call(null,inst_10821);
var inst_10823 = chromex.protocols.post_message_BANG_.call(null,inst_10818,inst_10822);
var state_10831__$1 = (function (){var statearr_10836 = state_10831;
(statearr_10836[(7)] = inst_10823);

return statearr_10836;
})();
var statearr_10837_10850 = state_10831__$1;
(statearr_10837_10850[(2)] = null);

(statearr_10837_10850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10832 === (6))){
var state_10831__$1 = state_10831;
var statearr_10838_10851 = state_10831__$1;
(statearr_10838_10851[(2)] = null);

(statearr_10838_10851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10832 === (7))){
var inst_10827 = (state_10831[(2)]);
var state_10831__$1 = state_10831;
var statearr_10839_10852 = state_10831__$1;
(statearr_10839_10852[(2)] = inst_10827);

(statearr_10839_10852[(1)] = (3));


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
});})(c__8570__auto__))
;
return ((function (switch__8549__auto__,c__8570__auto__){
return (function() {
var thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto__ = null;
var thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto____0 = (function (){
var statearr_10843 = [null,null,null,null,null,null,null,null];
(statearr_10843[(0)] = thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto__);

(statearr_10843[(1)] = (1));

return statearr_10843;
});
var thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto____1 = (function (state_10831){
while(true){
var ret_value__8551__auto__ = (function (){try{while(true){
var result__8552__auto__ = switch__8549__auto__.call(null,state_10831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8552__auto__;
}
break;
}
}catch (e10844){if((e10844 instanceof Object)){
var ex__8553__auto__ = e10844;
var statearr_10845_10853 = state_10831;
(statearr_10845_10853[(5)] = ex__8553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10854 = state_10831;
state_10831 = G__10854;
continue;
} else {
return ret_value__8551__auto__;
}
break;
}
});
thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto__ = function(state_10831){
switch(arguments.length){
case 0:
return thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto____0.call(this);
case 1:
return thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto____1.call(this,state_10831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto____0;
thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto____1;
return thesis$content_script$core$run_indicator_message_loop_BANG__$_state_machine__8550__auto__;
})()
;})(switch__8549__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_10846 = f__8571__auto__.call(null);
(statearr_10846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_10846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
thesis.content_script.core.connect_to_background_page_BANG_ = (function thesis$content_script$core$connect_to_background_page_BANG_(){
var background_port = chromex.ext.runtime.connect_STAR_.call(null,chromex.config.get_active_config.call(null),new cljs.core.Keyword(null,"omit","omit",-1917972325),new cljs.core.Keyword(null,"omit","omit",-1917972325));
cljs.core.reset_BANG_.call(null,thesis.content_script.core.background_chan,background_port);

chromex.protocols.post_message_BANG_.call(null,cljs.core.deref.call(null,thesis.content_script.core.background_chan),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"get-counts"], null)));

return thesis.content_script.core.run_message_loop_BANG_.call(null,background_port);
});
thesis.content_script.core.init_BANG_ = (function thesis$content_script$core$init_BANG_(){
console.log("CONTENT SCRIPT: init");


window.addEventListener("DOMContentLoaded",(function (){
return thesis.content_script.core.run_indicator_message_loop_BANG_.call(null,thesis.content_script.indicator.init_BANG_.call(null));
}));

return thesis.content_script.core.connect_to_background_page_BANG_.call(null);
});

//# sourceMappingURL=core.js.map