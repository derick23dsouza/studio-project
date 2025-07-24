import Image from "next/image";
import Link from "next/link";
import BackToTopLink from "@/components/back-to-top-link";
import { FooterLinks } from "@/components/footer-links";
import { footerLinks, socialItems } from "@/utils/nav-items";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link className="mt-0.5 flex items-center gap-[11px]" href={href}>
    <p className="my-0 font-normal text-[14px] uppercase leading-[1.3] opacity-70 md:text-[15px]">
      {children}
    </p>
  </Link>
);

const CopyrightSection = () => (
  <div className="flex gap-2.5 [@media(max-width:479px)]:text-center [@media(max-width:767px)]:flex-col-reverse [@media(max-width:767px)]:items-center [@media(max-width:767px)]:justify-center">
    <FooterLink href="/">
      {"Copyright © moon "}
      <span className="-top-0.5 relative">—</span>
      {" powered by Webflow"}
    </FooterLink>
    <FooterLink href="/">Style Guide</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
  </div>
);

export default function Footer() {
  return (
    <footer className="z-2 mt-auto flex flex-col overflow-hidden bg-black px-[3%] pt-[3%] pb-0">
      <div className="mt-[100px]">
        <div className="mx-auto w-full">
          <div className="mx-auto flex max-w-[900px] flex-col gap-5">
            <div className="flex items-center justify-center gap-2.5 [@media(max-width:479px)]:flex-row [@media(max-width:479px)]:flex-wrap">
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
          <div className="mt-[30px] flex flex-col items-center gap-[15px] px-[3%] [@media(max-width:479px)]:gap-5">
            <BackToTopLink />
            <CopyrightSection />
          </div>
        </div>
        <div className="perspective-[1000px] -mb-[120px] [@media(max-width:479px)]:-mb-5 [@media(min-width:480px)_and_(max-width:767px)]:-mb-[100px] [@media(min-width:768px)_and_(max-width:991px)]:-mb-[140px] mx-auto w-[95vw]">
          <div className="transform-3d rotate-x-30 rotate-y-0 rotate-z-0">
            <Image
              alt="Logo"
              className="inline-block align-middle"
              height={2000}
              src="./moonlight-studio.svg"
              width={2000}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
