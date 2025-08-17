"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Controller } from "swiper/modules";

export default function Home() {
  const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [subSwipers, setSubSwipers] = useState<(SwiperType | null)[]>([null, null, null]);

  const images: string[] = ["/file.svg", "/globe.svg", "/next.svg", "/window.svg"];

  // サブスワイパーの配置設定
  const subSwiperPositions = [
    { className: "absolute top-0 right-0 w-72 h-72" },
    { className: "absolute top-1/2 right-0 transform -translate-y-1/2 w-72 h-72" },
    { className: "absolute bottom-0 right-0 w-72 h-72" }
  ];

  const handleSlideTo = (index: number) => {
    mainSwiper?.slideToLoop(index);
  };

  const handleSubSwiperSet = (index: number) => (swiper: SwiperType) => {
    setSubSwipers(prev => {
      const newSwipers = [...prev];
      newSwipers[index] = swiper;
      return newSwipers;
    });
  };

  // データをオフセットでずらす関数
  const getOffsetData = (offset: number) => {
    return [...data.slice(offset + 1), ...data.slice(0, offset + 1)];
  };

  return (
    <div className="relative w-screen h-screen">
      {/* メインスワイパー */}
      <div className="absolute top-0 left-0 w-[calc(100%-18rem)] h-screen">
        <Swiper
          onSwiper={setMainSwiper}
          spaceBetween={50}
          slidesPerView={1}
          loop
          modules={[Autoplay, Controller]}
          controller={{ control: subSwipers.filter(Boolean) as SwiperType[] }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((d, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-500 h-full flex items-center justify-center text-4xl">
                {d}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ナビゲーションボタン */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => handleSlideTo(index)}
              className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-sm font-semibold"
            >
             Slide {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* サブスワイパー（ループで生成） */}
      {subSwiperPositions.map((position, index) => (
        <div key={index} className={position.className}>
          <Swiper
            onSwiper={handleSubSwiperSet(index)}
            spaceBetween={50}
            slidesPerView={1}
            loop
            modules={[Controller]}
          >
            {getOffsetData(index).map((d, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="bg-gray-400 h-full flex items-center justify-center text-sm font-medium">
                  {d}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}