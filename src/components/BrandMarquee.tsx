"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BrandMarquee() {
  const brands = [
    "/images/thumbs/brand-thumb1.png",
    "/images/thumbs/brand-thumb2.png",
    "/images/thumbs/brand-thumb3.png",
    "/images/thumbs/brand-thumb4.png",
    "/images/thumbs/brand-thumb1.png",
    "/images/thumbs/brand-thumb6.png",
    "/images/thumbs/brand-thumb7.png",
    "/images/thumbs/brand-thumb8.png",
    "/images/thumbs/brand-thumb1.png",
    "/images/thumbs/brand-thumb2.png",
    "/images/thumbs/brand-thumb3.png",
    "/images/thumbs/brand-thumb4.png",
    "/images/thumbs/brand-thumb1.png",
    "/images/thumbs/brand-thumb6.png",
    "/images/thumbs/brand-thumb7.png",
  ];

  return (
    <div className="maquee-area maquee-two-area brand-two-area overflow-hidden bg-main-three-600 relative z-2 py-[25px] pb-[120px]">
      <div className="maquee-slider">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          slidesPerView="auto"
          spaceBetween={30}
          className="maquee-active flex items-center ease-linear"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className="maquee-box brand-two-box flex items-center w-auto bg-white/33 px-[47px] h-[150px] rounded-[11px]">
                <div>
                  <img src={brand} alt="thumb" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
