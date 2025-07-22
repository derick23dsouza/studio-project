import Image from "next/image";
export default function Hero() {
  return (
    <div className="-mb-0.5 h-[80vh] w-full bg-white text-black [@media(max-width:479px)]:h-[500px] [@media(min-width:992px)]:h-[250vh]">
      <div className="relative top-0 h-full w-full flex-col items-center justify-center overflow-hidden [@media(min-width:992px)]:sticky [@media(min-width:992px)]:h-screen">
        <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black pt-0 [@media(min-width:992px)]:pt-[6.25rem]">
          <div className="relative z-4 w-[90vw]">
            <Image
              alt="Moonlight Studio Logo"
              className="inline-block w-full align-middle"
              height={6000}
              src="/moonlight-studio.svg"
              width={6000}
            />
          </div>
          <div className="absolute inset-0 z-1">
            <Image
              alt="Hero Background"
              className="relative h-full w-full object-cover object-[50%_100%]"
              height={2000}
              sizes="100vw"
              src="/hero-bg.avif"
              width={3040}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
