import{r as o,j as s,h as f,u as h,C as E,D as k,B as S,f as A,L as C,A as g,N as R,E as F}from"./index-d8d6c5c0.js";import{s as e,a}from"./register-page.module-5e4cca1c.js";const p={email:"",password:""},D=({onSubmit:l})=>{const[t,r]=o.useState({...p}),[i,c]=o.useState(!1),n=({target:d})=>{const{name:b,value:L,type:I,checked:w}=d,y=I==="checkbox"?w:L;r({...t,[b]:y})},x=d=>{d.preventDefault(),l({...t}),j()},j=()=>{r({...p})},m=o.useId(),u=o.useId(),{email:N,password:v}=t;return s.jsxs("form",{className:e.registerForm,onSubmit:x,children:[s.jsxs("div",{className:e.block,children:[s.jsx("label",{htmlFor:m}),s.jsx("input",{value:N,className:e.registerInput,onChange:n,type:"email",name:"email",placeholder:"Enter your email",id:m,required:!0})]}),s.jsxs("div",{className:e.block,children:[s.jsx("label",{htmlFor:u}),s.jsx("input",{value:v,className:e.registerInput,onChange:n,type:i?"text":"password",name:"password",placeholder:"Confirm a password",id:u,required:!0}),s.jsx("button",{type:"button",className:e.visiblePassword,onClick:()=>{c(!i)},children:s.jsx("svg",{className:e.svgEye,children:s.jsx("use",{href:`${f}#icon-eye`,width:"18",height:"18"})})})]}),s.jsx("button",{className:e.btnRegister,type:"submit",children:"Log In Now"})]})},q=()=>{const l=h(E),t=h(k),r=h(S),i=A(),c=n=>{i(F(n))};return s.jsx("div",{className:a.registerWrapper,children:s.jsxs("div",{className:a.register,children:[l&&s.jsx("div",{className:a.loaderWrap,children:s.jsx(C,{})}),s.jsxs("div",{className:a.blockRegister,children:[s.jsxs("div",{className:a.navRegister,children:[s.jsx(g,{to:"/auth/register",className:a.linkRegister,children:"Registration"}),s.jsx(g,{to:"/auth/login",className:a.authActivPage,children:"Log In"})]}),s.jsx(D,{onSubmit:c}),r?s.jsx(R,{to:"/home"}):t&&s.jsx("p",{className:a.authError,children:t})]})]})})};export{q as default};
