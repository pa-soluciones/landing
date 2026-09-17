import { faqData } from "@/lib/faqData";
import FaqList from "./FaqList";

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="container text-center">
        <span className="section-top-title fade-up animate-on-scroll">Preguntas Frecuentes</span>
        <h2 className="section-title fade-up animate-on-scroll delay-100">Respondemos tus preguntas</h2>
        <FaqList items={faqData} />
      </div>
    </section>
  );
}
