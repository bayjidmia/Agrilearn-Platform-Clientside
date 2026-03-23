import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border border-gray-100 rounded-xl mb-4 transition-all duration-300 ${isOpen ? "bg-gray-50/50" : "bg-white"}`}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <div
          className={`p-1 rounded-md transition-colors ${isOpen ? "bg-green-800 text-white" : "bg-gray-100 text-gray-500"}`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-5 pt-0 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "Does Agrovia support sustainable farming?",
      answer:
        "Yes, Agrovia integrates various eco-friendly practices and data-driven insights to help farmers implement sustainable methods effectively.",
    },
    {
      question: "Can I monitor multiple fields at once?",
      answer:
        "Absolutely. Agrovia allows you to manage and track multiple fields from a single dashboard for better control and visibility.",
    },
    {
      question: "How do I get started with Agrovia?",
      answer:
        "Getting started is simple. Just sign up for an account, connect your field data, and our onboarding wizard will guide you through the rest.",
    },
    {
      question: "Is Agrovia easy to use for non-technical farmers?",
      answer:
        "We've designed our interface to be intuitive and user-friendly, ensuring that farmers of all technical backgrounds can navigate it with ease.",
    },
    {
      question: "Can Agrovia help reduce farming costs?",
      answer:
        "By optimizing resource allocation and providing early detection for potential issues, Agrovia helps significantly lower operational expenses.",
    },
  ];

  return (
    <section className="container mt-10 mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-12">
        <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase border border-green-100">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-green-900 mt-4 mb-2">
          Common Farmer{" "}
          <span className="italic font-normal text-primary ">Questions</span>
        </h2>
        <p className="text-gray-700 max-w-lg mx-auto">
          Got questions? We've got answers to help you get the most out of
          Agrovia.
        </p>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-primary hover:bg-green-950 text-white px-8 py-3 rounded-full font-medium transition-all">
          Still have question?
        </button>
      </div>
    </section>
  );
};

export default FAQ;
