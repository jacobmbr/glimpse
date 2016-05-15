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
return (function (state_41880){
var state_val_41881 = (state_41880[(1)]);
if((state_val_41881 === (1))){
var state_41880__$1 = state_41880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41880__$1,(2),thesis.background.location.geo_trigger,"");
} else {
if((state_val_41881 === (2))){
var inst_41878 = (state_41880[(2)]);
var state_41880__$1 = state_41880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41880__$1,inst_41878);
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
var statearr_41885 = [null,null,null,null,null,null,null];
(statearr_41885[(0)] = thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__);

(statearr_41885[(1)] = (1));

return statearr_41885;
});
var thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____1 = (function (state_41880){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_41880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e41886){if((e41886 instanceof Object)){
var ex__20505__auto__ = e41886;
var statearr_41887_41889 = state_41880;
(statearr_41887_41889[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41890 = state_41880;
state_41880 = G__41890;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__ = function(state_41880){
switch(arguments.length){
case 0:
return thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____1.call(this,state_41880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$force_get_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_41888 = f__20614__auto__.call(null);
(statearr_41888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_41888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
thesis.background.location.watch_location_BANG_ = (function thesis$background$location$watch_location_BANG_(){
var local_storage = chromex.ext.storage.local_STAR_.call(null,chromex.config.get_active_config.call(null));
var geo_chan = cljs.core.async.chan.call(null);
var c__20613__auto___42086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___42086,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___42086,local_storage,geo_chan){
return (function (state_42004){
var state_val_42005 = (state_42004[(1)]);
if((state_val_42005 === (1))){
var state_42004__$1 = state_42004;
var statearr_42006_42087 = state_42004__$1;
(statearr_42006_42087[(2)] = null);

(statearr_42006_42087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42005 === (2))){
var inst_41990 = navigator.geolocation;
var inst_41991 = (function (){return ((function (inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan){
return (function (p1__41891_SHARP_){
var c__20613__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto____$1,inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto____$1,inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan){
return (function (state_42010){
var state_val_42011 = (state_42010[(1)]);
if((state_val_42011 === (1))){
var state_42010__$1 = state_42010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42010__$1,(2),geo_chan,p1__41891_SHARP_);
} else {
if((state_val_42011 === (2))){
var inst_42008 = (state_42010[(2)]);
var state_42010__$1 = state_42010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42010__$1,inst_42008);
} else {
return null;
}
}
});})(c__20613__auto____$1,inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan))
;
return ((function (switch__20501__auto__,c__20613__auto____$1,inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_42015 = [null,null,null,null,null,null,null];
(statearr_42015[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_42015[(1)] = (1));

return statearr_42015;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_42010){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_42010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e42016){if((e42016 instanceof Object)){
var ex__20505__auto__ = e42016;
var statearr_42017_42088 = state_42010;
(statearr_42017_42088[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42089 = state_42010;
state_42010 = G__42089;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_42010){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_42010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto____$1,inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_42018 = f__20614__auto__.call(null);
(statearr_42018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto____$1);

return statearr_42018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto____$1,inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan))
);

return c__20613__auto____$1;
});
;})(inst_41990,state_val_42005,c__20613__auto___42086,local_storage,geo_chan))
})();
var inst_41992 = (function (){return ((function (inst_41990,inst_41991,state_val_42005,c__20613__auto___42086,local_storage,geo_chan){
return (function (){
return cljs.core.List.EMPTY;
});
;})(inst_41990,inst_41991,state_val_42005,c__20613__auto___42086,local_storage,geo_chan))
})();
var inst_41993 = [new cljs.core.Keyword(null,"maximumAge","maximumAge",451949754)];
var inst_41994 = [(1000)];
var inst_41995 = cljs.core.PersistentHashMap.fromArrays(inst_41993,inst_41994);
var inst_41996 = cljs.core.clj__GT_js.call(null,inst_41995);
var inst_41997 = inst_41990.getCurrentPosition(inst_41991,inst_41992,inst_41996);
var state_42004__$1 = (function (){var statearr_42019 = state_42004;
(statearr_42019[(7)] = inst_41997);

return statearr_42019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42004__$1,(4),thesis.background.location.geo_trigger);
} else {
if((state_val_42005 === (3))){
var inst_42002 = (state_42004[(2)]);
var state_42004__$1 = state_42004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42004__$1,inst_42002);
} else {
if((state_val_42005 === (4))){
var inst_41999 = (state_42004[(2)]);
var state_42004__$1 = (function (){var statearr_42020 = state_42004;
(statearr_42020[(8)] = inst_41999);

return statearr_42020;
})();
var statearr_42021_42090 = state_42004__$1;
(statearr_42021_42090[(2)] = null);

(statearr_42021_42090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20613__auto___42086,local_storage,geo_chan))
;
return ((function (switch__20501__auto__,c__20613__auto___42086,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_42025 = [null,null,null,null,null,null,null,null,null];
(statearr_42025[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_42025[(1)] = (1));

return statearr_42025;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_42004){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_42004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e42026){if((e42026 instanceof Object)){
var ex__20505__auto__ = e42026;
var statearr_42027_42091 = state_42004;
(statearr_42027_42091[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42092 = state_42004;
state_42004 = G__42092;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_42004){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_42004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___42086,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_42028 = f__20614__auto__.call(null);
(statearr_42028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___42086);

return statearr_42028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___42086,local_storage,geo_chan))
);


var c__20613__auto___42093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___42093,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___42093,local_storage,geo_chan){
return (function (state_42039){
var state_val_42040 = (state_42039[(1)]);
if((state_val_42040 === (1))){
var state_42039__$1 = state_42039;
var statearr_42041_42094 = state_42039__$1;
(statearr_42041_42094[(2)] = null);

(statearr_42041_42094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42040 === (2))){
var inst_42030 = cljs.core.async.timeout.call(null,(10000));
var state_42039__$1 = state_42039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42039__$1,(4),inst_42030);
} else {
if((state_val_42040 === (3))){
var inst_42037 = (state_42039[(2)]);
var state_42039__$1 = state_42039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42039__$1,inst_42037);
} else {
if((state_val_42040 === (4))){
var inst_42032 = (state_42039[(2)]);
var state_42039__$1 = (function (){var statearr_42042 = state_42039;
(statearr_42042[(7)] = inst_42032);

return statearr_42042;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42039__$1,(5),thesis.background.location.geo_trigger,"");
} else {
if((state_val_42040 === (5))){
var inst_42034 = (state_42039[(2)]);
var state_42039__$1 = (function (){var statearr_42043 = state_42039;
(statearr_42043[(8)] = inst_42034);

return statearr_42043;
})();
var statearr_42044_42095 = state_42039__$1;
(statearr_42044_42095[(2)] = null);

(statearr_42044_42095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__20613__auto___42093,local_storage,geo_chan))
;
return ((function (switch__20501__auto__,c__20613__auto___42093,local_storage,geo_chan){
return (function() {
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = null;
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_42048 = [null,null,null,null,null,null,null,null,null];
(statearr_42048[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_42048[(1)] = (1));

return statearr_42048;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_42039){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_42039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e42049){if((e42049 instanceof Object)){
var ex__20505__auto__ = e42049;
var statearr_42050_42096 = state_42039;
(statearr_42050_42096[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42097 = state_42039;
state_42039 = G__42097;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_42039){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_42039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___42093,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_42051 = f__20614__auto__.call(null);
(statearr_42051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___42093);

return statearr_42051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___42093,local_storage,geo_chan))
);


var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,local_storage,geo_chan){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,local_storage,geo_chan){
return (function (state_42073){
var state_val_42074 = (state_42073[(1)]);
if((state_val_42074 === (1))){
var inst_42052 = (0);
var state_42073__$1 = (function (){var statearr_42075 = state_42073;
(statearr_42075[(7)] = inst_42052);

return statearr_42075;
})();
var statearr_42076_42098 = state_42073__$1;
(statearr_42076_42098[(2)] = null);

(statearr_42076_42098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42074 === (2))){
var state_42073__$1 = state_42073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42073__$1,(4),geo_chan);
} else {
if((state_val_42074 === (3))){
var inst_42071 = (state_42073[(2)]);
var state_42073__$1 = state_42073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42073__$1,inst_42071);
} else {
if((state_val_42074 === (4))){
var inst_42052 = (state_42073[(7)]);
var inst_42055 = (state_42073[(2)]);
var inst_42056 = [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"it","it",1023594544),new cljs.core.Keyword(null,"ts","ts",1617209904)];
var inst_42057 = inst_42055.coords;
var inst_42058 = inst_42057.latitude;
var inst_42059 = inst_42055.coords;
var inst_42060 = inst_42059.longitude;
var inst_42061 = inst_42055.coords;
var inst_42062 = inst_42061.accuracy;
var inst_42063 = inst_42055.timestamp;
var inst_42064 = [inst_42058,inst_42060,inst_42062,inst_42052,inst_42063];
var inst_42065 = cljs.core.PersistentHashMap.fromArrays(inst_42056,inst_42064);
var inst_42066 = cljs.core.clj__GT_js.call(null,inst_42065);
var inst_42067 = chromex.protocols.set.call(null,local_storage,inst_42066);
var inst_42068 = (inst_42052 + (1));
var inst_42052__$1 = inst_42068;
var state_42073__$1 = (function (){var statearr_42077 = state_42073;
(statearr_42077[(7)] = inst_42052__$1);

(statearr_42077[(8)] = inst_42067);

return statearr_42077;
})();
var statearr_42078_42099 = state_42073__$1;
(statearr_42078_42099[(2)] = null);

(statearr_42078_42099[(1)] = (2));


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
var statearr_42082 = [null,null,null,null,null,null,null,null,null];
(statearr_42082[(0)] = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__);

(statearr_42082[(1)] = (1));

return statearr_42082;
});
var thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1 = (function (state_42073){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_42073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e42083){if((e42083 instanceof Object)){
var ex__20505__auto__ = e42083;
var statearr_42084_42100 = state_42073;
(statearr_42084_42100[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42101 = state_42073;
state_42073 = G__42101;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__ = function(state_42073){
switch(arguments.length){
case 0:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1.call(this,state_42073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____0;
thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$location$watch_location_BANG__$_state_machine__20502__auto____1;
return thesis$background$location$watch_location_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,local_storage,geo_chan))
})();
var state__20615__auto__ = (function (){var statearr_42085 = f__20614__auto__.call(null);
(statearr_42085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_42085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,local_storage,geo_chan))
);

return c__20613__auto__;
});

//# sourceMappingURL=location.js.map