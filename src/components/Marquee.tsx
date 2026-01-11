"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const container = useRef(null);

  const items = [
    { text: "DIGITAL", icon: "/images/icons/maquee-two-icon.svg" },
    { text: "CREATIVE", icon: "/images/icons/maquee-two-icon.svg" },
    { text: "AGENCY", icon: "/images/icons/maquee-two-icon.svg" },
    { text: "DESIGN", icon: "/images/icons/maquee-two-icon.svg" },
    { text: "ANALYSIS", icon: "/images/icons/maquee-two-icon.svg" },
    { text: "E-commerce", icon: "/images/icons/maquee-two-icon.svg" },
    { text: "DIGITAL", icon: "/images/icons/maquee-two-icon.svg" },
    { text: "CREATIVE", icon: "/images/icons/maquee-two-icon.svg" },
  ];

  useGSAP(
    () => {
      // 06. maquee bg animation Js
      const marqueeBg = document.querySelector(".maquee-bg");
      if (marqueeBg) {
        const img = marqueeBg.querySelector("img");
        if (img) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: marqueeBg,
              scrub: true,
              pin: false,
            },
          });
          tl.fromTo(
            img,
            {
              yPercent: -20,
              ease: "none",
            },
            {
              yPercent: 20,
              ease: "none",
            }
          );
        }
      }
    },
    { scope: container }
  );

  return (
    <>
      <section
        className="maquee-area maquee-two-area overflow-hidden bg-main-three-600 relative z-2 py-[50px] pb-[37px]"
        ref={container}
      >
        <div className="maquee-slider overflow-hidden">
          <div className="flex items-center whitespace-nowrap animate-marquee">
            {/* Repeated items for continuous loop */}
            {[...items, ...items, ...items].map((item, index) => (
              <div
                key={index}
                className="maquee-box flex items-center gap-10 w-auto flex-shrink-0 px-5"
              >
                <div className="maquee-icon -translate-x-2">
                  <span className="inline-block leading-none animate-rotate-infinite">
                    <img src={item.icon} alt="icon" />
                  </span>
                </div>
                <div className="maquee-content">
                  <h5
                    className={`maquee-title maquee-two-title text-heading text-[6.25rem] uppercase font-bold mb-0 leading-none ${
                      index % 2 !== 0 ? "text-transparent" : ""
                    }`}
                    style={
                      index % 2 !== 0
                        ? { WebkitTextStroke: "1px hsl(240, 46%, 5%)" }
                        : {}
                    }
                  >
                    {item.text}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="maquee-bg relative z-1 overflow-hidden">
        <img
          className="w-full h-[735px] object-cover"
          src="/images/thumbs/video-bg.jpg"
          alt=""
        />
      </div>
    </>
  );
}
