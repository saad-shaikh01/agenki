"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef(null);

  useGSAP(
    () => {
      // 19. video button Js
      if (document.querySelector(".video-button-target")) {
        let topToBottomTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".video-button-target",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2,
            markers: false,
          },
        });
        topToBottomTL.fromTo(
          ".video-button-target",
          {
            y: 0,
            opacity: 0,
          },
          {
            y: 170,
            opacity: 1,
            duration: 1.6,
          }
        );
      }

      // Title animation
      const title = document.querySelector(".contact-two-title");
      if (title) {
        gsap.fromTo(
          ".contact-two-title",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ".contact-two-title",
              start: "top 90%",
            },
          }
        );
      }

      // 03. Position Aware button hover Js & 05. button hover animation Js
      // Applying to .tw-hover-btn
      const hoverBtns = gsap.utils.toArray(".tw-hover-btn-wrapper");
      const hoverBtnItem = gsap.utils.toArray(".tw-hover-btn-item");

      hoverBtns.forEach((btn: any, i) => {
        btn.addEventListener("mousemove", (e: MouseEvent) => {
          parallaxIt(e, hoverBtnItem[i], 60);
        });

        function parallaxIt(e: MouseEvent, target: any, movement: number) {
          const relX =
            e.pageX - btn.getBoundingClientRect().left - window.scrollX;
          const relY =
            e.pageY - btn.getBoundingClientRect().top - window.scrollY;

          gsap.to(target, {
            duration: 1,
            x: ((relX - btn.offsetWidth / 2) / btn.offsetWidth) * movement,
            y: ((relY - btn.offsetHeight / 2) / btn.offsetHeight) * movement,
            ease: "power2.out",
          });
        }

        btn.addEventListener("mouseleave", () => {
          gsap.to(hoverBtnItem[i], {
            duration: 1,
            x: 0,
            y: 0,
            ease: "power2.out",
          });
        });

        // Dot movement (05. button hover animation Js)
        const dot = btn.querySelector(".tw-btn-circle-dot");
        if (dot) {
          btn.addEventListener("mouseenter", (e: MouseEvent) => {
            const x =
              e.pageX - btn.getBoundingClientRect().left - window.scrollX;
            const y =
              e.pageY - btn.getBoundingClientRect().top - window.scrollY;
            gsap.set(dot, { left: x, top: y });
          });
          btn.addEventListener("mouseout", (e: MouseEvent) => {
            const x =
              e.pageX - btn.getBoundingClientRect().left - window.scrollX;
            const y =
              e.pageY - btn.getBoundingClientRect().top - window.scrollY;
            gsap.set(dot, { left: x, top: y });
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section
      className="contact-two-area pb-20 lg:pb-[140px] h-[790px] bg-img flex items-end relative z-1 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/thumbs/contact-two-bg.png)" }}
      ref={container}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between">
          <div className="w-full xl:w-8/12">
            <div className="video-content">
              <div className="section-wrapper">
                <h2 className="video-title contact-two-title text-[3.5rem] md:text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-semibold uppercase leading-none text-white font-heading">
                  Design solutions will help digital data analyze.
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-2/12">
            <div className="tw-hover-btn-wrapper inline-block mt-8 xl:mt-[30px] video-button-target relative">
              <Link
                className="tw-btn-circle tw-hover-btn-item bg-main-two-600 border-2 border-white tw-hover-btn w-[161px] h-[161px] leading-none inline-flex items-center justify-center rounded-full relative overflow-hidden group"
                href="#"
              >
                <span className="flex flex-col justify-center items-center relative z-10">
                  <span className="tw-btn-circle-icon text-white text-[2rem] group-hover:text-black transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="m200 64l-8.05 5.57l-5.6 8.06a8 8 0 0 1-13.16-9.19l9.38-13.51l-13.51-9.38a8 8 0 0 1 9.19-13.16l8.06 5.6L192 32a8 8 0 0 1 8 8Z"
                        opacity=".2"
                      />
                      <path
                        fill="currentColor"
                        d="M197.66 122.34a8 8 0 0 1-11.32 11.32L136 83.31V216a8 8 0 0 1-16 0V83.31l-50.34 50.35a8 8 0 0 1-11.32-11.32l64-64a8 8 0 0 1 11.32 0Zm34.34-58.34a8 8 0 0 0-8-8h-48a8 8 0 0 0 0 16h28.69l-34.35 34.34a8 8 0 0 0 11.32 11.32L216 83.31v28.69a8 8 0 0 0 16 0Z"
                      />
                    </svg>
                  </span>
                  <span className="tw-btn-circle-text text-white font-bold text-center transition-all duration-300 group-hover:text-black">
                    Contact Us <br /> Today!
                  </span>
                </span>
                <i className="tw-btn-circle-dot bg-white absolute left-[42px] bottom-[-15px] w-5 h-5 rounded-full bg-main-600 -translate-x-1/2 -translate-y-1/2 z-0 group-hover:w-[420px] group-hover:h-[420px] transition-all duration-500 pointer-events-none"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
