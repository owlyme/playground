(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[1011],{67620:function(w,N,e){"use strict";var d=e(34792),x=e(48086),I=e(12924),s=e.n(I),L=e(19222),K=e.n(L),O=e(32407),n=e(37055),M=n.ZP.Common.editorUpload(),y="cl_editor_toolbar_default",v="cl_editor_content_default";class $ extends I.Component{constructor(Z){super(Z);this.initEditor=()=>{this.editor=new(K())(".".concat(this.props.toolbarCls),".".concat(this.props.contentCls)),this.editor.config.zIndex=10,this.editor.config.onfocus=()=>{var a=document.querySelector(".".concat(this.props.contentCls));a&&(a.style.minHeight=this.props.contentHeight,a.style.height="auto")},this.editor.config.onblur=()=>{var a=document.querySelector(".".concat(this.props.contentCls));a&&(a.style.height=this.props.contentHeight)},this.editor.config.menus=this.props.controls,this.editor.config.placeholder=this.props.placeholderContent||O.Z.t("component.pleaseEnterText"),this.editor.config.onchange=a=>{this.props.onChange&&this.props.onChange(a)},this.editor.config.onchangeTimeout=300,this.editor.config.uploadImgServer=M,this.editor.config.uploadImgMaxLength=5,this.editor.config.uploadImgParams={access_token:window.localStorage.getItem("token")},this.editor.config.uploadFileName="files",this.editor.config.uploadImgHooks={customInsert(a,P){var A=P.data;A.forEach(W=>{a(W)})}},this.editor.config.pasteTextHandle=function(a){return~a.indexOf("<!--[if gte mso 9]><xml>")||~a.indexOf("<spanyes")?"\u7C98\u8D34\u5185\u5BB9\u6709\u4E71\u7801\uFF0C\u8BF7\u4F7F\u7528ctrl+shift+v\u6765\u7C98\u8D34\u5185\u5BB9(mac\u8BF7\u4F7F\u7528command+shift+v)":a},this.editor.config.focus=!1,this.editor.config.uploadImgMaxSize=3*1024*1024,this.editor.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp"],this.editor.config.showLinkImg=!1,this.editor.config.customAlert=function(a,P){switch(P){case"success":x.default.success(a);break;case"info":x.default.info(a);break;case"warning":x.default.warning(a);break;case"error":x.default.error(a);break;default:x.default.info(a);break}},this.editor.create(),this.editor.txt.html("".concat(this.props.placeholder))},this.getHtml=()=>this.editor.txt.html(),this.getText=()=>this.editor.txt.text(),this.setHtml=a=>this.editor.txt.html(a),this.editor=null}componentDidMount(){this.initEditor()}render(){var Z=this.props.toolbarCls?"".concat(this.props.toolbarCls," cl_editor_toolbar"):"".concat(y," cl_editor_toolbar"),a=this.props.contentCls?"".concat(this.props.contentCls," cl_editor_content"):"".concat(v," cl_editor_content");return s().createElement(s().Fragment,null,s().createElement("div",{className:Z}),s().createElement("div",{className:a,style:{height:this.props.contentHeight,minHeight:this.props.contentHeight}}))}}$.defaultProps={controls:["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","emoticon","image","table","video","code","undo","redo"],placeholder:"\u5185\u5BB9\u7F16\u8F91\u533A\u57DF",toolbarCls:y,contentCls:v,contentHeight:"300px",placeholderContent:""},N.Z=$},11449:function(w,N,e){"use strict";e.d(N,{Z:function(){return X}});var d=e(88986),x=e(33565),I=e(12924),s=e.n(I),L=e(3115),K=e(49111),O=e(19650),n=e(62029),M=e(57663),y=e(71577),v=e(91768),$=e(28216),F=e(37055),Z=e(10237);function a(l){var m=F.ZP.getHelpContentByMenuKey(),h={key:l};return Z.WY.get({url:m,params:h})}var P=e(74228),A=e.n(P),W=e(1164),J=e(76466),H=e(38642);class V extends s().Component{constructor(m){var h;super(m);h=this,this.getHelpContentByMenuKey=()=>{var o=this.props.defaultMenuKey;a(o).then(f=>{var p=f.data,T=p.help_url,S=p.video_url;this.setState({videoUrl:S,helpUrl:T})})},this.handleOpenHelpUrl=o=>{if((0,H.ve)()){window.open(o,"_blank");return}W.Z.targetTo({path:o,isExternalLink:!0})},this.handleOpenVideo=function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h.props.t("helpCenter.video");h.setState(p=>({resourcePlayInfo:(0,d.Z)((0,d.Z)({},p.resourcePlayInfo),{},{resourceInfo:{originUrl:o,source:{FD:o,OD:o},contentType:"mp4"}}),previewInfo:(0,d.Z)((0,d.Z)({},p.previewInfo),{},{title:f,visible:!0,onCancel:h.handleCancelPreview})}))},this.handleCancelPreview=()=>{var o=this.state.previewInfo;this.setState({resourcePlayInfo:{mode:"preview",watchType:"video",resourceInfo:{}},previewInfo:(0,d.Z)((0,d.Z)({},o),{},{visible:!1})})},this.state={helpUrl:"",videoUrl:"",resourcePlayInfo:{autoPlay:!0,draggable:!0,mode:"preview",resourceInfo:{},watchType:"video"},previewInfo:{visible:!1,destroyOnClose:!0,title:m.t("helpCenter.video")||"\u89C6\u9891\u6307\u5BFC",onCancel:()=>{}}}}componentDidMount(){this.getHelpContentByMenuKey()}render(){var m=this.state,h=m.helpUrl,o=m.resourcePlayInfo,f=m.previewInfo,p=m.videoUrl,T=this.props.t;return s().createElement("div",{className:A().helpCenter},p&&s().createElement(y.Z,{type:"link",className:A()["video-btn"],style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenVideo(p)},T("helpCenter.video")),h&&s().createElement(y.Z,{type:"link",style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenHelpUrl(h)},T("helpCenter.tutorial")),s().createElement(J.Z,(0,n.Z)({},o,{previewInfo:f})))}}var k=l=>({defaultMenuKey:l.currentRoute.menuKey});V.defaultProps={defaultMenuKey:""};var Q=(0,$.$j)(k)((0,v.Z)()(V));function q(l){var m=l.extra,h=localStorage.getItem("dingPersonnel"),o=sessionStorage.getItem("dingPersonnel");return s().createElement(O.Z,null,m,h!=="dingPersonnel"&&o!=="dingPersonnel"&&(0,H.eY)("COMMONEXTRA_HELP_CENTER")&&s().createElement(Q,null))}var R=q,b=e(4408);function Y(l){var m=(0,I.useState)({helpCenter:(0,H.eY)("HEAD_HELP_CENTER_BUT")}),h=(0,x.Z)(m,1),o=h[0],f=l.pageContainerParams,p=f===void 0?{}:f,T=l.noPadding,S=T===void 0?!1:T,B=l.isPersonal,z=B===void 0?!1:B,U=l.pageTitle,t=l.className,c=t===void 0?"":t,r={extra:o.helpCenter?s().createElement(R,{extra:p.extra}):p.extra},u=(0,d.Z)((0,d.Z)({},p),r);return s().createElement("div",{className:"page-container-content ".concat(S?"page-container-noPadding":""," ").concat(z?"page-container-content_personal_background":""," ").concat(c)},U&&s().createElement(b.Z,{title:U}),z?s().createElement(L.Z,null,l.children):s().createElement(L.Z,u,l.children))}var X=Y},71586:function(w,N,e){"use strict";e.r(N),e.d(N,{default:function(){return z}});var d=e(62029),x=e(20228),I=e(11382),s=e(34792),L=e(48086),K=e(88986),O=e(12924),n=e.n(O),M=e(91768),y=e(57068),v=e(80991),$=e(57663),F=e(71577),Z=e(76651),a=e(88983),P=e(47933);class A extends n().Component{constructor(){super(...arguments);this.handleChange=t=>{this.props.formik.setFieldValue("status",t.target.value)}}render(){return n().createElement(P.ZP.Group,{value:this.props.defaultFieldList,onChange:this.handleChange},n().createElement(P.ZP,{value:2},this.props.t("other.noticeDetailIsTopNo")),n().createElement(P.ZP,{value:1},this.props.t("other.noticeDetailIsTopYes")))}}var W=(0,v.$j)((0,M.Z)()(A)),J=e(67620),H=e(43859);class V extends n().Component{constructor(){super(...arguments);this.handleChange=t=>{this.props.onFieldChange(t)}}componentDidMount(){var t=this.props.value;this.editorInstance.setHtml(t)}render(){return n().createElement(J.Z,{style:{width:"776px"},ref:t=>this.editorInstance=t,onChange:this.handleChange,placeholder:"",controls:["head","bold","fontSize","fontName","italic","underline","strikeThrough","image","undo","redo"]})}}var k=(0,H.Z)(V),Q=(0,H.Z)(W),q=null,R={labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:21}}},b=e(62615),Y=e(52670),X=e(7584),l=e(2396);class m extends n().Component{constructor(){super(...arguments);this.handlePropsSubmit=()=>{var t=this.props.handleSubmit;t()},this.cancel=()=>{Z.m8.push("/training/announcementNotice/notice")}}render(){var t=this.props,c=t.values,r=t.isSubmitting,u=r===void 0?!1:r,i=t.t,C=t.isEdit;return n().createElement(v.l0,{className:"cl-form cl-notice-form"},n().createElement(v.gN,(0,d.Z)({component:X.Z,name:"title",label:i("other.noticeDetailName"),required:!0,type:"text",maxLength:60,defaultValue:c.title,style:{width:"100%"},placeholder:i("other.noticeDetailNamePlaceholder"),validate:D=>(0,l.QK)(D,i("other.noticeDetailNamePlaceholder"))},R)),n().createElement(v.gN,(0,d.Z)({required:!0,label:i("other.noticeDetailContent"),showPrivate:!1,component:b.h,displayType:"Custom",name:"h5Article",from:"notice",defaultFieldList:c.h5Article,scrollDOMSelector:".ant-layout-content",topHeight:64,validate:Y.rn},R)),n().createElement("div",{className:"upload_tips"},i("course.pictureRequirement")),n().createElement(v.gN,(0,d.Z)({component:b.ww,displayType:"Custom",name:"employeeRange",mode:["all","part"],qwTicketShow:!0,orgProps:{title:i("component.chooseVisibleScope")},required:!0,label:i("common.visibleRange"),showSectitle:!1,defaultFieldList:c.employeeRange,validate:Y.FI},R)),n().createElement(v.gN,(0,d.Z)({component:Q,name:"status",label:i("other.noticeDetailIsTop"),required:!0,defaultFieldList:c.status},R)),n().createElement("footer",{className:"cl-form-notice-footer"},n().createElement("div",{className:"cl-form-notice-footer__container"},n().createElement(F.Z,{type:"primary",disabled:u,loading:u,onClick:this.handlePropsSubmit},i(C?"common.save":"common.release")),n().createElement(F.Z,{onClick:this.cancel},i("common.cancel")))))}}var h=(0,M.Z)()(m),o=e(10237),f=e(37055),p=e(11449),T=e(4408),S={queryNotice:f.ZP.Notice.queryNotice,add:f.ZP.Notice.addNotice,edit:f.ZP.Notice.editNotice};class B extends O.Component{constructor(){super(...arguments);this.state={initialParams:{title:"",status:2,h5Article:"",employeeRange:{rangeType:1,qyWeChatVo:"",rangeList:{dept:[],post:[],group:[],user:[]}}},isLoading:!0},this.getDetail=t=>{o.WY.get({url:S.queryNotice(t),params:{source:"pc"}}).then(c=>{var r=c.data,u=r.title,i=r.status,C=r.context,D=r.is_all,j=r.post_list,E=r.user_list,g=r.group_list,G=r.department_list;this.setState({initialParams:{title:u,status:i==="OPEN"?1:2,h5Article:C,employeeRange:{rangeType:D==="all"?1:2,rangeList:{dept:G||[],post:j||[],group:g||[],user:E||[]}}},isLoading:!1})})},this.handleSubmit=(t,c)=>{var r=t.title,u=t.status,i=t.h5Article,C=t.employeeRange,D={title:r,status:u===1?"OPEN":"CLOSED",context:i,is_all:C.rangeType===1?"all":"part",user_ids:C.rangeList.user.map(g=>g.id).join(","),department_ids:C.rangeList.dept.map(g=>g.id).join(","),group_ids:C.rangeList.group.map(g=>g.id).join(","),post_ids:C.rangeList.post.map(g=>g.id).join(","),qy_we_chat_vo:C.qyWeChatVo},j=y.parse(this.props.location.search),E=j.id;o.WY.post({url:E?S.edit(E):S.add(),data:(0,K.Z)((0,K.Z)({},D),{},{id:E})}).then(g=>{var G=g.data,_=G.insert,ee=G.update,te="".concat(E?this.props.t("common.saveSuccess"):this.props.t("common.releaseSuccess"));L.default.success(te),setTimeout(()=>{c.setSubmitting(!1),(_==="true"||ee==="true")&&this.props.history.push("/training/announcementNotice/notice")},300)}).catch(()=>{c.setSubmitting(!1)})}}componentDidMount(){var t=y.parse(this.props.location.search),c=t.id;c?this.getDetail(c):this.setState({isLoading:!1})}render(){var t=this.props,c=t.prefixCls,r=t.location,u=t.t,i=this.state,C=i.initialParams,D=i.isLoading;if(D)return n().createElement(I.Z,{size:"large"});var j=y.parse(r.search),E=j.id;return n().createElement(p.Z,{pageContainerParams:{header:{title:E?"".concat(u("common.edit")).concat(u("other.noticeDetailTitle")):"".concat(u("common.add")).concat(u("other.noticeDetailTitle"))}}},n().createElement(T.Z,{title:u(E?"documentTitle.editAnnouncement":"documentTitle.addAnnouncement")}),n().createElement("div",{className:"notice-add"},n().createElement("div",{className:"".concat(c,"__content")},n().createElement(v.J9,{initialValues:C,onSubmit:this.handleSubmit,render:g=>n().createElement(h,(0,d.Z)({},g,{isEdit:!!E}))}))))}}B.defaultProps={prefixCls:"notice-add"};var z=(0,M.Z)()(B)}}]);
