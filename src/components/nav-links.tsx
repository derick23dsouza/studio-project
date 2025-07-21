import Link from "next/link";
import { useUnderlineAnimation } from "@/hooks/use-underline-animation";

export function NavLink({
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
      className={`relative inline-block no-underline ${className}`}
      href={href}
      ref={linkRef}
    >
      <span
        className="font-medium text-base uppercase leading-[1.3rem]"
        ref={textRef}
      >
        {children}
      </span>
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-current"
        ref={underlineRef}
      />
    </Link>
  );
}

export function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { linkRef, textRef, underlineRef } = useUnderlineAnimation();

  return (
    <Link
      className="relative flex min-w-full flex-wrap items-center justify-start gap-x-[0.4rem] gap-y-[0.4rem] overflow-hidden px-0 py-1 no-underline"
      href={href}
      ref={linkRef}
    >
      <div className="relative inline-block">
        <span
          className="font-medium text-[1rem] text-white uppercase leading-5"
          ref={textRef}
        >
          {children}
        </span>
        <div
          className="absolute bottom-0 left-0 h-[1px] bg-white"
          ref={underlineRef}
          style={{ width: 0 }}
        />
      </div>
    </Link>
  );
}
