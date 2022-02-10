"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[337],{9337:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,i,a,c=t(885),u=t(8479),s=t(501),d=t(6871),l=t(2791),p=t(3311),f=t(168),h=t(5751),v=h.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),b=h.ZP.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n  position: relative;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  background-color: #eee;\n  border: 1px solid #bdbdbd;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: background-color 0.15s ease-in-out;\n\n  &:hover {\n    background-color: #bdbdbd;\n  }\n"]))),m=h.ZP.input(i||(i=(0,f.Z)(["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  position: relative;\n  z-index: 2;\n"]))),g=h.ZP.li(a||(a=(0,f.Z)(["\n  padding: 5px;\n\n  &:nth-child(even) {\n    background-color: #d6d6d6;\n  }\n"]))),x=t(184),y=function(){var n=(0,d.TH)(),e=(0,l.useState)(null),t=(0,c.Z)(e,2),r=t[0],o=t[1],i=(0,s.lr)(),a=(0,c.Z)(i,2),f=a[0],h=a[1],y=f.get("query");return(0,l.useEffect)((function(){y&&(0,p.mv)(y).then((function(n){return o(n)})).catch((function(n){console.log(n),u.ZP.error("Sorry. Movie is not found")}))}),[y]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("form",{autoComplete:"off",onSubmit:function(n){n.preventDefault();var e=n.target,t=n.target.searchField.value;""!==t?(h({query:t}),e.reset()):u.ZP.error("Please enter a search query")},children:(0,x.jsx)("label",{children:(0,x.jsxs)(v,{children:[(0,x.jsx)(m,{type:"text",name:"searchField"}),(0,x.jsx)(b,{type:"submit",children:"Search"}),(0,x.jsx)(u.x7,{})]})})}),(0,x.jsx)("div",{children:r&&(0,x.jsxs)("ul",{children:[0===r.length?(0,x.jsx)("p",{children:"Sorry. Movie is not found"}):null,r.map((function(e){return(0,x.jsx)(g,{children:(0,x.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.original_title})},e.id)}))]})})]})}},3311:function(n,e,t){t.d(e,{wr:function(){return l},mv:function(){return p},Mc:function(){return f},PQ:function(){return v},Hx:function(){return m}});var r=t(5861),o=t(7757),i=t.n(o),a=t(4569),c=t.n(a);c().defaults.baseURL="https://api.themoviedb.org/3/";var u="3f98aefed4f412e17fc5cbf8a78c872a";function s(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(i().mark((function n(){var e,t,r,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",n.next=3,c().get(e);case 3:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function l(){return s("/trending/movie/day?api_key=".concat(u))}function p(n){return s("/search/movie?api_key=".concat(u,"&query=").concat(n))}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,r=t.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=337.4414a919.chunk.js.map