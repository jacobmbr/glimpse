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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34692_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34692_SHARP_));
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
var seq__34697 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34698 = null;
var count__34699 = (0);
var i__34700 = (0);
while(true){
if((i__34700 < count__34699)){
var n = cljs.core._nth.call(null,chunk__34698,i__34700);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34701 = seq__34697;
var G__34702 = chunk__34698;
var G__34703 = count__34699;
var G__34704 = (i__34700 + (1));
seq__34697 = G__34701;
chunk__34698 = G__34702;
count__34699 = G__34703;
i__34700 = G__34704;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34697);
if(temp__4657__auto__){
var seq__34697__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34697__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__34697__$1);
var G__34705 = cljs.core.chunk_rest.call(null,seq__34697__$1);
var G__34706 = c__19228__auto__;
var G__34707 = cljs.core.count.call(null,c__19228__auto__);
var G__34708 = (0);
seq__34697 = G__34705;
chunk__34698 = G__34706;
count__34699 = G__34707;
i__34700 = G__34708;
continue;
} else {
var n = cljs.core.first.call(null,seq__34697__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34709 = cljs.core.next.call(null,seq__34697__$1);
var G__34710 = null;
var G__34711 = (0);
var G__34712 = (0);
seq__34697 = G__34709;
chunk__34698 = G__34710;
count__34699 = G__34711;
i__34700 = G__34712;
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

var seq__34751_34758 = cljs.core.seq.call(null,deps);
var chunk__34752_34759 = null;
var count__34753_34760 = (0);
var i__34754_34761 = (0);
while(true){
if((i__34754_34761 < count__34753_34760)){
var dep_34762 = cljs.core._nth.call(null,chunk__34752_34759,i__34754_34761);
topo_sort_helper_STAR_.call(null,dep_34762,(depth + (1)),state);

var G__34763 = seq__34751_34758;
var G__34764 = chunk__34752_34759;
var G__34765 = count__34753_34760;
var G__34766 = (i__34754_34761 + (1));
seq__34751_34758 = G__34763;
chunk__34752_34759 = G__34764;
count__34753_34760 = G__34765;
i__34754_34761 = G__34766;
continue;
} else {
var temp__4657__auto___34767 = cljs.core.seq.call(null,seq__34751_34758);
if(temp__4657__auto___34767){
var seq__34751_34768__$1 = temp__4657__auto___34767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34751_34768__$1)){
var c__19228__auto___34769 = cljs.core.chunk_first.call(null,seq__34751_34768__$1);
var G__34770 = cljs.core.chunk_rest.call(null,seq__34751_34768__$1);
var G__34771 = c__19228__auto___34769;
var G__34772 = cljs.core.count.call(null,c__19228__auto___34769);
var G__34773 = (0);
seq__34751_34758 = G__34770;
chunk__34752_34759 = G__34771;
count__34753_34760 = G__34772;
i__34754_34761 = G__34773;
continue;
} else {
var dep_34774 = cljs.core.first.call(null,seq__34751_34768__$1);
topo_sort_helper_STAR_.call(null,dep_34774,(depth + (1)),state);

var G__34775 = cljs.core.next.call(null,seq__34751_34768__$1);
var G__34776 = null;
var G__34777 = (0);
var G__34778 = (0);
seq__34751_34758 = G__34775;
chunk__34752_34759 = G__34776;
count__34753_34760 = G__34777;
i__34754_34761 = G__34778;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34755){
var vec__34757 = p__34755;
var x = cljs.core.nth.call(null,vec__34757,(0),null);
var xs = cljs.core.nthnext.call(null,vec__34757,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34757,x,xs,get_deps__$1){
return (function (p1__34713_SHARP_){
return clojure.set.difference.call(null,p1__34713_SHARP_,x);
});})(vec__34757,x,xs,get_deps__$1))
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
var seq__34791 = cljs.core.seq.call(null,provides);
var chunk__34792 = null;
var count__34793 = (0);
var i__34794 = (0);
while(true){
if((i__34794 < count__34793)){
var prov = cljs.core._nth.call(null,chunk__34792,i__34794);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34795_34803 = cljs.core.seq.call(null,requires);
var chunk__34796_34804 = null;
var count__34797_34805 = (0);
var i__34798_34806 = (0);
while(true){
if((i__34798_34806 < count__34797_34805)){
var req_34807 = cljs.core._nth.call(null,chunk__34796_34804,i__34798_34806);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34807,prov);

var G__34808 = seq__34795_34803;
var G__34809 = chunk__34796_34804;
var G__34810 = count__34797_34805;
var G__34811 = (i__34798_34806 + (1));
seq__34795_34803 = G__34808;
chunk__34796_34804 = G__34809;
count__34797_34805 = G__34810;
i__34798_34806 = G__34811;
continue;
} else {
var temp__4657__auto___34812 = cljs.core.seq.call(null,seq__34795_34803);
if(temp__4657__auto___34812){
var seq__34795_34813__$1 = temp__4657__auto___34812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34795_34813__$1)){
var c__19228__auto___34814 = cljs.core.chunk_first.call(null,seq__34795_34813__$1);
var G__34815 = cljs.core.chunk_rest.call(null,seq__34795_34813__$1);
var G__34816 = c__19228__auto___34814;
var G__34817 = cljs.core.count.call(null,c__19228__auto___34814);
var G__34818 = (0);
seq__34795_34803 = G__34815;
chunk__34796_34804 = G__34816;
count__34797_34805 = G__34817;
i__34798_34806 = G__34818;
continue;
} else {
var req_34819 = cljs.core.first.call(null,seq__34795_34813__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34819,prov);

var G__34820 = cljs.core.next.call(null,seq__34795_34813__$1);
var G__34821 = null;
var G__34822 = (0);
var G__34823 = (0);
seq__34795_34803 = G__34820;
chunk__34796_34804 = G__34821;
count__34797_34805 = G__34822;
i__34798_34806 = G__34823;
continue;
}
} else {
}
}
break;
}

var G__34824 = seq__34791;
var G__34825 = chunk__34792;
var G__34826 = count__34793;
var G__34827 = (i__34794 + (1));
seq__34791 = G__34824;
chunk__34792 = G__34825;
count__34793 = G__34826;
i__34794 = G__34827;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34791);
if(temp__4657__auto__){
var seq__34791__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34791__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__34791__$1);
var G__34828 = cljs.core.chunk_rest.call(null,seq__34791__$1);
var G__34829 = c__19228__auto__;
var G__34830 = cljs.core.count.call(null,c__19228__auto__);
var G__34831 = (0);
seq__34791 = G__34828;
chunk__34792 = G__34829;
count__34793 = G__34830;
i__34794 = G__34831;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34791__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34799_34832 = cljs.core.seq.call(null,requires);
var chunk__34800_34833 = null;
var count__34801_34834 = (0);
var i__34802_34835 = (0);
while(true){
if((i__34802_34835 < count__34801_34834)){
var req_34836 = cljs.core._nth.call(null,chunk__34800_34833,i__34802_34835);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34836,prov);

var G__34837 = seq__34799_34832;
var G__34838 = chunk__34800_34833;
var G__34839 = count__34801_34834;
var G__34840 = (i__34802_34835 + (1));
seq__34799_34832 = G__34837;
chunk__34800_34833 = G__34838;
count__34801_34834 = G__34839;
i__34802_34835 = G__34840;
continue;
} else {
var temp__4657__auto___34841__$1 = cljs.core.seq.call(null,seq__34799_34832);
if(temp__4657__auto___34841__$1){
var seq__34799_34842__$1 = temp__4657__auto___34841__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34799_34842__$1)){
var c__19228__auto___34843 = cljs.core.chunk_first.call(null,seq__34799_34842__$1);
var G__34844 = cljs.core.chunk_rest.call(null,seq__34799_34842__$1);
var G__34845 = c__19228__auto___34843;
var G__34846 = cljs.core.count.call(null,c__19228__auto___34843);
var G__34847 = (0);
seq__34799_34832 = G__34844;
chunk__34800_34833 = G__34845;
count__34801_34834 = G__34846;
i__34802_34835 = G__34847;
continue;
} else {
var req_34848 = cljs.core.first.call(null,seq__34799_34842__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34848,prov);

var G__34849 = cljs.core.next.call(null,seq__34799_34842__$1);
var G__34850 = null;
var G__34851 = (0);
var G__34852 = (0);
seq__34799_34832 = G__34849;
chunk__34800_34833 = G__34850;
count__34801_34834 = G__34851;
i__34802_34835 = G__34852;
continue;
}
} else {
}
}
break;
}

var G__34853 = cljs.core.next.call(null,seq__34791__$1);
var G__34854 = null;
var G__34855 = (0);
var G__34856 = (0);
seq__34791 = G__34853;
chunk__34792 = G__34854;
count__34793 = G__34855;
i__34794 = G__34856;
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
var seq__34861_34865 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34862_34866 = null;
var count__34863_34867 = (0);
var i__34864_34868 = (0);
while(true){
if((i__34864_34868 < count__34863_34867)){
var ns_34869 = cljs.core._nth.call(null,chunk__34862_34866,i__34864_34868);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34869);

var G__34870 = seq__34861_34865;
var G__34871 = chunk__34862_34866;
var G__34872 = count__34863_34867;
var G__34873 = (i__34864_34868 + (1));
seq__34861_34865 = G__34870;
chunk__34862_34866 = G__34871;
count__34863_34867 = G__34872;
i__34864_34868 = G__34873;
continue;
} else {
var temp__4657__auto___34874 = cljs.core.seq.call(null,seq__34861_34865);
if(temp__4657__auto___34874){
var seq__34861_34875__$1 = temp__4657__auto___34874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34861_34875__$1)){
var c__19228__auto___34876 = cljs.core.chunk_first.call(null,seq__34861_34875__$1);
var G__34877 = cljs.core.chunk_rest.call(null,seq__34861_34875__$1);
var G__34878 = c__19228__auto___34876;
var G__34879 = cljs.core.count.call(null,c__19228__auto___34876);
var G__34880 = (0);
seq__34861_34865 = G__34877;
chunk__34862_34866 = G__34878;
count__34863_34867 = G__34879;
i__34864_34868 = G__34880;
continue;
} else {
var ns_34881 = cljs.core.first.call(null,seq__34861_34875__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34881);

var G__34882 = cljs.core.next.call(null,seq__34861_34875__$1);
var G__34883 = null;
var G__34884 = (0);
var G__34885 = (0);
seq__34861_34865 = G__34882;
chunk__34862_34866 = G__34883;
count__34863_34867 = G__34884;
i__34864_34868 = G__34885;
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
var G__34886__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34887__i = 0, G__34887__a = new Array(arguments.length -  0);
while (G__34887__i < G__34887__a.length) {G__34887__a[G__34887__i] = arguments[G__34887__i + 0]; ++G__34887__i;}
  args = new cljs.core.IndexedSeq(G__34887__a,0);
} 
return G__34886__delegate.call(this,args);};
G__34886.cljs$lang$maxFixedArity = 0;
G__34886.cljs$lang$applyTo = (function (arglist__34888){
var args = cljs.core.seq(arglist__34888);
return G__34886__delegate(args);
});
G__34886.cljs$core$IFn$_invoke$arity$variadic = G__34886__delegate;
return G__34886;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34890 = cljs.core._EQ_;
var expr__34891 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34890.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34891))){
var path_parts = ((function (pred__34890,expr__34891){
return (function (p1__34889_SHARP_){
return clojure.string.split.call(null,p1__34889_SHARP_,/[\/\\]/);
});})(pred__34890,expr__34891))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34890,expr__34891){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34893){if((e34893 instanceof Error)){
var e = e34893;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34893;

}
}})());
});
;})(path_parts,sep,root,pred__34890,expr__34891))
} else {
if(cljs.core.truth_(pred__34890.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34891))){
return ((function (pred__34890,expr__34891){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34890,expr__34891){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34890,expr__34891))
);

return deferred.addErrback(((function (deferred,pred__34890,expr__34891){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34890,expr__34891))
);
});
;})(pred__34890,expr__34891))
} else {
return ((function (pred__34890,expr__34891){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34890,expr__34891))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34894,callback){
var map__34897 = p__34894;
var map__34897__$1 = ((((!((map__34897 == null)))?((((map__34897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34897):map__34897);
var file_msg = map__34897__$1;
var request_url = cljs.core.get.call(null,map__34897__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34897,map__34897__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34897,map__34897__$1,file_msg,request_url))
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
return (function (state_34921){
var state_val_34922 = (state_34921[(1)]);
if((state_val_34922 === (7))){
var inst_34917 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_34923_34943 = state_34921__$1;
(statearr_34923_34943[(2)] = inst_34917);

(statearr_34923_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (1))){
var state_34921__$1 = state_34921;
var statearr_34924_34944 = state_34921__$1;
(statearr_34924_34944[(2)] = null);

(statearr_34924_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (4))){
var inst_34901 = (state_34921[(7)]);
var inst_34901__$1 = (state_34921[(2)]);
var state_34921__$1 = (function (){var statearr_34925 = state_34921;
(statearr_34925[(7)] = inst_34901__$1);

return statearr_34925;
})();
if(cljs.core.truth_(inst_34901__$1)){
var statearr_34926_34945 = state_34921__$1;
(statearr_34926_34945[(1)] = (5));

} else {
var statearr_34927_34946 = state_34921__$1;
(statearr_34927_34946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (6))){
var state_34921__$1 = state_34921;
var statearr_34928_34947 = state_34921__$1;
(statearr_34928_34947[(2)] = null);

(statearr_34928_34947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (3))){
var inst_34919 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34921__$1,inst_34919);
} else {
if((state_val_34922 === (2))){
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34921__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34922 === (11))){
var inst_34913 = (state_34921[(2)]);
var state_34921__$1 = (function (){var statearr_34929 = state_34921;
(statearr_34929[(8)] = inst_34913);

return statearr_34929;
})();
var statearr_34930_34948 = state_34921__$1;
(statearr_34930_34948[(2)] = null);

(statearr_34930_34948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (9))){
var inst_34905 = (state_34921[(9)]);
var inst_34907 = (state_34921[(10)]);
var inst_34909 = inst_34907.call(null,inst_34905);
var state_34921__$1 = state_34921;
var statearr_34931_34949 = state_34921__$1;
(statearr_34931_34949[(2)] = inst_34909);

(statearr_34931_34949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (5))){
var inst_34901 = (state_34921[(7)]);
var inst_34903 = figwheel.client.file_reloading.blocking_load.call(null,inst_34901);
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34921__$1,(8),inst_34903);
} else {
if((state_val_34922 === (10))){
var inst_34905 = (state_34921[(9)]);
var inst_34911 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34905);
var state_34921__$1 = state_34921;
var statearr_34932_34950 = state_34921__$1;
(statearr_34932_34950[(2)] = inst_34911);

(statearr_34932_34950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (8))){
var inst_34901 = (state_34921[(7)]);
var inst_34907 = (state_34921[(10)]);
var inst_34905 = (state_34921[(2)]);
var inst_34906 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34907__$1 = cljs.core.get.call(null,inst_34906,inst_34901);
var state_34921__$1 = (function (){var statearr_34933 = state_34921;
(statearr_34933[(9)] = inst_34905);

(statearr_34933[(10)] = inst_34907__$1);

return statearr_34933;
})();
if(cljs.core.truth_(inst_34907__$1)){
var statearr_34934_34951 = state_34921__$1;
(statearr_34934_34951[(1)] = (9));

} else {
var statearr_34935_34952 = state_34921__$1;
(statearr_34935_34952[(1)] = (10));

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
var statearr_34939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34939[(0)] = figwheel$client$file_reloading$state_machine__20502__auto__);

(statearr_34939[(1)] = (1));

return statearr_34939;
});
var figwheel$client$file_reloading$state_machine__20502__auto____1 = (function (state_34921){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_34921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e34940){if((e34940 instanceof Object)){
var ex__20505__auto__ = e34940;
var statearr_34941_34953 = state_34921;
(statearr_34941_34953[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34954 = state_34921;
state_34921 = G__34954;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20502__auto__ = function(state_34921){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20502__auto____1.call(this,state_34921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20502__auto____0;
figwheel$client$file_reloading$state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20502__auto____1;
return figwheel$client$file_reloading$state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_34942 = f__20614__auto__.call(null);
(statearr_34942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_34942;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34955,callback){
var map__34958 = p__34955;
var map__34958__$1 = ((((!((map__34958 == null)))?((((map__34958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34958):map__34958);
var file_msg = map__34958__$1;
var namespace = cljs.core.get.call(null,map__34958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34958,map__34958__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34958,map__34958__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34960){
var map__34963 = p__34960;
var map__34963__$1 = ((((!((map__34963 == null)))?((((map__34963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34963):map__34963);
var file_msg = map__34963__$1;
var namespace = cljs.core.get.call(null,map__34963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34965,callback){
var map__34968 = p__34965;
var map__34968__$1 = ((((!((map__34968 == null)))?((((map__34968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34968):map__34968);
var file_msg = map__34968__$1;
var request_url = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20613__auto___35056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto___35056,out){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto___35056,out){
return (function (state_35038){
var state_val_35039 = (state_35038[(1)]);
if((state_val_35039 === (1))){
var inst_35016 = cljs.core.nth.call(null,files,(0),null);
var inst_35017 = cljs.core.nthnext.call(null,files,(1));
var inst_35018 = files;
var state_35038__$1 = (function (){var statearr_35040 = state_35038;
(statearr_35040[(7)] = inst_35018);

(statearr_35040[(8)] = inst_35017);

(statearr_35040[(9)] = inst_35016);

return statearr_35040;
})();
var statearr_35041_35057 = state_35038__$1;
(statearr_35041_35057[(2)] = null);

(statearr_35041_35057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (2))){
var inst_35018 = (state_35038[(7)]);
var inst_35021 = (state_35038[(10)]);
var inst_35021__$1 = cljs.core.nth.call(null,inst_35018,(0),null);
var inst_35022 = cljs.core.nthnext.call(null,inst_35018,(1));
var inst_35023 = (inst_35021__$1 == null);
var inst_35024 = cljs.core.not.call(null,inst_35023);
var state_35038__$1 = (function (){var statearr_35042 = state_35038;
(statearr_35042[(10)] = inst_35021__$1);

(statearr_35042[(11)] = inst_35022);

return statearr_35042;
})();
if(inst_35024){
var statearr_35043_35058 = state_35038__$1;
(statearr_35043_35058[(1)] = (4));

} else {
var statearr_35044_35059 = state_35038__$1;
(statearr_35044_35059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (3))){
var inst_35036 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35038__$1,inst_35036);
} else {
if((state_val_35039 === (4))){
var inst_35021 = (state_35038[(10)]);
var inst_35026 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35021);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(7),inst_35026);
} else {
if((state_val_35039 === (5))){
var inst_35032 = cljs.core.async.close_BANG_.call(null,out);
var state_35038__$1 = state_35038;
var statearr_35045_35060 = state_35038__$1;
(statearr_35045_35060[(2)] = inst_35032);

(statearr_35045_35060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (6))){
var inst_35034 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35046_35061 = state_35038__$1;
(statearr_35046_35061[(2)] = inst_35034);

(statearr_35046_35061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (7))){
var inst_35022 = (state_35038[(11)]);
var inst_35028 = (state_35038[(2)]);
var inst_35029 = cljs.core.async.put_BANG_.call(null,out,inst_35028);
var inst_35018 = inst_35022;
var state_35038__$1 = (function (){var statearr_35047 = state_35038;
(statearr_35047[(7)] = inst_35018);

(statearr_35047[(12)] = inst_35029);

return statearr_35047;
})();
var statearr_35048_35062 = state_35038__$1;
(statearr_35048_35062[(2)] = null);

(statearr_35048_35062[(1)] = (2));


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
});})(c__20613__auto___35056,out))
;
return ((function (switch__20501__auto__,c__20613__auto___35056,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0 = (function (){
var statearr_35052 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1 = (function (state_35038){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_35038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e35053){if((e35053 instanceof Object)){
var ex__20505__auto__ = e35053;
var statearr_35054_35063 = state_35038;
(statearr_35054_35063[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35064 = state_35038;
state_35038 = G__35064;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__ = function(state_35038){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1.call(this,state_35038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto___35056,out))
})();
var state__20615__auto__ = (function (){var statearr_35055 = f__20614__auto__.call(null);
(statearr_35055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto___35056);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto___35056,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35065,opts){
var map__35069 = p__35065;
var map__35069__$1 = ((((!((map__35069 == null)))?((((map__35069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35069):map__35069);
var eval_body__$1 = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35071){var e = e35071;
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
return (function (p1__35072_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35072_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35077){
var vec__35078 = p__35077;
var k = cljs.core.nth.call(null,vec__35078,(0),null);
var v = cljs.core.nth.call(null,vec__35078,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35079){
var vec__35080 = p__35079;
var k = cljs.core.nth.call(null,vec__35080,(0),null);
var v = cljs.core.nth.call(null,vec__35080,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35084,p__35085){
var map__35332 = p__35084;
var map__35332__$1 = ((((!((map__35332 == null)))?((((map__35332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35332):map__35332);
var opts = map__35332__$1;
var before_jsload = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35333 = p__35085;
var map__35333__$1 = ((((!((map__35333 == null)))?((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var msg = map__35333__$1;
var files = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35486){
var state_val_35487 = (state_35486[(1)]);
if((state_val_35487 === (7))){
var inst_35347 = (state_35486[(7)]);
var inst_35349 = (state_35486[(8)]);
var inst_35350 = (state_35486[(9)]);
var inst_35348 = (state_35486[(10)]);
var inst_35355 = cljs.core._nth.call(null,inst_35348,inst_35350);
var inst_35356 = figwheel.client.file_reloading.eval_body.call(null,inst_35355,opts);
var inst_35357 = (inst_35350 + (1));
var tmp35488 = inst_35347;
var tmp35489 = inst_35349;
var tmp35490 = inst_35348;
var inst_35347__$1 = tmp35488;
var inst_35348__$1 = tmp35490;
var inst_35349__$1 = tmp35489;
var inst_35350__$1 = inst_35357;
var state_35486__$1 = (function (){var statearr_35491 = state_35486;
(statearr_35491[(7)] = inst_35347__$1);

(statearr_35491[(8)] = inst_35349__$1);

(statearr_35491[(9)] = inst_35350__$1);

(statearr_35491[(11)] = inst_35356);

(statearr_35491[(10)] = inst_35348__$1);

return statearr_35491;
})();
var statearr_35492_35578 = state_35486__$1;
(statearr_35492_35578[(2)] = null);

(statearr_35492_35578[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (20))){
var inst_35390 = (state_35486[(12)]);
var inst_35398 = figwheel.client.file_reloading.sort_files.call(null,inst_35390);
var state_35486__$1 = state_35486;
var statearr_35493_35579 = state_35486__$1;
(statearr_35493_35579[(2)] = inst_35398);

(statearr_35493_35579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (27))){
var state_35486__$1 = state_35486;
var statearr_35494_35580 = state_35486__$1;
(statearr_35494_35580[(2)] = null);

(statearr_35494_35580[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (1))){
var inst_35339 = (state_35486[(13)]);
var inst_35336 = before_jsload.call(null,files);
var inst_35337 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35338 = (function (){return ((function (inst_35339,inst_35336,inst_35337,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35081_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35081_SHARP_);
});
;})(inst_35339,inst_35336,inst_35337,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35339__$1 = cljs.core.filter.call(null,inst_35338,files);
var inst_35340 = cljs.core.not_empty.call(null,inst_35339__$1);
var state_35486__$1 = (function (){var statearr_35495 = state_35486;
(statearr_35495[(14)] = inst_35337);

(statearr_35495[(13)] = inst_35339__$1);

(statearr_35495[(15)] = inst_35336);

return statearr_35495;
})();
if(cljs.core.truth_(inst_35340)){
var statearr_35496_35581 = state_35486__$1;
(statearr_35496_35581[(1)] = (2));

} else {
var statearr_35497_35582 = state_35486__$1;
(statearr_35497_35582[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (24))){
var state_35486__$1 = state_35486;
var statearr_35498_35583 = state_35486__$1;
(statearr_35498_35583[(2)] = null);

(statearr_35498_35583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (39))){
var inst_35440 = (state_35486[(16)]);
var state_35486__$1 = state_35486;
var statearr_35499_35584 = state_35486__$1;
(statearr_35499_35584[(2)] = inst_35440);

(statearr_35499_35584[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (46))){
var inst_35481 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35500_35585 = state_35486__$1;
(statearr_35500_35585[(2)] = inst_35481);

(statearr_35500_35585[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (4))){
var inst_35384 = (state_35486[(2)]);
var inst_35385 = cljs.core.List.EMPTY;
var inst_35386 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35385);
var inst_35387 = (function (){return ((function (inst_35384,inst_35385,inst_35386,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35082_SHARP_){
var and__18405__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35082_SHARP_);
if(cljs.core.truth_(and__18405__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35082_SHARP_));
} else {
return and__18405__auto__;
}
});
;})(inst_35384,inst_35385,inst_35386,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35388 = cljs.core.filter.call(null,inst_35387,files);
var inst_35389 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35390 = cljs.core.concat.call(null,inst_35388,inst_35389);
var state_35486__$1 = (function (){var statearr_35501 = state_35486;
(statearr_35501[(17)] = inst_35384);

(statearr_35501[(12)] = inst_35390);

(statearr_35501[(18)] = inst_35386);

return statearr_35501;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35502_35586 = state_35486__$1;
(statearr_35502_35586[(1)] = (16));

} else {
var statearr_35503_35587 = state_35486__$1;
(statearr_35503_35587[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (15))){
var inst_35374 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35504_35588 = state_35486__$1;
(statearr_35504_35588[(2)] = inst_35374);

(statearr_35504_35588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (21))){
var inst_35400 = (state_35486[(19)]);
var inst_35400__$1 = (state_35486[(2)]);
var inst_35401 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35400__$1);
var state_35486__$1 = (function (){var statearr_35505 = state_35486;
(statearr_35505[(19)] = inst_35400__$1);

return statearr_35505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35486__$1,(22),inst_35401);
} else {
if((state_val_35487 === (31))){
var inst_35484 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35486__$1,inst_35484);
} else {
if((state_val_35487 === (32))){
var inst_35440 = (state_35486[(16)]);
var inst_35445 = inst_35440.cljs$lang$protocol_mask$partition0$;
var inst_35446 = (inst_35445 & (64));
var inst_35447 = inst_35440.cljs$core$ISeq$;
var inst_35448 = (inst_35446) || (inst_35447);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35448)){
var statearr_35506_35589 = state_35486__$1;
(statearr_35506_35589[(1)] = (35));

} else {
var statearr_35507_35590 = state_35486__$1;
(statearr_35507_35590[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (40))){
var inst_35461 = (state_35486[(20)]);
var inst_35460 = (state_35486[(2)]);
var inst_35461__$1 = cljs.core.get.call(null,inst_35460,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35462 = cljs.core.get.call(null,inst_35460,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35463 = cljs.core.not_empty.call(null,inst_35461__$1);
var state_35486__$1 = (function (){var statearr_35508 = state_35486;
(statearr_35508[(20)] = inst_35461__$1);

(statearr_35508[(21)] = inst_35462);

return statearr_35508;
})();
if(cljs.core.truth_(inst_35463)){
var statearr_35509_35591 = state_35486__$1;
(statearr_35509_35591[(1)] = (41));

} else {
var statearr_35510_35592 = state_35486__$1;
(statearr_35510_35592[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (33))){
var state_35486__$1 = state_35486;
var statearr_35511_35593 = state_35486__$1;
(statearr_35511_35593[(2)] = false);

(statearr_35511_35593[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (13))){
var inst_35360 = (state_35486[(22)]);
var inst_35364 = cljs.core.chunk_first.call(null,inst_35360);
var inst_35365 = cljs.core.chunk_rest.call(null,inst_35360);
var inst_35366 = cljs.core.count.call(null,inst_35364);
var inst_35347 = inst_35365;
var inst_35348 = inst_35364;
var inst_35349 = inst_35366;
var inst_35350 = (0);
var state_35486__$1 = (function (){var statearr_35512 = state_35486;
(statearr_35512[(7)] = inst_35347);

(statearr_35512[(8)] = inst_35349);

(statearr_35512[(9)] = inst_35350);

(statearr_35512[(10)] = inst_35348);

return statearr_35512;
})();
var statearr_35513_35594 = state_35486__$1;
(statearr_35513_35594[(2)] = null);

(statearr_35513_35594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (22))){
var inst_35403 = (state_35486[(23)]);
var inst_35408 = (state_35486[(24)]);
var inst_35404 = (state_35486[(25)]);
var inst_35400 = (state_35486[(19)]);
var inst_35403__$1 = (state_35486[(2)]);
var inst_35404__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35403__$1);
var inst_35405 = (function (){var all_files = inst_35400;
var res_SINGLEQUOTE_ = inst_35403__$1;
var res = inst_35404__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35403,inst_35408,inst_35404,inst_35400,inst_35403__$1,inst_35404__$1,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35083_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35083_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35403,inst_35408,inst_35404,inst_35400,inst_35403__$1,inst_35404__$1,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35406 = cljs.core.filter.call(null,inst_35405,inst_35403__$1);
var inst_35407 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35408__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35407);
var inst_35409 = cljs.core.not_empty.call(null,inst_35408__$1);
var state_35486__$1 = (function (){var statearr_35514 = state_35486;
(statearr_35514[(23)] = inst_35403__$1);

(statearr_35514[(24)] = inst_35408__$1);

(statearr_35514[(25)] = inst_35404__$1);

(statearr_35514[(26)] = inst_35406);

return statearr_35514;
})();
if(cljs.core.truth_(inst_35409)){
var statearr_35515_35595 = state_35486__$1;
(statearr_35515_35595[(1)] = (23));

} else {
var statearr_35516_35596 = state_35486__$1;
(statearr_35516_35596[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (36))){
var state_35486__$1 = state_35486;
var statearr_35517_35597 = state_35486__$1;
(statearr_35517_35597[(2)] = false);

(statearr_35517_35597[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (41))){
var inst_35461 = (state_35486[(20)]);
var inst_35465 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35466 = cljs.core.map.call(null,inst_35465,inst_35461);
var inst_35467 = cljs.core.pr_str.call(null,inst_35466);
var inst_35468 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35467)].join('');
var inst_35469 = figwheel.client.utils.log.call(null,inst_35468);
var state_35486__$1 = state_35486;
var statearr_35518_35598 = state_35486__$1;
(statearr_35518_35598[(2)] = inst_35469);

(statearr_35518_35598[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (43))){
var inst_35462 = (state_35486[(21)]);
var inst_35472 = (state_35486[(2)]);
var inst_35473 = cljs.core.not_empty.call(null,inst_35462);
var state_35486__$1 = (function (){var statearr_35519 = state_35486;
(statearr_35519[(27)] = inst_35472);

return statearr_35519;
})();
if(cljs.core.truth_(inst_35473)){
var statearr_35520_35599 = state_35486__$1;
(statearr_35520_35599[(1)] = (44));

} else {
var statearr_35521_35600 = state_35486__$1;
(statearr_35521_35600[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (29))){
var inst_35403 = (state_35486[(23)]);
var inst_35408 = (state_35486[(24)]);
var inst_35404 = (state_35486[(25)]);
var inst_35440 = (state_35486[(16)]);
var inst_35406 = (state_35486[(26)]);
var inst_35400 = (state_35486[(19)]);
var inst_35436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35439 = (function (){var all_files = inst_35400;
var res_SINGLEQUOTE_ = inst_35403;
var res = inst_35404;
var files_not_loaded = inst_35406;
var dependencies_that_loaded = inst_35408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35440,inst_35406,inst_35400,inst_35436,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35438){
var map__35522 = p__35438;
var map__35522__$1 = ((((!((map__35522 == null)))?((((map__35522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35522):map__35522);
var namespace = cljs.core.get.call(null,map__35522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35440,inst_35406,inst_35400,inst_35436,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35440__$1 = cljs.core.group_by.call(null,inst_35439,inst_35406);
var inst_35442 = (inst_35440__$1 == null);
var inst_35443 = cljs.core.not.call(null,inst_35442);
var state_35486__$1 = (function (){var statearr_35524 = state_35486;
(statearr_35524[(28)] = inst_35436);

(statearr_35524[(16)] = inst_35440__$1);

return statearr_35524;
})();
if(inst_35443){
var statearr_35525_35601 = state_35486__$1;
(statearr_35525_35601[(1)] = (32));

} else {
var statearr_35526_35602 = state_35486__$1;
(statearr_35526_35602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (44))){
var inst_35462 = (state_35486[(21)]);
var inst_35475 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35462);
var inst_35476 = cljs.core.pr_str.call(null,inst_35475);
var inst_35477 = [cljs.core.str("not required: "),cljs.core.str(inst_35476)].join('');
var inst_35478 = figwheel.client.utils.log.call(null,inst_35477);
var state_35486__$1 = state_35486;
var statearr_35527_35603 = state_35486__$1;
(statearr_35527_35603[(2)] = inst_35478);

(statearr_35527_35603[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (6))){
var inst_35381 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35528_35604 = state_35486__$1;
(statearr_35528_35604[(2)] = inst_35381);

(statearr_35528_35604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (28))){
var inst_35406 = (state_35486[(26)]);
var inst_35433 = (state_35486[(2)]);
var inst_35434 = cljs.core.not_empty.call(null,inst_35406);
var state_35486__$1 = (function (){var statearr_35529 = state_35486;
(statearr_35529[(29)] = inst_35433);

return statearr_35529;
})();
if(cljs.core.truth_(inst_35434)){
var statearr_35530_35605 = state_35486__$1;
(statearr_35530_35605[(1)] = (29));

} else {
var statearr_35531_35606 = state_35486__$1;
(statearr_35531_35606[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (25))){
var inst_35404 = (state_35486[(25)]);
var inst_35420 = (state_35486[(2)]);
var inst_35421 = cljs.core.not_empty.call(null,inst_35404);
var state_35486__$1 = (function (){var statearr_35532 = state_35486;
(statearr_35532[(30)] = inst_35420);

return statearr_35532;
})();
if(cljs.core.truth_(inst_35421)){
var statearr_35533_35607 = state_35486__$1;
(statearr_35533_35607[(1)] = (26));

} else {
var statearr_35534_35608 = state_35486__$1;
(statearr_35534_35608[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (34))){
var inst_35455 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35455)){
var statearr_35535_35609 = state_35486__$1;
(statearr_35535_35609[(1)] = (38));

} else {
var statearr_35536_35610 = state_35486__$1;
(statearr_35536_35610[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (17))){
var state_35486__$1 = state_35486;
var statearr_35537_35611 = state_35486__$1;
(statearr_35537_35611[(2)] = recompile_dependents);

(statearr_35537_35611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (3))){
var state_35486__$1 = state_35486;
var statearr_35538_35612 = state_35486__$1;
(statearr_35538_35612[(2)] = null);

(statearr_35538_35612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (12))){
var inst_35377 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35539_35613 = state_35486__$1;
(statearr_35539_35613[(2)] = inst_35377);

(statearr_35539_35613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (2))){
var inst_35339 = (state_35486[(13)]);
var inst_35346 = cljs.core.seq.call(null,inst_35339);
var inst_35347 = inst_35346;
var inst_35348 = null;
var inst_35349 = (0);
var inst_35350 = (0);
var state_35486__$1 = (function (){var statearr_35540 = state_35486;
(statearr_35540[(7)] = inst_35347);

(statearr_35540[(8)] = inst_35349);

(statearr_35540[(9)] = inst_35350);

(statearr_35540[(10)] = inst_35348);

return statearr_35540;
})();
var statearr_35541_35614 = state_35486__$1;
(statearr_35541_35614[(2)] = null);

(statearr_35541_35614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (23))){
var inst_35403 = (state_35486[(23)]);
var inst_35408 = (state_35486[(24)]);
var inst_35404 = (state_35486[(25)]);
var inst_35406 = (state_35486[(26)]);
var inst_35400 = (state_35486[(19)]);
var inst_35411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35413 = (function (){var all_files = inst_35400;
var res_SINGLEQUOTE_ = inst_35403;
var res = inst_35404;
var files_not_loaded = inst_35406;
var dependencies_that_loaded = inst_35408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35406,inst_35400,inst_35411,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35412){
var map__35542 = p__35412;
var map__35542__$1 = ((((!((map__35542 == null)))?((((map__35542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35542):map__35542);
var request_url = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35406,inst_35400,inst_35411,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35414 = cljs.core.reverse.call(null,inst_35408);
var inst_35415 = cljs.core.map.call(null,inst_35413,inst_35414);
var inst_35416 = cljs.core.pr_str.call(null,inst_35415);
var inst_35417 = figwheel.client.utils.log.call(null,inst_35416);
var state_35486__$1 = (function (){var statearr_35544 = state_35486;
(statearr_35544[(31)] = inst_35411);

return statearr_35544;
})();
var statearr_35545_35615 = state_35486__$1;
(statearr_35545_35615[(2)] = inst_35417);

(statearr_35545_35615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (35))){
var state_35486__$1 = state_35486;
var statearr_35546_35616 = state_35486__$1;
(statearr_35546_35616[(2)] = true);

(statearr_35546_35616[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (19))){
var inst_35390 = (state_35486[(12)]);
var inst_35396 = figwheel.client.file_reloading.expand_files.call(null,inst_35390);
var state_35486__$1 = state_35486;
var statearr_35547_35617 = state_35486__$1;
(statearr_35547_35617[(2)] = inst_35396);

(statearr_35547_35617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (11))){
var state_35486__$1 = state_35486;
var statearr_35548_35618 = state_35486__$1;
(statearr_35548_35618[(2)] = null);

(statearr_35548_35618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (9))){
var inst_35379 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35549_35619 = state_35486__$1;
(statearr_35549_35619[(2)] = inst_35379);

(statearr_35549_35619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (5))){
var inst_35349 = (state_35486[(8)]);
var inst_35350 = (state_35486[(9)]);
var inst_35352 = (inst_35350 < inst_35349);
var inst_35353 = inst_35352;
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35353)){
var statearr_35550_35620 = state_35486__$1;
(statearr_35550_35620[(1)] = (7));

} else {
var statearr_35551_35621 = state_35486__$1;
(statearr_35551_35621[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (14))){
var inst_35360 = (state_35486[(22)]);
var inst_35369 = cljs.core.first.call(null,inst_35360);
var inst_35370 = figwheel.client.file_reloading.eval_body.call(null,inst_35369,opts);
var inst_35371 = cljs.core.next.call(null,inst_35360);
var inst_35347 = inst_35371;
var inst_35348 = null;
var inst_35349 = (0);
var inst_35350 = (0);
var state_35486__$1 = (function (){var statearr_35552 = state_35486;
(statearr_35552[(32)] = inst_35370);

(statearr_35552[(7)] = inst_35347);

(statearr_35552[(8)] = inst_35349);

(statearr_35552[(9)] = inst_35350);

(statearr_35552[(10)] = inst_35348);

return statearr_35552;
})();
var statearr_35553_35622 = state_35486__$1;
(statearr_35553_35622[(2)] = null);

(statearr_35553_35622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (45))){
var state_35486__$1 = state_35486;
var statearr_35554_35623 = state_35486__$1;
(statearr_35554_35623[(2)] = null);

(statearr_35554_35623[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (26))){
var inst_35403 = (state_35486[(23)]);
var inst_35408 = (state_35486[(24)]);
var inst_35404 = (state_35486[(25)]);
var inst_35406 = (state_35486[(26)]);
var inst_35400 = (state_35486[(19)]);
var inst_35423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35425 = (function (){var all_files = inst_35400;
var res_SINGLEQUOTE_ = inst_35403;
var res = inst_35404;
var files_not_loaded = inst_35406;
var dependencies_that_loaded = inst_35408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35406,inst_35400,inst_35423,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35424){
var map__35555 = p__35424;
var map__35555__$1 = ((((!((map__35555 == null)))?((((map__35555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35555):map__35555);
var namespace = cljs.core.get.call(null,map__35555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35406,inst_35400,inst_35423,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35426 = cljs.core.map.call(null,inst_35425,inst_35404);
var inst_35427 = cljs.core.pr_str.call(null,inst_35426);
var inst_35428 = figwheel.client.utils.log.call(null,inst_35427);
var inst_35429 = (function (){var all_files = inst_35400;
var res_SINGLEQUOTE_ = inst_35403;
var res = inst_35404;
var files_not_loaded = inst_35406;
var dependencies_that_loaded = inst_35408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35406,inst_35400,inst_35423,inst_35425,inst_35426,inst_35427,inst_35428,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35408,inst_35404,inst_35406,inst_35400,inst_35423,inst_35425,inst_35426,inst_35427,inst_35428,state_val_35487,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35430 = setTimeout(inst_35429,(10));
var state_35486__$1 = (function (){var statearr_35557 = state_35486;
(statearr_35557[(33)] = inst_35428);

(statearr_35557[(34)] = inst_35423);

return statearr_35557;
})();
var statearr_35558_35624 = state_35486__$1;
(statearr_35558_35624[(2)] = inst_35430);

(statearr_35558_35624[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (16))){
var state_35486__$1 = state_35486;
var statearr_35559_35625 = state_35486__$1;
(statearr_35559_35625[(2)] = reload_dependents);

(statearr_35559_35625[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (38))){
var inst_35440 = (state_35486[(16)]);
var inst_35457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35440);
var state_35486__$1 = state_35486;
var statearr_35560_35626 = state_35486__$1;
(statearr_35560_35626[(2)] = inst_35457);

(statearr_35560_35626[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (30))){
var state_35486__$1 = state_35486;
var statearr_35561_35627 = state_35486__$1;
(statearr_35561_35627[(2)] = null);

(statearr_35561_35627[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (10))){
var inst_35360 = (state_35486[(22)]);
var inst_35362 = cljs.core.chunked_seq_QMARK_.call(null,inst_35360);
var state_35486__$1 = state_35486;
if(inst_35362){
var statearr_35562_35628 = state_35486__$1;
(statearr_35562_35628[(1)] = (13));

} else {
var statearr_35563_35629 = state_35486__$1;
(statearr_35563_35629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (18))){
var inst_35394 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35394)){
var statearr_35564_35630 = state_35486__$1;
(statearr_35564_35630[(1)] = (19));

} else {
var statearr_35565_35631 = state_35486__$1;
(statearr_35565_35631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (42))){
var state_35486__$1 = state_35486;
var statearr_35566_35632 = state_35486__$1;
(statearr_35566_35632[(2)] = null);

(statearr_35566_35632[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (37))){
var inst_35452 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35567_35633 = state_35486__$1;
(statearr_35567_35633[(2)] = inst_35452);

(statearr_35567_35633[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (8))){
var inst_35347 = (state_35486[(7)]);
var inst_35360 = (state_35486[(22)]);
var inst_35360__$1 = cljs.core.seq.call(null,inst_35347);
var state_35486__$1 = (function (){var statearr_35568 = state_35486;
(statearr_35568[(22)] = inst_35360__$1);

return statearr_35568;
})();
if(inst_35360__$1){
var statearr_35569_35634 = state_35486__$1;
(statearr_35569_35634[(1)] = (10));

} else {
var statearr_35570_35635 = state_35486__$1;
(statearr_35570_35635[(1)] = (11));

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
});})(c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20501__auto__,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0 = (function (){
var statearr_35574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35574[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__);

(statearr_35574[(1)] = (1));

return statearr_35574;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1 = (function (state_35486){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_35486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e35575){if((e35575 instanceof Object)){
var ex__20505__auto__ = e35575;
var statearr_35576_35636 = state_35486;
(statearr_35576_35636[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35637 = state_35486;
state_35486 = G__35637;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__ = function(state_35486){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1.call(this,state_35486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20615__auto__ = (function (){var statearr_35577 = f__20614__auto__.call(null);
(statearr_35577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_35577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__,map__35332,map__35332__$1,opts,before_jsload,on_jsload,reload_dependents,map__35333,map__35333__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20613__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35640,link){
var map__35643 = p__35640;
var map__35643__$1 = ((((!((map__35643 == null)))?((((map__35643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35643):map__35643);
var file = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35643,map__35643__$1,file){
return (function (p1__35638_SHARP_,p2__35639_SHARP_){
if(cljs.core._EQ_.call(null,p1__35638_SHARP_,p2__35639_SHARP_)){
return p1__35638_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35643,map__35643__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35649){
var map__35650 = p__35649;
var map__35650__$1 = ((((!((map__35650 == null)))?((((map__35650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35650):map__35650);
var match_length = cljs.core.get.call(null,map__35650__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35650__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35645_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35645_SHARP_);
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
var args35652 = [];
var len__19487__auto___35655 = arguments.length;
var i__19488__auto___35656 = (0);
while(true){
if((i__19488__auto___35656 < len__19487__auto___35655)){
args35652.push((arguments[i__19488__auto___35656]));

var G__35657 = (i__19488__auto___35656 + (1));
i__19488__auto___35656 = G__35657;
continue;
} else {
}
break;
}

var G__35654 = args35652.length;
switch (G__35654) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35652.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35659_SHARP_,p2__35660_SHARP_){
return cljs.core.assoc.call(null,p1__35659_SHARP_,cljs.core.get.call(null,p2__35660_SHARP_,key),p2__35660_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35661){
var map__35664 = p__35661;
var map__35664__$1 = ((((!((map__35664 == null)))?((((map__35664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35664):map__35664);
var f_data = map__35664__$1;
var file = cljs.core.get.call(null,map__35664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35666,files_msg){
var map__35673 = p__35666;
var map__35673__$1 = ((((!((map__35673 == null)))?((((map__35673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35673):map__35673);
var opts = map__35673__$1;
var on_cssload = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35675_35679 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35676_35680 = null;
var count__35677_35681 = (0);
var i__35678_35682 = (0);
while(true){
if((i__35678_35682 < count__35677_35681)){
var f_35683 = cljs.core._nth.call(null,chunk__35676_35680,i__35678_35682);
figwheel.client.file_reloading.reload_css_file.call(null,f_35683);

var G__35684 = seq__35675_35679;
var G__35685 = chunk__35676_35680;
var G__35686 = count__35677_35681;
var G__35687 = (i__35678_35682 + (1));
seq__35675_35679 = G__35684;
chunk__35676_35680 = G__35685;
count__35677_35681 = G__35686;
i__35678_35682 = G__35687;
continue;
} else {
var temp__4657__auto___35688 = cljs.core.seq.call(null,seq__35675_35679);
if(temp__4657__auto___35688){
var seq__35675_35689__$1 = temp__4657__auto___35688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35675_35689__$1)){
var c__19228__auto___35690 = cljs.core.chunk_first.call(null,seq__35675_35689__$1);
var G__35691 = cljs.core.chunk_rest.call(null,seq__35675_35689__$1);
var G__35692 = c__19228__auto___35690;
var G__35693 = cljs.core.count.call(null,c__19228__auto___35690);
var G__35694 = (0);
seq__35675_35679 = G__35691;
chunk__35676_35680 = G__35692;
count__35677_35681 = G__35693;
i__35678_35682 = G__35694;
continue;
} else {
var f_35695 = cljs.core.first.call(null,seq__35675_35689__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35695);

var G__35696 = cljs.core.next.call(null,seq__35675_35689__$1);
var G__35697 = null;
var G__35698 = (0);
var G__35699 = (0);
seq__35675_35679 = G__35696;
chunk__35676_35680 = G__35697;
count__35677_35681 = G__35698;
i__35678_35682 = G__35699;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35673,map__35673__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35673,map__35673__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map