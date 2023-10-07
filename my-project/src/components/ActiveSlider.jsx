import { Swiper, SwiperSlide } from "swiper/react"; // 引入 Swiper 庫的 React 組件
import "swiper/css"; // 引入 Swiper 的 CSS 基礎樣式
import "swiper/css/pagination"; // 引入 Swiper 的分頁樣式
import "swiper/css/free-mode"; // 引入 Swiper 的自由模式樣式

import { FreeMode, Pagination } from "swiper/modules"; // 引入 Swiper 的模塊，自由模式和分頁
import { ServiceData } from "../constants/index"; // 引入服務數據
import { RxArrowTopRight } from "react-icons/rx"; // 引入 RxArrowTopRight 圖示

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#6c34af]">
      <h1 className="font-semibold text-white text-4xl">Our Services</h1>{" "}
      {/* 頁面標題 */}
      <p className="text-gray-200 text-xl pb-8 pt-4">
        We provide a variety of services
      </p>{" "}
      {/* 頁面描述文字 */}
      <Swiper
        breakpoints={{
          // Swiper 斷點配置，根據不同的視窗寬度設定顯示幾張幻燈片和間距
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true} // 啟用 Swiper 的自由模式
        pagination={{
          // Swiper 分頁配置，可點擊切換幻燈片
          clickable: true,
        }}
        modules={[FreeMode, Pagination]} // 引用 Swiper 模塊，自由模式和分頁
        className="max-w-[90%] lg:max-w-[80%]" // Swiper 容器的 CSS 類別
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage}` }} // 背景圖片的動態設定
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />{" "}
              {/* 點擊時背景的變暗效果 */}
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />{" "}
                {/* 顯示圖示 */}
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>{" "}
                {/* 服務標題 */}
                <p className="lg:text-[18px]">{item.content}</p>{" "}
                {/* 服務內容文字 */}
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />{" "}
              {/* 顯示 RxArrowTopRight 圖示 */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider; // 匯出 ActiveSlider 組件
