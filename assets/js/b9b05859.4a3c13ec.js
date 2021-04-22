(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(137)),i={title:"ViewPLUS SCADA Data Manager"},s={unversionedId:"ViewPLUS-SCADA-Data-Manager",id:"ViewPLUS-SCADA-Data-Manager",isDocsHomePage:!1,title:"ViewPLUS SCADA Data Manager",description:"Archives are used to reduce the size in high-dimensional databases and to make a more detailed search between logs. To get to the archive screen, data manager is started from the tools tab.",source:"@site/docs/ViewPLUS-SCADA-Data-Manager.md",slug:"/ViewPLUS-SCADA-Data-Manager",permalink:"/docs/ViewPLUS-SCADA-Data-Manager",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Data-Manager.md",version:"current",sidebar:"Documents",previous:{title:"ViewPLUS SCADA Client",permalink:"/docs/ViewPLUS-SCADA-Client"},next:{title:"ViewPLUS SCADA OPC UA Server Service",permalink:"/docs/ViewPLUS-SCADA-OPC-UA"}},o=[],l={toc:o};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Archives are used to reduce the size in high-dimensional databases and to make a more detailed search between logs. To get to the archive screen, data manager is started from the tools tab."),Object(c.b)("center",null,Object(c.b)("p",null,Object(c.b)("img",{alt:"data-manager-01",src:a(455).default}),"\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},Object(c.b)("center",null,"Figure 1: Tools Bar"))))),Object(c.b)("p",null,"Archiving is selected in the window that opens."),Object(c.b)("center",null,Object(c.b)("p",null,Object(c.b)("img",{alt:"data-manager-02",src:a(456).default}),"\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},Object(c.b)("center",null,"Figure 2: Data Manager Menu"))))),Object(c.b)("p",null,"Date is entered in Archieve Data Older Than section. All logs saved in the database before the date entered will be transferred to the archive database. Archiving is started by clicking Start Archiving."),Object(c.b)("center",null,Object(c.b)("p",null,Object(c.b)("img",{alt:"data-manager-03",src:a(457).default}),"\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},Object(c.b)("center",null,"Figure 3: Archieve Screen-1"))))),Object(c.b)("p",null,"When OK is selected for the warning displayed after archiving, archived logs in the main database are deleted. Since these logs are deleted, they will not be displayed in reporting in the main project. It can only be accessed from the Archive database. If Cancel is selected, logs are kept in the main database and logs are saved in the archive database."),Object(c.b)("center",null,Object(c.b)("p",null,Object(c.b)("img",{alt:"data-manager-04",src:a(458).default}),"\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},Object(c.b)("center",null,"Figure 4: Archieve Screen-2"))))),Object(c.b)("p",null,"After seeing the text Archive process completed in the data manager, archiving process is completed."),Object(c.b)("center",null,Object(c.b)("p",null,Object(c.b)("img",{alt:"data-manager-05",src:a(459).default}),"\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},Object(c.b)("center",null,"Figure 5: Archieve Screen-3"))))),Object(c.b)("p",null,"It is seen that a new database named main database archive has been created."),Object(c.b)("center",null,Object(c.b)("p",null,Object(c.b)("img",{alt:"data-manager-06",src:a(460).default}),"\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},Object(c.b)("center",null,"Figure 6: Database Archieve Screen"))))),Object(c.b)("p",null,"Logs before the archiving date determined in the data manager are displayed in the archivetestlog_archive database."),Object(c.b)("center",null,Object(c.b)("p",null,Object(c.b)("img",{alt:"data-manager-07",src:a(461).default}),"\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},Object(c.b)("center",null,"Figure 7: Database Archieve Log Screen"))))))}b.isMDXComponent=!0},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,g=d["".concat(i,".").concat(p)]||d[p]||u[p]||c;return a?r.a.createElement(g,s(s({ref:t},l),{},{components:a})):r.a.createElement(g,s({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},455:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-manager-01-2714f4d11651b4bb4b96b3352a04685c.png"},456:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-manager-02-6503aee35d176152163571e23f3fd4b3.png"},457:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-manager-03-9f2437ecf53c00c385bc1974748d9234.png"},458:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-manager-04-614c330e8d5bda67f5244672692a7e57.png"},459:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-manager-05-46f7de9cee396c3c429323b33e29f5ce.png"},460:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-manager-06-882b0380cd593b4a71bb21d12989a985.png"},461:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data-manager-07-3648628f3922e213c38c51b2050502d7.png"}}]);