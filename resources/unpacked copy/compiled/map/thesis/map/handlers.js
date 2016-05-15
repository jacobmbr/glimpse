// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.map.handlers');
goog.require('cljs.core');
goog.require('chromex.ext.runtime');
goog.require('goog.Uri');
goog.require('chromex.protocols');
goog.require('reagent.core');
goog.require('chromex.support');
goog.require('chromex.logging');
goog.require('clojure.string');
goog.require('thesis.background.storage');
goog.require('chromex.ext.storage');
goog.require('re_frame.core');
thesis.map.handlers.call_chan = cljs.core.atom.call(null,null);
thesis.map.handlers.post_BANG_ = (function thesis$map$handlers$post_BANG_(db,msg){
return chromex.protocols.post_message_BANG_.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"port","port",1534937262)),cljs.core.clj__GT_js.call(null,msg));
});
thesis.map.handlers.listen_BANG_ = (function thesis$map$handlers$listen_BANG_(res_chan){
var c__20758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20758__auto__){
return (function (){
var f__20759__auto__ = (function (){var switch__20737__auto__ = ((function (c__20758__auto__){
return (function (state_27748){
var state_val_27749 = (state_27748[(1)]);
if((state_val_27749 === (7))){
var inst_27744 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27750_27809 = state_27748__$1;
(statearr_27750_27809[(2)] = inst_27744);

(statearr_27750_27809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (20))){
var inst_27624 = (state_27748[(7)]);
var inst_27666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27667 = inst_27624.data;
var inst_27668 = cljs.core.js__GT_clj.call(null,inst_27667);
var inst_27669 = [new cljs.core.Keyword(null,"handle-location-counts","handle-location-counts",71674505),inst_27668];
var inst_27670 = (new cljs.core.PersistentVector(null,2,(5),inst_27666,inst_27669,null));
var inst_27671 = re_frame.core.dispatch.call(null,inst_27670);
var state_27748__$1 = state_27748;
var statearr_27751_27810 = state_27748__$1;
(statearr_27751_27810[(2)] = inst_27671);

(statearr_27751_27810[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (27))){
var inst_27676 = (state_27748[(8)]);
var inst_27688 = cljs.core._EQ_.call(null,"domain",inst_27676);
var state_27748__$1 = state_27748;
if(inst_27688){
var statearr_27752_27811 = state_27748__$1;
(statearr_27752_27811[(1)] = (29));

} else {
var statearr_27753_27812 = state_27748__$1;
(statearr_27753_27812[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (1))){
var state_27748__$1 = state_27748;
var statearr_27754_27813 = state_27748__$1;
(statearr_27754_27813[(2)] = null);

(statearr_27754_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (24))){
var inst_27630 = (state_27748[(9)]);
var inst_27704 = cljs.core._EQ_.call(null,"all-for-site",inst_27630);
var state_27748__$1 = state_27748;
if(inst_27704){
var statearr_27755_27814 = state_27748__$1;
(statearr_27755_27814[(1)] = (32));

} else {
var statearr_27756_27815 = state_27748__$1;
(statearr_27756_27815[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (4))){
var inst_27624 = (state_27748[(7)]);
var inst_27624__$1 = (state_27748[(2)]);
var state_27748__$1 = (function (){var statearr_27757 = state_27748;
(statearr_27757[(7)] = inst_27624__$1);

return statearr_27757;
})();
if(cljs.core.truth_(inst_27624__$1)){
var statearr_27758_27816 = state_27748__$1;
(statearr_27758_27816[(1)] = (5));

} else {
var statearr_27759_27817 = state_27748__$1;
(statearr_27759_27817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (15))){
var inst_27630 = (state_27748[(9)]);
var inst_27655 = cljs.core._EQ_.call(null,"distinct-locations",inst_27630);
var state_27748__$1 = state_27748;
if(inst_27655){
var statearr_27760_27818 = state_27748__$1;
(statearr_27760_27818[(1)] = (17));

} else {
var statearr_27761_27819 = state_27748__$1;
(statearr_27761_27819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (21))){
var inst_27630 = (state_27748[(9)]);
var inst_27673 = cljs.core._EQ_.call(null,"all-for-domain",inst_27630);
var state_27748__$1 = state_27748;
if(inst_27673){
var statearr_27762_27820 = state_27748__$1;
(statearr_27762_27820[(1)] = (23));

} else {
var statearr_27763_27821 = state_27748__$1;
(statearr_27763_27821[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (31))){
var inst_27700 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27764_27822 = state_27748__$1;
(statearr_27764_27822[(2)] = inst_27700);

(statearr_27764_27822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (32))){
var inst_27624 = (state_27748[(7)]);
var inst_27706 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27707 = inst_27624.data;
var inst_27708 = cljs.core.js__GT_clj.call(null,inst_27707);
var inst_27709 = [new cljs.core.Keyword(null,"handle-site-info","handle-site-info",-349037354),inst_27708];
var inst_27710 = (new cljs.core.PersistentVector(null,2,(5),inst_27706,inst_27709,null));
var inst_27711 = re_frame.core.dispatch.call(null,inst_27710);
var state_27748__$1 = state_27748;
var statearr_27765_27823 = state_27748__$1;
(statearr_27765_27823[(2)] = inst_27711);

(statearr_27765_27823[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (33))){
var inst_27630 = (state_27748[(9)]);
var inst_27713 = cljs.core._EQ_.call(null,"all-for-tabUrlIndex",inst_27630);
var state_27748__$1 = state_27748;
if(inst_27713){
var statearr_27766_27824 = state_27748__$1;
(statearr_27766_27824[(1)] = (35));

} else {
var statearr_27767_27825 = state_27748__$1;
(statearr_27767_27825[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (13))){
var inst_27644 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27768_27826 = state_27748__$1;
(statearr_27768_27826[(2)] = inst_27644);

(statearr_27768_27826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (22))){
var inst_27734 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27769_27827 = state_27748__$1;
(statearr_27769_27827[(2)] = inst_27734);

(statearr_27769_27827[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (36))){
var inst_27624 = (state_27748[(7)]);
var inst_27726 = console.log("unhandled: ",inst_27624);
var state_27748__$1 = (function (){var statearr_27770 = state_27748;
(statearr_27770[(10)] = inst_27726);

return statearr_27770;
})();
var statearr_27771_27828 = state_27748__$1;
(statearr_27771_27828[(2)] = null);

(statearr_27771_27828[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (29))){
var inst_27677 = (state_27748[(11)]);
var inst_27675 = (state_27748[(12)]);
var inst_27690 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27691 = goog.object.get(inst_27675,"domain");
var inst_27692 = [new cljs.core.Keyword(null,"handle-domain-info","handle-domain-info",-1180744402),inst_27677,inst_27691];
var inst_27693 = (new cljs.core.PersistentVector(null,3,(5),inst_27690,inst_27692,null));
var inst_27694 = re_frame.core.dispatch.call(null,inst_27693);
var state_27748__$1 = state_27748;
var statearr_27772_27829 = state_27748__$1;
(statearr_27772_27829[(2)] = inst_27694);

(statearr_27772_27829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (6))){
var state_27748__$1 = state_27748;
var statearr_27773_27830 = state_27748__$1;
(statearr_27773_27830[(2)] = null);

(statearr_27773_27830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (28))){
var inst_27702 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27774_27831 = state_27748__$1;
(statearr_27774_27831[(2)] = inst_27702);

(statearr_27774_27831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (25))){
var inst_27732 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27775_27832 = state_27748__$1;
(statearr_27775_27832[(2)] = inst_27732);

(statearr_27775_27832[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (34))){
var inst_27730 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27776_27833 = state_27748__$1;
(statearr_27776_27833[(2)] = inst_27730);

(statearr_27776_27833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (17))){
var inst_27624 = (state_27748[(7)]);
var inst_27657 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27658 = inst_27624.data;
var inst_27659 = cljs.core.js__GT_clj.call(null,inst_27658);
var inst_27660 = [new cljs.core.Keyword(null,"handle-locations","handle-locations",-823858190),inst_27659];
var inst_27661 = (new cljs.core.PersistentVector(null,2,(5),inst_27657,inst_27660,null));
var inst_27662 = re_frame.core.dispatch.call(null,inst_27661);
var state_27748__$1 = state_27748;
var statearr_27777_27834 = state_27748__$1;
(statearr_27777_27834[(2)] = inst_27662);

(statearr_27777_27834[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (3))){
var inst_27746 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27748__$1,inst_27746);
} else {
if((state_val_27749 === (12))){
var state_27748__$1 = state_27748;
var statearr_27778_27835 = state_27748__$1;
(statearr_27778_27835[(2)] = null);

(statearr_27778_27835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (2))){
var state_27748__$1 = state_27748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27748__$1,(4),res_chan);
} else {
if((state_val_27749 === (23))){
var inst_27624 = (state_27748[(7)]);
var inst_27676 = (state_27748[(8)]);
var inst_27675 = (state_27748[(12)]);
var inst_27675__$1 = cljs.core.js__GT_clj.call(null,inst_27624);
var inst_27676__$1 = cljs.core.get.call(null,inst_27675__$1,"typ");
var inst_27677 = cljs.core.get.call(null,inst_27675__$1,"data");
var inst_27681 = cljs.core._EQ_.call(null,"site",inst_27676__$1);
var state_27748__$1 = (function (){var statearr_27779 = state_27748;
(statearr_27779[(11)] = inst_27677);

(statearr_27779[(8)] = inst_27676__$1);

(statearr_27779[(12)] = inst_27675__$1);

return statearr_27779;
})();
if(inst_27681){
var statearr_27780_27836 = state_27748__$1;
(statearr_27780_27836[(1)] = (26));

} else {
var statearr_27781_27837 = state_27748__$1;
(statearr_27781_27837[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (35))){
var inst_27624 = (state_27748[(7)]);
var inst_27715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27716 = [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"domain","domain",1847214937)];
var inst_27717 = inst_27624.data;
var inst_27718 = cljs.core.js__GT_clj.call(null,inst_27717);
var inst_27719 = inst_27624.value;
var inst_27720 = [inst_27718,inst_27719];
var inst_27721 = cljs.core.PersistentHashMap.fromArrays(inst_27716,inst_27720);
var inst_27722 = [new cljs.core.Keyword(null,"handle-site-info","handle-site-info",-349037354),inst_27721];
var inst_27723 = (new cljs.core.PersistentVector(null,2,(5),inst_27715,inst_27722,null));
var inst_27724 = re_frame.core.dispatch.call(null,inst_27723);
var state_27748__$1 = state_27748;
var statearr_27782_27838 = state_27748__$1;
(statearr_27782_27838[(2)] = inst_27724);

(statearr_27782_27838[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (19))){
var inst_27736 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27783_27839 = state_27748__$1;
(statearr_27783_27839[(2)] = inst_27736);

(statearr_27783_27839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (11))){
var inst_27633 = (state_27748[(13)]);
var inst_27634 = (state_27748[(14)]);
var inst_27638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27639 = [new cljs.core.Keyword(null,"init-box","init-box",-2056174245),inst_27634,inst_27633];
var inst_27640 = (new cljs.core.PersistentVector(null,3,(5),inst_27638,inst_27639,null));
var inst_27641 = re_frame.core.dispatch.call(null,inst_27640);
var state_27748__$1 = state_27748;
var statearr_27784_27840 = state_27748__$1;
(statearr_27784_27840[(2)] = inst_27641);

(statearr_27784_27840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (9))){
var inst_27630 = (state_27748[(9)]);
var inst_27646 = cljs.core._EQ_.call(null,"distinct-domains",inst_27630);
var state_27748__$1 = state_27748;
if(inst_27646){
var statearr_27785_27841 = state_27748__$1;
(statearr_27785_27841[(1)] = (14));

} else {
var statearr_27786_27842 = state_27748__$1;
(statearr_27786_27842[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (5))){
var inst_27624 = (state_27748[(7)]);
var inst_27630 = (state_27748[(9)]);
var inst_27626 = console.log("BG msg: ",inst_27624);
var inst_27630__$1 = inst_27624.restype;
var inst_27631 = cljs.core._EQ_.call(null,"ACK",inst_27630__$1);
var state_27748__$1 = (function (){var statearr_27787 = state_27748;
(statearr_27787[(9)] = inst_27630__$1);

(statearr_27787[(15)] = inst_27626);

return statearr_27787;
})();
if(inst_27631){
var statearr_27788_27843 = state_27748__$1;
(statearr_27788_27843[(1)] = (8));

} else {
var statearr_27789_27844 = state_27748__$1;
(statearr_27789_27844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (14))){
var inst_27624 = (state_27748[(7)]);
var inst_27648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27649 = inst_27624.data;
var inst_27650 = cljs.core.js__GT_clj.call(null,inst_27649);
var inst_27651 = [new cljs.core.Keyword(null,"handle-counts","handle-counts",2013967158),inst_27650];
var inst_27652 = (new cljs.core.PersistentVector(null,2,(5),inst_27648,inst_27651,null));
var inst_27653 = re_frame.core.dispatch.call(null,inst_27652);
var state_27748__$1 = state_27748;
var statearr_27790_27845 = state_27748__$1;
(statearr_27790_27845[(2)] = inst_27653);

(statearr_27790_27845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (26))){
var inst_27677 = (state_27748[(11)]);
var inst_27676 = (state_27748[(8)]);
var inst_27683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27684 = [new cljs.core.Keyword(null,"handle-site-info","handle-site-info",-349037354),inst_27677,inst_27676];
var inst_27685 = (new cljs.core.PersistentVector(null,3,(5),inst_27683,inst_27684,null));
var inst_27686 = re_frame.core.dispatch.call(null,inst_27685);
var state_27748__$1 = state_27748;
var statearr_27791_27846 = state_27748__$1;
(statearr_27791_27846[(2)] = inst_27686);

(statearr_27791_27846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (16))){
var inst_27738 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27792_27847 = state_27748__$1;
(statearr_27792_27847[(2)] = inst_27738);

(statearr_27792_27847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (30))){
var inst_27676 = (state_27748[(8)]);
var inst_27696 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_27676)].join('');
var inst_27697 = (new Error(inst_27696));
var inst_27698 = (function(){throw inst_27697})();
var state_27748__$1 = state_27748;
var statearr_27793_27848 = state_27748__$1;
(statearr_27793_27848[(2)] = inst_27698);

(statearr_27793_27848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (10))){
var inst_27740 = (state_27748[(2)]);
var state_27748__$1 = (function (){var statearr_27794 = state_27748;
(statearr_27794[(16)] = inst_27740);

return statearr_27794;
})();
var statearr_27795_27849 = state_27748__$1;
(statearr_27795_27849[(2)] = null);

(statearr_27795_27849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (18))){
var inst_27630 = (state_27748[(9)]);
var inst_27664 = cljs.core._EQ_.call(null,"location-counts",inst_27630);
var state_27748__$1 = state_27748;
if(inst_27664){
var statearr_27796_27850 = state_27748__$1;
(statearr_27796_27850[(1)] = (20));

} else {
var statearr_27797_27851 = state_27748__$1;
(statearr_27797_27851[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (37))){
var inst_27728 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27798_27852 = state_27748__$1;
(statearr_27798_27852[(2)] = inst_27728);

(statearr_27798_27852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (8))){
var inst_27633 = (state_27748[(13)]);
var inst_27624 = (state_27748[(7)]);
var inst_27633__$1 = goog.object.get(inst_27624,"init-url");
var inst_27634 = goog.object.get(inst_27624,"typ");
var inst_27635 = (inst_27633__$1 == null);
var inst_27636 = cljs.core.not.call(null,inst_27635);
var state_27748__$1 = (function (){var statearr_27799 = state_27748;
(statearr_27799[(13)] = inst_27633__$1);

(statearr_27799[(14)] = inst_27634);

return statearr_27799;
})();
if(inst_27636){
var statearr_27800_27853 = state_27748__$1;
(statearr_27800_27853[(1)] = (11));

} else {
var statearr_27801_27854 = state_27748__$1;
(statearr_27801_27854[(1)] = (12));

}

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
});})(c__20758__auto__))
;
return ((function (switch__20737__auto__,c__20758__auto__){
return (function() {
var thesis$map$handlers$listen_BANG__$_state_machine__20738__auto__ = null;
var thesis$map$handlers$listen_BANG__$_state_machine__20738__auto____0 = (function (){
var statearr_27805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27805[(0)] = thesis$map$handlers$listen_BANG__$_state_machine__20738__auto__);

(statearr_27805[(1)] = (1));

return statearr_27805;
});
var thesis$map$handlers$listen_BANG__$_state_machine__20738__auto____1 = (function (state_27748){
while(true){
var ret_value__20739__auto__ = (function (){try{while(true){
var result__20740__auto__ = switch__20737__auto__.call(null,state_27748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20740__auto__;
}
break;
}
}catch (e27806){if((e27806 instanceof Object)){
var ex__20741__auto__ = e27806;
var statearr_27807_27855 = state_27748;
(statearr_27807_27855[(5)] = ex__20741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27856 = state_27748;
state_27748 = G__27856;
continue;
} else {
return ret_value__20739__auto__;
}
break;
}
});
thesis$map$handlers$listen_BANG__$_state_machine__20738__auto__ = function(state_27748){
switch(arguments.length){
case 0:
return thesis$map$handlers$listen_BANG__$_state_machine__20738__auto____0.call(this);
case 1:
return thesis$map$handlers$listen_BANG__$_state_machine__20738__auto____1.call(this,state_27748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$map$handlers$listen_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$map$handlers$listen_BANG__$_state_machine__20738__auto____0;
thesis$map$handlers$listen_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$map$handlers$listen_BANG__$_state_machine__20738__auto____1;
return thesis$map$handlers$listen_BANG__$_state_machine__20738__auto__;
})()
;})(switch__20737__auto__,c__20758__auto__))
})();
var state__20760__auto__ = (function (){var statearr_27808 = f__20759__auto__.call(null);
(statearr_27808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20758__auto__);

return statearr_27808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20760__auto__);
});})(c__20758__auto__))
);

return c__20758__auto__;
});
thesis.map.handlers.connect_to_background_page_BANG_ = (function thesis$map$handlers$connect_to_background_page_BANG_(){
var background_port = chromex.ext.runtime.connect_STAR_.call(null,chromex.config.get_active_config.call(null),new cljs.core.Keyword(null,"omit","omit",-1917972325),new cljs.core.Keyword(null,"omit","omit",-1917972325));
thesis.map.handlers.listen_BANG_.call(null,background_port);

return background_port;
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-history","get-history",-1950009985),(function (db,_){
chrome.history.search({"text": "", "startTime": (Date.now() - (((((1000) * (60)) * (60)) * (24)) * (7))), "maxResults": (1000)},(function (p1__27857_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-history","handle-history",-631693850),p1__27857_SHARP_], null));
}));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-history","handle-history",-631693850),(function (db,p__27858){
var vec__27859 = p__27858;
var _ = cljs.core.nth.call(null,vec__27859,(0),null);
var res = cljs.core.nth.call(null,vec__27859,(1),null);
var test_set = reagent.core.atom.call(null,cljs.core.set.call(null,cljs.core.PersistentVector.EMPTY));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.reduce.call(null,((function (test_set,vec__27859,_,res){
return (function (p,n){
var url = (new goog.Uri(n.url)).getDomain();
var clean_url = clojure.string.replace.call(null,url,"www.","");
if((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,test_set),clean_url)) || (cljs.core.not.call(null,cljs.core.re_find.call(null,/\./,url)))){
return p;
} else {
cljs.core.swap_BANG_.call(null,test_set,cljs.core.conj,clean_url);

return cljs.core.conj.call(null,p,clean_url);
}
});})(test_set,vec__27859,_,res))
,cljs.core.PersistentVector.EMPTY,res));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-domain-info","get-domain-info",-1554942868),(function (db,p__27860){
var vec__27861 = p__27860;
var _ = cljs.core.nth.call(null,vec__27861,(0),null);
var domain = cljs.core.nth.call(null,vec__27861,(1),null);
console.log("getting stuff for",domain);


thesis.map.handlers.post_BANG_.call(null,db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"all-for-domain",new cljs.core.Keyword(null,"req","req",-326448303),domain,new cljs.core.Keyword(null,"typ","typ",-1304536900),"domain"], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading-domain-info?","loading-domain-info?",-126738217),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-domain-info","handle-domain-info",-1180744402),(function (db,p__27862){
var vec__27863 = p__27862;
var _ = cljs.core.nth.call(null,vec__27863,(0),null);
var res = cljs.core.nth.call(null,vec__27863,(1),null);
var domain = cljs.core.nth.call(null,vec__27863,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"domain-info","domain-info",19852994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),domain,new cljs.core.Keyword(null,"data","data",-232669377),res], null),new cljs.core.Keyword(null,"loading-domain-info?","loading-domain-info?",-126738217),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-site-info","handle-site-info",-349037354),(function (db,p__27864){
var vec__27865 = p__27864;
var _ = cljs.core.nth.call(null,vec__27865,(0),null);
var res = cljs.core.nth.call(null,vec__27865,(1),null);
console.log("received site info: ",res);


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"site-info","site-info",-17357115),res,new cljs.core.Keyword(null,"loading-site-info?","loading-site-info?",1673710259),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"display-info-box","display-info-box",2039244212),(function (db,p__27866){
var vec__27867 = p__27866;
var _ = cljs.core.nth.call(null,vec__27867,(0),null);
var yo = cljs.core.nth.call(null,vec__27867,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"display-info-box?","display-info-box?",1862904652),yo);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-site-info","get-site-info",1674827775),(function (db,p__27868){
var vec__27869 = p__27868;
var _ = cljs.core.nth.call(null,vec__27869,(0),null);
var domain = cljs.core.nth.call(null,vec__27869,(1),null);
thesis.map.handlers.post_BANG_.call(null,db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"site-info",new cljs.core.Keyword(null,"req","req",-326448303),domain,new cljs.core.Keyword(null,"typ","typ",-1304536900),"site"], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading-site-info?","loading-site-info?",1673710259),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-my-location","get-my-location",1366160208),(function (db,_){
var local_storage_27871 = chromex.ext.storage.local_STAR_.call(null,chromex.config.get_active_config.call(null));
(function (){var temp__4657__auto__ = goog.object.get(chrome,"storage");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"local");
} else {
return null;
}
})().get(((function (local_storage_27871){
return (function (p1__27870_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-location","handle-location",1039790662),p1__27870_SHARP_], null));
});})(local_storage_27871))
);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-location","handle-location",1039790662),(function (db,p__27872){
var vec__27873 = p__27872;
var _ = cljs.core.nth.call(null,vec__27873,(0),null);
var res = cljs.core.nth.call(null,vec__27873,(1),null);
var loc = cljs.core.js__GT_clj.call(null,res,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if((new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(loc) == null)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-my-location","get-my-location",1366160208)], null));
} else {
}

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"my-location","my-location",-440971813),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),cljs.core.get.call(null,loc,new cljs.core.Keyword(null,"lat","lat",-580793929)),new cljs.core.Keyword(null,"lon","lon",522068437),cljs.core.get.call(null,loc,new cljs.core.Keyword(null,"lon","lon",522068437))], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-locations","get-locations",851680222),(function (db,_){
thesis.map.handlers.post_BANG_.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"get-locations"], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading-locations?","loading-locations?",691123512),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-location-counts","get-location-counts",-582356542),(function (db,p__27874){
var vec__27875 = p__27874;
var c = cljs.core.nth.call(null,vec__27875,(0),null);
var res = cljs.core.nth.call(null,vec__27875,(1),null);
if(cljs.core.truth_(cljs.core.get.call(null,db,new cljs.core.Keyword(null,"location-counts","location-counts",403812493)))){
console.log("aber wir haben schon counts, ist das hier? ",c);

} else {
thesis.map.handlers.post_BANG_.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"get-location-counts"], null));
}

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading-location-counts?","loading-location-counts?",1919307004),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-location-counts","handle-location-counts",71674505),(function (db,p__27876){
var vec__27877 = p__27876;
var _ = cljs.core.nth.call(null,vec__27877,(0),null);
var res = cljs.core.nth.call(null,vec__27877,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"location-counts","location-counts",403812493),res,new cljs.core.Keyword(null,"loading-location-counts?","loading-location-counts?",1919307004),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-locations","handle-locations",-823858190),(function (db,p__27878){
var vec__27879 = p__27878;
var _ = cljs.core.nth.call(null,vec__27879,(0),null);
var res = cljs.core.nth.call(null,vec__27879,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"distinct-locations","distinct-locations",-1429989749),res,new cljs.core.Keyword(null,"loading-locations?","loading-locations?",691123512),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-counts","get-counts",1962746487),(function (db,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-loaded-domains?","has-loaded-domains?",38475364).cljs$core$IFn$_invoke$arity$1(db))){
thesis.map.handlers.post_BANG_.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"get-counts"], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading-domains?","loading-domains?",605568016),true);
} else {
return db;
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-counts","handle-counts",2013967158),(function (db,p__27880){
var vec__27881 = p__27880;
var _ = cljs.core.nth.call(null,vec__27881,(0),null);
var res = cljs.core.nth.call(null,vec__27881,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"distinct-domains","distinct-domains",1062236270),res,new cljs.core.Keyword(null,"loading-domains?","loading-domains?",605568016),false,new cljs.core.Keyword(null,"has-loaded-domains?","has-loaded-domains?",38475364),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (db,p__27882){
var vec__27883 = p__27882;
var _ = cljs.core.nth.call(null,vec__27883,(0),null);
var c = cljs.core.nth.call(null,vec__27883,(1),null);
var r = cljs.core.nth.call(null,vec__27883,(2),null);
if(cljs.core.not.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"initted","initted",572210941)))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-counts","get-counts",1962746487)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-locations","get-locations",851680222)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-my-location","get-my-location",1366160208)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-location-counts","get-location-counts",-582356542)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-history","get-history",-1950009985)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-mouse","track-mouse",-1754036351)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port","port",1534937262),thesis.map.handlers.connect_to_background_page_BANG_.call(null),new cljs.core.Keyword(null,"initted","initted",572210941),true], null);
} else {
thesis.map.handlers.post_BANG_.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reqtype","reqtype",978083957),"close-chan"], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"port","port",1534937262),thesis.map.handlers.connect_to_background_page_BANG_.call(null));
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-mouse","handle-mouse",473151679),(function (db,p__27884){
var vec__27885 = p__27884;
var _ = cljs.core.nth.call(null,vec__27885,(0),null);
var m = cljs.core.nth.call(null,vec__27885,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mouse","mouse",478628972),m);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-state","show-state",-733141016),(function (db,p__27886){
var vec__27887 = p__27886;
var _ = cljs.core.nth.call(null,vec__27887,(0),null);
var v = cljs.core.nth.call(null,vec__27887,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-state","show-state",-733141016),v);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"track-window","track-window",-1287824939),(function (db,_){
window.addEventListener("resize",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-window","handle-window",-1730111603)], null));
}));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-window","handle-window",-1730111603),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"track-mouse","track-mouse",-1754036351),(function (db,_){
window.addEventListener("mousemove",(function (p1__27888_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-mouse","handle-mouse",473151679),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27888_SHARP_.clientX,p1__27888_SHARP_.clientY], null)], null));
}));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),(function (db,p__27889){
var vec__27890 = p__27889;
var _ = cljs.core.nth.call(null,vec__27890,(0),null);
var m = cljs.core.nth.call(null,vec__27890,(1),null);
console.log("setting view mode: ",cljs.core.get.call(null,db,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427)));


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),m);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-site-info","show-site-info",-2033796859),(function (db,p__27891){
var vec__27892 = p__27891;
var _ = cljs.core.nth.call(null,vec__27892,(0),null);
var domain = cljs.core.nth.call(null,vec__27892,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-site-info","get-site-info",1674827775),domain], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),"site",new cljs.core.Keyword(null,"display-info-box?","display-info-box?",1862904652),true,new cljs.core.Keyword(null,"loading-site-info?","loading-site-info?",1673710259),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-domain-info","show-domain-info",-1180855871),(function (db,p__27893){
var vec__27894 = p__27893;
var _ = cljs.core.nth.call(null,vec__27894,(0),null);
var domain = cljs.core.nth.call(null,vec__27894,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-domain-info","get-domain-info",-1554942868),domain], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"display-info-box?","display-info-box?",1862904652),true,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),"domain",new cljs.core.Keyword(null,"loading-domain-info?","loading-domain-info?",-126738217),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-box","init-box",-2056174245),re_frame.core.debug,(function (db,p__27895){
var vec__27896 = p__27895;
var _ = cljs.core.nth.call(null,vec__27896,(0),null);
var typ = cljs.core.nth.call(null,vec__27896,(1),null);
var url = cljs.core.nth.call(null,vec__27896,(2),null);
if(cljs.core._EQ_.call(null,typ,"domain")){
console.log("dispatching domain info");


re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-domain-info","show-domain-info",-1180855871),url], null));
} else {
console.log("dispatching site info");


re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-site-info","show-site-info",-2033796859),url], null));
}

return db;
}));

//# sourceMappingURL=handlers.js.map