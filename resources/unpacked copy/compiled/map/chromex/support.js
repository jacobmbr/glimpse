// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.support');
goog.require('cljs.core');
goog.require('goog.object');
chromex.support.prepare_final_args_array = (function chromex$support$prepare_final_args_array(arg_descriptors,api){
var should_omit_QMARK_ = (function (p__30189){
var vec__30190 = p__30189;
var val = cljs.core.nth.call(null,vec__30190,(0),null);
var param_name = cljs.core.nth.call(null,vec__30190,(1),null);
var can_be_omitted_QMARK_ = cljs.core.nth.call(null,vec__30190,(2),null);
if(cljs.core.keyword_identical_QMARK_.call(null,val,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
if(cljs.core.truth_(can_be_omitted_QMARK_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Parameter '"),cljs.core.str(param_name),cljs.core.str("' cannot be omitted in a call to '"),cljs.core.str(api),cljs.core.str("'."),cljs.core.str(" Parameter not declared as optional.")].join('')),cljs.core.str("\n"),cljs.core.str("can-be-omitted?")].join('')));
}

return true;
} else {
return null;
}
});
return cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.remove.call(null,should_omit_QMARK_,arg_descriptors)));
});

//# sourceMappingURL=support.js.map