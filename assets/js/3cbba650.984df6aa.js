"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},l="Install LSP",i={unversionedId:"getting-started/installation/lsp",id:"getting-started/installation/lsp",title:"Install LSP",description:"What is the Language Server Protocol (LSP)?",source:"@site/docs/getting-started/installation/lsp.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation/lsp",permalink:"/site/docs/getting-started/installation/lsp",draft:!1,editUrl:"https://github.com/Abstract-IDE/site/tree/main/docs/getting-started/installation/lsp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install Abstract",permalink:"/site/docs/getting-started/installation/abstract"},next:{title:"Install Formatter",permalink:"/site/docs/getting-started/installation/formatter"}},s={},p=[{value:"What is the Language Server Protocol (LSP)?",id:"what-is-the-language-server-protocol-lsp",level:3},{value:"Installing LSP",id:"installing-lsp",level:3},{value:"Examples",id:"examples",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-lsp"},"Install LSP"),(0,r.kt)("h3",{id:"what-is-the-language-server-protocol-lsp"},"What is the Language Server Protocol (LSP)?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Adding features like auto complete, go to definition, or documentation on hover for a programming language takes\nsignificant effort. Traditionally this work had to be repeated for each development tool, as each tool provides\ndifferent APIs for implementing the same feature. A Language Server is meant to provide the language-specific smarts\nand communicate with development tools over a protocol that enables inter-process communication.\nThe idea behind the Language Server Protocol (LSP) is to standardize the protocol for how such servers and development tools\ncommunicate. This way, a single Language Server can be re-used in multiple development tools, which in turn can support\nmultiple languages with minimal effort. LSP is a win for both language providers and tooling vendors!.\n",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/"},"read more"))),(0,r.kt)("h3",{id:"installing-lsp"},"Installing LSP"),(0,r.kt)("p",null,"we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/williamboman/mason.nvim"},"Mason")," to install and manage the LSPs and the other packages.\nTo install LSP, all you need to do is open neovim and execute ",(0,r.kt)("inlineCode",{parentName:"p"},":MasonInstall <LSP_name>")," command. For example,\nto install ",(0,r.kt)("inlineCode",{parentName:"p"},"clangd")," (LSP for C/C++), use following neovim's command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"MasonInstall clangd\n")),(0,r.kt)("p",null,"to get the list of all available LSPs and other packages, use the following neovim's command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Mason\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},":Mason")," will list out the all available packages. To just list out LSP,\n",(0,r.kt)("inlineCode",{parentName:"p"},"press 2"),". Press ",(0,r.kt)("inlineCode",{parentName:"p"},"<C-f>")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(CTRL+F)")," to apply language filter (search by languages).")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},":MasonInstall pyright                    # LSP for python\n:MasonInstall lua-language-server        # LSP for lua\n:MasonInstall typescript-language-server # LSP for javascript/typescript\n")))}u.isMDXComponent=!0}}]);