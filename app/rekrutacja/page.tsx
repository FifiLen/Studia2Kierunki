"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { useUserPreferences } from "@/components/UserPreferencesContext";

const RecruitmentPage = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-black";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";
  const cardBgStyles = highContrast ? "bg-gray-800" : "bg-white";
  const linkContrastStyles = highContrast
    ? "bg-yellow-500 text-black hover:bg-yellow-600"
    : "bg-[#1660C7] text-white hover:bg-blue-600";

  return (
    <div
      className={`bg-gray-100 py-16 sm:py-24 lg:py-32 ${fontSizeClasses[fontSize]}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1
          className={`text-4xl font-bold ${textContrastStyles} sm:text-5xl lg:text-6xl tracking-tighter`}
        >
          Rekrutacja
        </h1>
        <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
          Proces rekrutacji na nasze programy studiów podyplomowych jest prosty
          i przejrzysty. Poniżej znajdziesz wszystkie niezbędne informacje.
        </p>

        <div className="mt-16">
          <h2
            className={`text-3xl font-bold ${textContrastStyles} sm:text-4xl lg:text-5xl tracking-tighter`}
          >
            Najczęściej Zadawane Pytania
          </h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Jakie są wymagania rekrutacyjne?
              </AccordionTrigger>
              <AccordionContent>
                Wymagania rekrutacyjne zależą od programu, ale zazwyczaj
                obejmują ukończone studia wyższe oraz doświadczenie zawodowe w
                danej dziedzinie.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Jak mogę się zapisać na studia?
              </AccordionTrigger>
              <AccordionContent>
                Możesz zapisać się na studia, klikając na link "Zapisz się na
                studia" przy opisie programu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Jakie są koszty studiowania?</AccordionTrigger>
              <AccordionContent>
                Koszty różnią się w zależności od programu. Szczegółowe
                informacje o kosztach znajdziesz w opisach poszczególnych
                programów.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Czy zajęcia odbywają się online?
              </AccordionTrigger>
              <AccordionContent>
                Tak, wszystkie nasze programy są dostępne w 100% online, co
                umożliwia elastyczne dostosowanie nauki do swojego harmonogramu.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-16">
          <h2
            className={`text-3xl font-bold ${textContrastStyles} sm:text-4xl lg:text-5xl tracking-tighter`}
          >
            Jak aplikować?
          </h2>
          <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
            Aby aplikować na nasze studia podyplomowe, postępuj zgodnie z
            poniższymi krokami:
          </p>
          <div className={`mt-6 p-6 shadow-lg rounded-lg ${cardBgStyles}`}>
            <ol className={`list-decimal list-inside ${textContrastStyles}`}>
              <li>Wybierz interesujący Cię program studiów podyplomowych.</li>
              <li>Sprawdź wymagania rekrutacyjne dla wybranego programu.</li>
              <li>
                Wypełnij formularz aplikacyjny dostępny na stronie programu.
              </li>
              <li>
                Załącz wymagane dokumenty, takie jak dyplom ukończenia studiów
                oraz CV.
              </li>
              <li>Prześlij formularz i czekaj na kontakt z naszej strony.</li>
            </ol>
            <Link href="/zapisz-sie">
              <p
                className={`mt-4 inline-block px-6 py-3 rounded-md ${linkContrastStyles}`}
              >
                Zapisz się na studia
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPage;
