(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[752],{1164:function(ae,F,l){"use strict";var J=l(12924),W=l.n(J),D=l(76651),a=l(38642),A=l(91302),Z=g=>{var x=navigator.userAgent.toLocaleLowerCase(),V=localStorage.getItem("enterpriseId"),b=(0,a.lz)(V,g.projectType),j=localStorage.getItem("dingPersonnel"),O=A.bl.includes(j),U=g.target;function h(d){if(U==="self"&&(d.preventDefault(),D.m8.push(g.to)),O){if(g.projectType==="student"){window.location.href="".concat(b,"/").concat(g.to);return}D.m8.push(g.to);return}if(dd.version){d.preventDefault();var v="";g.to.includes("?")?v="".concat(b).concat(g.to,"&ddtab=true"):v="".concat(b).concat(g.to,"?ddtab=true"),dd.biz.util.openLink({url:v})}else x.indexOf("lark")!==-1&&(window.location.href="".concat(b).concat(g.to))}return W().createElement("a",{rel:"noreferrer",href:"".concat(g.projectType==="student"?"".concat(b).concat(g.to):"#".concat(g.to)),className:"".concat(g.wrapCls," cl-pointer"),target:x.indexOf("lark")!==-1||O?"_self":g.target||"_blank",onClick:h},g.children)};Z.defaultProps={to:"/",wrapCls:"",target:"",projectType:"manage"},Z.targetTo=g=>{var x=g.path,V=g.from,b=g.isExternalLink,j=b===void 0?!1:b,O=g.isAsync,U=O===void 0?!1:O,h=g.openName,d=h===void 0?"_blank":h,v=g.projectType,f=v===void 0?"manage":v,y=g.ddTab,K=y===void 0?!0:y,S,ee=localStorage.getItem("dingPersonnel"),se=A.bl.includes(ee),G=navigator.userAgent.toLocaleLowerCase(),Y=localStorage.getItem("enterpriseId"),B=(0,a.lz)(Y,f),k=localStorage.getItem("appType"),Q=navigator.userAgent.toLowerCase().indexOf("wxwork")>-1;if(dd.version){var H="";if(S=j?"":B,se&&!j){if(f==="student"){window.location.href="".concat(B).concat(x);return}D.m8.push(x);return}x.includes("?")?H="".concat(S).concat(x,"&ddtab=").concat(K):H="".concat(S).concat(x,"?ddtab=").concat(K),dd.biz.util.openLink({url:H})}else if(G.indexOf("lark")!==-1)S=j?"":B,window.location.href="".concat(S).concat(x);else if(k==="wx_app"&&Q&&j&&V==="imgText")S=j?"":f==="student"?"".concat(B):"#",window.wx.invoke("openDefaultBrowser",{url:"".concat(S).concat(x)});else if(S=j?"":f==="student"?"".concat(B):"#",U){var o=window.open("","_blank");setTimeout(()=>{o.location="".concat(S).concat(x)},100)}else window.open("".concat(S).concat(x),d)},F.Z=Z},62774:function(ae,F,l){"use strict";l.d(F,{er:function(){return A},UZ:function(){return x},Sp:function(){return V},PN:function(){return b},If:function(){return j},T4:function(){return O},ob:function(){return h}});var J=l(57068),W=l(76651),D=l(38642),a=l(1164),A=d=>v=>v?"".concat(d,"-").concat(v):d,Z=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,f=[];if(!v)return f;for(var y=0;y<v;y++)f.push(Math.random()*100);return f},g=(d,v)=>d?v:()=>{},x=function(v){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"manage";sessionStorage.setItem("redirectUrl",JSON.stringify({redirectUrl:v,projectType:f})),W.m8.push("/index-auth-login-new")},V=d=>{var v,f,y;switch(d.biz_type){case 3:v="/training/trainingProject/traineeView?id=".concat(d.id,"&taskId=").concat(d.project_id,"&source=first"),y="student";break;case 2:d.resource_type==="video"?(v="/course/enterpriseCourse?courseId=".concat(d.id),y="student"):f={visible:!0,pageUrl:"/pages/messageRedirect/messageRedirect?courseId=".concat(d.id,"&flag=miniCourse")};break;case 6:v="/course/watch?".concat(J.stringify({courseId:d.id,source:"enterprise",courseName:"",exitAiUpdate:!1,courseType:"imageText"})),y="student";break;default:v="/course/enterpriseCourse?courseId=".concat(d.id),y="student";break}return{url:v,weiProps:f,projectType:y}},b=d=>{var v=d.flag,f=d.id,y="";v?y="/course/platformCoursePackageDetail?coursePackageId=".concat(f):y="/course/platformCourseDetail?courseId=".concat(f),(0,D.eJ)({url:y})};function j(d){return!d||d.length===0}var O=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,f=(v/100).toFixed(2).split(".");return{integer:f[0],decimal:f[1]}},U=d=>{var v=d.project_id,f=d.id;return v?"/course/project/visitors?id=".concat(f,"&source=first"):"/course/enterpriseCourse/visitors?courseId=".concat(f)},h=d=>{switch(d.type){case"classify":W.m8.push("/course/management/visitors?classifyId=".concat(d.classify.id,"&classifyName=").concat(d.classify.title));break;case"course":(0,D.eJ)({url:U(d.course),projectType:"student"});break;case"study_project":(0,D.eJ)({url:U(d.course),projectType:"student"});break;case"link":a.Z.targetTo({path:d.linkUrl,isExternalLink:!0});break;case"image":break;default:W.m8.push("/".concat(d.defaultUrl))}}},4632:function(ae,F,l){"use strict";l.r(F),l.d(F,{default:function(){return Ce}});var J=l(20228),W=l(11382),D=l(12924),a=l.n(D),A=l(91768),Z=l(76651),g=l(57068),x=l(62029),V=l(71194),b=l(57016),j=l(58687),O=l(4408),U=l(47220),h=l.n(U),d=l(18329),v=l(84874),f=l(6793),y=l(53009),K=l(62774);class S extends a().Component{constructor(){super(...arguments);this.state={visible:!1},this.handleClose=()=>{this.setState({visible:!1})},this.handleOpenInstruction=()=>{this.setState({visible:!0})},this.handleOpenComments=()=>{var e=this.props,t=e.projectId,s=e.taskId,n="/training/trainingProject/traineeView?id=".concat(t,"&taskId=").concat(s,"&tab=2");(0,K.UZ)(n,"student")},this.handleOpenRecord=()=>{var e=this.props,t=e.projectId,s=e.taskId,n="/training/trainingProject/traineeView?id=".concat(t,"&taskId=").concat(s,"&tab=3");(0,K.UZ)(n,"student")},this.getTotalHour=e=>{var t=this.props.t,s=0,n="--",r=[];return e.stages&&(r=(0,y.$x)((0,y.tT)(e.stages),e.stage_error_list.length>0?e.stage_error_list:[]),r.forEach(m=>{m.list.forEach(u=>{u.duration&&(u.type==="course"||(u.originalType==="mp4"||u.originalType==="mp3")&&u.status===3||u.type==="ex")&&(s+=Number(u.duration))})})),s<60&&s>0?n="".concat(s).concat(t("pk.second")):s>60&&(n="".concat(Math.ceil(s/60)).concat(t("common.minutes"))),n}}render(){var e=this.props,t=e.summary,s=e.prefixCls,n=e.progress,r=e.score,m=e.num,u=e.avatar,i=e.t,_=e.template,C=e.summaryBg,p=e.projectInfo,E=e.showRecord,T=e.showComments,P=this.state.visible,M=u||"https://oss.coolcollege.cn/1790708689137700864.png",I=_==="desert"?"__desert":"";return a().createElement("div",{className:h()["".concat(s,"__wrapper")]},a().createElement("div",{className:h()["".concat(s,"__container")]},a().createElement("section",{className:h()["".concat(s,"__container__personal")]},a().createElement("section",{className:h()["".concat(s,"__container__badge")]},a().createElement("img",{className:h()["".concat(s,"__container__badge__avatar")],src:M}),a().createElement("span",{className:h()["".concat(s,"__container__badge__progress").concat(I)]},n,"%")),a().createElement("section",{className:h()["".concat(s,"__container__info").concat(I)]},a().createElement("p",null,(0,f.ZT)("".concat(i("authentication.hadGotScore")),r)),a().createElement("p",null,(0,f.ZT)("".concat(i("authentication.hadExceed")),m)))),a().createElement("section",{className:h()["".concat(s,"__container__title")],onClick:this.handleOpen},a().createElement("h1",{className:h()[_],title:p.title},p.title)),a().createElement("section",{className:h()["".concat(s,"__container__operate")]},a().createElement("section",{className:h()["".concat(s,"__container__item")],onClick:this.handleOpenInstruction},a().createElement("span",{className:h()["".concat(s,"__container__summary__icon")]},a().createElement("img",{src:"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/instruction.png"})),a().createElement("span",{title:i("authentication.summary"),className:h()["".concat(s,"__container__summary__text").concat(I)]},i("authentication.summary"))),T?a().createElement("section",{className:h()["".concat(s,"__container__item")],onClick:this.handleToLogin},a().createElement("span",{className:h()["".concat(s,"__container__summary__icon")]},a().createElement("img",{src:"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/comments.png"})),a().createElement("span",{title:i("authentication.studentComment"),className:h()["".concat(s,"__container__summary__text").concat(I)]},i("authentication.studentComment"))):null,E?a().createElement("section",{className:h()["".concat(s,"__container__item")],onClick:this.handleToLogin},a().createElement("span",{className:h()["".concat(s,"__container__summary__icon__record")]},a().createElement("img",{src:"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/record.png"})),a().createElement("span",{title:i("authentication.record"),className:h()["".concat(s,"__container__summary__text").concat(I)]},i("authentication.record"))):null),a().createElement(d.ZP,{visible:P,size:"small",footer:null,closable:!1,wrapClassName:h()["".concat(s,"__modal__wrapper")],className:h()["".concat(s,"__modal")],maskStyle:{backgroundColor:"rgba(0, 0, 0, 0.75)"},modalRender:()=>a().createElement("div",{className:h()["".concat(s,"__modal-content").concat(I)]},a().createElement("img",{className:h()["".concat(s,"__modal-content").concat(I,"__image")],src:C}),a().createElement("div",{className:h()["".concat(s,"__modal-content").concat(I,"__summary")]},t||i("tutorial.noIntroduction"),p.stages&&p.stages.length>0?a().createElement("div",{className:"pass-reward"},i("courseManage.estimatedHours"),"\uFF1A",this.getTotalHour(p)):null,p.progress>0||p.times>0?a().createElement("div",{className:"pass-standard"},i("learning.learningAddSecPassTitle"),"\uFF1A",p.progress>0?"".concat(i("learning.learningProjectStudyProgress")).concat(p.progress,"% "):"",p.times>0?" ".concat(i("learning.learningProjectExamProgress")).concat(p.times).concat(i("common.examUnit")):"",p.operation_times>0?" ".concat(i("learning.learningProjectOperationProgress")).concat(p.operation_times).concat(i("common.examUnit")):"",p.finish_evaluation==="true"?" ".concat(i("learning.learningProjectEvaluationProgress")):""):null,p.study_score&&p.study_score.finish_score?a().createElement("div",{className:"pass-reward"},i("learning.learningAddSecRewardTitle"),"\uFF1A",p.study_score?"".concat(p.study_score.finish_score).concat(i("common.credit")):""):null,p.certificate_name?a().createElement("div",{className:"certificate-name"},i("personal.getCerti"),"\uFF1A",p.certificate_name?a().createElement("span",null,"\u300A",p.certificate_name,"\u300B"):null):null),a().createElement("span",{className:h()["".concat(s,"__modal-content").concat(I,"__close")],onClick:this.handleClose},a().createElement(v.Z,{iconClass:"icon-icon_close",size:"32px",color:"#fff"})))})))}}S.defaultProps={progress:0,score:0,num:0,summary:"",avatar:"",prefixCls:"map-key"};var ee=(0,A.Z)()(S),se=l(34792),G=l(48086),Y=l(28216),B=l(94184),k=l.n(B),Q=l(70131),H=l(13684),o=l.n(H),le=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s="https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/".concat(e%10!=0?e%10:10,".png");return t&&(s="https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/".concat(e%10!=0?e%10:10,"-lock.png")),s};class me extends a().Component{constructor(){super(...arguments);this.initRef=e=>{this.outerRef=e},this.handleClick=()=>{var e=this.props,t=e.lock,s=e.t,n=e.onItemClick,r=e.stagePass,m=e.index;t==="lock"&&r?G.default.warning(s("authentication.lockedClick")):n(m)},this.renderAvatar=()=>{var e=this.props,t=e.lock,s=e.avatar,n=e.shouldAnimationDelay;if(t==="lock"||t==="not_qualified")return null;var r;t==="current"&&(r=s),t==="finish"&&(r="https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/astronaut.png");var m=k()([o()["avatar-container"],t==="finish"?o()["avatar-container-completed"]:"",n?"":o()["avatar-container__rightnow"]]);return a().createElement("div",{className:m},a().createElement("img",{src:r,className:t==="finish"?o().avatar__astronaut:o().avatar}))},this.renderInfos=()=>{var e=this.props.lock;return e==="finish"?this.renderCompletedInfos():e==="lock"?this.renderLockedInfos():this.renderProcessingInfos()},this.renderCompletedInfos=()=>{var e=this.props,t=e.idx,s=e.position,n=e.name,r=e.t,m=k()([o().infos,o()["infos-idx".concat(t%10!=0?t%10:10)],o()["infos-completed"],s==="left"?o()["infos-left"]:o()["infos-right"]]),u=k()([o().indicator__num,o()["indicator__num-".concat(t%10!=0?t%10:10)]]);return a().createElement("div",{className:m},a().createElement("div",{className:o().indicator},a().createElement("span",{className:u},t>=10?t:"0".concat(t))),a().createElement("div",{className:o().name,title:n},n),a().createElement("div",{className:o().progress},a().createElement("span",{className:o().done},a().createElement(v.Z,{iconClass:"icon-icon_donex1",size:"12px",color:"black"})),a().createElement("span",null,r("questionn.completed"))))},this.renderLockedInfos=()=>{var e=this.props,t=e.idx,s=e.position,n=e.name,r=e.score,m=e.unlockAvatars,u=e.unlockNum,i=e.progress,_=e.t,C=e.stagePass,p=e.lock,E=k()([o().infos,o()["infos-idx".concat(t%10!=0?t%10:10)],o()["infos-lock"],s==="left"?o()["infos-left"]:o()["infos-right"]]),T=k()([o().indicator,s==="left"?o()["indicator-left"]:o()["indicator-right"]]),P=k()([o().indicator__num,o()["indicator__num-disabled"]]),M=k()([o().indicator__num,o()["indicator__num-".concat(t%10!=0?t%10:10)]]),I=k()([o().avatars,s==="left"?o()["avatars-left"]:o()["avatars-right"]]),w;p==="lock"&&m.length>0?w=a().createElement("div",{className:o().avatars__wrapper},m.map((R,$)=>a().createElement("span",{className:o().avatars__wrapper__item,key:$},a().createElement("img",{src:R||"https://oss.coolcollege.cn/1790708689137700864.png"})))):w=null;var N;return i>0?N=a().createElement("span",{className:o().avatars__num},i,"%"):N=a().createElement("span",{className:o().avatars__num},(0,f.ZT)("".concat(_("authentication.hadUnlocked")),u)),a().createElement("div",{className:E},a().createElement("div",{className:T},C&&a().createElement("span",{className:P},a().createElement(v.Z,{iconClass:"iconf-lock",size:"14px",color:"#fff"})),!C&&a().createElement("span",{className:M},t>=10?t:"0".concat(t)),r?a().createElement("span",{className:o().indicator__score},"+",r,_("common.score")):null),a().createElement("div",{className:o().name,title:n},n),a().createElement("div",{className:I},w,N))},this.renderProcessingInfos=()=>{var e=this.props,t=e.idx,s=e.position,n=e.name,r=e.progress,m=k()([o().infos,o()["infos-idx".concat(t%10!=0?t%10:10)],o()["infos-lock"],s==="left"?o()["infos-left"]:o()["infos-right"]]),u=k()([o().indicator__num,o()["indicator__num-".concat(t%10!=0?t%10:10)]]);return a().createElement("div",{className:m},a().createElement("div",{className:o().indicator},a().createElement("span",{className:u},t>=10?t:"0".concat(t))),a().createElement("div",{className:o().name,title:n},n),a().createElement("div",{className:o().progress},r,"%"))},this.renderImage=()=>{var e=this.props,t=e.idx,s=e.lock,n=e.position,r=e.stagePass,m=k()([o()["mover-wrapper"],"".concat(t%2==0?"move-top":"move-top-reverse")]),u=k()([o()["item-planet-image"],o()["item-planet-image-idx".concat(t%10!=0?t%10:10)],o()["item-planet".concat(t%10!=0?t%10:10)]]);return a().createElement(Q.df,{threshold:0},i=>{var _=i.inView,C=i.ref;_&&(this.viewObj[t]+=1);var p=k()([this.viewObj[t]<=1&&_?o().inview:""],[this.viewObj[t]>1?o()["inview-static"]:""],o()["planet-attr-".concat(t%10!=0?t%10:10)],n==="left"?o()["planet-left"]:o()["planet-right"]);return a().createElement("div",{className:p,ref:C},t%3==0&&a().createElement("img",{className:o().random__img,src:"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/10-lock.png",alt:""}),a().createElement("div",{className:m},this.renderAvatar(),a().createElement("img",{src:le(t,s==="lock"&&r),className:u,onClick:this.handleClick})),this.renderInfos())})},this.viewObj=(()=>{for(var e={},t=1;t<100;t++)e[t]=0;return e})(),this.renderPath=()=>{var e=this.props,t=e.lock,s=e.position,n=e.showPath,r=e.stagePass;if(!n)return null;var m=k()([o().path,s==="left"?o()["path-left"]:o()["path-right"]]),u="https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/path.png";return t==="lock"&&r&&(u="https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/path-lock.png"),a().createElement("div",{className:m},a().createElement("img",{src:u}))}}componentDidMount(){setTimeout(()=>{this.props.lock==="current"&&this.outerRef&&this.outerRef.scrollIntoView({block:"center"})},2e3)}render(){var e=this.props.index;return a().createElement("div",{className:o()["planet-row".concat(e===0?"__start":"")],ref:this.initRef},this.renderImage(),this.renderPath())}}var de=(0,Y.$j)()((0,A.Z)()(me)),ue=l(94162),c=l.n(ue),pe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return t?"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/unlock.png":"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/pass.png"},ve=L=>"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/desert_".concat(L%10!=0?"0".concat(L%10):"00",".png");class ne extends a().Component{constructor(){super(...arguments);this.initRef=e=>{this.outerRef=e},this.viewObj=(()=>{for(var e={},t=1;t<101;t++)e[t]=0;return e})(),this.handleClick=()=>{var e=this.props,t=e.lock,s=e.t,n=e.stagePass,r=e.index,m=e.onItemClick;t==="lock"&&n?G.default.warning(s("authentication.lockedClick")):m(r)},this.renderAvatar=()=>{var e=this.props,t=e.lock,s=e.avatar,n=e.shouldAnimationDelay;if(t!=="current")return null;var r=s,m=k()([t==="lock"?c()["avatar-container-completed"]:"",n?"":c()["avatar-container__rightnow"]]);return a().createElement("div",{className:m},r&&a().createElement("div",{className:c().avatar_box_wrapper},a().createElement("img",{src:r,className:c().avatar}),a().createElement("div",{className:c().avatar_angle}),a().createElement("div",{className:c().avatar_shadow})))},this.renderInfos=()=>{var e=this.props.lock;return e==="finish"?this.renderCompletedInfos():e==="lock"?this.renderLockedInfos():this.renderProcessingInfos()},this.renderCompletedInfos=()=>{var e=this.props,t=e.idx,s=e.position,n=e.name,r=e.t,m=k()([c().infos,c()["infos-idx".concat(t%10!=0?t%10:10)],c()["infos-completed"],s==="left"?c()["infos-left"]:c()["infos-right"]]);return a().createElement("div",{className:m},a().createElement("div",{className:c().name,title:n},n),a().createElement("div",{className:c().progress},a().createElement("span",{className:c().done},a().createElement(v.Z,{iconClass:"icon-icon_donex1",size:"12px",color:"black"})),a().createElement("span",null,r("questionn.completed"))))},this.renderLockedInfos=()=>{var e=this.props,t=e.idx,s=e.position,n=e.name,r=e.score,m=e.unlockAvatars,u=e.unlockNum,i=e.progress,_=e.t,C=e.stagePass,p=k()([c().infos,c()["infos-idx".concat(t%10!=0?t%10:10)],c()["infos-lock"],s==="left"?c()["infos-left"]:c()["infos-right"]]),E=k()([c().indicator,s==="left"?c()["indicator-left"]:c()["indicator-right"]]),T=k()([c().avatars,s==="left"?c()["avatars-left"]:c()["avatars-right"]]),P=k()([c().indicator__num,c()["indicator__num-disabled"]]),M;i===0&&m.length>0?M=a().createElement("div",{className:c().avatars__wrapper},m.map((w,N)=>a().createElement("span",{className:c().avatars__wrapper__item,key:N},a().createElement("img",{src:w||"https://oss.coolcollege.cn/1790708689137700864.png"})))):M=null;var I;return i>0?I=a().createElement("span",{className:c().avatars__num},i,"%"):I=a().createElement("span",{className:c().avatars__num},(0,f.ZT)("".concat(_("authentication.hadUnlocked")),u)),a().createElement("div",{className:p},a().createElement("div",{className:E},C&&a().createElement("span",{className:P},a().createElement(v.Z,{iconClass:"iconf-lock",size:"14px",color:"#fff"})),r?a().createElement("span",{className:c().indicator__score},"+",r,_("common.score")):null),a().createElement("div",{className:c().name,title:n},n),a().createElement("div",{className:T},M,I))},this.renderProcessingInfos=()=>{var e=this.props,t=e.idx,s=e.position,n=e.name,r=e.progress,m=k()([c().infos,c()["infos-idx".concat(t%10!=0?t%10:10)],c()["infos-process"],s==="left"?c()["infos-left"]:c()["infos-right"]]);return a().createElement("div",{className:m},a().createElement("div",{className:c().name,title:n},n),a().createElement("div",{className:c().progress},r,"%"))},this.renderImage=()=>{var e=this.props,t=e.idx,s=e.lock,n=e.position,r=e.stagePass,m=k()([c()["mover-wrapper"],"".concat(t%2==0?"move-top":"move-top-reverse")]),u=k()([c()["item-planet-image"],c()["item-planet-image-idx".concat(t%10!=0?t%10:10)],c()["item-planet".concat(t%10!=0?t%10:10)]]);return a().createElement(Q.df,{threshold:0},i=>{var _=i.inView,C=i.ref;_&&(this.viewObj[t]+=1);var p=k()([this.viewObj[t]<=1&&_?c().inview:""],[this.viewObj[t]>1?c()["inview-static"]:""],c()["planet-attr-".concat(t%10!=0?t%10:10)],n==="left"?c()["planet-left"]:c()["planet-right"],c().planet_rows);return a().createElement("div",{className:p,ref:C},t===1&&a().createElement("img",{className:[c()["checkpoint_go".concat(n)],"mask"].join(" "),src:"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/desert_go.png",alt:""}),t!==1&&a().createElement("img",{className:[c()["checkpoint_randomImg".concat(n).concat(t%10)],"mask"].join(" "),src:ve(t),alt:""}),a().createElement("div",{className:m},this.renderAvatar(),a().createElement("img",{src:pe(t,s==="lock"&&r),className:u,onClick:this.handleClick}),a().createElement("span",{className:c()["step-num"],onClick:this.handleClick},t>=10?t:"0".concat(t))),this.renderInfos())})},this.renderPath=()=>{var e=this.props,t=e.lock,s=e.position,n=e.showPath,r=e.stagePass;if(!n)return null;var m=k()([c().path,s==="left"?c()["path-left"]:c()["path-right"]]),u="https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/path.png";return t==="lock"&&r&&(u="https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/path-lock.png"),a().createElement("div",{className:m},a().createElement("img",{src:u}))}}componentDidMount(){setTimeout(()=>{this.props.lock==="current"&&this.outerRef&&this.outerRef.scrollIntoView({block:"center"})},2e3)}elementInView(e){var t=e.getBoundingClientRect(),s=t.top<window.innerHeight&&t.bottom>0,n=t.left<window.innerWidth&&t.right>0;return s&&n}render(){var e=this.props.position;return a().createElement("div",{className:c().checkpoint_container},a().createElement("div",{className:c().planet_row,ref:this.initRef},a().createElement("img",{className:[c()["checkpoint_mask".concat(e)],"mask"].join(" "),src:"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/checkPoints_mask.png"}),this.renderImage(),this.renderPath()))}}ne.defaultProps={idx:1,lock:"",list:[],position:"left",showPath:!1,avatar:"",name:"",score:0,unlockNum:0,unlockAvatars:[],progress:0};var he=(0,Y.$j)()((0,A.Z)()(ne)),ge=l(21344),q=l.n(ge),fe=l(21932),ke=l.n(fe);class Ee extends a().Component{constructor(){super(...arguments);this.initOuterRef=e=>{this.outerRef=e}}render(){var e=this.props,t=e.src,s=e.prefixCls,n=e.template;return a().createElement("img",{ref:this.initOuterRef,className:ke()["".concat(s,"__").concat(n,"__image")],src:t})}}var re=Ee;class Ie extends a().Component{constructor(e){super(e);this.onMousedown=t=>{this.setState({startPointX:t.pageX,moving:!0}),this.planetList.addEventListener("mousemove",this.onMousemove),this.planetList.addEventListener("mouseup",this.onMouseup),this.planetList.addEventListener("mouseleave",this.onMouseleave)},this.onMousemove=t=>{t.preventDefault();var s=this.state.moving;if(!!s){var n=this.state.startPointX,r=t.pageX-n;r>0&&this.planetList.scrollLeft+document.body.clientWidth===this.planetList.scrollWidth||r<0&&this.planetList.scrollLeft===0||(this.planetList.scrollLeft+=r)}},this.onMouseup=()=>{this.setState({moving:!1}),this.planetList.removeEventListener("mousemove",this.onMousemove),this.planetList.removeEventListener("mouseup",this.onMouseup),this.planetList.removeEventListener("mouseleave",this.onMouseleave)},this.onMouseleave=()=>{this.setState({moving:!1}),this.planetList.removeEventListener("mousemove",this.onMousemove),this.planetList.removeEventListener("mouseup",this.onMouseup),this.planetList.removeEventListener("mouseleave",this.onMouseleave)},this.state={moving:!1,startPointX:0}}render(){var e=this.props,t=e.projectId,s=e.taskId,n=e.avatar,r=e.list,m=e.startSrc,u=e.endSrc,i=e.template,_=e.stagePass,C=e.onItemClick,p=this.state.moving;return a().createElement("div",{className:q()["planet-container".concat(p?"__moving":"")],onMouseDown:this.onMousedown,ref:E=>{this.planetList=E}},a().createElement("div",{className:q()["".concat(i,"__earth")]},a().createElement(re,{src:m,prefixCls:"earth",template:i})),a().createElement("div",{className:q()["planet-container__".concat(i,"__stageList")]},i==="sky"&&r.map((E,T)=>{var P=E.sort,M=E.status,I=E.name,w=E.score,N=E.unlockNum,R=E.photoList,$=E.process,z=P%2==0?"left":"right",X=T!==r.length-1;return a().createElement(de,{key:P,index:T,idx:P,lock:M,position:z,showPath:X,avatar:n||"https://oss.coolcollege.cn/1790708689137700864.png",name:I,score:w,unlockNum:N,unlockAvatars:R.slice(0,3),progress:$,projectId:t,taskId:s,stagePass:_,onItemClick:C})}),i==="desert"&&r.map((E,T)=>{var P=E.sort,M=E.status,I=E.name,w=E.score,N=E.unlockNum,R=E.photoList,$=E.process,z=P%2==0?"left":"right",X=T!==r.length-1;return a().createElement(he,{key:P,index:T,idx:P,lock:M,position:z,showPath:X,avatar:n||"https://oss.coolcollege.cn/1790708689137700864.png",name:I,score:w,unlockNum:N,unlockAvatars:R.slice(0,3),progress:$,projectId:t,taskId:s,stagePass:_,onItemClick:C})})),a().createElement("div",{className:q()["".concat(i,"__sun")]},a().createElement(re,{ref:this.initSunRef,src:u,prefixCls:"sun",template:i})))}}var Ne=Ie;class oe extends a().Component{constructor(e){super(e);this.renderStars=()=>{var t=new j.Application({backgroundColor:1842510,resizeTo:window});document.querySelector(".sky-container").appendChild(t.view);for(var s=j.Texture.from("https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/star.png"),n=2e3,r=0,m=20,u=.085,i=0,_=0,C=5,p=.05,E=[],T=0;T<n;T++){var P={sprite:new j.Sprite(s),z:0,x:0,y:0};P.sprite.anchor.x=.5,P.sprite.anchor.y=.7,M(P,!0),t.stage.addChild(P.sprite),E.push(P)}function M(I,w){I.z=w?Math.random()*2e3:r+Math.random()*1e3+2e3;var N=Math.random()*Math.PI*2,R=Math.random()*50+1;I.x=Math.cos(N)*R,I.y=Math.sin(N)*R}t.ticker.add(I=>{i+=(_-i)/20,r+=I*10*(i+u);for(var w=0;w<n;w++){var N=E[w];N.z<r&&M(N);var R=N.z-r;N.sprite.x=N.x*(m/R)*t.renderer.screen.width+t.renderer.screen.width/2,N.sprite.y=N.y*(m/R)*t.renderer.screen.width+t.renderer.screen.height/2;var $=N.sprite.x-t.renderer.screen.width/2,z=N.sprite.y-t.renderer.screen.height/2,X=Math.sqrt($*$+z+z),te=Math.max(0,(2e3-R)/2e3);N.sprite.scale.x=te*p,N.sprite.scale.y=te*p+te*i*C*X/t.renderer.screen.width,N.sprite.rotation=Math.atan2(z,$)+Math.PI/2}})},this.renderMainContent=()=>{var t=this.state,s=t.projectId,n=t.taskId,r=t.list,m=t.avatar,u=t.template,i=t.startImgSrc,_=t.endImgSrc,C=t.stagePass,p=this.props.onItemClick;return a().createElement("div",{className:"".concat(u,"-content-container")},a().createElement(Ne,{list:r,avatar:m,startSrc:i,endSrc:_,template:u,projectId:s,taskId:n,stagePass:C,onItemClick:p}))},this.renderRandomCloud=()=>{for(var t=5,s=this.state.template,n=[],r=1;r<=t;r++)n.push(a().createElement("img",{key:r,className:"".concat(s,"__random_cloud__").concat(r),src:"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/checkPoints_mask.png"}));return a().createElement("div",{className:"".concat(s,"__random_cloud")},n)},this.state={taskId:e.taskId,projectId:e.projectId,startImgSrc:e.projectInfo.style_type!=="desert"?"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/earth.png":"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/desert_09.png",endImgSrc:e.projectInfo.style_type!=="desert"?"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/sun-2.png":"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/desert_08.png",summaryBg:e.projectInfo.style_type!=="desert"?"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/summary-modal2.png":"https://sdn.coolcollege.cn/assets/kuxueyuan/postmap/web/summary-desert.png",list:e.stepInfo.stageList,avatar:e.stepInfo.avatar,infoProps:{progress:e.stepInfo.process,score:e.stepInfo.score,num:e.stepInfo.num,summary:e.stepInfo.summary,title:e.projectInfo.title,projectId:e.projectId,taskId:e.taskId},projectInfo:e.projectInfo,stagePass:e.projectInfo.stage_pass==="true",template:e.projectInfo.style_type==="desert"?"desert":"sky"}}componentDidMount(){this.isChrome();var e=this.state.template;e==="sky"&&this.renderStars()}isChrome(){var e=this.props.t;window.navigator.userAgent.indexOf("Chrome")===-1&&b.Z.warning({title:e("common.tip"),content:e("common.switchBrowser")});var t=document.createElement("canvas"),s=!!(window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl")));s||b.Z.warning({title:e("common.tip"),content:e("common.webGL")})}render(){var e=this.state,t=e.infoProps,s=e.avatar,n=e.summaryBg,r=e.template,m=e.projectInfo,u=this.props.t;return a().createElement("div",{className:"".concat(r,"-container")},a().createElement(O.Z,{title:u("documentTitle.learningProjects")}),a().createElement(ee,(0,x.Z)({},t,{avatar:s,summaryBg:n,projectInfo:m,template:r,showRecord:!0,showComments:!0})),r==="desert"&&this.renderRandomCloud(),this.renderMainContent())}}oe.defaultProps={projectInfo:{},infoProps:{},taskId:"",projectId:"",onItemClick:()=>{},showRecord:!0,showComments:!0};var _e=(0,A.Z)()(oe),ce=l(37055),ie=l(10237),Pe=L=>(e,t)=>{var s=e[L],n=t[L];return s-n};class ye extends a().Component{constructor(e){super(e);this.getProjectProgress=()=>{var t=this.state.taskId;ie.WY.get({url:ce.ZP.visitors.projectMapDetails(t)}).then(s=>{var n=s.data.data;n.stageList.sort(Pe("sort")),this.setState({stepInfo:n})})},this.getProjectDetail=()=>{var t=this.state.projectId;ie.WY.get({url:ce.ZP.visitors.projectDetails(t)}).then(s=>{this.setState({projectInfo:s.data})})},this.handleClickItem=t=>{var s=this.state,n=s.projectId,r=s.taskId,m=g.parse(Z.m8.location.search),u=m.courseIds,i=m.all_checked,_=r?"/course/project/visitors?id=".concat(n,"&taskId=").concat(r,"&tab=1&stage=").concat(t,"&courseIds=").concat(u,"&all_checked=").concat(i):"/course/project/visitors?id=".concat(n,"&tab=1&stage=").concat(t,"&courseIds=").concat(u,"&all_checked=").concat(i);Z.m8.push(_)},this.state={taskId:"",projectId:"",projectInfo:null,stepInfo:null}}componentDidMount(){var e=g.parse(Z.m8.location.search),t=e.id,s=e.taskId;this.setState({projectId:t,taskId:s||""},()=>{this.getProjectProgress(),this.getProjectDetail()})}render(){var e=this.state,t=e.stepInfo,s=e.projectInfo,n=e.projectId,r=e.taskId,m=this.props.t;return!t||!s?a().createElement(W.Z,{size:"large",style:{marginTop:300}}):a().createElement(_e,{stepInfo:t,projectInfo:s,projectId:n,taskId:r,t:m,onItemClick:this.handleClickItem})}}var Ce=(0,A.Z)()(ye)}}]);