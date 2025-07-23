"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FooterLinks } from "@/components/footer-links";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  <>
    MOON
    <span className="relative top-[9px] ml-[3px] inline-block align-super text-[2.4rem] leading-none max-[479px]:text-[1.9rem]">
      ®
    </span>
    {
      " founded in 2017, this agency focuses on building, launching, and revitalizing brands."
    }
  </>,
  <>
    {"This agency "}
    <span className="opacity-40">specializes in building, launching,</span>
    {" and revitalizing brand identities."}
  </>,
  <>
    {"With a creative approach, "}
    <span className="opacity-40">our studio delivers impactful branding</span>
    {" solutions tailored to each client."}
  </>,
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }

      const textElements = containerRef.current.querySelectorAll("& > div > p");
      const gradientElements = containerRef.current.querySelectorAll(
        "& > div > div > div"
      );

      gsap.set(gradientElements, {
        x: "-50%",
        willChange: "transform",
      });

      textElements.forEach((textElement, i) => {
        const gradientElement = gradientElements[i];
        if (!gradientElement) {
          return;
        }

        gsap.to(gradientElement, {
          x: "100%",
          ease: "none",
          duration: 5,
          scrollTrigger: {
            trigger: textElement,
            start: "top bottom-=200px",
            end: "bottom bottom-=200px",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="relative z-3 overflow-hidden bg-white px-[3%] pt-[6.25rem] pb-[7.5rem] md:pb-[9.375rem] [@media(max-width:479px)]:pt-[6.25rem] [@media(max-width:479px)]:pb-[6.25rem] [@media(min-width:992px)]:px-0 [@media(min-width:992px)]:pb-[18.75rem]">
      <div className="relative mx-auto w-full">
        <div
          className="mx-auto flex max-w-[900px] flex-col items-stretch justify-center gap-[50px] text-black"
          ref={containerRef}
        >
          {sections.map((content, i) => (
            <div className="relative overflow-hidden" key={i}>
              <p className="mt-0 mb-[10px] text-center font-semibold text-[3.5vw] leading-[1.2] opacity-100 max-[479px]:px-[4%] max-[991px]:px-[2%] max-[479px]:text-[28px] max-[767px]:text-[2.3rem] max-[991px]:text-[2.6rem]">
                {content}
              </p>
              <div className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-hidden">
                <div
                  className="pointer-events-none h-full w-[200%] bg-white will-change-transform"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, white 25%)",
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
              {i === sections.length - 1 && (
                <div className="mt-[70px] flex items-center justify-center">
                  <FooterLinks
                    className="text-[1rem] text-black [@media(max-width:479px)]:text-[0.875rem]"
                    href="/"
                  >
                    More about our studio
                  </FooterLinks>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
