export type Subtopic = {
  title: string;
};

export type Topic = {
  title: string;
  subtopics?: Subtopic[];
};

export type Module = {
  title: string;
  topics: Topic[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  duration: string;
  practicalHours: string;
  price: string;
  payments: string;
  form: string;
  modules: Module[];
  faculty: string;
  practices: string;
  evaluation: string;
  jobOpportunities: string;
};

export const courses: Course[] = [
  {
    id: "seksuologia-praktyczna",
    title: "Seksuologia praktyczna",
    description: `Studia podyplomowe na kierunku "Seksuologia" mają na celu przekazanie wiedzy dotyczącej biologicznych podstaw seksualności człowieka, psychofizjologii seksualności, norm w zachowaniach seksualnych, dysfunkcji i zaburzeń seksualnych, metod diagnostycznych i metod leczenia stosowanych w klinice seksuologicznej, seksuologii sądowej i społecznej, filozofii kultury i etyki seksualności człowieka.`,
    description2: `Program studiów obejmuje także wykształcenie praktycznych umiejętności: seksuologicznego badania podmiotowego, diagnozy, różnicowania i leczenia zaburzeń seksualnych oraz kompetencji społecznych.`,
    description3: `Absolwenci będą przygotowani do pracy w zakresie diagnostyki i terapii zaburzeń seksualnych w poradniach seksuologicznych, klinikach i szpitalach psychiatrycznych.`,
    description4: ``,
    duration: "3 semestry",
    practicalHours: "100h",
    price: "6000zł",
    payments: "",
    form: "100% online",
    modules: [
      {
        title: "Podstawy seksuologii",
        topics: [
          {
            title: "Norma i patologia",
          },
          {
            title: "Biologiczne podstawy seksualności",
          },
          {
            title: "Etyka w pracy seksuologa",
          },
          {
            title: "Seksualność u dzieci i nastolatków",
          },
          {
            title: "Seksualność u osób dorosłych",
          },
          {
            title: "Różnicowanie płci",
          },
          {
            title: "Modele seksualności",
          },
          {
            title: "Metody i narzędzia badania seksualności",
          },
          {
            title:
              "Wpływ technologii na seksualność. Seksualność w erze cyfrowej, wpływ mediów i technologii",
          },
        ],
      },
      {
        title: "Neurobiologia seksualności",
        topics: [
          {
            title: "Mechanizmy neurobiologiczne wpływające na seksualność",
          },
          {
            title:
              "Zaburzenia seksualne - Klasyfikacja, diagnoza i terapie zaburzeń seksualnych",
          },
          {
            title: "Hiperseksualność",
          },
          {
            title: "Współuzależnienie",
          },
          {
            title:
              "Terapia kompulsywnych zachowań seksualnych (podejście poznawczo-behawioralne, psychodynamiczne, humanistyczne i integracyjne w leczeniu zaburzeń seksualnych i relacji)",
          },
          {
            title: "Praca z parą/związkiem/relacją po doświadczeniu zdrady",
          },
          {
            title: "Praca z seksualnością i płciową różnorodnością",
          },
          {
            title: "Praca z nastolatkami",
          },
          {
            title: "Praca z dziećmi",
          },
        ],
      },
      {
        title: "Podstawy seksuologii sądowej",
        topics: [
          {
            title: "Dziecko jako ofiara przemocy seksualnej",
          },
          {
            title: "Osoba dorosła jako ofiara przemocy seksualnej",
          },
          {
            title:
              "Mechanizmy seksualnego wykorzystania dziecka w rodzinie i poza rodziną",
          },
          {
            title: "Diagnoza i terapia ofiar przemocy seksualnej",
          },
          {
            title: "Seksuologia kliniczna",
          },
          {
            title: "Organiczne przyczyny problemów seksualnych i ich leczenie",
          },
          {
            title: "Diagnoza nadużyć seksualnych wobec dzieci",
          },
          {
            title: "Rodzina kazirodcza",
          },
          {
            title: "Seksualność osób z niepełnosprawnościami",
          },
          {
            title: "Nietypowa seksualność",
          },
          {
            title:
              "Trendy seksualne i współczesne kierunki pracy z seksualnością",
          },
          {
            title: "Praca interwencyjna",
          },
        ],
      },
      {
        title: "Warsztaty / praktyka",
        topics: [
          {
            title: "Poradnie seksuologiczne",
          },
          {
            title:
              "Instytucje prowadzące działalność w obszarze zdrowia seksualnego",
          },
        ],
      },
    ],
    faculty: `Program będzie prowadzony przez wykwalifikowaną kadrę specjalistów z dziedziny seksuologii, psychologii, psychiatrii i terapii.`,
    practices: `Program studiów obejmuje 100 godzin praktyk, które są zorganizowane przez uczelnię i realizowane w poradniach, instytucjach oraz centrach świadczących pomoc seksuologiczną.`,
    evaluation: `Ocena studentów będzie opierać się na obecności na minimum 80 proc. zajęć, merytorycznej aktywności podczas zajęć oraz pracy praktycznej/projektowej.`,
    jobOpportunities: `Absolwenci będą przygotowani do pracy w zakresie diagnostyki i terapii zaburzeń seksualnych w poradniach seksuologicznych, klinikach i szpitalach psychiatrycznych.`,
  },

  {
    id: "trener-umiejetnosci-spolecznych",
    title: "Trener Umiejętności Społecznych",
    description: `Celem programu studiów jest kompleksowe przygotowanie specjalistów do pracy w zakresie kształtowania i rozwijania umiejętności społecznych. Program kładzie nacisk na zrozumienie teorii społecznych, praktyczne podejście do nauczania umiejętności interpersonalnych oraz rozwijanie kompetencji trenerskich.`,
    description2: `Studenci będą zdobywać wiedzę z zakresu psychologii, pedagogiki, socjologii oraz coachingowych technik szkoleniowych, co pozwoli im efektywnie wspierać rozwój kompetencji społecznych w różnych grupach wiekowych i środowiskach.`,
    description3: `Program studiów jest podzielony na cztery semestry obejmując wykłady teoretyczne, warsztaty praktyczne, seminaria oraz praktyki zawodowe.`,
    description4: ``,
    duration: "2 semestry",
    practicalHours: "90h",
    price: "2500zł",
    payments: "",
    form: "100% online",
    modules: [
      {
        title: "Podstawy psychologii i pedagogiki społecznej",
        topics: [
          {
            title: "Psychologia społeczna",
            subtopics: [
              { title: "Podstawowe pojęcia i teorie" },
              { title: "Mechanizmy wpływu społecznego" },
              { title: "Relacje interpersonalne" },
            ],
          },
          {
            title: "Pedagogika społeczna",
            subtopics: [
              { title: "Teorie wychowania" },
              {
                title:
                  "Metody nauczania i kształcenia umiejętności społecznych",
              },
              { title: "Praca z grupą" },
            ],
          },
          {
            title: "Komunikacja interpersonalna",
            subtopics: [
              { title: "Modele komunikacji" },
              { title: "Bariery komunikacyjne" },
              { title: "Techniki skutecznej komunikacji" },
            ],
          },
          {
            title: "Metody badawcze w naukach społecznych",
            subtopics: [
              { title: "Metody ilościowe i jakościowe" },
              { title: "Analiza statystyczna" },
              { title: "Etyka badań społecznych" },
            ],
          },
          {
            title: "Wprowadzenie do coachingu",
            subtopics: [
              { title: "Historia i definicja coachingu" },
              { title: "Główne nurty i podejścia" },
              { title: "Rola coacha" },
            ],
          },
        ],
      },
      {
        title: "Diagnoza umiejętności społecznych",
        topics: [
          {
            title: "Diagnoza w psychologii społecznej",
            subtopics: [
              { title: "Narzędzia diagnostyczne" },
              { title: "Wywiad i obserwacja" },
              { title: "Testy i kwestionariusze" },
            ],
          },
          {
            title: "Rozwój umiejętności społecznych",
            subtopics: [
              { title: "Etapy rozwoju społecznego" },
              {
                title: "Czynniki wpływające na rozwój umiejętności społecznych",
              },
              { title: "Konsekwencje braku umiejętności społecznych" },
            ],
          },
          {
            title: "Psychopatologia społeczna",
            subtopics: [
              { title: "Zaburzenia komunikacyjne" },
              { title: "Trudności adaptacyjne" },
              { title: "Rozpoznawanie i różnicowanie zaburzeń społecznych" },
            ],
          },
          {
            title: "Kliniczne studia przypadków",
            subtopics: [
              { title: "Analiza przypadków klinicznych" },
              { title: "Praktyczne zastosowanie narzędzi diagnostycznych" },
              { title: "Superwizje kliniczne" },
            ],
          },
          {
            title: "Edukacja emocjonalna",
            subtopics: [
              { title: "Rola emocji w życiu społecznym" },
              { title: "Techniki zarządzania emocjami" },
              { title: "Inteligencja emocjonalna" },
            ],
          },
        ],
      },
      {
        title: "Strategie interwencyjne i terapeutyczne",
        topics: [
          {
            title: "Techniki treningu umiejętności społecznych",
            subtopics: [
              { title: "Trening asertywności" },
              { title: "Trening umiejętności komunikacyjnych" },
              { title: "Trening radzenia sobie ze stresem" },
            ],
          },
          {
            title: "Coaching i mentoring",
            subtopics: [
              { title: "Podstawy coachingu" },
              { title: "Techniki mentorskie" },
              { title: "Rola trenera w rozwoju osobistym" },
            ],
          },
          {
            title: "Podejścia integracyjne w treningu",
            subtopics: [
              { title: "Terapia poznawczo-behawioralna (CBT)" },
              { title: "Terapia akceptacji i zaangażowania (ACT)" },
              { title: "Terapia psychodynamiczna" },
            ],
          },
          {
            title: "Praktyka trenerska",
            subtopics: [
              { title: "Praktyki kliniczne i szkoleniowe" },
              { title: "Superwizje i interwizje" },
              { title: "Planowanie i ocena sesji treningowych" },
            ],
          },
          {
            title: "Interwencje kryzysowe",
            subtopics: [
              { title: "Zarządzanie sytuacjami kryzysowymi" },
              { title: "Techniki interwencji kryzysowej" },
              { title: "Praca z osobami w kryzysie" },
            ],
          },
          {
            title: "Budowanie zespołów",
            subtopics: [
              { title: "Dynamika grupowa" },
              { title: "Role zespołowe" },
              { title: "Techniki budowania i zarządzania zespołami" },
            ],
          },
        ],
      },
      {
        title: "Praktyka zawodowa oraz praca dyplomowa",
        topics: [
          {
            title: "Praktyka zawodowa",
            subtopics: [
              { title: "Staż w placówkach edukacyjnych i terapeutycznych" },
              {
                title:
                  "Praca z grupami i indywidualnymi klientami pod superwizją",
              },
              { title: "Dokumentacja i raportowanie" },
            ],
          },
          {
            title: "Seminarium dyplomowe",
            subtopics: [
              { title: "Przygotowanie pracy dyplomowej" },
              { title: "Prezentacja wyników badań" },
              { title: "Etyka zawodowa" },
            ],
          },
          {
            title: "Superwizja końcowa",
            subtopics: [
              { title: "Ocena kompetencji zawodowych" },
              { title: "Refleksja nad praktyką trenerską" },
              {
                title: "Podsumowanie i planowanie dalszego rozwoju zawodowego",
              },
            ],
          },
          {
            title: "Rozwój osobisty trenera",
            subtopics: [
              { title: "Autorefleksja i samoocena" },
              { title: "Techniki radzenia sobie ze stresem" },
              { title: "Plany rozwoju zawodowego" },
            ],
          },
        ],
      },
    ],
    faculty: `Program realizowany będzie przez doświadczonych specjalistów z zakresu psychologii, pedagogiki, socjologii oraz profesjonalnych trenerów umiejętności społecznych posiadających wieloletnie doświadczenie kliniczne oraz szkoleniowe. Kadra składa się z ekspertów posiadających praktyczne doświadczenie w pracy trenerskiej i coachingowej, co zapewni wysoki poziom kształcenia i wsparcia dla studentów.`,
    practices: `Wykłady: Podstawowe informacje teoretyczne przekazywane przez ekspertów z różnych dziedzin.
    Warsztaty: Praktyczne ćwiczenia i trening umiejętności.
    Seminaria: Dyskusje i analiza przypadków klinicznych.
    Praktyki zawodowe: Bezpośrednia praca z klientami i grupami pod nadzorem doświadczonych trenerów.
    Superwizje: Regularne sesje superwizyjne mające na celu wsparcie rozwoju kompetencji zawodowych.
    E-learning: Platformy internetowe do nauki zdalnej i wymiany doświadczeń.`,
    evaluation: `Ocena studentów będzie opierać się na wynikach egzaminów pisemnych, prac pisemnych, projektów badawczych, a także ocenie praktyk klinicznych. Regularne ewaluacje programu będą przeprowadzane w celu zapewnienia najwyższej jakości kształcenia i dostosowania programu do aktualnych potrzeb rynku pracy oraz postępu naukowego w dziedzinie umiejętności społecznych.`,
    jobOpportunities: `Absolwenci programu będą przygotowani do pracy jako:
    <ul className="space-y-3 list-disc ml-6">
      <li>Trenerzy umiejętności społecznych w placówkach edukacyjnych, terapeutycznych i biznesowych</li>
      <li>Konsultanci w firmach szkoleniowych</li>
      <li>Specjaliści ds. rozwoju osobistego i zawodowego</li>
      <li>Pracownicy w organizacjach pozarządowych zajmujących się edukacją i wsparciem społecznym</li>
      <li>Coachowie i mentorzy</li>
      <li>Mediatorzy i specjaliści ds. zarządzania konfliktami</li>
      <li>Liderzy zespołów w różnych branżach</li>
    </ul>`,
  },
  {
    id: "cyberpsychologia",
    title: "Cyberpsychologia",
    description: `Studia podyplomowe: "Cyberpsychologia" koncentrują się na badaniu interakcji pomiędzy ludźmi a technologią, ze szczególnym uwzględnieniem wpływu technologii cyfrowych na zachowanie, emocje i społeczeństwo.`,
    description2: `Program ma na celu przygotowanie studentów do pracy w obszarze badawczym, klinicznym oraz przemysłowym związanym z technologiami informacyjno-komunikacyjnymi (ICT).`,
    description3: `Program studiów jest podzielony na trzy semestry, obejmując wykłady teoretyczne, warsztaty praktyczne, seminaria oraz praktyki zawodowe.`,
    description4: ``,
    duration: "3 semestry",
    practicalHours: "90h",
    price: "8000zł",
    payments: "",
    form: "100% online",
    modules: [
      {
        title: "Wprowadzenie do psychologii i technologii cyfrowych",
        topics: [
          {
            title: "Wprowadzenie do psychologii",
            subtopics: [
              { title: "Historia i podstawy psychologii" },
              { title: "Główne nurty i szkoły psychologiczne" },
              { title: "Metody badawcze w psychologii" },
            ],
          },
          {
            title: "Psychologia technologii",
            subtopics: [
              { title: "Wprowadzenie do cyberpsychologii" },
              { title: "Ewolucja technologii cyfrowych" },
              { title: "Podstawowe koncepcje i teorie" },
            ],
          },
          {
            title: "Wprowadzenie do informatyki i technologii cyfrowych",
            subtopics: [
              { title: "Podstawy informatyki" },
              { title: "Struktury danych i algorytmy" },
              { title: "Technologie sieciowe i komunikacyjne" },
            ],
          },
          {
            title: "Metody badawcze w psychologii",
            subtopics: [
              { title: "Metodologia badań psychologicznych" },
              { title: "Statystyka w psychologii" },
              { title: "Przeprowadzanie i analiza badań" },
            ],
          },
        ],
      },
      {
        title: "Psychologia społeczna",
        topics: [
          {
            title: "Psychologia społeczna",
            subtopics: [
              { title: "Procesy grupowe i wpływ społeczny" },
              { title: "Komunikacja interpersonalna i media" },
              { title: "Psychologia relacji w świecie cyfrowym" },
            ],
          },
          {
            title: "Psychopatologia i internet",
            subtopics: [
              {
                title:
                  "Zaburzenia psychiczne związane z korzystaniem z internetu",
              },
              { title: "Cyberbullying, uzależnienia cyfrowe" },
              { title: "Diagnoza i terapia" },
            ],
          },
          {
            title: "Projektowanie interakcji człowiek-komputer",
            subtopics: [
              { title: "Zasady HCI (Human-Computer Interaction)" },
              { title: "Ergonomia i użyteczność" },
              { title: "Psychologia projektowania interfejsów" },
            ],
          },
          {
            title: "Etyka i prawo w cyberprzestrzeni",
            subtopics: [
              { title: "Etyczne aspekty korzystania z technologii" },
              { title: "Prywatność i bezpieczeństwo danych" },
              { title: "Prawo cyfrowe i regulacje" },
            ],
          },
        ],
      },
      {
        title: "Psychologia mediów cyfrowych",
        topics: [
          {
            title: "Psychologia mediów cyfrowych",
            subtopics: [
              { title: "Media społecznościowe i ich wpływ" },
              { title: "Psychologia mediów interaktywnych" },
              { title: "Reklama i perswazja w mediach cyfrowych" },
            ],
          },
          {
            title: "Technologie wspomagające",
            subtopics: [
              { title: "Wirtualna i rozszerzona rzeczywistość" },
              { title: "Technologie wspomagające edukację i terapię" },
              { title: "Zastosowania technologii w różnych dziedzinach" },
            ],
          },
          {
            title: "Analiza danych i big data",
            subtopics: [
              { title: "Podstawy analizy danych" },
              { title: "Narzędzia do analizy big data" },
              { title: "Interpretacja i wizualizacja wyników" },
            ],
          },
          {
            title: "Praktyki zawodowe I",
            subtopics: [
              { title: "Praktyka w instytucjach badawczych lub przemysłowych" },
              { title: "Superwizja praktyk" },
              { title: "Refleksja i analiza doświadczeń" },
            ],
          },
        ],
      },
      {
        title: "Zaawansowane technologie cyfrowe",
        topics: [
          {
            title: "Zaawansowane technologie cyfrowe",
            subtopics: [
              { title: "Sztuczna inteligencja i uczenie maszynowe" },
              { title: "Internet rzeczy (IoT)" },
              { title: "Blockchain i technologie zdecentralizowane" },
            ],
          },
          {
            title: "Interakcje człowiek-technologia",
            subtopics: [
              { title: "Psychologiczne aspekty interakcji z technologią" },
              { title: "Technologie noszone i ich wpływ na zdrowie" },
              { title: "Psychologia użytkowania technologii" },
            ],
          },
          {
            title: "Praktyki zawodowe II",
            subtopics: [
              { title: "Pogłębiona praktyka w wybranej placówce" },
              { title: "Zaawansowana superwizja" },
              { title: "Studium przypadków" },
            ],
          },
          {
            title: "Cyberpsychologia i społeczeństwo",
            subtopics: [
              { title: "Społeczne i kulturowe implikacje technologii" },
              { title: "Cyfrowa tożsamość i samoocena" },
              { title: "Przyszłość technologii i jej wpływ na społeczeństwo" },
            ],
          },
        ],
      },
      {
        title: "Cyberterapia i interwencje cyfrowe",
        topics: [
          {
            title: "Badania w cyberpsychologii",
            subtopics: [
              { title: "Metodologia badań w cyberpsychologii" },
              { title: "Przeprowadzanie badań własnych" },
              { title: "Analiza i prezentacja wyników" },
            ],
          },
          {
            title: "Cyberterapia i interwencje cyfrowe",
            subtopics: [
              { title: "Techniki terapii online" },
              { title: "Interwencje cyfrowe i ich skuteczność" },
              { title: "Case studies" },
            ],
          },
          {
            title: "Cyberbezpieczeństwo i prywatność",
            subtopics: [
              { title: "Podstawy cyberbezpieczeństwa" },
              { title: "Ochrona prywatności w sieci" },
              { title: "Zarządzanie ryzykiem cyfrowym" },
            ],
          },
          {
            title: "Projektowanie gier i symulacji",
            subtopics: [
              { title: "Psychologia projektowania gier" },
              { title: "Użyteczność i doświadczenie użytkownika" },
              { title: "Praktyczne aspekty projektowania" },
            ],
          },
        ],
      },
      {
        title: "Projekt dyplomowy",
        topics: [
          {
            title: "Projekt dyplomowy",
            subtopics: [
              { title: "Przygotowanie projektu" },
              { title: "Prezentacja pracy dyplomowej" },
              { title: "Etyka badań i praktyk w cyberpsychologii" },
            ],
          },
          {
            title: "Praktyki specjalistyczne",
            subtopics: [
              { title: "Intensywna praktyka w wybranej placówce" },
              { title: "Kompleksowa superwizja" },
              { title: "Ocena i analiza efektów terapeutycznych" },
              { title: "Podsumowanie zdobytej wiedzy i umiejętności" },
              { title: "Case studies i symulacje" },
            ],
          },
        ],
      },
    ],
    faculty: `Program będzie prowadzony przez wykwalifikowaną kadrę specjalistów z dziedziny psychologii, informatyki, cyberbezpieczeństwa oraz innych pokrewnych dziedzin. W skład kadry wejdą zarówno wykładowcy akademiccy, jak i praktycy z wieloletnim doświadczeniem w pracy z technologiami cyfrowymi.`,
    practices: `Każdy semestr zawiera moduły praktyk zawodowych, które pozwalają studentom na bezpośrednią pracę z technologiami i użytkownikami pod okiem doświadczonych specjalistów. Praktyki te są integralną częścią programu i mają na celu rozwinięcie umiejętności praktycznych oraz zastosowanie wiedzy teoretycznej w rzeczywistych sytuacjach zawodowych.`,
    evaluation: `Ocena studentów będzie opierać się na wynikach egzaminów pisemnych, prac pisemnych, projektów badawczych, a także ocenie praktyk zawodowych. Regularne ewaluacje programu będą przeprowadzane w celu zapewnienia najwyższej jakości kształcenia i dostosowania programu do aktualnych potrzeb rynku pracy oraz postępu naukowego w dziedzinie cyberpsychologii.`,
    jobOpportunities: `Absolwenci kierunku "Cyberpsychologia" będą przygotowani do pracy w różnorodnych sektorach, takich jak badania naukowe, edukacja, przemysł technologiczny, zdrowie psychiczne, marketing cyfrowy oraz sektor publiczny. Mogą pracować jako specjaliści ds. UX, analitycy danych, terapeuci online, badacze psychologii mediów oraz konsultanci ds. technologii i bezpieczeństwa cyfrowego.`,
  },
  {
    id: "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
    title: "Diagnoza i strategie terapeutyczne w leczeniu hiperseksualności",
    description: `Celem programu studiów jest przygotowanie specjalistów w zakresie diagnozy oraz terapii osób zmagających się z hiperseksualnością. Program kładzie nacisk na interdyscyplinarne podejście, łącząc wiedzę z zakresu psychologii, seksuologii, psychiatrii, medycyny i terapii behawioralnej.`,
    description2: `Studenci zdobędą zarówno teoretyczną wiedzę, jak i praktyczne umiejętności, które pozwolą im efektywnie pomagać pacjentom.`,
    description3: `Program studiów jest podzielony na dwa semestry, obejmując teoretyczne wykłady, warsztaty praktyczne, seminaria oraz praktyki zawodowe.`,
    description4: ``,
    duration: "2 semestry",
    practicalHours: "90h",
    price: "8000zł",
    payments: "",
    form: "100% online",
    modules: [
      {
        title: "Podstawy teoretyczne",
        topics: [
          {
            title: "Psychologia kliniczna",
            subtopics: [
              { title: "Podstawowe pojęcia i teorie" },
              { title: "Diagnoza psychologiczna" },
              { title: "Zaburzenia psychiczne" },
            ],
          },
          {
            title: "Seksuologia",
            subtopics: [
              { title: "Wprowadzenie do seksuologii" },
              { title: "Rozwój seksualny człowieka" },
              { title: "Normy i patologie seksualne" },
            ],
          },
          {
            title: "Podstawy psychiatrii",
            subtopics: [
              { title: "Biologiczne podstawy zaburzeń psychicznych" },
              { title: "Leczenie farmakologiczne zaburzeń psychicznych" },
              { title: "Zaburzenia nastroju, lękowe, osobowości" },
            ],
          },
          {
            title: "Metody badawcze w psychologii i seksuologii",
            subtopics: [
              { title: "Metody ilościowe i jakościowe" },
              { title: "Analiza statystyczna" },
              { title: "Etyka badań naukowych" },
            ],
          },
        ],
      },
      {
        title: "Diagnoza hiperseksualności",
        topics: [
          {
            title: "Diagnoza w seksuologii",
            subtopics: [
              { title: "Narzędzia diagnostyczne" },
              { title: "Wywiad kliniczny" },
              { title: "Testy i kwestionariusze" },
            ],
          },
          {
            title: "Hiperseksualność",
            subtopics: [
              { title: "Definicje i kryteria diagnostyczne" },
              { title: "Epidemiologia i etiologia" },
              { title: "Konsekwencje zdrowotne i społeczne" },
            ],
          },
          {
            title: "Psychopatologia seksualna",
            subtopics: [
              { title: "Zaburzenia seksualne" },
              { title: "Komorbidność hiperseksualności z innymi zaburzeniami" },
              { title: "Rozpoznawanie i różnicowanie zaburzeń" },
            ],
          },
          {
            title: "Kliniczne studia przypadków",
            subtopics: [
              { title: "Analiza przypadków klinicznych" },
              { title: "Praktyczne zastosowanie narzędzi diagnostycznych" },
              { title: "Superwizje kliniczne" },
            ],
          },
        ],
      },
      {
        title: "Strategie terapeutyczne",
        topics: [
          {
            title: "Psychoterapia poznawczo-behawioralna",
            subtopics: [
              { title: "Teoria i techniki CBT" },
              { title: "Terapia ekspozycyjna i desensytyzacja" },
              { title: "Interwencje poznawcze" },
            ],
          },
          {
            title: "Terapia seksualna",
            subtopics: [
              { title: "Techniki terapii seksualnej" },
              { title: "Terapia par" },
              { title: "Terapia indywidualna" },
            ],
          },
          {
            title: "Podejścia integracyjne w terapii",
            subtopics: [
              { title: "Terapia schematu" },
              { title: "Terapia akceptacji i zaangażowania (ACT)" },
              { title: "Terapia psychodynamiczna" },
            ],
          },
          {
            title: "Praktyka terapeutyczna",
            subtopics: [
              { title: "Praktyki kliniczne" },
              { title: "Superwizje i interwizje" },
              { title: "Planowanie i ocena terapii" },
            ],
          },
        ],
      },
      {
        title: "Praktyka zawodowa oraz praca dyplomowa",
        topics: [
          {
            title: "Praktyka zawodowa",
            subtopics: [
              { title: "Staż w placówkach terapeutycznych" },
              { title: "Praca z pacjentami pod superwizją" },
              { title: "Dokumentacja i raportowanie" },
            ],
          },
          {
            title: "Seminarium dyplomowe",
            subtopics: [
              { title: "Przygotowanie pracy dyplomowej" },
              { title: "Prezentacja pracy dyplomowej" },
              { title: "Etyka zawodowa" },
            ],
          },
          {
            title: "Superwizja końcowa",
            subtopics: [
              { title: "Ocena kompetencji zawodowych" },
              { title: "Refleksja nad praktyką kliniczną" },
              {
                title: "Podsumowanie i planowanie dalszego rozwoju zawodowego",
              },
            ],
          },
        ],
      },
    ],
    faculty: `Program realizowany przez doświadczonych specjalistów z zakresu psychologii, seksuologii, psychiatrii i terapii, posiadających wieloletnie doświadczenie kliniczne oraz naukowe.`,
    practices: `Wykłady: Podstawowe informacje teoretyczne przekazywane przez ekspertów z różnych dziedzin.
    Warsztaty: Praktyczne ćwiczenia i trening umiejętności.
    Seminaria: Dyskusje i analiza przypadków klinicznych.
    Praktyki zawodowe: Bezpośrednia praca z pacjentami pod nadzorem doświadczonych terapeutów.
    Superwizje: Regularne sesje superwizyjne mające na celu wsparcie rozwoju kompetencji zawodowych.`,
    evaluation: `Ocena studentów będzie opierać się na wynikach egzaminów pisemnych, prac pisemnych, projektów badawczych, a także ocenie praktyk zawodowych.`,
    jobOpportunities: `Absolwenci programu będą przygotowani do pracy jako:
    - Terapeuci specjalizujący się w leczeniu zaburzeń seksualnych
    - Konsultanci w poradniach zdrowia psychicznego i seksualnego
    - Naukowcy i badacze w dziedzinie seksuologii i psychoterapii
    - Specjaliści w ośrodkach terapeutycznych i rehabilitacyjnych.`,
  },
  {
    id: "psychologia-uzaleznien-uzaleznienia-behawioralne",
    title: "Psychologia uzależnień - Uzależnienia behawioralne",
    description: `Studia podyplomowe: "Uzależnienia Behawioralne" ma na celu przygotowanie studentów do pracy z osobami uzależnionymi od czynności takich jak hazard, gry komputerowe, sex, zakupy, jedzenie i inne.`,
    description2: `Program łączy wiedzę teoretyczną z intensywną praktyką kliniczną, umożliwiając studentom zdobycie kompetencji niezbędnych do skutecznej pracy terapeutycznej.`,
    description3: ``,
    description4: ``,
    duration: "3 semestry",
    practicalHours: "90h",
    price: "4200zł",
    payments: "",
    form: "100% online",
    modules: [
      {
        title: "Wprowadzenie do psychologii – biologiczne podstawy uzależnień",
        topics: [
          {
            title: "Wprowadzenie do psychologii",
            subtopics: [
              { title: "Historia i podstawy psychologii" },
              { title: "Główne nurty i szkoły psychologiczne" },
              { title: "Metody badawcze w psychologii" },
            ],
          },
          {
            title: "Biologiczne podstawy uzależnień",
            subtopics: [
              { title: "Neurobiologia uzależnień" },
              { title: "Genetyka i predyspozycje biologiczne" },
              { title: "Mechanizmy nagrody i motywacji" },
            ],
          },
          {
            title: "Psychopatologia uzależnień behawioralnych",
            subtopics: [
              { title: "Rodzaje uzależnień behawioralnych" },
              { title: "Symptomy i kryteria diagnostyczne" },
              { title: "Współwystępowanie z innymi zaburzeniami" },
            ],
          },
          {
            title: "Metody badawcze w psychologii",
            subtopics: [
              { title: "Metodologia badań psychologicznych" },
              { title: "Statystyka w psychologii" },
              { title: "Przeprowadzanie i analiza badań" },
            ],
          },
        ],
      },
      {
        title: "Diagnoza i ocena uzależnień behawioralnych",
        topics: [
          {
            title: "Teorie uzależnień behawioralnych",
            subtopics: [
              { title: "Modele i teorie uzależnień behawioralnych" },
              { title: "Czynniki ryzyka i czynniki ochronne" },
              { title: "Perspektywy neuropsychologiczne" },
            ],
          },
          {
            title: "Diagnoza i ocena uzależnień behawioralnych",
            subtopics: [
              { title: "Narzędzia diagnostyczne" },
              { title: "Proces diagnozy klinicznej" },
              { title: "Case studies" },
            ],
          },
          {
            title: "Terapie poznawczo-behawioralne",
            subtopics: [
              { title: "Podstawy CBT" },
              {
                title:
                  "Techniki i interwencje w terapii uzależnień behawioralnych",
              },
              { title: "Praktyczne zastosowanie CBT" },
            ],
          },
          {
            title: "Etyka i prawo w pracy terapeuty uzależnień",
            subtopics: [
              { title: "Etyka zawodowa" },
              { title: "Prawne aspekty terapii uzależnień" },
              { title: "Prawa pacjenta" },
            ],
          },
        ],
      },
      {
        title: "Psychologia społeczna",
        topics: [
          {
            title: "Psychologia społeczna",
            subtopics: [
              { title: "Procesy grupowe i wpływ społeczny" },
              { title: "Komunikacja interpersonalna i media" },
              { title: "Społeczny kontekst uzależnień behawioralnych" },
            ],
          },
          {
            title: "Terapia grupowa",
            subtopics: [
              { title: "Dynamika grupowa" },
              { title: "Techniki prowadzenia grup terapeutycznych" },
              { title: "Praktyka grupowa" },
            ],
          },
          {
            title: "Terapia motywacyjna",
            subtopics: [
              { title: "Teoria motywacji i zmiany" },
              { title: "Techniki wywiadu motywacyjnego" },
              { title: "Case studies" },
            ],
          },
          {
            title: "Terapia rodzin",
            subtopics: [
              { title: "Teorie systemów rodzinnych" },
              { title: "Techniki terapii rodzin" },
              { title: "Praca z rodzinami osób uzależnionych" },
            ],
          },
        ],
      },
      {
        title: "Terapie alternatywne i uzupełniające",
        topics: [
          {
            title: "Terapie alternatywne i uzupełniające",
            subtopics: [
              { title: "Terapia dialektyczno-behawioralna (DBT)" },
              { title: "Terapia akceptacji i zaangażowania (ACT)" },
              {
                title:
                  "Terapie wspomagające (np. terapia sztuką, terapia zajęciowa)",
              },
            ],
          },
          {
            title: "Praktyki I",
            subtopics: [
              { title: "Praktyka w placówkach leczenia uzależnień" },
              { title: "Superwizja kliniczna" },
              { title: "Refleksja i analiza przypadków" },
            ],
          },
          {
            title: "Interwencje kryzysowe",
            subtopics: [
              { title: "Teorie i techniki interwencji kryzysowej" },
              { title: "Praca z osobami w sytuacjach kryzysowych" },
              { title: "Techniki radzenia sobie z sytuacjami kryzysowymi" },
            ],
          },
          {
            title: "Współpraca międzysektorowa",
            subtopics: [
              { title: "Praca w zespole interdyscyplinarnym" },
              {
                title:
                  "Współpraca z instytucjami publicznymi i organizacjami pozarządowymi",
              },
              { title: "Budowanie sieci wsparcia dla osób uzależnionych" },
            ],
          },
        ],
      },
      {
        title: "Badania w uzależnieniach behawioralnych",
        topics: [
          {
            title: "Badania w uzależnieniach behawioralnych",
            subtopics: [
              { title: "Metodologia badań uzależnień" },
              { title: "Przeprowadzanie badań własnych" },
              { title: "Analiza i prezentacja wyników" },
            ],
          },
          {
            title: "Profilaktyka uzależnień behawioralnych",
            subtopics: [
              { title: "Programy profilaktyczne" },
              { title: "Edukacja zdrowotna i promocja zdrowia" },
              { title: "Analiza skuteczności programów profilaktycznych" },
            ],
          },
          {
            title: "Cyberuzależnienia",
            subtopics: [
              {
                title: "Specyfika uzależnień od internetu i gier komputerowych",
              },
              { title: "Diagnoza i terapia cyberuzależnień" },
              { title: "Przypadki kliniczne" },
            ],
          },
          {
            title: "Praktyki II",
            subtopics: [
              { title: "Pogłębiona praktyka" },
              { title: "Zaawansowana superwizja" },
              { title: "Studium przypadków" },
            ],
          },
        ],
      },
      {
        title: "Projekt dyplomowy",
        topics: [
          {
            title: "Projekt dyplomowy",
            subtopics: [
              { title: "Przygotowanie projektu" },
              { title: "Prezentacja pracy dyplomowej" },
              { title: "Terapie uzależnień od czynności" },
            ],
          },
          {
            title: "Terapie uzależnień od czynności",
            subtopics: [
              {
                title: "Terapia uzależnień od hazardu, zakupów, jedzenia itp.",
              },
              {
                title:
                  "Specyfika terapii różnych rodzajów uzależnień behawioralnych",
              },
              { title: "Praktyczne zastosowanie technik terapeutycznych" },
            ],
          },
          {
            title: "Praktyki III",
            subtopics: [
              { title: "Intensywna praktyka w wybranej placówce" },
              { title: "Kompleksowa superwizja" },
              { title: "Ocena i analiza efektów terapeutycznych" },
            ],
          },
        ],
      },
    ],
    faculty: `Program będzie prowadzony przez wykwalifikowaną kadrę specjalistów z dziedziny psychologii, psychiatrii, terapii uzależnień oraz innych pokrewnych dziedzin. W skład kadry wejdą zarówno wykładowcy akademiccy, jak i praktycy z wieloletnim doświadczeniem klinicznym.`,
    practices: `Każdy semestr zawiera moduły praktyk, które pozwalają studentom na bezpośrednią pracę z pacjentami pod okiem doświadczonych terapeutów. Praktyki te są integralną częścią programu i mają na celu rozwinięcie umiejętności praktycznych oraz zastosowanie wiedzy teoretycznej w rzeczywistych sytuacjach klinicznych.`,
    evaluation: `Ocena studentów będzie opierać się na wynikach egzaminów pisemnych, prac pisemnych, projektów badawczych, a także ocenie praktyk klinicznych. Regularne ewaluacje programu będą przeprowadzane w celu zapewnienia najwyższej jakości kształcenia i dostosowania programu do aktualnych potrzeb rynku pracy oraz postępu naukowego w dziedzinie uzależnień behawioralnych.`,
    jobOpportunities: `Absolwenci kierunku "Uzależnienia Behawioralne" będą przygotowani do pracy w różnorodnych placówkach terapeutycznych, takich jak ośrodki leczenia uzależnień, poradnie zdrowia psychicznego, szpitale psychiatryczne, a także w organizacjach pozarządowych zajmujących się profilaktyką i terapią uzależnień.`,
  },
  {
    id: "psychologia-uzaleznien-z-terapia-uzaleznien",
    title: "Psychologia uzależnień z terapią uzależnień",
    description: `Studia podyplomowe kierowane są do&nbsp;osób, które chcą zdobyć kwalifikacje, umożliwiające podjęcie pracy w&nbsp;roli terapeuty w&nbsp;instytucjach i&nbsp;organizacjach zajmujących się przeciwdziałaniem uzależnieniom w&nbsp;szczególności do&nbsp;pracowników poradni leczenia uzależnień, oddziałów terapii leczenia uzależnień – całodobowych i&nbsp;dziennych, oddziałów leczenia alkoholowych zespołów abstynencyjnych, placówek leczenia uzależnień dzieci i&nbsp;młodzieży, poradni dla osób z&nbsp;problemami alkoholowymi, oddziałów terapeutycznych w&nbsp;instytucjach totalnych, tj. areszty śledcze, zakłady karne, punkty konsultacyjne działających na&nbsp;terenach gmin i&nbsp;powiatów.`,
    description2:
      "Celem studiów jest przygotowanie do pracy w obszarze profilaktyki społecznej oraz terapii uzależnień. Studia rozwijają wiedzę oraz praktyczne umiejętności wychowawcze. Ponadto, pozwalają zdobyć wiedzę o działaniach terapeutycznych z wykorzystaniem najnowocześniejszych technik i metod do pracy z dziećmi, młodzieżą niedostosowaną społecznie i/lub uzależnioną od narkotyków lub środków psychotropowych.",
    description3:
      "Studia  przygotowują absolwentów do diagnozowania niedostosowania społecznego oraz prowadzenia zajęć terapeutycznych (grupowych i indywidualnych) z dziećmi i młodzieżą z tzw. grup ryzyka (dzieci i młodzież wychowywana w rodzinach dysfunkcyjnych, z diagnozą zaburzeń emocjonalnych, zaburzeń zachowania i z pogranicza niedostosowania społecznego).",
    description4:
      "Studia mają charakter kwalifikacyjny, program tego kierunku jest zgodny z przepisami prawa, uwzględnia wymagania określone Rozporządzeniem Ministra Nauki i Szkolnictwa Wyższego z dnia 25 lipca 2019 r. w sprawie standardu kształcenia przygotowującego do wykonywania zawodu nauczyciela (Dz. U. 2019 poz. 1450 ze zm.). Warunkiem ukończenia studiów podyplomowych jest uzyskanie zaliczeń w tym zaliczenia z praktyki  (90 h) oraz zdaniem egzaminu dyplomowego.",
    duration: "3 semestry",
    price: "8000zł",
    payments: "10x800zł",
    form: "100% online",
    practicalHours: "90h",
    modules: [
      {
        title: "Wprowadzenie do&nbsp;psychologii uzależnień",
        topics: [
          {
            title: "Wprowadzenie do psychologii",
            subtopics: [
              { title: "Historia psychologii" },
              { title: "Główne nurty i szkoły psychologiczne" },
              { title: "Metody badawcze w psychologii" },
            ],
          },
          {
            title: "Podstawy biologii uzależnień",
            subtopics: [
              { title: "Neurobiologia uzależnień" },
              { title: "Neuroprzekaźniki i ich rola w uzależnieniach" },
              { title: "Genetyka uzależnień" },
            ],
          },
          {
            title: "Wprowadzenie do psychologii klinicznej",
            subtopics: [
              { title: "Podstawowe pojęcia i teorie" },
              { title: "Psychopatologia i klasyfikacja zaburzeń" },
              { title: "Diagnoza kliniczna" },
            ],
          },
          {
            title: "Metody badawcze w psychologii",
            subtopics: [
              { title: "Podstawy metodologii badań" },
              { title: "Statystyka w psychologii" },
              { title: "Przeprowadzanie i analiza badań" },
            ],
          },
        ],
      },
      {
        title: "Wprowadzenie do terapii uzależnień",
        topics: [
          {
            title: "Teorie uzależnień",
            subtopics: [
              { title: "Modele i teorie uzależnień" },
              { title: "Biopsychospołeczny model uzależnień" },
              { title: "Czynniki ryzyka i czynniki ochronne" },
            ],
          },
          {
            title: "Wprowadzenie do terapii uzależnień",
            subtopics: [
              { title: "Podstawowe zasady terapii" },
              { title: "Modele interwencji terapeutycznych" },
              { title: "Etapy terapii uzależnień" },
            ],
          },
          {
            title: "Psychopatologia uzależnień",
            subtopics: [
              { title: "Zaburzenia współwystępujące z uzależnieniami" },
              { title: "Zaburzenia nastroju, lękowe, osobowości" },
              { title: "Diagnoza różnicowa" },
            ],
          },
          {
            title: "Etyka i prawo w pracy terapeuty uzależnień",
            subtopics: [
              { title: "Etyka zawodowa" },
              { title: "Prawne aspekty terapii uzależnień" },
              { title: "Prawa pacjenta" },
            ],
          },
        ],
      },

      {
        title: "Psychoterapia poznawczo-behawioralna",
        topics: [
          {
            title: "Psychoterapia poznawczo-behawioralna",
            subtopics: [
              { title: "Teoria i techniki" },
              { title: "Terapia uzależnień w kontekście CBT" },
              { title: "Praktyczne zastosowanie CBT" },
            ],
          },
          {
            title: "Terapia motywacyjna",
            subtopics: [
              { title: "Teoria motywacji i zmiany" },
              { title: "Techniki wywiadu motywacyjnego" },
              { title: "Case studies" },
            ],
          },
          {
            title: "Terapia grupowa",
            subtopics: [
              { title: "Dynamika grupowa" },
              { title: "Techniki prowadzenia grup terapeutycznych" },
              { title: "Praktyka grupowa" },
            ],
          },
          {
            title: "Terapia rodzin",
            subtopics: [
              { title: "Teorie systemów rodzinnych" },
              { title: "Techniki terapii rodzin" },
              { title: "Praca z rodzinami osób uzależnionych" },
            ],
          },
        ],
      },

      {
        title: "Terapie alternatywne i&nbsp;uzupełniające",
        topics: [
          {
            title: "Terapie alternatywne i uzupełniające",
            subtopics: [
              { title: "Terapia poznawczo-behawioralna (CBT)" },
              { title: "Terapia dialektyczno-behawioralna (DBT)" },
              {
                title:
                  "Terapie wspomagające (np. terapia sztuką, terapia zajęciowa)",
              },
            ],
          },
          {
            title: "Praktyki I",
            subtopics: [
              { title: "Praktyka w placówkach leczenia uzależnień" },
              { title: "Superwizja kliniczna" },
              { title: "Refleksja i analiza przypadków" },
            ],
          },
          {
            title: "Interwencje kryzysowe",
            subtopics: [
              { title: "Teorie i techniki interwencji kryzysowej" },
              { title: "Praca z osobami w sytuacjach kryzysowych" },
              { title: "Techniki radzenia sobie z sytuacjami kryzysowymi" },
            ],
          },
          {
            title: "Współpraca międzysektorowa",
            subtopics: [
              { title: "Praca w zespole interdyscyplinarnym" },
              {
                title:
                  "Współpraca z instytucjami publicznymi i organizacjami pozarządowymi",
              },
              { title: "Budowanie sieci wsparcia dla osób uzależnionych" },
            ],
          },
        ],
      },

      {
        title: "Zaawansowane techniki terapeutyczne",
        topics: [
          {
            title: "Zaawansowane techniki terapeutyczne ",
            subtopics: [
              { title: "Terapia poznawczo-behawioralna (CBT)" },
              { title: "Terapia dialektyczno-behawioralna (DBT)" },
              {
                title: "Terapia akceptacji i zaangażowania (ACT)",
              },
            ],
          },
          {
            title: "Profilaktyka uzależnień ",
            subtopics: [
              { title: "Programy profilaktyczne" },
              { title: "Edukacja zdrowotna i promocja zdrowia" },
              { title: "Analiza skuteczności programów profilaktycznych" },
            ],
          },
          {
            title: "Badania w psychologii uzależnień",
            subtopics: [
              { title: "Metodologia badań uzależnień" },
              { title: "Przeprowadzanie badań własnych" },
              { title: "Analiza i prezentacja wyników" },
            ],
          },
          {
            title: "Praktyki kliniczne II ",
            subtopics: [
              { title: "Pogłębiona praktyka kliniczna" },
              {
                title: "Zaawansowana superwizja",
              },
              { title: "Studium przypadków" },
            ],
          },
        ],
      },

      {
        title: "Praca dyplomowa",
        topics: [
          {
            title: "Projekt dyplomowy",
            subtopics: [
              { title: "Przygotowanie projektu badawczego" },
              { title: "Przeprowadzenie badania" },
              {
                title: "Prezentacja wyników i obrona pracy dyplomowej",
              },
            ],
          },
          {
            title: "Profilaktyka uzależnień ",
            subtopics: [
              { title: "Programy profilaktyczne" },
              { title: "Edukacja zdrowotna i promocja zdrowia" },
              { title: "Analiza skuteczności programów profilaktycznych" },
            ],
          },
          {
            title: "Terapia uzależnień behawioralnych",
            subtopics: [
              { title: "Uzależnienia behawioralne (hazard, gry komputerowe)" },
              { title: "Specyfika terapii uzależnień behawioralnych" },
              { title: "Przypadki kliniczne" },
            ],
          },
          {
            title: "Praktyki specjalistyczne",
            subtopics: [
              { title: "Intensywna praktyka w wybranej placówce" },
              {
                title: "Kompleksowa superwizja",
              },
              { title: "Ocena i analiza efektów terapeutycznych" },
              { title: "Podsumowanie zdobytej wiedzy i umiejętności" },
              { title: "Przygotowanie do egzaminu końcowego" },
              { title: "Case studies i symulacje terapeutyczne" },
            ],
          },
        ],
      },
    ],
    faculty:
      "Program będzie prowadzony przez wykwalifikowaną kadrę specjalistów z dziedziny psychologii, psychiatrii, terapii uzależnień oraz innych pokrewnych dziedzin. W skład kadry wejdą zarówno wykładowcy akademiccy, jak i praktycy z wieloletnim doświadczeniem klinicznym.",
    practices:
      "Każdy semestr zawiera moduły praktyk klinicznych, które pozwalają studentom na bezpośrednią pracę z pacjentami pod okiem doświadczonych terapeutów. Praktyki te są integralną częścią programu i mają na celu rozwinięcie umiejętności praktycznych oraz zastosowanie wiedzy teoretycznej w rzeczywistych sytuacjach klinicznych.",
    evaluation:
      "Ocena studentów będzie opierać się na wynikach egzaminów pisemnych, prac pisemnych, projektów badawczych, a także ocenie praktyk klinicznych. Regularne ewaluacje programu będą przeprowadzane w celu zapewnienia najwyższej jakości kształcenia i dostosowania programu do aktualnych potrzeb rynku pracy oraz postępu naukowego w dziedzinie psychologii uzależnień.",

    jobOpportunities:
      "Absolwenci kierunku 'Psychologia uzależnień z terapią uzależnień' będą przygotowani do pracy w różnorodnych placówkach terapeutycznych, takich jak ośrodki leczenia uzależnień, poradnie zdrowia psychicznego, szpitale psychiatryczne, a także w organizacjach pozarządowych zajmujących się profilaktyką i terapią uzależnień. Dodatkowo, będą mogli prowadzić własną praktykę terapeutyczną oraz uczestniczyć w badaniach naukowych i programach profilaktycznych.",
  },
];
