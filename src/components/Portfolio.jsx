import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Fashion Boutique",
    category: "Ecommerce",
    image: "/team.png",
  },
  {
    id: 2,
    title: "Tech Startup Branding",
    category: "Brand Design",
    image: "/team.png",
  },
  {
    id: 3,
    title: "Organic Grocery Platform",
    category: "Ecommerce",
    image: "/team.png",
  },
  {
    id: 4,
    title: "Luxury Watch Collection",
    category: "Branded Ecommerce",
    image: "/team.png",
  },
  {
    id: 5,
    title: "Creative Agency Identity",
    category: "Brand Design",
    image: "/team.png",
  },
  {
    id: 6,
    title: "Fitness Equipment Store",
    category: "Ecommerce",
    image: "/team.png",
  },
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 sm:pt-20 lg:pt-[80px] lg:flex lg:justify-center lg:items-center"
    >
      <div className="2xl:px-30 lg:px-12 md:px-12 px-4 w-full ">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">PORTFOLIO</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Product Images, Previews & More !
          </h2>
          <p className="text-base text-dark-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 max-w-[400px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-gray-800/50"
            >
              {/* Image with zoom effect */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Glass-style content panel */}
              <div className="relative bg-white/80 p-5 backdrop-blur-sm dark:bg-gray-900/80">
                <div className="absolute -top-6 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <ArrowUpRight size={18} />
                </div>

                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  {item.category}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-200/80 px-3 py-1 text-xs dark:bg-gray-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
