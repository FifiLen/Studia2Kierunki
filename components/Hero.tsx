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
import {
  CgArrowRightO,
  CgArrowTopRight,
  CgArrowTopRightO,
} from "react-icons/cg";

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
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0} // Prioritize the first image
                  className="absolute inset-0 w-full h-full z-0"
                />
                <div className="relative z-10 w-full h-full flex items-center">
                  <div
                    className={`w-full lg:w-1/2 mx-14 md:mx-0 p-6 space-y-6 rounded-xl ${
                      fontSizeStyles[fontSize]
                    } lg:ml-16 bg-opacity-85 ${
                      highContrast ? "bg-gray-900" : "bg-blue-600"
                    }`}
                  >
                    <div className="mb-4 flex flex-wrap justify-start lg:justify-start gap-2">
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
                        100% online
                      </Badge>
                    </div>
                    <h1
                      className={`text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-5xl ${
                        highContrast ? "text-white" : "text-white"
                      }`}
                    >
                      {course.title}
                    </h1>
                    <p
                      className={`mt-6 leading-7 text-lg tracking-tight font-medium ${
                        highContrast ? "text-white" : "text-gray-200"
                      }`}
                    >
                      <Markdown>
                        {course.description.substring(0, 250) + "[...]"}
                      </Markdown>
                    </p>
                    <div className="mt-8 flex md:flex-row flex-col justify-center lg:justify-start gap-2">
                      <Link
                        href="#rekrutacja"
                        className={`flex items-center gap-2 w-fit rounded-xl px-5 py-3 font-semibold ${linkContrastStyles}`}
                      >
                        Zapisz się na studia{" "}
                        <CgArrowTopRightO className=" text-2xl" />
                      </Link>
                      <Link
                        href={`/oferta/${course.id}`}
                        className={`flex items-center gap-2 w-fit rounded-xl px-5 py-3 font-semibold ${
                          highContrast
                            ? "bg-black hover:bg-gray-800 text-white"
                            : "bg-gray-900 hover:bg-gray-700 text-white"
                        }`}
                      >
                        Dowiedz się więcej o kierunku{" "}
                        <CgArrowRightO className=" text-2xl" />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-10 right-4 flex items-center space-x-4 p-2 rounded-full bg-zinc-800/40">
          <button
            onClick={handlePrevious}
            className={`p-2 rounded-full bg-[#9E5AE2] text-white hover:bg-blue-500 focus:outline-none`}
          >
            <FaArrowRight className="rotate-180" />
          </button>

          <div className="flex space-x-2">
            {courses.map((_, index) => (
              <FaCircle
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer ${
                  index === currentIndex ? "text-[#9E5AE2]" : "text-gray-100"
                }`}
                size={12}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className={`p-2 rounded-full bg-[#9E5AE2] text-white hover:bg-blue-500 focus:outline-none`}
          >
            <FaArrowRight />
          </button>
          <button
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
