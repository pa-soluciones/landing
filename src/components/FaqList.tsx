"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="faq-list">
      {items.map((faq, i) => (
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
  );
}
