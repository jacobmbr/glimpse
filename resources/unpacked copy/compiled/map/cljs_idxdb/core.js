// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_idxdb.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs_idxdb.core.pprint = (function cljs_idxdb$core$pprint(o){
return cljs.core.println.call(null,JSON.stringify.call(null,o,null,(2)));
});
cljs_idxdb.core.log = (function cljs_idxdb$core$log(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30138 = arguments.length;
var i__19488__auto___30139 = (0);
while(true){
if((i__19488__auto___30139 < len__19487__auto___30138)){
args__19494__auto__.push((arguments[i__19488__auto___30139]));

var G__30140 = (i__19488__auto___30139 + (1));
i__19488__auto___30139 = G__30140;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return cljs_idxdb.core.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

cljs_idxdb.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.call(null,cljs.core.str,v,text):v);
console.log(vs);

return v;
});

cljs_idxdb.core.log.cljs$lang$maxFixedArity = (1);

cljs_idxdb.core.log.cljs$lang$applyTo = (function (seq30136){
var G__30137 = cljs.core.first.call(null,seq30136);
var seq30136__$1 = cljs.core.next.call(null,seq30136);
return cljs_idxdb.core.log.cljs$core$IFn$_invoke$arity$variadic(G__30137,seq30136__$1);
});
cljs_idxdb.core.get_target_result = (function cljs_idxdb$core$get_target_result(e){
return e.target.result;
});
cljs_idxdb.core.error_callback = (function cljs_idxdb$core$error_callback(e){
cljs_idxdb.core.log.call(null,"error occurred");

return cljs_idxdb.core.log.call(null,e);
});
cljs_idxdb.core.delete_store = (function cljs_idxdb$core$delete_store(db,name){
if(cljs.core.truth_(db.objectStoreNames.contains(name))){
return db.deleteObjectStore(name);
} else {
return null;
}
});
cljs_idxdb.core.create_store = (function cljs_idxdb$core$create_store(db,name,opts){
return db.createObjectStore(name,cljs.core.clj__GT_js.call(null,opts));
});
cljs_idxdb.core.delete_and_create_store = (function cljs_idxdb$core$delete_and_create_store(db,name,opts){
cljs_idxdb.core.delete_store.call(null,db,name);

return cljs_idxdb.core.create_store.call(null,db,name,opts);
});
cljs_idxdb.core.create_index = (function cljs_idxdb$core$create_index(store,name,field,opts){
return store.createIndex(name,field,cljs.core.clj__GT_js.call(null,opts));
});
cljs_idxdb.core.create_db = (function cljs_idxdb$core$create_db(name,version,upgrade_fn,success_fn){
var request = indexedDB.open(name,version);
request.onsuccess = cljs.core.comp.call(null,success_fn,cljs_idxdb.core.get_target_result);

request.onupgradeneeded = cljs.core.comp.call(null,upgrade_fn,cljs_idxdb.core.get_target_result);

return request.onerror = cljs_idxdb.core.error_callback;
});
cljs_idxdb.core.add_item = (function cljs_idxdb$core$add_item(db,store_name,item,success_fn){
if(cljs.core.truth_(db)){
var item__$1 = cljs.core.clj__GT_js.call(null,item);
var tx = db.transaction(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),"readwrite");
var store = tx.objectStore(store_name);
var request = store.put(item__$1);
return request.onsuccess = success_fn;
} else {
return null;
}
});
cljs_idxdb.core.make_rec_acc_fn = (function cljs_idxdb$core$make_rec_acc_fn(acc,request,success_fn){
return (function (e){
var temp__4655__auto__ = cljs_idxdb.core.get_target_result.call(null,e);
if(cljs.core.truth_(temp__4655__auto__)){
var cursor = temp__4655__auto__;
request.onsuccess = cljs_idxdb$core$make_rec_acc_fn.call(null,cljs.core.conj.call(null,acc,cljs.core.js__GT_clj.call(null,cursor.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),request,success_fn);

return cursor.continue();
} else {
return success_fn.call(null,acc);
}
});
});
cljs_idxdb.core.make_tx = (function cljs_idxdb$core$make_tx(var_args){
var args30141 = [];
var len__19487__auto___30144 = arguments.length;
var i__19488__auto___30145 = (0);
while(true){
if((i__19488__auto___30145 < len__19487__auto___30144)){
args30141.push((arguments[i__19488__auto___30145]));

var G__30146 = (i__19488__auto___30145 + (1));
i__19488__auto___30145 = G__30146;
continue;
} else {
}
break;
}

var G__30143 = args30141.length;
switch (G__30143) {
case 2:
return cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30141.length)].join('')));

}
});

cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$2 = (function (db,store_name){
return cljs_idxdb.core.make_tx.call(null,db,store_name,true);
});

cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$3 = (function (db,store_name,readwrite_QMARK_){
return db.transaction(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),(cljs.core.truth_(readwrite_QMARK_)?"readwrite":"readonly"));
});

cljs_idxdb.core.make_tx.cljs$lang$maxFixedArity = 3;
cljs_idxdb.core.get_tx_store = (function cljs_idxdb$core$get_tx_store(db,store_name){
var tx = cljs_idxdb.core.make_tx.call(null,db,store_name);
return tx.objectStore(store_name);
});
cljs_idxdb.core.make_range = (function cljs_idxdb$core$make_range(var_args){
var args30148 = [];
var len__19487__auto___30151 = arguments.length;
var i__19488__auto___30152 = (0);
while(true){
if((i__19488__auto___30152 < len__19487__auto___30151)){
args30148.push((arguments[i__19488__auto___30152]));

var G__30153 = (i__19488__auto___30152 + (1));
i__19488__auto___30152 = G__30153;
continue;
} else {
}
break;
}

var G__30150 = args30148.length;
switch (G__30150) {
case 1:
return cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30148.length)].join('')));

}
});

cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$1 = (function (only){
return IDBKeyRange.only(only);
});

cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$3 = (function (lower_QMARK_,bound,open_QMARK_){
if(cljs.core.truth_(lower_QMARK_)){
return IDBKeyRange.lowerBound(bound,open_QMARK_);
} else {
return IDBKeyRange.upperBound(bound,open_QMARK_);
}
});

cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$4 = (function (lower,upper,open_lower_QMARK_,open_upper_QMARK_){
return IDBKeyRange.bound(lower,cljs_idxdb.core.uppoer,open_lower_QMARK_,open_upper_QMARK_);
});

cljs_idxdb.core.make_range.cljs$lang$maxFixedArity = 4;
cljs_idxdb.core.open_cursor = (function cljs_idxdb$core$open_cursor(store_or_index,range){
return store_or_index.openCursor(range);
});
cljs_idxdb.core.get_index = (function cljs_idxdb$core$get_index(store,index_name){
return store.index(index_name);
});
cljs_idxdb.core.get_all = (function cljs_idxdb$core$get_all(var_args){
var args30155 = [];
var len__19487__auto___30158 = arguments.length;
var i__19488__auto___30159 = (0);
while(true){
if((i__19488__auto___30159 < len__19487__auto___30158)){
args30155.push((arguments[i__19488__auto___30159]));

var G__30160 = (i__19488__auto___30159 + (1));
i__19488__auto___30159 = G__30160;
continue;
} else {
}
break;
}

var G__30157 = args30155.length;
switch (G__30157) {
case 3:
return cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30155.length)].join('')));

}
});

cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$3 = (function (db,store_name,success_fn){
return cljs_idxdb.core.get_all.call(null,db,store_name,(0),success_fn);
});

cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$4 = (function (db,store_name,initial_key,success_fn){
if(cljs.core.truth_(db)){
var store = cljs_idxdb.core.get_tx_store.call(null,db,store_name);
var range = cljs_idxdb.core.make_range.call(null,true,initial_key,false);
var request = cljs_idxdb.core.open_cursor.call(null,store,range);
return request.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,request,success_fn);
} else {
return null;
}
});

cljs_idxdb.core.get_all.cljs$lang$maxFixedArity = 4;
cljs_idxdb.core.get_by_key = (function cljs_idxdb$core$get_by_key(db,store_name,key,success_fn){
if(cljs.core.truth_(db)){
var store = cljs_idxdb.core.get_tx_store.call(null,db,store_name);
var request = store.get(key);
return request.onsuccess = ((function (store,request){
return (function (e){
return success_fn.call(null,cljs.core.js__GT_clj.call(null,cljs_idxdb.core.get_target_result.call(null,e),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(store,request))
;
} else {
return null;
}
});
cljs_idxdb.core.get_by_index = (function cljs_idxdb$core$get_by_index(db,store_name,index_name,initial_key,success_fn){
if(cljs.core.truth_(db)){
var store = cljs_idxdb.core.get_tx_store.call(null,db,store_name);
var index = cljs_idxdb.core.get_index.call(null,store,index_name);
var range = cljs_idxdb.core.make_range.call(null,true,initial_key,false);
var request = cljs_idxdb.core.open_cursor.call(null,index,range);
return request.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,request,success_fn);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map