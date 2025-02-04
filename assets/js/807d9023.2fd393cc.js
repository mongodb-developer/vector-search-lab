"use strict";(self.webpackChunkvector_search_lab=self.webpackChunkvector_search_lab||[]).push([[828],{1954:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"optimizing-vector-search/pre-filtering","title":"\ud83d\udc50 Pre-filtering","description":"Pre-filtering is a technique to optimize vector search by only considering documents that match certain criteria during vector search.","source":"@site/docs/40-optimizing-vector-search/2-pre-filtering.mdx","sourceDirName":"40-optimizing-vector-search","slug":"/optimizing-vector-search/pre-filtering","permalink":"/vector-search-lab/docs/optimizing-vector-search/pre-filtering","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/40-optimizing-vector-search/2-pre-filtering.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcd8 Lecture notes","permalink":"/vector-search-lab/docs/optimizing-vector-search/lecture-notes"},"next":{"title":"\ud83d\udc50 Changing the similarity metric","permalink":"/vector-search-lab/docs/optimizing-vector-search/similarity-functions"}}');var i=r(4848),s=r(8453);const c={},o="\ud83d\udc50 Pre-filtering",a={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-pre-filtering",children:"\ud83d\udc50 Pre-filtering"})}),"\n",(0,i.jsx)(n.p,{children:"Pre-filtering is a technique to optimize vector search by only considering documents that match certain criteria during vector search."}),"\n",(0,i.jsxs)(n.p,{children:["Fill in any ",(0,i.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,i.jsx)(n.strong,{children:"Step 7: Adding pre-filters to your vector search"})," section in the notebook to experiment with combining pre-filters with your vector search queries."]}),"\n",(0,i.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CODE_BLOCK_11"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Answer"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'{\n    "name": ATLAS_VECTOR_SEARCH_INDEX_NAME,\n    "type": "vectorSearch",\n    "definition": {\n        "fields": [\n            {\n                "type": "vector",\n                "path": "embedding",\n                "numDimensions": 512,\n                "similarity": "cosine",\n            },\n            {"type": "filter", "path": "year"},\n        ]\n    },\n}\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CODE_BLOCK_12"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Answer"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'{"year": {"$gte": 2000}}\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CODE_BLOCK_13"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Answer"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'{\n    "name": ATLAS_VECTOR_SEARCH_INDEX_NAME,\n    "type": "vectorSearch",\n    "definition": {\n        "fields": [\n            {\n                "type": "vector",\n                "path": "embedding",\n                "numDimensions": 512,\n                "similarity": "cosine",\n            },\n            {"type": "filter", "path": "year"},\n            {"type": "filter", "path": "pages"},\n        ]\n    },\n}\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CODE_BLOCK_14"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Answer"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'{"$and": [{"year": {"$gte": 2000}}, {"pages": {"$lte": 100}}]}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);