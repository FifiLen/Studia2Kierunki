"use client";
import React from "react";
import { useUserPreferences } from "./UserPreferencesContext";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { IoMdContacts } from "react-icons/io";
import { CgArrowTopRightO } from "react-icons/cg";

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
    : "text-white hover:text-blue-100";
  const inputBgStyles = highContrast ? "bg-[#333]" : "bg-gray-50";

  return (
    <section className="w-full bg-white/90">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="relative w-full  ">
          <Image
            src="/assets/kontakt.jpg"
            fill
            alt="kontakt"
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
            <p className=" mb-14">
              Masz pytania dotyczące studiów podyplomowych? Chcesz dowiedzieć
              się więcej o programie, procesie rekrutacji lub opłatach?
              Skontaktuj się z nami!
            </p>
            <form>
              <div className="mb-4 grid grid-cols-2 max-w-full gap-6">
                <div>
                  <label
                    className={`block mb-2 font-semibold ${textContrastStyles}`}
                    htmlFor="name"
                  >
                    Imię<span className=" text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jan"
                    className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 font-semibold ${textContrastStyles}`}
                    htmlFor="name"
                  >
                    Nazwisko<span className=" text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="surname"
                    placeholder="Kowalski"
                    className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className={`block mb-2 font-semibold ${textContrastStyles}`}
                  htmlFor="email"
                >
                  Email<span className=" text-blue-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="jankowalski@mail.com"
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                />
              </div>
              <div className="mb-4">
                <div className=" flex justify-between">
                  <label
                    className={`block mb-2 font-semibold ${textContrastStyles}`}
                    htmlFor="message"
                  >
                    Twoja wiadomość
                  </label>
                  <p className=" text-sm text-zinc-400">
                    Maksymalnie 500 znaków
                  </p>
                </div>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Jak możemy Ci pomóc?"
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-fit py-3 px-6 flex gap-2 items-center font-medium rounded-md ${linkContrastStyles} bg-blue-500`}
              >
                Wyślij wiadomość
                <CgArrowTopRightO />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
