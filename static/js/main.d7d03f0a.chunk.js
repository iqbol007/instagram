(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),m=(a(11),a(12),a(1)),i=a(3),o=a(2);function s(e){var t=e.comment,a=e.dispatch,n=function(){a({type:"COMMENT_LIKE",commentId:t.id})};return c.a.createElement("article",{className:"comment"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-trash com-rem",onClick:function(){a({type:"COMMENT_REMOVE",commentId:t.id})}})),c.a.createElement("div",{className:"comment-author"},t.author,c.a.createElement("span",{className:"comment-text col"},t.content),t.comLikedByme?c.a.createElement("i",{className:"fa fa-heart fa-sm likedClass col",onClick:n}):c.a.createElement("i",{className:"fa fa-heart fa-sm col",onClick:n})),c.a.createElement("div",{className:"comment-info"},c.a.createElement("span",{className:"comment-aded-time"},"13\u043c\u0438\u043d."),c.a.createElement("span",{className:"comment-likes"},"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f: ",t.likes),c.a.createElement("span",{className:"comment-reply"},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c ",c.a.createElement("i",{className:"fa fa-reply"}))),c.a.createElement("footer",null))}function u(e){var t=e.comments,a=e.dispatch;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement(s,{key:e.id,comment:e,dispatch:a})})).reverse())}function d(e){var t=e.postId,a=e.dispatch,r=Object(n.useState)(""),l=Object(m.a)(r,2),i=l[0],o=l[1],s=function(e){e.preventDefault(),a({type:"COMMENT_ADD",comment:i,postId:t}),o("")};return c.a.createElement("form",{className:"comment-add-form",onSubmit:s},c.a.createElement("input",{className:"input-comment",onChange:function(e){var t=e.target.value;o(t)},value:i,placeholder:"To comment...",autocomplete:"off"}),c.a.createElement("i",{className:"fa fa-plus-circle gray",onClick:s}))}function p(e){var t=e.comments,a=e.onClose,n=e.isOpen,r=e.dispatch,l=c.a.createElement("div",{className:"dialogStyles"},c.a.createElement("button",{className:"dialogButtonsStyles",onClick:a},"x"),c.a.createElement("div",{className:"viev-all-comments"},t.map((function(e){return c.a.createElement(s,{key:e.id,comment:e,dispatch:r})}))));return n||(l=null),c.a.createElement(c.a.Fragment,null,l)}function f(e){var t=e.post,a=e.dispatch,r=function(){a({type:"POST_LIKE",postId:t.id})},l=t.imgUrl,i=t.imgContentUrl,o={width:"40px",height:"40px",backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",borderRadius:"50%"},s={width:"400px",height:"400px",paddingTop:"5px",backgroundImage:"url(".concat(i,")"),backgroundSize:"cover"},f=Object(n.useState)(!1),E=Object(m.a)(f,2),h=E[0],v=E[1];return c.a.createElement("article",{className:"post"},c.a.createElement("div",{className:"author"},c.a.createElement("div",{style:o}),c.a.createElement("span",{className:"author-name"},t.author),c.a.createElement("i",{className:"fa fa-trash remover",onClick:function(){a({type:"POST_REMOVE",postId:t.id})}}),c.a.createElement("div",null)),c.a.createElement("div",{className:"text-content"},t.geo),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"img-content"},c.a.createElement("div",{style:s})),c.a.createElement("div",{className:"social-buttons"},t.isLikedByme?c.a.createElement("i",{className:"fa fa-heart fr fa-lg likedClass",onClick:r}):c.a.createElement("i",{className:"fa fa-heart fr fa-lg",onClick:r}),c.a.createElement("i",{className:"fa fa-comment fr fa-lg",onClick:function(){return v(!0)}}),c.a.createElement("i",{className:"fa fa-paper-plane fr fa-lg"}),c.a.createElement("i",{className:"fa fa-bookmark fl fa-lg"}))),c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"likes"},"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f: ",t.likes),c.a.createElement("div",{className:"text-content"},c.a.createElement("span",{className:"description"},t.author)," ",t.textContent)),c.a.createElement(d,{postId:t.id,dispatch:a}),c.a.createElement(u,{comments:t.comments,dispatch:a}),c.a.createElement(p,{comments:t.comments,isOpen:h,onClose:function(){return v(!1)},dispatch:a}))}function E(e){var t=e.onClose,a=e.isOpen,r=e.dispatch,l=Object(n.useState)(""),i=Object(m.a)(l,2),o=i[0],s=i[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),p=d[0],f=d[1],E=Object(n.useState)(""),h=Object(m.a)(E,2),v=h[0],k=h[1],N=c.a.createElement("div",{className:"dialogStyles"},c.a.createElement("button",{onClick:t,className:"dialogButtonsStyles"},"x"),c.a.createElement("h1",null,"Add post form"),c.a.createElement("div",null,c.a.createElement("label",{className:"lab",htmlFor:"input-ava"},"Input post author image url:"," "),c.a.createElement("input",{onChange:function(e){var t=e.target.value;s(t)},id:"input-ava",className:"input-avaurl",placeholder:"URL...",autocomplete:"off"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"input-cont"},"Input post content url: "),c.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},id:"input-cont",className:"input-conturl",placeholder:"URL...",autocomplete:"off"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"input-desc"},"Input post description: "),c.a.createElement("input",{onChange:function(e){var t=e.target.value;k(t)},id:"input-desc",className:"input-description",placeholder:"description...",autocomplete:"off"})),c.a.createElement("button",{onClick:function(){""===o&&""===p||(r({type:"POST_ADD",authorImageUrl:o,postContent:p,postDescription:v}),t(),s(""),f(""),k(""))}},"ok"));return a||(N=null),c.a.createElement(c.a.Fragment,null,N)}function h(e){var t=e.onAddButtonClick;return c.a.createElement("div",{className:"footer-buttons fa-xl size-xl"},c.a.createElement("i",{className:"fa fa-home fa-xl size-xl"}),c.a.createElement("i",{className:"fa fa-search fa-xl size-xl"}),c.a.createElement("i",{onClick:t,className:"fa fa-plus-square fa-xl size-xl"}),c.a.createElement("i",{className:"fa fa-heart fa-xl size-xl"}),c.a.createElement("i",{className:"fa fa-user fa-xl size-xl"}))}var v=1,k=1,N=[{id:v++,author:"cristiano",imgUrl:"https://i.pravatar.cc/200",likes:3,textContent:"Second Post",imgContentUrl:"https://i.pravatar.cc/510",comments:[{id:k++,author:"fcbarcelona",content:"good bay",likes:14,comLikedByMe:!1}],isLikedByme:!1},{id:v++,author:"leomessi",imgUrl:"https://i.pravatar.cc/200",likes:4,isLikedByMe:!1,textContent:"good morning",imgContentUrl:"https://i.pravatar.cc/530",isLikedByme:!1,comments:[{id:k++,author:"danny",content:"Nice Post",likes:0,comLikedByme:!1}]},{id:v++,author:"eminem",imgUrl:"https://i.pravatar.cc/200",likes:215,textContent:"third Post",isLikedByMe:!1,imgContentUrl:"https://i.pravatar.cc/590",isLikedByme:!1,comments:[{id:k++,author:"john",content:"Cool man!!!",likes:55,comLikedByme:!1}]}];function g(e,t){return[].concat(Object(i.a)(e),[{id:k++,author:"user_01",content:t,likes:0}])}function y(){var e=Object(n.useReducer)((function(e,t){switch(t.type){case"POST_LIKE":var a=t.postId;return function(e,t){return e.map((function(e){return e.id!==t?e:e.isLikedByme?(e.isLikedByme=!e.isLikedByme,Object(o.a)({},e,{likes:e.likes-1})):(e.isLikedByme=!e.isLikedByme,Object(o.a)({},e,{likes:e.likes+1}))}))}(e,a);case"COMMENT_ADD":var n=t.postId,c=t.comment;return function(e,t,a){return e.map((function(e){return Object(o.a)({},e,{comments:e.id!==t?e.comments:g(e.comments,a)})}))}(e,n,c);case"COMMENT_LIKE":var r=t.commentId;return e.map((function(e){return Object(o.a)({},e,{comments:(t=e.comments,a=r,t.map((function(e){return e.id!==a?e:e.comLikedByme?(e.comLikedByme=!e.comLikedByme,Object(o.a)({},e,{likes:e.likes-1})):(e.comLikedByme=!e.comLikedByme,Object(o.a)({},e,{likes:e.likes+1}))})))});var t,a}));case"COMMENT_REMOVE":var l=t.commentId;return e.map((function(e){return Object(o.a)({},e,{comments:(t=e.comments,a=l,t.filter((function(e){return e.id!==a})))});var t,a}));case"POST_ADD":var m=t.authorImageUrl,s=t.postContent,u=t.postDescription;return function(e,t,a,n){return[].concat(Object(i.a)(e),[{id:v++,author:"user_01",imgUrl:t,likes:0,textContent:n,imgContentUrl:a,comments:[],isLikedByme:!1}])}(e,m,s,u);case"POST_REMOVE":var d=t.postId;return function(e,t){return e.filter((function(e){return e.id!==t}))}(e,d);default:return e}}),N),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),u=s[0],d=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"header"},c.a.createElement("i",{className:"fa fa-camera fr head-icons pl size-xl"}),c.a.createElement("span",{className:"instagramm-logo"},"Instagramm"),c.a.createElement("i",{className:"fa fa-paper-plane fl head-icons pr size-xl"})),a.map((function(e){return c.a.createElement(f,{key:e.id,post:e,dispatch:r})})).reverse(),c.a.createElement(E,{isOpen:u,onClose:function(){return d(!1)},dispatch:r})),c.a.createElement("div",{className:"space"}),c.a.createElement(h,{onAddButtonClick:function(e){return d(!0)}}))}var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d7d03f0a.chunk.js.map