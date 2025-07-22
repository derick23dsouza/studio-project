"use client";

import Link from "next/link";
import { useUnderlineAnimation } from "@/hooks/use-underline-animation";

export function FooterLinks({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { linkRef, textRef, underlineRef } = useUnderlineAnimation();

  return (
    <Link
      className={
        "flex items-center gap-x-[0.4rem] overflow-hidden p-0 text-white"
      }
      href={href}
      ref={linkRef}
    >
      <div className="relative inline-block">
        <span
          className={`font-medium text-[1rem] uppercase leading-5 ${className === "" ? "text-white" : `${className} font-black"`}`}
          ref={textRef}
        >
          {children}
        </span>
        <div
          className={`absolute bottom-0 left-0 h-[1px] ${className === "" ? "bg-white " : "bg-black"} `}
          ref={underlineRef}
          style={{ width: 0 }}
        />
      </div>
    </Link>
  );
}
