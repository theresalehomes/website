import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Listings from "@/components/Listings";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Listings />
        <CallToAction />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
