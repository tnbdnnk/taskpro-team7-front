import{r as n,j as e,s as f,f as m,o as E,p as L,l as C,d as A,k as g,n as F,t as q}from"./index-d3ab47a2.js";import{s,a}from"./register-page.module-49a852b4.js";const x={name:"",email:"",password:""},P=({onSubmit:o})=>{const[t,i]=n.useState({...x}),[l,c]=n.useState(!1),r=({target:d})=>{const{name:y,value:k,type:w,checked:R}=d,S=w==="checkbox"?R:k;i({...t,[y]:S})},j=d=>{d.preventDefault(),o({...t}),N()},N=()=>{i({...x})},u=n.useId(),h=n.useId(),p=n.useId(),{name:b,email:v,password:I}=t;return e.jsxs("form",{className:s.registerForm,onSubmit:j,children:[e.jsxs("div",{className:s.block,children:[e.jsx("label",{htmlFor:u}),e.jsx("input",{value:b,className:s.registerInput,onChange:r,name:"name",placeholder:"Enter your name",id:u,required:!0})]}),e.jsxs("div",{className:s.block,children:[e.jsx("label",{htmlFor:h}),e.jsx("input",{value:v,className:s.registerInput,onChange:r,type:"email",name:"email",placeholder:"Enter your email",id:h,required:!0})]}),e.jsxs("div",{className:s.block,children:[e.jsx("label",{htmlFor:p}),e.jsx("input",{value:I,className:s.registerInput,onChange:r,type:l?"text":"password",name:"password",placeholder:"Create a password",id:p,required:!0}),e.jsx("button",{type:"button",className:s.visiblePassword,onClick:()=>{c(!l)},children:e.jsx("svg",{className:s.svgEye,children:e.jsx("use",{href:`${f}#icon-eye`,width:"18",height:"18"})})})]}),e.jsx("button",{className:s.btnRegister,type:"submit",children:"Register Now"})]})},V=()=>{const o=m(E),t=m(L),i=m(C),l=A(),c=r=>{l(q(r))};return e.jsx("main",{className:a.registerWrapper,children:e.jsx("div",{className:a.register,children:e.jsxs("div",{className:a.blockRegister,children:[e.jsxs("div",{className:a.navRegister,children:[e.jsx(g,{to:"/auth/register",className:a.authActivPage,children:"Registration"}),e.jsx(g,{to:"/auth/login",className:a.linkRegister,children:"Log In"})]}),o&&e.jsx("p",{children:"....Register in progress"}),e.jsx(P,{onSubmit:c}),i?e.jsx(F,{to:"/home"}):t&&e.jsx("p",{style:{color:"red"},children:t})]})})})};export{V as default};