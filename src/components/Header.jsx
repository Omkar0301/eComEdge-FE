import { Button } from "@/components/ui/button";
import { Search, SunMoon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="header absolute left-0 top-0 w-full ">
      <div className="flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20">
        <div className="z-99 relative max-w-[250px] pr-4 lg:w-full lg:max-w-[220px] xl:max-w-[280px]">
          <a className="inline-block" href="/">
            <Image
              alt="logo"
              loading="lazy"
              width={215}
              height={50}
              className="hidden dark:block bg-transparent"
              src="https://go.demo.nextjstemplates.com/images/logo/logo-dark.svg"
            ></Image>
            <Image
              alt="logo"
              loading="lazy"
              width={215}
              height={50}
              className="hidden light:block bg-transparent"
              src="https://go.demo.nextjstemplates.com/images/logo/logo-light.svg"
            ></Image>
          </a>
        </div>
        <div className="menu-wrapper dark:bg-dark fixed left-0 top-0 z-50 h-screen w-full justify-center bg-white p-5 lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent ">
          <div className="w-full self-center">
            <nav>
              <ul className="navbar flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-x-6 lg:space-y-0 xl:space-x-10">
                <li>
                  <Link
                    className=" font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center dark:hover:text-white menu-scroll font-bold "
                    href="/#solutions"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    className=" font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center dark:hover:text-white menu-scroll font-bold "
                    href="/#industries"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    className=" font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center dark:hover:text-white menu-scroll font-bold "
                    href="/#blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className=" font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center dark:hover:text-white menu-scroll font-bold "
                    href="/#about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center dark:hover:text-white menu-scroll font-bold "
                    href="/#reach-us"
                  >
                    Reach Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="absolute right-5 top-1/2 z-50 flex -translate-y-1/2 items-center lg:static lg:ml-4 lg:translate-y-0 xl:ml-6">
          <div className="flex items-center justify-end"></div>
          <Button
            variant="ghost"
            size="icon"
            className="text-dark-text hidden h-10 w-10  items-center justify-center rounded-full sm:flex dark:text-white"
          >
            <Search className="w-[20px] h-[20px]" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-dark-text hidden h-[40px] w-[40px] items-center justify-center rounded-full sm:flex dark:text-white"
          >
            <SunMoon className="h-[20px] w-[20px]" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
