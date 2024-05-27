"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaPhoneAlt,
  FaEnvelope,
  FaLaptop,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import Link from "next/link";
import { useUserPreferences } from "@/components/UserPreferencesContext";

const OfferPage = () => {
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

  const programs = [
    {
      title: "Seksuologia Praktyczna",
      description:
        "Program obejmuje trzy semestry intensywnych zajęć, które łączą teorię z praktyką. Zajęcia prowadzone są przez doświadczonych wykładowców.",
      requirements:
        "Wymagania rekrutacyjne: ukończone studia wyższe, doświadczenie zawodowe w dziedzinie psychologii lub pokrewnych.",
      lecturers: [
        "Dr. Jan Kowalski: Ekspert w dziedzinie psychologii uzależnień",
        "Prof. Anna Nowak: Specjalista w zakresie seksuologii",
        "Dr. Piotr Wiśniewski: Specjalista w dziedzinie terapii uzależnień",
      ],
      image: "/assets/studentka2.png",
      link: "/seksuologia",
      cost: "6,000 PLN",
      semesters: 3,
      online: true,
    },
    {
      title: "Psychologia uzależnień z terapią uzależnień",
      description:
        "Program obejmuje trzy semestry intensywnych zajęć, które łączą teorię z praktyką. Zajęcia prowadzone są przez doświadczonych wykładowców.",
      requirements:
        "Wymagania rekrutacyjne: ukończone studia wyższe, doświadczenie zawodowe w dziedzinie psychologii lub pokrewnych.",
      lecturers: [
        "Dr. Jan Kowalski: Ekspert w dziedzinie psychologii uzależnień",
        "Prof. Anna Nowak: Specjalista w zakresie seksuologii",
        "Dr. Piotr Wiśniewski: Specjalista w dziedzinie terapii uzależnień",
      ],
      image: "/assets/studentka.png",
      link: "#",
      cost: "8,000 PLN",
      semesters: 3,
      online: true,
    },
    // Additional programs added here
    {
      title: "Cyberpsychologia",
      description:
        "Program obejmuje dwa semestry zajęć teoretycznych i praktycznych. Zajęcia prowadzone są przez specjalistów z zakresu zarządzania.",
      requirements:
        "Wymagania rekrutacyjne: ukończone studia wyższe, preferowane kierunki to zarządzanie i ochrona zdrowia.",
      lecturers: [
        "Dr. Tomasz Nowak: Ekspert w zarządzaniu służbą zdrowia",
        "Prof. Maria Kowalska: Specjalistka w zakresie ekonomii zdrowia",
      ],
      image: "/assets/studentka2.png",
      link: "#",
      cost: "8,000 PLN",
      semesters: 2,
      online: true,
    },
    {
      title: "Trening umiejętności społecznych",
      description:
        "Program obejmuje dwa semestry intensywnych zajęć teoretycznych i praktycznych z zakresu marketingu.",
      requirements:
        "Wymagania rekrutacyjne: ukończone studia wyższe, preferowane kierunki to marketing i zarządzanie.",
      lecturers: [
        "Dr. Adam Zieliński: Specjalista w zakresie marketingu",
        "Prof. Julia Nowak: Ekspert w dziedzinie zarządzania",
      ],
      image: "/assets/studentka.png",
      link: "#",
      cost: "2,400 PLN",
      semesters: 2,
      online: true,
    },
    {
      title: "Uzaleznienia behawioralne",
      description:
        "Program obejmuje dwa semestry zajęć teoretycznych i praktycznych z zakresu prawa biznesowego.",
      requirements:
        "Wymagania rekrutacyjne: ukończone studia wyższe, preferowane kierunki to prawo i administracja.",
      lecturers: [
        "Dr. Wojciech Kamiński: Ekspert w dziedzinie prawa biznesowego",
        "Prof. Anna Kowalska: Specjalistka w zakresie prawa handlowego",
      ],
      image: "/assets/studentka2.png",
      link: "#",
      cost: "4,200 PLN",
      semesters: 2,
      online: true,
    },
    {
      title: "Diagnoza i strategie terapeutyczne w leczeniu hiperseksualności",
      description:
        "Program obejmuje dwa semestry zajęć teoretycznych i praktycznych z zakresu informatyki biznesowej.",
      requirements:
        "Wymagania rekrutacyjne: ukończone studia wyższe, preferowane kierunki to informatyka i zarządzanie.",
      lecturers: [
        "Dr. Janusz Kwiatkowski: Ekspert w dziedzinie informatyki",
        "Prof. Katarzyna Nowak: Specjalistka w zakresie zarządzania systemami IT",
      ],
      image: "/assets/studentka.png",
      link: "#",
      cost: "6,000 PLN",
      semesters: 2,
      online: true,
    },
  ];

  return (
    <div
      className={`bg-gray-100 py-16 sm:py-24 lg:py-32 ${fontSizeClasses[fontSize]}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1
          className={`text-4xl font-bold ${textContrastStyles} sm:text-5xl lg:text-6xl tracking-tighter`}
        >
          Studia Podyplomowe
        </h1>
        <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
          Zapraszamy do zapoznania się z naszą ofertą studiów podyplomowych.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`shadow-lg rounded-lg overflow-hidden ${cardBgStyles}`}
            >
              <CardHeader className="p-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-96 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3
                  className={`text-2xl font-semibold tracking-tighter mb-2 ${textContrastStyles}`}
                >
                  {program.title}
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <Card className={`p-4 ${bgContrastStyles}`}>
                    <div className="flex items-center">
                      <FaMoneyBillWave
                        className="text-green-500 mr-4"
                        size={24}
                      />
                      <div>
                        <h4
                          className={`text-lg font-semibold ${textContrastStyles}`}
                        >
                          Koszt
                        </h4>
                        <p className={textContrastStyles}>{program.cost}</p>
                      </div>
                    </div>
                  </Card>
                  <Card className={`p-4 ${bgContrastStyles}`}>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-blue-500 mr-4" size={24} />
                      <div>
                        <h4
                          className={`text-lg font-semibold ${textContrastStyles}`}
                        >
                          Liczba semestrów
                        </h4>
                        <p className={textContrastStyles}>
                          {program.semesters}
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className={`p-4 ${bgContrastStyles}`}>
                    <div className="flex items-center">
                      <FaLaptop className="text-purple-500 mr-4" size={24} />
                      <div>
                        <h4
                          className={`text-lg font-semibold ${textContrastStyles}`}
                        >
                          100% Online
                        </h4>
                        <p className={textContrastStyles}>
                          {program.online ? "Tak" : "Nie"}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Opis programu</AccordionTrigger>
                    <AccordionContent>
                      <p className={`text-base mb-4 ${textContrastStyles}`}>
                        {program.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Wymagania rekrutacyjne</AccordionTrigger>
                    <AccordionContent>
                      <p className={`text-base mb-4 ${textContrastStyles}`}>
                        {program.requirements}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Wykładowcy</AccordionTrigger>
                    <AccordionContent>
                      <ul
                        className={`list-disc list-inside mb-4 ${textContrastStyles}`}
                      >
                        {program.lecturers.map((lecturer, i) => (
                          <li key={i} className="ml-4">
                            {lecturer}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="px-6">
                <Link href={program.link}>
                  <p
                    className={`font-medium tracking-tight flex items-center px-4 py-2 rounded-lg gap-2 ${linkContrastStyles}`}
                  >
                    Dowiedz się więcej o kierunku <FaGraduationCap />
                  </p>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16">
          <h2
            className={`text-3xl font-bold ${textContrastStyles} sm:text-4xl lg:text-5xl tracking-tighter`}
          >
            Rekrutacja
          </h2>
          <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
            Proces rekrutacji na nasze programy studiów podyplomowych jest
            prosty i przejrzysty. Skontaktuj się z nami, aby uzyskać więcej
            informacji lub odwiedź naszą stronę rekrutacyjną.
          </p>
          <Link href="/rekrutacja">
            <p
              className={`mt-4 inline-block px-6 py-3 rounded-md ${linkContrastStyles}`}
            >
              Przejdź do rekrutacji
            </p>
          </Link>
        </div>
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
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
