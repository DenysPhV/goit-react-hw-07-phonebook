(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={item:"ContactItem_item__1mfMM",text:"ContactItem_text__2Jdc1",button:"ContactItem_button__2UZLX"}},22:function(t,e,n){t.exports={container:"Section_container__3IVE-",title:"Section_title__3lKxe"}},24:function(t,e,n){t.exports={label:"ContactsFilter_label__Z1Smb",input:"ContactsFilter_input__syq5l"}},35:function(t,e,n){t.exports={list:"ContactList_list__3S8zn"}},36:function(t,e,n){t.exports={container:"App_container__3_6-y"}},68:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),u=n(7),i=n(19),s=n(4),l=n(34),b=n(2),f=n(3),j=Object(s.b)("contact-filter"),p=n(5),d=n.n(p),O=n(8),m=n(12),h=n.n(m);function x(){return _.apply(this,arguments)}function _(){return(_=Object(O.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=Object(O.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("/contacts/:".concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return w.apply(this,arguments)}function w(){return(w=Object(O.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/contacts",e);case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.a.defaults.baseURL="https://618e3e7c50e24d0017ce1176.mockapi.io";var g,N,k=Object(s.c)("contact/addContacts",function(){var t=Object(O.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=Object(s.c)("contact/deleteContacts",function(){var t=Object(O.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),F=Object(s.c)("contact/fetchContacts",Object(O.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),L=Object(s.d)([],(g={},Object(b.a)(g,k.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(b.a)(g,A.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(b.a)(g,F.fulfilled,(function(t,e){return e.payload})),g)),S=Object(s.d)("",Object(b.a)({},j,(function(t,e){return e.payload}))),z=Object(s.d)(!1,(N={},Object(b.a)(N,k.pending,(function(){return!0})),Object(b.a)(N,k.rejected,(function(){return!1})),Object(b.a)(N,k.fulfilled,(function(){return!1})),Object(b.a)(N,A.pending,(function(){return!0})),Object(b.a)(N,A.rejected,(function(){return!1})),Object(b.a)(N,A.fulfilled,(function(){return!1})),Object(b.a)(N,F.pending,(function(){return!0})),Object(b.a)(N,F.rejected,(function(){return!1})),Object(b.a)(N,F.fulfilled,(function(){return!1})),N)),J=Object(f.b)({contacts:L,filter:S,loading:z}),I=n(10),Z=[].concat(Object(i.a)(Object(s.e)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})),[l.logger]),M=Object(s.a)({reducer:J,middleware:Z,devTools:!0}),q=(n(68),n(22)),E=n.n(q),B=n(1),D=function(t){var e=t.title,n=t.children;return Object(B.jsxs)("div",{className:E.a.container,children:[Object(B.jsx)("h2",{className:E.a.title,children:e}),n]})},P=n(23),T=n(37),U=n(17),V=function(t){return t.contacts},G=function(t){return t.filter},H=Object(U.a)([V,G],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.phone.includes(e)}))})),K=n(9),R=n.n(K),X=function(){var t=Object(c.useState)({name:"",phone:""}),e=Object(T.a)(t,2),n=e[0],a=e[1],r=Object(u.b)(),o=Object(u.c)((function(t){return V(t)})),i=function(){a({name:"",phone:""})},s=function(t){var e=t.currentTarget,n=e.name,c=e.value;a((function(t){return Object(P.a)(Object(P.a)({},t),{},Object(b.a)({},n,c))}))},l=function(t,e){var n=t.name,c=t.phone;e.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):e.some((function(t){return t.number===c}))?alert("".concat(c," is already in contacts")):(!function(t){r(k(t))}(t),i())};return Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l(n,o),i()},className:R.a.form,children:[Object(B.jsxs)("label",{className:R.a.label,children:["Name",Object(B.jsx)("input",{type:"text",onChange:s,value:n.name,className:R.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(B.jsxs)("label",{className:R.a.label,children:["Phone Number",Object(B.jsx)("input",{type:"tel",onChange:s,value:n.phone,className:R.a.input,name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(B.jsx)("button",{type:"submit",className:R.a.button,children:"Add contact"})]})},$=n(35),Q=n.n($),W=n(13),Y=n.n(W),tt=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.id,c=t.name,a=t.phone;return Object(B.jsxs)("li",{className:Y.a.item,children:[Object(B.jsxs)("span",{className:Y.a.text,children:[c,":"]}),Object(B.jsx)("span",{className:Y.a.text,children:a}),Object(B.jsx)("button",{onClick:function(){return n(e)},type:"button",className:Y.a.button,children:"Delete"})]},e)}))},et=function(){var t=Object(u.c)(H),e=Object(u.b)();return Object(c.useEffect)((function(){e(F())}),[e]),Object(B.jsx)("ul",{className:Q.a.list,children:Object(B.jsx)(tt,{contacts:t,deleteContact:function(t){return e(A(t))}})})},nt=n(24),ct=n.n(nt),at=function(){var t=Object(u.c)(G),e=Object(u.b)();return Object(B.jsxs)("label",{className:ct.a.label,children:["Find contact by name",Object(B.jsx)("input",{type:"text",className:ct.a.input,value:t,onChange:function(t){return e(j(t.target.value))}})]})},rt=n(36),ot=n.n(rt),ut=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(D,{title:"Phonebook",children:Object(B.jsx)(X,{})}),Object(B.jsx)(D,{title:"Contacts",children:Object(B.jsxs)("div",{className:ot.a.container,children:[Object(B.jsx)(at,{}),Object(B.jsx)(et,{})]})})]})};o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(u.a,{store:M,children:Object(B.jsx)(ut,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Form_form__sJoGA",label:"Form_label__1Vnbp",input:"Form_input__1_Ht4",button:"Form_button__3Jk49"}}},[[70,1,2]]]);
//# sourceMappingURL=main.52e1b38e.chunk.js.map