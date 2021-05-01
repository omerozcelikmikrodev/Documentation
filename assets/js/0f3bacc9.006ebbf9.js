(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(t,a,e){"use strict";e.d(a,"a",(function(){return N}));var n=e(0),r=e.n(n);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function O(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var b=r.a.createContext({}),m=function(t){var a=r.a.useContext(b),e=a;return t&&(e="function"==typeof t?t(a):c(c({},a),t)),e},p={inlineCode:"code",wrapper:function(t){var a=t.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,b=O(t,["components","mdxType","originalType","parentName"]),d=m(e),N=n,u=d["".concat(i,".").concat(N)]||d[N]||p[N]||l;return e?r.a.createElement(u,c(c({ref:a},b),{},{components:e})):r.a.createElement(u,c({ref:a},b))}));function N(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,i=new Array(l);i[0]=d;var c={};for(var O in a)hasOwnProperty.call(a,O)&&(c[O]=a[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var b=2;b<l;b++)i[b]=e[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},75:function(t,a,e){"use strict";e.r(a),e.d(a,"frontMatter",(function(){return i})),e.d(a,"metadata",(function(){return c})),e.d(a,"toc",(function(){return O})),e.d(a,"default",(function(){return m}));var n=e(3),r=e(7),l=(e(0),e(139)),i={title:"AT Commands"},c={unversionedId:"Mikrodiagram-ATCommands",id:"Mikrodiagram-ATCommands",isDocsHomePage:!1,title:"AT Commands",description:"Mikrodev Devices have MODBUS registers which you could set some special parameters. You can find these special registers in the following table. Please note that the values you set via MODBUS will be saved into retentive memory once every 5 minutes for security purposes. After setting the parameter via MODBUS, if you power off the device earlier than 5 minutes, the changes may be lost.",source:"@site/docs/Mikrodiagram-ATCommands.md",slug:"/Mikrodiagram-ATCommands",permalink:"/docs/Mikrodiagram-ATCommands",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-ATCommands.md",version:"current",sidebar:"Documents",previous:{title:"Special Modbus Registers",permalink:"/docs/Mikrodiagram-Special-Modbus-Registers"},next:{title:"Device Error Codes",permalink:"/docs/Mikrodiagram-DeviceErrorCodes"}},O=[],b={toc:O};function m(t){var a=t.components,e=Object(r.a)(t,["components"]);return Object(l.a)("wrapper",Object(n.a)({},b,e,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Mikrodev Devices have MODBUS registers which you could set some special parameters. You can find these special registers in the following table. Please note that the values you set via MODBUS will be saved into retentive memory once every 5 minutes for security purposes. After setting the parameter via MODBUS, if you power off the device earlier than 5 minutes, the changes may be lost."),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",{parentName:"tr",align:null}),Object(l.a)("th",{parentName:"tr",align:null},"AT+XXX=?"),Object(l.a)("th",{parentName:"tr",align:null},"ACCESS RIGHT"),Object(l.a)("th",{parentName:"tr",align:null},"DESCRIPTION"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"ETHERNET"),Object(l.a)("td",{parentName:"tr",align:null},"LOCALIP"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"MAC"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"GATEWAY"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"NETMASK"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"DHCP"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Enable/Disable DHCP")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"LWIPTMO"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"If no packets received from PLC Ethernet port, resets the ethernet connection")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"CONFIGPORT"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"GSM"),Object(l.a)("td",{parentName:"tr",align:null},"GPRSAPN"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"GPRSNAME"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"GPRSPSSW"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"CSQ"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"available if ppp is not active")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"IMEI"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"available if ppp is not active")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"GPRSIP"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"available if ppp is not active")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"SIM"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"available if ppp is not active, returns true if SIMCARD communication is ok")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"MODEM"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"available if ppp is not active, sends and receives reply from modem")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"SOCKET STATUS"),Object(l.a)("td",{parentName:"tr",align:null},"SERVERTIMEOUT"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Tests if sockets are ok, if not closes them (seconds)")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"CONNECTION"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"SOCKET"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},'Displays the details of the clients connected on that "socket number"')),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"PLCRESET"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"If not received any data during that interval from ,GSM/ETH resets the device")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"PLC STATUS"),Object(l.a)("td",{parentName:"tr",align:null},"HELP"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"INCLUDE"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"Shows the enabled features on the device")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"MEMORY"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"Total used memory")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"VERSION"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"SERIALNO"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"PRODUCTNO"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"Returns the product number")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"MODEL"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"Device model selected in bootloader level")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"POWERCOUNT"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"Total reset count from the time project is uploaded")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"ERROR"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"PLC TIME"),Object(l.a)("td",{parentName:"tr",align:null},"SETTIME"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"TIMEOFFSET"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Time zone offset")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"PLC LCD"),Object(l.a)("td",{parentName:"tr",align:null},"MENULINE1"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Startup text for LCD devices, 16 characters ,first line")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"MENULINE2"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Startup text for LCD devices, 16 characters ,second line")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"WI-FI SETTINGS"),Object(l.a)("td",{parentName:"tr",align:null},"WIFIPSSW"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Set/Get WiFi Password")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"WIFISSID"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Set/Get WiFi SSID")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"WIFIMAC"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Get WiFi MAC")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"WIFIIP"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Set/Get WiFi IP Address")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"WIFIGATEWAY"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Set/Get WiFi Gateway Address")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"WIFINETMASK"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Set/Get WiFi Network Mask")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"CANBUS"),Object(l.a)("td",{parentName:"tr",align:null},"CANSTATUS"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"Status information for extension devices")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"CANCOMMAND"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Sends commands to extension devices")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"CANTIMEOUT"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Timeout value for checking extension device exists or not")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"INTERNAL FILESYSTEM RELATED"),Object(l.a)("td",{parentName:"tr",align:null},"FBD"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"ONLINE"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"DEFAULT"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"PASSWORD"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Set Password")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"Login device")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"RESET"),Object(l.a)("td",{parentName:"tr",align:null},"UNPROTECTED, R/W"),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null})),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"OTHER PLC FUNCTIONS"),Object(l.a)("td",{parentName:"tr",align:null},"ADCERROR"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"ADC error count")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"FORMATFS"),Object(l.a)("td",{parentName:"tr",align:null},"LOGIN REQUIRED, R/W"),Object(l.a)("td",{parentName:"tr",align:null},"Format filesystem")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null}),Object(l.a)("td",{parentName:"tr",align:null},"FATFS"),Object(l.a)("td",{parentName:"tr",align:null},"READ ONLY"),Object(l.a)("td",{parentName:"tr",align:null},"The size of the log file in the SD card")))))}m.isMDXComponent=!0}}]);