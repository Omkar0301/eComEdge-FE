import React from "react";
import { Check, ArrowRight } from 'lucide-react';

function Pricing() {
  return (
    <section id="pricing" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">PRICING PLANS</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Affordable Pricing With Simple Plans
          </h2>
          <p className="text-base text-dark-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center overflow-hidden rounded-sm drop-shadow-light dark:drop-shadow-none">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            {/* Gradient background - could be replaced with a CSS gradient */}
            <div className="h-[560px] w-[1174px] opacity-40 filter blur-[225px]">
              <div className="h-[328.051px] w-[272.933px] bg-gradient-to-br from-[#ABBCFF] to-[#4A6CF7]"></div>
            </div>
          </div>

          {/* Starter Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="pb-20 pt-10 text-center">
              <div className="border-b dark:border-[#2E333D]">
                <h3 className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white">
                  Starter
                </h3>
                <p className="pb-10 text-base text-dark-text">
                  For Individuals
                </p>
              </div>
              <div className="border-b py-10 dark:border-[#2E333D]">
                <h3 className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white">
                  $<sup className="-mb-2 text-[55px]">100</sup>/month
                </h3>
                <p className="mx-auto max-w-[300px] text-base text-dark-text">
                  Lorem ipsum dolor sit ametion consectetur adipisc elit.
                </p>
              </div>
              <ul className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  100 GB Storage
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />1 TB Photos
                  and Videos
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Exclusive Support
                </li>
                <li className="flex items-start text-base text-dark-text">
                  <Check className="mr-2 h-6 w-6 text-gray-400" />
                  Free SEO Tools
                </li>
                <li className="flex items-start text-base text-dark-text">
                  <Check className="mr-2 h-6 w-6 text-gray-400" />
                  Custom Branding Strategy
                </li>
              </ul>
              <button className="inline-flex items-center rounded-sm px-8 py-[14px] font-heading text-base text-white duration-200 bg-dark hover:bg-dark/90">
                Join This Plan
                <ArrowRight className="ml-3 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3 dark:border-[#2E333D] sm:border-l lg:border-x">
            <div className="pb-20 pt-10 text-center">
              <div className="border-b dark:border-[#2E333D]">
                <h3 className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white">
                  Professional
                </h3>
                <p className="pb-10 text-base text-dark-text">For Startups</p>
              </div>
              <div className="border-b py-10 dark:border-[#2E333D]">
                <h3 className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white">
                  $<sup className="-mb-2 text-[55px]">200</sup>/month
                </h3>
                <p className="mx-auto max-w-[300px] text-base text-dark-text">
                  Lorem ipsum dolor sit ametion consectetur adipisc elit.
                </p>
              </div>
              <ul className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  500 GB Storage
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Unlimited Photos and Videos
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Exclusive Support
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Free SEO Tools
                </li>
                <li className="flex items-start text-base text-dark-text">
                  <Check className="mr-2 h-6 w-6 text-gray-400" />
                  Custom Branding Strategy
                </li>
              </ul>
              <button className="inline-flex items-center rounded-sm px-8 py-[14px] font-heading text-base text-white duration-200 bg-primary hover:bg-primary/90">
                Join This Plan
                <ArrowRight className="ml-3 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Business Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="pb-20 pt-10 text-center">
              <div className="border-b dark:border-[#2E333D]">
                <h3 className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white">
                  Business
                </h3>
                <p className="pb-10 text-base text-dark-text">For Teams</p>
              </div>
              <div className="border-b py-10 dark:border-[#2E333D]">
                <h3 className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white">
                  $<sup className="-mb-2 text-[55px]">300</sup>/month
                </h3>
                <p className="mx-auto max-w-[300px] text-base text-dark-text">
                  Lorem ipsum dolor sit ametion consectetur adipisc elit.
                </p>
              </div>
              <ul className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Unlimited Storage
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Unlimited Photos and Videos
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Exclusive Support
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Free SEO Tools
                </li>
                <li className="flex items-start text-base text-dark dark:text-white">
                  <Check className="mr-2 h-6 w-6 text-[#00CB99]" />
                  Custom Branding Strategy
                </li>
              </ul>
              <button className="inline-flex items-center rounded-sm px-8 py-[14px] font-heading text-base text-white duration-200 bg-dark hover:bg-dark/90">
                Join This Plan
                <ArrowRight className="ml-3 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-12 text-center">
          <h3 className="mb-5 font-heading text-xl font-medium text-dark dark:text-white sm:text-3xl">
            Looking for a company solution?
          </h3>
          <a
            className="text-base text-dark-text underline-offset-2 duration-200 hover:text-primary hover:underline"
            href="/support"
          >
            Contact our team to get a quote.
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
