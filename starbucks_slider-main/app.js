// 获取控制按钮和轮播图元素
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let items = document.querySelectorAll(".carousel .item");

// 初始化轮播图的项目数量和当前激活的项目
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

// 点击“下一个”按钮时的事件处理函数
next.onclick = () => {
  carousel.classList.remove("prev");
  carousel.classList.add("next");
  // 更新轮播图的当前激活项目，循环到第一个项目如果超出最后一个项目
  active = active + 1 >= countItem ? 0 : active + 1;
  // 更新其他显示项目的索引
  other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
  other_2 = active + 1 >= countItem ? 0 : active + 1;
  changeSlider(); // 调用函数更新轮播图显示
};

// 点击“上一个”按钮时的事件处理函数
prev.onclick = () => {
  carousel.classList.remove("next");
  carousel.classList.add("prev");
  // 更新轮播图的当前激活项目，循环到最后一个项目如果低于第一个项目
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  // 更新其他显示项目的索引
  other_1 = active + 1 >= countItem ? 0 : active + 1;
  other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
  changeSlider(); // 调用函数更新轮播图显示
};

// 更新轮播图显示的函数
const changeSlider = () => {
  // 移除当前激活和其他项目的激活状态
  document.querySelector(".carousel .item.active")?.classList.remove("active");
  document
    .querySelector(".carousel .item.other_1")
    ?.classList.remove("other_1");
  document
    .querySelector(".carousel .item.other_2")
    ?.classList.remove("other_2");

  // 重置所有项目的动画，以便重新开始动画
  items.forEach((e) => {
    e.querySelector(".image img").style.animation = "none";
    e.querySelector(".image figcaption").style.animation = "none";
    void e.offsetWidth; // 强制浏览器重新计算并绘制元素
    e.querySelector(".image img").style.animation = "";
    e.querySelector(".image figcaption").style.animation = "";
  });

  // 为新的激活项目和其他项目添加类以显示状态
  items[active].classList.add("active");
  items[other_1].classList.add("other_1");
  items[other_2].classList.add("other_2");

  // 重置自动播放计时器
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    next.click();
  }, 5000);
};

// 初始化自动播放计时器
let autoPlay = setInterval(() => {
  next.click();
}, 5000);
