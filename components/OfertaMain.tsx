"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { FaArrowRight, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import Link from "next/link";
import { useUserPreferences } from "./UserPreferencesContext";

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
          <Card
            className={`${bgContrastStyles} shadow-lg rounded-lg overflow-hidden`}
          >
            <CardHeader className="flex flex-col items-start p-0">
              <img
                src="/assets/studentka.png"
                alt="Seksuologia praktyczna"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <FaChalkboardTeacher size={38} className="text-blue-500 mb-4" />
                <h3 className={`text-xl font-semibold ${textContrastStyles}`}>
                  Seksuologia praktyczna
                </h3>
              </div>
            </CardHeader>
            <CardContent className={`px-6 pb-6 ${textContrastStyles}`}>
              <p className="mb-4">
                Program obejmuje trzy semestry intensywnych zajęć, które łączą
                teorię z praktyką. Zajęcia prowadzone są przez doświadczonych
                wykładowców.
              </p>
              <ul className="list-none list-inside space-y-2">
                <li>Wprowadzenie do seksuologii</li>
                <li>Zaawansowane techniki terapeutyczne</li>
                <li>Praktyki i projekty końcowe</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-start px-6 pb-6">
              <Link href="#rekrutacja">
                <p
                  className={`flex items-center gap-2 rounded-md px-4 py-2 font-semibold ${linkContrastStyles}`}
                >
                  Dowiedz się więcej{" "}
                  <FaArrowRight className=" rotate-[-45deg]" />
                </p>
              </Link>
            </CardFooter>
          </Card>
          <Card
            className={`${bgContrastStyles} shadow-lg rounded-lg overflow-hidden`}
          >
            <CardHeader className="flex flex-col items-start p-0">
              <img
                src="/assets/studentka2.png"
                alt="Psychologia uzależnień"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <FaUserTie size={38} className="text-[#9E5AE2] mb-4" />
                <h3 className={`text-xl font-semibold ${textContrastStyles}`}>
                  Psychologia uzależnień
                </h3>
              </div>
            </CardHeader>
            <CardContent className={`px-6 pb-6 ${textContrastStyles}`}>
              <p className="mb-4">
                Program obejmuje trzy semestry intensywnych zajęć, które łączą
                teorię z praktyką. Zajęcia prowadzone są przez doświadczonych
                wykładowców.
              </p>
              <ul className="list-none list-inside space-y-2">
                <li>Wprowadzenie do psychologii uzależnień</li>
                <li>Zaawansowane techniki terapeutyczne</li>
                <li>Praktyki i projekty końcowe</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-start px-6 pb-6">
              <Link href="#rekrutacja">
                <p
                  className={`flex items-center gap-2 rounded-md px-4 py-2 font-semibold ${linkContrastStyles}`}
                >
                  Dowiedz się więcej{" "}
                  <FaArrowRight className=" rotate-[-45deg]" />
                </p>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Offer;
