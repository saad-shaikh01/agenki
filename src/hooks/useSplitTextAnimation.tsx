// src/hooks/useSplitTextAnimation.tsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSplitTextAnimation = (targetSelector: string) => {
  useGSAP(() => {
    // 01. Section title Animation Js
    if (window.innerWidth > 768) {
      const targets = document.querySelectorAll(targetSelector);
      targets.forEach((target) => {
        // Since we don't have SplitText, we'll implement a simple word stagger.
        // If the text is already wrapped in spans (like I did manually in some components), we target them.
        // Otherwise, we do a basic fade up.

        // Check if manual split exists (children are spans)
        const hasSpans = target.querySelector("span");

        if (hasSpans) {
             gsap.fromTo(
                target.querySelectorAll("span span")?.length > 0 ? target.querySelectorAll("span span") : target.querySelectorAll("span"), // Support nested spans if word > char split used
                {
                    y: 100,
                    autoAlpha: 0
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    delay: 0.5,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: target,
                        start: "top 90%",
                        end: "bottom 60%",
                        toggleActions: "play none none none",
                    },
                }
            );
        } else {
            // Fallback for non-split text (treat as one block or split by words manually if we could, but here just animate the block)
             gsap.fromTo(target,
                {
                    y: 100,
                    autoAlpha: 0,
                    rotationX: -90 // Add perspective effect like "perspective: 300" in legacy code
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    rotationX: 0,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: target,
                        start: "top 90%",
                        end: "bottom 60%",
                        toggleActions: "play none none none",
                    },
                }
             );
             gsap.set(target, { transformPerspective: 300 });
        }
      });
    }
  });
};
