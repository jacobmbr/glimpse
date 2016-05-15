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
var seq__25949_25963 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25950_25964 = null;
var count__25951_25965 = (0);
var i__25952_25966 = (0);
while(true){
if((i__25952_25966 < count__25951_25965)){
var f_25967 = cljs.core._nth.call(null,chunk__25950_25964,i__25952_25966);
cljs.core.println.call(null,"  ",f_25967);

var G__25968 = seq__25949_25963;
var G__25969 = chunk__25950_25964;
var G__25970 = count__25951_25965;
var G__25971 = (i__25952_25966 + (1));
seq__25949_25963 = G__25968;
chunk__25950_25964 = G__25969;
count__25951_25965 = G__25970;
i__25952_25966 = G__25971;
continue;
} else {
var temp__4657__auto___25972 = cljs.core.seq.call(null,seq__25949_25963);
if(temp__4657__auto___25972){
var seq__25949_25973__$1 = temp__4657__auto___25972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25949_25973__$1)){
var c__19228__auto___25974 = cljs.core.chunk_first.call(null,seq__25949_25973__$1);
var G__25975 = cljs.core.chunk_rest.call(null,seq__25949_25973__$1);
var G__25976 = c__19228__auto___25974;
var G__25977 = cljs.core.count.call(null,c__19228__auto___25974);
var G__25978 = (0);
seq__25949_25963 = G__25975;
chunk__25950_25964 = G__25976;
count__25951_25965 = G__25977;
i__25952_25966 = G__25978;
continue;
} else {
var f_25979 = cljs.core.first.call(null,seq__25949_25973__$1);
cljs.core.println.call(null,"  ",f_25979);

var G__25980 = cljs.core.next.call(null,seq__25949_25973__$1);
var G__25981 = null;
var G__25982 = (0);
var G__25983 = (0);
seq__25949_25963 = G__25980;
chunk__25950_25964 = G__25981;
count__25951_25965 = G__25982;
i__25952_25966 = G__25983;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25984 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18417__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25984);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25984)))?cljs.core.second.call(null,arglists_25984):arglists_25984));
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
var seq__25953 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25954 = null;
var count__25955 = (0);
var i__25956 = (0);
while(true){
if((i__25956 < count__25955)){
var vec__25957 = cljs.core._nth.call(null,chunk__25954,i__25956);
var name = cljs.core.nth.call(null,vec__25957,(0),null);
var map__25958 = cljs.core.nth.call(null,vec__25957,(1),null);
var map__25958__$1 = ((((!((map__25958 == null)))?((((map__25958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25958):map__25958);
var doc = cljs.core.get.call(null,map__25958__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25958__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25985 = seq__25953;
var G__25986 = chunk__25954;
var G__25987 = count__25955;
var G__25988 = (i__25956 + (1));
seq__25953 = G__25985;
chunk__25954 = G__25986;
count__25955 = G__25987;
i__25956 = G__25988;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25953);
if(temp__4657__auto__){
var seq__25953__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25953__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__25953__$1);
var G__25989 = cljs.core.chunk_rest.call(null,seq__25953__$1);
var G__25990 = c__19228__auto__;
var G__25991 = cljs.core.count.call(null,c__19228__auto__);
var G__25992 = (0);
seq__25953 = G__25989;
chunk__25954 = G__25990;
count__25955 = G__25991;
i__25956 = G__25992;
continue;
} else {
var vec__25960 = cljs.core.first.call(null,seq__25953__$1);
var name = cljs.core.nth.call(null,vec__25960,(0),null);
var map__25961 = cljs.core.nth.call(null,vec__25960,(1),null);
var map__25961__$1 = ((((!((map__25961 == null)))?((((map__25961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25961):map__25961);
var doc = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25993 = cljs.core.next.call(null,seq__25953__$1);
var G__25994 = null;
var G__25995 = (0);
var G__25996 = (0);
seq__25953 = G__25993;
chunk__25954 = G__25994;
count__25955 = G__25995;
i__25956 = G__25996;
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