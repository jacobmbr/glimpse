// Compiled by ClojureScript 1.8.51 {}
goog.provide('dirac.runtime.core');
goog.require('cljs.core');
goog.require('dirac.runtime.prefs');
goog.require('goog.labs.userAgent.platform');
goog.require('goog.labs.userAgent.browser');
goog.require('dirac.runtime.repl');
goog.require('dirac.project');
goog.require('dirac.runtime.util');
dirac.runtime.core.known_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null);
dirac.runtime.core.features_to_install_by_default = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null);
dirac.runtime.core.is_feature_available_QMARK_ = (function dirac$runtime$core$is_feature_available_QMARK_(feature){
var G__24226 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__24226) {
case "repl":
return dirac.runtime.repl.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
dirac.runtime.core.install_BANG_ = (function dirac$runtime$core$install_BANG_(var_args){
var args24228 = [];
var len__19786__auto___24231 = arguments.length;
var i__19787__auto___24232 = (0);
while(true){
if((i__19787__auto___24232 < len__19786__auto___24231)){
args24228.push((arguments[i__19787__auto___24232]));

var G__24233 = (i__19787__auto___24232 + (1));
i__19787__auto___24232 = G__24233;
continue;
} else {
}
break;
}

var G__24230 = args24228.length;
switch (G__24230) {
case 0:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24228.length)].join('')));

}
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.install_BANG_.call(null,dirac.runtime.core.features_to_install_by_default);
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_to_install){
var features = ((cljs.core.some_QMARK_.call(null,features_to_install))?features_to_install:dirac.runtime.core.features_to_install_by_default);
var lib_info = dirac.runtime.util.make_lib_info.call(null,dirac.project.get_current_version.call(null));
dirac.runtime.util.report_unknown_features_BANG_.call(null,features,dirac.runtime.core.known_features,lib_info);

dirac.runtime.util.display_banner_if_needed_BANG_.call(null,features,dirac.runtime.core.known_features,lib_info);

return dirac.runtime.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),features,dirac.runtime.core.is_feature_available_QMARK_,dirac.runtime.repl.install_BANG_);
});

dirac.runtime.core.install_BANG_.cljs$lang$maxFixedArity = 1;
dirac.runtime.core.uninstall_BANG_ = (function dirac$runtime$core$uninstall_BANG_(){
return dirac.runtime.repl.uninstall_BANG_.call(null);
});
dirac.runtime.core.get_tag = (function dirac$runtime$core$get_tag(){
var tag = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847));
var url = [cljs.core.str(location)].join('');
var browser_version = goog.labs.userAgent.browser.getVersion();
var browser_name = clojure.string.join.call(null,", ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.browser.isOpera())?"Opera":null),(cljs.core.truth_(goog.labs.userAgent.browser.isIE())?"IE":null),(cljs.core.truth_(goog.labs.userAgent.browser.isEdge())?"Edge":null),(cljs.core.truth_(goog.labs.userAgent.browser.isFirefox())?"Firefox":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSafari())?"Safari":null),(cljs.core.truth_(goog.labs.userAgent.browser.isCoast())?"Coast":null),(cljs.core.truth_(goog.labs.userAgent.browser.isChrome())?"Chrome":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSilk())?"Silk":null)], null)));
var browser = [cljs.core.str((function (){var or__18716__auto__ = browser_name;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return "?";
}
})()),cljs.core.str("/"),cljs.core.str(browser_version)].join('');
var platform_version = goog.labs.userAgent.platform.getVersion();
var platform_name = clojure.string.join.call(null,", ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.platform.isAndroid())?"Android":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpod())?"iPod":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIphone())?"iPhone":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpad())?"iPad":null),(cljs.core.truth_(goog.labs.userAgent.platform.isMacintosh())?"Mac":null),(cljs.core.truth_(goog.labs.userAgent.platform.isLinux())?"Linux":null),(cljs.core.truth_(goog.labs.userAgent.platform.isWindows())?"Windows":null),(cljs.core.truth_(goog.labs.userAgent.platform.isChromeOS())?"ChromeOS":null)], null)));
var platform = [cljs.core.str((function (){var or__18716__auto__ = platform_name;
if(cljs.core.truth_(or__18716__auto__)){
return or__18716__auto__;
} else {
return "?";
}
})()),cljs.core.str("/"),cljs.core.str(platform_version)].join('');
var ua = [cljs.core.str(navigator.userAgent)].join('');
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"|",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,url,browser,platform], null)));
});

//# sourceMappingURL=core.js.map