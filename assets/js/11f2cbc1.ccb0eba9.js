(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{137:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=o.a.createContext({}),s=function(e){var t=o.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,b=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return r?o.a.createElement(b,c(c({ref:t},m),{},{components:r})):o.a.createElement(b,c({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},206:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mikrodiagram-formatfilesystem-01-371142ce25cdc2327ee063d9c934a4b5.png"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(137)),i={title:"Format File System"},c={unversionedId:"Mikrodiagram-Format-File-System",id:"Mikrodiagram-Format-File-System",isDocsHomePage:!1,title:"Format File System",description:"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition.",source:"@site/docs/Mikrodiagram-Format-File-System.md",slug:"/Mikrodiagram-Format-File-System",permalink:"/docs/Mikrodiagram-Format-File-System",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-Format-File-System.md",version:"current",sidebar:"Documents",previous:{title:"Device Error Codes",permalink:"/docs/Mikrodiagram-DeviceErrorCodes"},next:{title:"Updating Firmware",permalink:"/docs/Mikrodiagram-Updating-Firmware"}},l=[],m={toc:l};function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Before starting, make sure that all USB connections to device are closed.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Power OFF the device, disconnect the DC supply connection."))),Object(a.b)("center",null,Object(a.b)("p",null," ",Object(a.b)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/disconnect.gif",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Connect the USB cable between the computer and the device.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Power ON device\xa0, connect the DC supply."))),Object(a.b)("center",null,Object(a.b)("p",null," ",Object(a.b)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/connect.gif",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.')),Object(a.b)("center",null,Object(a.b)("p",null,Object(a.b)("img",{alt:"mikrodiagram-formatfilesystem-01",src:r(206).default}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'After the device starts in boot mode, write "AT+FORMATFS=1" into the "Send Command" box  and click "SEND" button. In this stage, the system light on the device will flash rapidly and the error light will be steady. After the process is finished, the system led will start to flash normally again. The format procedure will take about 2-3 minutes. Do not power off the device during the format process. The device will reset several times and it will disconnect the USB connection.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'You can check whether the format process has finished or not by checking the boot version of the device. To check the boot version connect USB port and then write "AT+VERSION=?" into the "Send Command" box  and click "SEND" button. If you can see the boot version on the console after this command, it means that you are ready to load the firmware on the device.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Go to Step 7 on ",Object(a.b)("a",{parentName:"p",href:"Mikrodiagram-Updating-Firmware"},"Loading Firmware")," page and continue loading firmware. Since the device is formatted, initial boot time will take significantly longer compared to standard firmware loading process."))),Object(a.b)("p",null,"Download Serial Loader application from the link below :"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip"},"MikrodevSerialLoader")))}s.isMDXComponent=!0}}]);