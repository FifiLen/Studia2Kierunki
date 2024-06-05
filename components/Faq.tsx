import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiGavel } from "react-icons/pi";
import { MdAccessTime, MdAttachMoney, MdEventNote } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import Link from "next/link";
import { TbReportMoney } from "react-icons/tb";

const Faq = () => {
  return (
    <div className="bg-gray-200 py-12 md:py-28">
      <div className="max-w-full mx-auto px-4 lg:px-20">
        <FaRegQuestionCircle className="w-10 h-10 mb-5" aria-hidden="true" />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter">
              Znajdź odpowiedzi na swoje pytania
            </h2>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-600">
              Witamy w sekcji FAQ poświęconej studiom podyplomowym! Tutaj
              znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące
              rekrutacji, programu studiów, opłat, organizacji zajęć i innych
              kwestii związanych z kształceniem podyplomowym na naszej uczelni.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-3 mt-6 md:mt-0">
            <Link
              aria-label="Dowiedz się więcej z FAQ"
              href="/faq"
              className="px-3 py-2 bg-[#9E5AE2] text-white font-medium rounded-md"
            >
              Dowiedz się więcej z FAQ
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 mt-12 md:mt-20">
          <div>
            <PiGavel className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium tracking-tight text-xl md:text-2xl">
              Jakie są warunki rekrutacji na&nbsp;studia podyplomowe?
            </h4>
            <p className="mt-2 text-base">
              Warunki rekrutacji na studia podyplomowe różnią się w zależności
              od kierunku studiów. Szczegółowe informacje o warunkach rekrutacji
              na poszczególne kierunki znajdziesz na stronie internetowej
              uczelni.
            </p>
          </div>
          <div>
            <MdAttachMoney className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium tracking-tight text-xl md:text-2xl">
              Ile kosztują studia podyplomowe?
            </h4>
            <p className="mt-2 text-base">
              Ceny studiów podyplomowych różnią się w zależności od kierunku
              studiów. Szczegółowe informacje o opłatach za studia podyplomowe
              na poszczególne kierunki znajdziesz na stronie internetowej
              uczelni.
            </p>
          </div>
          <div>
            <MdAccessTime className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium tracking-tight text-xl md:text-2xl">
              Jak długo trwają studia podyplomowe?
            </h4>
            <p className="mt-2 text-base">
              Studia podyplomowe trwają od dwóch do czterech semestrów.
              Szczegółowe informacje o długości trwania studiów podyplomowych na
              poszczególne kierunki znajdziesz na stronie internetowej uczelni.
            </p>
          </div>
          <div>
            <MdEventNote className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium tracking-tight text-xl md:text-2xl">
              Jakie są formy prowadzenia zajęć na studiach podyplomowych?
            </h4>
            <p className="mt-2 text-base">
              Zajęcia na studiach podyplomowych prowadzone są online.
              Szczegółowe informacje o formach prowadzenia zajęć na poszczególne
              kierunki znajdziesz na stronie internetowej uczelni.
            </p>
          </div>
          <div>
            <TbReportMoney className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium tracking-tight text-xl md:text-2xl">
              Ile wynosi opłata wpisowa?
            </h4>
            <p className="mt-2 text-base">
              Opłata wpisowa na studia podyplomowe wynosi 200 zł. Jest to
              jednorazowa opłata, która musi zostać uiszczona przed rozpoczęciem
              studiów. Opłata wpisowa pokrywa koszty związane z rekrutacją,
              administracją i organizacją studiów.
            </p>
          </div>
          <div>
            <GoTrophy className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium tracking-tight text-xl md:text-2xl">
              Co daje ukończenie studiów podyplomowych?
            </h4>
            <p className="mt-2 text-base">
              Ukończenie studiów podyplomowych daje możliwość zdobycia nowych
              kwalifikacji zawodowych, pogłębienia wiedzy i umiejętności w
              wybranej dziedzinie, a także awansu zawodowego.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
