import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

const Faq = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl tracking-tighter">Najczęściej zadawane pytania</h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Odpowiedzi na najczęściej zadawane pytania dotyczące naszych programów studiów podyplomowych.
        </p>
        <div className="mt-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Czy program jest w pełni online?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-gray-600">
                  Tak, nasze programy studiów podyplomowych są w pełni dostępne online, co pozwala na elastyczność w nauce.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Jakie są wymagania rekrutacyjne?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-gray-600">
                  Wymagania rekrutacyjne obejmują ukończone studia licencjackie lub magisterskie oraz pozytywne przejście procesu rekrutacyjnego.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Jak długo trwają studia podyplomowe?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-gray-600">
                  Programy studiów podyplomowych trwają zazwyczaj dwa lub trzy semestry, w zależności od wybranego kierunku.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Czy mogę pracować podczas studiów?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-gray-600">
                  Tak, nasze programy są elastyczne i zaprojektowane tak, aby można było je pogodzić z pracą zawodową.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Jakie są koszty studiów podyplomowych?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-gray-600">
                  Koszty studiów różnią się w zależności od programu. Prosimy o kontakt z naszym biurem rekrutacyjnym w celu uzyskania szczegółowych informacji.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
