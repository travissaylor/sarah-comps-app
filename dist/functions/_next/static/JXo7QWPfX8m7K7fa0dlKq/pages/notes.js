(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5gWw":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes",function(){return n("DbAB")}])},DbAB:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),s=n.n(a),o=n("0iUn"),r=n("MI3g"),i=n("a7VT"),c=n("sLSF"),p=n("Tit0"),l=n("MX0m"),u=n.n(l),d=n("q1tI"),x=n.n(d),f=n("8Kt/"),b=n.n(f),h=n("MbLX"),m=n("YFqc"),w=n.n(m),g=n("u1Fb"),j=n("0ESW"),v=x.a.createElement,k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={notes:n.props.notes},n}return Object(p.a)(t,e),Object(c.a)(t,null,[{key:"getInitialProps",value:function(){var e,t,n,a;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,s.a.awrap(Object(g.a)());case 2:return e=o.sent,t=e.firestore(),n=[],a=t.collection("notes"),o.next=8,s.a.awrap(a.get().then((function(e){e.forEach((function(e){n.push({id:e.id,title:e.data().title,content:e.data().content})}))})).catch((function(e){console.log("Error getting documents",e)})));case 8:return o.sent,o.abrupt("return",{notes:n});case 10:case"end":return o.stop()}}))}}]),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,a=this;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,s.a.awrap(Object(g.a)());case 2:e=o.sent,t=e.firestore(),n=t.collection("notes"),n.get().then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,title:e.data().title,content:e.data().content})})),a.setState({notes:t})})).catch((function(e){console.log("Error getting documents",e)}));case 6:case"end":return o.stop()}}))}},{key:"render",value:function(){return v("div",{className:"jsx-2082108802"},v(b.a,null,v("title",{className:"jsx-2082108802"},"Notes"),v("link",{rel:"icon",href:"/favicon.ico",className:"jsx-2082108802"})),v(j.a,{title:"Notes"}),v("div",{className:"jsx-2082108802 Hero"},v("h1",{className:"jsx-2082108802 title"},"Notes"),v("div",{className:"jsx-2082108802 row"},this.state.notes.map((function(e){return v(w.a,{href:"/note/[id]",as:"/note/"+e.id},v("a",{className:"jsx-2082108802 card"},e.title))})))),v(h.a,null),v(u.a,{id:"2082108802"},[".hero.jsx-2082108802{width:100%;color:#333;}",".title.jsx-2082108802{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}",".title.jsx-2082108802,.description.jsx-2082108802{text-align:center;}",".row.jsx-2082108802{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".card.jsx-2082108802{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}"]))}}]),t}(x.a.Component);t.default=k},u1Fb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("ln6h"),s=n.n(a),o={apiKey:"sarahs-comp-app.firebaseapp.com",authDomain:"sarahs-comp-app.firebaseapp.com",databaseURL:"https://sarahs-comp-app.firebaseio.com",projectId:"sarahs-comp-app",storageBucket:"sarahs-comp-app.appspot.com",messagingSenderId:"362636394443",appId:"1:362636394443:web:b25085e8863b08c7ab804e",measurementId:"G-W5WYG34VJX"};function r(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(Promise.all([n.e(0),n.e(11)]).then(n.t.bind(null,"Wcq6",7)));case 2:return e=a.sent,a.next=5,s.a.awrap(Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"5x/H")));case 5:try{e.apps.length||(t=e.initializeApp(o),e.firestore(t))}catch(r){console.log(r),/already exists/.test(r.message)||console.error("Firebase initialization error",r.stack)}return a.abrupt("return",e);case 7:case"end":return a.stop()}}))}}},[["5gWw",1,0]]]);