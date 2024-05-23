"use client";
import React from "react";
// import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useUserPreferences } from "@/components/UserPreferencesContext";
const Contact = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const linkContrastStyles = highContrast
    ? "bg-[#FFFF00] text-black hover:bg-yellow-600"
    : "bg-[#1660C7] text-white hover:bg-blue-600";

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-black";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";

  return (
    <div
      className={` ${bgContrastStyles} py-16 sm:py-24 lg:py-32 ${fontSizeClasses[fontSize]}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="contact-info p-6 bg-white rounded-lg shadow-lg">
          <h2
            className={`text-4xl font-bold ${textContrastStyles} sm:text-4xl lg:text-5xl tracking-tighter`}
          >
            Kontakt
          </h2>
          <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
            Skontaktuj się z nami, aby uzyskać więcej informacji.
          </p>
          <div className="mt-8">
            <p className="flex items-center gap-2 mb-4">
              <FaMapMarkerAlt /> ul. Przykładowa 123, 44-200 Rybnik
            </p>
            <p className="flex items-center gap-2 mb-4">
              <FaPhone /> +48 123 456 789
            </p>
            <p className="flex items-center gap-2 mb-8">
              <FaEnvelope /> kontakt@isprybnik.pl
            </p>
            <form
              action="/submit_contact_form"
              method="post"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                required
                className="p-4 rounded border"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-4 rounded border"
              />
              <textarea
                name="message"
                placeholder="Wiadomość"
                required
                className="p-4 rounded border"
              ></textarea>
              <button
                type="submit"
                className={`p-4 rounded ${linkContrastStyles}`}
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>

        <div className="image">
          <img
            src="/assets/studentka.png"
            alt="Kontakt"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
