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
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_15710){
var state_val_15711 = (state_15710[(1)]);
if((state_val_15711 === (1))){
var state_15710__$1 = state_15710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15710__$1,(2),thesis.background.location.geo_trigger,"");
} else {
if((state_val_15711 === (2))){
var inst_15708 = (state_15710[(2)]);
var state_15710__$1 = state_15710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15710__$1,inst_15708);
} else {
return null;
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto__ = null;
var thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto____0 = (function (){
var statearr_15718 = [null,null,null,null,null,null,null];
(statearr_15718[(0)] = thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto__);

(statearr_15718[(1)] = (1));

return statearr_15718;
});
var thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto____1 = (function (state_15710){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_15710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e15720){if((e15720 instanceof Object)){
var ex__8709__auto__ = e15720;
var statearr_15721_15774 = state_15710;
(statearr_15721_15774[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15778 = state_15710;
state_15710 = G__15778;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto__ = function(state_15710){
switch(arguments.length){
case 0:
return thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto____1.call(this,state_15710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto____0;
thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto____1;
return thesis$background$location$force_get_location_BANG__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_15723 = f__8865__auto__.call(null);
(statearr_15723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_15723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
});
thesis.background.location.watch_location_BANG_ = (function thesis$background$location$watch_location_BANG_(){
var local_storage = chromex.ext.storage.local_STAR_.call(null,chromex.config.get_active_config.call(null));
var geo_chan = cljs.core.async.chan.call(null);
var c__8864__auto___16042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___16042,local_storage,geo_chan){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___16042,local_storage,geo_chan){
return (function (state_15953){
var state_val_15954 = (state_15953[(1)]);
if((state_val_15954 === (1))){
var state_15953__$1 = state_15953;
var statearr_15955_16043 = state_15953__$1;
(statearr_15955_16043[(2)] = null);

(statearr_15955_16043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15954 === (2))){
var inst_15939 = navigator.geolocation;
var inst_15940 = (function (){return ((function (inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan){
return (function (p1__15788_SHARP_){
var c__8864__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto____$1,inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto____$1,inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan){
return (function (state_15959){
var state_val_15960 = (state_15959[(1)]);
if((state_val_15960 === (1))){
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15959__$1,(2),geo_chan,p1__15788_SHARP_);
} else {
if((state_val_15960 === (2))){
var inst_15957 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15959__$1,inst_15957);
} else {
return null;
}
}
});})(c__8864__auto____$1,inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan))
;
return ((function (switch__8705__auto__,c__8864__auto____$1,inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0 = (function (){
var statearr_15964 = [null,null,null,null,null,null,null];
(statearr_15964[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__);

(statearr_15964[(1)] = (1));

return statearr_15964;
});
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1 = (function (state_15959){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_15959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e15965){if((e15965 instanceof Object)){
var ex__8709__auto__ = e15965;
var statearr_15966_16044 = state_15959;
(statearr_15966_16044[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16045 = state_15959;
state_15959 = G__16045;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = function(state_15959){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1.call(this,state_15959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto____$1,inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan))
})();
var state__8866__auto__ = (function (){var statearr_15967 = f__8865__auto__.call(null);
(statearr_15967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto____$1);

return statearr_15967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto____$1,inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan))
);

return c__8864__auto____$1;
});
;})(inst_15939,state_val_15954,c__8864__auto___16042,local_storage,geo_chan))
})();
var inst_15941 = (function (){return ((function (inst_15939,inst_15940,state_val_15954,c__8864__auto___16042,local_storage,geo_chan){
return (function (){
return cljs.core.List.EMPTY;
});
;})(inst_15939,inst_15940,state_val_15954,c__8864__auto___16042,local_storage,geo_chan))
})();
var inst_15942 = [new cljs.core.Keyword(null,"maximumAge","maximumAge",451949754)];
var inst_15943 = [(1000)];
var inst_15944 = cljs.core.PersistentHashMap.fromArrays(inst_15942,inst_15943);
var inst_15945 = cljs.core.clj__GT_js.call(null,inst_15944);
var inst_15946 = inst_15939.getCurrentPosition(inst_15940,inst_15941,inst_15945);
var state_15953__$1 = (function (){var statearr_15968 = state_15953;
(statearr_15968[(7)] = inst_15946);

return statearr_15968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15953__$1,(4),thesis.background.location.geo_trigger);
} else {
if((state_val_15954 === (3))){
var inst_15951 = (state_15953[(2)]);
var state_15953__$1 = state_15953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15953__$1,inst_15951);
} else {
if((state_val_15954 === (4))){
var inst_15948 = (state_15953[(2)]);
var state_15953__$1 = (function (){var statearr_15969 = state_15953;
(statearr_15969[(8)] = inst_15948);

return statearr_15969;
})();
var statearr_15970_16121 = state_15953__$1;
(statearr_15970_16121[(2)] = null);

(statearr_15970_16121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8864__auto___16042,local_storage,geo_chan))
;
return ((function (switch__8705__auto__,c__8864__auto___16042,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0 = (function (){
var statearr_15974 = [null,null,null,null,null,null,null,null,null];
(statearr_15974[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__);

(statearr_15974[(1)] = (1));

return statearr_15974;
});
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1 = (function (state_15953){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_15953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e15975){if((e15975 instanceof Object)){
var ex__8709__auto__ = e15975;
var statearr_15976_16132 = state_15953;
(statearr_15976_16132[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16134 = state_15953;
state_15953 = G__16134;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = function(state_15953){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1.call(this,state_15953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___16042,local_storage,geo_chan))
})();
var state__8866__auto__ = (function (){var statearr_15978 = f__8865__auto__.call(null);
(statearr_15978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___16042);

return statearr_15978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___16042,local_storage,geo_chan))
);


var c__8864__auto___16138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___16138,local_storage,geo_chan){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___16138,local_storage,geo_chan){
return (function (state_15990){
var state_val_15991 = (state_15990[(1)]);
if((state_val_15991 === (1))){
var state_15990__$1 = state_15990;
var statearr_15992_16139 = state_15990__$1;
(statearr_15992_16139[(2)] = null);

(statearr_15992_16139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15991 === (2))){
var inst_15980 = cljs.core.async.timeout.call(null,(10000));
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15990__$1,(4),inst_15980);
} else {
if((state_val_15991 === (3))){
var inst_15988 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15990__$1,inst_15988);
} else {
if((state_val_15991 === (4))){
var inst_15982 = (state_15990[(2)]);
var state_15990__$1 = (function (){var statearr_15994 = state_15990;
(statearr_15994[(7)] = inst_15982);

return statearr_15994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15990__$1,(5),thesis.background.location.geo_trigger,"");
} else {
if((state_val_15991 === (5))){
var inst_15984 = (state_15990[(2)]);
var state_15990__$1 = (function (){var statearr_15995 = state_15990;
(statearr_15995[(8)] = inst_15984);

return statearr_15995;
})();
var statearr_15996_16181 = state_15990__$1;
(statearr_15996_16181[(2)] = null);

(statearr_15996_16181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__8864__auto___16138,local_storage,geo_chan))
;
return ((function (switch__8705__auto__,c__8864__auto___16138,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0 = (function (){
var statearr_16001 = [null,null,null,null,null,null,null,null,null];
(statearr_16001[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__);

(statearr_16001[(1)] = (1));

return statearr_16001;
});
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1 = (function (state_15990){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_15990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16002){if((e16002 instanceof Object)){
var ex__8709__auto__ = e16002;
var statearr_16004_16193 = state_15990;
(statearr_16004_16193[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16196 = state_15990;
state_15990 = G__16196;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = function(state_15990){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1.call(this,state_15990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___16138,local_storage,geo_chan))
})();
var state__8866__auto__ = (function (){var statearr_16006 = f__8865__auto__.call(null);
(statearr_16006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___16138);

return statearr_16006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___16138,local_storage,geo_chan))
);


var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__,local_storage,geo_chan){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__,local_storage,geo_chan){
return (function (state_16029){
var state_val_16030 = (state_16029[(1)]);
if((state_val_16030 === (1))){
var inst_16008 = (0);
var state_16029__$1 = (function (){var statearr_16031 = state_16029;
(statearr_16031[(7)] = inst_16008);

return statearr_16031;
})();
var statearr_16032_16311 = state_16029__$1;
(statearr_16032_16311[(2)] = null);

(statearr_16032_16311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (2))){
var state_16029__$1 = state_16029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16029__$1,(4),geo_chan);
} else {
if((state_val_16030 === (3))){
var inst_16027 = (state_16029[(2)]);
var state_16029__$1 = state_16029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16029__$1,inst_16027);
} else {
if((state_val_16030 === (4))){
var inst_16008 = (state_16029[(7)]);
var inst_16011 = (state_16029[(2)]);
var inst_16012 = [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"it","it",1023594544),new cljs.core.Keyword(null,"ts","ts",1617209904)];
var inst_16013 = inst_16011.coords;
var inst_16014 = inst_16013.latitude;
var inst_16015 = inst_16011.coords;
var inst_16016 = inst_16015.longitude;
var inst_16017 = inst_16011.coords;
var inst_16018 = inst_16017.accuracy;
var inst_16019 = inst_16011.timestamp;
var inst_16020 = [inst_16014,inst_16016,inst_16018,inst_16008,inst_16019];
var inst_16021 = cljs.core.PersistentHashMap.fromArrays(inst_16012,inst_16020);
var inst_16022 = cljs.core.clj__GT_js.call(null,inst_16021);
var inst_16023 = chromex.protocols.set.call(null,local_storage,inst_16022);
var inst_16024 = (inst_16008 + (1));
var inst_16008__$1 = inst_16024;
var state_16029__$1 = (function (){var statearr_16033 = state_16029;
(statearr_16033[(8)] = inst_16023);

(statearr_16033[(7)] = inst_16008__$1);

return statearr_16033;
})();
var statearr_16034_16312 = state_16029__$1;
(statearr_16034_16312[(2)] = null);

(statearr_16034_16312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8864__auto__,local_storage,geo_chan))
;
return ((function (switch__8705__auto__,c__8864__auto__,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0 = (function (){
var statearr_16038 = [null,null,null,null,null,null,null,null,null];
(statearr_16038[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__);

(statearr_16038[(1)] = (1));

return statearr_16038;
});
var thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1 = (function (state_16029){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_16029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e16039){if((e16039 instanceof Object)){
var ex__8709__auto__ = e16039;
var statearr_16040_16393 = state_16029;
(statearr_16040_16393[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16394 = state_16029;
state_16029 = G__16394;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__ = function(state_16029){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1.call(this,state_16029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__8706__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__,local_storage,geo_chan))
})();
var state__8866__auto__ = (function (){var statearr_16041 = f__8865__auto__.call(null);
(statearr_16041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_16041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__,local_storage,geo_chan))
);

return c__8864__auto__;
});

//# sourceMappingURL=location.js.map