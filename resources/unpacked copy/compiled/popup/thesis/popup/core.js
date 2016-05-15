// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.popup.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chromex.logging');
goog.require('chromex.protocols');
goog.require('chromex.ext.runtime');
thesis.popup.core.process_message_BANG_ = (function thesis$popup$core$process_message_BANG_(message){
console.log("POPUP: got message:",message);

return null;
});
thesis.popup.core.run_message_loop_BANG_ = (function thesis$popup$core$run_message_loop_BANG_(message_channel){
console.log("POPUP: starting message loop...");


var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_24756){
var state_val_24757 = (state_24756[(1)]);
if((state_val_24757 === (1))){
var state_24756__$1 = state_24756;
var statearr_24758_24774 = state_24756__$1;
(statearr_24758_24774[(2)] = null);

(statearr_24758_24774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (2))){
var state_24756__$1 = state_24756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24756__$1,(4),message_channel);
} else {
if((state_val_24757 === (3))){
var inst_24754 = (state_24756[(2)]);
var state_24756__$1 = state_24756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24756__$1,inst_24754);
} else {
if((state_val_24757 === (4))){
var inst_24745 = (state_24756[(7)]);
var inst_24745__$1 = (state_24756[(2)]);
var state_24756__$1 = (function (){var statearr_24759 = state_24756;
(statearr_24759[(7)] = inst_24745__$1);

return statearr_24759;
})();
if(cljs.core.truth_(inst_24745__$1)){
var statearr_24760_24775 = state_24756__$1;
(statearr_24760_24775[(1)] = (5));

} else {
var statearr_24761_24776 = state_24756__$1;
(statearr_24761_24776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (5))){
var inst_24745 = (state_24756[(7)]);
var inst_24747 = thesis.popup.core.process_message_BANG_.call(null,inst_24745);
var state_24756__$1 = (function (){var statearr_24762 = state_24756;
(statearr_24762[(8)] = inst_24747);

return statearr_24762;
})();
var statearr_24763_24777 = state_24756__$1;
(statearr_24763_24777[(2)] = null);

(statearr_24763_24777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (6))){
var state_24756__$1 = state_24756;
var statearr_24764_24778 = state_24756__$1;
(statearr_24764_24778[(2)] = null);

(statearr_24764_24778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (7))){
var inst_24751 = (state_24756[(2)]);
var inst_24752 = console.log("POPUP: leaving message loop");
var state_24756__$1 = (function (){var statearr_24765 = state_24756;
(statearr_24765[(9)] = inst_24751);

(statearr_24765[(10)] = inst_24752);

return statearr_24765;
})();
var statearr_24766_24779 = state_24756__$1;
(statearr_24766_24779[(2)] = null);

(statearr_24766_24779[(1)] = (3));


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
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto__ = null;
var thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto____0 = (function (){
var statearr_24770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24770[(0)] = thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto__);

(statearr_24770[(1)] = (1));

return statearr_24770;
});
var thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto____1 = (function (state_24756){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_24756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e24771){if((e24771 instanceof Object)){
var ex__20505__auto__ = e24771;
var statearr_24772_24780 = state_24756;
(statearr_24772_24780[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24781 = state_24756;
state_24756 = G__24781;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto__ = function(state_24756){
switch(arguments.length){
case 0:
return thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto____0.call(this);
case 1:
return thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto____1.call(this,state_24756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto____0;
thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto____1;
return thesis$popup$core$run_message_loop_BANG__$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_24773 = f__20614__auto__.call(null);
(statearr_24773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_24773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
thesis.popup.core.connect_to_background_page_BANG_ = (function thesis$popup$core$connect_to_background_page_BANG_(){
var background_port = chromex.ext.runtime.connect_STAR_.call(null,chromex.config.get_active_config.call(null),new cljs.core.Keyword(null,"omit","omit",-1917972325),new cljs.core.Keyword(null,"omit","omit",-1917972325));
chromex.protocols.post_message_BANG_.call(null,background_port,"hello from POPUP!");

return thesis.popup.core.run_message_loop_BANG_.call(null,background_port);
});
thesis.popup.core.init_BANG_ = (function thesis$popup$core$init_BANG_(){
console.log("POPUP: init");


return thesis.popup.core.connect_to_background_page_BANG_.call(null);
});

//# sourceMappingURL=core.js.map