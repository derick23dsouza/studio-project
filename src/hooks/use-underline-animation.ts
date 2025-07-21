import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function useUnderlineAnimation() {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const link = linkRef.current;
      const text = textRef.current;
      const underline = underlineRef.current;

      if (!(link && text && underline)) {
        return;
      }

      gsap.set(underline, { width: 0 });

      let textWidth: number;
      const getTextWidth = () => {
        if (!textWidth) {
          textWidth = text.getBoundingClientRect().width;
        }
        return textWidth;
      };

      const tl = gsap.timeline({ paused: true });
      tl.to(underline, {
        width: () => getTextWidth(),
        duration: 0.3,
        ease: "power2.out",
      });

      const mm = gsap.matchMedia();

      mm.add("(hover: hover)", () => {
        link.addEventListener("mouseenter", () => tl.play());
        link.addEventListener("mouseleave", () => tl.reverse());
      });

      return () => {
        mm.kill();
        tl.kill();
      };
    },
    { scope: linkRef }
  );

  return { linkRef, textRef, underlineRef };
}
