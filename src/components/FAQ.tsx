"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqData } from "@/lib/faqData";

const faqs = faqData;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="faq-section">
      <div className="container text-center">
        <span className="section-top-title fade-up animate-on-scroll">Preguntas Frecuentes</span>
        <h2 className="section-title fade-up animate-on-scroll delay-100">FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button className="faq-question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                {faq.question}
                <Plus className="faq-icon" aria-hidden="true" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
