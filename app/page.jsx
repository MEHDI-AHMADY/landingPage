import Header from "@/sections/Header";
import Landing from "@/sections/landing";
import Companies from "@/sections/companies";
import ServicesSec from "@/sections/ServiceSec";
import Happy from "@/sections/Happy";
import Studios from "@/sections/Studios";
import WorkProcess from "@/sections/WorkProcess";
import Team from "@/sections/Team";
import Testimonial from "@/sections/Testimonial";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Companies />
        <ServicesSec />
        <Happy />
        <Studios />
        <WorkProcess />
        <Team />
        <Testimonial />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
