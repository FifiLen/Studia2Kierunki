"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiUserAdd } from "react-icons/ti";

import { CgArrowRightO, CgArrowTopRightO } from "react-icons/cg";
import { useUserPreferences } from "@/components/UserPreferencesContext";
import { PiGavel } from "react-icons/pi";
import { MdAccessTime, MdAttachMoney, MdEventNote } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { GoTrophy } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GiFootsteps } from "react-icons/gi";

const RecruitmentPage = () => {
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
    <section id="contact" className="w-full bg-white/90">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="relative w-full">
          <Image
            src="/assets/rekrutacja.jpg"
            fill
            alt="kontakt"
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Column */}
        <div className="px-8 md:px-20 py-20 flex flex-col">
          <h4 className="text-3xl font-semibold text-blue-600 tracking-[-0.2rem] flex gap-2 items-center mb-3">
            <TiUserAdd />
            Proces Rekrutacji
          </h4>
          <div className="">
            <h3
              className={`text-5xl tracking-tighter font-semibold mb-4 ${textContrastStyles}`}
            >
              Wszystkie niezbędne informacje
            </h3>
            <p className="mb-8 mt-4 text-lg leading-7 text-gray-600">
              Rekrutacja na nasze studia podyplomowe jest prostym i przejrzystym
              procesem. Poniżej znajdziesz szczegółową instrukcję krok po kroku,
              która pomoże Ci przejść przez cały proces bez problemów. Wiemy
              jednak, że zawsze mogą pojawić się pytania. Zachęcamy zatem do
              kontaktu poprzez poniższy formularz. Nasz zespół jest gotowy, aby
              odpowiedzieć na wszystkie Twoje wątpliwości i udzielić niezbędnej
              pomocy.
            </p>
          </div>
          <form>
            <div className="mb-4 grid grid-cols-2 max-w-full gap-6">
              <div>
                <label
                  className={`block mb-2 font-semibold ${textContrastStyles}`}
                  htmlFor="name"
                >
                  Imię<span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jan"
                  aria-required="true"
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                />
              </div>
              <div>
                <label
                  className={`block mb-2 font-semibold ${textContrastStyles}`}
                  htmlFor="surname"
                >
                  Nazwisko<span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  placeholder="Kowalski"
                  aria-required="true"
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className={`block mb-2 font-semibold ${textContrastStyles}`}
                htmlFor="email"
              >
                Email<span className="text-blue-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="jankowalski@mail.com"
                aria-required="true"
                className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <label
                  className={`block mb-2 font-semibold ${textContrastStyles}`}
                  htmlFor="message"
                >
                  Twoja wiadomość
                </label>
                <p className="text-sm text-zinc-400">Maksymalnie 500 znaków</p>
              </div>
              <textarea
                id="message"
                rows={4}
                placeholder="Jak możemy Ci pomóc?"
                className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
              ></textarea>
            </div>
            <button
              aria-label="Wyślij wiadomość"
              type="submit"
              className={`w-fit py-3 px-6 flex gap-2 items-center font-medium rounded-md ${linkContrastStyles} bg-blue-500`}
            >
              Wyślij wiadomość
              <CgArrowTopRightO />
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-200 py-28">
        <div className="max-w-full mx-auto px-6 lg:px-20">
          <GiFootsteps className="w-14 h-14 mb-5" aria-hidden="true" />
          <div className="flex justify-between">
            <div className="w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-4xl tracking-tighter">
                Zobacz jak krok po kroku zapisać się na&nbsp;studia podyplomowe
              </h2>
              <p className="mt-4 text-lg leading-7 text-gray-600">
                Rekrutacja na nasze studia podyplomowe jest prostym i
                przejrzystym procesem. Aby dołączyć do grona naszych studentów,
                należy wykonać kilka prostych kroków. Przygotowaliśmy
                szczegółową instrukcję krok po kroku, która pomoże Ci przejść
                przez cały proces bez żadnych problemów.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-end gap-3">
              <Link
                aria-label="Dowiedz się więcej z FAQ"
                href="/oferta"
                className="px-3 py-2 bg-[#9E5AE2] text-white font-medium rounded-md"
              >
                Zapoznaj się z kierunkami
              </Link>
              <Link
                aria-label="Zadaj nam pytanie"
                href="/kontakt"
                className="px-3 py-2 bg-white text-zinc-700 font-medium rounded-md"
              >
                Zadaj nam pytanie
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 lg:gap-32 mt-20">
            <div className="">
              <div className="flex items-center gap-2 ">
                <div
                  className=" flex items-center justify-center border-[1.5px] border-black h-7 w-7 rounded-full mb-2"
                  aria-hidden="true"
                >
                  <p className="font-semibold">1</p>
                </div>
                <Link
                  href={"/"}
                  className=" bg-[#9E5AE2] py-1 px-2 mb-2 text-white rounded-xl flex items-center gap-2"
                >
                  formularz rekrutacyjny
                  <CgArrowTopRightO />
                </Link>
              </div>
              <h4 className="font-medium tracking-tight text-2xl">
                Wypełnij formularz zgłoszeniowy
              </h4>
              <p className="mt-2">
                Na naszej stronie internetowej znajdziesz formularz
                zgłoszeniowy, który należy wypełnić. Upewnij się, że podane
                informacje są prawidłowe i kompletne.
              </p>
            </div>
            <div className="">
              <div
                className=" flex items-center justify-center border-[1.5px] border-black h-7 w-7 rounded-full mb-2"
                aria-hidden="true"
              >
                <p className="font-semibold">2</p>
              </div>
              <h4 className="font-medium tracking-tight text-2xl">
                Przygotuj wymagane dokumenty
              </h4>
              <p className="mt-2">
                Do formularza zgłoszeniowego należy dołączyć kopię dyplomu
                ukończenia studiów wyższych, CV oraz list motywacyjny. Upewnij
                się, że wszystkie dokumenty są aktualne i przygotowane zgodnie
                z&nbsp;naszymi wymaganiami.
              </p>
            </div>
            <div className="">
              <div
                className=" flex items-center justify-center border-[1.5px] border-black h-7 w-7 rounded-full mb-2"
                aria-hidden="true"
              >
                <p className="font-semibold">3</p>
              </div>
              <h4 className="font-medium tracking-tight text-2xl">
                Złożenie dokumentów
              </h4>
              <p className="mt-2">
                Wszystkie dokumenty można przesłać drogą elektroniczną na adres
                email: nowekwalifikacjerybnik@gmail.com lub złożyć osobiście w
                naszej siedzibie przy ul. Magnolii 25, 44-207 Rybnik.
              </p>
            </div>
            <div className="">
              <div
                className=" flex items-center justify-center border-[1.5px] border-black h-7 w-7 rounded-full mb-2"
                aria-hidden="true"
              >
                <p className="font-semibold">4</p>
              </div>
              <h4 className="font-medium tracking-tight text-2xl">
                Opłata rekrutacyjna
              </h4>
              <p className="mt-2">
                Po złożeniu dokumentów, należy uiścić opłatę rekrutacyjną na
                podane konto bankowe. Szczegółowe informacje o płatności
                otrzymasz w mailu potwierdzającym zgłoszenie.
              </p>
            </div>
            <div className="">
              <div
                className=" flex items-center justify-center border-[1.5px] border-black h-7 w-7 rounded-full mb-2"
                aria-hidden="true"
              >
                <p className="font-semibold">5</p>
              </div>
              <h4 className="font-medium tracking-tight text-2xl">
                Potwierdzenie przyjęcia
              </h4>
              <p className="mt-2">
                Po pozytywnym rozpatrzeniu zgłoszenia, otrzymasz oficjalne
                potwierdzenie przyjęcia na studia podyplomowe.
              </p>
            </div>
            <div className="">
              <div
                className=" flex items-center justify-center border-[1.5px] border-black h-7 w-7 rounded-full mb-2"
                aria-hidden="true"
              >
                <p className="font-semibold">6</p>
              </div>
              <h4 className="font-medium tracking-tight text-2xl">
                Pojawił się problem?
              </h4>
              <p className="mt-2">
                Jeżeli masz jakiekolwiek pytania lub wątpliwości dotyczące
                procesu rekrutacji, zapraszamy do&nbsp;kontaktu telefonicznego
                <br />
                pod numerem{" "}
                <span className="font-semibold">+48 123 456 789</span> <br />
                lub mailowego:{" "}
                <span className=" font-semibold">
                  nowekwalifikacjerybnik@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RecruitmentPage;
