(function(t){function e(e){for(var r,c,s=e[0],i=e[1],u=e[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0323":function(t,e,n){"use strict";n("bf23")},"30ac":function(t,e,n){},"4fe5":function(t,e,n){"use strict";n("a911")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{albums:t.albums}})],1)},o=[],c=n("bc3a"),s=n.n(c),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"logo-container row"},[r("img",{attrs:{src:n("93df"),alt:"Spotify Logo"}})])])}],l={name:"Header"},f=l,p=(n("0323"),n("2877")),b=Object(p["a"])(f,i,u,!1,null,"533bc97f",null),d=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.albums,(function(t,e){return n("Album",{key:e,staticClass:"col-2 .justify-content-center",attrs:{poster:t.poster,title:t.title,author:t.author,year:t.year}})})),1)])])},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-container"},[n("div",{staticClass:"inner"},[n("img",{attrs:{src:t.poster,alt:"poster album of "+t.poster}}),n("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),n("p",{staticClass:"author"},[t._v(" "+t._s(t.author)+" ")]),n("p",{staticClass:"year"},[t._v(" "+t._s(t.year)+" ")])])])},y=[],g={name:"Album",props:{poster:String,title:String,author:String,year:String}},_=g,O=(n("9329"),Object(p["a"])(_,h,y,!1,null,"533b2d72",null)),j=O.exports,w={name:"Main",components:{Album:j},props:{albums:Array}},x=w,S=(n("4fe5"),Object(p["a"])(x,m,v,!1,null,"c5ac0fda",null)),C=S.exports,M={name:"App",components:{Header:d,Main:C},data:function(){return{albums:[]}},created:function(){var t=this;s.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.albums=e.data.response}))}},P=M,$=(n("5c0b"),Object(p["a"])(P,a,o,!1,null,null,null)),A=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},9329:function(t,e,n){"use strict";n("30ac")},"93df":function(t,e,n){t.exports=n.p+"img/spotify-logo.c24917d4.png"},"9c0c":function(t,e,n){},a911:function(t,e,n){},bf23:function(t,e,n){}});
//# sourceMappingURL=app.0ccffc19.js.map