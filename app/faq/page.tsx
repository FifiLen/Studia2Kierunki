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
              aria-label="Przeglądaj kierunki"
              href="/oferta"
              className="px-3 py-2 bg-[#9E5AE2] text-white font-medium rounded-md"
            >
              Przeglądaj kierunki
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
        <h4 className="mt-12 md:mt-20 mb-10 text-4xl text-white bg-[#9E5AE2] w-fit p-1 px-2 rounded-md font-medium tracking-tighter">
          Rekrutacja
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 text-gray-600">
          <div>
            <PiGavel className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Mogę dosłać dokumenty po wyznaczonym terminie?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Nie, WSH-E daje nam określony czas, do którego musimy mieć
              przygotowane Państwa dokumenty. Do tego czasu również są nadawane
              numery albumów, które są niezbędne aby móc Państwa zakwalifikować
              na studia – Po wyznaczonym terminie WSH-E nie generuje dodatkowych
              numerów albumów, co wiąże się z tym, że zgłoszenia nie są
              przyjmowane.
            </p>
          </div>

          <div>
            <TbReportMoney className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Czy mogę kierunek, który jest trzysemetralny skończyć w dwa
              semestry?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Tak, pod warunkiem, że wraz z dokumentami rekrutacyjnymi zostanie
              wysłane zaświadczenie o zatrudnieniu jako nauczyciel. Na podstawie
              tego zaświadczenia wchodzicie Państwo w indywidualny tryb
              nauczania i dzięki temu kierunek może być „skrócony” o jeden
              semestr.
            </p>
          </div>

          <div>
            <MdAccessTime className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Jak mogę potwierdzić kopię dyplomu za zgodność z oryginałem?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Zgodność potwierdza się wpisując na kopii zdanie: „Potwierdzam za
              zgodność z oryginałem” i potwierdzając to własnoręcznym podpisem.
              Taka forma jest akceptowana przez WSH-E.
            </p>
          </div>
          <div>
            <MdEventNote className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Czy mogę skorzystać ze zniżki na drugi kierunek?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Tak, można skorzystać ze zniżki wybierając kierunki z zakładki
              „oferta” na naszej stronie internetowej. Zniżkę 10 % na drugi
              tańszy kierunek należy uwzględnić w płatnościach.
            </p>
          </div>
          <div>
            <MdAttachMoney className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Mogę wysłać kopię dyplomu ze studiów doktoranckich?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Niestety nie, WSH-E akceptuje jedynie kopię dyplomów I lub II
              stopnia.
            </p>
          </div>

          <div>
            <GoTrophy className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Czy kierunek, który ma 2 semestry mogę skończyć w jeden?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Absolutnie nie, kierunek dwusemestralny nie podlega skróceniom.
            </p>
          </div>
        </div>

        <h4 className="mt-12 md:mt-20 mb-10 text-4xl text-white bg-[#9E5AE2] w-fit p-1 px-2 rounded-md font-medium tracking-tighter">
          Praktyki
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 text-gray-600">
          <div>
            <PiGavel className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Kto powinien podpisać arkusz obserwacji?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Praktykant prowadzi zajęcia, które obserwuje Opiekun Praktyk i
              ocenia praktykanta. Tak więc podpisuje dokument opiekun praktyk.
            </p>
          </div>

          <div>
            <TbReportMoney className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Do którego modułu muszę dołączyć arkusz obserwacji?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Arkusz obserwacji dołącza się do modułu, w którym praktykant ma
              obowiązek samodzielnego prowadzenia zajęć.
            </p>
          </div>

          <div>
            <MdAccessTime className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Do kiedy muszę oddać praktyki?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Praktyki oddajemy następująco dla naboru: Październikowego: 30
              marzec następnego roku marcowego: 30 stycznia następnego roku.
            </p>
          </div>
          <div>
            <MdEventNote className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Co oznacza termin oddania/rozliczenia praktyk?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Oznacza to, że jeśli termin rozliczenia jest przykładowo do 30
              marca to dokumenty maksymalnie do 30 marca muszą być w dziekanacie
              aby móc rozliczyć się z praktyk w terminie.
            </p>
          </div>
          <div>
            <MdAttachMoney className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Dlaczego muszę wszystkie dokumenty z praktyk wysłać w komplecie?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Przez wzgląd na ilość słuchaczy bardzo ważne jest by dokumenty z
              praktyk były wysyłane w komplecie zgodnie z plikiem „zaliczenie
              praktyk specjalistycznych”. Państwa dokumenty są wysyłane do WSH-E
              i tam sprawdzane pod względem merytorycznym – im więcej będzie
              braków tym dłużej będziecie Państwo czekać na świadectwo.
            </p>
          </div>

          <div>
            <GoTrophy className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Nie mam odpowiedzi czy wszystko w porządku z moimi dokumentami z
              praktyk, co to oznacza?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Najczęściej oznacza to, że WSH-E sprawdziło dokumenty i nie ma do
              nich uwag. Uwagi są wysyłane do słuchaczy mailowo. Zawsze w tym
              przypadku jednak warto się z nami skontaktować i dopytać.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
