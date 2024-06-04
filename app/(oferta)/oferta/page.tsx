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
import { courses } from "@/utils/Kierunki";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { CgArrowRightO } from "react-icons/cg";

const KierunkiPage = () => {
  return (
    <div id="kierunki" className="w-full baner">
      <div className="max-w-7xl mx-auto py-20 px-10 md:px-0">
        <h1 className="text-6xl font-bold mb-8 tracking-tighter">
          Nasze Kierunki
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-gray-50 border-gray-300 rounded-lg shadow-none flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={`/assets/${course.id}.jpg`}
                  layout="fill"
                  alt={`${course.title}`}
                  className="object-cover rounded-t-lg"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">
                  {course.description.substring(0, 150)}...
                </CardDescription>
                <div className="flex items-center font-medium mb-2 p-2 bg-blue-100 rounded-md">
                  <FaCalendarAlt className="text-blue-500 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center font-medium mb-2 p-2 bg-blue-200 rounded-md">
                  <FaClock className="text-blue-500 mr-2" />
                  <span>{course.practicalHours}</span>
                </div>
                <div className="flex items-center font-medium mb-2 p-2 bg-blue-100 rounded-md">
                  <FaMoneyBillWave className="text-blue-500 mr-2" />
                  <span>{course.price}</span>
                </div>
                <div className="flex items-center font-medium mb-2 p-2 bg-blue-200 rounded-md">
                  <FaChalkboardTeacher className="text-blue-500 mr-2" />
                  <span>{course.form}</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link
                  href={`/oferta/${course.id}`}
                  className="flex items-center text-white tracking-tight font-semibold gap-2 text-sm rounded-lg p-2 bg-[#9E5AE2]"
                >
                  <p className="">Dowiedz się więcej</p>
                  <CgArrowRightO className=" text-xl" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KierunkiPage;
