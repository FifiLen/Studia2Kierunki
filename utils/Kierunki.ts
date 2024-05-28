export type Module = {
  title: string;
  topics: string[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  practicalHours: string;
  price: string;
  payments: string;
  form: string;
  modules: Module[];
  faculty: string[];
  evaluation: string[];
  jobOpportunities: string[];
};

export const courses: Course[] = [
  {
    id: "psychologia-uzaleznien-z-terapia-uzaleznien",
    title: "Psychologia uzależnień z terapią uzależnień",
    description: `Studia podyplomowe kierowane są do osób które chcą zdobyć kwalifikacje umożliwiające podjęcie pracy w roli terapeuty w instytucjach i organizacjach zajmujących się przeciwdziałaniem uzależnieniom w szczególności do pracowników poradni leczenia uzależnień oddziałów terapii leczenia uzależnień – całodobowych i dziennych oddziałów leczenia alkoholowych zespołów abstynencyjnych placówek leczenia uzależnień dzieci i młodzieży poradni dla osób z problemami alkoholowymi oddziałów terapeutycznych w instytucjach totalnych tj. areszty śledcze zakłady karne punkty konsultacyjne działających na terenach gmin i powiatów. Celem studiów jest przygotowanie do pracy w obszarze profilaktyki społecznej oraz terapii uzależnień. Studia rozwijają wiedzę oraz praktyczne umiejętności wychowawcze. Ponadto pozwalają zdobyć wiedzę o działaniach terapeutycznych z wykorzystaniem najnowocześniejszych technik i metod do pracy z dziećmi młodzieżą niedostosowaną społecznie i/lub uzależnioną od narkotyków lub środków psychotropowych. Studia przygotowują absolwentów do diagnozowania niedostosowania społecznego oraz prowadzenia zajęć terapeutycznych (grupowych i indywidualnych) z dziećmi i młodzieżą z tzw. grup ryzyka (dzieci i młodzież wychowywana w rodzinach dysfunkcyjnych z diagnozą zaburzeń emocjonalnych zaburzeń zachowania i z pogranicza niedostosowania społecznego). Studia mają charakter kwalifikacyjny program tego kierunku jest zgodny z przepisami prawa uwzględnia wymagania określone Rozporządzeniem Ministra Nauki i Szkolnictwa Wyższego z dnia 25 lipca 2019 r. w sprawie standardu kształcenia przygotowującego do wykonywania zawodu nauczyciela (Dz. U. 2019 poz. 1450 ze zm.). Warunkiem ukończenia studiów podyplomowych jest uzyskanie zaliczeń w tym zaliczenia z praktyki (90 h) oraz zdaniem egzaminu dyplomowego.`,
    duration: "3 semestry",
    price: "8000zł",
    payments: "10x800zł",
    form: "100% online",
    practicalHours: "90h",
    modules: [
      {
        title: "Wprowadzenie do psychologii uzależnień",
        topics: [
          "Wprowadzenie do psychologii",
          "Historia psychologii",
          "Główne nurty i szkoły psychologiczne",
          "Metody badawcze w psychologii",
          "Podstawy biologii uzależnień",
          "Neurobiologia uzależnień",
          "Neuroprzekaźniki i ich rola w uzależnieniach",
          "Genetyka uzależnień",
          "Wprowadzenie do psychologii klinicznej",
          "Podstawowe pojęcia i teorie",
          "Psychopatologia i klasyfikacja zaburzeń",
          "Diagnoza kliniczna",
          "Metody badawcze w psychologii",
          "Podstawy metodologii badań",
          "Statystyka w psychologii",
          "Przeprowadzanie i analiza badań",
        ],
      },
      {
        title: "Wprowadzenie do terapii uzależnień",
        topics: [
          "Teorie uzależnień",
          "Modele i teorie uzależnień",
          "Biopsychospołeczny model uzależnień",
          "Czynniki ryzyka i czynniki ochronne",
          "Wprowadzenie do terapii uzależnień",
          "Podstawowe zasady terapii",
          "Modele interwencji terapeutycznych",
          "Etapy terapii uzależnień",
          "Psychopatologia uzależnień",
          "Zaburzenia współwystępujące z uzależnieniami",
          "Zaburzenia nastroju, lękowe, osobowości",
          "Diagnoza różnicowa",
          "Etyka i prawo w pracy terapeuty uzależnień",
          "Etyka zawodowa",
          "Prawne aspekty terapii uzależnień",
          "Prawa pacjenta",
        ],
      },
      {
        title: "Psychoterapia poznawczo-behawioralna",
        topics: [
          "Psychoterapia poznawczo-behawioralna",
          "Teoria i techniki",
          "Terapia uzależnień w kontekście CBT",
          "Praktyczne zastosowanie CBT",
          "Terapia motywacyjna",
          "Teoria motywacji i zmiany",
          "Techniki wywiadu motywacyjnego",
          "Case studies",
          "Terapia grupowa",
          "Dynamika grupowa",
          "Techniki prowadzenia grup terapeutycznych",
          "Praktyka grupowa",
          "Terapia rodzin",
          "Teorie systemów rodzinnych",
          "Techniki terapii rodzin",
          "Praca z rodzinami osób uzależnionych",
        ],
      },
      {
        title: "Terapie alternatywne i uzupełniające",
        topics: [
          "Terapie alternatywne i uzupełniające",
          "Terapia poznawczo-behawioralna (CBT)",
          "Terapia dialektyczno-behawioralna (DBT)",
          "Terapie wspomagające (np. terapia sztuką, terapia zajęciowa)",
          "Praktyki I",
          "Praktyka w placówkach leczenia uzależnień",
          "Superwizja kliniczna",
          "Refleksja i analiza przypadków",
          "Interwencje kryzysowe",
          "Teorie i techniki interwencji kryzysowej",
          "Praca z osobami w sytuacjach kryzysowych",
          "Techniki radzenia sobie z sytuacjami kryzysowymi",
          "Współpraca międzysektorowa",
          "Praca w zespole interdyscyplinarnym",
          "Współpraca z instytucjami publicznymi i organizacjami pozarządowymi",
          "Budowanie sieci wsparcia dla osób uzależnionych",
        ],
      },
      {
        title: "Zaawansowane techniki terapeutyczne",
        topics: [
          "Zaawansowane techniki terapeutyczne",
          "Terapia poznawczo-behawioralna (CBT)",
          "Terapia dialektyczno-behawioralna (DBT)",
          "Terapia akceptacji i zaangażowania (ACT)",
          "Profilaktyka uzależnień",
          "Programy profilaktyczne",
          "Edukacja zdrowotna i promocja zdrowia",
          "Analiza skuteczności programów profilaktycznych",
          "Badania w psychologii uzależnień",
          "Metodologia badań uzależnień",
          "Przeprowadzanie badań własnych",
          "Analiza i prezentacja wyników",
          "Praktyki kliniczne II",
          "Pogłębiona praktyka kliniczna",
          "Zaawansowana superwizja",
          "Studium przypadków",
        ],
      },
      {
        title: "Praca dyplomowa",
        topics: [
          "Projekt dyplomowy",
          "Przygotowanie projektu badawczego",
          "Przeprowadzenie badania",
          "Prezentacja wyników i obrona pracy dyplomowej",
        ],
      },
      {
        title: "Terapia uzależnień behawioralnych",
        topics: [
          "Uzależnienia behawioralne (hazard, gry komputerowe)",
          "Specyfika terapii uzależnień behawioralnych",
          "Przypadki kliniczne",
          "Praktyki specjalistyczne",
          "Intensywna praktyka w wybranej placówce",
          "Kompleksowa superwizja",
          "Ocena i analiza efektów terapeutycznych",
          "Podsumowanie zdobytej wiedzy i umiejętności",
          "Przygotowanie do egzaminu końcowego",
          "Case studies i symulacje terapeutyczne",
        ],
      },
    ],
    faculty: [
      "Wykwalifikowana kadra specjalistów z dziedziny psychologii, psychiatrii, terapii uzależnień oraz innych pokrewnych dziedzin.",
      "W skład kadry wejdą zarówno wykładowcy akademiccy jak i praktycy z wieloletnim doświadczeniem klinicznym.",
    ],
    evaluation: [
      "Wyniki egzaminów pisemnych",
      "Prace pisemne",
      "Projekty badawcze",
      "Ocena praktyk klinicznych",
    ],
    jobOpportunities: [
      "Ośrodki leczenia uzależnień",
      "Poradnie zdrowia psychicznego",
      "Szpitale psychiatryczne",
      "Organizacje pozarządowe zajmujące się profilaktyką i terapią uzależnień",
      "Własna praktyka terapeutyczna",
      "Udział w badaniach naukowych i programach profilaktycznych",
    ],
  },
];
