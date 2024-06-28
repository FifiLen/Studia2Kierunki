"use client";
import React, { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { courses } from "@/utils/Kierunki";
import Link from "next/link";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../components/ui/hover-card";

const availableCourseId = [
  "psychoterapia",
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
];

const Footer = () => {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  return (
    <footer className="bg-blue-950 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
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

          {/* Sekcja Kierunki */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-4">Kierunki</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              {courses.map((course) => (
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
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Informacje</h2>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ISP Global. Wszelkie prawa
              zastrzeżone.
            </p>
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
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 ISP Global. Wszelkie prawa zastrzeżone.
          </p>
          {/* <ul className="flex space-x-4 mt-4 sm:mt-0">
            <li>
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-gray-400 text-sm"
              >
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="/regulamin" className="hover:text-gray-400 text-sm">
                Regulamin
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-gray-400 text-sm">
                Kontakt
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
