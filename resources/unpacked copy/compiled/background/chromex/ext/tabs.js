// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.ext.tabs');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.tabs.tab_id_none_STAR_ = (function chromex$ext$tabs$tab_id_none_STAR_(config){
var result_42533 = (function (){var final_args_array_42534 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.tabs.TAB_ID_NONE");
var ns_42535 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();

var config__23449__auto___42537 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42537))){
var logger__23450__auto___42538 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42537);
var prefix__23451__auto___42539 = ["accessing:","chrome.tabs.TAB_ID_NONE"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42538)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42537)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42538.apply(null,prefix__23451__auto___42539.concat(final_args_array_42534));
} else {
}

var target_42536 = goog.object.get(ns_42535,"TAB_ID_NONE");
return target_42536;
})();
return result_42533;
});
chromex.ext.tabs.get_STAR_ = (function chromex$ext$tabs$get_STAR_(config,tab_id){
var callback_chan_42549 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_42551_42558 = (function (){var omit_test_42556 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42556,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42556;
}
})();
var marshalled_callback_42552_42559 = ((function (marshalled_tab_id_42551_42558,callback_chan_42549){
return (function (cb_tab_42557){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get","chromex.ext.tabs/get",-316093846),new cljs.core.Keyword(null,"name","name",1843675177),"get",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42549);
})().call(null,cb_tab_42557);
});})(marshalled_tab_id_42551_42558,callback_chan_42549))
;
var result_42550_42560 = (function (){var final_args_array_42553 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42551_42558,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42552_42559,"callback",null], null)], null),"chrome.tabs.get");
var ns_42554 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42561 = config;
var api_check_fn__23454__auto___42562 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42561);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42562)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42561)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42562.call(null,"chrome.tabs.get",ns_42554,"get");

var config__23449__auto___42563 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42563))){
var logger__23450__auto___42564 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42563);
var prefix__23451__auto___42565 = ["calling:","chrome.tabs.get"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42564)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42563)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42564.apply(null,prefix__23451__auto___42565.concat(final_args_array_42553));
} else {
}

var target_42555 = goog.object.get(ns_42554,"get");
return target_42555.apply(ns_42554,final_args_array_42553);
})();

return callback_chan_42549;
});
chromex.ext.tabs.get_current_STAR_ = (function chromex$ext$tabs$get_current_STAR_(config){
var callback_chan_42573 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_callback_42575_42580 = ((function (callback_chan_42573){
return (function (cb_tab_42579){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-current","chromex.ext.tabs/get-current",1123704981),new cljs.core.Keyword(null,"name","name",1843675177),"getCurrent",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42573);
})().call(null,cb_tab_42579);
});})(callback_chan_42573))
;
var result_42574_42581 = (function (){var final_args_array_42576 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42575_42580,"callback",null], null)], null),"chrome.tabs.getCurrent");
var ns_42577 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42582 = config;
var api_check_fn__23454__auto___42583 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42582);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42583)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42582)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42583.call(null,"chrome.tabs.getCurrent",ns_42577,"getCurrent");

var config__23449__auto___42584 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42584))){
var logger__23450__auto___42585 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42584);
var prefix__23451__auto___42586 = ["calling:","chrome.tabs.getCurrent"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42585)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42584)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42585.apply(null,prefix__23451__auto___42586.concat(final_args_array_42576));
} else {
}

var target_42578 = goog.object.get(ns_42577,"getCurrent");
return target_42578.apply(ns_42577,final_args_array_42576);
})();

return callback_chan_42573;
});
chromex.ext.tabs.connect_STAR_ = (function chromex$ext$tabs$connect_STAR_(config,tab_id,connect_info){
var marshalled_tab_id_42596 = (function (){var omit_test_42601 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42601,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42601;
}
})();
var marshalled_connect_info_42597 = (function (){var omit_test_42602 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42602,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42602;
}
})();
var result_42595 = (function (){var final_args_array_42598 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42596,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_42597,"connect-info",true], null)], null),"chrome.tabs.connect");
var ns_42599 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42603 = config;
var api_check_fn__23454__auto___42604 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42603);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42604)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42603)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42604.call(null,"chrome.tabs.connect",ns_42599,"connect");

var config__23449__auto___42605 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42605))){
var logger__23450__auto___42606 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42605);
var prefix__23451__auto___42607 = ["calling:","chrome.tabs.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42606)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42605)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42606.apply(null,prefix__23451__auto___42607.concat(final_args_array_42598));
} else {
}

var target_42600 = goog.object.get(ns_42599,"connect");
return target_42600.apply(ns_42599,final_args_array_42598);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_42595);
});
chromex.ext.tabs.send_request_STAR_ = (function chromex$ext$tabs$send_request_STAR_(config,tab_id,request){
var callback_chan_42619 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_42621_42630 = (function (){var omit_test_42627 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42627,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42627;
}
})();
var marshalled_request_42622_42631 = (function (){var omit_test_42628 = request;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42628,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42628;
}
})();
var marshalled_response_callback_42623_42632 = ((function (marshalled_tab_id_42621_42630,marshalled_request_42622_42631,callback_chan_42619){
return (function (cb_response_42629){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","send-request","chromex.ext.tabs/send-request",1841664260),new cljs.core.Keyword(null,"name","name",1843675177),"sendRequest",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'runtime.sendMessage'.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"request",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42619);
})().call(null,cb_response_42629);
});})(marshalled_tab_id_42621_42630,marshalled_request_42622_42631,callback_chan_42619))
;
var result_42620_42633 = (function (){var final_args_array_42624 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42621_42630,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_request_42622_42631,"request",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_42623_42632,"response-callback",true], null)], null),"chrome.tabs.sendRequest");
var ns_42625 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42634 = config;
var api_check_fn__23454__auto___42635 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42634);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42635)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42634)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42635.call(null,"chrome.tabs.sendRequest",ns_42625,"sendRequest");

var config__23449__auto___42636 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42636))){
var logger__23450__auto___42637 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42636);
var prefix__23451__auto___42638 = ["calling:","chrome.tabs.sendRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42637)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42636)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42637.apply(null,prefix__23451__auto___42638.concat(final_args_array_42624));
} else {
}

var target_42626 = goog.object.get(ns_42625,"sendRequest");
return target_42626.apply(ns_42625,final_args_array_42624);
})();

return callback_chan_42619;
});
chromex.ext.tabs.send_message_STAR_ = (function chromex$ext$tabs$send_message_STAR_(config,tab_id,message,options){
var callback_chan_42652 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_42654_42665 = (function (){var omit_test_42661 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42661,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42661;
}
})();
var marshalled_message_42655_42666 = (function (){var omit_test_42662 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42662,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42662;
}
})();
var marshalled_options_42656_42667 = (function (){var omit_test_42663 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42663,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42663;
}
})();
var marshalled_response_callback_42657_42668 = ((function (marshalled_tab_id_42654_42665,marshalled_message_42655_42666,marshalled_options_42656_42667,callback_chan_42652){
return (function (cb_response_42664){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","send-message","chromex.ext.tabs/send-message",852348520),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"20",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42652);
})().call(null,cb_response_42664);
});})(marshalled_tab_id_42654_42665,marshalled_message_42655_42666,marshalled_options_42656_42667,callback_chan_42652))
;
var result_42653_42669 = (function (){var final_args_array_42658 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42654_42665,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_42655_42666,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_42656_42667,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_42657_42668,"response-callback",true], null)], null),"chrome.tabs.sendMessage");
var ns_42659 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42670 = config;
var api_check_fn__23454__auto___42671 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42670);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42671)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42670)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42671.call(null,"chrome.tabs.sendMessage",ns_42659,"sendMessage");

var config__23449__auto___42672 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42672))){
var logger__23450__auto___42673 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42672);
var prefix__23451__auto___42674 = ["calling:","chrome.tabs.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42673)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42672)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42673.apply(null,prefix__23451__auto___42674.concat(final_args_array_42658));
} else {
}

var target_42660 = goog.object.get(ns_42659,"sendMessage");
return target_42660.apply(ns_42659,final_args_array_42658);
})();

return callback_chan_42652;
});
chromex.ext.tabs.get_selected_STAR_ = (function chromex$ext$tabs$get_selected_STAR_(config,window_id){
var callback_chan_42684 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_window_id_42686_42693 = (function (){var omit_test_42691 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42691,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42691;
}
})();
var marshalled_callback_42687_42694 = ((function (marshalled_window_id_42686_42693,callback_chan_42684){
return (function (cb_tab_42692){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-selected","chromex.ext.tabs/get-selected",703911016),new cljs.core.Keyword(null,"name","name",1843675177),"getSelected",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'tabs.query' {active: true}.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"window-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42684);
})().call(null,cb_tab_42692);
});})(marshalled_window_id_42686_42693,callback_chan_42684))
;
var result_42685_42695 = (function (){var final_args_array_42688 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_42686_42693,"window-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42687_42694,"callback",null], null)], null),"chrome.tabs.getSelected");
var ns_42689 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42696 = config;
var api_check_fn__23454__auto___42697 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42696);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42697)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42696)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42697.call(null,"chrome.tabs.getSelected",ns_42689,"getSelected");

var config__23449__auto___42698 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42698))){
var logger__23450__auto___42699 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42698);
var prefix__23451__auto___42700 = ["calling:","chrome.tabs.getSelected"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42699)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42698)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42699.apply(null,prefix__23451__auto___42700.concat(final_args_array_42688));
} else {
}

var target_42690 = goog.object.get(ns_42689,"getSelected");
return target_42690.apply(ns_42689,final_args_array_42688);
})();

return callback_chan_42684;
});
chromex.ext.tabs.get_all_in_window_STAR_ = (function chromex$ext$tabs$get_all_in_window_STAR_(config,window_id){
var callback_chan_42710 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_window_id_42712_42719 = (function (){var omit_test_42717 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42717,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42717;
}
})();
var marshalled_callback_42713_42720 = ((function (marshalled_window_id_42712_42719,callback_chan_42710){
return (function (cb_tabs_42718){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-all-in-window","chromex.ext.tabs/get-all-in-window",-1792427692),new cljs.core.Keyword(null,"name","name",1843675177),"getAllInWindow",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'tabs.query' {windowId: windowId}.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"window-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs",new cljs.core.Keyword(null,"type","type",1174270348),"[array-of-tabs.Tabs]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42710);
})().call(null,cb_tabs_42718);
});})(marshalled_window_id_42712_42719,callback_chan_42710))
;
var result_42711_42721 = (function (){var final_args_array_42714 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_42712_42719,"window-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42713_42720,"callback",null], null)], null),"chrome.tabs.getAllInWindow");
var ns_42715 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42722 = config;
var api_check_fn__23454__auto___42723 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42722);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42723)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42722)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42723.call(null,"chrome.tabs.getAllInWindow",ns_42715,"getAllInWindow");

var config__23449__auto___42724 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42724))){
var logger__23450__auto___42725 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42724);
var prefix__23451__auto___42726 = ["calling:","chrome.tabs.getAllInWindow"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42725)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42724)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42725.apply(null,prefix__23451__auto___42726.concat(final_args_array_42714));
} else {
}

var target_42716 = goog.object.get(ns_42715,"getAllInWindow");
return target_42716.apply(ns_42715,final_args_array_42714);
})();

return callback_chan_42710;
});
chromex.ext.tabs.create_STAR_ = (function chromex$ext$tabs$create_STAR_(config,create_properties){
var callback_chan_42736 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_create_properties_42738_42745 = (function (){var omit_test_42743 = create_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42743,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42743;
}
})();
var marshalled_callback_42739_42746 = ((function (marshalled_create_properties_42738_42745,callback_chan_42736){
return (function (cb_tab_42744){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","create","chromex.ext.tabs/create",977742829),new cljs.core.Keyword(null,"name","name",1843675177),"create",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"create-properties",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42736);
})().call(null,cb_tab_42744);
});})(marshalled_create_properties_42738_42745,callback_chan_42736))
;
var result_42737_42747 = (function (){var final_args_array_42740 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_create_properties_42738_42745,"create-properties",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42739_42746,"callback",true], null)], null),"chrome.tabs.create");
var ns_42741 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42748 = config;
var api_check_fn__23454__auto___42749 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42748);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42749)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42748)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42749.call(null,"chrome.tabs.create",ns_42741,"create");

var config__23449__auto___42750 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42750))){
var logger__23450__auto___42751 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42750);
var prefix__23451__auto___42752 = ["calling:","chrome.tabs.create"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42751)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42750)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42751.apply(null,prefix__23451__auto___42752.concat(final_args_array_42740));
} else {
}

var target_42742 = goog.object.get(ns_42741,"create");
return target_42742.apply(ns_42741,final_args_array_42740);
})();

return callback_chan_42736;
});
chromex.ext.tabs.duplicate_STAR_ = (function chromex$ext$tabs$duplicate_STAR_(config,tab_id){
var callback_chan_42762 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_42764_42771 = (function (){var omit_test_42769 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42769,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42769;
}
})();
var marshalled_callback_42765_42772 = ((function (marshalled_tab_id_42764_42771,callback_chan_42762){
return (function (cb_tab_42770){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","duplicate","chromex.ext.tabs/duplicate",-2107191215),new cljs.core.Keyword(null,"name","name",1843675177),"duplicate",new cljs.core.Keyword(null,"since","since",315379842),"23",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42762);
})().call(null,cb_tab_42770);
});})(marshalled_tab_id_42764_42771,callback_chan_42762))
;
var result_42763_42773 = (function (){var final_args_array_42766 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42764_42771,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42765_42772,"callback",true], null)], null),"chrome.tabs.duplicate");
var ns_42767 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42774 = config;
var api_check_fn__23454__auto___42775 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42774);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42775)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42774)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42775.call(null,"chrome.tabs.duplicate",ns_42767,"duplicate");

var config__23449__auto___42776 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42776))){
var logger__23450__auto___42777 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42776);
var prefix__23451__auto___42778 = ["calling:","chrome.tabs.duplicate"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42777)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42776)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42777.apply(null,prefix__23451__auto___42778.concat(final_args_array_42766));
} else {
}

var target_42768 = goog.object.get(ns_42767,"duplicate");
return target_42768.apply(ns_42767,final_args_array_42766);
})();

return callback_chan_42762;
});
chromex.ext.tabs.query_STAR_ = (function chromex$ext$tabs$query_STAR_(config,query_info){
var callback_chan_42788 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_query_info_42790_42797 = (function (){var omit_test_42795 = query_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42795,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42795;
}
})();
var marshalled_callback_42791_42798 = ((function (marshalled_query_info_42790_42797,callback_chan_42788){
return (function (cb_result_42796){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","query","chromex.ext.tabs/query",994669091),new cljs.core.Keyword(null,"name","name",1843675177),"query",new cljs.core.Keyword(null,"since","since",315379842),"16",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"query-info",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"type","type",1174270348),"[array-of-tabs.Tabs]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42788);
})().call(null,cb_result_42796);
});})(marshalled_query_info_42790_42797,callback_chan_42788))
;
var result_42789_42799 = (function (){var final_args_array_42792 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_query_info_42790_42797,"query-info",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42791_42798,"callback",null], null)], null),"chrome.tabs.query");
var ns_42793 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42800 = config;
var api_check_fn__23454__auto___42801 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42800);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42801)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42800)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42801.call(null,"chrome.tabs.query",ns_42793,"query");

var config__23449__auto___42802 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42802))){
var logger__23450__auto___42803 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42802);
var prefix__23451__auto___42804 = ["calling:","chrome.tabs.query"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42803)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42802)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42803.apply(null,prefix__23451__auto___42804.concat(final_args_array_42792));
} else {
}

var target_42794 = goog.object.get(ns_42793,"query");
return target_42794.apply(ns_42793,final_args_array_42792);
})();

return callback_chan_42788;
});
chromex.ext.tabs.highlight_STAR_ = (function chromex$ext$tabs$highlight_STAR_(config,highlight_info){
var callback_chan_42814 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_highlight_info_42816_42823 = (function (){var omit_test_42821 = highlight_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42821,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42821;
}
})();
var marshalled_callback_42817_42824 = ((function (marshalled_highlight_info_42816_42823,callback_chan_42814){
return (function (cb_window_42822){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","highlight","chromex.ext.tabs/highlight",1227370148),new cljs.core.Keyword(null,"name","name",1843675177),"highlight",new cljs.core.Keyword(null,"since","since",315379842),"16",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"highlight-info",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"window",new cljs.core.Keyword(null,"type","type",1174270348),"windows.Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42814);
})().call(null,cb_window_42822);
});})(marshalled_highlight_info_42816_42823,callback_chan_42814))
;
var result_42815_42825 = (function (){var final_args_array_42818 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_highlight_info_42816_42823,"highlight-info",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42817_42824,"callback",true], null)], null),"chrome.tabs.highlight");
var ns_42819 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42826 = config;
var api_check_fn__23454__auto___42827 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42826);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42827)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42826)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42827.call(null,"chrome.tabs.highlight",ns_42819,"highlight");

var config__23449__auto___42828 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42828))){
var logger__23450__auto___42829 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42828);
var prefix__23451__auto___42830 = ["calling:","chrome.tabs.highlight"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42829)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42828)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42829.apply(null,prefix__23451__auto___42830.concat(final_args_array_42818));
} else {
}

var target_42820 = goog.object.get(ns_42819,"highlight");
return target_42820.apply(ns_42819,final_args_array_42818);
})();

return callback_chan_42814;
});
chromex.ext.tabs.update_STAR_ = (function chromex$ext$tabs$update_STAR_(config,tab_id,update_properties){
var callback_chan_42842 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_42844_42853 = (function (){var omit_test_42850 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42850,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42850;
}
})();
var marshalled_update_properties_42845_42854 = (function (){var omit_test_42851 = update_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42851,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42851;
}
})();
var marshalled_callback_42846_42855 = ((function (marshalled_tab_id_42844_42853,marshalled_update_properties_42845_42854,callback_chan_42842){
return (function (cb_tab_42852){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","update","chromex.ext.tabs/update",-965021465),new cljs.core.Keyword(null,"name","name",1843675177),"update",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"update-properties",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42842);
})().call(null,cb_tab_42852);
});})(marshalled_tab_id_42844_42853,marshalled_update_properties_42845_42854,callback_chan_42842))
;
var result_42843_42856 = (function (){var final_args_array_42847 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42844_42853,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_update_properties_42845_42854,"update-properties",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42846_42855,"callback",true], null)], null),"chrome.tabs.update");
var ns_42848 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42857 = config;
var api_check_fn__23454__auto___42858 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42857);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42858)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42857)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42858.call(null,"chrome.tabs.update",ns_42848,"update");

var config__23449__auto___42859 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42859))){
var logger__23450__auto___42860 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42859);
var prefix__23451__auto___42861 = ["calling:","chrome.tabs.update"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42860)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42859)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42860.apply(null,prefix__23451__auto___42861.concat(final_args_array_42847));
} else {
}

var target_42849 = goog.object.get(ns_42848,"update");
return target_42849.apply(ns_42848,final_args_array_42847);
})();

return callback_chan_42842;
});
chromex.ext.tabs.move_STAR_ = (function chromex$ext$tabs$move_STAR_(config,tab_ids,move_properties){
var callback_chan_42873 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_ids_42875_42884 = (function (){var omit_test_42881 = tab_ids;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42881,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42881;
}
})();
var marshalled_move_properties_42876_42885 = (function (){var omit_test_42882 = move_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42882,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42882;
}
})();
var marshalled_callback_42877_42886 = ((function (marshalled_tab_ids_42875_42884,marshalled_move_properties_42876_42885,callback_chan_42873){
return (function (cb_tabs_42883){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","move","chromex.ext.tabs/move",434564936),new cljs.core.Keyword(null,"name","name",1843675177),"move",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-ids",new cljs.core.Keyword(null,"type","type",1174270348),"integer-or-[array-of-integers]"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"move-properties",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab-or-[array-of-tabs.Tabs]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42873);
})().call(null,cb_tabs_42883);
});})(marshalled_tab_ids_42875_42884,marshalled_move_properties_42876_42885,callback_chan_42873))
;
var result_42874_42887 = (function (){var final_args_array_42878 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_ids_42875_42884,"tab-ids",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_move_properties_42876_42885,"move-properties",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42877_42886,"callback",true], null)], null),"chrome.tabs.move");
var ns_42879 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42888 = config;
var api_check_fn__23454__auto___42889 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42888);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42889)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42888)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42889.call(null,"chrome.tabs.move",ns_42879,"move");

var config__23449__auto___42890 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42890))){
var logger__23450__auto___42891 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42890);
var prefix__23451__auto___42892 = ["calling:","chrome.tabs.move"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42891)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42890)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42891.apply(null,prefix__23451__auto___42892.concat(final_args_array_42878));
} else {
}

var target_42880 = goog.object.get(ns_42879,"move");
return target_42880.apply(ns_42879,final_args_array_42878);
})();

return callback_chan_42873;
});
chromex.ext.tabs.reload_STAR_ = (function chromex$ext$tabs$reload_STAR_(config,tab_id,reload_properties){
var callback_chan_42903 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_42905_42913 = (function (){var omit_test_42911 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42911,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42911;
}
})();
var marshalled_reload_properties_42906_42914 = (function (){var omit_test_42912 = reload_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42912,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42912;
}
})();
var marshalled_callback_42907_42915 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","reload","chromex.ext.tabs/reload",-1146320662),new cljs.core.Keyword(null,"name","name",1843675177),"reload",new cljs.core.Keyword(null,"since","since",315379842),"16",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"reload-properties",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42903);
})();
var result_42904_42916 = (function (){var final_args_array_42908 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42905_42913,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_reload_properties_42906_42914,"reload-properties",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42907_42915,"callback",true], null)], null),"chrome.tabs.reload");
var ns_42909 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42917 = config;
var api_check_fn__23454__auto___42918 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42917);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42918)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42917)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42918.call(null,"chrome.tabs.reload",ns_42909,"reload");

var config__23449__auto___42919 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42919))){
var logger__23450__auto___42920 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42919);
var prefix__23451__auto___42921 = ["calling:","chrome.tabs.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42920)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42919)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42920.apply(null,prefix__23451__auto___42921.concat(final_args_array_42908));
} else {
}

var target_42910 = goog.object.get(ns_42909,"reload");
return target_42910.apply(ns_42909,final_args_array_42908);
})();

return callback_chan_42903;
});
chromex.ext.tabs.remove_STAR_ = (function chromex$ext$tabs$remove_STAR_(config,tab_ids){
var callback_chan_42930 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_ids_42932_42938 = (function (){var omit_test_42937 = tab_ids;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42937,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42937;
}
})();
var marshalled_callback_42933_42939 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","remove","chromex.ext.tabs/remove",1073817227),new cljs.core.Keyword(null,"name","name",1843675177),"remove",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-ids",new cljs.core.Keyword(null,"type","type",1174270348),"integer-or-[array-of-integers]"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42930);
})();
var result_42931_42940 = (function (){var final_args_array_42934 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_ids_42932_42938,"tab-ids",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42933_42939,"callback",true], null)], null),"chrome.tabs.remove");
var ns_42935 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42941 = config;
var api_check_fn__23454__auto___42942 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42941);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42942)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42941)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42942.call(null,"chrome.tabs.remove",ns_42935,"remove");

var config__23449__auto___42943 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42943))){
var logger__23450__auto___42944 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42943);
var prefix__23451__auto___42945 = ["calling:","chrome.tabs.remove"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42944)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42943)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42944.apply(null,prefix__23451__auto___42945.concat(final_args_array_42934));
} else {
}

var target_42936 = goog.object.get(ns_42935,"remove");
return target_42936.apply(ns_42935,final_args_array_42934);
})();

return callback_chan_42930;
});
chromex.ext.tabs.detect_language_STAR_ = (function chromex$ext$tabs$detect_language_STAR_(config,tab_id){
var callback_chan_42955 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_42957_42964 = (function (){var omit_test_42962 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42962,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42962;
}
})();
var marshalled_callback_42958_42965 = ((function (marshalled_tab_id_42957_42964,callback_chan_42955){
return (function (cb_language_42963){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","detect-language","chromex.ext.tabs/detect-language",803336595),new cljs.core.Keyword(null,"name","name",1843675177),"detectLanguage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"language",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42955);
})().call(null,cb_language_42963);
});})(marshalled_tab_id_42957_42964,callback_chan_42955))
;
var result_42956_42966 = (function (){var final_args_array_42959 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_42957_42964,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42958_42965,"callback",null], null)], null),"chrome.tabs.detectLanguage");
var ns_42960 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42967 = config;
var api_check_fn__23454__auto___42968 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42967);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42968)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42967)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42968.call(null,"chrome.tabs.detectLanguage",ns_42960,"detectLanguage");

var config__23449__auto___42969 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42969))){
var logger__23450__auto___42970 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___42969);
var prefix__23451__auto___42971 = ["calling:","chrome.tabs.detectLanguage"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___42970)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___42969)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___42970.apply(null,prefix__23451__auto___42971.concat(final_args_array_42959));
} else {
}

var target_42961 = goog.object.get(ns_42960,"detectLanguage");
return target_42961.apply(ns_42960,final_args_array_42959);
})();

return callback_chan_42955;
});
chromex.ext.tabs.capture_visible_tab_STAR_ = (function chromex$ext$tabs$capture_visible_tab_STAR_(config,window_id,options){
var callback_chan_42983 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_window_id_42985_42994 = (function (){var omit_test_42991 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42991,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42991;
}
})();
var marshalled_options_42986_42995 = (function (){var omit_test_42992 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_42992,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_42992;
}
})();
var marshalled_callback_42987_42996 = ((function (marshalled_window_id_42985_42994,marshalled_options_42986_42995,callback_chan_42983){
return (function (cb_data_url_42993){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","capture-visible-tab","chromex.ext.tabs/capture-visible-tab",-1662122182),new cljs.core.Keyword(null,"name","name",1843675177),"captureVisibleTab",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"window-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"data-url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_42983);
})().call(null,cb_data_url_42993);
});})(marshalled_window_id_42985_42994,marshalled_options_42986_42995,callback_chan_42983))
;
var result_42984_42997 = (function (){var final_args_array_42988 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_42985_42994,"window-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_42986_42995,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_42987_42996,"callback",null], null)], null),"chrome.tabs.captureVisibleTab");
var ns_42989 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___42998 = config;
var api_check_fn__23454__auto___42999 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___42998);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___42999)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___42998)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___42999.call(null,"chrome.tabs.captureVisibleTab",ns_42989,"captureVisibleTab");

var config__23449__auto___43000 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43000))){
var logger__23450__auto___43001 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43000);
var prefix__23451__auto___43002 = ["calling:","chrome.tabs.captureVisibleTab"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43001)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43000)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43001.apply(null,prefix__23451__auto___43002.concat(final_args_array_42988));
} else {
}

var target_42990 = goog.object.get(ns_42989,"captureVisibleTab");
return target_42990.apply(ns_42989,final_args_array_42988);
})();

return callback_chan_42983;
});
chromex.ext.tabs.execute_script_STAR_ = (function chromex$ext$tabs$execute_script_STAR_(config,tab_id,details){
var callback_chan_43014 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_43016_43025 = (function (){var omit_test_43022 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43022,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43022;
}
})();
var marshalled_details_43017_43026 = (function (){var omit_test_43023 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43023,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43023;
}
})();
var marshalled_callback_43018_43027 = ((function (marshalled_tab_id_43016_43025,marshalled_details_43017_43026,callback_chan_43014){
return (function (cb_result_43024){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","execute-script","chromex.ext.tabs/execute-script",-648872434),new cljs.core.Keyword(null,"name","name",1843675177),"executeScript",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"[array-of-anys]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_43014);
})().call(null,cb_result_43024);
});})(marshalled_tab_id_43016_43025,marshalled_details_43017_43026,callback_chan_43014))
;
var result_43015_43028 = (function (){var final_args_array_43019 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_43016_43025,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_43017_43026,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_43018_43027,"callback",true], null)], null),"chrome.tabs.executeScript");
var ns_43020 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43029 = config;
var api_check_fn__23454__auto___43030 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43029);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43030)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43029)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43030.call(null,"chrome.tabs.executeScript",ns_43020,"executeScript");

var config__23449__auto___43031 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43031))){
var logger__23450__auto___43032 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43031);
var prefix__23451__auto___43033 = ["calling:","chrome.tabs.executeScript"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43032)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43031)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43032.apply(null,prefix__23451__auto___43033.concat(final_args_array_43019));
} else {
}

var target_43021 = goog.object.get(ns_43020,"executeScript");
return target_43021.apply(ns_43020,final_args_array_43019);
})();

return callback_chan_43014;
});
chromex.ext.tabs.insert_css_STAR_ = (function chromex$ext$tabs$insert_css_STAR_(config,tab_id,details){
var callback_chan_43044 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_43046_43054 = (function (){var omit_test_43052 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43052,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43052;
}
})();
var marshalled_details_43047_43055 = (function (){var omit_test_43053 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43053,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43053;
}
})();
var marshalled_callback_43048_43056 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","insert-css","chromex.ext.tabs/insert-css",-2032426194),new cljs.core.Keyword(null,"name","name",1843675177),"insertCSS",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_43044);
})();
var result_43045_43057 = (function (){var final_args_array_43049 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_43046_43054,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_43047_43055,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_43048_43056,"callback",true], null)], null),"chrome.tabs.insertCSS");
var ns_43050 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43058 = config;
var api_check_fn__23454__auto___43059 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43058);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43059)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43058)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43059.call(null,"chrome.tabs.insertCSS",ns_43050,"insertCSS");

var config__23449__auto___43060 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43060))){
var logger__23450__auto___43061 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43060);
var prefix__23451__auto___43062 = ["calling:","chrome.tabs.insertCSS"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43061)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43060)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43061.apply(null,prefix__23451__auto___43062.concat(final_args_array_43049));
} else {
}

var target_43051 = goog.object.get(ns_43050,"insertCSS");
return target_43051.apply(ns_43050,final_args_array_43049);
})();

return callback_chan_43044;
});
chromex.ext.tabs.set_zoom_STAR_ = (function chromex$ext$tabs$set_zoom_STAR_(config,tab_id,zoom_factor){
var callback_chan_43073 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_43075_43083 = (function (){var omit_test_43081 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43081,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43081;
}
})();
var marshalled_zoom_factor_43076_43084 = (function (){var omit_test_43082 = zoom_factor;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43082,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43082;
}
})();
var marshalled_callback_43077_43085 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","set-zoom","chromex.ext.tabs/set-zoom",1740190670),new cljs.core.Keyword(null,"name","name",1843675177),"setZoom",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-factor",new cljs.core.Keyword(null,"type","type",1174270348),"double"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_43073);
})();
var result_43074_43086 = (function (){var final_args_array_43078 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_43075_43083,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_zoom_factor_43076_43084,"zoom-factor",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_43077_43085,"callback",true], null)], null),"chrome.tabs.setZoom");
var ns_43079 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43087 = config;
var api_check_fn__23454__auto___43088 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43087);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43088)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43087)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43088.call(null,"chrome.tabs.setZoom",ns_43079,"setZoom");

var config__23449__auto___43089 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43089))){
var logger__23450__auto___43090 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43089);
var prefix__23451__auto___43091 = ["calling:","chrome.tabs.setZoom"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43090)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43089)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43090.apply(null,prefix__23451__auto___43091.concat(final_args_array_43078));
} else {
}

var target_43080 = goog.object.get(ns_43079,"setZoom");
return target_43080.apply(ns_43079,final_args_array_43078);
})();

return callback_chan_43073;
});
chromex.ext.tabs.get_zoom_STAR_ = (function chromex$ext$tabs$get_zoom_STAR_(config,tab_id){
var callback_chan_43101 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_43103_43110 = (function (){var omit_test_43108 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43108,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43108;
}
})();
var marshalled_callback_43104_43111 = ((function (marshalled_tab_id_43103_43110,callback_chan_43101){
return (function (cb_zoom_factor_43109){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-zoom","chromex.ext.tabs/get-zoom",747134311),new cljs.core.Keyword(null,"name","name",1843675177),"getZoom",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-factor",new cljs.core.Keyword(null,"type","type",1174270348),"double"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_43101);
})().call(null,cb_zoom_factor_43109);
});})(marshalled_tab_id_43103_43110,callback_chan_43101))
;
var result_43102_43112 = (function (){var final_args_array_43105 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_43103_43110,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_43104_43111,"callback",null], null)], null),"chrome.tabs.getZoom");
var ns_43106 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43113 = config;
var api_check_fn__23454__auto___43114 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43113);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43114)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43113)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43114.call(null,"chrome.tabs.getZoom",ns_43106,"getZoom");

var config__23449__auto___43115 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43115))){
var logger__23450__auto___43116 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43115);
var prefix__23451__auto___43117 = ["calling:","chrome.tabs.getZoom"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43116)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43115)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43116.apply(null,prefix__23451__auto___43117.concat(final_args_array_43105));
} else {
}

var target_43107 = goog.object.get(ns_43106,"getZoom");
return target_43107.apply(ns_43106,final_args_array_43105);
})();

return callback_chan_43101;
});
chromex.ext.tabs.set_zoom_settings_STAR_ = (function chromex$ext$tabs$set_zoom_settings_STAR_(config,tab_id,zoom_settings){
var callback_chan_43128 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_43130_43138 = (function (){var omit_test_43136 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43136,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43136;
}
})();
var marshalled_zoom_settings_43131_43139 = (function (){var omit_test_43137 = zoom_settings;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43137,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43137;
}
})();
var marshalled_callback_43132_43140 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","set-zoom-settings","chromex.ext.tabs/set-zoom-settings",-1121343767),new cljs.core.Keyword(null,"name","name",1843675177),"setZoomSettings",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-settings",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.ZoomSettings"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_43128);
})();
var result_43129_43141 = (function (){var final_args_array_43133 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_43130_43138,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_zoom_settings_43131_43139,"zoom-settings",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_43132_43140,"callback",true], null)], null),"chrome.tabs.setZoomSettings");
var ns_43134 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43142 = config;
var api_check_fn__23454__auto___43143 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43142);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43143)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43142)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43143.call(null,"chrome.tabs.setZoomSettings",ns_43134,"setZoomSettings");

var config__23449__auto___43144 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43144))){
var logger__23450__auto___43145 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43144);
var prefix__23451__auto___43146 = ["calling:","chrome.tabs.setZoomSettings"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43145)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43144)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43145.apply(null,prefix__23451__auto___43146.concat(final_args_array_43133));
} else {
}

var target_43135 = goog.object.get(ns_43134,"setZoomSettings");
return target_43135.apply(ns_43134,final_args_array_43133);
})();

return callback_chan_43128;
});
chromex.ext.tabs.get_zoom_settings_STAR_ = (function chromex$ext$tabs$get_zoom_settings_STAR_(config,tab_id){
var callback_chan_43156 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__);
})();
var marshalled_tab_id_43158_43165 = (function (){var omit_test_43163 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_43163,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_43163;
}
})();
var marshalled_callback_43159_43166 = ((function (marshalled_tab_id_43158_43165,callback_chan_43156){
return (function (cb_zoom_settings_43164){
return (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-zoom-settings","chromex.ext.tabs/get-zoom-settings",-585298770),new cljs.core.Keyword(null,"name","name",1843675177),"getZoomSettings",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-settings",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.ZoomSettings"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_43156);
})().call(null,cb_zoom_settings_43164);
});})(marshalled_tab_id_43158_43165,callback_chan_43156))
;
var result_43157_43167 = (function (){var final_args_array_43160 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_43158_43165,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_43159_43166,"callback",null], null)], null),"chrome.tabs.getZoomSettings");
var ns_43161 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43168 = config;
var api_check_fn__23454__auto___43169 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43168);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43169)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43168)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43169.call(null,"chrome.tabs.getZoomSettings",ns_43161,"getZoomSettings");

var config__23449__auto___43170 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43170))){
var logger__23450__auto___43171 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43170);
var prefix__23451__auto___43172 = ["calling:","chrome.tabs.getZoomSettings"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43171)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43170)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43171.apply(null,prefix__23451__auto___43172.concat(final_args_array_43160));
} else {
}

var target_43162 = goog.object.get(ns_43161,"getZoomSettings");
return target_43162.apply(ns_43161,final_args_array_43160);
})();

return callback_chan_43156;
});
chromex.ext.tabs.on_created_STAR_ = (function chromex$ext$tabs$on_created_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43181 = arguments.length;
var i__19488__auto___43182 = (0);
while(true){
if((i__19488__auto___43182 < len__19487__auto___43181)){
args__19494__auto__.push((arguments[i__19488__auto___43182]));

var G__43183 = (i__19488__auto___43182 + (1));
i__19488__auto___43182 = G__43183;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_created_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_created_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43176 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-created","chromex.ext.tabs/on-created",234051309),channel);
})();
var handler_fn_43177 = ((function (event_fn_43176){
return (function (cb_tab_43179){
return event_fn_43176.call(null,cb_tab_43179);
});})(event_fn_43176))
;
var logging_fn__23751__auto__ = ((function (event_fn_43176,handler_fn_43177){
return (function (cb_param_tab_43180){
var config__23449__auto___43184 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43184))){
var logger__23450__auto___43185 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43184);
var prefix__23451__auto___43186 = ["event:","chrome.tabs.onCreated"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43185)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43184)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43185.apply(null,prefix__23451__auto___43186.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_43180], null))));
} else {
}

return handler_fn_43177.call(null,cb_param_tab_43180);
});})(event_fn_43176,handler_fn_43177))
;
var ns_obj_43178 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43187 = config;
var api_check_fn__23454__auto___43188 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43187);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43188)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43187)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43188.call(null,"chrome.tabs.onCreated",ns_obj_43178,"onCreated");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43178,"onCreated");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_created_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_created_STAR_.cljs$lang$applyTo = (function (seq43173){
var G__43174 = cljs.core.first.call(null,seq43173);
var seq43173__$1 = cljs.core.next.call(null,seq43173);
var G__43175 = cljs.core.first.call(null,seq43173__$1);
var seq43173__$2 = cljs.core.next.call(null,seq43173__$1);
return chromex.ext.tabs.on_created_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43174,G__43175,seq43173__$2);
});
chromex.ext.tabs.on_updated_STAR_ = (function chromex$ext$tabs$on_updated_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43201 = arguments.length;
var i__19488__auto___43202 = (0);
while(true){
if((i__19488__auto___43202 < len__19487__auto___43201)){
args__19494__auto__.push((arguments[i__19488__auto___43202]));

var G__43203 = (i__19488__auto___43202 + (1));
i__19488__auto___43202 = G__43203;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_updated_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_updated_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43192 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-updated","chromex.ext.tabs/on-updated",513718938),channel);
})();
var handler_fn_43193 = ((function (event_fn_43192){
return (function (cb_tab_id_43195,cb_change_info_43196,cb_tab_43197){
return event_fn_43192.call(null,cb_tab_id_43195,cb_change_info_43196,cb_tab_43197);
});})(event_fn_43192))
;
var logging_fn__23751__auto__ = ((function (event_fn_43192,handler_fn_43193){
return (function (cb_param_tab_id_43198,cb_param_change_info_43199,cb_param_tab_43200){
var config__23449__auto___43204 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43204))){
var logger__23450__auto___43205 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43204);
var prefix__23451__auto___43206 = ["event:","chrome.tabs.onUpdated"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43205)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43204)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43205.apply(null,prefix__23451__auto___43206.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_43198,cb_param_change_info_43199,cb_param_tab_43200], null))));
} else {
}

return handler_fn_43193.call(null,cb_param_tab_id_43198,cb_param_change_info_43199,cb_param_tab_43200);
});})(event_fn_43192,handler_fn_43193))
;
var ns_obj_43194 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43207 = config;
var api_check_fn__23454__auto___43208 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43207);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43208)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43207)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43208.call(null,"chrome.tabs.onUpdated",ns_obj_43194,"onUpdated");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43194,"onUpdated");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_updated_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_updated_STAR_.cljs$lang$applyTo = (function (seq43189){
var G__43190 = cljs.core.first.call(null,seq43189);
var seq43189__$1 = cljs.core.next.call(null,seq43189);
var G__43191 = cljs.core.first.call(null,seq43189__$1);
var seq43189__$2 = cljs.core.next.call(null,seq43189__$1);
return chromex.ext.tabs.on_updated_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43190,G__43191,seq43189__$2);
});
chromex.ext.tabs.on_moved_STAR_ = (function chromex$ext$tabs$on_moved_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43219 = arguments.length;
var i__19488__auto___43220 = (0);
while(true){
if((i__19488__auto___43220 < len__19487__auto___43219)){
args__19494__auto__.push((arguments[i__19488__auto___43220]));

var G__43221 = (i__19488__auto___43220 + (1));
i__19488__auto___43220 = G__43221;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_moved_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_moved_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43212 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-moved","chromex.ext.tabs/on-moved",-680724148),channel);
})();
var handler_fn_43213 = ((function (event_fn_43212){
return (function (cb_tab_id_43215,cb_move_info_43216){
return event_fn_43212.call(null,cb_tab_id_43215,cb_move_info_43216);
});})(event_fn_43212))
;
var logging_fn__23751__auto__ = ((function (event_fn_43212,handler_fn_43213){
return (function (cb_param_tab_id_43217,cb_param_move_info_43218){
var config__23449__auto___43222 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43222))){
var logger__23450__auto___43223 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43222);
var prefix__23451__auto___43224 = ["event:","chrome.tabs.onMoved"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43223)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43222)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43223.apply(null,prefix__23451__auto___43224.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_43217,cb_param_move_info_43218], null))));
} else {
}

return handler_fn_43213.call(null,cb_param_tab_id_43217,cb_param_move_info_43218);
});})(event_fn_43212,handler_fn_43213))
;
var ns_obj_43214 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43225 = config;
var api_check_fn__23454__auto___43226 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43225);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43226)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43225)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43226.call(null,"chrome.tabs.onMoved",ns_obj_43214,"onMoved");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43214,"onMoved");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_moved_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_moved_STAR_.cljs$lang$applyTo = (function (seq43209){
var G__43210 = cljs.core.first.call(null,seq43209);
var seq43209__$1 = cljs.core.next.call(null,seq43209);
var G__43211 = cljs.core.first.call(null,seq43209__$1);
var seq43209__$2 = cljs.core.next.call(null,seq43209__$1);
return chromex.ext.tabs.on_moved_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43210,G__43211,seq43209__$2);
});
chromex.ext.tabs.on_selection_changed_STAR_ = (function chromex$ext$tabs$on_selection_changed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43237 = arguments.length;
var i__19488__auto___43238 = (0);
while(true){
if((i__19488__auto___43238 < len__19487__auto___43237)){
args__19494__auto__.push((arguments[i__19488__auto___43238]));

var G__43239 = (i__19488__auto___43238 + (1));
i__19488__auto___43238 = G__43239;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_selection_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_selection_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43230 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-selection-changed","chromex.ext.tabs/on-selection-changed",1241767140),channel);
})();
var handler_fn_43231 = ((function (event_fn_43230){
return (function (cb_tab_id_43233,cb_select_info_43234){
return event_fn_43230.call(null,cb_tab_id_43233,cb_select_info_43234);
});})(event_fn_43230))
;
var logging_fn__23751__auto__ = ((function (event_fn_43230,handler_fn_43231){
return (function (cb_param_tab_id_43235,cb_param_select_info_43236){
var config__23449__auto___43240 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43240))){
var logger__23450__auto___43241 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43240);
var prefix__23451__auto___43242 = ["event:","chrome.tabs.onSelectionChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43241)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43240)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43241.apply(null,prefix__23451__auto___43242.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_43235,cb_param_select_info_43236], null))));
} else {
}

return handler_fn_43231.call(null,cb_param_tab_id_43235,cb_param_select_info_43236);
});})(event_fn_43230,handler_fn_43231))
;
var ns_obj_43232 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43243 = config;
var api_check_fn__23454__auto___43244 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43243);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43244)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43243)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43244.call(null,"chrome.tabs.onSelectionChanged",ns_obj_43232,"onSelectionChanged");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43232,"onSelectionChanged");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_selection_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_selection_changed_STAR_.cljs$lang$applyTo = (function (seq43227){
var G__43228 = cljs.core.first.call(null,seq43227);
var seq43227__$1 = cljs.core.next.call(null,seq43227);
var G__43229 = cljs.core.first.call(null,seq43227__$1);
var seq43227__$2 = cljs.core.next.call(null,seq43227__$1);
return chromex.ext.tabs.on_selection_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43228,G__43229,seq43227__$2);
});
chromex.ext.tabs.on_active_changed_STAR_ = (function chromex$ext$tabs$on_active_changed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43255 = arguments.length;
var i__19488__auto___43256 = (0);
while(true){
if((i__19488__auto___43256 < len__19487__auto___43255)){
args__19494__auto__.push((arguments[i__19488__auto___43256]));

var G__43257 = (i__19488__auto___43256 + (1));
i__19488__auto___43256 = G__43257;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_active_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_active_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43248 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-active-changed","chromex.ext.tabs/on-active-changed",1369383993),channel);
})();
var handler_fn_43249 = ((function (event_fn_43248){
return (function (cb_tab_id_43251,cb_select_info_43252){
return event_fn_43248.call(null,cb_tab_id_43251,cb_select_info_43252);
});})(event_fn_43248))
;
var logging_fn__23751__auto__ = ((function (event_fn_43248,handler_fn_43249){
return (function (cb_param_tab_id_43253,cb_param_select_info_43254){
var config__23449__auto___43258 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43258))){
var logger__23450__auto___43259 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43258);
var prefix__23451__auto___43260 = ["event:","chrome.tabs.onActiveChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43259)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43258)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43259.apply(null,prefix__23451__auto___43260.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_43253,cb_param_select_info_43254], null))));
} else {
}

return handler_fn_43249.call(null,cb_param_tab_id_43253,cb_param_select_info_43254);
});})(event_fn_43248,handler_fn_43249))
;
var ns_obj_43250 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43261 = config;
var api_check_fn__23454__auto___43262 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43261);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43262)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43261)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43262.call(null,"chrome.tabs.onActiveChanged",ns_obj_43250,"onActiveChanged");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43250,"onActiveChanged");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_active_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_active_changed_STAR_.cljs$lang$applyTo = (function (seq43245){
var G__43246 = cljs.core.first.call(null,seq43245);
var seq43245__$1 = cljs.core.next.call(null,seq43245);
var G__43247 = cljs.core.first.call(null,seq43245__$1);
var seq43245__$2 = cljs.core.next.call(null,seq43245__$1);
return chromex.ext.tabs.on_active_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43246,G__43247,seq43245__$2);
});
chromex.ext.tabs.on_activated_STAR_ = (function chromex$ext$tabs$on_activated_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43271 = arguments.length;
var i__19488__auto___43272 = (0);
while(true){
if((i__19488__auto___43272 < len__19487__auto___43271)){
args__19494__auto__.push((arguments[i__19488__auto___43272]));

var G__43273 = (i__19488__auto___43272 + (1));
i__19488__auto___43272 = G__43273;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_activated_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_activated_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43266 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-activated","chromex.ext.tabs/on-activated",1422935115),channel);
})();
var handler_fn_43267 = ((function (event_fn_43266){
return (function (cb_active_info_43269){
return event_fn_43266.call(null,cb_active_info_43269);
});})(event_fn_43266))
;
var logging_fn__23751__auto__ = ((function (event_fn_43266,handler_fn_43267){
return (function (cb_param_active_info_43270){
var config__23449__auto___43274 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43274))){
var logger__23450__auto___43275 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43274);
var prefix__23451__auto___43276 = ["event:","chrome.tabs.onActivated"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43275)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43274)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43275.apply(null,prefix__23451__auto___43276.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_active_info_43270], null))));
} else {
}

return handler_fn_43267.call(null,cb_param_active_info_43270);
});})(event_fn_43266,handler_fn_43267))
;
var ns_obj_43268 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43277 = config;
var api_check_fn__23454__auto___43278 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43277);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43278)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43277)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43278.call(null,"chrome.tabs.onActivated",ns_obj_43268,"onActivated");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43268,"onActivated");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_activated_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_activated_STAR_.cljs$lang$applyTo = (function (seq43263){
var G__43264 = cljs.core.first.call(null,seq43263);
var seq43263__$1 = cljs.core.next.call(null,seq43263);
var G__43265 = cljs.core.first.call(null,seq43263__$1);
var seq43263__$2 = cljs.core.next.call(null,seq43263__$1);
return chromex.ext.tabs.on_activated_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43264,G__43265,seq43263__$2);
});
chromex.ext.tabs.on_highlight_changed_STAR_ = (function chromex$ext$tabs$on_highlight_changed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43287 = arguments.length;
var i__19488__auto___43288 = (0);
while(true){
if((i__19488__auto___43288 < len__19487__auto___43287)){
args__19494__auto__.push((arguments[i__19488__auto___43288]));

var G__43289 = (i__19488__auto___43288 + (1));
i__19488__auto___43288 = G__43289;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_highlight_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_highlight_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43282 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-highlight-changed","chromex.ext.tabs/on-highlight-changed",-970888983),channel);
})();
var handler_fn_43283 = ((function (event_fn_43282){
return (function (cb_select_info_43285){
return event_fn_43282.call(null,cb_select_info_43285);
});})(event_fn_43282))
;
var logging_fn__23751__auto__ = ((function (event_fn_43282,handler_fn_43283){
return (function (cb_param_select_info_43286){
var config__23449__auto___43290 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43290))){
var logger__23450__auto___43291 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43290);
var prefix__23451__auto___43292 = ["event:","chrome.tabs.onHighlightChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43291)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43290)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43291.apply(null,prefix__23451__auto___43292.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_select_info_43286], null))));
} else {
}

return handler_fn_43283.call(null,cb_param_select_info_43286);
});})(event_fn_43282,handler_fn_43283))
;
var ns_obj_43284 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43293 = config;
var api_check_fn__23454__auto___43294 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43293);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43294)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43293)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43294.call(null,"chrome.tabs.onHighlightChanged",ns_obj_43284,"onHighlightChanged");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43284,"onHighlightChanged");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_highlight_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_highlight_changed_STAR_.cljs$lang$applyTo = (function (seq43279){
var G__43280 = cljs.core.first.call(null,seq43279);
var seq43279__$1 = cljs.core.next.call(null,seq43279);
var G__43281 = cljs.core.first.call(null,seq43279__$1);
var seq43279__$2 = cljs.core.next.call(null,seq43279__$1);
return chromex.ext.tabs.on_highlight_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43280,G__43281,seq43279__$2);
});
chromex.ext.tabs.on_highlighted_STAR_ = (function chromex$ext$tabs$on_highlighted_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43303 = arguments.length;
var i__19488__auto___43304 = (0);
while(true){
if((i__19488__auto___43304 < len__19487__auto___43303)){
args__19494__auto__.push((arguments[i__19488__auto___43304]));

var G__43305 = (i__19488__auto___43304 + (1));
i__19488__auto___43304 = G__43305;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_highlighted_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_highlighted_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43298 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-highlighted","chromex.ext.tabs/on-highlighted",-1775951984),channel);
})();
var handler_fn_43299 = ((function (event_fn_43298){
return (function (cb_highlight_info_43301){
return event_fn_43298.call(null,cb_highlight_info_43301);
});})(event_fn_43298))
;
var logging_fn__23751__auto__ = ((function (event_fn_43298,handler_fn_43299){
return (function (cb_param_highlight_info_43302){
var config__23449__auto___43306 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43306))){
var logger__23450__auto___43307 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43306);
var prefix__23451__auto___43308 = ["event:","chrome.tabs.onHighlighted"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43307)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43306)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43307.apply(null,prefix__23451__auto___43308.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_highlight_info_43302], null))));
} else {
}

return handler_fn_43299.call(null,cb_param_highlight_info_43302);
});})(event_fn_43298,handler_fn_43299))
;
var ns_obj_43300 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43309 = config;
var api_check_fn__23454__auto___43310 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43309);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43310)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43309)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43310.call(null,"chrome.tabs.onHighlighted",ns_obj_43300,"onHighlighted");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43300,"onHighlighted");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_highlighted_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_highlighted_STAR_.cljs$lang$applyTo = (function (seq43295){
var G__43296 = cljs.core.first.call(null,seq43295);
var seq43295__$1 = cljs.core.next.call(null,seq43295);
var G__43297 = cljs.core.first.call(null,seq43295__$1);
var seq43295__$2 = cljs.core.next.call(null,seq43295__$1);
return chromex.ext.tabs.on_highlighted_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43296,G__43297,seq43295__$2);
});
chromex.ext.tabs.on_detached_STAR_ = (function chromex$ext$tabs$on_detached_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43321 = arguments.length;
var i__19488__auto___43322 = (0);
while(true){
if((i__19488__auto___43322 < len__19487__auto___43321)){
args__19494__auto__.push((arguments[i__19488__auto___43322]));

var G__43323 = (i__19488__auto___43322 + (1));
i__19488__auto___43322 = G__43323;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_detached_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_detached_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43314 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-detached","chromex.ext.tabs/on-detached",-1496085468),channel);
})();
var handler_fn_43315 = ((function (event_fn_43314){
return (function (cb_tab_id_43317,cb_detach_info_43318){
return event_fn_43314.call(null,cb_tab_id_43317,cb_detach_info_43318);
});})(event_fn_43314))
;
var logging_fn__23751__auto__ = ((function (event_fn_43314,handler_fn_43315){
return (function (cb_param_tab_id_43319,cb_param_detach_info_43320){
var config__23449__auto___43324 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43324))){
var logger__23450__auto___43325 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43324);
var prefix__23451__auto___43326 = ["event:","chrome.tabs.onDetached"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43325)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43324)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43325.apply(null,prefix__23451__auto___43326.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_43319,cb_param_detach_info_43320], null))));
} else {
}

return handler_fn_43315.call(null,cb_param_tab_id_43319,cb_param_detach_info_43320);
});})(event_fn_43314,handler_fn_43315))
;
var ns_obj_43316 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43327 = config;
var api_check_fn__23454__auto___43328 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43327);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43328)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43327)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43328.call(null,"chrome.tabs.onDetached",ns_obj_43316,"onDetached");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43316,"onDetached");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_detached_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_detached_STAR_.cljs$lang$applyTo = (function (seq43311){
var G__43312 = cljs.core.first.call(null,seq43311);
var seq43311__$1 = cljs.core.next.call(null,seq43311);
var G__43313 = cljs.core.first.call(null,seq43311__$1);
var seq43311__$2 = cljs.core.next.call(null,seq43311__$1);
return chromex.ext.tabs.on_detached_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43312,G__43313,seq43311__$2);
});
chromex.ext.tabs.on_attached_STAR_ = (function chromex$ext$tabs$on_attached_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43339 = arguments.length;
var i__19488__auto___43340 = (0);
while(true){
if((i__19488__auto___43340 < len__19487__auto___43339)){
args__19494__auto__.push((arguments[i__19488__auto___43340]));

var G__43341 = (i__19488__auto___43340 + (1));
i__19488__auto___43340 = G__43341;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_attached_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_attached_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43332 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-attached","chromex.ext.tabs/on-attached",1214482162),channel);
})();
var handler_fn_43333 = ((function (event_fn_43332){
return (function (cb_tab_id_43335,cb_attach_info_43336){
return event_fn_43332.call(null,cb_tab_id_43335,cb_attach_info_43336);
});})(event_fn_43332))
;
var logging_fn__23751__auto__ = ((function (event_fn_43332,handler_fn_43333){
return (function (cb_param_tab_id_43337,cb_param_attach_info_43338){
var config__23449__auto___43342 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43342))){
var logger__23450__auto___43343 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43342);
var prefix__23451__auto___43344 = ["event:","chrome.tabs.onAttached"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43343)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43342)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43343.apply(null,prefix__23451__auto___43344.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_43337,cb_param_attach_info_43338], null))));
} else {
}

return handler_fn_43333.call(null,cb_param_tab_id_43337,cb_param_attach_info_43338);
});})(event_fn_43332,handler_fn_43333))
;
var ns_obj_43334 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43345 = config;
var api_check_fn__23454__auto___43346 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43345);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43346)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43345)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43346.call(null,"chrome.tabs.onAttached",ns_obj_43334,"onAttached");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43334,"onAttached");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_attached_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_attached_STAR_.cljs$lang$applyTo = (function (seq43329){
var G__43330 = cljs.core.first.call(null,seq43329);
var seq43329__$1 = cljs.core.next.call(null,seq43329);
var G__43331 = cljs.core.first.call(null,seq43329__$1);
var seq43329__$2 = cljs.core.next.call(null,seq43329__$1);
return chromex.ext.tabs.on_attached_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43330,G__43331,seq43329__$2);
});
chromex.ext.tabs.on_removed_STAR_ = (function chromex$ext$tabs$on_removed_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43357 = arguments.length;
var i__19488__auto___43358 = (0);
while(true){
if((i__19488__auto___43358 < len__19487__auto___43357)){
args__19494__auto__.push((arguments[i__19488__auto___43358]));

var G__43359 = (i__19488__auto___43358 + (1));
i__19488__auto___43358 = G__43359;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_removed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_removed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43350 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-removed","chromex.ext.tabs/on-removed",972024471),channel);
})();
var handler_fn_43351 = ((function (event_fn_43350){
return (function (cb_tab_id_43353,cb_remove_info_43354){
return event_fn_43350.call(null,cb_tab_id_43353,cb_remove_info_43354);
});})(event_fn_43350))
;
var logging_fn__23751__auto__ = ((function (event_fn_43350,handler_fn_43351){
return (function (cb_param_tab_id_43355,cb_param_remove_info_43356){
var config__23449__auto___43360 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43360))){
var logger__23450__auto___43361 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43360);
var prefix__23451__auto___43362 = ["event:","chrome.tabs.onRemoved"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43361)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43360)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43361.apply(null,prefix__23451__auto___43362.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_43355,cb_param_remove_info_43356], null))));
} else {
}

return handler_fn_43351.call(null,cb_param_tab_id_43355,cb_param_remove_info_43356);
});})(event_fn_43350,handler_fn_43351))
;
var ns_obj_43352 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43363 = config;
var api_check_fn__23454__auto___43364 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43363);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43364)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43363)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43364.call(null,"chrome.tabs.onRemoved",ns_obj_43352,"onRemoved");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43352,"onRemoved");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_removed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_removed_STAR_.cljs$lang$applyTo = (function (seq43347){
var G__43348 = cljs.core.first.call(null,seq43347);
var seq43347__$1 = cljs.core.next.call(null,seq43347);
var G__43349 = cljs.core.first.call(null,seq43347__$1);
var seq43347__$2 = cljs.core.next.call(null,seq43347__$1);
return chromex.ext.tabs.on_removed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43348,G__43349,seq43347__$2);
});
chromex.ext.tabs.on_replaced_STAR_ = (function chromex$ext$tabs$on_replaced_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43375 = arguments.length;
var i__19488__auto___43376 = (0);
while(true){
if((i__19488__auto___43376 < len__19487__auto___43375)){
args__19494__auto__.push((arguments[i__19488__auto___43376]));

var G__43377 = (i__19488__auto___43376 + (1));
i__19488__auto___43376 = G__43377;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_replaced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_replaced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43368 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-replaced","chromex.ext.tabs/on-replaced",-2107870101),channel);
})();
var handler_fn_43369 = ((function (event_fn_43368){
return (function (cb_added_tab_id_43371,cb_removed_tab_id_43372){
return event_fn_43368.call(null,cb_added_tab_id_43371,cb_removed_tab_id_43372);
});})(event_fn_43368))
;
var logging_fn__23751__auto__ = ((function (event_fn_43368,handler_fn_43369){
return (function (cb_param_added_tab_id_43373,cb_param_removed_tab_id_43374){
var config__23449__auto___43378 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43378))){
var logger__23450__auto___43379 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43378);
var prefix__23451__auto___43380 = ["event:","chrome.tabs.onReplaced"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43379)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43378)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43379.apply(null,prefix__23451__auto___43380.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_added_tab_id_43373,cb_param_removed_tab_id_43374], null))));
} else {
}

return handler_fn_43369.call(null,cb_param_added_tab_id_43373,cb_param_removed_tab_id_43374);
});})(event_fn_43368,handler_fn_43369))
;
var ns_obj_43370 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43381 = config;
var api_check_fn__23454__auto___43382 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43381);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43382)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43381)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43382.call(null,"chrome.tabs.onReplaced",ns_obj_43370,"onReplaced");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43370,"onReplaced");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_replaced_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_replaced_STAR_.cljs$lang$applyTo = (function (seq43365){
var G__43366 = cljs.core.first.call(null,seq43365);
var seq43365__$1 = cljs.core.next.call(null,seq43365);
var G__43367 = cljs.core.first.call(null,seq43365__$1);
var seq43365__$2 = cljs.core.next.call(null,seq43365__$1);
return chromex.ext.tabs.on_replaced_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43366,G__43367,seq43365__$2);
});
chromex.ext.tabs.on_zoom_change_STAR_ = (function chromex$ext$tabs$on_zoom_change_STAR_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___43391 = arguments.length;
var i__19488__auto___43392 = (0);
while(true){
if((i__19488__auto___43392 < len__19487__auto___43391)){
args__19494__auto__.push((arguments[i__19488__auto___43392]));

var G__43393 = (i__19488__auto___43392 + (1));
i__19488__auto___43392 = G__43393;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_zoom_change_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

chromex.ext.tabs.on_zoom_change_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_43386 = (function (){var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-zoom-change","chromex.ext.tabs/on-zoom-change",1403421586),channel);
})();
var handler_fn_43387 = ((function (event_fn_43386){
return (function (cb_zoom_change_info_43389){
return event_fn_43386.call(null,cb_zoom_change_info_43389);
});})(event_fn_43386))
;
var logging_fn__23751__auto__ = ((function (event_fn_43386,handler_fn_43387){
return (function (cb_param_zoom_change_info_43390){
var config__23449__auto___43394 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43394))){
var logger__23450__auto___43395 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__23449__auto___43394);
var prefix__23451__auto___43396 = ["event:","chrome.tabs.onZoomChange"];
if(cljs.core.fn_QMARK_.call(null,logger__23450__auto___43395)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :logger in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23449__auto___43394)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? logger__23450__auto__)")].join('')));
}

logger__23450__auto___43395.apply(null,prefix__23451__auto___43396.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_zoom_change_info_43390], null))));
} else {
}

return handler_fn_43387.call(null,cb_param_zoom_change_info_43390);
});})(event_fn_43386,handler_fn_43387))
;
var ns_obj_43388 = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"tabs");
} else {
return null;
}
})();
var config__23453__auto___43397 = config;
var api_check_fn__23454__auto___43398 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__23453__auto___43397);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__23454__auto___43398)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid :api-check-fn in chromex config\n"),cljs.core.str("config:"),cljs.core.str(config__23453__auto___43397)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? api-check-fn__23454__auto__)")].join('')));
}

api_check_fn__23454__auto___43398.call(null,"chrome.tabs.onZoomChange",ns_obj_43388,"onZoomChange");

var event_obj__23752__auto__ = goog.object.get(ns_obj_43388,"onZoomChange");
var result__23753__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__23752__auto__,logging_fn__23751__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__23753__auto__,args);

return result__23753__auto__;
});

chromex.ext.tabs.on_zoom_change_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_zoom_change_STAR_.cljs$lang$applyTo = (function (seq43383){
var G__43384 = cljs.core.first.call(null,seq43383);
var seq43383__$1 = cljs.core.next.call(null,seq43383);
var G__43385 = cljs.core.first.call(null,seq43383__$1);
var seq43383__$2 = cljs.core.next.call(null,seq43383__$1);
return chromex.ext.tabs.on_zoom_change_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43384,G__43385,seq43383__$2);
});

//# sourceMappingURL=tabs.js.map