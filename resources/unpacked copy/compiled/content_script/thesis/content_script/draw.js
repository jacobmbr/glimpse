// Compiled by ClojureScript 1.8.51 {}
goog.provide('thesis.content_script.draw');
goog.require('cljs.core');
thesis.content_script.draw.draw_circle = (function thesis$content_script$draw$draw_circle(form,p,size,col){
var c = (new Circle(p)).setRadius((size * (4)));
form.stroke((0)).fill(col).circle(c);

var x = (8);
while(true){
if((x > (0))){
return form.circle((new Circle(p.$add((0)).rotate2D((x / Math.PI),p))).setRadius(((3) * (3))));
} else {
var G__14291 = (x - (1));
x = G__14291;
continue;
}
break;
}
});
thesis.content_script.draw.draw_line = (function thesis$content_script$draw$draw_line(form,pair,center,col){
return form.stroke(col,(1)).line(pair);
});
thesis.content_script.draw.draw_text = (function thesis$content_script$draw$draw_text(form,p,t,size){
return form.fill("white").font(((5) * size),"Fira Sans, sans-serif").text(p,[cljs.core.str(t)].join(''),(1000),size,size);
});
thesis.content_script.draw.draw_entity = (function thesis$content_script$draw$draw_entity(form,center,data,osf){
var tx = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"x","x",2099068185));
var ty = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"y","y",-1757859776));
var fp = (new Vector(center));
var tp = (new Vector(tx,(osf + ty)));
var size = ((1) * cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-size","display-size",1805257182)], null)));
var good = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(2)], null));
var col = (cljs.core.truth_(good)?"rgba(255,0,0,0.4)":"rgba(0,255,0,0.4)");
var pair = (new Pair(center)).to(tp);
thesis.content_script.draw.draw_line.call(null,form,pair,center,col);

thesis.content_script.draw.draw_circle.call(null,form,tp,size,col);

return thesis.content_script.draw.draw_text.call(null,form,tp,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0)], null)),size);
});

//# sourceMappingURL=draw.js.map