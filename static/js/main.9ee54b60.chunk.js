(this["webpackJsonpdadata-API"]=this["webpackJsonpdadata-API"]||[]).push([[0],{37:function(e,t,a){e.exports=a(68)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),u=a(35),s=a(7),i=function(){var e=Object(s.d)((function(e){return e.cities})),t=Object(s.c)();return c.a.createElement("div",{className:"jc"},c.a.createElement("span",null,"\u0413\u043e\u0440\u043e\u0434:"),c.a.createElement("select",{onChange:function(e){t({type:"SET_ACTIVE_CITY",payload:e.target.value})}},e.map((function(e,t){return c.a.createElement("option",{key:t},e)}))))},o=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.data}));return c.a.createElement("div",{className:"jc"},c.a.createElement("span",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430:"),c.a.createElement("select",{onChange:function(t){e({type:"SET_SELECTED_BANK_INDEX",payload:t.target.selectedIndex})}},t.map((function(e,t){return c.a.createElement("option",{key:t},e.value)}))))},d=(a(46),function(){return c.a.createElement("div",{className:" loader"},c.a.createElement("div",{className:"lds-dual-ring"}))}),E=(a(47),function(){var e=Object(s.d)((function(e){return e.data})),t=Object(s.d)((function(e){return e.selectedIndex}));return c.a.createElement("div",{className:"bankInfo"},c.a.createElement("div",null,c.a.createElement("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",e[t].value?e[t].value:0)),c.a.createElement("div",null,c.a.createElement("p",null,"\u0411\u0418\u041a: ",e[t].data.bic?e[t].data.bic:"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438")),c.a.createElement("div",null,c.a.createElement("p",null,"\u0418\u041d\u041d: ",e[t].data.inn?e[t].data.inn:"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438")),c.a.createElement("div",null,c.a.createElement("p",null,"\u041a\u041f\u041f: ",e[t].data.kpp?e[t].data.kpp:"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438")))}),p=(a(48),Object(s.b)((function(e){return{data:e.data,loading:e.loading,selectedIndex:e.selectedIndex}}),null)((function(e){return c.a.createElement("div",{className:"container"},c.a.createElement(i,null),0===e.data.length?null:e.loading?c.a.createElement(d,null):c.a.createElement(n.Fragment,null,c.a.createElement(o,null),0===e.data.length?null:c.a.createElement(E,null)))}))),b=a(10),m=a(33),O=a(9),f={data:[],cities:["\u041c\u043e\u0441\u043a\u0432\u0430","\u0421\u0430\u043d\u043a\u0442-\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0421\u0430\u043c\u0430\u0440\u0430","\u0421\u0430\u0440\u0430\u0442\u043e\u0432","\u041a\u0430\u0437\u0430\u043d\u044c","\u0423\u0444\u0430"],loading:!1,error:!1,activeCity:"\u041c\u043e\u0441\u043a\u0432\u0430"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_DATA_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{data:t.payload});case"SET_SELECTED_BANK_INDEX":return Object(O.a)(Object(O.a)({},e),{},{selectedIndex:t.payload});case"SET_ZERO_BANK_INDEX":return Object(O.a)(Object(O.a)({},e),{},{selectedIndex:0});case"SET_ACTIVE_CITY":return Object(O.a)(Object(O.a)({},e),{},{activeCity:t.payload});case"START_LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case"STOP_LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},v=a(36),T=a(12),_=a.n(T),g=a(11),I=a(34),y=a.n(I),A=_.a.mark(C),S=_.a.mark(N),x=_.a.mark(h);function C(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)("SET_ACTIVE_CITY",N);case 2:case"end":return e.stop()}}),A)}function N(){var e,t;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(g.b)({type:"START_LOADING"});case 2:return a.next=4,Object(g.b)({type:"SET_ZERO_BANK_INDEX"});case 4:return a.prev=4,a.next=7,Object(g.a)(h);case 7:return e=a.sent,t=e.data.suggestions,a.next=11,Object(g.b)({type:"REQUEST_DATA_SUCCESS",payload:t});case 11:return a.next=13,Object(g.b)({type:"STOP_LOADING"});case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(4),console.log(a.t0);case 18:case"end":return a.stop()}}),S,null,[[4,15]])}function h(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.c)((function(e){return e.activeCity}));case 2:return e=t.sent,t.next=5,y.a.post("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank",{query:e,count:20},{headers:{Authorization:"Token 35fb812dea47683ebc59245b3a4d30b6966735ef","Content-Type":"application/json",Accept:"application/json"}});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),x)}var k=Object(v.a)(),D=Object(b.d)(j,Object(b.c)(Object(b.a)(m.a,k)));k.run(C);var w=D;l.a.render(c.a.createElement(s.a,{store:w},c.a.createElement(u.a,null,c.a.createElement(p,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9ee54b60.chunk.js.map