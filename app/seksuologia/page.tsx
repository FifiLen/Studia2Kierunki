"use client";
import BanerKierunki from "@/components/BanerKierunki";
import Faq from "@/components/Faq";
import FormaStudiow from "@/components/FormaStudiowSeksuologia";
import Kompetencje from "@/components/KompetencjeSeksuologia";
import ProgramStudiow from "@/components/ProgramSeksuologia";
import AboutSpecialty from "@/components/KierunkiAbout";
import SectionNavigation from "@/components/KierunkiNav";

export default function Seksuologia() {
  const sections = [
    { id: "o-specjalnosci", title: "O specjalności" },
    { id: "program-studiow", title: "Program studiów" },
    { id: "kompetencje", title: "Kompetencje" },
    { id: "forma-studiow", title: "Forma studiów" },
    { id: "faq", title: "Pytania i odpowiedzi" },
  ];

  return (
    <>
      {/* Baner */}

      {/* Navigation */}
      <SectionNavigation sections={sections} />

      {/* About */}
      <AboutSpecialty />

      {/*Program */}
      <ProgramStudiow />

      {/* Kompetencje */}
      <Kompetencje />

      {/* Forma Studiów */}
      <FormaStudiow />

      {/* Faq */}
      <Faq />
    </>
  );
}
