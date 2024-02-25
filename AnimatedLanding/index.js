document.addEventListener("DOMContentLoaded", function () {
  splitTextIntoSpans(".logo p");
  splitTextIntoSpans(".hero-copy h1");

  gsap.to(".img-holder img", {
    left: 0,
    stagger: 0.1,
    ease: "power4.out",
    duration: 1.5,
    delay: 4,
  });
  gsap.to(".img-holder img", {
    left: "110%",
    stagger: -0.1,
    ease: "power4.out",
    duration: 1.5,
    delay: 7,
  });
});

function splitTextIntoSpans(selector) {
  var element = document.querySelector(selector);
  if (element) {
    var text = element.innerText;
    var splitText = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");
    element.innerHTML = splitText; // 修改这里
  }
}

function startLoader() {
  var counterElement = document.querySelector(".counter p");
  var currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      animateText();
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;
    currentValue = currentValue > 100 ? 100 : currentValue;
    counterElement.innerHTML =
      currentValue
        .toString()
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("") + "<span>%</span>";

    var delay = Math.floor(Math.random() * 200) + 100;
    setTimeout(updateCounter, delay); // 修改这里
  }

  function animateText() {
    // 使用 Timeline 优化动画顺序和延迟
    var tl = gsap.timeline({ delay: 4 });

    tl.to(".counter p span", {
      top: "-400px",
      stagger: 0.1,
      ease: "power3.inOut",
      duration: 1,
    })
      .to(
        ".logo p span",
        {
          top: "0",
          stagger: 0.1,
          ease: "power3.inOut",
          duration: 1,
        },
        "-=0.5"
      ) // 开始时间提前 0.5 秒，与前一个动画重叠
      .to(".logo p span", {
        top: "-400px",
        stagger: 0.1,
        ease: "power3.inOut",
        duration: 1,
        delay: 3,
      })
      .to(
        ".overlay",
        {
          opacity: 0,
          ease: "power3.inOut",
          duration: 1,
        },
        "+=0.5"
      ) // 延迟 0.5 秒开始
      .to(
        ".hero img",
        {
          scale: 1,
          ease: "power3.inOut",
          duration: 2,
        },
        "-=1"
      ) // 与前一个动画重叠 1 秒
      .to(
        ".hero-copy h1 span",
        {
          top: "0",
          stagger: 0.1,
          ease: "power3.inOut",
          duration: 2,
        },
        "<"
      ) // 与前一个动画同时开始
      .to(
        "nav",
        {
          top: "0",
          ease: "power3.inOut",
          duration: 2,
        },
        "<0.3"
      ); // 与前一个动画同时开始，但有 0.3 秒的延迟
  }

  updateCounter();
}

startLoader();
