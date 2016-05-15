// Compiled by ClojureScript 1.8.51 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__6871__auto__ = (((evt == null))?null:evt);
var m__6872__auto__ = (domina.events.prevent_default[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,evt);
} else {
var m__6872__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__6871__auto__ = (((evt == null))?null:evt);
var m__6872__auto__ = (domina.events.stop_propagation[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,evt);
} else {
var m__6872__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__6871__auto__ = (((evt == null))?null:evt);
var m__6872__auto__ = (domina.events.target[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,evt);
} else {
var m__6872__auto____$1 = (domina.events.target["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__6871__auto__ = (((evt == null))?null:evt);
var m__6872__auto__ = (domina.events.current_target[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,evt);
} else {
var m__6872__auto____$1 = (domina.events.current_target["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__6871__auto__ = (((evt == null))?null:evt);
var m__6872__auto__ = (domina.events.event_type[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,evt);
} else {
var m__6872__auto____$1 = (domina.events.event_type["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__6871__auto__ = (((evt == null))?null:evt);
var m__6872__auto__ = (domina.events.raw_event[goog.typeOf(x__6871__auto__)]);
if(!((m__6872__auto__ == null))){
return m__6872__auto__.call(null,evt);
} else {
var m__6872__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__6872__auto____$1 == null))){
return m__6872__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events14428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events14428 = (function (create_listener_function,f,evt,meta14429){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta14429 = meta14429;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events14428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14430,meta14429__$1){
var self__ = this;
var _14430__$1 = this;
return (new domina.events.t_domina$events14428(self__.create_listener_function,self__.f,self__.evt,meta14429__$1));
});

domina.events.t_domina$events14428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14430){
var self__ = this;
var _14430__$1 = this;
return self__.meta14429;
});

domina.events.t_domina$events14428.prototype.domina$events$Event$ = true;

domina.events.t_domina$events14428.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events14428.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events14428.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events14428.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events14428.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events14428.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events14428.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4655__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events14428.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__6208__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__6208__auto__)){
return or__6208__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events14428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta14429","meta14429",311432770,null)], null);
});

domina.events.t_domina$events14428.cljs$lang$type = true;

domina.events.t_domina$events14428.cljs$lang$ctorStr = "domina.events/t_domina$events14428";

domina.events.t_domina$events14428.cljs$lang$ctorPrWriter = (function (this__6814__auto__,writer__6815__auto__,opt__6816__auto__){
return cljs.core._write.call(null,writer__6815__auto__,"domina.events/t_domina$events14428");
});

domina.events.__GT_t_domina$events14428 = (function domina$events$create_listener_function_$___GT_t_domina$events14428(create_listener_function__$1,f__$1,evt__$1,meta14429){
return (new domina.events.t_domina$events14428(create_listener_function__$1,f__$1,evt__$1,meta14429));
});

}

return (new domina.events.t_domina$events14428(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__6988__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__14512(s__14513){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__14513__$1 = s__14513;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14513__$1);
if(temp__4657__auto__){
var s__14513__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14513__$2)){
var c__6986__auto__ = cljs.core.chunk_first.call(null,s__14513__$2);
var size__6987__auto__ = cljs.core.count.call(null,c__6986__auto__);
var b__14515 = cljs.core.chunk_buffer.call(null,size__6987__auto__);
if((function (){var i__14514 = (0);
while(true){
if((i__14514 < size__6987__auto__)){
var node = cljs.core._nth.call(null,c__6986__auto__,i__14514);
cljs.core.chunk_append.call(null,b__14515,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__14516 = (i__14514 + (1));
i__14514 = G__14516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14515),domina$events$listen_internal_BANG__$_iter__14512.call(null,cljs.core.chunk_rest.call(null,s__14513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14515),null);
}
} else {
var node = cljs.core.first.call(null,s__14513__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__14512.call(null,cljs.core.rest.call(null,s__14513__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__6988__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args14588 = [];
var len__7278__auto___14591 = arguments.length;
var i__7279__auto___14592 = (0);
while(true){
if((i__7279__auto___14592 < len__7278__auto___14591)){
args14588.push((arguments[i__7279__auto___14592]));

var G__14614 = (i__7279__auto___14592 + (1));
i__7279__auto___14592 = G__14614;
continue;
} else {
}
break;
}

var G__14590 = args14588.length;
switch (G__14590) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14588.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var args14629 = [];
var len__7278__auto___14634 = arguments.length;
var i__7279__auto___14635 = (0);
while(true){
if((i__7279__auto___14635 < len__7278__auto___14634)){
args14629.push((arguments[i__7279__auto___14635]));

var G__14636 = (i__7279__auto___14635 + (1));
i__7279__auto___14635 = G__14636;
continue;
} else {
}
break;
}

var G__14633 = args14629.length;
switch (G__14633) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14629.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var args14642 = [];
var len__7278__auto___14649 = arguments.length;
var i__7279__auto___14650 = (0);
while(true){
if((i__7279__auto___14650 < len__7278__auto___14649)){
args14642.push((arguments[i__7279__auto___14650]));

var G__14651 = (i__7279__auto___14650 + (1));
i__7279__auto___14650 = G__14651;
continue;
} else {
}
break;
}

var G__14648 = args14642.length;
switch (G__14648) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14642.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var args14659 = [];
var len__7278__auto___14673 = arguments.length;
var i__7279__auto___14674 = (0);
while(true){
if((i__7279__auto___14674 < len__7278__auto___14673)){
args14659.push((arguments[i__7279__auto___14674]));

var G__14676 = (i__7279__auto___14674 + (1));
i__7279__auto___14674 = G__14676;
continue;
} else {
}
break;
}

var G__14670 = args14659.length;
switch (G__14670) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14659.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var args14686 = [];
var len__7278__auto___14701 = arguments.length;
var i__7279__auto___14702 = (0);
while(true){
if((i__7279__auto___14702 < len__7278__auto___14701)){
args14686.push((arguments[i__7279__auto___14702]));

var G__14703 = (i__7279__auto___14702 + (1));
i__7279__auto___14702 = G__14703;
continue;
} else {
}
break;
}

var G__14688 = args14686.length;
switch (G__14688) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14686.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__14691 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__14692 = null;
var count__14693 = (0);
var i__14694 = (0);
while(true){
if((i__14694 < count__14693)){
var node = cljs.core._nth.call(null,chunk__14692,i__14694);
goog.events.removeAll(node);

var G__14705 = seq__14691;
var G__14706 = chunk__14692;
var G__14707 = count__14693;
var G__14708 = (i__14694 + (1));
seq__14691 = G__14705;
chunk__14692 = G__14706;
count__14693 = G__14707;
i__14694 = G__14708;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14691);
if(temp__4657__auto__){
var seq__14691__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14691__$1)){
var c__7019__auto__ = cljs.core.chunk_first.call(null,seq__14691__$1);
var G__14709 = cljs.core.chunk_rest.call(null,seq__14691__$1);
var G__14710 = c__7019__auto__;
var G__14711 = cljs.core.count.call(null,c__7019__auto__);
var G__14712 = (0);
seq__14691 = G__14709;
chunk__14692 = G__14710;
count__14693 = G__14711;
i__14694 = G__14712;
continue;
} else {
var node = cljs.core.first.call(null,seq__14691__$1);
goog.events.removeAll(node);

var G__14714 = cljs.core.next.call(null,seq__14691__$1);
var G__14715 = null;
var G__14716 = (0);
var G__14717 = (0);
seq__14691 = G__14714;
chunk__14692 = G__14715;
count__14693 = G__14716;
i__14694 = G__14717;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__14697 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__14698 = null;
var count__14699 = (0);
var i__14700 = (0);
while(true){
if((i__14700 < count__14699)){
var node = cljs.core._nth.call(null,chunk__14698,i__14700);
goog.events.removeAll(node,type__$1);

var G__14722 = seq__14697;
var G__14723 = chunk__14698;
var G__14724 = count__14699;
var G__14725 = (i__14700 + (1));
seq__14697 = G__14722;
chunk__14698 = G__14723;
count__14699 = G__14724;
i__14700 = G__14725;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14697);
if(temp__4657__auto__){
var seq__14697__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14697__$1)){
var c__7019__auto__ = cljs.core.chunk_first.call(null,seq__14697__$1);
var G__14728 = cljs.core.chunk_rest.call(null,seq__14697__$1);
var G__14729 = c__7019__auto__;
var G__14730 = cljs.core.count.call(null,c__7019__auto__);
var G__14731 = (0);
seq__14697 = G__14728;
chunk__14698 = G__14729;
count__14699 = G__14730;
i__14700 = G__14731;
continue;
} else {
var node = cljs.core.first.call(null,seq__14697__$1);
goog.events.removeAll(node,type__$1);

var G__14732 = cljs.core.next.call(null,seq__14697__$1);
var G__14733 = null;
var G__14734 = (0);
var G__14735 = (0);
seq__14697 = G__14732;
chunk__14698 = G__14733;
count__14699 = G__14734;
i__14700 = G__14735;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var args14736 = [];
var len__7278__auto___14739 = arguments.length;
var i__7279__auto___14740 = (0);
while(true){
if((i__7279__auto___14740 < len__7278__auto___14739)){
args14736.push((arguments[i__7279__auto___14740]));

var G__14741 = (i__7279__auto___14740 + (1));
i__7279__auto___14740 = G__14741;
continue;
} else {
}
break;
}

var G__14738 = args14736.length;
switch (G__14738) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14736.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4655__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
var G__14743 = parent;
var G__14744 = cljs.core.cons.call(null,parent,so_far);
n = G__14743;
so_far = G__14744;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.core.single_node.call(null,source));
var seq__14756_14764 = cljs.core.seq.call(null,ancestors);
var chunk__14757_14765 = null;
var count__14758_14766 = (0);
var i__14759_14767 = (0);
while(true){
if((i__14759_14767 < count__14758_14766)){
var n_14770 = cljs.core._nth.call(null,chunk__14757_14765,i__14759_14767);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_14770;

goog.events.fireListeners(n_14770,evt.type,true,evt);
}

var G__14772 = seq__14756_14764;
var G__14773 = chunk__14757_14765;
var G__14774 = count__14758_14766;
var G__14775 = (i__14759_14767 + (1));
seq__14756_14764 = G__14772;
chunk__14757_14765 = G__14773;
count__14758_14766 = G__14774;
i__14759_14767 = G__14775;
continue;
} else {
var temp__4657__auto___14776 = cljs.core.seq.call(null,seq__14756_14764);
if(temp__4657__auto___14776){
var seq__14756_14778__$1 = temp__4657__auto___14776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14756_14778__$1)){
var c__7019__auto___14780 = cljs.core.chunk_first.call(null,seq__14756_14778__$1);
var G__14782 = cljs.core.chunk_rest.call(null,seq__14756_14778__$1);
var G__14783 = c__7019__auto___14780;
var G__14784 = cljs.core.count.call(null,c__7019__auto___14780);
var G__14785 = (0);
seq__14756_14764 = G__14782;
chunk__14757_14765 = G__14783;
count__14758_14766 = G__14784;
i__14759_14767 = G__14785;
continue;
} else {
var n_14787 = cljs.core.first.call(null,seq__14756_14778__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_14787;

goog.events.fireListeners(n_14787,evt.type,true,evt);
}

var G__14788 = cljs.core.next.call(null,seq__14756_14778__$1);
var G__14789 = null;
var G__14790 = (0);
var G__14791 = (0);
seq__14756_14764 = G__14788;
chunk__14757_14765 = G__14789;
count__14758_14766 = G__14790;
i__14759_14767 = G__14791;
continue;
}
} else {
}
}
break;
}

var seq__14760_14792 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__14761_14793 = null;
var count__14762_14794 = (0);
var i__14763_14795 = (0);
while(true){
if((i__14763_14795 < count__14762_14794)){
var n_14796 = cljs.core._nth.call(null,chunk__14761_14793,i__14763_14795);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_14796;

goog.events.fireListeners(n_14796,evt.type,false,evt);
}

var G__14797 = seq__14760_14792;
var G__14798 = chunk__14761_14793;
var G__14799 = count__14762_14794;
var G__14800 = (i__14763_14795 + (1));
seq__14760_14792 = G__14797;
chunk__14761_14793 = G__14798;
count__14762_14794 = G__14799;
i__14763_14795 = G__14800;
continue;
} else {
var temp__4657__auto___14822 = cljs.core.seq.call(null,seq__14760_14792);
if(temp__4657__auto___14822){
var seq__14760_14823__$1 = temp__4657__auto___14822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14760_14823__$1)){
var c__7019__auto___14824 = cljs.core.chunk_first.call(null,seq__14760_14823__$1);
var G__14828 = cljs.core.chunk_rest.call(null,seq__14760_14823__$1);
var G__14829 = c__7019__auto___14824;
var G__14830 = cljs.core.count.call(null,c__7019__auto___14824);
var G__14831 = (0);
seq__14760_14792 = G__14828;
chunk__14761_14793 = G__14829;
count__14762_14794 = G__14830;
i__14763_14795 = G__14831;
continue;
} else {
var n_14832 = cljs.core.first.call(null,seq__14760_14823__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_14832;

goog.events.fireListeners(n_14832,evt.type,false,evt);
}

var G__14833 = cljs.core.next.call(null,seq__14760_14823__$1);
var G__14834 = null;
var G__14835 = (0);
var G__14836 = (0);
seq__14760_14792 = G__14833;
chunk__14761_14793 = G__14834;
count__14762_14794 = G__14835;
i__14763_14795 = G__14836;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__6196__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__6196__auto__)){
return o.dispatchEvent;
} else {
return and__6196__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args14839 = [];
var len__7278__auto___14851 = arguments.length;
var i__7279__auto___14852 = (0);
while(true){
if((i__7279__auto___14852 < len__7278__auto___14851)){
args14839.push((arguments[i__7279__auto___14852]));

var G__14853 = (i__7279__auto___14852 + (1));
i__7279__auto___14852 = G__14853;
continue;
} else {
}
break;
}

var G__14844 = args14839.length;
switch (G__14844) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14839.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__14845_14865 = cljs.core.seq.call(null,evt_map);
var chunk__14846_14866 = null;
var count__14847_14867 = (0);
var i__14848_14868 = (0);
while(true){
if((i__14848_14868 < count__14847_14867)){
var vec__14849_14872 = cljs.core._nth.call(null,chunk__14846_14866,i__14848_14868);
var k_14873 = cljs.core.nth.call(null,vec__14849_14872,(0),null);
var v_14874 = cljs.core.nth.call(null,vec__14849_14872,(1),null);
(evt[k_14873] = v_14874);

var G__14883 = seq__14845_14865;
var G__14884 = chunk__14846_14866;
var G__14885 = count__14847_14867;
var G__14886 = (i__14848_14868 + (1));
seq__14845_14865 = G__14883;
chunk__14846_14866 = G__14884;
count__14847_14867 = G__14885;
i__14848_14868 = G__14886;
continue;
} else {
var temp__4657__auto___14888 = cljs.core.seq.call(null,seq__14845_14865);
if(temp__4657__auto___14888){
var seq__14845_14889__$1 = temp__4657__auto___14888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14845_14889__$1)){
var c__7019__auto___14890 = cljs.core.chunk_first.call(null,seq__14845_14889__$1);
var G__14893 = cljs.core.chunk_rest.call(null,seq__14845_14889__$1);
var G__14894 = c__7019__auto___14890;
var G__14895 = cljs.core.count.call(null,c__7019__auto___14890);
var G__14896 = (0);
seq__14845_14865 = G__14893;
chunk__14846_14866 = G__14894;
count__14847_14867 = G__14895;
i__14848_14868 = G__14896;
continue;
} else {
var vec__14850_14898 = cljs.core.first.call(null,seq__14845_14889__$1);
var k_14899 = cljs.core.nth.call(null,vec__14850_14898,(0),null);
var v_14900 = cljs.core.nth.call(null,vec__14850_14898,(1),null);
(evt[k_14899] = v_14900);

var G__14902 = cljs.core.next.call(null,seq__14845_14889__$1);
var G__14903 = null;
var G__14904 = (0);
var G__14905 = (0);
seq__14845_14865 = G__14902;
chunk__14846_14866 = G__14903;
count__14847_14867 = G__14904;
i__14848_14868 = G__14905;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__14908_SHARP_){
return goog.events.getListeners(p1__14908_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map