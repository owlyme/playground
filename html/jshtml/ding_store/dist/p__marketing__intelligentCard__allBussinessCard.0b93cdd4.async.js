(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[6368],{11449:function(ne,O,r){"use strict";r.d(O,{Z:function(){return _}});var c=r(88986),ae=r(33565),$=r(12924),C=r.n($),f=r(3115),ie=r(49111),z=r(19650),re=r(62029),k=r(57663),Y=r(71577),G=r(91768),T=r(28216),se=r(37055),V=r(10237);function Z(u){var h=se.ZP.getHelpContentByMenuKey(),v={key:u};return V.WY.get({url:h,params:v})}var s=r(74228),B=r.n(s),L=r(1164),M=r(76466),U=r(38642);class H extends C().Component{constructor(h){var v;super(h);v=this,this.getHelpContentByMenuKey=()=>{var m=this.props.defaultMenuKey;Z(m).then(E=>{var p=E.data,N=p.help_url,D=p.video_url;this.setState({videoUrl:D,helpUrl:N})})},this.handleOpenHelpUrl=m=>{if((0,U.ve)()){window.open(m,"_blank");return}L.Z.targetTo({path:m,isExternalLink:!0})},this.handleOpenVideo=function(m){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v.props.t("helpCenter.video");v.setState(p=>({resourcePlayInfo:(0,c.Z)((0,c.Z)({},p.resourcePlayInfo),{},{resourceInfo:{originUrl:m,source:{FD:m,OD:m},contentType:"mp4"}}),previewInfo:(0,c.Z)((0,c.Z)({},p.previewInfo),{},{title:E,visible:!0,onCancel:v.handleCancelPreview})}))},this.handleCancelPreview=()=>{var m=this.state.previewInfo;this.setState({resourcePlayInfo:{mode:"preview",watchType:"video",resourceInfo:{}},previewInfo:(0,c.Z)((0,c.Z)({},m),{},{visible:!1})})},this.state={helpUrl:"",videoUrl:"",resourcePlayInfo:{autoPlay:!0,draggable:!0,mode:"preview",resourceInfo:{},watchType:"video"},previewInfo:{visible:!1,destroyOnClose:!0,title:h.t("helpCenter.video")||"\u89C6\u9891\u6307\u5BFC",onCancel:()=>{}}}}componentDidMount(){this.getHelpContentByMenuKey()}render(){var h=this.state,v=h.helpUrl,m=h.resourcePlayInfo,E=h.previewInfo,p=h.videoUrl,N=this.props.t;return C().createElement("div",{className:B().helpCenter},p&&C().createElement(Y.Z,{type:"link",className:B()["video-btn"],style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenVideo(p)},N("helpCenter.video")),v&&C().createElement(Y.Z,{type:"link",style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenHelpUrl(v)},N("helpCenter.tutorial")),C().createElement(M.Z,(0,re.Z)({},m,{previewInfo:E})))}}var Q=u=>({defaultMenuKey:u.currentRoute.menuKey});H.defaultProps={defaultMenuKey:""};var X=(0,T.$j)(Q)((0,G.Z)()(H));function P(u){var h=u.extra,v=localStorage.getItem("dingPersonnel"),m=sessionStorage.getItem("dingPersonnel");return C().createElement(z.Z,null,h,v!=="dingPersonnel"&&m!=="dingPersonnel"&&(0,U.eY)("COMMONEXTRA_HELP_CENTER")&&C().createElement(X,null))}var J=P,b=r(4408);function q(u){var h=(0,$.useState)({helpCenter:(0,U.eY)("HEAD_HELP_CENTER_BUT")}),v=(0,ae.Z)(h,1),m=v[0],E=u.pageContainerParams,p=E===void 0?{}:E,N=u.noPadding,D=N===void 0?!1:N,A=u.isPersonal,R=A===void 0?!1:A,w=u.pageTitle,K=u.className,ee=K===void 0?"":K,j={extra:m.helpCenter?C().createElement(J,{extra:p.extra}):p.extra},te=(0,c.Z)((0,c.Z)({},p),j);return C().createElement("div",{className:"page-container-content ".concat(D?"page-container-noPadding":""," ").concat(R?"page-container-content_personal_background":""," ").concat(ee)},w&&C().createElement(b.Z,{title:w}),R?C().createElement(f.Z,null,u.children):C().createElement(f.Z,te,u.children))}var _=q},15565:function(ne,O,r){"use strict";r.r(O),r.d(O,{default:function(){return fe}});var c=r(62029),ae=r(14781),$=r(53431),C=r(34792),f=r(48086),ie=r(71194),z=r(57016),re=r(57663),k=r(71577),Y=r(22385),G=r(31097),T=r(88986),se=r(47673),V=r(4107),Z=r(12924),s=r.n(Z),B=r(11449),L=r(91768),M=r(88311),U=r(64262),H=r(4408),Q=r(87312),X=r(49101),P=r(37055),J=r(28216),b=r(10237);function q(a){var n=a.headImg,e=a.name,t=a.userId,l=a.mobile,d=a.email,o=a.qrCode,i=a.app_id,g=i===void 0?"cool":i,I=a.enterpriseId,y=a.enterpriseName,x=a.post,F=P.ZP.market.addSmartCard();return b.WY.post({url:F,data:{head_img:n,name:e,user_id:t,mobile:l,post:x,email:d,qr_code:o,app_id:g,enterprise_id:I,enterprise_name:y}})}function _(a){var n=a.headImg,e=a.name,t=a.userId,l=a.mobile,d=a.email,o=a.qrCode,i=a.app_id,g=i===void 0?"cool":i,I=a.enterpriseId,y=a.enterpriseName,x=a.post,F=a.cardId,W=P.ZP.market.updateSmartCard();return b.WY.post({url:W,data:{head_img:n,name:e,user_id:t,mobile:l,email:d,post:x,qr_code:o,app_id:g,enterprise_id:I,enterprise_name:y,card_id:F}})}function u(a){var n=a.enterpriseId,e=a.app_id,t=e===void 0?"cool":e,l=a.cardId,d=P.ZP.market.deleteSmartCard();return b.WY.post({url:d,data:{app_id:t,enterprise_id:n,card_id:l}})}function h(a){var n=a.enterpriseId,e=a.app_id,t=e===void 0?"cool":e,l=a.user,d=a.dept,o=a.post,i=a.group,g=P.ZP.market.SynchronizeStudents();return b.WY.post({url:g,data:{app_id:t,enterprise_id:n,user_id_list:l,department_id_list:d,post_id_list:o,group_id_list:i}})}function v(a){var n=a.enterpriseId,e=a.app_id,t=e===void 0?"cool":e,l=a.pageNumber,d=a.pageSize,o=a.name,i=a.departId,g=P.ZP.market.getStudentsList();return b.WY.post({url:g,data:{app_id:t,enterprise_id:n,department_id_list:i,page_num:l,page_size:d,name:o}})}var m=r(80991),E=r(62615),p=r(7584),N=r(2396),D=r(43859),A=r(24144);class R extends Z.Component{constructor(){super(...arguments);this.handleChange=n=>{var e=n.fileList,t=this.props.name;this.props.formik.setFieldValue(t,e)}}render(){var n=this.props,e=n.isPreview,t=n.defaultFieldList,l=n.t;return s().createElement("div",{className:"card_upload"},s().createElement("div",{className:"avatar_upload_container"},s().createElement(A.G2,{imageContainerClassName:"card_upload_avatar_container",uploadConfig:{accept:".jpg,.jpeg,.png",disabled:e},size:{value:1,unit:"MB"},onUploadedListChange:this.handleChange,fileList:t})),s().createElement("span",{className:"card_upload_title"},l("marketing.uploadTip")))}}var w=(0,m.$j)((0,L.Z)()(R));class K extends Z.Component{constructor(n){super(n);this.handleClick=()=>{var e=this.state.orgDialogConfig;e.visible=!0,this.setState({orgDialogConfig:e})},this.hiddenOrg=()=>{var e=this.state.orgDialogConfig;e.visible=!1,this.setState({orgDialogConfig:e})},this.addUser=e=>{var t=e.user,l=this.state.orgDialogConfig;l.visible=!1,this.setState({userList:t,orgDialogConfig:l},()=>{this.props.formik.setFieldValue("user",{userId:t[0].id,userName:t[0].user_name})})},this.state={orgDialogConfig:{visible:!1,onOk:this.addUser,onCancel:this.hiddenOrg},userList:[],reserveUser:[]}}render(){var n=this.state,e=n.orgDialogConfig,t=n.userList,l=n.reserveUser,d=this.props,o=d.t,i=d.isPreview,g=d.defaultFieldList,I=d.disabled;return s().createElement(s().Fragment,null,s().createElement(V.Z,{onClick:this.handleClick,disabled:i||I,value:g.userName}),s().createElement(M.Z,(0,c.Z)({},e,{title:o("marketing.bindUser"),single:!0,reserveUser:l,initData:{user:t}})))}}var ee=(0,m.$j)((0,L.Z)()(K)),j=(0,D.Z)(w),te=(0,D.Z)(ee);function le(a,n){var e,t=/^1(3|4|5|6|7|8|9)\d{9}$/;return t.test(a)||(e=n("marketing.checkTel")),e}function de(a,n){var e,t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return a&&!t.test(a)&&(e=n("marketing.checkEmail")),e}function oe(a,n){var e;return a&&a.length>20&&(e=n("marketing.checkPost")),e}function me(a,n){var e;return a.userId||(e=n("marketing.checkBindUser")),e}class ce extends Z.Component{componentDidMount(){}render(){var n=this.props,e=n.t,t=n.values,l=n.isPreview,d=n.editStatus,o={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}};return s().createElement(m.l0,null,s().createElement(m.gN,(0,c.Z)({component:j,displayType:"Custom",name:"headImg",label:e("marketing.cardAvatar"),isPreview:l,defaultFieldList:t.headImg},o)),s().createElement(m.gN,(0,c.Z)({component:p.Z,name:"name",type:"text",label:e("common.userName"),isPreview:l,defaultValue:t.name,maxLength:40,required:!0},o,{validate:i=>(0,N.QK)(i,e("marketing.checkUserName"))})),s().createElement(m.gN,(0,c.Z)({component:p.Z,name:"mobile",type:"text",label:e("marketing.telPhone"),isPreview:l,defaultValue:t.mobile,required:!0},o,{validate:i=>le(i,e)})),s().createElement(m.gN,(0,c.Z)({component:p.Z,type:"text",name:"enterpriseName",label:e("marketing.enterpriseName"),isPreview:l,defaultValue:t.enterpriseName},o)),s().createElement(m.gN,(0,c.Z)({component:p.Z,type:"text",name:"post",label:e("common.postLabel"),isPreview:l,defaultValue:t.post,validate:i=>oe(i,e)},o)),s().createElement(m.gN,(0,c.Z)({component:p.Z,type:"text",name:"email",label:e("marketing.email"),isPreview:l,defaultValue:t.email},o,{validate:i=>de(i,e)})),s().createElement(m.gN,(0,c.Z)({component:j,name:"qrCode",label:e("setting.QRCode"),displayType:"Custom",isPreview:l,defaultFieldList:t.qrCode},o)),s().createElement(m.gN,(0,c.Z)({component:te,name:"user",label:e("marketing.bindUser"),displayType:"Custom",required:!0,validate:i=>me(i,e),isPreview:l,disabled:d==="update",defaultFieldList:t.user},o)),s().createElement(E.I,null))}}var pe=(0,L.Z)()(ce);class ue extends Z.Component{constructor(n){super(n);this.handleCancel=()=>{this.props.handleCancel(),this.setState({visible:!1})},this.handleOk=()=>{this.handleSubmit()},this.handleSubmit=()=>{var e=this.cardForm,t=this.props,l=t.enterpriseId,d=t.status,o=t.t,i=e.state.values;if(d==="view"){this.props.changeStatus("update");return}e.submitForm(),e.runValidations().then(g=>{if(!Object.keys(g).length)if(d==="add"){var I={headImg:i.headImg.length===0?"":i.headImg[0].url,name:i.name,userId:i.user.userId,post:i.post,mobile:i.mobile,email:i.email,qrCode:i.qrCode.length===0?"":i.qrCode[0].url,enterpriseId:l,enterpriseName:i.enterpriseName};q(I).then(y=>{y.data.code==="200000"?f.default.success(o("common.addSuccess")):y.data.code==="576008"?f.default.error(o("marketing.addCardErrorTip")):f.default.error(o("common.addFailure")),this.handleCancel(),this.props.getCardList()})}else d==="update"&&_({headImg:i.headImg.length===0?"":i.headImg[0].url,name:i.name,userId:i.user.userId,mobile:i.mobile,email:i.email,qrCode:i.qrCode.length===0?"":i.qrCode[0].url,enterpriseId:l,enterpriseName:i.enterpriseName,cardId:i.cardId}).then(y=>{y.data.code==="200000"?f.default.success(o("common.editSuccess")):f.default.error(o("common.editFailure")),this.handleCancel(),this.props.getCardList()})})},this.initRef=e=>{this.cardForm=e},this.state={visible:!1,initialParams:{headImg:[],name:"",mobile:"",post:"",email:"",qrCode:[],user:{userId:"",userName:""},enterpriseName:n.enterpriseName}}}static getDerivedStateFromProps(n,e){return n.visible!==e.visible?{visible:n.visible}:null}componentDidUpdate(n){if(this.props.cardDetail!==n.cardDetail){var e=this.props.cardDetail,t;e.enterpriseName?t=this.props.enterpriseName:t=e.enterprise_name;var l={headImg:e.head_img?[{url:e.head_img||"",uid:"-1",name:e.head_img||"",status:"done"}]:[],name:e.name,mobile:e.mobile,post:e.post,email:e.email,qrCode:e.qr_code?[{url:e.qr_code,uid:"-1",name:e.qr_code,status:"done"}]:[],user:{userId:e.user_id,userName:e.user_name},enterpriseName:t,cardId:e.card_id};this.setState({initialParams:(0,T.Z)({},l)})}}render(){var n=this.props,e=n.t,t=n.status,l=this.state,d=l.visible,o=l.initialParams,i;switch(t){case"add":i=e("marketing.newBusinessCard");break;case"view":i=e("marketing.viewBusinessCard");break;case"update":i=e("marketing.updateBusinessCard");break;default:i="";break}var g=e(t==="add"?"questionn.confirm":"common.update");return s().createElement(z.Z,{title:i,destroyOnClose:!0,onCancel:this.handleCancel,onOk:this.handleOk,maskClosable:!1,okText:g,visible:d,centered:!0,className:"card_modal",handleTreeSelectChange:this.handleTreeSelectChange},s().createElement("div",{className:"card_edit"},s().createElement(m.J9,{ref:this.initRef,initialValues:o,onSubmit:this.handleSubmit,render:I=>s().createElement(pe,(0,c.Z)({isPreview:t==="view",editStatus:t},I))})))}}var he=(0,L.Z)()(ue),ve=V.Z.Search,S={pageNumber:1,pageSize:20,name:"",departId:""},ge=a=>({userInfo:a.user,enterpriseId:a.user.enterpriseId,enterpriseName:a.user.enterpriseName});class Ce extends Z.Component{constructor(n){super(n);this.getCardList=()=>{var e=this.props.enterpriseId;v((0,T.Z)({enterpriseId:e},S)).then(t=>{this.setState({total:t.data.data.total,cardList:t.data.data.list})})},this.renderCard=e=>{var t=this.props.t;return e.length===0?s().createElement(Q.Z,{className:"card_content_no-result"}):e&&e.map((l,d)=>s().createElement("div",{className:"smart_card_item"},s().createElement("div",{className:"smart_card_item_header"},s().createElement("div",{className:"smart_card_person"},s().createElement("img",{alt:"",src:l.head_img}),s().createElement(G.Z,{title:l.name},s().createElement("span",null,l.name))),s().createElement("div",{className:"smart_card_message"},s().createElement("div",{className:"smart_card_left"},s().createElement("span",null,"".concat(l.enterprise_name)),s().createElement("span",null,"".concat(t("personal.phone"),"\uFF1A").concat(l.mobile))),l.qr_code!==""?s().createElement("img",{src:l.qr_code,alt:""}):"")),s().createElement("div",{className:"smart_card_item_footer"},s().createElement(k.Z,{type:"link",onClick:()=>this.handlePreview(d)},t("common.preview")),s().createElement(k.Z,{type:"link",onClick:()=>this.handleUpdate(d)},t("common.update")),s().createElement(k.Z,{type:"link",onClick:()=>this.handleDelete(l.card_id)},t("common.delete")))))},this.handlePreview=e=>{var t=this.state.cardList;this.setState({status:"view",smartCardVisible:!0,cardDetail:t[e]})},this.handleDelete=e=>{var t=this.props.t,l=this;z.Z.confirm({title:t("common.delete"),content:t("marketing.deleteMarketCardTip"),onOk:()=>l.handleDeleteCard(e),onCancel:()=>!1})},this.handleDeleteCard=e=>{var t=this.props,l=t.enterpriseId,d=t.t;u({enterpriseId:l,cardId:e}).then(o=>{o.data.code==="200000"?f.default.success(d("common.deleteSuccess")):f.default.error(d("common.deleteFailure")),this.getCardList()})},this.handleUpdate=e=>{var t=this.state.cardList;this.setState({smartCardVisible:!0,status:"update",cardDetail:t[e]})},this.handleTreeSelectChange=e=>{S.departId=e,this.getCardList()},this.handleSynchronize=()=>{var e=this.state.orgDialogConfig;e.visible=!0,this.setState({orgDialogConfig:e})},this.addUser=e=>{var t=this.state.orgDialogConfig;t.visible=!1,this.setState({orgDialogConfig:t,userList:e},()=>{var l=this.props.enterpriseId;h({enterpriseId:l,dept:e.dept.map(d=>d.id)||[],post:e.post.map(d=>d.id)||[],user:e.user.map(d=>d.id)||[],group:e.group.map(d=>d.id)||[]}).then(d=>{var o=this.props.t;d.data.code==="200000"?f.default.success(o("marketing.synchronizeSuccess")):f.default.error(o("marketing.synchronizeFailure")),this.getCardList()})})},this.hiddenOrg=()=>{var e=this.state.orgDialogConfig;e.visible=!1,this.setState({orgDialogConfig:e})},this.handleNewCard=()=>{this.setState({smartCardVisible:!0,status:"add",cardDetail:{}})},this.handleOk=()=>{this.setState({smartCardVisible:!1})},this.handleCancel=()=>{this.setState({smartCardVisible:!1})},this.handleSearch=e=>{S.pageNumber=1,S.name=e,this.getCardList()},this.changeStatus=e=>{this.setState({status:e})},this.state={cardList:[],orgDialogConfig:{visible:!1,onOk:this.addUser,onCancel:this.hiddenOrg},userList:{user:[],dept:[]},smartCardVisible:!1,cardDetail:{},total:0,status:"add"}}componentDidMount(){this.getCardList()}componentWillUnmount(){S={pageNumber:1,pageSize:20,name:"",departId:""}}render(){var n=this.props,e=n.t,t=n.enterpriseName,l=n.enterpriseId,d=this.state,o=d.cardList,i=d.orgDialogConfig,g=d.smartCardVisible,I=d.status,y=d.cardDetail,x=d.userList,F=(0,T.Z)((0,T.Z)({},P.XE.INITIAL_PAGINATION),{},{current:S.pageNumber,total:this.state.total,onChange:W=>{S.pageNumber=W,this.getCardList()},onShowSizeChange:(W,Ie)=>{S.pageNumber=1,S.pageSize=Ie,this.getCardList()}});return s().createElement(B.Z,{pageContainerParams:{header:{title:e("marketing.allBusinessCard")}}},s().createElement(H.Z,{title:e("marketing.allBusinessCard")}),s().createElement("div",{className:"smart_card_content"},s().createElement("div",{className:"smart_card"},s().createElement(U.Z,{parentId:"",checkable:!1,asyncLoad:!0,treeSelect:!0,handleTreeSelectChange:this.handleTreeSelectChange,className:"smart_card_select_one"}),s().createElement("div",{className:"smart_card_query"},s().createElement("div",null,s().createElement(k.Z,{type:"primary",icon:s().createElement(X.Z,null),className:"smart_card_query_button",onClick:this.handleNewCard},e("marketing.newBusinessCard")),s().createElement(k.Z,{type:"primary",onClick:this.handleSynchronize},e("marketing.synchronizeCard"))),s().createElement(ve,{className:"smart_card_query_search",placeholder:e("validation.pleaseEnter"),allowClear:!0,onSearch:this.handleSearch}))),s().createElement("div",{className:"card_content"},this.renderCard(o)),s().createElement("div",{className:"smart_card_content_pagination"},s().createElement($.Z,F)),s().createElement(he,{visible:g,status:I,changeStatus:this.changeStatus,handleOk:this.handleOk,handleCancel:this.handleCancel,getCardList:this.getCardList,cardDetail:y,enterpriseId:l,enterpriseName:t}),i.visible&&s().createElement(M.Z,(0,c.Z)({},i,{initData:{user:x.user,dept:x.dept},title:e("marketing.synchronizeCard")}))))}}var fe=(0,J.$j)(ge)((0,L.Z)()(Ce))}}]);
