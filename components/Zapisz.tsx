import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { Course } from "@/utils/Kierunki";
interface Invite {
  course: Course;
}

const Zapraszamy = ({ course }: Invite) => {
  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className=" justify-center items-start flex px-20 py-36 flex-col rekrutacja">
          <h2 className="text-4xl text-white font-semibold tracking-tighter mt-3">
            Gotowy/a na nowe wyzwania?
          </h2>
          <p className="text-lg text-zinc-300 mt-4">
            Rozpocznij swoją przygodę z {course.title}! Zapewniamy wysoki poziom
            kształcenia, doświadczoną kadrę i nowoczesne zaplecze. Inwestuj w
            swoją przyszłość i zrealizuj swoje marzenia.
          </p>
          <Link href="/rekrutacja">
            <button className="bg-blue-800 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              Zapisz się na wybrany kierunek
              <CgArrowTopRightO className=" text-2xl" />
            </button>
          </Link>
        </div>

        {/* Image Column */}
        <div className="relative w-full">
          <Image
            src="/assets/studentka2.png"
            fill
            alt="Rekrutacja 2024/2025"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Zapraszamy;
