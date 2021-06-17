(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[6],{1337:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1336);t.a=function(e){var t=Object.assign({},e);return i.a.createElement(c.a,t)}},1341:function(e,t,a){"use strict";var n=a(10),i=a(45),c=a(537),r=a(443),s=a(347),o=a(0),l=a.n(o),u=a(4),m={overflow:"hidden",width:"100%"},f=Object(s.a)((function(){return Object(r.a)({root:{paddingTop:u.lg,paddingBottom:"12px",lineHeight:0}})}));t.a=function(e){var t=e.input,a=t.name,r=t.onChange,s=t.value,o=Object(i.a)(t,["name","onChange","value"]),u=e.inputAdornment,d=e.meta,b=e.multiline,x=e.rows,p=e.testId,E=e.text,g=Object(i.a)(e,["input","inputAdornment","meta","multiline","rows","testId","text"]),O=f(),h=s?E:void 0,j=(d.touched||!d.pristine)&&!d.valid,v=!!d.error||!d.modifiedSinceLastSubmit&&!!d.submitError,S=d.error||d.submitError,G=!d.active&&(d.pristine||!d.touched),N="undefined"===typeof d.error||!d.touched,T=G&&N,C=h?O.root:"",L=d.valid?"isValid":v&&j?"isInvalid":"",A=Object(n.a)(Object(n.a)({},o),{},{autoComplete:"off","data-testid":p}),w=Object(n.a)(Object(n.a)({},u),{},{className:"".concat(C," ").concat(L),disableUnderline:T});return l.a.createElement(c.a,Object.assign({error:v&&j,helperText:v&&j?S:h||" ",inputProps:A,InputProps:w,multiline:b,name:a,onChange:r,rows:x,style:m,value:s},g))}},1342:function(e,t,a){"use strict";var n=a(45),i=a(0),c=a(1336),r=function(e){return{padding:"0 ".concat(e,"%"),flexDirection:"column",flex:"1 0 auto"}};t.a=function(e){var t=e.children,a=e.decorators,s=e.formMutators,o=e.initialValues,l=e.onSubmit,u=e.padding,m=void 0===u?0:u,f=e.subscription,d=e.testId,b=void 0===d?"":d,x=e.validation;return i.createElement(c.b,{decorators:a,initialValues:o,mutators:s,onSubmit:l,render:function(e){var a=e.handleSubmit,c=Object(n.a)(e,["handleSubmit"]);return i.createElement("form",{"data-testid":b,onSubmit:a,style:r(m)},t(c.submitting,c.validating,c,c.form.mutators))},subscription:f,validate:x})}},1350:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return N}));var n,i=a(2),c=a.n(i),r=a(5),s=a(33),o=a(0),l=a(38),u=a(20),m=a(510),f=a(253),d=a(214),b=a(69),x=a(50),p=a(48),E=a(30),g=a(94),O=a(233),h=a(31),j=a(116);!function(e){e.LOADING="LOADING",e.FAILURE="FAILURE",e.SUCCESS="SUCCESS"}(n||(n={}));var v=function(e,t,a,n){return!!(1===e||Object(j.a)(n,"spendingLimit")||void 0!==a&&a>=e)||!(!t||!a)&&a+1===e},S=function(e,t,a,n){return n?t+1===e||Object(j.a)(a,"spendingLimit"):1===e},G=function(e,t){return 0===e&&!Object(j.a)(t,"spendingLimit")},N=function(e){var t=e.txRecipient,a=e.txData,i=e.txConfirmations,j=e.txAmount,N=e.preApprovingOwner,T=e.operation,C=e.safeTxGas,L=e.txType,A=e.manualGasPrice,w=e.manualGasLimit,y=Object(o.useState)({txEstimationExecutionStatus:n.LOADING,gasEstimation:0,gasCost:"0",gasCostFormatted:"< 0.001",gasPrice:"0",gasPriceFormatted:"0",gasLimit:"0",isExecution:!1,isCreation:!1,isOffChainSignature:!1}),I=Object(s.a)(y,2),D=I[0],P=I[1],k=Object(u.i)().nativeCoin,z=Object(l.f)(x.n),R=Object(l.f)(x.q),F=Object(l.f)(x.e),B=Object(l.f)(g.e),H=B.account,_=B.smartContractWallet,U=B.name;return Object(o.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var r,s,o,l,u,x,g,y,I,D,B,U,V,W;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.length){e.next=2;break}return e.abrupt("return");case 2:if(r=G((null===i||void 0===i?void 0:i.size)||0,L),s=v(Number(R),N,null===i||void 0===i?void 0:i.size,L),o=S(Number(R),(null===i||void 0===i?void 0:i.size)||0,L,N),l=Object(O.a)(s,_,F),e.prev=6,u=C||0,x=0,g=!0,y=n.LOADING,!r){e.next=15;break}return e.next=14,Object(m.b)({safeAddress:z,txData:a,txRecipient:t,txAmount:j||"0",operation:T||p.a});case 14:u=e.sent;case 15:if(!s&&!o){e.next=19;break}return e.next=18,Object(m.c)({safeAddress:z,txRecipient:t,txData:a,txAmount:j||"0",txConfirmations:i,isExecution:s,isOffChainSignature:l,operation:T||p.a,from:H,safeTxGas:u,approvalAndExecution:o});case 18:x=e.sent;case 19:if(!A){e.next=23;break}e.t0=E.i.utils.toWei(A,"gwei"),e.next=26;break;case 23:return e.next=25,Object(b.c)();case 25:e.t0=e.sent;case 26:if(I=e.t0,D=E.i.utils.fromWei(I,"gwei"),B=x*parseInt(I,10),U=Object(f.a)(B,k.decimals),V=Object(d.a)(U),W=w||x.toString(),!s){e.next=36;break}return e.next=35,Object(m.a)({safeAddress:z,txRecipient:t,txData:a,txAmount:j||"0",txConfirmations:i,operation:T||p.a,from:H,gasPrice:"0",gasToken:h.a,gasLimit:W,refundReceiver:h.a,safeTxGas:u,approvalAndExecution:o});case 35:g=e.sent;case 36:y=g?n.SUCCESS:n.FAILURE,P({txEstimationExecutionStatus:y,gasEstimation:u,gasCost:U,gasCostFormatted:V,gasPrice:I,gasPriceFormatted:D,gasLimit:W,isExecution:s,isCreation:r,isOffChainSignature:l}),e.next=44;break;case 40:e.prev=40,e.t1=e.catch(6),console.warn(e.t1.message),P({txEstimationExecutionStatus:n.FAILURE,gasEstimation:0,gasCost:"0",gasCostFormatted:"< 0.001",gasPrice:"1",gasPriceFormatted:"1",gasLimit:"0",isExecution:s,isCreation:r,isOffChainSignature:l});case 44:case"end":return e.stop()}}),e,null,[[6,40]])})));return function(){return e.apply(this,arguments)}})()()}),[a,z,t,i,j,N,k.decimals,R,H,T,F,_,C,L,U,A,w]),D}},1359:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n,i,c,r,s=a(27),o=a(0),l=a.n(o),u=a(25),m=a(21),f=a(1490),d=a(38),b=a(50),x=u.default.div(n||(n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),p=u.default.div(i||(i=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),E=Object(u.default)(m.Text)(c||(c=Object(s.a)(["\n  margin: 8px 0 0 0;\n"]))),g=Object(u.default)(m.ButtonLink)(r||(r=Object(s.a)(["\n  padding-left: 0;\n  margin: 8px 0 0 0;\n\n  > p {\n    margin-left: 0;\n  }\n"]))),O=function(e){var t=e.onEdit,a=e.txParameters,n=e.compact,i=void 0===n||n,c=e.parametersStatus,r=e.isTransactionCreation,s=e.isTransactionExecution,o=e.isOffChainSignature,u=Object(d.f)(b.q)||1,O=o&&u>1?"ETH_HIDDEN":"ENABLED";return s||r||!o?l.a.createElement(m.Accordion,{compact:i},l.a.createElement(m.AccordionSummary,null,l.a.createElement(m.Text,{size:"lg"},"Advanced options")),l.a.createElement(m.AccordionDetails,null,l.a.createElement(p,null,l.a.createElement(E,{size:"md",color:"placeHolder"},"Safe transaction"),l.a.createElement(x,null,l.a.createElement(m.Text,{size:"lg",color:Object(f.b)(c||O)?"text":"secondaryLight"},"Safe nonce"),l.a.createElement(m.Text,{size:"lg",color:Object(f.b)(c||O)?"text":"secondaryLight"},a.safeNonce)),l.a.createElement(x,null,l.a.createElement(m.Text,{size:"lg",color:Object(f.b)(c||O)?"text":"secondaryLight"},"SafeTxGas"),l.a.createElement(m.Text,{size:"lg",color:Object(f.b)(c||O)?"text":"secondaryLight"},a.safeTxGas)),Object(f.a)(c||O)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null,l.a.createElement(E,{size:"md",color:"placeHolder"},Object(f.c)(s))),l.a.createElement(x,null,l.a.createElement(m.Text,{size:"lg"},"Nonce"),l.a.createElement(m.Text,{size:"lg"},a.ethNonce)),l.a.createElement(x,null,l.a.createElement(m.Text,{size:"lg"},"Gas limit"),l.a.createElement(m.Text,{size:"lg"},a.ethGasLimit)),l.a.createElement(x,null,l.a.createElement(m.Text,{size:"lg"},"Gas price"),l.a.createElement(m.Text,{size:"lg"},a.ethGasPrice))),l.a.createElement(g,{color:"primary",textSize:"xl",onClick:t},"Edit")))):null}},1363:function(e,t,a){"use strict";a.d(t,"a",(function(){return W}));var n,i,c,r,s,o,l,u=a(33),m=a(0),f=a.n(m),d=a(1538),b=a(27),x=a(280),p=a(471),E=a.n(p),g=a(347),O=a(21),h=a(25),j=a(1337),v=a(1341),S=a(107),G=a(76),N=a(4),T=a(443),C=Object(T.a)({heading:{padding:"".concat(N.md," ").concat(N.lg),justifyContent:"space-between",boxSizing:"border-box",height:"74px"},annotation:{letterSpacing:"-1px",color:N.secondaryText,marginRight:"auto",marginLeft:"20px"},headingText:{fontSize:N.lg},closeIcon:{height:"35px",width:"35px"},container:{padding:"".concat(N.md," ").concat(N.lg)},amount:{marginLeft:N.sm},address:{marginRight:N.sm},buttonRow:{height:"52px",justifyContent:"center",alignItems:"center",gap:"16px"}}),L=a(1342),A=a(470),w=a(290),y=a(1490),I=Object(h.default)(O.Divider)(n||(n=Object(b.a)(["\n  margin: 0px;\n"]))),D=Object(h.default)(O.Divider)(i||(i=Object(b.a)(["\n  margin: 16px -24px;\n"]))),P=h.default.div(c||(c=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n"]))),k=h.default.div(r||(r=Object(b.a)(["\n  display: flex;\n  /* justify-content: space-between; */\n  flex-wrap: wrap;\n  gap: 10px 20px;\n\n  div {\n    width: 216px !important;\n  }\n"]))),z=Object(h.default)(O.Link)(s||(s=Object(b.a)(["\n  margin: 16px 0 0 0;\n  display: inline-flex;\n  align-items: center;\n\n  > :first-of-type {\n    margin-right: 5px;\n  }\n"]))),R=Object(h.default)(O.Text)(o||(o=Object(b.a)(["\n  margin: 0 0 4px 0;\n"]))),F=Object(h.default)(O.Text)(l||(l=Object(b.a)(["\n  margin: 16px 0 4px 0;\n"]))),B=Object(g.a)(C),H=function(e){var t=null!==e&&void 0!==e?e:{},a=t.ethGasLimit,n=t.ethGasPrice,i=t.ethNonce,c=t.safeNonce,r=t.safeTxGas;return{ethGasLimit:Object(A.h)(0,!0)(a),ethGasPrice:Object(A.h)(0,!0)(n),ethNonce:Object(A.h)(0,!0)(i),safeNonce:Object(A.h)(0,!0)(c),safeTxGas:Object(A.h)(0,!0)(r)}},_=function(e){var t=e.onClose,a=e.txParameters,n=e.parametersStatus,i=void 0===n?"ENABLED":n,c=e.isExecution,r=B(),s=a.safeNonce,o=a.safeTxGas,l=a.ethNonce,u=a.ethGasLimit,m=a.ethGasPrice,d=function(){t()};return f.a.createElement(f.a.Fragment,null,f.a.createElement(G.a,{align:"center",className:r.heading,grow:!0,"data-testid":"send-funds-review-step"},f.a.createElement(O.Title,{size:"sm",withoutMargin:!0},"Advanced options"),f.a.createElement(x.a,{disableRipple:!0,onClick:d},f.a.createElement(E.a,{className:r.closeIcon}))),f.a.createElement(I,null),f.a.createElement(S.a,{className:r.container},f.a.createElement(L.a,{initialValues:{safeNonce:s||0,safeTxGas:o||"",ethNonce:l||"",ethGasLimit:u||"",ethGasPrice:m||""},onSubmit:function(e){t(e)},validation:H},(function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(R,{size:"xl",strong:!0},"Safe transaction"),f.a.createElement(P,null,f.a.createElement(j.a,{name:"safeNonce",defaultValue:s,placeholder:"Safe nonce",text:"Safe nonce",type:"number",min:"0",component:v.a,disabled:!Object(y.b)(i)}),f.a.createElement(j.a,{name:"safeTxGas",defaultValue:o,placeholder:"SafeTxGas",text:"SafeTxGas",type:"number",min:"0",component:v.a,disabled:!Object(y.b)(i)})),Object(y.a)(i)&&f.a.createElement(f.a.Fragment,null,f.a.createElement(F,{size:"xl",strong:!0},Object(y.c)(c)),f.a.createElement(k,null,f.a.createElement(j.a,{name:"ethNonce",defaultValue:l,placeholder:"Nonce",text:"Nonce",type:"number",component:v.a,disabled:!Object(y.a)(i)}),f.a.createElement(j.a,{name:"ethGasLimit",defaultValue:u,placeholder:"Gas limit",text:"Gas limit",type:"number",component:v.a,disabled:"CANCEL_TRANSACTION"===i}),f.a.createElement(j.a,{name:"ethGasPrice",defaultValue:m,type:"number",placeholder:"Gas price (GWEI)",text:"Gas price (GWEI)",component:v.a,disabled:!Object(y.a)(i)})),f.a.createElement(z,{href:"https://help.gnosis-safe.io/en/articles/4738445-configure-advanced-transaction-parameters-manually",target:"_blank"},f.a.createElement(O.Text,{size:"xl",color:"primary"},"How can I configure these parameters manually?"),f.a.createElement(O.Icon,{size:"sm",type:"externalLink",color:"primary"}))),f.a.createElement(D,null),f.a.createElement(G.a,{align:"center",className:r.buttonRow},f.a.createElement(w.b.Footer.Buttons,{cancelButtonProps:{onClick:d,text:"Back"},confirmButtonProps:{type:"submit",text:"Confirm",testId:"submit-tx-btn"}})))}))))},U=a(38),V=a(50),W=function(e){var t=e.children,a=e.isOffChainSignature,n=e.isExecution,i=e.parametersStatus,c=e.ethGasLimit,r=e.ethGasPrice,s=e.safeNonce,o=e.safeTxGas,l=e.closeEditModalCallback,b=Object(m.useState)(!1),x=Object(u.a)(b,2),p=x[0],E=x[1],g=Object(m.useState)(!1),O=Object(u.a)(g,2),h=O[0],j=O[1],v=Object(U.f)(V.q)||1,S=a&&v>1?"ETH_HIDDEN":"ENABLED",G=Object(d.a)({parameterStatus:i||S,initialEthGasLimit:c,initialEthGasPrice:r,initialSafeNonce:s,initialSafeTxGas:o}),N=G.setEthGasPrice,T=G.setEthGasLimit,C=G.setSafeNonce,L=G.setSafeTxGas,A=G.setEthNonce;Object(m.useEffect)((function(){h||(T(c),N(r),L(o))}),[c,T,r,N,h,o,L]);var w=function(){E((function(e){return!e}))};return p?f.a.createElement(_,{isExecution:n,txParameters:G,onClose:function(e){e&&(j(!0),C(e.safeNonce),L(e.safeTxGas),T(e.ethGasLimit),N(e.ethGasPrice),A(e.ethNonce),l&&l(e)),w()},parametersStatus:i||S}):t(G,w)}},1364:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),i=a.n(n),c=a(1350),r=a(62),s=a(20),o=a(443),l=a(347),u=a(4),m=a(76),f=a(93),d=a(1489),b=a(38),x=a(50),p=Object(o.a)({executionWarningRow:{display:"flex",alignItems:"center"},warningIcon:{marginRight:u.sm}}),E=Object(l.a)(p),g=function(e){var t=e.txEstimationExecutionStatus,a=e.isExecution,n=E(),s=Object(b.f)(x.q);if(t!==c.a.FAILURE)return null;var o="To save gas costs, avoid creating the transaction.";return a&&(o=s&&s>1?"To save gas costs, reject this transaction":"To save gas costs, avoid executing the transaction."),i.a.createElement(m.a,{align:"center"},i.a.createElement(r.a,{color:"error",className:n.executionWarningRow},i.a.createElement(f.a,{alt:"Info Tooltip",height:16,src:d.a,className:n.warningIcon}),"This transaction will most likely fail. ",o))},O=a(21),h=Object(s.i)().nativeCoin,j=function(e){var t,a=e.gasCostFormatted,n=e.isExecution,s=e.isCreation,o=e.isOffChainSignature,l=e.txEstimationExecutionStatus;return l===c.a.LOADING?null:(t=s?"create":n?"execute":"approve",i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{size:"lg",align:"center"},"You're about to ",t," a transaction and will have to confirm it with your currently connected wallet."," ",!o&&i.a.createElement(i.a.Fragment,null,"Make sure you have"," ",i.a.createElement(O.Text,{size:"lg",as:"span",color:"text",strong:!0},a)," ","(fee price) ",h.name," in this wallet to fund this confirmation.")),i.a.createElement(g,{txEstimationExecutionStatus:l,isExecution:n})))}},1368:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(33),i=a(0),c=a(1350),r=a(290),s=function(e){var t=Object(i.useState)(r.a.DISABLED),a=Object(n.a)(t,2),s=a[0],o=a[1];return Object(i.useEffect)((function(){var t=!0;if(t)switch(e){case c.a.LOADING:o(r.a.LOADING);break;default:o(r.a.READY)}return function(){t=!1}}),[e]),[s,o]}},1489:function(e,t,a){"use strict";t.a=a.p+"static/media/info_red.2d444d88.svg"},1490:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c}));var n=function(e){return"ENABLED"===e||"ETH_HIDDEN"!==e&&"CANCEL_TRANSACTION"!==e},i=function(e){return"ENABLED"===e||"SAFE_DISABLED"!==e&&"CANCEL_TRANSACTION"!==e},c=function(e){return"Owner transaction ".concat(e?"(Execution)":"(On-chain approval)")}},1538:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(2),i=a.n(n),c=a(5),r=a(33),s=a(0),o=a(38),l=a(69),u=a(94),m=a(159),f=a(65),d=a(50),b=a(30),x=a(116),p=function(e){var t=Object(x.a)((null===e||void 0===e?void 0:e.parameterStatus)||"ENABLED","CANCEL_TRANSACTION"),a=Object(o.f)(u.f),n=(Object(o.f)(d.o)||{}).address,p=Object(s.useState)(null===e||void 0===e?void 0:e.initialSafeNonce),E=Object(r.a)(p,2),g=E[0],O=E[1],h=Object(s.useState)(t?"0":null===e||void 0===e?void 0:e.initialSafeTxGas),j=Object(r.a)(h,2),v=j[0],S=j[1],G=Object(s.useState)(),N=Object(r.a)(G,2),T=N[0],C=N[1],L=Object(s.useState)(null===e||void 0===e?void 0:e.initialEthGasLimit),A=Object(r.a)(L,2),w=A[0],y=A[1],I=Object(s.useState)(null===e||void 0===e?void 0:e.initialEthGasPrice),D=Object(r.a)(I,2),P=D[0],k=D[1],z=Object(s.useState)(),R=Object(r.a)(z,2),F=R[0],B=R[1];return Object(s.useEffect)((function(){a&&function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.e)(a);case 2:t=e.sent,C(t.toString());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(s.useEffect)((function(){P?t?k("0"):B(b.i.utils.toWei(P,"Gwei")):B(void 0)}),[P,t]),Object(s.useEffect)((function(){void 0===g&&function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=9;break}return t=Object(f.f)(n),e.next=4,Object(m.c)(n);case 4:return a=e.sent,e.next=7,Object(m.d)(a,t);case 7:c=e.sent,O(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n,g]),{safeNonce:g,setSafeNonce:O,safeTxGas:v,setSafeTxGas:S,ethNonce:T,setEthNonce:C,ethGasLimit:w,setEthGasLimit:y,ethGasPrice:P,setEthGasPrice:k,ethGasPriceInGWei:F}}}}]);
//# sourceMappingURL=6.3dc66c25.chunk.js.map