(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(60),n(32),n(23),n(24),n(61),n(0);var r=n(235);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={id:"heap",title:"Heap"},i=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={rightToc:i},l="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"study-links"},"Study links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://medium.com/basecs/learning-to-love-heaps-cef2b273a238"}),"Learning to Love Heaps"))),Object(r.b)("h2",{id:"notes"},"Notes"),Object(r.b)("p",null,"If you see a top or lowest ",Object(r.b)("em",{parentName:"p"},"k")," being mentioned in the question, it is usually a signal that a heap can be used to solve the problem, such as in ",Object(r.b)("a",a({parentName:"p"},{href:"https://leetcode.com/problems/top-k-frequent-elements/"}),"Top K Frequent Elements"),"."),Object(r.b)("p",null,"If you require the top ",Object(r.b)("em",{parentName:"p"},"k")," elements use a Min Heap of size ",Object(r.b)("em",{parentName:"p"},"k"),". Iterate through each element, pushing it into the heap. Whenever the heap size exceeds ",Object(r.b)("em",{parentName:"p"},"k"),", remove the minimum element, that will guarantee that you have the ",Object(r.b)("em",{parentName:"p"},"k")," largest elements."),Object(r.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode.com/problems/merge-k-sorted-lists/"}),"Merge K Sorted Lists")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode.com/problems/top-k-frequent-elements/"}),"Top K Frequent Elements")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode.com/problems/find-median-from-data-stream/"}),"Find Median from Data Stream"))))}p.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),u=r,m=s[c+"."+u]||s[u]||p[u]||o;return n?a.a.createElement(m,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(m,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);