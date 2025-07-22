import Image from "next/image";
import { FooterLinks } from "@/components/footer-links";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="flex w-[500px] flex-col items-center justify-center text-center text-black md:w-[600px] [@media(min-width:992px)]:w-[800px]">
        <Image
          alt="404"
          className="max-w-full"
          height={110}
          src="/not-found.svg"
          width={110}
        />
        <h2 className="mt-[30px] mb-2.5 font-semibold text-5xl leading-[1] md:text-[62px] [@media(min-width:992px)]:text-[9vw]">
          404 Page Not Found
        </h2>
        <div className="mt-5">
          <div className="text-lg leading-[1.3] opacity-70">
            The page you are looking for doesn't exist or has been moved
          </div>
        </div>
        <div className="mt-[30px]">
          <FooterLinks className="text-black" href="/">
            back to home
          </FooterLinks>
        </div>
      </div>
    </main>
  );
}
