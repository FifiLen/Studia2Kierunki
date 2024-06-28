"use client";
import { FaUserGraduate } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Course } from "@/utils/Kierunki";
import { Poppins } from "next/font/google";
import Markdown from "markdown-to-jsx";
import { TbArrowBigDownFilled, TbTargetArrow } from "react-icons/tb";
import { BiAward } from "react-icons/bi";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

interface AboutSpecialtyProps {
  course: Course;
}

const AboutSpecialty = ({ course }: AboutSpecialtyProps) => {
  return (
    <section id="opis" className="w-full h-fit bg-gray-200 about">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Kolumna z tekstem */}
        <div className="px-4 md:px-10 py-16 md:py-28 relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-semibold text-zinc-700 tracking-tighter">
            {course.title}
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-2">
            Opis Kierunku
          </h2>
          <div className="text-zinc-800 mt-8 p-6 md:p-10 rounded-xl bg-gray-50 border-gray-300 border">
            <h4 className="pb-3 text-xl md:text-2xl font-semibold tracking-tighter flex items-center gap-2">
              <FaUserGraduate />
              Grupa docelowa
            </h4>
            <div className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.description}</Markdown>
            </div>
          </div>
          <div className="text-zinc-800 mt-8 p-6 md:p-10 rounded-xl bg-gray-100 border-gray-300 border">
            <h4 className="pb-3 text-xl md:text-2xl font-semibold tracking-tighter flex items-center gap-2">
              <TbTargetArrow />
              Cel studiów
            </h4>
            <div className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.description2}</Markdown>
            </div>
          </div>
        </div>

        {/* Kolumna z obrazkiem */}
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="/assets/about1.jpg"
            fill
            alt="kontakt"
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full pb-20">
        {/* Kolumna z obrazkiem */}
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="/assets/about2.jpg"
            fill
            alt="kontakt"
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Kolumna z tekstem */}
        <div className="px-4 md:px-10 relative overflow-hidden py-20">
          {/* <div className="text-zinc-800 mt-8 p-6 md:p-10 rounded-xl bg-gray-50 border-gray-300 border">
            <h4 className="pb-3 text-xl md:text-2xl font-semibold tracking-tighter flex items-center gap-2">
              <BiAward />
              Przygotowanie absolwentów do pracy
            </h4>
            <div className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.description3}</Markdown>
            </div>
          </div> */}

          {course.descriptionP1 && (
            <div className="text-zinc-800 mt-8 p-6 md:p-10 rounded-xl bg-gray-50 border-gray-300 border">
              <p className={`tracking-tight leading-7 ${poppins.className}`}>
                <Markdown>{course.descriptionP1}</Markdown>
              </p>
            </div>
          )}

          <div className="text-zinc-800 mt-8 p-6 md:p-10 rounded-xl bg-gray-50 border-gray-300 border">
            <p className={`tracking-tight leading-7 ${poppins.className}`}>
              Zajęcia realizowane z wykorzystaniem metod i technik kształcenia
              na&nbsp;odległość. (Rozporządzenie Ministra Nauki i Szkolnictwa
              Wyższego z dnia 27 września 2018r. w sprawie studiów Dz.U.z 203.
              poz. 2787 ze zmianami)
            </p>
          </div>

          <Link href={"#program-studiow"}>
            <button className="bg-blue-900 text-white font-semibold md:w-fit w-full rounded-lg px-6 md:px-10 py-3 flex gap-2 items-center justify-center mt-8">
              Zobacz program studiów
              <TbArrowBigDownFilled />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSpecialty;
