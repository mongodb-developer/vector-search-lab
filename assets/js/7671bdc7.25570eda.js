"use strict";(self.webpackChunkvector_search_lab=self.webpackChunkvector_search_lab||[]).push([[348],{4559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"optimizing-vector-search/vector-quantization","title":"\ud83d\udc50 Vector quantization","description":"Vector quantization is a technique to reduce the number of bits required to represent a vector. This can help reduce the storage and memory requirements for vector embeddings.","source":"@site/docs/40-optimizing-vector-search/4-vector-quantization.mdx","sourceDirName":"40-optimizing-vector-search","slug":"/optimizing-vector-search/vector-quantization","permalink":"/vector-search-lab/docs/optimizing-vector-search/vector-quantization","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/40-optimizing-vector-search/4-vector-quantization.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udc50 Changing the similarity metric","permalink":"/vector-search-lab/docs/optimizing-vector-search/similarity-functions"},"next":{"title":"Other Search Techniques in MongoDB","permalink":"/vector-search-lab/docs/category/other-search-techniques-in-mongodb"}}');var o=t(4848),r=t(8453);const s={},a="\ud83d\udc50 Vector quantization",c={},d=[];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-vector-quantization",children:"\ud83d\udc50 Vector quantization"})}),"\n",(0,o.jsx)(n.p,{children:"Vector quantization is a technique to reduce the number of bits required to represent a vector. This can help reduce the storage and memory requirements for vector embeddings."}),"\n",(0,o.jsxs)(n.p,{children:["To enable vector auto-quantization on your embeddings, simply set the ",(0,o.jsx)(n.code,{children:"quantization"})," field to one of the supported quantization types (",(0,o.jsx)(n.code,{children:"scalar or "}),"binary`) in the vector search index definition."]}),"\n",(0,o.jsxs)(n.p,{children:["Fill in any ",(0,o.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,o.jsx)(n.strong,{children:"Step 9: Enable vector quantization"})," section in the notebook to enable auto-quantization on your embeddings."]}),"\n",(0,o.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CODE_BLOCK_16"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "name": ATLAS_VECTOR_SEARCH_INDEX_NAME,\n    "type": "vectorSearch",\n    "definition": {\n        "fields": [\n            {\n                "type": "vector",\n                "path": "embedding",\n                "numDimensions": 512,\n                "similarity": "cosine",\n                "quantization": "scalar",\n            },\n        ]\n    },\n}\n'})})})]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Notice the slight increase in the size of the vector search index upon enabling quantization. This is because full-fidelity vectors are also stored on disk for re-scoring and/or exact nearest neighbors (ENN) search, with minimal RAM/cache usage when used for re-scoring. Hence, it is important to ensure an appropriate disk",":RAM"," ratio on your hardware when enabling quantization."]})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);