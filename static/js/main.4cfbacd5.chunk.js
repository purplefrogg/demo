(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{129:function(e,t,n){"use strict";var a=n(3),r=n(1),i=n(53),s=n(54),c=n(65),o=n(64),u=n(0),l=n.n(u),d=n(15),p=n(11),f=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){var t=function(t){Object(c.a)(u,t);var n=Object(o.a)(u);function u(){return Object(i.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){return!1===this.props.isAuth?Object(r.jsx)(p.a,{to:"/Login"}):Object(r.jsx)(e,Object(a.a)({},this.props))}}]),u}(l.a.Component);return Object(d.b)(f)(t)}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(41),r=n(3),i="message/DELETE_MESSAGE",s="message/ADD-MESSAGE",c={chats:[{id:1,name:"Trish Una",icon:"https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album"},{id:2,name:"Josuke Higashikata",icon:"https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album"},{id:3,name:"Noriaki Kakyoin",icon:"https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album"},{id:4,name:"Kira Yoshikage",icon:"https://i.pinimg.com/474x/0a/8c/de/0a8cde733252ac8941f1210f1299e295.jpg"},{id:5,name:"Joseph Joestar",icon:"https://i.pinimg.com/474x/1d/ed/7c/1ded7cf734a605f6d18f699abf7d9eaa.jpg"},{id:6,name:"bruno buccerati",icon:"https://i.pinimg.com/474x/fd/91/db/fd91dbc2886555e0f9a8832171959784.jpg"},{id:7,name:"DIO",icon:"https://pbs.twimg.com/profile_images/1026856822492352512/ZEig1q14_400x400.jpg"},{id:8,name:"kakashi hatake",icon:"https://i.pinimg.com/originals/32/62/8c/32628c0b689967a8c044a35f8217d838.jpg"},{id:9,name:"Hisoka",icon:"https://i.pinimg.com/564x/fc/0a/ec/fc0aec5184be7873b54ccb0a375e632c.jpg"}],messages:[{id:1,message:"who are you"},{id:2,message:"I am DIO BRANDO"},{id:3,message:"who are you"},{id:4,message:"I am DIO BRANDO"}]},o=function(e){return{type:s,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{message:t.message}]),inputtingMessage:""});case i:return Object(r.a)(Object(r.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.userId})),inputtingMessage:""});default:return e}}},131:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return h}));var a=n(10),r=n.n(a),i=n(16),s=n(3),c=n(17),o="proflie/SET_USER_PROFILE",u="proflie/SET_STATUS",l="profile/SET_PHOTOS",d={profile:null,status:""},p=function(e){return{type:u,status:e}},f=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:o,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updatePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:l,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case u:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},134:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return y}));var a=n(10),r=n.n(a),i=n(16),s=n(41),c=n(3),o=n(17),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),a):e}))},l="users/FOLLOW",d="users/UNFOLLOW",p="users/SET-USERS",f="users/SET_CURRENT_PAGE",b="users/SET_TOTAL_COUNT",j="users/TOGGLE_IS_FETCHING",h="users/TOGGLE_IS_FOLLOWING",m={users:[],totalCount:0,count:100,page:1,isFetching:!0,isFollowing:[]},O=function(e){return{type:f,page:e}},g=function(e){return{type:j,isFetching:e}},_=function(e,t){return{type:h,isFetching:e,id:t}},x=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),a(O(e)),n.next=4,o.c.getUsers(e,t);case 4:i=n.sent,a((s=i.data.items,{type:p,users:s})),a((r=i.data.totalCount,{type:b,totalCount:r})),a(g(!1));case 8:case"end":return n.stop()}var r,s}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.c.followPost(e);case 3:0===t.sent.data.resultCode&&n({type:l,id:e}),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.c.followDelete(e);case 3:0===t.sent.data.resultCode&&n({type:d,id:e}),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{users:u(e.users,t.id,"id",{followed:!0})});case d:return Object(c.a)(Object(c.a)({},e),{},{users:u(e.users,t.id,"id",{followed:!1})});case p:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case f:return Object(c.a)(Object(c.a)({},e),{},{page:t.page});case b:return Object(c.a)(Object(c.a)({},e),{},{totalCount:t.totalCount});case j:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case h:return Object(c.a)(Object(c.a)({},e),{},{isFollowing:t.isFetching?[].concat(Object(s.a)(e.isFollowing),[t.id]):e.isFollowing.filter((function(e){return e!==t.id}))});default:return e}}},138:function(e,t,n){e.exports={ldsDualRing:"preloader_ldsDualRing__2J3s8"}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(135),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"dd920698-43c2-4a1d-aa58-8b7dafae5603"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t))},followDelete:function(e){return r.delete("follow/".concat(e))},followPost:function(e){return r.post("follow/".concat(e))}},s={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},22:function(e,t,n){e.exports={header:"Header_header__1v0yI",header__logo:"Header_header__logo___qdaS",header__menu:"Header_header__menu__rwb1k",header__item:"Header_header__item__TlfzP",link:"Header_link__1uLZ-",active:"Header_active__3GX0s",authTrue:"Header_authTrue__3y1A7"}},290:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(99),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,298)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))}),i=n(0),s=n.n(i),c=n(66),o=n.n(c),u=n(53),l=n(54),d=n(65),p=n(64),f=n(11),b=n(25),j=n(3),h=n(36),m="app/INITIALIZED_SUCCESS",O={initialized:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},_=n(41),x="news/ADD-POST",v="news/ON-CHANGE-TEXTPOST",y={posts:[{idProfile:"/id001",author:"Trish Una",text:"hey, its mario",icon:"https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album",img:"https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg"},{idProfile:"/id002",author:"Josuke Higashikata",text:"pam, param, pam-pam",icon:"https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album",img:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg"},{idProfile:"/id003",author:"Noriaki Kakyoin",text:"there must have been some message here",icon:"https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album"},{idProfile:"/id004",author:"Koichi Hirose",text:"hello, world",icon:"https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album",img:"https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg"}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(j.a)(Object(j.a)({},e),{},{inputtingPostText:t.newText});case x:return Object(j.a)(Object(j.a)({},e),{},{inputtingPostText:"",posts:[{icon:"https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album",text:t.text,idProfile:"/id001",author:"Trish Una"}].concat(Object(_.a)(e.posts))});default:return e}},N=n(15),P=n(52),T=n.n(P),k=n(34),S=n.n(k),E=function(e){return Object(a.jsxs)("div",{className:S.a.post,children:[Object(a.jsxs)("div",{className:S.a.header,children:[Object(a.jsx)("div",{className:S.a.icon,children:Object(a.jsx)("img",{src:e.icon,alt:""})}),Object(a.jsx)(b.b,{to:e.idProfile,children:Object(a.jsx)("div",{className:S.a.author,children:e.author})})]}),Object(a.jsx)("div",{className:S.a.image,children:Object(a.jsx)("img",{src:e.img,alt:""})}),Object(a.jsx)("div",{className:S.a.text,children:e.text})]})},C=n(89),D=n(132),A=n(88),F=n(97),I=Object(A.a)(100),H=Object(F.b)("textarea"),L=Object(D.a)({form:"post"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,className:T.a.addPost,children:[Object(a.jsx)(C.a,{name:"text",component:H,className:T.a.Textarea,validate:[A.b,I],placeholder:"what's new"}),Object(a.jsx)("button",{className:T.a.btnPost,children:"post"})]})})),U=function(e){var t=e.state.posts.map((function(e){return Object(a.jsx)(E,{idProfile:e.idProfile,icon:e.icon,author:e.author,text:e.text,img:e.img},e.idProfile)}));return Object(a.jsxs)("div",{className:T.a.NewsPage,children:[Object(a.jsx)(L,{onSubmit:function(t){e.addPost(t.text)}}),t]})},z=n(129),R=n(9),q={addPost:function(e){return{type:x,text:e}}},K=Object(R.d)(Object(N.b)((function(e){return{state:e.news}}),q),z.a)(U),G=n(22),M=n.n(G),X=function(e){return Object(a.jsxs)("div",{className:M.a.header,children:[Object(a.jsx)("div",{className:M.a.header__logo,children:Object(a.jsx)("img",{src:"https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2295592/7db885da26204a358ef0068310b6da3e/1.png?token-time=2145916800&token-hash=0mK1H_AvY9axo7l0XUtd_rkagRLxY4OhCd-5Pd3xZGg%3D",alt:""})}),Object(a.jsxs)("div",{className:M.a.header__menu,children:[Object(a.jsx)("div",{className:M.a.header__item,children:Object(a.jsx)(b.b,{to:"/Users",activeClassName:M.a.active,className:M.a.link,children:"Users"})}),Object(a.jsx)("div",{className:M.a.header__item,children:e.isAuth?Object(a.jsx)("div",{className:M.a.authTrue,children:Object(a.jsx)("button",{onClick:e.logout,children:"Log out"})}):Object(a.jsx)(b.b,{to:"/Login",activeClassName:M.a.active,className:M.a.link,children:"Login"})})]})]})},Z=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:h.d})((function(e){return Object(a.jsx)(X,Object(j.a)({},e))})),Y=n(70),B=n.n(Y),J=n(33),W=n.n(J),Q=function(e){return Object(a.jsx)("div",{className:W.a.navbar__item,children:Object(a.jsx)(b.b,{to:e.link,activeClassName:W.a.active,className:W.a.navbar__label,children:e.label})})},V=s.a.memo((function(){return Object(a.jsx)("div",{className:W.a.navbar,children:Object(a.jsxs)("div",{className:W.a.navbar__list,children:[Object(a.jsx)(Q,{label:"News",link:"/News"}),Object(a.jsx)(Q,{label:"Messenger",link:"/Messenger"}),Object(a.jsx)(Q,{label:"Friends",link:"/Friends"}),Object(a.jsx)(Q,{label:"Profile",link:"/Profile"})]})})})),$=n(63),ee=n(130),te=n(131),ne=n(134),ae=n(139),re=n(133),ie=Object(R.c)({news:w,messenger:ee.b,profilePage:te.a,usersPage:ne.a,auth:h.b,app:g,form:re.a}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,ce=Object(R.e)(ie,se(Object(R.a)(ae.a)));window.store=ce;var oe=ce,ue=function(e){return function(t){return Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)($.a,{}),children:Object(a.jsx)(e,Object(j.a)({},t))})}},le=s.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),de=s.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),pe=s.a.lazy((function(){return n.e(5).then(n.bind(null,302))})),fe=s.a.lazy((function(){return n.e(6).then(n.bind(null,299))})),be=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(a.jsxs)("div",{className:B.a.wrapper,children:[Object(a.jsx)(Z,{}),Object(a.jsxs)("div",{className:B.a.body,children:[Object(a.jsx)(V,{}),Object(a.jsxs)("div",{className:B.a.content,children:[Object(a.jsx)(f.b,{path:"/Messenger",render:ue(le)}),Object(a.jsx)(f.b,{path:"/Users",render:ue(de)}),Object(a.jsx)(f.b,{path:"/News",render:function(){return Object(a.jsx)(K,{})}}),Object(a.jsx)(f.b,{path:"/Login",render:ue(fe)}),Object(a.jsx)(f.b,{path:"/Profile/:userId?",render:ue(pe)}),Object(a.jsx)(f.b,{path:"/Friends",render:function(){}})]})]})]}):Object(a.jsx)($.a,{})}}]),n}(s.a.Component),je=Object(R.d)(f.f,Object(N.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(h.a)());Promise.all([t]).then((function(){e({type:m})}))}}}))(be),he=function(e){return Object(a.jsx)(b.a,{children:Object(a.jsx)(N.a,{store:oe,children:Object(a.jsx)(je,{})})})};o.a.render(Object(a.jsx)(he,{}),document.getElementById("root")),r()},33:function(e,t,n){e.exports={navbar:"Navbar_navbar__3XZg6",navbar__list:"Navbar_navbar__list__3KxH2",navbar__item:"Navbar_navbar__item__1bXp_",navbar__label:"Navbar_navbar__label__1COXt",active:"Navbar_active__324Ek"}},34:function(e,t,n){e.exports={post:"Post_post__sP_5D",text:"Post_text__29PmG",image:"Post_image__3MfY_",header:"Post_header__FfTUh",author:"Post_author__-DEDu",icon:"Post_icon__2y6GQ"}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b}));var a=n(10),r=n.n(a),i=n(16),s=n(3),c=n(42),o=n(17),u="auth/SET_AUTH_USER_DATA",l={userId:null,login:null,email:null,isAuth:!1},d=function(e,t,n,a){return{type:u,payload:{userId:e,login:t,email:n,isAuth:a}}},p=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,i=a.id,s=a.login,c=a.email,t(d(i,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var s,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.login(e,t,n);case 2:0===(s=a.sent).data.resultCode?i(p()):(u=s.data.messages.length>0?s.data.messages[0]:"Some error",i(Object(c.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},52:function(e,t,n){e.exports={NewsPage:"News_NewsPage__3dnph",addPost:"News_addPost__1_fYV",Textarea:"News_Textarea__19_Zx",btnPost:"News_btnPost__1MxKY"}},63:function(e,t,n){"use strict";var a=n(1),r=n(138),i=n.n(r);t.a=function(){return Object(a.jsx)("div",{className:i.a.ldsDualRing})}},70:function(e,t,n){e.exports={wrapper:"App_wrapper__RCHjb",body:"App_body__2a4FT",content:"App_content__1Wt3K"}},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Required field"},r=function(e){return function(t){if(!(t.length<e))return"max length is ".concat(e)}}},93:function(e,t,n){e.exports={inputForm:"FormsControls_inputForm__yStTl",error:"FormsControls_error__1QSyu"}},97:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(1),r=n(3),i=n(98),s=(n(0),n(89)),c=n(93),o=n.n(c),u=function(e){return function(t){var n=t.input,s=t.meta,c=Object(i.a)(t,["input","meta"]),u=s.touched&&s.error;return Object(a.jsxs)("div",{className:o.a.inputForm,children:[Object(a.jsx)(e,Object(r.a)(Object(r.a)(Object(r.a)({},n),c),{},{className:c.className+" "+(u?o.a.error:"")})),u&&Object(a.jsx)("span",{children:s.error})]})}},l=function(e,t,n,i,c){return Object(a.jsx)("div",{children:Object(a.jsx)(s.a,Object(r.a)({name:e,component:t,validate:n,placeholder:i},c))})}},99:function(e,t,n){}},[[290,1,2]]]);
//# sourceMappingURL=main.4cfbacd5.chunk.js.map