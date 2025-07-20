import Link from "next/link";

export default function HomePage() {
  const navLinkClass = "no-underline";
  const navTextClass = "font-medium text-base leading-[1.3rem] uppercase";

  return (
    <header className="absolute inset-x-0 top-0 z-[999]">
      <div className="z-[1000] grid grid-cols-4 items-start gap-x-10 gap-y-10 px-[3%] pt-10 pb-5">
        {/* Logo */}
        <Link className="inline-block max-w-full" href="/">
          <p className="mb-0 font-medium text-[1.3rem] uppercase">Moon ®</p>
        </Link>

        {/* Tagline */}
        <div>
          <p className="mb-0 font-medium text-[1rem] text-white uppercase leading-[1.3rem] opacity-80">
            BUILDING LASTING
            <br />
            DIGITAL CONNECTIONS
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-x-1 gap-y-1">
          {/* Left column - Main nav */}
          <nav className="flex flex-col gap-x-1 gap-y-1">
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>Home</p>
            </Link>
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>About</p>
            </Link>
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>Work</p>
            </Link>
            {/* Mobile-only links */}
            <Link className={`${navLinkClass} md:hidden`} href="/">
              <p className={navTextClass}>Contact</p>
            </Link>
            <Link className={`${navLinkClass} md:hidden`} href="/">
              <p className={navTextClass}>News</p>
            </Link>
          </nav>

          {/* Right column - Secondary nav (hidden on mobile) */}
          <div className="hidden flex-col gap-x-1 gap-y-1 md:flex">
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>Contact</p>
            </Link>
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>News</p>
            </Link>
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>Cart</p>
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-end">
          <div className="hidden gap-x-3 md:flex">
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>Be</p>
            </Link>
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>X</p>
            </Link>
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>Dr</p>
            </Link>
            <Link className={navLinkClass} href="/">
              <p className={navTextClass}>Ig</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
