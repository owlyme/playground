(self.webpackChunkkuxueyuan_manage=self.webpackChunkkuxueyuan_manage||[]).push([[6915],{2127:function(J,K,u){"use strict";u.d(K,{Z:function(){return gt}});var ae=u(57663),T=u(71577),k=u(62029),se=u(34792),L=u(48086),ie=u(12924),s=u.n(ie),x=u(91768),G=u(76651),I=u(80991),Ie=u(57068),Y=u(3407),re=u(6793),X=(0,re.me)(),S=Y.Z[X].learning.validation,V={title:(l,n)=>{var e;if(!l)e=S.questionAddTitleNull;else if(n==="blank"){var t=l.split("]]"),a=!0;if(t.length<2)a=!1;else if(t.length>=2){for(var i=0;i<t.length-1;i++)(t[i].lastIndexOf("|")+1===t[i].length||t[i].indexOf("[[")===t[i].length-2||t[i].split("[[").length!=2||t[i].indexOf("||")>=0)&&(a=!1);t[t.length-1].indexOf("[[")>=0&&(a=!1)}a||(e=S.questionAddTitleFormat)}return e},options:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t;return e==="multiple"||e==="single"?!n||n.length===0?t=S.questionAddOptionEmpty:n.findIndex(a=>!a.answerImage&&!(0,re.fy)(a.title))!==-1?t=Y.Z[X].learning.questionAddOptionPlaceholder:n.findIndex(a=>a.isAnswer)===-1&&(t=S.questionAddTofOptionNull):!n||n.length===0?t=S.questionAddOptionEmpty:n.findIndex(a=>!a.title)!==-1?e==="describe"?t=S.questionAddOptionNull:t=Y.Z[X].learning.questionAddOptionPlaceholder:n.findIndex(a=>a.isAnswer)===-1&&(t=S.questionAddTofOptionNull),t},knowledgePoint:l=>{var n;return l.length>0&&l.length!==new Set(l).size&&(n=S.questionAddKowRepeat),n}},F=u(43859);class Ae extends s().Component{constructor(){super(...arguments);this.typeList=[{title:this.props.t("common.single"),value:"single"},{title:this.props.t("common.multiple"),value:"multiple"},{title:this.props.t("common.tof"),value:"tof"},{title:this.props.t("common.blank"),value:"blank"},{title:this.props.t("common.describe"),value:"describe"}],this.handleClick=n=>{var e=this.props,t=e.changeInitOptions,a=e.onFieldChange;a(n),t(n)}}render(){var n=this.props,e=n.value,t=n.disabled;return s().createElement("div",{className:"type-tab"},this.typeList.map(a=>s().createElement(T.Z,{disabled:t,className:"type-tab-item",type:a.value===e?"link":"",key:a.value,onClick:()=>this.handleClick(a.value)},a.title)))}}var we=(0,F.Z)((0,x.Z)()(Ae)),It=u(88983),le=u(47933);class Ne extends s().Component{constructor(){super(...arguments);this.radioList=[{title:this.props.t("component.questionSimple"),value:1},{title:this.props.t("component.questionGeneral"),value:2},{title:this.props.t("component.questionDifficult"),value:3},{title:this.props.t("component.questionHard"),value:4}],this.handleChange=n=>{var e=n.target.value;this.props.onChange(e)}}render(){var n=this.props.value;return s().createElement(le.ZP.Group,{onChange:this.handleChange,value:n},this.radioList.map(e=>s().createElement(le.ZP,{key:e.value,value:e.value},e.title)))}}var ke=(0,F.Z)((0,x.Z)()(Ne)),oe=u(88986),At=u(47673),B=u(4107),ce=u(81253),$=u(90484),Ze=u(96156),Te=u(71739),xe=u.n(Te),Fe=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function ue(l){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},e=l.match(/<\/?([^\s]+?)[/\s>]/);if(e&&(n.name=e[1],(xe()[e[1]]||l.charAt(l.length-2)==="/")&&(n.voidElement=!0),n.name.startsWith("!--"))){var t=l.indexOf("-->");return{type:"comment",comment:t!==-1?l.slice(4,t):""}}for(var a=new RegExp(Fe),i=null;(i=a.exec(l))!==null;)if(i[0].trim())if(i[1]){var r=i[1].trim(),o=[r,""];r.indexOf("=")>-1&&(o=r.split("=")),n.attrs[o[0]]=o[1],a.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var Pe=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,Se=/^\s*$/,qe=Object.create(null);function pe(l,n){switch(n.type){case"text":return l+n.content;case"tag":return l+="<"+n.name+(n.attrs?function(e){var t=[];for(var a in e)t.push(a+'="'+e[a]+'"');return t.length?" "+t.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?l:l+n.children.reduce(pe,"")+"</"+n.name+">";case"comment":return l+"<!--"+n.comment+"-->"}}var Le={parse:function(l,n){n||(n={}),n.components||(n.components=qe);var e,t=[],a=[],i=-1,r=!1;if(l.indexOf("<")!==0){var o=l.indexOf("<");t.push({type:"text",content:o===-1?l:l.substring(0,o)})}return l.replace(Pe,function(p,m){if(r){if(p!=="</"+e.name+">")return;r=!1}var v,g=p.charAt(1)!=="/",f=p.startsWith("<!--"),c=m+p.length,y=l.charAt(c);if(f){var b=ue(p);return i<0?(t.push(b),t):((v=a[i]).children.push(b),t)}if(g&&(i++,(e=ue(p)).type==="tag"&&n.components[e.name]&&(e.type="component",r=!0),e.voidElement||r||!y||y==="<"||e.children.push({type:"text",content:l.slice(c,l.indexOf("<",c))}),i===0&&t.push(e),(v=a[i-1])&&v.children.push(e),a[i]=e),(!g||e.voidElement)&&(i>-1&&(e.voidElement||e.name===p.slice(2,-1))&&(i--,e=i===-1?t:a[i]),!r&&y!=="<"&&y)){v=i===-1?t:a[i].children;var A=l.indexOf("<",c),h=l.slice(c,A===-1?void 0:A);Se.test(h)&&(h=" "),(A>-1&&i+v.length>=0||h!==" ")&&v.push({type:"text",content:h})}}),t},stringify:function(l){return l.reduce(function(n,e){return n+pe("",e)},"")}},Be=Le,_=u(68718),Q=u(58236),Re=["format"],je=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function de(l,n){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(l,a).enumerable})),e.push.apply(e,t)}return e}function O(l){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?de(Object(e),!0).forEach(function(t){(0,Ze.Z)(l,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):de(Object(e)).forEach(function(t){Object.defineProperty(l,t,Object.getOwnPropertyDescriptor(e,t))})}return l}function ee(l,n){if(!l)return!1;var e=l.props?l.props.children:l.children;return n?e.length>0:!!e}function te(l){return l?l&&l.children?l.children:l.props&&l.props.children:[]}function Ve(l){return Object.prototype.toString.call(l)!=="[object Array]"?!1:l.every(function(n){return s().isValidElement(n)})}function M(l){return Array.isArray(l)?l:[l]}function $e(l,n){var e=O({},n);return e.props=Object.assign(l.props,n.props),e}function me(l,n){if(!l)return"";var e="",t=M(l),a=n.transKeepBasicHtmlNodesFor||[];return t.forEach(function(i,r){if(typeof i=="string")e+="".concat(i);else if(s().isValidElement(i)){var o=Object.keys(i.props).length,p=a.indexOf(i.type)>-1,m=i.props.children;if(!m&&p&&o===0)e+="<".concat(i.type,"/>");else if(!m&&(!p||o!==0))e+="<".concat(r,"></").concat(r,">");else if(i.props.i18nIsDynamicList)e+="<".concat(r,"></").concat(r,">");else if(p&&o===1&&typeof m=="string")e+="<".concat(i.type,">").concat(m,"</").concat(i.type,">");else{var v=me(m,n);e+="<".concat(r,">").concat(v,"</").concat(r,">")}}else if(i===null)(0,Q.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");else if((0,$.Z)(i)==="object"){var g=i.format,f=(0,ce.Z)(i,Re),c=Object.keys(f);if(c.length===1){var y=g?"".concat(c[0],", ").concat(g):c[0];e+="{{".concat(y,"}}")}else(0,Q.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",i)}else(0,Q.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",i)}),e}function Me(l,n,e,t,a){if(n==="")return[];var i=t.transKeepBasicHtmlNodesFor||[],r=n&&new RegExp(i.join("|")).test(n);if(!l&&!r)return[n];var o={};function p(b){var A=M(b);A.forEach(function(h){typeof h!="string"&&(ee(h)?p(te(h)):(0,$.Z)(h)==="object"&&!s().isValidElement(h)&&Object.assign(o,h))})}p(l);var m=Be.parse("<0>".concat(n,"</0>")),v=O(O({},o),a);function g(b,A,h){var w=te(b),N=c(w,A.children,h);return Ve(w)&&N.length===0?w:N}function f(b,A,h,w,N){b.dummy&&(b.children=A),h.push(s().cloneElement(b,O(O({},b.props),{},{key:w}),N?void 0:A))}function c(b,A,h){var w=M(b),N=M(A);return N.reduce(function(C,d,Z){var j=d.children&&d.children[0]&&d.children[0].content&&e.services.interpolator.interpolate(d.children[0].content,v,e.language);if(d.type==="tag"){var q=w[parseInt(d.name,10)];!q&&h.length===1&&h[0][d.name]&&(q=h[0][d.name]),q||(q={});var E=Object.keys(d.attrs).length!==0?$e({props:d.attrs},q):q,U=s().isValidElement(E),W=U&&ee(d,!0)&&!d.voidElement,H=r&&(0,$.Z)(E)==="object"&&E.dummy&&!U,ne=(0,$.Z)(l)==="object"&&l!==null&&Object.hasOwnProperty.call(l,d.name);if(typeof E=="string"){var ft=e.services.interpolator.interpolate(E,v,e.language);C.push(ft)}else if(ee(E)||W){var yt=g(E,d,h);f(E,yt,C,Z)}else if(H){var Ct=c(w,d.children,h);C.push(s().cloneElement(E,O(O({},E.props),{},{key:Z}),Ct))}else if(Number.isNaN(parseFloat(d.name)))if(ne){var Et=g(E,d,h);f(E,Et,C,Z,d.voidElement)}else if(t.transSupportBasicHtmlNodes&&i.indexOf(d.name)>-1)if(d.voidElement)C.push(s().createElement(d.name,{key:"".concat(d.name,"-").concat(Z)}));else{var Ot=c(w,d.children,h);C.push(s().createElement(d.name,{key:"".concat(d.name,"-").concat(Z)},Ot))}else if(d.voidElement)C.push("<".concat(d.name," />"));else{var bt=c(w,d.children,h);C.push("<".concat(d.name,">").concat(bt,"</").concat(d.name,">"))}else if((0,$.Z)(E)==="object"&&!U){var Ee=d.children[0]?j:null;Ee&&C.push(Ee)}else d.children.length===1&&j?C.push(s().cloneElement(E,O(O({},E.props),{},{key:Z}),j)):C.push(s().cloneElement(E,O(O({},E.props),{},{key:Z})))}else if(d.type==="text"){var Oe=t.transWrapTextNodes,be=e.services.interpolator.interpolate(d.content,v,e.language);Oe?C.push(s().createElement(Oe,{key:"".concat(d.name,"-").concat(Z)},be)):C.push(be)}return C},[])}var y=c([{dummy:!0,children:l||[]}],m,M(l||[]));return te(y[0])}function De(l){var n=l.children,e=l.count,t=l.parent,a=l.i18nKey,i=l.tOptions,r=i===void 0?{}:i,o=l.values,p=l.defaults,m=l.components,v=l.ns,g=l.i18n,f=l.t,c=(0,ce.Z)(l,je),y=(0,ie.useContext)(_.OO)||{},b=y.i18n,A=y.defaultNS,h=g||b||(0,_.nI)();if(!h)return(0,Q.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),n;var w=f||h.t.bind(h)||function(ne){return ne},N=O(O({},(0,_.JP)()),h.options&&h.options.react),C=v||w.ns||A||h.options&&h.options.defaultNS;C=typeof C=="string"?[C]:C||["translation"];var d=p||me(n,N)||N.transEmptyNodeValue||a,Z=N.hashTransKey,j=a||(Z?Z(d):d),q=o?r.interpolation:{interpolation:O(O({},r.interpolation),{},{prefix:"#$?",suffix:"?$#"})},E=O(O(O(O({},r),{},{count:e},o),q),{},{defaultValue:d,ns:C}),U=j?w(j,E):d,W=Me(m||n,U,h,N,E),H=t!==void 0?t:N.defaultTransParent;return H?s().createElement(H,c,W):W}var R=u(84874),Ue=B.Z.TextArea;class Ke extends s().Component{constructor(){super(...arguments);this.handleInputChange=n=>{var e=n.target.value;this.props.onFieldChange(e)},this.handleInsert=()=>{var n=this.props.onFieldChange,e="[[\u7B54\u68481|\u5907\u9009\u7B54\u68482|\u5907\u9009\u7B54\u68483]]",t=document.getElementById("question-title");if(document.selection){t.focus();var a=document.selection.createRange();a.text=e,a.select()}else if(t.selectionStart||t.selectionStart==="0"){var i=t.selectionStart,r=t.selectionEnd,o=t.scrollTop;t.value=t.value.substring(0,i)+e+t.value.substring(r,t.value.length),o>0&&(t.scrollTop=o),t.focus(),t.selectionStart=i+e.length,t.selectionEnd=i+e.length}else t.value+=e,t.focus();n(t.value)},this.dealNewOption=(n,e)=>{var t=[];return n.forEach((a,i)=>{t.push((0,oe.Z)((0,oe.Z)({},a),{},{changing:i===e}))}),t},this.handleChangeBlankAnswer=(n,e)=>{var t=n.target.value,a=this.props.value,i=this.props,r=i.options,o=i.onFieldChange,p=i.setFieldValue,m=this.dealNewOption(r,e),v=a.split("[[".concat(r[e].title,"]]")),g="";if(v.length>2){var f=m.filter(c=>c.title===r[e].title);f.forEach((c,y)=>{g+=v[y],c.changing?g+="[[".concat(t,"]]"):g+="[[".concat(r[e].title,"]]")}),g+=v[v.length-1],o(g)}else a=a.replace("[[".concat(r[e].title,"]]"),"[[".concat(t,"]]")),o(a);r[e].title=t,p(r)}}render(){var n=this.props,e=n.questionType,t=n.value,a=n.isRefered,i=n.options,r=n.t;return e==="blank"?s().createElement("div",{className:"question-blank-title"},s().createElement(Ue,{rows:2,disabled:e==="blank"&&a,placeholder:r("learning.questionAddContentNameMulPlaceholder"),value:t,id:"question-title",onChange:this.handleInputChange}),s().createElement(T.Z,{disabled:a,type:"link",className:"question-blank-title-btn",onClick:this.handleInsert},s().createElement(R.Z,{iconClass:"icon-icon_addx",size:"12px"}),r("learning.questionAddContentMulBtn")),a?null:s().createElement("p",{className:"question-blank-title-tip"},s().createElement(De,{i18nKey:"learning.questionAddContentMulBtnTip",values:{btnName:r("learning.questionAddContentMulBtn")}})),a?s().createElement("div",{className:"question-blank-answer-input"},i.map((o,p)=>s().createElement(B.Z,{value:o.title,key:p,onChange:m=>this.handleChangeBlankAnswer(m,p)}))):null):s().createElement(B.Z.TextArea,{placeholder:r("learning.questionAddContentNamePlaceholder"),value:t,onChange:this.handleInputChange,rows:1,autoSize:!0})}}var Qe=(0,F.Z)((0,x.Z)()(Ke)),he=u(24144);class ze extends s().Component{constructor(){super(...arguments);this.onChange=n=>{var e=n.fileList;this.props.onChange(e)}}render(){var n=this.props,e=n.value,t=n.t;return s().createElement("div",{className:"upload-image-field"},s().createElement(he.ZM,{fileList:e,uploadConfig:{maxCount:6},size:{value:2,unit:"MB"},onUploadedListChange:this.onChange,className:"question-upload-image-field",render:a=>(0,he.iM)(a)}),s().createElement("div",{className:"upload-image-field-tip"},s().createElement(R.Z,{iconClass:"icon-icon_attentionx1",size:"14px"}),t("learning.questionAddContentImgTip")))}}var ve=(0,F.Z)((0,x.Z)()(ze)),wt=u(43185),We=u(53251),Nt=u(63185),He=u(9676),Je=u(95357),Ge=u(73171),Ye=u(72387),z=u(37055),Xe=B.Z.TextArea,_e={upload:z.ZP.Common.upload};class et extends s().Component{constructor(n){super(n);this.onAddOption=()=>{var e=this.props,t=e.value,a=e.onFieldChange,i=String.fromCharCode(t[t.length-1].optionOrder.codePointAt(0)+1),r={title:"",isAnswer:!1,optionOrder:i,answerImage:""};t.push(r),a(t)},this.beforeUpload=e=>{var t=this.props.t,a=["jpeg","jpg","png"],i=e.type.split("/").pop(),r=a.indexOf(i.toLocaleLowerCase())>-1;r||L.default.error(t("setting.uploadImgTip"));var o=e.size/1024/1024<2;return o||L.default.error("".concat(t("component.imgUploadLimit"),"2M!")),r&&o},this.handleChangeImg=(e,t)=>{var a=this.props.t;e.file.status==="done"?(L.default.success("".concat(e.file.name," ").concat(a("setting.uploadSuccess"))),this.handleSuccessUpload(e.file.response,t)):e.file.status==="error"&&L.default.error("".concat(e.file.name," ").concat(a("setting.uploadFail")))},this.handleSuccessUpload=(e,t)=>{var a=this.props,i=a.value,r=a.onFieldChange,o=e.data,p=o.fileNewName,m=o.server,v="".concat(m,"/").concat(p);i[t].answerImage=v,r(i)},this.removeOption=e=>{var t=this.props,a=t.value,i=t.onFieldChange;a.splice(e,1),i(a)},this.handleTitleChange=(e,t)=>{var a=e.target.value,i=this.props,r=i.value,o=i.onFieldChange;r[t].title=a,o(r)},this.handleCheck=(e,t)=>{var a=e.target.checked,i=this.props,r=i.value,o=i.questionType,p=i.onFieldChange;o==="multiple"?r[t].isAnswer=a:r.forEach((m,v)=>{m.isAnswer=v===t?a:!1}),p(r)},this.handleCancel=()=>{this.setState({previewVisible:!1})},this.handlePreviewImg=e=>{var t=this.props.value;this.setState({previewVisible:!0,previewImgList:[t[e].answerImage]})},this.handleRemoveImg=e=>{var t=this.props,a=t.value,i=t.onFieldChange;a[e].answerImage="",i(a)},this.state={uploadConfig:{name:"file",action:_e.upload,data:{access_token:localStorage.token},beforeUpload:this.beforeUpload,accept:".png, .jpg, .jpeg",showUploadList:!1},previewVisible:!1,previewImgList:[]}}render(){var n=this.state,e=n.uploadConfig,t=n.previewImgList,a=n.previewVisible,i=this.props,r=i.value,o=i.questionType,p=i.disabled,m=i.t,v=localStorage.getItem("themeColor")||"#516AE6";return s().createElement("div",{className:"radio-option"},s().createElement("div",{className:"radio-option-header"},s().createElement("span",{className:"radio-option-header-label"},m("learning.questionAddOptionName")),s().createElement("span",{className:"radio-option-header-correct"},m("learning.questionAddOptionSubName"))),r.map((g,f)=>s().createElement("div",{className:"radio-option-item-container",key:f},s().createElement("div",{className:"radio-option-item"},s().createElement("span",{className:"radio-option-item-label"},g.optionOrder),s().createElement(Xe,{value:g.title,placeholder:m("learning.questionAddOptionPlaceholder"),rows:1,autoSize:!0,maxLength:200,disabled:o==="tof",className:"radio-option-item-input",onChange:c=>this.handleTitleChange(c,f)}),s().createElement(He.Z,{checked:g.isAnswer,disabled:p,className:"radio-option-item-checkbox",onChange:c=>this.handleCheck(c,f)}),f>1&&!p?s().createElement("span",{className:"radio-option-item-remove",style:{color:v},onClick:()=>this.removeOption(f)},m("common.remove")):s().createElement("span",{className:"radio-option-item-remove"})),o!=="tof"?s().createElement("div",null,g.answerImage?s().createElement("div",{className:"answer-image-box"},s().createElement("img",{src:g.answerImage}),s().createElement("div",{className:"answer-image-box__mask"},s().createElement(Je.Z,{style:{color:"#fff"},onClick:()=>this.handlePreviewImg(f)}),s().createElement(Ge.Z,{style:{color:"#fff"},onClick:()=>this.handleRemoveImg(f)}))):s().createElement(We.Z,(0,k.Z)({},e,{key:"upload".concat(f),onChange:c=>this.handleChangeImg(c,f)}),s().createElement("div",{className:"radio-option-upload-image-container"},s().createElement(R.Z,{iconClass:"iconfacesetting",size:"14px"}),s().createElement("span",{className:"radio-option-upload-image-container-add"},m("learning.addImage"))))):null)),s().createElement("div",{className:"radio-option-footer"},o!=="tof"&&!p?s().createElement(T.Z,{type:"link",className:"radio-option-footer-btn",onClick:this.onAddOption},s().createElement(R.Z,{iconClass:"icon-icon_addx",size:"12px"}),m("learning.questionAddOptionAddBtn")):null),s().createElement(Ye.Z,{visible:a,imgList:t,defaultActive:0,onClose:this.handleCancel}))}}var ge=(0,F.Z)((0,x.Z)()(et)),tt=B.Z.TextArea;class nt extends s().Component{constructor(){super(...arguments);this.handleInputChange=(n,e)=>{var t=n.target.value,a=this.props.value;a[e].title=t,this.props.onFieldChange(a)},this.handleInsert=()=>{var n=this.props,e=n.value,t=n.onFieldChange;e.push({title:"",isAnswer:!0}),t(e)},this.removeOption=n=>{var e=this.props,t=e.value,a=e.onFieldChange;t.splice(n,1),a(t)}}render(){var n=this.props,e=n.value,t=n.disabled,a=n.t;return s().createElement("div",{className:"question-keyword-input"},e.map((i,r)=>s().createElement("div",{key:r,className:"question-keyword-input-item"},s().createElement(tt,{rows:1,placeholder:a("learning.questionAddOptionDescNamePlaceholder"),value:i.title,onChange:o=>this.handleInputChange(o,r)}),r>0&&!t?s().createElement("span",{className:"question-keyword-input-remove",onClick:()=>this.removeOption(r)},a("common.remove")):null)),s().createElement(T.Z,{type:"link",className:"question-keyword-input-btn",disabled:t,onClick:this.handleInsert},s().createElement(R.Z,{iconClass:"icon-icon_addx",size:"12px"}),a("learning.questionAddOptionDescAddBtn")))}}var at=(0,F.Z)((0,x.Z)()(nt)),st=u(49101);class it extends s().Component{constructor(n){super(n);this.onShowAddInput=()=>{this.setState({isAdd:!0})},this.onAddPoint=e=>{var t=e.target.value,a=this.props.value;!t.trim()||(a.push(t),this.props.onFieldChange(a),this.setState({isAdd:!1}))},this.removePoint=e=>{var t=this.props.value;t.splice(e,1),this.props.onFieldChange(t)},this.renderFooter=()=>{var e=this.state.isAdd,t=this.props,a=t.value,i=t.t;return e?s().createElement(B.Z,{className:"knowledge-point-input",maxLength:1e3,onPressEnter:this.onAddPoint,onBlur:this.onAddPoint}):a.length<3?s().createElement(T.Z,{className:"knowledge-point-add",onClick:this.onShowAddInput,icon:s().createElement(st.Z,null)},i("learning.questionAddTag")):null},this.state={isAdd:!1}}render(){var n=this.props.value;return s().createElement("div",{className:"knowledge-point"},n.map((e,t)=>s().createElement("span",{className:"knowledge-point-item",key:t},e,s().createElement("span",{className:"knowledge-point-item-remove",onClick:()=>this.removePoint(t)},s().createElement(R.Z,{iconClass:"icon-guanbi1",size:"12px"})))),this.renderFooter())}}var rt=(0,F.Z)((0,x.Z)()(it)),kt=u(77576),fe=u(59314);class lt extends s().Component{constructor(){super(...arguments);this.handleChange=n=>{this.props.onIsOrderMatchChange(n)}}render(){var n=this.props,e=n.t,t=n.defaultValue,a=n.isRefered,i={display:"inline-block",color:"#B2BAC4",paddingLeft:"16px"};return s().createElement(s().Fragment,null,s().createElement(fe.Z,{onChange:this.handleChange,disabled:a,defaultChecked:t}),s().createElement("span",{style:i},"(".concat(e("learning.isOrderMatchTip"),")")))}}var ot=(0,F.Z)((0,x.Z)()(lt));class ct extends s().Component{constructor(){super(...arguments);this.handleChange=n=>{this.props.onOrderReplyUploadPicturesSwitchChange(n)}}render(){var n=this.props,e=n.t,t=n.defaultValue,a=n.isRefered,i={display:"inline-block",color:"#B2BAC4",paddingLeft:"16px"};return s().createElement(s().Fragment,null,s().createElement(fe.Z,{onChange:this.handleChange,disabled:a,defaultChecked:t}),s().createElement("span",{style:i},"(".concat(e("learning.isOrderReplyUploadPicturesSwitchTip"),")")))}}var ut=(0,F.Z)((0,x.Z)()(ct)),pt=u(70075),dt=u(4408),mt=u(62615),ye=u(10237),D={labelCol:{xs:{span:0},sm:{span:0}},wrapperCol:{xs:{span:24},sm:{span:24}}},Ce={wrapperCol:{span:16,offset:2}},ht={labelCol:{span:2},wrapperCol:{span:16}},P=!1;class vt extends s().Component{constructor(n){super(n);this.onLinkToDetailList=()=>{var e=this.state,t=e.questionBankId,a=e.questionBankName;G.m8.push("/training/examination/questionBank?id=".concat(t,"&name=").concat(a))},this.onSubmit=(e,t)=>{var a=this.state,i=a.questionBankId,r=a.questionId,o=P?z.ZP.QuestionBankDetail.editQuestion():z.ZP.QuestionBankDetail.addQuestion(),p,m=[];switch(e.type){case"single":p=1,m=e.choiceOptions.map(c=>(c.title=c.title.trim(),c));break;case"multiple":p=2,m=e.choiceOptions.map(c=>(c.title=c.title.trim(),c));break;case"tof":p=3,m=e.tofOptions;break;case"blank":p=4;break;case"describe":p=5,m=e.describeOptions;break;default:break}var v={questionBankId:i,title:e.title,type:p,answerImage:e.answerImage?1:0,difficulty:e.difficult,analysis:e.analysis,knowledgePoint:JSON.stringify(e.knowledgePoint),titleImage:e.titleImage.map(c=>c.url).join(","),analysisImage:e.analysisImage.map(c=>c.url).join(","),isOrderMatch:"".concat(e.is_order_match)};P&&(v.id=r);var g=[];if(p!==4)g=m.map(c=>c.isAnswer?{title:c.title,isAnswer:!0,id:c.id||"",answerImage:c.answerImage||""}:{title:c.title,id:c.id||"",answerImage:c.answerImage||""});else{var f=this.getBlankTag(e.title);g=f.map(c=>({title:c,isAnswer:!0}))}v.answer=JSON.stringify(g),ye.qg.post({url:o,data:v}).then(c=>{c.data.code===0&&(t.setSubmitting(!1),L.default.success(P?this.props.t("common.saveSuccess"):this.props.t("common.releaseSuccess")),this.onLinkToDetailList())}).catch(()=>{t.setSubmitting(!1),L.default.error(P?this.props.t("common.saveFailure"):this.props.t("common.releaseFailure"))})},this.onOrderMatchChange=e=>{this.formRef.setFieldValue("is_order_match",e)},this.onOrderReplyUploadPicturesSwitchChange=e=>{this.formRef.setFieldValue("answerImage",e)},this.getQuestionInfo=e=>{var t=z.ZP.QuestionBankDetail.getQuestionInfo(),a={id:e};ye.WY.get({url:t,params:a}).then(i=>{var r=i.data.data,o,p=this.state.initialValues,m=p.choiceOptions,v=p.tofOptions,g=p.describeOptions,f=p.blankOptions;switch(r.type){case 1:o="single",m=r.answer;break;case 2:o="multiple",m=r.answer;break;case 3:o="tof",v=r.answer;break;case 4:o="blank",f=r.answer;break;case 5:o="describe",g=r.answer;break;default:break}var c={type:o,difficult:r.difficulty,is_order_match:r.is_order_match==="true",title:r.title,answerImage:r.answer_image,titleImage:r.titleImageList?r.titleImageList.map((y,b)=>({uid:"".concat(y,"-").concat(b),url:y,name:"",status:"done"})):[],choiceOptions:m,tofOptions:v,describeOptions:g,blankOptions:f,knowledgePoint:r.knowledgePoint?r.knowledgePoint.map(y=>y.title):[],analysis:r.analysis,analysisImage:r.analysisImageList?r.analysisImageList.map((y,b)=>({uid:"".concat(y,"-").concat(b),url:y,name:"",status:"done"})):[]};this.formRef.setValues(c)})},this.initRef=e=>{this.formRef=e},this.linkToList=()=>{G.m8.push("/knowledgeBase/examResources/question")},this.changeInitOptions=e=>{var t=this.formRef.getFormikBag().values.choiceOptions;t.forEach(a=>{a.isAnswer=!1}),(e==="single"||e==="multiple")&&this.formRef.setFieldValue("choiceOptions",t)},this.getBlankTag=e=>{for(var t=/\[\[(.+?)\]\]/g,a=[],i;i=t.exec(e);)a.push(i[1]);return a},this.state={questionBankId:"",questionBankName:"",questionId:"",initialValues:{type:"single",difficult:1,title:"",titleImage:[],is_order_match:!0,answerImage:!1,choiceOptions:[{isAnswer:!1,title:"",optionOrder:"A",answerImage:""},{isAnswer:!1,title:"",optionOrder:"B",answerImage:""}],tofOptions:[{isAnswer:!1,title:this.props.t("learning.questionAddOptionTofPlaceholderCorrect"),optionOrder:"A"},{isAnswer:!1,title:this.props.t("learning.questionAddOptionTofPlaceholderFalse"),optionOrder:"B"}],describeOptions:[{title:"",isAnswer:!0}],blankOptions:[{title:"",isAnswer:!0}],knowledgePoint:[],analysis:"",analysisImage:[]}}}UNSAFE_componentWillMount(){var n=Ie.parse(G.m8.location.search),e=n.questionBankId,t=n.questionBankName,a=n.questionId;this.setState({questionBankId:e,questionBankName:t,questionId:a}),a&&(P=!0,this.getQuestionInfo(a))}componentWillUnmount(){P=!1}render(){var n=this.props,e=n.isRefered,t=n.t,a=this.state.initialValues,i=t(P?"documentTitle.editQuestion":"documentTitle.addQuestion");return s().createElement("div",{className:"question-edit"},s().createElement(dt.Z,{title:i}),s().createElement("div",{className:"question-edit-container"},s().createElement("div",{className:"form-page-container"},s().createElement("h1",{className:"form-page-container-title"},P?"".concat(t("common.edit")).concat(t("learning.questionAddTitle")):"".concat(t("common.add")).concat(t("learning.questionAddTitle"))),s().createElement(I.J9,{ref:this.initRef,initialValues:a,onSubmit:this.onSubmit,render:r=>s().createElement(I.l0,{className:"cl-form"},s().createElement(I.gN,(0,k.Z)({name:"type",defaultValue:r.values.type,component:we,changeInitOptions:this.changeInitOptions,displayType:"Custom",disabled:e},D)),s().createElement("div",{className:"cl-form__sectitle"},t("learning.questionAddSecContent")),s().createElement(I.gN,{name:"difficult",label:t("learning.questionAddContentLevel"),required:!0,defaultValue:r.values.difficult,component:ke}),s().createElement(I.gN,(0,k.Z)({name:"title",displayType:"Custom",label:t("learning.questionAddContentName"),required:!0,component:Qe,options:r.values.blankOptions,isRefered:e,validate:o=>V.title(o,r.values.type),questionType:r.values.type,setFieldValue:r.setFieldValue},ht)),s().createElement(I.gN,(0,k.Z)({name:"titleImage",label:"",component:ve},Ce)),r.values.type==="single"||r.values.type==="multiple"?s().createElement(I.gN,(0,k.Z)({name:"choiceOptions",label:"",displayType:"Custom",component:ge,validate:o=>V.options(o,r.values.type),disabled:e},D,{questionType:r.values.type})):null,r.values.type==="tof"?s().createElement(I.gN,(0,k.Z)({name:"tofOptions",label:"",displayType:"Custom",component:ge,validate:o=>V.options(o,r.values.type),disabled:e},D,{questionType:r.values.type})):null,r.values.type==="blank"&&s().createElement(I.gN,{name:"is_order_match",label:t("learning.isOrderMatchLabel"),required:!0,defaultValue:r.values.is_order_match,displayType:"Custom",onIsOrderMatchChange:this.onOrderMatchChange,isRefered:e,component:ot}),r.values.type==="describe"?s().createElement(I.gN,(0,k.Z)({name:"describeOptions",label:t("learning.questionAddOptionDescName"),required:!0,displayType:"Custom",disabled:e,validate:o=>V.options(o,"describe"),component:at},D)):null,r.values.type==="describe"||r.values.type==="blank"?s().createElement(I.gN,(0,k.Z)({name:"answerImage",label:t("learning.isOrderReplyUploadPicturesSwitchLabel"),defaultValue:r.values.answerImage,displayType:"Custom",onOrderReplyUploadPicturesSwitchChange:this.onOrderReplyUploadPicturesSwitchChange,isRefered:e,component:ut},D)):null,s().createElement(I.gN,{name:"knowledgePoint",label:t("learning.questionAddTag"),displayType:"Custom",component:rt,disabled:e,validate:V.knowledgePoint}),s().createElement("p",{className:"cl-form__divide padding"}),s().createElement("div",{className:"cl-form__sectitle"},t("learning.questionAddSecAnalysis")),s().createElement(I.gN,{name:"analysis",label:t("learning.questionAddSecAnalysisName"),component:pt.Z,placeholder:t("learning.questionAddSecAnalysisNamePlaceholder"),rows:4,type:"text",maxLength:1600}),s().createElement(I.gN,(0,k.Z)({name:"analysisImage",label:"",component:ve},Ce)),s().createElement(mt.I,null),s().createElement("div",{className:"cl-form-fixed-footer"},s().createElement("div",{className:"cl-form-fixed-footer__container"},s().createElement(T.Z,{className:"form-page-container-bottom-btn",loading:r.isSubmitting,type:"primary",htmlType:"submit"},P?"".concat(t("common.save")):"".concat(t("common.release"))),s().createElement(T.Z,{className:"form-page-container-bottom-btn",onClick:this.onLinkToDetailList},t("common.cancel")))))}))))}}var gt=(0,x.Z)()(vt)},35882:function(J,K,u){"use strict";u.r(K);var ae=u(12924),T=u.n(ae),k=u(2127);class se extends T().Component{render(){return T().createElement(k.Z,null)}}K.default=se},71739:function(J){J.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
