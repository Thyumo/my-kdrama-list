(this["webpackJsonpmy-kdrama-list"]=this["webpackJsonpmy-kdrama-list"]||[]).push([[0],{167:function(e,t,a){e.exports=a(186)},172:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),u=(a(172),a(239)),o=a(8),l=a.n(o),s=a(12),d=a(11),m=a(112),p=new m.a({id:"mykdramalist-svqcx"}),f=n.createContext(void 0),v=function(e){var t=e.children,a=n.useRef(p),r=n.useState(p.currentUser),i=Object(d.a)(r,2),c=i[0],u=i[1];n.useEffect((function(){u(p.currentUser)}),[a.current.currentUser]);var o=function(){var e=Object(s.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.emailPasswordAuth.registerUser(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v={id:"mykdramalist-svqcx",user:c,logIn:function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.b.emailPassword(t,a),e.next=3,p.logIn(n);case 3:u(p.currentUser);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=p.currentUser)||void 0===t?void 0:t.logOut();case 2:u(p.currentUser);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),registerUser:o};return n.createElement(f.Provider,{value:v},t)},b=function(){var e=n.useContext(f);if(!e)throw new Error("You must call useRealmApp() inside of a <RealmApp />.");return e},g=a(14),h=a(33),E=function(e){var t=e.children,a=b(),r=a.id,i=a.user,c=n.useState(O(r,i)),u=Object(d.a)(c,2),o=u[0],l=u[1];return n.useEffect((function(){l(O(r,i))}),[r,i]),n.createElement(h.ApolloProvider,{client:o},t)};function O(e,t){var a="https://realm.mongodb.com/api/client/v2.0/app/".concat(e,"/graphql");return new h.ApolloClient({link:new h.HttpLink({uri:a,fetch:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(s.a)(l.a.mark((function e(a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers||(n.headers={}),e.next=3,t.refreshCustomData();case 3:return r=Object(g.a)(Object(g.a)({},n),{},{headers:Object(g.a)(Object(g.a)({},n.headers),{},{Authorization:"Bearer ".concat(t.accessToken)})}),e.abrupt("return",fetch(a,r));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),cache:new h.InMemoryCache})}var j=a(140),w=a(216),k=a(188),x=a(155),y=a(242),C=a(189),D=function(){var e=b(),t=Object(n.useState)(""),a=Object(d.a)(t,2),i=a[0],c=a[1],u=Object(n.useState)(""),o=Object(d.a)(u,2),m=o[0],p=o[1],f=r.a.useState({}),v=Object(d.a)(f,2),h=v[0],E=v[1];function O(e){console.error(e);var t=function(e){var t,a=e.message.split(":"),n=a[a.length-1].trimStart();if(!n)return{status:"",message:""};var r=Object(j.a)(/(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\(status ([0-9][0-9][0-9])/,{message:1,status:2}),i=n.match(r),c=null!==(t=null===i||void 0===i?void 0:i.groups)&&void 0!==t?t:{};return{status:c.status,message:c.message}}(e),a=t.status;switch(t.message||a){case"invalid username":E((function(e){return Object(g.a)(Object(g.a)({},e),{},{email:"Invalid email address."})}));break;case"invalid username/password":case"invalid password":case"401":E((function(e){return Object(g.a)(Object(g.a)({},e),{},{password:"Incorrect password."})}));break;case"name already in use":case"409":E((function(e){return Object(g.a)(Object(g.a)({},e),{},{email:"Email is already registered."})}));break;case"password must be between 6 and 128 characters":case"400":E((function(e){return Object(g.a)(Object(g.a)({},e),{},{password:"Password must be between 6 and 128 characters."})}))}}var D=function(){var t=Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E((function(e){return Object(g.a)(Object(g.a)({},e),{},{password:void 0})})),t.prev=1,t.next=4,e.logIn(i,m);case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),O(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(w.a,null,r.a.createElement(k.a,{elevation:4,style:{paddingTop:"70px",paddingBottom:"70px",marginTop:"200px",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(x.a,{variant:"h2"},"My KDrama List"),r.a.createElement("form",{onSubmit:function(){return D()}},r.a.createElement(y.a,{style:{margin:"8px",marginTop:"38px"},fullWidth:!0,id:"email",label:"Email",type:"email",value:i,error:!!h.email,helperText:h.email,onChange:function(e){return c(e.target.value)}}),r.a.createElement(y.a,{style:{margin:"8px"},fullWidth:!0,id:"password",label:"Password",type:"password",value:m,error:!!h.password,helperText:h.password,onChange:function(e){return p(e.target.value)}}),r.a.createElement(C.a,{type:"submit",style:{margin:"8px",marginTop:"38px"},fullWidth:!0,variant:"outlined",color:"primary"},"Log In"))))},S=a(43),_=a(246),I=a(224),K=a(237),$=a(60),z=a(32),F=a.n(z);function A(){var e=Object($.a)(["\n    mutation SetRating($id: ObjectId!, $rating: Float!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {rating: $rating}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return A=function(){return e},e}function T(){var e=Object($.a)(["\n    mutation SetEpisodes($id: ObjectId!, $counter: Float!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {currentEpisode: $counter}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return T=function(){return e},e}function R(){var e=Object($.a)(['\n    mutation StartKDrama($id: ObjectId!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {status: "watching", currentEpisode: 1}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    ']);return R=function(){return e},e}function W(){var e=Object($.a)(["\n    mutation SetKDramaStatus($id: ObjectId!, $status: String!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {status: $status}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return W=function(){return e},e}function q(){var e=Object($.a)(["\n    mutation AddKDrama($kDrama: KDramaInsertInput!) {\n  kDrama: insertOneKDrama(data: $kDrama) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return q=function(){return e},e}function L(){var e=Object($.a)(["\n    query GetAllKDramas {\n  kDramas {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return L=function(){return e},e}var M=F()(L());var P=F()(q());var U=F()(W());F()(R());var B=F()(T());var N=F()(A());var J="watching",Q="completed",G="planned",H={watching:"Complete",completed:"Completed",planned:"Start Watching"},Y={watching:"Currently watching",completed:"Completed",planned:"Next planned"},V=a(6),X=a(248),Z=a(225),ee=a(146),te=a.n(ee),ae=a(147),ne=a.n(ae),re=a(71),ie=a(247),ce=a(103),ue=a.n(ce),oe=Object(_.a)((function(e){e.size;var t=Object(re.a)(e,["size"]);return r.a.createElement(ie.a,t)}))({height:function(e){return e.size},width:function(e){return e.size}}),le=function(e){var t=e.image,a=e.size,n=e.onClick;return t?r.a.createElement(oe,{size:a,onClick:n,src:t}):r.a.createElement(oe,{size:a,onClick:n},r.a.createElement(ue.a,{style:{fontSize:a}}))},se=Object(V.a)((function(){return{tooltip:{fontSize:20}}}))(X.a),de=Object(_.a)(I.a)({marginTop:30,marginBottom:20,width:900}),me=Object(_.a)(I.a)({width:1020}),pe=function(e){var t=e.list,a=e.setDisplayedKDrama,i=Object(n.useState)(0),c=Object(d.a)(i,2),u=c[0],o=c[1],l=t.slice(4*u,4*(u+1));return r.a.createElement(me,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(Z.a,{color:"primary",onClick:function(){var e=u-1;e<0||o(e)}},r.a.createElement(te.a,{fontSize:"large"})),r.a.createElement(de,{container:!0,direction:"row",justify:"space-evenly"},l.map((function(e){return r.a.createElement(se,{key:e._id,title:e.title},r.a.createElement(le,{size:150,image:e.image,onClick:function(){return function(e){a(e)}(e)}}))}))),r.a.createElement(Z.a,{color:"primary",onClick:function(){var e=u+1;4*e>t.length||o(e)}},r.a.createElement(ne.a,{fontSize:"large"})))},fe=a(226),ve=a(227),be=a(228),ge=a(250),he=a(109),Ee=Object(V.a)({iconFilled:{color:he.a[700]}})(ge.a),Oe=Object(_.a)(fe.a)({width:800,marginTop:50}),je=Object(_.a)("img")({height:450,width:800,objectFit:"cover"}),we=Object(_.a)(ve.a)({justifyContent:"space-between",padding:"8px 15px 15px 15px"}),ke=function(e){var t,a,i,c=e.kDrama,u=e.setEpisodes,o=e.setStatus,l=e.setRating,s=Object(n.useState)(null!==(t=c.rating)&&void 0!==t?t:0),m=Object(d.a)(s,2),p=m[0],f=m[1];Object(n.useEffect)((function(){var e;f(null!==(e=c.rating)&&void 0!==e?e:0)}),[c,f]);var v=function(){o(c._id,J),u(c._id,1)},b={watching:function(){o(c._id,Q),u(c._id,c.totalEpisodes)},completed:function(){},planned:v};return r.a.createElement(Oe,{elevation:5},r.a.createElement(be.a,{style:{padding:"0px"}},(null===c||void 0===c?void 0:c.image)&&r.a.createElement(je,{src:c.image,alt:"kdrama"}),r.a.createElement(x.a,{style:{paddingLeft:"15px"},variant:"h5"},Y[c.status]),r.a.createElement(x.a,{style:{paddingLeft:"15px",fontWeight:"bold"},variant:"h4"},null!==(a=c.title)&&void 0!==a?a:"No currently watched KDrama"),r.a.createElement(we,null,r.a.createElement(Ee,{value:p,onChange:function(e,t){f(t),l(c._id,t)}}),r.a.createElement("div",null,r.a.createElement(C.a,{style:{marginRight:5},variant:"outlined",color:"primary",onClick:function(){return b[c.status]()}},H[c.status]),r.a.createElement(C.a,{onClick:function(){c.status===G?v():u(c._id,(c.currentEpisode||0)+1)},variant:"outlined",color:"primary"},"".concat(null!==(i=c.currentEpisode)&&void 0!==i?i:"0","/").concat(c.totalEpisodes))))))},xe=a(230),ye=a(229),Ce=a(110),De=a(151),Se=a.n(De),_e=a(150),Ie=a.n(_e),Ke=a(149),$e=a.n(Ke),ze=a(148),Fe=a.n(ze),Ae=Object(_.a)(Z.a)({position:"fixed",right:"80px",bottom:"320px",color:"white",backgroundColor:ye.a[600]}),Te=Object(_.a)(Z.a)({position:"fixed",right:"80px",bottom:"240px",backgroundColor:Ce.a[700],color:"white"}),Re=Object(_.a)(xe.a)({position:"fixed",right:"160px",bottom:"200px"}),We=Object(_.a)(C.a)({color:Ce.a[700],borderColor:Ce.a[700]}),qe=function(e){var t=e.logOut,a=e.handleFormOpen,i=e.handleRankingOpen,c=e.setFilter,u=Object(n.useState)(!1),o=Object(d.a)(u,2),l=o[0],s=o[1],m=function(e){c(e),s(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,{onClick:i},r.a.createElement(Fe.a,null)),r.a.createElement(Te,{onClick:function(){s(!l)}},r.a.createElement($e.a,null)),l&&r.a.createElement(Re,{variant:"outlined",orientation:"vertical"},r.a.createElement(We,{onClick:function(){return m(G)}},"Planned"),r.a.createElement(We,{onClick:function(){return m(J)}},"Watching"),r.a.createElement(We,{onClick:function(){return m(Q)}},"Completed"),r.a.createElement(We,{onClick:function(){return m(null)}},"All")),r.a.createElement(Z.a,{style:{position:"fixed",right:"80px",bottom:"160px"},color:"secondary",onClick:a},r.a.createElement(Ie.a,null)),r.a.createElement(Z.a,{style:{position:"fixed",right:"80px",bottom:"80px"},color:"primary",onClick:function(){return t()}},r.a.createElement(Se.a,null)))},Le=a(244),Me=a(231),Pe=a(232),Ue=a(233),Be=a(241),Ne=a(249),Je=Object(_.a)(C.a)({display:"flex",alignSelf:"flex-end",width:"30%",marginTop:20}),Qe=function(e){var t=e.isOpen,a=e.handleClose,i=e.addKDrama,c=Object(n.useState)(G),u=Object(d.a)(c,2),o=u[0],l=u[1],s=Object(n.useState)(""),m=Object(d.a)(s,2),p=m[0],f=m[1],v=Object(n.useState)(""),b=Object(d.a)(v,2),g=b[0],h=b[1],E=Object(n.useState)(0),O=Object(d.a)(E,2),j=O[0],w=O[1],k={title:p,image:g,status:o,totalEpisodes:j};return r.a.createElement(Le.a,{fullWidth:!0,open:t,onClose:a},r.a.createElement(Me.a,null,"Add KDrama"),r.a.createElement(Pe.a,{style:{display:"flex",flexDirection:"column"}},r.a.createElement(Ue.a,null,"Enter the new KDrama's information"),r.a.createElement(y.a,{value:p,onChange:function(e){return f(e.target.value)},required:!0,autoFocus:!0,margin:"dense",label:"Title"}),r.a.createElement(y.a,{value:g,onChange:function(e){return h(e.target.value)},margin:"dense",label:"Image Link"}),r.a.createElement(Be.a,{onChange:function(e){return l(e.target.value)},value:o,required:!0,style:{margin:"21px 0px 4px 0px"}},r.a.createElement(Ne.a,{value:J},"Watching"),r.a.createElement(Ne.a,{value:Q},"Completed"),r.a.createElement(Ne.a,{value:G},"Planned")),r.a.createElement(y.a,{value:j,onChange:function(e){return w(parseInt(e.target.value))},type:"number",margin:"dense",label:"Total Episodes"}),r.a.createElement(Je,{type:"submit",color:"primary",variant:"outlined",onClick:function(){i(k),a(),l(G),f(""),h(""),w(0)}},"Add")))},Ge=a(234),He=a(235),Ye=a(236),Ve=Object(_.a)(ie.a)({height:70,width:70}),Xe=function(e){var t=e.kDramas,a=e.isOpen,n=e.handleClose;return r.a.createElement(Le.a,{open:a,onClose:n,fullWidth:!0},r.a.createElement(Me.a,null,r.a.createElement(x.a,{variant:"h3"},"Ranking")),r.a.createElement(Ge.a,null,t.filter((function(e){var t=e.rating;return t&&0!==t})).sort((function(e,t){return t.rating-e.rating})).map((function(e,t){var a=e.title,n=e.rating,i=e.image;return r.a.createElement(He.a,{key:t},r.a.createElement(Ye.a,null,r.a.createElement(x.a,{variant:"h4"},t+1)),r.a.createElement(Ye.a,null,i?r.a.createElement(Ve,{src:i}):r.a.createElement(Ve,null,r.a.createElement(ue.a,{style:{fontSize:"150px"}}))),r.a.createElement(Ye.a,null,r.a.createElement(x.a,{variant:"h5"},a)),r.a.createElement(Ye.a,null,r.a.createElement(Ee,{readOnly:!0,value:n})))}))))},Ze=Object(_.a)(I.a)({background:"linear-gradient(130deg, rgba(174,229,238,1) 0%, rgba(75,160,255,1) 100%)",height:"100vh",borderRadius:"0% 0% 80% 0%"}),et=function(){var e,t=Object(n.useState)([]),a=Object(d.a)(t,2),i=a[0],c=a[1],u=i.find((function(e){var t=e.status;return t===J||t===G})),o=Object(n.useState)(),m=Object(d.a)(o,2),p=m[0],f=m[1],v=Object(n.useState)(!1),g=Object(d.a)(v,2),E=g[0],O=g[1],j=Object(n.useState)(!1),w=Object(d.a)(j,2),k=w[0],y=w[1],C=Object(n.useState)(null),D=Object(d.a)(C,2),_=D[0],I=D[1],$=Object(n.useMemo)((function(){return i.filter((function(e){var t=e.status;return!_||t===_}))}),[_,i]),z=b().logOut,F=h.useMutation(P,e),A=Object(d.a)(F,1)[0],T=function(e){return h.useMutation(U,e)}(),R=Object(d.a)(T,1)[0],W=function(e){return h.useMutation(B,e)}(),q=Object(d.a)(W,1)[0],L=function(e){return h.useMutation(N,e)}(),Q=Object(d.a)(L,1)[0],H=function(e){return h.useQuery(M,e)}({onCompleted:function(e){(null===e||void 0===e?void 0:e.kDramas)&&c(e.kDramas)}}).loading,Y=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(S.a)(i),e.prev=1,e.next=4,A({variables:{kDrama:t}});case 4:r=e.sent,u=null===(n=r.data)||void 0===n?void 0:n.kDrama,c([].concat(Object(S.a)(a),[u])),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),c(a),new Error("Couldn't add new KDrama");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),V=Object(n.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(S.a)(i),e.prev=1,e.next=4,q({variables:{id:t,counter:a}});case 4:u=e.sent,o=null===(r=u.data)||void 0===r?void 0:r.kDrama,n[n.findIndex((function(e){return e._id===o._id}))]=o,c(n),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),c(n),new Error("Couldn't increase episodes");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),[i,q]),X=Object(n.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(S.a)(i),e.prev=1,e.next=4,R({variables:{id:t,status:a}});case 4:u=e.sent,o=null===(r=u.data)||void 0===r?void 0:r.kDrama,n[n.findIndex((function(e){return e._id===o._id}))]=o,c(n),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),c(n),new Error("Couldn't set status");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),[i,R]),Z=Object(n.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(S.a)(i),e.prev=1,e.next=4,Q({variables:{id:t,rating:a}});case 4:u=e.sent,o=null===(r=u.data)||void 0===r?void 0:r.kDrama,n[n.findIndex((function(e){return e._id===o._id}))]=o,c(n),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),c(n),new Error("Couldn't set status");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),[i,Q]),ee=Object(n.useCallback)((function(){return H?r.a.createElement(K.a,{size:200}):u||p?r.a.createElement(ke,{kDrama:p||u,setStatus:X,setEpisodes:V,setRating:Z}):r.a.createElement(x.a,{variant:"h2"},"No KDrama in Queue")}),[H,u,p,X,V,Z]);return r.a.createElement(Ze,{container:!0,direction:"column",alignItems:"center",justify:"space-evenly"},ee(),r.a.createElement(pe,{setDisplayedKDrama:f,list:$,isLoading:H}),r.a.createElement(qe,{setFilter:I,handleFormOpen:function(){return O(!0)},handleRankingOpen:function(){return y(!0)},logOut:z}),r.a.createElement(Qe,{addKDrama:Y,handleClose:function(){return O(!1)},isOpen:E}),r.a.createElement(Xe,{handleClose:function(){return y(!1)},isOpen:k,kDramas:i}))},tt=a(152),at=a(238),nt=Object(tt.a)({palette:{neutral:{main:Ce.a[700]},primary:{main:he.a[700]},secondary:{main:at.a[700]}}}),rt=function(e){return r.a.createElement(u.a,{theme:nt},r.a.createElement(v,null,r.a.createElement(it,null)))};function it(){var e=b();return e?e.user?r.a.createElement(E,null,r.a.createElement(et,null)):r.a.createElement(D,null):r.a.createElement("div",null,"Loading")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(rt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[167,1,2]]]);
//# sourceMappingURL=main.067ac42e.chunk.js.map