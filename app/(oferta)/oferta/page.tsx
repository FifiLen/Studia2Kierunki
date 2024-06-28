import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { CgArrowRightO } from "react-icons/cg";
import Markdown from "markdown-to-jsx";
import { courses, Course } from "@/utils/Kierunki";
import ComingSoonOverlay from "@/components/Overlay";
import PsychotherapyCard from "@/components/Psychoterapia";

const availableCourseId = [
  "psychoterapia",
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
];

const KierunkiPage = () => {
  return (
    <div id="kierunki" className="w-full baner bg-gray-200">
      <div className="max-w-full mx-auto py-10 px-4 md:py-20 md:px-10 lg:px-20">
        <h1 className="text-3xl md:text-6xl font-bold mb-8 tracking-tighter">
          Nasze kierunki
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) =>
            course.id === "psychoterapia" ? (
              <div
                key={course.id}
                className="col-span-1 md:col-span-2 lg:col-span-3"
              >
                <PsychotherapyCard course={course} />
              </div>
            ) : (
              <Card
                key={course.id}
                className="bg-white border-gray-100 rounded-lg shadow-none flex flex-col relative"
              >
                {!availableCourseId.includes(course.id) && (
                  <ComingSoonOverlay />
                )}{" "}
                {/* Overlay for coming soon courses */}
                <div className="relative h-48">
                  <Image
                    src={`/assets/${course.id}.jpg`}
                    fill
                    alt={`Zdjęcie przedstawiające kurs: ${course.title}`}
                    className="object-cover rounded-t-lg"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4 text-sm md:text-base">
                    <Markdown>{course.banerDescription}</Markdown>
                  </CardDescription>
                  <div className="flex items-center font-medium mb-2 p-2 bg-blue-100 rounded-md text-sm md:text-base">
                    <FaCalendarAlt className="text-blue-500 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center font-medium mb-2 p-2 bg-blue-200 rounded-md text-sm md:text-base">
                    <FaClock className="text-blue-500 mr-2" />
                    <span>
                      <Markdown>{course.practicalHours}</Markdown>
                    </span>
                  </div>
                  <div className="flex items-center font-medium mb-2 p-2 bg-blue-100 rounded-md text-sm md:text-base">
                    <FaMoneyBillWave className="text-blue-500 mr-2" />
                    <span>{course.price}</span>
                  </div>
                  <div className="flex items-center font-medium mb-2 p-2 bg-blue-200 rounded-md text-sm md:text-base">
                    <FaChalkboardTeacher className="text-blue-500 mr-2" />
                    <span>
                      <Markdown>{course.form}</Markdown>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  {availableCourseId.includes(course.id) ? (
                    <Link
                      aria-label={`Dowiedz się więcej o kierunku ${course.title}`}
                      href={`/oferta/${course.id}`}
                      className="flex items-center text-white tracking-tight font-semibold gap-2 text-sm rounded-lg p-2 bg-[#9E5AE2]"
                    >
                      <p className="">Dowiedz się więcej</p>
                      <CgArrowRightO className=" text-xl" />
                    </Link>
                  ) : (
                    <div className="flex items-center text-gray-500 tracking-tight font-semibold gap-2 text-sm rounded-lg p-2 bg-gray-300 cursor-not-allowed">
                      <p className="">Coming Soon</p>
                    </div>
                  )}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default KierunkiPage;
