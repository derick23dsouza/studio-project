"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  firstWord: string;
  secondWord: string;
}

export default function SectionHeading({
  firstWord,
  secondWord,
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) {
      return;
    }

    const textElement = containerRef.current.querySelector("& > p");
    const gradientElement = containerRef.current.querySelector("& > div");

    if (!gradientElement) {
      return;
    }

    gsap.set(gradientElement, {
      x: "-50%",
      willChange: "transform",
    });

    gsap.to(gradientElement, {
      x: "100%",
      ease: "none",
      delay: 5,
      duration: 20,
      scrollTrigger: {
        trigger: textElement,
        start: "top bottom-=50px",
        end: "bottom bottom-=300px",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative overflow-hidden text-center" ref={containerRef}>
      <p className="mt-0 mb-2.5 text-center font-semibold text-[9vw] text-black uppercase leading-none tracking-tight opacity-100 [@media(max-width:991px)]:px-[2%]">
        {`${firstWord} `}
        <span className="-top-1.5 relative inline-block font-normal opacity-40">
          —
        </span>
        {` ${secondWord}`}
      </p>
      <div
        className="pointer-events-none absolute inset-0 h-full w-[200%] cursor-none bg-white will-change-transform"
        style={{
          background: "linear-gradient(90deg, transparent 0%, white 25%)",
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
