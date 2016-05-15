// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.background.storage');
goog.require('cljs.core');
goog.require('cljs_idxdb.core');
goog.require('goog.Uri');
goog.require('ajax.core');
goog.require('thesis.background.location');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('chromex.ext.extension');
goog.require('clojure.string');
thesis.background.storage.db = cljs.core.atom.call(null,null);
thesis.background.storage.dexie = cljs.core.atom.call(null,null);
thesis.background.storage.psldb = cljs.core.atom.call(null,null);
thesis.background.storage.tabdict = cljs.core.atom.call(null,null);
thesis.background.storage.tabdict_remove_client = (function thesis$background$storage$tabdict_remove_client(client){
return cljs.core.swap_BANG_.call(null,thesis.background.storage.tabdict,cljs.core.dissoc,client);
});
thesis.background.storage.tabdict_add_client = (function thesis$background$storage$tabdict_add_client(client){
return cljs.core.swap_BANG_.call(null,thesis.background.storage.tabdict,cljs.core.assoc,client,cljs.core.PersistentHashSet.EMPTY);
});
thesis.background.storage.get_tabdict = (function thesis$background$storage$get_tabdict(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,thesis.background.storage.tabdict),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
});
thesis.background.storage.location = cljs.core.atom.call(null,null);
thesis.background.storage.store_name = "requests";
thesis.background.storage.setup_storage_BANG_ = (function thesis$background$storage$setup_storage_BANG_(){
return cljs_idxdb.core.create_db.call(null,"requestsDB",(1),(function (p1__23752_SHARP_){
var store = cljs_idxdb.core.delete_and_create_store.call(null,p1__23752_SHARP_,thesis.background.storage.store_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyPath","keyPath",-1845944323),"timestamp"], null));
cljs_idxdb.core.create_index.call(null,store,"hostnameIndex","hostname",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique","unique",329397282),false], null));

cljs_idxdb.core.create_index.call(null,store,"domainIndex","domain",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique","unique",329397282),false], null));

cljs_idxdb.core.create_index.call(null,store,"locationIndex","location",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique","unique",329397282),false], null));

cljs_idxdb.core.create_index.call(null,store,"tabUrlIndex","tabUrl",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique","unique",329397282),false], null));

return cljs_idxdb.core.create_index.call(null,store,"timestampIndex","timestamp",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique","unique",329397282),false], null));
}),(function (res){
return cljs.core.reset_BANG_.call(null,thesis.background.storage.db,res);
}));
});
thesis.background.storage.get_domain = (function thesis$background$storage$get_domain(host){
var host_array = clojure.string.split.call(null,host,".");
var l = cljs.core.count.call(null,host_array);
var i = l;
while(true){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,thesis.background.storage.psldb),clojure.string.join.call(null,".",cljs.core.take_last.call(null,i,host_array)))){
return clojure.string.join.call(null,".",cljs.core.take_last.call(null,(i + (1)),host_array));
} else {
if((i > (0))){
var G__23753 = (i - (1));
i = G__23753;
continue;
} else {
return null;
}
}
break;
}
});
thesis.background.storage.store_request_BANG_ = (function thesis$background$storage$store_request_BANG_(r,domain,loc,tabUrl){
return cljs_idxdb.core.add_item.call(null,cljs.core.deref.call(null,thesis.background.storage.db),thesis.background.storage.store_name,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),r.url,new cljs.core.Keyword(null,"domain","domain",1847214937),domain,new cljs.core.Keyword(null,"tabUrl","tabUrl",-1117960037),thesis.background.storage.get_domain.call(null,(new goog.Uri(tabUrl)).getDomain()),new cljs.core.Keyword(null,"location","location",1815599388),(((loc == null))?(function (){
thesis.background.location.force_get_location_BANG_.call(null);

return [cljs.core.str("")].join('');
})()
:[cljs.core.str(loc.lat),cljs.core.str("|"),cljs.core.str(loc.lon),cljs.core.str("|"),cljs.core.str(loc.acc)].join('')),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),r.timeStamp], null),(function (){
return cljs.core.List.EMPTY;
}));
});
thesis.background.storage.get_and_store_psl_BANG_ = (function thesis$background$storage$get_and_store_psl_BANG_(){
return ajax.core.GET.call(null,"assets/publicSuffixList.dat",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (e){
return cljs.core.reset_BANG_.call(null,thesis.background.storage.psldb,cljs.core.set.call(null,clojure.string.split_lines.call(null,e)));
})], null));
});
thesis.background.storage.process_request_BANG_ = (function thesis$background$storage$process_request_BANG_(r,loc,tabUrl){
var ts = r.timeStamp;
var host = (new goog.Uri(r.url)).getDomain();
var domain = thesis.background.storage.get_domain.call(null,host);
var tab_id = r.tabId;
if(!((cljs.core._EQ_.call(null,tab_id,(-1))) || (cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,thesis.background.storage.tabdict),tab_id),domain)))){
cljs.core.swap_BANG_.call(null,thesis.background.storage.tabdict,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_id], null),((function (ts,host,domain,tab_id){
return (function (p1__23754_SHARP_){
return cljs.core.set.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,p1__23754_SHARP_),domain));
});})(ts,host,domain,tab_id))
);

console.log("storing ",domain," on ",tabUrl);


return thesis.background.storage.store_request_BANG_.call(null,r,domain,loc,tabUrl);
} else {
return null;
}
});
thesis.background.storage.get_domain_count = (function thesis$background$storage$get_domain_count(domain,cb){
return cljs_idxdb.core.get_by_index.call(null,cljs.core.deref.call(null,thesis.background.storage.db),thesis.background.storage.store_name,"domainIndex",domain,(function (p1__23755_SHARP_){
return cb.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"count-res",new cljs.core.Keyword(null,"domain","domain",1847214937),domain,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count.call(null,p1__23755_SHARP_)], null)));
}));
});
thesis.background.storage.get_all_for_index = (function thesis$background$storage$get_all_for_index(res_chan,idx,value){
var req = cljs_idxdb.core.get_tx_store.call(null,cljs.core.deref.call(null,thesis.background.storage.db),thesis.background.storage.store_name).index(idx).openCursor(IDBKeyRange.only(value),"next");
return req.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,req,((function (req){
return (function (p1__23756_SHARP_){
return cljs.core.async.put_BANG_.call(null,res_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"restype","restype",1458513241),[cljs.core.str("all-for-"),cljs.core.str(idx)].join(''),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"data","data",-232669377),p1__23756_SHARP_], null));
});})(req))
);
});
thesis.background.storage.get_all_for_domain = (function thesis$background$storage$get_all_for_domain(res_chan,domain,typ){
var req = cljs_idxdb.core.get_tx_store.call(null,cljs.core.deref.call(null,thesis.background.storage.db),thesis.background.storage.store_name).index("domainIndex").openCursor(IDBKeyRange.only(domain),"next");
return req.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,req,((function (req){
return (function (p1__23757_SHARP_){
return cljs.core.async.put_BANG_.call(null,res_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"restype","restype",1458513241),"all-for-domain",new cljs.core.Keyword(null,"typ","typ",-1304536900),typ,new cljs.core.Keyword(null,"domain","domain",1847214937),domain,new cljs.core.Keyword(null,"data","data",-232669377),p1__23757_SHARP_], null));
});})(req))
);
});
thesis.background.storage.get_distinct_index = (function thesis$background$storage$get_distinct_index(idx,kw,callback){
var req = cljs_idxdb.core.get_tx_store.call(null,cljs.core.deref.call(null,thesis.background.storage.db),thesis.background.storage.store_name).index(idx).openCursor(thesis.background.storage.null$,"nextunique");
return req.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,req,((function (req){
return (function (p1__23758_SHARP_){
return callback.call(null,cljs.core.doall.call(null,cljs.core.reduce.call(null,((function (req){
return (function (p,n){
return cljs.core.conj.call(null,p,cljs.core.get.call(null,n,kw));
});})(req))
,cljs.core.PersistentVector.EMPTY,p1__23758_SHARP_)));
});})(req))
);
});
thesis.background.storage.get_distinct_index_with_counts = (function thesis$background$storage$get_distinct_index_with_counts(idx,kw,callback){
var req = cljs_idxdb.core.get_tx_store.call(null,cljs.core.deref.call(null,thesis.background.storage.db),thesis.background.storage.store_name).index(idx).openCursor(thesis.background.storage.null$,"next");
return req.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,req,((function (req){
return (function (p1__23759_SHARP_){
return callback.call(null,cljs.core.doall.call(null,cljs.core.reduce.call(null,((function (req){
return (function (p,n){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,n,kw),"")){
return p;
} else {
return cljs.core.update_in.call(null,p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,n,kw)], null),cljs.core.inc);
}
});})(req))
,cljs.core.PersistentArrayMap.EMPTY,p1__23759_SHARP_)));
});})(req))
);
});
thesis.background.storage.get_location_counts = (function thesis$background$storage$get_location_counts(res_chan){
return thesis.background.storage.get_distinct_index_with_counts.call(null,"locationIndex",new cljs.core.Keyword(null,"location","location",1815599388),(function (p1__23760_SHARP_){
var x = cljs.core.reduce.call(null,(function (p,n){
var arr = cljs.core.vec.call(null,cljs.core.map.call(null,(function (e){
return cljs.core.subs.call(null,e,(0),(7));
}),clojure.string.split.call(null,cljs.core.first.call(null,n),/\|/)));
var kw = clojure.string.join.call(null,"|",cljs.core.subvec.call(null,arr,(0),(2)));
return cljs.core.update.call(null,p,kw,((function (arr,kw){
return (function (){
return (cljs.core.last.call(null,n) + cljs.core.get.call(null,p,kw));
});})(arr,kw))
);
}),cljs.core.PersistentArrayMap.EMPTY,p1__23760_SHARP_);
return cljs.core.async.put_BANG_.call(null,res_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restype","restype",1458513241),"location-counts",new cljs.core.Keyword(null,"data","data",-232669377),x], null));
}));
});
thesis.background.storage.get_distinct_locations = (function thesis$background$storage$get_distinct_locations(res_chan){
return thesis.background.storage.get_distinct_index.call(null,"locationIndex",new cljs.core.Keyword(null,"location","location",1815599388),(function (p1__23761_SHARP_){
return cljs.core.async.put_BANG_.call(null,res_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restype","restype",1458513241),"distinct-locations",new cljs.core.Keyword(null,"data","data",-232669377),p1__23761_SHARP_], null));
}));
});
thesis.background.storage.get_distinct_domains = (function thesis$background$storage$get_distinct_domains(res_chan){
return thesis.background.storage.get_distinct_index_with_counts.call(null,"domainIndex",new cljs.core.Keyword(null,"domain","domain",1847214937),(function (p1__23762_SHARP_){
return cljs.core.async.put_BANG_.call(null,res_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restype","restype",1458513241),"distinct-domains",new cljs.core.Keyword(null,"data","data",-232669377),p1__23762_SHARP_], null));
}));
});
thesis.background.storage.get_site_info = (function thesis$background$storage$get_site_info(res_chan,domain){
return thesis.background.storage.get_all_for_index.call(null,res_chan,"tabUrlIndex",domain);
});

//# sourceMappingURL=storage.js.map