(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[9142],{30389:function(J,j,e){"use strict";e.d(j,{Z:function(){return g}});var b=e(62029),H=e(20228),_=e(11382),m=e(12924),l=e.n(m),u=e(91768),B=e(80991),c={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},x=e(62615),d=e(52670);class S extends l().Component{render(){var s=this.props,t=s.values,n=s.mode,o=s.onlyChooseDept,a=s.reserveUser,f=s.t,h=s.orgProps,E=s.rangeAuth,O=s.projectId,F=s.onCancel,z=s.onlyCreateUser;return l().createElement(B.l0,{className:"cl-form"},l().createElement(B.gN,(0,b.Z)({component:x.ww,displayType:"Custom",showSectitle:!1,name:"employeeRange",label:f("common.visibleRange"),defaultFieldList:t.employeeRange,validate:d.FI,mode:n,rangeAuth:E,onlyChooseDept:o,onlyCreateUser:z,orgProps:h,reserveUser:a,projectId:O,onCancel:F,qwTicketShow:!0},c)))}}var V=(0,u.Z)()(S),N=e(18329),T=e(34773);class v extends l().Component{constructor(){super(...arguments);this.initRefFormik=s=>{this.refFormik=s},this.handleBeforeCreate=()=>{var s=this.refFormik;s.submitForm(),s.runValidations().then(t=>{if(!Object.keys(t).length){var n=s.state.values.employeeRange,o=(0,T.b)(n.rangeList),a={qyWeChatVo:n.qyWeChatVo,id:this.props.actionId,isAll:n.rangeType,groupIds:n.rangeType===2?o.groupIds.join(","):"",departmentIds:n.rangeType===2?o.deptIds.join(","):"",userIds:n.rangeType===2?o.userIds.join(","):"",postIds:n.rangeType===2?o.postIds.join(","):"",clusterIds:n.rangeType===2?o.clusterIds.join(","):"",qy_we_chat_vo:n.qyWeChatVo};this.props.onCreate(a)}})},this.handleBeforeCancel=()=>{var s=this.props.onCancel;s()}}render(){var s=this.props,t=s.visible,n=s.initialParams,o=s.isLoading,a=s.tipInfo,f=s.mode,h=s.onlyChooseDept,E=s.reserveUser,O=E===void 0?[]:E,F=s.t,z=s.title,P=s.orgProps,D=s.rangeAuth,M=s.projectId,K=s.onCancel,Q=s.onlyCreateUser,A=s.size;return o?l().createElement(_.Z,{size:"large"}):l().createElement(N.ZP,{wrapClassName:"cl-employee-selector-modal",visible:t,title:z||F("component.changeUser"),okText:F("common.ok"),cancelText:F("common.cancel"),size:A,onCancel:this.handleBeforeCancel,onOk:this.handleBeforeCreate},o?l().createElement(_.Z,{size:"large"}):l().createElement(B.J9,{ref:this.initRefFormik,initialValues:n,render:Z=>l().createElement(V,(0,b.Z)({},Z,{mode:f,rangeAuth:D,orgProps:P,onlyChooseDept:h,onlyCreateUser:Q,reserveUser:O,projectId:M,onCancel:K}))}),a&&l().createElement("p",{style:{padding:"0 24px",wordBreak:"break-all",whiteSpace:"normal"}},a))}}v.defaultProps={visible:!1,initialParams:{employeeRange:{rangeType:1,rangeList:{dept:[],post:[],group:[],user:[],cluster:[]}}},tipInfo:"",isLoading:!1,mode:["all","part"],onlyChooseDept:!1,onlyCreateUser:!1,orgProps:{},onCancel:()=>{},onCreate:()=>{},size:"middle"};var g=(0,u.Z)()(v)},63848:function(J,j,e){"use strict";var b=e(36877),H=e(32969),_=e(12924),m=e.n(_),l=e(91768),u=e(56130);class B extends m().PureComponent{constructor(){super(...arguments);this.onChange=(x,d)=>{this.props.onChange(x,d)}}render(){var x=this.props,d=x.value,S=x.classify,V=x.showLabel,N=x.className,T=x.t,v=x.style;return m().createElement("div",{className:"classify-cascader ".concat(N)},V?m().createElement("span",{className:"classify-cascader-label"},T("component.selectClassifyLabel")):null,m().createElement(H.Z,{changeOnSelect:this.props.changeOnSelect,className:"classify-cascader-select ".concat(N),options:S,onChange:this.onChange,placeholder:T("component.selectClassifyLabel"),value:d,style:v,loadData:this.props.loadData}))}}B.defaultProps={showLabel:!0,changeOnSelect:!0,onChange:()=>{}},j.Z=(0,u.Z)((0,l.Z)()(B))},51697:function(J,j,e){"use strict";var b=e(22385),H=e(31097),_=e(33565),m=e(12924),l=e.n(m),u=e(28216),B=e(84874),c=d=>{var S=d.title,V=d.visible,N=d.placement,T=N===void 0?"top":N,v=d.children,g=v===void 0?null:v,I=d.isNewUser,s=I===void 0?"":I,t=d.closeGuide,n=d.guideStatus,o=(0,m.useState)(!1),a=(0,_.Z)(o,2),f=a[0],h=a[1],E=z=>l().createElement("div",{className:"guide-tooltip-title"},z,l().createElement("span",{onClick:O},l().createElement(B.Z,{iconClass:"icon-f-close",size:"12px",color:"#fff"})));(0,m.useEffect)(()=>{h(V)},[V]);var O=z=>{if(z.stopPropagation(),z.preventDefault(),h(!1),t){t();return}s==="true"&&d.dispatch({type:"shouldRenderHeaderGuide",payload:{headerGuideStatus:!0}}),F()},F=()=>{localStorage.setItem("guideStatus","false"),d.dispatch({type:"updateGuideStatus",payload:{guideStatus:"false"}})};return l().createElement(H.Z,{title:E(S),placement:T,visible:f&&n==="true"&&S},g)},x=d=>({guideStatus:d.advancedSetting.guideStatus,isNewUser:d.advancedSetting.isNewUser});j.Z=(0,u.$j)(x)(c)},64630:function(J,j,e){"use strict";var b=e(62029),H=e(62999),_=e(85733),m=e(12924),l=e.n(m),u=e(91768),B=e(10237),c=e(37055),x=e(25547),d=_.Z.TreeNode;class S extends l().Component{constructor(N){super(N);this.getPostTree=()=>{var T=c.ZP.OrgTree.getPostTree();B.WY.get({url:T}).then(v=>{var g=(0,x.NP)(v.data.posts,{id:"value",post_name:"postName"});this.setState({treeData:g})})},this.handleChange=(T,v,g)=>{this.props.onChange(typeof T=="undefined"?"":T,v,g)},this.renderTreeNodes=T=>T.map(v=>{var g=!0;return this.props.noChildSelect&&(g=v.post_type==="post"),v.children?l().createElement(d,{selectable:!this.props.noChildSelect,title:v.postName,key:v.id,value:v.id,isLeaf:!1,dataRef:v},this.renderTreeNodes(v.children)):l().createElement(d,{selectable:g,title:v.postName,dataRef:v,value:v.id,key:v.id,isLeaf:!0})}),this.renderTreeSelect=()=>{var T=this.props,v=T.t,g=T.defaultValue,I=g===void 0?[]:g,s=T.multiple,t=s===void 0?!1:s,n=T.width,o=n===void 0?180:n,a={showSearch:!1,style:{width:o},defaultValue:I,multiple:t,dropdownStyle:{maxHeight:300,overflow:"auto"},placeholder:v("component.choosePostTip"),allowClear:!0,disabled:this.props.disabled};return this.state.treeData.length>0?l().createElement(_.Z,(0,b.Z)({},a,{onChange:this.handleChange,className:this.props.className}),this.renderTreeNodes(this.state.treeData)):l().createElement("div",{style:{textAlign:"center"}})},this.state={treeData:[]}}componentDidMount(){this.getPostTree()}render(){return l().createElement("div",{className:"org-tree-container ".concat(this.props.className)},this.renderTreeSelect())}}S.defaultProps={disabled:!1,onChange:()=>{}},j.Z=(0,u.Z)()(S)},54792:function(J,j,e){"use strict";var b=e(62029),H=e(63185),_=e(9676),m=e(47673),l=e(4107),u=e(88986),B=e(12924),c=e.n(B),x=e(91768),d=e(59239),S=e(55446),V=e.n(S),N=e(18329),T=e(2396);class v extends c().Component{constructor(){super(...arguments);this.state={isChecked:!1},this.handleBeforeCreate=()=>{var s=this.props,t=s.form,n=s.id,o=s.onCreate,a=this.state.isChecked;t.validateFields((f,h)=>{if(!f){var E=(0,u.Z)({},h);a||(E.value=0);var O=(0,u.Z)((0,u.Z)({},E),{},{id:n});o(O),setTimeout(()=>{t.resetFields()},100)}})},this.handleBeforeCancel=()=>{var s=this.props,t=s.form,n=s.onCancel;n(),setTimeout(()=>{t.resetFields()},100)},this.checkScore=(s,t,n)=>{var o=this.props.t,a=this.state.isChecked;if(a&&(0,T.kh)(t)){n(o("component.setScoreRuleTip"));return}n()},this.handleCheckChange=s=>{this.setState({isChecked:s.target.checked})},this.renderItem=()=>{var s=this.props,t=s.form,n=s.initialValue,o=s.labelTxt,a=this.state.isChecked,f=t.getFieldDecorator,h={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18}}},E=a?f("value",{initialValue:n,rules:[{validator:this.checkScore}]})(c().createElement(l.Z,{maxLength:30,placeholder:""})):null,O=c().createElement(c().Fragment,null,c().createElement(_.Z,{checked:a,onChange:this.handleCheckChange},o));return c().createElement(d.Z.Item,(0,b.Z)({label:O},h),E)}}componentDidUpdate(s){this.props.visible&&this.props.visible!==s.visible&&this.setState({isChecked:!!this.props.initialValue})}render(){var s=this.props,t=s.visible,n=s.title,o=s.prefixCls;return c().createElement(N.ZP,{size:"small",visible:t,title:n,onCancel:this.handleBeforeCancel,onOk:this.handleBeforeCreate},c().createElement(d.Z,{className:"".concat(o),layout:"horizontal",colon:!1},this.renderItem(),c().createElement("div",{className:"".concat(o,"__children")},this.props.children)))}}v.defaultProps={prefixCls:"cl-setscore",id:"",visible:!1,title:"SetScore",labelTxt:"",initialValue:"",onCancel:()=>{},onCreate:()=>{}};var g=d.Z.create({name:"ClSetupBoxInModal"})(v);j.Z=(0,x.Z)()(g)},84009:function(J,j,e){"use strict";var b=e(62029),H=e(12924),_=e.n(H),m=e(11092),l=e.n(m),u=e(6793),B=()=>c=>class extends _().Component{constructor(){super(...arguments);this.state={initTableClassName:""},this.handleTableSticky=()=>{var d=(0,m.findDOMNode)(this.pageRef);this.pageRef.tableRef.offsetTop+46<=d.parentNode.scrollTop?this.pageRef.tableRef.className.indexOf("fixed-table-thead")===-1&&(this.pageRef.tableRef.className="".concat(this.pageRef.tableRef.className," fixed-table-thead"),this.resetThTdWidth()):this.pageRef.tableRef.offsetTop>d.parentNode.scrollTop&&(this.pageRef.tableRef.className=this.state.initTableClassName)},this.resetThTdWidth=()=>{var d=this.pageRef.tableRef.getElementsByTagName("thead")[0];d.style.width="".concat(this.pageRef.tableRef.offsetWidth,"px");var S=d.childNodes[0];d.childNodes[1]&&(d.childNodes[1]="".concat(this.pageRef.tableRef.offsetWidth,"px")),S.style.width="".concat(this.pageRef.tableRef.offsetWidth,"px");var V=this.pageRef.tableRef.getElementsByTagName("tbody")[0].childNodes,N=!1;if(V&&V.length){try{var T=V[0].getAttribute("class");T==="ant-table-placeholder"&&(N=!0)}catch(I){console.log(I)}if(!N){var v=V[0].childNodes;if(v&&v.length){var g=v&&v.length&&Array.prototype.slice.call(v).map(I=>I.offsetWidth);S.childNodes&&S.childNodes.length&&Array.prototype.slice.call(S.childNodes).forEach((I,s)=>{I.style.width="".concat(g[s],"px")}),g.map(I=>I)}}}}}componentDidMount(){var d=(0,m.findDOMNode)(this.pageRef);this.setState({initTableClassName:this.pageRef.tableRef.className}),d.parentNode.addEventListener("scroll",this.handleTableSticky),window.addEventListener("resize",this.resetThTdWidth)}componentDidUpdate(){(0,u.P2)(this.handleTableSticky,500)()}componentWillUnmount(){var d=(0,m.findDOMNode)(this.pageRef);d.parentNode.removeEventListener("scroll",this.handleTableSticky),window.removeEventListener("resize",this.resetThTdWidth)}render(){return _().createElement(c,(0,b.Z)({ref:d=>this.pageRef=d},this.props))}};j.Z=B},11449:function(J,j,e){"use strict";e.d(j,{Z:function(){return z}});var b=e(88986),H=e(33565),_=e(12924),m=e.n(_),l=e(3115),u=e(49111),B=e(19650),c=e(62029),x=e(57663),d=e(71577),S=e(91768),V=e(28216),N=e(37055),T=e(10237);function v(P){var D=N.ZP.getHelpContentByMenuKey(),M={key:P};return T.WY.get({url:D,params:M})}var g=e(74228),I=e.n(g),s=e(1164),t=e(76466),n=e(38642);class o extends m().Component{constructor(D){var M;super(D);M=this,this.getHelpContentByMenuKey=()=>{var K=this.props.defaultMenuKey;v(K).then(Q=>{var A=Q.data,Z=A.help_url,i=A.video_url;this.setState({videoUrl:i,helpUrl:Z})})},this.handleOpenHelpUrl=K=>{if((0,n.ve)()){window.open(K,"_blank");return}s.Z.targetTo({path:K,isExternalLink:!0})},this.handleOpenVideo=function(K){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M.props.t("helpCenter.video");M.setState(A=>({resourcePlayInfo:(0,b.Z)((0,b.Z)({},A.resourcePlayInfo),{},{resourceInfo:{originUrl:K,source:{FD:K,OD:K},contentType:"mp4"}}),previewInfo:(0,b.Z)((0,b.Z)({},A.previewInfo),{},{title:Q,visible:!0,onCancel:M.handleCancelPreview})}))},this.handleCancelPreview=()=>{var K=this.state.previewInfo;this.setState({resourcePlayInfo:{mode:"preview",watchType:"video",resourceInfo:{}},previewInfo:(0,b.Z)((0,b.Z)({},K),{},{visible:!1})})},this.state={helpUrl:"",videoUrl:"",resourcePlayInfo:{autoPlay:!0,draggable:!0,mode:"preview",resourceInfo:{},watchType:"video"},previewInfo:{visible:!1,destroyOnClose:!0,title:D.t("helpCenter.video")||"\u89C6\u9891\u6307\u5BFC",onCancel:()=>{}}}}componentDidMount(){this.getHelpContentByMenuKey()}render(){var D=this.state,M=D.helpUrl,K=D.resourcePlayInfo,Q=D.previewInfo,A=D.videoUrl,Z=this.props.t;return m().createElement("div",{className:I().helpCenter},A&&m().createElement(d.Z,{type:"link",className:I()["video-btn"],style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenVideo(A)},Z("helpCenter.video")),M&&m().createElement(d.Z,{type:"link",style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenHelpUrl(M)},Z("helpCenter.tutorial")),m().createElement(t.Z,(0,c.Z)({},K,{previewInfo:Q})))}}var a=P=>({defaultMenuKey:P.currentRoute.menuKey});o.defaultProps={defaultMenuKey:""};var f=(0,V.$j)(a)((0,S.Z)()(o));function h(P){var D=P.extra,M=localStorage.getItem("dingPersonnel"),K=sessionStorage.getItem("dingPersonnel");return m().createElement(B.Z,null,D,M!=="dingPersonnel"&&K!=="dingPersonnel"&&(0,n.eY)("COMMONEXTRA_HELP_CENTER")&&m().createElement(f,null))}var E=h,O=e(4408);function F(P){var D=(0,_.useState)({helpCenter:(0,n.eY)("HEAD_HELP_CENTER_BUT")}),M=(0,H.Z)(D,1),K=M[0],Q=P.pageContainerParams,A=Q===void 0?{}:Q,Z=P.noPadding,i=Z===void 0?!1:Z,y=P.isPersonal,w=y===void 0?!1:y,$=P.pageTitle,X=P.className,k=X===void 0?"":X,r={extra:K.helpCenter?m().createElement(E,{extra:A.extra}):A.extra},C=(0,b.Z)((0,b.Z)({},A),r);return m().createElement("div",{className:"page-container-content ".concat(i?"page-container-noPadding":""," ").concat(w?"page-container-content_personal_background":""," ").concat(k)},$&&m().createElement(O.Z,{title:$}),w?m().createElement(l.Z,null,P.children):m().createElement(l.Z,C,P.children))}var z=F},38369:function(J,j,e){"use strict";e.r(j),e.d(j,{default:function(){return A}});var b=e(57663),H=e(71577),_=e(88986),m=e(12924),l=e.n(m),u=e(91768),B=e(28216),c=e(76651),x=e(57068),d=e(84391),S=e(97593),V=e(84009),N=e(10237),T=e(37055),v=e(11449),g=e(72456),I=e(62117),s=e(4408),t=e(64262),n=e(64630);class o extends l().Component{constructor(){super(...arguments);this.handleDeptSelectChange=i=>{this.props.onSelectDept({value:i})},this.handlePostSelectChange=(i,y,w)=>{this.props.onSelectPost({value:i||"",type:i===""?"":w.triggerNode.props.dataRef.post_group_level?"postGroup":"post"})}}render(){var i=this.props.prefixCls;return l().createElement("section",{className:i},l().createElement(t.Z,{parentId:"",checkable:!1,asyncLoad:!0,treeSelect:!0,className:"cl-search-normal-width",handleTreeSelectChange:this.handleDeptSelectChange}),l().createElement(n.Z,{className:"cl-search-normal-width",onChange:this.handlePostSelectChange}))}}o.defaultProps={prefixCls:"postMap-monitor-page__content__query"};var a=o,f=e(14781),h=e(53431),E=e(62029),O=e(34669),F=e(82833),z=e(55285);class P extends l().Component{constructor(){super(...arguments);this.state={},this.columns=[{title:this.props.t("authentication.totalProgress"),dataIndex:"progress",key:"progress",width:164,render:i=>l().createElement(F.Z,{percent:+i,size:"small",status:i>=100?"success":"normal",strokeColor:i>=100?"#58D28B":""})},{title:this.props.t("authentication.levelProgress"),dataIndex:"complete_checkpoint_count",key:"complete_checkpoint_count",width:90,render:(i,y)=>"".concat(y.complete_checkpoint_count,"/").concat(y.checkpoint_total_count)},{title:this.props.t("common.certificate"),dataIndex:"certificate_count",key:"certificate_count",width:90},{title:this.props.t("common.credit"),dataIndex:"score",key:"score",width:90}],this.handleTableChange=(i,y)=>{this.props.onTableChange({current:i,pageSize:y})}}render(){var i=this.props,y=i.prefixCls,w=i.list,$=w===void 0?[]:w,X=i.loading,k=i.paginationParams,r=k===void 0?{}:k,C=i.headerTitle,p=i.toolBarRender,L=(0,_.Z)((0,_.Z)({},T.XE.INITIAL_PAGINATION),r);return l().createElement("section",{className:y},l().createElement("div",{className:"postMap-monitor-content-list"},l().createElement(z.Z,{columns:this.columns,rowKey:"id",dataSource:$,pagination:!1,loading:X,headerTitle:C,toolBarRender:p,tableUUID:"8574e382-a2bb-475b-a9a0-1acb1482addb"})),l().createElement("div",{className:"postMap-monitor-pagination-wrapper"},l().createElement(h.Z,(0,E.Z)({},L,{onChange:this.handleTableChange,className:"postMap-monitor-pagination"}))))}}P.defaultProps={prefixCls:"postMap-monitor-page__content__table"};var D=(0,u.Z)()(P),M=Z=>({userInfo:Z.user}),K={getTableList:T.ZP.PostMapMonitor.getTableList,exportTableList:T.ZP.PostMapMonitor.exportTableList};class Q extends l().Component{constructor(){super(...arguments);this.state={params:{keyword:"",page_number:1,page_size:20,post_id:"",department_id:"",post_group_id:""},tableLoading:!0,tableList:[],tableTotal:0},this.initData=()=>{this.initTableList()},this.initTableList=()=>{var i=x.parse(c.m8.location.search),y=i.id;this.setState({tableLoading:!0}),N.WY.get({url:K.getTableList({mapId:y}),params:this.state.params}).then(w=>{setTimeout(()=>{this.setState({tableLoading:!1,tableList:w.data.list,tableTotal:w.data.total})},300)})},this.handleQueryRowSearch=i=>{this.resetPagination().then(()=>{this.setState(y=>({params:(0,_.Z)((0,_.Z)({},y.params),{},{keyword:i})}),()=>{this.initTableList()})})},this.handleChangePagination=i=>{var y=i.current,w=i.pageSize;this.setState($=>({params:(0,_.Z)((0,_.Z)({},$.params),{},{page_number:y,page_size:w})}),()=>{this.initTableList()})},this.resetPagination=()=>new Promise(i=>{this.setState(y=>({params:(0,_.Z)((0,_.Z)({},y.params),{},{page_number:1,page_size:20})}),()=>{i()})}),this.handleSelectDept=i=>{var y=i.value;this.setState(w=>({params:(0,_.Z)((0,_.Z)({},w.params),{},{department_id:y})}),()=>{this.initTableList()})},this.handleSelectPost=i=>{var y=i.value,w=i.type;this.setState($=>({params:(0,_.Z)((0,_.Z)({},$.params),{},{post_group_id:w==="postGroup"?y:"",post_id:w==="post"?y:""})}),()=>{this.initTableList()})},this.handleExport=()=>{var i=x.parse(c.m8.location.search),y=i.id,w="",$=this.state.params;w="access_token=".concat(window.localStorage.getItem("token"),"&department_id=").concat($.department_id,"&post_id=").concat($.post_id,`
    &post_group_id=`).concat($.post_group_id,"&keyword=").concat($.keyword);var X="?".concat(w);(0,S.N)({page:"exportPostMap",props:this.props,query:X,rest:{mapId:y}})},this.renderExport=()=>l().createElement(H.Z,{type:"primary",icon:l().createElement(d.Z,null),onClick:this.handleExport},this.props.t("common.exportData")),this.renderOther=()=>l().createElement(a,{onSelectDept:this.handleSelectDept,onSelectPost:this.handleSelectPost}),this.renderLeftRow=()=>l().createElement(g.Z,{showBtn:!1,renderActionBtn:this.renderExport}),this.renderRightRow=()=>{var i=this.props.t;return l().createElement(I.Z,{showCheckbox:!1,onSearch:this.handleQueryRowSearch,inputPlaceholder:i("searchInputPlaceholder.userName")})}}componentDidMount(){this.initData()}render(){var i=this.props,y=i.prefixCls,w=i.t,$=this.state,X=$.tableTotal,k=$.tableList,r=$.tableLoading,C=$.params,p=x.parse(c.m8.location.search),L=p.postMapName,U=L===void 0?"":L,R={total:X,current:C.page_number,pageSize:C.page_size};return l().createElement(v.Z,{pageContainerParams:{header:{title:decodeURIComponent(U)}}},l().createElement(s.Z,{title:w("documentTitle.postMapMonitoring")}),l().createElement("div",{className:y},this.renderOther(),l().createElement("div",{className:"postMap-monitor-page__content",ref:W=>{this.tableRef=W}},l().createElement(D,{loading:r,paginationParams:R,list:k,onTableChange:this.handleChangePagination,onUpdateStatus:this.handleUpdateStatus,headerTitle:this.renderLeftRow(),toolBarRender:this.renderRightRow}))))}}Q.defaultProps={prefixCls:"postMap-monitor-page sticky-table"};var A=(0,B.$j)(M)((0,u.Z)()((0,V.Z)()(Q)))},72456:function(J,j,e){"use strict";var b=e(49111),H=e(19650),_=e(57663),m=e(71577),l=e(12924),u=e.n(l),B=e(28216),c=e(91768),x=e(84391),d=e(90631),S=e(49101),V=e(76651),N=e(31945),T=e(1164),v=e(51697),g=s=>{var t=s.user,n=s.currentRoute,o=s.advancedSetting;return{currentPath:n.path,allAuthRoutes:n.allAuthRoutes,userLng:t.lng,themeColor:o.themeColor,qyShield:t.qyShield}};class I extends u().Component{constructor(){super(...arguments);this.handleDownload=()=>{this.props.onDownload()},this.handleImport=()=>{this.props.onImport()},this.handleCreate=()=>{var t=this.props.tabLink;V.m8.push(t)},this.renderActionBtn=()=>{var t=this.props,n=t.prefixCls,o=t.actionText,a=t.t,f=t.tabLink,h=t.showBtn,E=t.renderActionBtn,O=t.newPage,F=t.popOverProps,z=F===void 0?[]:F,P=t.renderGuide,D=P===void 0?!1:P,M=t.showDownloadBtn,K=M===void 0?!1:M,Q=t.showImportBtn,A=Q===void 0?!1:Q,Z=t.showCreateBtn,i=Z===void 0?!0:Z,y=t.rowReverse,w=y===void 0?!1:y,$="".concat(n,"__action");if(!h&&E&&typeof E=="function")return u().createElement("div",{className:$},E());if(!h||!o)return null;var X=z.length?z[0].contentText:"";return u().createElement("div",{className:"".concat($," ").concat(w&&"row-reverse")},u().createElement(H.Z,{size:16},K&&u().createElement(m.Z,{icon:u().createElement(x.Z,null),onClick:this.handleDownload},a("common.exportData")),A&&u().createElement(m.Z,{icon:u().createElement(d.Z,null),onClick:this.handleImport},a("exam.importTemplate")),i&&O&&u().createElement(T.Z,{to:f},u().createElement(v.Z,{visible:X&&D,placement:"topLeft",title:X},u().createElement(m.Z,{type:"primary",id:"create-project-button",icon:u().createElement(S.Z,null)},o))),i&&!O&&u().createElement(m.Z,{type:"primary",id:"create-project-button",icon:u().createElement(S.Z,null),onClick:this.handleCreate},o)))},this.renderQueryRow=()=>{var t=this.props,n=t.queryRowParams,o=t.queryRowList,a=t.queryRowSelectedCourseIds,f=t.queryRowSelectedProjectIds,h=t.queryRowOnForceRender,E=t.queryRowOnClassifyChange,O=t.queryRowOnTypeChange,F=t.queryRowOnCourseTypeChange,z=t.queryRowAllowActions,P=t.showNum,D=P===void 0?1:P;return u().createElement(N.Z,{params:n,list:o,selectedCourseIds:a,selectedProjectIds:f,onForceRender:h,onClassifyChange:E,onTypeChange:O,onCourseTypeChange:F,allowActions:z,showNum:D,showRenderCondition:!1})},this.rendeExtraBtn=()=>{var t=this.props,n=t.t,o=t.extraBtnSelectedRowKeys,a=t.extraBtnHandleMultiVisibleRange;return u().createElement(m.Z,{disabled:o.length===0,onClick:a},n("courseManage.setTheVisibility"))}}render(){var t=this.props,n=t.prefixCls,o=t.wrapCls,a=t.showRenderQueryRow,f=t.showRendeExtraBtn;return u().createElement(u().Fragment,null,u().createElement("div",{className:"render_other"},u().createElement("header",{className:"".concat(n," ").concat(o)},u().createElement("section",{className:"".concat(n,"__radiocol")},this.renderActionBtn(),a&&this.renderQueryRow(),f&&this.rendeExtraBtn()))))}}I.defaultProps={prefixCls:"cl-listQueryRow",wrapCls:"",label:"",actionText:"add",showSearch:!0,showBtn:!0,newPage:!0,searchStylesProps:{},selectList:[],renderActionBtn:()=>null},j.Z=(0,B.$j)(g)((0,c.Z)()(I))},62117:function(J,j,e){"use strict";var b=e(63185),H=e(9676),_=e(43358),m=e(34041),l=e(88983),u=e(47933),B=e(12924),c=e.n(B),x=e(28216),d=e(91768),S=e(48479),V=e(2971),N=e(45601),T=e(7249),v=I=>{var s=I.user,t=I.currentRoute,n=I.advancedSetting;return{currentPath:t.path,allAuthRoutes:t.allAuthRoutes,userLng:s.lng,themeColor:n.themeColor,appType:s.appType,appId:s.appId}};class g extends c().Component{constructor(s){super(s);this.setPlaceholder=()=>{var t=this.props,n=t.currentPath,o=t.allAuthRoutes,a=t.userLng,f=this.state.language,h=o[n],E=this.props,O=E.appType,F=E.appId,z=localStorage.getItem("qyWechatBook"),P=O==="wx_app"&&z==="true"&&F==="9005";if(!!h){var D=f[a].searchInputPlaceholder,M="";h.menuKey==="studyTemplate"||h.menuKey==="examTemplate"?M=D.template:h.menuKey==="employee"||h.menuKey==="obligatory"||h.menuKey==="elective"||h.menuKey==="plan"||h.menuKey==="evaluation"||h.menuKey==="myEvaluationPlan"?M=D.task:h.menuKey==="studyProject"?M=P?D.byProjectName:D.byProjectNameOrCreator:h.menuKey==="management"?M=P?D.byTaskName:D.byTaskNameOrCreator:M=D[h.menuKey],this.setState({currentPlaceholder:M})}},this.handleRadiosChange=t=>{this.props.onRadiosChange(t.target.value)},this.handleSelectChange=t=>{this.props.onSelectChange(t)},this.handleSearch=(t,n)=>{this.props.onSearch(t,n)},this.handleChange=t=>{this.props.onCheckboxChange(t.target.checked)},this.renderRadios=()=>{var t=this.props,n=t.prefixCls,o=t.radioList,a=t.defaultRadioValue,f=t.radioValue;if(!o.length)return null;var h=a||o[0].value,E="".concat(n,"__radios");return c().createElement("div",{className:E},typeof f!="undefined"?c().createElement(u.ZP.Group,{defaultValue:h,value:f,onChange:this.handleRadiosChange},o.map(O=>c().createElement(u.ZP.Button,{key:O.value,value:O.value},O.name))):c().createElement(u.ZP.Group,{defaultValue:h,onChange:this.handleRadiosChange},o.map(O=>c().createElement(u.ZP.Button,{key:O.value,value:O.value},O.name))))},this.renderSelect=()=>{var t=this.props,n=t.prefixCls,o=t.selectList,a=t.defaultSelectValue;if(!o.length)return null;var f=a||o[0].value,h="".concat(n,"__select");return c().createElement("div",{className:h},c().createElement(m.Z,{defaultValue:f,onChange:this.handleSelectChange,style:{minWidth:100}},o.map(E=>c().createElement(m.Z.Option,{key:E.value,value:E.value},E.name))))},this.renderOther=()=>{var t=this.props,n=t.prefixCls,o=t.renderOther,a=t.showOther,f="".concat(n,"__other");if(a&&o&&typeof o=="function")return c().createElement("div",{className:f},o())},this.renderCheckbox=()=>{var t=this.props,n=t.prefixCls,o=t.t,a=t.label,f=t.showCheckbox,h=t.renderActionSelect,E="".concat(n,"__checkbox");return!f&&h&&typeof h=="function"?c().createElement("div",{className:E},h()):f?c().createElement("div",{className:E},c().createElement(H.Z,{onChange:this.handleChange},a||o("common.myCreated"))):null},this.renderSearch=()=>{var t=this.props,n=t.prefixCls,o=t.showSearch,a=t.inputPlaceholder,f=t.maxLength,h=f===void 0?400:f,E=t.value,O="".concat(n,"__search");if(!o)return null;var F=this.state.currentPlaceholder;return a?c().createElement("div",{className:O},c().createElement(S.Z,{onSearch:this.handleSearch,placeholder:a,width:272,maxLength:h})):c().createElement("div",{className:O},c().createElement(S.Z,{onSearch:this.handleSearch,placeholder:F,width:272,maxLength:h,value:E}))},this.renderSearchOther=()=>{var t=this.props.renderSearchOther;return t?t():null},this.state={language:{zh_cn:N.Z,en_us:V.Z,zh_hk:T.Z},currentPlaceholder:""}}componentDidMount(){this.setPlaceholder()}componentDidUpdate(s){s.userLng!==this.props.userLng&&this.setPlaceholder()}render(){var s=this.props,t=s.prefixCls,n=s.wrapCls,o=s.showRenderRadios,a=o===void 0?!0:o,f=s.showRenderSelect;return c().createElement(c().Fragment,null,c().createElement("div",{className:"render_other"},this.renderOther(),c().createElement("header",{className:"".concat(t," ").concat(n)},c().createElement("section",{className:"".concat(t,"__searchcol")},this.renderSearchOther(),this.renderCheckbox(),a&&this.renderRadios(),f&&this.renderSelect(),this.renderSearch()))))}}g.defaultProps={prefixCls:"cl-listQueryRow",wrapCls:"",label:"",showRadioList:!0,showCheckbox:!0,showSearch:!0,inputPlaceholder:"",defaultRadioValue:"",radioList:[],searchStylesProps:{},showRenderSelect:!1,selectList:[],renderActionBtn:()=>null,onRadiosChange:()=>{},onSearch:()=>{},onCheckboxChange:()=>{},renderSearchOther:()=>{}},j.Z=(0,x.$j)(v)((0,d.Z)()(g))},31945:function(J,j,e){"use strict";e.d(j,{Z:function(){return X}});var b=e(88983),H=e(47933),_=e(20228),m=e(11382),l=e(62029),u=e(30887),B=e(99210),c=e(59250),x=e(13013),d=e(57663),S=e(71577),V=e(63185),N=e(9676),T=e(71194),v=e(57016),g=e(88986),I=e(34792),s=e(48086),t=e(43358),n=e(34041),o=e(12924),a=e.n(o),f=e(28216),h=e(91768),E=e(57254),O=e(18329);class F extends a().Component{constructor(){super(...arguments);this.onCancel=()=>{this.props.showReferenceCourseList()}}render(){var r=this.props,C=r.visible,p=r.courseList,L=r.t;return a().createElement(O.ZP,{visible:C,title:L("common.tip"),onCancel:this.onCancel,onOk:this.onCancel},a().createElement("div",{className:"referenceWithOtherCourses"},a().createElement("div",{className:"referenceWithOtherCourses__tip"},L("course.deleteCourseTip")),p.map((U,R)=>a().createElement("div",{className:"referenceWithOtherCourses__item",key:R},p.length>1?"".concat(R+1,"\u3001"):null," ",U))))}}var z=(0,h.Z)()(F),P=e(10237),D=e(63848),M=e(58546),K=e(30389),Q=e(54792),A=e(86726),Z=e(37055),i=n.Z.Option,y={setClassify:Z.ZP.CourseManageList.setClassify,setScore:Z.ZP.CourseManageList.setScore,setBatchEmployee:Z.ZP.CourseManageList.setBatchEmployee,deleteCourse:Z.ZP.CourseManageList.deleteCourse,exportCourseView:Z.ZP.CourseManageList.exportCourseView,syncCourse:Z.ZP.CourseManageList.syncCourse},w=k=>({qyShield:k.user.qyShield});class $ extends a().Component{constructor(){super(...arguments);this.state={classifyProps:{visible:!1},scoreProps:{title:this.props.t("course.setCredits"),labelTxt:this.props.t("course.credit"),initialValue:"",visible:!1},employeeProps:{visible:!1,initialParams:{employeeRange:{rangeType:3,rangeList:{dept:[],post:[],group:[],user:[]}}}},asyncProps:{value:0,visible:!1},showReferenceCourseListProps:{visible:!1,courseList:[],onOk:this.showReferenceCourseList,onCancel:this.showReferenceCourseList}},this.handleChangeClassify=r=>{this.props.onClassifyChange(r)},this.handleChangeType=r=>{this.props.onTypeChange(r)},this.handleChangeCourseType=r=>{this.props.onCourseTypeChange(r)},this.actionChangeClassify=()=>{this.setState({classifyProps:{visible:!0}})},this.handleCategoryCancel=()=>{this.setState({classifyProps:{visible:!1}})},this.handleCategoryOk=r=>{var C=r.node,p=this.props,L=p.selectedCourseIds,U=p.selectedProjectIds,R=p.onForceRender,W=p.t,G=C.id;G&&P.qg.post({url:y.setClassify(),data:{course_ids:L.join(","),project_ids:U.join(","),classify_id:G}}).then(()=>{s.default.success(W("course.setCourseClassifySuccess")),R()}),this.handleCategoryCancel()},this.actionSetScore=()=>{this.setState(r=>({scoreProps:(0,g.Z)((0,g.Z)({},r.scoreProps),{},{initialValue:"",visible:!0})}))},this.handleScoreCancel=()=>{this.setState(r=>({scoreProps:(0,g.Z)((0,g.Z)({},r.scoreProps),{},{visible:!1})}))},this.handleScoreOk=r=>{var C=r.value;if(C===0){this.handleScoreCancel();return}var p=this.props,L=p.selectedCourseIds,U=p.selectedProjectIds,R=p.onForceRender,W=p.t;P.qg.post({url:y.setScore(),data:{course_ids:L.join(","),project_ids:U.join(","),credit:C}}).then(()=>{s.default.success(W("course.setCourseScoreSuccess")),R()}),this.handleScoreCancel()},this.actionSetEmployeeRange=()=>{this.setState(r=>({employeeProps:(0,g.Z)((0,g.Z)({},r.employeeProps),{},{visible:!0})}))},this.handleEmployeeCancel=()=>{this.setState({employeeProps:{visible:!1,initialParams:{employeeRange:{rangeType:3,rangeList:{dept:[],post:[],group:[],user:[]}}}}})},this.handleEmployeeOk=r=>{var C=this.props,p=C.selectedCourseIds,L=C.selectedProjectIds,U=C.onForceRender,R=C.t,W=r.isAll,G=r.departmentIds,q=r.groupIds,Y=r.postIds,ee=r.userIds,te=r.qy_we_chat_vo;P.WY.post({url:y.setBatchEmployee(),data:{course_ids:p.join(","),project_ids:L.join(","),department_ids:G,group_ids:q,is_all:W,post_ids:Y,user_ids:ee,qy_we_chat_vo:te}}).then(()=>{s.default.success(R("personal.batchSetRangeSuccess")),U()}),this.handleEmployeeCancel()},this.showReferenceCourseList=r=>{this.setState(C=>({showReferenceCourseListProps:(0,g.Z)((0,g.Z)({},C.showReferenceCourseListProps),{},{visible:!C.showReferenceCourseListProps.visible,courseList:r||[]})}))},this.actionDelete=()=>{var r=this.props,C=r.selectedCourseIds,p=r.selectedProjectIds,L=r.list,U=r.onForceRender,R=r.t,W=0,G=0,q=[];if(L.forEach(Y=>{C.includes(Y.course_id)&&(Y.reference_plan_count>0&&(G+=1),Y.reference_plan_count>0&&q.push(Y.title),Y.can_delete==="true"&&(W+=1))}),G>0)this.showReferenceCourseList(q);else if(W!==C.length)s.default.warning(R("personal.deletePlatformCourseTip"));else{if(p.length>0){s.default.warning(R("personal.deleteProjectCourseTip"));return}v.Z.confirm({title:R("common.tip"),content:R("common.confirmDeleteTitle"),onOk(){P.qg.post({url:y.deleteCourse(),data:{enterpriseId:Z.ZP.enterpriseId,ids:C.join(","),project_ids:p.join(",")}}).then(Y=>{var ee=Y.data,te=ee.code,se=ee.msg;s.default["".concat(te===0?"success":"warning")](se),te===0&&U()})}})}},this.actionSyncSetting=()=>{this.setState(r=>({asyncProps:(0,g.Z)((0,g.Z)({},r.asyncProps),{},{visible:!0})}))},this.onAsyncChange=r=>{this.setState(C=>({asyncProps:(0,g.Z)((0,g.Z)({},C.asyncProps),{},{value:r.target.value})}))},this.handleSyncCancel=()=>{this.setState({asyncProps:{visible:!1,value:0}})},this.handleSyncOk=()=>{var r=this.props,C=r.selectedCourseIds,p=r.selectedProjectIds,L=r.onForceRender,U=r.t,R=this.state.asyncProps;P.qg.post({url:y.syncCourse(),data:{course_ids:C.join(","),project_ids:p.join(","),syncProgress:R.value}}).then(W=>{var G=W.data,q=G.code,Y=G.msg;q===0?(s.default.success(U("setting.setUpSucceed")),L()):s.default.warning(Y)}),this.handleSyncCancel()},this.actionImportDetail=()=>{var r=this.props,C=r.selectedCourseIds,p=r.selectedProjectIds,L=r.onForceRender,U=r.t;if(C.concat(p).length>20){s.default.warning(U("courseManage.exportMoreTip"));return}var R=y.exportCourseView(),W={course_Ids:C.join(","),project_Ids:p.join(",")};P.WY.get({url:R,params:W}).then(G=>{G.data.code===200&&s.default.success("\u6587\u4EF6\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u5728\u6587\u4EF6\u4E0B\u8F7D\u4E2D\u4E0B\u8F7D"),L(),this.getDownloadingNumber()})},this.getDownloadingNumber=()=>{var r=Z.ZP.downLoadCenter.getDownLoadingCount();P.WY.get({url:r,params:{}}).then(C=>{sessionStorage.setItem("downloadingCount",C.data.data),this.props.dispatch({type:"download/updateDownloadingNumber",downloadingNumber:C.data.data})}).catch(()=>{sessionStorage.setItem("downloadingCount",0),this.props.dispatch({type:"download/updateDownloadingNumber",downloadingNumber:0})})},this.handleChangeCheckBox=r=>{this.props.onCheckboxChange(r.target.checked)},this.handleSharingQueryRowCheckboxChange=r=>{this.props.onSharingCheckboxChange(r.target.checked)},this.renderCondition=()=>{var r=this.props,C=r.prefixCls,p=r.params,L=r.qyShield,U=r.t,R=p.classify_id?p.classify_id.split(","):[];return a().createElement("div",{className:"".concat(C,"__condition")},this.props.extraDom&&this.props.extraDom(),a().createElement(D.Z,{onChange:this.handleChangeClassify,className:"cl-search-normal-width",value:R,showLabel:!1,placeholder:"Please select",queryType:"course_manage",unclassified:"true"}),a().createElement(n.Z,{value:p.type,className:"cl-search-normal-width",onChange:this.handleChangeType},a().createElement(i,{value:""},this.props.t("courseManage.allOrigin")),a().createElement(i,{value:"original"},this.props.t("courseManage.originalCourse")),a().createElement(i,{value:"notOriginal"},this.props.t("courseManage.nonOriginalCourse")),a().createElement(i,{value:"platform"},this.props.t("courseManage.platformProcurement"))),this.props.courseType&&this.props.courseType=="graphic"?null:a().createElement(n.Z,{value:p.course_type,className:"cl-search-normal-width",onChange:this.handleChangeCourseType},a().createElement(i,{value:"all"},this.props.t("courseManage.allType")),a().createElement(i,{value:"course"},this.props.t("common.courseLabel")),a().createElement(i,{value:"microCourse"},this.props.t("common.microCourse")),a().createElement(i,{value:"project"},this.props.t("leftMenuLists.studyProject"))),a().createElement(N.Z,{onChange:this.handleChangeCheckBox,style:{marginRight:16}},U("common.myCreated")),this.props.courseType&&this.props.courseType==="graphic"&&L==="false"?a().createElement(N.Z,{onChange:this.handleSharingQueryRowCheckboxChange},U("common.sharing")):null)},this.renderActions=()=>{var r=this.props,C=r.prefixCls,p=r.selectedCourseIds,L=r.selectedProjectIds,U=r.showNum,R=U===void 0?1:U,W=this.props.allowActions,G=(0,A.H3)("delete",W),q=(0,A.H3)("adjustment_classification",W),Y=(0,A.H3)("set_visible",W),ee=(0,A.H3)("export",W),te=(0,A.H3)("set_score",W),se=(0,A.H3)("progressSync",W),le=[{name:this.props.t("courseManage.adjustClassification"),type:"actionChangeClassify",isShow:q},{name:this.props.t("courseManage.exportViewDetail"),type:"actionImportDetail",isShow:ee},{name:this.props.t("courseManage.setCredits"),type:"actionSetScore",isShow:te},{name:this.props.t("courseManage.setTheVisibilityed"),type:"actionSetEmployeeRange",isShow:Y},{name:this.props.t("common.delete"),type:"actionDelete",isShow:G},{name:this.props.t("common.scheduleSyncSetting"),type:"actionSyncSetting",isShow:se}],re=le.filter(ae=>ae.isShow),oe=[],ne=[];if(re.length)R?(oe=[...re.slice(0,R)],ne=[...re.slice(R)]):ne=[...re];else return null;return a().createElement("div",{className:"".concat(C,"__action")},oe.map(ae=>a().createElement(S.Z,{style:{marginRight:"8px"},key:ae.type,disabled:!(p.length+L.length),onClick:this[ae.type]},ae.name)),ne.length?a().createElement(x.Z,{disabled:!(p.length+L.length),overlay:this.renderMoreButton({buttons:ne})},a().createElement(S.Z,{className:"cl-pointer"},"".concat(this.props.t("common.more"))," ",a().createElement(E.Z,null))):"")}}renderMoreButton(r){var C=r.buttons,p=this.props,L=p.selectedCourseIds,U=p.selectedProjectIds;return a().createElement(B.Z,{onClick:R=>{var W=R.key;this[W]()}},C.map(R=>R.isShow?a().createElement(B.Z.Item,{key:R.type,disabled:!(L.length+U.length)},a().createElement("span",{className:"cl-pointer"},R.name)):null))}render(){var r=this.props,C=r.prefixCls,p=r.t,L=r.showRenderCondition,U=L===void 0?!0:L,R=r.showRenderActions,W=R===void 0?!0:R,G=this.state,q=G.classifyProps,Y=G.scoreProps,ee=G.employeeProps,te=G.showReferenceCourseListProps,se=G.asyncProps;return a().createElement("div",{className:C},U&&this.renderCondition(),W&&this.renderActions(),a().createElement(M.Z,(0,l.Z)({},q,{title:p("personal.chooseClassify"),onCancel:this.handleCategoryCancel,onOk:this.handleCategoryOk})),a().createElement(Q.Z,(0,l.Z)({},Y,{onCancel:this.handleScoreCancel,onCreate:this.handleScoreOk})),ee.visible&&a().createElement(K.Z,(0,l.Z)({},ee,{title:p("courseManage.setTheVisibility"),mode:["all","part","private"],orgProps:{title:p("component.chooseVisibleScope")},isLoading:!ee.visible,onCancel:this.handleEmployeeCancel,onCreate:this.handleEmployeeOk})),se.visible&&a().createElement(O.ZP,{wrapClassName:"cl-async-selector-modal",visible:se.visible,title:p("common.scheduleSyncSetting"),okText:p("common.ok"),cancelText:p("common.cancel"),onCancel:this.handleSyncCancel,onOk:this.handleSyncOk},se.visible?a().createElement("div",{className:"".concat(C,"__async")},a().createElement("p",null," ",p("common.scheduleSyncSettingTip")),a().createElement(H.ZP.Group,{onChange:this.onAsyncChange,value:se.value},a().createElement(H.ZP,{value:0},p("common.outSync")),a().createElement(H.ZP,{value:1},p("common.synchronization")))):a().createElement(m.Z,{size:"large"})),a().createElement(z,(0,l.Z)({},te,{showReferenceCourseList:this.showReferenceCourseList})))}}$.defaultProps={prefixCls:"resource-course-list-page__release__content__queryrow",rangeType:""};var X=(0,h.Z)()((0,f.$j)(w)($))}}]);
