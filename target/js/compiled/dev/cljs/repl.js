// Compiled by ClojureScript 1.10.191 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33513){
var map__33514 = p__33513;
var map__33514__$1 = ((((!((map__33514 == null)))?(((((map__33514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33514):map__33514);
var m = map__33514__$1;
var n = cljs.core.get.call(null,map__33514__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33516_33538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33517_33539 = null;
var count__33518_33540 = (0);
var i__33519_33541 = (0);
while(true){
if((i__33519_33541 < count__33518_33540)){
var f_33542 = cljs.core._nth.call(null,chunk__33517_33539,i__33519_33541);
cljs.core.println.call(null,"  ",f_33542);


var G__33543 = seq__33516_33538;
var G__33544 = chunk__33517_33539;
var G__33545 = count__33518_33540;
var G__33546 = (i__33519_33541 + (1));
seq__33516_33538 = G__33543;
chunk__33517_33539 = G__33544;
count__33518_33540 = G__33545;
i__33519_33541 = G__33546;
continue;
} else {
var temp__5720__auto___33547 = cljs.core.seq.call(null,seq__33516_33538);
if(temp__5720__auto___33547){
var seq__33516_33548__$1 = temp__5720__auto___33547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33516_33548__$1)){
var c__4317__auto___33549 = cljs.core.chunk_first.call(null,seq__33516_33548__$1);
var G__33550 = cljs.core.chunk_rest.call(null,seq__33516_33548__$1);
var G__33551 = c__4317__auto___33549;
var G__33552 = cljs.core.count.call(null,c__4317__auto___33549);
var G__33553 = (0);
seq__33516_33538 = G__33550;
chunk__33517_33539 = G__33551;
count__33518_33540 = G__33552;
i__33519_33541 = G__33553;
continue;
} else {
var f_33554 = cljs.core.first.call(null,seq__33516_33548__$1);
cljs.core.println.call(null,"  ",f_33554);


var G__33555 = cljs.core.next.call(null,seq__33516_33548__$1);
var G__33556 = null;
var G__33557 = (0);
var G__33558 = (0);
seq__33516_33538 = G__33555;
chunk__33517_33539 = G__33556;
count__33518_33540 = G__33557;
i__33519_33541 = G__33558;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33559 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3920__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3920__auto__)){
return or__3920__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33559);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33559)))?cljs.core.second.call(null,arglists_33559):arglists_33559));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33520_33560 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33521_33561 = null;
var count__33522_33562 = (0);
var i__33523_33563 = (0);
while(true){
if((i__33523_33563 < count__33522_33562)){
var vec__33524_33564 = cljs.core._nth.call(null,chunk__33521_33561,i__33523_33563);
var name_33565 = cljs.core.nth.call(null,vec__33524_33564,(0),null);
var map__33527_33566 = cljs.core.nth.call(null,vec__33524_33564,(1),null);
var map__33527_33567__$1 = ((((!((map__33527_33566 == null)))?(((((map__33527_33566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33527_33566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33527_33566):map__33527_33566);
var doc_33568 = cljs.core.get.call(null,map__33527_33567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33569 = cljs.core.get.call(null,map__33527_33567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33565);

cljs.core.println.call(null," ",arglists_33569);

if(cljs.core.truth_(doc_33568)){
cljs.core.println.call(null," ",doc_33568);
} else {
}


var G__33570 = seq__33520_33560;
var G__33571 = chunk__33521_33561;
var G__33572 = count__33522_33562;
var G__33573 = (i__33523_33563 + (1));
seq__33520_33560 = G__33570;
chunk__33521_33561 = G__33571;
count__33522_33562 = G__33572;
i__33523_33563 = G__33573;
continue;
} else {
var temp__5720__auto___33574 = cljs.core.seq.call(null,seq__33520_33560);
if(temp__5720__auto___33574){
var seq__33520_33575__$1 = temp__5720__auto___33574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33520_33575__$1)){
var c__4317__auto___33576 = cljs.core.chunk_first.call(null,seq__33520_33575__$1);
var G__33577 = cljs.core.chunk_rest.call(null,seq__33520_33575__$1);
var G__33578 = c__4317__auto___33576;
var G__33579 = cljs.core.count.call(null,c__4317__auto___33576);
var G__33580 = (0);
seq__33520_33560 = G__33577;
chunk__33521_33561 = G__33578;
count__33522_33562 = G__33579;
i__33523_33563 = G__33580;
continue;
} else {
var vec__33529_33581 = cljs.core.first.call(null,seq__33520_33575__$1);
var name_33582 = cljs.core.nth.call(null,vec__33529_33581,(0),null);
var map__33532_33583 = cljs.core.nth.call(null,vec__33529_33581,(1),null);
var map__33532_33584__$1 = ((((!((map__33532_33583 == null)))?(((((map__33532_33583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33532_33583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33532_33583):map__33532_33583);
var doc_33585 = cljs.core.get.call(null,map__33532_33584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33586 = cljs.core.get.call(null,map__33532_33584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33582);

cljs.core.println.call(null," ",arglists_33586);

if(cljs.core.truth_(doc_33585)){
cljs.core.println.call(null," ",doc_33585);
} else {
}


var G__33587 = cljs.core.next.call(null,seq__33520_33575__$1);
var G__33588 = null;
var G__33589 = (0);
var G__33590 = (0);
seq__33520_33560 = G__33587;
chunk__33521_33561 = G__33588;
count__33522_33562 = G__33589;
i__33523_33563 = G__33590;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__33534 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33535 = null;
var count__33536 = (0);
var i__33537 = (0);
while(true){
if((i__33537 < count__33536)){
var role = cljs.core._nth.call(null,chunk__33535,i__33537);
var temp__5720__auto___33591__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33591__$1)){
var spec_33592 = temp__5720__auto___33591__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33592));
} else {
}


var G__33593 = seq__33534;
var G__33594 = chunk__33535;
var G__33595 = count__33536;
var G__33596 = (i__33537 + (1));
seq__33534 = G__33593;
chunk__33535 = G__33594;
count__33536 = G__33595;
i__33537 = G__33596;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__33534);
if(temp__5720__auto____$1){
var seq__33534__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33534__$1)){
var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__33534__$1);
var G__33597 = cljs.core.chunk_rest.call(null,seq__33534__$1);
var G__33598 = c__4317__auto__;
var G__33599 = cljs.core.count.call(null,c__4317__auto__);
var G__33600 = (0);
seq__33534 = G__33597;
chunk__33535 = G__33598;
count__33536 = G__33599;
i__33537 = G__33600;
continue;
} else {
var role = cljs.core.first.call(null,seq__33534__$1);
var temp__5720__auto___33601__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33601__$2)){
var spec_33602 = temp__5720__auto___33601__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33602));
} else {
}


var G__33603 = cljs.core.next.call(null,seq__33534__$1);
var G__33604 = null;
var G__33605 = (0);
var G__33606 = (0);
seq__33534 = G__33603;
chunk__33535 = G__33604;
count__33536 = G__33605;
i__33537 = G__33606;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1662169264524
