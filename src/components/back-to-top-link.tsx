"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { forwardRef, useRef } from "react";

const ArrowUpIcon = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className = "" }, ref) => (
    <svg
      className={`absolute scale-60 ${className}`}
      fill="none"
      height="24"
      ref={ref}
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
  )
);

ArrowUpIcon.displayName = "ArrowUpIcon";

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
    <div className="flex gap-2.5 [@media(max-width:479px)]:text-center [@media(max-width:767px)]:flex-col-reverse [@media(max-width:767px)]:items-center [@media(max-width:767px)]:justify-center">
      <Link
        className="mt-0.5 flex items-center gap-[11px]"
        href="#Top"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="my-0 font-normal text-[14px] uppercase leading-[1.3] opacity-70 md:text-[15px]">
          Back to top
        </p>
        <div
          className="relative flex h-6 w-6 items-center justify-center overflow-hidden border border-[#fff3] bg-white text-black"
          ref={containerRef}
        >
          <ArrowUpIcon ref={svg1Ref} />
          <ArrowUpIcon className="opacity-0" ref={svg2Ref} />
        </div>
      </Link>
    </div>
  );
}
