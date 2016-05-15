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
var opt_wrapper_30961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_30962 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_30963 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_30963,opt_wrapper_30961,table_section_wrapper_30962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_30961,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_30962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_30962,cell_wrapper_30963,table_section_wrapper_30962,table_section_wrapper_30962]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__18405__auto__ = div.firstChild;
if(cljs.core.truth_(and__18405__auto__)){
return div.firstChild.childNodes;
} else {
return and__18405__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__30968 = cljs.core.seq.call(null,tbody);
var chunk__30969 = null;
var count__30970 = (0);
var i__30971 = (0);
while(true){
if((i__30971 < count__30970)){
var child = cljs.core._nth.call(null,chunk__30969,i__30971);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__30972 = seq__30968;
var G__30973 = chunk__30969;
var G__30974 = count__30970;
var G__30975 = (i__30971 + (1));
seq__30968 = G__30972;
chunk__30969 = G__30973;
count__30970 = G__30974;
i__30971 = G__30975;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30968);
if(temp__4657__auto__){
var seq__30968__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30968__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__30968__$1);
var G__30976 = cljs.core.chunk_rest.call(null,seq__30968__$1);
var G__30977 = c__19228__auto__;
var G__30978 = cljs.core.count.call(null,c__19228__auto__);
var G__30979 = (0);
seq__30968 = G__30976;
chunk__30969 = G__30977;
count__30970 = G__30978;
i__30971 = G__30979;
continue;
} else {
var child = cljs.core.first.call(null,seq__30968__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__30980 = cljs.core.next.call(null,seq__30968__$1);
var G__30981 = null;
var G__30982 = (0);
var G__30983 = (0);
seq__30968 = G__30980;
chunk__30969 = G__30981;
count__30970 = G__30982;
i__30971 = G__30983;
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
var vec__30985 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__30985,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__30985,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__30985,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__30986 = wrapper.lastChild;
var G__30987 = (level - (1));
wrapper = G__30986;
level = G__30987;
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

if(cljs.core.truth_((function (){var and__18405__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__18405__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__18405__auto__;
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
var x__19080__auto__ = (((content == null))?null:content);
var m__19081__auto__ = (domina.core.nodes[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,content);
} else {
var m__19081__auto____$1 = (domina.core.nodes["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,content);
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
var x__19080__auto__ = (((nodeseq == null))?null:nodeseq);
var m__19081__auto__ = (domina.core.single_node[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,nodeseq);
} else {
var m__19081__auto____$1 = (domina.core.single_node["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30989 = arguments.length;
var i__19488__auto___30990 = (0);
while(true){
if((i__19488__auto___30990 < len__19487__auto___30989)){
args__19494__auto__.push((arguments[i__19488__auto___30990]));

var G__30991 = (i__19488__auto___30990 + (1));
i__19488__auto___30990 = G__30991;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__18405__auto__ = domina.core._STAR_debug_STAR_;
if(cljs.core.truth_(and__18405__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__18405__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq30988){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30988));
});
domina.core.log = (function domina$core$log(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30993 = arguments.length;
var i__19488__auto___30994 = (0);
while(true){
if((i__19488__auto___30994 < len__19487__auto___30993)){
args__19494__auto__.push((arguments[i__19488__auto___30994]));

var G__30995 = (i__19488__auto___30994 + (1));
i__19488__auto___30994 = G__30995;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq30992){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30992));
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
var args__19494__auto__ = [];
var len__19487__auto___30997 = arguments.length;
var i__19488__auto___30998 = (0);
while(true){
if((i__19488__auto___30998 < len__19487__auto___30997)){
args__19494__auto__.push((arguments[i__19488__auto___30998]));

var G__30999 = (i__19488__auto___30998 + (1));
i__19488__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq30996){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30996));
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
return cljs.core.map.call(null,(function (p1__31000_SHARP_){
return p1__31000_SHARP_.cloneNode(true);
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
domina.core.apply_with_cloning.call(null,(function (p1__31001_SHARP_,p2__31002_SHARP_){
return goog.dom.insertChildAt(p1__31001_SHARP_,p2__31002_SHARP_,idx);
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
domina.core.apply_with_cloning.call(null,(function (p1__31004_SHARP_,p2__31003_SHARP_){
return goog.dom.insertSiblingBefore(p2__31003_SHARP_,p1__31004_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__31006_SHARP_,p2__31005_SHARP_){
return goog.dom.insertSiblingAfter(p2__31005_SHARP_,p1__31006_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__31008_SHARP_,p2__31007_SHARP_){
return goog.dom.replaceNode(p2__31007_SHARP_,p1__31008_SHARP_);
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
var args__19494__auto__ = [];
var len__19487__auto___31016 = arguments.length;
var i__19488__auto___31017 = (0);
while(true){
if((i__19488__auto___31017 < len__19487__auto___31016)){
args__19494__auto__.push((arguments[i__19488__auto___31017]));

var G__31018 = (i__19488__auto___31017 + (1));
i__19488__auto___31017 = G__31018;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__31012_31019 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31013_31020 = null;
var count__31014_31021 = (0);
var i__31015_31022 = (0);
while(true){
if((i__31015_31022 < count__31014_31021)){
var n_31023 = cljs.core._nth.call(null,chunk__31013_31020,i__31015_31022);
goog.style.setStyle(n_31023,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__31024 = seq__31012_31019;
var G__31025 = chunk__31013_31020;
var G__31026 = count__31014_31021;
var G__31027 = (i__31015_31022 + (1));
seq__31012_31019 = G__31024;
chunk__31013_31020 = G__31025;
count__31014_31021 = G__31026;
i__31015_31022 = G__31027;
continue;
} else {
var temp__4657__auto___31028 = cljs.core.seq.call(null,seq__31012_31019);
if(temp__4657__auto___31028){
var seq__31012_31029__$1 = temp__4657__auto___31028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31012_31029__$1)){
var c__19228__auto___31030 = cljs.core.chunk_first.call(null,seq__31012_31029__$1);
var G__31031 = cljs.core.chunk_rest.call(null,seq__31012_31029__$1);
var G__31032 = c__19228__auto___31030;
var G__31033 = cljs.core.count.call(null,c__19228__auto___31030);
var G__31034 = (0);
seq__31012_31019 = G__31031;
chunk__31013_31020 = G__31032;
count__31014_31021 = G__31033;
i__31015_31022 = G__31034;
continue;
} else {
var n_31035 = cljs.core.first.call(null,seq__31012_31029__$1);
goog.style.setStyle(n_31035,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__31036 = cljs.core.next.call(null,seq__31012_31029__$1);
var G__31037 = null;
var G__31038 = (0);
var G__31039 = (0);
seq__31012_31019 = G__31036;
chunk__31013_31020 = G__31037;
count__31014_31021 = G__31038;
i__31015_31022 = G__31039;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq31009){
var G__31010 = cljs.core.first.call(null,seq31009);
var seq31009__$1 = cljs.core.next.call(null,seq31009);
var G__31011 = cljs.core.first.call(null,seq31009__$1);
var seq31009__$2 = cljs.core.next.call(null,seq31009__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31010,G__31011,seq31009__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___31047 = arguments.length;
var i__19488__auto___31048 = (0);
while(true){
if((i__19488__auto___31048 < len__19487__auto___31047)){
args__19494__auto__.push((arguments[i__19488__auto___31048]));

var G__31049 = (i__19488__auto___31048 + (1));
i__19488__auto___31048 = G__31049;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__31043_31050 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31044_31051 = null;
var count__31045_31052 = (0);
var i__31046_31053 = (0);
while(true){
if((i__31046_31053 < count__31045_31052)){
var n_31054 = cljs.core._nth.call(null,chunk__31044_31051,i__31046_31053);
n_31054.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__31055 = seq__31043_31050;
var G__31056 = chunk__31044_31051;
var G__31057 = count__31045_31052;
var G__31058 = (i__31046_31053 + (1));
seq__31043_31050 = G__31055;
chunk__31044_31051 = G__31056;
count__31045_31052 = G__31057;
i__31046_31053 = G__31058;
continue;
} else {
var temp__4657__auto___31059 = cljs.core.seq.call(null,seq__31043_31050);
if(temp__4657__auto___31059){
var seq__31043_31060__$1 = temp__4657__auto___31059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31043_31060__$1)){
var c__19228__auto___31061 = cljs.core.chunk_first.call(null,seq__31043_31060__$1);
var G__31062 = cljs.core.chunk_rest.call(null,seq__31043_31060__$1);
var G__31063 = c__19228__auto___31061;
var G__31064 = cljs.core.count.call(null,c__19228__auto___31061);
var G__31065 = (0);
seq__31043_31050 = G__31062;
chunk__31044_31051 = G__31063;
count__31045_31052 = G__31064;
i__31046_31053 = G__31065;
continue;
} else {
var n_31066 = cljs.core.first.call(null,seq__31043_31060__$1);
n_31066.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__31067 = cljs.core.next.call(null,seq__31043_31060__$1);
var G__31068 = null;
var G__31069 = (0);
var G__31070 = (0);
seq__31043_31050 = G__31067;
chunk__31044_31051 = G__31068;
count__31045_31052 = G__31069;
i__31046_31053 = G__31070;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq31040){
var G__31041 = cljs.core.first.call(null,seq31040);
var seq31040__$1 = cljs.core.next.call(null,seq31040);
var G__31042 = cljs.core.first.call(null,seq31040__$1);
var seq31040__$2 = cljs.core.next.call(null,seq31040__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31041,G__31042,seq31040__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__31075_31079 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31076_31080 = null;
var count__31077_31081 = (0);
var i__31078_31082 = (0);
while(true){
if((i__31078_31082 < count__31077_31081)){
var n_31083 = cljs.core._nth.call(null,chunk__31076_31080,i__31078_31082);
n_31083.removeAttribute(cljs.core.name.call(null,name));

var G__31084 = seq__31075_31079;
var G__31085 = chunk__31076_31080;
var G__31086 = count__31077_31081;
var G__31087 = (i__31078_31082 + (1));
seq__31075_31079 = G__31084;
chunk__31076_31080 = G__31085;
count__31077_31081 = G__31086;
i__31078_31082 = G__31087;
continue;
} else {
var temp__4657__auto___31088 = cljs.core.seq.call(null,seq__31075_31079);
if(temp__4657__auto___31088){
var seq__31075_31089__$1 = temp__4657__auto___31088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31075_31089__$1)){
var c__19228__auto___31090 = cljs.core.chunk_first.call(null,seq__31075_31089__$1);
var G__31091 = cljs.core.chunk_rest.call(null,seq__31075_31089__$1);
var G__31092 = c__19228__auto___31090;
var G__31093 = cljs.core.count.call(null,c__19228__auto___31090);
var G__31094 = (0);
seq__31075_31079 = G__31091;
chunk__31076_31080 = G__31092;
count__31077_31081 = G__31093;
i__31078_31082 = G__31094;
continue;
} else {
var n_31095 = cljs.core.first.call(null,seq__31075_31089__$1);
n_31095.removeAttribute(cljs.core.name.call(null,name));

var G__31096 = cljs.core.next.call(null,seq__31075_31089__$1);
var G__31097 = null;
var G__31098 = (0);
var G__31099 = (0);
seq__31075_31079 = G__31096;
chunk__31076_31080 = G__31097;
count__31077_31081 = G__31098;
i__31078_31082 = G__31099;
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
var vec__31101 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__31101,(0),null);
var v = cljs.core.nth.call(null,vec__31101,(1),null);
if(cljs.core.truth_((function (){var and__18405__auto__ = k;
if(cljs.core.truth_(and__18405__auto__)){
return v;
} else {
return and__18405__auto__;
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
return (function (p1__31102_SHARP_){
var attr = attrs__$1.item(p1__31102_SHARP_);
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
var seq__31109_31115 = cljs.core.seq.call(null,styles);
var chunk__31110_31116 = null;
var count__31111_31117 = (0);
var i__31112_31118 = (0);
while(true){
if((i__31112_31118 < count__31111_31117)){
var vec__31113_31119 = cljs.core._nth.call(null,chunk__31110_31116,i__31112_31118);
var name_31120 = cljs.core.nth.call(null,vec__31113_31119,(0),null);
var value_31121 = cljs.core.nth.call(null,vec__31113_31119,(1),null);
domina.core.set_style_BANG_.call(null,content,name_31120,value_31121);

var G__31122 = seq__31109_31115;
var G__31123 = chunk__31110_31116;
var G__31124 = count__31111_31117;
var G__31125 = (i__31112_31118 + (1));
seq__31109_31115 = G__31122;
chunk__31110_31116 = G__31123;
count__31111_31117 = G__31124;
i__31112_31118 = G__31125;
continue;
} else {
var temp__4657__auto___31126 = cljs.core.seq.call(null,seq__31109_31115);
if(temp__4657__auto___31126){
var seq__31109_31127__$1 = temp__4657__auto___31126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31109_31127__$1)){
var c__19228__auto___31128 = cljs.core.chunk_first.call(null,seq__31109_31127__$1);
var G__31129 = cljs.core.chunk_rest.call(null,seq__31109_31127__$1);
var G__31130 = c__19228__auto___31128;
var G__31131 = cljs.core.count.call(null,c__19228__auto___31128);
var G__31132 = (0);
seq__31109_31115 = G__31129;
chunk__31110_31116 = G__31130;
count__31111_31117 = G__31131;
i__31112_31118 = G__31132;
continue;
} else {
var vec__31114_31133 = cljs.core.first.call(null,seq__31109_31127__$1);
var name_31134 = cljs.core.nth.call(null,vec__31114_31133,(0),null);
var value_31135 = cljs.core.nth.call(null,vec__31114_31133,(1),null);
domina.core.set_style_BANG_.call(null,content,name_31134,value_31135);

var G__31136 = cljs.core.next.call(null,seq__31109_31127__$1);
var G__31137 = null;
var G__31138 = (0);
var G__31139 = (0);
seq__31109_31115 = G__31136;
chunk__31110_31116 = G__31137;
count__31111_31117 = G__31138;
i__31112_31118 = G__31139;
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
var seq__31146_31152 = cljs.core.seq.call(null,attrs);
var chunk__31147_31153 = null;
var count__31148_31154 = (0);
var i__31149_31155 = (0);
while(true){
if((i__31149_31155 < count__31148_31154)){
var vec__31150_31156 = cljs.core._nth.call(null,chunk__31147_31153,i__31149_31155);
var name_31157 = cljs.core.nth.call(null,vec__31150_31156,(0),null);
var value_31158 = cljs.core.nth.call(null,vec__31150_31156,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_31157,value_31158);

var G__31159 = seq__31146_31152;
var G__31160 = chunk__31147_31153;
var G__31161 = count__31148_31154;
var G__31162 = (i__31149_31155 + (1));
seq__31146_31152 = G__31159;
chunk__31147_31153 = G__31160;
count__31148_31154 = G__31161;
i__31149_31155 = G__31162;
continue;
} else {
var temp__4657__auto___31163 = cljs.core.seq.call(null,seq__31146_31152);
if(temp__4657__auto___31163){
var seq__31146_31164__$1 = temp__4657__auto___31163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31146_31164__$1)){
var c__19228__auto___31165 = cljs.core.chunk_first.call(null,seq__31146_31164__$1);
var G__31166 = cljs.core.chunk_rest.call(null,seq__31146_31164__$1);
var G__31167 = c__19228__auto___31165;
var G__31168 = cljs.core.count.call(null,c__19228__auto___31165);
var G__31169 = (0);
seq__31146_31152 = G__31166;
chunk__31147_31153 = G__31167;
count__31148_31154 = G__31168;
i__31149_31155 = G__31169;
continue;
} else {
var vec__31151_31170 = cljs.core.first.call(null,seq__31146_31164__$1);
var name_31171 = cljs.core.nth.call(null,vec__31151_31170,(0),null);
var value_31172 = cljs.core.nth.call(null,vec__31151_31170,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_31171,value_31172);

var G__31173 = cljs.core.next.call(null,seq__31146_31164__$1);
var G__31174 = null;
var G__31175 = (0);
var G__31176 = (0);
seq__31146_31152 = G__31173;
chunk__31147_31153 = G__31174;
count__31148_31154 = G__31175;
i__31149_31155 = G__31176;
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
var seq__31181_31185 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31182_31186 = null;
var count__31183_31187 = (0);
var i__31184_31188 = (0);
while(true){
if((i__31184_31188 < count__31183_31187)){
var node_31189 = cljs.core._nth.call(null,chunk__31182_31186,i__31184_31188);
goog.dom.classes.add(node_31189,class$);

var G__31190 = seq__31181_31185;
var G__31191 = chunk__31182_31186;
var G__31192 = count__31183_31187;
var G__31193 = (i__31184_31188 + (1));
seq__31181_31185 = G__31190;
chunk__31182_31186 = G__31191;
count__31183_31187 = G__31192;
i__31184_31188 = G__31193;
continue;
} else {
var temp__4657__auto___31194 = cljs.core.seq.call(null,seq__31181_31185);
if(temp__4657__auto___31194){
var seq__31181_31195__$1 = temp__4657__auto___31194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31181_31195__$1)){
var c__19228__auto___31196 = cljs.core.chunk_first.call(null,seq__31181_31195__$1);
var G__31197 = cljs.core.chunk_rest.call(null,seq__31181_31195__$1);
var G__31198 = c__19228__auto___31196;
var G__31199 = cljs.core.count.call(null,c__19228__auto___31196);
var G__31200 = (0);
seq__31181_31185 = G__31197;
chunk__31182_31186 = G__31198;
count__31183_31187 = G__31199;
i__31184_31188 = G__31200;
continue;
} else {
var node_31201 = cljs.core.first.call(null,seq__31181_31195__$1);
goog.dom.classes.add(node_31201,class$);

var G__31202 = cljs.core.next.call(null,seq__31181_31195__$1);
var G__31203 = null;
var G__31204 = (0);
var G__31205 = (0);
seq__31181_31185 = G__31202;
chunk__31182_31186 = G__31203;
count__31183_31187 = G__31204;
i__31184_31188 = G__31205;
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
var seq__31210_31214 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31211_31215 = null;
var count__31212_31216 = (0);
var i__31213_31217 = (0);
while(true){
if((i__31213_31217 < count__31212_31216)){
var node_31218 = cljs.core._nth.call(null,chunk__31211_31215,i__31213_31217);
goog.dom.classes.remove(node_31218,class$);

var G__31219 = seq__31210_31214;
var G__31220 = chunk__31211_31215;
var G__31221 = count__31212_31216;
var G__31222 = (i__31213_31217 + (1));
seq__31210_31214 = G__31219;
chunk__31211_31215 = G__31220;
count__31212_31216 = G__31221;
i__31213_31217 = G__31222;
continue;
} else {
var temp__4657__auto___31223 = cljs.core.seq.call(null,seq__31210_31214);
if(temp__4657__auto___31223){
var seq__31210_31224__$1 = temp__4657__auto___31223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31210_31224__$1)){
var c__19228__auto___31225 = cljs.core.chunk_first.call(null,seq__31210_31224__$1);
var G__31226 = cljs.core.chunk_rest.call(null,seq__31210_31224__$1);
var G__31227 = c__19228__auto___31225;
var G__31228 = cljs.core.count.call(null,c__19228__auto___31225);
var G__31229 = (0);
seq__31210_31214 = G__31226;
chunk__31211_31215 = G__31227;
count__31212_31216 = G__31228;
i__31213_31217 = G__31229;
continue;
} else {
var node_31230 = cljs.core.first.call(null,seq__31210_31224__$1);
goog.dom.classes.remove(node_31230,class$);

var G__31231 = cljs.core.next.call(null,seq__31210_31224__$1);
var G__31232 = null;
var G__31233 = (0);
var G__31234 = (0);
seq__31210_31214 = G__31231;
chunk__31211_31215 = G__31232;
count__31212_31216 = G__31233;
i__31213_31217 = G__31234;
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
var seq__31239_31243 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31240_31244 = null;
var count__31241_31245 = (0);
var i__31242_31246 = (0);
while(true){
if((i__31242_31246 < count__31241_31245)){
var node_31247 = cljs.core._nth.call(null,chunk__31240_31244,i__31242_31246);
goog.dom.classes.toggle(node_31247,class$);

var G__31248 = seq__31239_31243;
var G__31249 = chunk__31240_31244;
var G__31250 = count__31241_31245;
var G__31251 = (i__31242_31246 + (1));
seq__31239_31243 = G__31248;
chunk__31240_31244 = G__31249;
count__31241_31245 = G__31250;
i__31242_31246 = G__31251;
continue;
} else {
var temp__4657__auto___31252 = cljs.core.seq.call(null,seq__31239_31243);
if(temp__4657__auto___31252){
var seq__31239_31253__$1 = temp__4657__auto___31252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31239_31253__$1)){
var c__19228__auto___31254 = cljs.core.chunk_first.call(null,seq__31239_31253__$1);
var G__31255 = cljs.core.chunk_rest.call(null,seq__31239_31253__$1);
var G__31256 = c__19228__auto___31254;
var G__31257 = cljs.core.count.call(null,c__19228__auto___31254);
var G__31258 = (0);
seq__31239_31243 = G__31255;
chunk__31240_31244 = G__31256;
count__31241_31245 = G__31257;
i__31242_31246 = G__31258;
continue;
} else {
var node_31259 = cljs.core.first.call(null,seq__31239_31253__$1);
goog.dom.classes.toggle(node_31259,class$);

var G__31260 = cljs.core.next.call(null,seq__31239_31253__$1);
var G__31261 = null;
var G__31262 = (0);
var G__31263 = (0);
seq__31239_31243 = G__31260;
chunk__31240_31244 = G__31261;
count__31241_31245 = G__31262;
i__31242_31246 = G__31263;
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
var classes_31272__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__31268_31273 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31269_31274 = null;
var count__31270_31275 = (0);
var i__31271_31276 = (0);
while(true){
if((i__31271_31276 < count__31270_31275)){
var node_31277 = cljs.core._nth.call(null,chunk__31269_31274,i__31271_31276);
goog.dom.classes.set(node_31277,classes_31272__$1);

var G__31278 = seq__31268_31273;
var G__31279 = chunk__31269_31274;
var G__31280 = count__31270_31275;
var G__31281 = (i__31271_31276 + (1));
seq__31268_31273 = G__31278;
chunk__31269_31274 = G__31279;
count__31270_31275 = G__31280;
i__31271_31276 = G__31281;
continue;
} else {
var temp__4657__auto___31282 = cljs.core.seq.call(null,seq__31268_31273);
if(temp__4657__auto___31282){
var seq__31268_31283__$1 = temp__4657__auto___31282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31268_31283__$1)){
var c__19228__auto___31284 = cljs.core.chunk_first.call(null,seq__31268_31283__$1);
var G__31285 = cljs.core.chunk_rest.call(null,seq__31268_31283__$1);
var G__31286 = c__19228__auto___31284;
var G__31287 = cljs.core.count.call(null,c__19228__auto___31284);
var G__31288 = (0);
seq__31268_31273 = G__31285;
chunk__31269_31274 = G__31286;
count__31270_31275 = G__31287;
i__31271_31276 = G__31288;
continue;
} else {
var node_31289 = cljs.core.first.call(null,seq__31268_31283__$1);
goog.dom.classes.set(node_31289,classes_31272__$1);

var G__31290 = cljs.core.next.call(null,seq__31268_31283__$1);
var G__31291 = null;
var G__31292 = (0);
var G__31293 = (0);
seq__31268_31273 = G__31290;
chunk__31269_31274 = G__31291;
count__31270_31275 = G__31292;
i__31271_31276 = G__31293;
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
var seq__31298_31302 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31299_31303 = null;
var count__31300_31304 = (0);
var i__31301_31305 = (0);
while(true){
if((i__31301_31305 < count__31300_31304)){
var node_31306 = cljs.core._nth.call(null,chunk__31299_31303,i__31301_31305);
goog.dom.setTextContent(node_31306,value);

var G__31307 = seq__31298_31302;
var G__31308 = chunk__31299_31303;
var G__31309 = count__31300_31304;
var G__31310 = (i__31301_31305 + (1));
seq__31298_31302 = G__31307;
chunk__31299_31303 = G__31308;
count__31300_31304 = G__31309;
i__31301_31305 = G__31310;
continue;
} else {
var temp__4657__auto___31311 = cljs.core.seq.call(null,seq__31298_31302);
if(temp__4657__auto___31311){
var seq__31298_31312__$1 = temp__4657__auto___31311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31298_31312__$1)){
var c__19228__auto___31313 = cljs.core.chunk_first.call(null,seq__31298_31312__$1);
var G__31314 = cljs.core.chunk_rest.call(null,seq__31298_31312__$1);
var G__31315 = c__19228__auto___31313;
var G__31316 = cljs.core.count.call(null,c__19228__auto___31313);
var G__31317 = (0);
seq__31298_31302 = G__31314;
chunk__31299_31303 = G__31315;
count__31300_31304 = G__31316;
i__31301_31305 = G__31317;
continue;
} else {
var node_31318 = cljs.core.first.call(null,seq__31298_31312__$1);
goog.dom.setTextContent(node_31318,value);

var G__31319 = cljs.core.next.call(null,seq__31298_31312__$1);
var G__31320 = null;
var G__31321 = (0);
var G__31322 = (0);
seq__31298_31302 = G__31319;
chunk__31299_31303 = G__31320;
count__31300_31304 = G__31321;
i__31301_31305 = G__31322;
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
var seq__31327_31331 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31328_31332 = null;
var count__31329_31333 = (0);
var i__31330_31334 = (0);
while(true){
if((i__31330_31334 < count__31329_31333)){
var node_31335 = cljs.core._nth.call(null,chunk__31328_31332,i__31330_31334);
goog.dom.forms.setValue(node_31335,value);

var G__31336 = seq__31327_31331;
var G__31337 = chunk__31328_31332;
var G__31338 = count__31329_31333;
var G__31339 = (i__31330_31334 + (1));
seq__31327_31331 = G__31336;
chunk__31328_31332 = G__31337;
count__31329_31333 = G__31338;
i__31330_31334 = G__31339;
continue;
} else {
var temp__4657__auto___31340 = cljs.core.seq.call(null,seq__31327_31331);
if(temp__4657__auto___31340){
var seq__31327_31341__$1 = temp__4657__auto___31340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31327_31341__$1)){
var c__19228__auto___31342 = cljs.core.chunk_first.call(null,seq__31327_31341__$1);
var G__31343 = cljs.core.chunk_rest.call(null,seq__31327_31341__$1);
var G__31344 = c__19228__auto___31342;
var G__31345 = cljs.core.count.call(null,c__19228__auto___31342);
var G__31346 = (0);
seq__31327_31331 = G__31343;
chunk__31328_31332 = G__31344;
count__31329_31333 = G__31345;
i__31330_31334 = G__31346;
continue;
} else {
var node_31347 = cljs.core.first.call(null,seq__31327_31341__$1);
goog.dom.forms.setValue(node_31347,value);

var G__31348 = cljs.core.next.call(null,seq__31327_31341__$1);
var G__31349 = null;
var G__31350 = (0);
var G__31351 = (0);
seq__31327_31331 = G__31348;
chunk__31328_31332 = G__31349;
count__31329_31333 = G__31350;
i__31330_31334 = G__31351;
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
if(cljs.core.truth_((function (){var and__18405__auto__ = allows_inner_html_QMARK_;
if(and__18405__auto__){
var and__18405__auto____$1 = (function (){var or__18417__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__18405__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__18405__auto____$1;
}
} else {
return and__18405__auto__;
}
})())){
var value_31362 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__31358_31363 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__31359_31364 = null;
var count__31360_31365 = (0);
var i__31361_31366 = (0);
while(true){
if((i__31361_31366 < count__31360_31365)){
var node_31367 = cljs.core._nth.call(null,chunk__31359_31364,i__31361_31366);
node_31367.innerHTML = value_31362;

var G__31368 = seq__31358_31363;
var G__31369 = chunk__31359_31364;
var G__31370 = count__31360_31365;
var G__31371 = (i__31361_31366 + (1));
seq__31358_31363 = G__31368;
chunk__31359_31364 = G__31369;
count__31360_31365 = G__31370;
i__31361_31366 = G__31371;
continue;
} else {
var temp__4657__auto___31372 = cljs.core.seq.call(null,seq__31358_31363);
if(temp__4657__auto___31372){
var seq__31358_31373__$1 = temp__4657__auto___31372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31358_31373__$1)){
var c__19228__auto___31374 = cljs.core.chunk_first.call(null,seq__31358_31373__$1);
var G__31375 = cljs.core.chunk_rest.call(null,seq__31358_31373__$1);
var G__31376 = c__19228__auto___31374;
var G__31377 = cljs.core.count.call(null,c__19228__auto___31374);
var G__31378 = (0);
seq__31358_31363 = G__31375;
chunk__31359_31364 = G__31376;
count__31360_31365 = G__31377;
i__31361_31366 = G__31378;
continue;
} else {
var node_31379 = cljs.core.first.call(null,seq__31358_31373__$1);
node_31379.innerHTML = value_31362;

var G__31380 = cljs.core.next.call(null,seq__31358_31373__$1);
var G__31381 = null;
var G__31382 = (0);
var G__31383 = (0);
seq__31358_31363 = G__31380;
chunk__31359_31364 = G__31381;
count__31360_31365 = G__31382;
i__31361_31366 = G__31383;
continue;
}
} else {
}
}
break;
}
}catch (e31357){if((e31357 instanceof Error)){
var e_31384 = e31357;
domina.core.replace_children_BANG_.call(null,content,value_31362);
} else {
throw e31357;

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
var args31385 = [];
var len__19487__auto___31388 = arguments.length;
var i__19488__auto___31389 = (0);
while(true){
if((i__19488__auto___31389 < len__19487__auto___31388)){
args31385.push((arguments[i__19488__auto___31389]));

var G__31390 = (i__19488__auto___31389 + (1));
i__19488__auto___31389 = G__31390;
continue;
} else {
}
break;
}

var G__31387 = args31385.length;
switch (G__31387) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31385.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__18405__auto__ = bubble;
if(cljs.core.truth_(and__18405__auto__)){
return (value == null);
} else {
return and__18405__auto__;
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
var m = (function (){var or__18417__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
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
var seq__31398_31402 = cljs.core.seq.call(null,children);
var chunk__31399_31403 = null;
var count__31400_31404 = (0);
var i__31401_31405 = (0);
while(true){
if((i__31401_31405 < count__31400_31404)){
var child_31406 = cljs.core._nth.call(null,chunk__31399_31403,i__31401_31405);
frag.appendChild(child_31406);

var G__31407 = seq__31398_31402;
var G__31408 = chunk__31399_31403;
var G__31409 = count__31400_31404;
var G__31410 = (i__31401_31405 + (1));
seq__31398_31402 = G__31407;
chunk__31399_31403 = G__31408;
count__31400_31404 = G__31409;
i__31401_31405 = G__31410;
continue;
} else {
var temp__4657__auto___31411 = cljs.core.seq.call(null,seq__31398_31402);
if(temp__4657__auto___31411){
var seq__31398_31412__$1 = temp__4657__auto___31411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31398_31412__$1)){
var c__19228__auto___31413 = cljs.core.chunk_first.call(null,seq__31398_31412__$1);
var G__31414 = cljs.core.chunk_rest.call(null,seq__31398_31412__$1);
var G__31415 = c__19228__auto___31413;
var G__31416 = cljs.core.count.call(null,c__19228__auto___31413);
var G__31417 = (0);
seq__31398_31402 = G__31414;
chunk__31399_31403 = G__31415;
count__31400_31404 = G__31416;
i__31401_31405 = G__31417;
continue;
} else {
var child_31418 = cljs.core.first.call(null,seq__31398_31412__$1);
frag.appendChild(child_31418);

var G__31419 = cljs.core.next.call(null,seq__31398_31412__$1);
var G__31420 = null;
var G__31421 = (0);
var G__31422 = (0);
seq__31398_31402 = G__31419;
chunk__31399_31403 = G__31420;
count__31400_31404 = G__31421;
i__31401_31405 = G__31422;
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
return (function (p1__31392_SHARP_,p2__31393_SHARP_){
return f.call(null,p1__31392_SHARP_,p2__31393_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args31423 = [];
var len__19487__auto___31426 = arguments.length;
var i__19488__auto___31427 = (0);
while(true){
if((i__19488__auto___31427 < len__19487__auto___31426)){
args31423.push((arguments[i__19488__auto___31427]));

var G__31428 = (i__19488__auto___31427 + (1));
i__19488__auto___31427 = G__31428;
continue;
} else {
}
break;
}

var G__31425 = args31423.length;
switch (G__31425) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31423.length)].join('')));

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
var args31430 = [];
var len__19487__auto___31433 = arguments.length;
var i__19488__auto___31434 = (0);
while(true){
if((i__19488__auto___31434 < len__19487__auto___31433)){
args31430.push((arguments[i__19488__auto___31434]));

var G__31435 = (i__19488__auto___31434 + (1));
i__19488__auto___31434 = G__31435;
continue;
} else {
}
break;
}

var G__31432 = args31430.length;
switch (G__31432) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31430.length)].join('')));

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
var and__18405__auto__ = obj;
if(cljs.core.truth_(and__18405__auto__)){
var and__18405__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__18405__auto____$1){
return obj.length;
} else {
return and__18405__auto____$1;
}
} else {
return and__18405__auto__;
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