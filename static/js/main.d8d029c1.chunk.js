(this["webpackJsonpnew-york-open-data-explorer"]=this["webpackJsonpnew-york-open-data-explorer"]||[]).push([[0],{37:function(e,t,a){},47:function(e,t,a){e.exports=a(94)},54:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),l=a.n(r),o=(a(52),a(53),a(54),a(6)),i=a(13),s=a(27),u=a(1),m=(a(64),a(7)),d=a(5),E=a(4),f=a(21),p=a.n(f),b=a(3),v=a(22),h=a(16),O=a(12),g=a.n(O),j="https://api.us.socrata.com/api/catalog/v1?domains=data.cityofnewyork.us&search_context=data.cityofnewyork.us";function C(e){var t,a=arguments;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:100,n.abrupt("return",fetch("".concat(j,"&offset=").concat(e*t,"&limit=").concat(t)).then((function(e){return e.json()})));case 2:case"end":return n.stop()}}))}function N(e){return new Set([].concat(Object(E.a)(e.resource.columns_name.map((function(e){return e.toLocaleLowerCase()}))),Object(E.a)(e.resource.columns_field_name.map((function(e){return e.toLocaleLowerCase()})))))}function y(e,t){var a=N(t),n=new Set(Object(E.a)(e).filter((function(e){return a.has(e)})));return Array.from(n)}function k(e,t){return fetch("https://data.cityofnewyork.us/resource/".concat(e.resource.id,".json?$select=distinct ").concat(t.replace(/ /g,"_"))).then((function(e){return e.json()})).then((function(a){return a.errorCode||a.error?(console.warn("Failed to load unique entries for dataset ",e," column ",t),[]):a.map((function(e){return Object.values(e)[0]}))}))}var w=new v.a("SocrataCache");w.version(1).stores({SocrataCache:"id"});var _=Object(n.createContext)(),S={datasets:[],tagList:[],categories:[],departments:[],columns:[],stateLoaded:!1},A=function(e,t){var a=t.type,n=t.payload;switch(a){case"UPDATE_OPEN_DATASET_MANIFEST":return Object(b.a)({},e,{datasets:n});case"UPDATE_TAGS":return Object(b.a)({},e,{tagList:n});case"UPDATE_CATEGORIES":return Object(b.a)({},e,{categories:n});case"UPDATE_COLUMNS":return Object(b.a)({},e,{columns:n});case"UPDATE_DEPARTMENTS":return Object(b.a)({},e,{departments:n});case"HYDRATE_STATE":return Object(b.a)({},e,{},n);case"SET_LOADED":return Object(b.a)({},e,{stateLoaded:!0});default:return e}},D=function(){return Object(n.useContext)(_)};function T(){var e=D();return Object(u.a)(e,1)[0].stateLoaded}function x(e){var t=D(),a=Object(u.a)(t,1)[0].datasets;return Object(n.useMemo)((function(){return e?function(e,t){var a=N(e);return t.map((function(e){return{dataset:e,joinableColumns:y(a,e)}})).filter((function(t){return t.joinableColumns.length>0&&t.dataset.resource.id!==e.resource.id}))}(e,a):[]}),[e,a])}function L(e){var t=D(),a=Object(u.a)(t,1)[0].datasets;return Object(n.useMemo)((function(){return a.filter((function(t){return e.includes(t.resource.id)}))}),[a,e])}var I=a(31),M=a.n(I),F=Object(n.createContext)(),P={collections:[{id:"pending",datasets:[],name:"pending"}],activeCollectionID:"pending"},R=new v.a("CollectionCache");R.version(1).stores({CollectionCache:"id"});var U=function(e,t){var a=t.type,n=t.payload;switch(a){case"CREATE_COLLECTION_FROM_PENDING":return Object(b.a)({},e,{collections:[].concat(Object(E.a)(e.collections),[Object(b.a)({},e.collections.find((function(e){return"pending"===e.id})),{id:M()(),name:n.name})]).map((function(e){return"pending"===e.id?{id:"pending",datasets:[],name:"pending"}:e}))});case"ADD_TO_COLLECTION":return Object(b.a)({},e,{collections:e.collections.map((function(e){return e.id===n.id?Object(b.a)({},e,{datasets:[].concat(Object(E.a)(e.datasets),[n.datasetID])}):e}))});case"REMOVE_FROM_COLLECTION":return Object(b.a)({},e,{collections:e.collections.map((function(e){return e.id===n.id?Object(b.a)({},e,{datasets:e.datasets.filter((function(e){return e!==n.datasetID}))}):e}))});case"SET_NAME":return Object(b.a)({},e,{collections:[].concat(Object(E.a)(e),[e.collections.map((function(e){return e.id===n.id?Object(b.a)({},e,{name:n.name}):e}))])});case"CLEAR_COLLECTION":return Object(b.a)({},e,{collections:[].concat(Object(E.a)(e),[e.collections.map((function(e){return e.id===n.id?Object(b.a)({},e,{datasets:[]}):e}))])});case"DELETE_COLLECTION":return Object(b.a)({},e,{collections:e.collections.filter((function(e){return e.id!==n.id}))});case"CREATE_COLLECTION":return Object(b.a)({},e,{collections:[].concat(Object(E.a)(e.collections),[Object(b.a)({},n,{id:M()()})])});case"HYDRATE_STATE":return Object(b.a)({},e,{},n);default:return e}},Y=function(){return Object(n.useContext)(F)};function q(){var e=Y(),t=Object(u.a)(e,2),a=t[0],n=t[1],c=a.activeCollectionID,r=a.pendingCollection;return[c?a.collections.find((function(e){return e.id===a.activeCollectionID})):r,{clearCollection:function(e){n({type:"CLEAR_COLLECTION",payload:{id:e}})},addToCollection:function(e,t){n({type:"ADD_TO_COLLECTION",payload:{id:e,datasetID:t}})},removeFromCollection:function(e,t){return n({type:"REMOVE_FROM_COLLECTION",payload:{id:e,datasetID:t}})},setName:function(e,t){return n({type:"SET_NAME",payload:{id:t,name:e}})},createCollectionFromPending:function(e){n({type:"CREATE_COLLECTION_FROM_PENDING",payload:{name:e}})}}]}var z=a(41),B=a.n(z);function H(e){var t=e.html,a=e.className,n=B.a.sanitize(t);return c.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:n}})}function G(e,t){if(t){var a=new RegExp("(".concat(t,")"),"ig");return c.a.createElement(H,{html:e.replace(a,(function(e){return'<span class="hilight">'.concat(e,"</span>")}))})}return e}function J(e){return"/collection/".concat(e.name,"/").concat(e.datasets.join(","))}a(70);function V(e){var t=e.visible,a=function(){var e=Y(),t=Object(u.a)(e,2),a=t[0];return t[1],a}(),r=q(),l=Object(u.a)(r,2),i=l[0],s=l[1],E=s.removeFromCollection,f=s.createCollectionFromPending,p=L(i.datasets),b=Object(n.useState)(""),v=Object(u.a)(b,2),h=v[0],O=v[1],g=Object(n.useState)("new"),j=Object(u.a)(g,2),C=j[0],N=j[1],y=Object(n.useState)(!1),k=Object(u.a)(y,2),w=k[0],_=k[1],S=function(e){var t,a;return null===e||void 0===e?void 0:null===(t=e.classification.domain_metadata)||void 0===t?void 0:null===(a=t.find((function(e){return"Dataset-Information_Agency"===e.key})))||void 0===a?void 0:a.value};return t?c.a.createElement("div",{className:"collection-tab"},w?c.a.createElement("div",{className:"collections-tab-create"},c.a.createElement("h2",null,"Create Collection"),c.a.createElement("div",{className:"collections-tab-create-options"},c.a.createElement("p",null,"Name your new collection"),c.a.createElement("input",{placeholder:"name",type:"text",value:h,onChange:function(e){return O(e.target.value)}}),c.a.createElement("ul",null,p.map((function(e){return c.a.createElement("li",{className:"collection-tab-dataset"},c.a.createElement("div",null,c.a.createElement("p",{className:"name"},e.resource.name),c.a.createElement("p",{className:"agency"}," ",S(e))))})))),c.a.createElement("div",{className:"collection-tab-buttons"},c.a.createElement("button",{type:"submit",onClick:function(){f(h),_(!1)}},"Create"),c.a.createElement("button",{type:"button",onClick:function(){return _(!1)}},"Cancel"))):c.a.createElement("div",{className:"collections-tab-view"},c.a.createElement("h2",null,"Collections"),c.a.createElement("div",{className:"collection-tab-tabs"},c.a.createElement("button",{type:"button",onClick:function(){return N("new")},className:"header-button' ".concat("new"===C?"selected":"")},"Create new"),c.a.createElement("button",{type:"button",onClick:function(){return N("existing")},className:"header-button' ".concat("existing"===C?"selected":"")},"Existing Collections")),"new"===C&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"collection-tab-current-collection"},0===p.length?c.a.createElement("div",{className:"datasets-placeholder"},c.a.createElement("h3",null,"No datasets selected"),c.a.createElement("p",null,'Select `"`Add to Collection`"` to begin creating local collections.')):c.a.createElement("ul",null,p.map((function(e){return c.a.createElement("li",{key:e.resource.name,className:"collection-tab-dataset"},c.a.createElement("div",null,c.a.createElement("p",{className:"name"},e.resource.name),c.a.createElement("p",{className:"agency"},S(e))),c.a.createElement("button",{type:"button",onClick:function(){return E(i.id,e.resource.id)}},"Remove"))})))),c.a.createElement("div",{className:"collection-tab-buttons"},c.a.createElement("button",{type:"submit",onClick:function(){return _(!0)}},"Create Collection"))),"existing"===C&&c.a.createElement("div",{className:"collections-tab-existing-collections"},1===a.collections.length?c.a.createElement("div",{className:"datasets-placeholder"},c.a.createElement("h3",null,"No collections yet")):c.a.createElement("ul",{className:"existing-collections-list"},a.collections.filter((function(e){return"pending"!==e.id})).map((function(e){return c.a.createElement("li",{className:"existing-collection"},c.a.createElement("div",{className:"exisiting-colections-deets"},c.a.createElement("p",{className:"name"},e.name),c.a.createElement("p",{className:"dataset-count"}," ",e.datasets.length," ","datasets"," ")),c.a.createElement(o.Link,{to:J(e)},c.a.createElement(m.a,{size:"2x",icon:d.f})))})))))):""}function K(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],l=q(),i=Object(u.a)(l,1)[0];return c.a.createElement("nav",{className:"side-nav"},c.a.createElement(o.Link,{alt:"Data Clinic",className:"title",to:"/"},c.a.createElement("img",{alt:"Data Clinic logo",src:"".concat("/NewYorkOpenDataExplorer","/DataClinicLogo.png")})),c.a.createElement(o.Link,{alt:"Explore",className:"explore",to:"/"},c.a.createElement(m.a,{size:"2x",icon:d.f}),c.a.createElement("h1",null,"Explore")),c.a.createElement("div",{style:{position:"relative"}},i.datasets.length>0&&c.a.createElement("div",{className:"collection-counter"},i.datasets.length),c.a.createElement("button",{onClick:function(){return r(!a)},className:"header-button"},c.a.createElement(m.a,{size:"2x",icon:d.d}),c.a.createElement("h1",null,"Collections")),c.a.createElement(V,{visible:a})),c.a.createElement(o.Link,{alt:"about",className:"about"},c.a.createElement(m.a,{size:"2x",icon:d.g}),c.a.createElement("h1",null,"About Data Clinic")))}a(71);var W=a(42),$=(a(74),function(e){var t=e.permalink;return c.a.createElement("a",{className:"external-link",target:"_blank",rel:"noopener noreferrer",href:t},c.a.createElement("button",{type:"button"},"View on Open Data\xa0",c.a.createElement(m.a,{icon:d.e})))});function Q(e){var t,a=e.dataset,n=e.onAddToCollection,r=e.onRemoveFromCollection,l=e.inCollection,i=e.viewInOpenPortal,s=void 0!==i&&i,u=e.similarity,m=e.query,d=G(a.resource.name,m),E=G(a.resource.description,m);return c.a.createElement("div",{className:"dataset",key:a.resource.id},c.a.createElement("div",{className:"dataset-title"},c.a.createElement(o.Link,{className:"title",to:"/dataset/".concat(a.resource.id)},c.a.createElement("h2",null,d)),c.a.createElement("p",null,a.resource.attribution)),u&&c.a.createElement("p",null,"Similarity: ",(100*u).toPrecision(2),"%"),n&&c.a.createElement("button",{type:"button",onClick:function(){return l?r(a.resource.id):n(a.resource.id)}},l?"Remove from collection":"Add to collection"),s&&c.a.createElement($,{permalink:a.permalink}),c.a.createElement("div",{className:"dataset-last-update"},c.a.createElement("p",{className:"header"},"Last Updated"),c.a.createElement("p",null,(t=a.resource.updatedAt,new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})))),c.a.createElement("div",{className:"dataset-description"},E),c.a.createElement("div",{className:"dataset-meta"},c.a.createElement("div",{className:"update-frequency"},c.a.createElement("span",null,"Update frequency:"),"weekly"),c.a.createElement("div",{className:"dataset-tags"},c.a.createElement("span",null,"Tags:"),a.classification.domain_tags.join(", "))))}a(75);function X(e){var t=e.options,a=e.selected,r=e.direction,l=e.onSelected,o=e.onDirection,i=Object(n.useState)(!1),s=Object(u.a)(i,2),E=s[0],f=s[1];return c.a.createElement("div",{className:"sort-menu ".concat(E?"expanded":"")},c.a.createElement("div",{className:"wrapper"},c.a.createElement("span",null,"Sort By:"),c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return f(!E)}},a),t.filter((function(e){return e!==a})).map((function(e){return c.a.createElement("li",{onClick:function(){l(e),f(!1)},key:e},e," ")}))),c.a.createElement(m.a,{onClick:function(){return o("asc"===r?"desc":"asc")},icon:"asc"===r?d.j:d.i})))}a(76),a(37);var Z=function(){return c.a.createElement("div",{className:"dataset-loading"},c.a.createElement("div",{className:"dataset-list"},Object(E.a)(Array(4)).map((function(e,t){return c.a.createElement("div",{key:t,className:"dataset"},c.a.createElement("div",{className:"dataset-title animate"}),c.a.createElement("p",{className:"dataset-description animate"}),c.a.createElement("div",{className:"dataset-meta animate"}))}))))},ee=a(43),te=a.n(ee);function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=Object(n.useMemo)((function(){return Math.ceil(e.length/t)}),[e,t]),r=Object(n.useState)(0),l=Object(u.a)(r,2),o=l[0],i=l[1];Object(n.useEffect)((function(){i(0)}),[a]);var s=c.a.createElement("nav",null,c.a.createElement(te.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:a,onPageChange:function(e){var t=e.selected;i(t)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",previousClassName:"page-item",nextClassName:"page-item",pageClassName:"page-item"})),m=e.slice(o*t,(o+1)*t);return[m,{pageButtons:s}]}a(80);var ne=function(){return c.a.createElement("div",{className:""},c.a.createElement("div",{className:"filter-loading-wrapper"},Object(E.a)(Array(10)).map((function(e,t){return c.a.createElement("li",{key:t,className:"multi-buttons"},c.a.createElement("input",{type:"checkbox",disabled:!0,className:"checkbox"}),c.a.createElement("span",{className:"animate item-name"}),c.a.createElement("span",{className:"animate pill"}))}))))};a(81);function ce(e){var t=e.items,a=e.selected,r=e.onChange,l=e.title,o=Object(n.useState)(!0),i=Object(u.a)(o,2),s=i[0],m=i[1],d=T(),f=Object(n.useState)(""),b=Object(u.a)(f,2),v=b[0],h=b[1],O=Object(n.useMemo)((function(){return t&&Object.keys(t)}),[t]),g=p()({data:O.map((function(e){return{name:e}})),options:{keys:["name"],shouldSort:!1,findAllMatches:!0,caseSensitive:!1}}),j=g.result,C=g.search;Object(n.useEffect)((function(){return C(v)}),[C,v]);var N=ae(Object(n.useMemo)((function(){return null===j||void 0===j?void 0:j.map((function(e){return e.name})).sort((function(e,a){return t[e]<t[a]?1:-1}))}),[j,t]),10),y=Object(u.a)(N,2),k=y[0],w=y[1].pageButtons;return c.a.createElement("div",{className:"mutli-selector"},c.a.createElement("h2",null,c.a.createElement("button",{className:"header-button",type:"button",onClick:function(){return m(!s)}},l," ",c.a.createElement("span",null," ",s?"+":"-")," ")),!s&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search"},c.a.createElement("input",{disabled:!d,placeholder:"filter",value:v,onChange:function(e){return h(e.target.value)}})),c.a.createElement("ul",{className:"multi-list"},d?k.map((function(e){return c.a.createElement("li",{key:e,onClick:function(){return function(e){var t=a.includes(e)?a.filter((function(t){return t!==e})):[].concat(Object(E.a)(a),[e]);r(t)}(e)},className:"multi-buttons ".concat(a&&a.includes(e)?"selected":"")},c.a.createElement("input",{type:"checkbox",checked:a&&a.includes(e),className:"checkbox"}),c.a.createElement("span",{className:"item-name"},e),c.a.createElement("span",{className:"pill"},t[e]))})):c.a.createElement(ne,null)),w,a&&a.length>0&&c.a.createElement("button",{type:"button",onClick:function(){r([])}},"clear")))}function re(){var e=function(){var e=D();return Object(u.a)(e,1)[0].categories}(),t=function(){var e=D();return Object(u.a)(e,1)[0].tagList}(),a=function(){var e=D();return Object(u.a)(e,1)[0].departments}(),r=function(){var e=D();return Object(u.a)(e,1)[0].columns}(),l=T(),o=Object(n.useState)([]),i=Object(u.a)(o,2),s=i[0],f=i[1],b=Object(n.useState)(!0),v=Object(u.a)(b,2),h=v[0],O=v[1],g=Object(n.useState)([]),j=Object(u.a)(g,2),C=j[0],N=j[1],y=Object(n.useState)([]),k=Object(u.a)(y,2),w=k[0],_=k[1],S=Object(n.useState)([]),A=Object(u.a)(S,2),x=A[0],L=A[1],I=Object(n.useState)(""),M=Object(u.a)(I,2),F=M[0],P=M[1],R=Object(n.useState)("Name"),U=Object(u.a)(R,2),Y=U[0],z=U[1],B=Object(n.useState)("asc"),H=Object(u.a)(B,2),G=H[0],J=H[1],V=q(),K=Object(u.a)(V,2),$=K[0],ee=K[1],te=ee.addToCollection,ne=ee.removeFromCollection,re=function(e){var t=e.tags,a=e.term,c=e.categories,r=e.columns,l=e.departments,o=D(),i=Object(u.a)(o,1)[0].datasets,s=p()({data:i,options:{shouldSort:!0,findAllMatches:!0,includeMatches:!0,keys:["resource.name","resource.description"],caseSensitive:!1}}),m=s.result,d=s.search;return Object(n.useEffect)((function(){d(a)}),[d,a]),Object(n.useMemo)((function(){if(m){var e=m[0]&&m[0].item?m.map((function(e){return e.item})):Object(E.a)(m),a=m&&m[0]&&m[0].item?m.map((function(e){return{id:e.item.resource.id,matches:e.matches}})):[];return t&&t.length>0&&(e=e.filter((function(e){return e.itemclassification.domain_tags.filter((function(e){return t.includes(e)})).length>0}))),c&&c.length>0&&(e=e.filter((function(e){return e.classification.categories.filter((function(e){return c.includes(e)})).length>0}))),r&&r.length>0&&(console.log("filtering with columns ",r),e=e.filter((function(e){return e.resource.columns_name&&e.resource.columns_name.filter((function(e){return r.includes(e)})).length>0}))),l&&l.length>0&&(e=e.filter((function(e){var t;return l.includes(null===(t=e.classification.domain_metadata.find((function(e){return"Dataset-Information_Agency"===e.key})))||void 0===t?void 0:t.value)}))),{datasets:e,matches:a.filter((function(t){return e.find((function(e){return e.resource.id===t.id}))}))}}return i}),[m,t,c,r,l,i])}({tags:s,categories:w,columns:C,term:F,departments:x}).datasets,le=ae(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(n.useMemo)((function(){return e.sort((function(e,n){var c=null,r=null;switch(t){case"Name":c=e.resource.name,r=n.resource.name;break;case"Created At":c=e.resource.createdAt,r=n.resource.createdAt;break;case"Updated At":c=e.resource.updatedAt,r=n.resource.updatedAt;break;case"Downloads":c=e.resource.download_count,r=n.resource.download_count;break;case"Views":c=e.resource.page_views.page_views_total,r=n.resource.page_views.page_views_total}return(c<r?1:-1)*(a?1:-1)}))}),[e,t,a])}(re,Y,"asc"===G),5),oe=Object(u.a)(le,2),ie=oe[0],se=oe[1].pageButtons;return c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"filters ".concat(h?"collapsed":"")},h?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement("button",{onKeyDown:function(){return O(!1)},onClick:function(){return O(!1)},className:"header-button",type:"button"},"Filters"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"filter-header"},c.a.createElement("button",{onKeyDown:function(){return O(!0)},onClick:function(){return O(!0)},className:"header-button",type:"button"},"Filters ",c.a.createElement(m.a,{icon:d.b}))),c.a.createElement("div",{className:"categories"},c.a.createElement(ce,{items:e,onChange:_,selected:w,title:"Categories"})),c.a.createElement("div",{className:"departments"},c.a.createElement(ce,{items:a,selected:x,onChange:L,title:"Departments"})),c.a.createElement("div",{className:"columns"},c.a.createElement(ce,{items:r,selected:C,onChange:N,title:"Columns"})),c.a.createElement("div",{className:"tags"},c.a.createElement(ce,{items:t,selected:s,onChange:f,title:"Tags"})))),c.a.createElement("div",{className:"datasets"},c.a.createElement("div",{className:"search"},c.a.createElement(m.a,{size:"lg",icon:d.h}),c.a.createElement(W.DebounceInput,{type:"text",onChange:function(e){return P(e.target.value)},value:F,debounceTimeout:300,placeholder:"Search for dataset"})),c.a.createElement("div",{className:"count-and-sort"},c.a.createElement("p",null,c.a.createElement("span",{className:"bold"},re.length)," datasets"),c.a.createElement(X,{options:["Name","Created At","Updated At","Downloads","Views"],onDirection:function(e){return J(e)},selected:Y,direction:G,onSelected:function(e){return z(e)}})),c.a.createElement("ul",{className:"dataset-list"},l?ie.map((function(e){var t;return c.a.createElement(Q,{key:null===e||void 0===e?void 0:null===(t=e.resource)||void 0===t?void 0:t.id,dataset:e,inCollection:$.datasets.includes(e.resource.id),onAddToCollection:function(e){return te($.id,e)},onRemoveFromCollection:function(e){return ne($.id,e)},query:F})})):c.a.createElement(Z,null)),c.a.createElement("div",null,se)))}var le=a(44),oe=a.n(le),ie=a(45);a(83);function se(e){var t=e.rightDataset,a=e.joinCol,r=e.parentUniques,l=Object(n.useState)(!0),i=Object(u.a)(l,2),s=i[0],E=i[1],f=function(e,t){var a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){k(e,t).then((function(a){l({dataset:e.resource.id,column:t,distinct:a})}))}),[e,t]),r}(t,a),p=Object(n.useMemo)((function(){return f&&r?r.filter((function(e){return f.distinct.includes(e)})):[]}),[f,r]),b=q(),v=Object(u.a)(b,2),h=v[0],O=v[1],g=O.addToCollection,j=O.removeFromCollection;return c.a.createElement("div",{className:"join-column"},c.a.createElement("div",{className:"join-column-row"},c.a.createElement("span",{onClick:function(){return E(!s)},onKeyDown:function(e){32===e.keycode&&E(!s)},className:"join-column-name",role:"button",tabIndex:"0"},c.a.createElement(m.a,{icon:s?d.c:d.a}),c.a.createElement(m.a,{icon:ie.a}),t.resource.name),c.a.createElement("span",null,p?"".concat(p.length," matching ids"):"loading"),c.a.createElement("span",null,c.a.createElement(o.Link,{to:"/dataset/".concat(t.resource.id)},"View dataset")),c.a.createElement("button",{type:"button",onClick:function(){return h.datasets.includes(t.resource.id)?j(t.resource.id):g(t.resource.id)}},h.datasets.includes(t.resource.id)?"Remove dataset from collection":"Add dataset to collection")),!s&&f&&c.a.createElement("div",{className:"join-column-unique"},c.a.createElement("h3",null,"COMMON IDS"),c.a.createElement("ul",null,p.slice(0,10).map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("div",{className:"bar"}),c.a.createElement(m.a,{icon:d.k}),c.a.createElement("span",null,e))}))),c.a.createElement("div",null,"and ",p.length-10," more")))}a(84);function ue(e){var t=e.column,a=e.joins,r=e.dataset,l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],s=o[1],E=Object(n.useState)(!0),f=Object(u.a)(E,2),p=f[0],b=f[1],v=r.resource.columns_datatype[r.resource.columns_name.indexOf(t)],h=ae(a,10),O=Object(u.a)(h,2),g=O[0],j=O[1].pageButtons;return Object(n.useEffect)((function(){a.length>0&&k(r,t).then((function(e){s(e)}))}),[t,r,a]),c.a.createElement("div",{className:"column-suggestions ".concat(p?"collapsed":"")},c.a.createElement("div",{className:"table-row",role:"button",onKeydown:function(e){36===e.keyCode&&b(!p)},onClick:function(){return b(!p)},tabIndex:"0"},c.a.createElement("span",{className:"column-collapse"},c.a.createElement(m.a,{icon:p?d.c:d.a})," ",t),c.a.createElement("span",null,v),c.a.createElement("span",null,a.length," datasets also have this column")),!p&&g&&c.a.createElement("div",{className:"columns-suggestions-matches"},c.a.createElement("h3",null,"MATCHING DATSETS"),a&&c.a.createElement("ul",null,g.map((function(e){return c.a.createElement("li",{key:e.dataset.resource.id},c.a.createElement(se,{leftDataset:r,rightDataset:e.dataset,joinCol:t,parentUniques:i}))}))),j))}a(85);function me(e){var t=e.dataset,a=e.joinColumns,r=t.resource.columns_name,l=Object(n.useCallback)((function(e,t){return r?t.filter((function(t){return t.joinableColumns.includes(e.toLowerCase())})):[]}),[r]),o=Object(n.useMemo)((function(){return a?r.sort((function(e,t){return l(e,a).length<l(t,a).length?1:-1})):[]}),[r,a,l]);return c.a.createElement("div",{className:"column-match-table"},c.a.createElement("div",{className:"table-header"},c.a.createElement("ul",{className:"table-row"},c.a.createElement("li",null,"Column name"),c.a.createElement("li",null,"Column type"),c.a.createElement("li",null,"No potential joins"))),o.map((function(e){return c.a.createElement(ue,{dataset:t,column:e,joins:l(e,a)})})))}a(86);var de=function(e){var t=e.currentPage;return c.a.createElement("div",{className:"Breadcrumb"},c.a.createElement(o.Link,{to:"/"},"Home"),c.a.createElement("span",null," / ",t))},Ee=(a(87),function(e){return oe()(e).format("MMMM DD, YYYY")});function fe(e){var t,a,r,l=e.match.params.datasetID,o=function(e){var t=D();return Object(u.a)(t,1)[0].datasets.find((function(t){return t.resource.id===e}))}(l),i=x(o),s=Object(n.useState)("joins"),m=Object(u.a)(s,2),d=m[0],E=m[1],f=null===o||void 0===o?void 0:o.resource,p=null===f||void 0===f?void 0:f.page_views,b=null===o||void 0===o?void 0:o.classification,v=null===b||void 0===b?void 0:b.domain_metadata,h=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],r=a[1],l=D(),o=Object(u.a)(l,1)[0].datasets;return Object(n.useEffect)((function(){fetch("".concat("/NewYorkOpenDataExplorer","/similarity_metrics.json")).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),console.log("datasets ",o,c),Object(n.useMemo)((function(){return c[e]&&o&&o.length>0?c[e].map((function(e){return{similarity:e.similarity,dataset:o.find((function(t){return t.resource.id===e.dataset}))}})):[]}),[c,e,o])}(l).filter((function(e){return e.dataset.resource.id!==l})).slice(0,10),O=q(),g=Object(u.a)(O,2),j=g[0],C=g[1],N=C.addToCollection,y=C.removeFromCollection,k=null===v||void 0===v?void 0:null===(t=v.find((function(e){var t=e.key,a=e.value;return"Update_Automation"===t&&"No"===a})))||void 0===t?void 0:t.value,w=null===v||void 0===v?void 0:null===(a=v.find((function(e){return"Update_Update-Frequency"===e.key})))||void 0===a?void 0:a.value,_=null===v||void 0===v?void 0:null===(r=v.find((function(e){return"Dataset-Information_Agency"===e.key})))||void 0===r?void 0:r.value;return o?c.a.createElement("div",{className:"dataset-page"},c.a.createElement("div",{className:"dataset-details"},c.a.createElement("section",null,c.a.createElement(de,{currentPage:f.name})),c.a.createElement("section",null,c.a.createElement("h2",null,f.name),c.a.createElement("p",null,_),c.a.createElement(H,{html:f.description}),c.a.createElement("button",{type:"button",className:"collection-button",onClick:function(){return j.datasets.includes(l)?y(j.id,l):N(j.id,l)}},j.datasets.includes(l)?"Remove From Collection":"Add to Collection"," ")),c.a.createElement("section",{className:"external-link"},c.a.createElement("p",null,"Powered by"),c.a.createElement("img",{alt:"NYC Open Data",src:"https://opendata.cityofnewyork.us/wp-content/themes/opendata-wp/assets/img/nyc-open-data-logo.svg"}),c.a.createElement($,{permalink:o.permalink})),c.a.createElement("section",{className:"metadata"},c.a.createElement("h2",null,"Metadata"),c.a.createElement("h3",null,"Update Automation"),c.a.createElement("p",null,k),c.a.createElement("h3",null,"Update Frequency"),c.a.createElement("p",null,w),c.a.createElement("h3",null,"Dataset Owner"),c.a.createElement("p",null,null===o||void 0===o?void 0:o.owner.display_name),_&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Agency"),c.a.createElement("p",null,_)),(null===b||void 0===b?void 0:b.domain_category)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Category"),c.a.createElement("p",null,b.domain_category)),c.a.createElement("h3",null,"Updated"),c.a.createElement("p",null,Ee(null===f||void 0===f?void 0:f.updatedAt)),c.a.createElement("h3",null,"Metadata Updated at"),c.a.createElement("p",null,Ee(null===f||void 0===f?void 0:f.metadata_updated_at)),c.a.createElement("h3",null,"Page Views"),c.a.createElement("p",null,null===p||void 0===p?void 0:p.page_views_total))),c.a.createElement("div",{className:"dataset-recomendataions"},c.a.createElement("h2",null,"Other datasets to consider"),c.a.createElement("div",{className:"tabs"},c.a.createElement("button",{type:"button",className:"joins"===d?"active":"",onClick:function(){return E("joins")}},"Potential Join Columns"),c.a.createElement("button",{type:"button",className:"theme"===d?"active":"",onClick:function(){return E("theme")}},"Thematically Similar")),"joins"===d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Find datasets that share a column with the current dataset. These columns might be interesting datasets to join with the current dataset to add additional details or bring in context"),c.a.createElement(me,{dataset:o,joinColumns:i})),"theme"===d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Dataset that are thematically similar based on name and description"),h.map((function(e){return c.a.createElement(Q,{onAddToCollection:N,onRemoveFromCollection:y,dataset:e.dataset,similarity:e.similarity,inCollection:j.datasets.includes(e.dataset.resource.id)})}))))):c.a.createElement("h1",null,"Loading...")}a(88);var pe=a(96),be=a(97),ve=a(98),he=a(99),Oe=a(100),ge=a(101),je=function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!navigator.clipboard){a.next=9;break}return a.prev=1,a.next=4,g.a.awrap(navigator.clipboard.writeText(e));case 4:return a.abrupt("return",!0);case 7:a.prev=7,a.t0=a.catch(1);case 9:if(!document.queryCommandSupported||!document.queryCommandSupported("copy")){a.next=26;break}return(t=document.createElement("textarea")).style.opacity="0",t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select(),a.prev=16,a.abrupt("return",document.execCommand("copy"));case 20:return a.prev=20,a.t1=a.catch(16),a.abrupt("return",!1);case 23:return a.prev=23,document.body.removeChild(t),a.finish(23);case 26:return a.abrupt("return",!1);case 27:case"end":return a.stop()}}),null,null,[[1,7],[16,20,23,26]])};function Ce(e){var t=e.match.params,a=t.name,r=t.datasetIDs,l=window.location.href,o=L(r.split(",")),i=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1];return[c,function(){return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.awrap(je(e));case 2:r(!0);case 3:case"end":return t.stop()}}))}]}(l),s=Object(u.a)(i,2),m=s[0],d=s[1];return c.a.createElement("div",{className:"collections-page"},c.a.createElement("div",{className:"collections-details"},c.a.createElement("section",null,c.a.createElement(de,{currentPage:"Collections"})),c.a.createElement("section",null,c.a.createElement("h2",null,a),c.a.createElement("p",null,o.length," dataset",o.length>1?"s":"")),c.a.createElement("div",null,c.a.createElement("h3",null,"Share this collection:"),c.a.createElement("p",{className:"dataset-url"},l," "),c.a.createElement("button",{type:"button",onClick:d},"Copy link"),c.a.createElement("span",null,m?"Copied!":" "," "),c.a.createElement("p",{className:"share-icons"},c.a.createElement(pe.a,{url:l},c.a.createElement(be.a,{size:36}))," ",c.a.createElement(ve.a,{url:l},c.a.createElement(he.a,{size:36})),c.a.createElement(Oe.a,{url:l},c.a.createElement(ge.a,{size:36}))))),c.a.createElement("div",{className:"collections-content"},o.map((function(e){return c.a.createElement(Q,{viewInOpenPortal:!0,key:e.id,dataset:e})}))))}a(92);function Ne(){var e=q(),t=Object(u.a)(e,2),a=t[0],n=t[1],r=n.clearCollection,l=n.setName,i=L(a.datasets);return c.a.createElement("div",{className:"create-collection-modal"},c.a.createElement("h3",null,"Create collection with the following datasets"),c.a.createElement("ul",null,i.map((function(e){return c.a.createElement("li",null,e.resource.name)}))),c.a.createElement("input",{type:"text",placeholder:"Name",value:a.name,onChange:function(e){return l(e.target.value)}}),c.a.createElement(o.Link,{to:"/collection/".concat(a.name,"/").concat(a.datasets.join(","))},c.a.createElement("button",{type:"submit",onClick:r},"Create")))}function ye(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=sessionStorage.redirect;if(delete sessionStorage.redirect,e&&e!==window.location.href){var t=e;t="/".concat(t.split("/").slice(4).join("/")),r(t)}}),[]),a?c.a.createElement(i.c,{to:a}):c.a.createElement(c.a.Fragment,null)}a(93);var ke=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.BrowserRouter,{basename:"/NewYorkOpenDataExplorer"},c.a.createElement(s.ModalContainer,null),c.a.createElement(K,null),c.a.createElement("div",{className:"content"},c.a.createElement(ye,null),c.a.createElement(i.g,null,c.a.createElement(i.d,{path:"/",exact:!0,component:re}),c.a.createElement(i.d,{path:"/dataset/:datasetID",exact:!0,component:fe}),c.a.createElement(i.d,{path:"/collection/:name/:datasetIDs",exact:!0,component:Ce}),c.a.createElement(s.ModalRoute,{path:"/collection/new",parentPath:"/",component:Ne}),c.a.createElement(i.c,{from:"/",to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(A,S),r=Object(u.a)(a,2),l=r[0],o=r[1];Object(n.useEffect)((function(){w.SocrataCache.get(1).then((function(e){if(e){var t=JSON.parse(e.data);o({type:"HYDRATE_STATE",payload:Object(b.a)({},S,{},t,{cache_loaded:!0})}),o({type:"SET_LOADED"})}else(function(){var e,t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.awrap(C(0,1));case 2:return e=n.sent,t=e.resultSetSize,a=Math.ceil(t/100),n.abrupt("return",Promise.all(Object(E.a)(Array(a)).map((function(e,t){return C(t).then((function(e){return e.results}))}))).then((function(e){return e.reduce((function(e,t){return[].concat(Object(E.a)(t),Object(E.a)(e))}),[])})));case 6:case"end":return n.stop()}}))})().then((function(e){var t=function(e){var t={};return e.forEach((function(e){e.classification.domain_tags&&e.classification.domain_tags.forEach((function(e){e in t?t[e]+=1:t[e]=1}))})),t}(e),a=function(e){return e.reduce((function(e,t){return[].concat(Object(E.a)(e),Object(E.a)(t.classification.categories?t.classification.categories:[]))}),[]).reduce((function(e,t){return t in e?Object(b.a)({},e,Object(h.a)({},t,e[t]+1)):Object(b.a)({},e,Object(h.a)({},t,1))}),{})}(e),n=function(e){return e.map((function(e){return e.classification.domain_metadata.find((function(e){return"Dataset-Information_Agency"===e.key}))})).filter((function(e){return e})).map((function(e){return e.value})).reduce((function(e,t){return t in e?Object(b.a)({},e,Object(h.a)({},t,e[t]+1)):Object(b.a)({},e,Object(h.a)({},t,1))}),{})}(e),c=function(e){var t={};return e.forEach((function(e){e.resource.columns_name&&e.resource.columns_name.forEach((function(e){e in t?t[e]+=1:t[e]=1}))})),t}(e);o({type:"UPDATE_OPEN_DATASET_MANIFEST",payload:e}),o({type:"UPDATE_TAGS",payload:t}),o({type:"UPDATE_CATEGORIES",payload:a}),o({type:"UPDATE_DEPARTMENTS",payload:n}),o({type:"UPDATE_COLUMNS",payload:c}),o({type:"SET_LOADED"})}))}))}),[]);var i=l.datasets,s=l.tagList,m=l.columns,d=l.categories,f=l.departments,p=l.stateLoaded;return Object(n.useEffect)((function(){p&&(console.log("writing cache"),w.SocrataCache.put({data:JSON.stringify({datasets:i,tagList:s,categories:d,departments:f,columns:m}),id:1}))}),[i,s,d,m,f,p]),c.a.createElement(_.Provider,{value:[l,o]},t)}),null,c.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(U,P),r=Object(u.a)(a,2),l=r[0],o=r[1],i=l.cacheLoaded,s=l.collections,m=l.activeCollectionID;return Object(n.useEffect)((function(){R.CollectionCache.get(1).then((function(e){if(e){var t=JSON.parse(e.data);o({type:"HYDRATE_STATE",payload:Object(b.a)({},P,{},t,{cacheLoaded:!0})})}else o({payload:Object(b.a)({},P,{cacheLoaded:!0}),type:"HYDRATE_STATE"})}))}),[]),Object(n.useEffect)((function(){i&&R.CollectionCache.put({data:JSON.stringify({collections:s,activeCollectionID:m}),id:1})}),[i,s,m]),c.a.createElement(F.Provider,{value:[l,o]},t)}),null,c.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d8d029c1.chunk.js.map