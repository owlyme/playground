(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[7906],{68793:function(y,o,t){"use strict";t.r(o);var l=t(12924),e=t.n(l),_=t(91768),s=t(76651),u=t(10237),m=t(37055),d=t(28216),i=t(92592);class p extends e().Component{constructor(a){super(a);this.renderQrCode=()=>{var r=s.m8.location.query.payStr;i.toDataURL(r,{width:140}).then(n=>{this.setState({codeUrl:n,price:s.m8.location.query.price},()=>{this.payResult=setInterval(this.getPayResult,1e3)})}).catch(()=>{message.error(this.props.t("personal.failedGenerateCode"))})},this.getPayResult=()=>{var r=s.m8.location.query.goodsId;u.WY.get({url:m.ZP.StudyProjectList.getAccountPayStatus(),params:{goods_id:r}}).then(n=>{n.data.data==="SUCCESS"&&(clearInterval(this.payResult),s.m8.goBack())})},this.state={}}componentDidMount(){this.renderQrCode()}componentWillUnmount(){clearInterval(this.payResult)}render(){var a=this.props.t,r=this.state,n=r.codeUrl,v=r.price;return e().createElement("div",{className:"course_project_wx_pay"},e().createElement("div",{className:"course_project_wx_pay_content"},e().createElement("div",{className:"course_project_wx_pay_content_price"},a("payment.AmountPaid"),"\uFF1A\xA5 ",e().createElement("span",null,v)),e().createElement("div",{className:"course_project_wx_pay_content_tips"},a("payment.withinHours")),e().createElement("div",{className:"course_project_wx_pay_content_qrcode"},e().createElement("span",null),e().createElement("span",null),e().createElement("img",{src:n})),e().createElement("div",{className:"course_project_wx_pay_content_bottom"},e().createElement("p",null," ",a("payment.weChatSacn")),e().createElement("p",null,a("payment.qrToPay")))))}}var E=c=>{var a=c.user;return{userInfo:a}};o.default=(0,d.$j)(E)((0,_.Z)()(p))}}]);
