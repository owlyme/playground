(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[1472],{11449:function(Pe,Y,t){"use strict";t.d(Y,{Z:function(){return D}});var p=t(88986),ye=t(33565),X=t(12924),h=t.n(X),H=t(3115),ne=t(49111),n=t(19650),z=t(62029),y=t(57663),J=t(71577),L=t(91768),se=t(28216),A=t(37055),Q=t(10237);function ge(u){var m=A.ZP.getHelpContentByMenuKey(),c={key:u};return Q.WY.get({url:m,params:c})}var B=t(74228),Z=t.n(B),_=t(1164),q=t(76466),S=t(38642);class K extends h().Component{constructor(m){var c;super(m);c=this,this.getHelpContentByMenuKey=()=>{var d=this.props.defaultMenuKey;ge(d).then(g=>{var v=g.data,C=v.help_url,O=v.video_url;this.setState({videoUrl:O,helpUrl:C})})},this.handleOpenHelpUrl=d=>{if((0,S.ve)()){window.open(d,"_blank");return}_.Z.targetTo({path:d,isExternalLink:!0})},this.handleOpenVideo=function(d){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c.props.t("helpCenter.video");c.setState(v=>({resourcePlayInfo:(0,p.Z)((0,p.Z)({},v.resourcePlayInfo),{},{resourceInfo:{originUrl:d,source:{FD:d,OD:d},contentType:"mp4"}}),previewInfo:(0,p.Z)((0,p.Z)({},v.previewInfo),{},{title:g,visible:!0,onCancel:c.handleCancelPreview})}))},this.handleCancelPreview=()=>{var d=this.state.previewInfo;this.setState({resourcePlayInfo:{mode:"preview",watchType:"video",resourceInfo:{}},previewInfo:(0,p.Z)((0,p.Z)({},d),{},{visible:!1})})},this.state={helpUrl:"",videoUrl:"",resourcePlayInfo:{autoPlay:!0,draggable:!0,mode:"preview",resourceInfo:{},watchType:"video"},previewInfo:{visible:!1,destroyOnClose:!0,title:m.t("helpCenter.video")||"\u89C6\u9891\u6307\u5BFC",onCancel:()=>{}}}}componentDidMount(){this.getHelpContentByMenuKey()}render(){var m=this.state,c=m.helpUrl,d=m.resourcePlayInfo,g=m.previewInfo,v=m.videoUrl,C=this.props.t;return h().createElement("div",{className:Z().helpCenter},v&&h().createElement(J.Z,{type:"link",className:Z()["video-btn"],style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenVideo(v)},C("helpCenter.video")),c&&h().createElement(J.Z,{type:"link",style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenHelpUrl(c)},C("helpCenter.tutorial")),h().createElement(q.Z,(0,z.Z)({},d,{previewInfo:g})))}}var ie=u=>({defaultMenuKey:u.currentRoute.menuKey});K.defaultProps={defaultMenuKey:""};var fe=(0,se.$j)(ie)((0,L.Z)()(K));function re(u){var m=u.extra,c=localStorage.getItem("dingPersonnel"),d=sessionStorage.getItem("dingPersonnel");return h().createElement(n.Z,null,m,c!=="dingPersonnel"&&d!=="dingPersonnel"&&(0,S.eY)("COMMONEXTRA_HELP_CENTER")&&h().createElement(fe,null))}var le=re,M=t(4408);function N(u){var m=(0,X.useState)({helpCenter:(0,S.eY)("HEAD_HELP_CENTER_BUT")}),c=(0,ye.Z)(m,1),d=c[0],g=u.pageContainerParams,v=g===void 0?{}:g,C=u.noPadding,O=C===void 0?!1:C,k=u.isPersonal,j=k===void 0?!1:k,b=u.pageTitle,E=u.className,oe=E===void 0?"":E,de={extra:d.helpCenter?h().createElement(le,{extra:v.extra}):v.extra},o=(0,p.Z)((0,p.Z)({},v),de);return h().createElement("div",{className:"page-container-content ".concat(O?"page-container-noPadding":""," ").concat(j?"page-container-content_personal_background":""," ").concat(oe)},b&&h().createElement(M.Z,{title:b}),j?h().createElement(H.Z,null,u.children):h().createElement(H.Z,o,u.children))}var D=N},13836:function(Pe,Y,t){"use strict";t.r(Y),t.d(Y,{default:function(){return de}});var p=t(62029),ye=t(20228),X=t(11382),h=t(34792),H=t(48086),ne=t(12924),n=t.n(ne),z=t(91768),y=t(80991),J=t(28216),L=t(76651),se=t(64593),A=t(57068),Q=t(56075),ge=t(57663),B=t(71577),Z=t(6793),_=t(3407),q=(0,Z.me)(),S=_.Z[q].questionn.validation,K=_.Z[q].learning.validation,ie=o=>{var a=o,e;return a?a.length>60&&(e=S.investigateDetailNameLimitCopy):e=S.investigateDetailNameNull,e},fe=o=>o.id?"":S.investigateDetailSelectNull,re=(o,a)=>{var e;return a.termType===2&&(!o.startTime||!o.endTime)&&(e=S.investigateDetailValidityNull),e},le=o=>{var a;return o.standard.checked&&o.standard.certificate.id===""&&(a=K.learningAddItemRewardCert),o.reward.checked&&(!o.reward.value||o.reward.value<1||o.reward.value>999)&&(a=K.learningAddItemRewardPass),a},M={labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:21}}},N=t(21046),D=t(62615),u=t(52670),m=t(7584);class c extends n().Component{constructor(){super(...arguments);this.handlePropsSubmit=a=>{var e=this.props,s=e.handleSubmit,r=e.onTypeChange;r(a),s()},this.renderFooter=()=>{var a=this.props,e=a.isSubmitting,s=e===void 0?!1:e,r=a.onCancel,l=a.t;return n().createElement("footer",{className:""},n().createElement("div",{className:"cl-form-fixed-footer__container"},n().createElement(B.Z,{type:"primary",disabled:s,loading:s,onClick:()=>this.handlePropsSubmit("release")},l("common.release")),n().createElement(B.Z,{disabled:s,loading:s,onClick:()=>this.handlePropsSubmit("draft")},l("common.draft")),n().createElement(B.Z,{onClick:r},l("common.cancel"))))},this.checkedTools=a=>{var e=this.props.t,s;return a.id||(s=e("evaluation.pleaseEvaluation")),s},this.checkedSelectMode=a=>{var e=this.props.t,s;return a&&a.length===0&&(s=e("evaluation.selectMode")),s},this.renderDateRange=()=>{var a=this.props,e=a.values,s=a.t;return e.termType===1?null:n().createElement(y.gN,(0,p.Z)({component:D.C0,displayType:"Custom",name:"dateRange",label:s("questionn.investigateDetailValidity"),required:!0,defaultFieldList:e.dateRange,validate:r=>re(r,e)},M))}}render(){var a=this.props,e=a.values,s=a.t,r=a.isEdit,l=a.isCopy;return e.title=e.title.substring(0,60),n().createElement(n().Fragment,null,n().createElement(y.l0,{className:"cl-form"},n().createElement("p",{className:"cl-form__sectitle"},s("leftMenuLists.evaluateTask")),n().createElement(y.gN,(0,p.Z)({component:m.Z,name:"title",label:s("questionn.evaluationName"),required:!0,type:"text",style:{width:"100%"},placeholder:s("evaluation.evaluationPlaceholder"),defaultValue:e.title,validate:ie,maxLength:60},M)),n().createElement(y.gN,(0,p.Z)({label:s("evaluation.chooseEvaluation"),required:!0,component:N.oK,displayType:"Custom",name:"evaluationTools",defaultFieldList:e.evaluationTools,validate:this.checkedTools,isEdit:r,isCopy:l,from:"evaluation"},M)),n().createElement(y.gN,(0,p.Z)({component:N.K5,displayType:"Custom",name:"termType",label:s("course.validity"),required:!0,defaultFieldList:e.termType},M)),this.renderDateRange(),e.evaluationTools.type!=="tool"?n().createElement(y.gN,(0,p.Z)({component:N.EG,displayType:"Custom",name:"personnel_echo_request_list",label:s("personnelDevelope.appraiserSetting"),required:!0,isEdit:r,isCopy:l,validate:this.checkedSelectMode,values:e},M,this.props)):null,n().createElement("p",{className:"cl-form__divide"}),e.evaluationTools.type==="tool"?n().createElement(y.gN,{component:D.ww,displayType:"Custom",name:"employeeRange",mode:["part"],defaultFieldList:e.employeeRange,validate:u.FI}):null,n().createElement("p",{className:"cl-form__divide"}),n().createElement("p",{className:"cl-form__sectitle"},s("questionn.investigateDetailSecSetting")),n().createElement(y.gN,{component:N.q2,displayType:"Custom",name:"openResult",defaultFieldList:e.openResult}),n().createElement(y.gN,{component:N.NP,displayType:"Custom",name:"qualified",isEdit:r,isCopy:l,defaultFieldList:e.qualified}),n().createElement(y.gN,{component:N.kX,displayType:"Custom",name:"completeStand",isEdit:r,isCopy:l,defaultFieldList:e.completeStand,validate:le}),n().createElement(y.gN,{component:D.i0,displayType:"Custom",name:"supervisor",defaultFieldList:e.supervisor,createUserId:e.createUserId}),this.renderFooter(),n().createElement(D.I,null)))}}var d=(0,z.Z)()(c),g=t(11449),v=t(34773),C=t(4408),O=t(86726),k,j,b,E,oe=(k=(0,J.$j)(o=>{var a=o.user;return{modules:a.modules}}),j=Reflect.metadata("design:type",Function),b=Reflect.metadata("design:paramtypes",[void 0]),k(E=j(E=b(E=class extends ne.Component{constructor(a){super(a);this.getDetail=(e,s)=>{var r=this.state.initialParams,l=r.evaluationTools;(0,Q.hB)(e).then(T=>{var I=T.data,f=I.supervisor_id.split(","),w=I.supervisor_user_name.split(",");f=f.map((U,he)=>({type:2,id:U,name:w[he],show:!0}));var i=T.data,ee=i.user_list,ue=i.department_list,V=i.group_list,R=i.post_list,pe=i.open_result,x=i.product_id,te=i.model_id,me=i.start_time,G=i.end_time,W=i.term_type,ae=i.title,ce=i.type,F=i.authority_range,$=i.certificate_name,P=i.certificate_id,Ce=i.is_get_score,Se=i.finish_score,Ee=i.evaluation_tool_type,Ne=i.product_name,Ie=i.evaluation_way_self,Le=i.evaluation_way_superior,Ze=i.evaluation_tool_id,Me=i.finish_promote,Re=i.evaluation_rule_result_vo,Te=i.personnel_echo_request_list,ve=[];Ie==="true"&&ve.push("myself"),Le==="true"&&ve.push("superior");var xe=ee.map(U=>(l.type!=="tool"&&(U.reserve=!0),U));Te.forEach(U=>{U.personnel_echo_user_list.forEach(he=>{he.assessor_users.forEach(De=>{Boolean(s)||(De.reserve=!0)})})}),this.setState({initialParams:{selectMode:ve,title:s==="true"?"copy+".concat(ae):ae,evaluationTools:{model_id:te,type:Ee==="post_model"?"post":Ee,product_id:x,name:Ne,id:Ze},termType:W==="permanent"?1:2,dateRange:{startTime:W==="permanent"?null:(0,Z.p6)(me,"yyyy-MM-dd hh:mm:ss"),endTime:W==="permanent"?null:(0,Z.p6)(G,"yyyy-MM-dd hh:mm:ss")},employeeRange:{rangeType:2,rangeList:{dept:ue,post:R,group:V,user:xe}},openResult:pe===1,supervisor:{supervisorUserList:Boolean(s)?[]:f,isChecked:!1,visibleAuthScope:!0,hasMarking:!1,authScopeIsChecked:F==="true"},qualified:Me==="true",completeStand:{standard:{checked:P!==0,certificate:{id:P===0?"":P,name:$}},reward:{checked:Ce==="true",value:Ce==="true"?Se:1}},evaluation_rule_result_vo:Re,personnel_echo_request_list:Te},initType:ce,isLoading:!1})})},this.handleSubmit=(e,s)=>{s.setSubmitting(!0);var r=A.parse(this.props.history.location.search),l=r.id,T=r.isCopy,I=[];e.supervisor.supervisorUserList.forEach(P=>{I.push(P.id)});var f=this.state,w=f.initType,i=f.isNewEvaluationPlan,ee=this.props.t,ue=e.title,V=e.termType,R=e.evaluationTools,pe=e.openResult,x=e.employeeRange,te=e.dateRange,me=e.supervisor,G=e.completeStand,W=e.qualified,ae=e.evaluation_rule_result_vo,ce=e.personnel_echo_request_list,F=(0,v.b)(x.rangeList),$={title:(0,Z.fy)(ue),product_id:R.product_id,term_type:V===1?"permanent":"custom",start_time:V===1?"":te.startTime,end_time:V===1?"":te.endTime,open_result:pe?1:0,supervisor_Id:I.join(","),source:"evaluation",group_ids:x.rangeType===2?F.groupIds.join(","):"",department_ids:x.rangeType===2?F.deptIds.join(","):"",user_ids:x.rangeType===2?F.userIds.join(","):"",post_ids:x.rangeType===2?F.postIds.join(","):"",status:w==="release"?1:0,model_id:R.type==="tool"?R.model_id:"",authority_range:me.authScopeIsChecked,finish_promote:W,certificate_id:G.standard.certificate.id,is_get_score:G.reward.checked,finish_score:G.reward.value,evaluation_tool_type:R.type==="post"?"post_model":R.type,evaluation_way_self:e.selectMode.indexOf("myself")>-1,evaluation_way_superior:e.selectMode.indexOf("superior")>-1,evaluation_rule_result_vo:ae,personnel_echo_request_list:ce};l&&!Boolean(T)?($.isEdit=!0,$.editId=l):$.isEdit=!1,(0,Q.B5)($).then(P=>{l&&P.data.status||P.data.id?(H.default.success(ee(w==="draft"?"common.saveSuccess":"common.releaseSuccess")),i?L.m8.push("/talentedDevelopment/abilityEvaluation/evaluationPlan"):L.m8.push("/talentedDevelopment/evaluationMenu/evaluationPlan")):H.default.error(P.data.msg),s.setSubmitting(!1)}).catch(()=>{s.setSubmitting(!1)})},this.handleTypeChange=e=>{this.setState({initType:e})},this.handleCancel=()=>{var e=this.state.isNewEvaluationPlan;e?L.m8.push("/talentedDevelopment/abilityEvaluation/evaluationPlan"):L.m8.push("/talentedDevelopment/evaluationMenu/evaluationPlan")},this.state={initialParams:{selectMode:[],title:"",evaluationTools:{name:"",product_id:"",model_id:"",type:"model",id:""},termType:1,dateRange:{startTime:null,endTime:null},employeeRange:{rangeType:"",rangeList:{dept:[],post:[],group:[],user:[]}},supervisor:{supervisorUserList:[],isChecked:!0,visibleAuthScope:!0,authScopeIsChecked:!1,hasMarking:!1},openResult:!1,qualified:!1,completeStand:{standard:{checked:!1,certificate:{id:"",name:""}},reward:{checked:!1,value:1}},evaluation_rule_result_vo:{evaluation_way_self:!0,self_weight:100,self_details:{type:"self",user_num:1,need_all:0},evaluation_way_superior:!1,superior_weight:0,superior_details:{type:"superior",user_num:1,need_all:0},evaluation_way_same_level:!1,same_level_weight:0,same_level_details:{type:"sameLevel",user_num:1,need_all:0},evaluation_way_subordinate:!1,subordinate_weight:0,subordinate_details:{type:"subordinate",user_num:1,need_all:0}},user_ids:"",personnel_echo_request_list:[]},initType:"release",isLoading:!0,isNewEvaluationPlan:(0,O.F)("evaluationPlan",a.modules)==="856363557683974142"}}componentDidMount(){var a=A.parse(this.props.history.location.search),e=a.id,s=a.isCopy,r=L.m8.location.query.type,l=this.state.initialParams;switch(r){case"generalEvaluation":l.evaluationTools.type="model";break;case"postEvaluation":l.evaluationTools.type="post";break;default:l.evaluationTools.type="tool";break}this.setState({initialParams:l}),e?this.getDetail(e,s):this.setState({isLoading:!1})}render(){var a=this.state,e=a.initialParams,s=a.isLoading,r=this.props.t,l=A.parse(this.props.history.location.search),T=l.id,I=l.type,f=l.isCopy;if(s)return n().createElement("div",{className:"create_task-loading"},n().createElement(X.Z,{size:"large"}));var w=()=>{var i="";return I?i=r(I==="generalEvaluation"?"evaluationManage.createModel":"evaluationManage.createPostModel"):i=r("evaluationManage.createToolModel"),i};return n().createElement(g.Z,{pageContainerParams:{header:{title:T?Boolean(f)?"".concat(r("questionn.copyEvaluation")):"".concat(r("questionn.editEvaluation")):w()}}},n().createElement(C.Z,{title:T?Boolean(f)?"".concat(r("questionn.copyEvaluation")):"".concat(r("questionn.editEvaluation")):"".concat(r("questionn.newEvaluation"))}),n().createElement("div",{className:"create_task"},T&&n().createElement(se.q,null,n().createElement("title",null,r("questionn.editEvaluation"))),n().createElement("div",{className:"create_task_content"},n().createElement(y.J9,{initialValues:e,onSubmit:this.handleSubmit,render:i=>n().createElement(d,(0,p.Z)({},i,{title:"".concat(r("evaluationManage.addTestTask")),isEdit:!!T,isCopy:f,onCancel:this.handleCancel,onTypeChange:this.handleTypeChange}))}))))}})||E)||E)||E),de=(0,z.Z)()(oe)}}]);