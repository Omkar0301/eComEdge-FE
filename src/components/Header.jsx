"use client";
// ----------------------------------------------------- Imports ----------------------------------------------- //
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, SunMoon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDarkMode } from "@/components/ui/lightdarktheme";

function Header() {
  // -------------------------------------------------- Variables ----------------------------------------------- //
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      {/* ---------------------------------------------- Header ----------------------------------------------- */}
      <header className="sticky top-0 left-0 z-50 w-full dark:bg-dark/70  backdrop-blur-md px-4 py-5 lg:px-10 xl:px-15">
        <div className="flex items-center justify-between ">
          {/* ------------------------------------------ Logo ------------------------------------------------------ */}
          <Link href="/">
            {theme === "dark" ? (
              <Image
                src="https://go.demo.nextjstemplates.com/images/logo/logo-dark.svg"
                alt="GoStartup Logo Dark"
                width={160}
                height={40}
                className="inline-block"
              />
            ) : (
              <Image
                src="https://go.demo.nextjstemplates.com/images/logo/logo-light.svg"
                alt="GoStartup Logo Light"
                width={160}
                height={40}
                className="inline-block"
              />
            )}
          </Link>

          {/* --------------------------------------- Desktop Navigation --------------------------------------------- */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-12">
            <Link
              href="/#aboutus"
              className="relative dark:text-white text-[clamp(18px,1.5vw,20px)] font-medium transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </Link>

            <Link
              href="/#features"
              className="relative dark:text-white  text-[clamp(18px,1.5vw,20px)] font-medium transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-400 hover:after:w-full"
            >
              Features
            </Link>

            <Link
              href="/#portfolio"
              className="relative dark:text-white  text-[clamp(18px,1.5vw,20px)] font-medium transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-400 hover:after:w-full"
            >
              Portfolio
            </Link>

            <Link
              href="/#testimonials"
              className="relative dark:text-white text-[clamp(18px,1.5vw,20px)] font-medium transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-400 hover:after:w-full"
            >
              Testimonials
            </Link>

            <Link
              href="/#pricing"
              className="relative dark:text-white text-[clamp(18px,1.5vw,20px)] font-medium transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-400 hover:after:w-full"
            >
              Pricing
            </Link>

            <Link
              href="/#contactus"
              className="relative dark:text-white text-[clamp(18px,1.5vw,20px)] font-medium transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-400 hover:after:w-full"
            >
              Contact Us
            </Link>
          </nav>

          {/* --------------------------------------------- Right Controls -------------------------------------------- */}
          <div className="flex items-center lg:space-x-0 sm:space-x-3 gap-5">
            {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5 text-white" />
            </Button> */}
            <Button variant="ghost" size="icon" className="flex" onClick={toggleTheme}>
              <SunMoon className="h-5 w-5 dark:text-white border-dark" />
            </Button>

            {/* --------------------------------------------- Hamburger ------------------------------------------------ */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(true)}
              className=" lg:hidden dark:text-white border"
            >
              <Menu className="h-10 w-10 " />
            </Button>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------- Overlay ---------------------------------------------- */}
      {menuOpen && (
        <div className="fixed  inset-0 z-40 dark:bg-dark/70 bg-white/100  lg:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* ----------------------------------- Sidebar (only visible in tab and mobile) ------------------------- */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 dark:bg-dark bg-white/100 p-5 shadow-lg transition-transform duration-100 transform lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} className="border">
            <X className="h-10 w-10 dark:text-white" />
          </Button>
        </div>
        <nav className="mt-10 flex flex-col space-y-5 dark:text-white">
          <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link href="/#aboutus" onClick={() => setMenuOpen(false)} className="block text-[20px] font-medium hover:text-primary">
              About Us
            </Link>
          </motion.div>
          <hr className="dark:border-white/20" />

          <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link href="/#features" onClick={() => setMenuOpen(false)} className="block text-[20px] font-medium hover:text-primary">
              Features
            </Link>
          </motion.div>
          <hr className="dark:border-white/20" />

          <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link href="/#portfolio" onClick={() => setMenuOpen(false)} className="block text-[20px] font-medium hover:text-primary">
              Portfolio
            </Link>
          </motion.div>
          <hr className="dark:border-white/20" />

          <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link href="/#testimonials" onClick={() => setMenuOpen(false)} className="block text-[20px] font-medium hover:text-primary">
              Testimonials
            </Link>
          </motion.div>
          <hr className="dark:border-white/20" />

          <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link href="/#pricing" onClick={() => setMenuOpen(false)} className="block text-[20px] font-medium hover:text-primary">
              Pricing
            </Link>
          </motion.div>
          <hr className="dark:border-white/20" />

          <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link href="/#contactus" onClick={() => setMenuOpen(false)} className="block text-[20px] font-medium hover:text-primary">
              Contact Us
            </Link>
          </motion.div>
        </nav>
      </div>
    </>
  );
}

export default Header;
