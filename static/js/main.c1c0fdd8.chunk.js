(this["webpackJsonpchrisbenti.github.io"]=this["webpackJsonpchrisbenti.github.io"]||[]).push([[0],{43:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),r=t(25),s=t.n(r),o=(t(43),t(22)),a=t(36),l=t(4),j=t(26),d=t(27),b=t(38),h=t(37),m=t(12),x=t(2);function u(e){var n=e.num1,t=e.num2;return Object(x.jsxs)("div",{style:{display:"flex",textAlign:"center"},children:["number"===typeof n&&Object(x.jsx)("div",{style:{flexGrow:1},children:n}),"number"===typeof t&&Object(x.jsx)("div",{style:{flexGrow:1},children:t})]})}function O(e){var n=e.num1,t=e.num2,i="10vmin",c={height:"".concat(40,"vmin"),width:"".concat(80,"vmin"),color:"#BABABA",overflow:"hidden",fontSize:"70vmin",fontWeight:"bold",lineHeight:1,textAlign:"center",backgroundColor:"#121212",border:"solid 5px #151515"},r=Object(m.a)(Object(m.a)({},c),{},{borderTopLeftRadius:i,borderTopRightRadius:i}),s=Object(m.a)(Object(m.a)({},c),{},{borderBottomLeftRadius:i,borderBottomRightRadius:i,marginTop:"1vmin"});return Object(x.jsxs)("div",{style:{fontFamily:"Helvetica"},children:[Object(x.jsx)("div",{style:r,children:Object(x.jsx)("div",{style:{position:"relative",top:"7vmin"},children:Object(x.jsx)(u,{num1:n,num2:t})})}),Object(x.jsx)("div",{style:s,children:Object(x.jsx)("div",{style:{position:"relative",top:"-34vmin"},children:Object(x.jsx)(u,{num1:n,num2:t})})})]})}var f=t(17),p=t.n(f);function g(e){Object(i.useEffect)((function(){return document.body.style.backgroundColor=e,function(){document.body.style.backgroundColor=""}}))}var v,w,y,k,A,C,B,R,E,S,z,F,M,W,_,H=function(){return g("black"),Object(x.jsx)(Q,{})},Q=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(j.a)(this,t),e=n.call(this);var i=p()();return e.state={time:i},setInterval((function(){var n=p()();e.setState({time:n})}),1e3),e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state.time,n=e.hours()>12?e.hours()%12:e.hours(),t=e.minutes();return Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",height:"100vh",width:"100vw",alignItems:"center"},children:[n<10?Object(x.jsx)(O,{num1:n}):Object(x.jsx)(O,{num1:Math.floor(n/10),num2:n%10}),Object(x.jsx)("div",{style:{width:"10vmin"}}),t<10?Object(x.jsx)(O,{num1:0,num2:t}):Object(x.jsx)(O,{num1:Math.floor(t/10),num2:t%10})]})}}]),t}(c.a.Component),G=function(){return g("black"),null},I=function(){return console.log("attempting sparrow page"),Object(x.jsx)("div",{style:{height:"100vh"},children:Object(x.jsx)("iframe",{title:"sparrow",src:"https://www.youtube.com/embed/mnXQdMRi63E?autoplay=1&start=63&controls=0",frameBorder:"0",allowFullScreen:!0,style:{display:"block",height:"100%",width:"100%",border:"none"}})})},J=t(6),K=t(7),P="#002366",T="#FFFAFA",L=t(28),U=K.a.div(v||(v=Object(J.a)(['\n    font-family: "Raleway", sans-serif;\n']))),X=K.a.div(w||(w=Object(J.a)(["\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 3em;\n\n    border: solid 20px ",";\n    color: ",";\n    background-color: ",";\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"])),P,P,T),Z=function(e){return Object(x.jsx)(U,{children:Object(x.jsx)(L.a,{style:{width:"100vw"},children:Object(x.jsx)(X,Object(m.a)({},e))})})},D=t(32),Y=K.a.div(y||(y=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),q=K.a.a(k||(k=Object(J.a)(["\n    text-decoration: none;\n    color: ",";\n    padding: 2em;\n    &:hover {\n        border: dashed 1px ",";\n    }\n"])),P,P),N=K.a.div(A||(A=Object(J.a)(["\n    margin-top: 0.3em;\n    font-size: 1.5em;\n    font-weight: semi-bold;\n"]))),V=Object(K.a)(D.a)(C||(C=Object(J.a)(["\n    font-size: 5em;\n"]))),$=function(){return Object(x.jsx)(Z,{children:Object(x.jsx)(Y,{children:Object(x.jsxs)(q,{href:"https://www.chrisbenti.com/resume-content/chris-bentivenga-resume.pdf",children:[Object(x.jsx)(V,{}),Object(x.jsx)(N,{children:"(Click Me)"})]})})})},ee={"/clock":{component:Object(x.jsx)(H,{}),title:"Clock"},"/black":{component:Object(x.jsx)(G,{}),title:"Black Page"},"/sparrow":{component:Object(x.jsx)(I,{}),title:"JACK SPARROW"},"/resume":{component:Object(x.jsx)($,{}),title:"Resume | Chris Bentivenga"}},ne={"/pc":"https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ"},te=function(e){var n=e.href;return Object(i.useEffect)((function(){window.location.href=n})),null},ie=t(15),ce=t(33),re=K.a.div(B||(B=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n    }\n"]))),se=K.a.div(R||(R=Object(J.a)([""]))),oe=K.a.div(E||(E=Object(J.a)(["\n    font-weight: 700;\n    font-size: 2.5em;\n\n    @media (max-width: 470px) {\n        font-size: 2em;\n    }\n"]))),ae=K.a.div(S||(S=Object(J.a)(["\n    padding-top: 0.1em;\n    font-size: 1.2em;\n    font-weight: 300;\n    display: none;\n\n    @media (min-width: 768px) {\n        display: block;\n    }\n"]))),le=K.a.div(z||(z=Object(J.a)(["\n    border-top: solid 1px ",";\n    width: 100%;\n    height: 0;\n    margin: 1.2em 0;\n\n    @media (min-width: 768px) {\n        border-top: none;\n        border-left: solid 1px ",";\n        width: 0;\n        height: unset;\n        align-self: stretch;\n        margin: 0 2em;\n    }\n"])),P,P),je=K.a.div(F||(F=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    @media (min-width: 768px) {\n        align-items: flex-start;\n    }\n"]))),de=K.a.div(M||(M=Object(J.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    &:not(:first-child) {\n        margin-top: 0.3em;\n    }\n"]))),be=K.a.div(W||(W=Object(J.a)(["\n    margin-right: 0.5em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"]))),he=K.a.a(_||(_=Object(J.a)(["\n    text-decoration: none;\n    color: ",";\n"])),P),me=function(){return g(P),Object(x.jsx)(Z,{children:Object(x.jsxs)(re,{children:[Object(x.jsxs)(se,{children:[Object(x.jsx)(oe,{children:"Chris Bentivenga"}),Object(x.jsx)(ae,{children:"Software Engineer"})]}),Object(x.jsx)(le,{}),Object(x.jsxs)(je,{children:[Object(x.jsxs)(de,{children:[Object(x.jsx)(be,{children:Object(x.jsx)(ce.a,{})}),Object(x.jsx)(he,{target:"_blank",href:"https://www.google.com/maps/place/Seattle,+WA/data=!4m2!3m1!1s0x5490102c93e83355:0x102565466944d59a?sa=X&ved=2ahUKEwjhu_nA2ffcAhUD3Z8KHdR1BQYQ8gEwGHoECAsQCw",children:"Seattle, WA"})]}),Object(x.jsxs)(de,{children:[Object(x.jsx)(be,{children:Object(x.jsx)(ie.c,{})}),Object(x.jsx)(he,{target:"_blank",href:"mailto:chris@chrisbenti.com",children:"chris@chrisbenti.com"})]}),Object(x.jsxs)(de,{children:[Object(x.jsx)(be,{children:Object(x.jsx)(ie.a,{})}),Object(x.jsx)(he,{target:"_blank",href:"chrisbenti.com",children:"chrisbenti.com"})]}),Object(x.jsxs)(de,{children:[Object(x.jsx)(be,{children:Object(x.jsx)(ie.b,{})}),Object(x.jsx)(he,{target:"_blank",href:"https://www.linkedin.com/in/chrisbenti/",children:"chrisbenti"})]})]})]})})},xe=t(19);var ue=function(){return Object(x.jsx)(a.a,{basename:"/",children:Object(x.jsxs)(l.c,{children:[Object.entries(ne).map((function(e){var n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(x.jsx)(l.a,{path:t,children:Object(x.jsx)(te,{href:i})},t)})),Object.entries(ee).map((function(e){var n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(x.jsxs)(l.a,{path:t,children:[Object(x.jsx)(xe.a,{children:Object(x.jsx)("title",{children:i.title})}),i.component]},t)})),Object(x.jsxs)(l.a,{path:"/",children:[Object(x.jsx)(xe.a,{children:Object(x.jsx)("title",{children:"Chris Bentivenga"})}),Object(x.jsx)(me,{})]})]})})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(ue,{})}),document.getElementById("root"))}},[[55,1,2]]]);