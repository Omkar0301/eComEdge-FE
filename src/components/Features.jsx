import { ChartArea } from "lucide-react";
import React from "react";

function Features() {
  return (
    <>
      <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="pt-14 sm:pt-20 lg:pt-[130px]">
          <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
            <span className="title">Feature</span>
            <div className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Essential Integrations with Modern Design
            </div>
            <div className="text-base text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16">
                <div className="bg-primary/5 text-primary group-hover:!bg-primary mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full transition group-hover:text-white md:mb-9 md:h-[90px] md:w-[90px] dark:bg-white/5 dark:text-white">
                  <ChartArea />
                </div>
                <h3 className="font-heading text-dark mb-3 text-xl font-medium sm:text-2xl md:mb-5 dark:text-white"></h3>
                <p className="text-dark-text text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16">
                <div className="bg-primary/5 text-primary group-hover:!bg-primary mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full transition group-hover:text-white md:mb-9 md:h-[90px] md:w-[90px] dark:bg-white/5 dark:text-white">
                  <ChartArea />
                </div>
                <h3 className="font-heading text-dark mb-3 text-xl font-medium sm:text-2xl md:mb-5 dark:text-white"></h3>
                <p className="text-dark-text text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16">
                <div className="bg-primary/5 text-primary group-hover:!bg-primary mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full transition group-hover:text-white md:mb-9 md:h-[90px] md:w-[90px] dark:bg-white/5 dark:text-white">
                  <ChartArea />
                </div>
                <h3 className="font-heading text-dark mb-3 text-xl font-medium sm:text-2xl md:mb-5 dark:text-white"></h3>
                <p className="text-dark-text text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
