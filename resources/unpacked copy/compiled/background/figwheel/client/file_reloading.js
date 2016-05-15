// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18417__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18417__auto__){
return or__18417__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18417__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__43990_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__43990_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__43995 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__43996 = null;
var count__43997 = (0);
var i__43998 = (0);
while(true){
if((i__43998 < count__43997)){
var n = cljs.core._nth.call(null,chunk__43996,i__43998);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43999 = seq__43995;
var G__44000 = chunk__43996;
var G__44001 = count__43997;
var G__44002 = (i__43998 + (1));
seq__43995 = G__43999;
chunk__43996 = G__44000;
count__43997 = G__44001;
i__43998 = G__44002;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43995);
if(temp__4657__auto__){
var seq__43995__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43995__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__43995__$1);
var G__44003 = cljs.core.chunk_rest.call(null,seq__43995__$1);
var G__44004 = c__19228__auto__;
var G__44005 = cljs.core.count.call(null,c__19228__auto__);
var G__44006 = (0);
seq__43995 = G__44003;
chunk__43996 = G__44004;
count__43997 = G__44005;
i__43998 = G__44006;
continue;
} else {
var n = cljs.core.first.call(null,seq__43995__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44007 = cljs.core.next.call(null,seq__43995__$1);
var G__44008 = null;
var G__44009 = (0);
var G__44010 = (0);
seq__43995 = G__44007;
chunk__43996 = G__44008;
count__43997 = G__44009;
i__43998 = G__44010;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44049_44056 = cljs.core.seq.call(null,deps);
var chunk__44050_44057 = null;
var count__44051_44058 = (0);
var i__44052_44059 = (0);
while(true){
if((i__44052_44059 < count__44051_44058)){
var dep_44060 = cljs.core._nth.call(null,chunk__44050_44057,i__44052_44059);
topo_sort_helper_STAR_.call(null,dep_44060,(depth + (1)),state);

var G__44061 = seq__44049_44056;
var G__44062 = chunk__44050_44057;
var G__44063 = count__44051_44058;
var G__44064 = (i__44052_44059 + (1));
seq__44049_44056 = G__44061;
chunk__44050_44057 = G__44062;
count__44051_44058 = G__44063;
i__44052_44059 = G__44064;
continue;
} else {
var temp__4657__auto___44065 = cljs.core.seq.call(null,seq__44049_44056);
if(temp__4657__auto___44065){
var seq__44049_44066__$1 = temp__4657__auto___44065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44049_44066__$1)){
var c__19228__auto___44067 = cljs.core.chunk_first.call(null,seq__44049_44066__$1);
var G__44068 = cljs.core.chunk_rest.call(null,seq__44049_44066__$1);
var G__44069 = c__19228__auto___44067;
var G__44070 = cljs.core.count.call(null,c__19228__auto___44067);
var G__44071 = (0);
seq__44049_44056 = G__44068;
chunk__44050_44057 = G__44069;
count__44051_44058 = G__44070;
i__44052_44059 = G__44071;
continue;
} else {
var dep_44072 = cljs.core.first.call(null,seq__44049_44066__$1);
topo_sort_helper_STAR_.call(null,dep_44072,(depth + (1)),state);

var G__44073 = cljs.core.next.call(null,seq__44049_44066__$1);
var G__44074 = null;
var G__44075 = (0);
var G__44076 = (0);
seq__44049_44056 = G__44073;
chunk__44050_44057 = G__44074;
count__44051_44058 = G__44075;
i__44052_44059 = G__44076;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44053){
var vec__44055 = p__44053;
var x = cljs.core.nth.call(null,vec__44055,(0),null);
var xs = cljs.core.nthnext.call(null,vec__44055,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44055,x,xs,get_deps__$1){
return (function (p1__44011_SHARP_){
return clojure.set.difference.call(null,p1__44011_SHARP_,x);
});})(vec__44055,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44089 = cljs.core.seq.call(null,provides);
var chunk__44090 = null;
var count__44091 = (0);
var i__44092 = (0);
while(true){
if((i__44092 < count__44091)){
var prov = cljs.core._nth.call(null,chunk__44090,i__44092);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44093_44101 = cljs.core.seq.call(null,requires);
var chunk__44094_44102 = null;
var count__44095_44103 = (0);
var i__44096_44104 = (0);
while(true){
if((i__44096_44104 < count__44095_44103)){
var req_44105 = cljs.core._nth.call(null,chunk__44094_44102,i__44096_44104);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44105,prov);

var G__44106 = seq__44093_44101;
var G__44107 = chunk__44094_44102;
var G__44108 = count__44095_44103;
var G__44109 = (i__44096_44104 + (1));
seq__44093_44101 = G__44106;
chunk__44094_44102 = G__44107;
count__44095_44103 = G__44108;
i__44096_44104 = G__44109;
continue;
} else {
var temp__4657__auto___44110 = cljs.core.seq.call(null,seq__44093_44101);
if(temp__4657__auto___44110){
var seq__44093_44111__$1 = temp__4657__auto___44110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44093_44111__$1)){
var c__19228__auto___44112 = cljs.core.chunk_first.call(null,seq__44093_44111__$1);
var G__44113 = cljs.core.chunk_rest.call(null,seq__44093_44111__$1);
var G__44114 = c__19228__auto___44112;
var G__44115 = cljs.core.count.call(null,c__19228__auto___44112);
var G__44116 = (0);
seq__44093_44101 = G__44113;
chunk__44094_44102 = G__44114;
count__44095_44103 = G__44115;
i__44096_44104 = G__44116;
continue;
} else {
var req_44117 = cljs.core.first.call(null,seq__44093_44111__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44117,prov);

var G__44118 = cljs.core.next.call(null,seq__44093_44111__$1);
var G__44119 = null;
var G__44120 = (0);
var G__44121 = (0);
seq__44093_44101 = G__44118;
chunk__44094_44102 = G__44119;
count__44095_44103 = G__44120;
i__44096_44104 = G__44121;
continue;
}
} else {
}
}
break;
}

var G__44122 = seq__44089;
var G__44123 = chunk__44090;
var G__44124 = count__44091;
var G__44125 = (i__44092 + (1));
seq__44089 = G__44122;
chunk__44090 = G__44123;
count__44091 = G__44124;
i__44092 = G__44125;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44089);
if(temp__4657__auto__){
var seq__44089__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44089__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__44089__$1);
var G__44126 = cljs.core.chunk_rest.call(null,seq__44089__$1);
var G__44127 = c__19228__auto__;
var G__44128 = cljs.core.count.call(null,c__19228__auto__);
var G__44129 = (0);
seq__44089 = G__44126;
chunk__44090 = G__44127;
count__44091 = G__44128;
i__44092 = G__44129;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44089__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44097_44130 = cljs.core.seq.call(null,requires);
var chunk__44098_44131 = null;
var count__44099_44132 = (0);
var i__44100_44133 = (0);
while(true){
if((i__44100_44133 < count__44099_44132)){
var req_44134 = cljs.core._nth.call(null,chunk__44098_44131,i__44100_44133);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44134,prov);

var G__44135 = seq__44097_44130;
var G__44136 = chunk__44098_44131;
var G__44137 = count__44099_44132;
var G__44138 = (i__44100_44133 + (1));
seq__44097_44130 = G__44135;
chunk__44098_44131 = G__44136;
count__44099_44132 = G__44137;
i__44100_44133 = G__44138;
continue;
} else {
var temp__4657__auto___44139__$1 = cljs.core.seq.call(null,seq__44097_44130);
if(temp__4657__auto___44139__$1){
var seq__44097_44140__$1 = temp__4657__auto___44139__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44097_44140__$1)){
var c__19228__auto___44141 = cljs.core.chunk_first.call(null,seq__44097_44140__$1);
var G__44142 = cljs.core.chunk_rest.call(null,seq__44097_44140__$1);
var G__44143 = c__19228__auto___44141;
var G__44144 = cljs.core.count.call(null,c__19228__auto___44141);
var G__44145 = (0);
seq__44097_44130 = G__44142;
chunk__44098_44131 = G__44143;
count__44099_44132 = G__44144;
i__44100_44133 = G__44145;
continue;
} else {
var req_44146 = cljs.core.first.call(null,seq__44097_44140__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44146,prov);

var G__44147 = cljs.core.next.call(null,seq__44097_44140__$1);
var G__44148 = null;
var G__44149 = (0);
var G__44150 = (0);
seq__44097_44130 = G__44147;
chunk__44098_44131 = G__44148;
count__44099_44132 = G__44149;
i__44100_44133 = G__44150;
continue;
}
} else {
}
}
break;
}

var G__44151 = cljs.core.next.call(null,seq__44089__$1);
var G__44152 = null;
var G__44153 = (0);
var G__44154 = (0);
seq__44089 = G__44151;
chunk__44090 = G__44152;
count__44091 = G__44153;
i__44092 = G__44154;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44159_44163 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44160_44164 = null;
var count__44161_44165 = (0);
var i__44162_44166 = (0);
while(true){
if((i__44162_44166 < count__44161_44165)){
var ns_44167 = cljs.core._nth.call(null,chunk__44160_44164,i__44162_44166);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44167);

var G__44168 = seq__44159_44163;
var G__44169 = chunk__44160_44164;
var G__44170 = count__44161_44165;
var G__44171 = (i__44162_44166 + (1));
seq__44159_44163 = G__44168;
chunk__44160_44164 = G__44169;
count__44161_44165 = G__44170;
i__44162_44166 = G__44171;
continue;
} else {
var temp__4657__auto___44172 = cljs.core.seq.call(null,seq__44159_44163);
if(temp__4657__auto___44172){
var seq__44159_44173__$1 = temp__4657__auto___44172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44159_44173__$1)){
var c__19228__auto___44174 = cljs.core.chunk_first.call(null,seq__44159_44173__$1);
var G__44175 = cljs.core.chunk_rest.call(null,seq__44159_44173__$1);
var G__44176 = c__19228__auto___44174;
var G__44177 = cljs.core.count.call(null,c__19228__auto___44174);
var G__44178 = (0);
seq__44159_44163 = G__44175;
chunk__44160_44164 = G__44176;
count__44161_44165 = G__44177;
i__44162_44166 = G__44178;
continue;
} else {
var ns_44179 = cljs.core.first.call(null,seq__44159_44173__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44179);

var G__44180 = cljs.core.next.call(null,seq__44159_44173__$1);
var G__44181 = null;
var G__44182 = (0);
var G__44183 = (0);
seq__44159_44163 = G__44180;
chunk__44160_44164 = G__44181;
count__44161_44165 = G__44182;
i__44162_44166 = G__44183;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18417__auto__ = goog.require__;
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44184__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44185__i = 0, G__44185__a = new Array(arguments.length -  0);
while (G__44185__i < G__44185__a.length) {G__44185__a[G__44185__i] = arguments[G__44185__i + 0]; ++G__44185__i;}
  args = new cljs.core.IndexedSeq(G__44185__a,0);
} 
return G__44184__delegate.call(this,args);};
G__44184.cljs$lang$maxFixedArity = 0;
G__44184.cljs$lang$applyTo = (function (arglist__44186){
var args = cljs.core.seq(arglist__44186);
return G__44184__delegate(args);
});
G__44184.cljs$core$IFn$_invoke$arity$variadic = G__44184__delegate;
return G__44184;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44188 = cljs.core._EQ_;
var expr__44189 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44188.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44189))){
var path_parts = ((function (pred__44188,expr__44189){
return (function (p1__44187_SHARP_){
return clojure.string.split.call(null,p1__44187_SHARP_,/[\/\\]/);
});})(pred__44188,expr__44189))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__44188,expr__44189){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44191){if((e44191 instanceof Error)){
var e = e44191;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44191;

}
}})());
});
;})(path_parts,sep,root,pred__44188,expr__44189))
} else {
if(cljs.core.truth_(pred__44188.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44189))){
return ((function (pred__44188,expr__44189){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__44188,expr__44189){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__44188,expr__44189))
);

return deferred.addErrback(((function (deferred,pred__44188,expr__44189){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__44188,expr__44189))
);
});
;})(pred__44188,expr__44189))
} else {
return ((function (pred__44188,expr__44189){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44188,expr__44189))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44192,callback){
var map__44195 = p__44192;
var map__44195__$1 = ((((!((map__44195 == null)))?((((map__44195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44195):map__44195);
var file_msg = map__44195__$1;
var request_url = cljs.core.get.call(null,map__44195__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44195,map__44195__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44195,map__44195__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_44219){
var state_val_44220 = (state_44219[(1)]);
if((state_val_44220 === (7))){
var inst_44215 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
var statearr_44221_44241 = state_44219__$1;
(statearr_44221_44241[(2)] = inst_44215);

(statearr_44221_44241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (1))){
var state_44219__$1 = state_44219;
var statearr_44222_44242 = state_44219__$1;
(statearr_44222_44242[(2)] = null);

(statearr_44222_44242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (4))){
var inst_44199 = (state_44219[(7)]);
var inst_44199__$1 = (state_44219[(2)]);
var state_44219__$1 = (function (){var statearr_44223 = state_44219;
(statearr_44223[(7)] = inst_44199__$1);

return statearr_44223;
})();
if(cljs.core.truth_(inst_44199__$1)){
var statearr_44224_44243 = state_44219__$1;
(statearr_44224_44243[(1)] = (5));

} else {
var statearr_44225_44244 = state_44219__$1;
(statearr_44225_44244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (6))){
var state_44219__$1 = state_44219;
var statearr_44226_44245 = state_44219__$1;
(statearr_44226_44245[(2)] = null);

(statearr_44226_44245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (3))){
var inst_44217 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44219__$1,inst_44217);
} else {
if((state_val_44220 === (2))){
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44219__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44220 === (11))){
var inst_44211 = (state_44219[(2)]);
var state_44219__$1 = (function (){var statearr_44227 = state_44219;
(statearr_44227[(8)] = inst_44211);

return statearr_44227;
})();
var statearr_44228_44246 = state_44219__$1;
(statearr_44228_44246[(2)] = null);

(statearr_44228_44246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (9))){
var inst_44205 = (state_44219[(9)]);
var inst_44203 = (state_44219[(10)]);
var inst_44207 = inst_44205.call(null,inst_44203);
var state_44219__$1 = state_44219;
var statearr_44229_44247 = state_44219__$1;
(statearr_44229_44247[(2)] = inst_44207);

(statearr_44229_44247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (5))){
var inst_44199 = (state_44219[(7)]);
var inst_44201 = figwheel.client.file_reloading.blocking_load.call(null,inst_44199);
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44219__$1,(8),inst_44201);
} else {
if((state_val_44220 === (10))){
var inst_44203 = (state_44219[(10)]);
var inst_44209 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44203);
var state_44219__$1 = state_44219;
var statearr_44230_44248 = state_44219__$1;
(statearr_44230_44248[(2)] = inst_44209);

(statearr_44230_44248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (8))){
var inst_44199 = (state_44219[(7)]);
var inst_44205 = (state_44219[(9)]);
var inst_44203 = (state_44219[(2)]);
var inst_44204 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44205__$1 = cljs.core.get.call(null,inst_44204,inst_44199);
var state_44219__$1 = (function (){var statearr_44231 = state_44219;
(statearr_44231[(9)] = inst_44205__$1);

(statearr_44231[(10)] = inst_44203);

return statearr_44231;
})();
if(cljs.core.truth_(inst_44205__$1)){
var statearr_44232_44249 = state_44219__$1;
(statearr_44232_44249[(1)] = (9));

} else {
var statearr_44233_44250 = state_44219__$1;
(statearr_44233_44250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20502__auto__ = null;
var figwheel$client$file_reloading$state_machine__20502__auto____0 = (function (){
var statearr_44237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44237[(0)] = figwheel$client$file_reloading$state_machine__20502__auto__);

(statearr_44237[(1)] = (1));

return statearr_44237;
});
var figwheel$client$file_reloading$state_machine__20502__auto____1 = (function (state_44219){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_44219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e44238){if((e44238 instanceof Object)){
var ex__20505__auto__ = e44238;
var statearr_44239_44251 = state_44219;
(statearr_44239_44251[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44252 = state_44219;
state_44219 = G__44252;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20502__auto__ = function(state_44219){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20502__auto____1.call(this,state_44219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20502__auto____0;
figwheel$client$file_reloading$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20502__auto____1;
return figwheel$client$file_reloading$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_44240 = f__20614__auto__.call(null);
(statearr_44240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_44240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44253,callback){
var map__44256 = p__44253;
var map__44256__$1 = ((((!((map__44256 == null)))?((((map__44256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44256):map__44256);
var file_msg = map__44256__$1;
var namespace = cljs.core.get.call(null,map__44256__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44256,map__44256__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44256,map__44256__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44258){
var map__44261 = p__44258;
var map__44261__$1 = ((((!((map__44261 == null)))?((((map__44261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44261):map__44261);
var file_msg = map__44261__$1;
var namespace = cljs.core.get.call(null,map__44261__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18405__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18405__auto__){
var or__18417__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
var or__18417__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18417__auto____$1)){
return or__18417__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18405__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44263,callback){
var map__44266 = p__44263;
var map__44266__$1 = ((((!((map__44266 == null)))?((((map__44266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44266):map__44266);
var file_msg = map__44266__$1;
var request_url = cljs.core.get.call(null,map__44266__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20613__auto___44354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___44354,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___44354,out){
return (function (state_44336){
var state_val_44337 = (state_44336[(1)]);
if((state_val_44337 === (1))){
var inst_44314 = cljs.core.nth.call(null,files,(0),null);
var inst_44315 = cljs.core.nthnext.call(null,files,(1));
var inst_44316 = files;
var state_44336__$1 = (function (){var statearr_44338 = state_44336;
(statearr_44338[(7)] = inst_44316);

(statearr_44338[(8)] = inst_44315);

(statearr_44338[(9)] = inst_44314);

return statearr_44338;
})();
var statearr_44339_44355 = state_44336__$1;
(statearr_44339_44355[(2)] = null);

(statearr_44339_44355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44337 === (2))){
var inst_44319 = (state_44336[(10)]);
var inst_44316 = (state_44336[(7)]);
var inst_44319__$1 = cljs.core.nth.call(null,inst_44316,(0),null);
var inst_44320 = cljs.core.nthnext.call(null,inst_44316,(1));
var inst_44321 = (inst_44319__$1 == null);
var inst_44322 = cljs.core.not.call(null,inst_44321);
var state_44336__$1 = (function (){var statearr_44340 = state_44336;
(statearr_44340[(10)] = inst_44319__$1);

(statearr_44340[(11)] = inst_44320);

return statearr_44340;
})();
if(inst_44322){
var statearr_44341_44356 = state_44336__$1;
(statearr_44341_44356[(1)] = (4));

} else {
var statearr_44342_44357 = state_44336__$1;
(statearr_44342_44357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44337 === (3))){
var inst_44334 = (state_44336[(2)]);
var state_44336__$1 = state_44336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44336__$1,inst_44334);
} else {
if((state_val_44337 === (4))){
var inst_44319 = (state_44336[(10)]);
var inst_44324 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44319);
var state_44336__$1 = state_44336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44336__$1,(7),inst_44324);
} else {
if((state_val_44337 === (5))){
var inst_44330 = cljs.core.async.close_BANG_.call(null,out);
var state_44336__$1 = state_44336;
var statearr_44343_44358 = state_44336__$1;
(statearr_44343_44358[(2)] = inst_44330);

(statearr_44343_44358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44337 === (6))){
var inst_44332 = (state_44336[(2)]);
var state_44336__$1 = state_44336;
var statearr_44344_44359 = state_44336__$1;
(statearr_44344_44359[(2)] = inst_44332);

(statearr_44344_44359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44337 === (7))){
var inst_44320 = (state_44336[(11)]);
var inst_44326 = (state_44336[(2)]);
var inst_44327 = cljs.core.async.put_BANG_.call(null,out,inst_44326);
var inst_44316 = inst_44320;
var state_44336__$1 = (function (){var statearr_44345 = state_44336;
(statearr_44345[(7)] = inst_44316);

(statearr_44345[(12)] = inst_44327);

return statearr_44345;
})();
var statearr_44346_44360 = state_44336__$1;
(statearr_44346_44360[(2)] = null);

(statearr_44346_44360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20613__auto___44354,out))
;
return ((function (switch__20501__auto__,c__20613__auto___44354,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0 = (function (){
var statearr_44350 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44350[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__);

(statearr_44350[(1)] = (1));

return statearr_44350;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1 = (function (state_44336){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_44336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e44351){if((e44351 instanceof Object)){
var ex__20505__auto__ = e44351;
var statearr_44352_44361 = state_44336;
(statearr_44352_44361[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44362 = state_44336;
state_44336 = G__44362;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__ = function(state_44336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1.call(this,state_44336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___44354,out))
})();
var state__20615__auto__ = (function (){var statearr_44353 = f__20614__auto__.call(null);
(statearr_44353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___44354);

return statearr_44353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___44354,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44363,opts){
var map__44367 = p__44363;
var map__44367__$1 = ((((!((map__44367 == null)))?((((map__44367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44367):map__44367);
var eval_body__$1 = cljs.core.get.call(null,map__44367__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44367__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18405__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18405__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18405__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44369){var e = e44369;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44370_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44370_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44375){
var vec__44376 = p__44375;
var k = cljs.core.nth.call(null,vec__44376,(0),null);
var v = cljs.core.nth.call(null,vec__44376,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44377){
var vec__44378 = p__44377;
var k = cljs.core.nth.call(null,vec__44378,(0),null);
var v = cljs.core.nth.call(null,vec__44378,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44382,p__44383){
var map__44630 = p__44382;
var map__44630__$1 = ((((!((map__44630 == null)))?((((map__44630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44630):map__44630);
var opts = map__44630__$1;
var before_jsload = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44631 = p__44383;
var map__44631__$1 = ((((!((map__44631 == null)))?((((map__44631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44631):map__44631);
var msg = map__44631__$1;
var files = cljs.core.get.call(null,map__44631__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44631__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44631__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44784){
var state_val_44785 = (state_44784[(1)]);
if((state_val_44785 === (7))){
var inst_44646 = (state_44784[(7)]);
var inst_44647 = (state_44784[(8)]);
var inst_44648 = (state_44784[(9)]);
var inst_44645 = (state_44784[(10)]);
var inst_44653 = cljs.core._nth.call(null,inst_44646,inst_44648);
var inst_44654 = figwheel.client.file_reloading.eval_body.call(null,inst_44653,opts);
var inst_44655 = (inst_44648 + (1));
var tmp44786 = inst_44646;
var tmp44787 = inst_44647;
var tmp44788 = inst_44645;
var inst_44645__$1 = tmp44788;
var inst_44646__$1 = tmp44786;
var inst_44647__$1 = tmp44787;
var inst_44648__$1 = inst_44655;
var state_44784__$1 = (function (){var statearr_44789 = state_44784;
(statearr_44789[(7)] = inst_44646__$1);

(statearr_44789[(8)] = inst_44647__$1);

(statearr_44789[(9)] = inst_44648__$1);

(statearr_44789[(10)] = inst_44645__$1);

(statearr_44789[(11)] = inst_44654);

return statearr_44789;
})();
var statearr_44790_44876 = state_44784__$1;
(statearr_44790_44876[(2)] = null);

(statearr_44790_44876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (20))){
var inst_44688 = (state_44784[(12)]);
var inst_44696 = figwheel.client.file_reloading.sort_files.call(null,inst_44688);
var state_44784__$1 = state_44784;
var statearr_44791_44877 = state_44784__$1;
(statearr_44791_44877[(2)] = inst_44696);

(statearr_44791_44877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (27))){
var state_44784__$1 = state_44784;
var statearr_44792_44878 = state_44784__$1;
(statearr_44792_44878[(2)] = null);

(statearr_44792_44878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (1))){
var inst_44637 = (state_44784[(13)]);
var inst_44634 = before_jsload.call(null,files);
var inst_44635 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44636 = (function (){return ((function (inst_44637,inst_44634,inst_44635,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44379_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44379_SHARP_);
});
;})(inst_44637,inst_44634,inst_44635,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44637__$1 = cljs.core.filter.call(null,inst_44636,files);
var inst_44638 = cljs.core.not_empty.call(null,inst_44637__$1);
var state_44784__$1 = (function (){var statearr_44793 = state_44784;
(statearr_44793[(14)] = inst_44634);

(statearr_44793[(13)] = inst_44637__$1);

(statearr_44793[(15)] = inst_44635);

return statearr_44793;
})();
if(cljs.core.truth_(inst_44638)){
var statearr_44794_44879 = state_44784__$1;
(statearr_44794_44879[(1)] = (2));

} else {
var statearr_44795_44880 = state_44784__$1;
(statearr_44795_44880[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (24))){
var state_44784__$1 = state_44784;
var statearr_44796_44881 = state_44784__$1;
(statearr_44796_44881[(2)] = null);

(statearr_44796_44881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (39))){
var inst_44738 = (state_44784[(16)]);
var state_44784__$1 = state_44784;
var statearr_44797_44882 = state_44784__$1;
(statearr_44797_44882[(2)] = inst_44738);

(statearr_44797_44882[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (46))){
var inst_44779 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44798_44883 = state_44784__$1;
(statearr_44798_44883[(2)] = inst_44779);

(statearr_44798_44883[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (4))){
var inst_44682 = (state_44784[(2)]);
var inst_44683 = cljs.core.List.EMPTY;
var inst_44684 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44683);
var inst_44685 = (function (){return ((function (inst_44682,inst_44683,inst_44684,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44380_SHARP_){
var and__18405__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44380_SHARP_);
if(cljs.core.truth_(and__18405__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44380_SHARP_));
} else {
return and__18405__auto__;
}
});
;})(inst_44682,inst_44683,inst_44684,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44686 = cljs.core.filter.call(null,inst_44685,files);
var inst_44687 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44688 = cljs.core.concat.call(null,inst_44686,inst_44687);
var state_44784__$1 = (function (){var statearr_44799 = state_44784;
(statearr_44799[(17)] = inst_44684);

(statearr_44799[(12)] = inst_44688);

(statearr_44799[(18)] = inst_44682);

return statearr_44799;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44800_44884 = state_44784__$1;
(statearr_44800_44884[(1)] = (16));

} else {
var statearr_44801_44885 = state_44784__$1;
(statearr_44801_44885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (15))){
var inst_44672 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44802_44886 = state_44784__$1;
(statearr_44802_44886[(2)] = inst_44672);

(statearr_44802_44886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (21))){
var inst_44698 = (state_44784[(19)]);
var inst_44698__$1 = (state_44784[(2)]);
var inst_44699 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44698__$1);
var state_44784__$1 = (function (){var statearr_44803 = state_44784;
(statearr_44803[(19)] = inst_44698__$1);

return statearr_44803;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44784__$1,(22),inst_44699);
} else {
if((state_val_44785 === (31))){
var inst_44782 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44784__$1,inst_44782);
} else {
if((state_val_44785 === (32))){
var inst_44738 = (state_44784[(16)]);
var inst_44743 = inst_44738.cljs$lang$protocol_mask$partition0$;
var inst_44744 = (inst_44743 & (64));
var inst_44745 = inst_44738.cljs$core$ISeq$;
var inst_44746 = (inst_44744) || (inst_44745);
var state_44784__$1 = state_44784;
if(cljs.core.truth_(inst_44746)){
var statearr_44804_44887 = state_44784__$1;
(statearr_44804_44887[(1)] = (35));

} else {
var statearr_44805_44888 = state_44784__$1;
(statearr_44805_44888[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (40))){
var inst_44759 = (state_44784[(20)]);
var inst_44758 = (state_44784[(2)]);
var inst_44759__$1 = cljs.core.get.call(null,inst_44758,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44760 = cljs.core.get.call(null,inst_44758,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44761 = cljs.core.not_empty.call(null,inst_44759__$1);
var state_44784__$1 = (function (){var statearr_44806 = state_44784;
(statearr_44806[(21)] = inst_44760);

(statearr_44806[(20)] = inst_44759__$1);

return statearr_44806;
})();
if(cljs.core.truth_(inst_44761)){
var statearr_44807_44889 = state_44784__$1;
(statearr_44807_44889[(1)] = (41));

} else {
var statearr_44808_44890 = state_44784__$1;
(statearr_44808_44890[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (33))){
var state_44784__$1 = state_44784;
var statearr_44809_44891 = state_44784__$1;
(statearr_44809_44891[(2)] = false);

(statearr_44809_44891[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (13))){
var inst_44658 = (state_44784[(22)]);
var inst_44662 = cljs.core.chunk_first.call(null,inst_44658);
var inst_44663 = cljs.core.chunk_rest.call(null,inst_44658);
var inst_44664 = cljs.core.count.call(null,inst_44662);
var inst_44645 = inst_44663;
var inst_44646 = inst_44662;
var inst_44647 = inst_44664;
var inst_44648 = (0);
var state_44784__$1 = (function (){var statearr_44810 = state_44784;
(statearr_44810[(7)] = inst_44646);

(statearr_44810[(8)] = inst_44647);

(statearr_44810[(9)] = inst_44648);

(statearr_44810[(10)] = inst_44645);

return statearr_44810;
})();
var statearr_44811_44892 = state_44784__$1;
(statearr_44811_44892[(2)] = null);

(statearr_44811_44892[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (22))){
var inst_44698 = (state_44784[(19)]);
var inst_44702 = (state_44784[(23)]);
var inst_44701 = (state_44784[(24)]);
var inst_44706 = (state_44784[(25)]);
var inst_44701__$1 = (state_44784[(2)]);
var inst_44702__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44701__$1);
var inst_44703 = (function (){var all_files = inst_44698;
var res_SINGLEQUOTE_ = inst_44701__$1;
var res = inst_44702__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44698,inst_44702,inst_44701,inst_44706,inst_44701__$1,inst_44702__$1,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44381_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44381_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44698,inst_44702,inst_44701,inst_44706,inst_44701__$1,inst_44702__$1,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44704 = cljs.core.filter.call(null,inst_44703,inst_44701__$1);
var inst_44705 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44706__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44705);
var inst_44707 = cljs.core.not_empty.call(null,inst_44706__$1);
var state_44784__$1 = (function (){var statearr_44812 = state_44784;
(statearr_44812[(26)] = inst_44704);

(statearr_44812[(23)] = inst_44702__$1);

(statearr_44812[(24)] = inst_44701__$1);

(statearr_44812[(25)] = inst_44706__$1);

return statearr_44812;
})();
if(cljs.core.truth_(inst_44707)){
var statearr_44813_44893 = state_44784__$1;
(statearr_44813_44893[(1)] = (23));

} else {
var statearr_44814_44894 = state_44784__$1;
(statearr_44814_44894[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (36))){
var state_44784__$1 = state_44784;
var statearr_44815_44895 = state_44784__$1;
(statearr_44815_44895[(2)] = false);

(statearr_44815_44895[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (41))){
var inst_44759 = (state_44784[(20)]);
var inst_44763 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44764 = cljs.core.map.call(null,inst_44763,inst_44759);
var inst_44765 = cljs.core.pr_str.call(null,inst_44764);
var inst_44766 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_44765)].join('');
var inst_44767 = figwheel.client.utils.log.call(null,inst_44766);
var state_44784__$1 = state_44784;
var statearr_44816_44896 = state_44784__$1;
(statearr_44816_44896[(2)] = inst_44767);

(statearr_44816_44896[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (43))){
var inst_44760 = (state_44784[(21)]);
var inst_44770 = (state_44784[(2)]);
var inst_44771 = cljs.core.not_empty.call(null,inst_44760);
var state_44784__$1 = (function (){var statearr_44817 = state_44784;
(statearr_44817[(27)] = inst_44770);

return statearr_44817;
})();
if(cljs.core.truth_(inst_44771)){
var statearr_44818_44897 = state_44784__$1;
(statearr_44818_44897[(1)] = (44));

} else {
var statearr_44819_44898 = state_44784__$1;
(statearr_44819_44898[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (29))){
var inst_44698 = (state_44784[(19)]);
var inst_44704 = (state_44784[(26)]);
var inst_44702 = (state_44784[(23)]);
var inst_44701 = (state_44784[(24)]);
var inst_44706 = (state_44784[(25)]);
var inst_44738 = (state_44784[(16)]);
var inst_44734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44737 = (function (){var all_files = inst_44698;
var res_SINGLEQUOTE_ = inst_44701;
var res = inst_44702;
var files_not_loaded = inst_44704;
var dependencies_that_loaded = inst_44706;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44738,inst_44734,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44736){
var map__44820 = p__44736;
var map__44820__$1 = ((((!((map__44820 == null)))?((((map__44820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44820):map__44820);
var namespace = cljs.core.get.call(null,map__44820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44738,inst_44734,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44738__$1 = cljs.core.group_by.call(null,inst_44737,inst_44704);
var inst_44740 = (inst_44738__$1 == null);
var inst_44741 = cljs.core.not.call(null,inst_44740);
var state_44784__$1 = (function (){var statearr_44822 = state_44784;
(statearr_44822[(16)] = inst_44738__$1);

(statearr_44822[(28)] = inst_44734);

return statearr_44822;
})();
if(inst_44741){
var statearr_44823_44899 = state_44784__$1;
(statearr_44823_44899[(1)] = (32));

} else {
var statearr_44824_44900 = state_44784__$1;
(statearr_44824_44900[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (44))){
var inst_44760 = (state_44784[(21)]);
var inst_44773 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44760);
var inst_44774 = cljs.core.pr_str.call(null,inst_44773);
var inst_44775 = [cljs.core.str("not required: "),cljs.core.str(inst_44774)].join('');
var inst_44776 = figwheel.client.utils.log.call(null,inst_44775);
var state_44784__$1 = state_44784;
var statearr_44825_44901 = state_44784__$1;
(statearr_44825_44901[(2)] = inst_44776);

(statearr_44825_44901[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (6))){
var inst_44679 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44826_44902 = state_44784__$1;
(statearr_44826_44902[(2)] = inst_44679);

(statearr_44826_44902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (28))){
var inst_44704 = (state_44784[(26)]);
var inst_44731 = (state_44784[(2)]);
var inst_44732 = cljs.core.not_empty.call(null,inst_44704);
var state_44784__$1 = (function (){var statearr_44827 = state_44784;
(statearr_44827[(29)] = inst_44731);

return statearr_44827;
})();
if(cljs.core.truth_(inst_44732)){
var statearr_44828_44903 = state_44784__$1;
(statearr_44828_44903[(1)] = (29));

} else {
var statearr_44829_44904 = state_44784__$1;
(statearr_44829_44904[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (25))){
var inst_44702 = (state_44784[(23)]);
var inst_44718 = (state_44784[(2)]);
var inst_44719 = cljs.core.not_empty.call(null,inst_44702);
var state_44784__$1 = (function (){var statearr_44830 = state_44784;
(statearr_44830[(30)] = inst_44718);

return statearr_44830;
})();
if(cljs.core.truth_(inst_44719)){
var statearr_44831_44905 = state_44784__$1;
(statearr_44831_44905[(1)] = (26));

} else {
var statearr_44832_44906 = state_44784__$1;
(statearr_44832_44906[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (34))){
var inst_44753 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
if(cljs.core.truth_(inst_44753)){
var statearr_44833_44907 = state_44784__$1;
(statearr_44833_44907[(1)] = (38));

} else {
var statearr_44834_44908 = state_44784__$1;
(statearr_44834_44908[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (17))){
var state_44784__$1 = state_44784;
var statearr_44835_44909 = state_44784__$1;
(statearr_44835_44909[(2)] = recompile_dependents);

(statearr_44835_44909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (3))){
var state_44784__$1 = state_44784;
var statearr_44836_44910 = state_44784__$1;
(statearr_44836_44910[(2)] = null);

(statearr_44836_44910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (12))){
var inst_44675 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44837_44911 = state_44784__$1;
(statearr_44837_44911[(2)] = inst_44675);

(statearr_44837_44911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (2))){
var inst_44637 = (state_44784[(13)]);
var inst_44644 = cljs.core.seq.call(null,inst_44637);
var inst_44645 = inst_44644;
var inst_44646 = null;
var inst_44647 = (0);
var inst_44648 = (0);
var state_44784__$1 = (function (){var statearr_44838 = state_44784;
(statearr_44838[(7)] = inst_44646);

(statearr_44838[(8)] = inst_44647);

(statearr_44838[(9)] = inst_44648);

(statearr_44838[(10)] = inst_44645);

return statearr_44838;
})();
var statearr_44839_44912 = state_44784__$1;
(statearr_44839_44912[(2)] = null);

(statearr_44839_44912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (23))){
var inst_44698 = (state_44784[(19)]);
var inst_44704 = (state_44784[(26)]);
var inst_44702 = (state_44784[(23)]);
var inst_44701 = (state_44784[(24)]);
var inst_44706 = (state_44784[(25)]);
var inst_44709 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44711 = (function (){var all_files = inst_44698;
var res_SINGLEQUOTE_ = inst_44701;
var res = inst_44702;
var files_not_loaded = inst_44704;
var dependencies_that_loaded = inst_44706;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44709,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44710){
var map__44840 = p__44710;
var map__44840__$1 = ((((!((map__44840 == null)))?((((map__44840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44840):map__44840);
var request_url = cljs.core.get.call(null,map__44840__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44709,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44712 = cljs.core.reverse.call(null,inst_44706);
var inst_44713 = cljs.core.map.call(null,inst_44711,inst_44712);
var inst_44714 = cljs.core.pr_str.call(null,inst_44713);
var inst_44715 = figwheel.client.utils.log.call(null,inst_44714);
var state_44784__$1 = (function (){var statearr_44842 = state_44784;
(statearr_44842[(31)] = inst_44709);

return statearr_44842;
})();
var statearr_44843_44913 = state_44784__$1;
(statearr_44843_44913[(2)] = inst_44715);

(statearr_44843_44913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (35))){
var state_44784__$1 = state_44784;
var statearr_44844_44914 = state_44784__$1;
(statearr_44844_44914[(2)] = true);

(statearr_44844_44914[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (19))){
var inst_44688 = (state_44784[(12)]);
var inst_44694 = figwheel.client.file_reloading.expand_files.call(null,inst_44688);
var state_44784__$1 = state_44784;
var statearr_44845_44915 = state_44784__$1;
(statearr_44845_44915[(2)] = inst_44694);

(statearr_44845_44915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (11))){
var state_44784__$1 = state_44784;
var statearr_44846_44916 = state_44784__$1;
(statearr_44846_44916[(2)] = null);

(statearr_44846_44916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (9))){
var inst_44677 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44847_44917 = state_44784__$1;
(statearr_44847_44917[(2)] = inst_44677);

(statearr_44847_44917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (5))){
var inst_44647 = (state_44784[(8)]);
var inst_44648 = (state_44784[(9)]);
var inst_44650 = (inst_44648 < inst_44647);
var inst_44651 = inst_44650;
var state_44784__$1 = state_44784;
if(cljs.core.truth_(inst_44651)){
var statearr_44848_44918 = state_44784__$1;
(statearr_44848_44918[(1)] = (7));

} else {
var statearr_44849_44919 = state_44784__$1;
(statearr_44849_44919[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (14))){
var inst_44658 = (state_44784[(22)]);
var inst_44667 = cljs.core.first.call(null,inst_44658);
var inst_44668 = figwheel.client.file_reloading.eval_body.call(null,inst_44667,opts);
var inst_44669 = cljs.core.next.call(null,inst_44658);
var inst_44645 = inst_44669;
var inst_44646 = null;
var inst_44647 = (0);
var inst_44648 = (0);
var state_44784__$1 = (function (){var statearr_44850 = state_44784;
(statearr_44850[(7)] = inst_44646);

(statearr_44850[(32)] = inst_44668);

(statearr_44850[(8)] = inst_44647);

(statearr_44850[(9)] = inst_44648);

(statearr_44850[(10)] = inst_44645);

return statearr_44850;
})();
var statearr_44851_44920 = state_44784__$1;
(statearr_44851_44920[(2)] = null);

(statearr_44851_44920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (45))){
var state_44784__$1 = state_44784;
var statearr_44852_44921 = state_44784__$1;
(statearr_44852_44921[(2)] = null);

(statearr_44852_44921[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (26))){
var inst_44698 = (state_44784[(19)]);
var inst_44704 = (state_44784[(26)]);
var inst_44702 = (state_44784[(23)]);
var inst_44701 = (state_44784[(24)]);
var inst_44706 = (state_44784[(25)]);
var inst_44721 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44723 = (function (){var all_files = inst_44698;
var res_SINGLEQUOTE_ = inst_44701;
var res = inst_44702;
var files_not_loaded = inst_44704;
var dependencies_that_loaded = inst_44706;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44721,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44722){
var map__44853 = p__44722;
var map__44853__$1 = ((((!((map__44853 == null)))?((((map__44853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44853):map__44853);
var namespace = cljs.core.get.call(null,map__44853__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44721,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44724 = cljs.core.map.call(null,inst_44723,inst_44702);
var inst_44725 = cljs.core.pr_str.call(null,inst_44724);
var inst_44726 = figwheel.client.utils.log.call(null,inst_44725);
var inst_44727 = (function (){var all_files = inst_44698;
var res_SINGLEQUOTE_ = inst_44701;
var res = inst_44702;
var files_not_loaded = inst_44704;
var dependencies_that_loaded = inst_44706;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44721,inst_44723,inst_44724,inst_44725,inst_44726,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44698,inst_44704,inst_44702,inst_44701,inst_44706,inst_44721,inst_44723,inst_44724,inst_44725,inst_44726,state_val_44785,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44728 = setTimeout(inst_44727,(10));
var state_44784__$1 = (function (){var statearr_44855 = state_44784;
(statearr_44855[(33)] = inst_44721);

(statearr_44855[(34)] = inst_44726);

return statearr_44855;
})();
var statearr_44856_44922 = state_44784__$1;
(statearr_44856_44922[(2)] = inst_44728);

(statearr_44856_44922[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (16))){
var state_44784__$1 = state_44784;
var statearr_44857_44923 = state_44784__$1;
(statearr_44857_44923[(2)] = reload_dependents);

(statearr_44857_44923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (38))){
var inst_44738 = (state_44784[(16)]);
var inst_44755 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44738);
var state_44784__$1 = state_44784;
var statearr_44858_44924 = state_44784__$1;
(statearr_44858_44924[(2)] = inst_44755);

(statearr_44858_44924[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (30))){
var state_44784__$1 = state_44784;
var statearr_44859_44925 = state_44784__$1;
(statearr_44859_44925[(2)] = null);

(statearr_44859_44925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (10))){
var inst_44658 = (state_44784[(22)]);
var inst_44660 = cljs.core.chunked_seq_QMARK_.call(null,inst_44658);
var state_44784__$1 = state_44784;
if(inst_44660){
var statearr_44860_44926 = state_44784__$1;
(statearr_44860_44926[(1)] = (13));

} else {
var statearr_44861_44927 = state_44784__$1;
(statearr_44861_44927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (18))){
var inst_44692 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
if(cljs.core.truth_(inst_44692)){
var statearr_44862_44928 = state_44784__$1;
(statearr_44862_44928[(1)] = (19));

} else {
var statearr_44863_44929 = state_44784__$1;
(statearr_44863_44929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (42))){
var state_44784__$1 = state_44784;
var statearr_44864_44930 = state_44784__$1;
(statearr_44864_44930[(2)] = null);

(statearr_44864_44930[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (37))){
var inst_44750 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44865_44931 = state_44784__$1;
(statearr_44865_44931[(2)] = inst_44750);

(statearr_44865_44931[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (8))){
var inst_44658 = (state_44784[(22)]);
var inst_44645 = (state_44784[(10)]);
var inst_44658__$1 = cljs.core.seq.call(null,inst_44645);
var state_44784__$1 = (function (){var statearr_44866 = state_44784;
(statearr_44866[(22)] = inst_44658__$1);

return statearr_44866;
})();
if(inst_44658__$1){
var statearr_44867_44932 = state_44784__$1;
(statearr_44867_44932[(1)] = (10));

} else {
var statearr_44868_44933 = state_44784__$1;
(statearr_44868_44933[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20501__auto__,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0 = (function (){
var statearr_44872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44872[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__);

(statearr_44872[(1)] = (1));

return statearr_44872;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1 = (function (state_44784){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_44784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e44873){if((e44873 instanceof Object)){
var ex__20505__auto__ = e44873;
var statearr_44874_44934 = state_44784;
(statearr_44874_44934[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44935 = state_44784;
state_44784 = G__44935;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__ = function(state_44784){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1.call(this,state_44784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20615__auto__ = (function (){var statearr_44875 = f__20614__auto__.call(null);
(statearr_44875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_44875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,map__44630,map__44630__$1,opts,before_jsload,on_jsload,reload_dependents,map__44631,map__44631__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20613__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44938,link){
var map__44941 = p__44938;
var map__44941__$1 = ((((!((map__44941 == null)))?((((map__44941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44941):map__44941);
var file = cljs.core.get.call(null,map__44941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__44941,map__44941__$1,file){
return (function (p1__44936_SHARP_,p2__44937_SHARP_){
if(cljs.core._EQ_.call(null,p1__44936_SHARP_,p2__44937_SHARP_)){
return p1__44936_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__44941,map__44941__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44947){
var map__44948 = p__44947;
var map__44948__$1 = ((((!((map__44948 == null)))?((((map__44948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44948):map__44948);
var match_length = cljs.core.get.call(null,map__44948__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44948__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44943_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44943_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args44950 = [];
var len__19487__auto___44953 = arguments.length;
var i__19488__auto___44954 = (0);
while(true){
if((i__19488__auto___44954 < len__19487__auto___44953)){
args44950.push((arguments[i__19488__auto___44954]));

var G__44955 = (i__19488__auto___44954 + (1));
i__19488__auto___44954 = G__44955;
continue;
} else {
}
break;
}

var G__44952 = args44950.length;
switch (G__44952) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44950.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44957_SHARP_,p2__44958_SHARP_){
return cljs.core.assoc.call(null,p1__44957_SHARP_,cljs.core.get.call(null,p2__44958_SHARP_,key),p2__44958_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__44959){
var map__44962 = p__44959;
var map__44962__$1 = ((((!((map__44962 == null)))?((((map__44962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44962):map__44962);
var f_data = map__44962__$1;
var file = cljs.core.get.call(null,map__44962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44964,files_msg){
var map__44971 = p__44964;
var map__44971__$1 = ((((!((map__44971 == null)))?((((map__44971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44971):map__44971);
var opts = map__44971__$1;
var on_cssload = cljs.core.get.call(null,map__44971__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__44973_44977 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__44974_44978 = null;
var count__44975_44979 = (0);
var i__44976_44980 = (0);
while(true){
if((i__44976_44980 < count__44975_44979)){
var f_44981 = cljs.core._nth.call(null,chunk__44974_44978,i__44976_44980);
figwheel.client.file_reloading.reload_css_file.call(null,f_44981);

var G__44982 = seq__44973_44977;
var G__44983 = chunk__44974_44978;
var G__44984 = count__44975_44979;
var G__44985 = (i__44976_44980 + (1));
seq__44973_44977 = G__44982;
chunk__44974_44978 = G__44983;
count__44975_44979 = G__44984;
i__44976_44980 = G__44985;
continue;
} else {
var temp__4657__auto___44986 = cljs.core.seq.call(null,seq__44973_44977);
if(temp__4657__auto___44986){
var seq__44973_44987__$1 = temp__4657__auto___44986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44973_44987__$1)){
var c__19228__auto___44988 = cljs.core.chunk_first.call(null,seq__44973_44987__$1);
var G__44989 = cljs.core.chunk_rest.call(null,seq__44973_44987__$1);
var G__44990 = c__19228__auto___44988;
var G__44991 = cljs.core.count.call(null,c__19228__auto___44988);
var G__44992 = (0);
seq__44973_44977 = G__44989;
chunk__44974_44978 = G__44990;
count__44975_44979 = G__44991;
i__44976_44980 = G__44992;
continue;
} else {
var f_44993 = cljs.core.first.call(null,seq__44973_44987__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_44993);

var G__44994 = cljs.core.next.call(null,seq__44973_44987__$1);
var G__44995 = null;
var G__44996 = (0);
var G__44997 = (0);
seq__44973_44977 = G__44994;
chunk__44974_44978 = G__44995;
count__44975_44979 = G__44996;
i__44976_44980 = G__44997;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__44971,map__44971__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__44971,map__44971__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map