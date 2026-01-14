let products=JSON.parse(localStorage.getItem("products"))||[{name:"iPhone 13",price:30000,img:"images/phone1.jpg"}];
let box=document.getElementById("products");
if(box){products.forEach(p=>{box.innerHTML+=`<div class='product'><img src='${p.img}'><h3>${p.name}</h3><p>${p.price} جنيه</p></div>`})}
let t=document.getElementById("darkToggle");
if(localStorage.getItem("dark")==="on"){document.body.classList.add("dark");t.textContent="☀️"}
t.onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("dark",document.body.classList.contains("dark")?"on":"off")}
