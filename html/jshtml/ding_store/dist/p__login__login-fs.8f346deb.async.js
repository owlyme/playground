(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[9599],{11517:function(O,t,a){"use strict";a.r(t);var o=a(12924),r=a.n(o),u=a(28216),d=a(76651),p=a(38642),_=a(11520);class c extends o.Component{componentDidMount(){var f=navigator.userAgent.toLocaleLowerCase(),e=this.props.history.location.query,l=decodeURIComponent(window.location.href),i=l&&l.split("?")[1].split("&");if(i&&i.map(n=>(n.indexOf("=")&&(e[n.split("=")[0]]=n.split("=")[1].indexOf("#")!==-1?n.split("=")[1].split("#")[0]:n.split("=")[1]),n)),f.indexOf("lark")!==-1||e.appType==="lark"){var E=encodeURIComponent("".concat((0,p.QJ)(),"/index.html#/index-auth-default?appType=lark"));e.sidebarFlag==="sidebar"?d.m8.push("/fs-sidebar-page"):window.location.href="https://open.feishu.cn/open-apis/authen/v1/index?redirect_uri=".concat(E,"&app_id=").concat("cli_a0aa5e0fe5f8500d","&state=").concat(JSON.stringify(e))}}render(){return r().createElement(_.Z,null)}}t.default=(0,u.$j)(s=>({user:s.user}))(c)}}]);