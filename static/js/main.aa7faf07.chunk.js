(this["webpackJsonpmy-kdrama-list"]=this["webpackJsonpmy-kdrama-list"]||[]).push([[0],{169:function(e,t,a){e.exports=a(188)},174:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),u=(a(174),a(241)),o=a(8),l=a.n(o),s=a(13),d=a(12),m=a(112),p=new m.a({id:"mykdramalist-svqcx"}),f=n.createContext(void 0),v=function(e){var t=e.children,a=n.useRef(p),r=n.useState(p.currentUser),i=Object(d.a)(r,2),c=i[0],u=i[1];n.useEffect((function(){u(p.currentUser)}),[a.current.currentUser]);var o=function(){var e=Object(s.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.emailPasswordAuth.registerUser(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v={id:"mykdramalist-svqcx",user:c,logIn:function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.b.emailPassword(t,a),e.next=3,p.logIn(n);case 3:u(p.currentUser);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=p.currentUser)||void 0===t?void 0:t.logOut();case 2:u(p.currentUser);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),registerUser:o};return n.createElement(f.Provider,{value:v},t)},b=function(){var e=n.useContext(f);if(!e)throw new Error("You must call useRealmApp() inside of a <RealmApp />.");return e},g=a(11),E=a(31),h=function(e){var t=e.children,a=b(),r=a.id,i=a.user,c=n.useState(O(r,i)),u=Object(d.a)(c,2),o=u[0],l=u[1];return n.useEffect((function(){l(O(r,i))}),[r,i]),n.createElement(E.ApolloProvider,{client:o},t)};function O(e,t){var a="https://realm.mongodb.com/api/client/v2.0/app/".concat(e,"/graphql");return new E.ApolloClient({link:new E.HttpLink({uri:a,fetch:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(s.a)(l.a.mark((function e(a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers||(n.headers={}),e.next=3,t.refreshCustomData();case 3:return r=Object(g.a)(Object(g.a)({},n),{},{headers:Object(g.a)(Object(g.a)({},n.headers),{},{Authorization:"Bearer ".concat(t.accessToken)})}),e.abrupt("return",fetch(a,r));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),cache:new E.InMemoryCache})}var j=a(140),w=a(218),x=a(190),k=a(157),y=a(244),C=a(191),D=function(){var e=b(),t=Object(n.useState)(""),a=Object(d.a)(t,2),i=a[0],c=a[1],u=Object(n.useState)(""),o=Object(d.a)(u,2),m=o[0],p=o[1],f=r.a.useState({}),v=Object(d.a)(f,2),E=v[0],h=v[1];function O(e){console.error(e);var t=function(e){var t,a=e.message.split(":"),n=a[a.length-1].trimStart();if(!n)return{status:"",message:""};var r=Object(j.a)(/(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\(status ([0-9][0-9][0-9])/,{message:1,status:2}),i=n.match(r),c=null!==(t=null===i||void 0===i?void 0:i.groups)&&void 0!==t?t:{};return{status:c.status,message:c.message}}(e),a=t.status;switch(t.message||a){case"invalid username":h((function(e){return Object(g.a)(Object(g.a)({},e),{},{email:"Invalid email address."})}));break;case"invalid username/password":case"invalid password":case"401":h((function(e){return Object(g.a)(Object(g.a)({},e),{},{password:"Incorrect password."})}));break;case"name already in use":case"409":h((function(e){return Object(g.a)(Object(g.a)({},e),{},{email:"Email is already registered."})}));break;case"password must be between 6 and 128 characters":case"400":h((function(e){return Object(g.a)(Object(g.a)({},e),{},{password:"Password must be between 6 and 128 characters."})}))}}var D=function(){var t=Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h((function(e){return Object(g.a)(Object(g.a)({},e),{},{password:void 0})})),t.prev=1,t.next=4,e.logIn(i,m);case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),O(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(w.a,null,r.a.createElement(x.a,{elevation:4,style:{paddingTop:"70px",paddingBottom:"70px",marginTop:"200px",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(k.a,{variant:"h2"},"My KDrama List"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),D()}},r.a.createElement(y.a,{style:{margin:"8px",marginTop:"38px"},fullWidth:!0,id:"email",label:"Email",type:"email",value:i,error:!!E.email,helperText:E.email,onChange:function(e){return c(e.target.value)}}),r.a.createElement(y.a,{style:{margin:"8px"},fullWidth:!0,id:"password",label:"Password",type:"password",value:m,error:!!E.password,helperText:E.password,onChange:function(e){return p(e.target.value)}}),r.a.createElement(C.a,{style:{margin:"8px",marginTop:"38px"},fullWidth:!0,variant:"outlined",color:"primary",type:"submit"},"Log In"))))},S=a(40),_=a(248),K=a(226),I=a(239),$=a(55),F=a(30),z=a.n(F);function P(){var e=Object($.a)(["\n    mutation SetRating($id: ObjectId!, $rating: Float!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {rating: $rating}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return P=function(){return e},e}function A(){var e=Object($.a)(["\n    mutation SetEpisodes($id: ObjectId!, $counter: Float!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {currentEpisode: $counter}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return A=function(){return e},e}function T(){var e=Object($.a)(['\n    mutation StartKDrama($id: ObjectId!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {status: "watching", currentEpisode: 1}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    ']);return T=function(){return e},e}function q(){var e=Object($.a)(["\n    mutation SetKDramaStatus($id: ObjectId!, $status: String!) {\n  kDrama: updateOneKDrama(query: {_id: $id}, set: {status: $status}) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return q=function(){return e},e}function R(){var e=Object($.a)(["\n    mutation DeleteKDrama($id: ObjectId!) {\n  kDrama: deleteOneKDrama(query: {_id: $id}) {\n    _id\n  }\n}\n    "]);return R=function(){return e},e}function W(){var e=Object($.a)(["\n    mutation AddKDrama($kDrama: KDramaInsertInput!) {\n  kDrama: insertOneKDrama(data: $kDrama) {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return W=function(){return e},e}function M(){var e=Object($.a)(["\n    query GetAllKDramas {\n  kDramas {\n    _id\n    title\n    image\n    status\n    totalEpisodes\n    currentEpisode\n    rating\n  }\n}\n    "]);return M=function(){return e},e}var L=z()(M());var U=z()(W());var B=z()(R());var N=z()(q());z()(T());var J=z()(A());var Q=z()(P());var G="watching",H="completed",Y="planned",V={watching:"Complete",completed:"Completed",planned:"Start Watching"},X={watching:"Currently watching",completed:"Completed",planned:"Next planned"},Z=a(6),ee=a(250),te=a(227),ae=a(146),ne=a.n(ae),re=a(147),ie=a.n(re),ce=a(71),ue=a(249),oe=a(103),le=a.n(oe),se=Object(_.a)((function(e){e.size;var t=Object(ce.a)(e,["size"]);return r.a.createElement(ue.a,t)}))({height:function(e){return e.size},width:function(e){return e.size}}),de=function(e){var t=e.image,a=e.size,n=e.onClick;return t?r.a.createElement(se,{size:a,onClick:n,src:t}):r.a.createElement(se,{size:a,onClick:n},r.a.createElement(le.a,{style:{fontSize:a}}))},me=Object(Z.a)((function(){return{tooltip:{fontSize:20}}}))(ee.a),pe=Object(_.a)(K.a)({marginTop:30,marginBottom:20,width:900}),fe=Object(_.a)(K.a)({width:1020}),ve=function(e){var t=e.list,a=e.currentPage,n=e.setCurrentPage,i=e.setDisplayedKDrama,c=t.slice(4*a,4*(a+1));return r.a.createElement(fe,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(te.a,{color:"primary",onClick:function(){var e=a-1;e<0||n(e)}},r.a.createElement(ne.a,{fontSize:"large"})),r.a.createElement(pe,{container:!0,direction:"row",justify:"space-evenly"},c.map((function(e){return r.a.createElement(me,{key:e._id,title:e.title},r.a.createElement(de,{size:150,image:e.image,onClick:function(){return function(e){i(e)}(e)}}))}))),r.a.createElement(te.a,{color:"primary",onClick:function(){var e=a+1;4*e>t.length||n(e)}},r.a.createElement(ie.a,{fontSize:"large"})))},be=a(228),ge=a(229),Ee=a(230),he=a(252),Oe=a(109),je=Object(Z.a)({iconFilled:{color:Oe.a[700]}})(he.a),we=Object(_.a)(be.a)({width:800,marginTop:50}),xe=Object(_.a)("img")({height:450,width:800,objectFit:"cover"}),ke=Object(_.a)(ge.a)({justifyContent:"space-between",padding:"8px 15px 15px 15px"}),ye=function(e){var t,a,i,c=e.kDrama,u=e.setEpisodes,o=e.setStatus,l=e.setRating,s=Object(n.useState)(null!==(t=c.rating)&&void 0!==t?t:0),m=Object(d.a)(s,2),p=m[0],f=m[1];Object(n.useEffect)((function(){var e;f(null!==(e=c.rating)&&void 0!==e?e:0)}),[c,f]);var v=function(){o(c._id,G),u(c._id,1)},b={watching:function(){o(c._id,H),u(c._id,c.totalEpisodes)},completed:function(){},planned:v};return r.a.createElement(we,{elevation:5},r.a.createElement(Ee.a,{style:{padding:"0px"}},(null===c||void 0===c?void 0:c.image)&&r.a.createElement(xe,{src:c.image,alt:"kdrama"}),r.a.createElement(k.a,{style:{paddingLeft:"15px"},variant:"h5"},X[c.status]),r.a.createElement(k.a,{style:{paddingLeft:"15px",fontWeight:"bold"},variant:"h4"},null!==(a=c.title)&&void 0!==a?a:"No currently watched KDrama"),r.a.createElement(ke,null,r.a.createElement(je,{value:p,onChange:function(e,t){f(t),l(c._id,t)}}),r.a.createElement("div",null,r.a.createElement(C.a,{style:{marginRight:5},variant:"outlined",color:"primary",onClick:function(){return b[c.status]()}},V[c.status]),r.a.createElement(C.a,{onClick:function(){c.currentEpisode&&c.currentEpisode>=c.totalEpisodes||(c.status===Y?v():u(c._id,(c.currentEpisode||0)+1))},variant:"outlined",color:"primary"},"".concat(null!==(i=c.currentEpisode)&&void 0!==i?i:"0","/").concat(c.totalEpisodes))))))},Ce=a(232),De=a(231),Se=a(110),_e=a(152),Ke=a.n(_e),Ie=a(150),$e=a.n(Ie),Fe=a(149),ze=a.n(Fe),Pe=a(148),Ae=a.n(Pe),Te=a(153),qe=a.n(Te),Re=a(151),We=a.n(Re),Me=Object(_.a)(te.a)({position:"fixed",right:"80px",bottom:"320px",color:"white",backgroundColor:De.a[600]}),Le=Object(_.a)(te.a)({position:"fixed",right:"80px",bottom:"240px",backgroundColor:Se.a[700],color:"white"}),Ue=Object(_.a)(Ce.a)({position:"fixed",right:"160px",bottom:"200px"}),Be=Object(_.a)(C.a)({color:Se.a[700],borderColor:Se.a[700]}),Ne=function(e){var t=e.logOut,a=e.deleteKDrama,i=e.handleFormOpen,c=e.handleRankingOpen,u=e.setFilter,o=e.resetPage,l=Object(n.useState)(!1),s=Object(d.a)(l,2),m=s[0],p=s[1],f=Object(n.useState)(!1),v=Object(d.a)(f,2),b=v[0],g=v[1],E=function(e){u(e),o(),p(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,{onClick:c},r.a.createElement(Ae.a,null)),r.a.createElement(Le,{onClick:function(){p(!m)}},r.a.createElement(ze.a,null)),m&&r.a.createElement(Ue,{variant:"outlined",orientation:"vertical"},r.a.createElement(Be,{onClick:function(){return E(Y)}},"Planned"),r.a.createElement(Be,{onClick:function(){return E(G)}},"Watching"),r.a.createElement(Be,{onClick:function(){return E(H)}},"Completed"),r.a.createElement(Be,{onClick:function(){return E(null)}},"All")),r.a.createElement(te.a,{style:{position:"fixed",right:"80px",bottom:"160px"},color:"secondary",onClick:i},r.a.createElement($e.a,null)),r.a.createElement(te.a,{style:{position:"fixed",right:"80px",bottom:"80px"},color:"primary",onClick:function(){g(!b)}},r.a.createElement(We.a,null)),b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{style:{position:"fixed",right:"160px",bottom:"80px"},color:"primary",onClick:function(){return t()}},r.a.createElement(Ke.a,null)),r.a.createElement(te.a,{style:{position:"fixed",right:"240px",bottom:"80px"},color:"primary",onClick:a},r.a.createElement(qe.a,null))))},Je=a(246),Qe=a(233),Ge=a(234),He=a(235),Ye=a(243),Ve=a(251),Xe=Object(_.a)(C.a)({display:"flex",alignSelf:"flex-end",width:"30%",marginTop:20}),Ze=function(e){var t=e.isOpen,a=e.handleClose,i=e.addKDrama,c=Object(n.useState)(Y),u=Object(d.a)(c,2),o=u[0],l=u[1],s=Object(n.useState)(""),m=Object(d.a)(s,2),p=m[0],f=m[1],v=Object(n.useState)(""),b=Object(d.a)(v,2),g=b[0],E=b[1],h=Object(n.useState)(0),O=Object(d.a)(h,2),j=O[0],w=O[1],x={title:p,image:g,status:o,totalEpisodes:j};return r.a.createElement(Je.a,{fullWidth:!0,open:t,onClose:a},r.a.createElement(Qe.a,null,"Add KDrama"),r.a.createElement(Ge.a,null,r.a.createElement("form",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(He.a,null,"Enter the new KDrama's information"),r.a.createElement(y.a,{value:p,onChange:function(e){return f(e.target.value)},required:!0,autoFocus:!0,margin:"dense",label:"Title"}),r.a.createElement(y.a,{value:g,onChange:function(e){return E(e.target.value)},margin:"dense",label:"Image Link"}),r.a.createElement(Ye.a,{onChange:function(e){return l(e.target.value)},value:o,required:!0,style:{margin:"21px 0px 4px 0px"}},r.a.createElement(Ve.a,{value:G},"Watching"),r.a.createElement(Ve.a,{value:H},"Completed"),r.a.createElement(Ve.a,{value:Y},"Planned")),r.a.createElement(y.a,{value:j,onChange:function(e){return w(parseInt(e.target.value))},type:"number",margin:"dense",label:"Total Episodes"}),r.a.createElement(Xe,{type:"submit",color:"primary",variant:"outlined",onClick:function(){i(x),a(),l(Y),f(""),E(""),w(0)}},"Add"))))},et=a(236),tt=a(237),at=a(238),nt=Object(_.a)(ue.a)({height:70,width:70}),rt=function(e){var t=e.kDramas,a=e.isOpen,n=e.handleClose;return r.a.createElement(Je.a,{open:a,onClose:n,fullWidth:!0},r.a.createElement(Qe.a,null,r.a.createElement(k.a,{variant:"h3"},"Ranking")),r.a.createElement(et.a,null,t.filter((function(e){var t=e.rating;return t&&0!==t})).sort((function(e,t){return t.rating-e.rating})).map((function(e,t){var a=e.title,n=e.rating,i=e.image;return r.a.createElement(tt.a,{key:t},r.a.createElement(at.a,null,r.a.createElement(k.a,{variant:"h4"},t+1)),r.a.createElement(at.a,null,i?r.a.createElement(nt,{src:i}):r.a.createElement(nt,null,r.a.createElement(le.a,{style:{fontSize:"150px"}}))),r.a.createElement(at.a,null,r.a.createElement(k.a,{variant:"h5"},a)),r.a.createElement(at.a,null,r.a.createElement(je,{readOnly:!0,value:n})))}))))},it=Object(_.a)(K.a)({background:"linear-gradient(130deg, rgba(174,229,238,1) 0%, rgba(75,160,255,1) 100%)",height:"100vh",borderRadius:"0% 0% 80% 0%"}),ct=function(){var e,t=Object(n.useState)([]),a=Object(d.a)(t,2),i=a[0],c=a[1],u=Object(n.useState)(),o=Object(d.a)(u,2),m=o[0],p=o[1],f=Object(n.useState)(!1),v=Object(d.a)(f,2),h=v[0],O=v[1],j=Object(n.useState)(!1),w=Object(d.a)(j,2),x=w[0],y=w[1],C=Object(n.useState)(0),D=Object(d.a)(C,2),_=D[0],K=D[1],$=Object(n.useState)(null),F=Object(d.a)($,2),z=F[0],P=F[1],A=Object(n.useMemo)((function(){return i.filter((function(e){var t=e.status;return!z||t===z}))}),[z,i]),T=b().logOut,q=E.useMutation(U,e),R=Object(d.a)(q,1)[0],W=function(e){return E.useMutation(B,e)}(),M=Object(d.a)(W,1)[0],H=function(e){return E.useMutation(N,e)}(),V=Object(d.a)(H,1)[0],X=function(e){return E.useMutation(J,e)}(),Z=Object(d.a)(X,1)[0],ee=function(e){return E.useMutation(Q,e)}(),te=Object(d.a)(ee,1)[0],ae=function(e){return E.useQuery(L,e)}({onCompleted:function(e){if(null===e||void 0===e?void 0:e.kDramas){var t=e.kDramas;c(t);var a=t.find((function(e){return e.status===G}))||t.find((function(e){return e.status===Y}));p(a)}}}).loading,ne=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(S.a)(i),e.prev=1,e.next=4,R({variables:{kDrama:t}});case 4:r=e.sent,u=null===(n=r.data)||void 0===n?void 0:n.kDrama,c([].concat(Object(S.a)(a),[u])),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),c(a),new Error("Couldn't add new KDrama");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(S.a)(i),e.prev=1,e.next=4,M({variables:{id:null===m||void 0===m?void 0:m._id}});case 4:n=e.sent,r=null===(a=n.data)||void 0===a?void 0:a.kDrama,c(Object(S.a)(t.filter((function(e){return e._id!==r._id})))),p(t.find((function(e){return e.status===G}))||t.find((function(e){return e.status===Y}))),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),c(t),new Error("Couldn't delete KDrama");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),ie=Object(n.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(S.a)(i),e.prev=1,p(Object(g.a)(Object(g.a)({},m),{},{currentEpisode:a})),e.next=5,Z({variables:{id:t,counter:a}});case 5:u=e.sent,o=null===(r=u.data)||void 0===r?void 0:r.kDrama,n[n.findIndex((function(e){return e._id===o._id}))]=o,p(o),c(n),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(1),c(n),new Error("Couldn't increase episodes");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}(),[i,m,Z,p]),ce=Object(n.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(S.a)(i),e.prev=1,p(Object(g.a)(Object(g.a)({},m),{},{status:a})),e.next=5,V({variables:{id:t,status:a}});case 5:u=e.sent,o=null===(r=u.data)||void 0===r?void 0:r.kDrama,n[n.findIndex((function(e){return e._id===o._id}))]=o,p(o),c(n),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(1),c(n),new Error("Couldn't set status");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}(),[i,m,V,p]),ue=Object(n.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(S.a)(i),e.prev=1,e.next=4,te({variables:{id:t,rating:a}});case 4:u=e.sent,o=null===(r=u.data)||void 0===r?void 0:r.kDrama,n[n.findIndex((function(e){return e._id===o._id}))]=o,c(n),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),c(n),new Error("Couldn't set status");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),[i,te]),oe=Object(n.useCallback)((function(){return ae?r.a.createElement(I.a,{size:200}):m?r.a.createElement(ye,{kDrama:m,setStatus:ce,setEpisodes:ie,setRating:ue}):r.a.createElement(k.a,{variant:"h2"},"No KDrama in Queue")}),[ae,m,ce,ie,ue]);return r.a.createElement(it,{container:!0,direction:"column",alignItems:"center",justify:"space-evenly"},oe(),r.a.createElement(ve,{setDisplayedKDrama:p,list:A,currentPage:_,setCurrentPage:K,isLoading:ae}),r.a.createElement(Ne,{setFilter:P,deleteKDrama:re,handleFormOpen:function(){return O(!0)},handleRankingOpen:function(){return y(!0)},resetPage:function(){return K(0)},logOut:T}),r.a.createElement(Ze,{addKDrama:ne,handleClose:function(){return O(!1)},isOpen:h}),r.a.createElement(rt,{handleClose:function(){return y(!1)},isOpen:x,kDramas:i}))},ut=a(154),ot=a(240),lt=Object(ut.a)({palette:{neutral:{main:Se.a[700]},primary:{main:Oe.a[700]},secondary:{main:ot.a[700]}}}),st=function(e){return r.a.createElement(u.a,{theme:lt},r.a.createElement(v,null,r.a.createElement(dt,null)))};function dt(){var e=b();return e?e.user?r.a.createElement(h,null,r.a.createElement(ct,null)):r.a.createElement(D,null):r.a.createElement("div",null,"Loading")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(st,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[169,1,2]]]);
//# sourceMappingURL=main.aa7faf07.chunk.js.map