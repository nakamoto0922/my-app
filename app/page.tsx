"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Controller, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

export default function Home() {
  const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [subSwipers, setSubSwipers] = useState<(SwiperType | null)[]>([null, null, null]);

  const images: string[] = ["/file.svg", "/globe.svg", "/next.svg", "/window.svg"];

  // サブスワイパーの配置設定
  

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
      <div className="absolute top-0 left-0 w-full lg:w-[calc(100%-18rem)] h-screen">
        <Swiper
          onSwiper={setMainSwiper}
          spaceBetween={50}
          slidesPerView={1}
          loop
          effect={"fade"}
          modules={[Autoplay, Controller, EffectFade]}
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
      <div className="absolute top-0 right-0 w-72 h-72 hidden lg:block">
        <Swiper
          onSwiper={handleSubSwiperSet(0)}
          spaceBetween={50}
          slidesPerView={1}
          loop
          effect={"fade"}
          modules={[Controller, EffectFade]}
        >
          {getOffsetData(0).map((d, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="bg-gray-400 h-full flex items-center justify-center text-sm font-medium">
                {d}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-72 h-72 hidden lg:block">
        <Swiper
          onSwiper={handleSubSwiperSet(1)}
          spaceBetween={50}
          slidesPerView={1}
          loop
          effect={"fade"}
          modules={[Controller, EffectFade]}
        >
          {getOffsetData(1).map((d, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="bg-gray-400 h-full flex items-center justify-center text-sm font-medium">
                {d}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-0 right-0 w-72 h-72 hidden lg:block">
        <Swiper
          onSwiper={handleSubSwiperSet(2)}
          spaceBetween={50}
          slidesPerView={1}
          loop
          effect={"fade"}
          modules={[Controller, EffectFade]}
        >
          {getOffsetData(2).map((d, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="bg-gray-400 h-full flex items-center justify-center text-sm font-medium">
                {d}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}