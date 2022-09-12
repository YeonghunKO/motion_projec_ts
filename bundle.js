(()=>{var t={528:(t,n,e)=>{"use strict";e.d(n,{Z:()=>h});var i=e(537),a=e.n(i),o=e(645),r=e.n(o),s=e(667),l=e.n(s),c=new URL(e(411),e.b),d=r()(a()),A=l()(c);d.push([t.id,'*,*:before,*:after{box-sizing:border-box}html,body,div,span,object,iframe,figure,p,blockquote,pre,a,code,em,img,small,strike,strong,sub,sup,tt,b,u,i,ol,ul,fieldset,form,label,table,caption,tbody,tfoot,thead,tr,th,td,main,canvas,embed,footer,header,nav,section,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}footer,header,nav,section,main{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}input{-webkit-appearance:none;border-radius:0}.nav_box .nav_button_container .nav_button{font-family:Georgia,"Times New Roman",Times,serif;cursor:pointer;margin:.1rem;border-radius:7px;text-decoration:none;text-transform:uppercase;background-color:#f73;color:#fff;font-weight:500;font-size:1.5rem;padding:5px 10px;opacity:.6;transition:.3s}.nav_box .nav_button_container .nav_button:hover{opacity:1}.nav_box{width:100%;height:30%;display:flex;flex-direction:column;align-items:center}.nav_box .nav_banner{color:#ff4734;font-size:7rem}.nav_box .nav_button_container{margin-top:1rem}.modal_container{visibility:hidden;position:absolute;top:0;left:0;color:rgba(255,255,255,.915);background:#000;width:100vw;height:100vh;opacity:0;transition:all .5s;z-index:10}.modal_container.show{opacity:1;visibility:visible}.modal_container .modal_info_box{display:none;position:absolute;transform:translate3d(60%, 70%, 0);background:#323232;height:45%;width:45%}.modal_container .modal_info_box.show{display:block}.modal_container .modal_info_box .modal_info_button{position:absolute;cursor:pointer;right:0;outline:none;border:none;background-color:#ff4734;color:rgba(255,255,255,.915)}.modal_container .modal_info_box .modal_info_button.close{top:5px;right:5px}.modal_container .modal_info_box .modal_info_button.add{bottom:5px;right:5px}.modal_container .modal_info_box div{display:flex;padding:5px;flex-direction:column;width:100%}.modal_container .modal_info_box div input{margin-bottom:1rem}.modal_container .modal_info_box div label{margin-top:2rem;margin-bottom:.5rem}.data_container{margin-top:1rem;height:70%;width:90%;background-color:#676666;overflow-y:scroll;border-radius:1rem;margin:0 auto;transition:all .3s}.data_container ul{padding:2rem}.data_container li{background-color:rgba(255,255,255,.915);padding:1rem;width:70%;height:80%;margin:0 auto;cursor:pointer;margin-bottom:1rem;border-radius:1rem;transition:all .3s;box-shadow:15px 13px 20px -12px rgba(0,0,0,.75)}.data_container li header{display:flex;justify-content:space-between}.data_container li .fa-trash-alt{color:#ff4734}.data_container li img,.data_container li iframe{width:100%}.data_container li.over{transform:scale(1.1, 1.1)}body{background:url('+A+");background-size:cover;height:100vh;overflow-y:hidden}#app{height:100%}","",{version:3,sources:["webpack://./src/scss/_reset.scss","webpack://./src/scss/_extends.scss","webpack://./src/scss/_variables.scss","webpack://./src/scss/_Nav.scss","webpack://./src/scss/_Modal.scss","webpack://./src/scss/_Main.scss","webpack://./src/scss/main.scss"],names:[],mappings:"AAAA,mBAGE,qBAAA,CAGF,iOA4CE,QAAA,CACA,SAAA,CACA,QAAA,CACA,cAAA,CACA,YAAA,CACA,uBAAA,CACA,iCAAA,CACA,kCAAA,CACA,qBAAA,CAGF,+BAKE,aAAA,CAGF,KACE,aAAA,CAGF,MAEE,eAAA,CAGF,aAEE,WAAA,CAGF,oDAIE,UAAA,CACA,YAAA,CAGF,MACE,wBAAA,CACA,gBAAA,CAGF,MACE,uBAAA,CACA,eAAA,CChGF,2CACE,iDAAA,CACA,cAAA,CACA,YAAA,CACA,iBAAA,CACA,oBAAA,CACA,wBAAA,CACA,qBCTO,CDUP,UAAA,CACA,eAAA,CACA,gBAAA,CACA,gBAAA,CACA,UAAA,CACA,cAAA,CACA,iDACE,SAAA,CEdJ,SACE,UAAA,CACA,UAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,qBACE,aDTE,CCUF,cAAA,CAGF,+BACE,eAAA,CCbJ,iBACE,iBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,4BFHW,CEIX,eAAA,CACA,WAAA,CACA,YAAA,CACA,SAAA,CACA,kBAAA,CACA,UAAA,CAEA,sBACE,SAAA,CACA,kBAAA,CAGF,iCACE,YAAA,CACA,iBAAA,CACA,kCAAA,CACA,kBFtBS,CEuBT,UAAA,CACA,SAAA,CAEA,sCACE,aAAA,CAGF,oDACE,iBAAA,CACA,cAAA,CACA,OAAA,CACA,YAAA,CACA,WAAA,CACA,wBFrCA,CEsCA,4BFnCO,CEqCP,0DACE,OAAA,CACA,SAAA,CAGF,wDACE,UAAA,CACA,SAAA,CAIJ,qCACE,YAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CAEA,2CACE,kBAAA,CAGF,2CACE,eAAA,CACA,mBAAA,CC9DR,gBACE,eAAA,CACA,UAAA,CACA,SAAA,CACA,wBHHK,CGIL,iBAAA,CACA,kBAAA,CACA,aAAA,CACA,kBAAA,CAEA,mBACE,YAAA,CAGF,mBACE,uCHbS,CGcT,YAAA,CACA,SAAA,CACA,UAAA,CACA,aAAA,CACA,cAAA,CACA,kBAAA,CACA,kBAAA,CACA,kBAAA,CACA,+CAAA,CAEA,0BACE,YAAA,CACA,6BAAA,CAGF,iCACE,aHjCA,CGoCF,iDAEE,UAAA,CAGF,wBACE,yBAAA,CCrCN,KACE,kDAAA,CACA,qBAAA,CACA,YAAA,CACA,iBAAA,CAGF,KACE,WAAA",sourcesContent:["*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n","@import './variables';\n\n%button {\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  cursor: pointer;\n  margin: 0.1rem;\n  border-radius: 7px;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-color: $orange;\n  color: white;\n  font-weight: 500;\n  font-size: 1.5rem;\n  padding: 5px 10px;\n  opacity: 0.6;\n  transition: 0.3s;\n  &:hover {\n    opacity: 1;\n  }\n}\n","$orange: #f73;\n$red: #ff4734;\n$lightBlack: #323232;\n$gray: #676666;\n$lightWhite: rgba(255, 255, 255, 0.915);\n","@import './variables';\n@import './extends';\n\n.nav_box {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & .nav_banner {\n    color: $red;\n    font-size: 7rem;\n  }\n\n  & .nav_button_container {\n    margin-top: 1rem;\n    & .nav_button {\n      @extend %button;\n    }\n  }\n}\n","@import '_variables';\n\n.modal_container {\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: $lightWhite;\n  background: black;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  transition: all 0.5s;\n  z-index: 10;\n\n  &.show {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  & .modal_info_box {\n    display: none;\n    position: absolute;\n    transform: translate3d(60%, 70%, 0);\n    background: $lightBlack;\n    height: 45%;\n    width: 45%;\n\n    &.show {\n      display: block;\n    }\n\n    & .modal_info_button {\n      position: absolute;\n      cursor: pointer;\n      right: 0;\n      outline: none;\n      border: none;\n      background-color: $red;\n      color: $lightWhite;\n\n      &.close {\n        top: 5px;\n        right: 5px;\n      }\n\n      &.add {\n        bottom: 5px;\n        right: 5px;\n      }\n    }\n\n    & div {\n      display: flex;\n      padding: 5px;\n      flex-direction: column;\n      width: 100%;\n\n      & input {\n        margin-bottom: 1rem;\n      }\n\n      & label {\n        margin-top: 2rem;\n        margin-bottom: 0.5rem;\n      }\n    }\n  }\n}\n","@import './variables';\n\n.data_container {\n  margin-top: 1rem;\n  height: 70%;\n  width: 90%;\n  background-color: $gray;\n  overflow-y: scroll;\n  border-radius: 1rem;\n  margin: 0 auto;\n  transition: all 0.3s;\n\n  & ul {\n    padding: 2rem;\n  }\n\n  & li {\n    background-color: $lightWhite;\n    padding: 1rem;\n    width: 70%;\n    height: 80%;\n    margin: 0 auto;\n    cursor: pointer;\n    margin-bottom: 1rem;\n    border-radius: 1rem;\n    transition: all 0.3s;\n    box-shadow: 15px 13px 20px -12px rgba(0, 0, 0, 0.75);\n\n    header {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    .fa-trash-alt {\n      color: $red;\n    }\n\n    img,\n    iframe {\n      width: 100%;\n    }\n\n    &.over {\n      transform: scale(1.1, 1.1);\n    }\n  }\n}\n","@import '_variables';\n@import './_reset';\n@import './Nav';\n@import './Modal';\n@import './Main';\n\nbody {\n  background: url('../img/motion-background.png');\n  background-size: cover;\n  height: 100vh;\n  overflow-y: hidden;\n}\n\n#app {\n  height: 100%;\n}\n"],sourceRoot:""}]);const h=d},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",i=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),i&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),i&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,i,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&r[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},667:t=>{"use strict";t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},537:t=>{"use strict";t.exports=function(t){var n=t[1],e=t[3];if(!e)return n;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(a," */"),r=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}return[n].join("\n")}},913:t=>{var n=(()=>{var t=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(n,e,i)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,o=(t,o)=>{for(var r in o||(o={}))e.call(o,r)&&a(t,r,o[r]);if(n)for(var r of n(o))i.call(o,r)&&a(t,r,o[r]);return t},r={};((n,e)=>{for(var i in(n=>{t(n,"__esModule",{value:!0})})(n),e)t(n,i,{get:e[i],enumerable:!0})})(r,{DEFAULT_UUID_LENGTH:()=>s,default:()=>d});var s=6,l={dictionary:"alphanum",shuffle:!0,debug:!1,length:s},c=class extends Function{constructor(t={}){super(),this.dictIndex=0,this.dictRange=[],this.lowerBound=0,this.upperBound=0,this.dictLength=0,this._digit_first_ascii=48,this._digit_last_ascii=58,this._alpha_lower_first_ascii=97,this._alpha_lower_last_ascii=123,this._hex_last_ascii=103,this._alpha_upper_first_ascii=65,this._alpha_upper_last_ascii=91,this._number_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii]},this._alpha_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alpha_lower_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alpha_upper_dict_ranges={upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_lower_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alphanum_upper_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._hex_dict_ranges={decDigits:[this._digit_first_ascii,this._digit_last_ascii],alphaDigits:[this._alpha_lower_first_ascii,this._hex_last_ascii]},this.log=(...t)=>{const n=[...t];if(n[0]=`[short-unique-id] ${t[0]}`,!0===this.debug&&"undefined"!=typeof console&&null!==console)return console.log(...n)},this.setDictionary=(t,n)=>{let e;if(t&&Array.isArray(t)&&t.length>1)e=t;else{let n;e=[],this.dictIndex=n=0;const i=this[`_${t}_dict_ranges`];Object.keys(i).forEach((t=>{const a=t;for(this.dictRange=i[a],this.lowerBound=this.dictRange[0],this.upperBound=this.dictRange[1],this.dictIndex=n=this.lowerBound;this.lowerBound<=this.upperBound?n<this.upperBound:n>this.upperBound;this.dictIndex=this.lowerBound<=this.upperBound?n+=1:n-=1)e.push(String.fromCharCode(this.dictIndex))}))}if(n){const t=.5;e=e.sort((()=>Math.random()-t))}this.dict=e,this.dictLength=this.dict.length,this.counter=0},this.seq=()=>this.sequentialUUID(),this.sequentialUUID=()=>{let t,n,e="";t=this.counter;do{n=t%this.dictLength,t=Math.trunc(t/this.dictLength),e+=this.dict[n]}while(0!==t);return this.counter+=1,e},this.randomUUID=(t=this.uuidLength||s)=>{let n,e,i;if(null==t||t<1)throw new Error("Invalid UUID Length Provided");for(n="",i=0;i<t;i+=1)e=parseInt((Math.random()*this.dictLength).toFixed(0),10)%this.dictLength,n+=this.dict[e];return n},this.availableUUIDs=(t=this.uuidLength)=>parseFloat(Math.pow([...new Set(this.dict)].length,t).toFixed(0)),this.approxMaxBeforeCollision=(t=this.availableUUIDs(this.uuidLength))=>parseFloat(Math.sqrt(Math.PI/2*t).toFixed(20)),this.collisionProbability=(t=this.availableUUIDs(this.uuidLength),n=this.uuidLength)=>parseFloat((this.approxMaxBeforeCollision(t)/this.availableUUIDs(n)).toFixed(20)),this.uniqueness=(t=this.availableUUIDs(this.uuidLength))=>{const n=parseFloat((1-this.approxMaxBeforeCollision(t)/t).toFixed(20));return n>1?1:n<0?0:n},this.getVersion=()=>this.version,this.stamp=t=>{if("number"!=typeof t||t<10)throw new Error("Param finalLength must be number greater than 10");const n=Math.floor(+new Date/1e3).toString(16),e=t-9,i=Math.round(Math.random()*(e>15?15:e)),a=this.randomUUID(e);return`${a.substr(0,i)}${n}${a.substr(i)}${i.toString(16)}`},this.parseStamp=t=>{if(t.length<10)throw new Error("Stamp length invalid");const n=parseInt(t.substr(t.length-1,1),16);return new Date(1e3*parseInt(t.substr(n,8),16))};const n=o(o({},l),t);this.counter=0,this.debug=!1,this.dict=[],this.version="4.4.4";const{dictionary:e,shuffle:i,length:a}=n;return this.uuidLength=a,this.setDictionary(e,i),this.debug=n.debug,this.log(this.dict),this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`),new Proxy(this,{apply:(t,n,e)=>this.randomUUID(...e)})}},d=c;return d.default=c,r})();t.exports=n.default,"undefined"!=typeof window&&(n=n.default)},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function i(t,i){for(var o={},r=[],s=0;s<t.length;s++){var l=t[s],c=i.base?l[0]+i.base:l[0],d=o[c]||0,A="".concat(c," ").concat(d);o[c]=d+1;var h=e(A),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)n[h].references++,n[h].updater(p);else{var u=a(p,i);i.byIndex=s,n.splice(s,0,{identifier:A,updater:u,references:1})}r.push(A)}return r}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var o=i(t=t||[],a=a||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var s=e(o[r]);n[s].references--}for(var l=i(t,a),c=0;c<o.length;c++){var d=e(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=l}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var i=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,a&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},411:(t,n,e)=>{"use strict";t.exports=e.p+"2ee2390517a8cdf7741e.png"}},n={};function e(i){var a=n[i];if(void 0!==a)return a.exports;var o=n[i]={id:i,exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{"use strict";const t=new class{constructor(t=[]){this.dataArray=t}get data(){return this.dataArray}set data(t){this.dataArray=t}getLastestData(){return this.data[this.data.length-1]}dispatch(t){switch(t.type){case"ADD":const n=[...this.data,t.newData];this.data=n;break;case"REMOVE":const e=this.data.filter((n=>n.id!==t.id));this.data=e;break;default:throw new Error("invalid action type")}}};let n;const i="originalContent";function a(t){this.style.opacity=.4,n=this;const e={content:this.innerHTML,id:this.id};t.dataTransfer.setData(i,JSON.stringify(e))}function o(){this.classList.add("over")}function r(t){t.preventDefault()}function s(){this.classList.remove("over")}function l(t){if(n!==this){const{content:e,id:a}=JSON.parse(t.dataTransfer.getData(i));n.innerHTML=this.innerHTML,n.id=this.id,this.innerHTML=e,this.id=a}n.style.opacity="1",this.classList.remove("over")}function c(){this.style.opacity=1,console.log("end this",this)}const d=({type:t,classes:n,id:e,attribute:i})=>{const a=document.createElement(t);return n&&n.forEach((t=>a.classList.add(t))),e&&a.setAttribute("id",e),i&&a.setAttribute(i.id,i.val),a},A=t=>document.querySelector(t),h=({titleName:t,bodyName:n,type:e})=>{const i=d({type:"div",classes:["modal_info_box",e]});return i.innerHTML=`\n  <button type='button' class='modal_info_button close'>X</button>\n  <div>\n   <label>${t}</label>\n   <input type='text' placeholder='입력을 하시오' value='' class='title_input'/>\n   <label>${n}</label>\n   ${"TASK"===e?"<textarea class='body_input' placeholder='테스크를 입력할때마다 엔터를 누르시오'></textarea>":"<input type='text' placeholder='입력을 하시오' class='body_input'/>"}\n   </div>\n   <button type='button' class='modal_info_button add'>ADD</button>\n   `,i},p=t=>`\n  <header class='list_header'>\n  <h2>${t}</h2>\n  <i class="far fa-trash-alt"></i>\n  </header>\n  `,u=(t,n)=>{const e=d({type:"li",id:t,classes:[`${n}`],attribute:{id:"draggable",val:"true"}});var i;return(i=e).addEventListener("dragstart",a),i.addEventListener("dragenter",o),i.addEventListener("dragover",r),i.addEventListener("dragleave",s),i.addEventListener("drop",l),i.addEventListener("dragend",c),e},b=A("#app");class _{constructor(){this.$internalMain=A(".data_container"),this.$internalUl=d({type:"ul",classes:["data_container_ul"]}),this.render(),this.addEventToLists()}get $main(){return this.$internalMain}get $ul(){return this.$internalUl}render(){this.$main.appendChild(this.$ul)}addData(){const n=t.getLastestData();let e;switch(n.type){case"IMAGE":e=(t=>{const{id:n,type:e,title:i,body:a}=t,o=u(n,e);return o.innerHTML=`\n    ${p(i)}\n    <img src='${a}' alt='${i}'/>\n   `,o})(n);break;case"VIDEO":e=(t=>{const{id:n,type:e,title:i,body:a}=t,o=u(n,e);return o.innerHTML=`\n    ${p(i)}\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/${a.split("=")[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n   `,o})(n);break;case"NOTE":e=(t=>{const{id:n,type:e,title:i,body:a}=t,o=u(n,e);return o.innerHTML=`\n     ${p(i)}\n     <h3>${a}</h3>\n   `,o})(n);break;case"TASK":e=(t=>{const{id:n,type:e,title:i,body:a}=t,o=u(n,e);return o.innerHTML=`\n  \n  ${p(i)}\n  ${a.map((t=>`<li>${t}</li>`)).join("")}\n  `,o})(n)}this.$ul.appendChild(e)}addEventToLists(){A(".data_container_ul").addEventListener("click",(function(n){const{classList:e}=n.target,i=n.target.closest("li");i&&e.contains("fa-trash-alt")&&(i.remove(),t.dispatch({type:"REMOVE",id:i.id}),console.log(t.data))}))}}class f{constructor(t){this.name=t,this.render()}render(){const t=d({type:"button",classes:["nav_button"]});return t.setAttribute("type","button"),t.innerText=this.name,t}}class m{constructor({banner:t,$modal:n}){this.$NavBox=A(".nav_box"),this.banner=t,this.render(),this.$modal=n}render(){const t=d({type:"div",classes:["nav_banner"]});t.innerText=this.banner;const n=d({type:"div",classes:["nav_button_container"]}),e=["IMAGE","VIDEO","NOTE","TASK"].map((t=>new f(t).render()));n.append(...e),this.addEventToButtons(n),this.$NavBox.append(t,n)}addEventToButtons(t){t.addEventListener("click",(({target:t})=>{if(t instanceof Element&&t.classList.contains("nav_button")){const{textContent:n}=t;this.$modal.type=n,this.$modal.show()}}))}}var C=e(913);const g=new(e.n(C)())({dictionary:"hex"});g.setDictionary(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x"]);class v{constructor(){}get type(){return this.internalType}set type(t){this.internalType=t}render(){return[h({titleName:"title",bodyName:"url",type:"IMAGE"}),h({titleName:"title",bodyName:"url",type:"VIDEO"}),h({titleName:"title",bodyName:"body",type:"NOTE"}),h({titleName:"title",bodyName:"body",type:"TASK"})]}show(t){var n;null===(n=A(`.modal_info_box.${t}`))||void 0===n||n.classList.add("show")}close(t){A(".modal_container").classList.remove("show"),A(`.modal_info_box.${t}`).classList.remove("show")}sendData(){const n=A(`.modal_info_box.${this.type} .title_input`),e=A(`.modal_info_box.${this.type} .body_input`),i=n.value,a=e.value;if(i.length&&a.length){const o={id:g.randomUUID(11),type:this.type,title:i,body:"TASK"===this.type?a.split("\n"):a};t.dispatch({type:"ADD",newData:o}),console.log(t.data),n.value="",e.value="",this.close(this.type)}else alert("title과 body에 뭔가라도 적으라고!!!!!")}}class y{constructor({$main:t}){this.$container=d({type:"div",classes:["modal_container"]}),this.$infoBox=new v,this.$main=t,this.render()}get type(){return this.interalType}set type(t){this.interalType=t}render(){var t;this.$container.append(...null===(t=this.$infoBox)||void 0===t?void 0:t.render()),this.addEventToModal(),null==b||b.appendChild(this.$container)}addEventToModal(){this.$container.addEventListener("click",(({target:t})=>{if(t instanceof Element){const n=t.closest(".close"),e=t.closest(".add");n&&this.close(),e&&(this.$infoBox.type=this.type,this.$infoBox.sendData(),this.$main.addData())}}))}show(){this.type&&(this.$container.classList.add("show"),this.$infoBox.show(this.type))}close(){this.$container.classList.remove("show"),this.$infoBox.close(this.type)}}var w=e(379),x=e.n(w),E=e(795),$=e.n(E),B=e(569),k=e.n(B),L=e(565),D=e.n(L),T=e(216),M=e.n(T),U=e(589),I=e.n(U),S=e(528),F={};F.styleTagTransform=I(),F.setAttributes=D(),F.insert=k().bind(null,"head"),F.domAPI=$(),F.insertStyleElement=M(),x()(S.Z,F),S.Z&&S.Z.locals&&S.Z.locals,new class{constructor(){this.$main=new _,this.$modal=new y({$main:this.$main}),this.$nav=new m({banner:"Motion",$modal:this.$modal})}}})()})();
//# sourceMappingURL=bundle.js.map