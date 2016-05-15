// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.browser_action');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.browser_action.set_title_STAR_ = (function chromex$ext$browser_action$set_title_STAR_(config,details){
var marshalled_details_41567 = (function (){var omit_test_41571 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41571,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41571;
}
})();
var result_41566 = (function (){var final_args_array_41568 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41567,"details",null], null)], null),"chrome.browserAction.setTitle");
var ns_41569 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41572 = config;
var api_check_fn__23454__auto___41573 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41572);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41573)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41572)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41573.call(null,"chrome.browserAction.setTitle",ns_41569,"setTitle");

var config__23449__auto___41574 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41574))){
var logger__23450__auto___41575 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41574);
var prefix__23451__auto___41576 = ["calling:","chrome.browserAction.setTitle"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41575)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41574)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41575.apply(null,prefix__23451__auto___41576.concat(final_args_array_41568));
} else {
}

var target_41570 = goog.object.get(ns_41569,"setTitle");
return target_41570.apply(ns_41569,final_args_array_41568);
})();
return result_41566;
});
chromex.ext.browser_action.get_title_STAR_ = (function chromex$ext$browser_action$get_title_STAR_(config,details){
var callback_chan_41586 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_details_41588_41595 = (function (){var omit_test_41593 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41593,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41593;
}
})();
var marshalled_callback_41589_41596 = ((function (marshalled_details_41588_41595,callback_chan_41586){
return (function (cb_result_41594){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.browser-action","get-title","chromex.ext.browser-action/get-title",-1793569141),new cljs.core.Keyword(null,"name","name",1843675177),"getTitle",new cljs.core.Keyword(null,"since","since",315379842),"19",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_41586);
})().call(null,cb_result_41594);
});})(marshalled_details_41588_41595,callback_chan_41586))
;
var result_41587_41597 = (function (){var final_args_array_41590 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41588_41595,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_41589_41596,"callback",null], null)], null),"chrome.browserAction.getTitle");
var ns_41591 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41598 = config;
var api_check_fn__23454__auto___41599 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41598);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41599)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41598)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41599.call(null,"chrome.browserAction.getTitle",ns_41591,"getTitle");

var config__23449__auto___41600 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41600))){
var logger__23450__auto___41601 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41600);
var prefix__23451__auto___41602 = ["calling:","chrome.browserAction.getTitle"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41601)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41600)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41601.apply(null,prefix__23451__auto___41602.concat(final_args_array_41590));
} else {
}

var target_41592 = goog.object.get(ns_41591,"getTitle");
return target_41592.apply(ns_41591,final_args_array_41590);
})();

return callback_chan_41586;
});
chromex.ext.browser_action.set_icon_STAR_ = (function chromex$ext$browser_action$set_icon_STAR_(config,details){
var callback_chan_41611 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_details_41613_41619 = (function (){var omit_test_41618 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41618,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41618;
}
})();
var marshalled_callback_41614_41620 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.browser-action","set-icon","chromex.ext.browser-action/set-icon",532640618),new cljs.core.Keyword(null,"name","name",1843675177),"setIcon",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_41611);
})();
var result_41612_41621 = (function (){var final_args_array_41615 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41613_41619,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_41614_41620,"callback",true], null)], null),"chrome.browserAction.setIcon");
var ns_41616 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41622 = config;
var api_check_fn__23454__auto___41623 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41622);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41623)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41622)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41623.call(null,"chrome.browserAction.setIcon",ns_41616,"setIcon");

var config__23449__auto___41624 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41624))){
var logger__23450__auto___41625 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41624);
var prefix__23451__auto___41626 = ["calling:","chrome.browserAction.setIcon"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41625)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41624)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41625.apply(null,prefix__23451__auto___41626.concat(final_args_array_41615));
} else {
}

var target_41617 = goog.object.get(ns_41616,"setIcon");
return target_41617.apply(ns_41616,final_args_array_41615);
})();

return callback_chan_41611;
});
chromex.ext.browser_action.set_popup_STAR_ = (function chromex$ext$browser_action$set_popup_STAR_(config,details){
var marshalled_details_41634 = (function (){var omit_test_41638 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41638,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41638;
}
})();
var result_41633 = (function (){var final_args_array_41635 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41634,"details",null], null)], null),"chrome.browserAction.setPopup");
var ns_41636 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41639 = config;
var api_check_fn__23454__auto___41640 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41639);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41640)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41639)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41640.call(null,"chrome.browserAction.setPopup",ns_41636,"setPopup");

var config__23449__auto___41641 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41641))){
var logger__23450__auto___41642 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41641);
var prefix__23451__auto___41643 = ["calling:","chrome.browserAction.setPopup"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41642)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41641)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41642.apply(null,prefix__23451__auto___41643.concat(final_args_array_41635));
} else {
}

var target_41637 = goog.object.get(ns_41636,"setPopup");
return target_41637.apply(ns_41636,final_args_array_41635);
})();
return result_41633;
});
chromex.ext.browser_action.get_popup_STAR_ = (function chromex$ext$browser_action$get_popup_STAR_(config,details){
var callback_chan_41653 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_details_41655_41662 = (function (){var omit_test_41660 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41660,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41660;
}
})();
var marshalled_callback_41656_41663 = ((function (marshalled_details_41655_41662,callback_chan_41653){
return (function (cb_result_41661){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.browser-action","get-popup","chromex.ext.browser-action/get-popup",1686418090),new cljs.core.Keyword(null,"name","name",1843675177),"getPopup",new cljs.core.Keyword(null,"since","since",315379842),"19",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_41653);
})().call(null,cb_result_41661);
});})(marshalled_details_41655_41662,callback_chan_41653))
;
var result_41654_41664 = (function (){var final_args_array_41657 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41655_41662,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_41656_41663,"callback",null], null)], null),"chrome.browserAction.getPopup");
var ns_41658 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41665 = config;
var api_check_fn__23454__auto___41666 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41665);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41666)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41665)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41666.call(null,"chrome.browserAction.getPopup",ns_41658,"getPopup");

var config__23449__auto___41667 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41667))){
var logger__23450__auto___41668 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41667);
var prefix__23451__auto___41669 = ["calling:","chrome.browserAction.getPopup"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41668)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41667)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41668.apply(null,prefix__23451__auto___41669.concat(final_args_array_41657));
} else {
}

var target_41659 = goog.object.get(ns_41658,"getPopup");
return target_41659.apply(ns_41658,final_args_array_41657);
})();

return callback_chan_41653;
});
chromex.ext.browser_action.set_badge_text_STAR_ = (function chromex$ext$browser_action$set_badge_text_STAR_(config,details){
var marshalled_details_41677 = (function (){var omit_test_41681 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41681,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41681;
}
})();
var result_41676 = (function (){var final_args_array_41678 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41677,"details",null], null)], null),"chrome.browserAction.setBadgeText");
var ns_41679 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41682 = config;
var api_check_fn__23454__auto___41683 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41682);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41683)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41682)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41683.call(null,"chrome.browserAction.setBadgeText",ns_41679,"setBadgeText");

var config__23449__auto___41684 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41684))){
var logger__23450__auto___41685 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41684);
var prefix__23451__auto___41686 = ["calling:","chrome.browserAction.setBadgeText"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41685)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41684)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41685.apply(null,prefix__23451__auto___41686.concat(final_args_array_41678));
} else {
}

var target_41680 = goog.object.get(ns_41679,"setBadgeText");
return target_41680.apply(ns_41679,final_args_array_41678);
})();
return result_41676;
});
chromex.ext.browser_action.get_badge_text_STAR_ = (function chromex$ext$browser_action$get_badge_text_STAR_(config,details){
var callback_chan_41696 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_details_41698_41705 = (function (){var omit_test_41703 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41703,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41703;
}
})();
var marshalled_callback_41699_41706 = ((function (marshalled_details_41698_41705,callback_chan_41696){
return (function (cb_result_41704){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.browser-action","get-badge-text","chromex.ext.browser-action/get-badge-text",-1300788941),new cljs.core.Keyword(null,"name","name",1843675177),"getBadgeText",new cljs.core.Keyword(null,"since","since",315379842),"19",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_41696);
})().call(null,cb_result_41704);
});})(marshalled_details_41698_41705,callback_chan_41696))
;
var result_41697_41707 = (function (){var final_args_array_41700 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41698_41705,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_41699_41706,"callback",null], null)], null),"chrome.browserAction.getBadgeText");
var ns_41701 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41708 = config;
var api_check_fn__23454__auto___41709 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41708);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41709)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41708)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41709.call(null,"chrome.browserAction.getBadgeText",ns_41701,"getBadgeText");

var config__23449__auto___41710 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41710))){
var logger__23450__auto___41711 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41710);
var prefix__23451__auto___41712 = ["calling:","chrome.browserAction.getBadgeText"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41711)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41710)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41711.apply(null,prefix__23451__auto___41712.concat(final_args_array_41700));
} else {
}

var target_41702 = goog.object.get(ns_41701,"getBadgeText");
return target_41702.apply(ns_41701,final_args_array_41700);
})();

return callback_chan_41696;
});
chromex.ext.browser_action.set_badge_background_color_STAR_ = (function chromex$ext$browser_action$set_badge_background_color_STAR_(config,details){
var marshalled_details_41720 = (function (){var omit_test_41724 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41724,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41724;
}
})();
var result_41719 = (function (){var final_args_array_41721 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41720,"details",null], null)], null),"chrome.browserAction.setBadgeBackgroundColor");
var ns_41722 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41725 = config;
var api_check_fn__23454__auto___41726 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41725);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41726)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41725)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41726.call(null,"chrome.browserAction.setBadgeBackgroundColor",ns_41722,"setBadgeBackgroundColor");

var config__23449__auto___41727 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41727))){
var logger__23450__auto___41728 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41727);
var prefix__23451__auto___41729 = ["calling:","chrome.browserAction.setBadgeBackgroundColor"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41728)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41727)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41728.apply(null,prefix__23451__auto___41729.concat(final_args_array_41721));
} else {
}

var target_41723 = goog.object.get(ns_41722,"setBadgeBackgroundColor");
return target_41723.apply(ns_41722,final_args_array_41721);
})();
return result_41719;
});
chromex.ext.browser_action.get_badge_background_color_STAR_ = (function chromex$ext$browser_action$get_badge_background_color_STAR_(config,details){
var callback_chan_41739 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_details_41741_41748 = (function (){var omit_test_41746 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41746,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41746;
}
})();
var marshalled_callback_41742_41749 = ((function (marshalled_details_41741_41748,callback_chan_41739){
return (function (cb_result_41747){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.browser-action","get-badge-background-color","chromex.ext.browser-action/get-badge-background-color",1897769894),new cljs.core.Keyword(null,"name","name",1843675177),"getBadgeBackgroundColor",new cljs.core.Keyword(null,"since","since",315379842),"19",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"type","type",1174270348),"browserAction.ColorArray"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_41739);
})().call(null,cb_result_41747);
});})(marshalled_details_41741_41748,callback_chan_41739))
;
var result_41740_41750 = (function (){var final_args_array_41743 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_41741_41748,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_41742_41749,"callback",null], null)], null),"chrome.browserAction.getBadgeBackgroundColor");
var ns_41744 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41751 = config;
var api_check_fn__23454__auto___41752 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41751);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41752)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41751)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41752.call(null,"chrome.browserAction.getBadgeBackgroundColor",ns_41744,"getBadgeBackgroundColor");

var config__23449__auto___41753 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41753))){
var logger__23450__auto___41754 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41753);
var prefix__23451__auto___41755 = ["calling:","chrome.browserAction.getBadgeBackgroundColor"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41754)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41753)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41754.apply(null,prefix__23451__auto___41755.concat(final_args_array_41743));
} else {
}

var target_41745 = goog.object.get(ns_41744,"getBadgeBackgroundColor");
return target_41745.apply(ns_41744,final_args_array_41743);
})();

return callback_chan_41739;
});
chromex.ext.browser_action.enable_STAR_ = (function chromex$ext$browser_action$enable_STAR_(config,tab_id){
var marshalled_tab_id_41763 = (function (){var omit_test_41767 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41767,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41767;
}
})();
var result_41762 = (function (){var final_args_array_41764 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_41763,"tab-id",true], null)], null),"chrome.browserAction.enable");
var ns_41765 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41768 = config;
var api_check_fn__23454__auto___41769 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41768);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41769)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41768)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41769.call(null,"chrome.browserAction.enable",ns_41765,"enable");

var config__23449__auto___41770 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41770))){
var logger__23450__auto___41771 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41770);
var prefix__23451__auto___41772 = ["calling:","chrome.browserAction.enable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41771)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41770)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41771.apply(null,prefix__23451__auto___41772.concat(final_args_array_41764));
} else {
}

var target_41766 = goog.object.get(ns_41765,"enable");
return target_41766.apply(ns_41765,final_args_array_41764);
})();
return result_41762;
});
chromex.ext.browser_action.disable_STAR_ = (function chromex$ext$browser_action$disable_STAR_(config,tab_id){
var marshalled_tab_id_41780 = (function (){var omit_test_41784 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_41784,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_41784;
}
})();
var result_41779 = (function (){var final_args_array_41781 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_41780,"tab-id",true], null)], null),"chrome.browserAction.disable");
var ns_41782 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41785 = config;
var api_check_fn__23454__auto___41786 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41785);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41786)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41785)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41786.call(null,"chrome.browserAction.disable",ns_41782,"disable");

var config__23449__auto___41787 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41787))){
var logger__23450__auto___41788 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41787);
var prefix__23451__auto___41789 = ["calling:","chrome.browserAction.disable"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41788)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41787)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41788.apply(null,prefix__23451__auto___41789.concat(final_args_array_41781));
} else {
}

var target_41783 = goog.object.get(ns_41782,"disable");
return target_41783.apply(ns_41782,final_args_array_41781);
})();
return result_41779;
});
chromex.ext.browser_action.on_clicked_STAR_ = (function chromex$ext$browser_action$on_clicked_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___41798 = arguments.length;
var i__19488__auto___41799 = (0);
while(true){
if((i__19488__auto___41799 < len__19487__auto___41798)){
args__19494__auto__.push((arguments[i__19488__auto___41799]));

var G__41800 = (i__19488__auto___41799 + (1));
i__19488__auto___41799 = G__41800;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.browser_action.on_clicked_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.browser_action.on_clicked_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_41793 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.browser-action","on-clicked","chromex.ext.browser-action/on-clicked",1143838610),channel);
})();
var handler_fn_41794 = ((function (event_fn_41793){
return (function (cb_tab_41796){
return event_fn_41793.call(null,cb_tab_41796);
});})(event_fn_41793))
;
var logging_fn__23751__auto__ = ((function (event_fn_41793,handler_fn_41794){
return (function (cb_param_tab_41797){
var config__23449__auto___41801 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41801))){
var logger__23450__auto___41802 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___41801);
var prefix__23451__auto___41803 = ["event:","chrome.browserAction.onClicked"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___41802)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___41801)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___41802.apply(null,prefix__23451__auto___41803.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_41797], null))));
} else {
}

return handler_fn_41794.call(null,cb_param_tab_41797);
});})(event_fn_41793,handler_fn_41794))
;
var ns_obj_41795 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"browserAction");
} else {
return null;
}
})();
var config__23453__auto___41804 = config;
var api_check_fn__23454__auto___41805 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___41804);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___41805)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___41804)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___41805.call(null,"chrome.browserAction.onClicked",ns_obj_41795,"onClicked");

var event_obj__23752__auto__ = goog.object.get(ns_obj_41795,"onClicked");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.browser_action.on_clicked_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.browser_action.on_clicked_STAR_.cljs$lang$applyTo = (function (seq41790){
var G__41791 = cljs.core.first.call(null,seq41790);
var seq41790__$1 = cljs.core.next.call(null,seq41790);
var G__41792 = cljs.core.first.call(null,seq41790__$1);
var seq41790__$2 = cljs.core.next.call(null,seq41790__$1);
return chromex.ext.browser_action.on_clicked_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41791,G__41792,seq41790__$2);
});

//# sourceMappingURL=browser_action.js.map