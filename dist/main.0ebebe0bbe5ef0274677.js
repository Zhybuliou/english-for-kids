(()=>{"use strict";var e={683:(e,t,a)=>{a.r(t)},564:(e,t,a)=>{a.r(t)},63:(e,t,a)=>{a.r(t)},362:(e,t,a)=>{a.r(t)},924:(e,t,a)=>{a.r(t)},615:(e,t,a)=>{a.r(t)},387:(e,t,a)=>{a.r(t)},674:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.flipCards=void 0,t.flipCards=function(){const e=document.querySelectorAll(".thecard");e.forEach((e=>{const t=e.querySelector("#flip-card-btn-turn-to-back");null==t||t.addEventListener("click",(()=>{e.classList.add("transform")}))}));const t=document.querySelector("#app"),a=document.querySelector("#nav-top");document.addEventListener("mouseout",(r=>{const o=r.target;t!==o&&a!==o||e.forEach((e=>{e.classList.remove("transform")}))}))}},444:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.footer=void 0,t.footer=function(){const e=document.querySelector("body"),t=document.createElement("footer");t.classList.add("footer"),t.innerHTML='<div class="footer-container"><a class="github" href="https://github.com/Zhybuliou" target="_blank" rel="noopener noreferrer">github</a><h3 class="github">since 2021</h3><a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer"><span class="rss-year">RS School\'21</span></a></div>',null==e||e.append(t)}},680:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.locationResolver=void 0;const r=a(664),o=a(276),n=a(113),c=a(959);t.locationResolver=e=>{const a=document.querySelector("#toggle-btn");switch(a&&(a.style.display="inline-block"),e){case"#/":r.catPage();break;case"#/statistic/":n.getTable();break;case"#/admin/":c.getAdmin();break;default:o.Page(e)}document.querySelectorAll(".card__link").forEach((e=>{null==e||e.addEventListener("click",(()=>{const a=e.dataset.href;a&&t.locationResolver(a)}))}))},window.addEventListener("load",(()=>{let e=window.location.hash;0===e.length&&(e="#/"),e&&t.locationResolver(e)}))},83:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.creatBtnLogin=void 0,t.creatBtnLogin=function(){const e=document.getElementById("b-nav"),t=document.createElement("button");t.innerText="Login",t.classList.add("btn-login"),t.setAttribute("id","myBtn"),e.append(t);const a=document.querySelector(".body"),r=document.createElement("div");r.setAttribute("class","modal"),r.setAttribute("id","myModal"),r.innerHTML='\n  <div class="modal-content">\n    <h2 class="modal-tittle">login</h2>\n    <div class="form-wrapper">\n      <form class="form" action="#/admin/" method="GET">\n        <input type="text" class="input" id="input-text" placeholder="username">\n        <input type="password" class="input" id="input-password" placeholder="password">\n      <div class="form-footer">\n      <span class="close">Cancel</span>\n      <input type="submit" class="btn-submit" id="submit-form" value="login">\n      </div>\n      </form>\n    </div>\n  </div>\n  ',null==a||a.append(r);const o=document.getElementById("myModal"),n=document.getElementById("myBtn"),c=document.getElementsByClassName("close")[0],i=document.getElementsByClassName("some-class")[0],s=document.getElementsByClassName("b-container")[0],d=document.getElementsByClassName("b-nav")[0];n.onclick=()=>{o.style.display="block",[s,d,i].forEach((e=>{e.classList.toggle("open")}))},c.onclick=()=>{o.style.display="none"}}},968:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.navHeader=void 0;const r=a(680),o=a(363),n=a(506),c=a(148),i=a(540),s=a(83);t.navHeader=function(){const e=localStorage.getItem("testObject"),t=JSON.parse(e),a=Object.keys(t),d=document.getElementById("page-wrapper"),l=document.createElement("nav");l.setAttribute("id","nav-top"),null==d||d.append(l),l.innerHTML='<div class="b-nav" id="b-nav"><li><a class="b-link link__active" data-href="#/" href="#/">Main Page</a></li><li><a class="b-link" data-href="#/statistic/" href="#/statistic/" >Statistic</a></li></div><div class="b-nav some-class"></div><div class="b-container"><div class="b-menu"><div class="b-bun b-bun--top"></div><div class="b-bun b-bun--mid"></div><div class="b-bun b-bun--bottom"></div></div></div>',a.forEach((e=>{const t=document.getElementById("b-nav"),a=`\n    <a class="b-link" data-href="#/${e}" href="#/${e}">${e}</a>\n    `,r=document.createElement("li");r.innerHTML=a,t.append(r)})),s.creatBtnLogin(),n.ToggleButton();const g=document.getElementsByClassName("body")[0],m=document.getElementsByClassName("some-class")[0],u=document.getElementsByClassName("b-menu")[0],p=document.getElementsByClassName("b-container")[0],y=document.getElementsByClassName("b-nav")[0];u.addEventListener("click",(()=>{[g,p,y,m].forEach((e=>{e.classList.toggle("open")}))}),!1),m.addEventListener("click",(()=>{[g,p,y,m].forEach((e=>{e.classList.toggle("open")}))}),!1);const b=document.querySelectorAll(".b-link");b.forEach((e=>{null==e||e.addEventListener("click",(()=>{b.forEach((e=>{e.classList.contains("link__active")&&e.classList.remove("link__active")}));const t=e,a=t.dataset.href;t.classList.toggle("link__active"),"string"==typeof a&&(document.getElementById("togglerID").checked?o.locationResolverGame(a):r.locationResolver(a),[g,p,y,m].forEach((e=>{e.classList.toggle("open")})))}))})),c.toggleGame(),i.navTittle()}},540:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.navTittle=void 0,t.navTittle=function(){const e=document.getElementById("nav-top"),t=document.createElement("h1");t.classList.add("nav-tittle"),t.innerText="English for kids",null==e||e.append(t)}},506:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleButton=void 0,t.ToggleButton=function(){const e=document.createElement("div");e.setAttribute("id","toggle-btn"),e.setAttribute("class","toggle-btn"),e.innerHTML='<label class="button-toggle-wrap"><h2 class="my-text" id="btn-text">Train</h2><input id="togglerID" class="toggler" type="checkbox" data-toggle="button-toggle"/><div class="button-toggle" id="bth-toggle"><div class="handle"><div class="bars"></div></div></div></label>';const t=document.getElementById("nav-top");null==t||t.append(e),function(){const e=document.getElementById("togglerID");null==e||e.addEventListener("click",(()=>{const t=document.getElementById("bth-toggle"),a=document.getElementById("btn-text");e.checked?(t.style.backgroundColor="#FF7373",a.innerText="Start",a.style.left="50px"):(t.style.backgroundColor="#29df5f",a.innerText="Train",a.style.left="10px")}))}()}},959:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAdmin=void 0;const r=a(434),o=a(326),n=a(592),c=a(295);t.getAdmin=function(){const e=document.getElementById("app");e.innerHTML="";const t=localStorage.getItem("testObject"),a=JSON.parse(t);Object.keys(a).forEach((t=>{const r=document.createElement("div");r.setAttribute("class","category-card");const o=`\n      <div class="category-card__delete">&#10006;</div>\n      <div class="category-card__tittle">${t}</div>\n      <div class="category-card__word">WORDS: ${Object.keys(a[t]).length}</div>\n      <div class="category-card__footer">\n        <button href="#" id="category-card__footer-btn-update" class="category-card__footer-btn">Update</button>\n        <a href="#/admin/word/" class="category-card__footer-btn">Add word</a>\n      </div>\n    `;r.innerHTML=o,e.append(r)}));const i=document.createElement("div");i.setAttribute("class","category-card"),i.setAttribute("id","add-card"),i.innerHTML='\n  <div class="category-card__tittle">Create new Category</div>\n  <div class="category-card__add-category">&#10010;</div>\n',e.append(i),i.addEventListener("click",r.saveTask),o.changeNameCategory(),n.deleteCategory(),document.querySelectorAll(".category-card__footer-btn").forEach((e=>{e.addEventListener("click",(()=>{var t,a;const r=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement,o=null===(a=null==r?void 0:r.querySelector(".category-card__tittle"))||void 0===a?void 0:a.textContent;o&&c.getAdminWord(o)}))}))}},450:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.adminNav=void 0,t.adminNav=function(){const e=document.getElementById("page-wrapper"),t=document.createElement("nav");t.setAttribute("id","nav-admin"),t.setAttribute("class","nav-admin__wrapper"),null==e||e.append(t),t.innerHTML='<div class="admin-nav">\n    <ul class="admin-nav-list">\n     <li class="li-first"><a class="admin-nav-list__item" href="#/admin/">Categories</a></li>\n     <li><a class="admin-nav-list__item" href="#">Words</a></li>\n     <li class="li-last"><a class="admin-nav-list__item" href="/english-for-kids/dist/#/">Log out</a></li>\n    </ul>\n  </div>'}},295:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAdminWord=void 0;const r=a(959);t.getAdminWord=function(e){const t=document.getElementById("app");t.innerHTML="";const a=localStorage.getItem("testObject"),o=JSON.parse(a);Object.keys(o[e]).forEach((a=>{const r=document.createElement("div");r.setAttribute("class","word-card");const n=o[e][a],c=`\n      <div class="word-card__delete">&#10006;</div>\n      <div class="word-card__tittle">Word: ${n.word}</div>\n      <div class="word-card__translation">Translation: ${n.translation}</div>\n      <div class="word-card__sound" data-sound="${n.audioSrc}">Sound file: ${n.audioSrc.substr(6)}</div>\n      <div class="word-card__img">Image: <img src="${n.image}" alt="word"></div>\n      <button class="word-card__btn-change">Change</button>\n    `;r.innerHTML=c,t.append(r)}));const n=document.querySelector(".li-first");null==n||n.addEventListener("click",(()=>{r.getAdmin()}))}},326:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.changeNameCategory=void 0;const r=a(959);t.changeNameCategory=function(){function e(e){const t=e.target.parentElement.parentElement,a=t.querySelector(".category-card__tittle").textContent,o=`\n  <label class="label-category" for="input-category">Category Name:</label>\n  <input type="text" value="${a}" id="input-category">\n  <div class="category-card__add-btn">\n    <button id="cancel-change-category" class="cancel-btn">Cancel</button>\n    <button id="creat-change-category" class="creat-btn">Create</button>\n  </div>\n`;t.innerHTML=o;const n=document.getElementById("cancel-change-category");null==n||n.addEventListener("click",(()=>{r.getAdmin()}));const c=document.getElementById("creat-change-category");null==c||c.addEventListener("click",(()=>{const e=document.getElementById("input-category").value,t=localStorage.getItem("testObject"),o=JSON.parse(t);e!==a&&(Object.values(o[`${a}`]).forEach((t=>{t.category=e})),o[`${e}`]=o[`${a}`],delete o[`${a}`],localStorage.setItem("testObject",JSON.stringify(o))),r.getAdmin()}))}document.querySelectorAll("#category-card__footer-btn-update").forEach((t=>{t.addEventListener("click",e)}))}},592:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteCategory=void 0;const r=a(959);t.deleteCategory=function(){function e(e){const t=e.target.parentElement.querySelector(".category-card__tittle").textContent,a=localStorage.getItem("testObject"),o=JSON.parse(a);delete o[t],localStorage.setItem("testObject",JSON.stringify(o)),r.getAdmin()}document.querySelectorAll(".category-card__delete").forEach((t=>{t.addEventListener("click",e)}))}},434:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveTask=void 0;const r=a(959);t.saveTask=function(){const e=document.querySelector("#add-card"),t=document.createElement("div");function a(e){e.target.parentElement.parentElement.remove()}function o(e){const t=e.target.parentElement.previousSibling.previousSibling;if(t.value){const a={[t.value]:{}},o=localStorage.getItem("testObject"),n=JSON.parse(o),c=Object.assign(a,n);localStorage.setItem("testObject",JSON.stringify(c)),e.target.parentElement.parentElement.remove(),r.getAdmin()}else t.setAttribute("style","border: 2px solid #E53935")}t.setAttribute("class","category-card"),t.innerHTML='\n  <label class="label-category" for="input-category">Category Name:</label>\n  <input type="text" placeholder="Draw" id="input-category">\n  <div class="category-card__add-btn">\n    <button id="cancel-add-category" class="cancel-btn">Cancel</button>\n    <button id="creat-add-category" class="creat-btn">Create</button>\n  </div>\n',null==e||e.before(t),document.querySelectorAll("#cancel-add-category").forEach((e=>{e.addEventListener("click",a)})),document.querySelectorAll("#creat-add-category").forEach((e=>{e.addEventListener("click",o)}))}},664:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.catPage=void 0;const r=a(901);t.catPage=function(){const e=localStorage.getItem("testObject"),t=JSON.parse(e),a=Object.keys(t),o=document.getElementById("app");o.innerHTML="",a.forEach((e=>{const a=Object.values(t[e]);if(a.length>0){const e=`./${a[0].image}`;let t;t=document.getElementById("togglerID").checked?`\n        <div class="card">\n        <a href="#/${a[0].category}" data-href="#/${a[0].category}" class="card__link">\n          <img class="card-img" id="img" src="${e}">\n          <div class="card-footer card-footer-red" id="card-footer">\n           <h3 id="title-category">${a[0].category}</h3>\n          </div>\n        </a>\n        </div>\n       `:`\n        <div class="card">\n        <a href="#/${a[0].category}" data-href="#/${a[0].category}" class="card__link">\n          <img class="card-img" id="img" src="${e}">\n          <div class="card-footer" id="card-footer">\n           <h3 id="title-category">${a[0].category}</h3>\n          </div>\n        </a>\n        </div>\n       `;const r=document.createElement("div");r.setAttribute("id","cards"),r.innerHTML=t,o.append(r)}})),null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data))}},8:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const r=a(901);a(924),t.Game=function(e){const t=[],a=localStorage.getItem("testObject"),o=JSON.parse(a),n=e.slice(2),c=Object.values(o[n]),i=document.getElementById("app");i.innerHTML="",c.forEach((e=>{const a=`./${e.image}`,r=`./${e.audioSrc}`;t.push(r);const o=`\n    <div class="thecard"  id="flip-card">\n      <div class="thefront" id="thefront">\n          <img class="card-img-gem" id="img" src="${a}" data-audio="${r}" data-category="${e.category}" data-name="${e.word}">\n          <div class="card-footer" id="card-footer">\n      </div>\n    </div>\n   `,n=document.createElement("div");n.setAttribute("id","cards"),n.setAttribute("class","maincontainer"),n.innerHTML=o,i.append(n)}));const s=document.createElement("div");s.classList.add("start-btn__div"),s.innerHTML='<button class="start-btn">Start game</button>',i.append(s);const d=document.createElement("div");d.classList.add("ranting"),i.prepend(d);const l=document.querySelectorAll("#cards");t.sort((()=>Math.random()-.5));let g=0,m=0;s.addEventListener("click",(()=>{if(s.classList.contains("chooseStart"))new Audio(t[g]).play();else{const e='<button class="start-btn start-btn-repeat">&#10226;</button>';s.classList.add("chooseStart"),s.innerHTML=e,t&&new Audio(t[g]).play(),l.forEach((e=>{e.addEventListener("click",(a=>{const o=a.target,n=o.getAttribute("data-audio"),c=o.getAttribute("data-category"),s=o.getAttribute("data-name");if(n===t[g]){null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const a=localStorage.getItem("testObject"),n=JSON.parse(a);n[`${c}`][`${s}`].correct+=1,localStorage.setItem("testObject",JSON.stringify(n)),e.classList.add("choose"),new Audio("./audio/correct.mp3").play(),g+=1;const l=document.createElement("div");l.classList.add("star-success"),l.innerHTML='<img  width="40px" height= "40px" src="./img/star-win.png" alt="star-win">',d.append(l),t&&new Audio(t[g]).play(),o.style.opacity="0.3",o.style.eventPoint="none",8===g&&(0===m?(new Audio("./audio/success.mp3").play(),i.innerHTML='<div><h2>Win !!!</h2></div><img style ="margin-bottom: 20%" src="./img/success.jpg" alt="success">',setTimeout((()=>{const e=document.getElementById("togglerID");window.location.assign(""),e.classList.add("checkedCard")}),3e3)):(new Audio("./audio/failure.mp3").play(),i.innerHTML=`\n                <div><h2>Error ${m}</h2></div>\n                <img style ="margin-bottom: 20%" src="./img/failure.jpg" alt="success">`,setTimeout((()=>{const e=document.getElementById("togglerID");window.location.assign(""),e.classList.add("checkedCard")}),3e3)))}else if("0.3"!==o.style.opacity){new Audio("./audio/error.mp3").play();const e=document.createElement("div");e.classList.add("star-error"),e.innerHTML='<img  width="40px" height= "40px" src="./img/star.png" alt="star">',d.append(e),m+=1;const a=document.querySelector(`[data-audio="${t[g]}"]`),o=a.getAttribute("data-category"),n=a.getAttribute("data-name");null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const c=localStorage.getItem("testObject"),i=JSON.parse(c);i[`${o}`][`${n}`].error+=1,localStorage.setItem("testObject",JSON.stringify(i))}}))}))}}))}},363:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.locationResolverGame=void 0;const r=a(664),o=a(8),n=a(113);t.locationResolverGame=e=>{switch(document.querySelector("#toggle-btn").style.display="inline-block",e){case"#/":r.catPage();break;case"#/statistic/":n.getTable();break;default:o.Game(e)}document.querySelectorAll(".card__link").forEach((e=>{null==e||e.addEventListener("click",(()=>{const a=e.dataset.href;a&&t.locationResolverGame(a)}))}))}},148:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toggleGame=void 0;const r=a(680),o=a(363);t.toggleGame=function(){const e=document.getElementById("togglerID");null==e||e.addEventListener("click",(()=>{if(e.checked){let e=window.location.hash;0===e.length&&(e="#/"),o.locationResolverGame(e)}else{let e=window.location.hash;0===e.length&&(e="#/"),r.locationResolver(e)}}))}},894:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HomePage=void 0,t.HomePage=function(){const e=document.getElementById("page-wrapper"),t=document.createElement("div");t.setAttribute("id","home-page"),t.setAttribute("class","home-page"),t.innerHTML='<main id="app" class="app"></main>',null==e||e.append(t)}},276:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0;const r=a(669),o=a(674);a(924),t.Page=function(e){document.querySelector("#toggle-btn").style.display="inline-block";const t=localStorage.getItem("testObject"),a=JSON.parse(t),n=e.slice(2),c=Object.values(a[n]),i=document.getElementById("app");i.innerHTML="",c.length>0?c.forEach((e=>{const t=`./${e.image}`,a=`./${e.audioSrc}`,r=`\n      <div class="thecard"  id="flip-card">\n      <div class="thefront" id="thefront" data-set="${a}" data-category="${e.category}" data-name="${e.word}">\n            <img class="card-img" id="img" src="${t}">\n            <div class="card-footer" id="card-footer">\n            <h3 id="title-category">${e.word}</h3>\n            <button id="flip-card-btn-turn-to-back">&#10226;</button>\n            </div>\n        </div>\n        <div class="theback" data-set="${a}">\n            <img class="card-img" id="img" src="${t}">\n            <div class="card-footer-back" id="card-footer">\n            <h3 id="title-category">${e.translation}</h3>\n            </div>\n        </div>\n      </div>\n     `,o=document.createElement("div");o.setAttribute("id","cards"),o.setAttribute("class","maincontainer"),o.setAttribute("data-src",`${a}`),o.innerHTML=r,i.append(o)})):i.innerHTML="<h2>You don't have words in this category</h2>",r.playAudio(),o.flipCards()}},539:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GameRepeat=void 0;const r=a(901);t.GameRepeat=function(e){const t=[],a=document.getElementById("app");a.innerHTML="";let o=0;e.forEach((()=>{const r=e[o],n=Object.values(r),c=`./${n[2]}`,i=`./${n[3]}`;t.push(i);const s=`\n    <div class="thecard"  id="flip-card">\n      <div class="thefront" id="thefront">\n          <img class="card-img-gem" id="img" src="${c}" data-audio="${i}" data-category="${n[4]}" data-name="${n[0]}">\n          <div class="card-footer" id="card-footer">\n      </div>\n    </div>\n   `,d=document.createElement("div");d.setAttribute("id","cards"),d.setAttribute("class","maincontainer"),d.innerHTML=s,a.append(d),o++}));const n=document.createElement("div");n.classList.add("start-btn__div"),n.innerHTML='<button class="start-btn">Start game</button>',a.append(n);const c=document.createElement("div");c.classList.add("ranting"),a.prepend(c);const i=document.querySelectorAll("#cards");t.sort((()=>Math.random()-.5));let s=0,d=0;n.addEventListener("click",(()=>{if(n.classList.contains("chooseStart"))new Audio(t[s]).play();else{const o='<button class="start-btn start-btn-repeat" title="words have" >&#10226;</button>';n.classList.add("chooseStart"),n.innerHTML=o,t&&new Audio(t[s]).play(),i.forEach((o=>{o.addEventListener("click",(n=>{const i=n.target,l=i.getAttribute("data-audio"),g=i.getAttribute("data-category"),m=i.getAttribute("data-name");if(l===t[s]){null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const n=localStorage.getItem("testObject"),l=JSON.parse(n);l[`${g}`][`${m}`].correct+=1,localStorage.setItem("testObject",JSON.stringify(l)),o.classList.add("choose"),new Audio("./audio/correct.mp3").play(),s+=1;const u=document.createElement("div");u.classList.add("star-success"),u.innerHTML='<img  width="40px" height= "40px" src="./img/star-win.png" alt="star-win">',c.append(u),t&&new Audio(t[s]).play(),i.style.opacity="0.3",i.style.eventPoint="none",s===e.length&&(0===d?(new Audio("./audio/success.mp3").play(),a.innerHTML='<img style ="margin-bottom: 20%" src="./img/success.jpg" alt="success">',setTimeout((()=>{const e=document.getElementById("togglerID");window.location.assign(""),e.classList.add("checkedCard")}),3e3)):(new Audio("./audio/failure.mp3").play(),a.innerHTML='<img style ="margin-bottom: 20%" src="./img/failure.jpg" alt="success">',setTimeout((()=>{const e=document.getElementById("togglerID");window.location.assign(""),e.classList.add("checkedCard")}),3e3)))}else if("0.3"!==i.style.opacity){new Audio("./audio/error.mp3").play();const e=document.createElement("div");e.classList.add("star-error"),e.innerHTML='<img  width="40px" height= "40px" src="./img/star.png" alt="star">',c.append(e),d+=1;const a=document.querySelector(`[data-audio="${t[s]}"]`),o=a.getAttribute("data-category"),n=a.getAttribute("data-name");null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const i=localStorage.getItem("testObject"),l=JSON.parse(i);l[`${o}`][`${n}`].error+=1,localStorage.setItem("testObject",JSON.stringify(l))}}))}))}}))}},688:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.repeatWords=void 0;const r=a(901),o=a(539);t.repeatWords=function(){const e=[],t=document.querySelector("#repeat-word");let a=0;t.addEventListener("click",(()=>{Object.keys(r.data).forEach((t=>{const r=localStorage.getItem("testObject"),o=JSON.parse(r),n=t;Object.keys(o[`${n}`]).forEach((t=>{const r=o[`${n}`][`${t}`].word,c=o[`${n}`][`${t}`].category,i=o[`${n}`][`${t}`].translation,s=o[`${n}`][`${t}`].audioSrc,d=o[`${n}`][`${t}`].image,l=o[`${n}`][`${t}`].correct;let g=l/(o[`${n}`][`${t}`].error+l)*100;if(g||(g=0),g===1/0&&(g=100),g>0&&g<50&&a<8){const t={word:r,translation:i,image:d,audioSrc:s,category:c};e.push(t),a++}}))})),e.length?o.GameRepeat(e):document.getElementById("app").innerHTML='<h2 class="repeat-massage">You have no words with a correct answer rating below 50%!</h2>'}))}},788:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tableBtnReset=void 0;const r=a(901);t.tableBtnReset=function(){const e=document.getElementById("reset");null==e||e.addEventListener("click",(()=>{localStorage.clear(),null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const e=document.querySelector("#app");document.querySelector("#toggle-btn").style.display="none",e.innerHTML='<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Category</th><th scope="col">Word</th><th scope="col">Translation</th><th scope="col">Train</th><th scope="col">Game</th><th scope="col">Wrong</th><th scope="col">%</th></tr></thead></table>';const t=Object.keys(r.data);let a=0;t.forEach((e=>{const t=localStorage.getItem("testObject"),r=JSON.parse(t),o=e;Object.keys(r[`${o}`]).forEach((t=>{const n=r[`${o}`][`${t}`].word,c=r[`${o}`][`${t}`].translation,i=e,s=r[`${o}`][`${t}`].train,d=r[`${o}`][`${t}`].correct,l=r[`${o}`][`${t}`].error;let g=d/l*100;g||(g=0),g===1/0&&(g=100),a++;const m=document.createElement("tr");m.style.backgroundColor=a%2==0?"#D1E7DD":"#fff";const u=`\n      <th scope="row">${a}</th><td>${i}</td><td>${n}</td><td>${c}</td><td>${s}</td><td>${d}</td><td>${l}</td><td>${Math.round(g)}</td>\n      `;m.innerHTML=u;const p=document.querySelector("table");null==p||p.append(m)}))}));const o=document.createElement("div");o.classList.add("btn-table"),o.innerHTML='<button id="reset" class="reset">Reset</button><button id="repeat-word" class="repeat-word">Repeat words</button>',e.prepend(o)}))}},80:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tableSort=void 0,t.tableSort=function(){const e=(e,t)=>e.children[t].innerText||e.children[t].textContent;document.querySelectorAll("th").forEach((t=>t.addEventListener("click",(()=>{const a=t.closest("table");var r,o;Array.from(a.querySelectorAll("tr:nth-child(n+2)")).sort((r=Array.from(t.parentNode.children).indexOf(t),o=this.asc=!this.asc,(t,a)=>{return n=e(o?t:a,r),c=e(o?a:t,r),n<101?n-c:n.toString().localeCompare(c);var n,c})).forEach((e=>a.appendChild(e)))}))))}},113:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTable=void 0;const r=a(788),o=a(688),n=a(80);t.getTable=function(){const e=localStorage.getItem("testObject"),t=JSON.parse(e),a=document.querySelector("#app");document.querySelector("#toggle-btn").style.display="none",a.innerHTML='<table class="table table-responsive-sm"><thead><tr><th class="th" scope="col">#</th><th class="th" scope="col">Category</th><th class="th" scope="col">Word</th><th class="th" scope="col">Translation</th><th class="th" scope="col">Train</th><th class="th" scope="col">Game</th><th class="th" scope="col">Wrong</th><th class="th" scope="col">%</th></tr></thead></table>';const c=Object.keys(t);let i=0;c.forEach((e=>{const a=e;Object.keys(t[`${a}`]).forEach((r=>{const o=t[`${a}`][`${r}`].word,n=t[`${a}`][`${r}`].translation,c=e,s=t[`${a}`][`${r}`].train,d=t[`${a}`][`${r}`].correct,l=t[`${a}`][`${r}`].error;let g=d/(l+d)*100;g||(g=0),g===1/0&&(g=100),i++;const m=document.createElement("tr");m.style.backgroundColor=i%2==0?"#D1E7DD":"#fff";const u=`\n      <th scope="row">${i}</th><td>${c}</td><td>${o}</td><td>${n}</td><td>${s}</td><td>${d}</td><td>${l}</td><td>${Math.round(g)}</td>\n      `;m.innerHTML=u;const p=document.querySelector("table");null==p||p.append(m)}))}));const s=document.createElement("div");s.classList.add("btn-table"),s.innerHTML='\n   <button id="reset" class="reset">Reset</button>\n   <button id="repeat-word" class="repeat-word">Repeat words</button>\n  ',a.prepend(s),r.tableBtnReset(),o.repeatWords(),n.tableSort()}},669:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.playAudio=void 0;const r=a(901);t.playAudio=function(){document.querySelectorAll("#thefront").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-set"),a=e.getAttribute("data-category"),o=e.getAttribute("data-name");t&&new Audio(t).play(),null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const n=localStorage.getItem("testObject"),c=JSON.parse(n);c[`${a}`][`${o}`].train+=1,localStorage.setItem("testObject",JSON.stringify(c))}))}))}},901:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.data=void 0,t.data={"Action(set_A)":{cry:{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3",category:"Action(set_A)",train:0,correct:0,error:0},dance:{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3",category:"Action(set_A)",train:0,correct:0,error:0},dive:{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3",category:"Action(set_A)",train:0,correct:0,error:0},draw:{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3",category:"Action(set_A)",train:0,correct:0,error:0},fish:{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3",category:"Action(set_A)",train:0,correct:0,error:0},fly:{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3",category:"Action(set_A)",train:0,correct:0,error:0},hug:{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3",category:"Action(set_A)",train:0,correct:0,error:0},jump:{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3",category:"Action(set_A)",train:0,correct:0,error:0}},"Action(set_B)":{open:{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3",category:"Action(set_B)",train:0,correct:0,error:0},play:{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3",category:"Action(set_B)",train:0,correct:0,error:0},point:{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3",category:"Action(set_B)",train:0,correct:0,error:0},ride:{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3",category:"Action(set_B)",train:0,correct:0,error:0},run:{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3",category:"Action(set_B)",train:0,correct:0,error:0},sing:{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3",category:"Action(set_B)",train:0,correct:0,error:0},skip:{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3",category:"Action(set_B)",train:0,correct:0,error:0},swim:{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3",category:"Action(set_B)",train:0,correct:0,error:0}},"Animal(set_A)":{cat:{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},chick:{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},chicken:{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},dog:{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},horse:{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},pig:{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},rabbit:{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},sheep:{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3",category:"Animal(set_A)",train:0,correct:0,error:0}},"Animal(set_B)":{bird:{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},fish:{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},frog:{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},giraffe:{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},lion:{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},mouse:{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},turtle:{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},dolphin:{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3",category:"Animal(set_B)",train:0,correct:0,error:0}},Clothes:{skirt:{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3",category:"Clothes",train:0,correct:0,error:0},pants:{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3",category:"Clothes",train:0,correct:0,error:0},blouse:{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3",category:"Clothes",train:0,correct:0,error:0},dress:{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3",category:"Clothes",train:0,correct:0,error:0},boot:{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3",category:"Clothes",train:0,correct:0,error:0},shirt:{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3",category:"Clothes",train:0,correct:0,error:0},coat:{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3",category:"Clothes",train:0,correct:0,error:0},shoe:{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3",category:"Clothes",train:0,correct:0,error:0}},Emotions:{sad:{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3",category:"Emotions",train:0,correct:0,error:0},angry:{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3",category:"Emotions",train:0,correct:0,error:0},happy:{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3",category:"Emotions",train:0,correct:0,error:0},tired:{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3",category:"Emotions",train:0,correct:0,error:0},surprised:{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3",category:"Emotions",train:0,correct:0,error:0},scared:{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3",category:"Emotions",train:0,correct:0,error:0},smile:{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3",category:"Emotions",train:0,correct:0,error:0},laugh:{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3",category:"Emotions",train:0,correct:0,error:0}},Foods:{bread:{word:"bread",translation:"хлеб",image:"img/bread.jpg",audioSrc:"audio/bread.mp3",category:"Foods",train:0,correct:0,error:0},cheese:{word:"cheese",translation:"сыр",image:"img/cheese.jpg",audioSrc:"audio/cheese.mp3",category:"Foods",train:0,correct:0,error:0},coffee:{word:"coffee",translation:"кофе",image:"img/coffee.jpg",audioSrc:"audio/coffee.mp3",category:"Foods",train:0,correct:0,error:0},honey:{word:"honey",translation:"мёд",image:"img/honey.jpg",audioSrc:"audio/honey.mp3",category:"Foods",train:0,correct:0,error:0},jam:{word:"jam",translation:"варенье",image:"img/jam.jpg",audioSrc:"audio/jam.mp3",category:"Foods",train:0,correct:0,error:0},meat:{word:"meat",translation:"мясо",image:"img/meat.jpg",audioSrc:"audio/meat.mp3",category:"Foods",train:0,correct:0,error:0},rice:{word:"rice",translation:"рис",image:"img/rice.jpg",audioSrc:"audio/rice.mp3",category:"Foods",train:0,correct:0,error:0},soup:{word:"soup",translation:"суп",image:"img/soup.jpg",audioSrc:"audio/soup.mp3",category:"Foods",train:0,correct:0,error:0}},Seasons:{cold:{word:"cold",translation:"холодно",image:"img/cold.jpg",audioSrc:"audio/cold.mp3",category:"Seasons",train:0,correct:0,error:0},day:{word:"day",translation:"день",image:"img/day.jpg",audioSrc:"audio/day.mp3",category:"Seasons",train:0,correct:0,error:0},fall:{word:"fall",translation:"осень",image:"img/falling.jpg",audioSrc:"audio/fall.mp3",category:"Seasons",train:0,correct:0,error:0},hot:{word:"hot",translation:"тепло",image:"img/hot.jpg",audioSrc:"audio/hot.mp3",category:"Seasons",train:0,correct:0,error:0},moon:{word:"moon",translation:"луна",image:"img/moon.jpg",audioSrc:"audio/moon.mp3",category:"Seasons",train:0,correct:0,error:0},spring:{word:"spring",translation:"весна",image:"img/spring.jpg",audioSrc:"audio/spring.mp3",category:"Seasons",train:0,correct:0,error:0},summer:{word:"summer",translation:"лето",image:"img/summer.jpg",audioSrc:"audio/summer.mp3",category:"Seasons",train:0,correct:0,error:0},winter:{word:"winter",translation:"зима",image:"img/winter.jpg",audioSrc:"audio/winter.mp3",category:"Seasons",train:0,correct:0,error:0}}}}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{a(387),a(564),a(362),a(615),a(683),a(63);const e=a(968),t=a(894),r=a(444),o=a(450),n=a(901);null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(n.data));const c=document.createElement("section");if(c.setAttribute("id","page-wrapper"),document.querySelector("body").append(c),"#/admin/"===window.location.hash?o.adminNav():e.navHeader(),t.HomePage(),r.footer(),performance.navigation.type===performance.navigation.TYPE_RELOAD){const e=document.getElementById("togglerID");window.location.assign(""),e.classList.add("checkedCard")}})()})();