var all={init:function(){this.todolist()},todolist:function(){k();const e=document.querySelector(".loader"),t=document.querySelector(".btn-click"),l=document.querySelector(".btn--complete"),o=document.querySelector(".btn--cancel"),a=document.querySelector(".overlay"),c=document.querySelectorAll(".edit i"),n=document.querySelectorAll("th.trash"),s=document.querySelector(".yes"),r=document.querySelector(".no"),i=document.querySelector(".popup"),u=document.querySelector(".popup__form"),d=document.querySelector(".confirm"),m=document.querySelector(".confirm__content"),v=document.querySelector("#user"),S=document.querySelector("#email"),h=document.querySelector("#adress"),y=document.querySelector(".input");var f;function g(e){a.classList.add("active"),e.classList.add("active")}function p(e){a.classList.remove("active"),e.classList.remove("active")}function q(){e.classList.add("loading")}function L(){e.classList.remove("loading")}function E(){return 0!=v.value.length&&0!=S.value.length&&0!=h.value.length||(u.classList.add("validate"),setTimeout(()=>{u.classList.remove("validate")},500),!1)}function k(){const e=JSON.parse(localStorage.getItem("local")),t=document.querySelector(".content__list-tbody");if(0===e.length)t.innerHTML='<h1 class="no-task"><i class="fas fa-file-alt"></i> No Tasks...! </h1>';else{const l=e.map((e,t)=>` <tr>\n                    <th>${e.id}</th>\n                    <th  class="user__title">${e.user}</th>\n                    <th>${e.email}</th>\n                    <th>${e.adress}</th>\n                    <th class="edit"><i class="fas fa-edit"></i></th>\n                    <th class="trash"><i class="fas fa-trash-alt"></i></th>\n                </tr>`);t.innerHTML=l.join(" ")}}t.addEventListener("click",()=>{f="add",g(i),g(u)}),a.addEventListener("click",()=>{p(i),p(u),p(d),p(m)}),o.addEventListener("click",()=>{p(i),p(u)}),l.addEventListener("click",()=>{E(),E()&&(q(),setTimeout(()=>{L(),"add"==f&&(function(){let e,t=new class{constructor(e,t,l,o){this.id=e,this.user=t,this.email=l,this.adress=o}}((e=localStorage.getItem("local")?JSON.parse(localStorage.getItem("local")):[]).length+1,v.value,S.value,h.value);e.push(t),localStorage.setItem("local",JSON.stringify(e)),console.log(e)}(),k(),v.value="",S.value="",h.value="",p(i),p(u),location.reload())},1e3))}),c.forEach((e,t)=>{f="edit",e.addEventListener("click",()=>{g(i),g(u);let e=JSON.parse(localStorage.getItem("local"));v.value=e[t].user,S.value=e[t].email,h.value=e[t].adress,l.addEventListener("click",()=>{E(),E()&&(q(),setTimeout(()=>{L(),"edit"==f&&function(e){let t=JSON.parse(localStorage.getItem("local"));t[e].user=v.value,t[e].email=S.value,t[e].adress=h.value,localStorage.setItem("local",JSON.stringify(t)),location.reload()}(t)},1e3))})})}),n.forEach((e,t)=>{e.addEventListener("click",e=>{g(d),g(m),s.addEventListener("click",()=>{q(),setTimeout(()=>{L(),function(e){let t=JSON.parse(localStorage.getItem("local"));t.splice(e,1),t.forEach((e,t)=>e.id=t+1),localStorage.setItem("local",JSON.stringify(t)),location.reload()}(t),k(),location.reload()},1e3)}),r.addEventListener("click",()=>{p(d),p(m),k(),location.reload()})})}),y.addEventListener("keyup",()=>{!function(e){let t=document.querySelectorAll(".content__list-tbody tr");t.forEach((l,o)=>{let a=l.querySelector(".user__title").textContent;a.toUpperCase().includes(e.toUpperCase())?t[o].style.display="":t[o].style.display="none"})}(y.value)})}};all.init();