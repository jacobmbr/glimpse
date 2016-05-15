// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19494__auto__ = [];
var len__19487__auto___45199 = arguments.length;
var i__19488__auto___45200 = (0);
while(true){
if((i__19488__auto___45200 < len__19487__auto___45199)){
args__19494__auto__.push((arguments[i__19488__auto___45200]));

var G__45201 = (i__19488__auto___45200 + (1));
i__19488__auto___45200 = G__45201;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__45191_45202 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__45192_45203 = null;
var count__45193_45204 = (0);
var i__45194_45205 = (0);
while(true){
if((i__45194_45205 < count__45193_45204)){
var k_45206 = cljs.core._nth.call(null,chunk__45192_45203,i__45194_45205);
e.setAttribute(cljs.core.name.call(null,k_45206),cljs.core.get.call(null,attrs,k_45206));

var G__45207 = seq__45191_45202;
var G__45208 = chunk__45192_45203;
var G__45209 = count__45193_45204;
var G__45210 = (i__45194_45205 + (1));
seq__45191_45202 = G__45207;
chunk__45192_45203 = G__45208;
count__45193_45204 = G__45209;
i__45194_45205 = G__45210;
continue;
} else {
var temp__4657__auto___45211 = cljs.core.seq.call(null,seq__45191_45202);
if(temp__4657__auto___45211){
var seq__45191_45212__$1 = temp__4657__auto___45211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45191_45212__$1)){
var c__19228__auto___45213 = cljs.core.chunk_first.call(null,seq__45191_45212__$1);
var G__45214 = cljs.core.chunk_rest.call(null,seq__45191_45212__$1);
var G__45215 = c__19228__auto___45213;
var G__45216 = cljs.core.count.call(null,c__19228__auto___45213);
var G__45217 = (0);
seq__45191_45202 = G__45214;
chunk__45192_45203 = G__45215;
count__45193_45204 = G__45216;
i__45194_45205 = G__45217;
continue;
} else {
var k_45218 = cljs.core.first.call(null,seq__45191_45212__$1);
e.setAttribute(cljs.core.name.call(null,k_45218),cljs.core.get.call(null,attrs,k_45218));

var G__45219 = cljs.core.next.call(null,seq__45191_45212__$1);
var G__45220 = null;
var G__45221 = (0);
var G__45222 = (0);
seq__45191_45202 = G__45219;
chunk__45192_45203 = G__45220;
count__45193_45204 = G__45221;
i__45194_45205 = G__45222;
continue;
}
} else {
}
}
break;
}

var seq__45195_45223 = cljs.core.seq.call(null,children);
var chunk__45196_45224 = null;
var count__45197_45225 = (0);
var i__45198_45226 = (0);
while(true){
if((i__45198_45226 < count__45197_45225)){
var ch_45227 = cljs.core._nth.call(null,chunk__45196_45224,i__45198_45226);
e.appendChild(ch_45227);

var G__45228 = seq__45195_45223;
var G__45229 = chunk__45196_45224;
var G__45230 = count__45197_45225;
var G__45231 = (i__45198_45226 + (1));
seq__45195_45223 = G__45228;
chunk__45196_45224 = G__45229;
count__45197_45225 = G__45230;
i__45198_45226 = G__45231;
continue;
} else {
var temp__4657__auto___45232 = cljs.core.seq.call(null,seq__45195_45223);
if(temp__4657__auto___45232){
var seq__45195_45233__$1 = temp__4657__auto___45232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45195_45233__$1)){
var c__19228__auto___45234 = cljs.core.chunk_first.call(null,seq__45195_45233__$1);
var G__45235 = cljs.core.chunk_rest.call(null,seq__45195_45233__$1);
var G__45236 = c__19228__auto___45234;
var G__45237 = cljs.core.count.call(null,c__19228__auto___45234);
var G__45238 = (0);
seq__45195_45223 = G__45235;
chunk__45196_45224 = G__45236;
count__45197_45225 = G__45237;
i__45198_45226 = G__45238;
continue;
} else {
var ch_45239 = cljs.core.first.call(null,seq__45195_45233__$1);
e.appendChild(ch_45239);

var G__45240 = cljs.core.next.call(null,seq__45195_45233__$1);
var G__45241 = null;
var G__45242 = (0);
var G__45243 = (0);
seq__45195_45223 = G__45240;
chunk__45196_45224 = G__45241;
count__45197_45225 = G__45242;
i__45198_45226 = G__45243;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq45188){
var G__45189 = cljs.core.first.call(null,seq45188);
var seq45188__$1 = cljs.core.next.call(null,seq45188);
var G__45190 = cljs.core.first.call(null,seq45188__$1);
var seq45188__$2 = cljs.core.next.call(null,seq45188__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__45189,G__45190,seq45188__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19343__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19344__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19345__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19346__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19342__auto__,prefer_table__19343__auto__,method_cache__19344__auto__,cached_hierarchy__19345__auto__,hierarchy__19346__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19342__auto__,prefer_table__19343__auto__,method_cache__19344__auto__,cached_hierarchy__19345__auto__,hierarchy__19346__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19346__auto__,method_table__19342__auto__,prefer_table__19343__auto__,method_cache__19344__auto__,cached_hierarchy__19345__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_45244 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_45244.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_45244.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_45244.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_45244);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__45245,st_map){
var map__45250 = p__45245;
var map__45250__$1 = ((((!((map__45250 == null)))?((((map__45250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45250):map__45250);
var container_el = cljs.core.get.call(null,map__45250__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__45250,map__45250__$1,container_el){
return (function (p__45252){
var vec__45253 = p__45252;
var k = cljs.core.nth.call(null,vec__45253,(0),null);
var v = cljs.core.nth.call(null,vec__45253,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__45250,map__45250__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__45254,dom_str){
var map__45257 = p__45254;
var map__45257__$1 = ((((!((map__45257 == null)))?((((map__45257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45257):map__45257);
var c = map__45257__$1;
var content_area_el = cljs.core.get.call(null,map__45257__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__45259){
var map__45262 = p__45259;
var map__45262__$1 = ((((!((map__45262 == null)))?((((map__45262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45262):map__45262);
var content_area_el = cljs.core.get.call(null,map__45262__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_45305){
var state_val_45306 = (state_45305[(1)]);
if((state_val_45306 === (1))){
var inst_45290 = (state_45305[(7)]);
var inst_45290__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45291 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45292 = ["10px","10px","100%","68px","1.0"];
var inst_45293 = cljs.core.PersistentHashMap.fromArrays(inst_45291,inst_45292);
var inst_45294 = cljs.core.merge.call(null,inst_45293,style);
var inst_45295 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45290__$1,inst_45294);
var inst_45296 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45290__$1,msg);
var inst_45297 = cljs.core.async.timeout.call(null,(300));
var state_45305__$1 = (function (){var statearr_45307 = state_45305;
(statearr_45307[(8)] = inst_45295);

(statearr_45307[(9)] = inst_45296);

(statearr_45307[(7)] = inst_45290__$1);

return statearr_45307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45305__$1,(2),inst_45297);
} else {
if((state_val_45306 === (2))){
var inst_45290 = (state_45305[(7)]);
var inst_45299 = (state_45305[(2)]);
var inst_45300 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_45301 = ["auto"];
var inst_45302 = cljs.core.PersistentHashMap.fromArrays(inst_45300,inst_45301);
var inst_45303 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45290,inst_45302);
var state_45305__$1 = (function (){var statearr_45308 = state_45305;
(statearr_45308[(10)] = inst_45299);

return statearr_45308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45305__$1,inst_45303);
} else {
return null;
}
}
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto____0 = (function (){
var statearr_45312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45312[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto__);

(statearr_45312[(1)] = (1));

return statearr_45312;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto____1 = (function (state_45305){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_45305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e45313){if((e45313 instanceof Object)){
var ex__20505__auto__ = e45313;
var statearr_45314_45316 = state_45305;
(statearr_45314_45316[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45317 = state_45305;
state_45305 = G__45317;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto__ = function(state_45305){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto____1.call(this,state_45305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_45315 = f__20614__auto__.call(null);
(statearr_45315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_45315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__45319 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__45319,(0),null);
var ln = cljs.core.nth.call(null,vec__45319,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__45322 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__45322,(0),null);
var file_line = cljs.core.nth.call(null,vec__45322,(1),null);
var file_column = cljs.core.nth.call(null,vec__45322,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__45322,file_name,file_line,file_column){
return (function (p1__45320_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__45320_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__45322,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18417__auto__ = file_line;
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
var and__18405__auto__ = cause;
if(cljs.core.truth_(and__18405__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18405__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__45325 = figwheel.client.heads_up.ensure_container.call(null);
var map__45325__$1 = ((((!((map__45325 == null)))?((((map__45325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45325):map__45325);
var content_area_el = cljs.core.get.call(null,map__45325__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_45373){
var state_val_45374 = (state_45373[(1)]);
if((state_val_45374 === (1))){
var inst_45356 = (state_45373[(7)]);
var inst_45356__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45357 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45358 = ["0.0"];
var inst_45359 = cljs.core.PersistentHashMap.fromArrays(inst_45357,inst_45358);
var inst_45360 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45356__$1,inst_45359);
var inst_45361 = cljs.core.async.timeout.call(null,(300));
var state_45373__$1 = (function (){var statearr_45375 = state_45373;
(statearr_45375[(7)] = inst_45356__$1);

(statearr_45375[(8)] = inst_45360);

return statearr_45375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45373__$1,(2),inst_45361);
} else {
if((state_val_45374 === (2))){
var inst_45356 = (state_45373[(7)]);
var inst_45363 = (state_45373[(2)]);
var inst_45364 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_45365 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_45366 = cljs.core.PersistentHashMap.fromArrays(inst_45364,inst_45365);
var inst_45367 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45356,inst_45366);
var inst_45368 = cljs.core.async.timeout.call(null,(200));
var state_45373__$1 = (function (){var statearr_45376 = state_45373;
(statearr_45376[(9)] = inst_45363);

(statearr_45376[(10)] = inst_45367);

return statearr_45376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45373__$1,(3),inst_45368);
} else {
if((state_val_45374 === (3))){
var inst_45356 = (state_45373[(7)]);
var inst_45370 = (state_45373[(2)]);
var inst_45371 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45356,"");
var state_45373__$1 = (function (){var statearr_45377 = state_45373;
(statearr_45377[(11)] = inst_45370);

return statearr_45377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45373__$1,inst_45371);
} else {
return null;
}
}
}
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20502__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20502__auto____0 = (function (){
var statearr_45381 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45381[(0)] = figwheel$client$heads_up$clear_$_state_machine__20502__auto__);

(statearr_45381[(1)] = (1));

return statearr_45381;
});
var figwheel$client$heads_up$clear_$_state_machine__20502__auto____1 = (function (state_45373){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_45373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e45382){if((e45382 instanceof Object)){
var ex__20505__auto__ = e45382;
var statearr_45383_45385 = state_45373;
(statearr_45383_45385[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45386 = state_45373;
state_45373 = G__45386;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20502__auto__ = function(state_45373){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20502__auto____1.call(this,state_45373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20502__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20502__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_45384 = f__20614__auto__.call(null);
(statearr_45384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_45384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20613__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20613__auto__){
return (function (){
var f__20614__auto__ = (function (){var switch__20501__auto__ = ((function (c__20613__auto__){
return (function (state_45418){
var state_val_45419 = (state_45418[(1)]);
if((state_val_45419 === (1))){
var inst_45408 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_45418__$1 = state_45418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45418__$1,(2),inst_45408);
} else {
if((state_val_45419 === (2))){
var inst_45410 = (state_45418[(2)]);
var inst_45411 = cljs.core.async.timeout.call(null,(400));
var state_45418__$1 = (function (){var statearr_45420 = state_45418;
(statearr_45420[(7)] = inst_45410);

return statearr_45420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45418__$1,(3),inst_45411);
} else {
if((state_val_45419 === (3))){
var inst_45413 = (state_45418[(2)]);
var inst_45414 = figwheel.client.heads_up.clear.call(null);
var state_45418__$1 = (function (){var statearr_45421 = state_45418;
(statearr_45421[(8)] = inst_45413);

return statearr_45421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45418__$1,(4),inst_45414);
} else {
if((state_val_45419 === (4))){
var inst_45416 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45418__$1,inst_45416);
} else {
return null;
}
}
}
}
});})(c__20613__auto__))
;
return ((function (switch__20501__auto__,c__20613__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto____0 = (function (){
var statearr_45425 = [null,null,null,null,null,null,null,null,null];
(statearr_45425[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto__);

(statearr_45425[(1)] = (1));

return statearr_45425;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto____1 = (function (state_45418){
while(true){
var ret_value__20503__auto__ = (function (){try{while(true){
var result__20504__auto__ = switch__20501__auto__.call(null,state_45418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20504__auto__;
}
break;
}
}catch (e45426){if((e45426 instanceof Object)){
var ex__20505__auto__ = e45426;
var statearr_45427_45429 = state_45418;
(statearr_45427_45429[(5)] = ex__20505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45430 = state_45418;
state_45418 = G__45430;
continue;
} else {
return ret_value__20503__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto__ = function(state_45418){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto____1.call(this,state_45418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20502__auto__;
})()
;})(switch__20501__auto__,c__20613__auto__))
})();
var state__20615__auto__ = (function (){var statearr_45428 = f__20614__auto__.call(null);
(statearr_45428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20613__auto__);

return statearr_45428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20615__auto__);
});})(c__20613__auto__))
);

return c__20613__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map