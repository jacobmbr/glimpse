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
var x__19080__auto__ = (((evt == null))?null:evt);
var m__19081__auto__ = (domina.events.prevent_default[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,evt);
} else {
var m__19081__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,evt);
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
var x__19080__auto__ = (((evt == null))?null:evt);
var m__19081__auto__ = (domina.events.stop_propagation[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,evt);
} else {
var m__19081__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,evt);
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
var x__19080__auto__ = (((evt == null))?null:evt);
var m__19081__auto__ = (domina.events.target[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,evt);
} else {
var m__19081__auto____$1 = (domina.events.target["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,evt);
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
var x__19080__auto__ = (((evt == null))?null:evt);
var m__19081__auto__ = (domina.events.current_target[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,evt);
} else {
var m__19081__auto____$1 = (domina.events.current_target["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,evt);
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
var x__19080__auto__ = (((evt == null))?null:evt);
var m__19081__auto__ = (domina.events.event_type[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,evt);
} else {
var m__19081__auto____$1 = (domina.events.event_type["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,evt);
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
var x__19080__auto__ = (((evt == null))?null:evt);
var m__19081__auto__ = (domina.events.raw_event[goog.typeOf(x__19080__auto__)]);
if(!((m__19081__auto__ == null))){
return m__19081__auto__.call(null,evt);
} else {
var m__19081__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__19081__auto____$1 == null))){
return m__19081__auto____$1.call(null,evt);
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
if(typeof domina.events.t_domina$events33684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events33684 = (function (create_listener_function,f,evt,meta33685){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta33685 = meta33685;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events33684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33686,meta33685__$1){
var self__ = this;
var _33686__$1 = this;
return (new domina.events.t_domina$events33684(self__.create_listener_function,self__.f,self__.evt,meta33685__$1));
});

domina.events.t_domina$events33684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33686){
var self__ = this;
var _33686__$1 = this;
return self__.meta33685;
});

domina.events.t_domina$events33684.prototype.domina$events$Event$ = true;

domina.events.t_domina$events33684.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events33684.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events33684.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events33684.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events33684.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events33684.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events33684.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events33684.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__18417__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events33684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta33685","meta33685",-381943680,null)], null);
});

domina.events.t_domina$events33684.cljs$lang$type = true;

domina.events.t_domina$events33684.cljs$lang$ctorStr = "domina.events/t_domina$events33684";

domina.events.t_domina$events33684.cljs$lang$ctorPrWriter = (function (this__19023__auto__,writer__19024__auto__,opt__19025__auto__){
return cljs.core._write.call(null,writer__19024__auto__,"domina.events/t_domina$events33684");
});

domina.events.__GT_t_domina$events33684 = (function domina$events$create_listener_function_$___GT_t_domina$events33684(create_listener_function__$1,f__$1,evt__$1,meta33685){
return (new domina.events.t_domina$events33684(create_listener_function__$1,f__$1,evt__$1,meta33685));
});

}

return (new domina.events.t_domina$events33684(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__19197__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__33691(s__33692){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__33692__$1 = s__33692;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33692__$1);
if(temp__4657__auto__){
var s__33692__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33692__$2)){
var c__19195__auto__ = cljs.core.chunk_first.call(null,s__33692__$2);
var size__19196__auto__ = cljs.core.count.call(null,c__19195__auto__);
var b__33694 = cljs.core.chunk_buffer.call(null,size__19196__auto__);
if((function (){var i__33693 = (0);
while(true){
if((i__33693 < size__19196__auto__)){
var node = cljs.core._nth.call(null,c__19195__auto__,i__33693);
cljs.core.chunk_append.call(null,b__33694,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__33695 = (i__33693 + (1));
i__33693 = G__33695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33694),domina$events$listen_internal_BANG__$_iter__33691.call(null,cljs.core.chunk_rest.call(null,s__33692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33694),null);
}
} else {
var node = cljs.core.first.call(null,s__33692__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__33691.call(null,cljs.core.rest.call(null,s__33692__$2)));
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
return iter__19197__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args33696 = [];
var len__19487__auto___33699 = arguments.length;
var i__19488__auto___33700 = (0);
while(true){
if((i__19488__auto___33700 < len__19487__auto___33699)){
args33696.push((arguments[i__19488__auto___33700]));

var G__33701 = (i__19488__auto___33700 + (1));
i__19488__auto___33700 = G__33701;
continue;
} else {
}
break;
}

var G__33698 = args33696.length;
switch (G__33698) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33696.length)].join('')));

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
var args33703 = [];
var len__19487__auto___33706 = arguments.length;
var i__19488__auto___33707 = (0);
while(true){
if((i__19488__auto___33707 < len__19487__auto___33706)){
args33703.push((arguments[i__19488__auto___33707]));

var G__33708 = (i__19488__auto___33707 + (1));
i__19488__auto___33707 = G__33708;
continue;
} else {
}
break;
}

var G__33705 = args33703.length;
switch (G__33705) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33703.length)].join('')));

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
var args33710 = [];
var len__19487__auto___33713 = arguments.length;
var i__19488__auto___33714 = (0);
while(true){
if((i__19488__auto___33714 < len__19487__auto___33713)){
args33710.push((arguments[i__19488__auto___33714]));

var G__33715 = (i__19488__auto___33714 + (1));
i__19488__auto___33714 = G__33715;
continue;
} else {
}
break;
}

var G__33712 = args33710.length;
switch (G__33712) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33710.length)].join('')));

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
var args33717 = [];
var len__19487__auto___33720 = arguments.length;
var i__19488__auto___33721 = (0);
while(true){
if((i__19488__auto___33721 < len__19487__auto___33720)){
args33717.push((arguments[i__19488__auto___33721]));

var G__33722 = (i__19488__auto___33721 + (1));
i__19488__auto___33721 = G__33722;
continue;
} else {
}
break;
}

var G__33719 = args33717.length;
switch (G__33719) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33717.length)].join('')));

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
var args33724 = [];
var len__19487__auto___33735 = arguments.length;
var i__19488__auto___33736 = (0);
while(true){
if((i__19488__auto___33736 < len__19487__auto___33735)){
args33724.push((arguments[i__19488__auto___33736]));

var G__33737 = (i__19488__auto___33736 + (1));
i__19488__auto___33736 = G__33737;
continue;
} else {
}
break;
}

var G__33726 = args33724.length;
switch (G__33726) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33724.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__33727 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__33728 = null;
var count__33729 = (0);
var i__33730 = (0);
while(true){
if((i__33730 < count__33729)){
var node = cljs.core._nth.call(null,chunk__33728,i__33730);
goog.events.removeAll(node);

var G__33739 = seq__33727;
var G__33740 = chunk__33728;
var G__33741 = count__33729;
var G__33742 = (i__33730 + (1));
seq__33727 = G__33739;
chunk__33728 = G__33740;
count__33729 = G__33741;
i__33730 = G__33742;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33727);
if(temp__4657__auto__){
var seq__33727__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33727__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__33727__$1);
var G__33743 = cljs.core.chunk_rest.call(null,seq__33727__$1);
var G__33744 = c__19228__auto__;
var G__33745 = cljs.core.count.call(null,c__19228__auto__);
var G__33746 = (0);
seq__33727 = G__33743;
chunk__33728 = G__33744;
count__33729 = G__33745;
i__33730 = G__33746;
continue;
} else {
var node = cljs.core.first.call(null,seq__33727__$1);
goog.events.removeAll(node);

var G__33747 = cljs.core.next.call(null,seq__33727__$1);
var G__33748 = null;
var G__33749 = (0);
var G__33750 = (0);
seq__33727 = G__33747;
chunk__33728 = G__33748;
count__33729 = G__33749;
i__33730 = G__33750;
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
var seq__33731 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__33732 = null;
var count__33733 = (0);
var i__33734 = (0);
while(true){
if((i__33734 < count__33733)){
var node = cljs.core._nth.call(null,chunk__33732,i__33734);
goog.events.removeAll(node,type__$1);

var G__33751 = seq__33731;
var G__33752 = chunk__33732;
var G__33753 = count__33733;
var G__33754 = (i__33734 + (1));
seq__33731 = G__33751;
chunk__33732 = G__33752;
count__33733 = G__33753;
i__33734 = G__33754;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33731);
if(temp__4657__auto__){
var seq__33731__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33731__$1)){
var c__19228__auto__ = cljs.core.chunk_first.call(null,seq__33731__$1);
var G__33755 = cljs.core.chunk_rest.call(null,seq__33731__$1);
var G__33756 = c__19228__auto__;
var G__33757 = cljs.core.count.call(null,c__19228__auto__);
var G__33758 = (0);
seq__33731 = G__33755;
chunk__33732 = G__33756;
count__33733 = G__33757;
i__33734 = G__33758;
continue;
} else {
var node = cljs.core.first.call(null,seq__33731__$1);
goog.events.removeAll(node,type__$1);

var G__33759 = cljs.core.next.call(null,seq__33731__$1);
var G__33760 = null;
var G__33761 = (0);
var G__33762 = (0);
seq__33731 = G__33759;
chunk__33732 = G__33760;
count__33733 = G__33761;
i__33734 = G__33762;
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
var args33763 = [];
var len__19487__auto___33766 = arguments.length;
var i__19488__auto___33767 = (0);
while(true){
if((i__19488__auto___33767 < len__19487__auto___33766)){
args33763.push((arguments[i__19488__auto___33767]));

var G__33768 = (i__19488__auto___33767 + (1));
i__19488__auto___33767 = G__33768;
continue;
} else {
}
break;
}

var G__33765 = args33763.length;
switch (G__33765) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33763.length)].join('')));

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
var G__33770 = parent;
var G__33771 = cljs.core.cons.call(null,parent,so_far);
n = G__33770;
so_far = G__33771;
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
var seq__33780_33788 = cljs.core.seq.call(null,ancestors);
var chunk__33781_33789 = null;
var count__33782_33790 = (0);
var i__33783_33791 = (0);
while(true){
if((i__33783_33791 < count__33782_33790)){
var n_33792 = cljs.core._nth.call(null,chunk__33781_33789,i__33783_33791);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_33792;

goog.events.fireListeners(n_33792,evt.type,true,evt);
}

var G__33793 = seq__33780_33788;
var G__33794 = chunk__33781_33789;
var G__33795 = count__33782_33790;
var G__33796 = (i__33783_33791 + (1));
seq__33780_33788 = G__33793;
chunk__33781_33789 = G__33794;
count__33782_33790 = G__33795;
i__33783_33791 = G__33796;
continue;
} else {
var temp__4657__auto___33797 = cljs.core.seq.call(null,seq__33780_33788);
if(temp__4657__auto___33797){
var seq__33780_33798__$1 = temp__4657__auto___33797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33780_33798__$1)){
var c__19228__auto___33799 = cljs.core.chunk_first.call(null,seq__33780_33798__$1);
var G__33800 = cljs.core.chunk_rest.call(null,seq__33780_33798__$1);
var G__33801 = c__19228__auto___33799;
var G__33802 = cljs.core.count.call(null,c__19228__auto___33799);
var G__33803 = (0);
seq__33780_33788 = G__33800;
chunk__33781_33789 = G__33801;
count__33782_33790 = G__33802;
i__33783_33791 = G__33803;
continue;
} else {
var n_33804 = cljs.core.first.call(null,seq__33780_33798__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_33804;

goog.events.fireListeners(n_33804,evt.type,true,evt);
}

var G__33805 = cljs.core.next.call(null,seq__33780_33798__$1);
var G__33806 = null;
var G__33807 = (0);
var G__33808 = (0);
seq__33780_33788 = G__33805;
chunk__33781_33789 = G__33806;
count__33782_33790 = G__33807;
i__33783_33791 = G__33808;
continue;
}
} else {
}
}
break;
}

var seq__33784_33809 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__33785_33810 = null;
var count__33786_33811 = (0);
var i__33787_33812 = (0);
while(true){
if((i__33787_33812 < count__33786_33811)){
var n_33813 = cljs.core._nth.call(null,chunk__33785_33810,i__33787_33812);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_33813;

goog.events.fireListeners(n_33813,evt.type,false,evt);
}

var G__33814 = seq__33784_33809;
var G__33815 = chunk__33785_33810;
var G__33816 = count__33786_33811;
var G__33817 = (i__33787_33812 + (1));
seq__33784_33809 = G__33814;
chunk__33785_33810 = G__33815;
count__33786_33811 = G__33816;
i__33787_33812 = G__33817;
continue;
} else {
var temp__4657__auto___33818 = cljs.core.seq.call(null,seq__33784_33809);
if(temp__4657__auto___33818){
var seq__33784_33819__$1 = temp__4657__auto___33818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33784_33819__$1)){
var c__19228__auto___33820 = cljs.core.chunk_first.call(null,seq__33784_33819__$1);
var G__33821 = cljs.core.chunk_rest.call(null,seq__33784_33819__$1);
var G__33822 = c__19228__auto___33820;
var G__33823 = cljs.core.count.call(null,c__19228__auto___33820);
var G__33824 = (0);
seq__33784_33809 = G__33821;
chunk__33785_33810 = G__33822;
count__33786_33811 = G__33823;
i__33787_33812 = G__33824;
continue;
} else {
var n_33825 = cljs.core.first.call(null,seq__33784_33819__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_33825;

goog.events.fireListeners(n_33825,evt.type,false,evt);
}

var G__33826 = cljs.core.next.call(null,seq__33784_33819__$1);
var G__33827 = null;
var G__33828 = (0);
var G__33829 = (0);
seq__33784_33809 = G__33826;
chunk__33785_33810 = G__33827;
count__33786_33811 = G__33828;
i__33787_33812 = G__33829;
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
var and__18405__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__18405__auto__)){
return o.dispatchEvent;
} else {
return and__18405__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args33830 = [];
var len__19487__auto___33839 = arguments.length;
var i__19488__auto___33840 = (0);
while(true){
if((i__19488__auto___33840 < len__19487__auto___33839)){
args33830.push((arguments[i__19488__auto___33840]));

var G__33841 = (i__19488__auto___33840 + (1));
i__19488__auto___33840 = G__33841;
continue;
} else {
}
break;
}

var G__33832 = args33830.length;
switch (G__33832) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33830.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__33833_33843 = cljs.core.seq.call(null,evt_map);
var chunk__33834_33844 = null;
var count__33835_33845 = (0);
var i__33836_33846 = (0);
while(true){
if((i__33836_33846 < count__33835_33845)){
var vec__33837_33847 = cljs.core._nth.call(null,chunk__33834_33844,i__33836_33846);
var k_33848 = cljs.core.nth.call(null,vec__33837_33847,(0),null);
var v_33849 = cljs.core.nth.call(null,vec__33837_33847,(1),null);
(evt[k_33848] = v_33849);

var G__33850 = seq__33833_33843;
var G__33851 = chunk__33834_33844;
var G__33852 = count__33835_33845;
var G__33853 = (i__33836_33846 + (1));
seq__33833_33843 = G__33850;
chunk__33834_33844 = G__33851;
count__33835_33845 = G__33852;
i__33836_33846 = G__33853;
continue;
} else {
var temp__4657__auto___33854 = cljs.core.seq.call(null,seq__33833_33843);
if(temp__4657__auto___33854){
var seq__33833_33855__$1 = temp__4657__auto___33854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33833_33855__$1)){
var c__19228__auto___33856 = cljs.core.chunk_first.call(null,seq__33833_33855__$1);
var G__33857 = cljs.core.chunk_rest.call(null,seq__33833_33855__$1);
var G__33858 = c__19228__auto___33856;
var G__33859 = cljs.core.count.call(null,c__19228__auto___33856);
var G__33860 = (0);
seq__33833_33843 = G__33857;
chunk__33834_33844 = G__33858;
count__33835_33845 = G__33859;
i__33836_33846 = G__33860;
continue;
} else {
var vec__33838_33861 = cljs.core.first.call(null,seq__33833_33855__$1);
var k_33862 = cljs.core.nth.call(null,vec__33838_33861,(0),null);
var v_33863 = cljs.core.nth.call(null,vec__33838_33861,(1),null);
(evt[k_33862] = v_33863);

var G__33864 = cljs.core.next.call(null,seq__33833_33855__$1);
var G__33865 = null;
var G__33866 = (0);
var G__33867 = (0);
seq__33833_33843 = G__33864;
chunk__33834_33844 = G__33865;
count__33835_33845 = G__33866;
i__33836_33846 = G__33867;
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
return (function (p1__33868_SHARP_){
return goog.events.getListeners(p1__33868_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map