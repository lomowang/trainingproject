import cart from "./cart.js";
import products from "./products.js";

let app = document.getElementById("app");
let templateContent = document.getElementById("temporaryContent");

// load template fild
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
  // 获取 DOM 中的产品列表容器
  let listProduct = document.querySelector(".listProduct");

  // 清空列表容器的现有内容
  listProduct.innerHTML = null;

  // 遍历 products 数组（此数组应包含所有产品的数据）
  products.forEach((product) => {
    // 为每个产品创建一个新的 div 元素
    let newProduct = document.createElement("div");

    // 为这个新元素添加 'item' 类，用于样式或标识
    newProduct.classList.add("item");

    // 设置新元素的内部 HTML，包括产品图像、名称、价格和添加到购物车的按钮
    newProduct.innerHTML = `

    <a href="./detail.html?id=${product.id}">
      <img src="${product.image}"/>       <!-- 产品图像 -->
    </a>
      <h2>${product.name}</h2>            <!-- 产品名称 -->
      <div class="price">${product.price}</div>   <!-- 产品价格 -->
      <button class="addCart"
      data-id="${product.id}"
      >            <!-- 添加到购物车按钮 -->
      
      Add To Cart
      </button>
    `;

    // 将新创建的产品元素添加到产品列表容器中
    listProduct.appendChild(newProduct);
  });
};
