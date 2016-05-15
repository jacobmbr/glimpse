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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24925_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24925_SHARP_));
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
var seq__24930 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24931 = null;
var count__24932 = (0);
var i__24933 = (0);
while(true){
if((i__24933 < count__24932)){
var n = cljs.core._nth.call(null,chunk__24931,i__24933);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24934 = seq__24930;
var G__24935 = chunk__24931;
var G__24936 = count__24932;
var G__24937 = (i__24933 + (1));
seq__24930 = G__24934;
chunk__24931 = G__24935;
count__24932 = G__24936;
i__24933 = G__24937;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24930);
if(temp__4657__auto__){
var seq__24930__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24930__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__24930__$1);
var G__24938 = cljs.core.chunk_rest.call(null,seq__24930__$1);
var G__24939 = c__19228__auto__;
var G__24940 = cljs.core.count.call(null,c__19228__auto__);
var G__24941 = (0);
seq__24930 = G__24938;
chunk__24931 = G__24939;
count__24932 = G__24940;
i__24933 = G__24941;
continue;
} else {
var n = cljs.core.first.call(null,seq__24930__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24942 = cljs.core.next.call(null,seq__24930__$1);
var G__24943 = null;
var G__24944 = (0);
var G__24945 = (0);
seq__24930 = G__24942;
chunk__24931 = G__24943;
count__24932 = G__24944;
i__24933 = G__24945;
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

var seq__24984_24991 = cljs.core.seq.call(null,deps);
var chunk__24985_24992 = null;
var count__24986_24993 = (0);
var i__24987_24994 = (0);
while(true){
if((i__24987_24994 < count__24986_24993)){
var dep_24995 = cljs.core._nth.call(null,chunk__24985_24992,i__24987_24994);
topo_sort_helper_STAR_.call(null,dep_24995,(depth + (1)),state);

var G__24996 = seq__24984_24991;
var G__24997 = chunk__24985_24992;
var G__24998 = count__24986_24993;
var G__24999 = (i__24987_24994 + (1));
seq__24984_24991 = G__24996;
chunk__24985_24992 = G__24997;
count__24986_24993 = G__24998;
i__24987_24994 = G__24999;
continue;
} else {
var temp__4657__auto___25000 = cljs.core.seq.call(null,seq__24984_24991);
if(temp__4657__auto___25000){
var seq__24984_25001__$1 = temp__4657__auto___25000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24984_25001__$1)){
var c__19228__auto___25002 = cljs.core.chunk_first.call(null,seq__24984_25001__$1);
var G__25003 = cljs.core.chunk_rest.call(null,seq__24984_25001__$1);
var G__25004 = c__19228__auto___25002;
var G__25005 = cljs.core.count.call(null,c__19228__auto___25002);
var G__25006 = (0);
seq__24984_24991 = G__25003;
chunk__24985_24992 = G__25004;
count__24986_24993 = G__25005;
i__24987_24994 = G__25006;
continue;
} else {
var dep_25007 = cljs.core.first.call(null,seq__24984_25001__$1);
topo_sort_helper_STAR_.call(null,dep_25007,(depth + (1)),state);

var G__25008 = cljs.core.next.call(null,seq__24984_25001__$1);
var G__25009 = null;
var G__25010 = (0);
var G__25011 = (0);
seq__24984_24991 = G__25008;
chunk__24985_24992 = G__25009;
count__24986_24993 = G__25010;
i__24987_24994 = G__25011;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24988){
var vec__24990 = p__24988;
var x = cljs.core.nth.call(null,vec__24990,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24990,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24990,x,xs,get_deps__$1){
return (function (p1__24946_SHARP_){
return clojure.set.difference.call(null,p1__24946_SHARP_,x);
});})(vec__24990,x,xs,get_deps__$1))
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
var seq__25024 = cljs.core.seq.call(null,provides);
var chunk__25025 = null;
var count__25026 = (0);
var i__25027 = (0);
while(true){
if((i__25027 < count__25026)){
var prov = cljs.core._nth.call(null,chunk__25025,i__25027);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25028_25036 = cljs.core.seq.call(null,requires);
var chunk__25029_25037 = null;
var count__25030_25038 = (0);
var i__25031_25039 = (0);
while(true){
if((i__25031_25039 < count__25030_25038)){
var req_25040 = cljs.core._nth.call(null,chunk__25029_25037,i__25031_25039);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25040,prov);

var G__25041 = seq__25028_25036;
var G__25042 = chunk__25029_25037;
var G__25043 = count__25030_25038;
var G__25044 = (i__25031_25039 + (1));
seq__25028_25036 = G__25041;
chunk__25029_25037 = G__25042;
count__25030_25038 = G__25043;
i__25031_25039 = G__25044;
continue;
} else {
var temp__4657__auto___25045 = cljs.core.seq.call(null,seq__25028_25036);
if(temp__4657__auto___25045){
var seq__25028_25046__$1 = temp__4657__auto___25045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25028_25046__$1)){
var c__19228__auto___25047 = cljs.core.chunk_first.call(null,seq__25028_25046__$1);
var G__25048 = cljs.core.chunk_rest.call(null,seq__25028_25046__$1);
var G__25049 = c__19228__auto___25047;
var G__25050 = cljs.core.count.call(null,c__19228__auto___25047);
var G__25051 = (0);
seq__25028_25036 = G__25048;
chunk__25029_25037 = G__25049;
count__25030_25038 = G__25050;
i__25031_25039 = G__25051;
continue;
} else {
var req_25052 = cljs.core.first.call(null,seq__25028_25046__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25052,prov);

var G__25053 = cljs.core.next.call(null,seq__25028_25046__$1);
var G__25054 = null;
var G__25055 = (0);
var G__25056 = (0);
seq__25028_25036 = G__25053;
chunk__25029_25037 = G__25054;
count__25030_25038 = G__25055;
i__25031_25039 = G__25056;
continue;
}
} else {
}
}
break;
}

var G__25057 = seq__25024;
var G__25058 = chunk__25025;
var G__25059 = count__25026;
var G__25060 = (i__25027 + (1));
seq__25024 = G__25057;
chunk__25025 = G__25058;
count__25026 = G__25059;
i__25027 = G__25060;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25024);
if(temp__4657__auto__){
var seq__25024__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25024__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__25024__$1);
var G__25061 = cljs.core.chunk_rest.call(null,seq__25024__$1);
var G__25062 = c__19228__auto__;
var G__25063 = cljs.core.count.call(null,c__19228__auto__);
var G__25064 = (0);
seq__25024 = G__25061;
chunk__25025 = G__25062;
count__25026 = G__25063;
i__25027 = G__25064;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25024__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25032_25065 = cljs.core.seq.call(null,requires);
var chunk__25033_25066 = null;
var count__25034_25067 = (0);
var i__25035_25068 = (0);
while(true){
if((i__25035_25068 < count__25034_25067)){
var req_25069 = cljs.core._nth.call(null,chunk__25033_25066,i__25035_25068);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25069,prov);

var G__25070 = seq__25032_25065;
var G__25071 = chunk__25033_25066;
var G__25072 = count__25034_25067;
var G__25073 = (i__25035_25068 + (1));
seq__25032_25065 = G__25070;
chunk__25033_25066 = G__25071;
count__25034_25067 = G__25072;
i__25035_25068 = G__25073;
continue;
} else {
var temp__4657__auto___25074__$1 = cljs.core.seq.call(null,seq__25032_25065);
if(temp__4657__auto___25074__$1){
var seq__25032_25075__$1 = temp__4657__auto___25074__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25032_25075__$1)){
var c__19228__auto___25076 = cljs.core.chunk_first.call(null,seq__25032_25075__$1);
var G__25077 = cljs.core.chunk_rest.call(null,seq__25032_25075__$1);
var G__25078 = c__19228__auto___25076;
var G__25079 = cljs.core.count.call(null,c__19228__auto___25076);
var G__25080 = (0);
seq__25032_25065 = G__25077;
chunk__25033_25066 = G__25078;
count__25034_25067 = G__25079;
i__25035_25068 = G__25080;
continue;
} else {
var req_25081 = cljs.core.first.call(null,seq__25032_25075__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25081,prov);

var G__25082 = cljs.core.next.call(null,seq__25032_25075__$1);
var G__25083 = null;
var G__25084 = (0);
var G__25085 = (0);
seq__25032_25065 = G__25082;
chunk__25033_25066 = G__25083;
count__25034_25067 = G__25084;
i__25035_25068 = G__25085;
continue;
}
} else {
}
}
break;
}

var G__25086 = cljs.core.next.call(null,seq__25024__$1);
var G__25087 = null;
var G__25088 = (0);
var G__25089 = (0);
seq__25024 = G__25086;
chunk__25025 = G__25087;
count__25026 = G__25088;
i__25027 = G__25089;
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
var seq__25094_25098 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25095_25099 = null;
var count__25096_25100 = (0);
var i__25097_25101 = (0);
while(true){
if((i__25097_25101 < count__25096_25100)){
var ns_25102 = cljs.core._nth.call(null,chunk__25095_25099,i__25097_25101);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25102);

var G__25103 = seq__25094_25098;
var G__25104 = chunk__25095_25099;
var G__25105 = count__25096_25100;
var G__25106 = (i__25097_25101 + (1));
seq__25094_25098 = G__25103;
chunk__25095_25099 = G__25104;
count__25096_25100 = G__25105;
i__25097_25101 = G__25106;
continue;
} else {
var temp__4657__auto___25107 = cljs.core.seq.call(null,seq__25094_25098);
if(temp__4657__auto___25107){
var seq__25094_25108__$1 = temp__4657__auto___25107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25094_25108__$1)){
var c__19228__auto___25109 = cljs.core.chunk_first.call(null,seq__25094_25108__$1);
var G__25110 = cljs.core.chunk_rest.call(null,seq__25094_25108__$1);
var G__25111 = c__19228__auto___25109;
var G__25112 = cljs.core.count.call(null,c__19228__auto___25109);
var G__25113 = (0);
seq__25094_25098 = G__25110;
chunk__25095_25099 = G__25111;
count__25096_25100 = G__25112;
i__25097_25101 = G__25113;
continue;
} else {
var ns_25114 = cljs.core.first.call(null,seq__25094_25108__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25114);

var G__25115 = cljs.core.next.call(null,seq__25094_25108__$1);
var G__25116 = null;
var G__25117 = (0);
var G__25118 = (0);
seq__25094_25098 = G__25115;
chunk__25095_25099 = G__25116;
count__25096_25100 = G__25117;
i__25097_25101 = G__25118;
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
var G__25119__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25120__i = 0, G__25120__a = new Array(arguments.length -  0);
while (G__25120__i < G__25120__a.length) {G__25120__a[G__25120__i] = arguments[G__25120__i + 0]; ++G__25120__i;}
  args = new cljs.core.IndexedSeq(G__25120__a,0);
} 
return G__25119__delegate.call(this,args);};
G__25119.cljs$lang$maxFixedArity = 0;
G__25119.cljs$lang$applyTo = (function (arglist__25121){
var args = cljs.core.seq(arglist__25121);
return G__25119__delegate(args);
});
G__25119.cljs$core$IFn$_invoke$arity$variadic = G__25119__delegate;
return G__25119;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25123 = cljs.core._EQ_;
var expr__25124 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25123.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25124))){
var path_parts = ((function (pred__25123,expr__25124){
return (function (p1__25122_SHARP_){
return clojure.string.split.call(null,p1__25122_SHARP_,/[\/\\]/);
});})(pred__25123,expr__25124))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25123,expr__25124){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25126){if((e25126 instanceof Error)){
var e = e25126;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25126;

}
}})());
});
;})(path_parts,sep,root,pred__25123,expr__25124))
} else {
if(cljs.core.truth_(pred__25123.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25124))){
return ((function (pred__25123,expr__25124){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25123,expr__25124){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25123,expr__25124))
);

return deferred.addErrback(((function (deferred,pred__25123,expr__25124){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25123,expr__25124))
);
});
;})(pred__25123,expr__25124))
} else {
return ((function (pred__25123,expr__25124){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25123,expr__25124))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25127,callback){
var map__25130 = p__25127;
var map__25130__$1 = ((((!((map__25130 == null)))?((((map__25130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25130):map__25130);
var file_msg = map__25130__$1;
var request_url = cljs.core.get.call(null,map__25130__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25130,map__25130__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25130,map__25130__$1,file_msg,request_url))
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
return (function (state_25154){
var state_val_25155 = (state_25154[(1)]);
if((state_val_25155 === (7))){
var inst_25150 = (state_25154[(2)]);
var state_25154__$1 = state_25154;
var statearr_25156_25176 = state_25154__$1;
(statearr_25156_25176[(2)] = inst_25150);

(statearr_25156_25176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (1))){
var state_25154__$1 = state_25154;
var statearr_25157_25177 = state_25154__$1;
(statearr_25157_25177[(2)] = null);

(statearr_25157_25177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (4))){
var inst_25134 = (state_25154[(7)]);
var inst_25134__$1 = (state_25154[(2)]);
var state_25154__$1 = (function (){var statearr_25158 = state_25154;
(statearr_25158[(7)] = inst_25134__$1);

return statearr_25158;
})();
if(cljs.core.truth_(inst_25134__$1)){
var statearr_25159_25178 = state_25154__$1;
(statearr_25159_25178[(1)] = (5));

} else {
var statearr_25160_25179 = state_25154__$1;
(statearr_25160_25179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (6))){
var state_25154__$1 = state_25154;
var statearr_25161_25180 = state_25154__$1;
(statearr_25161_25180[(2)] = null);

(statearr_25161_25180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (3))){
var inst_25152 = (state_25154[(2)]);
var state_25154__$1 = state_25154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25154__$1,inst_25152);
} else {
if((state_val_25155 === (2))){
var state_25154__$1 = state_25154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25154__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25155 === (11))){
var inst_25146 = (state_25154[(2)]);
var state_25154__$1 = (function (){var statearr_25162 = state_25154;
(statearr_25162[(8)] = inst_25146);

return statearr_25162;
})();
var statearr_25163_25181 = state_25154__$1;
(statearr_25163_25181[(2)] = null);

(statearr_25163_25181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (9))){
var inst_25140 = (state_25154[(9)]);
var inst_25138 = (state_25154[(10)]);
var inst_25142 = inst_25140.call(null,inst_25138);
var state_25154__$1 = state_25154;
var statearr_25164_25182 = state_25154__$1;
(statearr_25164_25182[(2)] = inst_25142);

(statearr_25164_25182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (5))){
var inst_25134 = (state_25154[(7)]);
var inst_25136 = figwheel.client.file_reloading.blocking_load.call(null,inst_25134);
var state_25154__$1 = state_25154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25154__$1,(8),inst_25136);
} else {
if((state_val_25155 === (10))){
var inst_25138 = (state_25154[(10)]);
var inst_25144 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25138);
var state_25154__$1 = state_25154;
var statearr_25165_25183 = state_25154__$1;
(statearr_25165_25183[(2)] = inst_25144);

(statearr_25165_25183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (8))){
var inst_25140 = (state_25154[(9)]);
var inst_25134 = (state_25154[(7)]);
var inst_25138 = (state_25154[(2)]);
var inst_25139 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25140__$1 = cljs.core.get.call(null,inst_25139,inst_25134);
var state_25154__$1 = (function (){var statearr_25166 = state_25154;
(statearr_25166[(9)] = inst_25140__$1);

(statearr_25166[(10)] = inst_25138);

return statearr_25166;
})();
if(cljs.core.truth_(inst_25140__$1)){
var statearr_25167_25184 = state_25154__$1;
(statearr_25167_25184[(1)] = (9));

} else {
var statearr_25168_25185 = state_25154__$1;
(statearr_25168_25185[(1)] = (10));

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
var statearr_25172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25172[(0)] = figwheel$client$file_reloading$state_machine__20502__auto__);

(statearr_25172[(1)] = (1));

return statearr_25172;
});
var figwheel$client$file_reloading$state_machine__20502__auto____1 = (function (state_25154){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_25154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e25173){if((e25173 instanceof Object)){
var ex__20505__auto__ = e25173;
var statearr_25174_25186 = state_25154;
(statearr_25174_25186[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25187 = state_25154;
state_25154 = G__25187;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20502__auto__ = function(state_25154){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20502__auto____1.call(this,state_25154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20502__auto____0;
figwheel$client$file_reloading$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20502__auto____1;
return figwheel$client$file_reloading$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_25175 = f__20614__auto__.call(null);
(statearr_25175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_25175;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25188,callback){
var map__25191 = p__25188;
var map__25191__$1 = ((((!((map__25191 == null)))?((((map__25191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25191):map__25191);
var file_msg = map__25191__$1;
var namespace = cljs.core.get.call(null,map__25191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25191,map__25191__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25191,map__25191__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25193){
var map__25196 = p__25193;
var map__25196__$1 = ((((!((map__25196 == null)))?((((map__25196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25196):map__25196);
var file_msg = map__25196__$1;
var namespace = cljs.core.get.call(null,map__25196__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25198,callback){
var map__25201 = p__25198;
var map__25201__$1 = ((((!((map__25201 == null)))?((((map__25201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25201):map__25201);
var file_msg = map__25201__$1;
var request_url = cljs.core.get.call(null,map__25201__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25201__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20613__auto___25289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___25289,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___25289,out){
return (function (state_25271){
var state_val_25272 = (state_25271[(1)]);
if((state_val_25272 === (1))){
var inst_25249 = cljs.core.nth.call(null,files,(0),null);
var inst_25250 = cljs.core.nthnext.call(null,files,(1));
var inst_25251 = files;
var state_25271__$1 = (function (){var statearr_25273 = state_25271;
(statearr_25273[(7)] = inst_25250);

(statearr_25273[(8)] = inst_25251);

(statearr_25273[(9)] = inst_25249);

return statearr_25273;
})();
var statearr_25274_25290 = state_25271__$1;
(statearr_25274_25290[(2)] = null);

(statearr_25274_25290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (2))){
var inst_25254 = (state_25271[(10)]);
var inst_25251 = (state_25271[(8)]);
var inst_25254__$1 = cljs.core.nth.call(null,inst_25251,(0),null);
var inst_25255 = cljs.core.nthnext.call(null,inst_25251,(1));
var inst_25256 = (inst_25254__$1 == null);
var inst_25257 = cljs.core.not.call(null,inst_25256);
var state_25271__$1 = (function (){var statearr_25275 = state_25271;
(statearr_25275[(11)] = inst_25255);

(statearr_25275[(10)] = inst_25254__$1);

return statearr_25275;
})();
if(inst_25257){
var statearr_25276_25291 = state_25271__$1;
(statearr_25276_25291[(1)] = (4));

} else {
var statearr_25277_25292 = state_25271__$1;
(statearr_25277_25292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (3))){
var inst_25269 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25271__$1,inst_25269);
} else {
if((state_val_25272 === (4))){
var inst_25254 = (state_25271[(10)]);
var inst_25259 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25254);
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25271__$1,(7),inst_25259);
} else {
if((state_val_25272 === (5))){
var inst_25265 = cljs.core.async.close_BANG_.call(null,out);
var state_25271__$1 = state_25271;
var statearr_25278_25293 = state_25271__$1;
(statearr_25278_25293[(2)] = inst_25265);

(statearr_25278_25293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (6))){
var inst_25267 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
var statearr_25279_25294 = state_25271__$1;
(statearr_25279_25294[(2)] = inst_25267);

(statearr_25279_25294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (7))){
var inst_25255 = (state_25271[(11)]);
var inst_25261 = (state_25271[(2)]);
var inst_25262 = cljs.core.async.put_BANG_.call(null,out,inst_25261);
var inst_25251 = inst_25255;
var state_25271__$1 = (function (){var statearr_25280 = state_25271;
(statearr_25280[(12)] = inst_25262);

(statearr_25280[(8)] = inst_25251);

return statearr_25280;
})();
var statearr_25281_25295 = state_25271__$1;
(statearr_25281_25295[(2)] = null);

(statearr_25281_25295[(1)] = (2));


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
});})(c__20613__auto___25289,out))
;
return ((function (switch__20501__auto__,c__20613__auto___25289,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0 = (function (){
var statearr_25285 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25285[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__);

(statearr_25285[(1)] = (1));

return statearr_25285;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1 = (function (state_25271){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_25271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e25286){if((e25286 instanceof Object)){
var ex__20505__auto__ = e25286;
var statearr_25287_25296 = state_25271;
(statearr_25287_25296[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25297 = state_25271;
state_25271 = G__25297;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__ = function(state_25271){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1.call(this,state_25271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___25289,out))
})();
var state__20615__auto__ = (function (){var statearr_25288 = f__20614__auto__.call(null);
(statearr_25288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___25289);

return statearr_25288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___25289,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25298,opts){
var map__25302 = p__25298;
var map__25302__$1 = ((((!((map__25302 == null)))?((((map__25302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25302):map__25302);
var eval_body__$1 = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25304){var e = e25304;
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
return (function (p1__25305_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25305_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25310){
var vec__25311 = p__25310;
var k = cljs.core.nth.call(null,vec__25311,(0),null);
var v = cljs.core.nth.call(null,vec__25311,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25312){
var vec__25313 = p__25312;
var k = cljs.core.nth.call(null,vec__25313,(0),null);
var v = cljs.core.nth.call(null,vec__25313,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25317,p__25318){
var map__25565 = p__25317;
var map__25565__$1 = ((((!((map__25565 == null)))?((((map__25565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25565):map__25565);
var opts = map__25565__$1;
var before_jsload = cljs.core.get.call(null,map__25565__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25565__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25565__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25566 = p__25318;
var map__25566__$1 = ((((!((map__25566 == null)))?((((map__25566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25566):map__25566);
var msg = map__25566__$1;
var files = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25719){
var state_val_25720 = (state_25719[(1)]);
if((state_val_25720 === (7))){
var inst_25581 = (state_25719[(7)]);
var inst_25580 = (state_25719[(8)]);
var inst_25583 = (state_25719[(9)]);
var inst_25582 = (state_25719[(10)]);
var inst_25588 = cljs.core._nth.call(null,inst_25581,inst_25583);
var inst_25589 = figwheel.client.file_reloading.eval_body.call(null,inst_25588,opts);
var inst_25590 = (inst_25583 + (1));
var tmp25721 = inst_25581;
var tmp25722 = inst_25580;
var tmp25723 = inst_25582;
var inst_25580__$1 = tmp25722;
var inst_25581__$1 = tmp25721;
var inst_25582__$1 = tmp25723;
var inst_25583__$1 = inst_25590;
var state_25719__$1 = (function (){var statearr_25724 = state_25719;
(statearr_25724[(7)] = inst_25581__$1);

(statearr_25724[(8)] = inst_25580__$1);

(statearr_25724[(9)] = inst_25583__$1);

(statearr_25724[(11)] = inst_25589);

(statearr_25724[(10)] = inst_25582__$1);

return statearr_25724;
})();
var statearr_25725_25811 = state_25719__$1;
(statearr_25725_25811[(2)] = null);

(statearr_25725_25811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (20))){
var inst_25623 = (state_25719[(12)]);
var inst_25631 = figwheel.client.file_reloading.sort_files.call(null,inst_25623);
var state_25719__$1 = state_25719;
var statearr_25726_25812 = state_25719__$1;
(statearr_25726_25812[(2)] = inst_25631);

(statearr_25726_25812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (27))){
var state_25719__$1 = state_25719;
var statearr_25727_25813 = state_25719__$1;
(statearr_25727_25813[(2)] = null);

(statearr_25727_25813[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (1))){
var inst_25572 = (state_25719[(13)]);
var inst_25569 = before_jsload.call(null,files);
var inst_25570 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25571 = (function (){return ((function (inst_25572,inst_25569,inst_25570,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25314_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25314_SHARP_);
});
;})(inst_25572,inst_25569,inst_25570,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25572__$1 = cljs.core.filter.call(null,inst_25571,files);
var inst_25573 = cljs.core.not_empty.call(null,inst_25572__$1);
var state_25719__$1 = (function (){var statearr_25728 = state_25719;
(statearr_25728[(14)] = inst_25569);

(statearr_25728[(15)] = inst_25570);

(statearr_25728[(13)] = inst_25572__$1);

return statearr_25728;
})();
if(cljs.core.truth_(inst_25573)){
var statearr_25729_25814 = state_25719__$1;
(statearr_25729_25814[(1)] = (2));

} else {
var statearr_25730_25815 = state_25719__$1;
(statearr_25730_25815[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (24))){
var state_25719__$1 = state_25719;
var statearr_25731_25816 = state_25719__$1;
(statearr_25731_25816[(2)] = null);

(statearr_25731_25816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (39))){
var inst_25673 = (state_25719[(16)]);
var state_25719__$1 = state_25719;
var statearr_25732_25817 = state_25719__$1;
(statearr_25732_25817[(2)] = inst_25673);

(statearr_25732_25817[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (46))){
var inst_25714 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25733_25818 = state_25719__$1;
(statearr_25733_25818[(2)] = inst_25714);

(statearr_25733_25818[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (4))){
var inst_25617 = (state_25719[(2)]);
var inst_25618 = cljs.core.List.EMPTY;
var inst_25619 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25618);
var inst_25620 = (function (){return ((function (inst_25617,inst_25618,inst_25619,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25315_SHARP_){
var and__18405__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25315_SHARP_);
if(cljs.core.truth_(and__18405__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25315_SHARP_));
} else {
return and__18405__auto__;
}
});
;})(inst_25617,inst_25618,inst_25619,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25621 = cljs.core.filter.call(null,inst_25620,files);
var inst_25622 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25623 = cljs.core.concat.call(null,inst_25621,inst_25622);
var state_25719__$1 = (function (){var statearr_25734 = state_25719;
(statearr_25734[(17)] = inst_25619);

(statearr_25734[(12)] = inst_25623);

(statearr_25734[(18)] = inst_25617);

return statearr_25734;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25735_25819 = state_25719__$1;
(statearr_25735_25819[(1)] = (16));

} else {
var statearr_25736_25820 = state_25719__$1;
(statearr_25736_25820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (15))){
var inst_25607 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25737_25821 = state_25719__$1;
(statearr_25737_25821[(2)] = inst_25607);

(statearr_25737_25821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (21))){
var inst_25633 = (state_25719[(19)]);
var inst_25633__$1 = (state_25719[(2)]);
var inst_25634 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25633__$1);
var state_25719__$1 = (function (){var statearr_25738 = state_25719;
(statearr_25738[(19)] = inst_25633__$1);

return statearr_25738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25719__$1,(22),inst_25634);
} else {
if((state_val_25720 === (31))){
var inst_25717 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25719__$1,inst_25717);
} else {
if((state_val_25720 === (32))){
var inst_25673 = (state_25719[(16)]);
var inst_25678 = inst_25673.cljs$lang$protocol_mask$partition0$;
var inst_25679 = (inst_25678 & (64));
var inst_25680 = inst_25673.cljs$core$ISeq$;
var inst_25681 = (inst_25679) || (inst_25680);
var state_25719__$1 = state_25719;
if(cljs.core.truth_(inst_25681)){
var statearr_25739_25822 = state_25719__$1;
(statearr_25739_25822[(1)] = (35));

} else {
var statearr_25740_25823 = state_25719__$1;
(statearr_25740_25823[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (40))){
var inst_25694 = (state_25719[(20)]);
var inst_25693 = (state_25719[(2)]);
var inst_25694__$1 = cljs.core.get.call(null,inst_25693,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25695 = cljs.core.get.call(null,inst_25693,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25696 = cljs.core.not_empty.call(null,inst_25694__$1);
var state_25719__$1 = (function (){var statearr_25741 = state_25719;
(statearr_25741[(20)] = inst_25694__$1);

(statearr_25741[(21)] = inst_25695);

return statearr_25741;
})();
if(cljs.core.truth_(inst_25696)){
var statearr_25742_25824 = state_25719__$1;
(statearr_25742_25824[(1)] = (41));

} else {
var statearr_25743_25825 = state_25719__$1;
(statearr_25743_25825[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (33))){
var state_25719__$1 = state_25719;
var statearr_25744_25826 = state_25719__$1;
(statearr_25744_25826[(2)] = false);

(statearr_25744_25826[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (13))){
var inst_25593 = (state_25719[(22)]);
var inst_25597 = cljs.core.chunk_first.call(null,inst_25593);
var inst_25598 = cljs.core.chunk_rest.call(null,inst_25593);
var inst_25599 = cljs.core.count.call(null,inst_25597);
var inst_25580 = inst_25598;
var inst_25581 = inst_25597;
var inst_25582 = inst_25599;
var inst_25583 = (0);
var state_25719__$1 = (function (){var statearr_25745 = state_25719;
(statearr_25745[(7)] = inst_25581);

(statearr_25745[(8)] = inst_25580);

(statearr_25745[(9)] = inst_25583);

(statearr_25745[(10)] = inst_25582);

return statearr_25745;
})();
var statearr_25746_25827 = state_25719__$1;
(statearr_25746_25827[(2)] = null);

(statearr_25746_25827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (22))){
var inst_25637 = (state_25719[(23)]);
var inst_25633 = (state_25719[(19)]);
var inst_25641 = (state_25719[(24)]);
var inst_25636 = (state_25719[(25)]);
var inst_25636__$1 = (state_25719[(2)]);
var inst_25637__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25636__$1);
var inst_25638 = (function (){var all_files = inst_25633;
var res_SINGLEQUOTE_ = inst_25636__$1;
var res = inst_25637__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25637,inst_25633,inst_25641,inst_25636,inst_25636__$1,inst_25637__$1,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25316_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25316_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25637,inst_25633,inst_25641,inst_25636,inst_25636__$1,inst_25637__$1,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25639 = cljs.core.filter.call(null,inst_25638,inst_25636__$1);
var inst_25640 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25641__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25640);
var inst_25642 = cljs.core.not_empty.call(null,inst_25641__$1);
var state_25719__$1 = (function (){var statearr_25747 = state_25719;
(statearr_25747[(26)] = inst_25639);

(statearr_25747[(23)] = inst_25637__$1);

(statearr_25747[(24)] = inst_25641__$1);

(statearr_25747[(25)] = inst_25636__$1);

return statearr_25747;
})();
if(cljs.core.truth_(inst_25642)){
var statearr_25748_25828 = state_25719__$1;
(statearr_25748_25828[(1)] = (23));

} else {
var statearr_25749_25829 = state_25719__$1;
(statearr_25749_25829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (36))){
var state_25719__$1 = state_25719;
var statearr_25750_25830 = state_25719__$1;
(statearr_25750_25830[(2)] = false);

(statearr_25750_25830[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (41))){
var inst_25694 = (state_25719[(20)]);
var inst_25698 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25699 = cljs.core.map.call(null,inst_25698,inst_25694);
var inst_25700 = cljs.core.pr_str.call(null,inst_25699);
var inst_25701 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25700)].join('');
var inst_25702 = figwheel.client.utils.log.call(null,inst_25701);
var state_25719__$1 = state_25719;
var statearr_25751_25831 = state_25719__$1;
(statearr_25751_25831[(2)] = inst_25702);

(statearr_25751_25831[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (43))){
var inst_25695 = (state_25719[(21)]);
var inst_25705 = (state_25719[(2)]);
var inst_25706 = cljs.core.not_empty.call(null,inst_25695);
var state_25719__$1 = (function (){var statearr_25752 = state_25719;
(statearr_25752[(27)] = inst_25705);

return statearr_25752;
})();
if(cljs.core.truth_(inst_25706)){
var statearr_25753_25832 = state_25719__$1;
(statearr_25753_25832[(1)] = (44));

} else {
var statearr_25754_25833 = state_25719__$1;
(statearr_25754_25833[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (29))){
var inst_25673 = (state_25719[(16)]);
var inst_25639 = (state_25719[(26)]);
var inst_25637 = (state_25719[(23)]);
var inst_25633 = (state_25719[(19)]);
var inst_25641 = (state_25719[(24)]);
var inst_25636 = (state_25719[(25)]);
var inst_25669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25672 = (function (){var all_files = inst_25633;
var res_SINGLEQUOTE_ = inst_25636;
var res = inst_25637;
var files_not_loaded = inst_25639;
var dependencies_that_loaded = inst_25641;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25673,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25669,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25671){
var map__25755 = p__25671;
var map__25755__$1 = ((((!((map__25755 == null)))?((((map__25755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25755):map__25755);
var namespace = cljs.core.get.call(null,map__25755__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25673,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25669,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25673__$1 = cljs.core.group_by.call(null,inst_25672,inst_25639);
var inst_25675 = (inst_25673__$1 == null);
var inst_25676 = cljs.core.not.call(null,inst_25675);
var state_25719__$1 = (function (){var statearr_25757 = state_25719;
(statearr_25757[(16)] = inst_25673__$1);

(statearr_25757[(28)] = inst_25669);

return statearr_25757;
})();
if(inst_25676){
var statearr_25758_25834 = state_25719__$1;
(statearr_25758_25834[(1)] = (32));

} else {
var statearr_25759_25835 = state_25719__$1;
(statearr_25759_25835[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (44))){
var inst_25695 = (state_25719[(21)]);
var inst_25708 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25695);
var inst_25709 = cljs.core.pr_str.call(null,inst_25708);
var inst_25710 = [cljs.core.str("not required: "),cljs.core.str(inst_25709)].join('');
var inst_25711 = figwheel.client.utils.log.call(null,inst_25710);
var state_25719__$1 = state_25719;
var statearr_25760_25836 = state_25719__$1;
(statearr_25760_25836[(2)] = inst_25711);

(statearr_25760_25836[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (6))){
var inst_25614 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25761_25837 = state_25719__$1;
(statearr_25761_25837[(2)] = inst_25614);

(statearr_25761_25837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (28))){
var inst_25639 = (state_25719[(26)]);
var inst_25666 = (state_25719[(2)]);
var inst_25667 = cljs.core.not_empty.call(null,inst_25639);
var state_25719__$1 = (function (){var statearr_25762 = state_25719;
(statearr_25762[(29)] = inst_25666);

return statearr_25762;
})();
if(cljs.core.truth_(inst_25667)){
var statearr_25763_25838 = state_25719__$1;
(statearr_25763_25838[(1)] = (29));

} else {
var statearr_25764_25839 = state_25719__$1;
(statearr_25764_25839[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (25))){
var inst_25637 = (state_25719[(23)]);
var inst_25653 = (state_25719[(2)]);
var inst_25654 = cljs.core.not_empty.call(null,inst_25637);
var state_25719__$1 = (function (){var statearr_25765 = state_25719;
(statearr_25765[(30)] = inst_25653);

return statearr_25765;
})();
if(cljs.core.truth_(inst_25654)){
var statearr_25766_25840 = state_25719__$1;
(statearr_25766_25840[(1)] = (26));

} else {
var statearr_25767_25841 = state_25719__$1;
(statearr_25767_25841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (34))){
var inst_25688 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
if(cljs.core.truth_(inst_25688)){
var statearr_25768_25842 = state_25719__$1;
(statearr_25768_25842[(1)] = (38));

} else {
var statearr_25769_25843 = state_25719__$1;
(statearr_25769_25843[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (17))){
var state_25719__$1 = state_25719;
var statearr_25770_25844 = state_25719__$1;
(statearr_25770_25844[(2)] = recompile_dependents);

(statearr_25770_25844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (3))){
var state_25719__$1 = state_25719;
var statearr_25771_25845 = state_25719__$1;
(statearr_25771_25845[(2)] = null);

(statearr_25771_25845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (12))){
var inst_25610 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25772_25846 = state_25719__$1;
(statearr_25772_25846[(2)] = inst_25610);

(statearr_25772_25846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (2))){
var inst_25572 = (state_25719[(13)]);
var inst_25579 = cljs.core.seq.call(null,inst_25572);
var inst_25580 = inst_25579;
var inst_25581 = null;
var inst_25582 = (0);
var inst_25583 = (0);
var state_25719__$1 = (function (){var statearr_25773 = state_25719;
(statearr_25773[(7)] = inst_25581);

(statearr_25773[(8)] = inst_25580);

(statearr_25773[(9)] = inst_25583);

(statearr_25773[(10)] = inst_25582);

return statearr_25773;
})();
var statearr_25774_25847 = state_25719__$1;
(statearr_25774_25847[(2)] = null);

(statearr_25774_25847[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (23))){
var inst_25639 = (state_25719[(26)]);
var inst_25637 = (state_25719[(23)]);
var inst_25633 = (state_25719[(19)]);
var inst_25641 = (state_25719[(24)]);
var inst_25636 = (state_25719[(25)]);
var inst_25644 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25646 = (function (){var all_files = inst_25633;
var res_SINGLEQUOTE_ = inst_25636;
var res = inst_25637;
var files_not_loaded = inst_25639;
var dependencies_that_loaded = inst_25641;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25644,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25645){
var map__25775 = p__25645;
var map__25775__$1 = ((((!((map__25775 == null)))?((((map__25775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25775):map__25775);
var request_url = cljs.core.get.call(null,map__25775__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25644,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25647 = cljs.core.reverse.call(null,inst_25641);
var inst_25648 = cljs.core.map.call(null,inst_25646,inst_25647);
var inst_25649 = cljs.core.pr_str.call(null,inst_25648);
var inst_25650 = figwheel.client.utils.log.call(null,inst_25649);
var state_25719__$1 = (function (){var statearr_25777 = state_25719;
(statearr_25777[(31)] = inst_25644);

return statearr_25777;
})();
var statearr_25778_25848 = state_25719__$1;
(statearr_25778_25848[(2)] = inst_25650);

(statearr_25778_25848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (35))){
var state_25719__$1 = state_25719;
var statearr_25779_25849 = state_25719__$1;
(statearr_25779_25849[(2)] = true);

(statearr_25779_25849[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (19))){
var inst_25623 = (state_25719[(12)]);
var inst_25629 = figwheel.client.file_reloading.expand_files.call(null,inst_25623);
var state_25719__$1 = state_25719;
var statearr_25780_25850 = state_25719__$1;
(statearr_25780_25850[(2)] = inst_25629);

(statearr_25780_25850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (11))){
var state_25719__$1 = state_25719;
var statearr_25781_25851 = state_25719__$1;
(statearr_25781_25851[(2)] = null);

(statearr_25781_25851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (9))){
var inst_25612 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25782_25852 = state_25719__$1;
(statearr_25782_25852[(2)] = inst_25612);

(statearr_25782_25852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (5))){
var inst_25583 = (state_25719[(9)]);
var inst_25582 = (state_25719[(10)]);
var inst_25585 = (inst_25583 < inst_25582);
var inst_25586 = inst_25585;
var state_25719__$1 = state_25719;
if(cljs.core.truth_(inst_25586)){
var statearr_25783_25853 = state_25719__$1;
(statearr_25783_25853[(1)] = (7));

} else {
var statearr_25784_25854 = state_25719__$1;
(statearr_25784_25854[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (14))){
var inst_25593 = (state_25719[(22)]);
var inst_25602 = cljs.core.first.call(null,inst_25593);
var inst_25603 = figwheel.client.file_reloading.eval_body.call(null,inst_25602,opts);
var inst_25604 = cljs.core.next.call(null,inst_25593);
var inst_25580 = inst_25604;
var inst_25581 = null;
var inst_25582 = (0);
var inst_25583 = (0);
var state_25719__$1 = (function (){var statearr_25785 = state_25719;
(statearr_25785[(32)] = inst_25603);

(statearr_25785[(7)] = inst_25581);

(statearr_25785[(8)] = inst_25580);

(statearr_25785[(9)] = inst_25583);

(statearr_25785[(10)] = inst_25582);

return statearr_25785;
})();
var statearr_25786_25855 = state_25719__$1;
(statearr_25786_25855[(2)] = null);

(statearr_25786_25855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (45))){
var state_25719__$1 = state_25719;
var statearr_25787_25856 = state_25719__$1;
(statearr_25787_25856[(2)] = null);

(statearr_25787_25856[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (26))){
var inst_25639 = (state_25719[(26)]);
var inst_25637 = (state_25719[(23)]);
var inst_25633 = (state_25719[(19)]);
var inst_25641 = (state_25719[(24)]);
var inst_25636 = (state_25719[(25)]);
var inst_25656 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25658 = (function (){var all_files = inst_25633;
var res_SINGLEQUOTE_ = inst_25636;
var res = inst_25637;
var files_not_loaded = inst_25639;
var dependencies_that_loaded = inst_25641;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25656,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25657){
var map__25788 = p__25657;
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25788):map__25788);
var namespace = cljs.core.get.call(null,map__25788__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25788__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25656,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25659 = cljs.core.map.call(null,inst_25658,inst_25637);
var inst_25660 = cljs.core.pr_str.call(null,inst_25659);
var inst_25661 = figwheel.client.utils.log.call(null,inst_25660);
var inst_25662 = (function (){var all_files = inst_25633;
var res_SINGLEQUOTE_ = inst_25636;
var res = inst_25637;
var files_not_loaded = inst_25639;
var dependencies_that_loaded = inst_25641;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25656,inst_25658,inst_25659,inst_25660,inst_25661,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25639,inst_25637,inst_25633,inst_25641,inst_25636,inst_25656,inst_25658,inst_25659,inst_25660,inst_25661,state_val_25720,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25663 = setTimeout(inst_25662,(10));
var state_25719__$1 = (function (){var statearr_25790 = state_25719;
(statearr_25790[(33)] = inst_25661);

(statearr_25790[(34)] = inst_25656);

return statearr_25790;
})();
var statearr_25791_25857 = state_25719__$1;
(statearr_25791_25857[(2)] = inst_25663);

(statearr_25791_25857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (16))){
var state_25719__$1 = state_25719;
var statearr_25792_25858 = state_25719__$1;
(statearr_25792_25858[(2)] = reload_dependents);

(statearr_25792_25858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (38))){
var inst_25673 = (state_25719[(16)]);
var inst_25690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25673);
var state_25719__$1 = state_25719;
var statearr_25793_25859 = state_25719__$1;
(statearr_25793_25859[(2)] = inst_25690);

(statearr_25793_25859[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (30))){
var state_25719__$1 = state_25719;
var statearr_25794_25860 = state_25719__$1;
(statearr_25794_25860[(2)] = null);

(statearr_25794_25860[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (10))){
var inst_25593 = (state_25719[(22)]);
var inst_25595 = cljs.core.chunked_seq_QMARK_.call(null,inst_25593);
var state_25719__$1 = state_25719;
if(inst_25595){
var statearr_25795_25861 = state_25719__$1;
(statearr_25795_25861[(1)] = (13));

} else {
var statearr_25796_25862 = state_25719__$1;
(statearr_25796_25862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (18))){
var inst_25627 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
if(cljs.core.truth_(inst_25627)){
var statearr_25797_25863 = state_25719__$1;
(statearr_25797_25863[(1)] = (19));

} else {
var statearr_25798_25864 = state_25719__$1;
(statearr_25798_25864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (42))){
var state_25719__$1 = state_25719;
var statearr_25799_25865 = state_25719__$1;
(statearr_25799_25865[(2)] = null);

(statearr_25799_25865[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (37))){
var inst_25685 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25800_25866 = state_25719__$1;
(statearr_25800_25866[(2)] = inst_25685);

(statearr_25800_25866[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (8))){
var inst_25593 = (state_25719[(22)]);
var inst_25580 = (state_25719[(8)]);
var inst_25593__$1 = cljs.core.seq.call(null,inst_25580);
var state_25719__$1 = (function (){var statearr_25801 = state_25719;
(statearr_25801[(22)] = inst_25593__$1);

return statearr_25801;
})();
if(inst_25593__$1){
var statearr_25802_25867 = state_25719__$1;
(statearr_25802_25867[(1)] = (10));

} else {
var statearr_25803_25868 = state_25719__$1;
(statearr_25803_25868[(1)] = (11));

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
});})(c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20501__auto__,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0 = (function (){
var statearr_25807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25807[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__);

(statearr_25807[(1)] = (1));

return statearr_25807;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1 = (function (state_25719){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_25719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e25808){if((e25808 instanceof Object)){
var ex__20505__auto__ = e25808;
var statearr_25809_25869 = state_25719;
(statearr_25809_25869[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25870 = state_25719;
state_25719 = G__25870;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__ = function(state_25719){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1.call(this,state_25719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20615__auto__ = (function (){var statearr_25810 = f__20614__auto__.call(null);
(statearr_25810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_25810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,map__25565,map__25565__$1,opts,before_jsload,on_jsload,reload_dependents,map__25566,map__25566__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20613__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25873,link){
var map__25876 = p__25873;
var map__25876__$1 = ((((!((map__25876 == null)))?((((map__25876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25876):map__25876);
var file = cljs.core.get.call(null,map__25876__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25876,map__25876__$1,file){
return (function (p1__25871_SHARP_,p2__25872_SHARP_){
if(cljs.core._EQ_.call(null,p1__25871_SHARP_,p2__25872_SHARP_)){
return p1__25871_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25876,map__25876__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25882){
var map__25883 = p__25882;
var map__25883__$1 = ((((!((map__25883 == null)))?((((map__25883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25883):map__25883);
var match_length = cljs.core.get.call(null,map__25883__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25883__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25878_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25878_SHARP_);
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
var args25885 = [];
var len__19487__auto___25888 = arguments.length;
var i__19488__auto___25889 = (0);
while(true){
if((i__19488__auto___25889 < len__19487__auto___25888)){
args25885.push((arguments[i__19488__auto___25889]));

var G__25890 = (i__19488__auto___25889 + (1));
i__19488__auto___25889 = G__25890;
continue;
} else {
}
break;
}

var G__25887 = args25885.length;
switch (G__25887) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25885.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25892_SHARP_,p2__25893_SHARP_){
return cljs.core.assoc.call(null,p1__25892_SHARP_,cljs.core.get.call(null,p2__25893_SHARP_,key),p2__25893_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25894){
var map__25897 = p__25894;
var map__25897__$1 = ((((!((map__25897 == null)))?((((map__25897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25897):map__25897);
var f_data = map__25897__$1;
var file = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25899,files_msg){
var map__25906 = p__25899;
var map__25906__$1 = ((((!((map__25906 == null)))?((((map__25906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25906):map__25906);
var opts = map__25906__$1;
var on_cssload = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25908_25912 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25909_25913 = null;
var count__25910_25914 = (0);
var i__25911_25915 = (0);
while(true){
if((i__25911_25915 < count__25910_25914)){
var f_25916 = cljs.core._nth.call(null,chunk__25909_25913,i__25911_25915);
figwheel.client.file_reloading.reload_css_file.call(null,f_25916);

var G__25917 = seq__25908_25912;
var G__25918 = chunk__25909_25913;
var G__25919 = count__25910_25914;
var G__25920 = (i__25911_25915 + (1));
seq__25908_25912 = G__25917;
chunk__25909_25913 = G__25918;
count__25910_25914 = G__25919;
i__25911_25915 = G__25920;
continue;
} else {
var temp__4657__auto___25921 = cljs.core.seq.call(null,seq__25908_25912);
if(temp__4657__auto___25921){
var seq__25908_25922__$1 = temp__4657__auto___25921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25908_25922__$1)){
var c__19228__auto___25923 = cljs.core.chunk_first.call(null,seq__25908_25922__$1);
var G__25924 = cljs.core.chunk_rest.call(null,seq__25908_25922__$1);
var G__25925 = c__19228__auto___25923;
var G__25926 = cljs.core.count.call(null,c__19228__auto___25923);
var G__25927 = (0);
seq__25908_25912 = G__25924;
chunk__25909_25913 = G__25925;
count__25910_25914 = G__25926;
i__25911_25915 = G__25927;
continue;
} else {
var f_25928 = cljs.core.first.call(null,seq__25908_25922__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25928);

var G__25929 = cljs.core.next.call(null,seq__25908_25922__$1);
var G__25930 = null;
var G__25931 = (0);
var G__25932 = (0);
seq__25908_25912 = G__25929;
chunk__25909_25913 = G__25930;
count__25910_25914 = G__25931;
i__25911_25915 = G__25932;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25906,map__25906__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25906,map__25906__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map