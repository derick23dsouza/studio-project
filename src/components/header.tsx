"use client";

import Link from "next/link";
import { useState } from "react";

import HamburgerIcon from "@/components/hamburger-icon";
import { MobileNavLink, NavLink } from "@/components/nav-links";

import {
  mainNavItems,
  mobileNavItems,
  secondaryNavItems,
  socialItems,
} from "@/utils/nav-items";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-[999]">
      <div className="z-[1000] flex items-center justify-between px-[3%] py-[19px] md:grid md:grid-cols-4 md:items-center md:gap-x-10 md:gap-y-10 [@media(min-width:992px)]:items-start [@media(min-width:992px)]:pt-10 [@media(min-width:992px)]:pb-5">
        {/* Logo */}
        <Link className="inline-block max-w-full no-underline" href="/">
          <p className="mb-0 font-medium text-[1.3rem] uppercase leading-[1.3]">
            Moon ®
          </p>
        </Link>

        {/* Tagline - Hidden on mobile */}
        <div className="hidden md:block">
          <p className="mb-0 font-medium text-[0.8rem] text-white uppercase leading-[1rem] opacity-80 [@media(min-width:992px)]:text-[1rem] [@media(min-width:992px)]:leading-[1.3rem]">
            BUILDING LASTING
            <br />
            DIGITAL CONNECTIONS
          </p>
        </div>

        {/* Navigation - Hidden on mobile, shown on tablet and desktop */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-1 md:gap-y-1">
          {/* Main navigation */}
          <nav className="flex-col gap-x-1 gap-y-1 md:hidden [@media(min-width:992px)]:flex">
            {mainNavItems.map((item) => (
              <NavLink href={item.href} key={item.label}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Secondary navigation */}
          <div className="flex-col gap-x-1 gap-y-1 md:hidden [@media(min-width:992px)]:flex">
            {secondaryNavItems.map((item) => (
              <NavLink href={item.href} key={item.label}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Social Links - Hidden on mobile and tablet, shown on desktop */}
        <div className="hidden [@media(min-width:992px)]:flex [@media(min-width:992px)]:justify-end">
          <div className="flex gap-x-3">
            {socialItems.map((item) => (
              <NavLink href={item.href} key={item.label}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Navigation (Cart + Hamburger) */}
        <div className="flex items-center justify-end [@media(min-width:992px)]:hidden">
          <div className="flex items-center gap-x-[5px] md:gap-x-[15px]">
            {/* Cart */}
            <Link
              className="flex items-center justify-start gap-x-[0.4rem] overflow-hidden py-1 no-underline"
              href="/"
            >
              <div>CART</div>
            </Link>

            {/* Hamburger button */}
            <button
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
              className="relative block p-3"
              onClick={handleToggle}
              type="button"
            >
              <div className="w-[30px] invert">
                <HamburgerIcon isOpen={isOpen} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className="absolute top-[100%] right-0 left-0 block h-[8944.09px] w-full overflow-hidden [@media(min-width:992px)]:hidden">
        <nav
          className={`absolute right-0 left-0 min-w-[200px] transform overflow-visible bg-[#171717] p-5 text-center transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {mobileNavItems.map((item) => (
            <MobileNavLink href={item.href} key={item.label}>
              {item.label}
            </MobileNavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
