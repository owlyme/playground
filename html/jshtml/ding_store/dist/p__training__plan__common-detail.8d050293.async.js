(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[8804],{20576:function(Fa,V,e){"use strict";e.r(V),e.d(V,{default:function(){return Ta}});var La=e(13062),la=e(71230),Oa=e(20228),sa=e(11382),ja=e(89032),W=e(15746),Ra=e(34792),J=e(48086),K=e(57361),A=e(33565),na=e(9754),F=e.n(na),f=e(12924),a=e.n(f),Q=e(91768),R=e(76651),ra=e(27361),L=e.n(ra),X=e(57482),oa=e(37055),ia=e(10237);function ua(l){return ia.WY.get({url:oa.ZP.approval.getApprovalInfos(l)})}function Xa(l){var s=l.instanceId,n=l.biz_type;return request.get({url:CONFIG.trainingConfig.getBusinessId(s),params:{biz_type:n}})}var $a=e(87593),$=e(37636),x=e(47503),va=e(18329),w=e(6793),pa=e(73105),p=e.n(pa),ca=e(56932);function da(l){var s=l.approvalData,n=l.t,h=(0,f.useState)(!1),u=(0,A.Z)(h,2),E=u[0],c=u[1],T=(0,f.useState)(""),P=(0,A.Z)(T,2),y=P[0],B=P[1],I={approval_going:n("common.pending"),approval_pass:n("common.passed"),approval_reject:n("common.refused"),approval_revoked:n("approval.revoked")},U={approval_going:"rgba(0,0,0,.25)",approval_pass:"#8bbf64",approval_reject:"#f03a3a",approval_revoked:"#ffbd74"};function O(t,d){var D=ca;return d&&t===1&&(D=d),a().createElement("img",{className:p().avatar,width:"26",height:"26",src:D,alt:""})}function G(t){var d=[];return t.forEach(D=>{d.push(D.user_name)}),d.join("\u3001")}function H(t){B(t),c(!0)}return a().createElement("div",null,a().createElement($.Z,{className:p().approvalList},s.list.length&&s.list[0].users.length&&a().createElement($.Z.Item,{color:"#8bbf64",dot:O(1,s.list[0].users[0].avatar)},a().createElement("div",{className:p().title},a().createElement("span",{className:p().approval},n("practiceOperation.initiateApproval")),a().createElement("span",{className:p().time},(0,w.p6)(s.list[0].users[0].approval_time))),a().createElement("div",null,s.list[0].users[0].user_name)),s.list.map((t,d)=>d!==0?a().createElement($.Z.Item,{key:t.user_id,color:U[t.status],dot:O(t.users.length,t.users[0].avatar)},a().createElement("div",{className:p().title},a().createElement("span",{className:p().approval},n("authentication.abilityDetailApprover")),(t.status==="approval_pass"||t.status==="approval_reject")&&a().createElement("span",{className:p().time},(0,w.p6)(t.users[0].approval_time))),t.auto_pass==="true"?a().createElement("span",null,n("approval.autoPass")):a().createElement(a().Fragment,null,t.users.length>1?a().createElement("div",null,t.sign_type==="all"?n("approval.allApproval",{param:t.users.length}):n("approval.anyApproval",{param:t.users.length}),a().createElement("span",{className:p()[t.status]},"\uFF08",I[t.status]||"","\uFF09")):null,a().createElement("div",null,a().createElement("span",null,t.users.length>1?a().createElement(x.Z,{onAll:()=>{H(d)},signType:t.sign_type,edit:!1,isFold:!0,list:t.users,max:5}):a().createElement("span",null,G(t.users))),(t.status==="approval_pass"||t.status==="approval_reject"||t.users.length===1)&&a().createElement("span",{className:p()[t.status.split("_")[1]]},"\uFF08",I[t.status]||"","\uFF09")),(t.status==="approval_pass"||t.status==="approval_reject")&&a().createElement("div",{className:p().remarkMessage},t.users[0].form_msg))):null)),a().createElement(va.ZP,{visible:E,title:n("authentication.abilityDetailApprover"),footer:null,onCancel:()=>c(!1)},E&&a().createElement(x.Z,{isFold:!1,list:s.list[y].users,signType:s.list[y].sign_type,edit:!1,max:4})))}var ma=(0,Q.Z)()(da),r=e(58697),Ua=e(57663),k=e(71577),Ga=e(1925),fa=l=>{var s=l.bizType,n=l.handleBack,h=l.handleSubmit,u=l.isSubmitting,E=l.t,c=l.planDetail,T;switch(s){case r.B.EXEC:T=["unpublished","reject"].includes(c==null?void 0:c.status)?a().createElement(a().Fragment,null,a().createElement(k.Z,{className:"form-page-container-bottom-btn",loading:u,onClick:h,type:"primary"},E("common.release"))):"";break;default:break}return a().createElement("div",{className:"cl-form-fixed-footer"},a().createElement("div",{className:"cl-form-fixed-footer__container"},T,a().createElement(k.Z,{type:"primary",onClick:n},E("common.return"))))},ha=fa,ga=e(83753),N=e.n(ga),Ea=e(4408),ya=e(73704),q=e(74927),Aa=l=>({[r.B.TEMP_PLAN]:"tempPlan",[r.B.MONTH_PLAN]:"monthPlan",[r.B.EXEC]:l==="training_temp_plan"?"tempPlan":"monthPlan",[r.B.DEMAND]:"trainingDemand",[r.B.ANNUAL_PLAN]:"annualPlan",personal:"personal"});function Na(l){var s=l.t,n=R.m8.location.query,h=n.businessId,u=n.bizType,E=n.from,c=E===void 0?"month":E,T=(0,f.useState)({isShowApprovalModal:!1,businessId:"",bizType:"",approvalTitle:""}),P=(0,A.Z)(T,2),y=P[0],B=P[1],I=y.isShowApprovalModal,U=y.businessId,O=y.bizType,G=y.approvalTitle,H=y.content,t=(0,f.useState)(!1),d=(0,A.Z)(t,2),D=d[0],S=d[1],Da=(0,f.useState)(null),_=(0,A.Z)(Da,2),aa=_[0],ea=_[1],Sa=(0,f.useState)({}),ta=(0,A.Z)(Sa,2),ba=ta[0],Za=ta[1],M=(0,f.useRef)(),j=function(){var g=(0,K.Z)(F().mark(function v(){var b,C,m,Z,z;return F().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(b=[r.B.ANNUAL_PLAN,r.B.EXEC,r.B.MONTH_PLAN,r.B.DEMAND,r.B.TEMP_PLAN].includes(u),!(b&&h)){o.next=14;break}return S(!0),o.prev=3,C={[r.B.ANNUAL_PLAN]:"annual",[r.B.MONTH_PLAN]:"month",[r.B.EXEC]:"exec",[r.B.DEMAND]:"demand"},o.next=7,(0,X.DM)(C[u],h);case 7:m=o.sent,(m.data.code==="200000"||m.data.code===2e5)&&(Z=L()(m.data.data,"0")||m.data.data,Za(Z),z=L()(Z,"workflow_instance_id"),Pa(z)),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(3),S(!1);case 14:case"end":return o.stop()}},v,null,[[3,11]])}));return function(){return g.apply(this,arguments)}}();(0,f.useEffect)(()=>{j()},[]);var Pa=g=>{g?ua(g).then(v=>{(v.data.code==="200000"||v.data.code===2e5)&&ea(v.data.data),S(!1)}).catch(()=>{S(!1)}):(ea(null),S(!1))},Ba=()=>{if(c==="personal")(0,q.E)();else{var g=Aa(c),v=g[u]?"/training/trainingPlan/".concat(g[u]):"";v?R.m8.push(v):R.m8.go(-1)}},Ia=function(){var g=(0,K.Z)(F().mark(function v(){var b,C,m,Z,z,Y,o;return F().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!h){i.next=15;break}return i.prev=1,i.next=4,(0,X.DM)("exec",h);case 4:return b=i.sent,i.next=7,(0,X.XA)(L()(b,"data.data.0.plan_task_id"));case 7:C=i.sent,m=C.data.data,Z=m.business_id,z=m.type,Y=m.has_flow_template,o=m.content,Y?B({content:o,isShowApprovalModal:!0,businessId:Z,bizType:z,approvalTitle:L()(b,"data.data.0.title")}):(j(),J.default.success(s("training.published_successfully")),M.current.fetchData&&M.current.fetchData()),i.next=15;break;case 12:i.prev=12,i.t0=i.catch(1),console.error(i.t0,"error ?");case 15:case"end":return i.stop()}},v,null,[[1,12]])}));return function(){return g.apply(this,arguments)}}(),Ma=()=>{B({isShowApprovalModal:!1,businessId:"",bizType:"",approvalTitle:""})},Ca=()=>{B({isShowApprovalModal:!1,businessId:"",bizType:"",approvalTitle:""}),c==="personal"?(0,q.E)():(j(),J.default.success(s("training.published_successfully")),M.current.fetchData&&M.current.fetchData()),l.onCancel&&l.onCancel()},za=s("documentTitle.trainingPlanDetails");return a().createElement("div",{className:N().approvedView},a().createElement(Ea.Z,{title:za}),a().createElement("div",{className:N().approvedProcess},a().createElement(la.Z,{className:N().content},a().createElement(W.Z,{span:24},a().createElement(r.Z,{ref:M,businessId:h,biz_type:u,from:c,fetchTrainData:j})),D?a().createElement(sa.Z,null):aa&&a().createElement(W.Z,{span:24},a().createElement("div",{className:N().headerTitle},a().createElement("div",{className:N().sot}),a().createElement("div",{className:N().title},s("training.approval_results"))),a().createElement(ma,{approvalData:aa})),a().createElement(ha,{planDetail:ba,bizType:u,isSubmitting:l.isSubmitting,handleSubmit:Ia,handleBack:Ba,t:l.t}),I&&a().createElement(ya.Z,{show:I,setShow:Ma,submitRefresh:Ca,businessId:U,bizType:O,title:G,content:H}))))}var Ta=(0,Q.Z)()(Na)}}]);