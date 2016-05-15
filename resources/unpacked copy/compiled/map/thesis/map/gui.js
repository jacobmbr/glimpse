// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.map.gui');
goog.require('cljs.core');
goog.require('cljs_idxdb.core');
goog.require('domina.core');
goog.require('goog.string');
goog.require('thesis.map.handlers');
goog.require('reagent.core');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('thesis.map.subs');
goog.require('domina.events');
goog.require('thesis.content_script.animation');
goog.require('clojure.string');
goog.require('re_frame.core');
thesis.map.gui.history_item = (function thesis$map$gui$history_item(text,cnt){
var mouse = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972)], null));
var x = reagent.ratom.make_reaction.call(null,((function (mouse){
return (function (){
return cljs.core.first.call(null,cljs.core.deref.call(null,mouse));
});})(mouse))
);
var y = reagent.ratom.make_reaction.call(null,((function (mouse,x){
return (function (){
return cljs.core.peek.call(null,cljs.core.deref.call(null,mouse));
});})(mouse,x))
);
var delta = reagent.core.atom.call(null,(1));
var wh = reagent.ratom.make_reaction.call(null,((function (mouse,x,y,delta){
return (function (){
return (cljs.core.first.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534)], null))) / (2));
});})(mouse,x,y,delta))
);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (mouse,x,y,delta,wh){
return (function (){
return cljs.core.List.EMPTY;
});})(mouse,x,y,delta,wh))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"history-item",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (mouse,x,y,delta,wh){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"history-div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"200",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),goog.string.unescapeEntities("&#8212;&#8212;&#8212;&nbsp;"),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mouse,x,y,delta,wh){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-site-info","show-site-info",-2033796859),text], null));
});})(mouse,x,y,delta,wh))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str(((30) - cljs.core.count.call(null,text))),cljs.core.str("px")].join('')], null)], null),((30) - cljs.core.count.call(null,text))," ",text], null)], null);
});})(mouse,x,y,delta,wh))
], null));
});
thesis.map.gui.display_history = (function thesis$map$gui$display_history(){
var history = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null));
var cnts = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distinct-domains","distinct-domains",1062236270)], null));
return ((function (history,cnts){
return (function (this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hide",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100,100,100, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"1px solid white",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"30px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"history-div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"50px 0 50px 0"], null)], null),goog.string.unescapeEntities("&#8212;&#8212;&#8212;&nbsp;"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (history,cnts){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-domain","show-domain",-84269305),"adzerk.net"], null));
});})(history,cnts))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"25px"], null)], null),"Your History"], null)], null)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (history,cnts){
return (function (p1__31041_SHARP_,p2__31040_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.history_item,p2__31040_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__31040_SHARP_], null));
});})(history,cnts))
,cljs.core.deref.call(null,history)))], null)], null);
});
;})(history,cnts))
});
thesis.map.gui.display_locations = (function thesis$map$gui$display_locations(){
var locations = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distinct-locations","distinct-locations",-1429989749)], null));
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-locations?","loading-locations?",691123512)], null));
return ((function (locations,loading_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"100px"], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,loading_QMARK_)))?(function (){var iter__19496__auto__ = ((function (locations,loading_QMARK_){
return (function thesis$map$gui$display_locations_$_iter__31047(s__31048){
return (new cljs.core.LazySeq(null,((function (locations,loading_QMARK_){
return (function (){
var s__31048__$1 = s__31048;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31048__$1);
if(temp__4657__auto__){
var s__31048__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31048__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__31048__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__31050 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__31049 = (0);
while(true){
if((i__31049 < size__19495__auto__)){
var x = cljs.core._nth.call(null,c__19494__auto__,i__31049);
cljs.core.chunk_append.call(null,b__31050,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.map.call(null,((function (i__31049,x,c__19494__auto__,size__19495__auto__,b__31050,s__31048__$2,temp__4657__auto__,locations,loading_QMARK_){
return (function (p1__31042_SHARP_){
return cljs.core.subs.call(null,p1__31042_SHARP_,(0),(6));
});})(i__31049,x,c__19494__auto__,size__19495__auto__,b__31050,s__31048__$2,temp__4657__auto__,locations,loading_QMARK_))
,cljs.core.take.call(null,(2),clojure.string.split.call(null,x,/\|/)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__31051 = (i__31049 + (1));
i__31049 = G__31051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31050),thesis$map$gui$display_locations_$_iter__31047.call(null,cljs.core.chunk_rest.call(null,s__31048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31050),null);
}
} else {
var x = cljs.core.first.call(null,s__31048__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.map.call(null,((function (x,s__31048__$2,temp__4657__auto__,locations,loading_QMARK_){
return (function (p1__31042_SHARP_){
return cljs.core.subs.call(null,p1__31042_SHARP_,(0),(6));
});})(x,s__31048__$2,temp__4657__auto__,locations,loading_QMARK_))
,cljs.core.take.call(null,(2),clojure.string.split.call(null,x,/\|/)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),thesis$map$gui$display_locations_$_iter__31047.call(null,cljs.core.rest.call(null,s__31048__$2)));
}
} else {
return null;
}
break;
}
});})(locations,loading_QMARK_))
,null,null));
});})(locations,loading_QMARK_))
;
return iter__19496__auto__.call(null,cljs.core.deref.call(null,locations));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"loading"], null))], null);
});
;})(locations,loading_QMARK_))
});
thesis.map.gui.display_domains = (function thesis$map$gui$display_domains(){
var domains = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distinct-domains","distinct-domains",1062236270)], null));
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-domains?","loading-domains?",605568016)], null));
return ((function (domains,loading_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"45%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"background","background",-863952629),"rgba(3, 201, 200,0.5)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0 30px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Where you've been and who was there with you."], null),((cljs.core.not.call(null,cljs.core.deref.call(null,loading_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__19496__auto__ = ((function (domains,loading_QMARK_){
return (function thesis$map$gui$display_domains_$_iter__31056(s__31057){
return (new cljs.core.LazySeq(null,((function (domains,loading_QMARK_){
return (function (){
var s__31057__$1 = s__31057;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31057__$1);
if(temp__4657__auto__){
var s__31057__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31057__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__31057__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__31059 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__31058 = (0);
while(true){
if((i__31058 < size__19495__auto__)){
var x = cljs.core._nth.call(null,c__19494__auto__,i__31058);
cljs.core.chunk_append.call(null,b__31059,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31058,x,c__19494__auto__,size__19495__auto__,b__31059,s__31057__$2,temp__4657__auto__,domains,loading_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-domain-info","get-domain-info",-1554942868),x], null));
});})(i__31058,x,c__19494__auto__,size__19495__auto__,b__31059,s__31057__$2,temp__4657__auto__,domains,loading_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px"], null)], null),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," - "], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__31060 = (i__31058 + (1));
i__31058 = G__31060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31059),thesis$map$gui$display_domains_$_iter__31056.call(null,cljs.core.chunk_rest.call(null,s__31057__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31059),null);
}
} else {
var x = cljs.core.first.call(null,s__31057__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x,s__31057__$2,temp__4657__auto__,domains,loading_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-domain-info","get-domain-info",-1554942868),x], null));
});})(x,s__31057__$2,temp__4657__auto__,domains,loading_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px"], null)], null),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," - "], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),thesis$map$gui$display_domains_$_iter__31056.call(null,cljs.core.rest.call(null,s__31057__$2)));
}
} else {
return null;
}
break;
}
});})(domains,loading_QMARK_))
,null,null));
});})(domains,loading_QMARK_))
;
return iter__19496__auto__.call(null,cljs.core.deref.call(null,domains));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"loading"], null))], null)], null);
});
;})(domains,loading_QMARK_))
});
thesis.map.gui.domain_infobox = (function thesis$map$gui$domain_infobox(){
var domain_info = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-info","domain-info",19852994)], null));
var domain = reagent.ratom.make_reaction.call(null,((function (domain_info){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,domain_info),new cljs.core.Keyword(null,"domain","domain",1847214937));
});})(domain_info))
);
var info = reagent.ratom.make_reaction.call(null,((function (domain_info,domain){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,domain_info),new cljs.core.Keyword(null,"data","data",-232669377));
});})(domain_info,domain))
);
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-domain-info?","loading-domain-info?",-126738217)], null));
return ((function (domain_info,domain,info,loading_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,loading_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Who saw you on ",cljs.core.deref.call(null,domain)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.count.call(null,cljs.core.deref.call(null,info))," third parties saw you on domain ",cljs.core.deref.call(null,domain),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var iter__19496__auto__ = ((function (domain_info,domain,info,loading_QMARK_){
return (function thesis$map$gui$domain_infobox_$_iter__31065(s__31066){
return (new cljs.core.LazySeq(null,((function (domain_info,domain,info,loading_QMARK_){
return (function (){
var s__31066__$1 = s__31066;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31066__$1);
if(temp__4657__auto__){
var s__31066__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31066__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__31066__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__31068 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__31067 = (0);
while(true){
if((i__31067 < size__19495__auto__)){
var x = cljs.core._nth.call(null,c__19494__auto__,i__31067);
cljs.core.chunk_append.call(null,b__31068,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),[cljs.core.str(cljs.core.get.call(null,x,"tabUrl"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__31069 = (i__31067 + (1));
i__31067 = G__31069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31068),thesis$map$gui$domain_infobox_$_iter__31065.call(null,cljs.core.chunk_rest.call(null,s__31066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31068),null);
}
} else {
var x = cljs.core.first.call(null,s__31066__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),[cljs.core.str(cljs.core.get.call(null,x,"tabUrl"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),thesis$map$gui$domain_infobox_$_iter__31065.call(null,cljs.core.rest.call(null,s__31066__$2)));
}
} else {
return null;
}
break;
}
});})(domain_info,domain,info,loading_QMARK_))
,null,null));
});})(domain_info,domain,info,loading_QMARK_))
;
return iter__19496__auto__.call(null,cljs.core.deref.call(null,info));
})()], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"loading..."], null);
}
});
;})(domain_info,domain,info,loading_QMARK_))
});
thesis.map.gui.site_infobox = (function thesis$map$gui$site_infobox(){
var entry = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"site-info","site-info",-17357115)], null));
var site_info = reagent.ratom.make_reaction.call(null,((function (entry){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,entry),new cljs.core.Keyword(null,"data","data",-232669377));
});})(entry))
);
var domain = reagent.ratom.make_reaction.call(null,((function (entry,site_info){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,entry),new cljs.core.Keyword(null,"domain","domain",1847214937));
});})(entry,site_info))
);
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-site-info?","loading-site-info?",1673710259)], null));
return ((function (entry,site_info,domain,loading_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,loading_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Who saw you on ",cljs.core.deref.call(null,domain)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.count.call(null,cljs.core.deref.call(null,site_info))," third parties saw you on site ",cljs.core.deref.call(null,domain),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var iter__19496__auto__ = ((function (entry,site_info,domain,loading_QMARK_){
return (function thesis$map$gui$site_infobox_$_iter__31074(s__31075){
return (new cljs.core.LazySeq(null,((function (entry,site_info,domain,loading_QMARK_){
return (function (){
var s__31075__$1 = s__31075;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31075__$1);
if(temp__4657__auto__){
var s__31075__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31075__$2)){
var c__19494__auto__ = cljs.core.chunk_first.call(null,s__31075__$2);
var size__19495__auto__ = cljs.core.count.call(null,c__19494__auto__);
var b__31077 = cljs.core.chunk_buffer.call(null,size__19495__auto__);
if((function (){var i__31076 = (0);
while(true){
if((i__31076 < size__19495__auto__)){
var x = cljs.core._nth.call(null,c__19494__auto__,i__31076);
cljs.core.chunk_append.call(null,b__31077,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(cljs.core.get.call(null,x,"domain"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__31078 = (i__31076 + (1));
i__31076 = G__31078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31077),thesis$map$gui$site_infobox_$_iter__31074.call(null,cljs.core.chunk_rest.call(null,s__31075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31077),null);
}
} else {
var x = cljs.core.first.call(null,s__31075__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(cljs.core.get.call(null,x,"domain"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),thesis$map$gui$site_infobox_$_iter__31074.call(null,cljs.core.rest.call(null,s__31075__$2)));
}
} else {
return null;
}
break;
}
});})(entry,site_info,domain,loading_QMARK_))
,null,null));
});})(entry,site_info,domain,loading_QMARK_))
;
return iter__19496__auto__.call(null,cljs.core.deref.call(null,site_info));
})()], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"loading..."], null);
}
});
;})(entry,site_info,domain,loading_QMARK_))
});
thesis.map.gui.infobox = (function thesis$map$gui$infobox(){
var view_mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-mode","view-mode",2138348427)], null));
var display_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-info-box?","display-info-box?",1862904652)], null));
return ((function (view_mode,display_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.site_infobox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.site_infobox], null),(cljs.core.truth_(cljs.core.deref.call(null,display_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view_mode,display_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-info-box","display-info-box",2039244212),false], null));
});})(view_mode,display_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"30%",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"40px 0 0 0",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.5s ease",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100,100,100, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.domain_infobox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.site_infobox], null),cljs.core.deref.call(null,view_mode)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Loading"], null))], null);
});
;})(view_mode,display_QMARK_))
});
thesis.map.gui.show_state = (function thesis$map$gui$show_state(){
var state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var display_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-state?","show-state?",-1077172854)], null));
return ((function (state,display_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__19702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31081_31083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31082_31084 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31081_31083,_STAR_print_fn_STAR_31082_31084,sb__19702__auto__,state,display_QMARK_){
return (function (x__19703__auto__){
return sb__19702__auto__.append(x__19703__auto__);
});})(_STAR_print_newline_STAR_31081_31083,_STAR_print_fn_STAR_31082_31084,sb__19702__auto__,state,display_QMARK_))
;

try{cljs.core.deref.call(null,state);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31082_31084;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31081_31083;
}
return [cljs.core.str(sb__19702__auto__)].join('');
})()], null)], null);
});
;})(state,display_QMARK_))
});
thesis.map.gui.mapbox = (function thesis$map$gui$mapbox(){
var mapb = reagent.core.atom.call(null,null);
var geojson = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geojson","geojson",-719473398)], null));
var geoloading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-location-counts?","loading-location-counts?",1919307004)], null));
var loc = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-location","my-location",-440971813)], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"MapBox Component",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (mapb,geojson,geoloading_QMARK_,loc){
return (function (this$){
cljs.core.reset_BANG_.call(null,mapb,(new mapboxgl.Map(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),"map",new cljs.core.Keyword(null,"zooom","zooom",-1932571589),(9),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-122.083851,37.386052], null),new cljs.core.Keyword(null,"style","style",-496642736),"mapbox://styles/mapbox/dark-v8",new cljs.core.Keyword(null,"test","test",577538877),"hu"], null)))));

return cljs.core.deref.call(null,mapb).on("load",((function (mapb,geojson,geoloading_QMARK_,loc){
return (function (){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"mapboxgl-ctrl-attrib"));

cljs.core.deref.call(null,mapb).flyTo(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(12),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,loc)),new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,loc))], null),new cljs.core.Keyword(null,"bearing","bearing",-1189702101),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),0.8], null)));

var c__20758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20758__auto__,mapb,geojson,geoloading_QMARK_,loc){
return (function (){
var f__20759__auto__ = (function (){var switch__20737__auto__ = ((function (c__20758__auto__,mapb,geojson,geoloading_QMARK_,loc){
return (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (1))){
var state_31138__$1 = state_31138;
var statearr_31140_31155 = state_31138__$1;
(statearr_31140_31155[(2)] = null);

(statearr_31140_31155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (2))){
var inst_31121 = cljs.core.async.timeout.call(null,(200));
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31138__$1,(4),inst_31121);
} else {
if((state_val_31139 === (3))){
var inst_31136 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31138__$1,inst_31136);
} else {
if((state_val_31139 === (4))){
var inst_31123 = (state_31138[(2)]);
var inst_31124 = cljs.core.deref.call(null,geoloading_QMARK_);
var state_31138__$1 = (function (){var statearr_31141 = state_31138;
(statearr_31141[(7)] = inst_31123);

return statearr_31141;
})();
if(cljs.core.truth_(inst_31124)){
var statearr_31142_31156 = state_31138__$1;
(statearr_31142_31156[(1)] = (5));

} else {
var statearr_31143_31157 = state_31138__$1;
(statearr_31143_31157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (5))){
var state_31138__$1 = state_31138;
var statearr_31144_31158 = state_31138__$1;
(statearr_31144_31158[(2)] = null);

(statearr_31144_31158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (6))){
var inst_31128 = console.log("adding now");
var inst_31129 = cljs.core.deref.call(null,mapb);
var inst_31130 = inst_31129.addSource("markers",{"type": "geojson", "data": cljs.core.deref.call(null,geojson)});
var inst_31131 = cljs.core.deref.call(null,mapb);
var inst_31132 = inst_31131.addLayer({"id": "markers", "type": "circle", "paint": {"circle-color": "white", "circle-opacity": 0.4, "circle-radius": (40)}, "source": "markers"});
var state_31138__$1 = (function (){var statearr_31145 = state_31138;
(statearr_31145[(8)] = inst_31128);

(statearr_31145[(9)] = inst_31130);

return statearr_31145;
})();
var statearr_31146_31159 = state_31138__$1;
(statearr_31146_31159[(2)] = inst_31132);

(statearr_31146_31159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (7))){
var inst_31134 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31147_31160 = state_31138__$1;
(statearr_31147_31160[(2)] = inst_31134);

(statearr_31147_31160[(1)] = (3));


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
});})(c__20758__auto__,mapb,geojson,geoloading_QMARK_,loc))
;
return ((function (switch__20737__auto__,c__20758__auto__,mapb,geojson,geoloading_QMARK_,loc){
return (function() {
var thesis$map$gui$mapbox_$_state_machine__20738__auto__ = null;
var thesis$map$gui$mapbox_$_state_machine__20738__auto____0 = (function (){
var statearr_31151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31151[(0)] = thesis$map$gui$mapbox_$_state_machine__20738__auto__);

(statearr_31151[(1)] = (1));

return statearr_31151;
});
var thesis$map$gui$mapbox_$_state_machine__20738__auto____1 = (function (state_31138){
while(true){
var ret_value__20739__auto__ = (function (){try{while(true){
var result__20740__auto__ = switch__20737__auto__.call(null,state_31138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20740__auto__;
}
break;
}
}catch (e31152){if((e31152 instanceof Object)){
var ex__20741__auto__ = e31152;
var statearr_31153_31161 = state_31138;
(statearr_31153_31161[(5)] = ex__20741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31138;
state_31138 = G__31162;
continue;
} else {
return ret_value__20739__auto__;
}
break;
}
});
thesis$map$gui$mapbox_$_state_machine__20738__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return thesis$map$gui$mapbox_$_state_machine__20738__auto____0.call(this);
case 1:
return thesis$map$gui$mapbox_$_state_machine__20738__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$map$gui$mapbox_$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$map$gui$mapbox_$_state_machine__20738__auto____0;
thesis$map$gui$mapbox_$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$map$gui$mapbox_$_state_machine__20738__auto____1;
return thesis$map$gui$mapbox_$_state_machine__20738__auto__;
})()
;})(switch__20737__auto__,c__20758__auto__,mapb,geojson,geoloading_QMARK_,loc))
})();
var state__20760__auto__ = (function (){var statearr_31154 = f__20759__auto__.call(null);
(statearr_31154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20758__auto__);

return statearr_31154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20760__auto__);
});})(c__20758__auto__,mapb,geojson,geoloading_QMARK_,loc))
);

return c__20758__auto__;
});})(mapb,geojson,geoloading_QMARK_,loc))
);
});})(mapb,geojson,geoloading_QMARK_,loc))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (mapb,geojson,geoloading_QMARK_,loc){
return (function (){
cljs.core.deref.call(null,geojson);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"map",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100,100,100,0)",new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null);
});})(mapb,geojson,geoloading_QMARK_,loc))
], null));
});
thesis.map.gui.root = (function thesis$map$gui$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.mapbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.infobox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.display_history], null)], null);
});
thesis.map.gui.init_BANG_ = (function thesis$map$gui$init_BANG_(){
var node = document.createElement("div");
var el = (function (){var or__18716__auto__ = domina.core.by_id.call(null,"ext-map-div");
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return document.body.appendChild(node);
}
})();
var div = el.id = "ext-map-div";
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

mapboxgl.accessToken = "pk.eyJ1IjoiamFjb2JtYnIiLCJhIjoiY2lvMHl6d2ZqMTl5N3U2bHkxZ3h4NXRlNCJ9.gakQNsRrGKwvW-FkTAHcZQ";

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.map.gui.root], null),domina.core.by_id.call(null,"ext-map-div"));
});

//# sourceMappingURL=gui.js.map