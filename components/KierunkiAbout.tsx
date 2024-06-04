"use client";
import { FaBook, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Course } from "@/utils/Kierunki";
import { Poppins } from "next/font/google";
import Markdown from "markdown-to-jsx";
import {
  TbArrowBigDownFilled,
  TbArrowBigRightFilled,
  TbTargetArrow,
} from "react-icons/tb";
import { BiAward } from "react-icons/bi";
import { GiDiploma } from "react-icons/gi";
import { StickyScroll } from "./ui/sticky";
import StickyScrollRevealDemo from "./Scroll";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

interface AboutSpecialtyProps {
  course: Course;
}

const AboutSpecialty = ({ course }: AboutSpecialtyProps) => {
  return (
    <section id="opis" className="w-full h-fit bg-gray-200 about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-full">
        {/* Kolumna z tekstem */}
        <div className="px-10 py-28 relative overflow-hidden">
          <h3 className="text-3xl font-semibold text-zinc-700 tracking-tighter ">
            {course.title}
          </h3>
          <h2 className="text-5xl font-semibold tracking-tighter mt-2 ">
            Opis Kierunku
          </h2>
          <div className=" text-zinc-800 mt-8 p-10 rounded-xl bg-gray-50 border-gray-300 border">
            <h4 className=" pb-3 text-2xl font-semibold tracking-tighter flex items-center gap-2">
              <FaUserGraduate />
              Grupa docelowa
            </h4>
            <p className={` tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.description}</Markdown>
            </p>
          </div>
          <div className=" text-zinc-800 mt-8 p-10 rounded-xl bg-gray-100 border-gray-300 border">
            <h4 className=" pb-3 text-2xl font-semibold tracking-tighter flex items-center gap-2">
              <TbTargetArrow />
              Cel studiów
            </h4>
            <p className={`  tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.description2}</Markdown>
            </p>
          </div>
        </div>

        {/* Kolumna z obrazkiem */}
        <div className="relative w-full  ">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-full pb-20">
        {/* Kolumna z obrazkiem */}
        <div className="relative w-full">
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
        <div className="px-10 py-5 relative overflow-hidden">
          <div className=" text-zinc-800 mt-8 p-10 rounded-xl bg-gray-50 border-gray-300 border">
            <h4 className=" pb-3 text-2xl font-semibold tracking-tighter flex items-center gap-2">
              <BiAward />
              Przygotowanie absolwentów do pracy
            </h4>
            <p className={`  tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.description3}</Markdown>
            </p>
          </div>
          <div className=" text-zinc-800 mt-8 p-10 rounded-xl bg-gray-50 border-gray-300 border">
            <h4 className=" pb-3 text-2xl font-semibold tracking-tighter flex items-center gap-2">
              <GiDiploma />
              Kwalifikacje i Warunki Ukończenia
            </h4>
            <p className={`  tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.description3}</Markdown>
            </p>
          </div>

          <Link href={"#program-studiow"}>
            <button className="bg-blue-900 text-white font-semibold md:w-fit w-full rounded-lg px-10 py-3 flex gap-2 items-center justify-center mt-8">
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
