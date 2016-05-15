// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35716_35730 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35717_35731 = null;
var count__35718_35732 = (0);
var i__35719_35733 = (0);
while(true){
if((i__35719_35733 < count__35718_35732)){
var f_35734 = cljs.core._nth.call(null,chunk__35717_35731,i__35719_35733);
cljs.core.println.call(null,"  ",f_35734);

var G__35735 = seq__35716_35730;
var G__35736 = chunk__35717_35731;
var G__35737 = count__35718_35732;
var G__35738 = (i__35719_35733 + (1));
seq__35716_35730 = G__35735;
chunk__35717_35731 = G__35736;
count__35718_35732 = G__35737;
i__35719_35733 = G__35738;
continue;
} else {
var temp__4657__auto___35739 = cljs.core.seq.call(null,seq__35716_35730);
if(temp__4657__auto___35739){
var seq__35716_35740__$1 = temp__4657__auto___35739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35716_35740__$1)){
var c__19228__auto___35741 = cljs.core.chunk_first.call(null,seq__35716_35740__$1);
var G__35742 = cljs.core.chunk_rest.call(null,seq__35716_35740__$1);
var G__35743 = c__19228__auto___35741;
var G__35744 = cljs.core.count.call(null,c__19228__auto___35741);
var G__35745 = (0);
seq__35716_35730 = G__35742;
chunk__35717_35731 = G__35743;
count__35718_35732 = G__35744;
i__35719_35733 = G__35745;
continue;
} else {
var f_35746 = cljs.core.first.call(null,seq__35716_35740__$1);
cljs.core.println.call(null,"  ",f_35746);

var G__35747 = cljs.core.next.call(null,seq__35716_35740__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35716_35730 = G__35747;
chunk__35717_35731 = G__35748;
count__35718_35732 = G__35749;
i__35719_35733 = G__35750;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35751 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18417__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35751);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35751)))?cljs.core.second.call(null,arglists_35751):arglists_35751));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35720 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35721 = null;
var count__35722 = (0);
var i__35723 = (0);
while(true){
if((i__35723 < count__35722)){
var vec__35724 = cljs.core._nth.call(null,chunk__35721,i__35723);
var name = cljs.core.nth.call(null,vec__35724,(0),null);
var map__35725 = cljs.core.nth.call(null,vec__35724,(1),null);
var map__35725__$1 = ((((!((map__35725 == null)))?((((map__35725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35725):map__35725);
var doc = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35752 = seq__35720;
var G__35753 = chunk__35721;
var G__35754 = count__35722;
var G__35755 = (i__35723 + (1));
seq__35720 = G__35752;
chunk__35721 = G__35753;
count__35722 = G__35754;
i__35723 = G__35755;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35720);
if(temp__4657__auto__){
var seq__35720__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35720__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__35720__$1);
var G__35756 = cljs.core.chunk_rest.call(null,seq__35720__$1);
var G__35757 = c__19228__auto__;
var G__35758 = cljs.core.count.call(null,c__19228__auto__);
var G__35759 = (0);
seq__35720 = G__35756;
chunk__35721 = G__35757;
count__35722 = G__35758;
i__35723 = G__35759;
continue;
} else {
var vec__35727 = cljs.core.first.call(null,seq__35720__$1);
var name = cljs.core.nth.call(null,vec__35727,(0),null);
var map__35728 = cljs.core.nth.call(null,vec__35727,(1),null);
var map__35728__$1 = ((((!((map__35728 == null)))?((((map__35728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35728):map__35728);
var doc = cljs.core.get.call(null,map__35728__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35728__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35760 = cljs.core.next.call(null,seq__35720__$1);
var G__35761 = null;
var G__35762 = (0);
var G__35763 = (0);
seq__35720 = G__35760;
chunk__35721 = G__35761;
count__35722 = G__35762;
i__35723 = G__35763;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map