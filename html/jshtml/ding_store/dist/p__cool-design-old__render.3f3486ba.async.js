(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[8874],{57190:function(F,O,a){"use strict";a.r(O);var D=a(88986),R=a(33565),n=a(12924),h=a.n(n),b=a(76651),f=a(37055),C=a(10237),I=a(29190),B=a(16718),K=i=>{var U=i.currentWidth,M=i.isZoom,J=M===void 0?!1:M,T=i.isJump,j=T===void 0?!0:T,S=i.componentsData,W=i.isComponent,A=W===void 0?!1:W,N=(0,n.useState)([]),Z=(0,R.Z)(N,2),m=Z[0],_=Z[1],g=b.m8.location.query,E=g.scopeId,c=g.pageId,v=g.businessType,k=(0,B.Z)();E&&f.ZP.init({enterpriseId:E}),(0,n.useEffect)(()=>{x(S)},[S,c,v]);var x=(0,n.useCallback)(o=>{if(A)_(o);else switch(v){case"visitor":y();break;case"pc-find":L(c);break}},[L,y,v,A,c]),y=()=>{C.WY.get({url:f.ZP.CMSApi.getPageEnterprises({enterpriseId:E||localStorage.getItem("enterpriseId")}),params:{scope:2,businessType:"visitor"}}).then(o=>{if(o.data.code===2e5){var e=o.data.data,t=e.id,s=e.componentList,p=e.pageTemplateContext;if(t===0){_(k.defaultPageData);return}if(s.length>0){var r=[],u=p?JSON.parse(p):{};u.position.forEach(P=>{s.forEach(d=>{P===d.pagePosition&&r.push((0,D.Z)({},JSON.parse(d.feature)))})}),_(r)}}})},L=o=>{var e=localStorage.getItem("scope_id");C.WY.get({url:f.ZP.CMSApi.getPageScope({platformType:"platform",scopeId:e}),params:{id:o}}).then(t=>{if(t.data.code===2e5){var s=t.data.data,p=s.id,r=s.componentList,u=s.pageTemplateContext;if(p===0)return;if(r.length>0){var P=u?JSON.parse(u):{},d=[];P.position.forEach(z=>{r.forEach(l=>{z===l.pagePosition&&d.push((0,D.Z)({pagePosition:l.pagePosition,pageId:l.pageId},JSON.parse(l.feature)))})}),_(d)}}})},Y=(0,n.useMemo)(()=>{var o=[];if(m.length>0)return m.forEach((e,t)=>{var s=I.Z[e.id];s&&o.push(h().createElement(s,{key:e.code,models:e.models||{},params:e.params||{},cssObj:e.cssObj||{},index:t,isRender:j,pagePosition:e.pagePosition,pageId:e.pageId}))}),o},[m,I.Z]);return h().createElement("div",{style:J?{zoom:U/1280,backgroundColor:"#fafaf8"}:{backgroundColor:"#fafaf8",overflowY:"auto"}},Y)};O.default=K}}]);