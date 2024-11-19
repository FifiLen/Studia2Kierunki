import { notFound } from "next/navigation";
import { courses } from "@/utils/Kierunki";
import { ScheduleCourseSection } from "@/components/course-page-components/schedule-course-section";
import { CtaCoursePageSection } from "@/components/course-page-components/cta-course-page-section";
import { HeroCoursePage } from "@/components/course-page-components/hero-course-page";
import { NavigationCourse } from "@/components/course-page-components/navigation-course";
import { AboutCourse } from "@/components/course-page-components/about-course";
import { CoursePractises } from "@/components/course-page-components/course-practises";
import { CourseProgramPsychotherapy } from "@/components/course-page-components/course-program-psychotherapy";
import { CourseProgram } from "@/components/course-page-components/course-program";
import { BannerFinanceCoursePage } from "@/components/course-page-components/baner-finance-course-page";
import FaqSection from "@/app/faq/page";

export async function generateStaticParams() {
  return courses.map((course) => ({
    kierunek: course.id,
  }));
}

interface CoursePageProps {
  params: { kierunek: string };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const course = courses.find((course) => course.id === params.kierunek);

  if (!course) {
    notFound();
    return null;
  }

  const sections = [
    { id: "opis", title: "Opis kierunku" },
    { id: "program-studiow", title: "Program studiów" },
    { id: "praktyki", title: "Praktyki" },
    { id: "harmonogram", title: "Harmonogram" },
    { id: "faq", title: "Pytania i odpowiedzi" },
  ];

  return (
    <>
      <HeroCoursePage course={course} />
      <NavigationCourse sections={sections} />
      <AboutCourse course={course} />
      {course.id !== "psychoterapia" && (
        <CourseProgramPsychotherapy course={course} />
      )}
      {course.id === "psychoterapia" && (
        <CourseProgram modules={course.modules} />
      )}
      <CoursePractises course={course} />
      <ScheduleCourseSection
        schedule={course.schedule}
        scheduleInfo={course.scheduleInfo}
      />
      <CtaCoursePageSection course={course} />
      <BannerFinanceCoursePage />
      <FaqSection />
    </>
  );
};

export default CoursePage;
