"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FaBars,
  FaHome,
  FaGraduationCap,
  FaUserPlus,
  FaQuestionCircle,
  FaEnvelope,
  FaBookOpen,
} from "react-icons/fa";
import Link from "next/link";
import { useUserPreferences } from "../providers/UserPreferencesContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Product {
  name: string;
  description: string;
  href: string;
  icon: JSX.Element;
}

const products: Product[] = [
  {
    name: "Strona główna",
    description: "Strona główna",
    href: "/",
    icon: <FaHome />,
  },
  {
    name: "Kierunki",
    description: "Oferta studiów podyplomowych",
    href: "/kierunek",
    icon: <FaGraduationCap />,
  },
  {
    name: "Rekrutacja",
    description: "Rekrutacja na studia podyplomowe",
    href: "/rekrutacja",
    icon: <FaUserPlus />,
  },
  {
    name: "FAQ",
    description: "Pytania i odpowiedzi",
    href: "/faq",
    icon: <FaQuestionCircle />,
  },
  {
    name: "Kontakt",
    description: "Strona kontaktowa",
    href: "/kontakt",
    icon: <FaEnvelope />,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RootNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setFontSize, fontSize, highContrast, setHighContrast } =
    useUserPreferences();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const fontSizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const navbarContrastStyles = highContrast
    ? "bg-[#FFFF00] text-black"
    : "bg-blue-950 text-white";

  const linkContrastStyles = highContrast
    ? "text-black hover:text-white"
    : "text-white";

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let timeoutId: NodeJS.Timeout | null = null;

      const handleScroll = () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          controlNavbar();
        }, 200); // 200ms delay
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, [controlNavbar]);

  return (
    <header
      className={`sticky top-0 z-50 ${navbarContrastStyles} ${
        fontSizeStyles[fontSize]
      } transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">ISP Rybnik</span>
            <FaBookOpen
              className={`${highContrast ? "text-black" : "text-blue-400"}`}
            />
            <h2 className="tracking-tighter text-xl font-semibold">
              ISP Rybnik
            </h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${linkContrastStyles}`}
              >
                <span className="sr-only">Open main menu</span>
                <FaBars className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`${
                highContrast
                  ? "bg-[#FFFF00] text-black"
                  : "bg-blue-950 text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <span className="sr-only">ISP Rybnik</span>
                  <FaBookOpen
                    className={`${
                      highContrast ? "text-black" : "text-blue-400"
                    }`}
                  />
                  <h2 className="tracking-tighter text-xl font-semibold">
                    ISP Rybnik
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
                        className={`flex items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${linkContrastStyles} hover:bg-blue-500`}
                      >
                        <span className="mr-3 text-xl">{product.icon}</span>
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/rekrutacja"
                      className={`text-sm flex items-center gap-1 p-1 px-3 rounded-lg border font-semibold leading-6 ${
                        highContrast
                          ? "bg-black text-white border-white"
                          : "border-white text-white"
                      }`}
                    >
                      Zapisz się na studia
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
              className={`text-sm font-semibold tracking-tight leading-6 ${linkContrastStyles}`}
            >
              {product.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <Link
            href="/rekrutacja"
            className={`text-sm flex items-center gap-1 p-2 px-3 rounded-lg font-semibold leading-6 ${
              highContrast ? "bg-black text-white" : "bg-white text-blue-950"
            }`}
          >
            Zapisz się na studia
          </Link>
        </div>
      </nav>
    </header>
  );
}
