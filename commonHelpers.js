import{a as c,S as m,i as h}from"./assets/vendor-821984ba.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();c.defaults.headers.common["x-api-key"]="live_LecpBk7SVprhXxB2yI8Z1svYT6H901SLdzwzjjw4NXEc2SRd8du2kJN22UTCoL4o";async function y(){return(await c.get("https://api.thecatapi.com/v1/breeds")).data}async function g(t){return(await c.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`)).data}const a=document.querySelector("#selectElement"),l=document.querySelector(".content"),d=document.querySelector(".loader");function u(t){h.show({title:"Error",message:`❌ Oops! ${t}`,position:"topRight",color:"red"})}function p(){d.style.display="flex"}function f(){d.style.display="none"}async function _(){p();try{const n=(await y()).map(r=>({text:r.name,value:r.id})),s=new m({select:"#selectElement"});f(),s.setData([{placeholder:!0,text:""},...n]),a.addEventListener("change",w)}catch(t){u(t.message)}}async function w(){p(),l.innerHTML="";try{const t=await g(a.value);if(!t[0].breeds.length)throw new Error("Something went wrong");f(),b(t)}catch(t){u(t.message)}}function b(t){const n=t[0].url,{name:s,description:r,temperament:e,origin:o,country_code:i}=t[0].breeds[0];l.innerHTML=`
    <div class="content__wrapper">
      <img class="content__img" src="${n}" alt="${s}"/>
      <div class="content__info">
        <h2 class="info__title">${s}</h2>
        <p><b class="info__text">Description:</b> ${r}</p>
        <p><b class="info__text">Temperament:</b> ${e}</p>
        <p><b class="info__text">Country:</b> ${o}</p>
        <img class="info__flag" src="https://flagsapi.com/${i}/shiny/64.png" alt="Country code"> 
      </div>
    </div>
  `}_();
//# sourceMappingURL=commonHelpers.js.map
