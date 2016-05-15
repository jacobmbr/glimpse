// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.handlers');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('domina.core');
goog.require('reagent.core');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('thesis.background.storage');
goog.require('chromex.ext.storage');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,p__10562){
var vec__10563 = p__10562;
var ___$1 = cljs.core.nth.call(null,vec__10563,(0),null);
var img = cljs.core.nth.call(null,vec__10563,(1),null);
var dim = cljs.core.nth.call(null,vec__10563,(2),null);
var data = cljs.core.nth.call(null,vec__10563,(3),null);
var tabUrl = cljs.core.nth.call(null,vec__10563,(4),null);
var counts = cljs.core.nth.call(null,vec__10563,(5),null);
var core_chan = cljs.core.nth.call(null,vec__10563,(6),null);
var obj = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var maxcnt = cljs.core.atom.call(null,(0));
var mincnt = cljs.core.atom.call(null,(0));
var seq__10564_10570 = cljs.core.seq.call(null,cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.val,cljs.core._GT_,cljs.core.js__GT_clj.call(null,counts))));
var chunk__10565_10571 = null;
var count__10566_10572 = (0);
var i__10567_10573 = (0);
while(true){
if((i__10567_10573 < count__10566_10572)){
var vec__10568_10574 = cljs.core._nth.call(null,chunk__10565_10571,i__10567_10573);
var dom_10575 = cljs.core.nth.call(null,vec__10568_10574,(0),null);
var cnt_10576 = cljs.core.nth.call(null,vec__10568_10574,(1),null);
if((cljs.core.contains_QMARK_.call(null,data,cljs.core.keyword.call(null,dom_10575))) && (!(cljs.core._EQ_.call(null,dom_10575,tabUrl)))){
cljs.core.reset_BANG_.call(null,maxcnt,(function (){var x__6539__auto__ = cljs.core.deref.call(null,maxcnt);
var y__6540__auto__ = cnt_10576;
return ((x__6539__auto__ > y__6540__auto__) ? x__6539__auto__ : y__6540__auto__);
})());

cljs.core.reset_BANG_.call(null,mincnt,(function (){var x__6546__auto__ = cljs.core.deref.call(null,mincnt);
var y__6547__auto__ = cnt_10576;
return ((x__6546__auto__ < y__6547__auto__) ? x__6546__auto__ : y__6547__auto__);
})());

cljs.core.swap_BANG_.call(null,obj,cljs.core.assoc,cljs.core.keyword.call(null,dom_10575),cljs.core.assoc.call(null,cljs.core.get.call(null,data,cljs.core.keyword.call(null,dom_10575)),new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"cnt","cnt",283978798),cnt_10576));
} else {
}

var G__10577 = seq__10564_10570;
var G__10578 = chunk__10565_10571;
var G__10579 = count__10566_10572;
var G__10580 = (i__10567_10573 + (1));
seq__10564_10570 = G__10577;
chunk__10565_10571 = G__10578;
count__10566_10572 = G__10579;
i__10567_10573 = G__10580;
continue;
} else {
var temp__4657__auto___10581 = cljs.core.seq.call(null,seq__10564_10570);
if(temp__4657__auto___10581){
var seq__10564_10582__$1 = temp__4657__auto___10581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10564_10582__$1)){
var c__7019__auto___10583 = cljs.core.chunk_first.call(null,seq__10564_10582__$1);
var G__10584 = cljs.core.chunk_rest.call(null,seq__10564_10582__$1);
var G__10585 = c__7019__auto___10583;
var G__10586 = cljs.core.count.call(null,c__7019__auto___10583);
var G__10587 = (0);
seq__10564_10570 = G__10584;
chunk__10565_10571 = G__10585;
count__10566_10572 = G__10586;
i__10567_10573 = G__10587;
continue;
} else {
var vec__10569_10588 = cljs.core.first.call(null,seq__10564_10582__$1);
var dom_10589 = cljs.core.nth.call(null,vec__10569_10588,(0),null);
var cnt_10590 = cljs.core.nth.call(null,vec__10569_10588,(1),null);
if((cljs.core.contains_QMARK_.call(null,data,cljs.core.keyword.call(null,dom_10589))) && (!(cljs.core._EQ_.call(null,dom_10589,tabUrl)))){
cljs.core.reset_BANG_.call(null,maxcnt,(function (){var x__6539__auto__ = cljs.core.deref.call(null,maxcnt);
var y__6540__auto__ = cnt_10590;
return ((x__6539__auto__ > y__6540__auto__) ? x__6539__auto__ : y__6540__auto__);
})());

cljs.core.reset_BANG_.call(null,mincnt,(function (){var x__6546__auto__ = cljs.core.deref.call(null,mincnt);
var y__6547__auto__ = cnt_10590;
return ((x__6546__auto__ < y__6547__auto__) ? x__6546__auto__ : y__6547__auto__);
})());

cljs.core.swap_BANG_.call(null,obj,cljs.core.assoc,cljs.core.keyword.call(null,dom_10589),cljs.core.assoc.call(null,cljs.core.get.call(null,data,cljs.core.keyword.call(null,dom_10589)),new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"cnt","cnt",283978798),cnt_10590));
} else {
}

var G__10591 = cljs.core.next.call(null,seq__10564_10582__$1);
var G__10592 = null;
var G__10593 = (0);
var G__10594 = (0);
seq__10564_10570 = G__10591;
chunk__10565_10571 = G__10592;
count__10566_10572 = G__10593;
i__10567_10573 = G__10594;
continue;
}
} else {
}
}
break;
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align?","align?",-1419127676),new cljs.core.Keyword(null,"tab-url","tab-url",1066626054),new cljs.core.Keyword(null,"dim","dim",-497244536),new cljs.core.Keyword(null,"img-data","img-data",1071238824),new cljs.core.Keyword(null,"has-info?","has-info?",1832610505),new cljs.core.Keyword(null,"domain-counts","domain-counts",-175030005),new cljs.core.Keyword(null,"img-pos","img-pos",773671819),new cljs.core.Keyword(null,"img-scale","img-scale",1331504493),new cljs.core.Keyword(null,"msg-chan","msg-chan",-1224438894),new cljs.core.Keyword(null,"left-padding","left-padding",1669863700),new cljs.core.Keyword(null,"min-count","min-count",1594709013),new cljs.core.Keyword(null,"show-text?","show-text?",1934354679),new cljs.core.Keyword(null,"max-count","max-count",1539185305),new cljs.core.Keyword(null,"data","data",-232669377)],[false,tabUrl,dim,img,false,counts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),core_chan,(0),cljs.core.deref.call(null,mincnt),false,cljs.core.deref.call(null,maxcnt),cljs.core.deref.call(null,obj)]);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"scale-down-img","scale-down-img",-1729519177),(function (db,p__10595){
var vec__10596 = p__10595;
var _ = cljs.core.nth.call(null,vec__10596,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"img-scale","img-scale",1331504493),0.3);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"kill","kill",-12335575),(function (db,p__10597){
var vec__10598 = p__10597;
var _ = cljs.core.nth.call(null,vec__10598,(0),null);
domina.core.destroy_BANG_.call(null,domina.core.by_id.call(null,"ext-canvas-container"));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"exit","exit",351849638),(function (db,p__10599){
var vec__10600 = p__10599;
var _ = cljs.core.nth.call(null,vec__10600,(0),null);
setTimeout(((function (vec__10600,_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kill","kill",-12335575)], null));
});})(vec__10600,_))
,(300));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"img-scale","img-scale",1331504493),(1),new cljs.core.Keyword(null,"img-pos","img-pos",773671819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-img-pos","update-img-pos",1154613838),(function (db,p__10601){
var vec__10602 = p__10601;
var _ = cljs.core.nth.call(null,vec__10602,(0),null);
var v = cljs.core.nth.call(null,vec__10602,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"img-pos","img-pos",773671819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.first.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"dim","dim",-497244536))) / (2)) * (-1)),(-50)], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),(function (db,p__10603){
var vec__10604 = p__10603;
var _ = cljs.core.nth.call(null,vec__10604,(0),null);
var v = cljs.core.nth.call(null,vec__10604,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-img-pos","update-img-pos",1154613838)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dim","dim",-497244536),v);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-info","handle-info",-57111997),(function (db,p__10608){
var vec__10609 = p__10608;
var _ = cljs.core.nth.call(null,vec__10609,(0),null);
var v = cljs.core.nth.call(null,vec__10609,(1),null);
var acc = cljs.core.atom.call(null,(20));
setTimeout(((function (acc,vec__10609,_,v){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-text","show-text",464244146),true], null));
});})(acc,vec__10609,_,v))
,(1500));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),true], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"has-info?","has-info?",1832610505),v,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.reduce_kv.call(null,((function (acc,vec__10609,_,v){
return (function (p1__10605_SHARP_,p2__10606_SHARP_,p3__10607_SHARP_){
var r = cljs.core.rand.call(null,(40));
cljs.core.swap_BANG_.call(null,acc,cljs.core._PLUS_,r,(20));

return cljs.core.assoc.call(null,p1__10605_SHARP_,p2__10606_SHARP_,cljs.core.assoc.call(null,p3__10607_SHARP_,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(((30) * (cljs.core.get.call(null,p3__10607_SHARP_,new cljs.core.Keyword(null,"cnt","cnt",283978798)) / cljs.core.get.call(null,db,new cljs.core.Keyword(null,"max-count","max-count",1539185305)))) + (15)),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)));
});})(acc,vec__10609,_,v))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"data","data",-232669377))));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-counts","handle-counts",2013967158),(function (db,p__10610){
var vec__10611 = p__10610;
var _ = cljs.core.nth.call(null,vec__10611,(0),null);
var res = cljs.core.nth.call(null,vec__10611,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"domain-counts","domain-counts",-175030005),res);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-counts","get-counts",1962746487),(function (db,p__10612){
var vec__10613 = p__10612;
var _ = cljs.core.nth.call(null,vec__10613,(0),null);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"msg-chan","msg-chan",-1224438894).cljs$core$IFn$_invoke$arity$1(db),"get-counts");

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"align","align",1964212802),(function (db,p__10614){
var vec__10615 = p__10614;
var _ = cljs.core.nth.call(null,vec__10615,(0),null);
var v = cljs.core.nth.call(null,vec__10615,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"align?","align?",-1419127676),v,new cljs.core.Keyword(null,"left-padding","left-padding",1669863700),0.5);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"data-satellites","data-satellites",-875847567),(function (db,p__10619){
var vec__10620 = p__10619;
var _ = cljs.core.nth.call(null,vec__10620,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10620,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.reduce_kv.call(null,((function (vec__10620,_,___$1){
return (function (p1__10616_SHARP_,p2__10617_SHARP_,p3__10618_SHARP_){
var r = cljs.core.rand.call(null,(40));
return cljs.core.assoc.call(null,p1__10616_SHARP_,p2__10617_SHARP_,cljs.core.assoc.call(null,p3__10618_SHARP_,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),((10) + cljs.core.rand_int.call(null,(7))),new cljs.core.Keyword(null,"x","x",2099068185),(cljs.core.rand_int.call(null,cljs.core.first.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"dim","dim",-497244536)))) - (30)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,cljs.core.peek.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"dim","dim",-497244536))))));
});})(vec__10620,_,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"data","data",-232669377))));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-text","show-text",464244146),(function (db,p__10621){
var vec__10622 = p__10621;
var _ = cljs.core.nth.call(null,vec__10622,(0),null);
var v = cljs.core.nth.call(null,vec__10622,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-text?","show-text?",1934354679),v);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-click","handle-click",2089352175),(function (db,p__10623){
var vec__10624 = p__10623;
var _ = cljs.core.nth.call(null,vec__10624,(0),null);
var typ = cljs.core.nth.call(null,vec__10624,(1),null);
var dom = cljs.core.nth.call(null,vec__10624,(2),null);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"msg-chan","msg-chan",-1224438894).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typ","typ",-1304536900),typ,new cljs.core.Keyword(null,"domain","domain",1847214937),dom], null));

return db;
}));

//# sourceMappingURL=handlers.js.map