"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[148],{2148:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i,l,c,u=t(5705),a=t(168),s=t(5867),o=(0,s.ZP)(u.l0)(r||(r=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nwidth: 300px;\n"]))),d=s.ZP.button(i||(i=(0,a.Z)(["\nwidth: 100px;\nborder-radius: 10px;\n"]))),x=t(9434),m=t(5984),f=t(3634),h=t(184),p=function(){var n=(0,x.I0)();return(0,h.jsx)(u.J9,{initialValues:{name:"",number:""},onSubmit:function(e){var t=e.name,r=e.number,i={id:(0,m.x0)(),name:t,number:r};n((0,f.el)(i))},children:(0,h.jsxs)(o,{children:[(0,h.jsx)("label",{htmlFor:"Name",children:"Name"}),(0,h.jsx)(u.gN,{type:"text",name:"name"}),(0,h.jsx)("label",{htmlFor:"Number",children:"Number"}),(0,h.jsx)(u.gN,{type:"tel",name:"number"}),(0,h.jsx)(d,{type:"submit",children:"Add contact"})]})})},j=s.ZP.div(l||(l=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 5px;\nwidth: 300px;\n"]))),b=t(4808),v=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.filter}));return(0,h.jsxs)(j,{children:[(0,h.jsx)("label",{htmlFor:"Filter",children:"Find contacts by name"}),(0,h.jsx)("input",{type:"text",name:"Filter",value:e,onChange:function(e){n((0,b.Tv)(e.currentTarget.value))}})]})},g=t(2791),w=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.contacts.contacts})),t=(0,x.v9)((function(n){return n.filter})),r=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,g.useEffect)((function(){n((0,f.K2)())}),[n]),(0,h.jsx)(h.Fragment,{children:r.map((function(e){return(0,h.jsxs)("li",{children:[e.name,": ",e.number,(0,h.jsx)("button",{onClick:function(){return n((0,f.GK)(e.id))},children:"Delete"})]},e.id)}))})},k=s.ZP.ul(c||(c=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 6px;\n"]))),y=function(){return(0,h.jsx)(k,{children:(0,h.jsx)(w,{})})},F=function(){var n=(0,x.I0)();return(0,g.useEffect)((function(){n((0,f.K2)())}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(p,{})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Contacts"}),(0,h.jsx)(v,{}),(0,h.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=148.24887b4a.chunk.js.map