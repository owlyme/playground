(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[7584],{4408:function(m,c,e){"use strict";var a=e(12924),n=e.n(a),r=e(28216),i=e(17780),s=e(38642),u=o=>({userInfo:o.user}),l=o=>{var t=o.title;return(0,i.xX)()&&setTimeout(()=>{document.title=t},0),(0,a.useEffect)(()=>{if(t&&document.title!==t&&setTimeout(()=>{document.title=t},0),(0,s.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var d=document.querySelector(".zoom-report");d&&(d.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[t]),n().createElement(n().Fragment,null)};l.defautProps={title:""},c.Z=(0,r.$j)(u)(l)},91145:function(m,c,e){"use strict";e.r(c);var a=e(12924),n=e.n(a),r=e(28216),i=e(91768),s=e(4408);class u extends a.Component{constructor(){super(...arguments);this.onClick=()=>{var o=this.props.user.corpId,t=encodeURIComponent("https://page.dingtalk.com/wow/dingtalk/act/serviceconversation?pc_slide=true&ddtab=true&wh_biz=tm&showmenu=false&goodsCode=".concat("FW_GOODS-1000651011","&corpId=").concat(o,"&token=").concat("ddf0ef9333df5e044ea90277def39f89"));dd.biz.util.openLink({url:"dingtalk://dingtalkclient/page/link?pc_slide=true&url=".concat(t)}).then(()=>{})}}render(){var o=this.props.t,t=window.location.href.match(/type=(\w*)/);return t&&t[1]&&t[1]==="notDingPersonnel"?n().createElement("div",{className:"ding-personnel-guide"},n().createElement(s.Z,{title:o("common.studyTask")}),n().createElement("img",{className:"ding-personnel-guide-img",src:"".concat("https://oss.coolcollege.cn","/1835882620798504960.png")})):n().createElement("div",{className:"ding-personnel-guide",onClick:this.onClick},n().createElement(s.Z,{title:o("common.studyTask")}),n().createElement("img",{className:"ding-personnel-guide-img",src:"".concat("https://oss.coolcollege.cn","/1835882826772385792.png")}))}}c.default=(0,r.$j)(l=>({user:l.user}))((0,i.Z)()(u))}}]);
