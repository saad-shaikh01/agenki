"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const container = useRef(null);

  const projects = [
    {
      id: "01",
      img: "/images/thumbs/project-two-thumb1.jpg",
      title: "CREATIVE STRATEGY SOLUTION AND DEVELOPMENT",
    },
    {
      id: "02",
      img: "/images/thumbs/project-two-thumb2.jpg",
      title: "CREATIVE STRATEGY SOLUTION AND DEVELOPMENT",
    },
    {
      id: "03",
      img: "/images/thumbs/project-two-thumb3.jpg",
      title: "CREATIVE STRATEGY SOLUTION AND DEVELOPMENT",
    },
    {
      id: "04",
      img: "/images/thumbs/project-two-thumb4.jpg",
      title: "CREATIVE STRATEGY SOLUTION AND DEVELOPMENT",
    },
  ];

  useGSAP(
    () => {
      // 10. project sticky Js
      const sticky = document.querySelector(".project-two-sticky");
      if (sticky && window.innerWidth > 992) {
        ScrollTrigger.create({
          trigger: sticky,
          start: "top top+=220",
          end: "+=2320", // Adjust based on content height
          pin: true,
          scrub: true,
        });
      }

      // 09. project panel scroll Js
      if (window.innerWidth > 991) {
        let projectpanels = document.querySelectorAll(".project-panel");
        projectpanels.forEach((section) => {
          gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              pin: section, // This might conflict with the loop if not careful, legacy code pins each section?
              // Legacy code: pin: section. But legacy code iterates all .project-panel.
              // If they are stacked, pinning them might cause them to stack on top of each other.
              // Let's assume standard behavior:
              scrub: 1,
              start: "center center",
              end: "bottom 60%",
              // endTrigger: '.project-panel-area', // Need to make sure this class exists on parent
              pinSpacing: false,
              markers: false,
            },
          });
        });
      }
    },
    { scope: container }
  );

  return (
    <section className="project-two-area pb-12 lg:pb-[47px]" ref={container}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12 mb-12 lg:mb-0">
            <div className="project-two-sticky sticky top-24 mb-10 xl:mb-[40px]">
              <div className="section-two-wrapper mb-8 lg:mr-10">
                <h2 className="section-two-title uppercase text-[3.5rem] md:text-[5rem] lg:text-[7.5rem] text-white font-heading font-semibold leading-[0.98]">
                  view our completed recent projects
                </h2>
              </div>
              <div className="project-two-wrap flex flex-col xl:flex-row gap-7">
                <div>
                  <Link
                    className="theme-btn-main inline-flex items-center relative transition-all group w-[232px]"
                    href="#"
                  >
                    <span className="theme-btn-arrow-left w-14 h-14 leading-none inline-flex justify-center items-center bg-main-two-600 text-white rounded-full absolute transition-all duration-300 scale-0 group-hover:scale-100 left-0">
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
                    <span className="theme-btn bg-main-two-600 text-white py-4 px-10 font-medium inline-flex items-center gap-8 capitalize rounded-[3rem] transition-all duration-300 z-2 group-hover:translate-x-14">
                      Explore More
                    </span>
                    <span className="theme-btn-arrow-right w-14 h-14 leading-none inline-flex justify-center items-center bg-main-two-600 text-white rounded-full transition-all duration-300 group-hover:scale-0">
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
                  </Link>
                </div>
                <div className="lg:mr-10">
                  <p className="text-white text-lg font-medium">
                    We’re brand builders, storytellers, and digital architects
                    crafting experiences that connect, convert
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-6/12">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-12/12">
                <div className="project-panel-wrapper project-panel-area">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="project-panel bg-white pt-10 pb-6 px-5 md:px-8 xl:px-10 rounded-xl mb-5"
                    >
                      <div className="flex justify-between items-center flex-wrap mb-4">
                        <div>
                          <h4 className="text-[5rem] lg:text-[7.5rem] text-stroke-black leading-none font-heading font-semibold">
                            /{project.id}
                          </h4>
                        </div>
                        <div className="flex gap-2">
                          <div>
                            <Link
                              className="border border-main-two-600 text-main-two-600 rounded-[3rem] py-2 px-6 hover:bg-main-two-600 hover:text-white transition-colors mr-2"
                              href="#"
                            >
                              Marketing
                            </Link>
                            <Link
                              className="border border-main-two-600 text-main-two-600 rounded-[3rem] py-2 px-6 hover:bg-main-two-600 hover:text-white transition-colors"
                              href="#"
                            >
                              Development
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <Link href="#">
                          <img
                            className="rounded-lg w-full h-auto"
                            src={project.img}
                            alt="thumb"
                          />
                        </Link>
                      </div>
                      <div>
                        <h4 className="text-[2.5rem] uppercase text-heading mb-0 font-heading font-semibold">
                          <Link
                            className="hover:text-main-two-600 transition-colors"
                            href="#"
                          >
                            {project.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
