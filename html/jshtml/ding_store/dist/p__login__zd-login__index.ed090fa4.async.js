(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[8169],{68329:function(L,d,a){"use strict";a.r(d);var M=a(57663),f=a(71577),_=a(47673),h=a(4107),P=a(71194),u=a(57016),e=a(12924),t=a.n(e),o=a(28216),i=a(76651),p=a(91768),g=a(91302),c=a(28049),v=a(5430),m=a(84874);class D extends e.Component{constructor(){super(...arguments);this.state={account:"",password:""},this.setAccount=s=>{if(!(s.target.value&&!/^[0-9-]+$/.test(s.target.value))){var r=s.target.value;(r.length<16||this.state.account.length<16)&&this.setState({account:r})}},this.setPassword=s=>{this.setState({password:s.target.value.trim()})},this.gotoProject=s=>{s===g.mF&&i.m8.push("/index-auth-default"),s===g.is&&i.m8.push("/index-auth-companyTab")},this.clearAccount=()=>{this.setState({account:""})},this.resetPassword=()=>{i.m8.push("/index-zd-reset-login")},this.login=()=>{var s=(0,c.gG)(this.state.account),r=this.props.t;if(s)return u.Z.warning({title:r("registerLogin.loginFailure"),content:s,centered:!0,okText:r("common.ok")}),!1;var n=(0,c.ZX)(r("registerLogin.login"),this.state.password);if(n)return u.Z.warning({title:r("registerLogin.loginFailure"),content:n,centered:!0,okText:r("common.ok")}),!1;var E=this.props.dispatch;E({type:"user/setLoginMode",payload:{loginMode:"DEVELOPMENT"}}),E({type:"user/fetchUserAccount",loginType:"DEVELOPMENT",loginData:{username:this.state.account,password:this.state.password,corp_id:v.ZP.corpId}}).then(l=>{this.gotoProject(l)}).catch(l=>{u.Z.warning({title:r("registerLogin.loginFailure"),content:l,centered:!0,okText:r("common.ok")})})}}UNSAFE_componentWillMount(){var s=window.location.href.match(/corp_id=(\w*)/)&&window.location.href.match(/corp_id=(\w*)/)[1];s&&(v.ZP.corpId=s)}render(){var s=this.props,r=s.prefixCls,n=s.t,E=this.state,l=E.account,O=E.password;return t().createElement("div",{className:r},t().createElement("div",{className:"".concat(r,"__login-wrapper")},t().createElement("div",{className:"".concat(r,"__login-wrapper__left")},t().createElement("img",{src:"".concat("https://oss.coolcollege.cn","/1790243481017520128.png")})),t().createElement("div",{className:"".concat(r,"__login-wrapper__right")},t().createElement("div",{className:"".concat(r,"__login-wrapper__right__title")},n("registerLogin.login")),t().createElement("div",{className:"".concat(r,"__login-wrapper__right__form")},t().createElement("div",{className:"".concat(r,"__login-wrapper__right__form__item")},t().createElement(m.Z,{iconClass:"icon-shoujihao",color:"#B1B5C6"}),t().createElement(h.Z,{type:"text",placeholder:n("marketing.phoneError"),value:l,onChange:this.setAccount}),l!==""&&t().createElement("div",{onClick:()=>this.clearAccount(),className:"".concat(r,"__login-wrapper__right__form__item__clear")},t().createElement(m.Z,{iconClass:"icon-qingchu",color:"#D0D4E3"}))),t().createElement("div",{className:"".concat(r,"__login-wrapper__right__form__item")},t().createElement(m.Z,{iconClass:"icon-mima",color:"#B1B5C6"}),t().createElement(h.Z.Password,{maxLength:"20",placeholder:n("registerLogin.enterPassword"),value:O,onChange:this.setPassword})),t().createElement("div",{className:"".concat(r,"__login-wrapper__right__form__item form-item-nobg")},t().createElement("p",{className:"".concat(r,"__login-wrapper__right__form__item__tips"),onClick:()=>this.resetPassword()},n("registerLogin.forgetPassword"),"\uFF1F"))),t().createElement("div",{className:"".concat(r,"__login-wrapper__right__button-box")},t().createElement(f.Z,{onClick:this.login,type:"primary"},n("registerLogin.login"))))))}}D.defaultProps={prefixCls:"zd-login-container"},d.default=(0,o.$j)(C=>({user:C.user}))((0,p.Z)()(D))},28049:function(L,d,a){"use strict";a.d(d,{gG:function(){return h},ZX:function(){return P},pF:function(){return u}});var M=a(24663),f={isNotEmpty(e,t){if(e==="")return t},minLength(e,t,o){if(e.length<t)return o},maxLength(e,t,o){if(e.length>t)return o},fixationLength(e,t,o){if(e.length!=Number(t))return o},mobileFormat(e,t){if(!/^[0-9-]+$/.test(e))return t},passwordFormat(e,t){if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]*$/.test(e))return t},verificationFormat(e,t){if(!/^\d{6}$/.test(e))return t},passwordImprove:M.r},_=function(){this.cache=[]};_.prototype.add=function(e,t){for(var o=this,i=0,p;p=t[i++];)(function(g){var c=g.strategy.split(":"),v=g.errorMsg;o.cache.push(function(){var m=c.shift();return c.unshift(e),c.push(v),f[m].apply(e,c)})})(p)},_.prototype.start=function(){for(var e=0,t;t=this.cache[e++];){var o=t();if(o)return o}};var h=e=>{var t=new _;t.add(e,[{strategy:"isNotEmpty",errorMsg:"\u624B\u673A\u53F7\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{strategy:"maxLength:16",errorMsg:"\u624B\u673A\u53F7\u7801\u6700\u957F\u4E3A16\u4F4D"},{strategy:"mobileFormat",errorMsg:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"}]);var o=t.start();return o},P=(e,t)=>{var o=new _;o.add(t,[{strategy:"isNotEmpty",errorMsg:"".concat(e,"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")},{strategy:"minLength:6",errorMsg:"".concat(e,"\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D")},{strategy:"maxLength:20",errorMsg:"".concat(e,"\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E20\u4F4D")},{strategy:"passwordImprove",errorMsg:"".concat(e,"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u6570\u5B57\u548C\u5927\u5C0F\u5199\u5B57\u6BCD\u7EC4\u6210")}]);var i=o.start();return i},u=e=>{var t=new _;t.add(e,[{strategy:"isNotEmpty",errorMsg:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{strategy:"verificationFormat",errorMsg:"\u9A8C\u8BC1\u7801\u4E3A6\u4F4D\u6570\u5B57\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"}]);var o=t.start();return o}}}]);