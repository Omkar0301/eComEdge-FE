import Link from "next/link";
import AnimatedWord from "./ui/AnimatedWord";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const rotatingWords = ["Business", "Startup", "Agency", "Portfolio"];

function Home() {
  return (
    <section
      id="home"
      className="relative z-40 overflow-hidden py-6 sm:py-12 md:py-16 lg:py-20 xl:py-24 lg:flex lg:items-center lg:justify-center"
    >
      <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mx-auto mb-8 max-w-[510px] text-center lg:mb-0 lg:text-left">
              <h1 className="mb-4 font-heading text-3xl font-semibold sm:text-5xl md:text-5xl lg:text-4xl xl:text-[2.75rem] leading-tight dark:text-white">
                Next.js Boilerplate for Your <AnimatedWord words={rotatingWords} />
              </h1>
              <p className="mb-6 text-sm text-dark-text sm:text-base md:text-lg">
                Handcrafted Next.js starter for your next Startup, Business, Agency, or SaaS Website. Comes with refreshing design, integrations, and everything you need to kickstart your web project.
              </p>
              <div className="text-center lg:text-left">
                <a
                  href="/#pricing"
                  className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                >
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[280px] w-full max-w-[700px] sm:h-[360px] md:h-[480px] flex justify-center items-center">
              <div className="relative w-full sm:w-3/4 lg:w-10/12 h-full">
                <Image
                  alt="Hero image"
                  src="/hero_image.png"
                  fill
                  className="rounded-lg object-cover"
                  style={{
                    objectPosition: 'center',
                    color: 'transparent'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
