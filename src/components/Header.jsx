"use client";
// ----------------------------------------------------- Imports ----------------------------------------------- //
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, SunMoon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThemeToggle } from "@/components/ui/lightdarktheme";

function Header() {
  // -------------------------------------------------- Variables ----------------------------------------------- //
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, toggleTheme] = useThemeToggle();
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // -------------------------------- Scroll Spy for Active Section -------------------------------- //
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("/#", ""));

    const handleScroll = () => {
      const scrollY = window.scrollY + 150; // adjust offset as needed
      let current = "";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#features", text: "Features" },
    { href: "/#aboutus", text: "About Us" },
    { href: "/#team", text: "Team" },
    { href: "/#portfolio", text: "Portfolio" },
    { href: "/#testimonial", text: "Testimonials" },
    { href: "/#pricing", text: "Pricing" },
    { href: "/#support", text: "Contact Us" },
  ];

  return (
    <>
      {/* ---------------------------------------------- Header ----------------------------------------------- */}
      <header className="sticky top-0 left-0 z-50 w-full dark:bg-dark/70 bg-[#F5F5F5]/30 backdrop-blur-md px-4 py-3  lg:px-10 xl:px-15">
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
          <nav className="hidden lg:flex lg:items-center lg:space-x-9 relative">
            {navItems.map((item) => {
              const id = item.href.replace("/#", "");
              const isActive = activeSection === id;
              return (
                <motion.div key={item.href} transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative transition-all text-[clamp(18px,1.5vw,20px)]  font-medium dark:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px]  after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full ${
                      isActive ? "text-primary" : "hover:text-primary"
                    }`}
                  >
                    {item.text}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* --------------------------------------------- Right Controls -------------------------------------------- */}
          <div className="flex items-center lg:space-x-0 sm:space-x-3 gap-5">
            {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5 text-white" />
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              className="flex"
              onClick={toggleTheme}
            >
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
        <div
          className="fixed inset-0 z-40 dark:bg-dark/70 bg-white/70 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar (only visible in tab and mobile) */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-70 dark:bg-dark bg-white/100 p-5 shadow-lg transition-transform duration-100 transform lg:hidden overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(false)}
            className="border"
          >
            <X className="h-10 w-10 dark:text-white" />
          </Button>
        </div>

        <nav className="mt-10 flex flex-col dark:text-white">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex flex-col">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="py-3"
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[18px] font-medium hover:text-primary transition-colors duration-200"
                >
                  {item.text}
                </Link>
              </motion.div>
              {index !== navItems.length - 1 && (
                <hr className="border-gray-200 dark:border-gray-700 my-2 opacity-30" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
