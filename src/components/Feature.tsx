"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useSplitTextAnimation } from "@/hooks/useSplitTextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
  const container = useRef(null);

  // Apply split text animation
  useSplitTextAnimation(".section-two-title");

  const features = [
    {
      id: "01",
      icon: "/images/icons/feature-two-icon1.svg",
      title: "Research and analytics",
      desc: "Designers, strategists, and innovators dedicated to crafting unique digital experiences.",
    },
    {
      id: "02",
      icon: "/images/icons/feature-two-icon2.svg",
      title: "Ideation and design",
      desc: "Designers, strategists, and innovators dedicated to crafting unique digital experiences.",
    },
    {
      id: "03",
      icon: "/images/icons/feature-two-icon3.svg",
      title: "start product development",
      desc: "Designers, strategists, and innovators dedicated to crafting unique digital experiences.",
    },
  ];

  useGSAP(
    () => {
      // Animation items - fade up
      gsap.from(".animation-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".feature-two-area",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      className="feature-two-area pt-0 pb-20 lg:pb-[140px]"
      ref={container}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full xl:w-7/12">
            <div className="section-two-wrapper text-center pt-10 mb-10 xl:mb-[72px] lg:mr-10">
              <h2 className="section-two-title uppercase text-[3.5rem] md:text-[5rem] lg:text-[7.5rem] leading-[0.98] text-white font-heading font-semibold tw-char-animation">
                {/* Manual split for animation */}
                <span className="inline-block"><span className="inline-block">how</span></span>{" "}
                <span className="inline-block"><span className="inline-block">We</span></span>{" "}
                <span className="inline-block"><span className="inline-block">Work</span></span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center xl:justify-start">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-6/12 xl:w-4/12 mb-8 xl:mb-0">
              <div className="feature-two-wrapper xl:mr-14 mb-7 animation-item group">
                <div className="feature-two-content flex items-center gap-6 mb-10">
                  <div className="relative z-1">
                    <span className="w-[124px] h-[124px] leading-none inline-flex justify-center items-center bg-main-two-600 rounded-full">
                      <img
                        className="group-hover:animate-wobble"
                        src={feature.icon}
                        alt="icon"
                      />
                    </span>
                    <div className="feature-number absolute top-0 right-0">
                      <span className="w-10 h-10 leading-none inline-flex justify-center items-center bg-white rounded-full text-lg font-bolder text-main-two-600 font-bold">
                        {feature.id}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="feature-two-title text-[2.2rem] lg:text-[3.25rem] uppercase leading-none text-white font-heading font-semibold">
                      {feature.title}
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
