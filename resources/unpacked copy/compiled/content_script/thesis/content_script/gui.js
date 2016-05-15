// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.gui');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina.core');
goog.require('reagent.core');
goog.require('chromex.logging');
goog.require('cljs.core.async');
goog.require('thesis.content_script.handlers');
goog.require('domina.events');
goog.require('thesis.content_script.subs');
goog.require('thesis.content_script.animation');
goog.require('re_frame.core');
thesis.content_script.gui.img_data = reagent.core.atom.call(null,null);
thesis.content_script.gui.img_pos = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
thesis.content_script.gui.dim = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
thesis.content_script.gui.mouse = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
thesis.content_script.gui.mouseX = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.first.call(null,cljs.core.deref.call(null,thesis.content_script.gui.mouse));
}));
thesis.content_script.gui.mouseY = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.peek.call(null,cljs.core.deref.call(null,thesis.content_script.gui.mouse));
}));
thesis.content_script.gui.heading = (function thesis$content_script$gui$heading(){
var tabId = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-url","tab-url",1066626054)], null));
return ((function (tabId){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"40px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"20px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"normal",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"10px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),"Third parties who see you on ",cljs.core.deref.call(null,tabId)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"15px",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),"and how often they have seen you on the internet before"], null)], null);
});
;})(tabId))
});
thesis.content_script.gui.counter = (function thesis$content_script$gui$counter(cnt,del){
var text = [cljs.core.str(" ...has seen you "),cljs.core.str(cnt),cljs.core.str(" times before.")].join('');
var draw_string = reagent.core.atom.call(null,"");
var ldel = (del | (0));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (text,draw_string,ldel){
return (function (this$){
return setTimeout(((function (text,draw_string,ldel){
return (function (){
var c__9710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9710__auto__,text,draw_string,ldel){
return (function (){
var f__9711__auto__ = (function (){var switch__9558__auto__ = ((function (c__9710__auto__,text,draw_string,ldel){
return (function (state_10681){
var state_val_10682 = (state_10681[(1)]);
if((state_val_10682 === (1))){
var inst_10663 = (0);
var state_10681__$1 = (function (){var statearr_10683 = state_10681;
(statearr_10683[(7)] = inst_10663);

return statearr_10683;
})();
var statearr_10684_10699 = state_10681__$1;
(statearr_10684_10699[(2)] = null);

(statearr_10684_10699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10682 === (2))){
var inst_10665 = cljs.core.async.timeout.call(null,(10));
var state_10681__$1 = state_10681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10681__$1,(4),inst_10665);
} else {
if((state_val_10682 === (3))){
var inst_10679 = (state_10681[(2)]);
var state_10681__$1 = state_10681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10681__$1,inst_10679);
} else {
if((state_val_10682 === (4))){
var inst_10663 = (state_10681[(7)]);
var inst_10667 = (state_10681[(2)]);
var inst_10668 = cljs.core.subs.call(null,text,(0),inst_10663);
var inst_10669 = cljs.core.reset_BANG_.call(null,draw_string,inst_10668);
var inst_10670 = cljs.core.count.call(null,text);
var inst_10671 = (inst_10663 < inst_10670);
var state_10681__$1 = (function (){var statearr_10685 = state_10681;
(statearr_10685[(8)] = inst_10667);

(statearr_10685[(9)] = inst_10669);

return statearr_10685;
})();
if(cljs.core.truth_(inst_10671)){
var statearr_10686_10700 = state_10681__$1;
(statearr_10686_10700[(1)] = (5));

} else {
var statearr_10687_10701 = state_10681__$1;
(statearr_10687_10701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10682 === (5))){
var inst_10663 = (state_10681[(7)]);
var inst_10673 = (inst_10663 + (1));
var inst_10663__$1 = inst_10673;
var state_10681__$1 = (function (){var statearr_10688 = state_10681;
(statearr_10688[(7)] = inst_10663__$1);

return statearr_10688;
})();
var statearr_10689_10702 = state_10681__$1;
(statearr_10689_10702[(2)] = null);

(statearr_10689_10702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10682 === (6))){
var state_10681__$1 = state_10681;
var statearr_10690_10703 = state_10681__$1;
(statearr_10690_10703[(2)] = null);

(statearr_10690_10703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10682 === (7))){
var inst_10677 = (state_10681[(2)]);
var state_10681__$1 = state_10681;
var statearr_10691_10704 = state_10681__$1;
(statearr_10691_10704[(2)] = inst_10677);

(statearr_10691_10704[(1)] = (3));


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
});})(c__9710__auto__,text,draw_string,ldel))
;
return ((function (switch__9558__auto__,c__9710__auto__,text,draw_string,ldel){
return (function() {
var thesis$content_script$gui$counter_$_state_machine__9559__auto__ = null;
var thesis$content_script$gui$counter_$_state_machine__9559__auto____0 = (function (){
var statearr_10695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10695[(0)] = thesis$content_script$gui$counter_$_state_machine__9559__auto__);

(statearr_10695[(1)] = (1));

return statearr_10695;
});
var thesis$content_script$gui$counter_$_state_machine__9559__auto____1 = (function (state_10681){
while(true){
var ret_value__9560__auto__ = (function (){try{while(true){
var result__9561__auto__ = switch__9558__auto__.call(null,state_10681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9561__auto__;
}
break;
}
}catch (e10696){if((e10696 instanceof Object)){
var ex__9562__auto__ = e10696;
var statearr_10697_10705 = state_10681;
(statearr_10697_10705[(5)] = ex__9562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10706 = state_10681;
state_10681 = G__10706;
continue;
} else {
return ret_value__9560__auto__;
}
break;
}
});
thesis$content_script$gui$counter_$_state_machine__9559__auto__ = function(state_10681){
switch(arguments.length){
case 0:
return thesis$content_script$gui$counter_$_state_machine__9559__auto____0.call(this);
case 1:
return thesis$content_script$gui$counter_$_state_machine__9559__auto____1.call(this,state_10681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$content_script$gui$counter_$_state_machine__9559__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$content_script$gui$counter_$_state_machine__9559__auto____0;
thesis$content_script$gui$counter_$_state_machine__9559__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$content_script$gui$counter_$_state_machine__9559__auto____1;
return thesis$content_script$gui$counter_$_state_machine__9559__auto__;
})()
;})(switch__9558__auto__,c__9710__auto__,text,draw_string,ldel))
})();
var state__9712__auto__ = (function (){var statearr_10698 = f__9711__auto__.call(null);
(statearr_10698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9710__auto__);

return statearr_10698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9712__auto__);
});})(c__9710__auto__,text,draw_string,ldel))
);

return c__9710__auto__;
});})(text,draw_string,ldel))
,((200) * ldel));
});})(text,draw_string,ldel))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (text,draw_string,ldel){
return (function (cnt__$1,del__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#eee",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"400",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease"], null)], null),cljs.core.deref.call(null,draw_string)], null);
});})(text,draw_string,ldel))
], null));
});
thesis.content_script.gui.satellite = (function thesis$content_script$gui$satellite(dom,del){
var el = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-data","in-data",89576440),dom], null));
var text = cljs.core.name.call(null,dom);
var x = reagent.core.cursor.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null));
var y = reagent.core.cursor.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var cnt = reagent.core.cursor.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cnt","cnt",283978798)], null));
var cspring = thesis.content_script.animation.spring.call(null,cnt);
var fs = reagent.ratom.make_reaction.call(null,((function (el,text,x,y,cnt,cspring){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,el),new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
});})(el,text,x,y,cnt,cspring))
);
var xsp = thesis.content_script.animation.spring.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"damping","damping",1054389681),(2)], null));
var ysp = thesis.content_script.animation.spring.call(null,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"damping","damping",1054389681),(2)], null));
var hasinfo_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-info?","has-info?",1832610505)], null));
var lp = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-padding","left-padding",1669863700)], null));
var lpsp = thesis.content_script.animation.spring.call(null,lp,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(20),new cljs.core.Keyword(null,"damping","damping",1054389681),(2)], null));
var show_text_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-text?","show-text?",1934354679)], null));
var align_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align?","align?",-1419127676)], null));
var dim = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dim","dim",-497244536)], null));
var ww = reagent.ratom.make_reaction.call(null,((function (el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim){
return (function (){
return cljs.core.first.call(null,cljs.core.deref.call(null,dim));
});})(el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim))
);
var offset = reagent.ratom.make_reaction.call(null,((function (el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww){
return (function (){
return (cljs.core.deref.call(null,lpsp) * cljs.core.deref.call(null,ww));
});})(el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww))
);
var fssp = thesis.content_script.animation.interpolate_to.call(null,fs);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww,offset,fssp){
return (function (){
return cljs.core.List.EMPTY;
});})(el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww,offset,fssp))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"satellite",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww,offset,fssp){
return (function (i,del__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"satellite"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"300px",new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(cljs.core.deref.call(null,align_QMARK_))?"relative":"absolute"),new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0 0 0",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"7px",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((((20) + cljs.core.deref.call(null,offset)) + cljs.core.deref.call(null,xsp))),cljs.core.str("px,"),cljs.core.str(cljs.core.deref.call(null,ysp)),cljs.core.str("px)")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww,offset,fssp){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-click","handle-click",2089352175),"domain",text], null));
});})(el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww,offset,fssp))
,new cljs.core.Keyword(null,"class","class",-2030961996),"ext-h1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str(cljs.core.deref.call(null,fssp)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"normal",new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),text], null),(cljs.core.truth_(cljs.core.deref.call(null,show_text_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.gui.counter,cljs.core.deref.call(null,cnt),del__$1], null):null)], null)], null);
});})(el,text,x,y,cnt,cspring,fs,xsp,ysp,hasinfo_QMARK_,lp,lpsp,show_text_QMARK_,align_QMARK_,dim,ww,offset,fssp))
], null));
});
thesis.content_script.gui.satellites = (function thesis$content_script$gui$satellites(){
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var sdata = reagent.ratom.make_reaction.call(null,((function (data){
return (function (){
return cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,((function (data){
return (function (k1,k2){
return cljs.core.compare.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,cljs.core.deref.call(null,data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k2,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null)),k2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,cljs.core.deref.call(null,data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null)),k1], null));
});})(data))
),cljs.core.deref.call(null,data));
});})(data))
);
var show_text_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-text?","show-text?",1934354679)], null));
var lp = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-padding","left-padding",1669863700)], null));
var lpsp = thesis.content_script.animation.spring.call(null,lp,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(20),new cljs.core.Keyword(null,"damping","damping",1054389681),(2)], null));
var align_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align?","align?",-1419127676)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"height","height",1025178622)],["all 0.5s cubicInOUt","0",(cljs.core.truth_(cljs.core.deref.call(null,show_text_QMARK_))?"scroll":"visible"),"100%",[cljs.core.str(((40) * cljs.core.deref.call(null,lpsp))),cljs.core.str("%")].join(''),"0","fixed","300px","100%"])], null),cljs.core.map_indexed.call(null,((function (data,sdata,show_text_QMARK_,lp,lpsp,align_QMARK_){
return (function (p1__10708_SHARP_,p2__10707_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.gui.satellite,p2__10707_SHARP_,p1__10708_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p2__10707_SHARP_], null));
});})(data,sdata,show_text_QMARK_,lp,lpsp,align_QMARK_))
,cljs.core.keys.call(null,cljs.core.deref.call(null,sdata)))], null);
});
thesis.content_script.gui.debug = (function thesis$content_script$gui$debug(){
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"left","left",-399115937),"0px"], null)], null),[cljs.core.str(cljs.core.deref.call(null,data))].join('')], null);
});
thesis.content_script.gui.screenshot = (function thesis$content_script$gui$screenshot(){
var tilt = reagent.core.atom.call(null,(0));
var tabUrl = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-url","tab-url",1066626054)], null));
var rotation = thesis.content_script.animation.spring.call(null,tilt);
var scale_sub = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img-scale","img-scale",1331504493)], null));
var scale = thesis.content_script.animation.spring.call(null,scale_sub,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(40),new cljs.core.Keyword(null,"damping","damping",1054389681),(2)], null));
var img_pos = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img-pos","img-pos",773671819)], null));
var img_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img-data","img-data",1071238824)], null));
var align_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align?","align?",-1419127676)], null));
var dim = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dim","dim",-497244536)], null));
var xx = reagent.ratom.make_reaction.call(null,((function (tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim){
return (function (){
return ((cljs.core.first.call(null,cljs.core.deref.call(null,dim)) / (2)) * (-1));
});})(tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim))
);
var yy = reagent.ratom.make_reaction.call(null,((function (tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx){
return (function (){
return ((cljs.core.peek.call(null,cljs.core.deref.call(null,dim)) / (2)) * (-1));
});})(tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx))
);
var x = reagent.ratom.make_reaction.call(null,((function (tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy){
return (function (){
return cljs.core.first.call(null,cljs.core.deref.call(null,img_pos));
});})(tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy))
);
var y = reagent.ratom.make_reaction.call(null,((function (tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x){
return (function (){
return cljs.core.peek.call(null,cljs.core.deref.call(null,img_pos));
});})(tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x))
);
var xsp = thesis.content_script.animation.spring.call(null,x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(500),new cljs.core.Keyword(null,"damping","damping",1054389681),(3)], null));
var ysp = thesis.content_script.animation.spring.call(null,y,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(500),new cljs.core.Keyword(null,"damping","damping",1054389681),(3)], null));
var w = window.innerWidth;
return ((function (tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x,y,xsp,ysp,w){
return (function thesis$content_script$gui$screenshot_$_a_screenshot(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x,y,xsp,ysp,w){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-click","handle-click",2089352175),"site",tabUrl], null));
});})(tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x,y,xsp,ysp,w))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x,y,xsp,ysp,w){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638)], null));
});})(tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x,y,xsp,ysp,w))
,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,img_data),new cljs.core.Keyword(null,"id","id",-1388402092),"ext-screenshot",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str(cljs.core.deref.call(null,scale)),cljs.core.str(","),cljs.core.str(cljs.core.deref.call(null,scale)),cljs.core.str(") "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,align_QMARK_))?[cljs.core.str("translate("),cljs.core.str(cljs.core.deref.call(null,xsp)),cljs.core.str("px,"),cljs.core.str(cljs.core.deref.call(null,ysp)),cljs.core.str("px)")].join(''):null))].join('')], null)], null)], null)], null)], null);
});
;})(tilt,tabUrl,rotation,scale_sub,scale,img_pos,img_data,align_QMARK_,dim,xx,yy,x,y,xsp,ysp,w))
});
thesis.content_script.gui.root = (function thesis$content_script$gui$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.gui.satellites], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.gui.heading], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.gui.screenshot], null)], null);
});
thesis.content_script.gui.get_rand_between = (function thesis$content_script$gui$get_rand_between(v,low,up){
return (cljs.core.rand.call(null,(up * (v - (low * v)))) + (low * v));
});
thesis.content_script.gui.init_BANG_ = (function thesis$content_script$gui$init_BANG_(img,tabdict,tabId,counts,core_chan){
if(cljs.core.not.call(null,domina.core.by_id.call(null,"ext-canvas-container"))){
var node = document.createElement("div");
var el = document.body.appendChild(node);
var div = el.id = "ext-canvas-container";
var dim = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
var data = cljs.core.atom.call(null,null);
domina.core.destroy_BANG_.call(null,domina.css.sel.call(null,"script"));

domina.core.destroy_BANG_.call(null,domina.css.sel.call(null,"iframe"));

cljs.core.reset_BANG_.call(null,data,cljs.core.reduce.call(null,((function (node,el,div,dim,data){
return (function (p1__10709_SHARP_,p2__10710_SHARP_){
return cljs.core.assoc.call(null,p1__10709_SHARP_,cljs.core.keyword.call(null,p2__10710_SHARP_),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)],[(cljs.core.first.call(null,dim) / (2)),(cljs.core.peek.call(null,dim) / (2)),0.5]));
});})(node,el,div,dim,data))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,tabdict)));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),img,dim,cljs.core.deref.call(null,data),tabId,counts,core_chan], null));

window.addEventListener("resize",((function (node,el,div,dim,data){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null)], null));
});})(node,el,div,dim,data))
);

setTimeout(((function (node,el,div,dim,data){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale-down-img","scale-down-img",-1729519177)], null),(0));
});})(node,el,div,dim,data))
);

setTimeout(((function (node,el,div,dim,data){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-satellites","data-satellites",-875847567)], null));
});})(node,el,div,dim,data))
,(800));

setTimeout(((function (node,el,div,dim,data){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-info","handle-info",-57111997),true], null));
});})(node,el,div,dim,data))
,(3000));

setTimeout(((function (node,el,div,dim,data){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-img-pos","update-img-pos",1154613838)], null));
});})(node,el,div,dim,data))
,(3000));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thesis.content_script.gui.root], null),domina.core.by_id.call(null,"ext-canvas-container"));
} else {
return null;
}
});

//# sourceMappingURL=gui.js.map