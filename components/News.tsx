"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { useUserPreferences } from "./UserPreferencesContext";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const News = () => {
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

  const newsArticles = [
    {
      title: "Nowy Program Studiów Podyplomowych",
      date: "20 maja 2024",
      excerpt:
        "Zapraszamy do zapisów na nowy program studiów podyplomowych z zakresu zaawansowanych technologii informacyjnych.",
      link: "#",
      image: "/assets/studentka.png",
    },
    {
      title: "Konferencja Naukowa",
      date: "15 czerwca 2024",
      excerpt:
        "W czerwcu odbędzie się konferencja naukowa na temat najnowszych badań w dziedzinie psychologii.",
      link: "#",
      image: "/assets/studentka.png",
    },
    {
      title: "Dzień Otwarty Uczelni",
      date: "1 lipca 2024",
      excerpt:
        "Zapraszamy na dzień otwarty naszej uczelni, gdzie będzie można spotkać się z wykładowcami i poznać ofertę studiów.",
      link: "#",
      image: "/assets/studentka.png",
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
          Aktualności
        </h2>
        <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
          Bądź na bieżąco z najnowszymi wydarzeniami i informacjami z naszej
          uczelni.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card
              key={index}
              className={`${
                cardBgColors[index % cardBgColors.length]
              } shadow-lg rounded-lg overflow-hidden flex flex-col`}
            >
              <CardHeader className="p-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className={`p-6 flex-1 ${bgContrastStyles}`}>
                <h3
                  className={`text-2xl font-semibold mb-2 ${textContrastStyles}`}
                >
                  {article.title}
                </h3>
                <p className={`text-sm mb-4 ${textContrastStyles}`}>
                  {article.date}
                </p>
                <p className={`text-base mb-4 ${textContrastStyles}`}>
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className={`p-6 ${bgContrastStyles}`}>
                <Link href={article.link}>
                  <p
                    className={`font-semibold flex items-center gap-2 ${linkContrastStyles}`}
                  >
                    Czytaj więcej{" "}
                    <FaArrowRight className=" font-thin text-xs rotate-[-45deg]" />
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

export default News;
