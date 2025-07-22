"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function BackToTopLink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svg1Ref = useRef<SVGSVGElement>(null);
  const svg2Ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    gsap.set(svg1Ref.current, { x: 0 });
    gsap.set(svg2Ref.current, { x: -24 });
  }, []);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();
    tl.to(svg1Ref.current, {
      x: 24,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    }).to(
      svg2Ref.current,
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      },
      "-=0.15"
    );
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();
    tl.to(svg2Ref.current, {
      x: -24,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    }).to(
      svg1Ref.current,
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      },
      "-=0.15"
    );
  };

  return (
    <Link
      className="mt-0.5 flex items-center gap-[11px]"
      href="#Top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="my-0 font-normal text-[15px] uppercase leading-[1.3] opacity-70">
        Back to top
      </p>
      <div
        className="relative flex h-6 w-6 items-center justify-center overflow-hidden border border-[#fff3] bg-white text-black"
        ref={containerRef}
      >
        <svg
          className="absolute scale-60"
          fill="none"
          height="24"
          ref={svg1Ref}
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Back to top</title>
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>

        <svg
          className="absolute scale-60 opacity-0"
          fill="none"
          height="24"
          ref={svg2Ref}
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Back to top</title>
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </Link>
  );
}
