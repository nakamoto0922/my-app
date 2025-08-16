"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-0 left-0 w-96 h-96">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          loop
          autoplay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          loop
          autoplay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[...data.slice(1), ...data.slice(0, 1)].map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          loop
          autoplay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[...data.slice(2), ...data.slice(0, 2)].map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          loop
          autoplay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[...data.slice(3), ...data.slice(0, 3)].map((d) => (
            <SwiperSlide>
              <div className="bg-gray-500 h-full">{d}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
