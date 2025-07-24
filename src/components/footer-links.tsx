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
  const isDefault = className === "";

  return (
    <Link
      className="flex items-center gap-x-[0.4rem] overflow-hidden p-0 text-white [@media(max-width:991px)]:py-1"
      href={href}
      ref={linkRef}
    >
      <div className="relative inline-block">
        <span
          className={`text-[1rem] uppercase leading-5 [@media(max-width:479px)]:text-[0.875rem] ${
            isDefault ? "font-medium text-white" : `${className} font-[600]`
          }`}
          ref={textRef}
        >
          {children}
        </span>
        <div
          className={`absolute bottom-0 left-0 h-[1px] ${
            isDefault ? "bg-white" : "bg-black"
          }`}
          ref={underlineRef}
          style={{ width: 0 }}
        />
      </div>
    </Link>
  );
}
