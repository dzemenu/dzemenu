(this.webpackJsonpmemegenerator=this.webpackJsonpmemegenerator||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),m=n.n(o),c=n(2),i=n(3),u=n(17),s=n(18);var l=Object(c.c)({memes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECIEVE_MEMES":return t.memes;default:return e}},myMeme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_MEME":return[].concat(Object(s.a)(e),[t.meme]);default:return e}}}),p=n(6),h=n(7),f=n(9),E=n(8),d=n(33),v=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={hoverState:!1},e}return Object(h.a)(n,[{key:"postMemes",value:function(){console.log("this.props",this.props);var e=this.props,t=e.text0,n=e.text1,a={template_id:this.props.id,text0:t,text1:n};this.props.createMeme(a)}},{key:"render",value:function(){var e=this,t=this.props;return r.a.createElement("div",{className:"meme-item",onMouseEnter:function(){return e.setState({hoverState:!0})},onMouseLeave:function(){return e.setState({hoverState:!1})},onClick:function(){return e.postMemes()}},r.a.createElement("img",{src:t.img,alt:t.name,className:this.state.hoverState?"meme-img darken-img":"meme-img"}),r.a.createElement("h4",{className:this.state.hoverState?"meme-text":"no-txt"},t.name))}}]),n}(a.Component),b=Object(i.b)(null,{createMeme:function(e){return function(t){return function(e){e.username="dzemenu",e.password="twUe9tvR=.8YN_F";var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");return console.log("bodyParams",t),fetch("https://api.imgflip.com/caption_image",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t}).then((function(e){return e.json()}))}(e).then((function(e){return t({type:"NEW_MEME",meme:e})}))}}})(v),g=(n(29),function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={memeLimit:10,text0:"",text1:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("u",null,"Welcome to Meme Generator")),r.a.createElement(d.a,{inline:!0},r.a.createElement("h4",null,"Write something"),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Top"),r.a.createElement(d.a.Control,{type:"text",onChange:function(t){return e.setState({text0:t.target.value})}})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Bottom"),r.a.createElement(d.a.Control,{type:"text",onChange:function(t){return e.setState({text1:t.target.value})}}))),this.props.memes.slice(0,this.state.memeLimit).map((function(t,n){return r.a.createElement(b,{key:n,id:t.id,img:t.url,name:t.name,text0:e.state.text0,text1:e.state.text1})})),r.a.createElement("div",{onClick:function(){return e.setState({memeLimit:e.state.memeLimit+10})},className:"meme-button"},"Load More Memes ..."))}}]),n}(a.Component));var j=Object(i.b)((function(e){return e}),null)(g),x=Object(c.d)(l,Object(c.a)(u.a));x.subscribe((function(){return console.log("store",x.getState())})),x.dispatch((function(e){return fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"RECIEVE_MEMES",memes:e.data.memes}}(t))}))})),m.a.render(r.a.createElement(i.a,{store:x},r.a.createElement(j,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.14ff3905.chunk.js.map