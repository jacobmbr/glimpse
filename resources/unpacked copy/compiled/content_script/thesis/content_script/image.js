// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.image');
goog.require('cljs.core');
goog.require('chromex.logging');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.core');
thesis.content_script.image.THREE = THREE;
thesis.content_script.image.ascene = cljs.core.atom.call(null,null);
thesis.content_script.image.arenderer = cljs.core.atom.call(null,null);
thesis.content_script.image.aobject = cljs.core.atom.call(null,null);
thesis.content_script.image.adiv = cljs.core.atom.call(null,null);
thesis.content_script.image.acamera = cljs.core.atom.call(null,null);
thesis.content_script.image.draw_BANG_ = (function thesis$content_script$image$draw_BANG_(p__14749){
var map__14801 = p__14749;
var map__14801__$1 = ((((!((map__14801 == null)))?((((map__14801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14801):map__14801);
var x = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var rx = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rz = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"rz","rz",386461181));
var display = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"display","display",242065432));
if(cljs.core.not.call(null,display)){
cljs.core.deref.call(null,thesis.content_script.image.adiv).style.display = "none";
} else {
cljs.core.deref.call(null,thesis.content_script.image.adiv).style.display = "block";

cljs.core.deref.call(null,thesis.content_script.image.aobject).rotation.x = rx;

cljs.core.deref.call(null,thesis.content_script.image.aobject).rotation.y = ry;

cljs.core.deref.call(null,thesis.content_script.image.aobject).rotation.z = rz;

cljs.core.deref.call(null,thesis.content_script.image.aobject).position.x = x;

cljs.core.deref.call(null,thesis.content_script.image.aobject).position.y = y;

cljs.core.deref.call(null,thesis.content_script.image.aobject).position.z = z;
}

return cljs.core.deref.call(null,thesis.content_script.image.arenderer).render(cljs.core.deref.call(null,thesis.content_script.image.ascene),cljs.core.deref.call(null,thesis.content_script.image.acamera));
});
thesis.content_script.image.init_BANG_ = (function thesis$content_script$image$init_BANG_(img){
var w = window.innerWidth;
var h = window.innerHeight;
var camera = (new thesis.content_script.image.THREE.PerspectiveCamera((((2) * Math.atan((h / (2000)))) * ((180) / Math.PI)),(w / h),(1),(100)));
var scene = (new thesis.content_script.image.THREE.Scene());
var renderer = (new thesis.content_script.image.THREE.CSS3DRenderer());
var div = document.createElement("div");
var object = (new thesis.content_script.image.THREE.CSS3DObject(div));
var mychan = cljs.core.async.chan.call(null);
camera.position.z = (1000);

div.style.backgroundImage = [cljs.core.str("url("),cljs.core.str(img),cljs.core.str(")")].join('');

div.style.width = [cljs.core.str(w),cljs.core.str("px")].join('');

div.style.height = [cljs.core.str(h),cljs.core.str("px")].join('');

object.rotation.x = (0);

object.rotation.y = (0);

object.rotation.z = (0);

object.position.x = (0);

object.position.y = (0);

object.position.z = (0);

renderer.setSize(w,h);

domina.core.add_class_BANG_.call(null,renderer.domElement,"renderer");

renderer.domElement.style.position = "absolute";

scene.add(object);

cljs.core.reset_BANG_.call(null,thesis.content_script.image.ascene,scene);

cljs.core.reset_BANG_.call(null,thesis.content_script.image.aobject,object);

cljs.core.reset_BANG_.call(null,thesis.content_script.image.arenderer,renderer);

cljs.core.reset_BANG_.call(null,thesis.content_script.image.acamera,camera);

cljs.core.reset_BANG_.call(null,thesis.content_script.image.adiv,div);

domina.core.append_BANG_.call(null,domina.css.sel.call(null,"body"),renderer.domElement);

thesis.content_script.image.draw_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),(0),new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"rz","rz",386461181),(0),new cljs.core.Keyword(null,"display","display",242065432),false], null));

return mychan;
});

//# sourceMappingURL=image.js.map