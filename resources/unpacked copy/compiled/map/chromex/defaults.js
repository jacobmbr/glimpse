// Compiled by ClojureScript 1.8.51 {}
goog.provide('chromex.defaults');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('chromex.error');
goog.require('chromex.protocols');
chromex.defaults.log_prefix = "[chromex]";
chromex.defaults.console_log = (function chromex$defaults$console_log(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30230 = arguments.length;
var i__19488__auto___30231 = (0);
while(true){
if((i__19488__auto___30231 < len__19487__auto___30230)){
args__19494__auto__.push((arguments[i__19488__auto___30231]));

var G__30232 = (i__19488__auto___30231 + (1));
i__19488__auto___30231 = G__30232;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});

chromex.defaults.console_log.cljs$lang$maxFixedArity = (0);

chromex.defaults.console_log.cljs$lang$applyTo = (function (seq30229){
return chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30229));
});
chromex.defaults.console_error = (function chromex$defaults$console_error(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30234 = arguments.length;
var i__19488__auto___30235 = (0);
while(true){
if((i__19488__auto___30235 < len__19487__auto___30234)){
args__19494__auto__.push((arguments[i__19488__auto___30235]));

var G__30236 = (i__19488__auto___30235 + (1));
i__19488__auto___30235 = G__30236;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});

chromex.defaults.console_error.cljs$lang$maxFixedArity = (0);

chromex.defaults.console_error.cljs$lang$applyTo = (function (seq30233){
return chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30233));
});
chromex.defaults.default_logger = (function chromex$defaults$default_logger(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30238 = arguments.length;
var i__19488__auto___30239 = (0);
while(true){
if((i__19488__auto___30239 < len__19487__auto___30238)){
args__19494__auto__.push((arguments[i__19488__auto___30239]));

var G__30240 = (i__19488__auto___30239 + (1));
i__19488__auto___30239 = G__30240;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,chromex.defaults.console_log,chromex.defaults.log_prefix,args);
});

chromex.defaults.default_logger.cljs$lang$maxFixedArity = (0);

chromex.defaults.default_logger.cljs$lang$applyTo = (function (seq30237){
return chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30237));
});
chromex.defaults.default_callback_error_reporter = (function chromex$defaults$default_callback_error_reporter(descriptor,error){
var function$ = (function (){var or__18417__auto__ = [cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(descriptor))),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(descriptor)))].join('');
if(cljs.core.truth_(or__18417__auto__)){
return or__18417__auto__;
} else {
return "an unknown function";
}
})();
var explanation = goog.object.get(error,"message");
var message = [cljs.core.str("an error occured during the call to "),cljs.core.str(function$),cljs.core.str((cljs.core.truth_(explanation)?[cljs.core.str(": "),cljs.core.str(explanation)].join(''):null))].join('');
return chromex.defaults.console_error.call(null,chromex.defaults.log_prefix,message,"Details:",error);
});
chromex.defaults.report_error_if_needed_BANG_ = (function chromex$defaults$report_error_if_needed_BANG_(config,descriptor,error){
var temp__4657__auto__ = new cljs.core.Keyword(null,"callback-error-reporter","callback-error-reporter",-2104016040).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4657__auto__)){
var error_reporter = temp__4657__auto__;
if(cljs.core.fn_QMARK_.call(null,error_reporter)){
} else {
throw (new Error("Assert failed: (fn? error-reporter)"));
}

return error_reporter.call(null,descriptor,error);
} else {
return null;
}
});
chromex.defaults.default_callback_fn_factory = (function chromex$defaults$default_callback_fn_factory(config,descriptor,chan){
return (function() { 
var G__30241__delegate = function (args){
var temp__4655__auto___30242 = (function (){var temp__4657__auto__ = goog.object.get(chrome,"runtime");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23407__auto__ = temp__4657__auto__;
return goog.object.get(o__23407__auto__,"lastError");
} else {
return null;
}
})();
if(cljs.core.truth_(temp__4655__auto___30242)){
var error_30243 = temp__4655__auto___30242;
chromex.error.set_last_error_BANG_.call(null,error_30243);

chromex.defaults.report_error_if_needed_BANG_.call(null,config,descriptor,error_30243);
} else {
chromex.error.set_last_error_BANG_.call(null,null);

cljs.core.async.put_BANG_.call(null,chan,cljs.core.vec.call(null,args));
}

return cljs.core.async.close_BANG_.call(null,chan);
};
var G__30241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30244__i = 0, G__30244__a = new Array(arguments.length -  0);
while (G__30244__i < G__30244__a.length) {G__30244__a[G__30244__i] = arguments[G__30244__i + 0]; ++G__30244__i;}
  args = new cljs.core.IndexedSeq(G__30244__a,0);
} 
return G__30241__delegate.call(this,args);};
G__30241.cljs$lang$maxFixedArity = 0;
G__30241.cljs$lang$applyTo = (function (arglist__30245){
var args = cljs.core.seq(arglist__30245);
return G__30241__delegate(args);
});
G__30241.cljs$core$IFn$_invoke$arity$variadic = G__30241__delegate;
return G__30241;
})()
;
});
chromex.defaults.default_callback_channel_factory = (function chromex$defaults$default_callback_channel_factory(_config){
return cljs.core.async.chan.call(null);
});
chromex.defaults.default_event_listener_factory = (function chromex$defaults$default_event_listener_factory(_config,event_id,chan){
return (function() { 
var G__30246__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,cljs.core.vec.call(null,args)], null));
};
var G__30246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30247__i = 0, G__30247__a = new Array(arguments.length -  0);
while (G__30247__i < G__30247__a.length) {G__30247__a[G__30247__i] = arguments[G__30247__i + 0]; ++G__30247__i;}
  args = new cljs.core.IndexedSeq(G__30247__a,0);
} 
return G__30246__delegate.call(this,args);};
G__30246.cljs$lang$maxFixedArity = 0;
G__30246.cljs$lang$applyTo = (function (arglist__30248){
var args = cljs.core.seq(arglist__30248);
return G__30246__delegate(args);
});
G__30246.cljs$core$IFn$_invoke$arity$variadic = G__30246__delegate;
return G__30246;
})()
;
});
chromex.defaults.default_missing_api_check = (function chromex$defaults$default_missing_api_check(api,obj,key){
if(cljs.core.not.call(null,goog.object.containsKey(obj,key))){
throw (new Error([cljs.core.str("Chromex library tried to access a missing Chrome API object '"),cljs.core.str(api),cljs.core.str("'.\n"),cljs.core.str("Your Chrome version might be too old or too recent for running this extension.\n"),cljs.core.str("This is a failure which probably requires a software update.")].join('')));
} else {
return null;
}
});
chromex.defaults.default_chrome_storage_area_callback_fn_factory = (function chromex$defaults$default_chrome_storage_area_callback_fn_factory(config,chan){
return (function() { 
var G__30249__delegate = function (args){
var last_error = (function (){var temp__4657__auto__ = goog.object.get(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config),"chrome");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23408__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__23408__auto__,"runtime");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__23407__auto__ = temp__4657__auto____$1;
return goog.object.get(o__23407__auto__,"lastError");
} else {
return null;
}
} else {
return null;
}
})();
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,args),last_error], null));
};
var G__30249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30250__i = 0, G__30250__a = new Array(arguments.length -  0);
while (G__30250__i < G__30250__a.length) {G__30250__a[G__30250__i] = arguments[G__30250__i + 0]; ++G__30250__i;}
  args = new cljs.core.IndexedSeq(G__30250__a,0);
} 
return G__30249__delegate.call(this,args);};
G__30249.cljs$lang$maxFixedArity = 0;
G__30249.cljs$lang$applyTo = (function (arglist__30251){
var args = cljs.core.seq(arglist__30251);
return G__30249__delegate(args);
});
G__30249.cljs$core$IFn$_invoke$arity$variadic = G__30249__delegate;
return G__30249;
})()
;
});
chromex.defaults.default_chrome_storage_area_callback_channel_factory = (function chromex$defaults$default_chrome_storage_area_callback_channel_factory(_config){
return cljs.core.async.chan.call(null);
});
chromex.defaults.default_chrome_port_channel_factory = (function chromex$defaults$default_chrome_port_channel_factory(_config){
return cljs.core.async.chan.call(null);
});
chromex.defaults.default_chrome_port_on_message_fn_factory = (function chromex$defaults$default_chrome_port_on_message_fn_factory(config,chrome_port){
return (function (message){
if((message == null)){
var config__23420__auto__ = config;
var handler_key__23421__auto__ = new cljs.core.Keyword(null,"chrome-port-received-nil-message","chrome-port-received-nil-message",-1593119285);
var handler__23422__auto__ = handler_key__23421__auto__.call(null,config__23420__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__23422__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("invalid "),cljs.core.str(handler_key__23421__auto__),cljs.core.str(" in chromex config\n"),cljs.core.str("config: "),cljs.core.str(config__23420__auto__)].join('')),cljs.core.str("\n"),cljs.core.str("(clojure.core/fn? handler__23422__auto__)")].join('')));
}

return handler__23422__auto__.call(null,config__23420__auto__,chrome_port);
} else {
chromex.protocols.put_message_BANG_.call(null,chrome_port,message);

return null;
}
});
});
chromex.defaults.default_chrome_port_on_disconnect_fn_factory = (function chromex$defaults$default_chrome_port_on_disconnect_fn_factory(_config,chrome_port){
return (function (){
chromex.protocols.close_resources_BANG_.call(null,chrome_port);

chromex.protocols.set_connected_BANG_.call(null,chrome_port,false);

return null;
});
});
chromex.defaults.default_chrome_port_disconnect_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_disconnect_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("ChromePort: disconnect! called on already disconnected port"),cljs.core.str("\n"),cljs.core.str("false")].join('')));


return null;
});
chromex.defaults.default_chrome_port_post_message_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_post_message_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("ChromePort: post-message! called on already disconnected port"),cljs.core.str("\n"),cljs.core.str("false")].join('')));


return null;
});
chromex.defaults.default_chrome_port_on_disconnect_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_on_disconnect_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("ChromePort: on-disconnect! called on already disconnected port"),cljs.core.str("\n"),cljs.core.str("false")].join('')));


return null;
});
chromex.defaults.default_chrome_port_on_message_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_on_message_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("ChromePort: on-message! called on already disconnected port"),cljs.core.str("\n"),cljs.core.str("false")].join('')));


return null;
});
chromex.defaults.default_chrome_port_post_message_called_with_nil = (function chromex$defaults$default_chrome_port_post_message_called_with_nil(_config,_chrome_port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("ChromePort: post-message! called with nil message. Nil cannot be delivered via a core.async channel."),cljs.core.str("\n"),cljs.core.str("false")].join('')));


return null;
});
chromex.defaults.default_chrome_port_received_nil_message = (function chromex$defaults$default_chrome_port_received_nil_message(_config,_chrome_port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("ChromePort: received a nil message. Nil cannot be delivered via a core.async channel."),cljs.core.str("\n"),cljs.core.str("false")].join('')));


return null;
});
chromex.defaults.default_chrome_port_put_message_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_put_message_called_on_disconnected_port(_config,_chrome_port,message){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("ChromePort: put-message! called on already disconnected port.\n"),cljs.core.str("message: "),cljs.core.str(message)].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));


return null;
});
chromex.defaults.default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"chrome-port-post-message-called-on-disconnected-port","chrome-port-post-message-called-on-disconnected-port",-1329006944),new cljs.core.Keyword(null,"chrome-port-put-message-called-on-disconnected-port","chrome-port-put-message-called-on-disconnected-port",1479634211),new cljs.core.Keyword(null,"chrome-port-on-disconnect-called-on-disconnected-port","chrome-port-on-disconnect-called-on-disconnected-port",-269858172),new cljs.core.Keyword(null,"chrome-storage-area-callback-channel-factory","chrome-storage-area-callback-channel-factory",573191526),new cljs.core.Keyword(null,"chrome-port-post-message-called-with-nil","chrome-port-post-message-called-with-nil",864934312),new cljs.core.Keyword(null,"chrome-port-channel-factory","chrome-port-channel-factory",393485192),new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703),new cljs.core.Keyword(null,"chrome-port-received-nil-message","chrome-port-received-nil-message",-1593119285),new cljs.core.Keyword(null,"chrome-port-on-message-called-on-disconnected-port","chrome-port-on-message-called-on-disconnected-port",1590595021),new cljs.core.Keyword(null,"chrome-port-on-message-fn-factory","chrome-port-on-message-fn-factory",1295000398),new cljs.core.Keyword(null,"chrome-port-disconnect-called-on-disconnected-port","chrome-port-disconnect-called-on-disconnected-port",-1526797777),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091),new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029),new cljs.core.Keyword(null,"chrome-storage-area-callback-fn-factory","chrome-storage-area-callback-fn-factory",575077111),new cljs.core.Keyword(null,"callback-error-reporter","callback-error-reporter",-2104016040),new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909),new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003),new cljs.core.Keyword(null,"chrome-port-on-disconnect-fn-factory","chrome-port-on-disconnect-fn-factory",-501244675)],[chromex.defaults.default_chrome_port_post_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_put_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_on_disconnect_called_on_disconnected_port,chromex.defaults.default_chrome_storage_area_callback_channel_factory,chromex.defaults.default_chrome_port_post_message_called_with_nil,chromex.defaults.default_chrome_port_channel_factory,chromex.defaults.default_missing_api_check,chromex.defaults.default_chrome_port_received_nil_message,chromex.defaults.default_chrome_port_on_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_on_message_fn_factory,chromex.defaults.default_chrome_port_disconnect_called_on_disconnected_port,goog.global,chromex.defaults.default_logger,chromex.defaults.default_event_listener_factory,chromex.defaults.default_callback_fn_factory,chromex.defaults.default_chrome_storage_area_callback_fn_factory,chromex.defaults.default_callback_error_reporter,false,chromex.defaults.default_callback_channel_factory,chromex.defaults.default_chrome_port_on_disconnect_fn_factory]);

//# sourceMappingURL=defaults.js.map