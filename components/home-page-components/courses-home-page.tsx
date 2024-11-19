"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Clock,
  DollarSign,
  GraduationCap,
  CircleArrowRight,
} from "lucide-react";
import { courses, Course } from "@/utils/Kierunki";
import { PsychotherapyInfoCard } from "@/components/psychotherapy-info-card";
import ComingSoonOverlay from "@/components/coming-soon-component";
import Markdown from "markdown-to-jsx";

const MAX_DESCRIPTION_LENGTH = 82;

const availableCourseId = [
  "psychoterapia",
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
  "zarzadzanie-oswiata",
  "logopedia",
  "przyroda-w-szkole-podstawowej",
  "pedagogika-specjalna-autyzm",
  "wychowanie-do-zycia-w-rodzinie-z-edukacja-seksualna",
  "pedagogika-korekcyjna",
  "oligofrenopedagogika",
  "edukacja-integracyjna-wlaczajaca",
  "integracja-sensoryczna-z-terapia-reki",
  "przygotowanie-pedagogiczne",
  "etyka",
  "edukacja-dla-bezpieczenstwa",
  "wczesne-wspomaganie-rozwoju-dziecka",
  "surdopedagogika",
  "tyflopedagogika",
  "informatyka-w-szkole",
  "pedagogika-marii-montessori",
  "wychowanie-fizyczne-w-szkole",
  "chemia-w-szkole",
  "jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej",
  "dydaktyka-jezyka-obcego-niemiecki",
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
  const isAvailable = availableCourseId.includes(course.id);

  // Funkcja do skracania opisu
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };

  return (
      <div className="flex flex-col h-full rounded-lg border bg-white text-gray-900 shadow-sm">
        {!isAvailable && <ComingSoonOverlay />}
        <div className="relative h-48 order-last sm:order-first">
          <Image
              src={`/assets/${course.id}.jpg`}
              alt={`Zdjęcie przedstawiające kurs: ${course.title}`}
              fill
              className="object-cover rounded-b-lg sm:rounded-t-lg sm:rounded-b-none"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="p-8 sm:p-4 flex-grow">
          <div className="space-y-4 mb-6">
            <h3 className="text-3xl font-bold text-gray-900 lg:text-lg xl:text-xl tracking-tighter">
              {course.title}
            </h3>
            <div className="mb-4 text-sm line-clamp-3">
              <Markdown>
                {truncateDescription(
                    course.banerDescription,
                    MAX_DESCRIPTION_LENGTH
                )}
              </Markdown>
            </div>
          </div>
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
            {/*<InfoBadge*/}
            {/*    icon={<GraduationCap className="h-4 w-4" />}*/}
            {/*    text={course.form}*/}
            {/*/>*/}
          </div>
          <div className="pt-10 sm:pt-6 mt-auto">
            <Button
                asChild={isAvailable}
                className="w-full text-lg sm:text-base rounded-xl py-6 bg-blue-600"
                variant={isAvailable ? "default" : "secondary"}
                disabled={!isAvailable}
            >
              {isAvailable ? (
                  <Link href={`/kierunek/${course.id}`}>
                    Dowiedz się więcej
                    <span className="sr-only"> o kierunku {course.title}</span>
                    <CircleArrowRight className="ml-2 h-6 w-6 sm:h-5 sm:w-5" />
                  </Link>
              ) : (
                  <span>Coming Soon</span>
              )}
            </Button>
          </div>
        </div>
      </div>
  );
};

export default function CoursesPage() {
  // Ograniczenie liczby wyświetlanych kursów do 7
  const coursesToDisplay = courses.slice(0, 7);

  return (
      <div id="kierunki" className="w-full bg-gray-100 py-12">
        <div className="max-w-full mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
            Kierunki
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesToDisplay.map((course) =>
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
        </div>
      </div>
  );
}
