(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[1520],{4408:function(u,d,e){"use strict";var _=e(12924),r=e.n(_),A=e(28216),I=e(17780),h=e(38642),t=i=>({userInfo:i.user}),c=i=>{var s=i.title;return(0,I.xX)()&&setTimeout(()=>{document.title=s},0),(0,_.useEffect)(()=>{if(s&&document.title!==s&&setTimeout(()=>{document.title=s},0),(0,h.UI)("SCALE")){document.querySelector("body").style.zoom="0.8";var E=document.querySelector(".zoom-report");E&&(E.style.zoom="1.2")}return()=>{localStorage.getItem("name")||(document.querySelector("body").style="")}},[s]),r().createElement(r().Fragment,null)};c.defautProps={title:""},d.Z=(0,A.$j)(t)(c)},29871:function(u,d,e){"use strict";e.r(d);var _=e(57663),r=e(71577),A=e(66456),I=e(55313),h=e(12924),t=e.n(h),c=e(28216),i=e(91768),s=e(4408),E=e(10237),D=e(37055),O=e(38642),g=e(65125),v=e.n(g),P=R=>{var o=R.user;return{isAdmin:o.isAdmin}},p={getOrderInfo:D.ZP.PayResult.getOrderInfo};class M extends t().Component{constructor(){super(...arguments);this.state={orderInfo:{},goodsList:[]},this.getOrderInfo=()=>{var o=window.location.href.match(/out_trade_no=(\w*)/)?window.location.href.match(/out_trade_no=(\w*)/)[1]:"";E.WY.get({url:p.getOrderInfo(),params:{id:o}}).then(a=>{var n=[],l=a.data.data[0];l.children&&l.children.forEach(m=>{n.push(m.goodList[0])}),this.setState({orderInfo:l,goodsList:n})})},this.columns=[{title:this.props.t("payment.goodInfo"),dataIndex:"id",render:(o,a)=>t().createElement("div",{className:"order-info"},t().createElement("img",{src:a.goodCover}),t().createElement("span",null,a.goodName))},{title:this.props.t("payment.productsNumber"),dataIndex:"goodCount",width:280,render:(o,a)=>t().createElement("div",{className:"order-count"},"X ",a.goodCount)}],this.handleToCourseManage=()=>{this.props.history.push("/knowledgeBase/learningResources/courseManage")},this.handleToPersonal=o=>{(0,O.eJ)({url:"/personal/profile?tab=".concat(o)})}}componentDidMount(){this.getOrderInfo()}render(){var o=this.props,a=o.t,n=o.prefixCls,l=this.state,m=l.orderInfo,C=l.goodsList;return t().createElement("div",{className:n},t().createElement(s.Z,{title:a("documentTitle.payResult")}),t().createElement("div",{className:"pay-result"},t().createElement("div",{className:"".concat(n,"__title")},a("payment.aliPayResults")),t().createElement("div",{className:"".concat(n,"__tips")},t().createElement("img",{src:v()}),t().createElement("span",{className:"".concat(n,"__tips__text")},a("payment.purchasedTips"))),t().createElement("div",{className:"".concat(n,"__order-number")},a("payment.orderNumber"),":",m.id),t().createElement(I.Z,{className:"".concat(n,"__order-table "),dataSource:C,columns:this.columns,bordered:!0,pagination:!1,rowKey:"id"}),t().createElement("div",{className:"".concat(n,"__buttons")},m.buyerType===2?t().createElement(r.Z,{type:"primary",size:"large",onClick:this.handleToCourseManage},a("payment.courseManage")):t().createElement(r.Z,{type:"primary",size:"large",onClick:()=>this.handleToPersonal("course")},a("payment.myPurchased")),t().createElement(r.Z,{type:"default",size:"large",onClick:()=>this.handleToPersonal("order")},a("payment.checkMyOrder")))))}}M.defaultProps={prefixCls:"pay-result-container"},d.default=(0,c.$j)(P)((0,i.Z)()(M))},65125:function(u){u.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NjQ1MTZjYi1iNTRhLTQ4MDAtODZiYy1jNTBjOGVhODMzYzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAxRjRGMDhERTY1MTFFNzlEMjNGMTYwQzQ0RjI2RkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAxRjRGMDdERTY1MTFFNzlEMjNGMTYwQzQ0RjI2RkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ZTI4YzdhMC1kN2NjLTQzMzAtYWJkOC0wYWNiZjRkMjliN2QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjY0NTE2Y2ItYjU0YS00ODAwLTg2YmMtYzUwYzhlYTgzM2M5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ekfd4QAAA2dJREFUeNrUmk1oE0EUxydLqR8tSEFQkHiyJQXrqSKkUqxQ6kEP9pqSg5ReRIIg6KmHnvTYa/FUjCdtLj1YClYKBsHclBoSTwYFQdBDGhFt4/8lb0OT7sfszu529g9/+pGd2fnl7c68ebuJZrMprGQ82RcelYKvwZfhEXgYHoQH+PNduA5X4Qr8Hn4Dl606239oeDp5n1DTKJyFM3DS5dgB9hn4KnyH/1+D8/Aq/MnvQAyf7dLwK3gHfiQB4aQk97HDfaajAKGTrsFv4RkRvGa47zVc2smwQOb5er4twhedowyYedkGCYmb/SS8wvfBUYjunwXc/A2ViAzBm0cIIfjcm/hih/yCUMNtvzdfwKIxbDvBGDaXFV1O6/BFoY9oLOs8NumIrGgSCavIrEiB8EyREfoqYzWbdc1aPHeXeabSWTSDpTCT1ewishwDCHNJWLaMCKKR5lVVJ/2CT8DHbD6fQFSKvRFZ1AziOXwWHoP/2Ryz2HVpIRqjIeVOKhBZfNt/8PM7ZfV2uRmPvRORrIYQexhkP6co/Q7HZw+CZHSCgE2IF/BNiRRGJBKP91IqG5owIDgCBHFLdoNHEZmKOQRpikDGYw5BGje4UBBnCNKIwdWOOEOQhg0u2bipAN+Dv2kIQRqkWavpctBv+BT8F74g2rWocxpBSBcfjsOX+PfPol2E+6oThAmy61ag4HrTmCJMaBDEQCB1iQNPw68VYMKEINUJpCp5sF+YsCFIVQKpeGjgFSYKCFKFQEoeG8nCRAVBKhHIlo+GbjBRQpC2WltdpMxfhL+K+g/4OvyB/6Z15i78IEKIGvYu5811JO+zE6vI3I8QojN2E2RVoaNeGBEhRGfsLRCEhjZWGwHAXOF05mVEEBs89q5Hb0uKBQiCeRdxBr10KNfi+lBBxEcFs6ZllTTmRLscqbsaPFbr7JdrqbkYgOQO1n1bma3VozesK8+EvhX5PCDmZPcjC3BRQ4gij+3wXsPhYaj56E2Xp1Yf4UlE46fXHSI1mNQkMkUnCJmtLjWcVkhhgkpBpp0gehdEp6lujosOUT4IavDs9DSo4oMp6jAV0aJJ50jJQngFaaXM8Cw8oZib2eZO3Pds7zrhpj6Fm++G8Paak9OXo/yaUyLgF8+osk9FcZkXz0q8Ow3kxbP/AgwAdOoqJkhjLdkAAAAASUVORK5CYII="}}]);
