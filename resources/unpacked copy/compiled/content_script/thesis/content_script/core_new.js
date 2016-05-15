// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.core_new');
goog.require('cljs.core');
goog.require('thesis.content_script.draw');
goog.require('domina.css');
goog.require('domina.core');
goog.require('hiccups.runtime');
goog.require('goog.events.EventType');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('goog.events');
goog.require('thesis.content_script.animation');
thesis.content_script.core_new.log = (function thesis$content_script$core_new$log(p1__16784_SHARP_){
return console.log(p1__16784_SHARP_);
});
thesis.content_script.core_new.app_db = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"normalize-size","normalize-size",-2080190737),new cljs.core.Keyword(null,"center-point","center-point",-1441426383),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"data","data",-232669377)],[(0),null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null),(0),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),(1),"start",new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["outbrain.com",(1),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["disqus.com",(1),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(49),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["typekit.com",(3),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["facebook",(3),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yldbt.com",(3),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["demdex.net",(3),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(5),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scorecardresearch.net",(3),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(15),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["googletagservices.net",(15),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(15),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["polarmobile.com",(15),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(15),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["optimizely.com",(15),false], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(3),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mediavoice.com",(3),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(3),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["omtrdc.net",(3),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(3),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zqkt.net",(3),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(8),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["amazon-adsystem.com",(7),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(8),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cloudfront.net",(7),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(7),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["domain1",(7),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(2),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["domain1",(3),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(19),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(3),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["domain2",(6),true], null)], null)], null)]));
thesis.content_script.core_new.dim = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null));
thesis.content_script.core_new.data = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
thesis.content_script.core_new.shift = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift","shift",997140064)], null));
thesis.content_script.core_new.offset = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null));
thesis.content_script.core_new.view = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null));
thesis.content_script.core_new.normalize = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalize","normalize",-1904390051)], null));
thesis.content_script.core_new.center_point_x = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-point","center-point",-1441426383),new cljs.core.Keyword(null,"x","x",2099068185)], null));
thesis.content_script.core_new.center_point_y = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-point","center-point",-1441426383),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
thesis.content_script.core_new.space = reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475)], null));
thesis.content_script.core_new.reactions = cljs.core.map_indexed.call(null,(function (p1__16785_SHARP_){
return thesis.content_script.animation.spring.call(null,reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),p1__16785_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)));
}),cljs.core.deref.call(null,thesis.content_script.core_new.data));
thesis.content_script.core_new.shift_spring = thesis.content_script.animation.spring.call(null,thesis.content_script.core_new.shift);
thesis.content_script.core_new.ospring = thesis.content_script.animation.spring.call(null,thesis.content_script.core_new.offset);
thesis.content_script.core_new.center_spring_x = thesis.content_script.animation.spring.call(null,thesis.content_script.core_new.center_point_x);
thesis.content_script.core_new.center_spring_y = thesis.content_script.animation.spring.call(null,thesis.content_script.core_new.center_point_y);
if(typeof thesis.content_script.core_new.resize_chan !== 'undefined'){
} else {
thesis.content_script.core_new.resize_chan = cljs.core.async.chan.call(null);
}
if(typeof thesis.content_script.core_new.scroll_chan !== 'undefined'){
} else {
thesis.content_script.core_new.scroll_chan = cljs.core.async.chan.call(null);
}
thesis.content_script.core_new.state_chan = cljs.core.async.chan.call(null);
thesis.content_script.core_new.randomize_data = (function thesis$content_script$core_new$randomize_data(){
return cljs.core.reset_BANG_.call(null,thesis.content_script.core_new.data,cljs.core.reduce.call(null,(function (p1__16786_SHARP_,p2__16787_SHARP_){
return cljs.core.conj.call(null,p1__16786_SHARP_,cljs.core.assoc.call(null,p2__16787_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((40) + (cljs.core.rand.call(null) * (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim)) - (80)))),new cljs.core.Keyword(null,"y","y",-1757859776),((40) + (cljs.core.rand.call(null) * (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim)) - (80))))], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),cljs.core.get_in.call(null,p2__16787_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(1)], null))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,thesis.content_script.core_new.data)));
});
thesis.content_script.core_new.align_right = (function thesis$content_script$core_new$align_right(){
return cljs.core.reset_BANG_.call(null,thesis.content_script.core_new.data,cljs.core.reduce.call(null,(function (p1__16788_SHARP_,p2__16789_SHARP_){
return cljs.core.conj.call(null,p1__16788_SHARP_,cljs.core.assoc.call(null,p2__16789_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.2 * new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim))),new cljs.core.Keyword(null,"y","y",-1757859776),((0.5 + cljs.core.count.call(null,p1__16788_SHARP_)) * (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim)) / cljs.core.count.call(null,cljs.core.deref.call(null,thesis.content_script.core_new.data))))], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),(8)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,thesis.content_script.core_new.data)));
});
thesis.content_script.core_new.single_view = (function thesis$content_script$core_new$single_view(){
return cljs.core.reset_BANG_.call(null,thesis.content_script.core_new.data,cljs.core.reduce.call(null,(function (p1__16790_SHARP_,p2__16791_SHARP_){
return cljs.core.conj.call(null,p1__16790_SHARP_,cljs.core.assoc.call(null,p2__16791_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__16790_SHARP_),(1)))?(100):(-200)),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var pred__16795 = cljs.core._EQ_;
var expr__16796 = cljs.core.count.call(null,p1__16790_SHARP_);
if(cljs.core.truth_(pred__16795.call(null,(1),expr__16796))){
return (100);
} else {
return cljs.core.get_in.call(null,p2__16791_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
}
})()], null),new cljs.core.Keyword(null,"display-size","display-size",1805257182),((cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__16790_SHARP_),(1)))?(15):(1))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,thesis.content_script.core_new.data)));
});
thesis.content_script.core_new.get_springs = (function thesis$content_script$core_new$get_springs(data){
return cljs.core.reduce.call(null,(function (p1__16798_SHARP_){
return cljs.core.conj.call(null,p1__16798_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.count.call(null,p1__16798_SHARP_),new cljs.core.Keyword(null,"x","x",2099068185),thesis.content_script.animation.spring.call(null,reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.count.call(null,p1__16798_SHARP_),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null))),new cljs.core.Keyword(null,"y","y",-1757859776),thesis.content_script.animation.spring.call(null,reagent.core.cursor.call(null,thesis.content_script.core_new.app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.count.call(null,p1__16798_SHARP_),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null)))], null));
}),cljs.core.PersistentVector.EMPTY,data);
});
thesis.content_script.core_new.springs = thesis.content_script.core_new.get_springs.call(null,cljs.core.deref.call(null,thesis.content_script.core_new.data));
thesis.content_script.core_new.switch_page = (function thesis$content_script$core_new$switch_page(){
var h = (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim)) / (1));
return cljs.core.swap_BANG_.call(null,thesis.content_script.core_new.offset,((function (h){
return (function (p1__16879_SHARP_){
var pred__16883 = cljs.core._EQ_;
var expr__16884 = p1__16879_SHARP_;
if(cljs.core.truth_(pred__16883.call(null,(0),expr__16884))){
return h;
} else {
if(cljs.core.truth_(pred__16883.call(null,h,expr__16884))){
return (0);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16884)].join('')));
}
}
});})(h))
);
});
thesis.content_script.core_new.switch_state = (function thesis$content_script$core_new$switch_state(chan){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_17019){
var state_val_17020 = (state_17019[(1)]);
if((state_val_17020 === (7))){
var inst_17014 = (state_17019[(2)]);
var state_17019__$1 = (function (){var statearr_17021 = state_17019;
(statearr_17021[(7)] = inst_17014);

return statearr_17021;
})();
var statearr_17022_17063 = state_17019__$1;
(statearr_17022_17063[(2)] = null);

(statearr_17022_17063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (1))){
var state_17019__$1 = state_17019;
var statearr_17023_17064 = state_17019__$1;
(statearr_17023_17064[(2)] = null);

(statearr_17023_17064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (4))){
var inst_16979 = (state_17019[(8)]);
var inst_16979__$1 = (state_17019[(2)]);
var inst_16983 = cljs.core._EQ_.call(null,"page",inst_16979__$1);
var state_17019__$1 = (function (){var statearr_17024 = state_17019;
(statearr_17024[(8)] = inst_16979__$1);

return statearr_17024;
})();
if(inst_16983){
var statearr_17025_17066 = state_17019__$1;
(statearr_17025_17066[(1)] = (5));

} else {
var statearr_17026_17067 = state_17019__$1;
(statearr_17026_17067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (15))){
var inst_16979 = (state_17019[(8)]);
var inst_17000 = cljs.core._EQ_.call(null,"single",inst_16979);
var state_17019__$1 = state_17019;
if(inst_17000){
var statearr_17027_17069 = state_17019__$1;
(statearr_17027_17069[(1)] = (17));

} else {
var statearr_17028_17070 = state_17019__$1;
(statearr_17028_17070[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (13))){
var inst_17010 = (state_17019[(2)]);
var state_17019__$1 = state_17019;
var statearr_17029_17071 = state_17019__$1;
(statearr_17029_17071[(2)] = inst_17010);

(statearr_17029_17071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (6))){
var inst_16979 = (state_17019[(8)]);
var inst_16988 = cljs.core._EQ_.call(null,"hu",inst_16979);
var state_17019__$1 = state_17019;
if(inst_16988){
var statearr_17030_17072 = state_17019__$1;
(statearr_17030_17072[(1)] = (8));

} else {
var statearr_17031_17073 = state_17019__$1;
(statearr_17031_17073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (17))){
var inst_17002 = thesis.content_script.core_new.single_view.call(null);
var state_17019__$1 = state_17019;
var statearr_17032_17074 = state_17019__$1;
(statearr_17032_17074[(2)] = inst_17002);

(statearr_17032_17074[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (3))){
var inst_17017 = (state_17019[(2)]);
var state_17019__$1 = state_17019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17019__$1,inst_17017);
} else {
if((state_val_17020 === (12))){
var inst_16979 = (state_17019[(8)]);
var inst_16996 = cljs.core._EQ_.call(null,"align",inst_16979);
var state_17019__$1 = state_17019;
if(inst_16996){
var statearr_17033_17075 = state_17019__$1;
(statearr_17033_17075[(1)] = (14));

} else {
var statearr_17034_17076 = state_17019__$1;
(statearr_17034_17076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (2))){
var state_17019__$1 = state_17019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17019__$1,(4),chan);
} else {
if((state_val_17020 === (19))){
var inst_17006 = (state_17019[(2)]);
var state_17019__$1 = state_17019;
var statearr_17035_17077 = state_17019__$1;
(statearr_17035_17077[(2)] = inst_17006);

(statearr_17035_17077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (11))){
var inst_16994 = thesis.content_script.core_new.randomize_data.call(null);
var state_17019__$1 = state_17019;
var statearr_17036_17078 = state_17019__$1;
(statearr_17036_17078[(2)] = inst_16994);

(statearr_17036_17078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (9))){
var inst_16979 = (state_17019[(8)]);
var inst_16992 = cljs.core._EQ_.call(null,"randomize",inst_16979);
var state_17019__$1 = state_17019;
if(inst_16992){
var statearr_17037_17079 = state_17019__$1;
(statearr_17037_17079[(1)] = (11));

} else {
var statearr_17038_17080 = state_17019__$1;
(statearr_17038_17080[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (5))){
var inst_16979 = (state_17019[(8)]);
var inst_16985 = (function (){var msg = inst_16979;
var pred__16980 = cljs.core._EQ_;
var expr__16981 = inst_16979;
return ((function (msg,pred__16980,expr__16981,inst_16979,state_val_17020,c__8864__auto__){
return (function (p1__16889_SHARP_){
var pred__17039 = cljs.core._EQ_;
var expr__17040 = p1__16889_SHARP_;
if(cljs.core.truth_(pred__17039.call(null,(0),expr__17040))){
return (1);
} else {
if(cljs.core.truth_(pred__17039.call(null,(1),expr__17040))){
return (-1);
} else {
if(cljs.core.truth_(pred__17039.call(null,(-1),expr__17040))){
return (0);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17040)].join('')));
}
}
}
});
;})(msg,pred__16980,expr__16981,inst_16979,state_val_17020,c__8864__auto__))
})();
var inst_16986 = cljs.core.swap_BANG_.call(null,thesis.content_script.core_new.shift,inst_16985);
var state_17019__$1 = state_17019;
var statearr_17042_17087 = state_17019__$1;
(statearr_17042_17087[(2)] = inst_16986);

(statearr_17042_17087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (14))){
var inst_16998 = thesis.content_script.core_new.align_right.call(null);
var state_17019__$1 = state_17019;
var statearr_17043_17090 = state_17019__$1;
(statearr_17043_17090[(2)] = inst_16998);

(statearr_17043_17090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (16))){
var inst_17008 = (state_17019[(2)]);
var state_17019__$1 = state_17019;
var statearr_17044_17091 = state_17019__$1;
(statearr_17044_17091[(2)] = inst_17008);

(statearr_17044_17091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (10))){
var inst_17012 = (state_17019[(2)]);
var state_17019__$1 = state_17019;
var statearr_17045_17094 = state_17019__$1;
(statearr_17045_17094[(2)] = inst_17012);

(statearr_17045_17094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (18))){
var state_17019__$1 = state_17019;
var statearr_17046_17095 = state_17019__$1;
(statearr_17046_17095[(2)] = null);

(statearr_17046_17095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17020 === (8))){
var inst_16990 = thesis.content_script.core_new.switch_page.call(null);
var state_17019__$1 = state_17019;
var statearr_17047_17096 = state_17019__$1;
(statearr_17047_17096[(2)] = inst_16990);

(statearr_17047_17096[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$core_new$switch_state_$_state_machine__8706__auto__ = null;
var thesis$content_script$core_new$switch_state_$_state_machine__8706__auto____0 = (function (){
var statearr_17051 = [null,null,null,null,null,null,null,null,null];
(statearr_17051[(0)] = thesis$content_script$core_new$switch_state_$_state_machine__8706__auto__);

(statearr_17051[(1)] = (1));

return statearr_17051;
});
var thesis$content_script$core_new$switch_state_$_state_machine__8706__auto____1 = (function (state_17019){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_17019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e17055){if((e17055 instanceof Object)){
var ex__8709__auto__ = e17055;
var statearr_17056_17097 = state_17019;
(statearr_17056_17097[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17098 = state_17019;
state_17019 = G__17098;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$core_new$switch_state_$_state_machine__8706__auto__ = function(state_17019){
switch(arguments.length){
case 0:
return thesis$content_script$core_new$switch_state_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$core_new$switch_state_$_state_machine__8706__auto____1.call(this,state_17019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core_new$switch_state_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core_new$switch_state_$_state_machine__8706__auto____0;
thesis$content_script$core_new$switch_state_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core_new$switch_state_$_state_machine__8706__auto____1;
return thesis$content_script$core_new$switch_state_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_17057 = f__8865__auto__.call(null);
(statearr_17057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_17057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
});
thesis.content_script.core_new.switch_state.call(null,thesis.content_script.core_new.state_chan);
thesis.content_script.core_new.add_image_listeners = (function thesis$content_script$core_new$add_image_listeners(){
window.addEventListener("wheel",(function (p1__17099_SHARP_){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_17194){
var state_val_17195 = (state_17194[(1)]);
if((state_val_17195 === (1))){
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17194__$1,(2),thesis.content_script.core_new.scroll_chan,p1__17099_SHARP_);
} else {
if((state_val_17195 === (2))){
var inst_17192 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17194__$1,inst_17192);
} else {
return null;
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_17199 = [null,null,null,null,null,null,null];
(statearr_17199[(0)] = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__);

(statearr_17199[(1)] = (1));

return statearr_17199;
});
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_17194){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_17194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e17200){if((e17200 instanceof Object)){
var ex__8709__auto__ = e17200;
var statearr_17201_17323 = state_17194;
(statearr_17201_17323[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17324 = state_17194;
state_17194 = G__17324;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = function(state_17194){
switch(arguments.length){
case 0:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_17194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_17218 = f__8865__auto__.call(null);
(statearr_17218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_17218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

window.addEventListener("resize",(function (e){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_17222){
var state_val_17223 = (state_17222[(1)]);
if((state_val_17223 === (1))){
var state_17222__$1 = state_17222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17222__$1,(2),thesis.content_script.core_new.resize_chan,"hu");
} else {
if((state_val_17223 === (2))){
var inst_17220 = (state_17222[(2)]);
var state_17222__$1 = state_17222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17222__$1,inst_17220);
} else {
return null;
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_17227 = [null,null,null,null,null,null,null];
(statearr_17227[(0)] = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__);

(statearr_17227[(1)] = (1));

return statearr_17227;
});
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_17222){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_17222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e17228){if((e17228 instanceof Object)){
var ex__8709__auto__ = e17228;
var statearr_17229_17329 = state_17222;
(statearr_17229_17329[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17330 = state_17222;
state_17222 = G__17330;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = function(state_17222){
switch(arguments.length){
case 0:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_17222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_17230 = f__8865__auto__.call(null);
(statearr_17230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_17230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

window.addEventListener("mousedown",(function (){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_17234){
var state_val_17235 = (state_17234[(1)]);
if((state_val_17235 === (1))){
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17234__$1,(2),thesis.content_script.core_new.state_chan,"mouse");
} else {
if((state_val_17235 === (2))){
var inst_17232 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17234__$1,inst_17232);
} else {
return null;
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_17239 = [null,null,null,null,null,null,null];
(statearr_17239[(0)] = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__);

(statearr_17239[(1)] = (1));

return statearr_17239;
});
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_17234){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_17234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e17240){if((e17240 instanceof Object)){
var ex__8709__auto__ = e17240;
var statearr_17241_17333 = state_17234;
(statearr_17241_17333[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17334 = state_17234;
state_17234 = G__17334;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = function(state_17234){
switch(arguments.length){
case 0:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_17234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_17242 = f__8865__auto__.call(null);
(statearr_17242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_17242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

window.addEventListener("keydown",(function (p1__17100_SHARP_){
var c__8864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto__){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto__){
return (function (state_17271){
var state_val_17272 = (state_17271[(1)]);
if((state_val_17272 === (7))){
var inst_17246 = (state_17271[(7)]);
var inst_17253 = cljs.core._EQ_.call(null,"KeyA",inst_17246);
var state_17271__$1 = state_17271;
if(inst_17253){
var statearr_17273_17335 = state_17271__$1;
(statearr_17273_17335[(1)] = (9));

} else {
var statearr_17274_17336 = state_17271__$1;
(statearr_17274_17336[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (1))){
var inst_17246 = (state_17271[(7)]);
var inst_17246__$1 = p1__17100_SHARP_.code;
var inst_17247 = cljs.core._EQ_.call(null,"KeyJ",inst_17246__$1);
var state_17271__$1 = (function (){var statearr_17275 = state_17271;
(statearr_17275[(7)] = inst_17246__$1);

return statearr_17275;
})();
if(inst_17247){
var statearr_17276_17337 = state_17271__$1;
(statearr_17276_17337[(1)] = (3));

} else {
var statearr_17277_17338 = state_17271__$1;
(statearr_17277_17338[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (4))){
var inst_17246 = (state_17271[(7)]);
var inst_17250 = cljs.core._EQ_.call(null,"KeyS",inst_17246);
var state_17271__$1 = state_17271;
if(inst_17250){
var statearr_17278_17340 = state_17271__$1;
(statearr_17278_17340[(1)] = (6));

} else {
var statearr_17279_17342 = state_17271__$1;
(statearr_17279_17342[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (13))){
var inst_17259 = [cljs.core.str("default")].join('');
var state_17271__$1 = state_17271;
var statearr_17280_17343 = state_17271__$1;
(statearr_17280_17343[(2)] = inst_17259);

(statearr_17280_17343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (6))){
var state_17271__$1 = state_17271;
var statearr_17281_17362 = state_17271__$1;
(statearr_17281_17362[(2)] = "single");

(statearr_17281_17362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (3))){
var state_17271__$1 = state_17271;
var statearr_17282_17363 = state_17271__$1;
(statearr_17282_17363[(2)] = "page");

(statearr_17282_17363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (12))){
var state_17271__$1 = state_17271;
var statearr_17283_17364 = state_17271__$1;
(statearr_17283_17364[(2)] = "randomize");

(statearr_17283_17364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (2))){
var inst_17269 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17271__$1,inst_17269);
} else {
if((state_val_17272 === (11))){
var inst_17263 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17284_17365 = state_17271__$1;
(statearr_17284_17365[(2)] = inst_17263);

(statearr_17284_17365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (9))){
var state_17271__$1 = state_17271;
var statearr_17285_17367 = state_17271__$1;
(statearr_17285_17367[(2)] = "align");

(statearr_17285_17367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (5))){
var inst_17267 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17271__$1,(2),thesis.content_script.core_new.state_chan,inst_17267);
} else {
if((state_val_17272 === (14))){
var inst_17261 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17286_17454 = state_17271__$1;
(statearr_17286_17454[(2)] = inst_17261);

(statearr_17286_17454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (10))){
var inst_17246 = (state_17271[(7)]);
var inst_17256 = cljs.core._EQ_.call(null,"KeyR",inst_17246);
var state_17271__$1 = state_17271;
if(inst_17256){
var statearr_17287_17458 = state_17271__$1;
(statearr_17287_17458[(1)] = (12));

} else {
var statearr_17288_17459 = state_17271__$1;
(statearr_17288_17459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (8))){
var inst_17265 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17289_17460 = state_17271__$1;
(statearr_17289_17460[(2)] = inst_17265);

(statearr_17289_17460[(1)] = (5));


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
}
}
}
}
}
}
}
});})(c__8864__auto__))
;
return ((function (switch__8705__auto__,c__8864__auto__){
return (function() {
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = null;
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0 = (function (){
var statearr_17293 = [null,null,null,null,null,null,null,null];
(statearr_17293[(0)] = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__);

(statearr_17293[(1)] = (1));

return statearr_17293;
});
var thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1 = (function (state_17271){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_17271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e17296){if((e17296 instanceof Object)){
var ex__8709__auto__ = e17296;
var statearr_17297_17461 = state_17271;
(statearr_17297_17461[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17462 = state_17271;
state_17271 = G__17462;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__ = function(state_17271){
switch(arguments.length){
case 0:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1.call(this,state_17271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____0;
thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto____1;
return thesis$content_script$core_new$add_image_listeners_$_state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto__))
})();
var state__8866__auto__ = (function (){var statearr_17298 = f__8865__auto__.call(null);
(statearr_17298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto__);

return statearr_17298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto__))
);

return c__8864__auto__;
}));

domina.events.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),(function (e){
return null;
}));

return domina.events.listen_BANG_.call(null,domina.core.by_class.call(null,"ext-image"),new cljs.core.Keyword(null,"webkitAnimationEnd","webkitAnimationEnd",1142194642),(function (evt){
return cljs.core.println.call(null,[cljs.core.str("ende"),cljs.core.str(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(evt))].join(''));
}));
});
thesis.content_script.core_new.get_initial_coordinates = (function thesis$content_script$core_new$get_initial_coordinates(datac){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim));
var h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim));
var data = cljs.core.deref.call(null,datac);
return cljs.core.map_indexed.call(null,((function (w,h,data){
return (function (p1__17488_SHARP_,p2__17487_SHARP_){
return cljs.core.update_in.call(null,p2__17487_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,((0.5 + p1__17488_SHARP_) * (h / cljs.core.count.call(null,data))));
});})(w,h,data))
,data);
});
thesis.content_script.core_new.setup = (function thesis$content_script$core_new$setup(){
cljs.core.swap_BANG_.call(null,thesis.content_script.core_new.dim,(function (p1__17493_SHARP_){
return cljs.core.assoc.call(null,p1__17493_SHARP_,new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight);
}));

thesis.content_script.core_new.add_image_listeners.call(null);

thesis.content_script.core_new.get_initial_coordinates.call(null,thesis.content_script.core_new.data);

thesis.content_script.core_new.randomize_data.call(null);

cljs.core.reset_BANG_.call(null,thesis.content_script.core_new.center_point_x,(0));

cljs.core.reset_BANG_.call(null,thesis.content_script.core_new.center_point_y,(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim)) / (2)));

return domina.core.append_BANG_.call(null,domina.css.sel.call(null,"body"),[cljs.core.str(((cljs.core.not.call(null,domina.core.by_id.call(null,"ext-canvas-container")))?[cljs.core.str("<div id=\"ext-canvas-container\"></div>")].join(''):null))].join(''));
});
var c__8864__auto___17526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___17526){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___17526){
return (function (state_17514){
var state_val_17515 = (state_17514[(1)]);
if((state_val_17515 === (1))){
var state_17514__$1 = state_17514;
var statearr_17516_17527 = state_17514__$1;
(statearr_17516_17527[(2)] = null);

(statearr_17516_17527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (2))){
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17514__$1,(4),thesis.content_script.core_new.resize_chan);
} else {
if((state_val_17515 === (3))){
var inst_17512 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17514__$1,inst_17512);
} else {
if((state_val_17515 === (4))){
var inst_17507 = (state_17514[(2)]);
var inst_17508 = (function (){return ((function (inst_17507,state_val_17515,c__8864__auto___17526){
return (function (p1__17503_SHARP_){
return cljs.core.assoc.call(null,p1__17503_SHARP_,new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight);
});
;})(inst_17507,state_val_17515,c__8864__auto___17526))
})();
var inst_17509 = cljs.core.swap_BANG_.call(null,thesis.content_script.core_new.dim,inst_17508);
var state_17514__$1 = (function (){var statearr_17517 = state_17514;
(statearr_17517[(7)] = inst_17507);

(statearr_17517[(8)] = inst_17509);

return statearr_17517;
})();
var statearr_17518_17548 = state_17514__$1;
(statearr_17518_17548[(2)] = null);

(statearr_17518_17548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8864__auto___17526))
;
return ((function (switch__8705__auto__,c__8864__auto___17526){
return (function() {
var thesis$content_script$core_new$state_machine__8706__auto__ = null;
var thesis$content_script$core_new$state_machine__8706__auto____0 = (function (){
var statearr_17522 = [null,null,null,null,null,null,null,null,null];
(statearr_17522[(0)] = thesis$content_script$core_new$state_machine__8706__auto__);

(statearr_17522[(1)] = (1));

return statearr_17522;
});
var thesis$content_script$core_new$state_machine__8706__auto____1 = (function (state_17514){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_17514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e17523){if((e17523 instanceof Object)){
var ex__8709__auto__ = e17523;
var statearr_17524_17560 = state_17514;
(statearr_17524_17560[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17565 = state_17514;
state_17514 = G__17565;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$core_new$state_machine__8706__auto__ = function(state_17514){
switch(arguments.length){
case 0:
return thesis$content_script$core_new$state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$core_new$state_machine__8706__auto____1.call(this,state_17514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core_new$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core_new$state_machine__8706__auto____0;
thesis$content_script$core_new$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core_new$state_machine__8706__auto____1;
return thesis$content_script$core_new$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___17526))
})();
var state__8866__auto__ = (function (){var statearr_17525 = f__8865__auto__.call(null);
(statearr_17525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___17526);

return statearr_17525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___17526))
);

var c__8864__auto___17617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8864__auto___17617){
return (function (){
var f__8865__auto__ = (function (){var switch__8705__auto__ = ((function (c__8864__auto___17617){
return (function (state_17596){
var state_val_17598 = (state_17596[(1)]);
if((state_val_17598 === (1))){
var state_17596__$1 = state_17596;
var statearr_17606_17618 = state_17596__$1;
(statearr_17606_17618[(2)] = null);

(statearr_17606_17618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (2))){
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17596__$1,(4),thesis.content_script.core_new.scroll_chan);
} else {
if((state_val_17598 === (3))){
var inst_17594 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17596__$1,inst_17594);
} else {
if((state_val_17598 === (4))){
var inst_17586 = (state_17596[(2)]);
var inst_17587 = inst_17586.deltaY;
var inst_17588 = cljs.core.println.call(null,inst_17587);
var inst_17589 = (function (){var dy = inst_17587;
return ((function (dy,inst_17586,inst_17587,inst_17588,state_val_17598,c__8864__auto___17617){
return (function (){
return (cljs.core.deref.call(null,thesis.content_script.core_new.offset) + dy);
});
;})(dy,inst_17586,inst_17587,inst_17588,state_val_17598,c__8864__auto___17617))
})();
var inst_17590 = cljs.core.swap_BANG_.call(null,thesis.content_script.core_new.offset,inst_17589);
var state_17596__$1 = (function (){var statearr_17607 = state_17596;
(statearr_17607[(7)] = inst_17588);

(statearr_17607[(8)] = inst_17590);

return statearr_17607;
})();
var statearr_17608_17622 = state_17596__$1;
(statearr_17608_17622[(2)] = null);

(statearr_17608_17622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8864__auto___17617))
;
return ((function (switch__8705__auto__,c__8864__auto___17617){
return (function() {
var thesis$content_script$core_new$state_machine__8706__auto__ = null;
var thesis$content_script$core_new$state_machine__8706__auto____0 = (function (){
var statearr_17613 = [null,null,null,null,null,null,null,null,null];
(statearr_17613[(0)] = thesis$content_script$core_new$state_machine__8706__auto__);

(statearr_17613[(1)] = (1));

return statearr_17613;
});
var thesis$content_script$core_new$state_machine__8706__auto____1 = (function (state_17596){
while(true){
var ret_value__8707__auto__ = (function (){try{while(true){
var result__8708__auto__ = switch__8705__auto__.call(null,state_17596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8708__auto__;
}
break;
}
}catch (e17614){if((e17614 instanceof Object)){
var ex__8709__auto__ = e17614;
var statearr_17615_17625 = state_17596;
(statearr_17615_17625[(5)] = ex__8709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17627 = state_17596;
state_17596 = G__17627;
continue;
} else {
return ret_value__8707__auto__;
}
break;
}
});
thesis$content_script$core_new$state_machine__8706__auto__ = function(state_17596){
switch(arguments.length){
case 0:
return thesis$content_script$core_new$state_machine__8706__auto____0.call(this);
case 1:
return thesis$content_script$core_new$state_machine__8706__auto____1.call(this,state_17596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$core_new$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$core_new$state_machine__8706__auto____0;
thesis$content_script$core_new$state_machine__8706__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$core_new$state_machine__8706__auto____1;
return thesis$content_script$core_new$state_machine__8706__auto__;
})()
;})(switch__8705__auto__,c__8864__auto___17617))
})();
var state__8866__auto__ = (function (){var statearr_17616 = f__8865__auto__.call(null);
(statearr_17616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8864__auto___17617);

return statearr_17616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8866__auto__);
});})(c__8864__auto___17617))
);

thesis.content_script.core_new.sc_overview = (function thesis$content_script$core_new$sc_overview(form,data){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17629_SHARP_){
return thesis.content_script.draw.draw_text.call(null,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,data,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"y","y",-1757859776))], null),cljs.core.get_in.call(null,p1__17629_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0)], null)),(25));
}),data));
});
thesis.content_script.core_new.sc_satellites = (function thesis$content_script$core_new$sc_satellites(form,center,data,osf){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17662_SHARP_){
return thesis.content_script.draw.draw_entity.call(null,form,center,p1__17662_SHARP_,osf);
}),data));
});
thesis.content_script.core_new.sc_clusters = (function thesis$content_script$core_new$sc_clusters(form,center,data){
return cljs.core.reduce.call(null,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.PersistentVector.EMPTY,data);
});
thesis.content_script.core_new.get_visible_elements = (function thesis$content_script$core_new$get_visible_elements(data){
return cljs.core.filter.call(null,(function (p1__17688_SHARP_){
var and__6196__auto__ = (cljs.core.get_in.call(null,p1__17688_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)) < new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim)));
if(and__6196__auto__){
var and__6196__auto____$1 = (cljs.core.get_in.call(null,p1__17688_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"h","h",1109658740)], null)) < new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim)));
if(and__6196__auto____$1){
return data;
} else {
return and__6196__auto____$1;
}
} else {
return and__6196__auto__;
}
}));
});
thesis.content_script.core_new.get_elements = (function thesis$content_script$core_new$get_elements(spr){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17698_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref.call(null,cljs.core.get.call(null,p1__17698_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.deref.call(null,cljs.core.get.call(null,p1__17698_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get_in.call(null,cljs.core.deref.call(null,thesis.content_script.core_new.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,p1__17698_SHARP_,new cljs.core.Keyword(null,"no","no",-390373634)),new cljs.core.Keyword(null,"data","data",-232669377)], null)),new cljs.core.Keyword(null,"display-size","display-size",1805257182),cljs.core.get_in.call(null,cljs.core.deref.call(null,thesis.content_script.core_new.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,p1__17698_SHARP_,new cljs.core.Keyword(null,"no","no",-390373634)),new cljs.core.Keyword(null,"display-size","display-size",1805257182)], null)));
}),spr));
});
thesis.content_script.core_new.offspringify = (function thesis$content_script$core_new$offspringify(data){
return cljs.core.map.call(null,(function (p1__17700_SHARP_){
return cljs.core.assoc_in.call(null,p1__17700_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.deref.call(null,thesis.content_script.core_new.ospring) + cljs.core.get_in.call(null,p1__17700_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null))));
}),data);
});
thesis.content_script.core_new.draw = (function thesis$content_script$core_new$draw(var_args){
var args17707 = [];
var len__7278__auto___17713 = arguments.length;
var i__7279__auto___17714 = (0);
while(true){
if((i__7279__auto___17714 < len__7278__auto___17713)){
args17707.push((arguments[i__7279__auto___17714]));

var G__17715 = (i__7279__auto___17714 + (1));
i__7279__auto___17714 = G__17715;
continue;
} else {
}
break;
}

var G__17709 = args17707.length;
switch (G__17709) {
case 6:
return thesis.content_script.core_new.draw.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 2:
return thesis.content_script.core_new.draw.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17707.length)].join('')));

}
});

thesis.content_script.core_new.draw.cljs$core$IFn$_invoke$arity$6 = (function (time,form,w,h,center,data){
var os = cljs.core.deref.call(null,thesis.content_script.core_new.ospring);
var osf = cljs.core.deref.call(null,thesis.content_script.core_new.offset);
thesis.content_script.core_new.space.ctx.clearRect((0),(0),w,h);

var pred__17710_17719 = cljs.core._EQ_;
var expr__17711_17720 = cljs.core.deref.call(null,thesis.content_script.core_new.view);
if(cljs.core.truth_(pred__17710_17719.call(null,"start",expr__17711_17720))){
thesis.content_script.core_new.sc_satellites.call(null,form,center,data,osf);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17711_17720)].join('')));
}

return window.requestAnimationFrame(((function (os,osf){
return (function (p1__17706_SHARP_){
return thesis.content_script.core_new.draw.call(null,p1__17706_SHARP_,form);
});})(os,osf))
);
});

thesis.content_script.core_new.draw.cljs$core$IFn$_invoke$arity$2 = (function (time,form){
var h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim));
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,thesis.content_script.core_new.dim));
return thesis.content_script.core_new.draw.call(null,time,form,w,h,(new Vector(cljs.core.deref.call(null,thesis.content_script.core_new.center_spring_x),cljs.core.deref.call(null,thesis.content_script.core_new.center_spring_y))).add((1),cljs.core.deref.call(null,thesis.content_script.core_new.offset)),thesis.content_script.core_new.get_elements.call(null,thesis.content_script.core_new.springs));
});

thesis.content_script.core_new.draw.cljs$lang$maxFixedArity = 6;
thesis.content_script.core_new.init_BANG_ = (function thesis$content_script$core_new$init_BANG_(){
thesis.content_script.core_new.log.call(null,"huiui");

thesis.content_script.core_new.setup.call(null);

cljs.core.swap_BANG_.call(null,thesis.content_script.core_new.space,(new CanvasSpace()).display("#ext-canvas-container").refresh(true));

return thesis.content_script.core_new.draw.call(null,(0),(new Form(thesis.content_script.core_new.space)));
});

//# sourceMappingURL=core_new.js.map