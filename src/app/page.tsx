// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import ContactUs from "@/components/contact";

export default function Portfolio() {
  return (
    <>
    
      <Navbar />
      <Hero />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}
