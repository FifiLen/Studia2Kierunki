"use client";
import React from "react";
import { useUserPreferences } from "@/components/UserPreferencesContext";

const PrivacyPolicyPage = () => {
  const { highContrast } = useUserPreferences();

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-gray-900";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";

  return (
    <section
      id="privacy-policy"
      className={`w-full py-12 md:py-28 ${bgContrastStyles}`}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-8 ${textContrastStyles}`}
        >
          Polityka prywatności
        </h1>
        <div
          className={`text-base md:text-lg leading-7 ${textContrastStyles} space-y-6`}
        >
          <p>
            Niniejsza polityka prywatności określa zasady przetwarzania i
            ochrony danych osobowych przekazanych przez Użytkowników w związku z
            korzystaniem przez nich z usług oferowanych poprzez Serwis.
          </p>
          <h2 className="text-2xl font-semibold">1. Postanowienia ogólne</h2>
          <p>
            1. Administratorem danych osobowych zawartych w serwisie jest [Nazwa
            firmy] z siedzibą w [Adres siedziby].
          </p>
          <p>
            2. Dane osobowe zbierane przez Administratora za pośrednictwem
            serwisu są przetwarzane zgodnie z Rozporządzeniem Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
            sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (RODO).
          </p>
          <h2 className="text-2xl font-semibold">
            2. Cele i zakres zbierania danych
          </h2>
          <p>
            1. Dane osobowe Użytkowników są zbierane w celu:
            <ul className="list-disc list-inside ml-4">
              <li>realizacji usług dostępnych w Serwisie,</li>
              <li>obsługi zapytań i zgłoszeń Użytkowników,</li>
              <li>
                marketingu bezpośredniego własnych produktów lub usług
                Administratora.
              </li>
            </ul>
          </p>
          <h2 className="text-2xl font-semibold">3. Prawo dostępu do danych</h2>
          <p>
            1. Użytkownik ma prawo dostępu do treści swoich danych osobowych
            oraz ich poprawiania.
          </p>
          <p>
            2. Każdy Użytkownik ma prawo do wniesienia sprzeciwu wobec
            przetwarzania jego danych osobowych.
          </p>
          <h2 className="text-2xl font-semibold">4. Udostępnienie danych</h2>
          <p>
            1. Dane osobowe Użytkowników mogą być udostępniane podmiotom
            upoważnionym do ich otrzymania na mocy obowiązujących przepisów
            prawa.
          </p>
          <p>
            2. Dane osobowe Użytkowników mogą być przekazywane podmiotom trzecim
            współpracującym z Administratorem w zakresie niezbędnym do
            realizacji usług dostępnych w Serwisie.
          </p>
          <h2 className="text-2xl font-semibold">5. Zabezpieczenie danych</h2>
          <p>
            1. Administrator stosuje odpowiednie środki techniczne i
            organizacyjne zapewniające ochronę przetwarzanych danych osobowych
            odpowiednią do zagrożeń oraz kategorii danych objętych ochroną.
          </p>
          <h2 className="text-2xl font-semibold">6. Postanowienia końcowe</h2>
          <p>
            1. Administrator zastrzega sobie prawo do wprowadzania zmian w
            polityce prywatności w dowolnym czasie.
          </p>
          <p>
            2. Wszelkie zmiany polityki prywatności będą publikowane na tej
            stronie.
          </p>
          <p>
            3. W razie dodatkowych pytań dotyczących polityki prywatności,
            prosimy o kontakt za pośrednictwem formularza kontaktowego w
            Serwisie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
