// Compiled by ClojureScript 1.8.51 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('devtools.version');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858)], null);
devtools.core.features_to_install_by_default = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779)], null);
devtools.core.make_version_info = (function devtools$core$make_version_info(){
var version = devtools.version.get_current_version.call(null);
return [cljs.core.str("v"),cljs.core.str(version)].join('');
});
devtools.core.make_lib_info = (function devtools$core$make_lib_info(){
return [cljs.core.str("CLJS DevTools "),cljs.core.str(devtools.core.make_version_info.call(null))].join('');
});
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__46261 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__46261) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args46263 = [];
var len__19487__auto___46267 = arguments.length;
var i__19488__auto___46268 = (0);
while(true){
if((i__19488__auto___46268 < len__19487__auto___46267)){
args46263.push((arguments[i__19488__auto___46268]));

var G__46269 = (i__19488__auto___46268 + (1));
i__19488__auto___46268 = G__46269;
continue;
} else {
}
break;
}

var G__46265 = args46263.length;
switch (G__46265) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46263.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.core.features_to_install_by_default);
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_to_install){
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
var lib_info = devtools.core.make_lib_info.call(null);
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
} else {
var vec__46266_46271 = devtools.util.feature_list_display.call(null,features_to_install,devtools.core.known_features);
var fmt_str__27132__auto___46272 = cljs.core.nth.call(null,vec__46266_46271,(0),null);
var params__27133__auto___46273 = cljs.core.nth.call(null,vec__46266_46271,(1),null);
console.info.apply(console,cljs.core.into_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(banner),cljs.core.str(" "),cljs.core.str(fmt_str__27132__auto___46272)].join(''),lib_info_style,lib_info,reset_style], null),params__27133__auto___46273)));
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),null], null), null),features_to_install))){
if(cljs.core.truth_(devtools.core.is_feature_available_QMARK_.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779)))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),null], null), null),features_to_install))){
if(cljs.core.truth_(devtools.core.is_feature_available_QMARK_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858)))){
return devtools.sanity_hints.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
return null;
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

return devtools.sanity_hints.uninstall_BANG_.call(null);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str("devtools.core/set-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/enable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/disable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___46275 = arguments.length;
var i__19488__auto___46276 = (0);
while(true){
if((i__19488__auto___46276 < len__19487__auto___46275)){
args__19494__auto__.push((arguments[i__19488__auto___46276]));

var G__46277 = (i__19488__auto___46276 + (1));
i__19488__auto___46276 = G__46277;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/enable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq46274){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46274));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___46279 = arguments.length;
var i__19488__auto___46280 = (0);
while(true){
if((i__19488__auto___46280 < len__19487__auto___46279)){
args__19494__auto__.push((arguments[i__19488__auto___46280]));

var G__46281 = (i__19488__auto___46280 + (1));
i__19488__auto___46280 = G__46281;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/disable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq46278){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46278));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str("devtools.core/single-feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___46283 = arguments.length;
var i__19488__auto___46284 = (0);
while(true){
if((i__19488__auto___46284 < len__19487__auto___46283)){
args__19494__auto__.push((arguments[i__19488__auto___46284]));

var G__46285 = (i__19488__auto___46284 + (1));
i__19488__auto___46284 = G__46285;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq46282){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46282));
});

//# sourceMappingURL=core.js.map