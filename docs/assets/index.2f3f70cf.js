import{p as e,a as r,o as t,c as s,b as o,F as a,r as c,t as n,d as l,e as i}from"./vendor.f93a4b18.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();e("data-v-4a5bb44c");const d={class:"header"},u={class:"flex justify-end"},p={class:"uppercase font-semibold flex"},m={href:"/"},f=o("section",{class:"py-24 relative grid grid-cols-1 xl:grid-cols-2 place-items-center container mx-auto"},[o("iframe",{class:"w-full h-96",src:"https://www.youtube.com/embed/3Hq-hUH7BEw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}),o("h2",{class:"m-16 text-7xl text-center"},"Never Give up")],-1);r();const y={setup(e){const r=[{name:"home"},{name:"blog"},{name:"contact"},{name:"social media"}];return(e,l)=>(t(),s("header",d,[o("nav",u,[o("ul",p,[(t(),s(a,null,c(r,(({name:e})=>o("li",{class:"px-4 pt-8 ",key:e},[o("a",m,n(e),1)]))),64))])]),f]))},__scopeId:"data-v-4a5bb44c"},b={setup:e=>(e,r)=>(t(),l(y))};i({setup:e=>(e,r)=>(t(),l(b))}).mount("#app");