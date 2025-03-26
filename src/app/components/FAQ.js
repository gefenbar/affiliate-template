"use client"
import './FAQ.css'
import { useState } from 'react';
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
            <div key={index} className="faq-item">
              <h3 onClick={() => toggleFAQ(index)} className="faq-question">
                {faq.question}
              </h3>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </section>
      );
    
  }
  