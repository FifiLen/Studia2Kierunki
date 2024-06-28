import { notFound } from "next/navigation";
import { courses } from "@/utils/Kierunki";
import BanerKierunki from "@/components/BanerKierunki";
import SectionNavigation from "@/components/KierunkiNav";
import AboutSpecialty from "@/components/KierunkiAbout";
import ProgramStudiow from "@/components/KierunkiProgram";
import PraktykiKierunki from "@/components/PraktykiKierunki";

import Zapraszamy from "@/components/Zapisz";
import Schedule from "@/components/Harmonogram";
import Faq from "@/app/faq/page";
import BannerComponent from "@/components/BanerBurKierunek";
import Modules from "@/components/Modules";

export async function generateStaticParams() {
  return courses.map((course) => ({
    oferta: course.id,
  }));
}

interface CoursePageProps {
  params: { oferta: string };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const course = courses.find((course) => course.id === params.oferta);

  if (!course) {
    notFound();
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
      <BanerKierunki course={course} />
      <SectionNavigation sections={sections} />
      <AboutSpecialty course={course} />
      {course.id !== "psychoterapia" && <ProgramStudiow course={course} />}
      {course.id === "psychoterapia" && <Modules modules={course.modules} />}
      <PraktykiKierunki course={course} />
      {/* {course.id !== "psychoterapia" && ( */}
      <Schedule schedule={course.schedule} scheduleInfo={course.scheduleInfo} />
      {/* )} */}
      <Zapraszamy course={course} />
      <BannerComponent />
      <Faq />
    </>
  );
};

export default CoursePage;
