(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[1923],{4408:function(v,u,t){"use strict";var D=t(12924),m=t.n(D),i=t(28216),o=t(17780),O=t(38642),E=a=>({userInfo:a.user}),P=a=>{var r=a.title;return(0,o.xX)()&&setTimeout(()=>{document.title=r},0),(0,D.useEffect)(()=>{if(r&&document.title!==r&&setTimeout(()=>{document.title=r},0),(0,O.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var M=document.querySelector(".zoom-report");M&&(M.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[r]),m().createElement(m().Fragment,null)};P.defautProps={title:""},u.Z=(0,i.$j)(E)(P)},22294:function(v,u,t){"use strict";var D=t(57663),m=t(71577),i=t(12924),o=t.n(i),O=t(38642);class E extends i.Component{constructor(a){super(a);this.state={}}backCommunityHome(){(0,O.eJ)({url:"/community"})}render(){var a=this.props.isShowHeader;return o().createElement("div",{className:"layer-layout-box"},a&&o().createElement("div",{className:"layer-layout-box-header"},o().createElement(m.Z,{onClick:this.backCommunityHome,type:"primary"},"\u8FD4\u56DE\u9996\u9875")),o().createElement("div",{className:"layer-layout-container"},this.props.children))}}E.defaultProps={isShowHeader:!1},u.Z=E},84281:function(v,u,t){"use strict";t.r(u);var D=t(20228),m=t(11382),i=t(13254),o=t(14277),O=t(57663),E=t(71577),P=t(34792),a=t(48086),r=t(57361),M=t(9754),C=t.n(M),L=t(12924),e=t.n(L),f=t(91768),A=t(76651),I=t(22294),B=t(10237),U=t(37055),K=t(4408),R=t(38642);class g extends e().Component{constructor(p){var n;super(p);n=this,this.initGroups=(0,r.Z)(C().mark(function _(){var l,d;return C().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=n.props.t,d=U.ZP.community.getGroups(0),c.next=4,B.WY.get({url:d}).then(s=>{if(s.data.code===0){var T=s.data.data.content,h=T===void 0?[]:T;n.setState({groups:h,showNoGroupTips:h.length===0})}else a.default.error(l("community.getSourceErrorTips"))}).catch(()=>{a.default.error(l("community.getSourceErrorTips"))});case 4:n.setState({loading:!1});case 5:case"end":return c.stop()}},_)})),this.toGroupPage=_=>{(0,R.eJ)({url:"/community/myCircle?id=".concat(_)})},this.state={groups:[],loading:!0,showNoGroupTips:!1}}componentDidMount(){this.initGroups()}render(){var p=this.props,n=p.t,_=p.prefixCls,l=this.state,d=l.groups,y=l.loading,c=l.showNoGroupTips;return e().createElement(I.Z,null,e().createElement(K.Z,{title:n("documentTitle.moreGroup")}),e().createElement("div",{className:"".concat(_)},e().createElement("div",{className:"".concat(_,"-content")},e().createElement(m.Z,{spinning:y},e().createElement("div",{className:"".concat(_,"-content-list")},d.length>0&&d.map(s=>e().createElement("div",{className:"".concat(_,"-content-list-item"),key:s.id,onClick:()=>this.toGroupPage(s.id)},e().createElement("div",{className:"group-cover"},e().createElement("img",{src:s.awatar,alt:""})),e().createElement("div",{className:"group-detail"},e().createElement("h3",{className:"group-name"},s.name),e().createElement("p",{className:"group-desc"},s.description),e().createElement("div",{className:"group-count"},e().createElement("span",{className:"group-posts"},"".concat(n("community.article"),"\uFF1A").concat(s.articleCount||0)),e().createElement("span",{className:"group-comments"},"".concat(n("community.question"),"\uFF1A").concat(s.answerCount||0)))))),c&&e().createElement(o.Z,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},description:e().createElement("span",null,n("community.noGroupTips"))},e().createElement(E.Z,{type:"primary",onClick:()=>{A.m8.goBack()}},n("common.return"))))))))}}g.defaultProps={prefixCls:"more-group"},u.default=(0,f.Z)()(g)}}]);