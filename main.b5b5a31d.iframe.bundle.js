(self.webpackChunkpcf_project=self.webpackChunkpcf_project||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./stories/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Horizontal:()=>Horizontal,Simple:()=>Simple,Small:()=>Small,TeamsDark:()=>TeamsDark,TeamsHighContrast:()=>TeamsHighContrast,TeamsLight:()=>TeamsLight,Vertical:()=>Vertical,WebDark:()=>WebDark,WebLight:()=>WebLight,WithStep:()=>WithStep,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Slider_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),makeStyles_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js")),useId=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/hooks/useId.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),FluentProvider=__webpack_require__("./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js"),Tooltip=__webpack_require__("./node_modules/@fluentui/react-tooltip/lib/components/Tooltip/Tooltip.js"),Badge=__webpack_require__("./node_modules/@fluentui/react-badge/lib/components/Badge/Badge.js"),Divider=__webpack_require__("./node_modules/@fluentui/react-divider/lib/components/Divider/Divider.js"),Slider=__webpack_require__("./node_modules/@fluentui/react-slider/lib/components/Slider/Slider.js"),lightTheme=__webpack_require__("./node_modules/@fluentui/react-theme/lib/themes/teams/lightTheme.js"),darkTheme=__webpack_require__("./node_modules/@fluentui/react-theme/lib/themes/teams/darkTheme.js"),highContrastTheme=__webpack_require__("./node_modules/@fluentui/react-theme/lib/themes/teams/highContrastTheme.js"),web_lightTheme=__webpack_require__("./node_modules/@fluentui/react-theme/lib/themes/web/lightTheme.js"),web_darkTheme=__webpack_require__("./node_modules/@fluentui/react-theme/lib/themes/web/darkTheme.js"),themes={TeamsLight:lightTheme.Y,TeamsDark:darkTheme.$,TeamsHighContrast:highContrastTheme.$,WebLight:web_lightTheme.w,WebDark:web_darkTheme._};function getTheme(name){return themes[name]}try{getTheme.displayName="getTheme",getTheme.__docgenInfo={description:"",displayName:"getTheme",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["FluentUISlider/utils/theme.tsx#getTheme"]={docgenInfo:getTheme.__docgenInfo,name:"getTheme",path:"FluentUISlider/utils/theme.tsx#getTheme"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useStyles=(0,makeStyles_esm.Z)({stack:{display:"flex",flexWrap:"nowrap",width:"fit-content",height:"fit-content",boxSizing:"border-box","> *":{textOverflow:"ellipsis"}},stackHorizontal:{flexDirection:"row",marginLeft:"5px","> :not(:last-child)":{marginRight:"12px"}},stackVertical:{flexDirection:"column",marginLeft:"5px","> :not(:first-child)":{marginTop:"10px"}},stackitem:{height:"fit-content",width:"fit-content",alignSelf:"center",flexShrink:1},stackitemSliderVertical:{alignSelf:"left",marginLeft:"10px",flexShrink:1},stackitemBadgeVertical:{alignSelf:"left",marginLeft:"5px",flexShrink:1},tooltip:{paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",paddingBottom:"0px"}}),FluentUISliderApp=function FluentUISliderApp(props){var classes=useStyles(),tooltipposition=props.vertical?"after":"above",activetheme=getTheme(props.theme),id=(0,useId.M)(),_useState2=_slicedToArray((0,react.useState)(null),2),thumbRef=_useState2[0],setThumbRef=_useState2[1],_useState4=_slicedToArray((0,react.useState)(props.input),2),sliderValue=_useState4[0],setSliderValue=_useState4[1],stackClasses=(0,mergeClasses_esm.z)(classes.stack,props.vertical?classes.stackVertical:classes.stackHorizontal),sliderStackItemClasses=(0,mergeClasses_esm.z)(classes.stackitem,props.vertical?classes.stackitemSliderVertical:void 0),badgeStackItemClasses=(0,mergeClasses_esm.z)(classes.stackitem,props.vertical?classes.stackitemBadgeVertical:void 0);return(0,react.useEffect)((function(){sliderValue!==props.input&&setSliderValue(props.input)}),[props.input]),(0,jsx_runtime.jsx)(FluentProvider.r,{theme:activetheme,children:(0,jsx_runtime.jsx)(Tooltip.u,{content:{children:(0,jsx_runtime.jsxs)(Badge.C,{shape:"rounded",appearance:"ghost",children:[props.prefix,sliderValue,props.suffix]}),className:classes.tooltip},relationship:"label",withArrow:!0,positioning:{target:thumbRef,position:tooltipposition},visible:0!=props.showtooltip&&!props.disabled&&void 0,children:(0,jsx_runtime.jsxs)("div",{className:stackClasses,children:[props.showValue&&!0===props.vertical&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:badgeStackItemClasses,children:(0,jsx_runtime.jsxs)(Badge.C,{shape:"rounded",appearance:"filled",children:[props.prefix,sliderValue,props.suffix]})}),(0,jsx_runtime.jsx)("div",{className:classes.stackitem,children:(0,jsx_runtime.jsx)(Divider.i,{})})]}),props.showminmax&&(0,jsx_runtime.jsx)("div",{className:badgeStackItemClasses,children:(0,jsx_runtime.jsxs)(Badge.C,{shape:"rounded",appearance:"tint",children:[props.prefix,props.vertical?props.max:props.min,props.suffix]})}),(0,jsx_runtime.jsx)(Slider.i,{id,className:sliderStackItemClasses,"aria-valuetext":"Value is "+sliderValue,value:sliderValue,min:props.min,max:props.max,onChange:function onSliderChange(_,data){setSliderValue(data.value),props.onSliderChange(data.value)},size:props.size,step:props.step,vertical:props.vertical,disabled:props.disabled,thumb:{ref:setThumbRef}}),props.showminmax&&(0,jsx_runtime.jsx)("div",{className:badgeStackItemClasses,children:(0,jsx_runtime.jsxs)(Badge.C,{shape:"rounded",appearance:"tint",children:[props.prefix,props.vertical?props.min:props.max,props.suffix]})}),props.showValue&&!1===props.vertical&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:badgeStackItemClasses,children:(0,jsx_runtime.jsx)(Divider.i,{vertical:!0})}),(0,jsx_runtime.jsx)("div",{className:badgeStackItemClasses,children:(0,jsx_runtime.jsxs)(Badge.C,{shape:"rounded",appearance:"filled",children:[props.prefix,sliderValue,props.suffix]})})]})]})})})};FluentUISliderApp.displayName="FluentUISliderApp";const FluentUISlider_FluentUISliderApp=FluentUISliderApp;try{FluentUISliderApp.displayName="FluentUISliderApp",FluentUISliderApp.__docgenInfo={description:"",displayName:"FluentUISliderApp",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number | undefined"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"WebLight"'},{value:'"WebDark"'},{value:'"TeamsLight"'},{value:'"TeamsDark"'},{value:'"TeamsHighContrast"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},showminmax:{defaultValue:null,description:"",name:"showminmax",required:!0,type:{name:"boolean"}},showtooltip:{defaultValue:null,description:"",name:"showtooltip",required:!0,type:{name:"boolean"}},showValue:{defaultValue:null,description:"",name:"showValue",required:!0,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!0,type:{name:"string | undefined"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!0,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onSliderChange:{defaultValue:null,description:"",name:"onSliderChange",required:!0,type:{name:"(input: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["FluentUISlider/FluentUISliderApp.tsx#FluentUISliderApp"]={docgenInfo:FluentUISliderApp.__docgenInfo,name:"FluentUISliderApp",path:"FluentUISlider/FluentUISliderApp.tsx#FluentUISliderApp"})}catch(__react_docgen_typescript_loader_error){}const Slider_stories={title:"Components/FluentUI Slider",component:FluentUISlider_FluentUISliderApp};var Template=function Template(args){return(0,jsx_runtime.jsx)(FluentUISlider_FluentUISliderApp,Object.assign({},args))};Template.displayName="Template";var Horizontal=Template.bind({});Horizontal.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"WebLight",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var Vertical=Template.bind({});Vertical.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!0,theme:"WebLight",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var WithStep=Template.bind({});WithStep.args={input:0,min:0,max:100,step:10,size:"medium",vertical:!1,theme:"WebLight",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"%",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var Small=Template.bind({});Small.args={input:0,min:0,max:100,step:0,size:"small",vertical:!1,theme:"WebLight",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var Simple=Template.bind({});Simple.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"WebLight",showminmax:!1,showtooltip:!1,showValue:!1,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var Disabled=Template.bind({});Disabled.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"WebLight",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!0,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var WebLight=Template.bind({});WebLight.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"WebLight",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var WebDark=Template.bind({});WebDark.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"WebDark",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var TeamsLight=Template.bind({});TeamsLight.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"TeamsLight",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var TeamsDark=Template.bind({});TeamsDark.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"TeamsDark",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}};var TeamsHighContrast=Template.bind({});TeamsHighContrast.args={input:0,min:0,max:100,step:0,size:"medium",vertical:!1,theme:"TeamsHighContrast",showminmax:!0,showtooltip:!0,showValue:!0,prefix:"",suffix:"",disabled:!1,onSliderChange:function onSliderChange(newvalue){return console.log(newvalue)}},Horizontal.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},Horizontal.parameters),Vertical.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},Vertical.parameters),WithStep.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},WithStep.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},Small.parameters),Simple.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},Simple.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},Disabled.parameters),WebLight.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},WebLight.parameters),WebDark.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},WebDark.parameters),TeamsLight.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},TeamsLight.parameters),TeamsDark.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},TeamsDark.parameters),TeamsHighContrast.parameters=Object.assign({storySource:{source:"(args) => <FluentUISliderApp {...args} />"}},TeamsHighContrast.parameters);var __namedExportsOrder=["Horizontal","Vertical","WithStep","Small","Simple","Disabled","WebLight","WebDark","TeamsLight","TeamsDark","TeamsHighContrast"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./stories/Introduction.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>Introduction_stories});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p;var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Introduction",mdxType:"Meta"}),(0,esm.kt)("style",null,"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "),(0,esm.kt)("h1",null,"FluentUI Slider PCF Storybook"),(0,esm.kt)("img",{src:"https://user-images.githubusercontent.com/38399134/185529529-ba5ee8b0-db7a-439c-8668-bf56bf3e42fa.png"}),(0,esm.kt)("img",{src:"https://user-images.githubusercontent.com/38399134/185524844-1f17a30d-37a0-4024-b654-2eb65b742924.gif"}),(0,esm.kt)("div",{className:"tip-wrapper"},(0,esm.kt)("span",{className:"tip"},"Tip"),"Browse example stories now by navigating to them in the sidebar. View their code in the ",(0,esm.kt)("code",null,"stories")," directory to learn how they work."),(0,esm.kt)("div",{className:"subheading"},"Links"),(0,esm.kt)("div",{className:"link-list"},(0,esm.kt)("a",{className:"link-item",href:"https://github.com/drivardxrm/FluentUI.Slider.PCF",target:"_blank"},(0,esm.kt)("img",{src:"https://pngimg.com/uploads/github/github_PNG20.png",alt:"plugin"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"GitHub Repo"),"FluentUI.Slider.PCF")),(0,esm.kt)("a",{className:"link-item",href:"https://pcf.gallery/fluentui-slider/",target:"_blank"},(0,esm.kt)("img",{src:"https://pcf.gallery/assets/images/logo.png",alt:"PCF Gallery"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"PCF Gallery"),"FluentUI Slider"))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))}});const Introduction_stories=componentMeta;var __namedExportsOrder=["__page"]},"./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Slider.stories.tsx":"./stories/Slider.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Introduction.stories.mdx":"./stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[358],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);