import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  ChevronRight,
  Check,
  ChevronRightCircle
} from 'lucide-react';

function Support() {
  return (
    <section id="support" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="flex flex-wrap items-center border-b pb-14 lg:pb-0 dark:border-[#2E333D]">
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16">
                  <span className="title left-0! translate-x-0!">SUPPORT</span>
                  <h2 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                    Need Any Help? Say hello
                  </h2>
                  <p className="text-dark-text text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Donec vitae tortor aliquam ante.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex items-center">
                  <span className="bg-dark mr-10 h-1 w-full max-w-[200px] dark:bg-white"></span>
                  <a
                    href="mailto:info@gostartup.com"
                    className="font-heading text-dark text-xl md:text-3xl lg:text-xl xl:text-3xl dark:text-white flex items-center"
                  >
                    info@gostartup.com <ChevronRightCircle className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap pt-12">
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="font-heading text-dark mb-2 text-base sm:text-xl dark:text-white">
                    Email Address
                  </h3>
                  <p className="text-dark-text text-base font-medium flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    support@startup.com
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="font-heading text-dark mb-2 text-base sm:text-xl dark:text-white">
                    Phone Number
                  </h3>
                  <p className="text-dark-text text-base font-medium flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +009 8754 3433 223
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="font-heading text-dark mb-2 text-base sm:text-xl dark:text-white">
                    Office Location
                  </h3>
                  <p className="text-dark-text text-base font-medium flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    76/A, Green valle, Califonia USA.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6 flex items-center space-x-5 lg:justify-end">
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[780px] pt-[130px]">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="name"
                    className="font-heading text-dark mb-3 block text-base dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className="text-dark placeholder-dark-text outline-hidden focus:border-primary w-full border-b bg-transparent py-5 text-base font-medium dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="name"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="email"
                    className="font-heading text-dark mb-3 block text-base dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="text-dark placeholder-dark-text outline-hidden focus:border-primary w-full border-b bg-transparent py-5 text-base font-medium dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="email"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="phone"
                    className="font-heading text-dark mb-3 block text-base dark:text-white"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    className="text-dark placeholder-dark-text outline-hidden focus:border-primary w-full border-b bg-transparent py-5 text-base font-medium dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="phone"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="subject"
                    className="font-heading text-dark mb-3 block text-base dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Type Subject"
                    className="text-dark placeholder-dark-text outline-hidden focus:border-primary w-full border-b bg-transparent py-5 text-base font-medium dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    name="subject"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-10">
                  <label
                    htmlFor="message"
                    className="font-heading text-dark mb-3 block text-base dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type Message"
                    className="text-dark placeholder-dark-text outline-hidden focus:border-primary w-full resize-none border-b bg-transparent py-5 text-base font-medium dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                  ></textarea>
                </div>
              </div>
              <div className="mb-12 px-4">
                <label
                  htmlFor="supportCheckbox"
                  className="text-dark-text hover:text-primary flex gap-4 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    className="peer sr-only"
                  />
                  <span className="group flex h-[1lh] shrink-0 items-center">
                    <span className="flex size-5 items-center justify-center rounded-sm border dark:border-[#414652] peer-checked:bg-primary peer-checked:border-primary">
                      <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                    </span>
                  </span>
                  <span>
                    I have read the terms of the Service &amp; I accept Privacy
                    Policy
                  </span>
                </label>
              </div>
              <div className="w-full px-4">
                <button
                  type="submit"
                  className="bg-primary font-heading hover:bg-primary/90 flex w-full items-center justify-center rounded-sm px-8 py-[14px] text-base text-white"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Support;
