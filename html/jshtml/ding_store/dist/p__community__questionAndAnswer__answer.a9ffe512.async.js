(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[581],{4408:function(A,c,t){"use strict";var _=t(12924),s=t.n(_),E=t(28216),i=t(17780),m=t(38642),r=e=>({userInfo:e.user}),u=e=>{var a=e.title;return(0,i.xX)()&&setTimeout(()=>{document.title=a},0),(0,_.useEffect)(()=>{if(a&&document.title!==a&&setTimeout(()=>{document.title=a},0),(0,m.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var l=document.querySelector(".zoom-report");l&&(l.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[a]),s().createElement(s().Fragment,null)};u.defautProps={title:""},c.Z=(0,E.$j)(r)(u)},27114:function(A,c,t){"use strict";var _=t(62029),s=t(12924),E=t.n(s),i=t(38642),m=r=>{var u=()=>{(0,i.eJ)({url:"".concat(r.to)})};return E().createElement("a",(0,_.Z)({onClick:()=>u()},r),r.children)};c.Z=m},3179:function(A,c,t){"use strict";var _=t(12924),s=t.n(_),E=t(91768),i=t(85589),m=t.n(i);class r extends s().Component{constructor(e){super(e);this.renderImgAction=()=>{var a=this.state.imgUrls,l=a.length;return a.length>4&&(a=a.slice(0,4)),a.map((d,D)=>s().createElement("div",{className:"img-box",key:D},s().createElement("img",{src:d,alt:""}),D===3&&l>4&&s().createElement("div",{className:"mask"},"+".concat(l-4))))},this.state={imgUrls:[],text:""}}componentDidMount(){var e=this.props.content,a=e===void 0?"":e;if(typeof a=="object"){var l=a.content.split("<br/>");this.setState({imgUrls:a.imgs,text:l})}else{var d=m().createEditorState(a),D=d.toHTML(),O=document.createElement("div");O.innerHTML=D;for(var T=O.getElementsByTagName("img"),I=[],P=0;P<T.length;P++)I.push(T[P].src);this.setState({imgUrls:I,text:O.innerText})}}render(){var e=this.props,a=e.prefixCls,l=e.content,d=this.state.text;return l?s().createElement("div",{className:"".concat(a)},s().createElement("div",{className:"".concat(a,"-text-action")},s().createElement("div",null,Array.isArray(d)?d.map((D,O)=>s().createElement("p",{key:O},D)):d)),s().createElement("div",{className:"".concat(a,"-img-action")},this.renderImgAction())):null}}r.defaultProps={prefixCls:"display-content",content:""},c.Z=(0,E.Z)()(r)},22294:function(A,c,t){"use strict";var _=t(57663),s=t(71577),E=t(12924),i=t.n(E),m=t(38642);class r extends E.Component{constructor(e){super(e);this.state={}}backCommunityHome(){(0,m.eJ)({url:"/community"})}render(){var e=this.props.isShowHeader;return i().createElement("div",{className:"layer-layout-box"},e&&i().createElement("div",{className:"layer-layout-box-header"},i().createElement(s.Z,{onClick:this.backCommunityHome,type:"primary"},"\u8FD4\u56DE\u9996\u9875")),i().createElement("div",{className:"layer-layout-container"},this.props.children))}}r.defaultProps={isShowHeader:!1},c.Z=r},16645:function(A,c,t){"use strict";var _=t(71153),s=t(60331),E=t(49111),i=t(19650),m=t(94233),r=t(67869),u=t(12924),e=t.n(u),a=t(91768),l=t(3179),d=t(27114),D=t(38642),O=t(84874);class T extends u.Component{constructor(P){super(P);this.state={}}render(){var P,R,B,W,p=this.props,n=p.detail,K=p.t,Z=p.isQuestion,o=Z===void 0?!0:Z,h=p.showUser,y=h===void 0?!1:h,f=p.showSpace,L=f===void 0?!1:f,v=p.isAnswer,M=v===void 0?!1:v,C=p.isSearch,S=C===void 0?!1:C,g;M?g=n.answer.content?JSON.parse(n.answer.content).content:n.answer.content:g=n.content?JSON.parse(n.content).content:n.content;var N=o||M?"/community/questionDetail":"/community/articleDetail",U=K(o||M?"community.publishQuesTips":"community.publishArtTips"),$=o?n.lastDate:M?(P=n.answer)===null||P===void 0?void 0:P.lastDate:n.createAt;return e().createElement("div",{className:"list-item-box"},y&&e().createElement(i.Z,{size:8,align:"center",className:"list-item-container"},e().createElement(r.C,{size:36,src:((R=n.author)===null||R===void 0?void 0:R.avatar)||"".concat("https://oss.coolcollege.cn","/1790708689137700864.png")}),e().createElement("span",{className:"list_item_name"},n.author.name),e().createElement("div",{className:"list-item_type"},U)),e().createElement("header",{className:"list-item-box-header"},e().createElement(d.Z,{to:"".concat(N,"?id=").concat(n.id),className:"list-item-box-title"},n.isTop===1&&!S&&e().createElement(s.Z,{color:"blue"},K("community.prePosition")),n.title),L&&e().createElement("div",null,e().createElement(d.Z,{to:"/community/myCircle?id=".concat(n==null||(B=n.space)===null||B===void 0?void 0:B.id),className:"list-item-box-space"},n==null||(W=n.space)===null||W===void 0?void 0:W.name))),g&&e().createElement("div",{className:"list-item-box-content",onClick:()=>{(0,D.eJ)({url:"".concat(N,"?id=").concat(n.id)})}},e().createElement(l.Z,{content:g})),e().createElement("div",{className:"list-item-option"},e().createElement(i.Z,{size:10},!M&&e().createElement("div",{type:"default",className:"list-item-option-btn"},e().createElement(i.Z,{size:3},e().createElement(O.Z,{iconClass:o?"icon-huidashu":"icon-Comment",size:"14px"}),e().createElement("span",null,o?n.answerCount:n.commentCount))),!o&&e().createElement("div",{type:"default",className:"list-item-option-btn"},e().createElement(i.Z,{size:3},e().createElement(O.Z,{iconClass:"icon-dianzan",size:"14px"}),e().createElement("span",null,M?n.answer.stars:n.stars)))),e().createElement("div",{className:"list-item-time"},(0,D.pi)($))))}}c.Z=(0,a.Z)()(T)},44003:function(A,c,t){"use strict";t.r(c),t.d(c,{default:function(){return K}});var _=t(13254),s=t(14277),E=t(34792),i=t(48086),m=t(57361),r=t(33565),u=t(9754),e=t.n(u),a=t(12924),l=t.n(a),d=t(91768),D=t(22294),O=t(76651),T=t(10237),I=t(37055),P=t(16645);class R extends a.Component{constructor(o){super(o);this.state={questionList:[]}}componentDidMount(){this.getMyQuestionList()}getMyQuestionList(){var o=this;return(0,m.Z)(e().mark(function h(){var y,f,L,v;return e().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return y=O.m8.location.query,f=I.ZP.community.getQuestionList(),C.next=4,T.WY.get({url:f,params:{space:y.id}});case 4:L=C.sent,v=L.data,v.code===0?o.setState({questionList:v.data.content}):i.default.error(v.msg);case 7:case"end":return C.stop()}},h)}))()}render(){var o=this.state.questionList,h=o===void 0?[]:o;return l().createElement("div",null,h.length>0?h.map((y,f)=>l().createElement(P.Z,{key:y.id,detail:y,index:f,isQuestion:!0,showUser:!0,showSpace:!0})):l().createElement(s.Z,null))}}var B=R,W=t(88962),p=t(4408);function n(Z){var o=(0,a.useState)([]),h=(0,r.Z)(o,2),y=h[0],f=h[1],L=Z.t;return(0,a.useEffect)(()=>{function v(){return M.apply(this,arguments)}function M(){return M=(0,m.Z)(e().mark(function C(){var S,g,N,U;return e().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return S=I.ZP.community.getQuestionList(),g={page:0,size:5},x.next=4,T.WY.get({url:S,params:g});case 4:N=x.sent,U=N.data,U.code===0?f(U.data.content):i.default.error(U.msg||L("community.isError"));case 7:case"end":return x.stop()}},C)})),M.apply(this,arguments)}v()},[]),l().createElement(D.Z,null,l().createElement(p.Z,{title:L("documentTitle.questionsList")}),l().createElement("div",{className:"answer-layout-content"},l().createElement(B,null)),l().createElement("div",{className:"answer-layout-slide"},l().createElement("div",{className:"answer-layout-slide-box"},l().createElement("div",{className:"detail_list_recommend"},L("community.relatedQuestion")),l().createElement("ul",null,y.length===0?l().createElement(s.Z,null):y.map(v=>l().createElement(W.Z,{key:v.id,item:v}))))))}var K=(0,d.Z)()(n)},88962:function(A,c,t){"use strict";var _=t(12924),s=t.n(_),E=t(91768),i=t(38642);function m(r){var u=r.t,e=r.item,a=()=>{(0,i.eJ)({url:"/community/questionDetail?id=".concat(e.id)}),window.location.reload()};return s().createElement("li",{className:"question_list_item"},s().createElement("p",{className:"question_list_item_top",onClick:a},e.title),s().createElement("p",{className:"question_list_item_bottom"},e.answerCount||0,u("community.answerCount")))}c.Z=(0,E.Z)()(m)}}]);