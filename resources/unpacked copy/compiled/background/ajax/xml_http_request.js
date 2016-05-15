// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__40499,handler){
var map__40500 = p__40499;
var map__40500__$1 = ((((!((map__40500 == null)))?((((map__40500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40500):map__40500);
var uri = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__40500,map__40500__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__40498_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__40498_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__40500,map__40500__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___40508 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___40508)){
var response_type_40509 = temp__4657__auto___40508;
this$__$1.responseType = cljs.core.name.call(null,response_type_40509);
} else {
}

var seq__40502_40510 = cljs.core.seq.call(null,headers);
var chunk__40503_40511 = null;
var count__40504_40512 = (0);
var i__40505_40513 = (0);
while(true){
if((i__40505_40513 < count__40504_40512)){
var vec__40506_40514 = cljs.core._nth.call(null,chunk__40503_40511,i__40505_40513);
var k_40515 = cljs.core.nth.call(null,vec__40506_40514,(0),null);
var v_40516 = cljs.core.nth.call(null,vec__40506_40514,(1),null);
this$__$1.setRequestHeader(k_40515,v_40516);

var G__40517 = seq__40502_40510;
var G__40518 = chunk__40503_40511;
var G__40519 = count__40504_40512;
var G__40520 = (i__40505_40513 + (1));
seq__40502_40510 = G__40517;
chunk__40503_40511 = G__40518;
count__40504_40512 = G__40519;
i__40505_40513 = G__40520;
continue;
} else {
var temp__4657__auto___40521 = cljs.core.seq.call(null,seq__40502_40510);
if(temp__4657__auto___40521){
var seq__40502_40522__$1 = temp__4657__auto___40521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40502_40522__$1)){
var c__19228__auto___40523 = cljs.core.chunk_first.call(null,seq__40502_40522__$1);
var G__40524 = cljs.core.chunk_rest.call(null,seq__40502_40522__$1);
var G__40525 = c__19228__auto___40523;
var G__40526 = cljs.core.count.call(null,c__19228__auto___40523);
var G__40527 = (0);
seq__40502_40510 = G__40524;
chunk__40503_40511 = G__40525;
count__40504_40512 = G__40526;
i__40505_40513 = G__40527;
continue;
} else {
var vec__40507_40528 = cljs.core.first.call(null,seq__40502_40522__$1);
var k_40529 = cljs.core.nth.call(null,vec__40507_40528,(0),null);
var v_40530 = cljs.core.nth.call(null,vec__40507_40528,(1),null);
this$__$1.setRequestHeader(k_40529,v_40530);

var G__40531 = cljs.core.next.call(null,seq__40502_40522__$1);
var G__40532 = null;
var G__40533 = (0);
var G__40534 = (0);
seq__40502_40510 = G__40531;
chunk__40503_40511 = G__40532;
count__40504_40512 = G__40533;
i__40505_40513 = G__40534;
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