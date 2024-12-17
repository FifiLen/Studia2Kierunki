"use client";

import { useState, useMemo, useEffect } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Clock,
  DollarSign,
  CircleArrowRight,
} from "lucide-react";
import { CategoryId, Course } from "@/utils/types";
import { PsychotherapyInfoCard } from "@/components/psychotherapy-info-card";
import ComingSoonOverlay from "@/components/coming-soon-component";
import Markdown from "markdown-to-jsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { loadCourseData } from "@/utils/loadCourseData";

const MAX_DESCRIPTION_LENGTH = 82;
const MAX_COURSES = 7;

const availableCourseId = [
  "psychoterapia",
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
];

const InfoBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Badge
    variant="secondary"
    className="flex items-center gap-2 bg-blue-50 text-blue-700 p-2"
  >
    {icon}
    <span className="truncate text-sm">{text}</span>
  </Badge>
);

const CourseCard = ({ course }: { course: Course }) => {
  const t = useTranslations("CoursesPage");
  const isAvailable = availableCourseId.includes(course.id);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };

  return (
    <Card className="flex flex-col h-full">
      {!isAvailable && <ComingSoonOverlay />}
      <div className="relative h-48 order-last sm:order-first">
        <Image
          src={`/assets/${course.id}.jpg`}
          alt={course.title}
          fill
          className="object-cover rounded-b-lg sm:rounded-t-lg sm:rounded-b-none"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-8 sm:p-4 flex-grow">
        <CardHeader className="p-0 space-y-4 mb-6">
          <CardTitle className="text-3xl font-bold text-gray-900 lg:text-lg xl:text-xl tracking-tighter">
            {course.title}
          </CardTitle>
          <CardDescription className="mb-4 text-sm line-clamp-3">
            <Markdown>
              {truncateDescription(
                course.banerDescription,
                MAX_DESCRIPTION_LENGTH
              )}
            </Markdown>
          </CardDescription>
        </CardHeader>

        <div className="grid grid-cols-1 space-y-4">
          <InfoBadge
            icon={<CalendarDays className="h-4 w-4" />}
            text={course.duration}
          />
          <InfoBadge
            icon={<Clock className="h-4 w-4" />}
            text={course.practicalHours}
          />
          <InfoBadge
            icon={<DollarSign className="h-4 w-4" />}
            text={course.price}
          />
        </div>
        <CardFooter className="p-0 pt-10 sm:pt-6 mt-auto">
          <Button
            asChild={isAvailable}
            className="w-full text-lg sm:text-base rounded-xl py-6 bg-blue-600"
            variant={isAvailable ? "default" : "secondary"}
            disabled={!isAvailable}
          >
            {isAvailable ? (
              <Link href={`/kierunek/${course.id}`}>
                {t("learnMore")}
                <span className="sr-only">
                  {t("aboutCourse", { title: course.title })}
                </span>
                <CircleArrowRight className="ml-2 h-6 w-6 sm:h-5 sm:w-5" />
              </Link>
            ) : (
              <span>{t("comingSoon")}</span>
            )}
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default function CoursesPage() {
  const t = useTranslations("CoursesPage");
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const courseIds = availableCourseId;
      const loadedCourses = await Promise.all(
        courseIds.map((id) => loadCourseData(id, locale))
      );
      setCourses(loadedCourses);
    }
    fetchCourses();
  }, [locale]);

  const categories = [
    { id: "all", name: t("allCategories") },
    {
      id: "psychologia-i-psychoterapia",
      name: t("psychologyAndPsychotherapy"),
    },
    {
      id: "pedagogika-specjalna-i-korekcyjna",
      name: t("specialAndCorrectivePedagogy"),
    },
    {
      id: "zarzadzanie-i-dydaktyka-edukacyjna",
      name: t("educationalManagementAndDidactics"),
    },
  ] as const;

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeTab === "all" ||
        course.category.toLowerCase().replace(/ /g, "-") === activeTab;
      return matchesSearch && matchesCategory;
    });
  }, [courses, searchTerm, activeTab]);

  const coursesToDisplay = filteredCourses.slice(0, MAX_COURSES);

  return (
    <div id="kierunki" className="w-full bg-gray-100 py-12">
      <div className="max-w-full mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:px-20">
        <div className=" flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
            {t("courses")}
          </h1>
          <div className="">
            <Link
              href={"/kierunek"}
              className=" px-4 py-2 font-semibold text-base bg-purple-500 rounded-xl text-white tracking-tight hover:bg-purple-700"
            >
              {t("button-more")}
            </Link>
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            type="search"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 lg:w-1/3 bg-blue-50 border border-blue-700 placeholder:text-blue-700 text-blue-700"
          />
        </div> */}

        <Tabs
          defaultValue="all"
          onValueChange={(value) => setActiveTab(value as CategoryId)}
          className="space-y-4"
        >
          <div className="w-fit">
            <TabsList className=" flex-wrap justify-start gap-2 w-fit h-auto hidden">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-3 py-1 text-sm sm:text-base font-normal whitespace-nowrap text-blue-700 border bg-blue-50 border-blue-700 data-[state=active]:bg-blue-700 data-[state=active]:text-blue-50"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesToDisplay
                  .filter((course) => {
                    return category.id === "all"
                      ? true
                      : course.category.toLowerCase().replace(/ /g, "-") ===
                          category.id;
                  })
                  .map((course) =>
                    course.id === "psychoterapia" ? (
                      <div
                        key={course.id}
                        className="col-span-1 sm:col-span-2 lg:col-span-3"
                      >
                        <PsychotherapyInfoCard course={course} />
                      </div>
                    ) : (
                      <CourseCard key={course.id} course={course} />
                    )
                  )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
