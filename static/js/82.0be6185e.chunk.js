(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[82],{1280:function(e,r,n){"use strict";n.r(r);var t=n(2),a=n.n(t);function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,a=!1,c=void 0;try{for(var u,s=e[Symbol.iterator]();!(t=(u=s.next()).done)&&(n.push(u.value),!r||n.length!==r);t=!0);}catch(o){a=!0,c=o}finally{try{t||null==s.return||s.return()}finally{if(a)throw c}}return n}(e,r)||s(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){if(e){if("string"===typeof e)return o(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,r):void 0}}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r,n,t,a,c,u){try{var s=e[c](u),o=s.value}catch(i){return void n(i)}s.done?r(o):Promise.resolve(o).then(t,a)}function f(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var c=e.apply(r,n);function u(e){i(c,t,a,u,s,"next",e)}function s(e){i(c,t,a,u,s,"throw",e)}u(void 0)}))}}var l="m/44'/60'";function p(e){return h.apply(this,arguments)}function h(){return(h=f(a.a.mark((function e(r){var t,s,o,i,p,h,d,v,m,b,w,x,y,g,k,z,A,P,S,M,B,V,I,T,E,L,j,N,H,C,O,U,W,_,J,K,q,$,D,F,G,Q,R,X,Y,Z,ee,re,ne,te;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te=function(){return(te=f(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==M.size){e.next=3;break}return e.next=3,W();case 3:return n=u(M.values())[0],e.abrupt("return",L.signPersonalMessage(n,w.stripHexPrefix(r.data)).then((function(e){var r=(e.v-27).toString(16);return r.length<2&&(r="0"+r),"0x".concat(e.r).concat(e.s).concat(r)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},ne=function(e){return te.apply(this,arguments)},re=function(){return(re=f(a.a.mark((function e(r){var n,t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u(M.values())[0],e.prev=1,(t=new b.Transaction(r,{chain:A(y)})).raw[6]=x.Buffer.from([y]),t.raw[7]=x.Buffer.from([]),t.raw[8]=x.Buffer.from([]),e.next=8,L.signTransaction(n,t.serialize().toString("hex"));case 8:return c=e.sent,t.v=x.Buffer.from(c.v,"hex"),t.r=x.Buffer.from(c.r,"hex"),t.s=x.Buffer.from(c.s,"hex"),e.abrupt("return","0x".concat(t.serialize().toString("hex")));case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)},ee=function(e){return re.apply(this,arguments)},Z=function(e){return new Promise((function(r,n){T.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&n(e);var a=t&&t.result;r(null!=a?new z(a).toString(10):null)}))}))},Y=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var r=f(a.a.mark((function r(n){var t;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Z(e);case 2:t=r.sent,n({address:e,balance:t});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})))},X=function(){return(X=f(a.a.mark((function e(r){var n,t,c,u,s,o,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B){e.next=2;break}return e.abrupt("return",[]);case 2:if(!(M.size>0)||r){e.next=4;break}return e.abrupt("return",_());case 4:if(L){e.next=7;break}return e.next=7,O();case 7:if(""===S&&(S=l),S!==l){e.next=24;break}for(n=M.size,t=[],c=n;c<5+n;c++)t.push("".concat(l,"/").concat(c,"'/0/0"));u=0,s=t;case 13:if(!(u<s.length)){e.next=22;break}return o=s[u],e.next=17,L.getAddress(o);case 17:f=e.sent,M.set(f.address,o);case 19:u++,e.next=13;break;case 22:e.next=36;break;case 24:if(I){e.next=34;break}return e.prev=25,e.next=28,$();case 28:I=e.sent,e.next=34;break;case 31:throw e.prev=31,e.t0=e.catch(25),e.t0;case 34:i(I,M.size).forEach((function(e){var r=e.dPath,n=e.address;M.set(n,r)}));case 36:return e.abrupt("return",_());case 37:case"end":return e.stop()}}),e,null,[[25,31]])})))).apply(this,arguments)},R=function(e){return X.apply(this,arguments)},Q=function(){return(Q=f(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(!0);case 2:return r=e.sent,e.abrupt("return",r&&Y(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},G=function(){return Q.apply(this,arguments)},F=function(){return B?_()[0]:void 0},D=function(){return(D=f(a.a.mark((function e(){var r,n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:if(L){e.next=5;break}return e.next=5,O();case 5:return e.prev=5,e.next=8,L.getAddress(S,!1,!0);case 8:return r=e.sent,n=r.publicKey,t=r.chainCode,I={publicKey:n,chainCode:t,path:S},e.abrupt("return",I);case 14:throw e.prev=14,e.t0=e.catch(5),new Error("There was a problem accessing your Ledger accounts.");case 17:case"end":return e.stop()}}),e,null,[[5,14]])})))).apply(this,arguments)},$=function(){return D.apply(this,arguments)},q=function(){return(q=f(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L){e.next=3;break}return e.next=3,O();case 3:return e.prev=3,e.next=6,L.getAddress(r);case 6:return n=e.sent,e.abrupt("return",n.address);case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)},K=function(e){return q.apply(this,arguments)},J=function(e){var r=u(M.entries()),n=r.findIndex((function(r){return c(r,1)[0]===e}));r.unshift(r.splice(n,1)[0]),M=new Map(r)},_=function(){return Array.from(M.keys())},W=function(){return B=!0,R()},U=function(){return(U=f(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k){e.next=7;break}return e.next=4,k.create();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,d.create();case 9:e.t0=e.sent;case 10:E=e.t0,L=new m(E),r={next:function(e){"remove"===e.type&&j()},error:function(){},complete:function(){}},k?k.listen(r):d.listen(r),e.next=19;break;case 16:throw e.prev=16,e.t1=e.catch(0),new Error("Error connecting to Ledger wallet");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)},O=function(){return U.apply(this,arguments)},C=function(){return V},H=function(){return(H=f(a.a.mark((function e(r,n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(r)){e.next=2;break}return e.abrupt("return",!1);case 2:if(r!==S&&(M=new Map),!n){e.next=10;break}return e.next=6,K(r);case 6:return t=e.sent,M.set(t,r),V=!0,e.abrupt("return",!0);case 10:return V=!1,S=r,e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)},N=function(e,r){return H.apply(this,arguments)},j=function(){E&&E.close(),T.stop(),P({disconnected:!0,walletName:"Ledger"})},e.next=26,Promise.all([n.e(0),n.e(2),n.e(3),n.e(4)]).then(n.bind(null,1389));case 26:return t=e.sent,s=t.default,e.next=30,Promise.all([n.e(9),n.e(12),n.e(14)]).then(n.bind(null,1940));case 30:return o=e.sent,i=o.generateAddresses,p=o.isValidPath,e.next=35,n.e(43).then(n.bind(null,2954));case 35:return h=e.sent,d=h.default,e.next=39,n.e(51).then(n.bind(null,2960));case 39:return v=e.sent,m=v.default,e.next=43,Promise.all([n.e(8),n.e(10)]).then(n.t.bind(null,1558,7));case 43:return b=e.sent,e.next=46,Promise.all([n.e(9),n.e(16)]).then(n.t.bind(null,1700,7));case 46:return w=e.sent,e.next=49,Promise.resolve().then(n.t.bind(null,19,7));case 49:return x=e.sent,y=r.networkId,g=r.rpcUrl,k=r.LedgerTransport,z=r.BigNumber,A=r.networkName,P=r.resetWalletState,S="",M=new Map,B=!1,V=!1,(T=s({getAccounts:function(e){R().then((function(r){return e(null,r)})).catch((function(r){return e(r,null)}))},signTransaction:function(e,r){ee(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processMessage:function(e,r){ne(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processPersonalMessage:function(e,r){ne(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signMessage:function(e,r){ne(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signPersonalMessage:function(e,r){ne(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},rpcUrl:g})).setPath=N,T.dPath=S,T.enable=W,T.setPrimaryAccount=J,T.getPrimaryAddress=F,T.getAccounts=R,T.getMoreAccounts=G,T.getBalance=Z,T.getBalances=Y,T.send=T.sendAsync,T.disconnect=j,T.isCustomPath=C,e.abrupt("return",T);case 69:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.default=function(e){var r=e.rpcUrl,n=e.LedgerTransport,t=e.networkId,c=e.preferred,u=e.label,s=e.iconSrc;return{name:u||"Ledger",svg:e.svg||'\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',iconSrc:s,wallet:function(){var e=f(a.a.mark((function e(c){var u,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=c.BigNumber,s=c.networkName,o=c.resetWalletState,e.next=3,p({rpcUrl:r,networkId:t,LedgerTransport:n,BigNumber:u,networkName:s,resetWalletState:o});case 3:return i=e.sent,e.abrupt("return",{provider:i,interface:{name:"Ledger",connect:i.enable,disconnect:i.disconnect,address:{get:function(){var e=f(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=f(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=f(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.getPrimaryAddress(),e.abrupt("return",r&&i.getBalance(r));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:c}}}}]);
//# sourceMappingURL=82.0be6185e.chunk.js.map