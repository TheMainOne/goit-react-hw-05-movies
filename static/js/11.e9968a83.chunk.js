"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[11],{9011:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,a,i,c,u,o,s=r(885),p=r(2791),f=r(501),l=r(6871),d=r(3311),h=r(168),m=r(5751),x=m.ZP.h1(e||(e=(0,h.Z)(["\n  margin-bottom: 15px;\n  font-size: 26px;\n  color: #545454;\n"]))),v=m.ZP.ul(a||(a=(0,h.Z)(["\n  display: grid;\n  gap: 30px;\n  margin: 0 auto;\n  padding-bottom: 40px;\n  grid-template-columns: repeat(4, minmax(260px, 1fr));\n"]))),g=m.ZP.li(i||(i=(0,h.Z)(["\n  transition: transform 250ms linear;\n\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),y=m.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Z=m.ZP.div(u||(u=(0,h.Z)(["\n  margin-top: 10px;\n"]))),w=m.ZP.img(o||(o=(0,h.Z)(["\n  border-radius: 5px;\n"]))),_=r(184),b=function(){var n=(0,l.TH)(),t=(0,p.useState)(null),r=(0,s.Z)(t,2),e=r[0],a=r[1],i=(0,p.useState)(!0),c=(0,s.Z)(i,2),u=c[0],o=c[1],h=(0,p.useState)(null),m=(0,s.Z)(h,2),b=m[0],k=m[1];return(0,p.useEffect)((function(){o(!0);try{(0,d.wr)().then((function(n){return a(n)}))}catch(b){k(b)}finally{o(!1)}}),[]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("main",{children:[(0,_.jsx)(x,{children:"Trending today"}),(0,_.jsxs)(v,{children:[u&&(0,_.jsx)("p",{children:"Loading..."}),e&&e.map((function(t){return(0,_.jsx)(g,{children:(0,_.jsx)(f.rU,{to:"/movies/".concat(t.id),state:{from:n},children:(0,_.jsxs)(y,{children:[(0,_.jsx)(w,{alt:t.original_title,src:"https://image.tmdb.org/t/p/w400".concat(t.poster_path)}),(0,_.jsx)(Z,{children:t.original_title})]})})},t.id)})),b&&(0,_.jsx)("h2",{children:"Error. Something went wrong"})]})]})})}},3311:function(n,t,r){r.d(t,{wr:function(){return f},mv:function(){return l},Mc:function(){return d},PQ:function(){return m},Hx:function(){return v}});var e=r(5861),a=r(7757),i=r.n(a),c=r(4569),u=r.n(c);u().defaults.baseURL="https://api.themoviedb.org/3/";var o="3f98aefed4f412e17fc5cbf8a78c872a";function s(){return p.apply(this,arguments)}function p(){return p=(0,e.Z)(i().mark((function n(){var t,r,e,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,u().get(t);case 3:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(){return s("/trending/movie/day?api_key=".concat(o))}function l(n){return s("/search/movie?api_key=".concat(o,"&query=").concat(n))}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,e=r.data.cast,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=11.e9968a83.chunk.js.map