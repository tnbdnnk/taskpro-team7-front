import{u as a,s as c,a as d,b as p,c as _,j as s,L as x,N as m,M as j,d as h}from"./index-4bd0485b.js";import{F as g}from"./Filters-1d405611.js";const W="_loaderWrap_1i5ly_1",k="_section_1i5ly_5",y="_dark_1i5ly_11",u="_light_1i5ly_15",v="_violet_1i5ly_19",N="_settingsWrapper_1i5ly_41",f="_textWrapper_1i5ly_46",b="_text_1i5ly_46",L="_link_1i5ly_86",e={loaderWrap:W,section:k,dark:y,light:u,violet:v,settingsWrapper:N,textWrapper:f,text:b,link:L},F=()=>{const{theme:t}=a(c),r=a(d),o=a(p),{isModalOpen:i,openModal:l,closeModal:n}=_();return s.jsx(s.Fragment,{children:r?s.jsx("div",{className:e.loaderWrap,children:s.jsx(x,{})}):s.jsx(s.Fragment,{children:o.length>0?s.jsx(m,{to:`/home/${o[0]._id}`}):s.jsxs("section",{className:[e.section,e[t]].join(" "),children:[s.jsx("div",{className:e.settingsWrapper,children:s.jsx(g,{})}),s.jsxs("div",{className:e.textWrapper,children:[s.jsxs("p",{className:[e.text,e[t]].join(" "),children:["Before starting your project, it is essential",s.jsx("a",{onClick:l,className:[e.link,e[t]].join(" "),children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),s.jsx(j,{isOpen:i,onClose:n,children:s.jsx(h,{})})]})]})})})};export{F as default};