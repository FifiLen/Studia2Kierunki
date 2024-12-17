import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout-components/root-navbar";
import { UserPreferencesProvider } from "@/components/providers/UserPreferencesContext";
import { Analytics } from "@vercel/analytics/react";
import { TopBar } from "@/components/layout-components/contact-info-baner-top";
import { FooterComponent } from "@/components/layout-components/footer-component";
import { Toaster } from "@/components/ui/toaster";
import { AccessibilityPanel } from "@/components/providers/accessibility-panel";
import BanerIviteHomePage from "@/components/home-page-components/baner-invite-home-page";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { StructuredData } from "@/components/structured-data";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Instytut Studiów Podyplomowych | Studia podyplomowe w Rybniku",
    template: "%s | ISP Rybnik",
  },
  description:
    "Oferujemy studia podyplomowe online w czasie rzeczywistym. Szeroki wybór kierunków, w tym psychoterapia, pedagogika i więcej. Zapisz się na semestr zimowy 2024/2025.",
  keywords: [
    "studia podyplomowe Rybnik",
    "studia podyplomowe online",
    "ISP Rybnik",
    "psychoterapia studia podyplomowe",
    "pedagogika Rybnik",
  ],
  authors: [{ name: "ISP Rybnik" }],
  creator: "ISP Rybnik",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://isp.rybnikonline.eu",
    siteName: "ISP Rybnik",
    images: [
      {
        url: "https://isp.rybnikonline.eu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISP Rybnik - Studia podyplomowe online",
      },
    ],
  },
  alternates: {
    canonical: "https://isp.rybnikonline.eu",
    languages: {
      pl: "https://isp.rybnikonline.eu",
      en: "https://isp.rybnikonline.eu/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export async function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = params;

  await setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <StructuredData />
      </head>
      <body className={`${dmsans.className} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <UserPreferencesProvider>
            <TopBar />
            <Navbar />
            <BanerIviteHomePage />
            <main>{children}</main>
            <AccessibilityPanel />
            <Toaster />
            <Analytics />
            <FooterComponent />
          </UserPreferencesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
