"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Home,
  Package,
  Briefcase,
  DollarSign,
  Building2,
  Newspaper,
  BookOpen,
  User,
  Phone,
  Mail,
  Send,
  Instagram,
} from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="pt-14 px-3 sm:pt-20 lg:pt-[130px] lg:flex lg:justify-center lg:items-center">
        <div className="lg:px-12 md:px-12 px-4 w-full">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-3/12">
              <div className="mb-20 max-w-[330px]">
                <a className="mb-6 inline-block" href="/">
                  <div className="hidden dark:block">
                    <Image
                      alt="logo"
                      width={115}
                      height={50}
                      src="/vercel.svg"
                      className="dark:block"
                    />
                  </div>
                  <div className="dark:hidden">
                    <Image alt="logo" width={115} height={50} src="/next.svg" />
                  </div>
                </a>
                <p className="mb-10 text-base text-dark-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center space-x-5">
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Facebook size={24} className="fill-current" />
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Twitter size={22} className="fill-current" />
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Linkedin size={24} className="fill-current" />
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
              <div className="mb-20">
                <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                  Company
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/"
                    >
                      <Home size={16} className="mr-2" /> Home
                    </a>
                  </li>
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/"
                    >
                      <Package size={16} className="mr-2" /> Products
                    </a>
                  </li>
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/"
                    >
                      <Briefcase size={16} className="mr-2" /> Careers
                      <span className="ml-4 rounded-sm bg-primary px-2 py-1 font-heading text-xs text-white">
                        Hiring
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/"
                    >
                      <DollarSign size={16} className="mr-2" /> Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
              <div className="mb-20">
                <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                  Support
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/"
                    >
                      <Building2 size={16} className="mr-2" /> Company
                    </a>
                  </li>
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/"
                    >
                      <Newspaper size={16} className="mr-2" /> Press Media
                    </a>
                  </li>
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/blog"
                    >
                      <BookOpen size={16} className="mr-2" /> Our Blog
                    </a>
                  </li>
                  <li>
                    <a
                      target="_self"
                      className="flex items-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                      href="/auth/signin"
                    >
                      <User size={16} className="mr-2" /> Account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-2/12">
              <div className="mb-20">
                <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                  Get in touch
                </h3>
                <div className="space-y-7">
                  <div>
                    <p className="font-heading text-base text-dark-text">
                      Toll Free Customer Care
                    </p>
                    <a
                      href="tel:+(1) 123 456 7890"
                      className="flex items-center font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <Phone size={16} className="mr-2" /> +(1) 123 456 7890
                    </a>
                  </div>
                  <div>
                    <p className="font-heading text-base text-dark-text">
                      Need live support?
                    </p>
                    <a
                      href="mailto:support@domain.com"
                      className="flex items-center font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <Mail size={16} className="mr-2" /> support@domain.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-5/12 xl:w-3/12">
              <div className="mb-20">
                <h3 className="font-heading text-dark mb-9 text-2xl font-medium dark:text-white">
                  Newsletter
                </h3>
                <p className="font-heading text-dark-text mb-6 text-base">
                  Subscribe to receive future updates
                </p>
                <form className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => console.log(e.target.value)}
                    className="text-dark-text outline-hidden focus:border-primary placeholder:text-dark-text w-full rounded-sm border py-3 pl-5 pr-12 text-base dark:border-transparent dark:bg-[#2C3443]"
                    name="email"
                    value=""
                  />
                  <button
                    className="text-dark-text absolute right-0 top-0 flex h-full w-12 items-center justify-center border-l dark:border-[#1F2633]"
                    type="submit"
                  >
                    <Send size={20} className="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="dark:border-[#2E333D] md:border-t">
            <div className="-mx-4 flex flex-wrap py-5 md:py-7">
              <div className="w-full px-4 md:w-1/2 lg:w-2/3">
                <div className="mb-5 flex items-center justify-center space-x-5 border-b pb-5 dark:border-[#2E333D] md:mb-0 md:justify-start md:border-0 md:pb-0">
                  <a
                    href="#"
                    className="font-heading text-base text-dark-text hover:text-primary"
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="font-heading text-base text-dark-text hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="font-heading text-base text-dark-text hover:text-primary"
                  >
                    Support
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div>
                  <p className="text-center font-heading text-base text-dark-text lg:text-right">
                    © {new Date().getFullYear()} Startup. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
