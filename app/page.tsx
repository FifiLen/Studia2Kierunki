import Baner from "@/components/Baner";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Contact from "@/components/KontaktMain";
import Lecture from "@/components/Lecture";
import News from "@/components/News";
import Offer from "@/components/OfertaMain";
import StudentResources from "@/components/StrefaStudenta";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Baner />
      <Hero />
      <WhyUs />

      <Lecture />

      <Offer />
      <StudentResources />
      <News />
      <Faq />
      <Contact />
    </>
  );
}
