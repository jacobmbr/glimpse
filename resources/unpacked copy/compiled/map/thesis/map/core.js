// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.map.core');
goog.require('cljs.core');
goog.require('chromex.ext.runtime');
goog.require('thesis.map.gui');
goog.require('chromex.protocols');
goog.require('thesis.map.handlers');
goog.require('chromex.support');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('thesis.map.subs');
goog.require('devtools.core');
goog.require('dirac.runtime');
thesis.map.core.gui_chan = cljs.core.atom.call(null,null);
thesis.map.core.msg_to_gui = cljs.core.atom.call(null,null);
thesis.map.core.background_channel = cljs.core.atom.call(null,null);
thesis.map.core.init_BANG_ = (function thesis$map$core$init_BANG_(){
console.log("map: init");


return thesis.map.gui.init_BANG_.call(null);
});

//# sourceMappingURL=core.js.map