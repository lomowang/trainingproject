import products from "./products.js";
import cart from "./cart.js";

let app = document.getElementById("app");

// 加载模板文件
const loadTemplate = () => {
  fetch("/CartShopping/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      cart();
      initApp();
    });
};
loadTemplate();

const initApp = () => {
  let idProduct = new URLSearchParams(window.location.search).get("id");
  let info = products.find((value) => value.id == idProduct);
  if (!info) {
    window.location.href = "/";
    return;
  }

  let detail = document.querySelector(".detail");
  detail.querySelector(".image img").src = info.image;
  detail.querySelector(".name").innerText = info.name;
  detail.querySelector(".price").innerText = "$" + info.price;
  detail.querySelector(".description").innerText = info.description;
  detail.querySelector(".addCart").dataset.id = idProduct;

  // 相似产品
  let listProduct = document.querySelector(".listProduct");
  listProduct.innerHTML = "";

  products
    .filter((product) => product.id != idProduct)
    .forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.innerHTML = `
        <a href="./detail.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}"/>
        </a>
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>
        <button class="addCart" data-id="${product.id}">Add To Cart</button>
      `;
      listProduct.appendChild(newProduct);
    });
};
