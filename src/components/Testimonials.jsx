"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "This product has completely transformed our workflow. The efficiency gains are incredible and our team is much more productive now.",
    name: "Sarah Johnson",
    role: "CEO @ TechCorp",
    initial: "S",
  },
  {
    id: 2,
    quote:
      "We've seen a 40% increase in productivity since implementing this solution. The intuitive interface makes onboarding new team members a breeze.",
    name: "Michael Chen",
    role: "CTO @ InnovateX",
    initial: "M",
  },
  {
    id: 3,
    quote:
      "After trying multiple alternatives, this stands out as the most comprehensive solution. The customer support is exceptional.",
    name: "Emily Rodriguez",
    role: "Director @ DigitalFirst",
    initial: "E",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the navigation functions
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section
      id="testimonial"
      className=" pt-20 sm:pt-20 lg:pt-[80px] lg:flex lg:justify-center lg:items-center"
    >
      <div className="lg:px-12 md:px-12 px-4 w-full">
        <div className="relative mx-auto mb-5 max-w-[620px] px-4 pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">TESTIMONIAL</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            What Our Clients Say About Us
          </h2>
          <p className="text-base text-dark-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="w-full pb-12 lg:pb-16 relative">
          <div className="relative max-w-7xl mx-auto  sm:px-6 lg:px-8">
            {/* Carousel container */}
            <div className="overflow-hidden relative group">
              {/* Navigation arrows */}
              <button
                onClick={goPrev}
                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all opacity-0 group-hover:opacity-100 border border-gray-200 dark:border-gray-700 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goNext}
                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all opacity-0 group-hover:opacity-100 border border-gray-200 dark:border-gray-700 hover:scale-105"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {/* Slides */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 px-4 py-15"
                    >
                      <div className="testimonial-card bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 max-w-[900px] h-full mx-auto relative overflow-hidden border dark:border-0 shadow-xl">
                        {/* Gradient accents */}
                        <div className="absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-10 z-0 blur-4xl"></div>
                        <div className="absolute -left-10 -bottom-10 w-44 h-44 bg-gradient-to-tr from-blue-400 via-purple-400 to-indigo-500 rounded-full opacity-15 z-0 blur-4xl"></div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10 z-10"></div>

                        {/* Content */}
                        <div className="relative z-20">
                          {/* Quote icon with animation */}
                          <div className="text-blue-500 mb-6 relative z-20">
                            <svg
                              className="w-14 h-14 opacity-80 hover:opacity-100 transition-opacity"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>

                          {/* Testimonial text with animated underline */}
                          <blockquote className="text-gray-700 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 relative z-20 leading-relaxed font-medium">
                            {testimonial.quote}
                            <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full"></span>
                          </blockquote>

                          {/* Author info */}
                          <div className="flex items-center max-w-4xl w-[290px] relative px-2 py-2 rounded-4xl z-20 bg-white/50">
                            <div className="mr-5">
                              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden border-2 border-white dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                                {testimonial.avatar ? (
                                  <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex justify-center items-center bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl font-bold">
                                    {testimonial.initial}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 dark:text-white text-lg md:text-xl">
                                {testimonial.name}
                              </p>
                              <p className="text-gray-600 dark:text-white text-sm md:text-base">
                                {testimonial.role} • {testimonial.company}
                              </p>
                              <div className="flex mt-2 space-x-2">
                                {Array.from({ length: testimonial.rating }).map(
                                  (_, i) => (
                                    <svg
                                      key={i}
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Navigation dots with animation */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"}`}
                  aria-label={`View testimonial ${index + 1}`}
                >
                  {currentIndex === index && (
                    <span className="absolute -inset-1.5 rounded-full bg-blue-500/20 animate-ping"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
