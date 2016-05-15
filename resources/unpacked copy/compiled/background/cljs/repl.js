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
var seq__45014_45028 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45015_45029 = null;
var count__45016_45030 = (0);
var i__45017_45031 = (0);
while(true){
if((i__45017_45031 < count__45016_45030)){
var f_45032 = cljs.core._nth.call(null,chunk__45015_45029,i__45017_45031);
cljs.core.println.call(null,"  ",f_45032);

var G__45033 = seq__45014_45028;
var G__45034 = chunk__45015_45029;
var G__45035 = count__45016_45030;
var G__45036 = (i__45017_45031 + (1));
seq__45014_45028 = G__45033;
chunk__45015_45029 = G__45034;
count__45016_45030 = G__45035;
i__45017_45031 = G__45036;
continue;
} else {
var temp__4657__auto___45037 = cljs.core.seq.call(null,seq__45014_45028);
if(temp__4657__auto___45037){
var seq__45014_45038__$1 = temp__4657__auto___45037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45014_45038__$1)){
var c__19228__auto___45039 = cljs.core.chunk_first.call(null,seq__45014_45038__$1);
var G__45040 = cljs.core.chunk_rest.call(null,seq__45014_45038__$1);
var G__45041 = c__19228__auto___45039;
var G__45042 = cljs.core.count.call(null,c__19228__auto___45039);
var G__45043 = (0);
seq__45014_45028 = G__45040;
chunk__45015_45029 = G__45041;
count__45016_45030 = G__45042;
i__45017_45031 = G__45043;
continue;
} else {
var f_45044 = cljs.core.first.call(null,seq__45014_45038__$1);
cljs.core.println.call(null,"  ",f_45044);

var G__45045 = cljs.core.next.call(null,seq__45014_45038__$1);
var G__45046 = null;
var G__45047 = (0);
var G__45048 = (0);
seq__45014_45028 = G__45045;
chunk__45015_45029 = G__45046;
count__45016_45030 = G__45047;
i__45017_45031 = G__45048;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45049 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18417__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45049);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45049)))?cljs.core.second.call(null,arglists_45049):arglists_45049));
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
var seq__45018 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45019 = null;
var count__45020 = (0);
var i__45021 = (0);
while(true){
if((i__45021 < count__45020)){
var vec__45022 = cljs.core._nth.call(null,chunk__45019,i__45021);
var name = cljs.core.nth.call(null,vec__45022,(0),null);
var map__45023 = cljs.core.nth.call(null,vec__45022,(1),null);
var map__45023__$1 = ((((!((map__45023 == null)))?((((map__45023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45023):map__45023);
var doc = cljs.core.get.call(null,map__45023__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45023__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45050 = seq__45018;
var G__45051 = chunk__45019;
var G__45052 = count__45020;
var G__45053 = (i__45021 + (1));
seq__45018 = G__45050;
chunk__45019 = G__45051;
count__45020 = G__45052;
i__45021 = G__45053;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45018);
if(temp__4657__auto__){
var seq__45018__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45018__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__45018__$1);
var G__45054 = cljs.core.chunk_rest.call(null,seq__45018__$1);
var G__45055 = c__19228__auto__;
var G__45056 = cljs.core.count.call(null,c__19228__auto__);
var G__45057 = (0);
seq__45018 = G__45054;
chunk__45019 = G__45055;
count__45020 = G__45056;
i__45021 = G__45057;
continue;
} else {
var vec__45025 = cljs.core.first.call(null,seq__45018__$1);
var name = cljs.core.nth.call(null,vec__45025,(0),null);
var map__45026 = cljs.core.nth.call(null,vec__45025,(1),null);
var map__45026__$1 = ((((!((map__45026 == null)))?((((map__45026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45026):map__45026);
var doc = cljs.core.get.call(null,map__45026__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45026__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45058 = cljs.core.next.call(null,seq__45018__$1);
var G__45059 = null;
var G__45060 = (0);
var G__45061 = (0);
seq__45018 = G__45058;
chunk__45019 = G__45059;
count__45020 = G__45060;
i__45021 = G__45061;
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