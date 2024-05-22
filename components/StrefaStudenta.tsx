"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { useUserPreferences } from "./UserPreferencesContext";
import Link from "next/link";
import { FaBook, FaLaptop, FaMoneyCheckAlt } from "react-icons/fa";

const StudentResources = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-black";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";
  const linkContrastStyles = highContrast
    ? "text-[#FFFF00] hover:text-yellow-500"
    : "text-blue-500 hover:text-blue-700";

  const cardBgColors = [
    highContrast ? "bg-[#001d75]" : "bg-white",
    highContrast ? "bg-[#1660C7]" : "bg-white",
    highContrast ? "bg-[#87b4e8]" : "bg-white",
    highContrast ? "bg-[#9e5ae2]" : "bg-white",
  ];

  const resources = [
    {
      title: "Biblioteka",
      description:
        "Dostęp do szerokiej gamy książek, czasopism i materiałów naukowych.",
      link: "#",
      icon: <FaBook size={48} className="text-blue-500 mb-4" />,
    },
    {
      title: "Systemy e-learningowe",
      description:
        "Platformy e-learningowe umożliwiające dostęp do materiałów dydaktycznych online.",
      link: "#",
      icon: <FaLaptop size={48} className="text-green-500 mb-4" />,
    },
    {
      title: "Wsparcie finansowe",
      description:
        "Informacje o dostępnych stypendiach i innych formach wsparcia finansowego.",
      link: "#",
      icon: <FaMoneyCheckAlt size={48} className="text-red-500 mb-4" />,
    },
  ];

  return (
    <div
      className={`${bgContrastStyles} py-16 sm:py-24 lg:py-32 ${fontSizeClasses[fontSize]}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold ${textContrastStyles} sm:text-5xl lg:text-6xl tracking-tighter`}
        >
          Zasoby Dla Studentów
        </h2>
        <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
          Skorzystaj z dostępnych zasobów, które pomogą Ci w nauce i rozwoju.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className={`${
                cardBgColors[index % cardBgColors.length]
              } shadow-lg rounded-lg overflow-hidden flex flex-col`}
            >
              <CardHeader className="p-6 flex items-start justify-start flex-col">
                {resource.icon}
                <h3
                  className={`text-2xl font-semibold mb-2 ${textContrastStyles}`}
                >
                  {resource.title}
                </h3>
              </CardHeader>
              <CardContent className={`p-6 flex-1 ${bgContrastStyles}`}>
                <p className={`text-base mb-4 ${textContrastStyles}`}>
                  {resource.description}
                </p>
              </CardContent>
              <CardFooter className={`p-6 ${bgContrastStyles}`}>
                <Link href={resource.link}>
                  <p
                    className={`font-semibold flex items-center gap-2 ${linkContrastStyles}`}
                  >
                    Dowiedz się więcej
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

export default StudentResources;
