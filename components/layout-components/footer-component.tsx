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
import { useTranslations } from "next-intl";

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
    nameKey: "courseCategories.psychologyAndPsychotherapy",
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
    nameKey: "courseCategories.specialAndCorrectivePedagogy",
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
    nameKey: "courseCategories.educationalManagementAndDidactics",
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
  const t = useTranslations("FooterComponent");

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
          {/* Navigation Section */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">{t("navigation")}</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/oferta" className="hover:text-gray-400">
                  {t("offer")}
                </Link>
              </li>
              <li>
                <Link href="/rekrutacja" className="hover:text-gray-400">
                  {t("recruitment")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-400">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-gray-400">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">{t("contact")}</h2>
            <address className="not-italic text-sm text-gray-300">
              ISP Global
              <br />
              ul. Magnolii 25 <br /> 44-207 Rybnik
              <br />
              {t("phone")}:{" "}
              <a href="tel:797 173 501" className="hover:text-gray-400">
                797 173 501
              </a>
              <br />
              {t("phoneWhatsapp")}:{" "}
              <a href="tel:502 162 365" className="hover:text-gray-400">
                502 162 365
              </a>
              <br />
              {t("email")}:{" "}
              <a
                href="mailto:nowekwalifikacjerybnik@gmail.com"
                className="hover:text-gray-400"
              >
                nowekwalifikacjerybnik@gmail.com
              </a>
            </address>
          </div>

          {/* Information Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">{t("information")}</h2>
            <Link className="pb-1 text-sm text-gray-200" href="/wykladowcy">
              {t("lecturers")}
            </Link>
            <Link className="pb-1 text-sm text-gray-200" href="/referencje">
              {t("references")}
            </Link>
            <a
              className="pb-1 text-sm text-gray-200"
              href="/assets/referencje/CertyfikatDekra.pdf"
              target="_blank"
            >
              {t("dekraCertificate")}
            </a>
            <a
              className="pb-1 text-sm text-gray-200"
              href="/assets/referencje/CertyfikatTGLS.pdf"
              target="_blank"
            >
              {t("tglsCertificate")}
            </a>
            <Link
              className="pb-1 text-sm text-gray-200"
              href="/polityka-prywatnosci"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              className="pb-1 text-sm text-gray-200"
              href="/odbior-dokumentow"
            >
              {t("documentCollection")}
            </Link>
            <a
              target="_blank"
              className="pb-1 text-sm text-gray-200"
              href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144"
            >
              {t("funding")}
            </a>
            <Link
              className="pb-1 text-sm text-gray-200"
              href="/standardy-ochrony-maloletnich-w-placowkach-oswiatowych"
            >
              {t("minorProtectionStandards")}
            </Link>
            <Link className="pb-1 text-sm text-gray-200" href="/credits">
              {t("graphics")}
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">{t("socialMedia")}</h2>
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

        {/* Courses Accordion */}
        <div className="border-t border-gray-700 pt-8">
          <h2 className="text-xl font-semibold mb-4">{t("courses")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseCategories.map((category) => (
              <div key={category.id} className="mb-4">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                >
                  <span className="font-medium">{t(category.nameKey)}</span>
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
                              {t("comingSoon")}
                            </HoverCardContent>
                          </HoverCard>
                        ) : (
                          <Link
                            href={`/kierunek/${course.id}`}
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
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};
