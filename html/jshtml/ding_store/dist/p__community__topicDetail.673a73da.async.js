(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[602],{4408:function(N,d,e){"use strict";var y=e(12924),s=e.n(y),P=e(28216),o=e(17780),h=e(38642),l=t=>({userInfo:t.user}),i=t=>{var a=t.title;return(0,o.xX)()&&setTimeout(()=>{document.title=a},0),(0,y.useEffect)(()=>{if(a&&document.title!==a&&setTimeout(()=>{document.title=a},0),(0,h.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var m=document.querySelector(".zoom-report");m&&(m.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[a]),s().createElement(s().Fragment,null)};i.defautProps={title:""},d.Z=(0,P.$j)(l)(i)},27114:function(N,d,e){"use strict";var y=e(62029),s=e(12924),P=e.n(s),o=e(38642),h=l=>{var i=()=>{(0,o.eJ)({url:"".concat(l.to)})};return P().createElement("a",(0,y.Z)({onClick:()=>i()},l),l.children)};d.Z=h},3179:function(N,d,e){"use strict";var y=e(12924),s=e.n(y),P=e(91768),o=e(85589),h=e.n(o);class l extends s().Component{constructor(t){super(t);this.renderImgAction=()=>{var a=this.state.imgUrls,m=a.length;return a.length>4&&(a=a.slice(0,4)),a.map((E,D)=>s().createElement("div",{className:"img-box",key:D},s().createElement("img",{src:E,alt:""}),D===3&&m>4&&s().createElement("div",{className:"mask"},"+".concat(m-4))))},this.state={imgUrls:[],text:""}}componentDidMount(){var t=this.props.content,a=t===void 0?"":t;if(typeof a=="object"){var m=a.content.split("<br/>");this.setState({imgUrls:a.imgs,text:m})}else{var E=h().createEditorState(a),D=E.toHTML(),c=document.createElement("div");c.innerHTML=D;for(var u=c.getElementsByTagName("img"),n=[],v=0;v<u.length;v++)n.push(u[v].src);this.setState({imgUrls:n,text:c.innerText})}}render(){var t=this.props,a=t.prefixCls,m=t.content,E=this.state.text;return m?s().createElement("div",{className:"".concat(a)},s().createElement("div",{className:"".concat(a,"-text-action")},s().createElement("div",null,Array.isArray(E)?E.map((D,c)=>s().createElement("p",{key:c},D)):E)),s().createElement("div",{className:"".concat(a,"-img-action")},this.renderImgAction())):null}}l.defaultProps={prefixCls:"display-content",content:""},d.Z=(0,P.Z)()(l)},70110:function(N,d,e){"use strict";var y=e(12924),s=e.n(y),P=e(84874),o=e(27114);class h extends y.Component{constructor(i){super(i);this.state={}}render(){var i=this.props.cardList,t=i===void 0?[]:i;return s().createElement("div",{className:"guildLink_box"},t.map(a=>s().createElement("div",{className:"guildLink-container",key:a.id},s().createElement(o.Z,{to:a.link,className:"guildLink_card"},s().createElement("div",{className:"guildLink_card-bg",style:{background:a.backgroundColor||"#fff"}},s().createElement(P.Z,{iconClass:a.iconClass,size:"20px",color:a.color})),s().createElement("div",{className:"guild-card-title"},a.title)))))}}d.Z=h},22294:function(N,d,e){"use strict";var y=e(57663),s=e(71577),P=e(12924),o=e.n(P),h=e(38642);class l extends P.Component{constructor(t){super(t);this.state={}}backCommunityHome(){(0,h.eJ)({url:"/community"})}render(){var t=this.props.isShowHeader;return o().createElement("div",{className:"layer-layout-box"},t&&o().createElement("div",{className:"layer-layout-box-header"},o().createElement(s.Z,{onClick:this.backCommunityHome,type:"primary"},"\u8FD4\u56DE\u9996\u9875")),o().createElement("div",{className:"layer-layout-container"},this.props.children))}}l.defaultProps={isShowHeader:!1},d.Z=l},16645:function(N,d,e){"use strict";var y=e(71153),s=e(60331),P=e(49111),o=e(19650),h=e(94233),l=e(67869),i=e(12924),t=e.n(i),a=e(91768),m=e(3179),E=e(27114),D=e(38642),c=e(84874);class u extends i.Component{constructor(v){super(v);this.state={}}render(){var v,B,S,T,p=this.props,r=p.detail,K=p.t,j=p.isQuestion,A=j===void 0?!0:j,F=p.showUser,q=F===void 0?!1:F,Y=p.showSpace,ee=Y===void 0?!1:Y,G=p.isAnswer,L=G===void 0?!1:G,W=p.isSearch,te=W===void 0?!1:W,$;L?$=r.answer.content?JSON.parse(r.answer.content).content:r.answer.content:$=r.content?JSON.parse(r.content).content:r.content;var X=A||L?"/community/questionDetail":"/community/articleDetail",C=K(A||L?"community.publishQuesTips":"community.publishArtTips"),R=A?r.lastDate:L?(v=r.answer)===null||v===void 0?void 0:v.lastDate:r.createAt;return t().createElement("div",{className:"list-item-box"},q&&t().createElement(o.Z,{size:8,align:"center",className:"list-item-container"},t().createElement(l.C,{size:36,src:((B=r.author)===null||B===void 0?void 0:B.avatar)||"".concat("https://oss.coolcollege.cn","/1790708689137700864.png")}),t().createElement("span",{className:"list_item_name"},r.author.name),t().createElement("div",{className:"list-item_type"},C)),t().createElement("header",{className:"list-item-box-header"},t().createElement(E.Z,{to:"".concat(X,"?id=").concat(r.id),className:"list-item-box-title"},r.isTop===1&&!te&&t().createElement(s.Z,{color:"blue"},K("community.prePosition")),r.title),ee&&t().createElement("div",null,t().createElement(E.Z,{to:"/community/myCircle?id=".concat(r==null||(S=r.space)===null||S===void 0?void 0:S.id),className:"list-item-box-space"},r==null||(T=r.space)===null||T===void 0?void 0:T.name))),$&&t().createElement("div",{className:"list-item-box-content",onClick:()=>{(0,D.eJ)({url:"".concat(X,"?id=").concat(r.id)})}},t().createElement(m.Z,{content:$})),t().createElement("div",{className:"list-item-option"},t().createElement(o.Z,{size:10},!L&&t().createElement("div",{type:"default",className:"list-item-option-btn"},t().createElement(o.Z,{size:3},t().createElement(c.Z,{iconClass:A?"icon-huidashu":"icon-Comment",size:"14px"}),t().createElement("span",null,A?r.answerCount:r.commentCount))),!A&&t().createElement("div",{type:"default",className:"list-item-option-btn"},t().createElement(o.Z,{size:3},t().createElement(c.Z,{iconClass:"icon-dianzan",size:"14px"}),t().createElement("span",null,L?r.answer.stars:r.stars)))),t().createElement("div",{className:"list-item-time"},(0,D.pi)(R))))}}d.Z=(0,a.Z)()(u)},37164:function(N,d,e){"use strict";e.r(d),e.d(d,{default:function(){return X}});var y=e(57663),s=e(71577),P=e(13254),o=e(14277),h=e(34792),l=e(48086),i=e(57361),t=e(88986),a=e(33565),m=e(18106),E=e(88108),D=e(9754),c=e.n(D),u=e(12924),n=e.n(u),v=e(91768),B=e(76651),S=e(22294),T=e(16645),p=e(70110),r=e(49111),K=e(19650),j=e(2390),A=e(84874);function F(C){var R=C.t,I=C.title,ae=C.extraStyle,z=C.linkTo,V=C.data,x=V===void 0?{}:V,b=C.iconClass;return n().createElement("div",{className:"census-bar-box",style:ae||null},I&&n().createElement("header",{className:"census-bar-box-header"},n().createElement("div",{className:"census-bar-box-title"},I),z&&n().createElement(j.rU,{to:z,className:"census-bar-box-link"},">")),n().createElement("div",{className:"census-bar-box-content"},n().createElement(K.Z,null,n().createElement(A.Z,{iconClass:b||x.avatar,size:"36px"}),n().createElement("div",{className:"census-bar-box-content-title"},x.tagName))),n().createElement("footer",{className:"census-bar-box-footer"},n().createElement(K.Z,null,n().createElement("p",{className:"census-bar-box-footer-item"},R("community.article"),":",x.articleCount||0),n().createElement("p",{className:"census-bar-box-footer-item"},R("community.problem"),":",x.questionCount||0))))}var q=(0,v.Z)()(F),Y=e(41279),ee=e(38642),G=e(4408),L=e(10237),W=e(37055),te=E.Z.TabPane;function $(C){var R,I=B.m8.location.query,ae=I==null||(R=I.type)===null||R===void 0?void 0:R.toLowerCase(),z=I.tagName,V=(0,u.useState)([]),x=(0,a.Z)(V,2),b=x[0],me=x[1],ue=(0,u.useState)({}),ne=(0,a.Z)(ue,2),de=ne[0],Ee=ne[1],ve=(0,u.useState)([]),se=(0,a.Z)(ve,2),_e=se[0],De=se[1],ye=(0,u.useState)(ae||"question"),le=(0,a.Z)(ye,2),k=le[0],Pe=le[1],he=(0,u.useState)({page:0,size:15}),re=(0,a.Z)(he,2),Q=re[0],oe=re[1],Ce=(0,u.useState)(0),ie=(0,a.Z)(Ce,2),fe=ie[0],Oe=ie[1],Z=C.t,pe=f=>{Pe(f),oe((0,t.Z)((0,t.Z)({},Q),{},{page:0}))},w=function(){var f=(0,i.Z)(c().mark(function M(){var g,U,_,H;return c().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return k==="question"?g=W.ZP.community.getTopicQuestList():g=W.ZP.community.getTopicArticleList(),J.next=3,L.WY.get({url:g,params:(0,t.Z)((0,t.Z)({},Q),{},{tagName:z})});case 3:U=J.sent,_=U.data,_.code===0?me(((H=_.data)===null||H===void 0?void 0:H.content)||[]):l.default.error(_.msg||Z("community.isError"));case 6:case"end":return J.stop()}},M)}));return function(){return f.apply(this,arguments)}}(),Me=()=>{oe((0,t.Z)((0,t.Z)({},Q),{},{page:Q.page+1}))},ge=function(){var f=(0,i.Z)(c().mark(function M(){var g,U,_;return c().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return g=W.ZP.community.getTopicResource(),O.next=3,L.WY.get({url:g,params:{tagName:z}});case 3:U=O.sent,_=U.data,_.code===0?(Ee(_.data),Oe(_.data.totalElements)):l.default.error(_.msg||Z("community.isError"));case 6:case"end":return O.stop()}},M)}));return function(){return f.apply(this,arguments)}}(),ce=function(){var f=(0,i.Z)(c().mark(function M(){var g,U,_;return c().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return g=W.ZP.community.getTopicRecommend(),O.next=3,L.WY.post({url:g});case 3:U=O.sent,_=U.data,_.code===0?De(_.data.splice(0,5)):l.default.error(_.msg||Z("community.isError"));case 6:case"end":return O.stop()}},M)}));return function(){return f.apply(this,arguments)}}(),Te=f=>{(0,ee.eJ)({url:f}),w(),window.location.reload()};(0,u.useEffect)(()=>{w(),ge(),ce()},[]),(0,u.useEffect)(()=>{w()},[k]),(0,u.useEffect)(()=>{w()},[Q]);var Le=[{key:"question",tab:Z("community.question")},{key:"article",tab:Z("community.article")}],Ze=[{title:Z("community.addQuestion"),link:"/community/questionAndAnswer",id:1,iconClass:"icon-tigewenti",color:"#1890FF",backgroundColor:"rgba(4, 132, 252, 0.25)"},{title:C.t("community.addArticle"),link:"/community/publishArticle",id:2,iconClass:"icon-fabiaowenzhang",color:"#2EB8BD",backgroundColor:"rgba(52, 184, 190, 0.25)"}];return n().createElement(S.Z,null,n().createElement(G.Z,{title:C.t("documentTitle.topicDetail")}),n().createElement("div",{className:"topic-detail-list-box"},n().createElement(E.Z,{defaultActiveKey:k,onChange:pe},Le.map(f=>n().createElement(te,{tab:f.tab,key:f.key},b.length>0?b.map((M,g)=>n().createElement(T.Z,{key:M.id,detail:M,index:g,isQuestion:k==="question",showUser:!0,showSpace:!0})):n().createElement(o.Z,null),b.length<fe&&n().createElement("div",{className:"topic-detail-list-item"},n().createElement(s.Z,{onClick:()=>Me()},Z("course.loadMore"))))))),n().createElement("div",{className:"topic-detail-list-slide"},n().createElement(p.Z,{cardList:Ze,span:12}),n().createElement(q,{title:Z("community.topicResource"),data:(0,t.Z)((0,t.Z)({},de),{},{tagName:I.tagName}),extraStyle:{marginTop:"12px"},iconClass:"icon-icon_huati"}),n().createElement(Y.Z,{title:Z("community.aboutTopicRecommend"),dataList:_e,handleChange:ce,handleLink:Te})))}var X=(0,v.Z)()($)},41279:function(N,d,e){"use strict";var y=e(13254),s=e(14277),P=e(49111),o=e(19650),h=e(12924),l=e.n(h),i=e(91768),t=e(84874);function a(m){var E=m.title,D=m.dataList,c=D===void 0?[]:D,u=m.t,n=m.handleChange,v=m.handleLink,B=()=>{n()},S=T=>{!v||v(T)};return l().createElement("div",{className:"topic-recommend-box"},l().createElement("header",{className:"topic-recommend-header"},l().createElement("div",{className:"topic-recommend-title"},E),c.length>0&&l().createElement("div",{className:"topic-recommend-change",onClick:B},l().createElement(t.Z,{iconClass:"icon-huanyihuan",size:"14px"}),u("community.change"))),c.length>0?c.map((T,p)=>l().createElement("div",{className:"topic-recommend-content",key:p},l().createElement(o.Z,null,l().createElement(t.Z,{iconClass:"icon-icon_huati",size:"14px"}),l().createElement("div",{className:"topic-recommend-tag",onClick:()=>S("/community/topicDetail?type=".concat("QUESTION","&tagName=",T))},T)))):l().createElement(s.Z,null))}d.Z=(0,i.Z)()(a)}}]);