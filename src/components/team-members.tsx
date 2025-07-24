"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers: string[] = [
  "ethan",
  "daniel",
  "sophia",
  "olivia",
  "liam",
  "alexander",
];

export default function TeamMembers() {
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
    <div className="relative overflow-hidden" ref={containerRef}>
      <p className="mt-0 mb-[10px] text-center font-semibold text-[7vw] text-black capitalize leading-[1.6] opacity-100 [@media(max-width:479px)]:px-[4%]">
        {teamMembers.map((member, index) => (
          <span key={member}>
            {index > 0 && ", "}
            {member}
            <span className="mr-1.5 ml-5 inline-block">
              <Image
                alt={member}
                className="h-[9vw] w-[12vw] object-cover object-center max-sm:h-15 max-sm:w-20"
                height={0}
                sizes="12vw"
                src={`/team/${member}.avif`}
                width={0}
              />
            </span>
          </span>
        ))}
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
