// Compiled by ClojureScript 1.8.51 {}
goog.provide('domina.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.core.re_html = /<|&#?\w+;/;
domina.core.re_leading_whitespace = /^\s+/;
domina.core.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.core.re_tag_name = /<([\w:]+)/;
domina.core.re_no_inner_html = /<(?:script|style)/i;
domina.core.re_tbody = /<tbody/i;
var opt_wrapper_12326 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_12327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_12328 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_12328,opt_wrapper_12326,table_section_wrapper_12327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_12326,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_12327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_12327,cell_wrapper_12328,table_section_wrapper_12327,table_section_wrapper_12327]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__6196__auto__ = div.firstChild;
if(cljs.core.truth_(and__6196__auto__)){
return div.firstChild.childNodes;
} else {
return and__6196__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__12349 = cljs.core.seq.call(null,tbody);
var chunk__12350 = null;
var count__12351 = (0);
var i__12352 = (0);
while(true){
if((i__12352 < count__12351)){
var child = cljs.core._nth.call(null,chunk__12350,i__12352);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__12355 = seq__12349;
var G__12356 = chunk__12350;
var G__12357 = count__12351;
var G__12358 = (i__12352 + (1));
seq__12349 = G__12355;
chunk__12350 = G__12356;
count__12351 = G__12357;
i__12352 = G__12358;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12349);
if(temp__4657__auto__){
var seq__12349__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12349__$1)){
var c__7019__auto__ = cljs.core.chunk_first.call(null,seq__12349__$1);
var G__12359 = cljs.core.chunk_rest.call(null,seq__12349__$1);
var G__12360 = c__7019__auto__;
var G__12361 = cljs.core.count.call(null,c__7019__auto__);
var G__12362 = (0);
seq__12349 = G__12359;
chunk__12350 = G__12360;
count__12351 = G__12361;
i__12352 = G__12362;
continue;
} else {
var child = cljs.core.first.call(null,seq__12349__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__12364 = cljs.core.next.call(null,seq__12349__$1);
var G__12365 = null;
var G__12366 = (0);
var G__12367 = (0);
seq__12349 = G__12364;
chunk__12350 = G__12365;
count__12351 = G__12366;
i__12352 = G__12367;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.core.restore_leading_whitespace_BANG_ = (function domina$core$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.core.html_to_dom = (function domina$core$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.core.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__12376 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__12376,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__12376,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__12376,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__12377 = wrapper.lastChild;
var G__12378 = (level - (1));
wrapper = G__12377;
level = G__12378;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.core.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__6196__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__6196__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__6196__auto__;
}
})())){
domina.core.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.core.string_to_dom = (function domina$core$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.core.re_html,s))){
return domina.core.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.core.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.core.nodes = (function domina$core$nodes(content){
if((!((content == null))) && (!((content.domina$core$DomContent$nodes$arity$1 == null)))){
return content.domina$core$DomContent$nodes$arity$1(content);
} else {
var x__6871__auto__ = (((content == null))?null:content);
var m__6872__auto__ = (domina.core.nodes[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,content);
} else {
var m__6872__auto____$1 = (domina.core.nodes["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.core.single_node = (function domina$core$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$core$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$core$DomContent$single_node$arity$1(nodeseq);
} else {
var x__6871__auto__ = (((nodeseq == null))?null:nodeseq);
var m__6872__auto__ = (domina.core.single_node[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,nodeseq);
} else {
var m__6872__auto____$1 = (domina.core.single_node["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__7285__auto__ = [];
var len__7278__auto___12399 = arguments.length;
var i__7279__auto___12400 = (0);
while(true){
if((i__7279__auto___12400 < len__7278__auto___12399)){
args__7285__auto__.push((arguments[i__7279__auto___12400]));

var G__12401 = (i__7279__auto___12400 + (1));
i__7279__auto___12400 = G__12401;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__6196__auto__ = domina.core._STAR_debug_STAR_;
if(cljs.core.truth_(and__6196__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__6196__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq12392){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12392));
});
domina.core.log = (function domina$core$log(var_args){
var args__7285__auto__ = [];
var len__7278__auto___12405 = arguments.length;
var i__7279__auto___12406 = (0);
while(true){
if((i__7279__auto___12406 < len__7278__auto___12405)){
args__7285__auto__.push((arguments[i__7279__auto___12406]));

var G__12407 = (i__7279__auto___12406 + (1));
i__7279__auto___12406 = G__12407;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq12402){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12402));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.core.by_id = (function domina$core$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.core.by_class = (function domina$core$by_class(class_name){
return domina.core.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.core.children = (function domina$core$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.core.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.core.common_ancestor = (function domina$core$common_ancestor(var_args){
var args__7285__auto__ = [];
var len__7278__auto___12422 = arguments.length;
var i__7279__auto___12423 = (0);
while(true){
if((i__7279__auto___12423 < len__7278__auto___12422)){
args__7285__auto__.push((arguments[i__7279__auto___12423]));

var G__12425 = (i__7279__auto___12423 + (1));
i__7279__auto___12423 = G__12425;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((0) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((0)),(0),null)):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__7286__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq12413){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12413));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.core.ancestor_QMARK_ = (function domina$core$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.core.common_ancestor.call(null,ancestor_content,descendant_content),domina.core.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.core.clone = (function domina$core$clone(content){
return cljs.core.map.call(null,(function (p1__12500_SHARP_){
return p1__12500_SHARP_.cloneNode(true);
}),domina.core.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.append_BANG_ = (function domina$core$append_BANG_(parent_content,child_content){
domina.core.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.insert_BANG_ = (function domina$core$insert_BANG_(parent_content,child_content,idx){
domina.core.apply_with_cloning.call(null,(function (p1__12501_SHARP_,p2__12502_SHARP_){
return goog.dom.insertChildAt(p1__12501_SHARP_,p2__12502_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.prepend_BANG_ = (function domina$core$prepend_BANG_(parent_content,child_content){
domina.core.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_before_BANG_ = (function domina$core$insert_before_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__12504_SHARP_,p2__12503_SHARP_){
return goog.dom.insertSiblingBefore(p2__12503_SHARP_,p1__12504_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__12506_SHARP_,p2__12505_SHARP_){
return goog.dom.insertSiblingAfter(p2__12505_SHARP_,p1__12506_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__12508_SHARP_,p2__12507_SHARP_){
return goog.dom.replaceNode(p2__12507_SHARP_,p1__12508_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.core.detach_BANG_ = (function domina$core$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.core.destroy_BANG_ = (function domina$core$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.core.destroy_children_BANG_ = (function domina$core$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.core.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.core.style = (function domina$core$style(content,name){
var s = goog.style.getStyle(domina.core.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.core.attr = (function domina$core$attr(content,name){
return domina.core.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_style_BANG_ = (function domina$core$set_style_BANG_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___12566 = arguments.length;
var i__7279__auto___12567 = (0);
while(true){
if((i__7279__auto___12567 < len__7278__auto___12566)){
args__7285__auto__.push((arguments[i__7279__auto___12567]));

var G__12568 = (i__7279__auto___12567 + (1));
i__7279__auto___12567 = G__12568;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__12562_12571 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__12563_12572 = null;
var count__12564_12573 = (0);
var i__12565_12574 = (0);
while(true){
if((i__12565_12574 < count__12564_12573)){
var n_12575 = cljs.core._nth.call(null,chunk__12563_12572,i__12565_12574);
goog.style.setStyle(n_12575,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12577 = seq__12562_12571;
var G__12578 = chunk__12563_12572;
var G__12579 = count__12564_12573;
var G__12580 = (i__12565_12574 + (1));
seq__12562_12571 = G__12577;
chunk__12563_12572 = G__12578;
count__12564_12573 = G__12579;
i__12565_12574 = G__12580;
continue;
} else {
var temp__4657__auto___12583 = cljs.core.seq.call(null,seq__12562_12571);
if(temp__4657__auto___12583){
var seq__12562_12584__$1 = temp__4657__auto___12583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12562_12584__$1)){
var c__7019__auto___12585 = cljs.core.chunk_first.call(null,seq__12562_12584__$1);
var G__12586 = cljs.core.chunk_rest.call(null,seq__12562_12584__$1);
var G__12587 = c__7019__auto___12585;
var G__12588 = cljs.core.count.call(null,c__7019__auto___12585);
var G__12589 = (0);
seq__12562_12571 = G__12586;
chunk__12563_12572 = G__12587;
count__12564_12573 = G__12588;
i__12565_12574 = G__12589;
continue;
} else {
var n_12590 = cljs.core.first.call(null,seq__12562_12584__$1);
goog.style.setStyle(n_12590,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12595 = cljs.core.next.call(null,seq__12562_12584__$1);
var G__12596 = null;
var G__12597 = (0);
var G__12598 = (0);
seq__12562_12571 = G__12595;
chunk__12563_12572 = G__12596;
count__12564_12573 = G__12597;
i__12565_12574 = G__12598;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq12557){
var G__12558 = cljs.core.first.call(null,seq12557);
var seq12557__$1 = cljs.core.next.call(null,seq12557);
var G__12559 = cljs.core.first.call(null,seq12557__$1);
var seq12557__$2 = cljs.core.next.call(null,seq12557__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12558,G__12559,seq12557__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__7285__auto__ = [];
var len__7278__auto___12640 = arguments.length;
var i__7279__auto___12641 = (0);
while(true){
if((i__7279__auto___12641 < len__7278__auto___12640)){
args__7285__auto__.push((arguments[i__7279__auto___12641]));

var G__12642 = (i__7279__auto___12641 + (1));
i__7279__auto___12641 = G__12642;
continue;
} else {
}
break;
}

var argseq__7286__auto__ = ((((2) < args__7285__auto__.length))?(new cljs.core.IndexedSeq(args__7285__auto__.slice((2)),(0),null)):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7286__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__12635_12643 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__12636_12644 = null;
var count__12637_12645 = (0);
var i__12638_12646 = (0);
while(true){
if((i__12638_12646 < count__12637_12645)){
var n_12647 = cljs.core._nth.call(null,chunk__12636_12644,i__12638_12646);
n_12647.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12648 = seq__12635_12643;
var G__12649 = chunk__12636_12644;
var G__12650 = count__12637_12645;
var G__12651 = (i__12638_12646 + (1));
seq__12635_12643 = G__12648;
chunk__12636_12644 = G__12649;
count__12637_12645 = G__12650;
i__12638_12646 = G__12651;
continue;
} else {
var temp__4657__auto___12652 = cljs.core.seq.call(null,seq__12635_12643);
if(temp__4657__auto___12652){
var seq__12635_12653__$1 = temp__4657__auto___12652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12635_12653__$1)){
var c__7019__auto___12654 = cljs.core.chunk_first.call(null,seq__12635_12653__$1);
var G__12655 = cljs.core.chunk_rest.call(null,seq__12635_12653__$1);
var G__12656 = c__7019__auto___12654;
var G__12657 = cljs.core.count.call(null,c__7019__auto___12654);
var G__12658 = (0);
seq__12635_12643 = G__12655;
chunk__12636_12644 = G__12656;
count__12637_12645 = G__12657;
i__12638_12646 = G__12658;
continue;
} else {
var n_12659 = cljs.core.first.call(null,seq__12635_12653__$1);
n_12659.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12661 = cljs.core.next.call(null,seq__12635_12653__$1);
var G__12662 = null;
var G__12663 = (0);
var G__12664 = (0);
seq__12635_12643 = G__12661;
chunk__12636_12644 = G__12662;
count__12637_12645 = G__12663;
i__12638_12646 = G__12664;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq12626){
var G__12627 = cljs.core.first.call(null,seq12626);
var seq12626__$1 = cljs.core.next.call(null,seq12626);
var G__12628 = cljs.core.first.call(null,seq12626__$1);
var seq12626__$2 = cljs.core.next.call(null,seq12626__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12627,G__12628,seq12626__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__12673_12677 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__12674_12678 = null;
var count__12675_12679 = (0);
var i__12676_12680 = (0);
while(true){
if((i__12676_12680 < count__12675_12679)){
var n_12683 = cljs.core._nth.call(null,chunk__12674_12678,i__12676_12680);
n_12683.removeAttribute(cljs.core.name.call(null,name));

var G__12731 = seq__12673_12677;
var G__12732 = chunk__12674_12678;
var G__12733 = count__12675_12679;
var G__12734 = (i__12676_12680 + (1));
seq__12673_12677 = G__12731;
chunk__12674_12678 = G__12732;
count__12675_12679 = G__12733;
i__12676_12680 = G__12734;
continue;
} else {
var temp__4657__auto___12735 = cljs.core.seq.call(null,seq__12673_12677);
if(temp__4657__auto___12735){
var seq__12673_12736__$1 = temp__4657__auto___12735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12673_12736__$1)){
var c__7019__auto___12737 = cljs.core.chunk_first.call(null,seq__12673_12736__$1);
var G__12738 = cljs.core.chunk_rest.call(null,seq__12673_12736__$1);
var G__12739 = c__7019__auto___12737;
var G__12740 = cljs.core.count.call(null,c__7019__auto___12737);
var G__12741 = (0);
seq__12673_12677 = G__12738;
chunk__12674_12678 = G__12739;
count__12675_12679 = G__12740;
i__12676_12680 = G__12741;
continue;
} else {
var n_12742 = cljs.core.first.call(null,seq__12673_12736__$1);
n_12742.removeAttribute(cljs.core.name.call(null,name));

var G__12743 = cljs.core.next.call(null,seq__12673_12736__$1);
var G__12744 = null;
var G__12745 = (0);
var G__12746 = (0);
seq__12673_12677 = G__12743;
chunk__12674_12678 = G__12744;
count__12675_12679 = G__12745;
i__12676_12680 = G__12746;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.core.parse_style_attributes = (function domina$core$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__12756 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__12756,(0),null);
var v = cljs.core.nth.call(null,vec__12756,(1),null);
if(cljs.core.truth_((function (){var and__6196__auto__ = k;
if(cljs.core.truth_(and__6196__auto__)){
return v;
} else {
return and__6196__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.core.styles = (function domina$core$styles(content){
var style = domina.core.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.core.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.core.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.core.attrs = (function domina$core$attrs(content){
var node = domina.core.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__12765_SHARP_){
var attr = attrs__$1.item(p1__12765_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.core.set_styles_BANG_ = (function domina$core$set_styles_BANG_(content,styles){
var seq__12823_12829 = cljs.core.seq.call(null,styles);
var chunk__12824_12830 = null;
var count__12825_12831 = (0);
var i__12826_12832 = (0);
while(true){
if((i__12826_12832 < count__12825_12831)){
var vec__12827_12833 = cljs.core._nth.call(null,chunk__12824_12830,i__12826_12832);
var name_12834 = cljs.core.nth.call(null,vec__12827_12833,(0),null);
var value_12835 = cljs.core.nth.call(null,vec__12827_12833,(1),null);
domina.core.set_style_BANG_.call(null,content,name_12834,value_12835);

var G__12838 = seq__12823_12829;
var G__12839 = chunk__12824_12830;
var G__12840 = count__12825_12831;
var G__12841 = (i__12826_12832 + (1));
seq__12823_12829 = G__12838;
chunk__12824_12830 = G__12839;
count__12825_12831 = G__12840;
i__12826_12832 = G__12841;
continue;
} else {
var temp__4657__auto___12842 = cljs.core.seq.call(null,seq__12823_12829);
if(temp__4657__auto___12842){
var seq__12823_12843__$1 = temp__4657__auto___12842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12823_12843__$1)){
var c__7019__auto___12844 = cljs.core.chunk_first.call(null,seq__12823_12843__$1);
var G__12845 = cljs.core.chunk_rest.call(null,seq__12823_12843__$1);
var G__12846 = c__7019__auto___12844;
var G__12847 = cljs.core.count.call(null,c__7019__auto___12844);
var G__12848 = (0);
seq__12823_12829 = G__12845;
chunk__12824_12830 = G__12846;
count__12825_12831 = G__12847;
i__12826_12832 = G__12848;
continue;
} else {
var vec__12828_12849 = cljs.core.first.call(null,seq__12823_12843__$1);
var name_12850 = cljs.core.nth.call(null,vec__12828_12849,(0),null);
var value_12851 = cljs.core.nth.call(null,vec__12828_12849,(1),null);
domina.core.set_style_BANG_.call(null,content,name_12850,value_12851);

var G__12911 = cljs.core.next.call(null,seq__12823_12843__$1);
var G__12912 = null;
var G__12913 = (0);
var G__12914 = (0);
seq__12823_12829 = G__12911;
chunk__12824_12830 = G__12912;
count__12825_12831 = G__12913;
i__12826_12832 = G__12914;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attrs_BANG_ = (function domina$core$set_attrs_BANG_(content,attrs){
var seq__12921_12927 = cljs.core.seq.call(null,attrs);
var chunk__12922_12928 = null;
var count__12923_12929 = (0);
var i__12924_12930 = (0);
while(true){
if((i__12924_12930 < count__12923_12929)){
var vec__12925_12931 = cljs.core._nth.call(null,chunk__12922_12928,i__12924_12930);
var name_12932 = cljs.core.nth.call(null,vec__12925_12931,(0),null);
var value_12933 = cljs.core.nth.call(null,vec__12925_12931,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_12932,value_12933);

var G__12936 = seq__12921_12927;
var G__12937 = chunk__12922_12928;
var G__12938 = count__12923_12929;
var G__12939 = (i__12924_12930 + (1));
seq__12921_12927 = G__12936;
chunk__12922_12928 = G__12937;
count__12923_12929 = G__12938;
i__12924_12930 = G__12939;
continue;
} else {
var temp__4657__auto___12942 = cljs.core.seq.call(null,seq__12921_12927);
if(temp__4657__auto___12942){
var seq__12921_12946__$1 = temp__4657__auto___12942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12921_12946__$1)){
var c__7019__auto___12947 = cljs.core.chunk_first.call(null,seq__12921_12946__$1);
var G__12949 = cljs.core.chunk_rest.call(null,seq__12921_12946__$1);
var G__12950 = c__7019__auto___12947;
var G__12951 = cljs.core.count.call(null,c__7019__auto___12947);
var G__12952 = (0);
seq__12921_12927 = G__12949;
chunk__12922_12928 = G__12950;
count__12923_12929 = G__12951;
i__12924_12930 = G__12952;
continue;
} else {
var vec__12926_12953 = cljs.core.first.call(null,seq__12921_12946__$1);
var name_12954 = cljs.core.nth.call(null,vec__12926_12953,(0),null);
var value_12955 = cljs.core.nth.call(null,vec__12926_12953,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_12954,value_12955);

var G__12957 = cljs.core.next.call(null,seq__12921_12946__$1);
var G__12958 = null;
var G__12959 = (0);
var G__12960 = (0);
seq__12921_12927 = G__12957;
chunk__12922_12928 = G__12958;
count__12923_12929 = G__12959;
i__12924_12930 = G__12960;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.core.has_class_QMARK_ = (function domina$core$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.core.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.core.add_class_BANG_ = (function domina$core$add_class_BANG_(content,class$){
var seq__12984_13010 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__12985_13011 = null;
var count__12986_13012 = (0);
var i__12987_13013 = (0);
while(true){
if((i__12987_13013 < count__12986_13012)){
var node_13014 = cljs.core._nth.call(null,chunk__12985_13011,i__12987_13013);
goog.dom.classes.add(node_13014,class$);

var G__13015 = seq__12984_13010;
var G__13016 = chunk__12985_13011;
var G__13017 = count__12986_13012;
var G__13018 = (i__12987_13013 + (1));
seq__12984_13010 = G__13015;
chunk__12985_13011 = G__13016;
count__12986_13012 = G__13017;
i__12987_13013 = G__13018;
continue;
} else {
var temp__4657__auto___13019 = cljs.core.seq.call(null,seq__12984_13010);
if(temp__4657__auto___13019){
var seq__12984_13020__$1 = temp__4657__auto___13019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12984_13020__$1)){
var c__7019__auto___13021 = cljs.core.chunk_first.call(null,seq__12984_13020__$1);
var G__13022 = cljs.core.chunk_rest.call(null,seq__12984_13020__$1);
var G__13023 = c__7019__auto___13021;
var G__13024 = cljs.core.count.call(null,c__7019__auto___13021);
var G__13025 = (0);
seq__12984_13010 = G__13022;
chunk__12985_13011 = G__13023;
count__12986_13012 = G__13024;
i__12987_13013 = G__13025;
continue;
} else {
var node_13026 = cljs.core.first.call(null,seq__12984_13020__$1);
goog.dom.classes.add(node_13026,class$);

var G__13027 = cljs.core.next.call(null,seq__12984_13020__$1);
var G__13028 = null;
var G__13029 = (0);
var G__13030 = (0);
seq__12984_13010 = G__13027;
chunk__12985_13011 = G__13028;
count__12986_13012 = G__13029;
i__12987_13013 = G__13030;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.core.remove_class_BANG_ = (function domina$core$remove_class_BANG_(content,class$){
var seq__13037_13047 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__13038_13048 = null;
var count__13039_13049 = (0);
var i__13040_13050 = (0);
while(true){
if((i__13040_13050 < count__13039_13049)){
var node_13052 = cljs.core._nth.call(null,chunk__13038_13048,i__13040_13050);
goog.dom.classes.remove(node_13052,class$);

var G__13053 = seq__13037_13047;
var G__13054 = chunk__13038_13048;
var G__13055 = count__13039_13049;
var G__13056 = (i__13040_13050 + (1));
seq__13037_13047 = G__13053;
chunk__13038_13048 = G__13054;
count__13039_13049 = G__13055;
i__13040_13050 = G__13056;
continue;
} else {
var temp__4657__auto___13059 = cljs.core.seq.call(null,seq__13037_13047);
if(temp__4657__auto___13059){
var seq__13037_13061__$1 = temp__4657__auto___13059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13037_13061__$1)){
var c__7019__auto___13065 = cljs.core.chunk_first.call(null,seq__13037_13061__$1);
var G__13066 = cljs.core.chunk_rest.call(null,seq__13037_13061__$1);
var G__13067 = c__7019__auto___13065;
var G__13068 = cljs.core.count.call(null,c__7019__auto___13065);
var G__13069 = (0);
seq__13037_13047 = G__13066;
chunk__13038_13048 = G__13067;
count__13039_13049 = G__13068;
i__13040_13050 = G__13069;
continue;
} else {
var node_13070 = cljs.core.first.call(null,seq__13037_13061__$1);
goog.dom.classes.remove(node_13070,class$);

var G__13071 = cljs.core.next.call(null,seq__13037_13061__$1);
var G__13072 = null;
var G__13073 = (0);
var G__13074 = (0);
seq__13037_13047 = G__13071;
chunk__13038_13048 = G__13072;
count__13039_13049 = G__13073;
i__13040_13050 = G__13074;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.core.toggle_class_BANG_ = (function domina$core$toggle_class_BANG_(content,class$){
var seq__13079_13084 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__13080_13085 = null;
var count__13081_13086 = (0);
var i__13082_13087 = (0);
while(true){
if((i__13082_13087 < count__13081_13086)){
var node_13088 = cljs.core._nth.call(null,chunk__13080_13085,i__13082_13087);
goog.dom.classes.toggle(node_13088,class$);

var G__13121 = seq__13079_13084;
var G__13122 = chunk__13080_13085;
var G__13123 = count__13081_13086;
var G__13124 = (i__13082_13087 + (1));
seq__13079_13084 = G__13121;
chunk__13080_13085 = G__13122;
count__13081_13086 = G__13123;
i__13082_13087 = G__13124;
continue;
} else {
var temp__4657__auto___13125 = cljs.core.seq.call(null,seq__13079_13084);
if(temp__4657__auto___13125){
var seq__13079_13126__$1 = temp__4657__auto___13125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13079_13126__$1)){
var c__7019__auto___13127 = cljs.core.chunk_first.call(null,seq__13079_13126__$1);
var G__13128 = cljs.core.chunk_rest.call(null,seq__13079_13126__$1);
var G__13129 = c__7019__auto___13127;
var G__13130 = cljs.core.count.call(null,c__7019__auto___13127);
var G__13131 = (0);
seq__13079_13084 = G__13128;
chunk__13080_13085 = G__13129;
count__13081_13086 = G__13130;
i__13082_13087 = G__13131;
continue;
} else {
var node_13139 = cljs.core.first.call(null,seq__13079_13126__$1);
goog.dom.classes.toggle(node_13139,class$);

var G__13140 = cljs.core.next.call(null,seq__13079_13126__$1);
var G__13141 = null;
var G__13142 = (0);
var G__13143 = (0);
seq__13079_13084 = G__13140;
chunk__13080_13085 = G__13141;
count__13081_13086 = G__13142;
i__13082_13087 = G__13143;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.core.classes = (function domina$core$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.core.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.core.set_classes_BANG_ = (function domina$core$set_classes_BANG_(content,classes){
var classes_13159__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13152_13160 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__13153_13161 = null;
var count__13154_13162 = (0);
var i__13155_13163 = (0);
while(true){
if((i__13155_13163 < count__13154_13162)){
var node_13165 = cljs.core._nth.call(null,chunk__13153_13161,i__13155_13163);
goog.dom.classes.set(node_13165,classes_13159__$1);

var G__13169 = seq__13152_13160;
var G__13170 = chunk__13153_13161;
var G__13171 = count__13154_13162;
var G__13172 = (i__13155_13163 + (1));
seq__13152_13160 = G__13169;
chunk__13153_13161 = G__13170;
count__13154_13162 = G__13171;
i__13155_13163 = G__13172;
continue;
} else {
var temp__4657__auto___13173 = cljs.core.seq.call(null,seq__13152_13160);
if(temp__4657__auto___13173){
var seq__13152_13174__$1 = temp__4657__auto___13173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13152_13174__$1)){
var c__7019__auto___13175 = cljs.core.chunk_first.call(null,seq__13152_13174__$1);
var G__13176 = cljs.core.chunk_rest.call(null,seq__13152_13174__$1);
var G__13177 = c__7019__auto___13175;
var G__13178 = cljs.core.count.call(null,c__7019__auto___13175);
var G__13179 = (0);
seq__13152_13160 = G__13176;
chunk__13153_13161 = G__13177;
count__13154_13162 = G__13178;
i__13155_13163 = G__13179;
continue;
} else {
var node_13182 = cljs.core.first.call(null,seq__13152_13174__$1);
goog.dom.classes.set(node_13182,classes_13159__$1);

var G__13185 = cljs.core.next.call(null,seq__13152_13174__$1);
var G__13186 = null;
var G__13187 = (0);
var G__13188 = (0);
seq__13152_13160 = G__13185;
chunk__13153_13161 = G__13186;
count__13154_13162 = G__13187;
i__13155_13163 = G__13188;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.core.text = (function domina$core$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.core.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.core.set_text_BANG_ = (function domina$core$set_text_BANG_(content,value){
var seq__13195_13199 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__13196_13200 = null;
var count__13197_13201 = (0);
var i__13198_13202 = (0);
while(true){
if((i__13198_13202 < count__13197_13201)){
var node_13203 = cljs.core._nth.call(null,chunk__13196_13200,i__13198_13202);
goog.dom.setTextContent(node_13203,value);

var G__13204 = seq__13195_13199;
var G__13205 = chunk__13196_13200;
var G__13206 = count__13197_13201;
var G__13207 = (i__13198_13202 + (1));
seq__13195_13199 = G__13204;
chunk__13196_13200 = G__13205;
count__13197_13201 = G__13206;
i__13198_13202 = G__13207;
continue;
} else {
var temp__4657__auto___13208 = cljs.core.seq.call(null,seq__13195_13199);
if(temp__4657__auto___13208){
var seq__13195_13254__$1 = temp__4657__auto___13208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13195_13254__$1)){
var c__7019__auto___13255 = cljs.core.chunk_first.call(null,seq__13195_13254__$1);
var G__13256 = cljs.core.chunk_rest.call(null,seq__13195_13254__$1);
var G__13257 = c__7019__auto___13255;
var G__13258 = cljs.core.count.call(null,c__7019__auto___13255);
var G__13259 = (0);
seq__13195_13199 = G__13256;
chunk__13196_13200 = G__13257;
count__13197_13201 = G__13258;
i__13198_13202 = G__13259;
continue;
} else {
var node_13260 = cljs.core.first.call(null,seq__13195_13254__$1);
goog.dom.setTextContent(node_13260,value);

var G__13261 = cljs.core.next.call(null,seq__13195_13254__$1);
var G__13262 = null;
var G__13263 = (0);
var G__13264 = (0);
seq__13195_13199 = G__13261;
chunk__13196_13200 = G__13262;
count__13197_13201 = G__13263;
i__13198_13202 = G__13264;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.core.value = (function domina$core$value(content){
return goog.dom.forms.getValue(domina.core.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.core.set_value_BANG_ = (function domina$core$set_value_BANG_(content,value){
var seq__13269_13273 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__13270_13274 = null;
var count__13271_13275 = (0);
var i__13272_13276 = (0);
while(true){
if((i__13272_13276 < count__13271_13275)){
var node_13277 = cljs.core._nth.call(null,chunk__13270_13274,i__13272_13276);
goog.dom.forms.setValue(node_13277,value);

var G__13278 = seq__13269_13273;
var G__13279 = chunk__13270_13274;
var G__13280 = count__13271_13275;
var G__13281 = (i__13272_13276 + (1));
seq__13269_13273 = G__13278;
chunk__13270_13274 = G__13279;
count__13271_13275 = G__13280;
i__13272_13276 = G__13281;
continue;
} else {
var temp__4657__auto___13282 = cljs.core.seq.call(null,seq__13269_13273);
if(temp__4657__auto___13282){
var seq__13269_13283__$1 = temp__4657__auto___13282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13269_13283__$1)){
var c__7019__auto___13284 = cljs.core.chunk_first.call(null,seq__13269_13283__$1);
var G__13285 = cljs.core.chunk_rest.call(null,seq__13269_13283__$1);
var G__13286 = c__7019__auto___13284;
var G__13287 = cljs.core.count.call(null,c__7019__auto___13284);
var G__13288 = (0);
seq__13269_13273 = G__13285;
chunk__13270_13274 = G__13286;
count__13271_13275 = G__13287;
i__13272_13276 = G__13288;
continue;
} else {
var node_13290 = cljs.core.first.call(null,seq__13269_13283__$1);
goog.dom.forms.setValue(node_13290,value);

var G__13291 = cljs.core.next.call(null,seq__13269_13283__$1);
var G__13292 = null;
var G__13293 = (0);
var G__13294 = (0);
seq__13269_13273 = G__13291;
chunk__13270_13274 = G__13292;
count__13271_13275 = G__13293;
i__13272_13276 = G__13294;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.core.html = (function domina$core$html(content){
return domina.core.single_node.call(null,content).innerHTML;
});
domina.core.replace_children_BANG_ = (function domina$core$replace_children_BANG_(content,inner_content){
return domina.core.append_BANG_.call(null,domina.core.destroy_children_BANG_.call(null,content),inner_content);
});
domina.core.set_inner_html_BANG_ = (function domina$core$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.core.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__6196__auto__ = allows_inner_html_QMARK_;
if(and__6196__auto__){
var and__6196__auto____$1 = (function (){var or__6208__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__6196__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__6196__auto____$1;
}
} else {
return and__6196__auto__;
}
})())){
var value_13353 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__13343_13354 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__13344_13355 = null;
var count__13345_13356 = (0);
var i__13346_13357 = (0);
while(true){
if((i__13346_13357 < count__13345_13356)){
var node_13358 = cljs.core._nth.call(null,chunk__13344_13355,i__13346_13357);
node_13358.innerHTML = value_13353;

var G__13359 = seq__13343_13354;
var G__13360 = chunk__13344_13355;
var G__13361 = count__13345_13356;
var G__13362 = (i__13346_13357 + (1));
seq__13343_13354 = G__13359;
chunk__13344_13355 = G__13360;
count__13345_13356 = G__13361;
i__13346_13357 = G__13362;
continue;
} else {
var temp__4657__auto___13363 = cljs.core.seq.call(null,seq__13343_13354);
if(temp__4657__auto___13363){
var seq__13343_13364__$1 = temp__4657__auto___13363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13343_13364__$1)){
var c__7019__auto___13365 = cljs.core.chunk_first.call(null,seq__13343_13364__$1);
var G__13366 = cljs.core.chunk_rest.call(null,seq__13343_13364__$1);
var G__13367 = c__7019__auto___13365;
var G__13368 = cljs.core.count.call(null,c__7019__auto___13365);
var G__13369 = (0);
seq__13343_13354 = G__13366;
chunk__13344_13355 = G__13367;
count__13345_13356 = G__13368;
i__13346_13357 = G__13369;
continue;
} else {
var node_13370 = cljs.core.first.call(null,seq__13343_13364__$1);
node_13370.innerHTML = value_13353;

var G__13371 = cljs.core.next.call(null,seq__13343_13364__$1);
var G__13372 = null;
var G__13373 = (0);
var G__13374 = (0);
seq__13343_13354 = G__13371;
chunk__13344_13355 = G__13372;
count__13345_13356 = G__13373;
i__13346_13357 = G__13374;
continue;
}
} else {
}
}
break;
}
}catch (e13342){if((e13342 instanceof Error)){
var e_13375 = e13342;
domina.core.replace_children_BANG_.call(null,content,value_13353);
} else {
throw e13342;

}
}} else {
domina.core.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.core.set_html_BANG_ = (function domina$core$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.core.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.core.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.core.get_data = (function domina$core$get_data(var_args){
var args13381 = [];
var len__7278__auto___13406 = arguments.length;
var i__7279__auto___13407 = (0);
while(true){
if((i__7279__auto___13407 < len__7278__auto___13406)){
args13381.push((arguments[i__7279__auto___13407]));

var G__13408 = (i__7279__auto___13407 + (1));
i__7279__auto___13407 = G__13408;
continue;
} else {
}
break;
}

var G__13389 = args13381.length;
switch (G__13389) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13381.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__6196__auto__ = bubble;
if(cljs.core.truth_(and__6196__auto__)){
return (value == null);
} else {
return and__6196__auto__;
}
})())){
var temp__4657__auto__ = domina.core.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.core.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.core.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.core.set_data_BANG_ = (function domina$core$set_data_BANG_(node,key,value){
var m = (function (){var or__6208__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.core.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.core.apply_with_cloning = (function domina$core$apply_with_cloning(f,parent_content,child_content){
var parents = domina.core.nodes.call(null,parent_content);
var children = domina.core.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__13464_13485 = cljs.core.seq.call(null,children);
var chunk__13465_13486 = null;
var count__13466_13487 = (0);
var i__13467_13488 = (0);
while(true){
if((i__13467_13488 < count__13466_13487)){
var child_13491 = cljs.core._nth.call(null,chunk__13465_13486,i__13467_13488);
frag.appendChild(child_13491);

var G__13494 = seq__13464_13485;
var G__13495 = chunk__13465_13486;
var G__13496 = count__13466_13487;
var G__13497 = (i__13467_13488 + (1));
seq__13464_13485 = G__13494;
chunk__13465_13486 = G__13495;
count__13466_13487 = G__13496;
i__13467_13488 = G__13497;
continue;
} else {
var temp__4657__auto___13502 = cljs.core.seq.call(null,seq__13464_13485);
if(temp__4657__auto___13502){
var seq__13464_13504__$1 = temp__4657__auto___13502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13464_13504__$1)){
var c__7019__auto___13505 = cljs.core.chunk_first.call(null,seq__13464_13504__$1);
var G__13506 = cljs.core.chunk_rest.call(null,seq__13464_13504__$1);
var G__13507 = c__7019__auto___13505;
var G__13508 = cljs.core.count.call(null,c__7019__auto___13505);
var G__13509 = (0);
seq__13464_13485 = G__13506;
chunk__13465_13486 = G__13507;
count__13466_13487 = G__13508;
i__13467_13488 = G__13509;
continue;
} else {
var child_13514 = cljs.core.first.call(null,seq__13464_13504__$1);
frag.appendChild(child_13514);

var G__13516 = cljs.core.next.call(null,seq__13464_13504__$1);
var G__13517 = null;
var G__13518 = (0);
var G__13519 = (0);
seq__13464_13485 = G__13516;
chunk__13465_13486 = G__13517;
count__13466_13487 = G__13518;
i__13467_13488 = G__13519;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__13442_SHARP_,p2__13443_SHARP_){
return f.call(null,p1__13442_SHARP_,p2__13443_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args13534 = [];
var len__7278__auto___13546 = arguments.length;
var i__7279__auto___13547 = (0);
while(true){
if((i__7279__auto___13547 < len__7278__auto___13546)){
args13534.push((arguments[i__7279__auto___13547]));

var G__13552 = (i__7279__auto___13547 + (1));
i__7279__auto___13547 = G__13552;
continue;
} else {
}
break;
}

var G__13544 = args13534.length;
switch (G__13544) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13534.length)].join('')));

}
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_item.call(null,nl,(0));
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.core.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.core.lazy_nl_via_array_ref = (function domina$core$lazy_nl_via_array_ref(var_args){
var args13556 = [];
var len__7278__auto___13567 = arguments.length;
var i__7279__auto___13568 = (0);
while(true){
if((i__7279__auto___13568 < len__7278__auto___13567)){
args13556.push((arguments[i__7279__auto___13568]));

var G__13569 = (i__7279__auto___13568 + (1));
i__7279__auto___13568 = G__13569;
continue;
} else {
}
break;
}

var G__13562 = args13556.length;
switch (G__13562) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13556.length)].join('')));

}
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.core.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.core.lazy_nodelist = (function domina$core$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.core.lazy_nl_via_item.call(null,nl);
} else {
return domina.core.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.core.array_like_QMARK_ = (function domina$core$array_like_QMARK_(obj){
var and__6196__auto__ = obj;
if(cljs.core.truth_(and__6196__auto__)){
var and__6196__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__6196__auto____$1){
return obj.length;
} else {
return and__6196__auto____$1;
}
} else {
return and__6196__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.core.normalize_seq = (function domina$core$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,list_thing))){
return domina.core.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.core.DomContent["string"] = true);

(domina.core.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.core.nodes.call(null,domina.core.string_to_dom.call(null,s)));
}));

(domina.core.single_node["string"] = (function (s){
return domina.core.single_node.call(null,domina.core.string_to_dom.call(null,s));
}));

(domina.core.DomContent["_"] = true);

(domina.core.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return domina.core.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.core.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.core.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=core.js.map