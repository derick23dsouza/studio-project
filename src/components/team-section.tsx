import { FooterLinks } from "@/components/footer-links";
import SectionHeading from "@/components/section-heading";
import TeamMembers from "@/components/team-members";

export default function TeamSection() {
  return (
    <section className="relative z-3 overflow-hidden bg-white px-[3%] py-[300px] [@media(max-width:479px)]:py-[50px]">
      <div className="relative mx-auto w-full">
        <SectionHeading firstWord="the" secondWord="team" />
      </div>
      <div className="mt-[100px] md:mt-[200px]">
        <div className="mx-auto flex max-w-[1400px] flex-col flex-wrap items-stretch justify-center gap-[50px]">
          <TeamMembers />
          <div className="mt-[70px] flex items-center justify-center">
            <FooterLinks className="text-black" href="/">
              Work with us
            </FooterLinks>
          </div>
        </div>
      </div>
    </section>
  );
}
