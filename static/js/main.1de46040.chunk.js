(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(4),a=c.n(s),o=(c(13),c(14),c(3)),i=c(0),h=function(e){var t=e.id,c=e.name,n=e.email;return Object(i.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t)}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:c}),Object(i.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(h,{id:e.id,name:e.name,email:e.email},e.id)}))})},l=function(e){var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots...",onChange:t})})},b=function(e){var t=e.children;return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black"},children:t})},d=c(5),u=c(6),O=c(8),f=c(7),p=function(e){Object(O.a)(c,e);var t=Object(f.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).state={hasError:!1},n}return Object(u.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{children:"Ooooops. That is not good"}):this.props.children}}]),c}(n.Component),x=(c(16),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(o.a)(s,2),h=a[0],d=a[1];Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}));var u=c.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return 0===c.length?Object(i.jsx)("div",{className:"tc",children:Object(i.jsx)("h1",{className:"f1",children:"loading ..."})}):Object(i.jsxs)("div",{id:"app",className:"tc",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(i.jsx)(l,{searchChange:function(e){d(e.target.value)}})]}),Object(i.jsx)(b,{children:Object(i.jsx)(p,{children:Object(i.jsx)(j,{robots:u})})})]})});a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1de46040.chunk.js.map