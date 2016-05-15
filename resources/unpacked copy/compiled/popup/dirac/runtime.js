// Compiled by ClojureScript 1.8.51 {}
goog.provide('dirac.runtime');
goog.require('cljs.core');
goog.require('dirac.project');
goog.require('dirac.runtime.core');
goog.require('dirac.runtime.prefs');
dirac.runtime.get_version = dirac.project.get_current_version;
goog.exportSymbol('dirac.runtime.get_version', dirac.runtime.get_version);
dirac.runtime.is_feature_available_QMARK_ = dirac.runtime.core.is_feature_available_QMARK_;
goog.exportSymbol('dirac.runtime.is_feature_available_QMARK_', dirac.runtime.is_feature_available_QMARK_);
dirac.runtime.install_BANG_ = dirac.runtime.core.install_BANG_;
goog.exportSymbol('dirac.runtime.install_BANG_', dirac.runtime.install_BANG_);
dirac.runtime.uninstall_BANG_ = dirac.runtime.core.uninstall_BANG_;
goog.exportSymbol('dirac.runtime.uninstall_BANG_', dirac.runtime.uninstall_BANG_);
dirac.runtime.get_tag = dirac.runtime.core.get_tag;
goog.exportSymbol('dirac.runtime.get_tag', dirac.runtime.get_tag);
dirac.runtime.set_prefs_BANG_ = dirac.runtime.prefs.set_prefs_BANG_;
goog.exportSymbol('dirac.runtime.set_prefs_BANG_', dirac.runtime.set_prefs_BANG_);
dirac.runtime.get_prefs = dirac.runtime.prefs.get_prefs;
goog.exportSymbol('dirac.runtime.get_prefs', dirac.runtime.get_prefs);
dirac.runtime.set_pref_BANG_ = dirac.runtime.prefs.set_pref_BANG_;
goog.exportSymbol('dirac.runtime.set_pref_BANG_', dirac.runtime.set_pref_BANG_);

//# sourceMappingURL=runtime.js.map