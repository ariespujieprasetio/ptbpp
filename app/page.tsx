import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CompanyIntro from "@/components/company-intro";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Stats from "@/components/stats";
import Projects from "@/components/projects";
import Team from "@/components/team";
import ContactCta from "@/components/contact-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyIntro />
        <Services />
        <WhyUs />
        <Stats />
        <Projects />
        <Team />
        <ContactCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
