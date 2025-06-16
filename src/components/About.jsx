import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">About</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Know Details About Our Company
          </h2>
          <p className="text-dark-text text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="relative z-10 overflow-hidden rounded-sm px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"></div>
          <div className="tabButtons flex w-full items-center justify-around">
            <button className="w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 border-primary text-primary dark:border-primary">
              About Us
            </button>
            <button className="w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 border-primary text-primary dark:border-primary">
              Our Mission
            </button>
            <button className="w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 border-primary text-primary dark:border-primary">
              Our Vision
            </button>
          </div>
          <div className="w-full">
            <div className="-mx-4 flex w-full flex-wrap items-center pt-[70px] ">
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
                  <div className="aspect-86/121 absolute left-0 top-0 w-full max-w-[344px]">
                    <Image
                      alt="about-image-1"
                      loading="lazy"
                      width={600}
                      height={490}
                      src={"/about-1.png"}
                      className="object-cover aspect-[1.08]"
                      style="color:transparent"
                    ></Image>
                  </div>
                  <div className="aspect-53/66 absolute right-0 top-1/2 z-10 w-full max-w-[315px] -translate-y-1/2">
                    <Image
                      alt="about-image-1"
                      loading="lazy"
                      width={315}
                      height={300}
                      src={"/about-2.png"}
                      className="object-cover aspect-[1.08]"
                      style="color:transparent"
                    ></Image>
                    <div className="border-primary/10 bg-primary/5 absolute -left-5 -top-5 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"></div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="max-w-[565px] lg:ml-auto">
                  <h2 className="font-heading text-dark mb-8 text-2xl font-bold sm:text-[40px] sm:leading-[50px] dark:text-white">
                    DB, Auth, Stripe, Sanity, and More
                  </h2>
                  <p className="mb-6 text-base text-dark-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore dignissimos ullam distinctio molestiae quibusdam
                    sapiente sed qui ipsum, corrupti laboriosam fuga hic
                    deserunt quidem dolores accusamus sit quod enim nesciunt!
                  </p>
                  <p className="mb-6 text-base text-dark-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore dignissimos ullam distinctio molestiae quibusdam
                    sapiente sed qui ipsum, corrupti laboriosam fuga hic
                    deserunt quidem dolores accusamus sit quod enim nesciunt!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
