document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("#mainVideo");
  const marker = document.querySelector(".video-marker");
  const timeline = document.querySelector(".video-timeline");
  const cursor = document.querySelector(".cursor");
  const cursorText = document.querySelector(".cursor p");
  let isPlaying = true;

  // 更新时间轴标记位置
  video.addEventListener("timeupdate", function () {
    const percentage = (video.currentTime / video.duration) * 100;
    marker.style.left = `calc(${percentage}% - 1px)`;
  });

  // 点击时间轴以跳转到特定时间
  timeline.addEventListener("click", function (e) {
    e.stopPropagation();
    const rect = timeline.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percentage = clickPosition / rect.width;
    video.currentTime = percentage * video.duration;
    marker.style.left = `calc(${percentage * 100}% - 1px)`;
  });

  // 修正：document.activeElement 不正确，应该是 document.addEventListener
  document.addEventListener("click", function (e) {
    if (!timeline.contains(e.target)) {
      if (isPlaying) {
        video.pause();
        cursorText.textContent = "Play";
      } else {
        video.play();
        cursorText.textContent = "Pause";
      }
      isPlaying = !isPlaying;
    }
  });

  // 修正：更新光标位置
  document.addEventListener("mousemove", function (e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});
