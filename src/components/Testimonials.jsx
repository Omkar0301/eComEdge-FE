import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <section id="testimonial" className="pt-14 sm:pt-20 lg:pt-[80px]">
      <div className="px-4 xl:container">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">TESTIMONIAL</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            What Our Clients Say About Us
          </h2>
          <p className="text-base text-dark-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="w-full px-4">
          <div className="relative z-10 overflow-hidden rounded-sm bg-cover bg-center px-10 pb-28 pt-[60px] drop-shadow-light dark:drop-shadow-none sm:px-14 md:p-[70px] md:pb-28 lg:pb-[70px]">
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
            <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
              <div className="h-[560px] w-[1174px] opacity-40 filter blur-[225px]">
                <div className="h-[328.051px] w-[272.933px] bg-gradient-to-br from-[#ABBCFF] to-[#4A6CF7]"></div>
              </div>
            </div>
            <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "936px" }}
                >
                  <div className="testimonial-item">
                    <div className="-mx-4 flex flex-wrap items-center">
                      <div className="order-last w-full px-4 lg:order-first lg:w-1/2">
                        <div className="text-center lg:text-left">
                          <p className="font-heading text-dark-text mb-9 text-base font-light lg:text-lg xl:text-2xl">
                            <Quote
                              className="inline mr-2 fill-current text-[#4A6CF7]"
                              size={24}
                            />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce condimentum sapien ac leo cursus
                            dignissim. In ac lectus vel orci accumsan ultricies
                            at in libero accumsan Lorem Ipsum has been the
                            industry's standard
                          </p>
                          <h3 className="font-heading text-dark mb-1 text-xl dark:text-white">
                            Musharof Chy
                          </h3>
                          <p className="text-dark-text text-base">
                            Founder @ Pimjo
                          </p>
                        </div>
                      </div>
                      <div className="w-full px-4 lg:w-1/2">
                        <div className="relative mx-auto mb-9 aspect-square w-full max-w-[420px] lg:mb-0 lg:mr-0">
                          <div className="absolute right-5 top-5 z-10 h-full w-full">
                            <Image
                              src="/testimonials.png"
                              alt="Musharof Chy"
                              fill
                              className="object-cover"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div className="border-primary/10 bg-primary/5 absolute -right-5 -top-5 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"></div>
                          <div className="absolute -right-4 bottom-20 z-40">
                            <Quote className="fill-[#4A6CF7]" size={72} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
