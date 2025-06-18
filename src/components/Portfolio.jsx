import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const portfolioItems = [
  {
    "id": 1,
    "title": "Elegant Fashion Boutique",
    "category": "Ecommerce",
    "image": "/team.png"
  },
  {
    "id": 2,
    "title": "Tech Startup Branding",
    "category": "Brand Design",
    "image": "/team.png"
  },
  {
    "id": 3,
    "title": "Organic Grocery Platform",
    "category": "Ecommerce",
    "image": "/team.png"
  },
  {
    "id": 4,
    "title": "Luxury Watch Collection",
    "category": "Branded Ecommerce",
    "image": "/team.png"
  },
  {
    "id": 5,
    "title": "Creative Agency Identity",
    "category": "Brand Design",
    "image": "/team.png"
  },
  {
    "id": 6,
    "title": "Fitness Equipment Store",
    "category": "Ecommerce",
    "image": "/team.png"
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="pt-14 sm:pt-20 lg:pt-[80px] lg:flex lg:justify-center lg:items-center">
      <div className="px-4 xl:container">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover"
                  style={{ color: "transparent" }}

                />
              </div>
              {/* Modified overlay div - removed opacity-0 and translate classes for mobile/tablet */}
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="w-full p-4 md:p-5 lg:p-6 backdrop-blur-[30px]">
                  <div className="flex items-center justify-between">
                    <div className="border-r border-[#e9e9e9]/30 pr-4">
                      <h3 className="font-heading text-base md:text-lg lg:text-xl font-medium text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#d9d9d9]">
                        {item.category}
                      </p>
                    </div>
                    <div className="pl-4">
                      <a
                        href="#"
                        className="hover:bg-primary flex size-8 md:size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white transition-colors"
                      >
                        <ArrowRight className="fill-current" size={16} />
                      </a>
                    </div>
                  </div>
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



