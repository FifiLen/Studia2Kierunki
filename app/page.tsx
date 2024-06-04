import Baner from "@/components/Baner";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Contact from "@/components/KontaktMain";
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
      <Finance />
      <Faq />
      <Contact />
    </>
  );
}
