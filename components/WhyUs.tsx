"use client";
import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { useUserPreferences } from "./UserPreferencesContext";
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaLaptop,
  FaUniversity,
} from "react-icons/fa";

const WhyUs = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-black";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";
  const cardBgStyles = highContrast ? "bg-gray-800" : "bg-white";
  const iconBgColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
  ];

  const items = [
    {
      icon: <FaChalkboardTeacher size={32} className="text-white" />,
      title: "Doświadczeni Wykładowcy",
      description: "Nasi wykładowcy to eksperci w swoich dziedzinach.",
      bgColor: iconBgColors[0],
    },
    {
      icon: <FaLaptop size={32} className="text-white" />,
      title: "Nowoczesne Technologie",
      description: "Korzystamy z najnowszych technologii edukacyjnych.",
      bgColor: iconBgColors[1],
    },
    {
      icon: <FaUniversity size={32} className="text-white" />,
      title: "Bogata Oferta Kursów",
      description: "Oferujemy szeroki zakres programów studiów.",
      bgColor: iconBgColors[2],
    },
    {
      icon: <FaHandshake size={32} className="text-white" />,
      title: "Wsparcie Kariery",
      description: "Pomagamy naszym absolwentom w rozwoju kariery zawodowej.",
      bgColor: iconBgColors[3],
    },
  ];

  return (
    <div
      className={`bg-gray-50 py-16 sm:py-24 lg:py-32 ${fontSizeClasses[fontSize]}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold ${textContrastStyles} sm:text-4xl lg:text-5xl tracking-tighter`}
        >
          Dlaczego Warto Nas Wybrać?
        </h2>
        <p className={`mt-4 text-lg leading-6 ${textContrastStyles}`}>
          Nasza instytucja oferuje wyjątkowe programy studiów podyplomowych,
          które przygotowują do sukcesu w różnych dziedzinach zawodowych.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className={`shadow-lg rounded-lg overflow-hidden flex flex-col items-start ${cardBgStyles}`}
            >
              <CardHeader className="p-6 flex items-start justify-start flex-col w-full">
                <div
                  className={`${item.bgColor} text-white rounded-full p-4 inline-block`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`mt-4 text-xl font-semibold ${textContrastStyles}`}
                >
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="p-6 w-full">
                <p className={`text-base ${textContrastStyles}`}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
