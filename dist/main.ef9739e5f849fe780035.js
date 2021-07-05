(()=>{"use strict";var t={683:(t,e,a)=>{a.r(e)},564:(t,e,a)=>{a.r(e)},362:(t,e,a)=>{a.r(e)},924:(t,e,a)=>{a.r(e)},615:(t,e,a)=>{a.r(e)},387:(t,e,a)=>{a.r(e)},674:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.flipCards=void 0,e.flipCards=function(){const t=document.querySelectorAll(".thecard");t.forEach((t=>{const e=t.querySelector("#flip-card-btn-turn-to-back");null==e||e.addEventListener("click",(()=>{t.classList.add("transform")}))}));const e=document.querySelector("#app"),a=document.querySelector("#nav-top");document.addEventListener("mouseout",(o=>{const r=o.target;e!==r&&a!==r||t.forEach((t=>{t.classList.remove("transform")}))}))}},444:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.footer=void 0,e.footer=function(){const t=document.querySelector("body"),e=document.createElement("footer");e.classList.add("footer"),e.innerHTML='\n<div class="footer-container">\n  <a class="github" href="https://github.com/Zhybuliou" target="_blank" rel="noopener noreferrer">github</a>\n  <h3 class="github">since 2021</h3>\n  <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">\n    <span class="rss-year">RS School\'21</span>\n  </a>\n</div>\n  ',null==t||t.append(e)}},680:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.locationResolver=void 0;const o=a(664),r=a(276),i=a(113);e.locationResolver=t=>{switch(document.querySelector("#toggle-btn").style.display="inline-block",document.querySelector("#app"),t){case"#/":o.catPage();break;case"#/statistic/":i.getTable();break;default:r.Page(t)}document.querySelectorAll(".card__link").forEach((t=>{null==t||t.addEventListener("click",(()=>{const a=t.dataset.href;a&&e.locationResolver(a)}))}))},window.addEventListener("load",(()=>{let t=window.location.hash;0===t.length&&(t="#/"),t&&e.locationResolver(t)}))},968:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.navHeader=void 0;const o=a(680),r=a(363),i=a(506),n=a(700),c=a(148),d=a(540);e.navHeader=function(){const t=n.cards[0],e=document.getElementById("page-wrapper"),a=document.createElement("nav");a.setAttribute("id","nav-top"),null==e||e.append(a),a.innerHTML='<div class="b-nav" id="b-nav"><li><a class="b-link link__active" data-href="#/" href="#/">Main Page</a></li><li><a class="b-link" data-href="#/statistic/" href="#/statistic/" >Statistic</a></li></div><div class="b-nav some-class"></div><div class="b-container"><div class="b-menu"><div class="b-bun b-bun--top"></div><div class="b-bun b-bun--mid"></div><div class="b-bun b-bun--bottom"></div></div></div>',t.forEach((t=>{const e=document.getElementById("b-nav"),a=`\n    <a class="b-link" data-href="#/${t}" href="#/${t}">${t}</a>\n    `,o=document.createElement("li");o.innerHTML=a,e.append(o)})),i.ToggleButton();const s=document.getElementsByClassName("body")[0],l=document.getElementsByClassName("some-class")[0],g=document.getElementsByClassName("b-menu")[0],m=document.getElementsByClassName("b-container")[0],u=document.getElementsByClassName("b-nav")[0];g.addEventListener("click",(()=>{[s,m,u,l].forEach((t=>{t.classList.toggle("open")}))}),!1),l.addEventListener("click",(()=>{[s,m,u,l].forEach((t=>{t.classList.toggle("open")}))}),!1);const p=document.querySelectorAll(".b-link");p.forEach((t=>{null==t||t.addEventListener("click",(()=>{p.forEach((t=>{t.classList.contains("link__active")&&t.classList.remove("link__active")}));const e=t,a=e.dataset.href;e.classList.toggle("link__active"),"string"==typeof a&&(document.getElementById("togglerID").checked?r.locationResolverGame(a):o.locationResolver(a),[s,m,u,l].forEach((t=>{t.classList.toggle("open")})))}))})),c.toggleGame(),d.navTittle()}},540:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.navTittle=void 0,e.navTittle=function(){const t=document.getElementById("nav-top"),e=document.createElement("h1");e.classList.add("nav-tittle"),e.innerText="English for kids",null==t||t.append(e)}},506:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ToggleButton=void 0,e.ToggleButton=function(){const t=document.createElement("div");t.setAttribute("id","toggle-btn"),t.setAttribute("class","toggle-btn"),t.innerHTML='<label class="button-toggle-wrap"><h2 class="my-text" id="btn-text">Train</h2><input id="togglerID" class="toggler" type="checkbox" data-toggle="button-toggle"/><div class="button-toggle" id="bth-toggle"><div class="handle"><div class="bars"></div></div></div></label>';const e=document.getElementById("nav-top");null==e||e.append(t),function(){const t=document.getElementById("togglerID");null==t||t.addEventListener("click",(()=>{const e=document.getElementById("bth-toggle"),a=document.getElementById("btn-text");t.checked?(e.style.backgroundColor="#FF7373",a.innerText="Start",a.style.left="50px"):(e.style.backgroundColor="#29df5f",a.innerText="Train",a.style.left="10px")}))}()}},664:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.catPage=void 0;const o=a(700),r=a(901);e.catPage=function(){const t=o.cards[0],e=document.getElementById("app");e.innerHTML="";let a=0;const i=o.cards[0];t.forEach((t=>{const r=o.cards[a+1][0],n=`./${Object.values(r)[2]}`;let c;c=document.getElementById("togglerID").checked?`\n      <div class="card">\n      <a href="#/${i[a]}" data-href="#/${i[a]}" class="card__link">\n        <img class="card-img" id="img" src="${n}">\n        <div class="card-footer card-footer-red" id="card-footer">\n         <h3 id="title-category">${t}</h3>\n        </div>\n      </a>\n      </div>\n     `:`\n      <div class="card">\n      <a href="#/${i[a]}" data-href="#/${i[a]}" class="card__link">\n        <img class="card-img" id="img" src="${n}">\n        <div class="card-footer" id="card-footer">\n         <h3 id="title-category">${t}</h3>\n        </div>\n      </a>\n      </div>\n     `;const d=document.createElement("div");d.setAttribute("id","cards"),d.innerHTML=c,e.append(d),a++})),null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data))}},8:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;const o=a(700),r=a(901);a(924),e.Game=function(t){const e=[],a=[...o.cards[0]].indexOf(t.slice(2)),i=document.getElementById("app");i.innerHTML="";let n=0;["0","1","2","3","4","5","6","7"].forEach((()=>{const r=o.cards[a+1][n],c=Object.values(r),d=`./${c[2]}`,s=`./${c[3]}`;e.push(s);const l=`\n    <div class="thecard"  id="flip-card">\n      <div class="thefront" id="thefront">\n          <img class="card-img-gem" id="img" src="${d}" data-audio="${s}" data-category="${t.slice(2)}" data-name="${c[0]}">\n          <div class="card-footer" id="card-footer">\n      </div>\n    </div>\n   `,g=document.createElement("div");g.setAttribute("id","cards"),g.setAttribute("class","maincontainer"),g.innerHTML=l,i.append(g),n++}));const c=document.createElement("div");c.classList.add("start-btn__div"),c.innerHTML='<button class="start-btn">Start game</button>',i.append(c);const d=document.createElement("div");d.classList.add("ranting"),i.prepend(d);const s=document.querySelectorAll("#cards");e.sort((()=>Math.random()-.5));let l=0,g=0;c.addEventListener("click",(()=>{if(c.classList.contains("chooseStart"))new Audio(e[l]).play();else{const t='<button class="start-btn start-btn-repeat">&#10226;</button>';c.classList.add("chooseStart"),c.innerHTML=t,e&&new Audio(e[l]).play(),s.forEach((t=>{t.addEventListener("click",(a=>{const o=a.target,n=o.getAttribute("data-audio"),c=o.getAttribute("data-category"),s=o.getAttribute("data-name");if(n===e[l]){null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const a=localStorage.getItem("testObject"),n=JSON.parse(a);n[`${c}`][`${s}`].correct+=1,localStorage.setItem("testObject",JSON.stringify(n)),t.classList.add("choose"),new Audio("./audio/correct.mp3").play(),l+=1;const m=document.createElement("div");m.classList.add("star-success"),m.innerHTML='<img  width="40px" height= "40px" src="./img/star-win.png" alt="star-win">',d.append(m),e&&new Audio(e[l]).play(),o.style.opacity="0.3",o.style.eventPoint="none",8===l&&(0===g?(new Audio("./audio/success.mp3").play(),i.innerHTML='<img style ="margin-bottom: 20%" src="./img/success.jpg" alt="success">',setTimeout((()=>{const t=document.getElementById("togglerID");window.location.assign(""),t.classList.add("checkedCard")}),3e3)):(new Audio("./audio/failure.mp3").play(),i.innerHTML='<img style ="margin-bottom: 20%" src="./img/failure.jpg" alt="success">',setTimeout((()=>{const t=document.getElementById("togglerID");window.location.assign(""),t.classList.add("checkedCard")}),3e3)))}else if("0.3"!==o.style.opacity){new Audio("./audio/error.mp3").play();const t=document.createElement("div");t.classList.add("star-error"),t.innerHTML='<img  width="40px" height= "40px" src="./img/star.png" alt="star">',d.append(t),g+=1;const a=document.querySelector(`[data-audio="${e[l]}"]`),o=a.getAttribute("data-category"),i=a.getAttribute("data-name");null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(r.data));const n=localStorage.getItem("testObject"),c=JSON.parse(n);c[`${o}`][`${i}`].error+=1,localStorage.setItem("testObject",JSON.stringify(c))}}))}))}}))}},363:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.locationResolverGame=void 0;const o=a(664),r=a(8),i=a(113);e.locationResolverGame=t=>{switch(document.querySelector("#toggle-btn").style.display="inline-block",t){case"#/":o.catPage();break;case"#/statistic/":i.getTable();break;default:r.Game(t)}document.querySelectorAll(".card__link").forEach((t=>{null==t||t.addEventListener("click",(()=>{const a=t.dataset.href;a&&e.locationResolverGame(a)}))}))}},148:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.toggleGame=void 0;const o=a(680),r=a(363);e.toggleGame=function(){const t=document.getElementById("togglerID");null==t||t.addEventListener("click",(()=>{if(t.checked){let t=window.location.hash;0===t.length&&(t="#/"),r.locationResolverGame(t)}else{let t=window.location.hash;0===t.length&&(t="#/"),o.locationResolver(t)}}))}},894:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.HomePage=void 0,e.HomePage=function(){const t=document.getElementById("page-wrapper"),e=document.createElement("div");e.setAttribute("id","home-page"),e.innerHTML='<main id="app" class="app"></main>',null==t||t.append(e)}},276:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Page=void 0;const o=a(700),r=a(669),i=a(674);a(924),e.Page=function(t){document.querySelector("#toggle-btn").style.display="inline-block";const e=[...o.cards[0]].indexOf(t.slice(2)),a=document.getElementById("app");a.innerHTML="";let n=0;["0","1","2","3","4","5","6","7"].forEach((()=>{const r=o.cards[e+1][n],i=Object.values(r),c=`./${i[2]}`,d=`./${i[3]}`,s=`\n    <div class="thecard"  id="flip-card">\n    <div class="thefront" id="thefront" data-set="${d}" data-category="${t.slice(2)}" data-name="${i[0]}">\n          <img class="card-img" id="img" src="${c}">\n          <div class="card-footer" id="card-footer">\n          <h3 id="title-category">${i[0]}</h3>\n          <button id="flip-card-btn-turn-to-back">&#10226;</button>\n          </div>\n      </div>\n      <div class="theback" data-set="${d}">\n          <img class="card-img" id="img" src="${c}">\n          <div class="card-footer-back" id="card-footer">\n          <h3 id="title-category">${i[1]}</h3>\n          </div>\n      </div>\n    </div>\n   `,l=document.createElement("div");l.setAttribute("id","cards"),l.setAttribute("class","maincontainer"),l.setAttribute("data-src",`${d}`),l.innerHTML=s,a.append(l),n++})),r.playAudio(),i.flipCards()}},539:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GameRepeat=void 0;const o=a(901);e.GameRepeat=function(t){const e=[],a=document.getElementById("app");a.innerHTML="";let r=0;t.forEach((()=>{const o=t[r],i=Object.values(o),n=`./${i[2]}`,c=`./${i[3]}`;e.push(c);const d=`\n    <div class="thecard"  id="flip-card">\n      <div class="thefront" id="thefront">\n          <img class="card-img-gem" id="img" src="${n}" data-audio="${c}" data-category="${i[4]}" data-name="${i[0]}">\n          <div class="card-footer" id="card-footer">\n      </div>\n    </div>\n   `,s=document.createElement("div");s.setAttribute("id","cards"),s.setAttribute("class","maincontainer"),s.innerHTML=d,a.append(s),r++}));const i=document.createElement("div");i.classList.add("start-btn__div"),i.innerHTML='<button class="start-btn">Start game</button>',a.append(i);const n=document.createElement("div");n.classList.add("ranting"),a.prepend(n);const c=document.querySelectorAll("#cards");e.sort((()=>Math.random()-.5));let d=0,s=0;i.addEventListener("click",(()=>{if(i.classList.contains("chooseStart"))new Audio(e[d]).play();else{const r='<button class="start-btn start-btn-repeat" title="words have" > 50%>&#10226;</button>';i.classList.add("chooseStart"),i.innerHTML=r,e&&new Audio(e[d]).play(),c.forEach((r=>{r.addEventListener("click",(i=>{const c=i.target,l=c.getAttribute("data-audio"),g=c.getAttribute("data-category"),m=c.getAttribute("data-name");if(l===e[d]){null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(o.data));const i=localStorage.getItem("testObject"),l=JSON.parse(i);l[`${g}`][`${m}`].correct+=1,localStorage.setItem("testObject",JSON.stringify(l)),r.classList.add("choose"),new Audio("./audio/correct.mp3").play(),d+=1;const u=document.createElement("div");u.classList.add("star-success"),u.innerHTML='<img  width="40px" height= "40px" src="./img/star-win.png" alt="star-win">',n.append(u),e&&new Audio(e[d]).play(),c.style.opacity="0.3",c.style.eventPoint="none",d===t.length&&(0===s?(new Audio("./audio/success.mp3").play(),a.innerHTML='<img style ="margin-bottom: 20%" src="./img/success.jpg" alt="success">',setTimeout((()=>{const t=document.getElementById("togglerID");window.location.assign(""),t.classList.add("checkedCard")}),3e3)):(new Audio("./audio/failure.mp3").play(),a.innerHTML='<img style ="margin-bottom: 20%" src="./img/failure.jpg" alt="success">',setTimeout((()=>{const t=document.getElementById("togglerID");window.location.assign(""),t.classList.add("checkedCard")}),3e3)))}else if("0.3"!==c.style.opacity){new Audio("./audio/error.mp3").play();const t=document.createElement("div");t.classList.add("star-error"),t.innerHTML='<img  width="40px" height= "40px" src="./img/star.png" alt="star">',n.append(t),s+=1;const a=document.querySelector(`[data-audio="${e[d]}"]`),r=a.getAttribute("data-category"),i=a.getAttribute("data-name");null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(o.data));const c=localStorage.getItem("testObject"),l=JSON.parse(c);l[`${r}`][`${i}`].error+=1,localStorage.setItem("testObject",JSON.stringify(l))}}))}))}}))}},688:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.repeatWords=void 0;const o=a(901),r=a(539);e.repeatWords=function(){const t=[],e=document.querySelector("#repeat-word");let a=0;e.addEventListener("click",(()=>{Object.keys(o.data).forEach((e=>{const o=localStorage.getItem("testObject"),r=JSON.parse(o),i=e;Object.keys(r[`${i}`]).forEach((e=>{const o=r[`${i}`][`${e}`].word,n=r[`${i}`][`${e}`].category,c=r[`${i}`][`${e}`].translation,d=r[`${i}`][`${e}`].audioSrc,s=r[`${i}`][`${e}`].image,l=(r[`${i}`][`${e}`].train,r[`${i}`][`${e}`].correct);let g=l/(r[`${i}`][`${e}`].error+l)*100;if(g||(g=0),g===1/0&&(g=100),g>0&&g<50&&a<8){const e={word:o,translation:c,image:s,audioSrc:d,category:n};t.push(e),a++}}))})),t.length>0?r.GameRepeat(t):document.getElementById("app").innerHTML='<h2 class="repeat-massage">You not have words less -50% correct answers!</h2>'}))}},788:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.tableBtnReset=void 0;const o=a(901);e.tableBtnReset=function(){const t=document.getElementById("reset");null==t||t.addEventListener("click",(()=>{localStorage.clear(),null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(o.data));const t=document.querySelector("#app");document.querySelector("#toggle-btn").style.display="none",t.innerHTML='<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Category</th><th scope="col">Word</th><th scope="col">Translation</th><th scope="col">Train</th><th scope="col">Game</th><th scope="col">Wrong</th><th scope="col">%</th></tr></thead></table>';const e=Object.keys(o.data);let a=0;e.forEach((t=>{const e=localStorage.getItem("testObject"),o=JSON.parse(e),r=t;Object.keys(o[`${r}`]).forEach((e=>{const i=o[`${r}`][`${e}`].word,n=o[`${r}`][`${e}`].translation,c=t,d=o[`${r}`][`${e}`].train,s=o[`${r}`][`${e}`].correct,l=o[`${r}`][`${e}`].error;let g=s/l*100;g||(g=0),g===1/0&&(g=100),a++;const m=document.createElement("tr");m.style.backgroundColor=a%2==0?"#D1E7DD":"#fff";const u=`\n      <th scope="row">${a}</th><td>${c}</td><td>${i}</td><td>${n}</td><td>${d}</td><td>${s}</td><td>${l}</td><td>${Math.round(g)}</td>\n      `;m.innerHTML=u;const p=document.querySelector("table");null==p||p.append(m)}))}));const r=document.createElement("div");r.classList.add("btn-table"),r.innerHTML='\n   <button id="reset" class="reset">Reset</button>\n   <button id="repeat-word" class="repeat-word">Repeat words</button>\n  ',t.prepend(r)}))}},113:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getTable=void 0;const o=a(901),r=a(788),i=a(688);e.getTable=function(){const t=document.querySelector("#app");document.querySelector("#toggle-btn").style.display="none",t.innerHTML='<table class="table table-responsive-sm"><thead><tr><th scope="col">#</th><th scope="col">Category</th><th scope="col">Word</th><th scope="col">Translation</th><th scope="col">Train</th><th scope="col">Game</th><th scope="col">Wrong</th><th scope="col">%</th></tr></thead></table>';const e=Object.keys(o.data);let a=0;e.forEach((t=>{const e=localStorage.getItem("testObject"),o=JSON.parse(e),r=t;Object.keys(o[`${r}`]).forEach((e=>{const i=o[`${r}`][`${e}`].word,n=o[`${r}`][`${e}`].translation,c=t,d=o[`${r}`][`${e}`].train,s=o[`${r}`][`${e}`].correct,l=o[`${r}`][`${e}`].error;let g=s/(l+s)*100;g||(g=0),g===1/0&&(g=100),a++;const m=document.createElement("tr");m.style.backgroundColor=a%2==0?"#D1E7DD":"#fff";const u=`\n      <th scope="row">${a}</th><td>${c}</td><td>${i}</td><td>${n}</td><td>${d}</td><td>${s}</td><td>${l}</td><td>${Math.round(g)}</td>\n      `;m.innerHTML=u;const p=document.querySelector("table");null==p||p.append(m)}))}));const n=document.createElement("div");n.classList.add("btn-table"),n.innerHTML='\n   <button id="reset" class="reset">Reset</button>\n   <button id="repeat-word" class="repeat-word">Repeat words</button>\n  ',t.prepend(n),r.tableBtnReset(),i.repeatWords()}},669:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.playAudio=void 0;const o=a(901);e.playAudio=function(){document.querySelectorAll("#thefront").forEach((t=>{t.addEventListener("click",(()=>{const e=t.getAttribute("data-set"),a=t.getAttribute("data-category"),r=t.getAttribute("data-name");e&&new Audio(e).play(),null===localStorage.getItem("testObject")&&localStorage.setItem("testObject",JSON.stringify(o.data));const i=localStorage.getItem("testObject"),n=JSON.parse(i);n[`${a}`][`${r}`].train+=1,localStorage.setItem("testObject",JSON.stringify(n)),console.log(n[`${a}`][`${r}`].translation),console.log(n[`${a}`][`${r}`].train)}))}))}},700:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.cards=void 0,e.cards=[["Action(set_A)","Action(set_B)","Animal(set_A)","Animal(set_B)","Clothes","Emotions","Foods","Seasons"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"bread",translation:"хлеб",image:"img/bread.jpg",audioSrc:"audio/bread.mp3"},{word:"cheese",translation:"сыр",image:"img/cheese.jpg",audioSrc:"audio/cheese.mp3"},{word:"coffee",translation:"кофе",image:"img/coffee.jpg",audioSrc:"audio/coffee.mp3"},{word:"honey",translation:"мёд",image:"img/honey.jpg",audioSrc:"audio/honey.mp3"},{word:"jam",translation:"варенье",image:"img/jam.jpg",audioSrc:"audio/jam.mp3"},{word:"meat",translation:"мясо",image:"img/meat.jpg",audioSrc:"audio/meat.mp3"},{word:"rice",translation:"рис",image:"img/rice.jpg",audioSrc:"audio/rice.mp3"},{word:"soup",translation:"суп",image:"img/soup.jpg",audioSrc:"audio/soup.mp3"}],[{word:"cold",translation:"холодно",image:"img/cold.jpg",audioSrc:"audio/cold.mp3"},{word:"day",translation:"день",image:"img/day.jpg",audioSrc:"audio/day.mp3"},{word:"fall",translation:"осень",image:"img/falling.jpg",audioSrc:"audio/fall.mp3"},{word:"hot",translation:"тепло",image:"img/hot.jpg",audioSrc:"audio/hot.mp3"},{word:"moon",translation:"луна",image:"img/moon.jpg",audioSrc:"audio/moon.mp3"},{word:"spring",translation:"весна",image:"img/spring.jpg",audioSrc:"audio/spring.mp3"},{word:"summer",translation:"лето",image:"img/summer.jpg",audioSrc:"audio/summer.mp3"},{word:"winter",translation:"зима",image:"img/winter.jpg",audioSrc:"audio/winter.mp3"}]]},901:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.data=void 0,e.data={"Action(set_A)":{cry:{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3",category:"Action(set_A)",train:0,correct:0,error:0},dance:{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3",category:"Action(set_A)",train:0,correct:0,error:0},dive:{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3",category:"Action(set_A)",train:0,correct:0,error:0},draw:{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3",category:"Action(set_A)",train:0,correct:0,error:0},fish:{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3",category:"Action(set_A)",train:0,correct:0,error:0},fly:{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3",category:"Action(set_A)",train:0,correct:0,error:0},hug:{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3",category:"Action(set_A)",train:0,correct:0,error:0},jump:{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3",category:"Action(set_A)",train:0,correct:0,error:0}},"Action(set_B)":{open:{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3",category:"Action(set_B)",train:0,correct:0,error:0},play:{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3",category:"Action(set_B)",train:0,correct:0,error:0},point:{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3",category:"Action(set_B)",train:0,correct:0,error:0},ride:{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3",category:"Action(set_B)",train:0,correct:0,error:0},run:{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3",category:"Action(set_B)",train:0,correct:0,error:0},sing:{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3",category:"Action(set_B)",train:0,correct:0,error:0},skip:{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3",category:"Action(set_B)",train:0,correct:0,error:0},swim:{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3",category:"Action(set_B)",train:0,correct:0,error:0}},"Animal(set_A)":{cat:{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},chick:{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},chicken:{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},dog:{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},horse:{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},pig:{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},rabbit:{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3",category:"Animal(set_A)",train:0,correct:0,error:0},sheep:{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3",category:"Animal(set_A)",train:0,correct:0,error:0}},"Animal(set_B)":{bird:{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},fish:{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},frog:{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},giraffe:{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},lion:{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},mouse:{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},turtle:{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3",category:"Animal(set_B)",train:0,correct:0,error:0},dolphin:{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3",category:"Animal(set_B)",train:0,correct:0,error:0}},Clothes:{skirt:{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3",category:"Clothes",train:0,correct:0,error:0},pants:{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3",category:"Clothes",train:0,correct:0,error:0},blouse:{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3",category:"Clothes",train:0,correct:0,error:0},dress:{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3",category:"Clothes",train:0,correct:0,error:0},boot:{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3",category:"Clothes",train:0,correct:0,error:0},shirt:{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3",category:"Clothes",train:0,correct:0,error:0},coat:{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3",category:"Clothes",train:0,correct:0,error:0},shoe:{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3",category:"Clothes",train:0,correct:0,error:0}},Emotions:{sad:{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3",category:"Emotions",train:0,correct:0,error:0},angry:{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3",category:"Emotions",train:0,correct:0,error:0},happy:{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3",category:"Emotions",train:0,correct:0,error:0},tired:{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3",category:"Emotions",train:0,correct:0,error:0},surprised:{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3",category:"Emotions",train:0,correct:0,error:0},scared:{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3",category:"Emotions",train:0,correct:0,error:0},smile:{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3",category:"Emotions",train:0,correct:0,error:0},laugh:{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3",category:"Emotions",train:0,correct:0,error:0}},Foods:{bread:{word:"bread",translation:"хлеб",image:"img/bread.jpg",audioSrc:"audio/bread.mp3",category:"Foods",train:0,correct:0,error:0},cheese:{word:"cheese",translation:"сыр",image:"img/cheese.jpg",audioSrc:"audio/cheese.mp3",category:"Foods",train:0,correct:0,error:0},coffee:{word:"coffee",translation:"кофе",image:"img/coffee.jpg",audioSrc:"audio/coffee.mp3",category:"Foods",train:0,correct:0,error:0},honey:{word:"honey",translation:"мёд",image:"img/honey.jpg",audioSrc:"audio/honey.mp3",category:"Foods",train:0,correct:0,error:0},jam:{word:"jam",translation:"варенье",image:"img/jam.jpg",audioSrc:"audio/jam.mp3",category:"Foods",train:0,correct:0,error:0},meat:{word:"meat",translation:"мясо",image:"img/meat.jpg",audioSrc:"audio/meat.mp3",category:"Foods",train:0,correct:0,error:0},rice:{word:"rice",translation:"рис",image:"img/rice.jpg",audioSrc:"audio/rice.mp3",category:"Foods",train:0,correct:0,error:0},soup:{word:"soup",translation:"суп",image:"img/soup.jpg",audioSrc:"audio/soup.mp3",category:"Foods",train:0,correct:0,error:0}},Seasons:{cold:{word:"cold",translation:"холодно",image:"img/cold.jpg",audioSrc:"audio/cold.mp3",category:"Seasons",train:0,correct:0,error:0},day:{word:"day",translation:"день",image:"img/day.jpg",audioSrc:"audio/day.mp3",category:"Seasons",train:0,correct:0,error:0},fall:{word:"fall",translation:"осень",image:"img/falling.jpg",audioSrc:"audio/fall.mp3",category:"Seasons",train:0,correct:0,error:0},hot:{word:"hot",translation:"тепло",image:"img/hot.jpg",audioSrc:"audio/hot.mp3",category:"Seasons",train:0,correct:0,error:0},moon:{word:"moon",translation:"луна",image:"img/moon.jpg",audioSrc:"audio/moon.mp3",category:"Seasons",train:0,correct:0,error:0},spring:{word:"spring",translation:"весна",image:"img/spring.jpg",audioSrc:"audio/spring.mp3",category:"Seasons",train:0,correct:0,error:0},summer:{word:"summer",translation:"лето",image:"img/summer.jpg",audioSrc:"audio/summer.mp3",category:"Seasons",train:0,correct:0,error:0},winter:{word:"winter",translation:"зима",image:"img/winter.jpg",audioSrc:"audio/winter.mp3",category:"Seasons",train:0,correct:0,error:0}}}}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{a(387),a(564),a(362),a(615),a(683);const t=a(968),e=a(894),o=a(444),r=document.createElement("section");if(r.setAttribute("id","page-wrapper"),document.querySelector("body").append(r),t.navHeader(),e.HomePage(),o.footer(),performance.navigation.type===performance.navigation.TYPE_RELOAD){const t=document.getElementById("togglerID");window.location.assign(""),t.classList.add("checkedCard")}})()})();