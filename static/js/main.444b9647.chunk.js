(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,n){e.exports=n(371)},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},371:function(e,t,n){"use strict";n.r(t);n(189),n(219);var o,a=n(0),r=n.n(a),c=n(19),i=n.n(c),s=(n(224),n(69)),l=n(70),u=n(73),m=n(71),d=n(74),p=(n(225),function(){return r.a.createElement("div",{className:"Header"},"POSTS")}),f=(n(226),function(e){var t=e.children;return r.a.createElement("div",{className:"PostWrapper"},t)}),g=n(376),b=(n(227),function(e){var t=e.postId,n=e.onClick;return r.a.createElement("div",{className:"Navigate"},r.a.createElement(g.a,{color:"teal",content:"Previous",icon:"left arrow",labelPosition:"left",onClick:function(){return n("PREV")}}),r.a.createElement("div",{className:"Navigate-page-num"},t),r.a.createElement(g.a,{color:"teal",content:"Next",icon:"right arrow",labelPosition:"right",className:"Navigate-right-button",onClick:function(){return n("NEXT")}}))}),h=(n(348),function(e){var t=e.body,n=e.title;return r.a.createElement("div",{className:"Post"},r.a.createElement("h1",null,n),r.a.createElement("p",null,t),r.a.createElement(y,null))}),v=n(30),E=(n(349),function(e){var t=e.name,n=e.body;return r.a.createElement("li",{className:"Comment"},r.a.createElement("p",null,r.a.createElement("b",null,t)," ",n))}),y=(n(350),Object(v.b)(function(e){return{comments:e.store.comments}})(Object(v.c)(function(e){var t=e.comments.map(function(e,t){return r.a.createElement(E,{key:t,name:e.name,body:e.body})});return r.a.createElement("ul",{className:"CommentList"},console.log("CommentList render"),t)}))),N=Object(v.b)("store")(o=Object(v.c)(o=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleNavigateClick=function(e){var t=n.props.store.postId;"NEXT"===e?n.props.store.setPostId(t+1):t>1&&n.props.store.setPostId(t-1)},n._renderPost=function(){return console.log(" _renderPost-----------"),n.props.store.posts.map(function(e,t){return r.a.createElement(h,{body:e.body,title:e.title,key:t})})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount-----------"),this.props.store.getList()}},{key:"render",value:function(){var e=this.props.store,t=e.isLoading,n=e.postId;return r.a.createElement("div",null,r.a.createElement(f,null,r.a.createElement(b,{postId:n,onClick:this.handleNavigateClick}),t?"Loading":this._renderPost()))}}]),t}(a.Component))||o)||o,P=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(N,null),!1)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=n(14),I=n(111),k=n.n(I),w=j.a.model("Post",{userId:j.a.number,id:j.a.identifierNumber,title:j.a.string,body:j.a.string}),O=j.a.model("comment",{postId:j.a.identifierNumber,id:j.a.number,name:j.a.string,email:j.a.string,body:j.a.string}),L=j.a.model({postId:j.a.optional(j.a.number,1),posts:j.a.optional(j.a.array(w),[]),comments:j.a.optional(j.a.array(O),[]),isLoading:!0}).actions(function(e){return{doneLoading:function(t){e.isLoading=t},setPost:function(t){e.posts=t},setPostId:function(t){e.postId=t,e.getList()},setCommentsList:function(t){e.comments=t},getList:function(){console.log("store getListAPI"),k.a.get("https://jsonplaceholder.typicode.com/posts?id=".concat(e.postId)).then(function(t){e.doneLoading(!1),e.setPost(t.data)}).catch(function(e){return console.log(e)}),k.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(e.postId)).then(function(t){e.setCommentsList(t.data)}).catch(function(e){return console.log(e)})}}}).create();i.a.render(r.a.createElement(v.a,{store:L},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[188,1,2]]]);
//# sourceMappingURL=main.444b9647.chunk.js.map