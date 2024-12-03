"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const StandardyOchronyMaloletnich: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 tracking-tight">
        Standardy ochrony małoletnich
      </h1>

      <Accordion type="single" collapsible className="w-full mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>Wprowadzenie</AccordionTrigger>
          <AccordionContent>
            <p>
              Nowelizacja Kodeksu rodzinnego i opiekuńczego (Dz.U. 2023 poz.
              1606) określiła warunki skutecznej ochrony małoletnich przed
              różnymi formami przemocy. Wprowadzone zmiany wskazują na potrzebę
              opracowania jasnych i spójnych standardów postępowania w
              sytuacjach podejrzenia krzywdzenia lub krzywdzenia małoletnich.
            </p>
            <p className="mt-4">
              „Standardy ochrony małoletnich" są jednym z elementów systemowego
              rozwiązania ochrony małoletnich przed krzywdzeniem i stanowią
              formę zabezpieczenia ich praw. Należy je traktować jako jedno z
              narzędzi wzmacniających i ułatwiających skuteczniejszą ochronę
              uczniów przed krzywdzeniem.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Założenia</AccordionTrigger>
          <AccordionContent>
            <p>
              W konstruowaniu „Standardów ochrony małoletnich" przyjęto
              następujące założenia:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                W jednostce, która sprawuje ustawowy obowiązek opieki nad
                małoletnimi nie są zatrudniane osoby mogące zagrażać
                bezpieczeństwu małoletnich.
              </li>
              <li>
                Pracownicy potrafią zdiagnozować symptomy krzywdzenia
                małoletniego oraz podejmować interwencje w przypadku
                podejrzenia, że małoletni jest ofiarą przemocy w szkole lub
                przemocy domowej.
              </li>
              <li>
                Podejmowane w jednostce postępowania nie mogą naruszać praw
                dziecka, praw człowieka, praw ucznia określonych w dokumencie
                statutowym lub innym wewnętrznym regulaminie jednostki, a także
                bezpieczeństwa danych osobowych.
              </li>
              <li>
                Małoletni wiedzą, jak unikać zagrożeń w kontaktach z dorosłymi i
                rówieśnikami.
              </li>
              <li>
                Małoletni wiedzą, do kogo zwracać się o pomoc w sytuacjach dla
                nich trudnych i czynią to, mając świadomość skuteczności
                podejmowanych działań.
              </li>
              <li>
                Rodzice i opiekunowie prawni poszerzają wiedzę i umiejętności o
                metodach wychowania dziecka bez stosowania przemocy oraz
                potrafią je uczyć zasad bezpieczeństwa.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Dodatkowe założenia</AccordionTrigger>
          <AccordionContent>
            <p>Ponadto przyjęto, że:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Prowadzone w jednostce postępowanie na wypadek krzywdzenia lub
                podejrzenia krzywdzenia małoletnich jest zorganizowane w sposób
                zapewniający im skuteczną ochronę.
              </li>
              <li>
                Działania podejmowane w ramach ochrony małoletnich przed
                krzywdzeniem są dokumentowane oraz monitorowane i poddawane
                okresowej weryfikacji przy udziale wszystkich zainteresowanych
                podmiotów, w szczególności organu nadzorującego.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Pomoc w przypadku przemocy domowej
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Prawo zabrania stosowania przemocy i krzywdzenia swoich bliskich!
            </p>
            <p className="mt-4">
              Jeżeli Ty lub ktoś z Twoich bliskich jest osobą doznającą przemocy
              domowej, nie wstydź się prosić o pomoc. Wezwij Policję, dzwoniąc
              na numer alarmowy 112. Prawo stoi po Twojej stronie!
            </p>
            <p className="mt-4">
              Masz prawo do złożenia zawiadomienia o popełnieniu przestępstwa z
              użyciem przemocy domowej do Prokuratury, Policji lub Żandarmerii
              Wojskowej. Możesz także zwrócić się po pomoc do podmiotów i
              organizacji realizujących działania na rzecz przeciwdziałania
              przemocy domowej.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Gdzie szukać pomocy?</AccordionTrigger>
          <AccordionContent>
            <p>Pomogą Ci:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Ośrodki pomocy społecznej – w sprawach socjalnych, bytowych i
                prawnych.
              </li>
              <li>
                Powiatowe centra pomocy rodzinie – w zakresie prawnym,
                socjalnym, terapeutycznym lub udzielą informacji na temat
                instytucji lokalnie działających w tym zakresie w Twojej
                miejscowości.
              </li>
              <li>
                Ośrodki interwencji kryzysowej i Ośrodki wsparcia – zapewniając
                schronienie Tobie i Twoim bliskim, gdy doznajesz przemocy
                domowej, udzielą Ci pomocy i wsparcia w przezwyciężeniu sytuacji
                kryzysowej, a także opracują plan pomocy.
              </li>
              <li>
                Specjalistyczne ośrodki wsparcia dla osób doznających przemocy
                domowej – zapewniając bezpłatne całodobowe schronienie Tobie i
                Twoim bliskim, gdy doznajesz przemocy domowej, oraz udzielą Ci
                kompleksowej, specjalistycznej pomocy w zakresie interwencyjnym,
                terapeutyczno-wspomagającym oraz potrzeb bytowych.
              </li>
              <li>
                Okręgowe ośrodki i lokalne punkty działające w ramach Sieci
                Pomocy Pokrzywdzonym Przestępstwem – zapewniając profesjonalną,
                kompleksową i bezpłatną pomoc prawną, psychologiczną,
                psychoterapeutyczną i materialną.
              </li>
              <li>
                Sądy opiekuńcze – w sprawach opiekuńczych i alimentacyjnych.
              </li>
              <li>
                Placówki ochrony zdrowia – np. uzyskać zaświadczenie lekarskie o
                doznanych obrażeniach.
              </li>
              <li>
                Komisje rozwiązywania problemów alkoholowych – podejmując
                działania wobec osoby nadużywającej alkoholu.
              </li>
              <li>
                Punkty nieodpłatnej pomocy prawnej – w zakresie uzyskania pomocy
                prawnej.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Numery telefonów pomocowych</AccordionTrigger>
          <AccordionContent>
            <p>Możesz zadzwonić do:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Ogólnopolskiego Pogotowia dla Ofiar Przemocy w Rodzinie
                „Niebieska Linia" tel. 800 12 00 02 (linia całodobowa i
                bezpłatna)
              </li>
              <li>
                Ogólnokrajowej Linii Pomocy Pokrzywdzonym tel. +48 222 309 900
              </li>
              <li>
                Policyjny telefon zaufania dla osób doznających przemocy domowej
                nr 800 120 226
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <a
            href="/assets/Podrecznik-standardy-ochrony-dzieci.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pobierz podręcznik (PDF)
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="/assets/zarzadzenie.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pobierz zarządzenie (PDF)
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StandardyOchronyMaloletnich;
