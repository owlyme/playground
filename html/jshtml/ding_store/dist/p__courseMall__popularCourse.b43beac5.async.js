(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[5755],{4408:function(L,g,e){"use strict";var D=e(12924),n=e.n(D),p=e(28216),P=e(17780),s=e(38642),m=i=>({userInfo:i.user}),t=i=>{var a=i.title;return(0,P.xX)()&&setTimeout(()=>{document.title=a},0),(0,D.useEffect)(()=>{if(a&&document.title!==a&&setTimeout(()=>{document.title=a},0),(0,s.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var _=document.querySelector(".zoom-report");_&&(_.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[a]),n().createElement(n().Fragment,null)};t.defautProps={title:""},g.Z=(0,p.$j)(m)(t)},1164:function(L,g,e){"use strict";var D=e(12924),n=e.n(D),p=e(76651),P=e(38642),s=e(91302),m=t=>{var i=navigator.userAgent.toLocaleLowerCase(),a=localStorage.getItem("enterpriseId"),_=(0,P.lz)(a,t.projectType),c=localStorage.getItem("dingPersonnel"),r=s.bl.includes(c),o=t.target;function f(O){if(o==="self"&&(O.preventDefault(),p.m8.push(t.to)),r){if(t.projectType==="student"){window.location.href="".concat(_,"/").concat(t.to);return}p.m8.push(t.to);return}if(dd.version){O.preventDefault();var C="";t.to.includes("?")?C="".concat(_).concat(t.to,"&ddtab=true"):C="".concat(_).concat(t.to,"?ddtab=true"),dd.biz.util.openLink({url:C})}else i.indexOf("lark")!==-1&&(window.location.href="".concat(_).concat(t.to))}return n().createElement("a",{rel:"noreferrer",href:"".concat(t.projectType==="student"?"".concat(_).concat(t.to):"#".concat(t.to)),className:"".concat(t.wrapCls," cl-pointer"),target:i.indexOf("lark")!==-1||r?"_self":t.target||"_blank",onClick:f},t.children)};m.defaultProps={to:"/",wrapCls:"",target:"",projectType:"manage"},m.targetTo=t=>{var i=t.path,a=t.from,_=t.isExternalLink,c=_===void 0?!1:_,r=t.isAsync,o=r===void 0?!1:r,f=t.openName,O=f===void 0?"_blank":f,C=t.projectType,T=C===void 0?"manage":C,y=t.ddTab,h=y===void 0?!0:y,l,M=localStorage.getItem("dingPersonnel"),E=s.bl.includes(M),v=navigator.userAgent.toLocaleLowerCase(),d=localStorage.getItem("enterpriseId"),u=(0,P.lz)(d,T),A=localStorage.getItem("appType"),W=navigator.userAgent.toLowerCase().indexOf("wxwork")>-1;if(dd.version){var I="";if(l=c?"":u,E&&!c){if(T==="student"){window.location.href="".concat(u).concat(i);return}p.m8.push(i);return}i.includes("?")?I="".concat(l).concat(i,"&ddtab=").concat(h):I="".concat(l).concat(i,"?ddtab=").concat(h),dd.biz.util.openLink({url:I})}else if(v.indexOf("lark")!==-1)l=c?"":u,window.location.href="".concat(l).concat(i);else if(A==="wx_app"&&W&&c&&a==="imgText")l=c?"":T==="student"?"".concat(u):"#",window.wx.invoke("openDefaultBrowser",{url:"".concat(l).concat(i)});else if(l=c?"":T==="student"?"".concat(u):"#",o){var N=window.open("","_blank");setTimeout(()=>{N.location="".concat(l).concat(i)},100)}else window.open("".concat(l).concat(i),O)},g.Z=m},60667:function(L,g,e){"use strict";e.d(g,{Z:function(){return i}});var D=e(33565),n=e(12924),p=e.n(n),P=e(28216);function s(a){var _=a.type,c=a.openid,r=a.from,o=(0,n.useRef)(null);return(0,n.useLayoutEffect)(()=>{r==="vue"?window.parent.WWOpenData.bind(o.current):WWOpenData.bind(o.current)}),p().createElement("ww-open-data",{ref:o,type:_,openid:c})}var m=a=>{var _=a.wxWorkApiFlag,c=a.appType,r=a.from,o=(0,n.useState)(!1),f=(0,D.Z)(o,2),O=f[0],C=f[1];(0,n.useEffect)(()=>{var h=localStorage.getItem("qyWechatBook");(c!=="wx_app"||_||h==="false"||r==="vue"||r==="taro")&&C(!0)},[_,c,r]);var T=(0,n.useCallback)(()=>{var h=a.type,l=a.value,M=a.name,E=M===void 0?"":M;switch(console.warn(a,"props"),h){case"wx_sync":{var v=a.dataType;return l?p().createElement(s,{from:r,type:v,openid:l}):E}default:return E}},[a]),y=()=>{var h=a.name,l=a.dataType,M=localStorage.getItem("qyWechatBook");if(l===""||M==="false")return h;if(r==="vue"||r==="taro")return T();switch(a.appType){case"wx_app":return T();default:return h}};return O?y():a.name};m.defaultProps={value:"",name:"",type:"",dataType:"",from:""};var t=a=>({appType:a.user.appType,wxWorkApiFlag:a.user.wxWorkApiFlag}),i=(0,P.$j)(t)(m)},22162:function(L,g,e){"use strict";var D=e(12924),n=e.n(D),p=e(28216),P=e(91768),s=e(84874),m=e(6793),t=e(60667),i=_=>{var c=_.advancedSetting;return{themeColor:c.themeColor}};class a extends n().Component{constructor(c){super(c);this.state={}}render(){var c=this.props,r=c.prefixCls,o=c.courseInfo,f=c.t,O=c.themeColor,C=(0,m.T4)(o.preferentialPrice),T=C.integer,y=C.decimal,h=o.officialPrice-o.preferentialPrice>0&&o.flag===1,l=(0,m.T4)(o.officialPrice-o.preferentialPrice),M=l.integer,E=l.decimal;return n().createElement("div",{className:r},n().createElement("div",{className:"".concat(r,"__cover")},n().createElement("img",{src:o.cover,alt:""}),o.teacherName&&o.flag!==1?n().createElement("div",{className:"".concat(r,"__teacher")},f("course.lecturer"),"\uFF1A",o.teacher_type==="inside"?n().createElement(t.Z,{dataType:"userName",value:o.teacher_sync_user_id,name:o.teacherName,type:o.teacher_source_type}):o.teacherName):null,o.flag===1?n().createElement("div",{className:"".concat(r,"__package")},f("course.coursePackage")):null),n().createElement("div",{className:"".concat(r,"__info")},n().createElement("div",{className:"".concat(r,"__info__name")},o.title),n().createElement("div",{className:"".concat(r,"__info__bottom")},n().createElement("div",{className:"".concat(r,"__info__price")},o.free?n().createElement("div",{className:"".concat(r,"__info__price__free"),style:{color:O}},f("course.free")):n().createElement("div",{className:"".concat(r,"__info__price__pay"),style:{color:O}},"\uFFE5",n().createElement("span",{className:"".concat(r,"__info__price__integer")},T),".",y),h?n().createElement("div",{className:"".concat(r,"__info__price__pay__save")},f("course.saveMoney"),M,Number(E)>0?".".concat(E):"",f("payment.moneyUnit")):null),o.flag!==1?n().createElement("div",{className:"".concat(r,"__info__count")},n().createElement("div",{className:"".concat(r,"__info__scan-count")},n().createElement(s.Z,{iconClass:"icon-guankancishu",size:"16px"}),o.scanCount)):n().createElement("div",{className:"".concat(r,"__info__count")},n().createElement("div",{className:"".concat(r,"__info__course-count")},n().createElement(s.Z,{iconClass:"icon-jingpinkecheng",size:"16px"}),o.courseCount)))))}}a.defaultProps={prefixCls:"platform-course-card"},g.Z=(0,p.$j)(i)((0,P.Z)()(a))},37123:function(L,g,e){"use strict";e.r(g);var D=e(14781),n=e(53431),p=e(20228),P=e(11382),s=e(88986),m=e(12924),t=e.n(m),i=e(91768),a=e(22162),_=e(4408),c=e(1164),r=e(10237),o=e(37055),f=e(76625),O=e.n(f),C=e(6793),T=e(22709),y={getCourseList:o.ZP.Common.getHotCourseList},h=["10","20","30","40","50","100"];class l extends t().Component{constructor(){var E;super(...arguments);E=this,this.state={isLoading:!0,searchParams:{keyword:"",pageNumber:1,pageSize:20},courseListInfo:{}},this.getCourseList=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=E.state.searchParams;d=(0,s.Z)((0,s.Z)({},d),v),r.WY.get({url:y.getCourseList(),params:{page_number:d.pageNumber,page_size:d.pageSize,keyword:d.keyword}}).then(u=>{E.setState({courseListInfo:u.data,isLoading:!1,searchParams:d})})},this.handlePageNumberChange=(v,d)=>{var u=this.state.searchParams;this.setState({searchParams:(0,s.Z)((0,s.Z)({},u),{},{pageNumber:v,pageSize:d})},()=>{this.getCourseList()})},this.renderCourseList=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=E.props.prefixCls;return v.length>0?v.map(u=>t().createElement("div",{className:"".concat(d,"__course-list__item"),key:u.id},t().createElement(c.Z,{to:"/course/platformCourse?courseId=".concat(u.id),projectType:"student"},t().createElement(a.Z,{courseInfo:u})))):t().createElement("div",{className:"".concat(d,"__empty")},t().createElement("img",{src:O(),alt:""}))}}componentDidMount(){this.getCourseList()}render(){var E=this.props,v=E.prefixCls,d=E.t,u=this.state,A=u.isLoading,W=u.courseListInfo,I=u.searchParams;return A?t().createElement(P.Z,{size:"large"}):t().createElement("div",{className:v},t().createElement(_.Z,{title:d("trainee.hotCourses")}),t().createElement("div",{className:"".concat(v,"__display-course")},t().createElement("div",{className:"".concat(v,"__course-list")},this.renderCourseList((0,T.N)(W.list))),t().createElement(n.Z,{className:"".concat(v,"__pagination"),total:W.total,showTotal:N=>(0,C.ZT)("".concat(d("course.totalCount")),N),pageSize:I.pageSize,defaultCurrent:1,current:I.pageNumber,showSizeChanger:!0,pageSizeOptions:h,onChange:this.handlePageNumberChange})))}}l.defaultProps={prefixCls:"course-popular-container"},g.default=(0,i.Z)()(l)},22709:function(L,g,e){"use strict";e.d(g,{N:function(){return D}});var D=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],P=[...p];return P.forEach(s=>{var m=s.course_id,t=s.official_price,i=s.preferential_price,a=s.scan_count,_=s.is_free,c=s.teacher_name;s.id=m,s.preferentialPrice=i,s.officialPrice=t,s.teacherName=c,s.free=_==="true",s.scanCount=a}),P}},76625:function(L,g,e){L.exports=e.p+"static/no_search_class.ab8fd345.png"}}]);
