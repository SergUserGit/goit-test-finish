/*! For license information please see 567.f45cd6c1.chunk.js.LICENSE.txt */
(self.webpackChunktest_finish_project=self.webpackChunktest_finish_project||[]).push([[567],{770:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});a(791);const n=a.p+"static/media/split_auto.5dbce068a4e015f477e063ada8f4b6d7.svg"},567:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var n=a(791);const s="AutoCatalogList_AutoCatalogList__G88WV";const i=a.p+"static/media/heart_no_checked.ac060e771360fcc26ebb0c86173c8396.svg";const o=a.p+"static/media/heart_checked.623a3b874365d724c658e79a860ad4a4.svg";var l=a(770);const r="AutoCatalogItem_buttonLike__TEr14",c="AutoCatalogItem_itemLike__MOlh4",u="AutoCatalogItem_imageAuto__gKDuZ",d="AutoCatalogItem_infoModelAuto__OwfyI",p="AutoCatalogItem_mainDivAuto__GNIKI",m="AutoCatalogItem_spanRentalPrice__rxLKy",f="AutoCatalogItem_paraghDateAuto__PPwuQ",h="AutoCatalogItem_buttonLeanMore__d01Bl",_="AutoCatalogItem_spanLeanMore__yVxMb",g="AutoCatalogItem_paragraphInfoAuto__2hW2H",j="AutoCatalogItem_styleBlakInfo__ani8N",y="AutoCatalogItem_styleBlueInfo__k+2V3",v="AutoCatalogItem_spanAutoInfo__Sq+90";var C=a(34),b=a(184);const x=e=>{let{make:t,model:a,year:s,rentalPrice:x,adressCity:N,adressCountry:D,rentalCompany:O,type:A,idAuto:w,functionalities:I,fuelConsumption:k,engineSize:S,description:T,accesOne:M,accesTwo:P,functionalOne:E,accesThree:Z,functionalTwo:L,functionalThree:V,minimumAge:R,rentalConditionTwo:B,rentalConditionThree:F,mileAge:G,imgAuto:z,autoFilter:W}=e;const[U,K]=(0,n.useState)(!1),[X,J]=(0,n.useState)(!1);(0,n.useEffect)((()=>{var e;const t=void 0===(null!==(e=JSON.parse(localStorage.getItem("arrayCardItemAuto")))&&void 0!==e?e:[]).find((e=>e.idAuto===w));K(!t)}),[w]);const q={display:"show all"===W||W===t?"list-item":"none"};return(0,b.jsxs)("li",{style:q,className:p,children:[(0,b.jsxs)("div",{className:c,children:[(0,b.jsx)("img",{className:u,src:z,alt:"card auto"}),(0,b.jsx)("button",{onClick:function(){var e;K((e=>!e));const n=null!==(e=JSON.parse(localStorage.getItem("arrayCardItemAuto")))&&void 0!==e?e:[];if(U){const e=n.filter((e=>e.idAuto!==w));localStorage.setItem("arrayCardItemAuto",JSON.stringify(e))}else n.push({make:t,model:a,year:s,rentalPrice:x,adressCity:N,adressCountry:D,rentalCompany:O,type:A,idAuto:w,functionalities:I,fuelConsumption:k,engineSize:S,description:T,accesOne:M,accesTwo:P,functionalOne:E,accesThree:Z,functionalTwo:L,functionalThree:V,minimumAge:R,rentalConditionTwo:B,rentalConditionThree:F,mileAge:G,imgAuto:z}),localStorage.setItem("arrayCardItemAuto",JSON.stringify(n))},className:r,children:(0,b.jsx)("img",{src:U?o:i,alt:"like"})})]}),(0,b.jsxs)("div",{className:d,children:[(0,b.jsxs)("p",{className:g,children:[(0,b.jsx)("span",{className:j,children:t}),"\xa0",(0,b.jsx)("span",{className:y,children:a}),(0,b.jsx)("span",{className:j,children:","}),"\xa0",(0,b.jsx)("span",{className:j,children:s})]}),(0,b.jsx)("span",{className:m,children:x})]}),(0,b.jsxs)("p",{className:f,children:[(0,b.jsx)("span",{className:v,children:N}),(0,b.jsx)("img",{src:l.Z,alt:"split auto"}),(0,b.jsx)("span",{className:v,children:D}),(0,b.jsx)("img",{src:l.Z,alt:"split auto"}),(0,b.jsx)("span",{className:v,children:O}),(0,b.jsx)("img",{src:l.Z,alt:"split auto"}),(0,b.jsx)("span",{className:v,children:A}),(0,b.jsx)("img",{src:l.Z,alt:"split auto"}),(0,b.jsx)("span",{className:v,children:a}),(0,b.jsx)("img",{src:l.Z,alt:"split auto"}),(0,b.jsx)("span",{className:v,children:w}),(0,b.jsx)("img",{src:l.Z,alt:"split auto"}),(0,b.jsx)("span",{className:v,children:I})]}),(0,b.jsx)("button",{onClick:function(){J(!0)},className:h,children:(0,b.jsx)("span",{className:_,children:"Learn more"})}),X&&(0,b.jsx)(C.Z,{make:t,model:a,year:s,adressCity:N,adressCountry:D,idAuto:w,type:A,fuelConsumption:k,engineSize:S,description:T,accesOne:M,accesTwo:P,functionalOne:E,accesThree:Z,functionalTwo:L,functionalThree:V,minimumAge:R,rentalConditionTwo:B,rentalConditionThree:F,mileAge:G,rentalPrice:x,imgAuto:z})]})},N=function(e){let{autoCatalogList:t,filter:a}=e;function n(e){return e.split(",")}function i(e){return e.split("\n")}return(0,b.jsx)("ul",{className:s,children:t.map((e=>{let{id:t,make:s,model:o,year:l,rentalPrice:r,address:c,rentalCompany:u,type:d,functionalities:p,fuelConsumption:m,engineSize:f,description:h,accessories:_,rentalConditions:g,mileage:j,img:y}=e;return(0,b.jsx)(x,{make:s,model:o,year:l,rentalPrice:r,adressCity:n(c)[1].trim(),adressCountry:n(c)[2].trim(),rentalCompany:u,type:d,idAuto:t,functionalities:p[0],fuelConsumption:m,engineSize:f,description:h,accesOne:_[0],accesTwo:_[1],functionalOne:p[0],accesThree:_[2],functionalTwo:p[1],functionalThree:p[2],minimumAge:parseFloat(i(g)[0].replace("Minimum age:","").trim()),rentalConditionTwo:i(g)[1],rentalConditionThree:i(g)[2],mileAge:j,imgAuto:y,autoFilter:a},t)}))})},D="ButtonLoadMore_buttonLoadeMore__llEX1",O=e=>{let{onClickLoadeMoreBtn:t}=e;return(0,b.jsx)("button",{className:D,onClick:()=>{t()},children:"Load more"})};var A=a(315);const w="AutoCatalog_dropdown__6MTaX",I="AutoCatalog_dropdownMenu__c88oc",k="AutoCatalog_dropdownControl__25Kat",S="AutoCatalog_dropdownDesc__F1l71",T="AutoCatalog_dropdownGroup__D7Ark";var M=a(434),P=a(234);const E=e=>e.catalogauto.adverts.items;let Z=1;const L=()=>{const e=(0,M.I0)(),t=(0,M.v9)(E),a=["show all","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],s=a[0],[i,o]=(0,n.useState)(12),[l,r]=(0,n.useState)(!0),[c,u]=(0,n.useState)("show all");return(0,n.useEffect)((()=>{e((0,P.G)())}),[e]),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr",gridGap:"29px",paddingBottom:"24px"},children:[(0,b.jsxs)("div",{className:T,children:[(0,b.jsx)("p",{className:S,children:"Car brand"}),(0,b.jsx)(A.Z,{options:a,value:s,onChange:function(e){u(e.value)},className:w,menuClassName:I,controlClassName:k})]}),(0,b.jsx)(N,{autoCatalogList:function(e,t,a){return e.slice(t,a)}(t,0,i),filter:c}),l&&(0,b.jsx)(O,{onClickLoadeMoreBtn:function(){Z+=1;const e=12*Z;o(e),e>=t.length&&r(!1)}})]})}},34:(e,t,a)=>{"use strict";a.d(t,{Z:()=>R});const n="DetailedInformation_backDrop__OUAE6",s="DetailedInformation_modalDetail__zz6ds",i="DetailedInformation_buttonClose__TtKYl",o="DetailedInformation_image_test_big__9b-c1",l="DetailedInformation_detailInfoAuto__ud72W",r="DetailedInformation_detailCharakterAuto__qDE+n",c="DetailedInformation_detailDescription__VUDNc",u="DetailedInformation_headAccessories__pcuri",d="DetailedInformation_detailAccessFunctionalAuto__jdb7P",p="DetailedInformation_headRentalConditions__GsaFp",m="DetailedInformation_minimumAgeParagrah__9VZIX",f="DetailedInformation_rentalConditionTwo__2bq0M",h="DetailedInformation_rentalConditionThree__lGRsS",_="DetailedInformation_rentalConditionsGroupOne__1RMbG",g="DetailedInformation_rentalConditionsGroupTwo__04G7F",j="DetailedInformation_mileAge__UGjoe",y="DetailedInformation_price__SWX1b",v="DetailedInformation_telRef__Zvafr",C="DetailedInformation_spanMakeDetail__t52Ep",b="DetailedInformation_spanModelDetail__koB2z",x="DetailedInformation_spanSplitlDetail__hTC5Q",N="DetailedInformation_spanYearlDetail__+b-Ul",D="DetailedInformation_spanDetailCharakte__XTbke",O="DetailedInformation_spanAccessFunctional__mNA5z",A="DetailedInformation_spanMinimumAgeDesc__dgpmW",w="DetailedInformation_spanMinimumAgeValue__Ec3CB",I="DetailedInformation_spanRentalConditionTwo__l5mxw",k="DetailedInformation_spanRentalConditionThree__pVvSU",S="DetailedInformation_spanMileageDesc__ijiKP",T="DetailedInformation_spanMileageValue__1Q9CS",M="DetailedInformation_spanPriceDesc__1xhML",P="DetailedInformation_spanPriceValue__BpFPd";var E=a(791);const Z=a.p+"static/media/icon_close.f3cbdd58dc25ca7cbb3d242106b56fb9.svg";var L=a(770),V=a(184);const R=e=>{let{make:t,model:a,year:R,adressCity:B,adressCountry:F,idAuto:G,type:z,fuelConsumption:W,engineSize:U,description:K,accesOne:X,accesTwo:J,functionalOne:q,accesThree:H,functionalTwo:Q,functionalThree:Y,minimumAge:$,rentalConditionTwo:ee,rentalConditionThree:te,mileAge:ae,rentalPrice:ne,imgAuto:se}=e;const[ie,oe]=(0,E.useState)(!1);function le(){oe(!0)}return(0,V.jsx)(V.Fragment,{children:!1===ie&&(0,V.jsx)("div",{onClick:le,className:n,children:(0,V.jsxs)("div",{className:s,children:[(0,V.jsx)("button",{onClick:le,className:i,children:(0,V.jsx)("img",{src:Z,alt:"close"})}),(0,V.jsx)("img",{className:o,src:se,alt:"test big"}),(0,V.jsxs)("p",{className:l,children:[(0,V.jsx)("span",{className:C,children:t}),"\xa0",(0,V.jsx)("span",{className:b,children:a}),(0,V.jsx)("span",{className:x,children:","}),"\xa0",(0,V.jsx)("span",{className:N,children:R})]}),(0,V.jsxs)("p",{className:r,children:[(0,V.jsx)("span",{className:D,children:B}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsx)("span",{className:D,children:F}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsxs)("span",{className:D,children:["id:\xa0",G]}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsxs)("span",{className:D,children:["Year:\xa0",R]}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsxs)("span",{className:D,children:["Type:\xa0",z]}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsxs)("span",{className:D,children:["Fuel Consumption:\xa0",W]}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsxs)("span",{className:D,children:["Engine Size:\xa0",U]})]}),(0,V.jsx)("p",{className:c,children:K}),(0,V.jsx)("h2",{className:u,children:"Accessories and functionalities:"}),(0,V.jsxs)("p",{className:d,children:[(0,V.jsx)("span",{className:O,children:X}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsx)("span",{className:O,children:J}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsx)("span",{className:O,children:q}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsx)("span",{className:O,children:H}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsx)("span",{className:O,children:Q}),(0,V.jsx)("img",{src:L.Z,alt:"split auto"}),(0,V.jsx)("span",{className:O,children:Y})]}),(0,V.jsx)("h2",{className:p,children:"Rental Conditions:"}),(0,V.jsxs)("div",{className:_,children:[(0,V.jsxs)("p",{className:m,children:[(0,V.jsx)("span",{className:A,children:"Minimum age :\xa0"}),(0,V.jsx)("span",{className:w,children:$})]}),(0,V.jsx)("p",{className:f,children:(0,V.jsx)("span",{className:I,children:ee})})]}),(0,V.jsxs)("div",{className:g,children:[(0,V.jsx)("p",{className:h,children:(0,V.jsx)("span",{className:k,children:te})}),(0,V.jsxs)("p",{className:j,children:[(0,V.jsx)("span",{className:S,children:"Mileage:\xa0"}),(0,V.jsx)("span",{className:T,children:function(e){return String(e/1e3).replace(".",",")}(ae)})]}),(0,V.jsxs)("p",{className:y,children:[(0,V.jsx)("span",{className:M,children:"Price:\xa0"}),(0,V.jsx)("span",{className:P,children:(re=ne,re.replace("$","")+"$")})]})]}),(0,V.jsx)("a",{className:v,href:"tel:+380730000000",children:"Rental car"})]})})});var re}},694:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=s.apply(null,a);o&&e.push(o)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},315:(e,t,a)=>{"use strict";t.Z=void 0;var n,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}a.default=e,t&&t.set(e,a);return a}(a(791)),i=(n=a(694))&&n.__esModule?n:{default:n};function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}var h="Select...",_=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=function(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?m(e):t}(this,p(t).call(this,e))).state={selected:a.parseValue(e.value,e.options)||{label:"undefined"===typeof e.placeholder?h:e.placeholder,value:""},isOpen:!1},a.dropdownRef=(0,s.createRef)(),a.mounted=!0,a.handleDocumentClick=a.handleDocumentClick.bind(m(a)),a.fireChangeEvent=a.fireChangeEvent.bind(m(a)),a}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,n=[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var t=this.parseValue(this.props.value,this.props.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:"undefined"===typeof this.props.placeholder?h:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"===typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var a;if("string"===typeof e)for(var n=0,s=t.length;n<s;n++)if("group"===t[n].type){var i=t[n].items.filter((function(t){return t.value===e}));i.length&&(a=i[0])}else"undefined"!==typeof t[n].value&&t[n].value===e&&(a=t[n]);return a||e}},{key:"setValue",value:function(e,t){var a={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(a),this.setState(a)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,a=e.value;"undefined"===typeof a&&(a=e.label||e);var n=e.label||e.value||e,o=a===this.state.selected.value||a===this.state.selected,l=(u(t={},"".concat(this.props.baseClassName,"-option"),!0),u(t,e.className,!!e.className),u(t,"is-selected",o),t),d=(0,i.default)(l),p=Object.keys(e.data||{}).reduce((function(t,a){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,u({},"data-".concat(a),e.data[a]))}),{});return s.default.createElement("div",r({key:a,className:d,onMouseDown:this.setValue.bind(this,a,n),onClick:this.setValue.bind(this,a,n),role:"option","aria-selected":o?"true":"false"},p),n)}},{key:"buildMenu",value:function(){var e=this,t=this.props,a=t.options,n=t.baseClassName,i=a.map((function(t){if("group"===t.type){var a=s.default.createElement("div",{className:"".concat(n,"-title")},t.name),i=t.items.map((function(t){return e.renderOption(t)}));return s.default.createElement("div",{className:"".concat(n,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},a,i)}return e.renderOption(t)}));return i.length?i:s.default.createElement("div",{className:"".concat(n,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"===typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,a,n,o,l=this.props,r=l.baseClassName,c=l.controlClassName,d=l.placeholderClassName,p=l.menuClassName,m=l.arrowClassName,f=l.arrowClosed,h=l.arrowOpen,_=l.className,g=this.props.disabled?"Dropdown-disabled":"",j="string"===typeof this.state.selected?this.state.selected:this.state.selected.label,y=(0,i.default)((u(e={},"".concat(r,"-root"),!0),u(e,_,!!_),u(e,"is-open",this.state.isOpen),e)),v=(0,i.default)((u(t={},"".concat(r,"-control"),!0),u(t,c,!!c),u(t,g,!!g),t)),C=(0,i.default)((u(a={},"".concat(r,"-placeholder"),!0),u(a,d,!!d),u(a,"is-selected",this.isValueSelected()),a)),b=(0,i.default)((u(n={},"".concat(r,"-menu"),!0),u(n,p,!!p),n)),x=(0,i.default)((u(o={},"".concat(r,"-arrow"),!0),u(o,m,!!m),o)),N=s.default.createElement("div",{className:C},j),D=this.state.isOpen?s.default.createElement("div",{className:b,"aria-expanded":"true"},this.buildMenu()):null;return s.default.createElement("div",{ref:this.dropdownRef,className:y},s.default.createElement("div",{className:v,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},N,s.default.createElement("div",{className:"".concat(r,"-arrow-wrapper")},h&&f?this.state.isOpen?h:f:s.default.createElement("span",{className:x}))),D)}}],n&&d(a.prototype,n),o&&d(a,o),t}(s.Component);_.defaultProps={baseClassName:"Dropdown"};var g=_;t.Z=g}}]);
//# sourceMappingURL=567.f45cd6c1.chunk.js.map