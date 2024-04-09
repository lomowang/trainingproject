const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// 為menuBtn添加一個click事件監聽器，當用戶點擊按鈕時執行以下函數。
menuBtn.addEventListener("click", (e) => {
  // 切換navLinks元素的"class"屬性中包含"open"這個類別。
  // 如果"open"類別存在，則移除它；如果不存在，則添加它。
  // 這樣做可以控制導航連結的顯示與隱藏。
  navLinks.classList.toggle("open");

  // 檢查navLinks元素的"class"屬性中是否包含"open"這個類別，
  // 並將結果賦值給變量isOpen。
  const isOpen = navLinks.classList.contains("open");

  // 根據isOpen的值，動態設定menuBtnIcon的"class"屬性。
  // 如果導航連結是展開的（即isOpen為true），則將圖標設置為關閉圖標（"ri-close-line"）；
  // 否則，設置為菜單圖標（"ri-menu-line"）。
  // 這樣做可以讓用戶知道當前導航菜單是開啟還是關閉狀態。
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// 控制標題浮現
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal().reveal(selector, options);: 这是ScrollReveal的基本用法。

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header_content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_content .header_btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about_card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer_card", {
  ...scrollRevealOption,
  interval: 500,
});
