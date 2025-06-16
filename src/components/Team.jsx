import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

function Team() {
  return (
    <section id="team" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title"> </span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Meet With Our Creative Dedicated Team
          </h2>
          <p className="text-base text-dark-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="xs:max-w-[370px] group mx-auto mb-10 max-w-[300px] text-center">
              <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
                <Image
                  alt="team-photo"
                  src="/team.png"
                  fill
                  sizes="100vw"
                  className="object-cover w-full"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="/"
                      aria-label="Facebook"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="/"
                      aria-label="Twitter"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Twitter />
                    </a>
                    <a
                      href="/"
                      aria-label="Linkedin"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-dark mb-1 text-xl font-medium sm:text-2xl dark:text-white">
                  Olivia Andrium
                </h3>
                <p className="font-heading text-dark-text text-base">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="xs:max-w-[370px] group mx-auto mb-10 max-w-[300px] text-center">
              <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
                <Image
                  alt="team-photo"
                  src="/team.png"
                  fill
                  sizes="100vw"
                  className="object-cover w-full"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="/"
                      aria-label="Facebook"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="/"
                      aria-label="Twitter"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Twitter />
                    </a>
                    <a
                      href="/"
                      aria-label="Linkedin"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-dark mb-1 text-xl font-medium sm:text-2xl dark:text-white">
                  Olivia Andrium
                </h3>
                <p className="font-heading text-dark-text text-base">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="xs:max-w-[370px] group mx-auto mb-10 max-w-[300px] text-center">
              <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
                <Image
                  alt="team-photo"
                  src="/team.png"
                  fill
                  sizes="100vw"
                  className="object-cover w-full"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="/"
                      aria-label="Facebook"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="/"
                      aria-label="Twitter"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Twitter />
                    </a>
                    <a
                      href="/"
                      aria-label="Linkedin"
                      className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-dark mb-1 text-xl font-medium sm:text-2xl dark:text-white">
                  Olivia Andrium
                </h3>
                <p className="font-heading text-dark-text text-base">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
