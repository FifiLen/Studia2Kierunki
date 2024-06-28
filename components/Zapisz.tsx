import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { Course } from "@/utils/Kierunki";
import Markdown from "markdown-to-jsx";

interface Invite {
  course: Course;
}

const Zapraszamy = ({ course }: Invite) => {
  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="flex justify-center items-start px-6 py-16 md:px-20 md:py-36 flex-col rekrutacja">
          <h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tighter mt-3">
            Gotowy/a na nowe wyzwania?
          </h2>
          <div className="text-base md:text-lg text-zinc-300 mt-4">
            <Markdown>{course.invite}</Markdown>
          </div>
          <Link href="/rekrutacja">
            <button className="bg-blue-800 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              Zapisz się na wybrany kierunek
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </Link>
        </div>

        {/* Image Column */}
        <div className="relative w-full h-64 md:h-auto">
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
