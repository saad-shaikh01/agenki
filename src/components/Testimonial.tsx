"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonial() {
  return (
    <section className="testimonial-two-area bg-main-three-600 pb-20 lg:pb-[140px] pt-[346px] -mt-[100px] relative z-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-9/12 lg:w-9/12 xl:w-9/12">
            <div className="testimonial-two-slide relative z-1">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".slider-prev",
                  nextEl: ".slider-next",
                }}
                className="testimonial-two-active"
              >
                <SwiperSlide>
                  <div className="testimonial-two-wrapper relative z-1">
                    <div className="mb-10">
                      <p className="testimonial-two-paragraph text-center font-heading font-semibold leading-none text-[3rem] md:text-[4rem] xl:text-[5rem] font-bold text-[#2c2316]">
                        "Your team were great to work with on our basement
                        remodel! I will definitely be working with them for
                        future projects!"
                      </p>
                    </div>
                    <div className="flex justify-center gap-3">
                      <div>
                        <img
                          src="/images/thumbs/testimonial-img.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h4 className="testimonial-two-title text-2xl font-heading font-semibold text-[#2c2316]">
                          John Smith
                        </h4>
                        <p className="testimonial-two-text text-sm font-medium text-[#2c2316]">
                          Small Business Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Duplicate slide for demo purposes as in the template */}
                <SwiperSlide>
                  <div className="testimonial-two-wrapper relative z-1">
                    <div className="mb-10">
                      <p className="testimonial-two-paragraph text-center font-heading font-semibold leading-none text-[3rem] md:text-[4rem] xl:text-[5rem] font-bold text-[#2c2316]">
                        "Your team were great to work with on our basement
                        remodel! I will definitely be working with them for
                        future projects!"
                      </p>
                    </div>
                    <div className="flex justify-center gap-3">
                      <div>
                        <img
                          src="/images/thumbs/testimonial-img.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h4 className="testimonial-two-title text-2xl font-heading font-semibold text-[#2c2316]">
                          John Smith
                        </h4>
                        <p className="testimonial-two-text text-sm font-medium text-[#2c2316]">
                          Small Business Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="testimonial-two-arrow-box">
                <button
                  className="w-14 h-14 leading-none inline-flex justify-center items-center rounded-full text-main-two-600 bg-transparent border border-main-two-600 absolute text-2xl z-2 top-[36%] left-[-60px] md:left-[-100px] xl:left-[-200px] -translate-y-1/2 slider-prev hover:bg-main-two-600 hover:text-white transition-all duration-300"
                  tabIndex={0}
                  aria-label="Previous slide"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  className="w-14 h-14 leading-none inline-flex justify-center items-center rounded-full text-main-two-600 bg-transparent border border-main-two-600 absolute text-2xl z-2 top-[36%] right-[-60px] md:right-[-100px] xl:right-[-200px] -translate-y-1/2 slider-next hover:bg-main-two-600 hover:text-white transition-all duration-300"
                  tabIndex={0}
                  aria-label="Next slide"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <img
                  className="testimonial-two-sticker-1 absolute z-[-1] top-[-110px] right-[-60px]"
                  src="/images/shapes/testimonial-sticker1.png"
                  alt="sticker"
                />
                <img
                  className="testimonial-two-sticker-2 absolute z-[-1] bottom-0 left-[-320px]"
                  src="/images/shapes/testimonial-sticker2.png"
                  alt="sticker"
                />
                <img
                  className="testimonial-two-sticker-3 absolute z-[-1] bottom-[-70px] right-[-200px]"
                  src="/images/shapes/testimonial-sticker3.png"
                  alt="sticker"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
