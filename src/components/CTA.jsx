import { ArrowRight } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <section id="cta" className="pt-14 sm:pt-20 lg:pt-[130px] lg:flex lg:justify-center lg:items-center">
      <div className=" xl:container">
        <div
          className="drop-shadow-light relative overflow-hidden bg-cover bg-center px-10 py-[60px] sm:px-[70px] dark:drop-shadow-none"
        //   style={{
        //     background: "linear-gradient(90deg, #ABBCFF 0%, #4A6CF7 85.94%)",
        //   }}
        >
          <div className="bg-noise-pattern absolute left-0 top-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <div
              className="w-[315px] h-[378px] opacity-60 blur-[225px]"
              style={{
                background:
                  "linear-gradient(152.92deg, #ABBCFF 15.54%, #4A6CF7 85.94%)",
              }}
            />
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-2/3">
              <div className="mx-auto mb-10 max-w-[550px] text-center lg:mb-0 lg:ml-0 lg:text-left">
                <h2 className="font-heading text-dark mb-4 text-xl font-semibold leading-tight sm:text-[38px] dark:text-white">
                  Looking for a collaboration? Get Started Today!
                </h2>
                <p className="text-dark-text text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="text-center lg:text-right">
                <a
                  href="#"
                  className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                >
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
