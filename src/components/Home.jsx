import Link from "next/link";
import AnimatedWord from "./ui/AnimatedWord";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const rotatingWords = ["Business", "Startup", "Agency", "Portfolio"];

function Home() {
  return (
    <section
      id="home"
      className="relative z-40 overflow-hidden py-10 sm:pt-30 lg:pb-[30px] lg:pt-[30px] lg:flex lg:justify-center lg:items-center"
    >
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-3 lg:w-1/2">
            <div className="mx-auto mb-12 max-w-[530px] text-center lg:mb-0 lg:ml-0 lg:text-left px-5">
              <h1 className="font-heading mb-5 text-2xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                Next.js Boilerplate for Your{" "}
                <AnimatedWord words={rotatingWords} />
              </h1>
              <p className="text-dark-text mb-12 text-base">
                Handcrafted Next.js starter for your next - Startup, Business,
                Agency or SaaS Website. Comes with refreshing design,
                integrations and everything you need to kickstart your next web
                project.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <Link
                  className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-lg px-6 py-[10px] text-base text-white md:px-8 md:py-[14px] font-bold"
                  href="#features"
                >
                  Get Started
                  <span className="pl-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-3 lg:w-1/2">
            <div className="wow fadeInRight relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0">
              <div className="absolute right-0 top-0 lg:w-11/12">
                <Image
                  alt="hero-image"
                  loading="lazy"
                  width={560}
                  height={520}
                  src={"/hero_image.png"}
                  className="object-cover aspect-[1.08]"
                  style="color:transparent"
                ></Image>
              </div>
              <div className="absolute bottom-0 left-0 z-10">
                <Image
                  alt="hero-image"
                  loading="lazy"
                  width={350}
                  height={420}
                  src={"/hero_image_1.png"}
                  className="object-cover aspect-[1.08]"
                  style="color:transparent"
                ></Image>
                <div className="border-primary/10 bg-primary/5 absolute -right-6 -top-6 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
