import { FinanceInformationSection } from "@/components/home-page-components/finance-information-section";
import { CtaHomePage } from "@/components/home-page-components/cta-home-page";
import { ContactMainPageSection } from "@/components/home-page-components/contant-main-page-section";
import BanerIviteHomePage from "@/components/home-page-components/baner-invite-home-page";
import HeroHomePage from "@/components/home-page-components/hero-home-page";

import FaqSection from "./faq/page";
import CoursesPage from "@/components/home-page-components/courses-home-page";

export default function Home() {
  return (
    <>
      {/* Baner zachęcający do rejestracji na studia */}
      <BanerIviteHomePage />
      {/* Sekcja hero dla strony głównej */}
      <HeroHomePage />
      {/* Sekcja cta dla strony główej */}
      <CtaHomePage />
      {/* Strona/Komponent z kierunkami studiów strona główna/podstrona z ofertą */}

      <CoursesPage />
      {/* Sekcja informacyjna z dofinansowaniem/pozyczką dla strony głównej */}
      <FinanceInformationSection />
      {/* Sekcja FAQ dla strony głównej/podstrony z faq oraz podstron dla kierunków */}
      <FaqSection />
      {/* Sekcja kontaktu uproszczonego na stronie głównej */}
      <ContactMainPageSection />
    </>
  );
}
