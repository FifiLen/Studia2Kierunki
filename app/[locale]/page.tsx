import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HeroHomePage from "@/components/home-page-components/hero-home-page";
import { CtaHomePage } from "@/components/home-page-components/cta-home-page";
import CoursesPage from "@/components/home-page-components/courses-home-page";
import { FinanceInformationSection } from "@/components/home-page-components/finance-information-section";
import FaqSection from "./faq/page";
import { ContactMainPageSection } from "@/components/home-page-components/contant-main-page-section";

export const metadata: Metadata = {
  title: "Strona Główna | ISP Rybnik",
  description:
    "Instytut Studiów Podyplomowych w Rybniku - szeroka oferta studiów podyplomowych online.",
};

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  await setRequestLocale(locale);

  return (
    <>
      <HeroHomePage />
      <CtaHomePage />
      <CoursesPage />
      <FinanceInformationSection />
      <FaqSection />
      <ContactMainPageSection />
    </>
  );
}

export async function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}
