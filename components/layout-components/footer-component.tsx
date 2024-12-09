"use client";

import React, { useState } from "react";
import {
  FaFacebook,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { courses } from "@/utils/Kierunki";
import Link from "next/link";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const availableCourseId = [
  "psychoterapia",
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
];

const courseCategories = [
  {
    id: "psychologia-psychoterapia",
    name: "Psychologia i Psychoterapia",
    courses: courses.filter((course) =>
      [
        "psychoterapia",
        "psychologia-uzaleznien-z-terapia-uzaleznien",
        "psychologia-uzaleznien-uzaleznienia-behawioralne",
        "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
        "cyberpsychologia",
        "seksuologia-praktyczna",
      ].includes(course.id)
    ),
  },
  {
    id: "pedagogika-specjalna-korekcyjna",
    name: "Pedagogika Specjalna i Korekcyjna",
    courses: courses.filter((course) =>
      [
        "logopedia",
        "pedagogika-korekcyjna",
        "pedagogika-specjalna-autyzm",
        "oligofrenopedagogika",
        "surdopedagogika",
        "tyflopedagogika",
        "integracja-sensoryczna-z-terapia-reki",
        "wczesne-wspomaganie-rozwoju-dziecka",
        "edukacja-integracyjna-i-wlaczajaca",
        "przygotowanie-pedagogiczne",
        "trener-umiejetnosci-spolecznych",
        "pedagogika-marii-montessori",
      ].includes(course.id)
    ),
  },
  {
    id: "zarzadzanie-dydaktyka-edukacyjna",
    name: "Zarządzanie i Dydaktyka Edukacyjna",
    courses: courses.filter((course) =>
      [
        "zarzadzanie-oswiata",
        "etyka",
        "wychowanie-do-zycia-w-rodzinie",
        "informatyka",
        "dydaktyka-jezyka-obcego-niemiecki",
        "przyroda-w-szkole-podstawowej",
        "edukacja-dla-bezpieczenstwa",
        "wychowanie-fizyczne-w-szkole",
        "chemia-w-szkole",
        "jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej",
      ].includes(course.id)
    ),
  },
];

export const FooterComponent = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <footer className="bg-blue-950 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between mb-8">
          {/* Sekcja Nawigacja */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">Nawigacja</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/oferta" className="hover:text-gray-400">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="/rekrutacja" className="hover:text-gray-400">
                  Rekrutacja
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-gray-400">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Sekcja Kontakt */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <address className="not-italic text-sm text-gray-300">
              ISP Global
              <br />
              ul. Magnolii 25 <br /> 44-207 Rybnik
              <br />
              Telefon:{" "}
              <a href="tel:797 173 501" className="hover:text-gray-400">
                797 173 501
              </a>
              <br />
              Tel/Whatsapp:{" "}
              <a href="tel:502 162 365" className="hover:text-gray-400">
                502 162 365
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:nowekwalifikacjerybnik@gmail.com"
                className="hover:text-gray-400"
              >
                nowekwalifikacjerybnik@gmail.com
              </a>
            </address>
          </div>

          {/* Sekcja Informacje o Prawach Autorskich */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Informacje</h2>
            <Link className="pb-1 text-sm text-gray-200" href="/wykladowcy">
              Wykładowcy
            </Link>
            <Link className="pb-1 text-sm text-gray-200" href="/referencje">
              Referencje
            </Link>
            <a
              className="pb-1 text-sm text-gray-200"
              href="/assets/referencje/CertyfikatDekra.pdf"
              target="_blank"
            >
              Certyfikat DEKRA
            </a>
            <a
              className="pb-1 text-sm text-gray-200"
              href="/assets/referencje/CertyfikatTGLS.pdf"
              target="_blank"
            >
              Certyfikat TGLS
            </a>
            <Link
              className="pb-1 text-sm text-gray-200"
              href="/polityka-prywatnosci"
            >
              Polityka prywatności
            </Link>
            <Link
              className="pb-1 text-sm text-gray-200"
              href="/odbior-dokumentow"
            >
              Odbiór dokumentów
            </Link>
            <a
              target="_blank"
              className="pb-1 text-sm text-gray-200"
              href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144"
            >
              Dofinansowanie
            </a>
            <Link
              className="pb-1 text-sm text-gray-200"
              href="/standardy-ochrony-maloletnich-w-placowkach-oswiatowych"
            >
              Standardy ochrony małoletnich <br />w placówkach oświatowych
            </Link>
            <Link className="pb-1 text-sm text-gray-200" href="/credits">
              Grafiki
            </Link>
          </div>

          {/* Sekcja Media Społecznościowe */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">
              Media Społecznościowe
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/isprybnik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZMSdZUXAMbS34zWr34yzAA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaYoutube size={24} />
              </a>
              <div className="border-l h-6 border-gray-400"></div>
              <a
                href="https://www.facebook.com/groups/1071990153582830"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <div className="border-l h-6 border-gray-400"></div>
              <a
                href="https://www.facebook.com/poradnia.magnolia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* New row for Courses Accordion */}
        <div className="border-t border-gray-700 pt-8">
          <h2 className="text-xl font-semibold mb-4">Kierunki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseCategories.map((category) => (
              <div key={category.id} className="mb-4">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                >
                  <span className="font-medium">{category.name}</span>
                  {openCategories.includes(category.id) ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>
                {openCategories.includes(category.id) && (
                  <ul className="pl-4 space-y-2 text-sm text-gray-300 mt-2">
                    {category.courses.map((course) => (
                      <li key={course.id} className="relative overflow-hidden">
                        {!availableCourseId.includes(course.id) ? (
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <span className="block cursor-not-allowed">
                                {course.title}
                              </span>
                            </HoverCardTrigger>
                            <HoverCardContent className="text-sm text-gray-500">
                              Nowe kierunki będą dostępne już wkrótce.
                            </HoverCardContent>
                          </HoverCard>
                        ) : (
                          <Link
                            href={`/oferta/${course.id}`}
                            className="block hover:text-gray-400"
                          >
                            {course.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 ISP Rybnik. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
