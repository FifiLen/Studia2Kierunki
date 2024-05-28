import { notFound } from "next/navigation";
import { courses } from "@/utils/Kierunki";
import BanerKierunki from "@/components/BanerKierunki";
import SectionNavigation from "@/components/KierunkiNav";
import AboutSpecialty from "@/components/KierunkiAbout";

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
  }
  const sections = [
    { id: "o-specjalnosci", title: "O specjalności" },
    { id: "program-studiow", title: "Program studiów" },
    { id: "kompetencje", title: "Kompetencje" },
    { id: "forma-studiow", title: "Forma studiów" },
    { id: "faq", title: "Pytania i odpowiedzi" },
  ];

  return (
    <>
      <BanerKierunki course={course} />
      <SectionNavigation sections={sections} />
      <AboutSpecialty />
    </>
  );
};

export default CoursePage;
