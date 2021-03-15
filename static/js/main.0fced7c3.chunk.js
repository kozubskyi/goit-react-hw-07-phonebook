(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{30:function(t,e,n){},39:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(8),a=n.n(r),u=(n(30),n(15)),i=n(6),b=(n(39),n(11)),s=n.n(b),f=n(2),l=Object(f.b)("phonebook/fetchContactsRequest"),j=Object(f.b)("phonebook/fetchContactsSuccess"),d=Object(f.b)("phonebook/fetchContactsError"),h=Object(f.b)("phonebook/addContactRequest"),O=Object(f.b)("phonebook/addContactSuccess"),m=Object(f.b)("phonebook/addContactError"),p=Object(f.b)("phonebook/deleteContactRequest"),C=Object(f.b)("phonebook/deleteContactSuccess"),x=Object(f.b)("phonebook/deleteContactError"),_=Object(f.b)("phonebook/changeFilter"),g="http://localhost:4040/contacts",k=function(t){return t.contacts.items},v=function(t){return t.contacts.filter},F=function(t){return t.contacts.loading},y=n(1),N=function(t){var e=t.items,n=t.onContactAdd,o=Object(c.useState)(""),r=Object(u.a)(o,2),a=r[0],i=r[1],b=Object(c.useState)(""),s=Object(u.a)(b,2),f=s[0],l=s[1],j=function(){i(""),l("")};return Object(y.jsxs)("form",{className:"Phonebook__form",onSubmit:function(t){t.preventDefault(),e.map((function(t){return t.name})).includes(a)?alert("".concat(a," is already in contacts.")):n(a,f),j()},children:[Object(y.jsx)("label",{htmlFor:"Phonebook-form__name",children:"Name"}),Object(y.jsx)("input",{type:"text",id:"Phonebook-form__name",name:"name",value:a,onChange:function(t){i(t.target.value)},required:!0,autoComplete:"off"}),Object(y.jsx)("label",{htmlFor:"Phonebook-form__number",children:"Number"}),Object(y.jsx)("input",{type:"tel",id:"Phonebook-form__number",name:"number",value:f,onChange:function(t){l(t.target.value)},required:!0,autoComplete:"off",pattern:"^[ 0-9]+$"}),Object(y.jsx)("button",{className:"btn",type:"submit",children:"Add contact"})]})};N.defaultProps={items:[]};var P=Object(i.b)((function(t){return{items:k(t)}}),(function(t){return{onContactAdd:function(e,n){return t(function(t,e){return function(n){var c={name:t,number:e};n(h()),s.a.post(g,c).then((function(t){var e=t.data;return n(O(e))})).catch((function(t){return n(m(t))}))}}(e,n))}}}))(N),w=(n(59),function(t){var e=t.filter,n=t.onFilterChange;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("label",{className:"find-contacts__label",htmlFor:"find-contacts-form__filter",children:"Find contacts by name"}),Object(y.jsx)("input",{type:"search",id:"find-contacts-form__filter",name:"filter",className:"find-contacts__input",value:e,onChange:n,required:!0,autoComplete:"off",autoFocus:!0})]})});w.defaultProps={filter:""};var S=Object(i.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onFilterChange:function(e){return t(_(e.target.value))}}}))(w),q=(n(60),function(t){var e=t.items,n=t.filter,o=t.loading,r=t.onContactsFetch,a=t.onContactDelete;return Object(c.useEffect)((function(){r()}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ul",{className:"contacts__list",children:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(y.jsxs)("li",{className:"contacts__item",children:[Object(y.jsxs)("p",{children:[n,": ",c]}),Object(y.jsx)("button",{type:"button",className:"btn",onClick:function(){return a(e)},children:"Delete"})]},e)}))}),o&&Object(y.jsx)("p",{children:"Loading..."})]})});q.defaultProps={items:[],filter:""};var E=Object(i.b)((function(t){return{items:k(t),filter:v(t),loading:F(t)}}),(function(t){return{onContactsFetch:function(){return t((function(t){t(l()),s.a.get(g).then((function(e){var n=e.data;return t(j(n))})).catch((function(e){return t(d(e))}))}))},onContactDelete:function(e){return t(function(t){return function(e){e(p()),s.a.delete("".concat(g,"/").concat(t)).then((function(){return e(C(t))})).catch((function(t){return e(x(t))}))}}(e))}}}))(q),D=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{className:"main-title",children:"Phonebook"}),Object(y.jsx)(P,{}),Object(y.jsx)("h2",{className:"title__contacts",children:"Contacts"}),Object(y.jsx)(S,{}),Object(y.jsx)(E,{})]})};n(61);var A,L,R=function(){return Object(y.jsx)(D,{})},J=n(10),B=n(5),I=n(3),M=Object(f.c)([],(A={},Object(I.a)(A,j,(function(t,e){return e.payload})),Object(I.a)(A,O,(function(t,e){return[].concat(Object(J.a)(t),[e.payload])})),Object(I.a)(A,C,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),A)),T=Object(f.c)("",Object(I.a)({},_,(function(t,e){return e.payload}))),$=Object(f.c)(!1,(L={},Object(I.a)(L,l,(function(){return!0})),Object(I.a)(L,j,(function(){return!1})),Object(I.a)(L,d,(function(){return!1})),Object(I.a)(L,h,(function(){return!0})),Object(I.a)(L,O,(function(){return!1})),Object(I.a)(L,m,(function(){return!1})),Object(I.a)(L,p,(function(){return!0})),Object(I.a)(L,C,(function(){return!1})),Object(I.a)(L,x,(function(){return!1})),L)),z=Object(B.c)({items:M,filter:T,loading:$}),G=Object(B.c)({contacts:z}),H=Object(J.a)(Object(f.d)()),K=Object(f.a)({reducer:G,devTools:!1,middleware:H});a.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(i.a,{store:K,children:Object(y.jsx)(R,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.0fced7c3.chunk.js.map