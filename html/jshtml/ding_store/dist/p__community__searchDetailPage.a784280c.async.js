(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[8267],{4408:function(U,p,e){"use strict";var P=e(12924),m=e.n(P),g=e(28216),d=e(17780),f=e(38642),l=t=>({userInfo:t.user}),_=t=>{var s=t.title;return(0,d.xX)()&&setTimeout(()=>{document.title=s},0),(0,P.useEffect)(()=>{if(s&&document.title!==s&&setTimeout(()=>{document.title=s},0),(0,f.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var E=document.querySelector(".zoom-report");E&&(E.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[s]),m().createElement(m().Fragment,null)};_.defautProps={title:""},p.Z=(0,g.$j)(l)(_)},60667:function(U,p,e){"use strict";e.d(p,{Z:function(){return t}});var P=e(33565),m=e(12924),g=e.n(m),d=e(28216);function f(s){var E=s.type,a=s.openid,i=s.from,c=(0,m.useRef)(null);return(0,m.useLayoutEffect)(()=>{i==="vue"?window.parent.WWOpenData.bind(c.current):WWOpenData.bind(c.current)}),g().createElement("ww-open-data",{ref:c,type:E,openid:a})}var l=s=>{var E=s.wxWorkApiFlag,a=s.appType,i=s.from,c=(0,m.useState)(!1),h=(0,P.Z)(c,2),v=h[0],O=h[1];(0,m.useEffect)(()=>{var n=localStorage.getItem("qyWechatBook");(a!=="wx_app"||E||n==="false"||i==="vue"||i==="taro")&&O(!0)},[E,a,i]);var T=(0,m.useCallback)(()=>{var n=s.type,r=s.value,o=s.name,D=o===void 0?"":o;switch(console.warn(s,"props"),n){case"wx_sync":{var C=s.dataType;return r?g().createElement(f,{from:i,type:C,openid:r}):D}default:return D}},[s]),u=()=>{var n=s.name,r=s.dataType,o=localStorage.getItem("qyWechatBook");if(r===""||o==="false")return n;if(i==="vue"||i==="taro")return T();switch(s.appType){case"wx_app":return T();default:return n}};return v?u():s.name};l.defaultProps={value:"",name:"",type:"",dataType:"",from:""};var _=s=>({appType:s.user.appType,wxWorkApiFlag:s.user.wxWorkApiFlag}),t=(0,d.$j)(_)(l)},48479:function(U,p,e){"use strict";var P=e(62029),m=e(57361),g=e(47673),d=e(4107),f=e(9754),l=e.n(f),_=e(12924),t=e.n(_),s=e(91768),E=e(94184),a=e.n(E),i=e(28216),c=e(84874),h=e(67222),v=e(2396),O=d.Z.Search;class T extends t().Component{constructor(n){var r;super(n);r=this,this.clear=()=>{this.setState({searchValue:""})},this.renderEnterButton=()=>t().createElement(c.Z,{iconClass:"icon-icon_serarchx1"}),this.handleSearch=function(){var o=(0,m.Z)(l().mark(function D(C){var M,I,z,Z,R,K,S,$,w;return l().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(M=r.props,I=M.appType,z=M.exChange,Z=M.appId,R=localStorage.getItem("qyWechatBook"),K="",S=I==="wx_app"&&R==="true"&&z&&Z==="9005",!(C&&S)){A.next=17;break}return A.prev=5,A.next=8,(0,h.F_)(C);case 8:$=A.sent,w=$.data,w.success?K=w.data:K="",A.next=17;break;case 13:A.prev=13,A.t0=A.catch(5),console.error(A.t0),K="";case 17:r.props.onSearch(C,K);case 18:case"end":return A.stop()}},D,null,[[5,13]])}));return function(D){return o.apply(this,arguments)}}(),this.handleChange=o=>{var D=o.target.value,C=o.type,M=D;this.props.LimitLength&&(0,v.$s)(D)>this.props.LimitLength&&(M=D.substring(0,(0,v.rw)(D,this.props.LimitLength))),this.setState({searchValue:M});var I=!1;this.props.onSearch&&(C==="click"&&(I=!0),this.props.immediate&&C==="change"&&(I=!0)),I&&this.handleSearch(D)},this.state={searchValue:""}}componentDidMount(){this.props.onRef&&this.props.onRef(this)}componentWillReceiveProps(n){n.onRef&&n.onRef(this)}render(){var n=this.state.searchValue,r=this.props,o=r.prefixCls,D=r.placeholder,C=r.width,M=r.maxLength,I=M===void 0?400:M,z=r.height,Z=r.immediate,R=r.value,K=a()(["".concat(o)]),S={width:C,height:z},$={};return R&&($.value=R),t().createElement(O,(0,P.Z)({className:K,style:S,value:n,placeholder:D,onSearch:this.handleSearch,onChange:this.handleChange,maxLength:I,allowClear:!0,defaultValue:R,immediate:Z.toString()},$))}}T.defaultProps={prefixCls:"cl-search-input",placeholder:"Search",value:null,onSearch:()=>{},onChange:()=>{},immediate:!1,onRef:()=>{}},p.Z=(0,i.$j)(u=>({appType:u.user.appType,appId:u.user.appId}))((0,s.Z)()(T))},27114:function(U,p,e){"use strict";var P=e(62029),m=e(12924),g=e.n(m),d=e(38642),f=l=>{var _=()=>{(0,d.eJ)({url:"".concat(l.to)})};return g().createElement("a",(0,P.Z)({onClick:()=>_()},l),l.children)};p.Z=f},3179:function(U,p,e){"use strict";var P=e(12924),m=e.n(P),g=e(91768),d=e(85589),f=e.n(d);class l extends m().Component{constructor(t){super(t);this.renderImgAction=()=>{var s=this.state.imgUrls,E=s.length;return s.length>4&&(s=s.slice(0,4)),s.map((a,i)=>m().createElement("div",{className:"img-box",key:i},m().createElement("img",{src:a,alt:""}),i===3&&E>4&&m().createElement("div",{className:"mask"},"+".concat(E-4))))},this.state={imgUrls:[],text:""}}componentDidMount(){var t=this.props.content,s=t===void 0?"":t;if(typeof s=="object"){var E=s.content.split("<br/>");this.setState({imgUrls:s.imgs,text:E})}else{var a=f().createEditorState(s),i=a.toHTML(),c=document.createElement("div");c.innerHTML=i;for(var h=c.getElementsByTagName("img"),v=[],O=0;O<h.length;O++)v.push(h[O].src);this.setState({imgUrls:v,text:c.innerText})}}render(){var t=this.props,s=t.prefixCls,E=t.content,a=this.state.text;return E?m().createElement("div",{className:"".concat(s)},m().createElement("div",{className:"".concat(s,"-text-action")},m().createElement("div",null,Array.isArray(a)?a.map((i,c)=>m().createElement("p",{key:c},i)):a)),m().createElement("div",{className:"".concat(s,"-img-action")},this.renderImgAction())):null}}l.defaultProps={prefixCls:"display-content",content:""},p.Z=(0,g.Z)()(l)},5835:function(U,p,e){"use strict";var P=e(49111),m=e(19650),g=e(94233),d=e(67869),f=e(71153),l=e(60331),_=e(12924),t=e.n(_),s=e(91768),E=e(2390),a=e(3179),i=e(38642),c=e(84874),h=e(27114),v=e(60667);class O extends _.Component{constructor(u){super(u);this.isJsonString=n=>{try{if(typeof JSON.parse(n)=="object")return!0}catch(r){return!1}return!1},this.state={}}render(){var u,n=this.props,r=n.itemData,o=n.t,D=n.type,C=D===void 0?"":D,M=n.isSearch,I=M===void 0?!1:M,z=(r==null?void 0:r.refType)==="ARTICLE"?o("community.publishArtTips"):o("community.answerQuestionTips"),Z=(r==null?void 0:r.refType)==="ARTICLE"?"/community/articleDetail":"/community/questionDetail",R=this.isJsonString(r.content)?JSON.parse(r.content).content:r.content;return t().createElement("div",{className:"home-list-item-box"},t().createElement("div",{className:"home-list-item-header"},t().createElement(h.Z,{to:"".concat(Z,"?id=").concat(r.refId),className:"home-list-item-title"},r.isTop===1&&!I&&C.toLowerCase()!=="question"&&t().createElement(l.Z,{color:"blue"},o("community.prePosition")),r.title),(r==null?void 0:r.space)&&t().createElement(E.rU,{to:"community/myCircle?id=".concat(r.space.id),className:"home-list-item-link"},r.space.name)),C!=="question"&&t().createElement("div",null,t().createElement(m.Z,{size:8,align:"center",style:{margin:"10px 0"}},t().createElement(d.C,{size:24,src:(r==null||(u=r.author)===null||u===void 0?void 0:u.avatar)||"".concat("https://oss.coolcollege.cn","/1790708689137700864.png")}),t().createElement("div",{className:"home-list-item_name"},r&&t().createElement(v.Z,{dataType:"userName",value:r.author.user_id,name:r.author.name,type:r.author.source_type})),t().createElement("div",{className:"home-list-item_type"},z))),R&&t().createElement("div",{className:"home-list-item-content",onClick:()=>{(0,i.eJ)({url:"".concat(Z,"?id=").concat(r.refId)})}},t().createElement(a.Z,{content:R})),t().createElement("div",{className:"home-list-item-option"},t().createElement(m.Z,{size:10},r.refType==="ARTICLE"&&t().createElement("div",{type:"default",className:"home-list-item-option-btn"},t().createElement(m.Z,{size:3},t().createElement(c.Z,{iconClass:"icon-Comment",size:"14px"}),t().createElement("span",null,r.commentCount||0))),t().createElement("div",{type:"default",className:"home-list-item-option-btn"},t().createElement(m.Z,{size:3},t().createElement(c.Z,{iconClass:"icon-dianzan",size:"14px"}),t().createElement("span",null,r.stars||0)))),t().createElement("div",{className:"home-list-item-time"},(0,i.pi)(r.createTime))))}}p.Z=(0,s.Z)()(O)},71400:function(U,p,e){"use strict";var P=e(13062),m=e(71230),g=e(89032),d=e(15746),f=e(12924),l=e.n(f),_=e(91768),t=e(27114);class s extends f.PureComponent{render(){var a=this.props,i=a.circleList,c=i===void 0?[]:i,h=a.t;return l().createElement("div",{className:"circle-center-box"},l().createElement("div",{className:"circle-center-title"},l().createElement("div",null,h("community.group")),c.length>0&&l().createElement(t.Z,{to:"/community/moreGroup",className:"circle-center-link"},h("common.more"))),l().createElement("div",{className:"circle-center-body"},l().createElement(m.Z,{gutter:16},c.length>0?c.map(v=>l().createElement(d.Z,{span:6,key:v.id},l().createElement("div",{className:"circle-center-gutter-row"},l().createElement(t.Z,{to:"/community/myCircle?id=".concat(v.id),className:"circle-center-card"},l().createElement("img",{src:v.awatar}),l().createElement("span",{className:"circle-item-title"},v.name))))):l().createElement("div",{className:"no-group-tips"},h("community.noGroupTips")))))}}p.Z=(0,_.Z)()(s)},74266:function(U,p,e){"use strict";var P=e(13062),m=e(71230),g=e(89032),d=e(15746),f=e(12924),l=e.n(f),_=e(91768),t=e(28216),s=e(84874),E=e(27114),a,i,c=(a=(0,t.$j)(()=>({})),a(i=class extends f.Component{constructor(){super(...arguments);this.changeMyCenterTabs=v=>{var O=this.props.dispatch;O({type:"community/saveCreateCenterTab",payload:{activeMyTab:v}})}}render(){var v=this.props,O=v.questions,T=v.answers,u=v.articles,n=v.showHeader,r=n===void 0?!1:n,o=v.t,D=[{title:o("community.myQuestion"),count:O,key:"question"},{title:o("community.myAnswer"),count:T,key:"answer"},{title:o("community.myArticle"),count:u,key:"article"}];return l().createElement("div",{className:"create-center-box"},l().createElement(E.Z,{to:"/community/myCenter"},r&&l().createElement("div",{className:"create-center-title"},l().createElement("div",null,o("community.createCenter")),l().createElement(s.Z,{iconClass:"icon-f-arrow-right",fontSize:"18px",color:"#666"}))),l().createElement("div",{className:"create-center-body"},l().createElement(m.Z,{gutter:16},D.map(C=>l().createElement(d.Z,{key:C.key,className:"gutter-row",span:8},l().createElement(E.Z,{to:"/community/myCenter",onClick:()=>this.changeMyCenterTabs(C.key)},l().createElement("p",null,C.title),l().createElement("p",null,C.count)))))))}})||i);p.Z=(0,_.Z)()(c)},70110:function(U,p,e){"use strict";var P=e(12924),m=e.n(P),g=e(84874),d=e(27114);class f extends P.Component{constructor(_){super(_);this.state={}}render(){var _=this.props.cardList,t=_===void 0?[]:_;return m().createElement("div",{className:"guildLink_box"},t.map(s=>m().createElement("div",{className:"guildLink-container",key:s.id},m().createElement(d.Z,{to:s.link,className:"guildLink_card"},m().createElement("div",{className:"guildLink_card-bg",style:{background:s.backgroundColor||"#fff"}},m().createElement(g.Z,{iconClass:s.iconClass,size:"20px",color:s.color})),m().createElement("div",{className:"guild-card-title"},s.title)))))}}p.Z=f},22294:function(U,p,e){"use strict";var P=e(57663),m=e(71577),g=e(12924),d=e.n(g),f=e(38642);class l extends g.Component{constructor(t){super(t);this.state={}}backCommunityHome(){(0,f.eJ)({url:"/community"})}render(){var t=this.props.isShowHeader;return d().createElement("div",{className:"layer-layout-box"},t&&d().createElement("div",{className:"layer-layout-box-header"},d().createElement(m.Z,{onClick:this.backCommunityHome,type:"primary"},"\u8FD4\u56DE\u9996\u9875")),d().createElement("div",{className:"layer-layout-container"},this.props.children))}}l.defaultProps={isShowHeader:!1},p.Z=l},16645:function(U,p,e){"use strict";var P=e(71153),m=e(60331),g=e(49111),d=e(19650),f=e(94233),l=e(67869),_=e(12924),t=e.n(_),s=e(91768),E=e(3179),a=e(27114),i=e(38642),c=e(84874);class h extends _.Component{constructor(O){super(O);this.state={}}render(){var O,T,u,n,r=this.props,o=r.detail,D=r.t,C=r.isQuestion,M=C===void 0?!0:C,I=r.showUser,z=I===void 0?!1:I,Z=r.showSpace,R=Z===void 0?!1:Z,K=r.isAnswer,S=K===void 0?!1:K,$=r.isSearch,w=$===void 0?!1:$,F;S?F=o.answer.content?JSON.parse(o.answer.content).content:o.answer.content:F=o.content?JSON.parse(o.content).content:o.content;var A=M||S?"/community/questionDetail":"/community/articleDetail",ue=D(M||S?"community.publishQuesTips":"community.publishArtTips"),de=M?o.lastDate:S?(O=o.answer)===null||O===void 0?void 0:O.lastDate:o.createAt;return t().createElement("div",{className:"list-item-box"},z&&t().createElement(d.Z,{size:8,align:"center",className:"list-item-container"},t().createElement(l.C,{size:36,src:((T=o.author)===null||T===void 0?void 0:T.avatar)||"".concat("https://oss.coolcollege.cn","/1790708689137700864.png")}),t().createElement("span",{className:"list_item_name"},o.author.name),t().createElement("div",{className:"list-item_type"},ue)),t().createElement("header",{className:"list-item-box-header"},t().createElement(a.Z,{to:"".concat(A,"?id=").concat(o.id),className:"list-item-box-title"},o.isTop===1&&!w&&t().createElement(m.Z,{color:"blue"},D("community.prePosition")),o.title),R&&t().createElement("div",null,t().createElement(a.Z,{to:"/community/myCircle?id=".concat(o==null||(u=o.space)===null||u===void 0?void 0:u.id),className:"list-item-box-space"},o==null||(n=o.space)===null||n===void 0?void 0:n.name))),F&&t().createElement("div",{className:"list-item-box-content",onClick:()=>{(0,i.eJ)({url:"".concat(A,"?id=").concat(o.id)})}},t().createElement(E.Z,{content:F})),t().createElement("div",{className:"list-item-option"},t().createElement(d.Z,{size:10},!S&&t().createElement("div",{type:"default",className:"list-item-option-btn"},t().createElement(d.Z,{size:3},t().createElement(c.Z,{iconClass:M?"icon-huidashu":"icon-Comment",size:"14px"}),t().createElement("span",null,M?o.answerCount:o.commentCount))),!M&&t().createElement("div",{type:"default",className:"list-item-option-btn"},t().createElement(d.Z,{size:3},t().createElement(c.Z,{iconClass:"icon-dianzan",size:"14px"}),t().createElement("span",null,S?o.answer.stars:o.stars)))),t().createElement("div",{className:"list-item-time"},(0,i.pi)(de))))}}p.Z=(0,s.Z)()(h)},27601:function(U,p,e){"use strict";e.r(p),e.d(p,{default:function(){return We}});var P=e(20228),m=e(11382),g=e(13254),d=e(14277),f=e(57663),l=e(71577),_=e(47673),t=e(4107),s=e(34792),E=e(48086),a=e(88986),i=e(57361),c=e(33565),h=e(18106),v=e(88108),O=e(9754),T=e.n(O),u=e(12924),n=e.n(u),r=e(91768),o=e(76651),D=e(37055),C=e(10237),M=e(48479),I=e(4408),z=e(22294),Z=e(70110),R=e(74266),K=e(71400),S=e(5835),$=e(16645),w=e(49111),F=e(19650),A=e(94233),ue=e(67869),de=e(2390),Oe=e(3179),Me=e(27114),he=e(38642),Te=e(84874);class Le extends u.Component{constructor(J){super(J);this.state={}}render(){var J,b,Y,k,q,ee,te=this.props,L=te.itemData,ie=te.t,Ee=ie("community.answerQuestionTips"),ae="/community/questionDetail",Q=(J=L.answer)!==null&&J!==void 0&&J.content?JSON.parse(L.answer.content).content:L.answer.content;return n().createElement("div",{className:"home-list-item-box"},n().createElement("div",{className:"home-list-item-header"},n().createElement(Me.Z,{to:"".concat(ae,"?id=").concat(L.id),className:"home-list-item-title"},L.title),n().createElement(de.rU,{to:"community/myCircle?id=".concat(L==null||(b=L.space)===null||b===void 0?void 0:b.id),className:"home-list-item-link"},L==null||(Y=L.space)===null||Y===void 0?void 0:Y.name)),n().createElement("div",null,n().createElement(F.Z,{size:8,align:"center",style:{margin:"10px 0"}},n().createElement(ue.C,{size:24,src:((k=L.answer)===null||k===void 0||(q=k.author)===null||q===void 0?void 0:q.avatar)||"".concat("https://oss.coolcollege.cn","/1790708689137700864.png")}),n().createElement("div",{className:"home-list-item_name"},(ee=L.answer)===null||ee===void 0?void 0:ee.author.name),n().createElement("div",{className:"home-list-item_type"},Ee))),Q&&n().createElement("div",{className:"home-list-item-content",onClick:()=>{(0,he.eJ)({url:"".concat(ae,"?id=").concat(L.id)})}},n().createElement(Oe.Z,{content:Q})),n().createElement("div",{className:"home-list-item-option"},n().createElement(F.Z,{size:10},n().createElement("div",{type:"default",className:"home-list-item-option-btn"},n().createElement(F.Z,{size:3},n().createElement(Te.Z,{iconClass:"icon-dianzan",size:"14px"}),n().createElement("span",null,L.answer.stars||0)))),n().createElement("div",{className:"home-list-item-time"},(0,he.pi)(L.answer.lastDate))))}}var Ae=(0,r.Z)()(Le),le=v.Z.TabPane;function Ie(G){var J=o.m8.location.query,b=(0,u.useState)([]),Y=(0,c.Z)(b,2),k=Y[0],q=Y[1],ee=(0,u.useState)(!0),te=(0,c.Z)(ee,2),L=te[0],ie=te[1],Ee=(0,u.useState)("all"),ae=(0,c.Z)(Ee,2),Q=ae[0],Re=ae[1],Se=(0,u.useState)(0),pe=(0,c.Z)(Se,2),Be=pe[0],Ue=pe[1],Ze=(0,u.useState)(J.text||""),De=(0,c.Z)(Ze,2),oe=De[0],ye=De[1],Ke=(0,u.useState)([]),Ce=(0,c.Z)(Ke,2),ce=Ce[0],ve=Ce[1],Ne=(0,u.useState)({page:0,size:15}),fe=(0,c.Z)(Ne,2),ne=fe[0],ge=fe[1],xe=(0,u.useState)({answers:0,articles:0,questions:0}),Pe=(0,c.Z)(xe,2),_e=Pe[0],$e=Pe[1],W=G.t,Ge=[{key:"all",tab:W("common.all")},{key:"question",tab:W("community.problem")},{key:"qa",tab:W("community.question"),component:1},{key:"article",tab:W("community.article")}],ze=[{title:G.t("community.addQuestion"),link:"/community/questionAndAnswer",id:1,iconClass:"icon-tigewenti",color:"#1890FF",backgroundColor:"rgba(4, 132, 252, 0.25)"},{title:G.t("community.answerQuestion"),link:"/community/answerQuestion",id:2,iconClass:"icon-huidawenti",color:"#FFA000",backgroundColor:"rgba(253, 150, 10, 0.25)"},{title:G.t("community.addArticle"),link:"/community/publishArticle",id:3,iconClass:"icon-fabiaowenzhang",color:"#2EB8BD",backgroundColor:"rgba(52, 184, 190, 0.25)"}],me=function(){var y=(0,i.Z)(T().mark(function N(){var H,j,B,V,x;return T().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return ie(!0),H=D.ZP.community.getSearchData(),X.next=4,C.WY.get({url:H,params:(0,a.Z)({t:Q,text:oe},ne)});case 4:j=X.sent,B=j.data,B.code===0?(ve([].concat(...ce,(V=B.data)===null||V===void 0?void 0:V.content)||[]),Ue(((x=B.data)===null||x===void 0?void 0:x.totalElements)||0),ie(!1)):E.default.error(B.msg||W("community.isError"));case 7:case"end":return X.stop()}},N)}));return function(){return y.apply(this,arguments)}}();(0,u.useEffect)(()=>(Fe(),Qe(),me(),()=>{ye("")}),[]),(0,u.useEffect)(()=>{me()},[Q]),(0,u.useEffect)(()=>{me()},[oe]),(0,u.useEffect)(()=>{me()},[ne]);var Fe=function(){var y=(0,i.Z)(T().mark(function N(){var H,j,B;return T().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return H=D.ZP.community.getMyCenterData(),x.next=3,C.WY.get({url:H});case 3:j=x.sent,B=j.data,B.code===0?$e(B.data):E.default.error(B.msg||W("community.isError"));case 6:case"end":return x.stop()}},N)}));return function(){return y.apply(this,arguments)}}(),Qe=function(){var y=(0,i.Z)(T().mark(function N(H){var j,B,V,x,se;return T().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return j=1,B=D.ZP.community.getCircleData(j),V={page:0,size:4},re.next=5,C.WY.get({url:B,params:V});case 5:x=re.sent,se=x.data,se.code===0?q(se.data.content):E.default.error(se.msg||W("community.isError"));case 8:case"end":return re.stop()}},N)}));return function(H){return y.apply(this,arguments)}}(),je=y=>{},Je=y=>{Q!==y&&(Re(y),ve([]),ge((0,a.Z)((0,a.Z)({},ne),{},{page:0})))},He=y=>{var N;switch(Q){case"question":return n().createElement($.Z,{detail:y,isQuestion:!0,showUser:!0,showSpace:!0,isAnswer:!1,key:y.id,isSearch:!0});case"qa":return n().createElement(Ae,{key:(N=y.answer)===null||N===void 0?void 0:N.id,itemData:y,isSearch:!0});case"article":return n().createElement($.Z,{detail:y,isQuestion:!1,showUser:!0,showSpace:!0,isAnswer:!1,key:y.id,isSearch:!0});default:return n().createElement(S.Z,{itemData:y,refType:y.refType,key:y.id,isSearch:!0})}},Ve=y=>{oe!==y&&(ve([]),ye(y))},we=()=>{ge((0,a.Z)((0,a.Z)({},ne),{},{page:ne.page+1}))};return n().createElement(z.Z,null,n().createElement(I.Z,{title:G.t("documentTitle.searchDetail")}),n().createElement("div",{className:"search-page-box"},n().createElement(t.Z.Search,{defaultValue:oe,className:"search-page-search-input",onSearch:Ve,placeholder:W("community.pleaseInput")}),n().createElement(v.Z,{defaultActiveKey:Q,onChange:Je},n().createElement(le,{tab:W("community.hot"),key:"all"}),n().createElement(le,{tab:W("community.problem"),key:"question"}),n().createElement(le,{tab:W("community.question"),key:"qa"}),n().createElement(le,{tab:W("community.article"),key:"article"})),n().createElement(m.Z,{spinning:L},ce.length>0?n().createElement(n().Fragment,null,ce.map(y=>He(y)),n().createElement("div",{className:"search-list-bottom"},Be>ce.length?n().createElement(l.Z,{type:"default",onClick:()=>we()},W("course.loadMore")):n().createElement("span",null,W("community.isBottom")))):n().createElement(d.Z,null))),n().createElement("div",{className:"search-page-slide"},n().createElement(Z.Z,{cardList:ze}),n().createElement(R.Z,{answers:_e.answers,articles:_e.articles,questions:_e.questions,showHeader:!0}),n().createElement(K.Z,{circleList:k,handleCurrentPage:y=>je(y)})))}var We=(0,r.Z)()(Ie)},2396:function(U,p,e){"use strict";e.d(p,{fA:function(){return g},kh:function(){return d},kR:function(){return f},rw:function(){return _},$s:function(){return t},q_:function(){return s},QK:function(){return E}});var P=e(6793),m={limitWords(a,i){return{rules:[{max:a,message:"\u6700\u591A\u8F93\u5165".concat(a,"\u4E2A\u5B57")},{required:!0,message:i||"\u8BF7\u8F93\u5165\u9700\u8981\u7684\u5185\u5BB9!",whitespace:!0}]}},limitTagsLength(a){return{rules:[{max:a,message:"\u6700\u591A\u8F93\u5165".concat(a,"\u4E2A\u6807\u7B7E")}]}},required(a){return{rules:[{required:!0,message:a||"\u8BF7\u8F93\u5165\u9700\u8981\u7684\u5185\u5BB9!",whitespace:!0}]}},requiredWithValidator(a,i){return{rules:[{required:!0,message:a||"\u8BF7\u8F93\u5165\u9700\u8981\u7684\u5185\u5BB9!",whitespace:!0,validator:i}]}}},g={score:/^\+?[0-9]*$/,positiveInteger:/^[1-9]\d*$/,examScore:/^[0-9]+([.]\d{1})?$/,url:/^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/,httpsUrl:/(^https):\/\/([\w.]+\/?)\S*/,tagName:/^[\s　]|[ ]$/gi},d=a=>isNaN(a)||!a||!(a>=0&&a<1e3)||!g.score.test(a),f=a=>isNaN(a)||!a||!(a>-1e3&&a<1e3),l=a=>isNaN(a)||!a||!(a>=0&&a<1e3)||!g.examScore.test(a),_=(a,i)=>{for(var c=0,h=0;h<a.length;h++){var v=a.charAt(h);if(v.match(/[^\x00-\xff]/ig)!=null?c+=1:c+=.5,c>i)return h}return 0},t=a=>{for(var i=0,c=0;c<a.length;c++){var h=a.charAt(c);h.match(/[^\x00-\xff]/ig)!=null?i+=1:i+=.5}return i},s=(a,i)=>{var c=a.target.value,h=a.target.dataset.originLength;if(a.target.dataset.originLength||(h=i,a.target.dataset.originLength=h),!!h){var v=t(c);v*1<i*1?a.target.setAttribute("maxLength",i*2):a.target.setAttribute("maxLength",i)}},E=(a,i)=>{var c="";return(!a||!(0,P.fy)(a))&&(c=i),c}}}]);
