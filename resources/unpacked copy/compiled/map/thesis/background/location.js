// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.background.location');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('chromex.protocols');
goog.require('chromex.ext.storage');
goog.require('chromex.logging');
thesis.background.location.geo_trigger = cljs.core.async.chan.call(null);
thesis.background.location.force_get_location_BANG_ = (function thesis$background$location$force_get_location_BANG_(){
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_32694){
var state_val_32695 = (state_32694[(1)]);
if((state_val_32695 === (1))){
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32694__$1,(2),thesis.background.location.geo_trigger,"");
} else {
if((state_val_32695 === (2))){
var inst_32692 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32694__$1,inst_32692);
} else {
return null;
}
}
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_32699 = [null,null,null,null,null,null,null];
(statearr_32699[(0)] = thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__);

(statearr_32699[(1)] = (1));

return statearr_32699;
});
var thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____1 = (function (state_32694){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_32694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e32700){if((e32700 instanceof Object)){
var ex__20505__auto__ = e32700;
var statearr_32701_32703 = state_32694;
(statearr_32701_32703[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32704 = state_32694;
state_32694 = G__32704;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__ = function(state_32694){
switch(arguments.length){
case 0:
return thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____1.call(this,state_32694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_32702 = f__20614__auto__.call(null);
(statearr_32702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_32702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
thesis.background.location.watch_location_BANG_ = (function thesis$background$location$watch_location_BANG_(){
var local_storage = chromex.ext.storage.local_STAR_.call(null,chromex.config.get_active_config.call(null));
var geo_chan = cljs.core.async.chan.call(null);
var c__20613__auto___32900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___32900,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___32900,local_storage,geo_chan){
return (function (state_32818){
var state_val_32819 = (state_32818[(1)]);
if((state_val_32819 === (1))){
var state_32818__$1 = state_32818;
var statearr_32820_32901 = state_32818__$1;
(statearr_32820_32901[(2)] = null);

(statearr_32820_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (2))){
var inst_32804 = navigator.geolocation;
var inst_32805 = (function (){return ((function (inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan){
return (function (p1__32705_SHARP_){
var c__20613__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto____$1,inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto____$1,inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan){
return (function (state_32824){
var state_val_32825 = (state_32824[(1)]);
if((state_val_32825 === (1))){
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32824__$1,(2),geo_chan,p1__32705_SHARP_);
} else {
if((state_val_32825 === (2))){
var inst_32822 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32824__$1,inst_32822);
} else {
return null;
}
}
});})(c__20613__auto____$1,inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan))
;
return ((function (switch__20501__auto__,c__20613__auto____$1,inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null];
(statearr_32829[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_32824){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_32824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object)){
var ex__20505__auto__ = e32830;
var statearr_32831_32902 = state_32824;
(statearr_32831_32902[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32903 = state_32824;
state_32824 = G__32903;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_32824){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_32824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto____$1,inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_32832 = f__20614__auto__.call(null);
(statearr_32832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto____$1);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto____$1,inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan))
);

return c__20613__auto____$1;
});
;})(inst_32804,state_val_32819,c__20613__auto___32900,local_storage,geo_chan))
})();
var inst_32806 = (function (){return ((function (inst_32804,inst_32805,state_val_32819,c__20613__auto___32900,local_storage,geo_chan){
return (function (){
return cljs.core.List.EMPTY;
});
;})(inst_32804,inst_32805,state_val_32819,c__20613__auto___32900,local_storage,geo_chan))
})();
var inst_32807 = [new cljs.core.Keyword(null,"maximumAge","maximumAge",451949754)];
var inst_32808 = [(1000)];
var inst_32809 = cljs.core.PersistentHashMap.fromArrays(inst_32807,inst_32808);
var inst_32810 = cljs.core.clj__GT_js.call(null,inst_32809);
var inst_32811 = inst_32804.getCurrentPosition(inst_32805,inst_32806,inst_32810);
var state_32818__$1 = (function (){var statearr_32833 = state_32818;
(statearr_32833[(7)] = inst_32811);

return statearr_32833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32818__$1,(4),thesis.background.location.geo_trigger);
} else {
if((state_val_32819 === (3))){
var inst_32816 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32818__$1,inst_32816);
} else {
if((state_val_32819 === (4))){
var inst_32813 = (state_32818[(2)]);
var state_32818__$1 = (function (){var statearr_32834 = state_32818;
(statearr_32834[(8)] = inst_32813);

return statearr_32834;
})();
var statearr_32835_32904 = state_32818__$1;
(statearr_32835_32904[(2)] = null);

(statearr_32835_32904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20613__auto___32900,local_storage,geo_chan))
;
return ((function (switch__20501__auto__,c__20613__auto___32900,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_32839 = [null,null,null,null,null,null,null,null,null];
(statearr_32839[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_32839[(1)] = (1));

return statearr_32839;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_32818){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_32818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e32840){if((e32840 instanceof Object)){
var ex__20505__auto__ = e32840;
var statearr_32841_32905 = state_32818;
(statearr_32841_32905[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32906 = state_32818;
state_32818 = G__32906;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_32818){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_32818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___32900,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_32842 = f__20614__auto__.call(null);
(statearr_32842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___32900);

return statearr_32842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___32900,local_storage,geo_chan))
);


var c__20613__auto___32907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___32907,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___32907,local_storage,geo_chan){
return (function (state_32853){
var state_val_32854 = (state_32853[(1)]);
if((state_val_32854 === (1))){
var state_32853__$1 = state_32853;
var statearr_32855_32908 = state_32853__$1;
(statearr_32855_32908[(2)] = null);

(statearr_32855_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (2))){
var inst_32844 = cljs.core.async.timeout.call(null,(10000));
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32853__$1,(4),inst_32844);
} else {
if((state_val_32854 === (3))){
var inst_32851 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32853__$1,inst_32851);
} else {
if((state_val_32854 === (4))){
var inst_32846 = (state_32853[(2)]);
var state_32853__$1 = (function (){var statearr_32856 = state_32853;
(statearr_32856[(7)] = inst_32846);

return statearr_32856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32853__$1,(5),thesis.background.location.geo_trigger,"");
} else {
if((state_val_32854 === (5))){
var inst_32848 = (state_32853[(2)]);
var state_32853__$1 = (function (){var statearr_32857 = state_32853;
(statearr_32857[(8)] = inst_32848);

return statearr_32857;
})();
var statearr_32858_32909 = state_32853__$1;
(statearr_32858_32909[(2)] = null);

(statearr_32858_32909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__20613__auto___32907,local_storage,geo_chan))
;
return ((function (switch__20501__auto__,c__20613__auto___32907,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_32862 = [null,null,null,null,null,null,null,null,null];
(statearr_32862[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_32862[(1)] = (1));

return statearr_32862;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_32853){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_32853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e32863){if((e32863 instanceof Object)){
var ex__20505__auto__ = e32863;
var statearr_32864_32910 = state_32853;
(statearr_32864_32910[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32911 = state_32853;
state_32853 = G__32911;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_32853){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_32853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___32907,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_32865 = f__20614__auto__.call(null);
(statearr_32865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___32907);

return statearr_32865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___32907,local_storage,geo_chan))
);


var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,local_storage,geo_chan){
return (function (state_32887){
var state_val_32888 = (state_32887[(1)]);
if((state_val_32888 === (1))){
var inst_32866 = (0);
var state_32887__$1 = (function (){var statearr_32889 = state_32887;
(statearr_32889[(7)] = inst_32866);

return statearr_32889;
})();
var statearr_32890_32912 = state_32887__$1;
(statearr_32890_32912[(2)] = null);

(statearr_32890_32912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (2))){
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32887__$1,(4),geo_chan);
} else {
if((state_val_32888 === (3))){
var inst_32885 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32887__$1,inst_32885);
} else {
if((state_val_32888 === (4))){
var inst_32866 = (state_32887[(7)]);
var inst_32869 = (state_32887[(2)]);
var inst_32870 = [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"it","it",1023594544),new cljs.core.Keyword(null,"ts","ts",1617209904)];
var inst_32871 = inst_32869.coords;
var inst_32872 = inst_32871.latitude;
var inst_32873 = inst_32869.coords;
var inst_32874 = inst_32873.longitude;
var inst_32875 = inst_32869.coords;
var inst_32876 = inst_32875.accuracy;
var inst_32877 = inst_32869.timestamp;
var inst_32878 = [inst_32872,inst_32874,inst_32876,inst_32866,inst_32877];
var inst_32879 = cljs.core.PersistentHashMap.fromArrays(inst_32870,inst_32878);
var inst_32880 = cljs.core.clj__GT_js.call(null,inst_32879);
var inst_32881 = chromex.protocols.set.call(null,local_storage,inst_32880);
var inst_32882 = (inst_32866 + (1));
var inst_32866__$1 = inst_32882;
var state_32887__$1 = (function (){var statearr_32891 = state_32887;
(statearr_32891[(7)] = inst_32866__$1);

(statearr_32891[(8)] = inst_32881);

return statearr_32891;
})();
var statearr_32892_32913 = state_32887__$1;
(statearr_32892_32913[(2)] = null);

(statearr_32892_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20613__auto__,local_storage,geo_chan))
;
return ((function (switch__20501__auto__,c__20613__auto__,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_32896 = [null,null,null,null,null,null,null,null,null];
(statearr_32896[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_32896[(1)] = (1));

return statearr_32896;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_32887){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_32887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e32897){if((e32897 instanceof Object)){
var ex__20505__auto__ = e32897;
var statearr_32898_32914 = state_32887;
(statearr_32898_32914[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32915 = state_32887;
state_32887 = G__32915;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_32887){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_32887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_32899 = f__20614__auto__.call(null);
(statearr_32899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_32899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,local_storage,geo_chan))
);

return c__20613__auto__;
});

//# sourceMappingURL=location.js.map