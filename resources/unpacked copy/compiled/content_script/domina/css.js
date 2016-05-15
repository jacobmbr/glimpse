// Compiled by ClojureScript 1.8.51 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args13762 = [];
var len__7278__auto___13768 = arguments.length;
var i__7279__auto___13769 = (0);
while(true){
if((i__7279__auto___13769 < len__7278__auto___13768)){
args13762.push((arguments[i__7279__auto___13769]));

var G__13770 = (i__7279__auto___13769 + (1));
i__7279__auto___13769 = G__13770;
continue;
} else {
}
break;
}

var G__13764 = args13762.length;
switch (G__13764) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13762.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css13765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {domina.core.DomContent}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css13765 = (function (base,expr,meta13766){
this.base = base;
this.expr = expr;
this.meta13766 = meta13766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css13765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13767,meta13766__$1){
var self__ = this;
var _13767__$1 = this;
return (new domina.css.t_domina$css13765(self__.base,self__.expr,meta13766__$1));
});

domina.css.t_domina$css13765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13767){
var self__ = this;
var _13767__$1 = this;
return self__.meta13766;
});

domina.css.t_domina$css13765.prototype.domina$core$DomContent$ = true;

domina.css.t_domina$css13765.prototype.domina$core$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__13760_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__13760_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base));
});

domina.css.t_domina$css13765.prototype.domina$core$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__13761_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__13761_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base))));
});

domina.css.t_domina$css13765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta13766","meta13766",-1004161821,null)], null);
});

domina.css.t_domina$css13765.cljs$lang$type = true;

domina.css.t_domina$css13765.cljs$lang$ctorStr = "domina.css/t_domina$css13765";

domina.css.t_domina$css13765.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"domina.css/t_domina$css13765");
});

domina.css.__GT_t_domina$css13765 = (function domina$css$__GT_t_domina$css13765(base__$1,expr__$1,meta13766){
return (new domina.css.t_domina$css13765(base__$1,expr__$1,meta13766));
});

}

return (new domina.css.t_domina$css13765(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=css.js.map