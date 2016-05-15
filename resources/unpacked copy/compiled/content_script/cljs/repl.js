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
var seq__8166_8184 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8167_8185 = null;
var count__8168_8186 = (0);
var i__8169_8187 = (0);
while(true){
if((i__8169_8187 < count__8168_8186)){
var f_8188 = cljs.core._nth.call(null,chunk__8167_8185,i__8169_8187);
cljs.core.println.call(null,"  ",f_8188);

var G__8189 = seq__8166_8184;
var G__8190 = chunk__8167_8185;
var G__8191 = count__8168_8186;
var G__8192 = (i__8169_8187 + (1));
seq__8166_8184 = G__8189;
chunk__8167_8185 = G__8190;
count__8168_8186 = G__8191;
i__8169_8187 = G__8192;
continue;
} else {
var temp__4657__auto___8193 = cljs.core.seq.call(null,seq__8166_8184);
if(temp__4657__auto___8193){
var seq__8166_8194__$1 = temp__4657__auto___8193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8166_8194__$1)){
var c__7019__auto___8195 = cljs.core.chunk_first.call(null,seq__8166_8194__$1);
var G__8196 = cljs.core.chunk_rest.call(null,seq__8166_8194__$1);
var G__8197 = c__7019__auto___8195;
var G__8198 = cljs.core.count.call(null,c__7019__auto___8195);
var G__8199 = (0);
seq__8166_8184 = G__8196;
chunk__8167_8185 = G__8197;
count__8168_8186 = G__8198;
i__8169_8187 = G__8199;
continue;
} else {
var f_8200 = cljs.core.first.call(null,seq__8166_8194__$1);
cljs.core.println.call(null,"  ",f_8200);

var G__8201 = cljs.core.next.call(null,seq__8166_8194__$1);
var G__8202 = null;
var G__8203 = (0);
var G__8204 = (0);
seq__8166_8184 = G__8201;
chunk__8167_8185 = G__8202;
count__8168_8186 = G__8203;
i__8169_8187 = G__8204;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8205 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6208__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8205);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8205)))?cljs.core.second.call(null,arglists_8205):arglists_8205));
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
var seq__8170 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8171 = null;
var count__8172 = (0);
var i__8173 = (0);
while(true){
if((i__8173 < count__8172)){
var vec__8174 = cljs.core._nth.call(null,chunk__8171,i__8173);
var name = cljs.core.nth.call(null,vec__8174,(0),null);
var map__8175 = cljs.core.nth.call(null,vec__8174,(1),null);
var map__8175__$1 = ((((!((map__8175 == null)))?((((map__8175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8175):map__8175);
var doc = cljs.core.get.call(null,map__8175__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8175__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8242 = seq__8170;
var G__8243 = chunk__8171;
var G__8244 = count__8172;
var G__8245 = (i__8173 + (1));
seq__8170 = G__8242;
chunk__8171 = G__8243;
count__8172 = G__8244;
i__8173 = G__8245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8170);
if(temp__4657__auto__){
var seq__8170__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8170__$1)){
var c__7019__auto__ = cljs.core.chunk_first.call(null,seq__8170__$1);
var G__8246 = cljs.core.chunk_rest.call(null,seq__8170__$1);
var G__8247 = c__7019__auto__;
var G__8248 = cljs.core.count.call(null,c__7019__auto__);
var G__8249 = (0);
seq__8170 = G__8246;
chunk__8171 = G__8247;
count__8172 = G__8248;
i__8173 = G__8249;
continue;
} else {
var vec__8181 = cljs.core.first.call(null,seq__8170__$1);
var name = cljs.core.nth.call(null,vec__8181,(0),null);
var map__8182 = cljs.core.nth.call(null,vec__8181,(1),null);
var map__8182__$1 = ((((!((map__8182 == null)))?((((map__8182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8182):map__8182);
var doc = cljs.core.get.call(null,map__8182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8250 = cljs.core.next.call(null,seq__8170__$1);
var G__8251 = null;
var G__8252 = (0);
var G__8253 = (0);
seq__8170 = G__8250;
chunk__8171 = G__8251;
count__8172 = G__8252;
i__8173 = G__8253;
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