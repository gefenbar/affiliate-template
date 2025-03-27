"use client";
import { useState, useRef, useEffect } from "react";
import "./FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      question: "How does an electric toothbrush work?",
      answer:
        "An electric toothbrush operates with rotational or oscillating movements that help remove plaque more effectively than manual brushing.",
    },
    {
      question: "What should I consider when choosing an electric toothbrush?",
      answer:
        "Key factors include battery life, cleaning modes, brush head compatibility, and additional features like pressure sensors and smart connectivity.",
    },
    {
      question: "Is an electric toothbrush more effective than a manual one?",
      answer:
        "Studies show that electric toothbrushes, when used correctly, significantly improve oral hygiene by efficiently removing plaque.",
    },
    {
      question: "How often should I replace the brush head?",
      answer:
        "It is recommended to replace the brush head every 3-4 months, or sooner if the bristles become worn or damaged.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isActive={activeIndex === index}
          toggle={() => toggleFAQ(index)}
        />
      ))}
    </section>
  );
}

function FAQItem({ faq, isActive, toggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isActive]);

  return (
    <div className="faq-item">
      <h3 onClick={toggle} className="faq-question">
        {faq.question}
      </h3>
      <div
        className="faq-answer-wrapper"
        style={{ maxHeight: height }}
      >
        <p ref={contentRef} className="faq-answer">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
