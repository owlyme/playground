(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[7462],{22316:function(pe,G,l){"use strict";l.r(G),l.d(G,{default:function(){return $e}});var v=l(62029),X=l(20228),$=l(11382),Y=l(34792),O=l(48086),m=l(88986),ae=l(12924),o=l.n(ae),he=l(91768),f=l(80991),ue=l(57068),z=l(76651),we=l(28216),mt=l(57663),fe=l(71577),pt=l(71194),Ie=l(57016),be=l(57119),S=l(59434),M=l(16381),I={labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:21}}},j=l(62615),ge=l(52670),Ce=l(86726),H=l(38642),ee=(0,H.UI)("EXAM_BANK_CONFIG"),Fe=["singleCount","multipleCount","fillBlankCount","trueOrFalseCount","shortAnswerCount"],Te=(x,e)=>{if(e)return"".concat(x,"Choose");var a=x.split(""),t=a.reduce((s,n)=>{var i=n.charCodeAt();return i>=65&&i<=90?s+="_".concat(n.toLowerCase()):s+=n,s},"");return"".concat(t,"_choose")},_e=function(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!ee)return e;var s=a.questionsMode,n=a.randomQuestion,i=a.totalScore,d=a.chooseBankCount,r=s===1;return r||(Fe.forEach(u=>{var b=Te(u,t);e[b]=r?"":n.bankQuesitonInfo["".concat(u,"Choose")]}),e.questionBankId=n.bankQuesitonVoList.filter(u=>u.data.isRequired).map(u=>u.id).join(","),e.questionBankIdChoose=n.bankQuesitonVoList.filter(u=>!u.data.isRequired).map(u=>u.id).join(","),e.totalScore=i,e.chooseBankCount=d,e.enterpriseId=window.localStorage.getItem("enterpriseId"),e.accessToken=window.localStorage.getItem("token")),e},Le=(x,e)=>{if(!ee||!e)return x.randomQuestion;var a=x.randomQuestion,t=x.questionBankIdChoose,s=t===void 0?[]:t;return a.bankQuesitonVoList=a.bankQuesitonVoList.map(n=>{if(n.data.isRequired!==void 0)return n;var i=s.map(d=>d.id);return(0,m.Z)((0,m.Z)({},n),{},{data:(0,m.Z)((0,m.Z)({},n.data),{},{isRequired:!i.includes(n.id)})})}),a},Qe=(x,e)=>{var a=e.trueOrFalseCountChoose,t=e.singleCountChoose,s=e.shortAnswerCountChoose,n=e.fillBlankCountChoose,i=e.multipleCountChoose,d=e.chooseBankCount,r=e.questionBankIdChoose,u=e.questionBankId,b=e.isChooseErrorAnalysis,k=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return P.map(T=>{var K=T.fill_blank_count,U=T.multiple_count,V=T.short_answer_count,D=T.single_count,L=T.total_count,q=T.true_or_false_count,W=T.name,c={name:W,fillBlankCount:K,shortAnswerCount:V,multipleCount:U,singleCount:D,totalCount:L,trueOrFalseCount:q};return(0,m.Z)((0,m.Z)((0,m.Z)({},T),c),{},{data:(0,m.Z)({},c)})})},E=_.cloneDeep(x),F=k(u),g=k(r),C=E.initialParams.randomQuestion.bankQuesitonInfo,Z=C.singleCount,w=C.multipleCount,R=C.fillBlankCount,A=C.shortAnswerCount,h=C.trueOrFalseCount;return E.initialParams=(0,m.Z)((0,m.Z)({},E.initialParams),{},{chooseBankCount:d,questionBankIdChoose:r,randomQuestion:(0,m.Z)((0,m.Z)({},E.initialParams.randomQuestion),{},{bankQuesitonInfo:(0,m.Z)((0,m.Z)({},E.initialParams.randomQuestion.bankQuesitonInfo),{},{trueOrFalseCountChoose:a||0,singleCountChoose:t||0,shortAnswerCountChoose:s||0,fillBlankCountChoose:n||0,multipleCountChoose:i||0,singleUnitCount:(t||0)+(Z||0),multipleUnitCount:(i||0)+(w||0),trueOrFalseUnitCount:(a||0)+(h||0),fillBlankUnitCount:(n||0)+(R||0),shortAnswerUnitCount:(s||0)+(A||0)}),bankQuesitonVoList:F.concat(g)})}),b&&(E.initialParams.reExam.allowed.viewRule=3),E},Ne=l(7584),Oe=l(70075),Me=l(2396);class Ae extends o().Component{constructor(){super(...arguments);this.handlePropsSubmit=()=>{var e=this.props,a=e.handleSubmit,t=e.t,s=e.values,n=s===void 0?{}:s,i=n.markType,d=i===void 0?{}:i,r=d.checkedValue,u=r===void 0?1:r;u&&u===1?Ie.Z.confirm({icon:o().createElement(be.Z,{style:{color:"#516AE6"}}),title:t("common.tip"),content:t("learning.isModalReplyUploadWaringContent"),okText:t("common.ok"),cancelText:t("common.cancel"),onOk:()=>{a()}}):a()},this.renderQuestionsContent=()=>{var e=this.props.values,a=e.questionsMode===1;return a?this.renderFixedModeContent():this.renderRandomModeContent()},this.renderDrawQuestions=()=>{var e=this.props,a=e.values,t=e.t,s=e.disabled,n=e.canEditFields,i=a.randomQuestion.bankQuesitonVoList&&a.randomQuestion.bankQuesitonVoList.length>0,d=a.questionsMode!==1;if((0,H.UI)("EXAM_BANK_CONFIG"))return null;if(d&&i){var r=this.getAllQuestionsNumber(a.randomQuestion.bankQuesitonInfo);return o().createElement(f.gN,(0,v.Z)({component:S.p7,displayType:"Custom",name:"DrawQuestionsSwitch",label:t("exam.weightedQuestions"),defaultValue:a.isOpenDrawQuestions,questionsNumber:r,disabled:s||n.indexOf("drawQuestionsSwitch")===-1},I))}return null},this.renderWeightInput=()=>{var e=this.props,a=e.values,t=e.disabled,s=e.canEditFields,n=a.questionsMode!==1;return a.isOpenDrawQuestions&&n&&a.randomQuestion.bankQuesitonVoList.length>0?o().createElement(f.gN,(0,v.Z)({component:S.CZ,displayType:"Custom",name:"proportional",required:!0,defaultFieldList:a.proportional,validate:M.RE,disabled:t||s.indexOf("weightInput")===-1},I)):null},this.getAllQuestionsNumber=e=>{var a=e.fillBlankCount,t=e.multipleCount,s=e.shortAnswerCount,n=e.singleCount,i=e.trueOrFalseCount;return a+t+s+n+i},this.renderFixedModeContent=()=>{var e=this.props,a=e.values,t=e.disabled,s=e.canEditFields,n=s===void 0?[]:s,i=e.t;return o().createElement(f.gN,(0,v.Z)({component:S.xE,displayType:"Custom",name:"fixedQuestion",label:i("exam.paper"),required:!0,defaultFieldList:a.fixedQuestion,validate:d=>(0,M.dy)(d,a),disabled:t||n.indexOf("questionsMode")===-1},I))},this.renderBankConfigContent=()=>{var e=this.props,a=e.values,t=e.t,s=e.disabled,n=e.canEditFields,i=a.questionsMode===1;return(0,H.UI)("EXAM_BANK_CONFIG")&&!i?o().createElement(o().Fragment,null,o().createElement(f.gN,(0,v.Z)({component:S.R4,displayType:"Custom",name:"chooseBankCount",label:t("exam.numberOfOptional"),required:!0,validate:d=>(0,M.pm)(d,a.randomQuestion),disabled:s||n.indexOf("questionsMode")===-1},I)),o().createElement(f.gN,(0,v.Z)({component:S.LE,displayType:"Custom",name:"totalScore",label:t("exam.totalScoreOfTest"),defaultFieldList:a.randomQuestion,disabled:s||n.indexOf("questionsMode")===-1},I))):null},this.renderRandomModeContent=()=>{var e=this.props,a=e.values,t=e.disabled,s=e.canEditFields,n=s===void 0?[]:s,i=e.t,d=e.isEdit,r=(0,H.UI)("EXAM_BANK_CONFIG");return o().createElement(f.gN,(0,v.Z)({component:r?S.wr:S.B$,displayType:"Custom",name:"randomQuestion",label:i("exam.bank"),multipleMissedScore:this.props.multipleMissedScore,required:!0,customError:!0,defaultFieldList:Le(a,d),validate:r?u=>(0,M.jx)(u,a):u=>(0,M.cT)(u,a),disabled:t||n.indexOf("questionsMode")===-1,privateCustom:r?"maiTian":""},I))},this.renderFooter=()=>{var e=this.props,a=e.disabled,t=a===void 0?!1:a,s=e.isSubmitting,n=s===void 0?!1:s,i=e.onCancel,d=e.t;return o().createElement("footer",{className:"cl-form-fixed-footer"},o().createElement("div",{className:"cl-form-fixed-footer__container"},t?null:o().createElement(fe.Z,{type:"primary",disabled:n,loading:n,onClick:this.handlePropsSubmit},d("common.release")),o().createElement(fe.Z,{onClick:i},d("common.cancel"))))}}render(){var e=this.props,a=e.values,t=e.disabled,s=t===void 0?!1:t,n=e.canEditFields,i=n===void 0?[]:n,d=e.title,r=e.t,u=e.tagGroupInit,b=(0,Ce.V9)("classify",JSON.parse(localStorage.getItem("modules")));return o().createElement(o().Fragment,null,o().createElement(f.l0,{className:"cl-form"},this.renderFooter(),o().createElement("h1",{className:"cl-form-htitle"},d),o().createElement("p",{className:"cl-form__sectitle"},r("exam.selectPaper")),o().createElement(f.gN,(0,v.Z)({component:S.G2,displayType:"Custom",name:"questionsMode",label:r("exam.paperMode"),required:!0,defaultFieldList:a.questionsMode,disabled:s||i.indexOf("questionsMode")===-1},I)),this.renderQuestionsContent(),this.renderDrawQuestions(),this.renderBankConfigContent(),this.renderWeightInput(),o().createElement(f.gN,(0,v.Z)({component:S.Fz,displayType:"Custom",name:"passLine",label:r("exam.passLine"),required:!0,defaultFieldList:a.passLine,validate:M.QL,disabled:s||i.indexOf("passLine")===-1},I)),o().createElement("p",{className:"cl-form__divide"}),o().createElement("p",{className:"cl-form__sectitle"},r("learning.basicInformation")),o().createElement(f.gN,(0,v.Z)({component:Ne.Z,name:"title",label:r("exam.taskName"),required:!0,type:"text",defaultValue:a.title,validate:k=>(0,Me.QK)(k,r("exam.taskNamePlaceholder")),style:{width:"350px"},maxLength:60,className:"qa-mission-name-field",placeholder:r("exam.taskNamePlaceholder"),isPreview:s||i.indexOf("title")===-1},I)),o().createElement(f.gN,(0,v.Z)({component:j.C0,displayType:"Custom",name:"dateRange",label:r("exam.validityPeriod"),required:!0,defaultFieldList:a.dateRange,validate:ge.V5,disabled:s||i.indexOf("dateRange")===-1,onlyChangeEndTime:!s&&i.indexOf("dateRange-end")!==-1},I)),o().createElement(f.gN,(0,v.Z)({component:S.Xk,displayType:"Custom",name:"examDuration",label:r("exam.examinationTime"),required:!0,defaultFieldList:a.examDuration,validate:M.$1,disabled:s||i.indexOf("examDuration")===-1},I)),o().createElement(f.gN,(0,v.Z)({name:"classify",label:r("learning.learningProjectAddCategory"),displayType:"Custom",defaultValue:a.classify,classifyName:a.classifyName,component:j.O,unclassified:!0,showAdd:(0,Ce.H3)("add",b)},I)),o().createElement(f.gN,(0,v.Z)({component:Oe.Z,name:"summary",label:r("examing.examDesc"),type:"text",required:!1,defaultValue:a.summary,LimitLength:1e3,char:!0,disabled:s,rows:4,placeholder:r("exam.examInstructionLimitPlaceholder")},I)),o().createElement(f.gN,(0,v.Z)({component:j.QS,displayType:"Custom",name:"tagGroup",label:r("common.detailTag"),defaultFieldList:u},I)),o().createElement("p",{className:"cl-form__divide"}),o().createElement(f.gN,{component:j.ww,displayType:"Custom",secTitle:r("common.assignRange"),name:"employeeRange",defaultFieldList:a.employeeRange,mode:["part"],validate:ge.FI,disabled:s||i.indexOf("employeeRange")===-1,qwTicketShow:!0}),o().createElement("p",{className:"cl-form__divide"}),o().createElement("p",{className:"cl-form__sectitle"},r("exam.settings")),o().createElement(f.gN,{component:S.wu,displayType:"Custom",name:"cheatFlag",defaultFieldList:a.cheatFlag,disabled:s||i.indexOf("cheatFlag")===-1,faceKnowDisabled:s}),o().createElement(f.gN,{component:S.Sm,displayType:"Custom",name:"reExam",defaultFieldList:a.reExam,disabled:s||i.indexOf("reExam")===-1,canShowErrorAnalysis:(0,H.UI)("EXAM_BANK_CONFIG")&&a.questionsMode!==1}),o().createElement(f.gN,{component:S.ZU,anonymousMarking:this.props.anonymousMarking,displayType:"Custom",name:"markType",defaultFieldList:a.markType,papers:a.questionsMode===1?a.fixedQuestion.tableList:a.randomQuestion.bankQuesitonInfo,validate:M._F,disabled:s||i.indexOf("markType")===-1}),o().createElement(f.gN,{component:S.Vu,displayType:"Custom",name:"knowledgePoints",defaultFieldList:a.knowledgePoints,disabled:s||i.indexOf("knowledgePoints")===-1}),o().createElement(f.gN,{component:S.Qp,displayType:"Custom",name:"reward",defaultFieldList:a.reward,validate:M.JJ,customError:!0,disabled:s||i.indexOf("reward")===-1}),o().createElement(f.gN,{component:j.i0,displayType:"Custom",name:"supervisor",defaultFieldList:a.supervisor,disabled:s||i.indexOf("supervisor")===-1,createUserId:a.createUserId,qwTicketShow:!0}),o().createElement(j.I,null)))}}var Be=(0,he.Z)()(Ae),Ze=l(4408),N=l(37055),ne=l(10237),Re=l(17994),te=l(6793),ve=l(28531),Pe=l(18681),se={getScoreRule:N.ZP.ExaminationPlanDetail.getScoreRule,getPlanInfo:N.ZP.ExaminationPlanDetail.getPlanInfo,getPrePlanInfo:N.ZP.ExaminationPlanDetail.preGetPlanInfo,add:x=>x?N.ZP.ExaminationPlanDetail.add:ee?N.ZP.ExaminationPlanDetail.preAdd:N.ZP.ExaminationPlanDetail.add,edit:x=>x?N.ZP.ExaminationPlanDetail.edit:ee?N.ZP.ExaminationPlanDetail.preEdit:N.ZP.ExaminationPlanDetail.edit};class ke extends ae.Component{constructor(){super(...arguments);this.state={initialParams:{title:"",dateRange:{startTime:null,endTime:null},createUserId:"",examDuration:"",employeeRange:{rangeType:"",rangeList:{dept:[],post:[],group:[],user:[]}},cheatFlag:{isChecked:!1,switchNum:null,faceRecognition:"off"},reExam:{show_result:!0,isChecked:!0,notAllowed:{end:2},allowed:{reRule:0,record:0,end:5,reNum:1,viewRule:1}},markType:{checkedValue:1,artificialDisabled:!0,fillBlank:{checked:!0,disabled:!1},shortAnswer:{checked:!0,disabled:!1}},reward:{certificate:{isChecked:!1,id:"",name:""},pass:{isChecked:!1,score:0},flunk:{isChecked:!1,score:0},miss:{isChecked:!1,score:0}},questionsMode:1,knowledgePoints:1,passLine:"",fixedQuestion:{id:"",name:"",tableList:{fillBlankCount:0,fillBlankScore:0,multipleCount:0,multipleScore:0,shortAnswerCount:0,shortAnswerScore:0,singleCount:0,singleScore:0,totalCount:0,totalScore:0,trueOrFalseCount:0,trueOrFalseScore:0}},chooseBankCount:"",totalScore:"",randomQuestion:{bankQuesitonVoList:[],bankQuesitonInfo:{fillBlankCount:0,fillBlankScore:0,fillBlankType:1,multipleCount:0,multipleScore:0,shortAnswerCount:0,shortAnswerScore:0,shortAnswerType:1,singleCount:0,singleScore:0,trueOrFalseCount:0,trueOrFalseScore:0}},supervisor:{supervisorUserList:[],isChecked:!0,visibleAuthScope:!0,authScopeIsChecked:!1},summary:"",isOpenDrawQuestions:!1,proportional:[],classify:"",classifyName:""},isLoading:!0,canEditFields:["title","dateRange","examDuration","questionsMode","knowledgePoints","passLine","employeeRange","cheatFlag","reExam","markType","reward","supervisor","drawQuestionsSwitch","weightInput"],taskStatus:""},this.computedCanEditFields=(e,a)=>{var t=new Date().getTime(),s=[],n="";return e>t?(s=["title","dateRange","examDuration","questionsMode","knowledgePoints","passLine","employeeRange","cheatFlag","reExam","markType","reward","supervisor","drawQuestionsSwitch","weightInput"],n="unstarted"):e<=t&&t<=a?(s=["employeeRange","dateRange-end","supervisor"],n="unfinished"):(s=["dateRange-end","supervisor"],n="finished"),{canEditFields:s,taskStatus:n}},this.getScoreRule=()=>{ne.WY.get({url:se.getScoreRule()}).then(e=>{var a=e.data.data.examScore;this.setState(t=>({initialParams:(0,m.Z)((0,m.Z)({},t.initialParams),{},{reward:{certificate:{isChecked:!1,id:"",name:""},pass:{isChecked:!1,score:a&&a[0]?a[0].passScore:0},flunk:{isChecked:!1,score:a&&a[0]?a[0].unPassScore:0},miss:{isChecked:!1,score:a&&a[0]?a[0].missScore:0}}}),isLoading:!1}))})},this.getDetail=e=>{ne.WY.get({url:se.getPlanInfo({examId:e})}).then(a=>{var t=a.data,s=t.title,n=t.begin_time,i=t.end_time,d=t.creator_id,r=t.exam_duration,u=t.is_all_in,b=t.department_list,k=t.post_list,E=t.group_list,F=t.user_list,g=t.cheat_flag,C=t.face_recognition,Z=t.cut_screen_count,w=t.mark_type,R=t.anonymous_marking,A=t.repeat_exam,h=t.answer_parsing,Q=t.re_exam_rule,P=t.re_exam_number,T=t.view_rule,K=t.score_rule,U=t.exam_certificate_id,V=t.exam_certificate_name,D=t.plan_exam_score,L=D===void 0?{}:D,q=t.question_mode,W=t.show_knowledge,c=t.pass_line,Ue=t.supervisors,Ve=t.supervisor_paper,qe=t.authority_range,de=t.bank_quesiton_vo_list,ie=t.fill_blank_count,We=t.fill_blank_unit_score,Ge=t.fill_blank_type,oe=t.short_answer_count,je=t.short_answer_unit_score,Ke=t.short_answer_type,Je=t.single_count,Xe=t.single_unit_score,Ye=t.true_or_false_count,ze=t.true_or_false_unit_score,He=t.multiple_count,et=t.multiple_missed_score,tt=t.multiple_unit_score,ye=t.paper_vo,y=ye===void 0?{}:ye,at=t.summary,J=t.proportional_exam_vos,nt=t.classify_id,st=t.classify_name,it=t.show_result,p=q===1,re=[];de instanceof Array&&de.length&&de.forEach(B=>{var ce=B.fill_blank_count,me=B.multiple_count,lt=B.short_answer_count,ut=B.single_count,dt=B.total_count,ct=B.true_or_false_count,Se={fillBlankCount:ce,shortAnswerCount:lt,multipleCount:me,singleCount:ut,totalCount:dt,trueOrFalseCount:ct};re.push((0,m.Z)((0,m.Z)((0,m.Z)({},B),Se),{},{data:(0,m.Z)({},Se)}))});var xe=this.computedCanEditFields(n,i),ot=xe.canEditFields,rt=xe.taskStatus,le;J&&J.length>0?le=this.computedProportional(J,re):p?le=[]:le=this.computedQuesiton(re);var Ee={initialParams:{title:s,dateRange:{startTime:(0,te.p6)(n,"yyyy-MM-dd hh:mm:ss"),endTime:(0,te.p6)(i,"yyyy-MM-dd hh:mm:ss")},createUserId:d,examDuration:r,employeeRange:{rangeType:u==="true"?1:2,rangeList:{dept:b||[],post:k||[],group:E||[],user:F||[]}},cheatFlag:{isChecked:!!g,switchNum:Z===-1?null:Z,faceRecognition:C},reExam:{show_result:it==="true",isChecked:A==="true",notAllowed:{end:A==="true"?2:h},allowed:{reRule:Q,record:K,end:A==="true"?h:5,reNum:Q===2?P:1,viewRule:T}},markType:{checkedValue:w===1?1:2,anonymousMarking:R===!0||R==="true",artificialDisabled:p?!(y.fill_blank_count||y.short_answer_count):!(ie||oe),fillBlank:{checked:p?(w===2||w===3)&&y.fill_blank_count:(w===2||w===3)&&ie,disabled:p?!y.fill_blank_count:!ie},shortAnswer:{checked:p?(w===2||w===4)&&y.short_answer_count:(w===2||w===4)&&oe,disabled:p?!y.short_answer_count:!oe}},reward:{certificate:{isChecked:U!=="0",id:U==="0"?"":U,name:V},pass:{isChecked:!!parseInt(L.pass_score),score:parseInt(L.pass_score||0)},flunk:{isChecked:!!parseInt(L.un_pass_score),score:parseInt(L.un_pass_score||0)},miss:{isChecked:!!parseInt(L.miss_score),score:parseInt(L.miss_score||0)}},questionsMode:q,knowledgePoints:W==="show"?1:2,passLine:c,fixedQuestion:{id:p?y.id:"",name:p?y.title:"",tableList:{fillBlankCount:p&&y.fill_blank_count||0,fillBlankScore:p&&y.fill_blank_score||0,multipleCount:p&&y.multiple_count||0,multipleScore:p&&y.multiple_score||0,shortAnswerCount:p&&y.short_answer_count||0,shortAnswerScore:p&&y.short_answer_score||0,singleCount:p&&y.single_count||0,singleScore:p&&y.single_score||0,totalCount:p&&y.total_count||0,totalScore:p&&y.total_score||0,trueOrFalseCount:p&&y.true_or_false_count||0,trueOrFalseScore:p&&y.true_or_false_score||0}},randomQuestion:{bankQuesitonVoList:p?[]:re,bankQuesitonInfo:{fillBlankCount:p?0:ie||0,fillBlankScore:p?0:We||0,fillBlankType:p?1:+Ge||1,multipleCount:p?0:He||0,multipleScore:p?0:tt||0,multipleMissedScore:p?0:et||0,shortAnswerCount:p?0:oe||0,shortAnswerScore:p?0:je||0,shortAnswerType:p?1:+Ke||1,singleCount:p?0:Je||0,singleScore:p?0:Xe||0,trueOrFalseCount:p?0:Ye||0,trueOrFalseScore:p?0:ze}},supervisor:{supervisorUserList:Ue,isChecked:Ve==="true",visibleAuthScope:!0,authScopeIsChecked:qe==="true"},summary:at||"",isOpenDrawQuestions:J&&J.length>0,proportional:J&&le||[],classify:nt,classifyName:st},isLoading:!1,canEditFields:ot,taskStatus:rt};ee&&!p?ne.WY.get({url:N.ZP.ExaminationPlanDetail.preGetPlanInfo(),params:{examId:e,enterpriseId:window.localStorage.getItem("enterpriseId")}}).then(B=>{var ce=B.data,me=Qe(Ee,ce.data);this.setState(me)}):this.setState(Ee)})},this.computedQuesiton=e=>e.map(a=>({name:a.name,id:a.id,proportion:0,disabled:a.data.totalCount===0})),this.computedProportional=(e,a)=>a.map((t,s)=>(0,m.Z)((0,m.Z)({},e[s]),{},{disabled:t.data.totalCount===0})),this.getParams=e=>{var a=e.title,t=e.dateRange,s=e.examDuration,n=e.employeeRange,i=e.cheatFlag,d=e.reExam,r=e.markType,u=e.reward,b=e.questionsMode,k=e.knowledgePoints,E=e.passLine,F=e.fixedQuestion,g=e.randomQuestion,C=e.supervisor,Z=e.summary,w=e.isOpenDrawQuestions,R=e.proportional,A=e.classify,h=b===1,Q=0,P=r.checkedValue,T=r.fillBlank,K=r.shortAnswer,U=r.anonymousMarking;P===2?T.checked&&!K.checked?Q=3:!T.checked&&K.checked?Q=4:Q=2:Q=1;var V="",D="",L=localStorage.getItem("authorityType"),q=this.props.user.loginMode;q==="WE_COM"&&!C.qyWeChatVo&&(L==="0"?V=JSON.stringify({userList:C.supervisorUserList.map(c=>(0,m.Z)((0,m.Z)({},c),{},{unionid:c.openUserid||c.unionid||c.user_id||c.name,openUserid:c.openUserid||c.unionid||c.user_id||c.name})),departmentList:[]}):L==="1"&&(V=JSON.stringify({userList:C.supervisorUserList.map(c=>(0,m.Z)((0,m.Z)({},c),{},{unionid:c.user_id||c.unionid||c.name,openUserid:c.user_id||c.unionid||c.name})),selectedUserCount:1,selectedTicket:"0"}))),q==="WE_COM"&&!n.qyWeChatVo&&(L==="0"?D=JSON.stringify({userList:n.rangeList.user.map(c=>({openUserId:c.unionid})),departmentList:[]}):L==="1"&&(D=JSON.stringify({userList:n.rangeList.user.map(c=>({openUserId:c.unionid})),selectedUserCount:n.rangeList.user.length,selectedTicket:"0",expiresIn:"604800"})));var W={questionMode:b,showKnowledge:k===1?"show":"hide",passLine:E,totalScore:h?F.tableList.totalScore:"",singleCount:h?"":g.bankQuesitonInfo.singleCount,singleUnitScore:h?"":g.bankQuesitonInfo.singleScore,multipleCount:h?"":g.bankQuesitonInfo.multipleCount,multipleUnitScore:h?"":g.bankQuesitonInfo.multipleScore,multipleMissedScore:h?"":g.bankQuesitonInfo.multipleMissedScore,trueOrFalseCount:h?"":g.bankQuesitonInfo.trueOrFalseCount,trueOrFalseUnitScore:h?"":g.bankQuesitonInfo.trueOrFalseScore,fillBlankCount:h?"":g.bankQuesitonInfo.fillBlankCount,fillBlankUnitScore:h?"":g.bankQuesitonInfo.fillBlankScore,fillBlankType:h?1:g.bankQuesitonInfo.fillBlankType,shortAnswerCount:h?"":g.bankQuesitonInfo.shortAnswerCount,shortAnswerUnitScore:h?"":g.bankQuesitonInfo.shortAnswerScore,shortAnswerType:h?1:g.bankQuesitonInfo.shortAnswerType,questionBankId:h?"":g.bankQuesitonVoList.map(c=>c.id).join(","),answerParsing:d.isChecked?d.allowed.end:d.notAllowed.end,showResult:(0,S.hi)(d),title:(0,te.fy)(a),beginTime:t.startTime,endTime:t.endTime,isAllIn:n.rangeType===1,groupIds:n.rangeList.group.map(c=>c.id).join(","),userIds:n.rangeList.user.map(c=>c.id).join(","),departmentIds:n.rangeList.dept.map(c=>c.id).join(","),postIds:n.rangeList.post.map(c=>c.id).join(","),paperId:h?F.id:"",examDuration:s,cheatFlag:i.isChecked?1:0,faceRecognition:i.faceRecognition,repeatExam:d.isChecked,markType:Q,anonymousMarking:"".concat(U),examCertificateId:u.certificate.isChecked?u.certificate.id:0,passingScore:h?(0,te.Yz)(F.tableList.totalScore*E/100):E,cutScreenCount:i.switchNum!==null?i.switchNum:-1,reExamRule:d.allowed.reRule,reExamNumber:d.allowed.reRule===2?d.allowed.reNum:0,scoreRule:d.allowed.record,viewRule:d.allowed.viewRule,isChooseErrorAnalysis:d.allowed.viewRule===3,examScore:u.pass.isChecked||u.miss.isChecked||u.flunk.isChecked?JSON.stringify({missScore:u.miss.isChecked?u.miss.score:0,passScore:u.pass.isChecked?u.pass.score:0,unPassScore:u.flunk.isChecked?u.flunk.score:0}):JSON.stringify({}),isGetScore:u.pass.isChecked||u.miss.isChecked||u.flunk.isChecked,supervisorPaper:C.isChecked,supervisorId:C.supervisorUserList.map(c=>c.id).join(","),authorityRange:C.authScopeIsChecked,summary:(0,te.fy)(Z),proportional:JSON.stringify(!h&&w?R:[]),classifyId:A||999,qy_we_supe_vo:C.qyWeChatVo||V,qy_we_chat_vo:n.qyWeChatVo||D};return W=_e(W,e),W},this.handleSubmit=(e,a)=>{var t=e.tagGroup,s=e.questionsMode,n=e.randomQuestion,i=e.fixedQuestion,d=t?t.tagsNameList:[],r=s===1,u=this.getParams(e),b=ue.parse(z.m8.location.search),k=b.id,E=this.state.taskStatus;ne.qg.post({url:k?se.edit(r)():se.add(r)(),data:(0,m.Z)((0,m.Z)({},u),{},{id:k,planStatus:E})}).then(F=>{a.setSubmitting(!1);var g=F.data,C=g.code,Z=g.msg;if(C===0){if(O.default.success(k?this.props.t("common.saveSuccess"):this.props.t("common.releaseSuccess")),k){(0,Pe.e)({examId:k,publishStatus:"published"});var w={tags:d,resourceId:k,resourceType:"examTask"};(0,ve.tB)(w)}else if(d&&d.length){var R={tags:d,resourceId:F.data.data,resourceType:"examTask"};(0,ve.tB)(R)}z.m8.push("/training/examination/plan")}else if(C===111){var A=F.data.data.stageError[0].resourceIds,h=[];r||n.bankQuesitonVoList.forEach(P=>{A.includes(P.id)&&h.push(P.name)});var Q=r?"".concat(i.name," ").concat(this.props.t("common.rsNonExistent")):"".concat(h.join(",")," ").concat(this.props.t("common.rsNonExistent"));(0,Re.R)({name:r?"fixedQuestion":"randomQuestion",errMsg:Q,actions:a})}else{if(C===1)return;O.default.error(Z)}}).catch(()=>{a.setSubmitting(!1)})},this.handleCancel=()=>{z.m8.push("/training/examination/plan")}}componentDidMount(){var e=ue.parse(z.m8.location.search),a=e.id;a?this.getDetail(a):this.getScoreRule()}render(){var e=this.props,a=e.prefixCls,t=e.preview,s=t===void 0?!1:t,n=e.t,i=this.state,d=i.initialParams,r=i.isLoading,u=i.canEditFields;if(r)return o().createElement($.Z,{size:"large"});var b=ue.parse(z.m8.location.search),k=b.id,E={resourceType:"examTask",resourceId:k},F="".concat(n(s?"common.preview":k?"common.edit":"common.add")).concat(n("exam.examTaskTitle")),g=n(k?"documentTitle.EditTestTask":"documentTitle.AddTestTask");return o().createElement("div",{className:a},o().createElement(Ze.Z,{title:g}),o().createElement("div",{className:"".concat(a,"__content")},o().createElement(f.J9,{initialValues:d,onSubmit:this.handleSubmit,render:C=>o().createElement(Be,(0,v.Z)({},C,{disabled:s,multipleMissedScore:!0,anonymousMarking:!0,tagGroupInit:E,canEditFields:u,title:F,isEdit:!!k,onCancel:this.handleCancel}))})))}}ke.defaultProps={prefixCls:"plan-add"};var De=x=>({user:x.user}),$e=(0,we.$j)(De)((0,he.Z)()(ke))},18681:function(pe,G,l){"use strict";l.d(G,{T:function(){return $},e:function(){return Y}});var v=l(37055),X=l(10237);function $(O){var m=O.examId;return X.WY.get({url:v.ZP.ExaminationPlanList.getExaminationInfo({examId:m}),params:{examId:m}})}function Y(O){var m=O.examId,ae=O.publishStatus;return X.WY.post({url:v.ZP.ExaminationPlanList.changePublish(),params:{examId:m,publishStatus:ae}})}},17994:function(pe,G,l){"use strict";l.d(G,{R:function(){return X}});var v=l(62615),X=$=>{var Y=$.name,O=$.errMsg,m=$.actions;m.setFieldError(Y,O),m.setSubmitting(!1),v.I.scrollTo(Y)}}}]);