// 导入 GSAP 和 ScrollTrigger 插件
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 获取滑动容器及其父容器的 DOM 元素
let imgSlider = document.getElementById("slider-container");
let imgSliderMain = document.getElementById("main-slider-container");

// 计算窗口宽度
let windowWidth = window.innerWidth;

// 计算滑动的总距离
let calculateSliderX =
  imgSlider.children.length * imgSlider.children[0].offsetWidth - windowWidth;

// 创建一个 GSAP 时间线
let imgSliderTimeline = gsap.timeline({
  defaults: {
    // 设置默认的动画属性
    ease: "none",
  },
  scrollTrigger: {
    // 定义滚动触发器的属性
    trigger: imgSliderMain, // 触发器元素
    pin: true, // 固定元素
    start: "top top", // 开始位置
    end: "+=200%", // 结束位置
    scrub: 1, // 平滑滚动的强度
  },
});

// 创建动画，水平移动滑动容器
imgSliderTimeline.to(imgSlider, {
  x: -calculateSliderX, // 使用小写的 'x' 表示水平位移
});
