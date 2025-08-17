"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Controller } from "swiper/modules";

export default function Home() {
  const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [subSwiper1, setSubSwiper1] = useState<SwiperType | null>(null);
  const [subSwiper2, setSubSwiper2] = useState<SwiperType | null>(null);
  const [subSwiper3, setSubSwiper3] = useState<SwiperType | null>(null);

  const images: string[] = ["/file.svg", "/globe.svg", "/next.svg", "/window.svg"];

  const handleSlideTo = (index: number) => {
    mainSwiper?.slideToLoop(index);
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-0 left-0 w-[calc(100%-18rem)] h-screen">
        <Swiper
          onSwiper={setMainSwiper}
          spaceBetween={50}
          slidesPerView={1}
          loop
          modules={[Autoplay, Controller]}
          controller={{ control: [subSwiper1, subSwiper2, subSwiper3].filter(Boolean) as SwiperType[] }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full flex items-center justify-center text-4xl">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => handleSlideTo(index)}
              className="w-12 h-12 rounded-full overflow-hidden"
            >
              slide {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-72 h-72">
        <Swiper
          onSwiper={setSubSwiper1}
          spaceBetween={50}
          slidesPerView={1}
          loop
          modules={[Controller]}
        >
          {[...data.slice(1), ...data.slice(0, 1)].map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full flex items-center justify-center">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-72 h-72">
        <Swiper
          onSwiper={setSubSwiper2}
          spaceBetween={50}
          slidesPerView={1}
          loop
          modules={[Controller]}
        >
          {[...data.slice(2), ...data.slice(0, 2)].map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full flex items-center justify-center">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-0 right-0 w-72 h-72">
        <Swiper
          onSwiper={setSubSwiper3}
          spaceBetween={50}
          slidesPerView={1}
          loop
          modules={[Controller]}
        >
          {[...data.slice(3), ...data.slice(0, 3)].map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full flex items-center justify-center">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
