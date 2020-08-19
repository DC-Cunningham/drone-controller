(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/Drone.91afdd83.png"},36:function(n,e,t){n.exports=t(62)},62:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(30),c=t.n(o),l=t(13),i=t(65),u=t(66),m=t(67),s=function(n,e){Object(a.useEffect)(function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}},[n,e])},h=t(1),d=t(8),f=t(9),p=t(11),b=t(10),g=t(12),x=t(2),v=t(15),E=t(35),y=t(14),j=t(5),O=t(7),k=t.n(O),w={getCommands:function(){return k.a.get("/api/command")},getCommand:function(n){return console.log(n),k.a.get("/api/command/"+n)},deleteCommand:function(n){return k.a.delete("/api/command/"+n)},saveCommand:function(n){return console.log("saveCommand Hit"),k.a.post("/api/command",n)},updateCommand:function(n){return k.a.put("/api/command",n)},getFlightPaths:function(){return k.a.get("/api/flightpath")},getFlightPath:function(n){return k.a.get("/api/flightpath/"+n)},deleteFlightpath:function(n){return k.a.delete("/api/flightpath/"+n)},saveFlightpath:function(n){return k.a.post("/api/flightpath",n)},updateFlightPath:function(n){return k.a.put("/api/flightpath",n)}};function P(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return C(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var a=0,r=function(){};return{s:r,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){l=!0,o=n},f:function(){try{c||null==t.return||t.return()}finally{if(l)throw o}}}}function C(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function M(){var n=Object(x.a)(["\n  width: 100%;\n  padding: grey;\n  border: 0px;\n  // font-size: 12px;\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px red;\n  }\n"]);return M=function(){return n},n}var F=h.c.input(M()),S=function(n){function e(n){var t;return Object(d.a)(this,e),(t=Object(p.a)(this,Object(b.a)(e).call(this,n))).state={value:""},t.handleChange=t.handleChange.bind(Object(v.a)(Object(v.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(v.a)(Object(v.a)(t))),t}return Object(g.a)(e,n),Object(f.a)(e,[{key:"handleChange",value:function(n){this.setState({value:n.target.value})}},{key:"handleSubmit",value:function(n){n.preventDefault();var e=prompt("Please name your command sequence:","Command Sequence name"),t={commands:this.state.value,name:e};w.saveCommand(t).then(function(n){return console.log(n.data)}).catch(function(n){return console.log(n)}),this.setState({value:""}),w.saveFlightpath(function(n,e){var t,a={xMin:0,yMin:0,xMax:0,yMax:0,dataPoints:{},photoCount:0,uniquePhotoCount:0,sequenceCount:0,name:e},r=0,o=0,c=0,l=0,i=0,u=P(n);try{for(u.s();!(t=u.n()).done;)switch(t.value){case"<":c++,l--,a=Object(j.a)({},a,{sequenceCount:c,xMin:a.xMin>l?l:a.xMin,dataPoints:Object(j.a)({},a.dataPoints,Object(y.a)({},"".concat(l,",").concat(i),!Array.isArray(a.dataPoints["".concat(l,",").concat(i)])||a.dataPoints["".concat(l,",").concat(i)]))});break;case">":c++,l++,a=Object(j.a)({},a,{sequenceCount:c,xMax:a.xMax<l?l:a.xMax,dataPoints:Object(j.a)({},a.dataPoints,Object(y.a)({},"".concat(l,",").concat(i),!Array.isArray(a.dataPoints["".concat(l,",").concat(i)])||a.dataPoints["".concat(l,",").concat(i)]))});break;case"v":c++,i--,a=Object(j.a)({},a,{sequenceCount:c,yMin:a.yMin>i?i:a.yMin,dataPoints:Object(j.a)({},a.dataPoints,Object(y.a)({},"".concat(l,",").concat(i),!Array.isArray(a.dataPoints["".concat(l,",").concat(i)])||a.dataPoints["".concat(l,",").concat(i)]))});break;case"^":c++,i++,a=Object(j.a)({},a,{sequenceCount:c,yMax:a.yMax<i?i:a.yMax,dataPoints:Object(j.a)({},a.dataPoints,Object(y.a)({},"".concat(l,",").concat(i),!Array.isArray(a.dataPoints["".concat(l,",").concat(i)])||a.dataPoints["".concat(l,",").concat(i)]))});break;case"x":c++,r++,o++,a=Object(j.a)({},a,{photoCount:o,sequenceCount:c,dataPoints:Object(j.a)({},a.dataPoints,Object(y.a)({},"".concat(l,",").concat(i),Array.isArray(a.dataPoints["".concat(l,",").concat(i)])?[].concat(Object(E.a)(a.dataPoints["".concat(l,",").concat(i)]),[r]):[r]))})}}catch(s){u.e(s)}finally{u.f()}if(Object.keys(a.dataPoints).length>0){var m=Object(j.a)({},a.dataPoints);Object.keys(m).forEach(function(n){return!0===m[n]&&delete m[n]}),a=Object(j.a)({},a,{uniquePhotoCount:Object.keys(m).length})}return a}(t.commands,e)).then(function(n){return console.log(n.data)}).catch(function(n){return console.log(n)})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Please enter a new command sequence:",r.a.createElement(F,{type:"text",value:this.state.value,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),e}(r.a.Component);function q(){var n=Object(x.a)(["\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]);return q=function(){return n},n}var A=h.c.div(q()),D=function(n){function e(){return Object(d.a)(this,e),Object(p.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(f.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement("h4",null,"Please enter the command sequence that tells the drone which direction to move and when to take a photo."),r.a.createElement("h4",null,"Moves are always exactly 1 km to the north (^), south (v), east (>) or west (<) or take a photograph (x)."),r.a.createElement(S,null),r.a.createElement("h5",null,"Please note that the command sequence cannot include spaces or any characters other than ^, v, >, < or x")))}}]),e}(r.a.Component);function L(){var n=Object(x.a)(["\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black; \n  & ",":hover + "," {\n    visibility: visible;\n    }\n  }\n"]);return L=function(){return n},n}function z(){var n=Object(x.a)(["\n  visibility: hidden;\n  width: 300px;\n  background-color: white;\n  color: #000000;\n  text-align: center;\n  padding: 15px;\n  border-radius: 6px;\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 30px;\n  z-index: 1;\n"]);return z=function(){return n},n}function I(){var n=Object(x.a)(["\n  height: 25px;\n  width: 25px;\n  margin: 2px;\n  text-align: center;\n  background-colour: ",";\n  transition: transform 0.2s; /* Animation */\n  &:hover {\n    transform: scale(1.5);\n  }\n"]);return I=function(){return n},n}var U=h.c.div(I(),{}),H=h.c.div(z()),N=h.c.div(L(),U,H);function T(n){var e=n.flightPoint,t=e.x,a=e.y,o=e.pointData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,!0===o?r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{style:{backgroundColor:"#1a963b"}}),r.a.createElement(H,null,r.a.createElement("strong",null,"Position:"),r.a.createElement("p",null,"[x: ",t,", y: ",a," ]"),r.a.createElement("strong",null,"Flown airspace"),r.a.createElement("strong",null,"Photo Count:"),r.a.createElement("p",null,o.length))):!1===o?r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{style:{backgroundColor:"#70dcfa"}}),r.a.createElement(H,null,r.a.createElement("strong",null,"Position:"),r.a.createElement("p",null,"[x: ",t,", y: ",a," ]"),r.a.createElement("strong",null,"Unflown airspace"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{style:{backgroundColor:"#cc0404"}},o.length>0?o.length:""),r.a.createElement(H,null,r.a.createElement("strong",null,"Position:"),r.a.createElement("p",null,"[x: ",t,", y: ",a," ]"),r.a.createElement("p",null,r.a.createElement("strong",null,"Flown airspace")),r.a.createElement("p",null,r.a.createElement("strong",null,"Photo Count:")),r.a.createElement("p",null,o.length),r.a.createElement("ol",null,"Photos taken at steps:",o.map(function(n,e){return r.a.createElement("li",{key:e},n," ")}))))))}function X(){var n=Object(x.a)(["\n  display: flex;\n  vertical-align: middle;\n  line-height: normal;\n"]);return X=function(){return n},n}var B=h.c.div(X());function _(n){var e=n.flightPoint.map(function(n,e){return r.a.createElement(T,{key:e,flightPoint:n})});return r.a.createElement(B,null,e)}function J(){var n=Object(x.a)(["\n  padding-bottom: 50px;\n"]);return J=function(){return n},n}var R=h.c.div(J());function Z(n){var e=n.flightPoint.map(function(n,e){return r.a.createElement(_,{key:e,flightPoint:n,index:e})});return r.a.createElement(R,null,e)}function $(){var n=Object(x.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n"]);return $=function(){return n},n}function G(){var n=Object(x.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return G=function(){return n},n}var K=Object(h.d)(G()),Q=h.c.div($(),K);function V(){var n=Object(x.a)(["\n  width: 100%;\n  height: 1200px;\n  padding: 50px;\n  display: flex;\n  // overflow: scroll;\n  flex-direction: column;\n  align-items: center;\n  background-color: ",";\n"]);return V=function(){return n},n}var W=h.c.div(V(),function(n){return n.theme.primaryDark}),Y=function(n){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),o=t[0],c=t[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),m=u[0],s=u[1];return Object(a.useEffect)(function(){s(function(n){for(var e=n.xMin,t=n.xMax,a=n.yMin,r=n.yMax,o=n.dataPoints,c=[],l=a;l<r+1;l++){for(var i=[],u=e;u<t+1;u++)["".concat(u,",").concat(l)]in o?i.push({x:u,y:l,pointData:o["".concat(u,",").concat(l)]}):i.push({x:u,y:l,pointData:!1});c.unshift(i)}return c}(n.currentFlight)),c(!1)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null,o?r.a.createElement(Q,null):r.a.createElement(Z,{flightPoint:m})))};function nn(){var n=Object(x.a)(["\n  color: ",";\n  margin: 5px 15px 5px 10px;\n"]);return nn=function(){return n},n}function en(){var n=Object(x.a)(["\n  height: 25px;\n  width: 25px;\n  margin: 2px;\n  background: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(x.a)(["\n  width: 700px;\n  height: 100px;\n  margin-top: 230px;\n  float: left;\n  display: flex;\n  background-color: ",";\n  border: 1px solid;\n  border-radius: 15px;\n  padding: 25px 12px 18px;\n"]);return tn=function(){return n},n}var an=h.c.div(tn(),function(n){return n.theme.primaryLight}),rn=h.c.div(en(),function(n){return n.colour}),on=h.c.p(nn(),function(n){return n.theme.primaryDark});var cn=function(){return r.a.createElement(an,null,r.a.createElement(rn,{colour:"#70dcfa"}),r.a.createElement(on,null," - Unflown Airspace "),r.a.createElement(rn,{colour:"#1a963b"}),r.a.createElement(on,null," - Flown Airspace "),r.a.createElement(rn,{colour:"#cc0404"}),r.a.createElement(on,null," - Photo Location "))};function ln(){var n=Object(x.a)(["\nmax-height: 50px;\n  margin: 10px;\n  padding: 8px 14px;\n  background: #c24a66;\n  color: ","};\n  cursor: pointer;\n  border: 1px solid ","};\n  border-radius: 10%;\n  outline: 0;\n  font-weight: 300;\n  float: right;\n  :hover {\n    opacity: 0.8;\n  }\n  :active {\n    background: white;\n  }\n"]);return ln=function(){return n},n}function un(){var n=Object(x.a)(["\n  color:","};\n"]);return un=function(){return n},n}function mn(){var n=Object(x.a)(["\n  text-align: center;\n  color:","};\n  font-weight: 300;\n  height: 100px;\n  @media (max-width: 500px) {\n    font-size: 1rem;\n  }\n"]);return mn=function(){return n},n}function sn(){var n=Object(x.a)(["\n  max-width: 350px;\n  width: 100%;\n  height: 320px;\n  margin: 10px;\n  background-color: ",";\n  border: 1px solid;\n  border-radius: 10% 25%;\n  padding: 25px 12px 18px;\n  float: left;\n  display: block;\n"]);return sn=function(){return n},n}function hn(){var n=Object(x.a)(["\n  flex-basis: 100%;\n  height: 20px;\n"]);return hn=function(){return n},n}function dn(){var n=Object(x.a)(["\n  width: 1200px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return dn=function(){return n},n}var fn=h.c.div(dn()),pn=h.c.div(hn()),bn=h.c.div(sn(),function(n){return n.theme.primaryLight}),gn=h.c.h2(mn(),function(n){return n.theme.primaryDark}),xn=h.c.p(un(),function(n){return n.theme.primaryDark}),vn=h.c.button(ln(),function(n){return n.theme.primaryDark},function(n){return n.theme.primaryDark});var En=function(){var n=this,e=Object(a.useState)([]),t=Object(l.a)(e,2),o=t[0],c=t[1],i=Object(a.useState)({PhotoCount:0,uniquePhotoCount:0,sequenceCount:0,xMin:0,yMin:0,xMax:0,yMax:0,dataPoints:{},name:""}),u=Object(l.a)(i,2),m=u[0],s=u[1];Object(a.useEffect)(function(){h()},[]);var h=function(){w.getFlightPaths().then(function(n){return c(n.data)}).catch(function(n){return console.log(n)})},d=function(n){w.getFlightPath(n).then(function(n){return s(n.data)}).catch(function(n){return console.log(n)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(fn,null,m.sequenceCount>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(vn,{onClick:function(n){return s({PhotoCount:0,uniquePhotoCount:0,sequenceCount:0,xMin:0,yMin:0,xMax:0,yMax:0,dataPoints:{},name:""})}},"Back"),r.a.createElement(pn,null),r.a.createElement(bn,null,r.a.createElement(gn,null,m.name),r.a.createElement(xn,null,r.a.createElement("strong",null,"Sequence Length: "),m.sequenceCount," commands"),r.a.createElement(xn,null,r.a.createElement("strong",null,"Number of Photos Taken: "),m.photoCount),r.a.createElement(xn,null,r.a.createElement("strong",null,"Number of unique Photo Locations: "),m.uniquePhotoCount)),r.a.createElement(cn,null),r.a.createElement(pn,null),r.a.createElement(Y,{currentFlight:m})):o.length?o.map(function(e){return r.a.createElement(bn,{key:e._id},r.a.createElement(gn,null,e.name),r.a.createElement(xn,null,r.a.createElement("strong",null,"Sequence Length: "),e.sequenceCount," commands"),r.a.createElement(xn,null,r.a.createElement("strong",null,"Number of Photos Taken: "),e.photoCount),r.a.createElement(xn,null,r.a.createElement("strong",null,"Number of unique Photo Locations: "),e.uniquePhotoCount),r.a.createElement(vn,{value:e._id,onClick:d.bind(n,e._id)},"Select"))}):r.a.createElement("div",null,"There are no stored Flight Paths")))},yn=t(18),jn=t.n(yn),On=function(n){function e(){return Object(d.a)(this,e),Object(p.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(f.a)(e,[{key:"render",value:function(){return r.a.createElement("img",{src:jn.a,alt:"Drone"})}}]),e}(r.a.Component);function kn(){var n=Object(x.a)(["\n  width: 400px;\n  display: block;\n  margin: 0 auto;\n  align: center;\n"]);return kn=function(){return n},n}function wn(){var n=Object(x.a)(["\n  width: 1200px;\n  align-items: center;\n"]);return wn=function(){return n},n}var Pn=h.c.div(wn()),Cn=h.c.img(kn()),Mn=function(n){function e(){return Object(d.a)(this,e),Object(p.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(f.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pn,null,r.a.createElement(Cn,{src:jn.a,alt:"Drone"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Let's say you have an aerial drone which it uses to take photographs of billboards."),r.a.createElement("br",null),r.a.createElement("h3",null,"Instructions are sent to the drone in a simple language that tells the drone which direction to move and when to take a photo. Moves are always exactly 1 km to the north (^), south (v), east (>) or west (<) or take a photograph (x)."),r.a.createElement("br",null),r.a.createElement("h3",null,"Unfortunately, the instruction processor is not perfect yet so the drone may photograph the same billboard multiple times."),r.a.createElement("br",null),r.a.createElement("h3",null,"How many billboards are photographed at least once?"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"For example:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,"x^xv takes photos of 2 billboards and ends up back at the starting location")),r.a.createElement("li",null,r.a.createElement("h3",null,"x^^x>>xvvx<<x takes photos of 4 billboards, including 2 photos of the same billboard at the starting location"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"How about a map of the flight path to see where photos have been duplicated?")))}}]),e}(r.a.Component),Fn={primaryDark:"#0D0C1D",primaryLight:"#EFFFFA",primaryHover:"#343078",mobile:"576px"};function Sn(){var n=Object(x.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  body {\n    align-items: center;\n    background: ",";\n    color: ",';\n    display: flex;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    height: 100vh;\n    justify-content: center;\n    text-rendering: optimizeLegibility;\n  }\n  ']);return Sn=function(){return n},n}var qn=Object(h.b)(Sn(),function(n){return n.theme.primaryDark},function(n){return n.theme.primaryLight});function An(){var n=Object(x.a)(["\n  position: absolute;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return An=function(){return n},n}var Dn=h.c.button(An(),function(n){var e=n.theme;return n.open?e.primaryDark:e.primaryLight},function(n){return n.open?"rotate(45deg)":"rotate(0)"},function(n){return n.open?"0":"1"},function(n){return n.open?"translateX(20px)":"translateX(0)"},function(n){return n.open?"rotate(-45deg)":"rotate(0)"}),Ln=function(n){var e=n.open,t=n.setOpen;return r.a.createElement(Dn,{open:e,onClick:function(){return t(!e)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};function zn(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: ",";\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: ",") {\n    width: 100%;\n  }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return zn=function(){return n},n}var In=h.c.nav(zn(),function(n){return n.theme.primaryLight},function(n){return n.open?"translateX(0)":"translateX(-100%)"},function(n){return n.theme.mobile},function(n){return n.theme.primaryDark},function(n){return n.theme.mobile},function(n){return n.theme.primaryHover}),Un=function(n){var e=n.open;return r.a.createElement(In,{open:e},r.a.createElement("a",{href:"/about"},"About"),r.a.createElement("a",{href:"/flightpaths"},"Flight Paths"),r.a.createElement("a",{href:"/newcommand"},"New Command"))};var Hn=function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],o=e[1],c=Object(a.useRef)();return s(c,function(){return o(!1)}),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{theme:Fn},r.a.createElement(qn,null),r.a.createElement("div",{ref:c},r.a.createElement(Ln,{open:t,setOpen:o}),r.a.createElement(Un,{open:t,setOpen:o})),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{path:"/newcommand"},r.a.createElement(D,null)),r.a.createElement(m.a,{path:"/flightpaths"},r.a.createElement(En,null)),r.a.createElement(m.a,{path:"/about"},r.a.createElement(Mn,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(On,null))))))};c.a.render(r.a.createElement(Hn,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d16296a9.chunk.js.map