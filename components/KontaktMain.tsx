"use client";
import React from "react";
import { useUserPreferences } from "./UserPreferencesContext";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-black";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";
  const linkContrastStyles = highContrast
    ? "text-[#FFFF00] hover:text-yellow-500"
    : "text-blue-500 hover:text-blue-700";
  const inputBgStyles = highContrast ? "bg-[#333]" : "bg-gray-200";

  return (
    <div
      className={`py-16 sm:py-24 lg:py-32 ${bgContrastStyles} ${fontSizeClasses[fontSize]}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold ${textContrastStyles} sm:text-5xl lg:text-6xl tracking-tighter`}
        >
          Kontakt
        </h2>
        <p className={`mt-4 leading-6 ${textContrastStyles} max-w-2xl`}>
          Skontaktuj się z nami, aby uzyskać więcej informacji lub odpowiedzi na
          Twoje pytania.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`shadow-lg rounded-lg p-6 ${bgContrastStyles}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${textContrastStyles}`}>
              Dane kontaktowe
            </h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt size={24} className="mr-4 text-blue-500" />
              <p className={textContrastStyles}>
                123 Ulica Główna, 00-001 Miasto
              </p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt size={24} className="mr-4 text-green-500" />
              <p className={textContrastStyles}>+48 123 456 789</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope size={24} className="mr-4 text-red-500" />
              <p className={textContrastStyles}>kontakt@uczelni.pl</p>
            </div>
          </div>
          <div className={`shadow-lg rounded-lg p-6 ${bgContrastStyles}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${textContrastStyles}`}>
              Formularz kontaktowy
            </h3>
            <form>
              <div className="mb-4">
                <label
                  className={`block mb-2 ${textContrastStyles}`}
                  htmlFor="name"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block mb-2 ${textContrastStyles}`}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block mb-2 ${textContrastStyles}`}
                  htmlFor="message"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-md ${linkContrastStyles} bg-blue-500 hover:bg-blue-600`}
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>
        {/* <div className="mt-10">
          <h3 className={`text-2xl font-semibold mb-4 ${textContrastStyles}`}>
            Nasza lokalizacja
          </h3>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Uczelnia Lokalizacja"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019616842122!2d144.96305831531657!3d-37.81362797975169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a5b376de3f0!2sVictoria%20Market%20Bistro!5e0!3m2!1sen!2sus!4v1612315686114!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
