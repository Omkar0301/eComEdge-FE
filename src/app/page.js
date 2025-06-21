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

export default function Main() {
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
