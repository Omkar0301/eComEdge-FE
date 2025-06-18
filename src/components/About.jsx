"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function About() {
  const [activeTab, setActiveTab] = useState('about');
  return (
    <section id="aboutus" className="pt-14 sm:pt-20 lg:pt-[80px] lg:flex lg:justify-center lg:items-center">
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

        <div className="relative z-10 overflow-hidden rounded-sm px-4 py-8 sm:px-6 md:px-8 lg:px-[70px] lg:py-[70px] xl:px-[70px] xl:py-[20px]">
          {/* Background noise pattern */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>

          {/* Tab buttons */}
          <div className="tabButtons flex w-full flex-col items-stretch sm:flex-row sm:justify-around">
            <button
              onClick={() => setActiveTab('about')}
              className={`w-full border-b px-2 pb-4 pt-6 font-heading text-base font-medium transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-800/30 sm:pb-6 sm:pt-8 lg:pb-7 lg:pt-9 ${activeTab === 'about' ? 'border-primary text-primary border-b-2 dark:border-primary' : 'border-gray-200 text-gray-500 hover:text-primary dark:border-gray-700 dark:text-gray-400 dark:hover:text-white'}`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`w-full border-b px-2 pb-4 pt-6 font-heading text-base font-medium transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-800/30 sm:pb-6 sm:pt-8 lg:pb-7 lg:pt-9 ${activeTab === 'mission' ? 'border-primary text-primary border-b-2 dark:border-primary' : 'border-gray-200 text-gray-500 hover:text-primary dark:border-gray-700 dark:text-gray-400 dark:hover:text-white'}`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`w-full border-b px-2 pb-4 pt-6 font-heading text-base font-medium transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-800/30 sm:pb-6 sm:pt-8 lg:pb-7 lg:pt-9 ${activeTab === 'vision' ? 'border-primary text-primary border-b-2 dark:border-primary' : 'border-gray-200 text-gray-500 hover:text-primary dark:border-gray-700 dark:text-gray-400 dark:hover:text-white'}`}
            >
              Our Vision
            </button>
          </div>

          {/* Content area */}
          <div className="w-full pt-8 sm:pt-12 md:pt-[50px] lg:pt-[70px]">
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
              {/* Images section - responsive layout */}
              <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
                <div className="relative mx-auto h-auto max-w-[500px] lg:max-w-none">
                  <div className="relative aspect-[4/5] w-full max-w-[344px] mx-auto lg:mx-0">
                    <Image
                      alt="about-image-1"
                      loading="lazy"
                      fill
                      src="/about-1.png"
                      className="object-cover rounded-lg"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div className="relative aspect-[4/5] w-full max-w-[315px] mx-auto mt-6 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0">
                    <Image
                      alt="about-image-2"
                      loading="lazy"
                      fill
                      src="/about-2.png"
                      className="object-cover rounded-lg"
                      style={{ color: 'transparent' }}
                    />
                    <div className="absolute -left-2 -top-2 -z-10 h-full w-full rounded-lg border border-primary/10 bg-primary/5 backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10 sm:-left-3 sm:-top-3 lg:-left-5 lg:-top-5"></div>
                  </div>
                </div>
              </div>

              {/* Text content section */}
              <div className="w-full px-0 lg:w-1/2 lg:pl-8 xl:pl-12">
                <div className="max-w-[565px] mx-auto lg:ml-auto lg:mr-0">
                  {/* About Us Content */}
                  <div className={`transition-opacity duration-300 ${activeTab === 'about' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    <h2 className="font-heading text-dark mb-6 text-2xl font-bold sm:text-3xl md:mb-8 md:text-[40px] md:leading-[50px] dark:text-white">
                      DB, Auth, Stripe, Sanity, and More
                    </h2>
                    <p className="mb-4 text-base text-dark-text md:mb-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos ullam distinctio molestiae quibusdam sapiente sed qui ipsum, corrupti laboriosam fuga hic deserunt quidem dolores accusamus sit quod enim nesciunt!
                    </p>
                    <p className="text-base text-dark-text">
                      Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
                    </p>
                  </div>

                  {/* Our Mission Content */}
                  <div className={`transition-opacity duration-300 ${activeTab === 'mission' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    <h2 className="font-heading text-dark mb-6 text-2xl font-bold sm:text-3xl md:mb-8 md:text-[40px] md:leading-[50px] dark:text-white">
                      Our Mission Statement
                    </h2>
                    <p className="mb-4 text-base text-dark-text md:mb-6">
                      Our mission is to deliver exceptional digital experiences through innovative solutions and cutting-edge technology.
                    </p>
                    <p className="text-base text-dark-text">
                      We strive to empower businesses with tools that drive growth and success in the digital landscape.
                    </p>
                  </div>

                  {/* Our Vision Content */}
                  <div className={`transition-opacity duration-300 ${activeTab === 'vision' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    <h2 className="font-heading text-dark mb-6 text-2xl font-bold sm:text-3xl md:mb-8 md:text-[40px] md:leading-[50px] dark:text-white">
                      High-quality Premium Design with Everything You Need
                    </h2>
                    <p className="mb-4 text-base text-dark-text md:mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                      condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                      accumsan ultricies at in libero accumsan.
                    </p>
                    <p className="mb-4 text-base text-dark-text md:mb-6">
                      Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla.
                      Integer vitae magna lacus. Sed venenatis auctor dolor.
                    </p>
                    <p className="text-base text-dark-text">
                      Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla.
                      Integer vitae magna lacus. Sed venenatis auctor dolor.
                    </p>
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

export default About;
