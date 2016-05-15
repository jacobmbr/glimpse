// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('chromex.logging');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"count","count",2139924085),(function (db,i){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"data","data",-232669377)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"has-info?","has-info?",1832610505),(function (db,p__16774){
var vec__16775 = p__16774;
var _ = cljs.core.nth.call(null,vec__16775,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16775,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__16775,_,___$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-info?","has-info?",1832610505)], null));
});})(vec__16775,_,___$1))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"tab-url","tab-url",1066626054),(function (db,p__16776){
var vec__16777 = p__16776;
var _ = cljs.core.nth.call(null,vec__16777,(0),null);
var i = cljs.core.nth.call(null,vec__16777,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__16777,_,i){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-url","tab-url",1066626054)], null));
});})(vec__16777,_,i))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"in-data","in-data",89576440),(function (db,p__16779){
var vec__16780 = p__16779;
var _ = cljs.core.nth.call(null,vec__16780,(0),null);
var i = cljs.core.nth.call(null,vec__16780,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__16780,_,i){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),i], null));
});})(vec__16780,_,i))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"img-data","img-data",1071238824),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"img-data","img-data",1071238824));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"img-pos","img-pos",773671819),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"img-pos","img-pos",773671819));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"data","data",-232669377));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"img-scale","img-scale",1331504493),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"img-scale","img-scale",1331504493));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"show-text?","show-text?",1934354679),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"show-text?","show-text?",1934354679));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"align?","align?",-1419127676),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"align?","align?",-1419127676));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"dim","dim",-497244536),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"dim","dim",-497244536));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"left-padding","left-padding",1669863700),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"left-padding","left-padding",1669863700));
}));
}));

//# sourceMappingURL=subs.js.map