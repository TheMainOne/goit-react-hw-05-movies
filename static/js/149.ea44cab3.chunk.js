"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[149],{5149:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c=e(885),u=e(2791),i=e(6871),o=e(3311),s=e(168),p=e(5751),f=p.ZP.h3(r||(r=(0,s.Z)(["\n  margin-bottom: 10px;\n"]))),h=p.ZP.p(a||(a=(0,s.Z)(["\n  margin-bottom: 10px;\n"]))),d=e(184),v=function(){var n=(0,i.UO)().movieId,t=(0,u.useState)(null),e=(0,c.Z)(t,2),r=e[0],a=e[1];return(0,u.useEffect)((function(){(0,o.Hx)(n).then((function(n){n.length>0&&a(n)}))}),[n]),(0,d.jsxs)(d.Fragment,{children:[!r&&(0,d.jsx)("p",{children:"We don't have any reviews for this movie."}),r&&r.map((function(n){return(0,d.jsx)("ul",{children:(0,d.jsxs)("li",{children:[(0,d.jsxs)(f,{children:["Author: ",n.author]}),(0,d.jsx)(h,{children:n.content})]})},n.id)}))]})}},3311:function(n,t,e){e.d(t,{wr:function(){return f},mv:function(){return h},Mc:function(){return d},PQ:function(){return l},Hx:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="3f98aefed4f412e17fc5cbf8a78c872a";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,i().get(t);case 3:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(){return s("/trending/movie/day?api_key=".concat(o))}function h(n){return s("/search/movie?api_key=".concat(o,"&query=").concat(n))}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=149.ea44cab3.chunk.js.map