import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { FaBook, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
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
import Image from "next/image";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

interface Practices {
  course: Course;
}

const AboutSpecialty = ({ course }: Practices) => {
  return (
    <div className="w-full h-fit bg-white/90">
      {/* Section 1 */}
      <section
        id="praktyki"
        className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl "
      >
        <div className="flex flex-col justify-center px-10 py-28">
          <div className="">
            <h2 className="text-5xl font-semibold tracking-tighter mt-2">
              Praktyki
            </h2>
            <div className="text-zinc-800 mt-8 ">
              <p className={`tracking-tight leading-7 ${poppins.className}`}>
                <Markdown>{course.practices}</Markdown>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 py-28">
          <Image
            src="/assets/studentka2.png"
            alt="Zdjęcie studentki"
            width={735}
            height={735}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="kadra"
        className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-center px-10 py-28 order-2 md:order-1">
          <Image
            src="/assets/studentka2.png"
            alt="Zdjęcie studentki"
            width={735}
            height={735}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center px-10 py-28 order-1 md:order-2">
          <h2 className="text-5xl font-semibold tracking-tighter mt-2">
            Kadra
          </h2>
          <div className="text-zinc-800 mt-8 rounded-xl">
            <p className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.faculty}</Markdown>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="ocena-i-ewaluacja"
        className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl"
      >
        <div className="flex flex-col justify-center px-10 py-28">
          <h2 className="text-5xl font-semibold tracking-tighter mt-2">
            Ocena i ewaluacja
          </h2>
          <div className="text-zinc-800 mt-8">
            <p className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.evaluation}</Markdown>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 py-28">
          <Image
            src="/assets/studentka2.png"
            alt="Zdjęcie studentki"
            width={735}
            height={735}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Section 4 */}
      <section
        id="mozliwosci-zatrudnienia"
        className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl "
      >
        <div className="flex items-center justify-center px-10 py-28 order-2 md:order-1 ">
          <Image
            src="/assets/studentka2.png"
            alt="Zdjęcie studentki"
            width={735}
            height={735}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center px-10 py-28 order-1 md:order-2">
          <h2 className="text-5xl font-semibold tracking-tighter mt-2">
            Możliwości zatrudnienia
          </h2>
          <div className="text-zinc-800 mt-8">
            <p className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.jobOpportunities}</Markdown>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSpecialty;
