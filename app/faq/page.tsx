"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useUserPreferences } from "@/components/UserPreferencesContext";

const FAQ = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-black";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";

  return (
    <div
      className={` ${bgContrastStyles} py-16 sm:py-24 lg:py-32 ${fontSizeClasses[fontSize]}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold ${textContrastStyles} sm:text-4xl lg:text-5xl tracking-tighter`}
        >
          Najczęściej Zadawane Pytania
        </h2>
        <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
          Odpowiedzi na najczęściej zadawane pytania dotyczące naszej uczelni,
          rekrutacji, praktyk i innych istotnych informacji.
        </p>

        <div className="mt-10">
          <h3
            className={`text-3xl font-bold ${textContrastStyles} sm:text-3xl lg:text-4xl tracking-tighter`}
          >
            Rekrutacja
          </h3>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className={textContrastStyles}>
                Jakie są wymagania rekrutacyjne?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Wymagania rekrutacyjne zależą od programu studiów, ale zazwyczaj
                obejmują ukończone studia wyższe oraz doświadczenie zawodowe w
                danej dziedzinie. Szczegółowe informacje znajdują się na stronie
                każdego programu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={textContrastStyles}>
                Jak mogę się zapisać na studia?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Możesz zapisać się na studia, klikając na link "Zapisz się na
                studia" przy opisie programu. Proces obejmuje wypełnienie
                formularza aplikacyjnego oraz przesłanie wymaganych dokumentów.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className={textContrastStyles}>
                Jakie są terminy rekrutacji?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Terminy rekrutacji mogą się różnić w zależności od programu.
                Zalecamy sprawdzenie aktualnych terminów na naszej stronie
                internetowej lub skontaktowanie się z biurem rekrutacji.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className={textContrastStyles}>
                Jakie są formy płatności za studia?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Akceptujemy różne formy płatności, w tym płatności kartą
                kredytową, przelewem bankowym oraz systemy ratalne. Szczegółowe
                informacje o dostępnych opcjach płatności znajdują się na
                stronie każdego programu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className={textContrastStyles}>
                Czy uczelnia oferuje stypendia?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Tak, oferujemy różne stypendia i formy wsparcia finansowego dla
                naszych studentów. Szczegółowe informacje na ten temat można
                znaleźć na naszej stronie internetowej w sekcji dotyczącej
                stypendiów.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className={`text-3xl font-bold ${textContrastStyles} sm:text-3xl lg:text-4xl tracking-tighter mt-10`}
          >
            Studia i Zajęcia
          </h3>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-6">
              <AccordionTrigger className={textContrastStyles}>
                Jakie są koszty studiowania?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Koszty różnią się w zależności od programu studiów. Szczegółowe
                informacje o kosztach znajdują się w opisach poszczególnych
                programów.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className={textContrastStyles}>
                Czy zajęcia odbywają się online?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Tak, większość naszych programów jest dostępna w 100% online, co
                umożliwia elastyczne dostosowanie nauki do swojego harmonogramu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className={textContrastStyles}>
                Jakie wsparcie oferuje uczelnia dla studentów?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Oferujemy szeroki zakres wsparcia dla naszych studentów, w tym
                dostęp do materiałów edukacyjnych, sesje superwizyjne, wsparcie
                techniczne oraz doradztwo zawodowe.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3
            className={`text-3xl font-bold ${textContrastStyles} sm:text-3xl lg:text-4xl tracking-tighter mt-10`}
          >
            Praktyki i Zatrudnienie
          </h3>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-9">
              <AccordionTrigger className={textContrastStyles}>
                Czy uczelnia oferuje praktyki zawodowe?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Tak, większość naszych programów obejmuje moduły praktyk
                zawodowych, które pozwalają studentom na bezpośrednią pracę z
                pacjentami i zdobycie praktycznych umiejętności pod okiem
                doświadczonych specjalistów.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className={textContrastStyles}>
                Jakie są możliwości zatrudnienia po ukończeniu studiów?
              </AccordionTrigger>
              <AccordionContent className={textContrastStyles}>
                Absolwenci naszych programów mają szerokie perspektywy zawodowe,
                w tym praca jako terapeuci, konsultanci, badacze oraz
                specjaliści w różnych dziedzinach. Szczegółowe informacje o
                możliwościach zatrudnienia znajdują się w opisach poszczególnych
                programów.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
