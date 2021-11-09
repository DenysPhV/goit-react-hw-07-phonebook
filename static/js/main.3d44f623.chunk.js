(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={container:"Section_container__3IVE-",title:"Section_title__3lKxe"}},17:function(e,t,n){e.exports={label:"ContactsFilter_label__Z1Smb",input:"ContactsFilter_input__syq5l"}},19:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},20:function(e,t,n){e.exports={container:"App_container__3_6-y"}},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(12),s=n.n(i),o=n(3),l=n(4),u=n(5),b=n(21),j=n(2),m=n(19),d=n(6),O=n.n(d),p=Object(l.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{id:O.a.generate(),name:t,number:n}}})),f=Object(l.b)("contacts/delete"),x=Object(l.b)("contacts/changeFilter"),h=Object(l.c)(m,(a={},Object(u.a)(a,p,(function(e,t){return[t.payload].concat(Object(b.a)(e))})),Object(u.a)(a,f,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),_=Object(l.c)("",Object(u.a)({},x,(function(e,t){return t.payload}))),v=Object(j.b)({items:h,filter:_}),C=Object(l.a)({reducer:{contacts:v},devTools:!1}),N=(n(41),n(16)),g=n.n(N),y=n(1),F=function(e){var t=e.title,n=e.children;return Object(y.jsxs)("div",{className:g.a.container,children:[Object(y.jsx)("h2",{className:g.a.title,children:t}),n]})},A=n(10),S=n(22),w=n(7),k=n.n(w),J={name:"",number:""};var L=function(){var e=Object(c.useState)(J),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(o.c)((function(e){return e.contacts.items})),i=Object(o.b)(),s=O.a.generate(),l=O.a.generate(),b=function(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(A.a)(Object(A.a)({},e),{},Object(u.a)({},n,c))}))},j=function(e,t){var n=e.name,c=e.number;t.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):t.some((function(e){return e.number===c}))?alert("".concat(c," is already in contacts")):(!function(e,t){i(p(e,t))}(e),a((function(e){return Object(A.a)(Object(A.a)({},e),{},{name:"",number:""})})))},m=n.name,d=n.number;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(n,r)},className:k.a.form,children:[Object(y.jsxs)("label",{htmlFor:s,className:k.a.label,children:[Object(y.jsx)("span",{children:"Name"}),Object(y.jsx)("input",{type:"text",name:"name",value:m,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:s,className:k.a.input})]}),Object(y.jsxs)("label",{htmlFor:l,className:k.a.label,children:[Object(y.jsx)("span",{children:"Number"}),Object(y.jsx)("input",{type:"tel",name:"number",value:d,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:l,className:k.a.input})]}),Object(y.jsx)("button",{type:"submit",className:k.a.button,children:"Add contact"})]})})},z=n(8),Z=n.n(z),q=function(){var e=Object(o.c)((function(e){var t=e.contacts;return function(e,t){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.includes(t)}))}(t.items,t.filter)})),t=Object(o.b)();return Object(y.jsx)("ul",{className:Z.a.list,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(y.jsxs)("li",{className:Z.a.item,children:[Object(y.jsxs)("span",{className:Z.a.text,children:[a,":"]}),Object(y.jsx)("span",{className:Z.a.text,children:c}),Object(y.jsx)("button",{onClick:function(){t(f(n))},type:"button",className:Z.a.button,children:"Delete"})]},n)}))})},E=n(17),I=n.n(E),K=O.a.generate(),B=function(){var e=Object(o.c)((function(e){return e.filter})),t=Object(o.b)();return Object(y.jsxs)("label",{htmlFor:K,className:I.a.label,children:[Object(y.jsx)("span",{children:"Filter contacts by name"}),Object(y.jsx)("input",{type:"text",value:e,onChange:function(e){return t(x(e.target.value))},id:K,className:I.a.input})]})},D=n(20),H=n.n(D),M=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(F,{title:"Phonebook",children:Object(y.jsx)(L,{})}),Object(y.jsx)(F,{title:"Contacts",children:Object(y.jsxs)("div",{className:H.a.container,children:[Object(y.jsx)(B,{}),Object(y.jsx)(q,{})]})})]})};s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(o.a,{store:C,children:Object(y.jsx)(M,{})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"Form_form__sJoGA",label:"Form_label__1Vnbp",input:"Form_input__1_Ht4",button:"Form_button__3Jk49"}},8:function(e,t,n){e.exports={list:"ContactList_list__3S8zn",text:"ContactList_text__3IAYJ",button:"ContactList_button__3CpKh"}}},[[43,1,2]]]);
//# sourceMappingURL=main.3d44f623.chunk.js.map