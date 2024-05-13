// 获取HTML中各个相关元素的引用
let valueSearch = document.getElementById("valueSearch"); // 搜索框元素
let city = document.getElementById("city"); // 显示城市信息的元素
let temperature = document.getElementById("temperature"); // 显示温度信息的元素
let description = document.querySelector(".description"); // 显示天气描述的元素
let clouds = document.getElementById("clouds"); // 显示云量的元素
let humidity = document.getElementById("humidity"); // 显示湿度的元素
let pressure = document.getElementById("pressure"); // 显示气压的元素
let form = document.querySelector("form"); // 表单元素
let main = document.querySelector("main"); // 主区域的元素，用于显示错误信息

// 为表单添加提交事件监听器
form.addEventListener("submit", (event) => {
  event.preventDefault(); // 阻止表单默认的提交行为
  if (valueSearch.value != "") {
    // 检查搜索框是否为空
    searchWeather(); // 如果不为空，则调用 searchWeather 函数请求天气数据
  }
});

// 定义 API 密钥和基础 URL
let id = "a2578ffa91583c3c6adf1d742725fd7b"; // API 密钥
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${id}`; // 构造请求 URL

// 定义查询天气的函数
const searchWeather = () => {
  fetch(`${url}&q=${valueSearch.value}`) // 发送网络请求，查询天气数据
    .then((response) => response.json()) // 将响应数据转换为 JSON
    .then((data) => {
      console.log(data); // 在控制台打印天气数据
      if (data.cod === 200) {
        // 检查响应状态码是否为 200（成功）
        // 更新页面上的天气信息
        city.querySelector("figcaption").innerText = data.name; // 更新城市名称
        city.querySelector(
          "img"
        ).src = `http://flagsapi.com/${data.sys.country}/shiny/32.png`; // 更新国旗图片
        temperature.querySelector(
          "img"
        ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`; // 更新天气图标
        temperature.querySelector("figcaption span").innerText = data.main.temp; // 更新温度
        description.innerText = data.weather[0].description; // 更新天气描述
        clouds.innerText = data.clouds.all + "%"; // 更新云量
        humidity.innerText = data.main.humidity + "%"; // 更新湿度
        pressure.innerText = data.main.pressure + " hPa"; // 更新气压
      } else {
        // 如果查询失败，显示错误信息
        main.classList.add("error"); // 添加错误样式类
        setTimeout(() => {
          main.classList.remove("error"); // 3秒后移除错误样式类
        }, 3000);
      }
      valueSearch.value = ""; // 清空搜索框
    });
};

// 初始化应用，设置默认查询城市为 Washington
const initApp = () => {
  valueSearch.value = "Washington"; // 设置默认城市
  searchWeather(); // 执行一次天气查询
};
initApp(); // 调用初始化函数
