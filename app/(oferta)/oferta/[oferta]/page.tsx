import { notFound } from "next/navigation";
import { courses } from "@/utils/Kierunki";
import BanerKierunki from "@/components/BanerKierunki";
import SectionNavigation from "@/components/KierunkiNav";
import AboutSpecialty from "@/components/KierunkiAbout";
import ProgramStudiow from "@/components/KierunkiProgram";
import Program from "@/components/KierunkiProgram";
import PraktykiKierunki from "@/components/PraktykiKierunki";

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
    { id: "forma-studiow", title: "Forma studiów" },
    { id: "faq", title: "Pytania i odpowiedzi" },
  ];

  return (
    <>
      <BanerKierunki course={course} />
      <SectionNavigation sections={sections} />
      <AboutSpecialty course={course} />
      <Program course={course} />
      <PraktykiKierunki course={course} />
    </>
  );
};

export default CoursePage;
