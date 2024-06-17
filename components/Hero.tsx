"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "./ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import {
  FaArrowRight,
  FaCircle,
  FaPlay,
  FaPause,
  FaGraduationCap,
  FaLaptopHouse,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useUserPreferences } from "./UserPreferencesContext";
import { courses } from "@/utils/Kierunki";
import Markdown from "markdown-to-jsx";
import { CgArrowRightO, CgArrowTopRightO } from "react-icons/cg";
import ComingSoonOverlay from "./Overlay";

const availableCourseId = [
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { fontSize, highContrast } = useUserPreferences();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    : "bg-blue-800 hover:bg-blue-500 text-white";

  const badgeContrastStyles = highContrast
    ? "bg-black text-[#FFFF00]"
    : "bg-purple-500 text-white";

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentIndex);
    }
  }, [currentIndex, carouselApi]);

  const startAutoSlide = () => {
    stopAutoSlide();
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
      }, 10000); // Change every 10 seconds
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((currentIndex + 1) % courses.length);
    startAutoSlide();
  };

  const handlePrevious = () => {
    stopAutoSlide();
    setCurrentIndex((currentIndex - 1 + courses.length) % courses.length);
    startAutoSlide();
  };

  const handleDotClick = (index: number) => {
    stopAutoSlide();
    setCurrentIndex(index);
    startAutoSlide();
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  };

  return (
    <div
      className={`relative isolate overflow-hidden h-[85vh] w-full ${contrastStyles}`}
    >
      <div className="max-w-full h-full mx-auto">
        <Carousel setApi={setCarouselApi}>
          <CarouselContent className="h-[85vh]">
            {courses.map((course, index) => (
              <CarouselItem
                key={index}
                className="relative flex items-center justify-center h-full w-full"
              >
                <Image
                  src={`/assets/${course.id}.jpg`}
                  alt={course.title}
                  fill
                  priority={index === 0} // Prioritize the first image
                  className="absolute object-cover inset-0 w-full h-full z-0"
                />
                {!availableCourseId.includes(course.id) && (
                  <ComingSoonOverlay />
                )}{" "}
                {/* Overlay for coming soon courses */}
                <div className="relative z-10 w-full h-full flex items-center">
                  <div
                    className={`w-full lg:w-1/2 mx-4 md:mx-8 p-4 md:p-6 space-y-4 md:space-y-6 rounded-xl ${
                      fontSizeStyles[fontSize]
                    } lg:ml-16 bg-opacity-85 ${
                      highContrast ? "bg-gray-900" : "bg-blue-600"
                    }`}
                  >
                    <div className="mb-4 flex flex-wrap justify-start gap-2">
                      <Badge
                        className={`text-white ${badgeContrastStyles} flex items-center gap-2`}
                      >
                        <FaGraduationCap />
                        Studia podyplomowe
                      </Badge>
                      <Badge
                        className={`text-white ${
                          highContrast
                            ? "bg-black text-[#FFFF00]"
                            : "bg-purple-600"
                        } flex items-center gap-2`}
                      >
                        <FaLaptopHouse />
                        100% online w czasie rzeczywistym
                      </Badge>
                    </div>
                    <h1
                      className={`text-2xl md:text-4xl font-extrabold tracking-tighter ${
                        highContrast ? "text-white" : "text-white"
                      }`}
                    >
                      {course.title}
                    </h1>
                    <p
                      className={`leading-6 md:leading-7 text-sm md:text-lg tracking-tight font-medium ${
                        highContrast ? "text-white" : "text-gray-200"
                      }`}
                    >
                      <Markdown>{course.banerDescription}</Markdown>
                    </p>
                    <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-2">
                      {availableCourseId.includes(course.id) ? (
                        <Link
                          aria-label="Zapisz się na studia"
                          href="/rekrutacja"
                          className={`flex items-center gap-2 w-fit rounded-xl px-4 py-2 md:px-5 md:py-3 font-semibold ${linkContrastStyles}`}
                        >
                          Zapisz się na studia{" "}
                          <CgArrowTopRightO className=" text-xl md:text-2xl" />
                        </Link>
                      ) : (
                        <div
                          className={`flex items-center gap-2 w-fit rounded-xl px-4 py-2 md:px-5 md:py-3 font-semibold ${linkContrastStyles} cursor-not-allowed opacity-50`}
                        >
                          Zapisz się na studia{" "}
                          <CgArrowTopRightO className=" text-xl md:text-2xl" />
                        </div>
                      )}
                      {availableCourseId.includes(course.id) ? (
                        <Link
                          aria-label={`Dowiedz się więcej o kierunku ${course.title}`}
                          href={`/oferta/${course.id}`}
                          className={`flex items-center gap-2 w-fit rounded-xl px-4 py-2 md:px-5 md:py-3 font-semibold ${
                            highContrast
                              ? "bg-black hover:bg-gray-800 text-white"
                              : "bg-gray-900 hover:bg-gray-700 text-white"
                          }`}
                        >
                          Dowiedz się więcej o kierunku{" "}
                          <CgArrowRightO className=" text-xl md:text-2xl" />
                        </Link>
                      ) : (
                        <div
                          className={`flex items-center gap-2 w-fit rounded-xl px-4 py-2 md:px-5 md:py-3 font-semibold ${
                            highContrast
                              ? "bg-black hover:bg-gray-800 text-white"
                              : "bg-gray-900 hover:bg-gray-700 text-white"
                          } cursor-not-allowed opacity-50`}
                        >
                          Dowiedz się więcej o kierunku{" "}
                          <CgArrowRightO className=" text-xl md:text-2xl" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-1 md:bottom-20 right-4 flex items-center space-x-2 p-2 rounded-full bg-zinc-800/40">
          <button
            aria-label="Poprzedni slajd"
            onClick={handlePrevious}
            className={`p-2 rounded-full bg-[#9E5AE2] text-white hover:bg-blue-500 focus:outline-none`}
          >
            <FaArrowRight className="rotate-180" />
          </button>

          <div className="flex space-x-1">
            {courses.map((_, index) => (
              <FaCircle
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer ${
                  index === currentIndex ? "text-[#9E5AE2]" : "text-gray-100"
                }`}
                size={10}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
          <button
            aria-label="Następny slajd"
            onClick={handleNext}
            className={`p-2 rounded-full bg-[#9E5AE2] text-white hover:bg-blue-500 focus:outline-none`}
          >
            <FaArrowRight />
          </button>
          <button
            aria-label={isPaused ? "Wznów slajd" : "Zatrzymaj slajd"}
            onClick={togglePause}
            className={`p-2 rounded-full bg-zinc-700 text-white hover:bg-blue-500 focus:outline-none`}
          >
            {isPaused ? <FaPlay /> : <FaPause />}
          </button>
        </div>
      </div>
    </div>
  );
}
