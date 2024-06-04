"use client";
import React from "react";
import { useUserPreferences } from "./UserPreferencesContext";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { IoMdContacts } from "react-icons/io";

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
    <section className="w-full bg-white/90">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="relative w-full  ">
          <Image
            src="/assets/kontakt.jpg"
            fill
            alt="Rekrutacja 2024/2025"
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Column */}
        <div className=" px-20 py-20 flex flex-col">
          <h4 className="text-3xl font-semibold text-blue-600 tracking-[-0.2rem] flex gap-2 items-center mb-3">
            <IoMdContacts />
            Kontakt
          </h4>
          <div className={``}>
            <h3
              className={`text-5xl tracking-tighter font-semibold mb-4 ${textContrastStyles}`}
            >
              Skontaktuj się z nami
            </h3>
            <p className=" mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              repellat natus architecto doloribus rem exercitationem tempora
              nemo explicabo quisquam unde!
            </p>
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
      </div>
    </section>
  );
};

export default Contact;
