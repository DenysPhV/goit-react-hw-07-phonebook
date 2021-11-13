(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{22:function(t,e,n){t.exports={container:"Section_container__3IVE-",title:"Section_title__3lKxe"}},25:function(t,e,n){t.exports={item:"ContactListItem_item__2dHJ-",button:"ContactListItem_button__1aKSG"}},26:function(t,e,n){t.exports={label:"ContactsFilter_label__Z1Smb",input:"ContactsFilter_input__syq5l"}},37:function(t,e,n){t.exports={list:"ContactList_list__3S8zn",text:"ContactList_text__3IAYJ",button:"ContactList_button__3CpKh"}},38:function(t,e,n){t.exports={container:"App_container__3_6-y"}},70:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(16),u=n.n(a),o=n(7),i=n(19),s=n(4),l=n(36),b=n(2),f=n(3),j=Object(s.b)("contact-filter"),d=n(5),p=n.n(d),m=n(8),O=n(12),h=n.n(O);function x(){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("/contacts/:".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.a.defaults.baseURL="https://618e3e7c50e24d0017ce1176.mockapi.io";var g,N,k=Object(s.c)("contact/addContacts",function(){var t=Object(m.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=Object(s.c)("contact/deleteContacts",function(){var t=Object(m.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),F=Object(s.c)("contact/fetchContacts",Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),L=Object(s.d)([],(g={},Object(b.a)(g,k.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(b.a)(g,A.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(b.a)(g,F.fulfilled,(function(t,e){return e.payload})),g)),S=Object(s.d)("",Object(b.a)({},j,(function(t,e){return e.payload}))),J=Object(s.d)(!1,(N={},Object(b.a)(N,k.pending,(function(){return!0})),Object(b.a)(N,k.rejected,(function(){return!1})),Object(b.a)(N,k.fulfilled,(function(){return!1})),Object(b.a)(N,A.pending,(function(){return!0})),Object(b.a)(N,A.rejected,(function(){return!1})),Object(b.a)(N,A.fulfilled,(function(){return!1})),Object(b.a)(N,F.pending,(function(){return!0})),Object(b.a)(N,F.rejected,(function(){return!1})),Object(b.a)(N,F.fulfilled,(function(){return!1})),N)),z=Object(f.b)({contacts:L,filter:S,loading:J}),I=n(10),Z=[].concat(Object(i.a)(Object(s.e)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})),[l.logger]),q=Object(s.a)({reducer:z,middleware:Z,devTools:!0}),E=(n(70),n(22)),K=n.n(E),B=n(1),D=function(t){var e=t.title,n=t.children;return Object(B.jsxs)("div",{className:K.a.container,children:[Object(B.jsx)("h2",{className:K.a.title,children:e}),n]})},G=n(23),H=n(39),M=n(24),T=n.n(M),V=n(17),P=function(t){return t.contacts},R=function(t){return t.filter},U=Object(V.a)([P,R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(e)}))})),Y=n(9),$=n.n(Y),Q=function(){var t=Object(r.useState)({name:"",number:""}),e=Object(H.a)(t,2),n=e[0],c=e[1],a=Object(o.b)(),u=T.a.generate(),i=T.a.generate(),s=Object(o.c)((function(t){return P(t)})),l=function(){c({name:"",number:""})},f=function(t){var e=t.currentTarget,n=e.name,r=e.value;c((function(t){return Object(G.a)(Object(G.a)({},t),{},Object(b.a)({},n,r))}))},j=function(t,e){var n=t.name,r=t.number;e.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):e.some((function(t){return t.number===r}))?alert("".concat(r," is already in contacts")):(!function(t){a(k(t))}(t),l())};return Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j(n,s),l()},className:$.a.form_contact,children:[Object(B.jsxs)("label",{htmlFor:u,className:$.a.label,children:["Name",Object(B.jsx)("input",{type:"text",id:u,onChange:f,value:n.name,className:$.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(B.jsxs)("label",{htmlFor:i,className:$.a.label,children:["Number",Object(B.jsx)("input",{type:"tel",id:i,onChange:f,value:n.number,className:$.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(B.jsx)("button",{type:"submit",className:$.a.button,children:"Add contact"})]})},W=n(37),X=n.n(W),tt=n(25),et=n.n(tt),nt=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(B.jsxs)("li",{className:et.a.item,children:[Object(B.jsxs)("span",{children:[r,": ",c]}),Object(B.jsx)("button",{onClick:function(){return n(e)},type:"button",className:et.a.button,children:"Delete"})]},e)}))},rt=function(){var t=Object(o.c)(U),e=Object(o.b)();return Object(r.useEffect)((function(){e(F())}),[e]),Object(B.jsx)("ul",{className:X.a.list,children:Object(B.jsx)(nt,{contacts:t,deleteContact:function(t){return e(A(t))}})})},ct=n(26),at=n.n(ct),ut=function(){var t=Object(o.c)(R),e=Object(o.b)();return Object(B.jsxs)("label",{className:at.a.label,children:["Find contact by name",Object(B.jsx)("input",{type:"text",className:at.a.input,value:t,onChange:function(t){return e(j(t.target.value))}})]})},ot=n(38),it=n.n(ot),st=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(D,{title:"Phonebook",children:Object(B.jsx)(Q,{})}),Object(B.jsx)(D,{title:"Contacts",children:Object(B.jsxs)("div",{className:it.a.container,children:[Object(B.jsx)(ut,{}),Object(B.jsx)(rt,{})]})})]})};u.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(o.a,{store:q,children:Object(B.jsx)(st,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Form_form__sJoGA",label:"Form_label__1Vnbp",input:"Form_input__1_Ht4",button:"Form_button__3Jk49"}}},[[80,1,2]]]);
//# sourceMappingURL=main.d2c1531f.chunk.js.map