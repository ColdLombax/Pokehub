(this.webpackJsonppokehub=this.webpackJsonppokehub||[]).push([[0],{24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(15),i=n.n(a),s=n(13),o=n.n(s),u=n(16),j=n(10),d=(n(24),n(9)),b=(n(30),n(26),n(17)),p=n(18),h=n(4);d.a.initializeApp({apiKey:"AIzaSyCGHHLuH32rump6HK2b3fZzF9AI6RDgXx0",authDomain:"fir-auth-af1a2.firebaseapp.com",projectId:"fir-auth-af1a2",storageBucket:"fir-auth-af1a2.appspot.com",messagingSenderId:"727122910339",appId:"1:727122910339:web:f183ef8945ce79ec30cfb6"});var f=d.a.auth(),l=d.a.firestore();function O(){var e=Object(b.a)(f),t=Object(j.a)(e,1)[0];return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{}),Object(h.jsx)("section",{children:t?Object(h.jsx)(x,{}):Object(h.jsx)(m,{})})]})}function m(){return Object(h.jsx)("button",{type:"button",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;f.signInWithPopup(e)},children:"Sign In"})}function x(){var e=Object(r.useRef)(),t=l.collection("messages"),n=t.orderBy("createdAt").limit(25),c=Object(p.a)(n,{idField:"id"}),a=Object(j.a)(c,1)[0],i=Object(r.useState)(""),s=Object(j.a)(i,2),b=s[0],O=s[1],m=function(){var n=Object(u.a)(o.a.mark((function n(r){var c,a,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),c=f.currentUser,a=c.uid,i=c.photoURL,n.next=4,t.add({text:b,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:O(""),e.current.scrollIntoView({behaviour:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Chat Room"}),Object(h.jsxs)("main",{children:[a&&a.map((function(e){return Object(h.jsx)(v,{message:e},e.id)})),Object(h.jsx)("div",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:m,children:[Object(h.jsx)("input",{value:b,onChange:function(e){O(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Send"})]})]})}function v(e){var t=e.message,n=t.text,r=t.uid,c=t.photoURL,a=r===f.currentUser.uid?"send":"recieved";return Object(h.jsxs)("div",{className:"message ".concat(a),children:[Object(h.jsx)("img",{src:c,alt:""}),Object(h.jsx)("p",{children:n})]})}i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.27862408.chunk.js.map