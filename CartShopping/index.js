import cart from "./cart.js";

let app = document.getElementById("app");
let templateContent = document.getElementById("temporaryContent");

// load template fild
const loadTemplate = () => {
  fetch("/CartShopping/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      cart();
    });
};
loadTemplate();
