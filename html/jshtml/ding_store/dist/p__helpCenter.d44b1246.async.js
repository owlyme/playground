(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[2582],{4408:function(U,f,t){"use strict";var C=t(12924),g=t.n(C),L=t(28216),e=t(17780),E=t(38642),y=h=>({userInfo:h.user}),P=h=>{var p=h.title;return(0,e.xX)()&&setTimeout(()=>{document.title=p},0),(0,C.useEffect)(()=>{if(p&&document.title!==p&&setTimeout(()=>{document.title=p},0),(0,E.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var I=document.querySelector(".zoom-report");I&&(I.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[p]),g().createElement(g().Fragment,null)};P.defautProps={title:""},f.Z=(0,L.$j)(y)(P)},26714:function(U,f,t){"use strict";t.r(f),t.d(f,{default:function(){return j}});var C=t(88983),g=t(47933),L=t(12924),e=t.n(L),E=t(91768),y=t(28216),P=t(30887),h=t(99210),p=t(3515),I=t(86288),z=t(57663),V=t(71577),D=t(88986),S=t(57361),x=t(9754),m=t.n(x),B=t(78138),T=t.n(B),K=t(76651),M=t(37055),Z=t(10237),O={getUpdateVersionList:M.ZP.updateVersion.getUpdateVersionList};function N(v){var s=O.getUpdateVersionList(),a=(0,D.Z)({user_id:window.localStorage.getItem("uid")},v);return Z.WY.get({url:s,params:a})}function A(){return Z.WY.get({url:M.ZP.workBench.oneBatchRead(),params:{user_id:window.localStorage.getItem("uid")}})}class Y extends e().Component{constructor(s){var a;super(s);a=this,this.onScrollEvent=()=>{var n=this.state.hasNextPage;if(this.scrollRef&&n){var i=this.scrollRef.scrollTop,r=this.scrollRef.clientHeight,d=this.scrollRef.scrollHeight;i+r>=d&&this.loadMore()}},this.handleClick=function(){var n=(0,S.Z)(m().mark(function i(r){var d,l,u;return m().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return d={id:r.item.props.id},l=a.state.versionList,l.forEach((R,w)=>{r.item.props.id===R.id&&(R.status=1,a.setState({selectedKeys:[w.toString()]}))}),c.next=5,N(d);case 5:u=c.sent,a.setState({versionDetail:u.data.data,versionList:l},()=>{a.props.dispatch({type:"updateVersion/getIconTips",payload:{userId:a.props.userId}})});case 7:case"end":return c.stop()}},i)}));return function(i){return n.apply(this,arguments)}}(),this.getInfoByUserId=(0,S.Z)(m().mark(function n(){var i,r,d,l,u;return m().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,N(a.state.params);case 2:i=c.sent,r=i.data.data,d=r.list,l=r.hasNextPage,u=a.state.versionList,a.setState({versionList:[...u,...d],hasNextPage:l});case 6:case"end":return c.stop()}},n)})),this.loadMore=()=>{var n=this.state.params;this.setState({params:(0,D.Z)((0,D.Z)({},n),{},{page_num:n.page_num+1})},()=>{this.getInfoByUserId()})},this.handleOneKeyRead=(0,S.Z)(m().mark(function n(){var i,r;return m().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=a.state.versionList,l.next=3,A();case 3:r=l.sent,r.data.code===0&&(i.forEach(u=>{u.status=1}),a.getInfoByUserId());case 5:case"end":return l.stop()}},n)})),this.state={versionList:[],versionDetail:{},selectedKeys:[],selectedKeys:["0"],params:{page_num:1,page_size:20},hasNextPage:!0}}componentDidMount(){var s=this;return(0,S.Z)(m().mark(function a(){var n,i,r,d,l;return m().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=K.m8.location.query.id,o.next=3,s.getInfoByUserId();case 3:if(i=s.state.versionList,!n){o.next=7;break}return s.handleClick({item:{props:{id:n}}}),o.abrupt("return");case 7:if(!(i&&i.length)){o.next=15;break}return r={id:n||i[0].id},d=i,d[0].status=1,o.next=13,N(r);case 13:l=o.sent,s.setState({versionDetail:l.data.data,versionList:d},()=>{s.props.dispatch({type:"updateVersion/getIconTips",payload:{userId:s.props.userId}})});case 15:case"end":return o.stop()}},a)}))()}render(){var s={height:"100%",padding:"24px",minHeight:"800px"},a={height:"89px",paddingTop:"12px"},n=this.state,i=n.versionList,r=n.versionDetail,d=n.hasNextPage,l=n.selectedKeys,u=this.props.t;return e().createElement("div",{className:"update__version__container"},e().createElement("div",{className:"update__version__container__content"},e().createElement("aside",{className:"sider__bar",onScrollCapture:this.onScrollEvent,ref:o=>{this.scrollRef=o}},e().createElement(I.Z,{target:()=>document.querySelector(".sider__bar")},e().createElement("div",{className:"update-one-read"},e().createElement(V.Z,{type:"default",onClick:()=>this.handleOneKeyRead()},this.props.t("common.oneRead")))),e().createElement(h.Z,{style:s,onClick:this.handleClick,selectedKeys:l},i&&i.length&&i.map((o,c)=>e().createElement(h.Z.Item,{style:a,key:c.toString(),id:o.id},e().createElement("div",{className:"version"},e().createElement("span",{className:"dot ".concat(o.status===0?"unread__dot":"read__dot")}),e().createElement("span",{className:"version__digest"},o.version_number)),e().createElement("div",{className:"release__time"},u("study.releaseTime"),"\uFF1A",T()(o.begin_date).format("YYYY-MM-DD HH:mm:ss")))),!d&&e().createElement("div",{className:"no-more"},u("updateVersion.noMore")))),e().createElement("section",{className:"update__detail"},r&&e().createElement("div",{className:"update__detail__title"},e().createElement("div",{className:"version__digest"},r.version_number),e().createElement("div",{className:"release__time"},u("study.releaseTime"),"\uFF1A",T()(r.begin_date).format("YYYY-MM-DD HH:mm:ss"))),r&&e().createElement("div",{className:"version__content"},e().createElement("h5",null,u("updateVersion.summary")),e().createElement("div",{dangerouslySetInnerHTML:{__html:r.digest||"--"}}),e().createElement("h5",null,u("shareInfo.shareContent")),e().createElement("div",{dangerouslySetInnerHTML:{__html:r.content||"--"}})))))}}var $=(0,y.$j)(v=>{var s=v.user;return{userId:s.id||window.localStorage.getItem("uid")}})((0,E.Z)()(Y)),H=t(4408);class W extends e().Component{constructor(s){super(s);this.onChange=a=>{this.setState({value:a.target.value})},this.state={value:"updateVersion"}}componentDidMount(){this.props.history.listen(s=>{this.setState({value:s.query.type})})}render(){var s=this.state.value,a=this.props.t;return e().createElement("div",{className:"help__notice__container"},e().createElement(H.Z,{title:this.props.t("documentTitle.upgradeAnnouncement")}),e().createElement("div",{className:"help__notice__container__content"},e().createElement(g.ZP.Group,{value:s,buttonStyle:"solid",onChange:this.onChange},e().createElement(g.ZP.Button,{value:"updateVersion"},a("updateVersion.upgradeAnnouncement"))),e().createElement($,null)))}}var F=v=>{var s=v.advancedSetting,a=v.user;return{themeColor:s.themeColor,user:a}},j=(0,y.$j)(F)((0,E.Z)()(W))}}]);
