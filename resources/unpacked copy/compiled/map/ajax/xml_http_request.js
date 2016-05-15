// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32023,handler){
var map__32024 = p__32023;
var map__32024__$1 = ((((!((map__32024 == null)))?((((map__32024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32024):map__32024);
var uri = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__32024,map__32024__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__32022_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__32022_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__32024,map__32024__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___32032 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___32032)){
var response_type_32033 = temp__4657__auto___32032;
this$__$1.responseType = cljs.core.name.call(null,response_type_32033);
} else {
}

var seq__32026_32034 = cljs.core.seq.call(null,headers);
var chunk__32027_32035 = null;
var count__32028_32036 = (0);
var i__32029_32037 = (0);
while(true){
if((i__32029_32037 < count__32028_32036)){
var vec__32030_32038 = cljs.core._nth.call(null,chunk__32027_32035,i__32029_32037);
var k_32039 = cljs.core.nth.call(null,vec__32030_32038,(0),null);
var v_32040 = cljs.core.nth.call(null,vec__32030_32038,(1),null);
this$__$1.setRequestHeader(k_32039,v_32040);

var G__32041 = seq__32026_32034;
var G__32042 = chunk__32027_32035;
var G__32043 = count__32028_32036;
var G__32044 = (i__32029_32037 + (1));
seq__32026_32034 = G__32041;
chunk__32027_32035 = G__32042;
count__32028_32036 = G__32043;
i__32029_32037 = G__32044;
continue;
} else {
var temp__4657__auto___32045 = cljs.core.seq.call(null,seq__32026_32034);
if(temp__4657__auto___32045){
var seq__32026_32046__$1 = temp__4657__auto___32045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32026_32046__$1)){
var c__19228__auto___32047 = cljs.core.chunk_first.call(null,seq__32026_32046__$1);
var G__32048 = cljs.core.chunk_rest.call(null,seq__32026_32046__$1);
var G__32049 = c__19228__auto___32047;
var G__32050 = cljs.core.count.call(null,c__19228__auto___32047);
var G__32051 = (0);
seq__32026_32034 = G__32048;
chunk__32027_32035 = G__32049;
count__32028_32036 = G__32050;
i__32029_32037 = G__32051;
continue;
} else {
var vec__32031_32052 = cljs.core.first.call(null,seq__32026_32046__$1);
var k_32053 = cljs.core.nth.call(null,vec__32031_32052,(0),null);
var v_32054 = cljs.core.nth.call(null,vec__32031_32052,(1),null);
this$__$1.setRequestHeader(k_32053,v_32054);

var G__32055 = cljs.core.next.call(null,seq__32026_32046__$1);
var G__32056 = null;
var G__32057 = (0);
var G__32058 = (0);
seq__32026_32034 = G__32055;
chunk__32027_32035 = G__32056;
count__32028_32036 = G__32057;
i__32029_32037 = G__32058;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__18417__auto__ = body;
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map