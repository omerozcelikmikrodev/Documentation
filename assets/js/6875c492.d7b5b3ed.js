(window.webpackJsonp=window.webpackJsonp||[]).push([[27,13,15],{144:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(145),c=t.n(s),l=t(23),o=t(16);a.a=e=>{const a=Object(n.useRef)(!1),s=Object(n.useRef)(null),i=Object(l.useHistory)(),{siteConfig:u={}}=Object(o.default)(),{baseUrl:d}=u,m=()=>{a.current||(Promise.all([fetch(`${d}search-doc.json`).then((e=>e.json())),fetch(`${d}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(68),t.e(72)]).then(t.bind(null,150)),t.e(45).then(t.t.bind(null,149,7))]).then((([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=d+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)})),a.current=!0)},h=Object(n.useCallback)((a=>{s.current.contains(a.target)||s.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:h,onBlur:h,ref:s}))}},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(147),c=t(181),l=t(143),o=t(155),i=t(142),u=t(140);function d({tagName:e,count:a}){const t=function(){const{selectMessage:e}=Object(u.usePluralForm)();return a=>e(a,Object(i.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}();return r.a.createElement(i.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:t(a),tagName:e}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{allTagsPath:u,name:m,count:h}=a;return r.a.createElement(s.a,{title:`Posts tagged "${m}"`,description:`Blog | Tagged "${m}"`,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(o.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(d,{count:h,tagName:m})),r.a.createElement(l.a,{href:u},r.a.createElement(i.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);