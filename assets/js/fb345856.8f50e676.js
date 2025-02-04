"use strict";(self.webpackChunkvector_search_lab=self.webpackChunkvector_search_lab||[]).push([[460],{7919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"optimizing-vector-search/lecture-notes","title":"\ud83d\udcd8 Lecture notes","description":"There are several ways to tune and optimize your vector search queries. In this lab, we will focus on the following:","source":"@site/docs/40-optimizing-vector-search/1-lecture-notes.mdx","sourceDirName":"40-optimizing-vector-search","slug":"/optimizing-vector-search/lecture-notes","permalink":"/vector-search-lab/docs/optimizing-vector-search/lecture-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/40-optimizing-vector-search/1-lecture-notes.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Optimizing Your Vector Search Queries","permalink":"/vector-search-lab/docs/category/optimizing-your-vector-search-queries"},"next":{"title":"\ud83d\udc50 Pre-filtering","permalink":"/vector-search-lab/docs/optimizing-vector-search/pre-filtering"}}');var i=n(4848),o=n(8453);const s={},c="\ud83d\udcd8 Lecture notes",a={},l=[{value:"Adding pre-filters to vector search",id:"adding-pre-filters-to-vector-search",level:2},{value:"Changing the similarity metric for vector search",id:"changing-the-similarity-metric-for-vector-search",level:2},{value:"Vector quantization",id:"vector-quantization",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"-lecture-notes",children:"\ud83d\udcd8 Lecture notes"})}),"\n",(0,i.jsx)(t.p,{children:"There are several ways to tune and optimize your vector search queries. In this lab, we will focus on the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Adding pre-filters to vector search"}),"\n",(0,i.jsx)(t.li,{children:"Changing the similarity metric for vector search"}),"\n",(0,i.jsx)(t.li,{children:"Vector quantization"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"adding-pre-filters-to-vector-search",children:"Adding pre-filters to vector search"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(1460).A+"",width:"1952",height:"1045"})}),"\n",(0,i.jsx)(t.p,{children:"Pre-filtering allows you to filter the vector search results based on certain business logic, recency etc. In MongoDB, vector search pre-filtering works as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"First, the filters are applied to your complete corpus to produce a filtered set of documents"}),"\n",(0,i.jsx)(t.li,{children:"If the number of filtered documents is less than the number of vectors or results to be returned, an exact nearest neighbor (ENN) search is performed"}),"\n",(0,i.jsx)(t.li,{children:"If the number of filtered documents is more than the number of documents to be returned, an approximate nearest neighbor (ANN) search is performed and when the HNSW graph is traversed, it only considers doc IDs that are present in this filtered set"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This way, as long as the filters aren't too restrictive, pre-filtering can improve the latency as well as accuracy of the vector search."}),"\n",(0,i.jsx)(t.p,{children:"To add pre-filters to vector search in MongoDB, you need to do the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Update the vector search index to include the appropriate filter fields, for example:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"{\n  \u201cfields\u201d:[\n    {\n      \u201ctype\u201d: \u201cvector\u201d,\n      \u201cpath\u201d: \u201cembedding\u201d,\n      \u201cnumDimensions\u201d: 1536,\n      \u201csimilarity\u201d: \u201ccosine\u201d\n    },\n    {\n      \u201ctype\u201d: \u201cfilter\u201d,\n      \u201cpath\u201d: \u201cpages\u201d\n    },\n    ...\n  ]\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Update the ",(0,i.jsx)(t.code,{children:"$vectorSearch"})," stage in the aggregation pipeline definition to include the pre-filters, for example:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"[\n  {\n    \u201c$vectorSearch\u201d: {\n      \u201cindex\u201d: \u201cvector_index\u201d, \n      \u201cpath\u201d: \u201cembedding\u201d, \n      \u201cfilter\u201d: {\u201cpages\u201d: 100}, \n      \u201cqueryVector\u201d: [0.02421053, -0.022372592,...], \n      \u201cnumCandidates\u201d: 150, \n      \u201climit\u201d: 10\n    }\n  }, \n  {\n    \u201c$project\u201d: {\n      \u201c_id\u201d: 0, \n      \u201cContent\u201d: 1,\n      \u201cscore\u201d: {\u201c$meta\u201d: \u201cvectorSearchScore\u201d}\n    }\n  }\n]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"changing-the-similarity-metric-for-vector-search",children:"Changing the similarity metric for vector search"}),"\n",(0,i.jsx)(t.p,{children:"The similarity metric determines how nearest neighbors are calculated, and consequently what items are retrieved during vector search. MongoDB Atlas Vector Search supports the following metrics:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"euclidean"}),": Useful when differences in numerical values is meaningful"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cosine"}),": Useful when only relative relationships matter"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dotProduct"}),": If you want to emphasize not only the similarity in vector space but also on dominant features"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To change the similarity metric for vector search, simply update the ",(0,i.jsx)(t.code,{children:"similarity"})," field in the vector search index definition."]}),"\n",(0,i.jsxs)(t.p,{children:["Refer to our ",(0,i.jsx)(t.a,{href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-type/#std-label-avs-similarity-functions",children:"documentation"})," to learn more about the different metrics."]}),"\n",(0,i.jsx)(t.h2,{id:"vector-quantization",children:"Vector quantization"}),"\n",(0,i.jsx)(t.p,{children:"Quantization is the process of shrinking full-fidelity vectors into fewer bits. This can help reduce the storage and memory requirements for vector embeddings. MongoDB Atlas Vector Search supports two types of quantization:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"scalar"}),": Takes each vector dimension and buckets it into a smaller set of discrete integers"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"binary"}),": Sets each vector dimension to a binary value based on a threshold"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To enable vector auto-quantization on your embeddings, simply set the ",(0,i.jsx)(t.code,{children:"quantization"})," field to one of the above supported quantization types in the vector search index definition, for example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"{\n  \u201cfields\u201d:[\n    {\n      \u201ctype\u201d: \u201cvector\u201d,\n      \u201cpath\u201d: \u201cembedding\u201d,\n      \u201cnumDimensions\u201d:512,\n      \u201csimilarity\u201d: \u201ccosine\u201d,\n      \u201cquantization\u201d: \u201cscalar\u201d\n    },\n    ...\n  ]\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Refer to our ",(0,i.jsx)(t.a,{href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-quantization/",children:"documentation"})," to learn more about vector quantization."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1460:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pre-filtering-2b926d8476e364538d09a0f7417cccd3.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);