"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[860],{2860:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e,a,c,i=r(885),u=r(2791),o=r(6871),s=r(3311),p=r(168),f=r(5751),h=f.ZP.ul(e||(e=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-top: -15px;\n"]))),d=f.ZP.li(a||(a=(0,p.Z)(["\n  flex-basis: calc(33.33333% - 15px);\n  margin-right: 15px;\n  margin-top: 15px;\n"]))),l=f.ZP.p(c||(c=(0,p.Z)(["\n  padding: 5px;\n"]))),m=r(6528),x=r(184),v=function(){var t=(0,o.UO)().movieId,n=(0,u.useState)(null),r=(0,i.Z)(n,2),e=r[0],a=r[1];return(0,u.useEffect)((function(){(0,s.PQ)(t).then((function(t){return a(t)}))}),[t]),(0,x.jsx)(h,{children:e&&e.map((function(t){return(0,x.jsxs)(d,{children:[t.profile_path?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(t.profile_path),alt:""}):(0,x.jsx)("img",{src:m,alt:"",width:342,height:513}),(0,x.jsx)(l,{children:t.original_name}),(0,x.jsx)(l,{children:t.character})]},t.id)}))})}},3311:function(t,n,r){r.d(n,{wr:function(){return f},mv:function(){return h},Mc:function(){return d},PQ:function(){return m},Hx:function(){return v}});var e=r(5861),a=r(7757),c=r.n(a),i=r(4569),u=r.n(i);u().defaults.baseURL="https://api.themoviedb.org/3/";var o="3f98aefed4f412e17fc5cbf8a78c872a";function s(){return p.apply(this,arguments)}function p(){return p=(0,e.Z)(c().mark((function t(){var n,r,e,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t.next=3,u().get(n);case 3:return r=t.sent,e=r.data.results,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function f(){return s("/trending/movie/day?api_key=".concat(o))}function h(t){return s("/search/movie?api_key=".concat(o,"&query=").concat(t))}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(n,"/credits?api_key=").concat(o));case 2:return r=t.sent,e=r.data.cast,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(n,"/reviews?api_key=").concat(o));case 2:return r=t.sent,e=r.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},6528:function(t,n,r){t.exports=r.p+"static/media/NotFound.80fd9fcff9dca031b695.jpg"}}]);
//# sourceMappingURL=860.c8faf887.chunk.js.map