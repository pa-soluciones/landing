import Header from "@/components/Header";
import DotNav from "@/components/DotNav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ClientInit from "@/components/ClientInit";
import { faqSchema } from "@/lib/schema";
import { faqData } from "@/lib/faqData";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqData)) }}
      />
      <DotNav />
      <Header />
      <div id="scroll-wrapper">
        <Hero />
        <Services />
        <Portfolio />
        <Partners />
        <About />
        <ContactForm />
        <FAQ />
        <Footer />
      </div>
      <ClientInit />
    </>
  );
}
