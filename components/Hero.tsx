"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useUserPreferences } from "./UserPreferencesContext";

const slides = [
  {
    title: "Seksuologia praktyczna",
    description:
      "Rozwiń swoje umiejętności w zakresie seksuologii praktycznej. Zdobądź wiedzę i doświadczenie potrzebne do pracy w tej fascynującej dziedzinie.",
    image: "/assets/studentka.png",
    loading: "priority",
    badges: [
      { text: "Studia podyplomowe", color: "bg-[#1660C7]" },
      { text: "100% online", color: "bg-[#9E5AE2]" },
    ],
    detail:
      "Nasz program oferuje kompleksowe podejście do nauczania seksuologii, łącząc teorię z praktyką. Przygotuj się do pracy w różnorodnych środowiskach, pomagając innym lepiej zrozumieć i zarządzać swoją seksualnością. Zdobądź kwalifikacje, które otworzą przed Tobą nowe możliwości kariery zawodowej.",
  },
  {
    title: "Psychologia uzależnień z terapią uzależnień",
    description:
      "Poznaj najnowsze metody terapii uzależnień. Nasz program oferuje zaawansowaną wiedzę teoretyczną i praktyczne umiejętności.",
    image: "/assets/studentka2.png",
    loading: "lazy",
    badges: [
      { text: "Studia podyplomowe", color: "bg-[#1660C7]" },
      { text: "100% online", color: "bg-[#9E5AE2]" },
    ],
    detail:
      "Zdobądź specjalistyczną wiedzę i umiejętności w zakresie psychologii uzależnień. Nasze studia przygotują Cię do pracy z osobami borykającymi się z różnymi rodzajami uzależnień. Dowiedz się, jak skutecznie prowadzić terapię i wsparcie, aby pomagać pacjentom w ich drodze do zdrowia i stabilności.",
  },
  {
    title: "Diagnoza i strategie terapeutyczne w leczeniu hiperseksualności",
    description:
      "Poznaj najnowsze metody terapii uzależnień. Nasz program oferuje zaawansowaną wiedzę teoretyczną i praktyczne umiejętności.",
    image: "/assets/studentka2.png",
    loading: "lazy",
    badges: [
      { text: "Studia podyplomowe", color: "bg-[#1660C7]" },
      { text: "100% online", color: "bg-[#9E5AE2]" },
    ],
    detail:
      "Zdobądź specjalistyczną wiedzę i umiejętności w zakresie psychologii uzależnień. Nasze studia przygotują Cię do pracy z osobami borykającymi się z różnymi rodzajami uzależnień. Dowiedz się, jak skutecznie prowadzić terapię i wsparcie, aby pomagać pacjentom w ich drodze do zdrowia i stabilności.",
  },
  {
    title: "Cyberpsychologia",
    description:
      "Poznaj najnowsze metody terapii uzależnień. Nasz program oferuje zaawansowaną wiedzę teoretyczną i praktyczne umiejętności.",
    image: "/assets/studentka2.png",
    loading: "lazy",
    badges: [
      { text: "Studia podyplomowe", color: "bg-[#1660C7]" },
      { text: "100% online", color: "bg-[#9E5AE2]" },
    ],
    detail:
      "Zdobądź specjalistyczną wiedzę i umiejętności w zakresie psychologii uzależnień. Nasze studia przygotują Cię do pracy z osobami borykającymi się z różnymi rodzajami uzależnień. Dowiedz się, jak skutecznie prowadzić terapię i wsparcie, aby pomagać pacjentom w ich drodze do zdrowia i stabilności.",
  },
  {
    title: "Trening umiejętności społecznych",
    description:
      "Poznaj najnowsze metody terapii uzależnień. Nasz program oferuje zaawansowaną wiedzę teoretyczną i praktyczne umiejętności.",
    image: "/assets/studentka2.png",
    loading: "lazy",
    badges: [
      { text: "Studia podyplomowe", color: "bg-[#1660C7]" },
      { text: "100% online", color: "bg-[#9E5AE2]" },
    ],
    detail:
      "Zdobądź specjalistyczną wiedzę i umiejętności w zakresie psychologii uzależnień. Nasze studia przygotują Cię do pracy z osobami borykającymi się z różnymi rodzajami uzależnień. Dowiedz się, jak skutecznie prowadzić terapię i wsparcie, aby pomagać pacjentom w ich drodze do zdrowia i stabilności.",
  },
  {
    title: "Psychologia uzależnień - uzależnienia behawioralne",
    description:
      "Poznaj najnowsze metody terapii uzależnień. Nasz program oferuje zaawansowaną wiedzę teoretyczną i praktyczne umiejętności.",
    image: "/assets/studentka2.png",
    loading: "lazy",
    badges: [
      { text: "Studia podyplomowe", color: "bg-[#1660C7]" },
      { text: "100% online", color: "bg-[#9E5AE2]" },
    ],
    detail:
      "Zdobądź specjalistyczną wiedzę i umiejętności w zakresie psychologii uzależnień. Nasze studia przygotują Cię do pracy z osobami borykającymi się z różnymi rodzajami uzależnień. Dowiedz się, jak skutecznie prowadzić terapię i wsparcie, aby pomagać pacjentom w ich drodze do zdrowia i stabilności.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const contrastStyles = highContrast
    ? "bg-[#FFFF00] text-black border-black"
    : "bg-gray-50 text-gray-900";

  const linkContrastStyles = highContrast
    ? "bg-black hover:bg-gray-800 text-white"
    : "bg-blue-600 hover:bg-blue-500 text-white";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Zmiana co 10 sekund

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentIndex);
    }
  }, [currentIndex, carouselApi]);

  return (
    <div
      className={`relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 ${contrastStyles}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Carousel setApi={setCarouselApi}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col-reverse lg:flex-row items-center gap-8"
              >
                <div
                  className={`w-full lg:w-1/2 text-center lg:text-left ${fontSizeStyles[fontSize]}`}
                >
                  <div className="mb-4 flex flex-wrap justify-center lg:justify-start gap-2">
                    {slide.badges.map((badge, i) => (
                      <Badge
                        key={i}
                        className={`text-white ${
                          highContrast ? "bg-black text-[#FFFF00]" : badge.color
                        }`}
                      >
                        {badge.text}
                      </Badge>
                    ))}
                  </div>
                  <h1
                    className={`text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-black to-blue-500 tracking-tighter text-transparent sm:text-5xl lg:text-6xl ${
                      highContrast ? "text-black" : ""
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`mt-6 leading-6 ${
                      highContrast ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {slide.description}
                  </p>
                  <p
                    className={`mt-4 leading-6 ${
                      highContrast ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {slide.detail}
                  </p>
                  <div className="mt-8 flex justify-center lg:justify-start gap-2">
                    <Link
                      href="#rekrutacja"
                      className={`flex items-center gap-2 rounded-md px-5 py-3 font-semibold ${linkContrastStyles}`}
                    >
                      Zapisz się na studia <FaArrowRight />
                    </Link>
                    <Link
                      href="/oferta"
                      className={`flex items-center gap-2 rounded-md px-5 py-3 font-semibold ${
                        highContrast
                          ? "bg-black hover:bg-gray-800 text-white"
                          : "bg-gray-900 hover:bg-gray-700 text-white"
                      }`}
                    >
                      Zapoznaj się z ofertą{" "}
                      <FaArrowRight className="rotate-[-45deg]" />
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                    priority={slide.loading === "priority"}
                    loading={slide.loading === "lazy" ? "lazy" : undefined}
                    className={`mx-auto w-full rounded-lg shadow-lg ${
                      highContrast ? "border-black" : ""
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + slides.length) % slides.length
              )
            }
          />
          <CarouselNext
            onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
          />
        </Carousel>
      </div>
    </div>
  );
}
