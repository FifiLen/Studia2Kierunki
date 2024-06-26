import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { UserPreferencesProvider } from "@/components/UserPreferencesContext";
import Access from "@/components/Access";
import TopBar from "@/components/TopNav";
import { Analytics } from "@vercel/analytics/react";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instytut Studiów Podyplomowych BIS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.className} overflow-x-hidden`}>
        <UserPreferencesProvider>
          {/* <Access /> */}
          <TopBar />
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </UserPreferencesProvider>
      </body>
    </html>
  );
}
