// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import ContactUs from "@/components/contact";
import Register from "@/components/registers";
import Sponsors from "./sponsors";
import Prizes from "@/components/Prizes";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <AboutEvent />
      <OurStats />
      <Prizes />
      <EventContent />
      <Register />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}
