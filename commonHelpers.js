import{a as f,i as d,S as k}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const I="44303353-9b630a8fdc8cdbe3ae770ff69",p=15;let i=1,u="";async function q(e){i=1,u=e,R(),P(),m();const t=g(e,i),s=b(t);try{return(await f.get(s)).data}catch(n){w(n.message,"search-error","#EF4040")}finally{y()}}async function M(){if(!u)return;i+=1;const e=g(u,i),t=b(e);try{const s=await f.get(t),{totalHits:n}=s.data,o=Math.ceil(n/p);if(i>o){m(),v();return}return s.data}catch(s){w(s.message,"load-more-error","#EF4040")}finally{y()}}function R(){const e=document.querySelector("#images");e.innerHTML=""}function P(){const e=document.querySelector(".loader");e.style.display="block"}function y(){const e=document.querySelector(".loader");e.style.display="none"}function m(){a.style.display="none"}function g(e,t){return new URLSearchParams({key:I,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:t})}function b(e){return`https://pixabay.com/api/?${e}`}function v(){d.show({class:"search-404",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})}function w(e,t,s){d.show({class:t,message:e,position:"topRight",backgroundColor:s,transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})}const E=document.querySelector("#images");function L(e){const t=e.hits.map($).join("");E.insertAdjacentHTML("beforeend",t),U()}function $(e){return`
    <li class="images-image">
      <div class="gallery">
        <a href="${e.largeImageURL}">
          <img class="img" src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}"/>
        </a>
      </div>
      <ul class="image-details-container">
        <li>
          <h2 class="image-heading">Likes</h2>
          <p class="image-description">${e.likes}</p>
        </li>
        <li>
          <h2 class="image-heading">Views</h2>
          <p class="image-description">${e.views}</p>
        </li>
        <li>
          <h2 class="image-heading">Comments</h2>
          <p class="image-description">${e.comments}</p>
        </li>
        <li>
          <h2 class="image-heading">Downloads</h2>
          <p class="image-description">${e.downloads}</p>
        </li>
      </ul>
    </li>`}function U(){new k(".gallery a",{captionsData:"title",captionDelay:350,fadeSpeed:220}).refresh()}const h=document.querySelector(".form"),a=document.querySelector(".load-more-btn"),c=document.querySelector(".loader");h.addEventListener("submit",async e=>{e.preventDefault(),c.style.display="block";const t=e.currentTarget.elements.search.value.trim();if(!t){c.style.display="none";return}try{const s=await q(t);D(s)}catch(s){O(s)}finally{h.reset(),c.style.display="none"}});a.addEventListener("click",async()=>{c.style.display="block",a.style.display="none";try{const e=await M();F(e)}catch(e){O(e)}finally{c.style.display="none"}});function D(e){const t=document.querySelector("#images");if(e.total===0){t.innerHTML="",S("Sorry, there are no images matching your search query. Please, try again!","search-404","#EF4040"),a.style.display="none";return}L(e),e.hits.length<15?a.style.display="none":a.style.display="block"}function F(e){if(!e)return;const s=document.querySelector(".images-image").getBoundingClientRect().height;L(e),window.scrollBy(0,s*2),a.style.display="block"}function O(e){S(e.message,"load-error","#EF4040")}function S(e,t,s){d.show({class:t,message:e,position:"topRight",backgroundColor:s,transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})}
//# sourceMappingURL=commonHelpers.js.map
