(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){["data-thank-subscribe","data-order","data-thank-you"].forEach(s=>{const l=`[${s}-open]`,m=`[${s}-close]`,a=document.querySelectorAll(l),v=document.querySelectorAll(m),f=document.querySelector(`[${s}]`);f||n("Can`t find Modal with attribute "+f),a.length===0&&n("Can`t find Open modal button with attribute "+l),v.length===0&&n("Can`t find Close modal button with attribute "+m),a.forEach(b=>b.addEventListener("click",g)),v.forEach(b=>b.addEventListener("click",g));function g(b){b.preventDefault(),document.body.classList.toggle("modal-open"),f.classList.toggle("is-hidden")}});function n(s){const l="color: #bada55";console.log("%c"+s,l)}const r=document.querySelector("#myForm"),o=document.querySelector("#submitButton"),e=document.querySelector("#fullname"),t=document.querySelector("#emailform"),i=document.querySelector("#card"),S=document.querySelector("#resetButton");r.addEventListener("submit",d),e.addEventListener("input",d),t.addEventListener("input",d),i.addEventListener("input",d),S.addEventListener("click",h);function d(s){s.preventDefault();const l=e.value.trim(),m=t.value.trim(),a=i.value.trim(),f=/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(m);o.classList.add("inactive"),l===""||!f||a===""?(o.disabled=!0,o.classList.add("inactive")):(o.disabled=!1,o.classList.remove("inactive"))}function h(){r.reset(),o.disabled=!0,o.classList.add("inactive")}o.addEventListener("mouseenter",function(){o.disabled&&(o.style.borderColor="red")}),o.addEventListener("mouseleave",function(){o.disabled&&(o.style.borderColor="")}),d(new Event("input"));const w=document.querySelector("#subForm"),u=document.querySelector("#subscribleButton"),L=document.querySelector("#subEmail");w.addEventListener("submit",p),L.addEventListener("input",p);function p(s){s.preventDefault();const l=L.value.trim(),a=/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(l);u.classList.add("inactive"),a?(u.disabled=!1,u.classList.remove("inactive")):(u.disabled=!0,u.classList.add("inactive"))}p(new Event("input"))});const y=document.querySelector(".go-top");window.addEventListener("scroll",q);y.addEventListener("click",E);function q(){const c=window.pageYOffset,n=document.documentElement.clientHeight;c>n?y.classList.add("go-top--show"):y.classList.remove("go-top--show")}function E(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(E,0))}(()=>{const c=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=document.querySelector(".mobile-scroll"),e=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),c.classList.toggle("is-open");const i=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};n.addEventListener("click",e),r.addEventListener("click",e),o.addEventListener("click",t=>{t.target.className==="mobile-nav__link"&&e()}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(c.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();AOS.init();