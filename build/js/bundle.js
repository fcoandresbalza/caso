function iniciarApp(){barraFija(),navScroll(),seleccionSeccion()}function barraFija(){const e=document.querySelector(".header"),t=document.querySelector(".header_barra"),c=document.querySelector("body");window.addEventListener("scroll",(function(){e.getBoundingClientRect().bottom<200?(t.classList.add("fijo"),c.classList.add("barra_fija")):(t.classList.remove("fijo"),c.classList.remove("barra_fija"))}))}function navScroll(){document.querySelectorAll(".navegacion").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function seleccionSeccion(){document.querySelectorAll(".navegacion a").forEach(e=>{e.addEventListener("click",(function(e){const t=e.target.attributes.href.value;document.querySelector(t).classList.add("seleccionado")}))})}document.addEventListener("DOMContentLoaded",()=>{iniciarApp()});
//# sourceMappingURL=bundle.js.map
