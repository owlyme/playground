(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[7188],{4116:function(v,d,e){"use strict";e.r(d);var h=e(34792),o=e(48086),r=e(12924),a=e.n(r),E=e(91768),_=e(76651),u=e(22929),c=e(47699),i=e(10237),M=e(37055),P=e(4408),D={saveAddGoods:M.ZP.integralMall.saveAddGoods};class m extends r.Component{constructor(){super(...arguments);this.handleSubmit=s=>{var t=this.props.t;i.WY.post({url:D.saveAddGoods(),data:s}).then(n=>{var l=n.data;if(l.code){o.default.error(l.message||t("integralMall.publishProductFailed"));return}o.default.success(t("integralMall.publishProductSuccess")),_.m8.push({pathname:"/talentedDevelopment/excitation/manageGoods"})}).catch(()=>{o.default.error(t("integralMall.publishProductFailed"))})},this.handleCancel=()=>{_.m8.go(-1)}}render(){var s=this.props,t=s.prefixCls,n=s.t,l=[{name:n("integralMall.mallManageMent"),route:"/talentedDevelopment/excitation/manageGoods",goBack:!0},{name:n("documentTitle.addGoods")}];return a().createElement("div",{className:t},a().createElement(P.Z,{title:n("documentTitle.addGoods")}),a().createElement(c.Z,{list:l}),a().createElement("div",{className:"".concat(t,"__content")},a().createElement(u.Z,{onSubmit:this.handleSubmit,onCancel:this.handleCancel})))}}m.defaultProps={prefixCls:"add-goods"},d.default=(0,E.Z)()(m)}}]);