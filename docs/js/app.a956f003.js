(function(e){function t(t){for(var n,s,i=t[0],a=t[1],l=t[2],h=0,d=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,i=1;i<c.length;i++){var a=c[i];0!==r[a]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=a;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"04e9":function(e,t,c){"use strict";var n=c("84e6"),r=c.n(n);r.a},"40b6":function(e,t,c){},"5c0b":function(e,t,c){"use strict";var n=c("9c0c"),r=c.n(n);r.a},"84e6":function(e,t,c){},"9c0c":function(e,t,c){},b434:function(e,t,c){"use strict";var n=c("e101"),r=c.n(n);r.a},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("2b0e"),r=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{attrs:{id:"app"}},[c("div",{attrs:{id:"nav"}},[c("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),c("router-link",{attrs:{to:"/filters"}},[e._v("Filters")]),c("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTheme,expression:"selectedTheme"}],staticStyle:{"margin-left":"1rem"},on:{change:function(t){var c=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedTheme=t.target.multiple?c:c[0]}}},e._l(e.themes,(function(t){return c("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),c("button",{on:{click:function(t){return e.changeTheme()}}},[e._v("Save theme")])],1),c("router-view")],1)},o=[],s={name:"App",data:function(){return{selectedTheme:"white.css",themes:["white.css","red.css","blue.css"]}},methods:{changeTheme:function(){var e=document.createElement("link");e.className="theme-switcher",e.rel="stylesheet",e.href="/css/".concat(this.selectedTheme),document.getElementsByTagName("head")[0].append(e),document.getElementsByClassName("theme-switcher")[0].remove()}}},i=s,a=(c("5c0b"),c("2877")),l=Object(a["a"])(i,r,o,!1,null,null,null),u=l.exports,h=c("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:c("cf05")}}),n("p",[e._v("Welcome to Mock app")])])}],p={name:"Home"},m=p,v=Object(a["a"])(m,d,f,!1,null,null,null),b=v.exports,k=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"filterspage"},[c("h1",[e._v("Mock filters")]),c("div",{staticClass:"container"},[c("div",{staticClass:"flex"},[c("checkboxes",{attrs:{items:e.checkboxesList,selected:e.selectedCheckboxOptions},on:{input:e.changeSelection}})],1),c("cards",{attrs:{items:e.showCardsBasedOnSelection}})],1)])},x=[],g=(c("4de4"),c("caad"),c("ac1f"),c("2532"),c("1276"),function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"Checkbox-Mock-Component"},e._l(e.checkboxList,(function(t){return c("div",{key:t.id+t.value},[c("label",[c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkboxSelection,expression:"checkboxSelection"}],attrs:{type:"checkbox"},domProps:{value:t.value,checked:Array.isArray(e.checkboxSelection)?e._i(e.checkboxSelection,t.value)>-1:e.checkboxSelection},on:{click:e.enable,change:function(c){var n=e.checkboxSelection,r=c.target,o=!!r.checked;if(Array.isArray(n)){var s=t.value,i=e._i(n,s);r.checked?i<0&&(e.checkboxSelection=n.concat([s])):i>-1&&(e.checkboxSelection=n.slice(0,i).concat(n.slice(i+1)))}else e.checkboxSelection=o}}}),e._v(" "+e._s(t.value)+" ")])])})),0)}),y=[],_={name:"checkboxes",props:{items:Array,selected:Array},data:function(){return{trigger:!1,checkboxSelection:[]}},computed:{checkboxList:function(){return this.items?this.items:[]}},watch:{selected:function(){this.checkboxSelection=this.selected},checkboxSelection:function(e){this.trigger&&this.$emit("input",e)}},methods:{enable:function(){this.trigger||(this.trigger=!0)}},beforeMount:function(){this.checkboxSelection=this.selected}},C=_,S=(c("b434"),Object(a["a"])(C,g,y,!1,null,"44d0c17e",null)),w=S.exports,O=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"Cards-Mock-Component"},[c("div",{staticClass:"card-container"},e._l(e.cardsToShow,(function(t){return c("div",{key:t.id+t.value,staticClass:"card"},[c("h1",[e._v(e._s(t.value))])])})),0)])},j=[],T={name:"cards",props:{items:Array},computed:{cardsToShow:function(){return this.items}}},$=T,A=(c("04e9"),Object(a["a"])($,O,j,!1,null,"69505df6",null)),E=A.exports,M={components:{checkboxes:w,cards:E},data:function(){return{checkboxesList:[{id:1,value:"A"},{id:2,value:"B"},{id:3,value:"C"},{id:4,value:"D"},{id:5,value:"E"}],selectedCheckboxes:["A","B","C","D","E"]}},computed:{showCardsBasedOnSelection:function(){var e=this;return this.checkboxesList.filter((function(t){return e.selectedCheckboxOptions.includes(t.value)}))},selectedCheckboxOptions:function(){return this.selectedCheckboxes}},watch:{"$route.query":function(e){e.selectedCheckboxes&&(this.selectedCheckboxes=e.selectedCheckboxes.split(","))}},methods:{changeSelection:function(e){this.selectedCheckboxes=e,this.$router.push({name:"Filters",query:{selectedCheckboxes:encodeURI(e)}})["catch"]((function(){}))}},beforeMount:function(){this.$route.query&&this.$route.query.selectedCheckboxes&&(this.selectedCheckboxes=this.$route.query.selectedCheckboxes.split(","))}},P=M,B=(c("f260"),Object(a["a"])(P,k,x,!1,null,null,null)),q=B.exports;n["a"].use(h["a"]);var L=[{path:"/",name:"Home",component:b},{path:"/filters",name:"Filters",component:q}],N=new h["a"]({routes:L}),F=N;n["a"].config.productionTip=!1,new n["a"]({router:F,render:function(e){return e(u)}}).$mount("#app")},cf05:function(e,t,c){e.exports=c.p+"img/logo.82b9c7a5.png"},e101:function(e,t,c){},f260:function(e,t,c){"use strict";var n=c("40b6"),r=c.n(n);r.a}});
//# sourceMappingURL=app.a956f003.js.map