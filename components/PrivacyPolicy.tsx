"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 tracking-tight">
        Polityka Prywatności
      </h1>
      <p className="mb-6">
        Szanowni Państwo, bezpieczeństwo Waszych danych oraz przejrzystość zasad
        ich przetwarzania są dla nas bardzo ważne, dlatego zachęcamy do
        zapoznania się z naszą Polityką Prywatności.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>JAKIE DANE GROMADZIMY?</AccordionTrigger>
          <AccordionContent>
            <p>
              Jako administrator danych osobowych informujemy, że przetwarzamy
              dane osobowe, które są zbierane w ramach korzystania z naszej
              strony internetowej, serwisów i innych funkcjonalności
              udostępnianych przez nas na stronach internetowych, w tym również
              zapisywanych w plikach cookies.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            KTO BĘDZIE ADMINISTRATOREM TWOICH DANYCH?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Administratorem Państwa danych będzie:
              <ul className="list-disc pl-5 mt-2">
                <li>NODN</li>
                <li>
                  BiS Groups sp.z o.o.z siedzibą w Rybniku, przy ulicy Rudzkiej
                  13c. 44-200 Rybnik
                </li>
              </ul>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            JAKI MAMY CEL W PRZETWARZANIU PAŃSTWA DANYCH OSOBOWYCH?
          </AccordionTrigger>
          <AccordionContent>
            <p>Przetwarzamy Wasze dane m.in. w celach:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                prezentacji naszych placówek jako miejsc ludzi ciekawych, tak
                aby nasze usługi trafiały w Wasze potrzeby;
              </li>
              <li>
                zapewnienia bezpieczeństwa usług, w tym aby wykryć boty,
                oszustwa i nadużycia;
              </li>
              <li>
                pokazywania i przesyłania naszych ofert, szczególnie tych, które
                naszym zdaniem mogą być dopasowane do wymagań, oczekiwań,
                potrzeb i zainteresowań użytkowników;
              </li>
              <li>
                prowadzenia analizy i badań potrzeb naszych klientów, aby w
                przyszłości móc sprostać ich wymogom świadczenia usług;
              </li>
              <li>
                dostosowania zawartości serwisów i aplikacji do preferencji
                Użytkownika oraz optymalizacji korzystania ze stron
                internetowych;
              </li>
              <li>
                tworzenia statystyk, które pomagają zrozumieć, w jaki sposób
                Użytkownicy korzystają ze serwisów i aplikacji, co umożliwia
                ulepszanie ich struktury oraz zawartości.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>INFORMUJEMY, ŻE:</AccordionTrigger>
          <AccordionContent>
            <p>
              Twoje dane, które udostępnisz nam np. zapisując się kursy,
              szkolenia lub warsztaty, zgodnie z obowiązującym prawem chcemy
              przekazywać podmiotom przetwarzającym je na nasze zlecenie, np.
              podwykonawcom naszych usług. Może się również zdarzyć i tak, że na
              podstawie obowiązujących w Polsce przepisów będziemy udostępniać
              Twoje dane podmiotom uprawnionym do uzyskania danych jak np. sądy
              lub organy ścigania – oczywiście tylko gdy wystąpią z żądaniem w
              oparciu o stosowną podstawę prawną.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            MASZ RÓWNIEŻ PRAWA W ZWIĄZKU Z NASZYMI DZIAŁANIAMI
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Przede wszystkim, zgodnie z obowiązującymi już przepisami masz
              prawo do żądania dostępu do danych, sprostowania, usunięcia lub
              ograniczenia ich przetwarzania. Możesz także wycofać zgodę na
              przetwarzanie danych osobowych, zgłosić sprzeciw, skorzystać z
              prawa do bycia zapomnianym na zasadach opisanych w ww.
              Rozporządzeniu Parlamentu Europejskiego i Rady (UE) 2016/679 z
              dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
              związku z przetwarzaniem danych osobowych i w sprawie swobodnego
              przepływu takich danych oraz uchylenia dyrektywy 95/46/WE. Z
              naszym Inspektorem Ochrony Danych, można się kontaktować za pomocą
              adresu e-mail: odn.rybnik@gmail.com
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            DLACZEGO MAMY PRAWO PRZETWARZAĆ TWOJE DANE OSOBOWE?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Każde przetwarzanie Twoich danych musi być oparte na właściwej,
              zgodnej z obowiązującymi przepisami, podstawie prawnej. Podstawą
              prawną przetwarzania Twoich danych w celu świadczenia usług jest
              niezbędność do wykonania umów o ich świadczenie (tymi umowami są
              zazwyczaj regulaminy lub podobne dokumenty dostępne w usługach, z
              których korzystasz). Z kolei podstawą prawną dopasowywania treści
              usług do Twoich zainteresowań, zapewnienie ich bezpieczeństwa oraz
              pomiary i ich udoskonalanie, jak również marketing własny naszej
              firmy jest tzw. uzasadniony interes administratora. Przetwarzanie
              Twoich danych w celach marketingowych jako naszych klientów, w tym
              profilowanie oraz w celach analitycznych będzie odbywać się na
              podstawie tylko i wyłącznie Twojej dobrowolnej zgody na
              warsztatach, szkoleniach, kursach bądź innych usługach
              szkoleniowych i akceptując naszę politykę prywatności w momencie
              wejścia na stronę.
            </p>
            <p className="mt-4">
              Wyrażenie tej zgody jest całkowicie dobrowolne i możesz ją w
              dowolnym momencie wycofać, z tym, że wycofanie zgody nie będzie
              miało wpływu na zgodność z prawem przetwarzania na podstawie
              zgody, przed jej wycofaniem.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>DODATKOWE INFORMACJE</AccordionTrigger>
          <AccordionContent>
            <p>
              Bardzo ważne dla nas jest abyś również wiedział, Użytkowniku, że:
            </p>
            <ol className="list-decimal pl-5 mt-2">
              <li>
                Korzystając z naszej strony użytkownik akceptuje Politykę
                Prywatności.
              </li>
              <li>
                Dane osobowe mogą być gromadzone poprzez następujące działania:
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Informacje podawane w formularzach zamieszczonych na
                    stronie,
                  </li>
                  <li>
                    Informacje zbierane w sposób automatyczny podczas
                    korzystania ze strony m.in:
                    <ul className="list-disc pl-5 mt-2">
                      <li>
                        Informacje zapisywane automatycznie w logach serwerów,
                        np. adres IP, żądanie strony wysyłane przez użytkownika,
                        data i godzina żądania, typ przeglądarki, język
                        przeglądarki, dane urządzenia,typ systemu operacyjnego,
                      </li>
                      <li>
                        Pliki „cookies" – niewielkie pliki tekstowe wysyłane na
                        urządzenie użytkownika odwiedzającego naszą stronę (np.
                        telefon, komputer).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Informacje zbierane w sposób automatyczny służą do realizacji
                następujących celów:
                <ul className="list-disc pl-5 mt-2">
                  <li>Administrowania serwerami, stroną i jej obsługą,</li>
                  <li>Zapewnienia bezpieczeństwa oraz ochrony danych,</li>
                  <li>
                    Zapewnienia świadczenia użytkownikowi wysokiej jakości
                    usług,
                  </li>
                  <li>Dostosowanie naszej strony do Twoich potrzeb,</li>
                  <li>Tworzenia statystyk,</li>
                </ul>
              </li>
              <li>
                Pliki „cookies" służą do realizacji m.in. następujących celów:
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Zapewnienie prawidłowego działania strony w przeglądarce
                    użytkownika,
                  </li>
                  <li>Tworzenia statystyk</li>
                </ul>
              </li>
              <li>
                Przeglądarki internetowe posiadają domyślne ustawienia, które
                umożliwiają przechowywanie plików „cookies",
              </li>
              <li>
                Możesz skonfigurować swoją przeglądarkę tak, aby nie
                przechowywała plików „cookies".
              </li>
              <li>
                Jak zablokować pliki „cookies":
                <ul className="list-disc pl-5 mt-2">
                  <li>W przeglądarce Firefox: Opcje ➡️ Prywatność</li>
                  <li>
                    W przeglądarce Chrome: Ustawienia ➡️ Ustawienia zaawansowane
                    ➡️ Prywatność ➡️ Ustawienia treści
                  </li>
                  <li>
                    W przeglądarce Internet Explorer: Narzędzia ➡️ Opcje
                    internetowe ➡️ Prywatność ➡️ Zaawansowane
                  </li>
                  <li>
                    W przeglądarce Opera: Preferencje ➡️ Zaawansowane ➡️
                    Ciasteczka
                  </li>
                </ul>
              </li>
              <li>
                Dane osobowe użytkowników zabrane w celach opisanych w naszej
                Polityce Prywatności będą przetwarzane przez okres niezbędny do
                realizacji danego celu.
              </li>
              <li>
                Dane osobowe są przekazywane do podmiotów przetwarzających dane
                w imieniu administratora danych w związku ze świadczeniem usług
                na rzecz BiS Groups i/lub NODN.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PrivacyPolicy;
