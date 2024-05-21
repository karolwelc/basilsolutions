
import React, { useState } from 'react';

import styles, { layout } from '../style'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="faq-question-text">{question}</h3>
        <span className="faq-toggle">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "What do you offer / What is Basil Solutions? ",
      answer: "We specialize in supplying stores and wholesalers with authentic sneakers and apparel. We sell limited sneakers from the latest releases, as well as a variety of popular casual shoes like Crocs and Birkenstocks."
    },
    {
      question: "What sneakers do you sell? ",
      answer: "We sell limited sneakers from the latest releases, as well as a variety of popular casual shoes like Crocs and Birkenstocks."
    },
    {
      question: "How do I order?",
      answer: "To place an order with us, fill out the contact form, or send us a direct message on WhatsApp at +48605941307. In your message, you should include information about the product you want to purchase, the desired quantity, and the delivery location."
    },
    {
      question: "How can I purchase your proxies?",
      answer: "Our proxy group is currently not open to the public, and you can get in by invite-only. Fill the form to enter the waiting list."
    },
    {
      question: "How can I see your offers?",
      answer: "To access our special offers, subscribe to our mailing list."
    },
    {
      question: "How long does it take to fulfill an order?",
      answer: "Delivery times may vary depending on the product. Some products are ready to ship from our warehouse, while others may need to be sent from a different warehouse. The average waiting time is 2-14 days. We will always provide you with more detailed information before payment."
    }
  ];

  return (
    <section id="faq" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          More about us<br className='sm:block hidden' />
        </h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;