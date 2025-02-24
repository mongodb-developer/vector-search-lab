"use strict";(self.webpackChunkvector_search_lab=self.webpackChunkvector_search_lab||[]).push([[966],{3985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"dev-env/dev-env-setup","title":"\ud83d\udc50 Setup dev environment","description":"In this lab, we will be using Jupyter Notebooks, which is an interactive Python environment. If you are new to Jupyter Notebooks, use this guide to familiarize yourself with the environment.","source":"@site/docs/30-dev-env/2-dev-env-setup.mdx","sourceDirName":"30-dev-env","slug":"/dev-env/dev-env-setup","permalink":"/vector-search-lab/docs/dev-env/dev-env-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/30-dev-env/2-dev-env-setup.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcd8 Running Jupyter Notebooks","permalink":"/vector-search-lab/docs/dev-env/jupyter-notebooks"},"next":{"title":"\ud83d\udc50 Setup prerequisites","permalink":"/vector-search-lab/docs/dev-env/setup-pre-reqs"}}');var o=t(4848),r=t(8453),i=t(2763);const l={},c="\ud83d\udc50 Setup dev environment",a={},d=[{value:"Option 1: GitHub Codespaces",id:"option-1-github-codespaces",level:2},{value:"Option 2: Run locally",id:"option-2-run-locally",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-setup-dev-environment",children:"\ud83d\udc50 Setup dev environment"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["In this lab, we will be using Jupyter Notebooks, which is an interactive Python environment. If you are new to Jupyter Notebooks, use ",(0,o.jsx)("a",{href:"./jupyter-notebooks",children:"this"})," guide to familiarize yourself with the environment."]})}),"\n",(0,o.jsx)(n.h2,{id:"option-1-github-codespaces",children:"Option 1: GitHub Codespaces"}),"\n",(0,o.jsx)(n.p,{children:"You will be working in a Jupyter Notebook in a GitHub Codespace throughout this lab. A codespace is a cloud-hosted, containerized development environment that comes pre-configured with all the tools you need to run this lab."}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.a,{href:"https://github.com/codespaces/new/mongodb-developer/genai-devday-notebooks?quickstart=1",children:"this"})," link. You will be prompted to sign into GitHub if you haven't already. Once signed in, click the ",(0,o.jsx)(n.strong,{children:"Create new codespace"})," button to create a new codespace."]}),"\n",(0,o.jsx)(i.A,{url:"https://github.com/codespaces",src:"img/screenshots/30-dev-env/2-dev-env-setup/1-create-codespace.png",alt:"Start a codespace"}),"\n",(0,o.jsx)(n.p,{children:"Let it run for a few seconds as it prepares your environment. It will clone the repository, prepare the container, and run the installation scripts. Once the environment is built, you should see a list of files appear under the Explorer."}),"\n",(0,o.jsxs)(n.p,{children:["In the left navigation bar of the IDE, click on the file named ",(0,o.jsx)(n.code,{children:"vector-search-lab.ipynb"})," to open the Jupyter Notebook for this lab."]}),"\n",(0,o.jsx)(i.A,{url:"https://github.com/codespaces",src:"img/screenshots/30-dev-env/2-dev-env-setup/2-nav-notebook.png",alt:"Navigate to the notebook"}),"\n",(0,o.jsxs)(n.p,{children:["Next, select the Python interpreter by clicking ",(0,o.jsx)(n.strong,{children:"Select Kernel"})," at the top right of the IDE."]}),"\n",(0,o.jsx)(i.A,{url:"https://github.com/codespaces",src:"img/screenshots/30-dev-env/2-dev-env-setup/3-select-kernel.png",alt:"Select kernel"}),"\n",(0,o.jsxs)(n.p,{children:["In the modal that appears, click ",(0,o.jsx)(n.strong,{children:"Python environments..."})," and select the interpreter that is marked as ",(0,o.jsx)(n.strong,{children:"Recommended"})," or ",(0,o.jsx)(n.strong,{children:"Global Env"}),"."]}),"\n",(0,o.jsx)(i.A,{url:"https://github.com/codespaces",src:"img/screenshots/30-dev-env/2-dev-env-setup/4-python-env-modal.png",alt:"Select Python Environments"}),"\n",(0,o.jsx)(i.A,{url:"https://github.com/codespaces",src:"img/screenshots/30-dev-env/2-dev-env-setup/5-select-recommended.png",alt:"Select recommended interpreter"}),"\n",(0,o.jsx)(n.p,{children:"That's it! You're ready for the lab!"}),"\n",(0,o.jsx)(n.h2,{id:"option-2-run-locally",children:"Option 2: Run locally"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"During the lab, we will use GitHub Codespaces. These instructions are here just in case you can't use Codespaces or if you really, really, really want a local installation."})}),"\n",(0,o.jsx)(n.p,{children:"If you want to run the notebook locally, follow the steps below:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Clone the ",(0,o.jsx)(n.a,{href:"https://github.com/mongodb-developer/genai-devday-notebooks.git",children:"GitHub repo"})," for this lab by executing the following command from the terminal:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git clone https://github.com/mongodb-developer/genai-devday-notebooks.git\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"cd"})," into the cloned directory:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cd genai-devday-notebooks\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Create and activate a Python virtual environment:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"python -m venv vector-search-lab\nsource vector-search-lab/bin/activate\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Install the dependencies for this lab:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pip install -r requirements.txt\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Install and launch Jupyter Notebook:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pip install notebook\njupyter notebook\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the browser tab that pops up, open the file named ",(0,o.jsx)(n.code,{children:"vector-search-lab.ipynb"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.A,{url:"localhost:8888/tree",src:"img/screenshots/30-dev-env/2-dev-env-setup/6-jupyter-notebook.png",alt:"Jupyter Notebook"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2763:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4848);function o(e){const n=e.url||"http://localhost:3000";return(0,s.jsxs)("div",{className:"browser container",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"column left",children:[(0,s.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,s.jsx)("div",{className:"column middle",children:(0,s.jsx)("input",{type:"text",value:n})}),(0,s.jsx)("div",{className:"column right",children:(0,s.jsxs)("div",{style:{float:"right"},children:[(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"})]})})]}),(0,s.jsx)("div",{className:"content",children:e.children})]})}var r=t(6025);function i(e){return(0,s.jsx)(o,{...e,children:(0,s.jsx)("img",{src:(0,r.Ay)(e.src),alt:e.alt})})}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);