"use client";
import React from "react";
import { useUserPreferences } from "@/components/providers/UserPreferencesContext";

const TermsOfServicePage = () => {
  const { highContrast } = useUserPreferences();

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-gray-900";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";

  return (
    <section
      id="terms-of-service"
      className={`w-full py-12 md:py-28 ${bgContrastStyles}`}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-8 ${textContrastStyles}`}
        >
          Regulamin
        </h1>
        <div
          className={`text-base md:text-lg leading-7 ${textContrastStyles} space-y-6`}
        >
          <p>
            Niniejszy regulamin określa zasady korzystania z serwisu
            internetowego [Nazwa serwisu], dostępnego pod adresem [Adres
            serwisu].
          </p>
          <h2 className="text-2xl font-semibold">1. Postanowienia ogólne</h2>
          <p>
            1. Właścicielem serwisu jest [Nazwa firmy] z siedzibą w [Adres
            siedziby], NIP: [Numer NIP], REGON: [Numer REGON].
          </p>
          <p>
            2. Serwis działa na zasadach określonych w niniejszym regulaminie.
          </p>
          <p>
            3. Regulamin określa rodzaje i zakres usług świadczonych drogą
            elektroniczną przez Serwis, zasady świadczenia tych usług, warunki
            zawierania i rozwiązywania umów o świadczenie usług drogą
            elektroniczną oraz tryb postępowania reklamacyjnego.
          </p>
          <h2 className="text-2xl font-semibold">2. Definicje</h2>
          <p>
            1. Użytkownik - osoba fizyczna, która ukończyła co najmniej 13. rok
            życia i posiada pełną zdolność do czynności prawnych, a także osoba
            prawna lub jednostka organizacyjna nieposiadająca osobowości
            prawnej, której przepisy prawa przyznają zdolność prawną.
          </p>
          <p>
            2. Usługi - usługi świadczone drogą elektroniczną przez Serwis na
            rzecz Użytkowników w zakresie i na warunkach określonych w
            niniejszym Regulaminie.
          </p>
          <h2 className="text-2xl font-semibold">3. Rodzaje i zakres usług</h2>
          <p>
            1. Serwis umożliwia korzystanie z następujących usług:
            <ul className="list-disc list-inside ml-4">
              <li>przeglądanie treści zamieszczonych w Serwisie,</li>
              <li>rejestrację i prowadzenie konta Użytkownika,</li>
              <li>korzystanie z formularzy kontaktowych.</li>
            </ul>
          </p>
          <h2 className="text-2xl font-semibold">
            4. Warunki świadczenia usług
          </h2>
          <p>
            1. Do korzystania z usług Serwisu niezbędne jest posiadanie
            urządzenia z dostępem do sieci Internet i przeglądarki internetowej
            obsługującej JavaScript oraz pliki cookies.
          </p>
          <p>
            2. Użytkownik zobowiązany jest do korzystania z Serwisu zgodnie z
            jego przeznaczeniem oraz powstrzymywania się od działań mogących
            zakłócić jego funkcjonowanie.
          </p>
          <h2 className="text-2xl font-semibold">
            5. Zawarcie umowy i rejestracja
          </h2>
          <p>
            1. Umowa o świadczenie usług drogą elektroniczną zostaje zawarta z
            chwilą rozpoczęcia korzystania z Serwisu przez Użytkownika.
          </p>
          <p>2. Rejestracja w Serwisie jest dobrowolna i bezpłatna.</p>
          <h2 className="text-2xl font-semibold">
            6. Postępowanie reklamacyjne
          </h2>
          <p>
            1. Użytkownik ma prawo składać reklamacje w sprawach dotyczących
            usług świadczonych przez Serwis.
          </p>
          <p>
            2. Reklamacje należy składać na adres email: [Adres email do
            reklamacji].
          </p>
          <h2 className="text-2xl font-semibold">7. Postanowienia końcowe</h2>
          <p>
            1. Regulamin wchodzi w życie z dniem opublikowania na stronie
            Serwisu.
          </p>
          <p>
            2. Administrator zastrzega sobie prawo do wprowadzania zmian w
            Regulaminie w dowolnym czasie. Wszelkie zmiany będą publikowane na
            tej stronie.
          </p>
          <p>
            3. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie
            mają przepisy prawa polskiego.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
