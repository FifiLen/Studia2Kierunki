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
import { Course } from "@/utils/Kierunki";
const PsychotherapyCard = ({ course }: { course: Course }) => {
  return (
    <Card className="bg-zinc-100 flex border-zinc-300 rounded-lg shadow-lg flex-col relative">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4">
          <CardHeader>
            <CardTitle className="text-2xl md:text-5xl h-10  tracking-tight font-bold text-zinc-900">
              {course.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="mb-5 text-base md:text-lg tracking-tight text-zinc-700">
              <Markdown>{course.banerDescription}</Markdown>
            </CardDescription>
            <div className="flex items-center font-medium mb-2 p-2 bg-purple-100 rounded-md text-base md:text-base">
              <FaCalendarAlt className="text-purple-500 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center font-medium mb-2 p-2 bg-purple-200 rounded-md text-base md:text-base">
              <FaClock className="text-purple-500 mr-2" />
              <span>{course.practicalHours}</span>
            </div>
            <div className="flex items-center font-medium mb-2 p-2 bg-purple-100 rounded-md text-base md:text-base">
              <FaMoneyBillWave className="text-purple-500 mr-2" />
              <span>{course.price}</span>
            </div>
            <div className="flex items-center font-medium mb-2 p-2 bg-purple-200 rounded-md text-base md:text-base">
              <FaChalkboardTeacher className="text-purple-500 mr-2" />
              <span>
                <Markdown>{course.form}</Markdown>
              </span>
            </div>
          </CardContent>
          <CardFooter className="mt-auto h-12">
            <Link
              aria-label={`Dowiedz się więcej o kierunku ${course.title}`}
              href={`/oferta/${course.id}`}
              className="flex items-center text-white tracking-tight font-semibold gap-2 rounded-lg p-2 bg-purple-600"
            >
              <p className="">Dowiedz się więcej</p>
              <CgArrowRightO className=" text-xl" />
            </Link>
          </CardFooter>
        </div>
        <div className="relative flex-1 h-48 md:h-auto">
          <Image
            src={`/assets/${course.id}.jpg`}
            fill
            alt={`Zdjęcie przedstawiające kurs: ${course.title}`}
            className="object-cover rounded-t-lg md:rounded-tr-lg md:rounded-bl-lg"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Card>
  );
};

export default PsychotherapyCard;
