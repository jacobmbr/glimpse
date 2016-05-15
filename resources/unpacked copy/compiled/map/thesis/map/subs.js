// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.map.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('chromex.logging');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"geojson","geojson",-719473398),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.reduce.call(null,(function (p1__71123_SHARP_,p2__71124_SHARP_){
return cljs.core.conj.call(null,p1__71123_SHARP_,(function (){var strs = clojure.string.split.call(null,cljs.core.first.call(null,p2__71124_SHARP_),/\|/);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.peek.call(null,p2__71124_SHARP_),new cljs.core.Keyword(null,"marker-symbol","marker-symbol",840124796),"airport"], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),[cljs.core.subs.call(null,cljs.core.get.call(null,strs,(1)),(0),(7)),cljs.core.subs.call(null,cljs.core.first.call(null,strs),(0),(7))]], null)], null);
})());
}),cljs.core.PersistentVector.EMPTY,cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"location-counts","location-counts",403812493)))], null));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"display-info-box?","display-info-box?",1862904652),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"display-info-box?","display-info-box?",1862904652));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"dim","dim",-497244536),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"window","window",724519534));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"mouse","mouse",478628972),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"mouse","mouse",478628972));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"domain-info","domain-info",19852994),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"domain-info","domain-info",19852994));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"site-info","site-info",-17357115),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"site-info","site-info",-17357115));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"loading-site-info?","loading-site-info?",1673710259),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading-site-info?","loading-site-info?",1673710259));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"loading-domain-info?","loading-domain-info?",-126738217),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading-domain-info?","loading-domain-info?",-126738217));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"history","history",-247395220),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"history","history",-247395220));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"loading-history?","loading-history?",-856994028),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading-history?","loading-history?",-856994028));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"loading-location-counts?","loading-location-counts?",1919307004),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading-location-counts?","loading-location-counts?",1919307004));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"loading-locations?","loading-locations?",691123512),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading-locations?","loading-locations?",691123512));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"my-location","my-location",-440971813),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"my-location","my-location",-440971813));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"loading-locations?","loading-locations?",691123512),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading-locations?","loading-locations?",691123512));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"distinct-locations","distinct-locations",-1429989749),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"distinct-locations","distinct-locations",-1429989749));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"loading-domains?","loading-domains?",605568016),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading-domains?","loading-domains?",605568016));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"distinct-domains","distinct-domains",1062236270),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"distinct-domains","distinct-domains",1062236270));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,db);
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"show-state?","show-state?",-1077172854),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"show-state","show-state",-733141016));
}));
}));

//# sourceMappingURL=subs.js.map