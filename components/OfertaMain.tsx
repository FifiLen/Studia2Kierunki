"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import {
  FaArrowRight,
  FaChalkboardTeacher,
  FaUserTie,
  FaGraduationCap,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaLaptop,
} from "react-icons/fa";
import Link from "next/link";
import { useUserPreferences } from "./UserPreferencesContext";

const courses = [
  {
    title: "Seksuologia Praktyczna",
    description:
      "Program obejmuje trzy semestry intensywnych zajęć, które łączą teorię z praktyką. Zajęcia prowadzone są przez doświadczonych wykładowców.",
    imgSrc: "/assets/studentka.png",
    icon: <FaChalkboardTeacher size={38} className="text-blue-500 mb-4" />,
    details: [
      "Wprowadzenie do seksuologii",
      "Zaawansowane techniki terapeutyczne",
      "Praktyki i projekty końcowe",
    ],
    semesters: 3,
    cost: "6,000 PLN",
    online: true,
    perspectives:
      "Terapeuci specjalizujący się w leczeniu zaburzeń seksualnych, konsultanci w poradniach zdrowia psychicznego i seksualnego.",
  },
  {
    title: "Psychologia Uzależnień",
    description:
      "Program obejmuje trzy semestry intensywnych zajęć, które łączą teorię z praktyką. Zajęcia prowadzone są przez doświadczonych wykładowców.",
    imgSrc: "/assets/studentka2.png",
    icon: <FaUserTie size={38} className="text-[#9E5AE2] mb-4" />,
    details: [
      "Wprowadzenie do psychologii uzależnień",
      "Zaawansowane techniki terapeutyczne",
      "Praktyki i projekty końcowe",
    ],
    semesters: 3,
    cost: "8,000 PLN",
    online: true,
    perspectives:
      "Specjaliści w ośrodkach terapeutycznych i rehabilitacyjnych, naukowcy i badacze w dziedzinie seksuologii i psychoterapii.",
  },
  {
    title: "Cyberpsychologia",
    description:
      "Program obejmuje trzy semestry zajęć, które łączą teorię z praktyką. Zajęcia prowadzone są przez specjalistów z zakresu zarządzania.",
    imgSrc: "/assets/studentka2.png",
    icon: <FaUserTie size={38} className="text-[#9E5AE2] mb-4" />,
    details: [
      "Wprowadzenie do psychologii i technologii cyfrowych",
      "Psychologia społeczna",
      "Psychologia mediów cyfrowych",
    ],
    semesters: 3,
    cost: "8,000 PLN",
    online: true,
    perspectives:
      "Specjaliści ds. UX, analitycy danych, terapeuci online, badacze psychologii mediów.",
  },
  {
    title: "Trener Umiejętności Społecznych",
    description:
      "Program obejmuje dwa semestry intensywnych zajęć teoretycznych i praktycznych z zakresu marketingu.",
    imgSrc: "/assets/studentka.png",
    icon: <FaUserTie size={38} className="text-[#9E5AE2] mb-4" />,
    details: [
      "Psychologia społeczna",
      "Komunikacja interpersonalna",
      "Techniki treningu umiejętności społecznych",
    ],
    semesters: 2,
    cost: "2,400 PLN",
    online: true,
    perspectives:
      "Trenerzy umiejętności społecznych, konsultanci w firmach szkoleniowych, specjaliści ds. rozwoju osobistego i zawodowego.",
  },
  {
    title: "Uzależnienia Behawioralne",
    description:
      "Program obejmuje trzy semestry intensywnych zajęć teoretycznych i praktycznych z zakresu prawa biznesowego.",
    imgSrc: "/assets/studentka2.png",
    icon: <FaUserTie size={38} className="text-[#9E5AE2] mb-4" />,
    details: [
      "Psychopatologia uzależnień behawioralnych",
      "Diagnoza i ocena uzależnień behawioralnych",
      "Terapie poznawczo-behawioralne",
    ],
    semesters: 3,
    cost: "4,200 PLN",
    online: true,
    perspectives:
      "Specjaliści w ośrodkach terapeutycznych i rehabilitacyjnych, naukowcy i badacze w dziedzinie uzależnień.",
  },
  {
    title: "Diagnoza i Strategie Terapeutyczne w Leczeniu Hiperseksualności",
    description:
      "Program obejmuje dwa semestry zajęć teoretycznych i praktycznych z zakresu informatyki biznesowej.",
    imgSrc: "/assets/studentka.png",
    icon: <FaUserTie size={38} className="text-[#9E5AE2] mb-4" />,
    details: [
      "Psychologia kliniczna",
      "Diagnoza hiperseksualności",
      "Strategie terapeutyczne",
    ],
    semesters: 2,
    cost: "6,000 PLN",
    online: true,
    perspectives:
      "Terapeuci specjalizujący się w leczeniu zaburzeń seksualnych, konsultanci w poradniach zdrowia psychicznego i seksualnego.",
  },
];

const Offer = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const linkContrastStyles = highContrast
    ? "bg-[#FFFF00] text-black hover:bg-yellow-600"
    : "bg-[#1660C7] text-white hover:bg-blue-600";

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
          Nasza Oferta
        </h2>
        <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
          Zapraszamy do zapoznania się z naszą ofertą studiów podyplomowych.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`${bgContrastStyles} shadow-lg rounded-lg overflow-hidden`}
            >
              <CardHeader className="flex flex-col items-start p-0">
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  {course.icon}
                  <h3 className={`text-xl font-semibold ${textContrastStyles}`}>
                    {course.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent className={`px-6 pb-6 ${textContrastStyles}`}>
                <p className="mb-4">{course.description}</p>
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <Card className={`p-4 ${bgContrastStyles}`}>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-blue-500 mr-4" size={24} />
                      <div>
                        <h4
                          className={`text-lg font-semibold ${textContrastStyles}`}
                        >
                          Liczba semestrów
                        </h4>
                        <p className={textContrastStyles}>{course.semesters}</p>
                      </div>
                    </div>
                  </Card>
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
                        <p className={textContrastStyles}>{course.cost}</p>
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
                          {course.online ? "Tak" : "Nie"}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
              <CardFooter className="flex justify-start px-6 pb-6">
                <Link href="#rekrutacja">
                  <p
                    className={`flex items-center gap-2 rounded-md px-4 py-2 font-semibold ${linkContrastStyles}`}
                  >
                    Dowiedz się więcej{" "}
                    <FaArrowRight className="rotate-[-45deg]" />
                  </p>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
