(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[1617],{66123:function(Ie,ne,e){"use strict";e.d(ne,{T:function(){return I},t:function(){return ge}});var a=e(71194),K=e(57016),P=e(22385),t=e(31097),G=e(88986),re=e(57361),se=e(33565),V=e(9754),j=e.n(V),_=e(12924),g=e.n(_),ie=e(91768),x=e(28216),u=e(57068),o=e(76651),C=e(87983),y=e.n(C),A=e(99367),m=e(98233),R=e(67479),le=e(1164);function De(d){var Y=d.t,O=d.title,L=d.visible,w=d.uuid,te=d.id,U=d.fieldNames,ae=d.from,ue=d.getList,de=d.onCancel,ye=d.hasTitleLink,z=ye===void 0?!0:ye,Ze=(0,x.v9)(M=>{var Z=M.advancedSetting;return{themeColor:Z.themeColor}}),Ee=Ze.themeColor,Te=(0,_.useState)({}),b=(0,se.Z)(Te,2),xe=b[0],Be=b[1],me={task:"learning",employee:"employee"},Le=(M,Z)=>{if(M)return(0,m.nn)({origin:me[ae],search:u.stringify({id:Z.id,title:Z.title,origin:me[ae]})});var D={},S="";switch(ae){case"task":D={id:Z.id,taskId:te,taskType:ae},S="/training/learning/management/monitor/exam?".concat(u.stringify(D));break;case"employee":D={id:Z.id,taskId:te,taskType:ae},S="/training/learning/task/employeeResult/exam?".concat(u.stringify(D));break;default:break}return S},B=function(){var M=(0,re.Z)(j().mark(function Z(){var D,S,be,p=arguments;return j().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:if(D=p.length>0&&p[0]!==void 0?p[0]:"unKnow",S=p.length>1?p[1]:void 0,D!=="unKnow"){ce.next=7;break}return ce.next=5,(0,R.D)(S.id);case 5:return be=ce.sent,ce.abrupt("return",Le(be,S));case 7:return ce.abrupt("return",Le(D,S));case 8:case"end":return ce.stop()}},Z)}));return function(){return M.apply(this,arguments)}}(),$=function(){var M=(0,re.Z)(j().mark(function Z(D){var S;return j().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(z){p.next=2;break}return p.abrupt("return");case 2:return p.next=4,B(D.new_exam==="true",D);case 4:S=p.sent,o.m8.push(S);case 6:case"end":return p.stop()}},Z)}));return function(D){return M.apply(this,arguments)}}(),Ce=function(){var M=(0,re.Z)(j().mark(function Z(D){var S;return j().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(D.pending_count!==0){p.next=2;break}return p.abrupt("return");case 2:return p.next=4,(0,m.Md)(D.new_exam==="true",{id:D.id,taskId:te,status:"pending",from:"projectNew"});case 4:S=p.sent,D.new_exam==="true"?le.Z.targetTo({path:S}):o.m8.push(S);case 6:case"end":return p.stop()}},Z)}));return function(D){return M.apply(this,arguments)}}(),he=M=>ue((0,G.Z)((0,G.Z)({},M),{},{id:te}));return(0,_.useEffect)(()=>{Be({query:M=>he(M),columns:[{title:Y("exam.testName"),dataIndex:U&&U.title||"title",width:300,key:"id",render:(M,Z)=>g().createElement(t.Z,{title:Z.title},g().createElement("div",{style:z?{color:Ee,cursor:"pointer",width:300}:{},className:"cl-text-ellipsis",onClick:()=>{$(Z)}},Z[U&&U.title||"title"]))},{title:Y("exam.toBeGraded"),width:120,dataIndex:U&&U.pending_count||"pending_count",key:U&&U.pending_count||"pending_count",render:(M,Z)=>Z[U&&U.pending_count||"pending_count"]},{title:Y("exam.operate"),key:"operate",width:localStorage.getItem("lng")==="en_us"?210:100,fixed:"right",buttons:[{name:Y("trainingProject.markingPapers"),disabled:M=>!(M.pending_count>0&&M.reading_operation==="has_operation"),handleClick:M=>Ce(M)}]}]})},[U,w,te]),g().createElement(K.Z,{title:O||Y("myExamTask.marking"),visible:L,width:600,bodyStyle:{padding:"0 24px 24px"},footer:null,onCancel:de},xe.query?g().createElement("div",{className:y()["pending-pager-container"]},g().createElement(A.Z,{uniKey:"",uuid:w,queryParams:xe,pagination:!0})):null)}var ge=(0,ie.Z)()(De),we=e(20136),oe=e(55241),Re=e(38778),pe=e.n(Re),ee=e(84874);function c(d){var Y=d.contentString,O=d.scrollElement,L=d.visible,w=d.authJudge,te=d.placement,U=te===void 0?"bottom":te,ae=d.closeGuide,ue=d.zIndex,de=ue===void 0?100:ue,ye=(0,_.useState)(!1),z=(0,se.Z)(ye,2),Ze=z[0],Ee=z[1],Te=xe=>{xe.stopPropagation(),O&&!O.isRelative&&(document.querySelector('[class*="'.concat(O.classContent,'"]')).style.position=""),Ee(!1),typeof ae=="function"&&ae()},b=()=>g().createElement("div",{className:pe()["intro-content"]},Y,g().createElement("span",{className:pe().close,onClick:xe=>Te(xe)},g().createElement(ee.Z,{iconClass:"icon-guanbi1",size:"12px"})));return(0,_.useEffect)(()=>{L&&!Ze&&(typeof w=="function"&&w()||!w)&&(O&&!O.isRelative&&(document.querySelector('[class*="'.concat(O.classContent,'"]')).style.position="relative"),setTimeout(()=>{Ee(!0)},500))},[L]),g().createElement(oe.Z,{visible:Ze,placement:U,title:"",overlayClassName:pe()["intro-card"],content:b(),zIndex:de,getPopupContainer:()=>document.querySelector('[class*="'.concat(O.classContent,'"]'))},d.children)}var W=d=>({userId:d.user.id||window.localStorage.getItem("uid")}),I=(0,x.$j)(W)((0,ie.Z)()(c))},11449:function(Ie,ne,e){"use strict";e.d(ne,{Z:function(){return ee}});var a=e(88986),K=e(33565),P=e(12924),t=e.n(P),G=e(3115),re=e(49111),se=e(19650),V=e(62029),j=e(57663),_=e(71577),g=e(91768),ie=e(28216),x=e(37055),u=e(10237);function o(c){var W=x.ZP.getHelpContentByMenuKey(),I={key:c};return u.WY.get({url:W,params:I})}var C=e(74228),y=e.n(C),A=e(1164),m=e(76466),R=e(38642);class le extends t().Component{constructor(W){var I;super(W);I=this,this.getHelpContentByMenuKey=()=>{var d=this.props.defaultMenuKey;o(d).then(Y=>{var O=Y.data,L=O.help_url,w=O.video_url;this.setState({videoUrl:w,helpUrl:L})})},this.handleOpenHelpUrl=d=>{if((0,R.ve)()){window.open(d,"_blank");return}A.Z.targetTo({path:d,isExternalLink:!0})},this.handleOpenVideo=function(d){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:I.props.t("helpCenter.video");I.setState(O=>({resourcePlayInfo:(0,a.Z)((0,a.Z)({},O.resourcePlayInfo),{},{resourceInfo:{originUrl:d,source:{FD:d,OD:d},contentType:"mp4"}}),previewInfo:(0,a.Z)((0,a.Z)({},O.previewInfo),{},{title:Y,visible:!0,onCancel:I.handleCancelPreview})}))},this.handleCancelPreview=()=>{var d=this.state.previewInfo;this.setState({resourcePlayInfo:{mode:"preview",watchType:"video",resourceInfo:{}},previewInfo:(0,a.Z)((0,a.Z)({},d),{},{visible:!1})})},this.state={helpUrl:"",videoUrl:"",resourcePlayInfo:{autoPlay:!0,draggable:!0,mode:"preview",resourceInfo:{},watchType:"video"},previewInfo:{visible:!1,destroyOnClose:!0,title:W.t("helpCenter.video")||"\u89C6\u9891\u6307\u5BFC",onCancel:()=>{}}}}componentDidMount(){this.getHelpContentByMenuKey()}render(){var W=this.state,I=W.helpUrl,d=W.resourcePlayInfo,Y=W.previewInfo,O=W.videoUrl,L=this.props.t;return t().createElement("div",{className:y().helpCenter},O&&t().createElement(_.Z,{type:"link",className:y()["video-btn"],style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenVideo(O)},L("helpCenter.video")),I&&t().createElement(_.Z,{type:"link",style:{borderWidth:"0px",padding:"0"},onClick:()=>this.handleOpenHelpUrl(I)},L("helpCenter.tutorial")),t().createElement(m.Z,(0,V.Z)({},d,{previewInfo:Y})))}}var De=c=>({defaultMenuKey:c.currentRoute.menuKey});le.defaultProps={defaultMenuKey:""};var ge=(0,ie.$j)(De)((0,g.Z)()(le));function we(c){var W=c.extra,I=localStorage.getItem("dingPersonnel"),d=sessionStorage.getItem("dingPersonnel");return t().createElement(se.Z,null,W,I!=="dingPersonnel"&&d!=="dingPersonnel"&&(0,R.eY)("COMMONEXTRA_HELP_CENTER")&&t().createElement(ge,null))}var oe=we,Re=e(4408);function pe(c){var W=(0,P.useState)({helpCenter:(0,R.eY)("HEAD_HELP_CENTER_BUT")}),I=(0,K.Z)(W,1),d=I[0],Y=c.pageContainerParams,O=Y===void 0?{}:Y,L=c.noPadding,w=L===void 0?!1:L,te=c.isPersonal,U=te===void 0?!1:te,ae=c.pageTitle,ue=c.className,de=ue===void 0?"":ue,ye={extra:d.helpCenter?t().createElement(oe,{extra:O.extra}):O.extra},z=(0,a.Z)((0,a.Z)({},O),ye);return t().createElement("div",{className:"page-container-content ".concat(w?"page-container-noPadding":""," ").concat(U?"page-container-content_personal_background":""," ").concat(de)},ae&&t().createElement(Re.Z,{title:ae}),U?t().createElement(G.Z,null,c.children):t().createElement(G.Z,z,c.children))}var ee=pe},38610:function(Ie,ne,e){"use strict";e.d(ne,{sX:function(){return K},KN:function(){return P},vE:function(){return t},q8:function(){return G},h2:function(){return re},rb:function(){return se},o9:function(){return V},ZJ:function(){return j},ez:function(){return _},HD:function(){return g},fr:function(){return ie},$c:function(){return x},CU:function(){return u},Pw:function(){return o}});var a=e(78001),K=[{name:a.Z.t("courseManage.published"),color:"#52C41A",key:"published"},{name:a.Z.t("examination.draft"),color:"#A6A6A6",key:"draft"},{name:a.Z.t("examination.expired"),color:"#F5222D",key:"expired"},{name:a.Z.t("examination.noStart"),color:"#69A4E7",key:"noStart"}],P=[{name:a.Z.t("examination.passed"),color:"#52C41A",key:"passed"},{name:a.Z.t("examination.absence"),color:"#A6A6A6",key:"absence"},{name:a.Z.t("examination.failed"),color:"#F5222D",key:"failed"},{name:a.Z.t("examination.pending"),color:"#69A4E7",key:"pending"},{name:a.Z.t("examination.waiting"),color:"#A6A6A6",key:"waiting"},{name:a.Z.t("examination.inProgress"),color:"#69A4E7",key:"inProgress"}],t={exam:{name:a.Z.t("common.examManage"),path:"/training/examination/newPlan"},learning:{name:a.Z.t("common.studyTask"),path:"/training/learning/task/management"},employee:{name:a.Z.t("common.newEmployeeTask"),path:"/training/learning/task/employee"},learningResource:{name:a.Z.t("learning.learningProjectAddTitle"),path:"/knowledgeBase/learningResources/studyProject"},trainingProject:{name:a.Z.t("trainingProject.trainProject"),path:"/knowledgeBase/learningResources/studyProject"},project:{name:a.Z.t("trainingProject.trainProject"),path:"/knowledgeBase/learningResources/studyProject"}},G={draft:{reverse:"published",text:a.Z.t("common.releaseSuccess"),btnText:a.Z.t("examination.release"),content:a.Z.t("examination.releaseConfirm")},published:{reverse:"draft",text:a.Z.t("examination.revokeSuccess"),btnText:a.Z.t("examination.withdraw"),content:a.Z.t("examination.revokeConfirm")}},re={latest:a.Z.t("myExamTask.newest"),highest:a.Z.t("myExamTask.highest")},se={disable:a.Z.t("examination.notAllow"),unlimited:a.Z.t("examination.unlimited"),custom:a.Z.t("integralMall.selfDefined")},V={afterCommit:a.Z.t("examination.afterCommit"),afterExamPassed:a.Z.t("exam.retakeSettingTrueRow3Checkbox3"),afterExamEnd:a.Z.t("examination.examEnd"),disableViewing:a.Z.t("examination.notShow")},j={afterCommit:a.Z.t("exam.retakeSettingFalseRow1Checkbox1"),afterExamPassed:a.Z.t("exam.retakeSettingTrueRow3Checkbox3"),afterExamEnd:a.Z.t("examination.examEnd"),disableViewing:a.Z.t("examination.notShow")},_={disableViewing:a.Z.t("examination.notShow"),justRightWrong:a.Z.t("examination.justRightWrong"),answerAnalysis:a.Z.t("exam.retakeSettingTrueRow4Checkbox1"),onlyError:a.Z.t("examination.onlyWrong")},g={fixed:a.Z.t("exam.fixed"),random:a.Z.t("exam.random")},ie={manual:a.Z.t("exam.manualScoring"),system:a.Z.t("exam.systemScoring")},x={score:a.Z.t("examination.score"),subsection:a.Z.t("examination.subsection"),noCredit:a.Z.t("examination.noScore")},u={unlimited:a.Z.t("examination.unlimited"),stopWhenPassed:a.Z.t("examination.terminationAfterPassing")},o={unlimited:a.Z.t("examination.pureUnlimited"),pc:a.Z.t("examination.onlyPC"),mobile:a.Z.t("examination.onlyMobile")}},58866:function(Ie,ne,e){"use strict";e.d(ne,{K:function(){return pe}});var a=e(22385),K=e(31097),P=e(57663),t=e(71577),G=e(34792),re=e(48086),se=e(71194),V=e(57016),j=e(57361),_=e(9754),g=e.n(_),ie=e(12924),x=e.n(ie),u=e(57068),o=e(8212),C=e(76651),y=e(28216),A=e(91768),m=e(38610),R=e(72391),le=e.n(R),De=e(35085),ge=e(86726),we=e(38642),oe=ee=>{var c=ee.data,W=ee.refresh,I=ee.t,d=ee.modules,Y=ee.userId,O=ee.origin,L=O===void 0?"exam":O,w=C.m8.location.query.id,te=c.status,U=c.title,ae=c.period_assign,ue=m.q8[te],de=ue.reverse,ye=ue.text,z=ue.btnText,Ze=ue.content,Ee=(0,ge.V9)("newPlan",d),Te=c.create_user===Y,b=function(){var $=(0,j.Z)(g().mark(function Ce(){var he,M,Z,D,S;return g().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(he=ke=>{var ce=ke.content,Ve=ke.id,Ne=ke.reverse,Ye=ke.text;return V.Z.confirm({title:I("common.tip"),content:ce,okText:I("common.ok"),cancelText:I("common.cancel"),onOk:()=>{(0,De.oj)({planId:Ve,data:{status:Ne}}).then(ze=>{ze.data.code==="200000"&&(re.default.success(Ye),W())})}})},de!=="draft"){p.next=11;break}if(!(ae==="true"||ae===!0)){p.next=11;break}return p.next=5,(0,De.ry)(c.id);case 5:if(M=p.sent,Z=M.data,D=Z.code,S=Z.data.has_end,D!=="200000"){p.next=11;break}if(!(S==="false"||S===!1)){p.next=11;break}return p.abrupt("return",he({content:x().createElement(pe,{t:I}),id:w,reverse:de,text:ye}));case 11:return p.abrupt("return",he({content:Ze,id:w,reverse:de,text:ye}));case 12:case"end":return p.stop()}},Ce)}));return function(){return $.apply(this,arguments)}}(),xe=()=>{var $="/training/examination/newPlan/edit?planId=".concat(w);C.m8.push($)},Be=Te||(0,ge.H3)("publish_rollback",Ee),me=()=>{var $=c.id,Ce=c.title,he=c.exam_duration,M=C.m8.location.query.taskId,Z={project:"studyProject",learning:"studyTask",employee:"newEmployeeTask",exam:"exam"},D=u.stringify({source:Z[L]||"exam",type:"exam",id:!L||L&&L==="exam"?$:M,course_id:$}),S={title:Ce,site1:{label:I("exam.examTime"),value:"".concat(he).concat(I("pk.min"))},from:"exam",path:(0,we.jr)({pc_url:"/share-transit?".concat(D),mobile_url:"/share-transit?".concat(D),pc_type:"student",mobile_type:"h5"})};x().$share.show({detail:S})},Le=Te||(0,ge.H3)("edit",Ee),B=[{label:I("common.share"),key:"share",icon:null,type:"primary",style:{margin:"0 16px"},disabled:c.status==="draft",disabledTip:I("examination.publishOperateTip"),onClick:me,visible:Te||(0,ge.H3)("share",Ee)},{label:I("common.edit"),key:"edit",icon:x().createElement(o.Z,null),type:"primary",style:{margin:"0 16px"},disabled:c.status==="published",disabledTip:I("examination.revertOperateTip"),onClick:xe,visible:Le&&L!=="project"&&L!=="learning"&&L!=="employee"},{label:z,key:c.status,icon:null,type:"primary",style:{margin:"0 16px"},disabled:!1,onClick:b,visible:Be&&L!=="project"&&L!=="learning"&&L!=="employee"}];return x().createElement("div",{className:le()["information-title"]},x().createElement("div",{className:le().title},U),x().createElement("div",{className:le()["button-group"]},B.map($=>{var Ce=$.key,he=$.type,M=$.style,Z=$.icon,D=$.disabled,S=$.disabledTip,be=S===void 0?"":S,p=$.label,ke=$.visible,ce=$.onClick;return ke&&x().createElement(K.Z,{key:Ce,placement:"top",title:D&&be},x().createElement(t.Z,{type:he,style:M,icon:Z,disabled:D,onClick:ce},p))})))};oe.defaultProps={data:{},refresh:()=>{}};var Re=ee=>({modules:ee.user.modules,userId:ee.user.id});ne.Z=(0,y.$j)(Re)((0,A.Z)()(oe));var pe=ee=>{var c=ee.t;return x().createElement("div",{className:le()["confirm-content"]},x().createElement("div",{className:le()["content-top"]},x().createElement("span",{className:le()["top-tip"]},c("examination.revertModalContent"),"\uFF1F")),x().createElement("span",{className:le()["bottom-tip"]},c("examination.revertModalContentTip")))}},7487:function(Ie,ne,e){"use strict";e.r(ne),e.d(ne,{default:function(){return Mt}});var a=e(88986),K=e(33565),P=e(12924),t=e.n(P),G=e(28216),re=e(91768),se=e(59926),V=e.n(se),j=e(62029),_=e(47673),g=e(4107),ie=e(43358),x=e(34041),u=e(88983),o=e(47933),C=e(49111),y=e(19650),A=e(57663),m=e(71577),R=e(59250),le=e(13013),De=e(54029),ge=e(62529),we=e(34792),oe=e(48086),Re=e(30887),pe=e(99210),ee=e(22385),c=e(31097),W=e(57361),I=e(14965),d=e(11448),Y=e(71194),O=e(57016),L=e(9754),w=e.n(L),te=e(57119),U=e(57254),ae=e(49101),ue=e(84391),de=e(76651),ye=e(78138),z=e.n(ye),Ze=e(57068),Ee=e(85026),Te=e(71858),b=e.n(Te),xe=e(99367),Be=e(48479),me=e(35085),Le=e(1164),B=e(86726),$=e(84874),Ce=e(67479),he=e(97593),M=e(43720),Z=e(14923),D=e(58866),S=e(5430),be=e(67222),p=e(38642),ke=e(66123),ce=e(31916),Ve=e(9925),Ne=O.Z.confirm,Ye=d.Z.RangePicker,ze="YYYY-MM-DD HH:mm",Et=H=>{var r=H.t,J=H.userId,Se=H.classifyInfo,$e=H.onChangeCollapse,Je=H.collapsed,Qe=Ze.parse(de.m8.location.search),Ke=Qe.fromWorkScope,We=(0,G.I0)(),Xe=(0,P.useState)({scope:Ke||"all",publish_status:"all",exam_status:"all",keywords:"",classify_id:"",date_type:"create",begin_time:null,end_time:null,is_wx:!1,user_ids:""}),He=(0,K.Z)(Xe,2),F=He[0],Oe=He[1],Q=(0,B.V9)("newPlan",H.modules),Dt=(0,P.useState)(!0),lt=(0,K.Z)(Dt,2),St=lt[0],ot=lt[1],It=(0,P.useState)({all_count:0,draft_count:0,published_count:0}),ut=(0,K.Z)(It,2),_e=ut[0],Rt=ut[1],qe=(0,P.useRef)(),Lt=(0,P.useState)({visible:!1}),dt=(0,K.Z)(Lt,2),et=dt[0],mt=dt[1],At=(0,P.useState)({visible:!1,modalTitle:r("eTouch.repeatAssignment"),ruleTip:r("eTouch.repeatRule"),period_type:"exam_timed"}),ct=(0,K.Z)(At,2),je=ct[0],pt=ct[1],wt=(0,P.useState)({visible:!1}),vt=(0,K.Z)(wt,2),Ue=vt[0],Fe=vt[1],Bt=(0,P.useState)(!1),gt=(0,K.Z)(Bt,2),Nt=gt[0],yt=gt[1],Ge={fontSize:"12px"};(0,P.useEffect)(()=>{var i=function(){var n=(0,W.Z)(w().mark(function s(){var l;return w().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,ce.YQ)({userId:J,type:6});case 2:l=E.sent,yt(l);case 4:case"end":return E.stop()}},s)}));return function(){return n.apply(this,arguments)}}();i()},[]);var Kt=()=>{yt(!1)};(0,P.useEffect)(()=>{Me()},[F]),(0,P.useEffect)(()=>{Oe((0,a.Z)((0,a.Z)({},F),{},{classify_id:Se.id===""?null:Se.id}))},[Se]);var Me=()=>{var i=(0,a.Z)((0,a.Z)({},F),{},{date_type:F.begin_time&&F.end_time?F.date_type:null});qe.current&&(St&&Wt(i),ot(!0),qe.current.load(i))},Wt=i=>{(0,me.Dc)((0,a.Z)((0,a.Z)({},i),{},{publish_status:"all"})).then(n=>{n.data.code==="200000"&&Rt(n.data.data)}).catch(n=>{console.error(n)})},jt=i=>(0,me.Dm)((0,a.Z)((0,a.Z)({},F),i)),Ut=(i,n)=>t().createElement(pe.Z,{onClick:s=>fe(s,n)},i.map(s=>{var l=s.name,v=s.disabled,E=s.disabledTip,k=s.tip,T=s.key;return v&&E?t().createElement(pe.Z.Item,{style:{textAlign:"center"},key:T,disabled:v},t().createElement(c.Z,{overlayStyle:Ge,title:E},l)):k?t().createElement(pe.Z.Item,{style:{textAlign:"center"},key:T,disabled:v},t().createElement(c.Z,{overlayStyle:Ge,title:k},l)):t().createElement(pe.Z.Item,{style:{textAlign:"center"},key:T,disabled:v},l)})),fe=function(){var i=(0,W.Z)(w().mark(function n(s,l){var v,E,k,T,q,h,N,X,at,ve,nt,rt,it,ht,ft,st;return w().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:f.t0=s.key,f.next=f.t0==="edit"?3:f.t0==="status"?5:f.t0==="copy"?17:f.t0==="delete"?19:f.t0==="share"?21:f.t0==="addPeople"?37:f.t0==="setLoop"?39:f.t0==="setPrepare"?41:43;break;case 3:return O.Z.confirm({title:r("setting.remind"),content:r("examination.editConfirm"),onOk:()=>{de.m8.push("/training/examination/newPlan/edit?planId=".concat(l.id))}}),f.abrupt("break",44);case 5:if(v=Pe=>{var ea=Pe.content,Ae=Pe.examInfo;return Ne({title:r("setting.remind"),content:ea,onOk(){(0,me.sO)({planId:Ae.id,status:Ae.status==="published"?"draft":"published"}).then(()=>{Ae.status==="published"&&oe.default.success(r("certificateRankingList.cancelSuccess")),Me(),Ae.status==="draft"&&(Ae.create_user===J||(0,B.H3)("set_cycle_plan",Q)||(0,B.H3)("add_user",Q))&&Fe((0,a.Z)({visible:!0},Ae))}).catch(()=>{oe.default.error()})}})},l.status!=="published"){f.next=16;break}if(!(l.period_assign==="true"||l.period_assign===!0)){f.next=16;break}return f.next=10,(0,me.ry)(l.id);case 10:if(E=f.sent,k=E.data,T=k.code,q=k.data.has_end,T!=="200000"){f.next=16;break}if(!(q==="false"||q===!1)){f.next=16;break}return f.abrupt("return",v({content:t().createElement(D.K,{t:r}),examInfo:l}));case 16:return f.abrupt("return",v({content:l.status==="published"?r("examination.revokeConfirm"):r("examination.publishConfirm"),examInfo:l}));case 17:return Ne({title:r("setting.remind"),content:r("examination.copyConfirm"),onOk(){(0,me.cf)({planId:l.id}).then(()=>{oe.default.success(r("exam.copySucceed")),Me()}).catch(Pe=>{console.error(Pe)})}}),f.abrupt("break",44);case 19:return Ne({title:r("setting.remind"),content:r("examination.deleteConfirm"),onOk(){(0,me.ZF)({planId:l.id}).then(()=>{oe.default.success(r("common.deleteSuccess")),Me()}).catch(Pe=>{console.error(Pe)})}}),f.abrupt("break",44);case 21:return h=l.id,N=l.title,f.next=24,(0,p.Kb)((0,me.Wl)({planId:h}));case 24:if(X=f.sent,at=(0,K.Z)(X,2),ve=at[1],nt=Ze.stringify({source:"exam",type:"exam",id:h,course_id:h}),rt={title:N,from:"exam",path:(0,p.jr)({pc_url:"/share-transit?".concat(nt),mobile_url:"/share-transit?".concat(nt),pc_type:"student",mobile_type:"h5"})},!ve){f.next=35;break}if(it=ve.data,ht=it.code,ft=it.data,st=ft.exam_duration,!(ht==="200000"&&st)){f.next=35;break}return t().$share.show({detail:(0,a.Z)((0,a.Z)({},rt),{},{site1:{label:r("exam.examTime"),value:"".concat(st).concat(r("pk.min"))}})}),f.abrupt("return");case 35:return t().$share.show({detail:rt}),f.abrupt("break",44);case 37:return mt(Pe=>(0,a.Z)((0,a.Z)({},Pe),{},{planId:l.id,visible:!0})),f.abrupt("break",44);case 39:return pt(Pe=>(0,a.Z)((0,a.Z)({},Pe),{},{planId:l.id,title:l.title,isOpenLoop:l.period_assign==="true"||l.period_assign===!0,visible:!0})),f.abrupt("break",44);case 41:return Ft(s,l),f.abrupt("break",44);case 43:return f.abrupt("break",44);case 44:case"end":return f.stop()}},n)}));return function(s,l){return i.apply(this,arguments)}}(),tt=function(n){var s=n.id,l=n.title,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"examData";return v==="examData"&&de.m8.push("/training/examination/newPlan/detail?id=".concat(s,"&title=").concat(l,"&origin=exam")),!1},$t=function(){var i=(0,W.Z)(w().mark(function n(s,l){var v,E,k,T,q,h,N,X;return w().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,(0,me.I$)({planId:s});case 2:if(v=ve.sent,E=v.data,k=E.code,T=E.data,q=T.admin,h=T.marker,N=T.supervisor,X=T.creator,k!=="200000"){ve.next=15;break}if(!(q==="true"||X==="true"||N==="true"&&l==="true"||h==="true"&&N==="true")){ve.next=14;break}return Le.Z.targetTo({path:Ce.W.marking({exam_id:s,status:"pending",markScene:"manage"})}),ve.abrupt("return");case 14:oe.default.warning(r("examination.cannotMark"));case 15:case"end":return ve.stop()}},n)}));return function(s,l){return i.apply(this,arguments)}}(),Ht={query:i=>jt(i),columns:[{title:r("exam.testName"),dataIndex:"title",width:200,render:(i,n,s)=>{var l=n.id,v=n.title,E=n.period_assign,k=n.create_user,T=q=>{var h=q.title;return t().createElement(ke.T,{visible:s===0&&Nt,closeGuide:Kt,authJudge:()=>k===J||(0,B.H3)("data",Q),contentString:r("examination.guideView.viewDataGuide"),scrollElement:{classContent:"ant-layout-content",isRelative:!1}},t().createElement("div",{className:b()["title-container"]},t().createElement(c.Z,{placement:"top",title:h},t().createElement("span",{className:"".concat(b().title," cl-text-ellipsis"),style:{maxWidth:"200px"}},h)),(E==="true"||E===!0)&&t().createElement("span",{className:b()["label-tip"]},r("examination.loop"))))};return k===J||(0,B.H3)("data",Q)?t().createElement("a",{href:"javascript:;",onClick:()=>{tt({id:l,title:v})}},t().createElement(T,{title:v})):t().createElement(T,{title:v})}},{title:r("examination.paperInfoType"),key:"paper_type",width:100,filters:[{text:r("common.all"),value:"all"},{text:r("exam.fixed"),value:"fixed"},{text:r("exam.random"),value:"random"}],filterMultiple:!1,render:(i,n)=>{var s=n.paper_type;return r(s==="fixed"?"exam.fixed":"exam.random")},onFilter:(i,n)=>i==="all"?!0:n.paper_type===i},{title:r("examination.examStatus"),key:"status",width:100,render:i=>i==="published"?t().createElement(ge.Z,{color:"#3FC929",text:r("courseManage.published")}):t().createElement(ge.Z,{color:"#EF8F2C",text:r("courseManage.unPublished")})},{title:r("common.creator"),width:106,key:"create_user_name",render:(i,n)=>t().createElement(Ve.Z,{userId:n.create_user,userName:n.create_user_name})},{title:r("exam.toBeGraded"),key:"pending_paper_count",width:80,render:(i,n)=>{var s=n.id,l=n.supervisor_mark,v=n.create_user;return i===0?0:v===J||(0,B.H3)("data",Q)?t().createElement("span",{className:"cl-pointer",onClick:()=>{$t(s,l)}},"".concat(i," >")):i}},{title:"".concat(r("common.all"),"/").concat(r("exam.passed"),"/").concat(r("exam.failed")),key:"user_count",width:150,render:(i,n)=>{var s=n.user_count,l=n.pass_count,v=n.failed_count,E=n.id,k=n.title,T=n.create_user;return T===J||(0,B.H3)("data",Q)?t().createElement("a",{href:"javascript:;",onClick:()=>{tt({id:E,title:k})}},"".concat(s,"/").concat(l,"/").concat(v," >")):"".concat(s,"/").concat(l,"/").concat(v)}},{title:r("examination.missingCount"),key:"absence_count",width:110,render:(i,n)=>{var s=n.id,l=n.title,v=n.create_user;return i===0?0:v===J||(0,B.H3)("data",Q)?t().createElement("a",{href:"javascript:;",onClick:()=>{tt({id:s,title:l})}},"".concat(i," >")):"".concat(i)}},{title:t().createElement("span",null,t().createElement("span",{style:{marginRight:"8px"}},"".concat(r("common.joinRate"),"/").concat(r("common.examPassRate"),"/").concat(r("common.missRate"))),t().createElement(c.Z,{title:r("examination.missedTips"),overlayStyle:{fontSize:12}},t().createElement(te.Z,{style:{color:"rgba(0,0,0,0.45)"}}))),key:"participation_rate",width:180,render:(i,n)=>{var s=n.participation_rate,l=n.pass_rate,v=n.absence_rate;return"".concat(s,"/").concat(l,"/").concat(v)}},{title:r("examination.createTime"),key:"create_time",width:130,render:i=>"".concat(z()(Number(i)).format(ze))},{title:r("examination.sourceName"),key:"source_name",width:280,render:(i,n)=>{var s=n.source_name;return s?t().createElement(c.Z,{placement:"top",title:s},t().createElement("span",{className:"".concat(b().title," cl-text-ellipsis"),style:{maxWidth:"200px"}},s)):"--"}},{title:r("common.operate"),key:"operate1",width:190,fixed:"right",render:(i,n)=>{var s=n.status==="published",l=n.create_user===J||(0,B.H3)("publish_rollback",Q),v=n.create_user===J||(0,B.H3)("delete",Q),E=[{name:r("common.edit"),visible:n.create_user===J||(0,B.H3)("edit",Q),disabled:s,disabledTip:r("examination.revertOperateTip"),key:"edit",handleClick:h=>{var N=h.key;s||fe({key:N||"edit"},n)}},{name:r("common.copy"),visible:n.create_user===J||(0,B.H3)("copy",Q),key:"copy",handleClick:h=>{var N=h.key;fe({key:N||"copy"},n)}},{name:n.status==="published"?r("examination.revoke"):r("common.release"),visible:l,key:"status",handleClick:h=>{var N=h.key;fe({key:N||"status"},n)}},{name:r("common.delete"),key:"delete",visible:v,disabled:n.status==="published",disabledTip:r("examination.revertOperateTip"),handleClick:h=>{var N=h.key;n.status!=="published"&&fe({key:N||"delete"},n)}},{name:r("common.share"),key:"share",disabled:n.status==="draft",disabledTip:r("examination.publishOperateTip"),visible:n.create_user===J||(0,B.H3)("share",Q),handleClick:h=>{var N=h.key;fe({key:N||"share"},n)}},{name:r("examination.addUser"),key:"addPeople",width:"50px",visible:n.create_user===J||(0,B.H3)("add_user",Q),disabled:n.status==="draft",disabledTip:r("examination.publishOperateTip"),tip:r("examination.addUserTip"),handleClick:h=>{var N=h.key;fe({key:N||"addPeople"})}},{name:r("examination.setLoop"),key:"setLoop",visible:n.create_user===J||(0,B.H3)("set_cycle_plan",Q),disabled:n.status==="draft",disabledTip:r("examination.publishOperateTip"),tip:r("examination.setLoopTip"),width:"50px",handleClick:h=>{var N=h.key;fe({key:N||"setLoop"})}}];Ee.bP&&!E.some(h=>h.key==="setPrepare")&&E.push({name:r("examination.setPrepare"),key:"setPrepare",visible:n.create_user===J||(0,B.H3)("set_cycle_plan",Q),disabled:n.status!=="published",disabledTip:r("examination.revertOperateTip"),tip:r("examination.setPrepare"),width:"50px",handleClick:()=>{fe({key:"setPrepare"},n)}});var k=(0,p.FR)(E,2),T=k.externalButtons,q=k.moreButtons;return t().createElement("div",{className:b()["table-cell-action"]},T.map(h=>Gt(h)),q.length>0&&t().createElement(le.Z,{overlay:Ut(q,n)},t().createElement("span",{className:"cl-pointer"},r("common.more"),t().createElement(U.Z,null))))}}]},Ft=(i,n)=>{(0,me.UY)({examId:n.id}).then(s=>{var l=s.code?s:s.data,v=l.data,E=v===void 0?"":v,k=l.code,T=k===void 0?"":k,q=l.message,h=q===void 0?"":q;if(String(T)==="200000"){var N=r(E==="init"?"examination.preparing":"examination.prepareSuccess");oe.default.success(N)}else oe.default.error(h);Me()}).catch(s=>{Me(),console.error(s)})},Gt=i=>{var n=i.name,s=i.disabled,l=i.disabledTip,v=i.tip,E=i.handleClick,k=i.key,T=i.width;return s&&l||T?t().createElement(c.Z,{overlayStyle:Ge,title:s&&l?l:n},t().createElement("span",{key:k,className:"".concat(b()["mutual-button"]," ").concat(s?b().disabled:"cl-pointer"," ").concat(T?b()["operate-text-overflow"]:""),style:{width:T||void 0},onClick:E},n)):v?t().createElement(c.Z,{overlayStyle:Ge,title:v},t().createElement("span",{key:k,className:"".concat(b()["mutual-button"]," ").concat(s?b().disabled:"cl-pointer"," ").concat(T?b()["operate-text-overflow"]:""),style:{width:T||void 0},onClick:E},n)):t().createElement("span",{key:k,className:"".concat(b()["mutual-button"]," ").concat(s?b().disabled:"cl-pointer"),onClick:E},n)},Vt=(i,n)=>{n[1]&&n[0]?Oe((0,a.Z)((0,a.Z)({},F),{},{begin_time:z()("".concat(n[0]," 00:00:00")).valueOf(),end_time:z()("".concat(n[1]," 23:59:59")).valueOf()})):Oe((0,a.Z)((0,a.Z)({},F),{},{begin_time:null,end_time:null}))},Yt=()=>{(0,he.N)({page:"exportExamList",props:{dispatch:We,t:r},query:(0,a.Z)((0,a.Z)({},F),{},{date_type:F.begin_time&&F.end_time?F.date_type:null}),sendType:"post"})},zt=()=>t().createElement(y.Z,null,(0,B.H3)("add",Q)&&t().createElement(m.Z,{icon:t().createElement(ae.Z,null),type:"primary",onClick:()=>{de.m8.push("/training/examination/newPlan/add")}},r("examination.newExam")),t().createElement(m.Z,{icon:t().createElement(ue.Z,null),onClick:Yt},r("common.exportData"))),Jt=i=>{ot(!1),Oe((0,a.Z)((0,a.Z)({},F),{},{publish_status:i.target.value}))},Qt=function(){var i=(0,W.Z)(w().mark(function n(s){var l,v,E,k,T,q,h;return w().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(l=H.appType,v=H.appId,E=localStorage.getItem("qyWechatBook"),k="",T=l==="wx_app"&&E==="true"&&v==="9005",!(s&&T)){X.next=17;break}return X.prev=5,X.next=8,(0,be.F_)(s);case 8:q=X.sent,h=q.data,h.success?k=h.data.split(","):k="",X.next=17;break;case 13:X.prev=13,X.t0=X.catch(5),console.error(X.t0),k="";case 17:Oe((0,a.Z)((0,a.Z)({},F),{},{keywords:s,is_wx:T,user_ids:k}));case 18:case"end":return X.stop()}},n,null,[[5,13]])}));return function(s){return i.apply(this,arguments)}}(),Xt=()=>t().createElement(y.Z,null,t().createElement(y.Z,null,t().createElement(o.ZP.Group,{value:F.publish_status,onChange:Jt},t().createElement(o.ZP.Button,{value:"all"},r("common.all")," (",_e.all_count,")"),t().createElement(o.ZP.Button,{value:"published"},r("courseManage.published")," (",_e.published_count,")"),t().createElement(o.ZP.Button,{value:"draft"},r("courseManage.unPublished")," (",_e.draft_count,")")),t().createElement(Be.Z,{onSearch:Qt,placeholder:r("common.search",{name:"".concat(r("examination.examName")," / ").concat(r("common.creator"))}),width:272,maxLength:400}))),_t=i=>{Oe((0,a.Z)((0,a.Z)({},F),{},{scope:i}))},qt=()=>{var i=[{name:r("common.all"),value:"all"},{name:r("workbench.myCreation"),value:"my"},{name:r("workbench.myCharge"),value:"responsible_by_me"}];return t().createElement(x.Z,{value:F.scope,style:{width:245,marginLeft:16},onChange:_t},i.map(n=>t().createElement(x.Z.Option,{key:n.value,value:n.value},n.name)))};return t().createElement(t().Fragment,null,t().createElement("div",{className:b()["list-header"]},t().createElement("span",{className:"".concat(b()["list-header-collapse"]," ").concat(Je?b().collapse:b().expand),onClick:()=>$e()},t().createElement($.Z,{iconClass:"icon-icon_sx1"})),t().createElement("div",{className:b()["list-header-title"]},Se.name)),t().createElement(y.Z,{className:b()["list-header-filter"]},t().createElement(g.Z.Group,{compact:!0},t().createElement(Ye,{disabled:[!1,!1],defaultValue:[null,null],format:"YYYY-MM-DD",onChange:Vt,ranges:{["".concat(r("component.lastWeek"))]:[z()().subtract(7,"day"),z()()],["".concat(r("component.lastMonth"))]:[z()().subtract(30,"day"),z()()],["".concat(r("component.lastThreeMonth"))]:[z()().subtract(3,"month"),z()()]}})),qt()),t().createElement(xe.Z,{className:b()["list-table"],uniKey:"plan",uuid:"f76f43b9-19a7-4b23-b642-a786d74a8692",ref:qe,queryParams:Ht,pagination:!0,headerTitle:zt(),toolBarRender:Xt,scroll:{scrollToFirstRowOnChange:!0,x:"max-content",y:"100%"}}),et.visible&&t().createElement(M.Z,(0,j.Z)({},et,{onOperateSuccessCallback:()=>{Me()},apiUrl:S.OB.examTask.singleTaskAssign({planId:et.planId}),onCancel:()=>{mt(i=>(0,a.Z)((0,a.Z)({},i),{},{visible:!1}))}})),je.visible&&t().createElement(Z.Z,(0,j.Z)({},je,{getAssignSettingApiUrl:S.OB.examTask.getLastLoopTaskSetting({planId:je.planId}),closeSettingApiUrl:S.OB.examTask.closeLoopTask({planId:je.planId}),loopTaskAssignApiUrl:S.OB.examTask.loopTaskAssign({planId:je.planId}),onOperateSuccessCallback:()=>{Me()},onCancel:()=>{pt(i=>(0,a.Z)((0,a.Z)({},i),{},{visible:!1}))}})),t().createElement(O.Z,{width:416,title:null,maskClosable:!1,mask:!1,footer:null,onCancel:()=>{Fe(i=>(0,a.Z)((0,a.Z)({},i),{},{visible:!1}))},visible:Ue.visible},t().createElement("div",{className:b()["modal-content"]},t().createElement("div",{className:b()["tip-content"]},t().createElement(te.Z,{style:{fontSize:"22px",color:"#faad14",marginRight:"16px"}}),t().createElement("span",null,r("common.releaseSuccess"))),t().createElement("div",{className:b().footer},t().createElement(y.Z,{value:8},(Ue.create_user===J||(0,B.H3)("set_cycle_plan",Q))&&t().createElement(m.Z,{type:"default",onClick:()=>{Fe(i=>(0,a.Z)((0,a.Z)({},i),{},{visible:!1})),fe({key:"setLoop"},Ue)}},r("examination.setLoop")),(Ue.create_user===J||(0,B.H3)("add_user",Q))&&t().createElement(m.Z,{type:"primary",onClick:()=>{Fe(i=>(0,a.Z)((0,a.Z)({},i),{},{visible:!1})),fe({key:"addPeople"},Ue)}},r("examination.addUser")))))))},xt=H=>({modules:H.user.modules,userId:H.user.id||window.localStorage.getItem("uid"),isAdmin:H.user.isAdmin,appType:H.user.appType,appId:H.user.appId}),Ct=(0,G.$j)(xt)((0,re.Z)()(Et)),Pt=e(11449),Zt=e(4408),Tt=e(66361),bt=H=>{var r=H.t,J=(0,P.useState)({id:"",name:r("common.all")}),Se=(0,K.Z)(J,2),$e=Se[0],Je=Se[1],Qe=(0,P.useState)(!1),Ke=(0,K.Z)(Qe,2),We=Ke[0],Xe=Ke[1],He=Oe=>{Je(Oe)},F=()=>{Xe(!We)};return t().createElement(t().Fragment,null,t().createElement(Pt.Z,{pageContainerParams:{header:{title:r("common.examManage")}},pageTitle:r("common.examManage")},t().createElement(Zt.Z,{title:r("common.examManage")}),t().createElement("div",{className:V().container},t().createElement("div",{className:"".concat(V()["container-left"]," ").concat(We?V().collapsed:"")},t().createElement(Tt.Z,{className:V()["new-exam-list-classify-tree"],isRoot:!0,stickySearch:!0,placeholder:r("component.classifyName"),showSearch:!0,onSelect:He,selectedKeys:[$e.id],type:"tree"})),t().createElement("div",{className:V()["container-content"]},t().createElement(Ct,{classifyInfo:$e,collapsed:We,onChangeCollapse:F})))))},kt=H=>(0,a.Z)({},H),Ot=H=>(0,a.Z)({},H),Mt=(0,G.$j)(kt,Ot)((0,re.Z)()(bt))},67479:function(Ie,ne,e){"use strict";e.d(ne,{D:function(){return V},W:function(){return _}});var a=e(57361),K=e(9754),P=e.n(K),t=e(57068),G=e(31916),re=e(38642),se=e(5430);function V(g){return j.apply(this,arguments)}function j(){return j=(0,a.Z)(P().mark(function g(ie){var x,u,o,C,y;return P().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,(0,G.uH)();case 3:if(x=m.sent,x!=="old"){m.next=6;break}return m.abrupt("return",!1);case 6:return m.next=8,(0,G.fP)(ie);case 8:if(u=m.sent,o=u.data,C=o.code,y=o.data,C!=="200000"){m.next=14;break}return m.abrupt("return",y.exam_type==="new");case 14:m.next=20;break;case 16:return m.prev=16,m.t0=m.catch(0),console.error("\u65B0\u65E7\u8003\u8BD5\u5224\u65AD",m.t0),m.abrupt("return",!1);case 20:case"end":return m.stop()}},g,null,[[0,16]])})),j.apply(this,arguments)}var _={examing:function(){var g=(0,a.Z)(P().mark(function x(u){var o,C,y;return P().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o="",C=u.pageFrom==="ding_myExamTask"?(0,re.lz)(se.ZP.enterpriseId,"student"):"",m.next=4,V(u.exam_id);case 4:return y=m.sent,y?o="".concat(C,"/training/examination/new-exam/examing?").concat(t.stringify(u)):o="".concat(C,"/training/examination/exam/personal?").concat(t.stringify(u)),m.abrupt("return",o);case 7:case"end":return m.stop()}},x)}));function ie(x){return g.apply(this,arguments)}return ie}(),parse:g=>"/training/examination/new-exam/parse?".concat(t.stringify(g)),examData:g=>"/training/examination/exam-data?exam_id=".concat(g.exam_id,"&task_id=").concat(g.task_id),marking:g=>"/training/examination/new-exam/marking?".concat(t.stringify(g))}},98233:function(Ie,ne,e){"use strict";e.d(ne,{nn:function(){return se},OV:function(){return _},Md:function(){return ie},uk:function(){return re}});var a=e(57361),K=e(9754),P=e.n(K),t=e(57068),G=e(67479),re={edit:u=>"/training/learning/project/add?".concat(t.stringify(u)),monitorDetail:u=>{var o=u.id,C=u.projectId,y=u.origin,A=u.tab;return"/training/trainingProject/monitor?id=".concat(o,"&projectId=").concat(C,"&origin=").concat(y,"&tab=").concat(A)},traineeView:u=>"/training/trainingProject/traineeView?".concat(t.stringify(u)),manageView:u=>"/training/trainingProject/manageView?".concat(t.stringify(u)),previewView:u=>"/training/trainingProject/previewView?".concat(t.stringify(u))};function se(u){var o=u.origin,C=u.search,y=C===void 0?"":C,A={project:"/knowledgeBase/project/examination/newPlan/detail?".concat(y),learning:"/training/learning/examination/newPlan/detail?".concat(y),employee:"/training/employee/examination/newPlan/detail?".concat(y),exam:"/training/examination/newPlan/detail?".concat(y)};return A[o]||"/training/examination/newPlan/detail?".concat(y)}function V(u,o){if(u){var C=t.stringify({id:o.id,title:o.title,origin:o.taskType,taskId:o.projectId});return se({origin:o.taskType,search:C})}var y=t.stringify({id:o.id,taskId:o.taskId,from:o.from,taskType:o.taskType,projectId:o.projectId});return"/training/learning/project/monitor/exam?".concat(y)}function j(u,o){return u?G.W.marking({exam_id:o.id,status:o.status,markScene:"manage"}):"/training/examination/plan/testPaper?id=".concat(o.id,"&from=").concat(o.from,"&taskId=").concat(o.taskId)}function _(){return g.apply(this,arguments)}function g(){return g=(0,a.Z)(P().mark(function u(){var o,C,y,A=arguments;return P().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(o=A.length>0&&A[0]!==void 0?A[0]:"unKnow",C=A.length>1?A[1]:void 0,o!=="unKnow"){R.next=7;break}return R.next=5,(0,G.D)(C.id);case 5:return y=R.sent,R.abrupt("return",V(y,C));case 7:return R.abrupt("return",V(o,C));case 8:case"end":return R.stop()}},u)})),g.apply(this,arguments)}function ie(){return x.apply(this,arguments)}function x(){return x=(0,a.Z)(P().mark(function u(){var o,C,y,A=arguments;return P().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(o=A.length>0&&A[0]!==void 0?A[0]:"unKnow",C=A.length>1?A[1]:void 0,o!=="unKnow"){R.next=7;break}return R.next=5,(0,G.D)(C.id);case 5:return y=R.sent,R.abrupt("return",j(y,C));case 7:return R.abrupt("return",j(o,C));case 8:case"end":return R.stop()}},u)})),x.apply(this,arguments)}}}]);