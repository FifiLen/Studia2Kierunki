"use client";

import React from "react";
import {
  FaBars,
  FaHome,
  FaGraduationCap,
  FaUserPlus,
  FaQuestionCircle,
  FaEnvelope,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

interface Product {
  name: string;
  description: string;
  href: string;
  icon: JSX.Element;
}

export default function RootNavbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const products: Product[] = [
    {
      name: t("home"),
      description: t("homeDescription"),
      href: "/",
      icon: <FaHome />,
    },
    {
      name: t("courses"),
      description: t("coursesDescription"),
      href: "/kierunek",
      icon: <FaGraduationCap />,
    },
    {
      name: t("recruitment"),
      description: t("recruitmentDescription"),
      href: "/rekrutacja",
      icon: <FaUserPlus />,
    },
    {
      name: t("faq"),
      description: t("faqDescription"),
      href: "/faq",
      icon: <FaQuestionCircle />,
    },
    {
      name: t("contact"),
      description: t("contactDescription"),
      href: "/kontakt",
      icon: <FaEnvelope />,
    },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === "pl" ? "en" : "pl";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-950 text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">{t("logoAlt")}</span>
            <FaBookOpen className="text-blue-400" />
            <h2 className="tracking-tighter text-xl font-semibold">
              {t("logoText")}
            </h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">{t("openMenu")}</span>
                <FaBars className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-blue-950 text-white">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <span className="sr-only">{t("logoAlt")}</span>
                  <FaBookOpen className="text-blue-400" />
                  <h2 className="tracking-tighter text-xl font-semibold">
                    {t("logoText")}
                  </h2>
                </Link>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-500"
                      >
                        <span className="mr-3 text-xl">{product.icon}</span>
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/rekrutacja"
                      className="text-sm flex items-center gap-1 p-1 px-3 rounded-lg border font-semibold leading-6 border-white text-white"
                    >
                      {t("enrollButton")}
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-14">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="text-sm font-semibold tracking-tight leading-6 text-white hover:text-blue-300 transition-colors duration-200"
            >
              {product.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <Link
            href="/rekrutacja"
            className="text-sm flex items-center gap-1 p-2 px-3 rounded-lg font-semibold leading-6 bg-white text-blue-950 hover:bg-blue-100 transition-colors duration-200"
          >
            {t("enrollButton")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="text-sm flex items-center gap-1 p-2 px-3 rounded-lg font-semibold leading-6 bg-white text-blue-950 hover:bg-blue-100 transition-colors duration-200"
          >
            <FaGlobe className="mr-1" />
            {locale === "pl" ? "EN" : "PL"}
          </button>
        </div>
      </nav>
    </header>
  );
}
