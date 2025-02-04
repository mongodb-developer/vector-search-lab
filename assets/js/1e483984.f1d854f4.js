"use strict";(self.webpackChunkvector_search_lab=self.webpackChunkvector_search_lab||[]).push([[513],{926:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"perform-semantic-search/create-vector-index","title":"\ud83d\udc50 Create a vector search index","description":"To retrieve documents from MongoDB using vector search, you must configure a vector search index on the collection into which you ingested your data.","source":"@site/docs/30-perform-semantic-search/3-create-vector-index.mdx","sourceDirName":"30-perform-semantic-search","slug":"/perform-semantic-search/create-vector-index","permalink":"/vector-search-lab/docs/perform-semantic-search/create-vector-index","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/30-perform-semantic-search/3-create-vector-index.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udc50 Add embeddings to the data","permalink":"/vector-search-lab/docs/perform-semantic-search/add-embeddings"},"next":{"title":"\ud83d\udc50 Perform semantic search queries","permalink":"/vector-search-lab/docs/perform-semantic-search/run-vector-search-queries"}}');var o=t(4848),s=t(8453);const c={},a="\ud83d\udc50 Create a vector search index",i={},d=[];function h(e){const r={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:t,Screenshot:n}=r;return t||m("Details",!0),n||m("Screenshot",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"-create-a-vector-search-index",children:"\ud83d\udc50 Create a vector search index"})}),"\n",(0,o.jsx)(r.p,{children:"To retrieve documents from MongoDB using vector search, you must configure a vector search index on the collection into which you ingested your data."}),"\n",(0,o.jsx)(r.p,{children:"You can create vector search indexes using the Atlas web UI, Atlas CLI, Compass, or any MongoDB driver. We'll create a vector search index using the Python driver."}),"\n",(0,o.jsxs)(r.p,{children:["Fill in any ",(0,o.jsx)(r.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,o.jsx)(r.strong,{children:"Step 5: Create a vector search index"})," section in the notebook to create a vector search index on the ",(0,o.jsx)(r.code,{children:"books"})," collection."]}),"\n",(0,o.jsx)(r.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"CODE_BLOCK_7"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"collection.create_search_index(model=model)\n"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["To verify that the index was created, navigate to the ",(0,o.jsx)(r.strong,{children:"Overview"})," page in the Atlas UI. In the ",(0,o.jsx)(r.strong,{children:"Clusters section"}),", select your cluster and click ",(0,o.jsx)(r.strong,{children:"Browse collections"}),"."]}),"\n",(0,o.jsx)(n,{url:"https://cloud.mongodb.com",src:"img/screenshots/30-perform-semantic-search/3-create-vector-index/1-browse-collections.png",alt:"Browse collections"}),"\n",(0,o.jsxs)(r.p,{children:["Navigate to ",(0,o.jsx)(r.strong,{children:"Search Indexes"})," for the ",(0,o.jsx)(r.em,{children:"books"})," collection in the ",(0,o.jsx)(r.em,{children:"mongodb_genai_devday"})," database."]}),"\n",(0,o.jsx)(n,{url:"https://cloud.mongodb.com",src:"img/screenshots/30-perform-semantic-search/3-create-vector-index/2-nav-search-indexes.png",alt:"Navigate to search indexes"}),"\n",(0,o.jsxs)(r.p,{children:["The index is ready to use once the status changes from ",(0,o.jsx)(r.strong,{children:"PENDING"})," to ",(0,o.jsx)(r.strong,{children:"READY"}),". Also note the size of the index."]}),"\n",(0,o.jsx)(n,{url:"https://cloud.mongodb.com",src:"img/screenshots/30-perform-semantic-search/3-create-vector-index/3-index-ready.png",alt:"Index ready to use"})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function m(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>a});var n=t(6540);const o={},s=n.createContext(o);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);