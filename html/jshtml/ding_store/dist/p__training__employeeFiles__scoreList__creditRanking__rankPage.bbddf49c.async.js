(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[7524],{11449:function(G,M,t){"use strict";t.d(M,{Z:function(){return w}});var v=t(88986),s=t(33565),C=t(12924),m=t.n(C),x=t(3115),u=t(49111),O=t(19650),p=t(62029),d=t(57663),c=t(71577),l=t(91768),f=t(28216),N=t(37055),Z=t(10237);function h(R){var L=N.ZP.getHelpContentByMenuKey(),T={key:R};return Z.WY.get({url:L,params:T})}var D=t(74228),k=t.n(D),U=t(1164),n=t(76466),j=t(38642);class P extends m().Component{constructor(L){var T;super(L);T=this,this.getHelpContentByMenuKey=()=>{var E=this.props.defaultMenuKey;h(E).then(H=>{var b=H.data,Y=b.help_url,Q=b.video_url;this.setState({videoUrl:Q,helpUrl:Y})})},this.handleOpenHelpUrl=E=>{if((0,j.ve)()){window.open(E,"_blank");return}U.Z.targetTo({path:E,isExternalLink:!0})},this.handleOpenVideo=function(E){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T.props.t("helpCenter.video");T.setState(b=>({resourcePlayInfo:(0,v.Z)((0,v.Z)({},b.resourcePlayInfo),{},{resourceInfo:{originUrl:E,source:{FD:E,OD:E},contentType:"mp4"}}),previewInfo:(0,v.Z)((0,v.Z)({},b.previewInfo),{},{title:H,visible:!0,onCancel:T.handleCancelPreview})}))},this.handleCancelPreview=()=>{var E=this.state.previewInfo;this.setState({resourcePlayInfo:{mode:"preview",watchType:"video",resourceInfo:{}},previewInfo:(0,v.Z)((0,v.Z)({},E),{},{visible:!1})})},this.state={helpUrl:"",videoUrl:"",resourcePlayInfo:{autoPlay:!0,draggable:!0,mode:"preview",resourceInfo:{},watchType:"video"},previewInfo:{visible:!1,destroyOnClose:!0,title:L.t("helpCenter.video")||"\u89C6\u9891\u6307\u5BFC",onCancel:()=>{}}}}componentDidMount(){this.getHelpContentByMenuKey()}render(){var L=this.state,T=L.helpUrl,E=L.resourcePlayInfo,H=L.previewInfo,b=L.videoUrl,Y=this.props.t;return m().createElement("div",{className:k().helpCenter},b&&m().createElement(c.Z,{type:"link",className:k()["video-btn"],style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenVideo(b)},Y("helpCenter.video")),T&&m().createElement(c.Z,{type:"link",style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenHelpUrl(T)},Y("helpCenter.tutorial")),m().createElement(n.Z,(0,p.Z)({},E,{previewInfo:H})))}}var B=R=>({defaultMenuKey:R.currentRoute.menuKey});P.defaultProps={defaultMenuKey:""};var I=(0,f.$j)(B)((0,l.Z)()(P));function S(R){var L=R.extra,T=localStorage.getItem("dingPersonnel"),E=sessionStorage.getItem("dingPersonnel");return m().createElement(O.Z,null,L,T!=="dingPersonnel"&&E!=="dingPersonnel"&&(0,j.eY)("COMMONEXTRA_HELP_CENTER")&&m().createElement(I,null))}var A=S,y=t(4408);function z(R){var L=(0,C.useState)({helpCenter:(0,j.eY)("HEAD_HELP_CENTER_BUT")}),T=(0,s.Z)(L,1),E=T[0],H=R.pageContainerParams,b=H===void 0?{}:H,Y=R.noPadding,Q=Y===void 0?!1:Y,q=R.isPersonal,ee=q===void 0?!1:q,te=R.pageTitle,ae=R.className,se=ae===void 0?"":ae,re={extra:E.helpCenter?m().createElement(A,{extra:b.extra}):b.extra},$=(0,v.Z)((0,v.Z)({},b),re);return m().createElement("div",{className:"page-container-content ".concat(Q?"page-container-noPadding":""," ").concat(ee?"page-container-content_personal_background":""," ").concat(se)},te&&m().createElement(y.Z,{title:te}),ee?m().createElement(x.Z,null,R.children):m().createElement(x.Z,$,R.children))}var w=z},53701:function(G,M,t){"use strict";var v=t(12924),s=t.n(v),C=t(91768),m=t(64262),x=t(87722),u=t(12378);class O extends s().Component{constructor(){super(...arguments);this.handleTreeSelectChange=d=>{this.props.handleTreeSelectChange(d)},this.handleTimeRange=d=>{var c=d.startTime,l=d.endTime,f=d.dateStrings;if(!f.filter(Z=>Z).length){this.props.handleChangeDataRange({startTime:"",endTime:""});return}var N={startTime:c,endTime:l};this.props.handleChangeDataRange(N)},this.classifyChange=d=>{this.props.classifyChange&&this.props.classifyChange(d)}}render(){var d=this.props,c=d.showclassifyTree,l=d.defaultValue,f=d.showDateFilter,N=f===void 0?!0:f;return s().createElement("div",{className:"employee-file-extra"},s().createElement("div",{className:"select-org-tree cl-search-normal-width"},s().createElement(m.Z,{className:"cl-search-normal-width",parentId:"",checkable:!1,asyncLoad:!0,treeSelect:!0,handleTreeSelectChange:this.handleTreeSelectChange})),N&&s().createElement("div",{className:"date-range"},s().createElement(x.Z,{defaultValue:l,showTime:!0,format:"YYYY-MM-DD HH:mm",className:"cl-search-date-width",onCustomChange:this.handleTimeRange,timestamp:!0})),c&&s().createElement("div",{className:"classify-tree-select-ghk-only"},s().createElement(u.Z,{multiple:!0,allowClear:!0,onChange:this.classifyChange,showArrow:!0,defaultValue:[]})))}}O.defaultProps={showDateFilter:!0},M.Z=(0,C.Z)()(O)},29588:function(G,M,t){"use strict";var v=t(47673),s=t(4107),C=t(77883),m=t(21888),x=t(43358),u=t(34041),O=t(12924),p=t.n(O),d=t(80991),c=t(91768),l=t(43859),f=u.Z.Option;class N extends p().Component{constructor(){super(...arguments);this.state={add:1,numberValue:this.props.defaultValue},this.handleNumberChange=h=>{this.setState({numberValue:h});var D=this.state.add;D===1?this.props.formik.setFieldValue("inputScore",Math.abs(h)):this.props.formik.setFieldValue("inputScore",-Math.abs(h))},this.onChangeSelect=h=>{this.setState({add:h},()=>{this.handleNumberChange(0)})}}render(){var h=this.props,D=h.t,k=h.selectDisabled,U=h.isPoints,n=U===void 0?!1:U,j=this.state,P=j.add,B=j.numberValue;return p().createElement("div",null,p().createElement(s.Z.Group,{compact:!0},p().createElement(u.Z,{style:{width:60},defaultValue:P,onChange:this.onChangeSelect,disabled:k},p().createElement(f,{value:1},D("scoreRankingList.add")),p().createElement(f,{value:2},D("scoreRankingList.minus"))),p().createElement(m.Z,{min:0,max:99999,precision:0,value:B,onChange:this.handleNumberChange}),n&&P===2&&p().createElement("div",{className:"minus-points-tips",title:D("scoreRankingList.minusPointsTips")},D("scoreRankingList.minusPointsTips"))))}}M.Z=(0,l.Z)((0,c.Z)()((0,d.$j)(N)))},65702:function(G,M,t){"use strict";t.d(M,{I:function(){return v}});var v={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}}},36951:function(G,M,t){"use strict";t.d(M,{Pe:function(){return x},xK:function(){return u},u9:function(){return O}});var v=t(6793),s=t(3407),C=(0,v.me)(),m=s.Z[C].employeeSummary,x=p=>{var d;return p||(d=m.certificateGetTime),d},u=p=>{var d;return p||(d=m.certificateInvalidScore),d},O=p=>{var d;return p.length===0&&(d=m.chooseTeacher),d}},96172:function(G,M,t){"use strict";var v=t(66456),s=t(55313),C=t(43185),m=t(53251),x=t(62029),u=t(57663),O=t(71577),p=t(34792),d=t(48086),c=t(12924),l=t.n(c),f=t(91768),N=t(28216),Z=t(84874),h=t(37055),D=t(18329),k=t(97593),U={size:"large",destroyOnClose:!0,bodyStyle:{padding:"0"},maskClosable:!1};class n extends l().Component{constructor(P){super(P);this.onCancel=()=>{this.props.onCancel()},this.onOk=()=>{var I=this.props.t,S=this.state,A=S.importedList,y=S.checkTemplate;if(y==="false"){d.default.error(I("upload.typeError"));return}var z={access_token:window.localStorage.getItem("token"),new_file_name:A.map(w=>w.new_file_name).join(","),original_file_name:A.map(w=>w.original_file_name).join(",")};this.props.onCreate(z)},this.fileUpload=I=>{var S=this.props.t;I.file&&I.file.response&&(I.file.response.error_messages?this.setState({checkTemplate:I.file.response.check,importedList:[I.file.response],uploadErrMsg:I.file.response.error_messages}):d.default.error(S("upload.typeError")))},this.downloadTemplate=()=>{var I=this.props,S=I.islecturer,A=I.isScore;S?window.location.href="".concat(h.ZP.points.downloadImport(),"?access_token=").concat(window.localStorage.getItem("token")):A?window.location.href="".concat(h.ZP.ScoreList.downloadTemplate(),"?access_token=").concat(window.localStorage.getItem("token")):(0,k.N)({page:"downloadPointsTemplate",props:this.props,rest:{},sendType:"get"})};var B;P.isScore?B=h.ZP.ScoreList.uploadTemplateScore():P.islecturer?B=h.ZP.points.teacherPointsImport():B=h.ZP.points.uploadPointsTemplate(),this.state={importedList:[],uploadConfig:{name:"file",action:B,showUploadList:!1,headers:{"Enterprise-Id":localStorage.getItem("enterpriseId")},data:{access_token:window.localStorage.getItem("token")},onChange:this.fileUpload},uploadErrMsg:[],checkTemplate:""}}componentDidUpdate(P){P.visible!==this.props.visible&&this.props.visible&&this.setState({importedList:[],uploadErrMsg:[]})}render(){var P=this.state,B=P.importedList,I=P.uploadConfig,S=P.uploadErrMsg,A=this.props,y=A.t,z=A.visible,w=A.isScore,R=A.loading,L=[{title:y("component.fileName"),dataIndex:"file_name",key:"newfileName"},{title:y("component.successLabel"),dataIndex:"success_count"},{title:y("component.failedLabel"),dataIndex:"failed_count"}];return l().createElement(D.ZP,(0,x.Z)({},U,{title:y(w?"employeeSummary.multipleImportScore":"scoreRankingList.multipleImportPoints"),visible:z,confirmLoading:R,onCancel:this.onCancel,onOk:this.onOk}),l().createElement("div",{className:"import-score"},l().createElement("div",{className:"import-score-import"},l().createElement(O.Z,{className:"import-score-import-btn",onClick:this.downloadTemplate},l().createElement(Z.Z,{iconClass:"icon-icon_donwloadx1"}),y("component.downloadTem")),l().createElement("span",{className:"import-score-import-tip"},y(w?"employeeSummary.multipleImportScoreTips":"scoreRankingList.multipleImportPointsTips")),l().createElement(m.Z,(0,x.Z)({className:"import-score-import-btn right"},I),l().createElement(O.Z,{type:"primary"},l().createElement(Z.Z,{iconClass:"icon-import"}),B.length===0?y("component.importLabel"):y("employeeSummary.reImport")))),l().createElement("div",{className:"import-score-table"},l().createElement(s.Z,{dataSource:B,columns:L,bordered:!0,rowKey:T=>T.new_file_name,size:"middle",pagination:!1})),S.length>0?l().createElement("div",{className:"import-score-tip"},l().createElement("p",null,l().createElement(Z.Z,{iconClass:"icon-tishi"}),y("component.errorTips"),":"),S.map((T,E)=>l().createElement("p",{key:E},T))):null))}}n.defaultProps={visible:!1,onCancel:()=>{},onOk:()=>{}},M.Z=(0,N.$j)()((0,f.Z)()(n))},43094:function(G,M,t){"use strict";t.r(M),t.d(M,{default:function(){return De}});var v=t(12924),s=t.n(v),C=t(91768),m=t(11449),x=t(4408),u=t(62029),O=t(34792),p=t(48086),d=t(59250),c=t(13013),l=t(22385),f=t(31097),N=t(57663),Z=t(71577),h=t(30887),D=t(99210),k=t(71194),U=t(57016),n=t(88986),j=t(90631),P=t(84391),B=t(28216),I=t(53701),S=t(80991),A=t(29588),y=t(65702),z=t(36951),w=t(62615),R=t(52670),L=t(7584),T=t(2396);class E extends s().Component{render(){var e=this.props,a=e.values,r=e.mode,i=e.reserveUser,o=e.t;return s().createElement(S.l0,{className:"cl-form"},s().createElement(S.gN,(0,u.Z)({component:w.ww,displayType:"Custom",showSectitle:!1,name:"employeeRange",label:o("employeeSummary.registrationObject"),defaultFieldList:a.employeeRange,validate:R.FI,mode:r,orgProps:{title:o("employeeSummary.chooseRegisteredObject")},required:!0,reserveUser:i,onlyUser:!0,qwTicketShow:!0},y.I)),s().createElement(S.gN,(0,u.Z)({component:L.Z,name:"reason",label:o("employeeSummary.CreditBehavior"),required:!0,type:"text",defaultValue:a.reason,validate:g=>(0,T.QK)(g,o("employeeSummary.limitReasonWords")),placeholder:o("employeeSummary.limitReasonWords"),maxLength:30},y.I)),s().createElement(S.gN,(0,u.Z)({component:A.Z,name:"inputScore",label:o("employeeSummary.getScores"),required:!0,defaultValue:a.inputScore,validate:z.xK},y.I)),s().createElement(S.gN,(0,u.Z)({component:w.Mt,displayType:"Custom",name:"datePicker",label:o("employeeSummary.getTime"),required:!0,currentDay:!0,defaultFieldList:a.datePicker,validate:z.Pe},y.I)))}}var H=(0,C.Z)()(E),b=t(18329),Y=t(34773),Q=t(6793);class q extends s().Component{constructor(e){super(e);this.initRefFormik=a=>{this._refFormik=a},this.handleBeforeCreate=()=>{var a=this._refFormik;a.submitForm(),a.runValidations().then(r=>{if(!Object.keys(r).length){var i=a.state.values,o=i.employeeRange,g=i.reason,W=i.datePicker,V=i.inputScore,K=(0,Y.b)(o.rangeList),J={group_ids:o.rangeType==2?K.groupIds.join(","):"",department_ids:o.rangeType==2?K.deptIds.join(","):"",user_ids:o.rangeType==2?K.userIds.join(","):"",post_ids:o.rangeType==2?K.postIds.join(","):"",time:new Date(W).getTime(),award_reason:g,score:V,qy_we_chat_vo:o.qyWeChatVo};this.props.onCreate(J)}})},this.handleBeforeCancel=()=>{var a=this.props.onCancel;a()},this.state={initialParams:{employeeRange:{rangeType:"",rangeList:{dept:[],post:[],group:[],user:[]}},reason:"",inputScore:"",datePicker:null}}}componentDidUpdate(e){this.props.visible&&this.props.visible!==e.visible&&this.setState({initialParams:{employeeRange:{rangeType:"",rangeList:{dept:[],post:[],group:[],user:[]}},reason:"",inputScore:"",datePicker:(0,Q.k7)(new Date)}})}render(){var e=this.props,a=e.prefixCls,r=e.visible,i=e.mode,o=i===void 0?["part"]:i,g=e.reserveUser,W=g===void 0?[]:g,V=this.state.initialParams;return r?s().createElement(b.ZP,{wrapClassName:a,visible:r,title:this.props.t("employeeSummary.manualScore"),onCancel:this.handleBeforeCancel,onOk:this.handleBeforeCreate},s().createElement(S.J9,{ref:this.initRefFormik,initialValues:V,render:K=>s().createElement(H,(0,u.Z)({},K,{mode:o,reserveUser:W}))})):null}}var ee=(0,C.Z)()(q),te=t(96172),ae=t(14781),se=t(53431),re=t(55285),$=t(37055),_=t(10237),ne=t(97593),Me=t(43358),ie=t(34041),ce=t(87722),de=t(12378),X=ie.Z.Option;class oe extends s().Component{constructor(e){super(e);this.handleTimeRange=a=>{var r=a.startTime,i=a.endTime,o=a.dateStrings;if(!o.filter(W=>W).length){this.props.handleChangeDataRange({startTime:"",endTime:""});return}var g={startTime:r,endTime:i};this.props.handleChangeDataRange(g)},this.handleExport=()=>{this.props.handleExport()},this.handleDelete=()=>{this.props.handleDelete()},this.renderActionBtn=()=>{var a=this.props.selectedRowKeys;return s().createElement("div",null,s().createElement(Z.Z,{onClick:this.handleDelete,disabled:a.length===0},this.props.t("scoreRankingList.withdrawInBatch")),s().createElement(Z.Z,{type:"primary",onClick:this.handleExport},s().createElement(P.Z,null)," ",this.props.t("common.exportData")))},this.classifyChange=a=>{this.setState({classify:a||[]},()=>{this.props.classifyChange(a)})},this.actionTypeHandle=a=>{this.props.actionTypeHandle(a)},this.state={dateRange:{startTime:"",endTime:""},classify:[]}}render(){var e=this.props.defaultValue,a=this.state.classify;return s().createElement("header",{className:"score-record__queryrow"},s().createElement("section",{className:"score-record__queryrow__action"},s().createElement(ce.Z,{timestamp:!0,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",onCustomChange:this.handleTimeRange,defaultValue:e}),s().createElement(ie.Z,{defaultValue:"",style:{width:120},onChange:this.actionTypeHandle},s().createElement(X,{value:""},this.props.t("common.all")),s().createElement(X,{value:"study_plan"},this.props.t("common.studyTask")),s().createElement(X,{value:"study_project"},this.props.t("leftMenuLists.studyProject")),s().createElement(X,{value:"course"},this.props.t("leftMenuLists.onlineCourse")),s().createElement(X,{value:"exam"},this.props.t("exam.examTaskTitle")),s().createElement(X,{value:"submit_report"},this.props.t("submitReport.submitReportLabel"))),s().createElement(de.Z,{allowClear:!0,onChange:this.classifyChange,treeCheckable:!0,showArrow:!0,defaultValue:a}),this.renderActionBtn()))}}oe.defaultProps={prefixCls:"cl-listQueryRow",wrapCls:"",showCheckbox:!0,showSearch:!0,showBtn:!0,defaultRadioValue:"",radioList:[],onRadiosChange:()=>{},onSearch:()=>{},onCheckboxChange:()=>{}};var me=(0,C.Z)()(oe),pe=t(36202);class he extends s().Component{constructor(){super(...arguments);this.columns=[{title:this.props.t("scoreRankingList.time"),dataIndex:"createTime",key:"createTime",width:150,render:(e,a)=>"".concat((0,Q.p6)(a.createTime))},{title:this.props.t("scoreRankingList.creditBehavior"),dataIndex:"eventMsg",key:"eventMsg",width:300,render:(e,a)=>{var r=a.eventMsg;return s().createElement(f.Z,{title:r},s().createElement("div",{className:"cl-text-ellipsis"},r))}},{title:this.props.t("personal.taskType"),dataIndex:"actionType",key:"actionType",width:100},{title:this.props.t("component.questionBankClassify"),dataIndex:"classifyName",key:"classifyName",width:100,render:(e,a)=>{var r=a.classifyName;return r||"--"}},{title:this.props.t("common.credit"),dataIndex:"scoreStr",key:"scoreStr",width:88}],this.handleTableChange=e=>{this.props.onTableChange(e)},this.onSelectChange=e=>{this.props.onSelectChange(e)},this.scoreRecordTotal=()=>{var e=this.props,a=e.scoreRecordTotal,r=e.t;return s().createElement("div",{className:"score-record-total"},s().createElement("div",null," ",r("common.totalCredits")),s().createElement("div",null," ",a))}}render(){var e={onChange:this.onSelectChange},a=this.props,r=a.list,i=r===void 0?[]:r,o=a.loading,g=a.paginationParams,W=g===void 0?{}:g,V=a.headerTitle,K=(0,n.Z)((0,n.Z)({},$.XE.INITIAL_PAGINATION),W);return s().createElement("section",{className:"score-record__content__table"},s().createElement(pe.f,{className:"score_record_pro_table",bordered:!0,headerTitle:V(),columns:this.columns,rowKey:"id",dataSource:i,pagination:K,loading:o,onChange:this.handleTableChange,rowSelection:e,footer:()=>this.scoreRecordTotal(),tableUUID:"746dd05a-0add-4a80-8897-894c2c010d31"}))}}var ue=(0,C.Z)()(he);class ge extends s().Component{constructor(){super(...arguments);this.state={params:{excludeSelf:!1,departmentId:"",userId:this.props.userId,startTime:this.props.timeValue.startTime||"",endTime:this.props.timeValue.endTime||"",pageNumber:1,pageSize:20},tableLoading:!0,tableList:[],tableTotal:0,selectedRowKeys:[],currentRecord:{}},this.getScoreRecordTotal=()=>{_.WY.get({url:$.ZP.ScoreList.getScoreRecordTotal(),params:this.state.params}).then(e=>{this.setState({scoreRecordTotal:e.data.data})})},this.initTableList=()=>{this.setState({tableLoading:!0}),_.WY.get({url:$.ZP.ScoreList.getScoreRecord(),params:this.state.params}).then(e=>{setTimeout(()=>{this.setState({tableLoading:!1,tableList:e.data.list,tableTotal:e.data.total})},300),this.getScoreRecordTotal()})},this.getCurrentRecord=()=>{_.WY.get({url:$.ZP.ScoreList.getMyScoreSummary(),params:{userId:this.props.userId}}).then(e=>{this.setState({currentRecord:e.data})})},this.handleChangePagination=e=>{var a=e.current,r=e.pageSize;this.setState(i=>({params:(0,n.Z)((0,n.Z)({},i.params),{},{pageNumber:a,pageSize:r})}),()=>{this.initTableList()})},this.resetPagination=()=>new Promise(e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{pageNumber:1,pageSize:20})}),()=>{e()})}),this.handleChangeDataRange=e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{startTime:e.startTime,endTime:e.endTime})}),()=>{this.initTableList()})},this.exportScoreRecord=()=>{var e=this.props.t,a=this.state.params;U.Z.confirm({title:e("common.tip"),content:e("employeeSummary.exportPerScoresConfirm"),onOk:()=>{var r="";Object.keys(a).forEach(o=>{r+="".concat(o,"=").concat(a[o],"&")});var i="?".concat(r);(0,ne.N)({page:"creditRankingDetails",props:this.props,query:i})}})},this.onSelectChange=e=>{this.setState({selectedRowKeys:e})},this.showDeleteConfirm=()=>{var e=this.props.t,a=this;U.Z.confirm({title:e("scoreRankingList.repealConfirmTip"),content:"",okText:e("common.ok"),cancelText:e("common.cancel"),onOk(){a.deleteScores()}})},this.deleteScores=()=>{var e=$.ZP.ScoreList.deleteScore(),a=this.state.selectedRowKeys,r=this.props.t,i={score_record_ids:a};_.WY.post({url:e,data:i}).then(o=>{o.data.deleted==="true"&&(p.default.success(r("certificateRankingList.cancelSuccess")),this.setState(g=>({params:(0,n.Z)((0,n.Z)({},g.params),{},{pageNumber:1})}),()=>{this.initTableList()}),this.getCurrentRecord(),this.props.initScoreRank(),this.setState({selectedRowKeys:[]}))})},this.onCancel=()=>{this.setState({selectedRowKeys:[]}),this.props.onCancelRecord()},this.actionTypeHandle=e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{action_type:e})}),()=>{this.initTableList()})},this.classifyChange=e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{classify_id:e})}),()=>{this.initTableList()})},this.headerTitle=()=>{var e=this.state,a=e.params,r=e.selectedRowKeys,i=[a.startTime,a.endTime];return s().createElement(me,{handleChangeDataRange:this.handleChangeDataRange,handleExport:this.exportScoreRecord,handleDelete:this.showDeleteConfirm,classifyChange:this.classifyChange,actionTypeHandle:this.actionTypeHandle,selectedRowKeys:r,defaultValue:i})}}componentDidUpdate(e){this.props.visible&&this.props.visible!==e.visible&&this.props.userId&&this.setState({params:{excludeSelf:!1,departmentId:"",userId:this.props.userId,startTime:this.props.timeValue.startTime||"",endTime:this.props.timeValue.endTime||"",pageNumber:1,pageSize:20,classifyId:this.props.classifyId},tableList:[],tableTotal:0,selectedRowKeys:[],currentRecord:{}},()=>{this.initTableList(),this.getCurrentRecord()})}render(){var e=this.props.visible,a=this.state,r=a.tableTotal,i=a.tableList,o=a.tableLoading,g=a.params,W=a.scoreRecordTotal,V=a.currentRecord,K={total:r,current:g.pageNumber,pageSize:g.pageSize};return s().createElement(b.ZP,{visible:e,title:this.props.t("scoreRankingList.creditDetails"),onCancel:this.onCancel,footer:null,size:"large",width:1100,destroyOnClose:!0},e?s().createElement("div",{className:"score-record"},s().createElement("div",{className:"score-record__content"},s().createElement("div",{className:"score-record__queryrow__text"},this.props.t("scoreRankingList.obtainedTodayCredits"),"\uFF1A",s().createElement("span",{style:{marginRight:"18px"}},V.todayScore,this.props.t("common.score")),this.props.t("scoreRankingList.credits"),"\uFF1A",V.totalScore,this.props.t("common.score")),s().createElement(ue,{headerTitle:this.headerTitle,loading:o,paginationParams:K,list:i,onTableChange:this.handleChangePagination,onSelectChange:this.onSelectChange,scoreRecordTotal:W}))):null)}}var ve=(0,B.$j)()((0,C.Z)()(ge));class ye extends s().Component{constructor(){super(...arguments);this.state={recordProps:{userId:"",visible:!1},topThreeRank:["".concat("https://oss.coolcollege.cn","/1790885468209025024.png"),"".concat("https://oss.coolcollege.cn","/1790885470117433344.png"),"".concat("https://oss.coolcollege.cn","/1790885470335537152.png")]},this.headExtra=[{title:this.props.t("common.ranking"),dataIndex:"rank",key:"rank",width:90,fixed:"left",render:e=>e>3?e:s().createElement("img",{className:"indent-level-img",src:this.state.topThreeRank[e-1]})}],this.columns=[{title:this.props.t("common.credit"),dataIndex:"score",key:"score",fixed:"right",width:88},{title:this.props.t("common.operate"),width:120,key:"operate",fixed:"right",render:e=>s().createElement("span",{className:"cl-pointer",onClick:()=>this.getRecord(e)},this.props.t("common.viewDetails"))}],this.getRecord=e=>{this.setState(a=>({recordProps:(0,n.Z)((0,n.Z)({},a.recordProps),{},{visible:!0,userId:e.userId})}))},this.handleTableChange=(e,a)=>{this.props.onTableChange({current:e,pageSize:a})},this.onCancelRecord=()=>{this.setState(e=>({recordProps:(0,n.Z)((0,n.Z)({},e.recordProps),{},{visible:!1,userId:""})}))},this.initScoreRank=()=>{this.props.initScoreRank()}}render(){var e=this.state.recordProps,a=this.props,r=a.list,i=r===void 0?[]:r,o=a.loading,g=a.paginationParams,W=g===void 0?{}:g,V=a.timeValue,K=a.classifyId,J=a.headerTitle,Ie=a.toolBarRender,Le=(0,n.Z)((0,n.Z)({},$.XE.INITIAL_PAGINATION),W);return s().createElement("section",{className:"score-list__content__table"},s().createElement("div",{className:"credit-ranking-content-list"},s().createElement(re.Z,{headExtra:this.headExtra,columns:this.columns,rowKey:"userId",dataSource:i,loading:o,headerTitle:J(),toolBarRender:Ie,pagination:!1,tableUUID:"27f07593-c5ac-4ed0-8bf6-c726e43ba6b3"})),s().createElement("div",{className:"credit-ranking-pagination-wrapper"},s().createElement(se.Z,(0,u.Z)({},Le,{onChange:this.handleTableChange,className:"credit-ranking-pagination"}))),s().createElement(ve,(0,u.Z)({},e,{onCancelRecord:this.onCancelRecord,initScoreRank:this.initScoreRank,timeValue:V,classifyId:K})))}}var Ee=(0,C.Z)()(ye),le=t(86726),Ce=t(60168),fe=t(48479),Te=F=>({userInfo:F.user,qyShield:F.user.qyShield});class Pe extends s().Component{constructor(){super(...arguments);this.state={allowActions:(0,le.V9)("creditRanking",this.props.userInfo.modules),params:{excludeSelf:!1,departmentId:"",userId:"",startTime:"",endTime:"",pageNumber:1,pageSize:20},tableLoading:!0,tableList:[],tableTotal:0,manualProps:{visible:!1},templateProps:{visible:!1},defaultValue:["",""]},this.initTableList=()=>{this.setState({tableLoading:!0}),_.WY.get({url:$.ZP.ScoreList.getScoreRank(),params:this.state.params}).then(e=>{setTimeout(()=>{this.setState({tableLoading:!1,tableList:e.data.list,tableTotal:e.data.total})},300)})},this.handleChangePagination=e=>{var a=e.current,r=e.pageSize;this.setState(i=>({params:(0,n.Z)((0,n.Z)({},i.params),{},{pageNumber:a,pageSize:r})}),()=>{this.initTableList()})},this.resetPagination=()=>new Promise(e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{pageNumber:1,pageSize:20})}),()=>{e()})}),this.handleTreeSelectChange=e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{pageNumber:1,departmentId:e})}),()=>{this.initTableList()})},this.handleChangeDataRange=e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{pageNumber:1,startTime:e.startTime,endTime:e.endTime})}),()=>{this.initTableList()})},this.handleSearch=(e,a)=>{var r={keyword:a===""?e:"",pageNumber:1,userIds:a};this.setState(i=>({params:(0,n.Z)((0,n.Z)({},i.params),r)}),()=>{this.initTableList()})},this.exportScoreRank=()=>{var e=this.props.t,a="",r=this.state.params;U.Z.confirm({title:e("common.tip"),content:e("employeeSummary.exportCreditsConfirm"),onOk:()=>{Object.keys(r).forEach(o=>{a+="".concat(o,"=").concat(r[o],"&")});var i="?".concat(a);(0,ne.N)({page:"creditRanking",props:this.props,query:i})}})},this.importScore=()=>{var e=this.state.allowActions,a=(0,le.H3)("import_score",e);if(!a)return null;var r=this.props.t,i=s().createElement(D.Z,{onClick:this.handleMenuClick},s().createElement(D.Z.Item,{key:"manual"},r("employeeSummary.manualScore")),s().createElement(D.Z.Item,{key:"template"},r("employeeSummary.templateScore")));return s().createElement(c.Z,{overlay:i},s().createElement(f.Z,{placement:"topLeft",title:r("employeeSummary.importScoresTip")},s().createElement(Z.Z,{type:"primary",ghost:!0},s().createElement(j.Z,null),r("employeeSummary.importScores"))))},this.handleMenuClick=e=>{var a=e.key;switch(a){case"manual":this.handleManualScore();break;case"template":this.handleTemplateScore();break;default:break}},this.handleManualScore=()=>{this.setState({manualProps:{visible:!0}})},this.handleManualCancel=()=>{this.setState({manualProps:{visible:!1}})},this.handleManualOk=e=>{var a=this.props.t;_.WY.post({url:$.ZP.ScoreList.manualScore(),data:e}).then(r=>{r.data.result==="true"&&(p.default.success(a("employeeSummary.succeedManual")),this.initTableList())}),this.handleManualCancel()},this.handleTemplateScore=()=>{this.setState({templateProps:{visible:!0}})},this.handleTemplateCancel=()=>{this.setState({templateProps:{visible:!1}})},this.handleTemplateOk=e=>{var a=this.props.t,r=$.ZP.ScoreList.SubmitTemplateScore();_.qg.post({url:r,data:e}).then(i=>{i.data.check==="true"?(p.default.success(a("employeeSummary.succeedImport")),this.handleTemplateCancel(),this.initTableList()):p.default.info(i.data.error_message)})},this.classifyChange=e=>{this.setState(a=>({params:(0,n.Z)((0,n.Z)({},a.params),{},{pageNumber:1,classify_id:e.join(",")})}),()=>{this.initTableList()})},this.renderProTableHeaderTitle=()=>{var e=this.props.t;return s().createElement("div",{className:"action"},s().createElement(Z.Z,{type:"primary",onClick:this.exportScoreRank,style:{marginRight:"8px"}},s().createElement(P.Z,null),e("common.exportData")),this.importScore())},this.renderProTableToolBarRender=()=>{var e=this.props.t;return s().createElement("div",{className:"search"},s().createElement(fe.Z,{onSearch:this.handleSearch,width:"272px",placeholder:e("searchInputPlaceholder.userName"),maxLength:50}))}}componentDidMount(){(0,Ce.C)(e=>{this.setState({defaultValue:e},()=>{this.handleChangeDataRange({startTime:e[0],endTime:e[1]})})},"timestamp")}render(){var e=this.state,a=e.tableTotal,r=e.tableList,i=e.tableLoading,o=e.params,g=e.manualProps,W=e.templateProps,V=e.defaultValue,K={total:a,current:o.pageNumber,pageSize:o.pageSize},J={startTime:o.startTime||"",endTime:o.endTime||""};return s().createElement(s().Fragment,null,s().createElement(I.Z,{handleTreeSelectChange:this.handleTreeSelectChange,handleChangeDataRange:this.handleChangeDataRange,showclassifyTree:!0,classifyChange:this.classifyChange,defaultValue:V}),s().createElement("div",{className:"score-list__content"},s().createElement(Ee,{headerTitle:this.renderProTableHeaderTitle,toolBarRender:this.renderProTableToolBarRender,loading:i,paginationParams:K,list:r,onTableChange:this.handleChangePagination,initScoreRank:this.initTableList,timeValue:J,classifyId:o.classify_id})),s().createElement(ee,(0,u.Z)({},g,{onCancel:this.handleManualCancel,onCreate:this.handleManualOk})),s().createElement(te.Z,(0,u.Z)({},W,{onCancel:this.handleTemplateCancel,onCreate:this.handleTemplateOk,isScore:!0})))}}var Se=(0,B.$j)(Te)((0,C.Z)()(Pe));class Re extends s().Component{constructor(e){super(e);this.state={}}render(){return s().createElement(m.Z,{pageContainerParams:{header:{title:this.props.t("report.creditRanking")}}},s().createElement(x.Z,{title:this.props.t("report.creditRanking")}),s().createElement("div",{className:"score-list sticky-table"},s().createElement("div",{className:"score-list__content",ref:e=>this.tableRef=e},s().createElement(Se,null))))}}var De=(0,C.Z)()(Re)},60168:function(G,M,t){"use strict";t.d(M,{C:function(){return d}});var v=t(37055),s=t(6793),C=t(78138),m=t.n(C),x=t(10237),u=c=>{var l=parseInt((Date.parse(new Date)-c.packageBeginDate)/864e5),f={isVip:c.isVip,dayValue:c.isVip===4?l:c.remainDays,packageBeginDate:(0,s.p6)(c.packageBeginDate,"yyyy-MM-dd"),packageEndDate:(0,s.p6)(c.packageEndDate,"yyyy-MM-dd"),storagePercent:c.usedCapacityGb/c.capacityGb*100,usedCapacityGb:c.usedCapacityGb,capacityGb:c.capacityGb,version:c.version,packageName:c.packageName,endTime:c.endTime?(0,s.p6)(c.endTime,"yyyy-MM-dd"):""};return f},O=()=>{var c=v.ZP.Dashboard.versionInfo();return x.WY.get({url:c})},p=c=>{O().then(l=>{c(u(l.data))}).catch(l=>{console.log(l)})},d=(c,l)=>{var f="",N=f.start,Z=f.end;O().then(h=>{var D=m()(),k=m()().subtract(6,"month"),U=m()(u(h.data).packageBeginDate);Z=l==="timestamp"?D.valueOf():D.format("yyyy-MM-DD"),k>U?N=l==="timestamp"?k.valueOf():k.format("yyyy-MM-DD"):N=l==="timestamp"?U.valueOf():U.format("yyyy-MM-DD"),c([N,Z])}).catch(h=>{console.log(h)})}}}]);
