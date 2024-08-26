import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
  MdOutlineDocumentScanner,
  MdSchool,
  MdSchedule,
  MdMoneyOff,
  MdVerifiedUser,
  MdContactSupport,
  MdAttachMoney,
  MdEventNote,
} from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { RiFileUserLine } from "react-icons/ri";
import Link from "next/link";
import { LuPenLine } from "react-icons/lu";
import { TfiFiles } from "react-icons/tfi";

const Faq = () => {
  return (
    <div id="faq" className="bg-gray-200 py-12 md:py-28">
      <div className="max-w-full mx-auto px-4 lg:px-20">
        <FaRegQuestionCircle className="w-10 h-10 mb-5" aria-hidden="true" />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter">
              Znajdź odpowiedzi na swoje&nbsp;pytania
            </h2>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-600">
              Witamy w&nbsp;sekcji FAQ poświęconej studiom podyplomowym! Tutaj
              znajdziesz odpowiedzi na&nbsp;najczęściej zadawane pytania
              dotyczące rekrutacji, programu studiów, opłat, organizacji zajęć
              i&nbsp;innych kwestii związanych z&nbsp;kształceniem podyplomowym
              na&nbsp;naszej&nbsp;uczelni.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-3 mt-6 md:mt-0">
            <Link
              aria-label="Przeglądaj kierunki"
              href="/oferta"
              className="px-3 py-2 bg-[#9E5AE2] text-white font-medium rounded-md"
            >
              Przeglądaj&nbsp;kierunki
            </Link>
            <Link
              aria-label="Zadaj nam pytanie"
              href="/kontakt"
              className="px-3 py-2 bg-white text-zinc-700 font-medium rounded-md"
            >
              Zadaj nam&nbsp;pytanie
            </Link>
          </div>
        </div>
        <h4 className="mt-12 md:mt-20 mb-10 text-4xl text-white bg-[#9E5AE2] w-fit p-1 px-2 rounded-md font-medium tracking-tighter">
          Rekrutacja
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 text-gray-600">
          <div>
            <MdOutlineDocumentScanner
              className="w-7 h-7 mb-2"
              aria-hidden="true"
            />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Mogę dosłać dokumenty po&nbsp;wyznaczonym&nbsp;terminie?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Nie, WSH-E daje nam określony czas, do&nbsp;którego musimy mieć
              przygotowane Państwa dokumenty. Do&nbsp;tego czasu również są
              nadawane numery albumów, które są niezbędne aby&nbsp;móc Państwa
              zakwalifikować na&nbsp;studia – Po&nbsp;wyznaczonym terminie WSH-E
              nie&nbsp;generuje dodatkowych numerów albumów, co&nbsp;wiąże się
              z&nbsp;tym, że&nbsp;zgłoszenia nie są&nbsp;przyjmowane.
            </p>
          </div>

          <div>
            <MdSchool className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Czy mogę kierunek, który jest trzysemetralny skończyć
              w&nbsp;dwa&nbsp;semestry?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Tak, pod warunkiem, że&nbsp;zrealizujesz praktyki, które
              są&nbsp;przewidziane na&nbsp;semestr trzeci, w&nbsp;trakcie
              trwania dwóch semestrów.
            </p>
          </div>

          <div>
            <IoIosPaper className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Jak mogę potwierdzić kopię dyplomu za&nbsp;zgodność
              z&nbsp;oryginałem?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Zgodność potwierdza się wpisując na&nbsp;kopii zdanie:
              „Potwierdzam za&nbsp;zgodność z&nbsp;oryginałem”
              i&nbsp;potwierdzając to&nbsp;własnoręcznym&nbsp;podpisem. Taka
              forma jest akceptowana przez&nbsp;WSH-E.
            </p>
          </div>
          <div>
            <MdAttachMoney className="w-7 h-7 mb-2" aria-hidden="true" />

            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Czy mogę skorzystać ze&nbsp;zniżki na&nbsp;drugi&nbsp;kierunek?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Tak, można skorzystać ze&nbsp;zniżki wybierając kierunki
              z&nbsp;zakładki „oferta” na&nbsp;naszej stronie internetowej.
              Zniżkę 50&nbsp;% na&nbsp;drugi tańszy kierunek należy uwzględnić
              w&nbsp;płatnościach.
            </p>
          </div>
          <div>
            <MdVerifiedUser className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Mogę wysłać kopię dyplomu ze&nbsp;studiów&nbsp;doktoranckich?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Niestety nie, WSH-E akceptuje jedynie kopię dyplomów
              I&nbsp;lub&nbsp;II&nbsp;stopnia.
            </p>
          </div>

          <div>
            <HiOutlineClipboardCheck
              className="w-7 h-7 mb-2"
              aria-hidden="true"
            />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Czy kierunek, który ma&nbsp;2&nbsp;semestry mogę skończyć
              w&nbsp;jeden?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Absolutnie nie, kierunek dwusemestralny
              nie&nbsp;podlega&nbsp;skróceniom.
            </p>
          </div>
        </div>

        <h4 className="mt-12 md:mt-20 mb-10 text-4xl text-white bg-[#9E5AE2] w-fit p-1 px-2 rounded-md font-medium tracking-tighter">
          Praktyki
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 text-gray-600">
          <div>
            <LuPenLine className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Kto powinien podpisać arkusz&nbsp;obserwacji?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Praktykant prowadzi zajęcia, które obserwuje Opiekun Praktyk
              i&nbsp;ocenia praktykanta. Tak więc podpisuje dokument
              opiekun&nbsp;praktyk.
            </p>
          </div>

          <div>
            <RiFileUserLine className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Do którego modułu muszę dołączyć arkusz&nbsp;obserwacji?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Arkusz obserwacji dołącza się do&nbsp;modułu, w&nbsp;którym
              praktykant ma&nbsp;obowiązek samodzielnego prowadzenia&nbsp;zajęć.
            </p>
          </div>

          <div>
            <MdSchedule className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Do kiedy muszę oddać&nbsp;praktyki?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Praktyki oddajemy następująco dla&nbsp;naboru: Październikowego:
              30&nbsp;marzec następnego roku marcowego: 30&nbsp;stycznia
              następnego&nbsp;roku.
            </p>
          </div>
          <div>
            <MdEventNote className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Co oznacza termin oddania/rozliczenia&nbsp;praktyk?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Oznacza to, że&nbsp;jeśli termin rozliczenia jest przykładowo
              do&nbsp;30&nbsp;marca to&nbsp;dokumenty maksymalnie
              do&nbsp;30&nbsp;marca muszą być w&nbsp;dziekanacie aby&nbsp;móc
              rozliczyć się z&nbsp;praktyk w&nbsp;terminie.
            </p>
          </div>
          <div>
            <TfiFiles className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Dlaczego muszę wszystkie dokumenty z&nbsp;praktyk wysłać
              w&nbsp;komplecie?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Przez wzgląd na&nbsp;ilość słuchaczy bardzo ważne jest
              by&nbsp;dokumenty z&nbsp;praktyk były wysyłane w&nbsp;komplecie
              zgodnie z&nbsp;plikiem „zaliczenie praktyk specjalistycznych”.
              Państwa dokumenty są&nbsp;wysyłane do&nbsp;WSH-E i&nbsp;tam
              sprawdzane pod&nbsp;względem merytorycznym – im&nbsp;więcej będzie
              braków tym dłużej będziecie Państwo czekać na&nbsp;świadectwo.
            </p>
          </div>

          <div>
            <MdContactSupport className="w-7 h-7 mb-2" aria-hidden="true" />
            <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
              Nie mam odpowiedzi czy&nbsp;wszystko w&nbsp;porządku z&nbsp;moimi
              dokumentami z&nbsp;praktyk, co to&nbsp;oznacza?
            </h4>
            <p className="mt-2 text-base md:text-lg">
              Najczęściej oznacza to, że&nbsp;WSH-E sprawdziło dokumenty
              i&nbsp;nie ma do&nbsp;nich&nbsp;uwag. Uwagi są&nbsp;wysyłane
              do&nbsp;słuchaczy mailowo. Zawsze w&nbsp;tym przypadku jednak
              warto się z&nbsp;nami skontaktować i&nbsp;dopytać.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
