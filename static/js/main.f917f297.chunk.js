(this["webpackJsonpchrisbenti.github.io"]=this["webpackJsonpchrisbenti.github.io"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(24),o=n.n(r),s=(n(30),n(23)),a=n(15),l=n(2),u=n(8),h=n(9),d=n(16),j=n(7),b=n(11),m=n(10),v=n(17),O=n.n(v),p=(n(31),n(0)),f=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={hover:null},e.onMouseEnter=function(t){e.setState({hover:t.currentTarget.id})},e.onMouseLeave=function(){e.setState({hover:null})},e}return Object(h.a)(n,[{key:"containerRender",value:function(e){var t=this.state.hover;return Object(p.jsx)("div",{className:"oldhome",children:Object(p.jsx)("div",{className:O()({app:!0,appHovered:t}),children:e})})}},{key:"componentWillMount",value:function(){document.body.style.backgroundColor="#1e90ff"}},{key:"componentWillUnmount",value:function(){document.body.style.backgroundColor=""}},{key:"getLink",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.state.hover,c=i&&i!==e;return n?Object(p.jsx)(a.b,{className:O()({appHovered:c}),id:e,to:e,onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,children:t}):Object(p.jsx)("a",{className:O()({appHovered:c}),id:e,href:e,onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,children:t})}}]),n}(i.Component),x=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(d.a)(Object(j.a)(n.prototype),"containerRender",this).call(this,Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"oldhome",children:["Link up with me on"," ",this.getLink("https://www.linkedin.com/in/chrisbenti/","LinkedIn")]}),Object(p.jsxs)("div",{children:["Email me at"," ",this.getLink("mailto:chrisbenti.com","chris@chrisbenti.com")]}),Object(p.jsxs)("div",{children:["Check out my Twitter,"," ",this.getLink("https://twitter.com/chrisbenti","@chrisbenti")]}),Object(p.jsxs)("div",{children:["If you're feeling chatty"," ",this.getLink("http://m.me/chris.bentivenga","Messenger")," ","works"]}),Object(p.jsxs)("div",{children:["You can also try"," ",this.getLink("https://discordapp.com/users/361710258915246081","chrisbenti#2337")," ","on Discord"]})]}))}}]),n}(f),y=n(14);function g(e){var t=e.num1,n=e.num2;return Object(p.jsxs)("div",{style:{display:"flex",textAlign:"center"},children:["number"===typeof t&&Object(p.jsx)("div",{style:{flexGrow:1},children:t}),"number"===typeof n&&Object(p.jsx)("div",{style:{flexGrow:1},children:n})]})}function k(e){var t=e.num1,n=e.num2,i="10vmin",c={height:"".concat(40,"vmin"),width:"".concat(80,"vmin"),color:"#BABABA",overflow:"hidden",fontSize:"70vmin",fontWeight:"bold",lineHeight:1,textAlign:"center",backgroundColor:"#121212",border:"solid 5px #151515"},r=Object(y.a)(Object(y.a)({},c),{},{borderTopLeftRadius:i,borderTopRightRadius:i}),o=Object(y.a)(Object(y.a)({},c),{},{borderBottomLeftRadius:i,borderBottomRightRadius:i,marginTop:"1vmin"});return Object(p.jsxs)("div",{style:{fontFamily:"Helvetica"},children:[Object(p.jsx)("div",{style:r,children:Object(p.jsx)("div",{style:{position:"relative",top:"7vmin"},children:Object(p.jsx)(g,{num1:t,num2:n})})}),Object(p.jsx)("div",{style:o,children:Object(p.jsx)("div",{style:{position:"relative",top:"-34vmin"},children:Object(p.jsx)(g,{num1:t,num2:n})})})]})}var w=n(22),L=n.n(w),M=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n),e=t.call(this);var i=L()();return e.state={time:i},setInterval((function(){var t=L()();e.setState({time:t})}),1e3),e}return Object(h.a)(n,[{key:"componentWillMount",value:function(){document.body.style.backgroundColor="black"}},{key:"componentWillUnmount",value:function(){document.body.style.backgroundColor=""}},{key:"render",value:function(){var e=this.state.time,t=e.hours()>12?e.hours()%12:e.hours(),n=e.minutes();return Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"center",height:"100vh",width:"100vw",alignItems:"center"},children:[t<10?Object(p.jsx)(k,{num1:t}):Object(p.jsx)(k,{num1:Math.floor(t/10),num2:t%10}),Object(p.jsx)("div",{style:{width:"10vmin"}}),n<10?Object(p.jsx)(k,{num1:0,num2:n}):Object(p.jsx)(k,{num1:Math.floor(n/10),num2:n%10})]})}}]),n}(c.a.Component);var C=function(){var e;return e="black",Object(i.useEffect)((function(){return document.body.style.backgroundColor=e,function(){document.body.style.backgroundColor=""}})),null},E=function(){return console.log("attempting sparrow page"),Object(p.jsx)("div",{style:{height:"100vh"},children:Object(p.jsx)("iframe",{title:"sparrow",src:"https://www.youtube.com/embed/mnXQdMRi63E?autoplay=1&start=63&controls=0",frameBorder:"0",allowFullScreen:!0,style:{display:"block",height:"100%",width:"100%",border:"none"}})})},A={"/clock":function(){return Object(p.jsx)(M,{})},"/contact":function(){return Object(p.jsx)(x,{})},"/black":function(){return Object(p.jsx)(C,{})},"/sparrow":function(){return Object(p.jsx)(E,{})}},R={"/pc":"https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ"},S=function(e){var t=e.href;return Object(i.useEffect)((function(){window.location.href=t})),null},B=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(d.a)(Object(j.a)(n.prototype),"containerRender",this).call(this,Object(p.jsxs)("div",{className:"oldhome",children:[Object(p.jsx)("div",{children:"Hello, my name is Chris"}),Object(p.jsxs)("div",{children:["I live in ",this.getLink("https://www.google.com/maps/place/Seattle,+WA/data=!4m2!3m1!1s0x5490102c93e83355:0x102565466944d59a?sa=X&ved=2ahUKEwjhu_nA2ffcAhUD3Z8KHdR1BQYQ8gEwGHoECAsQCw","Seattle, WA")]}),Object(p.jsxs)("div",{children:["For"," ",this.getLink("https://www.linkedin.com/in/chrisbenti/","work"),", I work at ",this.getLink("https://stripe.com/","Stripe"),"."]}),Object(p.jsxs)("div",{children:["Feel free to"," ",this.getLink("/contact","send me a message",!0)]})]}))}}]),n}(f);var H=function(){return Object(p.jsx)(a.a,{basename:"/",children:Object(p.jsxs)(l.c,{children:[Object.entries(R).map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(p.jsx)(l.a,{path:n,children:Object(p.jsx)(S,{href:i})},n)})),Object.entries(A).map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(p.jsx)(l.a,{path:n,children:i},n)})),Object(p.jsx)(l.a,{path:"/",children:Object(p.jsx)(B,{})})]})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f917f297.chunk.js.map