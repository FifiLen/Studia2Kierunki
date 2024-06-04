import Baner from "@/components/Baner";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Contact from "@/components/KontaktMain";
import Lecture from "@/components/Lecture";
import News from "@/components/News";
import Offer from "@/components/OfertaMain";
import StudentResources from "@/components/StrefaStudenta";
import WhyUs from "@/components/WhyUs";
import KierunkiPage from "./(oferta)/oferta/page";
import RekrutacjaAnnouncement from "@/components/Invitation";
import Finance from "@/components/Finance";

export default function Home() {
  return (
    <>
      <Baner />
      <Hero />
      <RekrutacjaAnnouncement />
      <KierunkiPage />

      {/* <WhyUs /> */}
      {/* <StudentResources /> */}
      <Finance />

      <Faq />
      <Contact />
    </>
  );
}
