gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // 将所有 section 元素转换为数组
  const sections = gsap.utils.toArray("section");

  // 创建一个滚动动画序列
  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: 0.5,
      snap: 1 / (sections.length - 1),
      start: "top top",
      end: () => "+=" + document.querySelector(".wrapper").offsetWidth,
    },
  });

  // Logo 缩放和移动动画
  gsap.to(".logo", {
    fontSize: "2.5rem",
    top: "4rem",
    scrollTrigger: {
      trigger: ".logo",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
    },
  });

  // 线条高度变化动画
  gsap.to(".line", {
    height: "10rem",
    scrollTrigger: {
      trigger: ".line",
      scrub: 0.5,
      start: "center center",
      end: "bottom top",
    },
  });

  // 为每个 character 元素创建动画
  document.querySelectorAll(".character").forEach((el) => {
    // 字幕动画
    gsap.to(el.querySelector(".caption"), {
      x: 0,
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // 引用动画
    gsap.to(el.querySelector(".quote"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // 昵称动画
    gsap.to(el.querySelector(".nickname"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // 块动画
    gsap.to(el.querySelector(".block"), {
      x: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el,
        start: "top bottom",
        end: () => "+=" + window.innerWidth, // 动态计算结束位置
        scrub: 0.5,
      },
    });

    // 图片动画
    gsap.to(el.querySelector("img"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector("img"),
        start: "top bottom",
        end: "+=50%",
        scrub: 0.5,
      },
    });

    // 大文本动画
    gsap.to(el.querySelector(".huge-text"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });
});
