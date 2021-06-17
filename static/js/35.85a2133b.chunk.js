(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[35],{1302:function(e,t,n){"use strict";n.r(t);var a,r=n(2),c=n.n(r),i=n(5),s=n(33),o=n(0),u=n.n(o),l=n(38),f=n(280),d=n(347),b=n(471),m=n.n(b),p=n(20),h=n(1366),x=n(107),g=n(92),O=n(115),j=n(93),v=n(62),E=n(76),w=n(1478),C=n(473),k=n(50),y=n(48),A=n(1376),N=n(1351),T=n(116),S=n(86),G=n(17),I=n(14),P=n(1479),B=n(31),L=(a={},Object(G.a)(a,I.a.MAINNET,"0x06012c8cf97bead5deae237070f9587f8e7a266d"),Object(G.a)(a,I.a.RINKEBY,"0x16baf0de678e52367adc69fd067e5edd1d33e3bf"),a),D="42842e0e",F=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,i,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw new Error("Failed to build NFT transfer tx data. SafeAddress is not defined.");case 2:if(c=t.assetAddress,r=Object(B.f)(c,L[Object(p.h)()])?"transfer":"0x".concat(D),i=[t.recipientAddress,t.nftTokenId],!r.includes(D)){e.next=11;break}return i=[n].concat(Object(S.a)(i)),e.next=8,Object(P.b)();case 8:s=e.sent,e.next=14;break;case 11:return e.next=13,Object(P.d)();case 13:s=e.sent;case 14:return e.next=16,s.at(t.assetAddress);case 16:return o=e.sent,e.abrupt("return",(a=o.contract.methods)[r].apply(a,Object(S.a)(i)).encodeABI());case 18:case"end":return e.stop()}var c}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=n(4),R=n(443),M=Object(R.a)({heading:{padding:"".concat(z.md," ").concat(z.lg),justifyContent:"flex-start",boxSizing:"border-box",maxHeight:"74px"},annotation:{letterSpacing:"-1px",color:z.secondaryText,marginRight:"auto",marginLeft:"20px"},headingText:{fontSize:z.lg},closeIcon:{height:"35px",width:"35px"},container:{padding:"".concat(z.md," ").concat(z.lg)},amount:{marginLeft:z.sm},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"},gasCostsContainer:{backgroundColor:z.background,padding:"0 ".concat(z.lg)}}),H=n(21),_=n(1350),J=n(1368),U=n(290),K=n(1364),W=n(1363),X=n(1359),Y=Object(d.a)(M);t.default=function(e){var t=e.onClose,n=e.onPrev,a=e.tx,r=Y(),d=Object(T.b)(),b=Object(l.e)(),S=Object(l.f)(k.n),G=Object(l.f)(w.c),I=Object(o.useState)(0),P=Object(s.a)(I,2),B=P[0],L=P[1],D=Object(o.useState)(),z=Object(s.a)(D,2),R=z[0],M=z[1],q=Object(o.useState)(),Q=Object(s.a)(q,2),V=Q[0],Z=Q[1],$=G.find((function(e){var t=e.assetAddress,n=e.tokenId;return t===a.assetAddress&&n===a.nftTokenId})),ee=Object(o.useState)(""),te=Object(s.a)(ee,2),ne=te[0],ae=te[1],re=Object(_.b)({txData:ne,txRecipient:a.assetAddress,safeTxGas:B,manualGasPrice:R,manualGasLimit:V}),ce=re.gasLimit,ie=re.gasEstimation,se=re.gasPriceFormatted,oe=re.gasCostFormatted,ue=re.txEstimationExecutionStatus,le=re.isExecution,fe=re.isOffChainSignature,de=re.isCreation,be=Object(J.a)(ue),me=Object(s.a)(be,1)[0];Object(o.useEffect)((function(){var e=!0;return function(){var t=Object(i.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F(a,S);case 3:n=t.sent,e&&ae(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error calculating ERC721 transfer data:",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[S,a]);return u.a.createElement(W.a,{isOffChainSignature:fe,isExecution:le,ethGasLimit:ce,ethGasPrice:se,safeTxGas:ie.toString(),closeEditModalCallback:function(e){var t=Number(se),n=Number(e.ethGasPrice),a=Number(ie),r=Number(e.safeTxGas);n&&t!==n&&M(e.ethGasPrice),e.ethGasLimit&&ce!==e.ethGasLimit&&Z(e.ethGasLimit),r&&a!==r&&L(r)}},(function(e,c){return u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{align:"center",className:r.heading,grow:!0},u.a.createElement(v.a,{className:r.headingText,noMargin:!0,weight:"bolder"},"Send collectible"),u.a.createElement(v.a,{className:r.annotation},"2 of 2"),u.a.createElement(f.a,{disableRipple:!0,onClick:t},u.a.createElement(m.a,{className:r.closeIcon}))),u.a.createElement(O.a,null),u.a.createElement(x.a,{className:r.container},u.a.createElement(A.a,null),u.a.createElement(h.a,{withArrow:!0}),u.a.createElement(E.a,{margin:"xs"},u.a.createElement(v.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Recipient")),u.a.createElement(E.a,{align:"center",margin:"md"},u.a.createElement(g.a,{xs:12},u.a.createElement(H.EthHashInfo,{hash:a.recipientAddress,name:a.recipientName,showAvatar:!0,showCopyBtn:!0,explorerUrl:Object(p.c)(a.recipientAddress)}))),u.a.createElement(E.a,{margin:"xs"},u.a.createElement(v.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},Object(T.b)({charsStart:40,charsEnd:0})(a.assetName))),$&&u.a.createElement(E.a,{align:"center",margin:"md"},u.a.createElement(j.a,{alt:$.name,height:28,onError:N.a,src:$.image}),u.a.createElement(v.a,{className:r.amount,noMargin:!0,size:"md"},d($.name)," (Token ID: ",d($.tokenId),")")),u.a.createElement(X.a,{txParameters:e,onEdit:c,isTransactionCreation:de,isTransactionExecution:le,isOffChainSignature:fe})),u.a.createElement("div",{className:r.gasCostsContainer},u.a.createElement(K.a,{gasCostFormatted:oe,isExecution:le,isCreation:de,isOffChainSignature:fe,txEstimationExecutionStatus:ue})),u.a.createElement(U.b.Footer,{withoutBorder:me!==U.a.LOADING},u.a.createElement(U.b.Footer.Buttons,{cancelButtonProps:{onClick:n,text:"Back"},confirmButtonProps:{onClick:function(){return function(e){try{S?b(Object(C.b)({safeAddress:S,to:a.assetAddress,valueInWei:"0",txData:ne,txNonce:e.safeNonce,safeTxGas:e.safeTxGas?Number(e.safeTxGas):void 0,ethParameters:e,notifiedTransaction:y.c.STANDARD_TX})):console.error("There was an error trying to submit the transaction, the safeAddress was not found")}catch(n){console.error("Error creating sendCollectible Tx:",n)}finally{t()}}(e)},type:"submit",status:me,text:ue===_.a.LOADING?"Estimating":void 0,testId:"submit-tx-btn"}})))}))}},1351:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1355),r=function(e){e.currentTarget.onerror=null,e.currentTarget.src=a.a};n(384)},1354:function(e,t,n){"use strict";var a=n(45),r=n(6),c=n(8),i=n(12),s=n(13),o=n(0),u=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(a.a)(e,["children"]);return o.createElement("b",n,t)}}]),n}(o.PureComponent);t.a=u},1355:function(e,t,n){"use strict";t.a=n.p+"static/media/token_placeholder.c1abe466.svg"},1366:function(e,t,n){"use strict";var a,r,c=n(27),i=n(0),s=n.n(i),o=n(25),u=n(21),l=o.default.div(a||(a=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n\n  svg {\n    margin: 0 12px 0 4px;\n  }\n"]))),f=Object(o.default)(u.Divider)(r||(r=Object(c.a)(["\n  width: 100%;\n"])));t.a=function(e){var t=e.withArrow;return s.a.createElement(l,null,t&&s.a.createElement(u.Icon,{type:"arrowDown",size:"md"}),s.a.createElement(f,null))}},1376:function(e,t,n){"use strict";var a,r=n(27),c=n(0),i=n.n(c),s=n(38),o=n(21),u=n(25),l=n(20),f=n(50),d=n(62),b=n(1354),m=n(4),p=n(107),h=Object(l.i)().nativeCoin,x=Object(u.default)(p.a)(a||(a=Object(r.a)(["\n  font-size: 12px;\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n  background-color: ",";\n  width: fit-content;\n  padding: 5px 10px;\n  margin-top: ",";\n  margin-left: 40px;\n  border-radius: 3px;\n"])),m.border,m.xs);t.a=function(){var e=Object(s.f)(f.o)||{},t=e.address,n=void 0===t?"":t,a=e.ethBalance,r=Object(s.f)((function(e){return Object(f.i)(e,n)}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.EthHashInfo,{hash:n,name:r,explorerUrl:Object(l.c)(n),showAvatar:!0,showCopyBtn:!0}),a&&i.a.createElement(x,null,i.a.createElement(d.a,{noMargin:!0},"Balance: ",i.a.createElement(b.a,{"data-testid":"current-eth-balance"},"".concat(a," ").concat(h.symbol)))))}},1478:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return f}));var a=n(32),r=n(272),c=function(e){return e[r.a]},i=Object(a.a)(c,(function(e){return e})),s=Object(a.a)((function(e){return e[r.b]}),(function(e){return e})),o=Object(a.a)(c,(function(e){return e?Object.values(e):[]})),u=Object(a.a)(s,(function(e){var t=e.map((function(e){return e.assetAddress})),n=new Set(t);return Array.from(n)})),l=Object(a.a)(s,(function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))})),f=Object(a.a)(o,u,(function(e,t){return e.sort((function(e,t){return e.name.localeCompare(t.name)})).filter((function(e){var n=e.address;return t.includes(n)}))}))},1479:function(e,t,n){"use strict";n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return w})),n.d(t,"b",(function(){return C})),n.d(t,"a",(function(){return k}));var a=n(2),r=n.n(a),c=n(5),i=n(1593),s=n(1594),o=n(1595),u=n(58),l=n(1596),f=n.n(l),d=n(299),b=n(503),m=n(215),p=n(394),h=n(30),x=n(501),g=n(150),O=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(h.f)(),e.next=3,f()(i);case 3:return(n=e.sent).setProvider(t.currentProvider),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(h.f)(),e.next=3,f()(s);case 3:return(n=e.sent).setProvider(t.currentProvider),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(h.f)(),e.next=3,f()(o);case 3:return(n=e.sent).setProvider(t.currentProvider),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=Object(x.a)(j),w=Object(x.a)(O),C=Object(x.a)(v),k=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.a)(n()),e.prev=1,e.next=4,Object(b.a)();case 4:i=e.sent,c=i.data.results,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(1),Object(g.b)(g.a._600,e.t0.message),e.abrupt("return");case 12:if(s=c.filter((function(e){return"erc20"===e.type.toLowerCase()})),(null===a||void 0===a?void 0:a.size)!==s.length){e.next=15;break}return e.abrupt("return");case 15:o=Object(u.a)(s.map((function(e){return Object(m.a)(e)}))),t(Object(d.b)(o));case 17:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()}},1605:function(e,t){},1613:function(e,t){},1637:function(e,t){},1638:function(e,t){},1640:function(e,t){},1643:function(e,t){}}]);
//# sourceMappingURL=35.85a2133b.chunk.js.map