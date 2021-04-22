(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},372:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scada-webapi-01-d470f080bc476e7dbc89f9cc9b662e9e.png"},373:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scada-webapi-02-9f57895ec9b5840fb93806a546a4a2f4.png"},374:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scada-webapi-03-54fe550f17df15f233aa7f1b8c937dc2.png"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(137)),i={title:"ViewPLUS SCADA Web API"},o={unversionedId:"ViewPLUS-SCADA-WebApi",id:"ViewPLUS-SCADA-WebApi",isDocsHomePage:!1,title:"ViewPLUS SCADA Web API",description:"Introduction",source:"@site/docs/ViewPLUS-SCADA-WebApi.md",slug:"/ViewPLUS-SCADA-WebApi",permalink:"/docs/ViewPLUS-SCADA-WebApi",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-WebApi.md",version:"current",sidebar:"Documents",previous:{title:"ViewPLUS SCADA Database",permalink:"/docs/ViewPLUS-SCADA-Database"},next:{title:"Example Projects",permalink:"/docs/ViewPLUS-SCADA-Example-Projects"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Database Connection",id:"database-connection",children:[]},{value:"Starting the Server",id:"starting-the-server",children:[]},{value:"For taking an Access token",id:"for-taking-an-access-token",children:[]},{value:"To read data from API",id:"to-read-data-from-api",children:[]}]}],s={toc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"You can access and control the devices on the field by using ViewPLUS SCADA Node WebAPI."),Object(l.b)("p",null,"Download ViewPLUS SCADA Node WebAPI from the following link:"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.mikrodev.com/downloads/viewplus/windows/ScadaNodeWebApi_v1.2.zip"},"SCADA Node Web API")),Object(l.b)("h3",{id:"database-connection"},"Database Connection"),Object(l.b)("p",null,"The database type that the project is working on must be specified with the HR_DBTYPE environmental variable (POSTGRES / ORACLE)\nFor a project on the Postgresql database, the HR_PGCONNECTIONSTRING environmental variable must be set in the format given in the example below.\nFor a project on Oracle database, HR_CONNECTIONSTRING, HR_USER and HR_PASSWORD environmental variables should be set in the following format."),Object(l.b)("center",null,Object(l.b)("p",null,Object(l.b)("img",{alt:"scada-webapi-01",src:n(372).default}))),Object(l.b)("h3",{id:"starting-the-server"},"Starting the Server"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install node.js"),Object(l.b)("li",{parentName:"ul"},'Install dependencies:\nIn the application folder type "npm install"'),Object(l.b)("li",{parentName:"ul"},"Set enviromental variables for:\nHR_DBTYPE : POSTGRES or ORACLE\nHR_CONNECTIONSTRING : Oracle DB connection string(example : 127.0.0.1/orcl)\nHR_PGCONNECTIONSTRING : Example postgres://postgres:",Object(l.b)("a",{parentName:"li",href:"mailto:qwx123@127.0.0.1"},"qwx123@127.0.0.1"),":5432/scadatest1  (example; user: postgres, pwd: qwx123, server: 127.0.0.1, port: 5432, project: scadatest1)\nHR_USER \t: Oracle DB user name for project( It is SCADA project name)\nHR_PASSWORD : Oracle DB password"),Object(l.b)("li",{parentName:"ul"},'Configure web server port if needed on the file ".\\config\\web-server.js" (default 3000)'),Object(l.b)("li",{parentName:"ul"},"Change application secret for JWT on ./config.js"),Object(l.b)("li",{parentName:"ul"},'Start server by typing "node ."')),Object(l.b)("h3",{id:"for-taking-an-access-token"},"For taking an Access token"),Object(l.b)("p",null,'A new user is created in the SCADA. The user must have the "Can Access Reports" authority.\nInside the body, a POST query is sent to   http://localhost:3000/api/auth/login with the keys "username" and "password".\nA token is taken as follows:'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n    "auth": true,\n    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM3MzU5MDc1LCJ leHAiOjE1Mzc0NDU0NzV9.NX5kX4HLVdE4IoPcSBWkdlGKK_pksHnTnEoWCx1xCyc"\n}\n')),Object(l.b)("p",null,"http://localhost:3000 is given as an example. Replace this with the actual system's IP and Port information."),Object(l.b)("h3",{id:"to-read-data-from-api"},"To read data from API"),Object(l.b)("p",null,'The following GET requests can be sent by adding this token to the "x-access-token" key value in the header:'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Information of all tags defined in the system")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'http://localhost:3000/api/auth/tags   or http://localhost:3000/api/auth/tags/{id}\nSample Result:\n[\n  {\n    "id": 1,\n    "tagname": "tag1",\n    "kanal_id": 1,\n    "polfreq": 3,\n    "deviceaddress": "1",\n    "variableaddress": "0",\n    "variablesize": 4,\n    "variabletype": 2,\n    "islogging": 0,\n    "privilegelevel": 0,\n    "tagtype": 0,\n    "schedulerindex": 0,\n    "loggingfreq": 300,\n    "loggingmethod": 6619250,\n    "readright1": 0,\n    "readright2": 0,\n    "writeright1": 0,\n    "writeright2": 0,\n    "keywords": null,\n    "enabled": 1,\n    "description": null,\n    "unitname": null,\n    "protocolobjecttype": 0,\n    "toption": 0,\n    "logfilteroptions": "{\\n \\"filtertype\\": 0,\\n \\"refval1\\": null,\\n \\"refval2\\": null\\n}\\n",\n    "equipment": null,\n    "measuredentity": null,\n    "location": null,\n    "formula": null,\n    "modified": 0\n  },\n  \u2026\n]\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Information of all alarms that defined in the system")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'http://localhost:3000/api/auth/alarms  or http://localhost:3000/api/auth/alarms/{id}\n\nSample Result:\n[\n  {\n    "id": 1,\n    "alarm_name": "Alarm1",\n    "alarm_desc": "NoDescription",\n    "alarm_class": "General",\n    "enabled": 1,\n    "ackrequired": 0,\n    "islogging": 0,\n    "tag_id": 3,\n    "alarm_type": 0,\n    "alarm_level": 0,\n    "comp_type": 1\n  },\n  \u2026\n]\n\nBy using the "tag_id" value in this scheme, information about the tag that causes the alarm can be accessed from "api / auth / tags".\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"List of alarms that are instantly active in the system:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'http://localhost:3000/api/auth/active_alarms or http://localhost:3000/api/auth/active_alarms/{id}\n\nSample Result:\n[\n  {\n    "id": 4,\n    "alarm_id": 1,\n    "user_name": null,\n    "dataval": 1,\n    "currentstate": 1,\n    "trigertime": 1537229311140,\n    "acktime": -1,\n    "recovtime": -1,\n    "logtime": 1537229311140,\n    "logdate": null,\n    "mailsent": 0,\n    "ackmessage": null\n  },\n  \u2026\n]\n\nThe details of the alarm can be accessed from "api / auth / alarms" by using the "alarm_id" value in this scheme.\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Information of all channels defined in the system")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'http://localhost:3000/api/auth/channels  or http://localhost:3000/api/auth/channels/{id}\n\nSample Result:\n[\n  {\n    "id": 1,\n    "channelname": "Channel1",\n    "mediatype_id": 0,\n    "sockettype_id": 0,\n    "paritytype_id": 0,\n    "protocoltype_id": 0,\n    "serverport": 1080,\n    "listenport": 1081,\n    "serverip": "127.0.0.1",\n    "filterip": "0.0.0.0",\n    "comport": 11,\n    "baudrate": 115200,\n    "databit": 8,\n    "stopbit": 1,\n    "responseto": 6000,\n    "connectionto": 6000,\n    "frameto": 3000,\n    "groupid": -1,\n    "station": null,\n    "enabled": 1,\n    "logicpropath": null,\n    "description": null,\n    "modified": 0,\n    "state": null\n  },\n\u2026\n]\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Instantaneous values of labels defined in the system")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'http://localhost:3000/api/auth/rt_values or http://localhost:3000/api/auth/rt_values/{id}\n\nSample Result:\n[\n  {\n    "id": 1,\n    "tag_id": 3,\n    "dataval": 1,\n    "logtime": 1537229310000,\n    "logdate": "2018-09-18T00:08:30.000Z"\n  },\n\u2026\n]\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Updating the tag value in the system")),Object(l.b)("p",null,"localhost:3000/api/auth/write_buffer"),Object(l.b)("center",null,Object(l.b)("p",null,Object(l.b)("img",{alt:"scada-webapi-02",src:n(373).default}))),Object(l.b)("center",null,Object(l.b)("p",null,Object(l.b)("img",{alt:"scada-webapi-03",src:n(374).default}))))}p.isMDXComponent=!0}}]);