import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Service from "@/components/Service";
import CTA from "@/components/CTA";
import Project from "@/components/Project";
import Feature from "@/components/Feature";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import BrandMarquee from "@/components/BrandMarquee";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background home-two-bg">
      <Header />
      <div id="scrollSmoother-container">
        <Banner />
        <About />
        <Marquee />
        <Service />
        <CTA />
        <Project />
        <Feature />
        <Contact />
        <Testimonial />
        <BrandMarquee />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}
