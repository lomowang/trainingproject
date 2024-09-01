import Lenis from "@studio-freight/lenis";

let lenis;
let percentage;

const progressBar = {
  element: document.querySelector(".section_bar"),
  line: document.querySelector(".section_bar_line_filled"),
  dots: document.querySelectorAll(".section_bar_line_dot"), // 修正拼写错误
  labels: document.querySelectorAll(".section_bar_label_item"),
};

const progressBarOffset =
  (progressBar.element.getBoundingClientRect().left / window.innerWidth) * 100; // 修正变量名
const video = document.querySelector(".section_bg_video");
const isMobile = window.matchMedia("(max-width: 768px)").matches; // 修正拼写错误
const initLenis = () => {
  lenis = new Lenis({
    lerp: 0.05,
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 2,
    content: document.querySelector(".section_content"), // 修正拼写错误
    orientation: isMobile ? "vertical" : "horizontal",
  });

  lenis.on("scroll", ({ scroll, limit }) => progress(scroll, limit));
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

const activateKeypoints = (keypoints, element) => {
  if (percentage >= keypoints) {
    element.classList.add("--active");
  } else {
    element.classList.remove("--active");
  }
};

const progress = (scroll, limit) => {
  let keypoints = [];
  let scrollPercentage = (scroll / limit) * 100; // 修正变量名

  progressBar.dots.forEach((dot) => {
    const dotPosition = dot.getBoundingClientRect().left; // 修正拼写错误
    const keypointPercentage =
      ((dotPosition - progressBarOffset) / window.innerWidth) * 100;

    keypoints.push(keypointPercentage); // 修正变量名
  });

  percentage = keypoints[0] + (scrollPercentage * (100 - keypoints[0])) / 100;

  progressBar.line.style.width = `${percentage}%`;
  progressBar.dots.forEach((dot, index) =>
    activateKeypoints(keypoints[index], dot)
  );
  progressBar.labels.forEach((label, index) =>
    activateKeypoints(keypoints[index], label)
  ); // 修正拼写错误
};

window.addEventListener("DOMContentLoaded", () => {
  initLenis();
  lenis.scrollTo(0);
  video.play();
});
