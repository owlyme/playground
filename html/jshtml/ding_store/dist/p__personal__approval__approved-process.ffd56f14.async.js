(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[9943],{59024:function(ne,P,a){"use strict";var i=a(87593),v=a(37636),M=a(33565),g=a(12924),n=a.n(g),T=a(91768),V=a(45555),p=a.n(V),E=a(47503),f=a(18329),e=a(6793),c=a(56932);function y(d){var o=d.approvalData,s=d.t,I=(0,g.useState)(!1),O=(0,M.Z)(I,2),D=O[0],N=O[1],R=(0,g.useState)(""),Z=(0,M.Z)(R,2),L=Z[0],J=Z[1],F={approval_going:s("common.pending"),approval_pass:s("common.passed"),approval_reject:s("common.refused"),approval_revoked:s("approval.revoked")},z={approval_going:"rgba(0,0,0,.25)",approval_pass:"#8bbf64",approval_reject:"#f03a3a",approval_revoked:"#ffbd74"};function B(t,u){var h=c;return u&&t===1&&(h=u),n().createElement("img",{className:p().avatar,width:"26",height:"26",src:h,alt:""})}function k(t){var u=[];return t.forEach(h=>{u.push(h.user_name)}),u.join("\u3001")}function G(t){J(t),N(!0)}function X(t,u){return n().createElement(v.Z.Item,{key:t.user_id,color:z[t.status],dot:B(t.users.length,t.users.length?t.users[0].avatar:"")},n().createElement("div",{className:p().title},n().createElement("span",{className:p().approval},t.status==="approval_revoked"?s("approval.revoked"):s("authentication.abilityDetailApprover")),t.users&&t.users.length&&t.users[0].approval_time?n().createElement("span",{className:p().time},(0,e.p6)(t.users[0].approval_time)):null),t.auto_pass==="true"?n().createElement("span",null,s("approval.autoPass")):n().createElement(n().Fragment,null,t.users.length>1?n().createElement("div",null,t.sign_type==="all"?s("approval.allApproval",{param:t.users.length}):s("approval.anyApproval",{param:t.users.length}),n().createElement("span",{className:p()[t.status]},"\uFF08",F[t.status]||"","\uFF09")):null,n().createElement("div",null,n().createElement("span",null,t.users.length>1?n().createElement(E.Z,{onAll:()=>{G(u)},signType:t.sign_type,edit:!1,isFold:!0,list:t.users,max:5}):n().createElement("span",null,k(t.users))),(t.status==="approval_pass"||t.status==="approval_reject"||t.users.length===1)&&n().createElement(n().Fragment,null,n().createElement("span",{style:{color:z[t.status]}},"\uFF08",F[t.status]||"","\uFF09"),n().createElement("span",null,t.users[0].extend_info&&typeof t.users[0].extend_info.score=="number"?t.users[0].extend_info.score+s("common.score"):""))),(t.status==="approval_pass"||t.status==="approval_reject")&&n().createElement("div",{className:p().remarkMessage},t.users[0].form_msg)))}return n().createElement("div",null,n().createElement(v.Z,{className:p().approvalList},o.list.length&&o.list[0].users.length&&n().createElement(v.Z.Item,{color:"#8bbf64",dot:B(1,o.list.length&&o.list[0].users.length?o.list[0].users[0].avatar:"")},n().createElement("div",{className:p().title},n().createElement("span",{className:p().approval},s("practiceOperation.initiateApproval")),n().createElement("span",{className:p().time},(0,e.p6)(o.list[0].users[0].approval_time))),n().createElement("div",null,o.list[0].users[0].user_name)),o.list.map((t,u)=>u!==0?X(t,u):null)),n().createElement(f.ZP,{visible:D,title:s("authentication.abilityDetailApprover"),footer:null,onCancel:()=>N(!1)},D&&n().createElement(E.Z,{isFold:!1,list:o.list[L].users,signType:o.list[L].sign_type,edit:!1,max:4})))}P.Z=(0,T.Z)()(y)},59654:function(ne,P,a){"use strict";a.r(P),a.d(P,{default:function(){return h}});var i=a(13062),v=a(71230),M=a(89032),g=a(15746),n=a(57663),T=a(71577),V=a(71194),p=a(57016),E=a(33565),f=a(12924),e=a.n(f),c=a(91768),y=a(76651),d=a(12532),o=a(38396),s=a.n(o),I=a(62029),O=a(34792),D=a(48086),N=a(88986),R=a(80991),Z=a(6793),L=a(70075),J=a(18329);function F(A){var l=A.t,U=A.visible,x=A.approvalType,W=A.taskId,$=A.personnelId,_=(0,f.useState)(null),j=(0,E.Z)(_,2),C=j[0],H=j[1],K={reason:""},r={title:l(x==="pass"?"approval.passTitle":"approval.rejectTitle"),size:"medium",okText:l("common.ok"),cancelText:l("common.cancel"),destroyOnClose:!0,bodyStyle:{padding:"16px"},maskClosable:!1},Q={labelCol:{xs:{span:5},sm:{span:5}},wrapperCol:{xs:{span:16},sm:{span:16}}};function w(m){return(0,Z.fy)(m)?(0,Z.fy)(m).length>100?l("approval.limitWord",{num:100}):"":l("validation.pleaseEnter")+l("personal.approvalComments")}function b(){C&&C.submitForm()}function q(){A.onCancel()}function S(m){var ae={suggest:m.reason,taskId:W,personnel_id:$};(0,d.XJ)((0,N.Z)((0,N.Z)({},ae),{},{exeResult:x==="pass"?"agree":"refuse"})).then(te=>{var Y=te.data;Y.code==="200000"?A.onApproval():D.default.warning(Y.msg)})}function ee(m){H(m)}return e().createElement(J.ZP,(0,I.Z)({},r,{footerType:"custom",visible:U,onOk:b,onCancel:q}),e().createElement(R.J9,{ref:ee,initialValues:K,onSubmit:S,render:m=>e().createElement(R.l0,null,e().createElement(R.gN,(0,I.Z)({component:L.Z,name:"reason",label:l("personal.approvalComments"),required:!0,type:"text",maxLength:100,defaultValue:m.values.reason,validate:w},Q)))}))}var z=(0,c.Z)()(F),B=a(59024),k=a(66663),G=a(4408),X=a(84874),t=a(38642);function u(A){var l=A.t,U=y.m8.location.query,x=U.approvalType,W=U.instanceId,$=(0,f.useState)(""),_=(0,E.Z)($,2),j=_[0],C=_[1],H=(0,f.useState)(null),K=(0,E.Z)(H,2),r=K[0],Q=K[1],w=(0,f.useState)(!1),b=(0,E.Z)(w,2),q=b[0],S=b[1],ee={approval_going:{icon:""},approval_pass:{icon:"icon-shenpitongguo"},approval_reject:{icon:"icon-shenpijujue"},approval_revoked:{icon:"icon-shenpichexiao"}};(0,f.useEffect)(()=>{function oe(pe){(0,d.ph)(pe).then(le=>{le.data.code==="200000"&&Q(le.data.data)})}oe(W)},[W]);function m(){C("pass"),S(!0)}function ae(){p.Z.confirm({title:l("common.tip"),content:l("approval.revokedTip"),okText:l("common.ok"),cancelText:l("common.cancel"),onOk:()=>{(0,d.xx)(r.instance_id).then(()=>{se()})}})}function te(){C("refuse"),S(!0)}function Y(){C(""),S(!1)}function se(){C(""),S(!1),(0,t.eJ)({url:"/personal/profile?tab=approvalProcess&fromDetail=true"})}function re(){return e().createElement("div",{className:s().footer},e().createElement("div",{className:s().footerContent},e().createElement("div",null,x==="pending"&&r.approval_user==="true"&&e().createElement(T.Z,{onClick:()=>te()},l("common.refuse")),x==="me"&&e().createElement(T.Z,{danger:!0,onClick:()=>ae()},l("certificateRankingList.cancel")),x==="pending"&&r.approval_user==="true"&&e().createElement(T.Z,{type:"primary",onClick:()=>m()},l("approval.agree")))))}return e().createElement(e().Fragment,null,e().createElement(G.Z,{title:l("documentTitle.approvalDetail")}),r&&e().createElement("div",{className:s().approvedView},e().createElement("div",{className:s().approvedProcess},e().createElement(v.Z,{className:s().content},e().createElement(g.Z,{span:24},e().createElement("div",{className:s().approvalInfo},e().createElement("div",{className:s().approvalCode},e().createElement("div",null,l("approval.approvalCode"),"\uFF1A",r.instance_id),e().createElement("div",null,(0,Z.ZT)("".concat(l("approval.approvalBelongs")),r.biz_title))),r.status&&r.status!=="approval_going"?e().createElement("span",{className:"status-img"},e().createElement(X.Z,{iconClass:ee[r.status].icon,size:"80px"})," "):l("approval.going"))),e().createElement(g.Z,{span:24},e().createElement(k.Z,{content:r.content,instanceId:W,biz_type:r.biz_type,from:"approval"})),e().createElement(g.Z,{span:24},e().createElement(B.Z,{approvalData:r})))),r.status==="approval_going"&&re(),e().createElement(z,{visible:q,approvalType:j,onCancel:Y,onApproval:se,personnelId:r.personnel_id,instanceId:r.instance_id,taskId:r.list[r.list.length-1].task_id})))}var h=(0,c.Z)()(u)},12532:function(ne,P,a){"use strict";a.d(P,{zm:function(){return M},B3:function(){return g},xx:function(){return n},XJ:function(){return p},ph:function(){return E}});var i=a(37055),v=a(10237);function M(e){var c=e.status,y=e.bizType,d=e.title,o=e.createUserId,s=e.pageNumber,I=e.pageSize,O=i.ZP.approval.getWorkflowList();return v.WY.get({url:O,params:{status:c,biz_type:y,title:d,create_user_id:o,page_number:s,page_size:I}})}function g(e){var c=e.type,y=e.status,d=e.bizType,o=e.title,s=e.createUserId,I=e.pageNumber,O=e.pageSize,D=i.ZP.approval.getWorkflowListWaitDone();return v.WY.post({url:D,data:{app_id:"cool",eid:i.ZP.enterpriseId,uid:i.ZP.userId,f_status:y,task_status:c,task_type:"workflow",business_type:d,task_name:o,user_ids:s?[s]:[],page_number:I,page_size:O}})}function n(e){return v.WY.post({url:i.ZP.approval.withdrawApproval(e)})}function T(e){return request.post({url:CONFIG.approval.passApproval(e),data:{suggest:e.suggest}})}function V(e){return request.post({url:CONFIG.approval.rejectApproval(e),data:{suggest:e.suggest}})}function p(e){return v.WY.post({url:i.ZP.approval.executeApproval(e),data:{app_id:"cool",eid:i.ZP.enterpriseId,uid:i.ZP.userId,proposal:e.suggest,personnel_id:e.personnel_id,exe_result:e.exeResult,task_id:e.taskId}})}function E(e){return v.WY.get({url:i.ZP.approval.getApprovalInfos(e)})}function f(e){var c=e.instanceId,y=e.biz_type;return request.get({url:CONFIG.trainingConfig.getBusinessId(c),params:{biz_type:y}})}}}]);
