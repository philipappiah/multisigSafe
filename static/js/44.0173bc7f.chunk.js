(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[44],{1305:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(0),c=a.n(r),i=a(38),o=a(280),s=a(347),l=a(471),m=a.n(l),d=a(21),u=a(20),g=a(253),x=a(1366),f=a(107),p=a(92),b=a(115),h=a(93),E=a(62),O=a(76),v=a(473),j=a(50),C=a(48),w=a(298),A=a(1376),S=a(1351),N=a(1359),y=a(1350),T=a(1368),k=a(290),D=a(1364),z=a(1363),B=a(4),I=a(443),G=Object(I.a)({heading:{padding:"".concat(B.md," ").concat(B.lg),justifyContent:"flex-start",boxSizing:"border-box",maxHeight:"74px"},annotation:{letterSpacing:"-1px",color:B.secondaryText,marginRight:"auto",marginLeft:"20px"},headingText:{fontSize:B.lg},closeIcon:{height:"35px",width:"35px"},container:{padding:"".concat(B.md," ").concat(B.lg)},value:{marginLeft:B.sm},outerData:{borderRadius:"5px",border:"1px solid ".concat(B.border),padding:"11px",minHeight:"21px"},data:{wordBreak:"break-all",overflow:"auto",fontSize:"14px",fontFamily:"Averta",maxHeight:"100px",letterSpacing:"normal",fontStretch:"normal",lineHeight:"1.43"},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"},gasCostsContainer:{backgroundColor:B.background,padding:"".concat(B.sm," ").concat(B.lg)}}),F=Object(s.a)(G),P=Object(u.i)().nativeCoin;t.default=function(e){var t=e.onClose,a=e.onPrev,r=e.tx,s=F(),l=Object(i.e)(),B=Object(i.f)(j.n),I=Object(y.b)({txRecipient:r.contractAddress,txData:r.data?r.data.trim():"",txAmount:r.value?Object(g.c)(r.value,P.decimals):"0"}),G=I.gasLimit,L=I.gasEstimation,R=I.gasPriceFormatted,H=I.gasCostFormatted,M=I.txEstimationExecutionStatus,U=I.isExecution,J=I.isCreation,_=I.isOffChainSignature,V=Object(T.a)(M),W=Object(n.a)(V,1)[0];return c.a.createElement(z.a,{isOffChainSignature:_,isExecution:U,ethGasLimit:G,ethGasPrice:R,safeTxGas:L.toString()},(function(e,n){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{align:"center",className:s.heading,grow:!0},c.a.createElement(E.a,{className:s.headingText,noMargin:!0,weight:"bolder"},"Contract interaction"),c.a.createElement(E.a,{className:s.annotation},"2 of 2"),c.a.createElement(o.a,{disableRipple:!0,onClick:t},c.a.createElement(m.a,{className:s.closeIcon}))),c.a.createElement(b.a,null),c.a.createElement(f.a,{className:s.container},c.a.createElement(A.a,null),c.a.createElement(x.a,{withArrow:!0}),c.a.createElement(O.a,{margin:"xs"},c.a.createElement(E.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Recipient")),c.a.createElement(O.a,{align:"center",margin:"md"},c.a.createElement(p.a,{xs:12},c.a.createElement(d.EthHashInfo,{hash:r.contractAddress,showAvatar:!0,showCopyBtn:!0,explorerUrl:Object(u.c)(r.contractAddress)}))),c.a.createElement(O.a,{margin:"xs"},c.a.createElement(E.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Value")),c.a.createElement(O.a,{align:"center",margin:"md"},c.a.createElement(h.a,{alt:"Ether",height:28,onError:S.a,src:Object(w.b)("0").logoUri}),c.a.createElement(E.a,{className:s.value,noMargin:!0,size:"md"},r.value||0," "+P.name)),c.a.createElement(O.a,{margin:"xs"},c.a.createElement(E.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Data (hex encoded)")),c.a.createElement(O.a,{align:"center",margin:"md"},c.a.createElement(p.a,{className:s.outerData},c.a.createElement(O.a,{className:s.data,size:"md"},r.data))),c.a.createElement(N.a,{txParameters:e,onEdit:n,isTransactionCreation:J,isTransactionExecution:U,isOffChainSignature:_})),M===y.a.LOADING?null:c.a.createElement(f.a,{className:s.gasCostsContainer},c.a.createElement(D.a,{gasCostFormatted:H,isExecution:U,isCreation:J,isOffChainSignature:_,txEstimationExecutionStatus:M})),c.a.createElement(k.b.Footer,{withoutBorder:W!==k.a.LOADING},c.a.createElement(k.b.Footer.Buttons,{cancelButtonProps:{onClick:a,text:"Back"},confirmButtonProps:{onClick:function(){return function(e){var a=r.contractAddress,n=r.data?r.data.trim():"",c=r.value?Object(g.c)(r.value,P.decimals):"0";B?l(Object(v.b)({safeAddress:B,to:a,valueInWei:c,txData:n,txNonce:e.safeNonce,safeTxGas:e.safeTxGas?Number(e.safeTxGas):void 0,ethParameters:e,notifiedTransaction:C.c.STANDARD_TX})):console.error("There was an error trying to submit the transaction, the safeAddress was not found"),t()}(e)},status:W,text:M===y.a.LOADING?"Estimating":void 0,testId:"submit-tx-btn"}})))}))}},1351:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1355),r=function(e){e.currentTarget.onerror=null,e.currentTarget.src=n.a};a(384)},1354:function(e,t,a){"use strict";var n=a(45),r=a(6),c=a(8),i=a(12),o=a(13),s=a(0),l=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=Object(n.a)(e,["children"]);return s.createElement("b",a,t)}}]),a}(s.PureComponent);t.a=l},1355:function(e,t,a){"use strict";t.a=a.p+"static/media/token_placeholder.c1abe466.svg"},1366:function(e,t,a){"use strict";var n,r,c=a(27),i=a(0),o=a.n(i),s=a(25),l=a(21),m=s.default.div(n||(n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n\n  svg {\n    margin: 0 12px 0 4px;\n  }\n"]))),d=Object(s.default)(l.Divider)(r||(r=Object(c.a)(["\n  width: 100%;\n"])));t.a=function(e){var t=e.withArrow;return o.a.createElement(m,null,t&&o.a.createElement(l.Icon,{type:"arrowDown",size:"md"}),o.a.createElement(d,null))}},1376:function(e,t,a){"use strict";var n,r=a(27),c=a(0),i=a.n(c),o=a(38),s=a(21),l=a(25),m=a(20),d=a(50),u=a(62),g=a(1354),x=a(4),f=a(107),p=Object(m.i)().nativeCoin,b=Object(l.default)(f.a)(n||(n=Object(r.a)(["\n  font-size: 12px;\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n  background-color: ",";\n  width: fit-content;\n  padding: 5px 10px;\n  margin-top: ",";\n  margin-left: 40px;\n  border-radius: 3px;\n"])),x.border,x.xs);t.a=function(){var e=Object(o.f)(d.o)||{},t=e.address,a=void 0===t?"":t,n=e.ethBalance,r=Object(o.f)((function(e){return Object(d.i)(e,a)}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.EthHashInfo,{hash:a,name:r,explorerUrl:Object(m.c)(a),showAvatar:!0,showCopyBtn:!0}),n&&i.a.createElement(b,null,i.a.createElement(u.a,{noMargin:!0},"Balance: ",i.a.createElement(g.a,{"data-testid":"current-eth-balance"},"".concat(n," ").concat(p.symbol)))))}}}]);
//# sourceMappingURL=44.0173bc7f.chunk.js.map