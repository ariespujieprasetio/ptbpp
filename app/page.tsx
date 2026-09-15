import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CompanyIntro from "@/components/company-intro";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Process from "@/components/process";
import Stats from "@/components/stats";
import Projects from "@/components/projects";
import Team from "@/components/team";
import ContactCta from "@/components/contact-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import RevealProvider from "@/components/reveal-provider";

export default function Home() {
  return (
    <>
      <RevealProvider />
      <Navbar />
      <main id="main-content">
        <Hero />
        <CompanyIntro />
        <Services />
        <WhyUs />
        <Process />
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
