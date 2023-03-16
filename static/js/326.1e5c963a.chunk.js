"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[326],{3287:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(9439),a=r(2791),c=r(9139),s=r(7689),o=r(184);function u(){var n=(0,a.useState)(!1),e=(0,t.Z)(n,2),r=e[0],u=e[1],i=(0,s.s0)();(0,a.useEffect)((function(){window.addEventListener("resize",(function(){return window.innerWidth>=960&&u(!1)}))}),[]);var l=(0,o.jsxs)("ul",{className:"mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:[(0,o.jsx)(c.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:(0,o.jsx)("a",{href:"#",className:"flex items-center",onClick:function(){return i("/")},children:"Scen"})}),(0,o.jsx)(c.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:(0,o.jsx)("a",{href:"#",className:"flex items-center",onClick:function(){return i("/admin")},children:"Admin"})})]});return(0,o.jsxs)(c.Navbar,{className:"mx-auto py-2 px-4 lg:px-8 lg:py-4 max-w-none",children:[(0,o.jsxs)("div",{className:"container mx-auto flex items-center justify-between text-blue-gray-900",children:[(0,o.jsx)(c.Typography,{as:"a",href:"#",variant:"small",className:"mr-4 cursor-pointer py-1.5 font-normal",children:(0,o.jsx)("span",{children:"Testing Task"})}),(0,o.jsx)("div",{className:"hidden lg:block",children:l}),(0,o.jsx)(c.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",ripple:!1,onClick:function(){return u(!r)},children:r?(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]}),(0,o.jsx)(c.MobileNav,{open:r,children:(0,o.jsx)("div",{className:"container mx-auto",children:l})})]})}},326:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t=r(3433),a=r(4165),c=r(5861),s=r(9439),o=r(2791),u=r(7689),i=r(3513),l=r(9139),p=r(3287),f=r(4967),d=r(184);function h(){var n=(0,u.s0)(),e=[{name:"Name",selector:function(n){return n.name},sortable:!0},{name:"Scale",selector:function(n){return n.scale},sortable:!0,right:!0},{key:"action",name:"Action",className:"action",sortable:!1,cell:function(n){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Button,{variant:"filled",className:"btn btn-primary btn-sm",onClick:function(){v(n)},children:"Edit"}),(0,d.jsx)(l.Button,{variant:"filled",className:"btn btn-primary btn-sm ml-4",onClick:function(){w(n)},children:"Delete"})]})}}],r=o.useState([]),h=(0,s.Z)(r,2),m=h[0],x=h[1];(0,o.useEffect)((function(){var n=function(){var n=(0,c.Z)((0,a.Z)().mark((function n(){var e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.LU)();case 2:e=n.sent,x(null===e||void 0===e?void 0:e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();0===m.length&&n()}),[]);var v=function(e){n("/edit/".concat(e.id))},w=function(){var n=(0,c.Z)((0,a.Z)().mark((function n(e){var r,c;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.Kk)(null===e||void 0===e?void 0:e.id);case 2:n.sent,(r=m.findIndex((function(n){return n.id===e.id})))>-1&&((c=(0,t.Z)(m)).splice(r,1),x(c));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.Z,{}),(0,d.jsx)("div",{className:"w-full flex flex-row-reverse mt-4 pr-4",children:(0,d.jsx)(l.Button,{onClick:function(){return n("/add")},children:"Add New Model"})}),(0,d.jsx)(i.ZP,{columns:e,data:m,pagination:!0})]})}},4967:function(n,e,r){r.d(e,{Vc:function(){return u},cW:function(){return s},Kk:function(){return l},LU:function(){return i},HX:function(){return o}});var t=r(4165),a=r(5861),c="http://localhost:8080",s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c,"/api/models"),{method:"POST",body:e});case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",console.error(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c,"/api/models/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:return a=n.sent,n.next=6,a.json();case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",console.error(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c,"/api/models/").concat(e),{method:"GET"});case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",console.error(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c,"/api/models"),{method:"GET"});case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",console.error(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(c,"/api/models/").concat(e),{method:"DELETE"}).then((function(n){return n.json()})).catch((function(n){return console.error(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=326.1e5c963a.chunk.js.map