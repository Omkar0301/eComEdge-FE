"use client";

import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { useGenericQuery } from "@/hooks/useGenericQuery";

export default function Main() {
  const { data, isLoading, error } = useGenericQuery({
    queryKey: ["users"],
    url: "https://jsonplaceholder.typicode.com/users",
  });

  if (isLoading) return <p>Loading landing page...</p>;
  if (error) return <p>Something went wrong.</p>;

  console.log(data);

  return (
    <>
      <Header />
      <Home />
      <Features />
      <About />
      <Team />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Support />
      <CTA />
      <Footer />
    </>
  );
}
