import React from 'react';
import { useUserPreferences } from "../components/UserPreferencesContext";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

const FAQ = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeStyles = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  const headingStyles = {
    small: "text-4xl",
    medium: "text-5xl",
    large: "text-6xl",
  };

  const contrastStyles = highContrast
    ? "bg-black text-white"
    : "bg-white text-gray-900";

  const highlightColor = highContrast ? "text-[#87B4E8]" : "text-zinc-800";

  const faqs = [
    {
      question: "Jak wygląda proces rekrutacji?",
      answer: "Proces rekrutacji jest w pełni online. Wypełniasz formularz zgłoszeniowy na naszej stronie, załączasz wymagane dokumenty i czekasz na decyzję komisji rekrutacyjnej.",
    },
    {
      question: "Czy mogę studiować w dowolnym miejscu i czasie?",
      answer: "Tak, nasze studia są w 100% online, co daje możliwość nauki z dowolnego miejsca na świecie, o dowolnej porze.",
    },
    {
      question: "Jakie są wymagania techniczne?",
      answer: "Do uczestnictwa w zajęciach online potrzebujesz komputera z dostępem do Internetu oraz przeglądarki internetowej. Zalecamy również korzystanie ze słuchawek z mikrofonem.",
    },
    {
      question: "Czy są dostępne konsultacje z wykładowcami?",
      answer: "Tak, regularnie organizujemy webinary i sesje Q&A z wykładowcami, a także oferujemy możliwość indywidualnych konsultacji online.",
    },
    {
      question: "Czy otrzymam wsparcie techniczne?",
      answer: "Tak, oferujemy wsparcie techniczne na każdym etapie nauki. Możesz skontaktować się z naszym działem IT w przypadku jakichkolwiek problemów.",
    },
  ];

  return (
    <section id="faq" className={`py-16 ${contrastStyles}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <h2 className={`font-bold tracking-tighter ${highlightColor} ${headingStyles[fontSize]}`}>
          FAQ
        </h2>
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold text-lg text-[#1660C7]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={`text-gray-900 ${fontSizeStyles[fontSize]}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
