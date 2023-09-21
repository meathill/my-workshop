import{o as n,e as i,f as e,d as P,c as S,a as U,p as G,q as d,s as u,r as M,n as L,g as t,j as V,l as a,m as I,v as B,t as F,F as J,w as K,x as O,y as Q,_ as W}from"./index-120b6528.js";import{N as H}from"./NoteDisplay-683d665f.js";const X={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),ee=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),oe=[Y,ee];function te(_,c){return n(),i("svg",X,oe)}const ne={name:"carbon-zoom-out",render:te},se={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},le=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ae=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ie=[le,ae];function ce(_,c){return n(),i("svg",se,ie)}const re={name:"carbon-zoom-in",render:ce},de={class:"h-full flex flex-col"},ue={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},_e={class:"flex-none border-t border-gray-400 border-opacity-20"},pe={class:"flex gap-1 items-center px-6 py-3"},me=e("div",{class:"flex-auto"},null,-1),ve={class:"p2 text-center"},he=P({__name:"NotesView",setup(_){const c=S.titleTemplate.replace("%s",S.title||"Slidev");U({title:`Notes - ${c}`});const{isFullscreen:T,toggle:p}=K,s=G("slidev-notes-font-size",18),l=d(()=>{var o;return((o=u.lastUpdate)==null?void 0:o.type)==="viewer"?u.viewerPage:u.page}),m=d(()=>M.find(o=>o.path===`${l.value}`)),r=d(()=>M.find(o=>o.path===`${l.value+1}`));function Z(){s.value=s.value+1}function R(){s.value=s.value-1}return(o,v)=>{var h,f,x,g,b,y,w,$,z,k,N,C;const A=O,D=Q,j=re,q=ne;return n(),i(J,null,[e("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:L({width:`${(l.value-1)/t(V)*100}%`})},null,4),e("div",de,[e("div",{class:"px-5 flex-auto h-full overflow-auto",style:L({fontSize:`${t(s)}px`})},[a(H,{note:(x=(f=(h=m.value)==null?void 0:h.meta)==null?void 0:f.slide)==null?void 0:x.note,"note-html":(y=(b=(g=m.value)==null?void 0:g.meta)==null?void 0:b.slide)==null?void 0:y.noteHTML,placeholder:`No notes for Slide ${l.value}.`},null,8,["note","note-html","placeholder"])],4),r.value?(n(),i("div",ue,[a(H,{class:"opacity-50",note:(z=($=(w=r.value)==null?void 0:w.meta)==null?void 0:$.slide)==null?void 0:z.note,"note-html":(C=(N=(k=r.value)==null?void 0:k.meta)==null?void 0:N.slide)==null?void 0:C.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):I("v-if",!0),e("div",_e,[e("div",pe,[e("button",{class:"slidev-icon-btn",onClick:v[0]||(v[0]=(...E)=>t(p)&&t(p)(...E))},[t(T)?(n(),B(A,{key:0})):(n(),B(D,{key:1}))]),e("button",{class:"slidev-icon-btn",onClick:Z},[a(j)]),e("button",{class:"slidev-icon-btn",onClick:R},[a(q)]),me,e("div",ve,F(l.value)+" / "+F(t(V)),1)])])])],64)}}}),ge=W(he,[["__file","/home/runner/work/my-workshop/my-workshop/node_modules/.pnpm/@slidev+client@0.43.5_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/NotesView.vue"]]);export{ge as default};
