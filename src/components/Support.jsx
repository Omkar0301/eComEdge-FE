"use client"
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  Instagram,
  SendHorizontal
} from 'lucide-react';

function Support() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="support" className="relative mt-30 pt-20 py-24 overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-4xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-4xl"></div>

      <div className="lg:px-12 md:px-12 px-4 w-full">
        {/* Header */}
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">Contact&nbsp;Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's build something <span className="relative">
              amazing
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Our team is ready to help you bring your ideas to life.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:justify-center  lg:flex-row gap-12">
          {/* Left column - Contact methods */}
          <div className="lg:w-120  bg-white dark:bg-gray-800 rounded-2xl ">
            <div className="space-y-8">
              {/* Email */}
              <div className="group relative p-8  ">
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/20 mr-6 flex-shrink-0 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Email us</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For general inquiries and support</p>
                    <a href="mailto:support@startup.com" className="inline-flex items-center text-black dark:text-blue-400 ">
                      support@startup.com
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group relative p-8 ">
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/20 mr-6 flex-shrink-0 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Call us</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Available 9AM - 5PM EST, Mon-Fri</p>
                    <a href="tel:+00987543433223" className="inline-flex items-center text-black dark:text-blue-400 ">
                      +91 1234 234 859
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group relative p-8 ">
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/20 mr-6 flex-shrink-0 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Visit us</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Come by for a coffee and chat</p>
                    <p className="text-black dark:text-blue-400">
                      76/A, Green valle, California USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="max-w-full " />

            {/* Social links */}
            <div className=" p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
                Follow Us !
              </h3>
              <div className="flex justify-center md:justify-start space-x-5">
                {[
                  {
                    icon: Facebook,
                    color: 'bg-blue-100 dark:bg-blue-900/30',
                    hover: 'hover:bg-blue-500 dark:hover:bg-blue-600',
                    iconColor: 'text-blue-600 dark:text-blue-400'
                  },
                  {
                    icon: Twitter,
                    color: 'bg-sky-100 dark:bg-sky-900/30',
                    hover: 'hover:bg-sky-500 dark:hover:bg-sky-600',
                    iconColor: 'text-sky-500 dark:text-sky-400'
                  },
                  {
                    icon: Linkedin,
                    color: 'bg-blue-100 dark:bg-blue-900/30',
                    hover: 'hover:bg-blue-700 dark:hover:bg-blue-800',
                    iconColor: 'text-blue-700 dark:text-blue-500'
                  },
                  {
                    icon: Instagram,
                    color: 'bg-purple-100 dark:bg-purple-900/30',
                    hover: 'hover:bg-gradient-to-r from-purple-500 to-pink-500',
                    iconColor: 'text-purple-600 dark:text-purple-400'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.color} ${social.hover} ${social.iconColor} w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-white shadow-md`}
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <social.icon className="w-6 h-6 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="lg:w-1/2">
            <div className="relative h-full p-0.5 rounded-2xl ">
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Send us a message
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="peer w-full px-2 py-3 border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 placeholder-transparent"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                      >
                        Full Name
                      </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="peer w-full px-2 py-3 border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 placeholder-transparent"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        className="peer w-full px-2 py-3 border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 placeholder-transparent"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                      >
                        Subject
                      </label>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        id="message"
                        rows="4"
                        className="peer w-full px-2 py-3 border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 placeholder-transparent"
                        placeholder=" "
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                      >
                        Your Message
                      </label>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600"
                      required
                    />
                    <label htmlFor="terms" className="ml-5 text-sm text-gray-600 dark:text-gray-400">
                      I agree to the privacy policy and terms of service
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendHorizontal className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;