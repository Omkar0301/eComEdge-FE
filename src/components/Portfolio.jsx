import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="pt-14 sm:pt-20 lg:pt-[80px]">
      <div className="px-4 xl:container">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">PORTFOLIO</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Gallery, Previews and Portfolio
          </h2>
          <p className="text-base text-dark-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="w-full">
          <div className="portfolio-btn-wrapper mb-16 flex items-center justify-center overflow-x-auto pb-2">
            <button className="active font-heading text-dark whitespace-nowrap px-5 text-base dark:text-white">
              All
            </button>
            <button className="font-heading text-dark whitespace-nowrap px-5 text-base capitalize dark:text-white">
              brand
            </button>
            <button className="font-heading text-dark whitespace-nowrap px-5 text-base capitalize dark:text-white">
              ecommerce
            </button>
          </div>
          <div>
            <div className="flex flex-row place-content-stretch center w-full gap-[10px]">
              <div className="flex flex-col place-content-stretch flex-1 w-0 gap-[10px]">
                <div className="flex justify-stretch">
                  <div className="grid-item">
                    <div className="group relative overflow-hidden rounded-sm">
                      <div className="old-image static">
                        <Image
                          src="/portfolio.png"
                          alt="Portfolio"
                          width={500}
                          height={500}
                          className="w-full h-auto"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-[#000]/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                        <div className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                          <h3 className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl">
                            Portfolio
                          </h3>
                          <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                            Branded Ecommerce
                          </p>
                        </div>
                        <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                          <a
                            href="#"
                            className="dark:hover:us-bg-primary hover:bg-primary flex size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white"
                          >
                            <ArrowRight className="fill-current" size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col place-content-stretch flex-1 w-0 gap-[10px]">
                <div className="flex justify-stretch">
                  <div className="grid-item">
                    <div className="group relative overflow-hidden rounded-sm">
                      <div className="old-image static">
                        <Image
                          src="/portfolio.png"
                          alt="Portfolio"
                          width={500}
                          height={500}
                          className="w-full h-auto"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-[#000]/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                        <div className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                          <h3 className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl">
                            Portfolio
                          </h3>
                          <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                            Branded Ecommerce
                          </p>
                        </div>
                        <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                          <a
                            href="#"
                            className="dark:hover:us-bg-primary hover:bg-primary flex size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white"
                          >
                            <ArrowRight className="fill-current" size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col place-content-stretch flex-1 w-0 gap-[10px]">
                <div className="flex justify-stretch">
                  <div className="grid-item">
                    <div className="group relative overflow-hidden rounded-sm">
                      <div className="old-image static">
                        <Image
                          src="/portfolio.png"
                          alt="Portfolio"
                          width={500}
                          height={500}
                          className="w-full h-auto"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-[#000]/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                        <div className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                          <h3 className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl">
                            Portfolio
                          </h3>
                          <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                            Branded Ecommerce
                          </p>
                        </div>
                        <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                          <a
                            href="#"
                            className="dark:hover:us-bg-primary hover:bg-primary flex size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white"
                          >
                            <ArrowRight className="fill-current" size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-10 text-center">
            <a
              href="#"
              className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
            >
              See More Projects
              <span className="pl-3">
                <ArrowRight size={16} className="fill-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
