(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{30:function(t,e,n){},39:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(8),a=n.n(r),u=(n(30),n(15)),i=n(6),b=(n(39),n(11)),s=n.n(b),f=n(2),l=Object(f.b)("phonebook/fetchContactsRequest"),j=Object(f.b)("phonebook/fetchContactsSuccess"),d=Object(f.b)("phonebook/fetchContactsError"),h=Object(f.b)("phonebook/addContactRequest"),O=Object(f.b)("phonebook/addContactSuccess"),m=Object(f.b)("phonebook/addContactError"),p=Object(f.b)("phonebook/deleteContactRequest"),C=Object(f.b)("phonebook/deleteContactSuccess"),x=Object(f.b)("phonebook/deleteContactError"),_=Object(f.b)("phonebook/changeFilter"),k="http://localhost:4040/contacts",v=n(1),g=function(t){var e=t.items,n=t.onContactAdd,o=Object(c.useState)(""),r=Object(u.a)(o,2),a=r[0],i=r[1],b=Object(c.useState)(""),s=Object(u.a)(b,2),f=s[0],l=s[1],j=function(){i(""),l("")};return Object(v.jsxs)("form",{className:"Phonebook__form",onSubmit:function(t){t.preventDefault(),e.map((function(t){return t.name})).includes(a)?alert("".concat(a," is already in contacts.")):n(a,f),j()},children:[Object(v.jsx)("label",{htmlFor:"Phonebook-form__name",children:"Name"}),Object(v.jsx)("input",{type:"text",id:"Phonebook-form__name",name:"name",value:a,onChange:function(t){i(t.target.value)},required:!0,autoComplete:"off"}),Object(v.jsx)("label",{htmlFor:"Phonebook-form__number",children:"Number"}),Object(v.jsx)("input",{type:"tel",id:"Phonebook-form__number",name:"number",value:f,onChange:function(t){l(t.target.value)},required:!0,autoComplete:"off",pattern:"^[ 0-9]+$"}),Object(v.jsx)("button",{className:"btn",type:"submit",children:"Add contact"})]})};g.defaultProps={items:[]};var y=Object(i.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onContactAdd:function(e,n){return t(function(t,e){return function(n){var c={name:t,number:e};n(h()),s.a.post(k,c).then((function(t){var e=t.data;return n(O(e))})).catch((function(t){return n(m(t))}))}}(e,n))}}}))(g),F=(n(59),function(t){var e=t.filter,n=t.onFilterChange;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{className:"find-contacts__label",htmlFor:"find-contacts-form__filter",children:"Find contacts by name"}),Object(v.jsx)("input",{type:"search",id:"find-contacts-form__filter",name:"filter",className:"find-contacts__input",value:e,onChange:n,required:!0,autoComplete:"off",autoFocus:!0})]})});F.defaultProps={filter:""};var N=Object(i.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onFilterChange:function(e){return t(_(e.target.value))}}}))(F),P=(n(60),function(t){var e=t.items,n=t.filter,o=t.onContactsFetch,r=t.onContactDelete;return Object(c.useEffect)((function(){o()}),[]),Object(v.jsx)("ul",{className:"contacts__list",children:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(v.jsxs)("li",{className:"contacts__item",children:[Object(v.jsxs)("p",{children:[n,": ",c]}),Object(v.jsx)("button",{type:"button",className:"btn",onClick:function(){return r(e)},children:"Delete"})]},e)}))})});P.defaultProps={items:[],filter:""};var w=Object(i.b)((function(t){return{items:t.contacts.items,filter:t.contacts.filter}}),(function(t){return{onContactsFetch:function(){return t((function(t){t(l()),s.a.get(k).then((function(e){var n=e.data;return t(j(n))})).catch((function(e){return t(d(e))}))}))},onContactDelete:function(e){return t(function(t){return function(e){e(p()),s.a.delete("".concat(k,"/").concat(t)).then((function(){return e(C(t))})).catch((function(t){return e(x(t))}))}}(e))}}}))(P),S=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"main-title",children:"Phonebook"}),Object(v.jsx)(y,{}),Object(v.jsx)("h2",{className:"title__contacts",children:"Contacts"}),Object(v.jsx)(N,{}),Object(v.jsx)(w,{})]})};n(61);var q,E,D=function(){return Object(v.jsx)(S,{})},A=n(10),R=n(5),J=n(3),L=Object(f.c)([],(q={},Object(J.a)(q,j,(function(t,e){return e.payload})),Object(J.a)(q,O,(function(t,e){return[].concat(Object(A.a)(t),[e.payload])})),Object(J.a)(q,C,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),q)),B=Object(f.c)("",Object(J.a)({},_,(function(t,e){return e.payload}))),I=Object(f.c)(!1,(E={},Object(J.a)(E,l,(function(){return!0})),Object(J.a)(E,j,(function(){return!1})),Object(J.a)(E,d,(function(){return!1})),Object(J.a)(E,h,(function(){return!0})),Object(J.a)(E,O,(function(){return!1})),Object(J.a)(E,m,(function(){return!1})),Object(J.a)(E,p,(function(){return!0})),Object(J.a)(E,C,(function(){return!1})),Object(J.a)(E,x,(function(){return!1})),E)),M=Object(R.c)({items:L,filter:B,loading:I}),T=Object(R.c)({contacts:M}),$=Object(A.a)(Object(f.d)()),z=Object(f.a)({reducer:T,devTools:!1,middleware:$});a.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(i.a,{store:z,children:Object(v.jsx)(D,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.09a4943c.chunk.js.map