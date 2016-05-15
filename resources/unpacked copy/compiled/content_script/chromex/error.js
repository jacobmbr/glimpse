// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.error');
goog.require('cljs.core');
chromex.error.last_error = cljs.core.atom.call(null,null);
chromex.error.set_last_error_BANG_ = (function chromex$error$set_last_error_BANG_(error){
return cljs.core.reset_BANG_.call(null,chromex.error.last_error,error);
});
chromex.error.get_last_error = (function chromex$error$get_last_error(){
return cljs.core.deref.call(null,chromex.error.last_error);
});

//# sourceMappingURL=error.js.map