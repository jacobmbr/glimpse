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
var args__7285__auto__ = [];
var len__7278__auto___8207 = arguments.length;
var i__7279__auto___8208 = (0);
while(true){
if((i__7279__auto___8208 < len__7278__auto___8207)){
args__7285__auto__.push((arguments[i__7279__auto___8208]));

var G__8209 = (i__7279__auto___8208 + (1));
i__7279__auto___8208 = G__8209;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((3) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((3)),(0),null)):null);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7286__auto__);
});

dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,known_features,fmt,params){
var vec__8206 = dirac.runtime.util.feature_list_display.call(null,installed_features,known_features);
var fmt_str = cljs.core.nth.call(null,vec__8206,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__8206,(1),null);
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(fmt),cljs.core.str(" "),cljs.core.str(fmt_str)].join('')], null),params,fmt_params);
return console.info.apply(console,cljs.core.into_array.call(null,items));
});

dirac.runtime.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

dirac.runtime.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq8177){
var G__8178 = cljs.core.first.call(null,seq8177);
var seq8177__$1 = cljs.core.next.call(null,seq8177);
var G__8179 = cljs.core.first.call(null,seq8177__$1);
var seq8177__$2 = cljs.core.next.call(null,seq8177__$1);
var G__8180 = cljs.core.first.call(null,seq8177__$2);
var seq8177__$3 = cljs.core.next.call(null,seq8177__$2);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8178,G__8179,G__8180,seq8177__$3);
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
var seq__8222 = cljs.core.seq.call(null,features);
var chunk__8223 = null;
var count__8224 = (0);
var i__8225 = (0);
while(true){
if((i__8225 < count__8224)){
var feature = cljs.core._nth.call(null,chunk__8223,i__8225);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__8230 = seq__8222;
var G__8231 = chunk__8223;
var G__8232 = count__8224;
var G__8233 = (i__8225 + (1));
seq__8222 = G__8230;
chunk__8223 = G__8231;
count__8224 = G__8232;
i__8225 = G__8233;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8222);
if(temp__4657__auto__){
var seq__8222__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8222__$1)){
var c__7019__auto__ = cljs.core.chunk_first.call(null,seq__8222__$1);
var G__8234 = cljs.core.chunk_rest.call(null,seq__8222__$1);
var G__8235 = c__7019__auto__;
var G__8236 = cljs.core.count.call(null,c__7019__auto__);
var G__8237 = (0);
seq__8222 = G__8234;
chunk__8223 = G__8235;
count__8224 = G__8236;
i__8225 = G__8237;
continue;
} else {
var feature = cljs.core.first.call(null,seq__8222__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__8238 = cljs.core.next.call(null,seq__8222__$1);
var G__8239 = null;
var G__8240 = (0);
var G__8241 = (0);
seq__8222 = G__8238;
chunk__8223 = G__8239;
count__8224 = G__8240;
i__8225 = G__8241;
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