"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

interface LogoItem {
  name: string;
  height: number;
  width: number;
  extension?: string;
}

const animationDuration = 30;

const logoData: LogoItem[] = [
  { name: "moon", height: 31, width: 140 },
  { name: "albor", height: 52, width: 130 },
  { name: "bilg", height: 53, width: 90 },
  { name: "deei", height: 29, width: 120 },
  { name: "cube", height: 51, width: 140, extension: "png" },
  { name: "dfi", height: 82, width: 80 },
  { name: "kiku", height: 69, width: 90 },
  { name: "ck", height: 80, width: 70 },
];

export default function LogoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const doubledLogos = useMemo(() => [...logoData, ...logoData], []);

  const logoSources = useMemo(
    () =>
      logoData.map((logo) => ({
        ...logo,
        src: `/logos/${logo.name}.${logo.extension || "avif"}`,
      })),
    []
  );

  useGSAP(
    () => {
      if (!(containerRef.current && carouselRef.current)) {
        return;
      }

      const carousel = carouselRef.current;
      const items = carousel.querySelectorAll("li");

      if (items.length === 0) {
        return;
      }

      const itemWidth = items[0].offsetWidth;
      const singleSetWidth = itemWidth * logoData.length;

      gsap.set(carousel, {
        x: 0,
        force3D: true,
      });

      gsap.to(carousel, {
        x: -singleSetWidth,
        duration: animationDuration,
        ease: "none",
        repeat: -1,
        force3D: true,
        transformStyle: "preserve-3d",
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="relative z-3 block bg-white px-[0%] py-[50px]">
      <div
        className="relative mx-auto w-full overflow-hidden"
        ref={containerRef}
      >
        <div className="relative mx-auto mt-2.5 flex flex-row [@media(max-width:479px)]:w-full">
          <div
            className="flex cursor-pointer"
            ref={carouselRef}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <ul className="my-0 flex list-none items-center justify-start gap-x-[70px] whitespace-nowrap pl-0 md:gap-x-[120px] [@media(max-width:479px)]:gap-[50px]">
              {doubledLogos.map((logoItem, index) => {
                const isFirstSet = index < logoData.length;
                const logoSource =
                  logoSources[isFirstSet ? index : index - logoData.length];

                return (
                  <li
                    className="list-item flex-none px-2 py-4"
                    key={`${logoItem.name}-${index}`}
                  >
                    <Link
                      className="flex max-w-full flex-col items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      href="/"
                    >
                      <Image
                        alt={`${logoItem.name} logo`}
                        className="inline-block align-middle"
                        height={logoItem.height}
                        src={logoSource.src}
                        width={logoItem.width}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
