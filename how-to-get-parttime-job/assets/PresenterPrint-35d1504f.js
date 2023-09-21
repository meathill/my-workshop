import{d as _,u as d,a as p,c as m,b as h,r as u,o as n,e as r,f as t,t as s,g as a,F as f,h as g,n as v,i as y,j as x,k as b,l as k,m as w,_ as N}from"./index-5490be4d.js";import{N as P}from"./NoteDisplay-7c286997.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>u.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),r("div",{id:"page-root",style:v(a(y))},[t("div",V,[t("div",L,[t("h1",S,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(n(!0),r(f,null,g(a(i),(e,c)=>(n(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(x)),1),b(" "+s(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(n(),r("hr",z)):w("v-if",!0)]))),128))])],4))}}),E=N(C,[["__file","/home/runner/work/my-workshop/my-workshop/node_modules/.pnpm/@slidev+client@0.43.5_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
