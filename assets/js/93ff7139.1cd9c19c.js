"use strict";(self.webpackChunkvector_search_lab=self.webpackChunkvector_search_lab||[]).push([[843],{1142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"perform-semantic-search/generate-embeddings","title":"\ud83d\udc50 Generate embeddings","description":"Let\'s imagine you\'re running an online bookstore and want your users to be able to search for books using semantic search. Semantic search allows you to search not just using text, but also other modalities such as images, audio, video etc.","source":"@site/docs/30-perform-semantic-search/2-generate-embeddings.mdx","sourceDirName":"30-perform-semantic-search","slug":"/perform-semantic-search/generate-embeddings","permalink":"/vector-search-lab/docs/perform-semantic-search/generate-embeddings","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/30-perform-semantic-search/2-generate-embeddings.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udc50 Import data into MongoDB","permalink":"/vector-search-lab/docs/perform-semantic-search/import-data"},"next":{"title":"\ud83d\udc50 Add embeddings to the data","permalink":"/vector-search-lab/docs/perform-semantic-search/add-embeddings"}}');var r=t(4848),o=t(8453);const a={},i="\ud83d\udc50 Generate embeddings",c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-generate-embeddings",children:"\ud83d\udc50 Generate embeddings"})}),"\n",(0,r.jsx)(n.p,{children:"Let's imagine you're running an online bookstore and want your users to be able to search for books using semantic search. Semantic search allows you to search not just using text, but also other modalities such as images, audio, video etc."}),"\n",(0,r.jsxs)(n.p,{children:["In this lab, you will see how to enable search using text as well as images. We will use ",(0,r.jsx)(n.a,{href:"https://huggingface.co/sentence-transformers/clip-ViT-B-32",children:"CLIP"}),", a multimodal embedding model that can handle both images and text."]}),"\n",(0,r.jsxs)(n.p,{children:["Fill in any ",(0,r.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,r.jsx)(n.strong,{children:"Step 3: Generating Embeddings"})," section in the notebook to see how to embed text and images using the CLIP model."]}),"\n",(0,r.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_2"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"embedding_model.encode(image).tolist()\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);