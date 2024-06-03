import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Course, courses } from "@/utils/Kierunki";
import {
  TbArrowBigRightFilled,
  TbCalendar,
  TbCircleCheckFilled,
  TbCircleDashedCheck,
  TbDeviceLaptop,
  TbPigMoney,
  TbReportMoney,
} from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";

interface BanerKierunkiProps {
  course: Course;
}

const BanerKierunki = ({ course }: BanerKierunkiProps) => {
  const fontSizeStyles = "text-base"; // Możesz zmienić na inne wartości: text-sm, text-lg

  const contrastStyles = "bg-gray-50 text-gray-900";

  const linkContrastStyles = "bg-[#1660C7] hover:bg-blue-500 text-white";

  return (
    <section className="w-full h-fit bg-white/90">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-full">
        {/* Kolumna z tekstem */}
        <div className="px-10 py-32 relative overflow-hidden baner">
          <h4 className="text-3xl font-semibold text-zinc-700 tracking-[-0.2rem] ">
            Studia Podyplomowe
          </h4>
          <h2 className="text-5xl font-semibold tracking-tighter mt-3 ">
            {course.title}
          </h2>
          {/* Badge */}
          <div className=" flex flex-wrap gap-3 mt-3">
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-300">
              <p className="text-xs font-semibold text-zinc-800 tracking-tight">
                Gwarcancja stałej ceny
              </p>
              <TbCircleDashedCheck />
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-300 ">
              <p className="text-xs font-semibold text-zinc-800 tracking-tight">
                Brak dodatkowych opłat
              </p>
              <TbCircleDashedCheck />
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-300">
              <p className="text-xs font-semibold text-zinc-800 tracking-tight">
                Brak opłaty wakacyjnej
              </p>
              <TbCircleDashedCheck />
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-300">
              <p className="text-xs font-semibold text-zinc-800 tracking-tight">
                Płatność w ratach
              </p>
              <TbCircleDashedCheck />
            </div>
          </div>
          {/* grid direction / boxy */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-3 mt-5 relative">
            <div className="bg-blue-100 rounded-lg p-5">
              <TbPigMoney className=" w-8 h-8" />
              <h4 className=" text-xl font-semibold tracking-tight">
                Koszt studiów
              </h4>
              <p className=" text-zinc-800 font-medium">{course.price}</p>
            </div>
            <div className="bg-blue-200 rounded-lg p-5">
              <TbCalendar className=" w-8 h-8" />
              <h4 className=" text-xl font-semibold tracking-tight">
                Czas trwania
              </h4>
              <p className=" text-zinc-800 font-medium">{course.duration}</p>
            </div>
            <div className="bg-blue-300 rounded-lg p-5">
              <TbDeviceLaptop className=" w-8 h-8" />
              <h4 className=" text-xl font-semibold tracking-tight">
                Forma studiów
              </h4>
              <p className=" text-zinc-800 font-medium">{course.form}</p>
            </div>
            <div className="bg-purple-300 rounded-lg p-5">
              <TbReportMoney className=" w-8 h-8" />
              <h4 className=" text-xl font-semibold tracking-tight">
                Liczba wpłat
              </h4>
              <p className=" text-zinc-800 font-medium">{course.payments}</p>
            </div>
            <div className="bg-blue-300 rounded-lg p-5">
              <GrWorkshop className=" w-8 h-8" />
              <h4 className=" text-xl font-semibold tracking-tight">
                Ilość praktyk
              </h4>
              <p className=" text-zinc-800 font-medium">
                {course.practicalHours}
              </p>
            </div>
          </div>
          {/* buttons */}
          <Link href={"/rejestracja"}>
            <button className="bg-blue-900 text-white font-semibold md:w-fit w-full rounded-lg px-10 py-3 flex gap-2 items-center justify-center mt-4">
              Zapisz się na wybrany kierunek
              <TbArrowBigRightFilled />
            </button>
          </Link>
        </div>

        {/* Kolumna z obrazkiem */}
        <div className="imageColBaner"></div>
      </div>
    </section>
  );
};

export default BanerKierunki;
