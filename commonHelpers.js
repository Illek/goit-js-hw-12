import{a as y,i as f,S}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const O="44303353-9b630a8fdc8cdbe3ae770ff69",h=15;let i=1,u="";async function k(e){i=1,u=e,M(),I(),p();const t=g(e,i),o=b(t);try{return(await y.get(o)).data}catch(n){console.error(n.message)}finally{m()}}async function q(){if(!u)return;i+=1;const e=g(u,i),t=b(e);try{const o=await y.get(t),{totalHits:n}=o.data,s=Math.ceil(n/h);if(i>s){p(),P();return}return o.data}catch(o){console.error(o.message)}finally{m()}}function M(){const e=document.querySelector("#images");e.innerHTML=""}function I(){const e=document.querySelector(".loader");e.style.display="block"}function m(){const e=document.querySelector(".loader");e.style.display="none"}function p(){a.style.display="none"}function g(e,t){return new URLSearchParams({key:O,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:t})}function b(e){return`https://pixabay.com/api/?${e}`}function P(){f.show({class:"search-404",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})}const R=document.querySelector("#images");function L(e){const t=e.hits.map(v).join("");R.insertAdjacentHTML("beforeend",t),$()}function v(e){return`
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
    </li>`}function $(){new S(".gallery a",{captionsData:"title",captionDelay:350,fadeSpeed:220}).refresh()}const d=document.querySelector(".form"),a=document.querySelector(".load-more-btn"),c=document.querySelector(".loader");d.addEventListener("submit",async e=>{e.preventDefault(),c.style.display="block";const t=e.currentTarget.elements.search.value.trim();if(!t){c.style.display="none";return}try{const o=await k(t);U(o)}catch(o){w(o)}finally{d.reset(),c.style.display="none"}});a.addEventListener("click",async()=>{c.style.display="block",a.style.display="none";try{const e=await q();E(e)}catch(e){w(e)}finally{c.style.display="none"}});function U(e){const t=document.querySelector("#images");if(e.total===0){t.innerHTML="",x("Sorry, there are no images matching your search query. Please, try again!","search-404","#EF4040"),a.style.display="none";return}L(e),e.hits.length<15?a.style.display="none":a.style.display="block"}function E(e){if(!e)return;const o=document.querySelector(".images-image").getBoundingClientRect().height;L(e),window.scrollBy(0,o*2),a.style.display="block"}function w(e){console.error(e.message)}function x(e,t,o){f.show({class:t,message:e,position:"topRight",backgroundColor:o,transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0})}
//# sourceMappingURL=commonHelpers.js.map
