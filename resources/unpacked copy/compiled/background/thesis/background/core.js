// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.background.core');
goog.require('cljs.core');
goog.require('chromex.ext.runtime');
goog.require('goog.Uri');
goog.require('chromex.protocols');
goog.require('goog.string');
goog.require('thesis.background.location');
goog.require('chromex.ext.web_request');
goog.require('chromex.chrome_event_channel');
goog.require('chromex.ext.browser_action');
goog.require('chromex.ext.extension');
goog.require('chromex.support');
goog.require('chromex.logging');
goog.require('chromex.ext.tabs');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('thesis.background.storage');
goog.require('chromex.ext.storage');
cljs.core.enable_console_print_BANG_.call(null);
thesis.background.core.clients = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
thesis.background.core.location = cljs.core.atom.call(null,null);
thesis.background.core.initialise_tab = cljs.core.atom.call(null,null);
thesis.background.core.tabs = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
thesis.background.core.remove_client_by_id_BANG_ = (function thesis$background$core$remove_client_by_id_BANG_(tabId){
console.log("kicking out ",tabId);


thesis.background.storage.tabdict_remove_client.call(null,tabId);

var remove_item = (function (coll,item){
return cljs.core.remove.call(null,(function (p1__31934_SHARP_){
return cljs.core._EQ_.call(null,(function (){var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,p1__31934_SHARP_),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
})(),tabId);
}),coll);
});
return cljs.core.swap_BANG_.call(null,thesis.background.core.clients,remove_item,tabId);
});
thesis.background.core.add_client_BANG_ = (function thesis$background$core$add_client_BANG_(client){
thesis.background.storage.tabdict_add_client.call(null,chromex.protocols.get_sender.call(null,client).tab.id);

return cljs.core.swap_BANG_.call(null,thesis.background.core.clients,cljs.core.conj,client);
});
thesis.background.core.remove_client_BANG_ = (function thesis$background$core$remove_client_BANG_(client){
var tabId = chromex.protocols.get_sender.call(null,client).tab.id;
thesis.background.storage.tabdict_remove_client.call(null,tabId);

var remove_item_31937 = ((function (tabId){
return (function (coll,item){
return cljs.core.remove.call(null,((function (tabId){
return (function (p1__31935_SHARP_){
return cljs.core._EQ_.call(null,tabId,(function (){var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,p1__31935_SHARP_),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
})());
});})(tabId))
,coll);
});})(tabId))
;
cljs.core.swap_BANG_.call(null,thesis.background.core.clients,remove_item_31937,client);

console.log("Client ",tabId,"disconnected, remaining: ",cljs.core.doall.call(null,cljs.core.map.call(null,((function (tabId){
return (function (p1__31936_SHARP_){
var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,p1__31936_SHARP_),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
});})(tabId))
,cljs.core.deref.call(null,thesis.background.core.clients))));

return null;
});
thesis.background.core.run_client_message_loop_BANG_ = (function thesis$background$core$run_client_message_loop_BANG_(client){
var res_chan = cljs.core.async.chan.call(null);
var tabId = (function (){var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,client),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
})();
var url = (function (){var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,client),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"url");
} else {
return null;
}
})();
var domain = (new goog.Uri(url)).getDomain();
var c__20758__auto___32264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20758__auto___32264,res_chan,tabId,url,domain){
return (function (){
var f__20759__auto__ = (function (){var switch__20737__auto__ = ((function (c__20758__auto___32264,res_chan,tabId,url,domain){
return (function (state_32178){
var state_val_32179 = (state_32178[(1)]);
if((state_val_32179 === (7))){
var inst_32172 = (state_32178[(2)]);
var inst_32173 = cljs.core.async.close_BANG_.call(null,res_chan);
var inst_32174 = thesis.background.core.remove_client_BANG_.call(null,client);
var state_32178__$1 = (function (){var statearr_32180 = state_32178;
(statearr_32180[(7)] = inst_32173);

(statearr_32180[(8)] = inst_32172);

return statearr_32180;
})();
var statearr_32181_32265 = state_32178__$1;
(statearr_32181_32265[(2)] = inst_32174);

(statearr_32181_32265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (20))){
var inst_32103 = (state_32178[(9)]);
var inst_32130 = goog.object.get(inst_32103,"req");
var inst_32131 = thesis.background.storage.get_site_info.call(null,res_chan,inst_32130);
var state_32178__$1 = state_32178;
var statearr_32182_32266 = state_32178__$1;
(statearr_32182_32266[(2)] = inst_32131);

(statearr_32182_32266[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (27))){
var inst_32111 = (state_32178[(10)]);
var inst_32143 = cljs.core._EQ_.call(null,"open-tab",inst_32111);
var state_32178__$1 = state_32178;
if(inst_32143){
var statearr_32183_32267 = state_32178__$1;
(statearr_32183_32267[(1)] = (29));

} else {
var statearr_32184_32268 = state_32178__$1;
(statearr_32184_32268[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (1))){
var state_32178__$1 = state_32178;
var statearr_32185_32269 = state_32178__$1;
(statearr_32185_32269[(2)] = null);

(statearr_32185_32269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (24))){
var inst_32111 = (state_32178[(10)]);
var inst_32139 = cljs.core._EQ_.call(null,"close-chan",inst_32111);
var state_32178__$1 = state_32178;
if(inst_32139){
var statearr_32186_32270 = state_32178__$1;
(statearr_32186_32270[(1)] = (26));

} else {
var statearr_32187_32271 = state_32178__$1;
(statearr_32187_32271[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (4))){
var inst_32103 = (state_32178[(9)]);
var inst_32103__$1 = (state_32178[(2)]);
var state_32178__$1 = (function (){var statearr_32188 = state_32178;
(statearr_32188[(9)] = inst_32103__$1);

return statearr_32188;
})();
if(cljs.core.truth_(inst_32103__$1)){
var statearr_32189_32272 = state_32178__$1;
(statearr_32189_32272[(1)] = (5));

} else {
var statearr_32190_32273 = state_32178__$1;
(statearr_32190_32273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (15))){
var inst_32111 = (state_32178[(10)]);
var inst_32124 = cljs.core._EQ_.call(null,"get-location-counts",inst_32111);
var state_32178__$1 = state_32178;
if(inst_32124){
var statearr_32191_32274 = state_32178__$1;
(statearr_32191_32274[(1)] = (17));

} else {
var statearr_32192_32275 = state_32178__$1;
(statearr_32192_32275[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (21))){
var inst_32111 = (state_32178[(10)]);
var inst_32133 = cljs.core._EQ_.call(null,"all-for-domain",inst_32111);
var state_32178__$1 = state_32178;
if(inst_32133){
var statearr_32193_32276 = state_32178__$1;
(statearr_32193_32276[(1)] = (23));

} else {
var statearr_32194_32277 = state_32178__$1;
(statearr_32194_32277[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (31))){
var inst_32154 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32195_32278 = state_32178__$1;
(statearr_32195_32278[(2)] = inst_32154);

(statearr_32195_32278[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (13))){
var inst_32166 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32196_32279 = state_32178__$1;
(statearr_32196_32279[(2)] = inst_32166);

(statearr_32196_32279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (22))){
var inst_32160 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32197_32280 = state_32178__$1;
(statearr_32197_32280[(2)] = inst_32160);

(statearr_32197_32280[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (29))){
var inst_32103 = (state_32178[(9)]);
var inst_32111 = (state_32178[(10)]);
var inst_32145 = goog.object.get(inst_32103,"domain");
var inst_32146 = goog.object.get(inst_32103,"typ");
var inst_32147 = console.log(inst_32146,inst_32145);
var inst_32148 = goog.object.get(chrome,"tabs");
var inst_32149 = (function (){var temp__4657__auto__ = inst_32103;
var message = inst_32103;
var pred__32108 = cljs.core._EQ_;
var expr__32109 = inst_32111;
var target_url = inst_32145;
var typ = inst_32146;
return ((function (temp__4657__auto__,message,pred__32108,expr__32109,target_url,typ,inst_32103,inst_32111,inst_32145,inst_32146,inst_32147,inst_32148,state_val_32179,c__20758__auto___32264,res_chan,tabId,url,domain){
return (function (){
return cljs.core.reset_BANG_.call(null,thesis.background.core.initialise_tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typ","typ",-1304536900),typ,new cljs.core.Keyword(null,"url","url",276297046),target_url], null));
});
;})(temp__4657__auto__,message,pred__32108,expr__32109,target_url,typ,inst_32103,inst_32111,inst_32145,inst_32146,inst_32147,inst_32148,state_val_32179,c__20758__auto___32264,res_chan,tabId,url,domain))
})();
var inst_32150 = inst_32148.create({"url": goog.object.get(chrome,"extension").getURL("map.html")},inst_32149);
var state_32178__$1 = (function (){var statearr_32198 = state_32178;
(statearr_32198[(11)] = inst_32147);

return statearr_32198;
})();
var statearr_32199_32281 = state_32178__$1;
(statearr_32199_32281[(2)] = inst_32150);

(statearr_32199_32281[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (6))){
var state_32178__$1 = state_32178;
var statearr_32200_32282 = state_32178__$1;
(statearr_32200_32282[(2)] = null);

(statearr_32200_32282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (28))){
var inst_32156 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32201_32283 = state_32178__$1;
(statearr_32201_32283[(2)] = inst_32156);

(statearr_32201_32283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (25))){
var inst_32158 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32202_32284 = state_32178__$1;
(statearr_32202_32284[(2)] = inst_32158);

(statearr_32202_32284[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (17))){
var inst_32126 = thesis.background.storage.get_location_counts.call(null,res_chan);
var state_32178__$1 = state_32178;
var statearr_32203_32285 = state_32178__$1;
(statearr_32203_32285[(2)] = inst_32126);

(statearr_32203_32285[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (3))){
var inst_32176 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32178__$1,inst_32176);
} else {
if((state_val_32179 === (12))){
var inst_32111 = (state_32178[(10)]);
var inst_32120 = cljs.core._EQ_.call(null,"get-locations",inst_32111);
var state_32178__$1 = state_32178;
if(inst_32120){
var statearr_32204_32286 = state_32178__$1;
(statearr_32204_32286[(1)] = (14));

} else {
var statearr_32205_32287 = state_32178__$1;
(statearr_32205_32287[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (2))){
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(4),client);
} else {
if((state_val_32179 === (23))){
var inst_32103 = (state_32178[(9)]);
var inst_32135 = goog.object.get(inst_32103,"req");
var inst_32136 = goog.object.get(inst_32103,"typ");
var inst_32137 = thesis.background.storage.get_all_for_domain.call(null,res_chan,inst_32135,inst_32136);
var state_32178__$1 = state_32178;
var statearr_32206_32288 = state_32178__$1;
(statearr_32206_32288[(2)] = inst_32137);

(statearr_32206_32288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (19))){
var inst_32162 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32207_32289 = state_32178__$1;
(statearr_32207_32289[(2)] = inst_32162);

(statearr_32207_32289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (11))){
var inst_32118 = thesis.background.storage.get_distinct_domains.call(null,res_chan);
var state_32178__$1 = state_32178;
var statearr_32208_32290 = state_32178__$1;
(statearr_32208_32290[(2)] = inst_32118);

(statearr_32208_32290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (9))){
var inst_32111 = (state_32178[(10)]);
var inst_32116 = cljs.core._EQ_.call(null,"get-counts",inst_32111);
var state_32178__$1 = state_32178;
if(inst_32116){
var statearr_32209_32291 = state_32178__$1;
(statearr_32209_32291[(1)] = (11));

} else {
var statearr_32210_32292 = state_32178__$1;
(statearr_32210_32292[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (5))){
var inst_32103 = (state_32178[(9)]);
var inst_32111 = (state_32178[(10)]);
var inst_32105 = goog.object.get(inst_32103,"reqtype");
var inst_32106 = [cljs.core.str("Tab "),cljs.core.str(tabId),cljs.core.str(": "),cljs.core.str(inst_32105)].join('');
var inst_32107 = console.log(inst_32106);
var inst_32111__$1 = goog.object.get(inst_32103,"reqtype");
var inst_32112 = cljs.core._EQ_.call(null,"ind-clicked!",inst_32111__$1);
var state_32178__$1 = (function (){var statearr_32211 = state_32178;
(statearr_32211[(12)] = inst_32107);

(statearr_32211[(10)] = inst_32111__$1);

return statearr_32211;
})();
if(inst_32112){
var statearr_32212_32293 = state_32178__$1;
(statearr_32212_32293[(1)] = (8));

} else {
var statearr_32213_32294 = state_32178__$1;
(statearr_32213_32294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (14))){
var inst_32122 = thesis.background.storage.get_distinct_locations.call(null,res_chan);
var state_32178__$1 = state_32178;
var statearr_32214_32295 = state_32178__$1;
(statearr_32214_32295[(2)] = inst_32122);

(statearr_32214_32295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (26))){
var inst_32103 = (state_32178[(9)]);
var inst_32141 = console.log(inst_32103);
var state_32178__$1 = (function (){var statearr_32215 = state_32178;
(statearr_32215[(13)] = inst_32141);

return statearr_32215;
})();
var statearr_32216_32296 = state_32178__$1;
(statearr_32216_32296[(2)] = null);

(statearr_32216_32296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (16))){
var inst_32164 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32217_32297 = state_32178__$1;
(statearr_32217_32297[(2)] = inst_32164);

(statearr_32217_32297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (30))){
var inst_32103 = (state_32178[(9)]);
var inst_32152 = console.log("unhandled!: ",inst_32103);
var state_32178__$1 = (function (){var statearr_32218 = state_32178;
(statearr_32218[(14)] = inst_32152);

return statearr_32218;
})();
var statearr_32219_32298 = state_32178__$1;
(statearr_32219_32298[(2)] = null);

(statearr_32219_32298[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (10))){
var inst_32168 = (state_32178[(2)]);
var state_32178__$1 = (function (){var statearr_32220 = state_32178;
(statearr_32220[(15)] = inst_32168);

return statearr_32220;
})();
var statearr_32221_32299 = state_32178__$1;
(statearr_32221_32299[(2)] = null);

(statearr_32221_32299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (18))){
var inst_32111 = (state_32178[(10)]);
var inst_32128 = cljs.core._EQ_.call(null,"site-info",inst_32111);
var state_32178__$1 = state_32178;
if(inst_32128){
var statearr_32222_32300 = state_32178__$1;
(statearr_32222_32300[(1)] = (20));

} else {
var statearr_32223_32301 = state_32178__$1;
(statearr_32223_32301[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (8))){
var inst_32114 = thesis.background.core.tell_client_about_click_BANG_.call(null,tabId,domain);
var state_32178__$1 = state_32178;
var statearr_32224_32302 = state_32178__$1;
(statearr_32224_32302[(2)] = inst_32114);

(statearr_32224_32302[(1)] = (10));


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
});})(c__20758__auto___32264,res_chan,tabId,url,domain))
;
return ((function (switch__20737__auto__,c__20758__auto___32264,res_chan,tabId,url,domain){
return (function() {
var thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__ = null;
var thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____0 = (function (){
var statearr_32228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32228[(0)] = thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__);

(statearr_32228[(1)] = (1));

return statearr_32228;
});
var thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____1 = (function (state_32178){
while(true){
var ret_value__20739__auto__ = (function (){try{while(true){
var result__20740__auto__ = switch__20737__auto__.call(null,state_32178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20740__auto__;
}
break;
}
}catch (e32229){if((e32229 instanceof Object)){
var ex__20741__auto__ = e32229;
var statearr_32230_32303 = state_32178;
(statearr_32230_32303[(5)] = ex__20741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32304 = state_32178;
state_32178 = G__32304;
continue;
} else {
return ret_value__20739__auto__;
}
break;
}
});
thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__ = function(state_32178){
switch(arguments.length){
case 0:
return thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____0.call(this);
case 1:
return thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____1.call(this,state_32178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____0;
thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____1;
return thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__;
})()
;})(switch__20737__auto__,c__20758__auto___32264,res_chan,tabId,url,domain))
})();
var state__20760__auto__ = (function (){var statearr_32231 = f__20759__auto__.call(null);
(statearr_32231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20758__auto___32264);

return statearr_32231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20760__auto__);
});})(c__20758__auto___32264,res_chan,tabId,url,domain))
);


var c__20758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20758__auto__,res_chan,tabId,url,domain){
return (function (){
var f__20759__auto__ = (function (){var switch__20737__auto__ = ((function (c__20758__auto__,res_chan,tabId,url,domain){
return (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (1))){
var state_32246__$1 = state_32246;
var statearr_32248_32305 = state_32246__$1;
(statearr_32248_32305[(2)] = null);

(statearr_32248_32305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (2))){
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32246__$1,(4),res_chan);
} else {
if((state_val_32247 === (3))){
var inst_32244 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (4))){
var inst_32234 = (state_32246[(7)]);
var inst_32234__$1 = (state_32246[(2)]);
var state_32246__$1 = (function (){var statearr_32249 = state_32246;
(statearr_32249[(7)] = inst_32234__$1);

return statearr_32249;
})();
if(cljs.core.truth_(inst_32234__$1)){
var statearr_32250_32306 = state_32246__$1;
(statearr_32250_32306[(1)] = (5));

} else {
var statearr_32251_32307 = state_32246__$1;
(statearr_32251_32307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (5))){
var inst_32234 = (state_32246[(7)]);
var inst_32236 = cljs.core.clj__GT_js.call(null,inst_32234);
var inst_32237 = thesis.background.core.message_to_client.call(null,tabId,inst_32236);
var state_32246__$1 = (function (){var statearr_32252 = state_32246;
(statearr_32252[(8)] = inst_32237);

return statearr_32252;
})();
var statearr_32253_32308 = state_32246__$1;
(statearr_32253_32308[(2)] = null);

(statearr_32253_32308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (6))){
var state_32246__$1 = state_32246;
var statearr_32254_32309 = state_32246__$1;
(statearr_32254_32309[(2)] = null);

(statearr_32254_32309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (7))){
var inst_32241 = (state_32246[(2)]);
var inst_32242 = console.log("res chan closed for ",url);
var state_32246__$1 = (function (){var statearr_32255 = state_32246;
(statearr_32255[(9)] = inst_32242);

(statearr_32255[(10)] = inst_32241);

return statearr_32255;
})();
var statearr_32256_32310 = state_32246__$1;
(statearr_32256_32310[(2)] = null);

(statearr_32256_32310[(1)] = (3));


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
});})(c__20758__auto__,res_chan,tabId,url,domain))
;
return ((function (switch__20737__auto__,c__20758__auto__,res_chan,tabId,url,domain){
return (function() {
var thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__ = null;
var thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____0 = (function (){
var statearr_32260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32260[(0)] = thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__);

(statearr_32260[(1)] = (1));

return statearr_32260;
});
var thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____1 = (function (state_32246){
while(true){
var ret_value__20739__auto__ = (function (){try{while(true){
var result__20740__auto__ = switch__20737__auto__.call(null,state_32246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20740__auto__;
}
break;
}
}catch (e32261){if((e32261 instanceof Object)){
var ex__20741__auto__ = e32261;
var statearr_32262_32311 = state_32246;
(statearr_32262_32311[(5)] = ex__20741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32312 = state_32246;
state_32246 = G__32312;
continue;
} else {
return ret_value__20739__auto__;
}
break;
}
});
thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____0.call(this);
case 1:
return thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____0;
thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto____1;
return thesis$background$core$run_client_message_loop_BANG__$_state_machine__20738__auto__;
})()
;})(switch__20737__auto__,c__20758__auto__,res_chan,tabId,url,domain))
})();
var state__20760__auto__ = (function (){var statearr_32263 = f__20759__auto__.call(null);
(statearr_32263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20758__auto__);

return statearr_32263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20760__auto__);
});})(c__20758__auto__,res_chan,tabId,url,domain))
);

return c__20758__auto__;
});
thesis.background.core.handle_client_connection_BANG_ = (function thesis$background$core$handle_client_connection_BANG_(client){
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,thesis.background.core.tabs),(function (){var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,client),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
})()))){
thesis.background.core.add_client_BANG_.call(null,client);

thesis.background.core.message_to_client.call(null,(function (){var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,client),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
})(),{"restype": "ACK", "init-url": cljs.core.get.call(null,cljs.core.deref.call(null,thesis.background.core.initialise_tab),new cljs.core.Keyword(null,"url","url",276297046)), "typ": cljs.core.get.call(null,cljs.core.deref.call(null,thesis.background.core.initialise_tab),new cljs.core.Keyword(null,"typ","typ",-1304536900))});

return thesis.background.core.run_client_message_loop_BANG_.call(null,client);
} else {
return null;
}
});
thesis.background.core.tell_clients_about_new_tab_BANG_ = (function thesis$background$core$tell_clients_about_new_tab_BANG_(tab){
var seq__32317 = cljs.core.seq.call(null,cljs.core.deref.call(null,thesis.background.core.clients));
var chunk__32318 = null;
var count__32319 = (0);
var i__32320 = (0);
while(true){
if((i__32320 < count__32319)){
var client = cljs.core._nth.call(null,chunk__32318,i__32320);

var G__32321 = seq__32317;
var G__32322 = chunk__32318;
var G__32323 = count__32319;
var G__32324 = (i__32320 + (1));
seq__32317 = G__32321;
chunk__32318 = G__32322;
count__32319 = G__32323;
i__32320 = G__32324;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32317);
if(temp__4657__auto__){
var seq__32317__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32317__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__32317__$1);
var G__32325 = cljs.core.chunk_rest.call(null,seq__32317__$1);
var G__32326 = c__19527__auto__;
var G__32327 = cljs.core.count.call(null,c__19527__auto__);
var G__32328 = (0);
seq__32317 = G__32325;
chunk__32318 = G__32326;
count__32319 = G__32327;
i__32320 = G__32328;
continue;
} else {
var client = cljs.core.first.call(null,seq__32317__$1);

var G__32329 = cljs.core.next.call(null,seq__32317__$1);
var G__32330 = null;
var G__32331 = (0);
var G__32332 = (0);
seq__32317 = G__32329;
chunk__32318 = G__32330;
count__32319 = G__32331;
i__32320 = G__32332;
continue;
}
} else {
return null;
}
}
break;
}
});
thesis.background.core.message_to_client = (function thesis$background$core$message_to_client(tabId,msg){
var seq__32337 = cljs.core.seq.call(null,cljs.core.deref.call(null,thesis.background.core.clients));
var chunk__32338 = null;
var count__32339 = (0);
var i__32340 = (0);
while(true){
if((i__32340 < count__32339)){
var client = cljs.core._nth.call(null,chunk__32338,i__32340);
if(cljs.core._EQ_.call(null,tabId,(function (){var temp__4657__auto__ = goog.object.get(chromex.protocols.get_sender.call(null,client),"tab");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
})())){
chromex.protocols.post_message_BANG_.call(null,client,cljs.core.clj__GT_js.call(null,msg));
} else {
}

var G__32341 = seq__32337;
var G__32342 = chunk__32338;
var G__32343 = count__32339;
var G__32344 = (i__32340 + (1));
seq__32337 = G__32341;
chunk__32338 = G__32342;
count__32339 = G__32343;
i__32340 = G__32344;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32337);
if(temp__4657__auto__){
var seq__32337__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32337__$1)){
var c__19527__auto__ = cljs.core.chunk_first.call(null,seq__32337__$1);
var G__32345 = cljs.core.chunk_rest.call(null,seq__32337__$1);
var G__32346 = c__19527__auto__;
var G__32347 = cljs.core.count.call(null,c__19527__auto__);
var G__32348 = (0);
seq__32337 = G__32345;
chunk__32338 = G__32346;
count__32339 = G__32347;
i__32340 = G__32348;
continue;
} else {
var client = cljs.core.first.call(null,seq__32337__$1);
if(cljs.core._EQ_.call(null,tabId,(function (){var temp__4657__auto____$1 = goog.object.get(chromex.protocols.get_sender.call(null,client),"tab");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__20823__auto__ = temp__4657__auto____$1;
return goog.object.get(o__20823__auto__,"id");
} else {
return null;
}
})())){
chromex.protocols.post_message_BANG_.call(null,client,cljs.core.clj__GT_js.call(null,msg));
} else {
}

var G__32349 = cljs.core.next.call(null,seq__32337__$1);
var G__32350 = null;
var G__32351 = (0);
var G__32352 = (0);
seq__32337 = G__32349;
chunk__32338 = G__32350;
count__32339 = G__32351;
i__32340 = G__32352;
continue;
}
} else {
return null;
}
}
break;
}
});
thesis.background.core.tell_client_about_click_BANG_ = (function thesis$background$core$tell_client_about_click_BANG_(id,url){
return goog.object.get(chrome,"tabs").captureVisibleTab({"quality": (50)},(function (p1__32353_SHARP_){
return thesis.background.core.message_to_client.call(null,id,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"init",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"img","img",1442687358),p1__32353_SHARP_,new cljs.core.Keyword(null,"tabdict","tabdict",-2005942028),thesis.background.storage.get_tabdict.call(null,id),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));
});
thesis.background.core.tell_client_about_request_BANG_ = (function thesis$background$core$tell_client_about_request_BANG_(tabId,tabUrl,r){
return thesis.background.core.message_to_client.call(null,tabId,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"new-request",new cljs.core.Keyword(null,"tabdict","tabdict",-2005942028),thesis.background.storage.get_tabdict.call(null,tabId)], null)));
});
thesis.background.core.handle_request = (function thesis$background$core$handle_request(request){
var req = cljs.core.first.call(null,request);
var url = goog.object.get(req,"url");
var tabId = goog.object.get(req,"tabId");
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,thesis.background.core.tabs),tabId)){
return goog.object.get(chrome,"tabs").get(tabId,((function (req,url,tabId){
return (function (p1__32354_SHARP_){
var tabUrl = goog.object.get(p1__32354_SHARP_,"url");
if(!((cljs.core._EQ_.call(null,cljs.core.subs.call(null,tabUrl,(0),(19)),"chrome-extension://")) || (cljs.core._EQ_.call(null,cljs.core.subs.call(null,tabUrl,(0),(9)),"chrome://")))){
thesis.background.core.tell_client_about_request_BANG_.call(null,tabId,tabUrl,req);

return thesis.background.storage.process_request_BANG_.call(null,req,cljs.core.deref.call(null,thesis.background.core.location),tabUrl);
} else {
return null;
}
});})(req,url,tabId))
);
} else {
return null;
}
});
thesis.background.core.handle_tab_closed = (function thesis$background$core$handle_tab_closed(tabId){
return cljs.core.swap_BANG_.call(null,thesis.background.core.tabs,cljs.core.disj,tabId);
});
thesis.background.core.handle_tab_created = (function thesis$background$core$handle_tab_created(tab){
return cljs.core.swap_BANG_.call(null,thesis.background.core.tabs,cljs.core.conj,goog.object.get(tab,"id"));
});
thesis.background.core.process_chrome_event = (function thesis$background$core$process_chrome_event(event_num,event){
var vec__32358 = event;
var event_id = cljs.core.nth.call(null,vec__32358,(0),null);
var event_args = cljs.core.nth.call(null,vec__32358,(1),null);
var G__32359 = (((event_id instanceof cljs.core.Keyword))?event_id.fqn:null);
switch (G__32359) {
case "chromex.ext.browser-action/on-clicked":
return thesis.background.core.tell_client_about_click_BANG_.call(null,goog.object.get(cljs.core.first.call(null,event_args),"id"),"huhu.com");

break;
case "chromex.ext.storage/on-changed":
return (function (){var temp__4657__auto__ = goog.object.get(chrome,"storage");
if(cljs.core.truth_(temp__4657__auto__)){
var o__20823__auto__ = temp__4657__auto__;
return goog.object.get(o__20823__auto__,"local");
} else {
return null;
}
})().get(((function (G__32359,vec__32358,event_id,event_args){
return (function (p1__32355_SHARP_){
return cljs.core.reset_BANG_.call(null,thesis.background.core.location,p1__32355_SHARP_);
});})(G__32359,vec__32358,event_id,event_args))
);

break;
case "chromex.ext.web-request/on-before-request":
return thesis.background.core.handle_request.call(null,event_args);

break;
case "chromex.ext.runtime/on-connect":
return cljs.core.apply.call(null,thesis.background.core.handle_client_connection_BANG_,event_args);

break;
case "chromex.ext.tabs/on-removed":
return thesis.background.core.handle_tab_closed.call(null,cljs.core.first.call(null,event_args));

break;
case "chromex.ext.tabs/on-created":
return thesis.background.core.handle_tab_created.call(null,cljs.core.first.call(null,event_args));

break;
case "chromex.ext.tabs/on-replaced":
thesis.background.core.handle_tab_created.call(null,{"id": cljs.core.first.call(null,event_args)});

return thesis.background.core.handle_tab_closed.call(null,cljs.core.peek.call(null,event_args));

break;
default:
return null;

}
});
thesis.background.core.run_chrome_event_loop_BANG_ = (function thesis$background$core$run_chrome_event_loop_BANG_(chrome_event_channel){
console.log("BACKGROUND: starting main event loop...");


var c__20758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20758__auto__){
return (function (){
var f__20759__auto__ = (function (){var switch__20737__auto__ = ((function (c__20758__auto__){
return (function (state_32410){
var state_val_32411 = (state_32410[(1)]);
if((state_val_32411 === (1))){
var inst_32395 = (1);
var state_32410__$1 = (function (){var statearr_32412 = state_32410;
(statearr_32412[(7)] = inst_32395);

return statearr_32412;
})();
var statearr_32413_32429 = state_32410__$1;
(statearr_32413_32429[(2)] = null);

(statearr_32413_32429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (2))){
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(4),chrome_event_channel);
} else {
if((state_val_32411 === (3))){
var inst_32408 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32410__$1,inst_32408);
} else {
if((state_val_32411 === (4))){
var inst_32398 = (state_32410[(8)]);
var inst_32398__$1 = (state_32410[(2)]);
var state_32410__$1 = (function (){var statearr_32414 = state_32410;
(statearr_32414[(8)] = inst_32398__$1);

return statearr_32414;
})();
if(cljs.core.truth_(inst_32398__$1)){
var statearr_32415_32430 = state_32410__$1;
(statearr_32415_32430[(1)] = (5));

} else {
var statearr_32416_32431 = state_32410__$1;
(statearr_32416_32431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (5))){
var inst_32398 = (state_32410[(8)]);
var inst_32395 = (state_32410[(7)]);
var inst_32400 = thesis.background.core.process_chrome_event.call(null,inst_32395,inst_32398);
var inst_32401 = (inst_32395 + (1));
var inst_32395__$1 = inst_32401;
var state_32410__$1 = (function (){var statearr_32417 = state_32410;
(statearr_32417[(9)] = inst_32400);

(statearr_32417[(7)] = inst_32395__$1);

return statearr_32417;
})();
var statearr_32418_32432 = state_32410__$1;
(statearr_32418_32432[(2)] = null);

(statearr_32418_32432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (6))){
var state_32410__$1 = state_32410;
var statearr_32419_32433 = state_32410__$1;
(statearr_32419_32433[(2)] = null);

(statearr_32419_32433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (7))){
var inst_32405 = (state_32410[(2)]);
var inst_32406 = console.log("BACKGROUND: leaving main event loop");
var state_32410__$1 = (function (){var statearr_32420 = state_32410;
(statearr_32420[(10)] = inst_32406);

(statearr_32420[(11)] = inst_32405);

return statearr_32420;
})();
var statearr_32421_32434 = state_32410__$1;
(statearr_32421_32434[(2)] = null);

(statearr_32421_32434[(1)] = (3));


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
});})(c__20758__auto__))
;
return ((function (switch__20737__auto__,c__20758__auto__){
return (function() {
var thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto__ = null;
var thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto____0 = (function (){
var statearr_32425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32425[(0)] = thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto__);

(statearr_32425[(1)] = (1));

return statearr_32425;
});
var thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto____1 = (function (state_32410){
while(true){
var ret_value__20739__auto__ = (function (){try{while(true){
var result__20740__auto__ = switch__20737__auto__.call(null,state_32410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20740__auto__;
}
break;
}
}catch (e32426){if((e32426 instanceof Object)){
var ex__20741__auto__ = e32426;
var statearr_32427_32435 = state_32410;
(statearr_32427_32435[(5)] = ex__20741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32436 = state_32410;
state_32410 = G__32436;
continue;
} else {
return ret_value__20739__auto__;
}
break;
}
});
thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto__ = function(state_32410){
switch(arguments.length){
case 0:
return thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto____0.call(this);
case 1:
return thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto____1.call(this,state_32410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$0 = thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto____0;
thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto__.cljs$core$IFn$_invoke$arity$1 = thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto____1;
return thesis$background$core$run_chrome_event_loop_BANG__$_state_machine__20738__auto__;
})()
;})(switch__20737__auto__,c__20758__auto__))
})();
var state__20760__auto__ = (function (){var statearr_32428 = f__20759__auto__.call(null);
(statearr_32428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20758__auto__);

return statearr_32428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20760__auto__);
});})(c__20758__auto__))
);

return c__20758__auto__;
});
thesis.background.core.boot_chrome_event_loop_BANG_ = (function thesis$background$core$boot_chrome_event_loop_BANG_(){
var chrome_event_channel = chromex.chrome_event_channel.make_chrome_event_channel.call(null,cljs.core.async.chan.call(null));
var chan32443_32449 = chrome_event_channel;
var config32444_32450 = chromex.config.get_active_config.call(null);
chromex.ext.tabs.on_created_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_updated_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_moved_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_activated_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_highlighted_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_detached_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_attached_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_removed_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_replaced_STAR_.call(null,config32444_32450,chan32443_32449);

chromex.ext.tabs.on_zoom_change_STAR_.call(null,config32444_32450,chan32443_32449);

var chan32445_32451 = chrome_event_channel;
var config32446_32452 = chromex.config.get_active_config.call(null);
chromex.ext.runtime.on_startup_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_installed_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_suspend_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_suspend_canceled_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_update_available_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_connect_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_connect_external_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_message_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_message_external_STAR_.call(null,config32446_32452,chan32445_32451);

chromex.ext.runtime.on_restart_required_STAR_.call(null,config32446_32452,chan32445_32451);

var chan32447_32453 = chrome_event_channel;
var config32448_32454 = chromex.config.get_active_config.call(null);
chromex.ext.storage.on_changed_STAR_.call(null,config32448_32454,chan32447_32453);

chromex.ext.browser_action.on_clicked_STAR_.call(null,chromex.config.get_active_config.call(null),chrome_event_channel);

chromex.ext.web_request.on_before_request_STAR_.call(null,chromex.config.get_active_config.call(null),chrome_event_channel,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://*/*","https://*/*"], null)], null)));

chromex.ext.web_request.on_response_started_STAR_.call(null,chromex.config.get_active_config.call(null),chrome_event_channel,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://*/*","https://*/*"], null)], null)));

return thesis.background.core.run_chrome_event_loop_BANG_.call(null,chrome_event_channel);
});
thesis.background.core.init_BANG_ = (function thesis$background$core$init_BANG_(){
console.log("BACKGROUND: init");


thesis.background.location.watch_location_BANG_.call(null);

thesis.background.storage.setup_storage_BANG_.call(null);

thesis.background.storage.get_and_store_psl_BANG_.call(null);

return thesis.background.core.boot_chrome_event_loop_BANG_.call(null);
});

//# sourceMappingURL=core.js.map