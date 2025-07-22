import Image from "next/image";
import Link from "next/link";
import BackToTopLink from "@/components/back-to-top-link";
import { FooterLinks } from "@/components/footer-links";
import { footerLinks, socialItems } from "@/utils/nav-items";

export default function Footer() {
  return (
    <footer className="z-2 mt-auto flex flex-col overflow-hidden bg-black px-[3%] pt-[3%] pb-0">
      <div className="mx-auto w-full">
        <div className="mx-auto flex max-w-[900px] flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            {footerLinks.map((item) => (
              <FooterLinks href={item.href} key={item.label}>
                {item.label}
              </FooterLinks>
            ))}
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            {socialItems.map((item) => (
              <FooterLinks href={item.href} key={item.label}>
                {item.label}
              </FooterLinks>
            ))}
          </div>
        </div>
        <div className="mt-[30px] flex flex-col items-center gap-[15px] px-[3%]">
          <BackToTopLink />
          <div className="flex gap-2.5">
            <Link className="mt-0.5 flex items-center gap-[11px]" href="/">
              <p className="my-0 font-normal text-[15px] uppercase leading-[1.3] opacity-70">
                {"Copyright © moon "}
                <span className="-top-0.5 relative">—</span>
                {" powered by Webflow"}
              </p>
            </Link>
            <Link className="mt-0.5 flex items-center gap-[11px]" href="/">
              <p className="my-0 font-normal text-[15px] uppercase leading-[1.3] opacity-70">
                Style Guide
              </p>
            </Link>
            <Link className="mt-0.5 flex items-center gap-[11px]" href="/">
              <p className="my-0 font-normal text-[15px] uppercase leading-[1.3] opacity-70">
                Licensing
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="perspective-[1000px] -mb-[120px] mx-auto w-[95vw]">
        <div className="transform-3d rotate-x-30 rotate-y-0 rotate-z-0">
          <Image
            alt="Logo"
            className="inline-block"
            height={2000}
            src="./moonlight-studio.svg"
            width={2000}
          />
        </div>
      </div>
    </footer>
  );
}
