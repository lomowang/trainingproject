// 獲取控制按鈕的元素
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let backButton = document.getElementById("back");
// 獲取所有「查看更多」按鈕的元素
let seeMoreButtons = document.querySelectorAll(".seeMore");
// 獲取輪播圖元素和列表元素
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");

// 「下一張」按鈕的點擊事件
nextButton.onclick = function () {
  showSlider("next");
};

// 「上一張」按鈕的點擊事件
prevButton.onclick = function () {
  showSlider("prev");
};

// 防止連續快速點擊
let unAcceptClick;
const showSlider = (type) => {
  // 暫時禁用「前進」和「後退」按鈕
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  // 移除先前的類別，以重置動畫
  carousel.classList.remove("prev", "next");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    // 將第一個元素移到最後，實現「下一張」的視覺效果
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    // 將最後一個元素移到最前，實現「上一張」的視覺效果
    let positionLast = items.length - 1;
    listHTML.prepend(items[positionLast]);
    carousel.classList.add("prev");
  }

  // 在動畫完成後重新啟用按鈕
  clearTimeout(unAcceptClick);
  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000); // 等待動畫完成需要的時間
};

// 為每個「查看更多」按鈕添加點擊事件，以顯示詳細資訊
seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.add("showDetail");
  };
});
// 「返回」按鈕的點擊事件，用於從詳細資訊返回
backButton.onclick = function () {
  carousel.classList.remove("showDetail");
};
