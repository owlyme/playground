(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[8799],{1164:function(B,O,n){"use strict";var x=n(12924),I=n.n(x),D=n(76651),p=n(38642),A=n(91302),g=a=>{var e=navigator.userAgent.toLocaleLowerCase(),y=localStorage.getItem("enterpriseId"),_=(0,p.lz)(y,a.projectType),s=localStorage.getItem("dingPersonnel"),f=A.bl.includes(s),E=a.target;function u(h){if(E==="self"&&(h.preventDefault(),D.m8.push(a.to)),f){if(a.projectType==="student"){window.location.href="".concat(_,"/").concat(a.to);return}D.m8.push(a.to);return}if(dd.version){h.preventDefault();var d="";a.to.includes("?")?d="".concat(_).concat(a.to,"&ddtab=true"):d="".concat(_).concat(a.to,"?ddtab=true"),dd.biz.util.openLink({url:d})}else e.indexOf("lark")!==-1&&(window.location.href="".concat(_).concat(a.to))}return I().createElement("a",{rel:"noreferrer",href:"".concat(a.projectType==="student"?"".concat(_).concat(a.to):"#".concat(a.to)),className:"".concat(a.wrapCls," cl-pointer"),target:e.indexOf("lark")!==-1||f?"_self":a.target||"_blank",onClick:u},a.children)};g.defaultProps={to:"/",wrapCls:"",target:"",projectType:"manage"},g.targetTo=a=>{var e=a.path,y=a.from,_=a.isExternalLink,s=_===void 0?!1:_,f=a.isAsync,E=f===void 0?!1:f,u=a.openName,h=u===void 0?"_blank":u,d=a.projectType,m=d===void 0?"manage":d,M=a.ddTab,P=M===void 0?!0:M,l,i=localStorage.getItem("dingPersonnel"),t=A.bl.includes(i),o=navigator.userAgent.toLocaleLowerCase(),c=localStorage.getItem("enterpriseId"),r=(0,p.lz)(c,m),C=localStorage.getItem("appType"),T=navigator.userAgent.toLowerCase().indexOf("wxwork")>-1;if(dd.version){var v="";if(l=s?"":r,t&&!s){if(m==="student"){window.location.href="".concat(r).concat(e);return}D.m8.push(e);return}e.includes("?")?v="".concat(l).concat(e,"&ddtab=").concat(P):v="".concat(l).concat(e,"?ddtab=").concat(P),dd.biz.util.openLink({url:v})}else if(o.indexOf("lark")!==-1)l=s?"":r,window.location.href="".concat(l).concat(e);else if(C==="wx_app"&&T&&s&&y==="imgText")l=s?"":m==="student"?"".concat(r):"#",window.wx.invoke("openDefaultBrowser",{url:"".concat(l).concat(e)});else if(l=s?"":m==="student"?"".concat(r):"#",E){var L=window.open("","_blank");setTimeout(()=>{L.location="".concat(l).concat(e)},100)}else window.open("".concat(l).concat(e),h)},O.Z=g},31458:function(B,O,n){"use strict";n.r(O);var x=n(57663),I=n(71577),D=n(47673),p=n(4107),A=n(71194),g=n(57016),a=n(12924),e=n.n(a),y=n(94184),_=n.n(y),s=n(76651),f=n(28216),E=n(84874),u=n(91302),h=n(1164),d=n(91768),m=n(98489),M=n(84717);class P extends a.Component{constructor(){super(...arguments);this.state={account:"",password:"",verificationCode:"",verifyFlag:!1,verifyTime:60},this.handleSetAccount=i=>{if(!(i.target.value&&!/^[0-9-]+$/.test(i.target.value))){var t=i.target.value;(t.length<16||this.state.account.length<16)&&this.setState({account:t})}},this.handleSetVerificationCode=i=>{this.setState({verificationCode:i.target.value.trim()})},this.handleLogin=()=>{var i=this.props,t=i.dispatch,o=i.t,c=this.state,r=c.account,C=c.password,T=c.verificationCode,v=(0,m.gG)(r);if(v)return g.Z.warning({title:o("registerLogin.loginFailure"),content:v,centered:!0,okText:o("common.ok")}),!1;var L=(0,m.pF)(T);if(L)return g.Z.warning({title:o("registerLogin.loginFailure"),content:L,centered:!0,okText:o("common.ok")}),!1;t({type:"user/setLoginMode",payload:{loginMode:"ACCOUNT"}}),t({type:"user/fetchUserInfo",loginType:"ACCOUNT",loginData:{login_mobile:r,password:C,login_type:"verification_code",verification_code:T}}).then(R=>{this.gotoProject(R)})},this.clearAccount=()=>{this.setState({account:""})},this.getResetVerification=()=>{var i=this.state,t=i.verifyFlag,o=i.account,c=(0,m.gG)(o),r=this.props.t;return c?(g.Z.warning({title:r("registerLogin.sendFailed"),content:c,centered:!0,okText:r("common.ok")}),!1):t?!1:(0,M.g2)({login_mobile:o,action_type:"login"}).then(()=>{this.setState({verifyFlag:!0}),this.startVerificationTime()})},this.startVerificationTime=()=>{var i=null;i=setInterval(()=>{var t=this.state.verifyTime,o=t-1;if(o===0){clearInterval(this.state.VerificationTime),this.setState({verifyFlag:!1,verifyTime:60});return}this.setState({verifyTime:o})},1e3),this.setState({VerificationTime:i})},this.renderVerificationLogin=()=>{var i=this.props,t=i.prefixCls,o=i.t,c=this.state,r=c.verificationCode,C=c.account,T=c.verifyFlag,v=c.verifyTime;return e().createElement("div",{className:"".concat(t,"__form")},e().createElement("div",{className:"".concat(t,"__form__item")},e().createElement(E.Z,{iconClass:"icon-shoujihao",color:"#B1B5C6"}),e().createElement(p.Z,{type:"text",placeholder:o("marketing.phoneError"),value:C,onChange:this.handleSetAccount}),C!==""&&e().createElement("div",{onClick:()=>this.clearAccount(),className:"".concat(t,"__form__item__clear")},e().createElement(E.Z,{iconClass:"icon-qingchu",color:"#D0D4E3"}))),e().createElement("div",{className:"".concat(t,"__form__item")},e().createElement(E.Z,{iconClass:"icon-mima",color:"#B1B5C6"}),e().createElement(p.Z,{maxLength:"20",placeholder:o("registerLogin.inputVerificationCode"),value:r,onChange:this.handleSetVerificationCode}),e().createElement("div",{onClick:()=>this.getResetVerification(),className:"".concat(t,"__form__item__get-verification")},T?e().createElement("p",{className:"reset-item-verify-num"},v,"s"):e().createElement("p",{className:"reset-item-verify-tips"},o("registerLogin.getVerificationCode")))))},this.gotoProject=i=>{i===u.mF&&s.m8.push("/index-auth-default"),i===u.is&&s.m8.push("/index-auth-companyTab")},this.handleOpenSecurityPolicy=()=>{h.Z.targetTo({path:"https://coolvision.yuque.com/docs/share/eab30bf3-01c0-4362-a9bb-d9c0288a596a?#",isExternalLink:!0})}}componentDidMount(){}render(){var i=this.props,t=i.prefixCls,o=i.t;return e().createElement("div",{className:t},e().createElement("div",{className:"".concat(t,"__header")},e().createElement("img",{src:"".concat("https://oss.coolcollege.cn","/1790214228775407616.png"),alt:""})),e().createElement("div",{className:"".concat(t,"__body")},e().createElement("div",{className:"".concat(t,"__body__qr-code-wrapper")},e().createElement("div",{className:"".concat(t,"__body__img-box")},e().createElement("img",{src:"".concat("https://oss.coolcollege.cn","/1790243481017520128.png"),alt:""})),e().createElement("div",{className:"".concat(t,"__body__login-info")},e().createElement("div",{className:"".concat(t,"__body__login-type")},e().createElement("div",{className:_()("".concat(t,"__body__login-type__item"),"active")},o("domainSettings.identifyLogin"))),e().createElement("div",{className:"".concat(t,"__body__qr-code-container")},this.renderVerificationLogin(),e().createElement("div",{className:"".concat(t,"__button-box ")},e().createElement(I.Z,{onClick:this.handleLogin,type:"primary"},o("registerLogin.login"))),e().createElement("div",{className:"".concat(t,"__login-tips")},o("registerLogin.loginMeansAgree"),e().createElement("a",{onClick:this.handleOpenSecurityPolicy},"\u300A",o("registerLogin.privacySecurityPolicy"),"\u300B")))))))}}P.defaultProps={prefixCls:"zhi-yuan-login-container"},O.default=(0,f.$j)()((0,d.Z)()(P))}}]);