let products = JSON.parse(localStorage.getItem("products")) || [
 {name:"iPhone 13",price:30000,img:"https://picsum.photos/300?1"},
 {name:"Gaming Headset",price:1500,img:"https://picsum.photos/300?2"}
];

let box = document.getElementById("products");
if(box){
 products.forEach(p=>{
  box.innerHTML += `
  <div class="product">
   <img src="${p.img}">
   <h3>${p.name}</h3>
   <p>${p.price} جنيه</p>
  </div>`;
 });
}
