"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Image from "next/image";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const logo = logoRef.current;
      const background = backgroundRef.current;
      if (!(container && background && logo)) {
        return;
      }
      const mediaQuery = gsap.matchMedia();

      mediaQuery.add("(min-width: 992px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "15% top",
            end: "+=2436",
            scrub: true,
          },
        });

        timeline
          .to(logo, {
            width: "6000vw",
            x: "-190vw",
            transformOrigin: "center center",
            ease: "none",
          })
          .to(
            background,
            {
              scale: 2,
              transformOrigin: "center center",
              ease: "none",
            },
            0
          );
      });

      return () => mediaQuery.revert();
    },
    { scope: containerRef }
  );

  return (
    <div className="-mb-0.5 h-[80vh] w-full bg-white text-black [@media(max-width:479px)]:h-[500px] [@media(min-width:992px)]:h-[250vh]">
      <div
        className="relative top-0 h-full w-full flex-col items-center justify-center overflow-hidden [@media(min-width:992px)]:sticky [@media(min-width:992px)]:h-screen"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black pt-0 [@media(min-width:992px)]:pt-[6.25rem]">
          <div className="relative z-4 w-[95vw]" ref={logoRef}>
            <Image
              alt="Moonlight Studio Logo"
              className="inline-block w-full align-middle"
              height={6000}
              src="/moonlight-studio.svg"
              width={6000}
            />
          </div>
          <div className="absolute inset-0 z-1">
            <Image
              alt="Hero Background"
              className="relative h-full w-full object-cover object-[50%_100%]"
              height={2000}
              ref={backgroundRef}
              sizes="100vw"
              src="/hero-bg.avif"
              width={3040}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
