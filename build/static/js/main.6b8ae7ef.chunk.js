(this["webpackJsonpcov-tracker"]=this["webpackJsonpcov-tracker"]||[]).push([[0],{30:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},39:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var n=r(3),c=r.n(n),s=r(18),a=r.n(s),o=(r(30),r(4)),d=r.n(o),i=r(6),l=r(19),b=r(20),u=r(25),j=r(24),h=(r(32),r(33),r(21)),p=r(22),x=r(0),v=function(){return Object(x.jsxs)("div",{id:"navbar",className:"container-lg",children:[Object(x.jsxs)("h1",{id:"branding",children:[Object(x.jsx)(h.a,{icon:p.a,size:"1x"}),"CoV-Tracker"]}),Object(x.jsx)("ul",{id:"button-array",className:"p-2 flex space-x-4",children:Object(x.jsxs)("li",{className:"flex space-x-4 ",children:[Object(x.jsx)("button",{id:"home-button",className:"bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded",children:Object(x.jsx)("a",{href:"src\\index.js",children:"Home"})}),Object(x.jsx)("button",{id:"about-button",className:"bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded",children:Object(x.jsx)("a",{href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc#intro",children:"About"})}),Object(x.jsx)("button",{id:"contribute-button",className:"bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded",children:Object(x.jsx)("a",{href:"https://github.com/Senor-Ducky/CoV-Tracker",children:"Contribute"})})]})})]})},f=(r(39),function(e){var t=e.data,r=t.confirmed,n=t.recovered,c=t.deaths,s=t.lastUpdate;return r?Object(x.jsxs)("section",{id:"card-area",children:[Object(x.jsxs)("div",{className:"container-lg ",children:[Object(x.jsxs)("div",{id:"card-1",class:"p-20 bg-blue-100",children:[Object(x.jsx)("h3",{class:"text-blue-300 mb-4 text-sm font-bold",children:"New Cases"}),Object(x.jsxs)("div",{class:"bg-white p-6 rounded-lg shadow-lg",children:[Object(x.jsxs)("p",{children:["Total Confirmed: ",r.value," cases "]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["last updated: ",s]}),Object(x.jsx)("br",{})]})]}),Object(x.jsxs)("div",{id:"card-2",class:"p-20 bg-blue-100",children:[Object(x.jsx)("h3",{class:"text-blue-300 mb-4 text-sm font-bold",children:"Recovered"}),Object(x.jsxs)("div",{class:"bg-white p-6 rounded-lg shadow-lg",children:[Object(x.jsxs)("p",{children:["Total Recovered: ",n.value," people"]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["last updated: ",s]}),Object(x.jsx)("br",{})]})]}),Object(x.jsxs)("div",{id:"card-3",class:"p-20 bg-blue-100",children:[Object(x.jsx)("h3",{class:"text-blue-300 mb-4 text-sm font-bold",children:"Deaths"}),Object(x.jsxs)("div",{class:"bg-white p-6 rounded-lg shadow-lg",children:[Object(x.jsxs)("p",{children:["Total Deaths: ",c.value," deaths "]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["last updated: ",s]}),Object(x.jsx)("br",{})]})]})]}),Object(x.jsx)("footer",{id:"footer",children:Object(x.jsx)("p",{className:"bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500",children:"Made By Rahul Mishra [using covid19 API] 2021."})})]}):"Loading..."}),g=r(23),O=r.n(g),m=function(){var e=Object(i.a)(d.a.mark((function e(){var t,r,n,c,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://covid19.mathdro.id/api");case 3:return t=e.sent,r=t.data,n=r.confirmed,c=r.recovered,s=r.deaths,a=r.lastUpdate,e.abrupt("return",{confirmed:n,recovered:c,deaths:s,lastUpdate:a});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),w=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:{}},e}return Object(b.a)(r,[{key:"componentDidMount",value:function(){var e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{data:this.state.data})})]})}}]),r}(n.Component),y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,58)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),y()}},[[57,1,2]]]);
//# sourceMappingURL=main.6b8ae7ef.chunk.js.map