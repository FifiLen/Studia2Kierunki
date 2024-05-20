'use client'
import Faq from "@/components/Faq";
import FormaStudiow from "@/components/FormaStudiowSeksuologia";
import Kompetencje from "@/components/KompetencjeSeksuologia";
import ProgramStudiow from "@/components/ProgramSeksuologia";
import AboutSpecialty from "@/components/SeksuologiaAbout";
import SectionNavigation from "@/components/SeksuologiaNav";
import { useUserPreferences } from "@/components/UserPreferencesContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


export default function Seksuologia() {
    const { fontSize, highContrast } = useUserPreferences();

    const fontSizeStyles = {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    };
  
    const contrastStyles = highContrast
      ? "bg-black text-white border-white"
      : "bg-gray-50 text-gray-900";
  
    const linkContrastStyles = highContrast
      ? "bg-white hover:bg-gray-300 text-black"
      : "bg-blue-600 hover:bg-blue-500 text-white";
  
    const sections = [
      { id: "o-specjalnosci", title: "O specjalności" },
      { id: "program-studiow", title: "Program studiów" },
      { id: "kompetencje", title: "Kompetencje" },
      { id: "forma-studiow", title: "Forma studiów" },
      { id: "faq", title: "Pytania i odpowiedzi" },
    ];
  
    return (
      <>
        {/* Hero Section */}
        <div
          className={`relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 ${contrastStyles}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
              <div
                className={`w-full lg:w-1/2 text-center lg:text-left ${fontSizeStyles[fontSize]}`}
              >
                <div className="mb-4 flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                    Studia podyplomowe
                  </span>
                  <span className="bg-[#9E5AE2] text-white px-3 py-1 rounded-full">
                    100% online
                  </span>
                </div>
                <h1
                  className={`text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl ${
                    highContrast
                      ? "text-white"
                      : "bg-clip-text bg-gradient-to-br from-black to-blue-500 text-transparent"
                  }`}
                >
                  Seksuologia praktyczna
                </h1>
                <p className={`mt-6 leading-6 ${highContrast ? "text-white" : "text-gray-600"}`}>
                  Rozwiń swoje umiejętności w zakresie seksuologii praktycznej. Zdobądź wiedzę i doświadczenie potrzebne do pracy w tej fascynującej dziedzinie.
                </p>
                <p className={`mt-4 leading-6 ${highContrast ? "text-white" : "text-gray-500"}`}>
                  Nasz program oferuje kompleksowe podejście do nauczania seksuologii, łącząc teorię z praktyką. Przygotuj się do pracy w różnorodnych środowiskach, pomagając innym lepiej zrozumieć i zarządzać swoją seksualnością. Zdobądź kwalifikacje, które otworzą przed Tobą nowe możliwości kariery zawodowej.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start gap-2">
                  <Link
                    href="#rekrutacja"
                    className={`flex items-center gap-2 rounded-md px-5 py-3 font-semibold ${linkContrastStyles}`}
                  >
                    Zapisz się na studia <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/assets/studentka.png"
                  alt="Seksuologia praktyczna"
                  width={500}
                  height={500}
                  priority
                  className={`mx-auto w-full rounded-lg shadow-lg ${
                    highContrast ? "border-white" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Navigation */}
        <SectionNavigation sections={sections} />

        {/* About */}
        <AboutSpecialty />

        {/*Program */}
        <ProgramStudiow />

        {/* Kompetencje */}
        <Kompetencje />

        {/* Forma Studiów */}
        <FormaStudiow />

        {/* Faq */}
        <Faq />
  
       
        
      </>
    );
  };