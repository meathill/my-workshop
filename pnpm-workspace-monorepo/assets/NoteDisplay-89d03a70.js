import{d as c,e as n,C as s,f as r,t as a,o as l,_ as d}from"./index-28bb994d.js";const m=["innerHTML"],u=["textContent"],k=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const t=p;return(e,o)=>e.noteHtml?(l(),n("div",{key:0,class:s(["prose overflow-auto outline-none",t.class]),onClick:o[0]||(o[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,m)):e.note?(l(),n("div",{key:1,class:s(["prose overflow-auto outline-none",t.class]),onClick:o[1]||(o[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,u)],2)):(l(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",t.class]),onClick:o[2]||(o[2]=i=>e.$emit("click"))},[r("p",{textContent:a(t.placeholder||"No notes.")},null,8,k)],2))}}),v=d(y,[["__file","/home/runner/work/my-workshop/my-workshop/node_modules/.pnpm/@slidev+client@0.43.5_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{v as N};
