"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[11],{9011:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,c,a=e(885),u=e(2791),i=e(501),o=e(6871),s=e(3311),f=e(168),p=e(5751),d=p.ZP.h1(r||(r=(0,f.Z)(["\n  margin-bottom: 15px;\n  font-size: 26px;\n  color: #545454;\n"]))),h=p.ZP.li(c||(c=(0,f.Z)(["\n  padding: 5px;\n\n  &:nth-child(even) {\n    background-color: #d6d6d6;\n  }\n"]))),l=e(184),v=function(){var n=(0,o.TH)(),t=(0,u.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1],f=(0,u.useState)(!0),p=(0,a.Z)(f,2),v=p[0],m=p[1],x=(0,u.useState)(null),g=(0,a.Z)(x,2),y=g[0],w=g[1];return(0,u.useEffect)((function(){m(!0);try{(0,s.wr)().then((function(n){return c(n)}))}catch(y){w(y)}finally{m(!1)}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("main",{children:[(0,l.jsx)(d,{children:"Trending today"}),(0,l.jsxs)("ul",{children:[v&&(0,l.jsx)("p",{children:"Loading..."}),r&&r.map((function(t){return(0,l.jsx)(h,{children:(0,l.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.original_title})},t.id)})),y&&(0,l.jsx)("h2",{children:"Error. Something went wrong"})]})]})})}},3311:function(n,t,e){e.d(t,{wr:function(){return p},mv:function(){return d},Mc:function(){return h},PQ:function(){return v},Hx:function(){return x}});var r=e(5861),c=e(7757),a=e.n(c),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="3f98aefed4f412e17fc5cbf8a78c872a";function s(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n.next=3,i().get(t);case 3:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function p(){return s("/trending/movie/day?api_key=".concat(o))}function d(n){return s("/search/movie?api_key=".concat(o,"&query=").concat(n))}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=11.5603fe8d.chunk.js.map