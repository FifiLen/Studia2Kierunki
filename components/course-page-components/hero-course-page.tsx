import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TbArrowBigRightFilled,
  TbCalendar,
  TbCircleDashedCheck,
  TbDeviceLaptop,
  TbPigMoney,
  TbReportMoney,
} from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { Course } from "@/utils/types";
import { FaRegCircleCheck } from "react-icons/fa6";
import Markdown from "markdown-to-jsx";
import {CircleArrowRight} from "lucide-react";

interface BanerKierunkiProps {
  course: Course;
}

export const HeroCoursePage = ({ course }: BanerKierunkiProps) => {
  const fontSizeStyles = "text-base"; // Możesz zmienić na inne wartości: text-sm, text-lg
  const contrastStyles = "bg-gray-50 text-gray-900";
  const linkContrastStyles = "bg-[#1660C7] hover:bg-blue-500 text-white";

  return (
    <section className="w-full h-fit bg-white/90">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Kolumna z tekstem */}
        <div className="px-4 sm:px-6 md:px-10 py-20 md:py-32 relative overflow-hidden baner">
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-700 tracking-[-0.2rem]">
            Studia Podyplomowe
          </h4>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-3">
            {course.title}
          </h2>
          {/* Badge */}
          <div className="flex flex-wrap gap-2 md:gap-2 mt-6">
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                Gwarancja stałej ceny
              </p>
              <TbCircleDashedCheck className=" text-green-800"/>
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                Brak dodatkowych opłat
              </p>
              <TbCircleDashedCheck className=" text-green-800"/>
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                Brak opłaty wakacyjnej
              </p>
              <TbCircleDashedCheck className=" text-green-800"/>
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                Płatność w ratach
              </p>
              <TbCircleDashedCheck className=" text-green-800"/>
            </div>
          </div>
          {/* grid direction / boxy */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-5">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-700 shadow-md">
              <TbPigMoney className="w-8 h-8 text-blue-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-blue-700">
                Koszt studiów
              </h4>
              <p className="text-blue-600/80 font-medium">{course.price}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-700 shadow-md">
              <TbCalendar className="w-8 h-8 text-blue-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-blue-700">
                Czas trwania
              </h4>
              <p className="text-blue-600/80 font-medium">{course.duration}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border border-purple-700 shadow-md">
              <TbReportMoney className="w-8 h-8 text-purple-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-purple-700">
                Liczba wpłat
              </h4>
              <p className="text-purple-600/80 font-medium">{course.payments}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-700 shadow-md">
              <GrWorkshop className="w-8 h-8 text-blue-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-blue-700">
                Ilość praktyk
              </h4>
              <p className="text-blue-600/80 font-medium">
                {course.practicalHours}
              </p>
            </div>
            {/*<div className="bg-blue-50 rounded-lg p-5 border border-blue-700 shadow-md col-span-2">*/}
            {/*  <TbDeviceLaptop className="w-8 h-8 text-blue-700" />*/}
            {/*  <h4 className="text-lg md:text-xl font-semibold tracking-tight text-blue-700">*/}
            {/*    Forma studiów*/}
            {/*  </h4>*/}
            {/*  <p className="text-blue-600/80 font-medium">*/}
            {/*    <Markdown>{course.form}</Markdown>*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
          {/* buttons */}
          <Link href="/rekrutacja">
            <button className="bg-blue-900 text-white font-semibold md:w-fit w-full rounded-lg px-6 md:px-4 py-3 flex gap-2 items-center justify-center mt-4">
              Zapisz się na wybrany kierunek
              <CircleArrowRight />
            </button>
          </Link>
        </div>

        {/* Kolumna z obrazkiem */}
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src={`/assets/${course.id}.jpg`}
            fill
            alt={`${course.title}`}
            className="object-cover"
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};
