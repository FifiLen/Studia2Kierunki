import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { UserPreferencesProvider } from "@/components/UserPreferencesContext";

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
      <body className={dmsans.className}>
        <UserPreferencesProvider>
        <Navbar />
        {children}
        <Footer />
        </UserPreferencesProvider>
      </body>
    </html>
  );
}
