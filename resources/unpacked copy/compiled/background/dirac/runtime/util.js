// Compiled by ClojureScript 1.8.51 {}
goog.provide('dirac.runtime.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('dirac.runtime.prefs');
dirac.runtime.util.make_version_info = (function dirac$runtime$util$make_version_info(version){
return [cljs.core.str("v"),cljs.core.str(version)].join('');
});
dirac.runtime.util.make_lib_info = (function dirac$runtime$util$make_lib_info(version){
return [cljs.core.str("Dirac Runtime "),cljs.core.str(dirac.runtime.util.make_version_info.call(null,version))].join('');
});
dirac.runtime.util.unknown_feature_msg = (function dirac$runtime$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(lib_info),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.call(null,known_features))].join('');
});
dirac.runtime.util.feature_not_available_msg = (function dirac$runtime$util$feature_not_available_msg(feature){
return [cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. "),cljs.core.str("Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join('');
});
dirac.runtime.util.feature_for_display = (function dirac$runtime$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str(feature)].join('')], null)], null);
});
dirac.runtime.util.feature_list_display = (function dirac$runtime$util$feature_list_display(installed_features,known_features){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,dirac.runtime.util.feature_for_display,installed_features),known_features);
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first.call(null,accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
dirac.runtime.util.display_banner_BANG_ = (function dirac$runtime$util$display_banner_BANG_(var_args){
var args__19793__auto__ = [];
var len__19786__auto___24433 = arguments.length;
var i__19787__auto___24434 = (0);
while(true){
if((i__19787__auto___24434 < len__19786__auto___24433)){
args__19793__auto__.push((arguments[i__19787__auto___24434]));

var G__24435 = (i__19787__auto___24434 + (1));
i__19787__auto___24434 = G__24435;
continue;
} else {
}
break;
}

var argseq__19794__auto__ = ((((3) < args__19793__auto__.length))?(new cljs.core.IndexedSeq(args__19793__auto__.slice((3)),(0),null)):null);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19794__auto__);
});

dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,known_features,fmt,params){
var vec__24432 = dirac.runtime.util.feature_list_display.call(null,installed_features,known_features);
var fmt_str = cljs.core.nth.call(null,vec__24432,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__24432,(1),null);
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(fmt),cljs.core.str(" "),cljs.core.str(fmt_str)].join('')], null),params,fmt_params);
return console.info.apply(console,cljs.core.into_array.call(null,items));
});

dirac.runtime.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

dirac.runtime.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq24428){
var G__24429 = cljs.core.first.call(null,seq24428);
var seq24428__$1 = cljs.core.next.call(null,seq24428);
var G__24430 = cljs.core.first.call(null,seq24428__$1);
var seq24428__$2 = cljs.core.next.call(null,seq24428__$1);
var G__24431 = cljs.core.first.call(null,seq24428__$2);
var seq24428__$3 = cljs.core.next.call(null,seq24428__$2);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24429,G__24430,G__24431,seq24428__$3);
});
dirac.runtime.util.display_banner_if_needed_BANG_ = (function dirac$runtime$util$display_banner_if_needed_BANG_(features_to_install,known_features,lib_info){
if(cljs.core.truth_(dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
return null;
} else {
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
return dirac.runtime.util.display_banner_BANG_.call(null,features_to_install,known_features,banner,lib_info_style,lib_info,reset_style);
}
});
dirac.runtime.util.report_unknown_features_BANG_ = (function dirac$runtime$util$report_unknown_features_BANG_(features,known_features,lib_info){
var seq__24440 = cljs.core.seq.call(null,features);
var chunk__24441 = null;
var count__24442 = (0);
var i__24443 = (0);
while(true){
if((i__24443 < count__24442)){
var feature = cljs.core._nth.call(null,chunk__24441,i__24443);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__24444 = seq__24440;
var G__24445 = chunk__24441;
var G__24446 = count__24442;
var G__24447 = (i__24443 + (1));
seq__24440 = G__24444;
chunk__24441 = G__24445;
count__24442 = G__24446;
i__24443 = G__24447;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24440);
if(temp__4657__auto__){
var seq__24440__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24440__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__24440__$1);
var G__24448 = cljs.core.chunk_rest.call(null,seq__24440__$1);
var G__24449 = c__19527__auto__;
var G__24450 = cljs.core.count.call(null,c__19527__auto__);
var G__24451 = (0);
seq__24440 = G__24448;
chunk__24441 = G__24449;
count__24442 = G__24450;
i__24443 = G__24451;
continue;
} else {
var feature = cljs.core.first.call(null,seq__24440__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__24452 = cljs.core.next.call(null,seq__24440__$1);
var G__24453 = null;
var G__24454 = (0);
var G__24455 = (0);
seq__24440 = G__24452;
chunk__24441 = G__24453;
count__24442 = G__24454;
i__24443 = G__24455;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.util.install_feature_BANG_ = (function dirac$runtime$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),features_to_install))){
if(cljs.core.truth_(available_fn.call(null,feature))){
return install_fn.call(null);
} else {
return console.warn(dirac.runtime.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map