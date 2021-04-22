(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,d=b["".concat(c,".").concat(s)]||b[s]||m[s]||a;return n?o.a.createElement(d,i(i({ref:t},u),{},{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(137)),c={title:"Factory Settings"},i={unversionedId:"Mikrodiagram-Factory-Settings",id:"Mikrodiagram-Factory-Settings",isDocsHomePage:!1,title:"Factory Settings",description:"You can do factory settings of Mikrodev PLC, RTU and Gateway product families via USB connection.",source:"@site/docs/Mikrodiagram-Factory-Settings.md",slug:"/Mikrodiagram-Factory-Settings",permalink:"/docs/Mikrodiagram-Factory-Settings",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-Factory-Settings.md",version:"current",sidebar:"Documents",previous:{title:"Updating Firmware",permalink:"/docs/Mikrodiagram-Updating-Firmware"},next:{title:"Example Projects",permalink:"/docs/Mikrodiagram-Example-Projects"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can do factory settings of Mikrodev PLC, RTU and Gateway product families via USB connection. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Before starting, make sure that all USB connections to the device are closed. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Power OFF device, disconnect the DC supply connection. "))),Object(a.b)("center",null,Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/disconnect.gif",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Connect the USB cable between the computer and the device. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Power ON device, connect the DC supply.  "))),Object(a.b)("center",null,Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/connect.gif",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.')),Object(a.b)("center",null,Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/Default_1.png",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'After the device starts in boot mode, write "AT+DEFAULT=1" into the "Send Command" box and click "SEND" button. ')),Object(a.b)("center",null,Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/Default_2.png",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'After write "AT+DEFAULT=1" into the "Send Command", write "AT+RESET=1" into the "Send Command" box and click "SEND" button.')),Object(a.b)("center",null,Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/Default_3.png",alt:null}))))}p.isMDXComponent=!0}}]);