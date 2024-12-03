import WykladowcaCard from "@/components/WykladowcaCard";
import React from "react";

const wykladowcy = [
  {
    imieNazwisko: "Wioletta Ginter",
    tytulZawodowy: "Pedagog",
    opis: "Magister pedagogiki specjalizujący się w poradnictwie i pomocy psychopedagogicznej. Aktywny pedagog specjalny, terapeuta ręki, specjalista w edukacji włączającej i wykładowca. Posiada bogate doświadczenie, przekazując swoją wiedzę zarówno uczniom, jak i nauczycielom w różnych instytucjach edukacyjnych. Specjalista ORE w zakresie edukacji włączającej.",
  },
  {
    imieNazwisko: "Bogusław Barański",
    tytulZawodowy: "Seksuolog",
    opis: "Psychoterapeuta, seksuolog, mentor z 20-letnim doświadczeniem w pracy indywidualnej oraz z grupami mężczyzn i kobiet nad relacjami w związkach. Prowadzi sesje i warsztaty w Polsce, Szwecji i w Niemczech. Specjalizuje się w terapiach indywidualnych, terapii par, rodzin i dzieci. Jako psychoterapeuta systemowy wykorzystuje podejście integratywne, korzystając z różnych nurtów, które służą pacjentowi, prowadząc go do świadomego zrozumienia siebie. Jednym z jego ulubionych nurtów psychoterapii jest logoterapia Frankla. Specjalizuje się w terapii par, interwencji kryzysowej, uzależnieniach, trudnościach w relacjach, problemach związanych z tożsamością, zaburzeniach lękowych i depresyjnych oraz problemach seksualnych.",
  },
  {
    imieNazwisko: "Justyna Bugdoł",
    tytulZawodowy: "Pedagog",
    opis: "Magister pedagogiki specjalnej, nauczyciel dyplomowany, terapeuta edukacji i rewalidacji osób ze spektrum autyzmu, trener TUS, pedagog w Zespole Szkół Specjalnych.",
  },
  {
    imieNazwisko: "Anna Ławniczak",
    tytulZawodowy: "Psycholog",
    opis: "Magister psychologii, specjalizujący się w seksuologii klinicznej i psychologii kryminologicznej. Wykładowca studiów podyplomowych z obszaru pedagogiki specjalnej, seksuologii, seksuologii klinicznej. Terapeuta dzieci, par, rodzin. Aktywnie angażuje się w pracę na rzecz dzieci w szkołach i przedszkolach. Specjalista ORE w zakresie edukacji włączającej.",
  },
  {
    imieNazwisko: "Małgorzata Solowska",
    tytulZawodowy: "Trener",
    opis: "Magister języka angielskiego, magister historii, trener i moderator TIK, MIEE Educator, trener dla zagranicznych narodowych agencji Erasmus, prelegent konferencji i szkoleń międzynarodowych oraz ogólnopolskich. Specjalista ORE w zakresie edukacji włączającej. Trener TIK w tym wykorzystania nowych technologii w pracy z uczniami ze SPE. Wykładowca studiów podyplomowych z zakresu zarządzania oświatą, historii oraz języka angielskiego.",
  },
  {
    imieNazwisko: "Anna Falkowska",
    tytulZawodowy: "Pedagog, Socjolog",
    opis: "Dyplomowany socjolog (specjalizacja: zarządzanie zasobami ludzkimi), dyplomowany specjalista z zakresu ochrony środowiska, doradca zawodowy otwarty na kształtowanie świadomości ekologicznej, doktor nauk pedagogicznych w Akademii Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie, wykładowca akademicki na uczelniach o profilu przyrodniczym, autorka wielu publikacji naukowych i po-konferencyjnych. Od kilku lat zajmuję się szeroko pojętą edukacją ekologiczną: w przedsiębiorstwach, w instytucjach państwowych, w organizacjach pozarządowych, w placówkach oświatowych (w przedszkolach i szkołach podstawowych).",
  },
  {
    imieNazwisko: "Monika Kromolan",
    tytulZawodowy: "Psycholog",
    opis: "Magister psychologii z zakresu neuropsychologii i psychologii klinicznej. Specjalista w zintegrowanej edukacji wczesnoszkolnej, edukacji informatycznej oraz edukacji i rehabilitacji osób z niepełnosprawnością intelektualną. Terapeuta WWRD i hipoterapii. Specjalista w zakresie komunikacji alternatywnej i wspomagającej oraz diagnozy alternatywnych i wspomagających metod porozumiewania się.",
  },
  {
    imieNazwisko: "Joanna Zawadzka",
    tytulZawodowy: "Psycholog",
    opis: "Magister języka polskiego, specjalista z zakresu terapii pedagogicznej, diagnozy i profilaktyki społecznej. Terapeuta z obszaru diagnozy dysleksji rozwojowej, egzaminator OKE, nauczyciel języka polskiego jako obcego, prezes Oddziału Towarzystwo Dysleksji w Rybniku. Doradca i autor publikacji dla IBE- Instytut Badań Edukacyjnych. Pracuje z uczniami uzdolnionymi (przygotowanie do egzaminów/olimpiad).",
  },
  {
    imieNazwisko: "Gabriela Marcisz",
    tytulZawodowy: "Psychoterapeuta",
    opis: "Magister psychologii, psychoterapeuta. Terapeuta dorosłych, par i rodzin. Specjalista psychoterapii w Ośrodku Interwencji Kryzysowej, Poradni Zdrowia Psychicznego, Poradni Leczenia Nerwic i na Dziennym Oddziale Leczenia Nerwic. Specjalista skupiony na pracy z całymi rodzinami i osobami pełnoletnimi.",
  },
  {
    imieNazwisko: "Aleksandra Wowra",
    tytulZawodowy: "Pedagog",
    opis: "Magister pedagogiki – specjalność: opiekuńczo – wychowawczej, oligofrenopedagog, specjalista ORE w zakresie edukacji włączającej, czynny pedagog specjalny. Wykładowca na kierunkach pedagogiki specjalnej na studiach podyplomowych.",
  },
  {
    imieNazwisko: "Paulina Rosa",
    tytulZawodowy: "Logopeda",
    opis: "Magister polonistyki, logopeda, egzaminator TELC języka polskiego jako obcego, trener języka polskiego jako obcego, czynny nauczyciel w szkole podstawowej i ponadpodstawowej, terapeuta sesji logopedycznych. Trener z obszaru edukacji włączającej. Wykładowca na studiach podyplomowych.",
  },
  {
    imieNazwisko: "Anna Kowalska",
    tytulZawodowy: "Psycholog",
    opis: "Magister psychologii, psychoonkolog, certyfikowany psychoterapeuta Polskiego Towarzystwa Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej, muzykoterapeuta. Psychodietetyk, trener nowoczesnego doradztwa zawodowego i edukacyjnego. Terapeuta z zakresu psychoterapii par, EFT – terapii skoncentrowanej na emocjach, pracy z dziećmi i młodzieżą. Specjalista edukacji włączającej. Wykładowca studiów podyplomowych z zakresu swoich specjalizacji.",
  },
  {
    imieNazwisko: "Monika Frysz",
    tytulZawodowy: "Trener",
    opis: "Trener kompetencji cyfrowych, specjalista ds. praw autorskich, sztucznej inteligencji, wirtualnej i rozszerzonej rzeczywistości. Magister ekonomii i finansów, trener biznesu, coach, instruktor praktycznej nauki zawodu. Aktywna w branży od 2015 roku, specjalizuje się w kompetencjach cyfrowych i grafice komputerowej. Jako absolwentka finansów i ekonomii na Uniwersytecie Ekonomicznym w Katowicach, wykazuje silne zainteresowanie cyfryzacją oraz prawami autorskimi w edukacji. Pasjonatka innowacyjnych technologii i sztucznej inteligencji. Skupia się na najnowszych trendach w technologii, równocześnie pielęgnując zamiłowanie do grafiki komputerowej.",
  },
  {
    imieNazwisko: "Julita Rozmus",
    tytulZawodowy: "Logopeda/Neurologopeda",
    opis: "Logopedka oraz neurologopedka, posiadająca szereg kwalifikacji z obszaru swojej pracy, takich jak praca z dziećmi z mutyzmem, z problemem jąkania, z zakresu zaburzeń percepcji słuchowej i zaburzeń słuchu.",
  },
  {
    imieNazwisko: "Jakub Ruks",
    tytulZawodowy: "Etyk",
    opis: "Doktor filozofii. Wykładowca na kierunkach: etyka oraz filozofia. Czynny nauczyciel etyki i filozofii w szkole podstawowej i ponadpodstawowej. Trener pracujący z uczniem uzdolnionym – przygotowanie do certyfikatów z języka niemieckiego. Specjalista z zakresu wiedzy o młodym człowieku. Autor scenariuszy zajęć do etyki na wszystkich poziomach kształcenia. Specjalista ORE w zakresie edukacji włączającej.",
  },
  {
    imieNazwisko: "Sylwia Cuber",
    tytulZawodowy: "Pedagog",
    opis: "Magister pedagogiki specjalność: edukacja przedszkolna i wczesnoszkolna, oligofrenopedagogika, edukacja elementarna z dodatkowym językiem angielskim, czynny pedagog specjalny w szkole podstawowej, specjalista ORE w zakresie edukacji włączającej, trener treningu umiejętności społecznych (TUS) dzieci ze spektrum autyzmu, edukacja i terapia osób ze spektrum autyzmu. Wykładowca studiów podyplomowych z zakresu pedagogiki specjalnej.",
  },
  {
    imieNazwisko: "Natalia Chruściel – Janas",
    tytulZawodowy: "Logopeda/Neurologopeda",
    opis: "Uniwersytet Medyczny we Wrocławiu: neurologopedia z wczesną interwencją logopedyczną, Uniwersytet Wrocławski: logopedia ogólna, Uniwersytet Wrocławski: filologia polska, polonista jako lider społeczności lokalnej. Certyfikowany Terapeuta Ortodoncji Funkcjonalnej MFS, Terapia Integracji Sensorycznej I stopnia (mgr Aleksandra Owczarz-Jankowska); Innowacyjne metody elektrostymulacji zewnętrznej i wewnętrznej w logopedii – podejście praktyczne (mgr Ewa Wojewoda, mgr Aleksandra Kaczyńska); Afazja- diagnoza i terapia (prof. zw. dr hab. Maria Pąchalska); Terapia sensomotoryczna i korekta dysfunkcji ustno twarzowych (dr A Regner); Trening Umijetności Społecznych (TUS) (mgr E. Łukowska); AAC Wprowadzenie do komunikacji alternatywnej i wspomagającej (mgr P. Gałczyńska); Terapia logopedyczna dziecka z nieprawidłowościami funkcjonowania aparatu ustno-twarzowego (Ilona Brzozowska-Misiewicz); O laktacji interdyscyplinarnie-warsztat laktacyjny (lek med.S. Jeż, dr. A.Ptak); Elementy metody werbo-tonalnej. Wspomaganie rozwoju mowy i komunikacji (mgr A. Dziedzic); Masaż logopedyczny od podstaw – podejście praktyczne, (mgr Aleksandra Kaczyńska); ORM kreatywne postępowanie logopedyczne (mgr A. Gładowicz-Bojarska); Werbogesty (mgr A. Gładowicz-Bojarska); Opóźniony rozwój mowy- diagnoza i terapia (mgr Dagmara Kalczyńska); Terapia ręki i zaburzeń motoryki małej I i II stopnia tytuł: Terapeuta ręki (ProCentrum, mgr Katarzyna Gromelska); Logorytmika – ruch, słuch, słowo (ProCentrum, mgr Ewa Bombol); Terapia sygmatyzmu międzyzebowego (mgr Anna Balewska); Terapia sygmatyzmu bocznego (mgr Anna Balewska); Kurs metody „Dyna Lingua MS”; „W świecie elfów”. Afazja dziecięca i inne zaburzenia komunikacji. Objawy, diagnoza, terapia. Diagnoza i terapiia ankyloglosji; Uprawnienia pedagogiczne; stopień zawodowy nauczyciela kontraktowego;\n\nTerapie logopedyczne dzieci z zaburzeniami ze spektrum autyzmu, afazją, dyslalią, opóźnionym rozwojem mowy; Zespołem Downa; Dziecięcym Porażeniem Mózgowym; terapie miofunkcjonalne, elektrostymulacja; ocena i terapia funkcji prymarnych; prowadzanie diagnoz logopedycznych; terapie logopedyczne młodzieży z zaburzeniami z niepełnosprawnością głęboką i sprzężoną. Prowadzenie zajęć z terapii ręki, logorytmiki, warsztatów logopedycznych dla dzieci i rodziców. Tworzenie indywidualnych programów terapii (IPET, Arkusz wyspecjalizowanej oceny ucznia).",
  },
];

const WykladowcyPage: React.FC = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl tracking-tight font-bold text-center py-10">
        Nasi Wykładowcy
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wykladowcy.map((wykladowca, index) => (
          <WykladowcaCard
            key={index}
            imieNazwisko={wykladowca.imieNazwisko}
            tytulZawodowy={wykladowca.tytulZawodowy}
            opis={wykladowca.opis}
          />
        ))}
      </div>
    </div>
  );
};

export default WykladowcyPage;

// import React from "react";

// const ProfileCard = () => {
//   return (
//     <div className=" w-full bg-zinc-100 space-y-10">
//       <div className="flex max-w-7xl mx-auto bg-white overflow-hidden md:max-w-7xl">
//         <div className="md:flex">
//           <div className="md:shrink-0">
//             <img
//               className="h-96 w-full object-cover md:h-full md:w-96"
//               src="/assets/kontakt.jpg"
//               alt="Profile"
//             />
//           </div>
//           <div className="p-8 flex flex-col justify-center items-start">
//             <div className="uppercase text-xl tracking-tight text-indigo-500 font-semibold">
//               Prof. dr hab. Mateusz Gola
//             </div>
//             <p className="mt-2 text-gray-500">
//               Profesor Instytutu Psychologii Polskiej Akademii Nauk oraz
//               profesor w Institute for Neural Computation na Uniwersytecie
//               Kalifornijskim w San Diego, specjalista w zakresie neuronauki,
//               szczególnie uzależnień behawioralnych (np. od pornografii,
//               zachowań seksualnych, gier komputerowych, czy hazardu) i
//               skutecznej zmiany nawyków.
//               <br /> <br /> Od 2009 roku pracuje jako psychoterapeuta. Posiada
//               licencję Polskiego Towarzystwa Terapii Poznawczo-Behawioralnej
//               oraz International Institute for Trauma and Addiction
//               Professionals. Pomaga głównie osobom z nałogami, zaburzeniami
//               nastroju oraz zaburzeniami lękowymi. <br /> <br />
//               Współzałożyciel PredictWatch, firmy rozwijającej technologie
//               wspierające osoby uzależnione w utrzymaniu abstynencji oraz
//               pozwalające na wczesną predykcję nawrotów z wykorzystaniem
//               urządzeń mobilnych. Autor 3 patentów i ponad 120 publikacji
//               popularnonaukowych i naukowych w tak prestiżowych czasopismach,
//               jak: “Lancet Psychiatry”, „Nature Neuropsychopharmacology”, “World
//               Psychiatry”, „Journal of Behavioral Addiction”, czy „Journal of
//               Sexual Medicine”. Prace te przyczyniły się do umieszczenia przez
//               Światową Organizację Zdrowia kompulsywnych zachowań seksualnych w
//               Międzynarodowej Klasyfikacji Chorób. Laureat szeregu prestiżowych
//               nagród za osiągnięcia naukowe i popularyzację wyników badań
//               dotyczących mózgu.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex max-w-7xl mx-auto bg-white overflow-hidden md:max-w-7xl">
//         <div className="md:flex">
//           <div className="p-8 flex flex-col justify-center items-start">
//             <div className="uppercase text-xl tracking-tight text-indigo-500 font-semibold">
//               dr Robert Kowalczyk
//             </div>
//             <p className="mt-2 text-gray-500">
//               Seksuolog kliniczny, psychoterapeuta, biegły sądowy.
//               <br /> <br /> Absolwent psychologii stosowanej oraz zarządzania
//               kulturą na Uniwersytecie Jagiellońskim, studiów podyplomowych z
//               zakresu opiniowania sądowo-psychologicznego: Uniwersytet Śląski w
//               Katowicach, Studium Doktoranckiego Wydziału Lekarskiego Śląskiego
//               Uniwersytetu Medycznego w Zabrzu, Szkoły Terapii
//               Poznawczo-Behawioralnej Centrum CBT-EDU.
//               <br /> <br />
//               Specjalista seksuolog kliniczny – Certyfikat Polskiego Towarzystwa
//               Seksuologicznego. Psychoterapeuta – seksuolog w Centrum Terapii
//               Lew-Starowicz. Uczestniczy w realizacji wielu projektów
//               naukowo-badawczych z dziedziny seksuologii, psychologii i
//               psychiatrii. Członek Europejskiego Towarzystw Medycyny Seksualnej
//               oraz Rady Konsultacyjnej ds. MSM Krajowego Centrum ds. AIDS -
//               Agendy Ministra Zdrowia. Kierownik Zakładu Seksuologii Krakowskiej
//               Akademii im. Andrzeja Frycza Modrzewskiego. Pełni funkcje
//               wiceprzewodniczącego Rady Naukowej Ośrodka Badań Społecznych nad
//               Seksualnością ISNS UW.
//               <br /> <br />
//               Wykładowca na Warszawskim Uniwersytecie Medycznym, Akademii
//               Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie,
//               Uniwersytecie SWPS oraz w Centrum Medycznym Kształcenia
//               Podyplomowego.
//               <br /> <br />
//               Autor i współautor kilkudziesięciu publikacji medycznych i
//               psychologicznych o zasięgu krajowym i międzynarodowym.
//               <br /> <br />
//               Prowadzi w radiu TOK Fm SEXAudycję i SEXPodcast.
//             </p>
//           </div>
//           <div className="md:shrink-0">
//             <img
//               className="h-96 w-full object-cover md:h-full md:w-96"
//               src="/assets/kontakt.jpg"
//               alt="Profile"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex max-w-7xl mx-auto bg-white overflow-hidden md:max-w-7xl">
//         <div className="md:flex">
//           <div className="md:shrink-0">
//             <img
//               className="h-96 w-full object-cover md:h-full md:w-96"
//               src="/assets/kontakt.jpg"
//               alt="Profile"
//             />
//           </div>
//           <div className="p-8 flex flex-col justify-center items-start">
//             <div className="uppercase text-xl tracking-tight text-indigo-500 font-semibold">
//               dr n. med. Agnieszka Koźmin-Burzyńska
//             </div>
//             <p className="mt-2 text-gray-500">
//               Specjalista psychiatra, psychoterapeuta.
//               <br /> <br /> Absolwentka Śląskiego Uniwersytetu Medycznego w
//               Katowicach. Pierwsze doświadczenia zawodowe w zakresie psychiatrii
//               nabywała w Klinice Psychiatrii i Psychoterapii Śląskiego
//               Uniwersytetu Medycznego w Katowicach, a także Oddziałach
//               Psychiatrycznych w Międzybrodziu Bialskim, Lublińcu czy Centrum
//               Psychiatrii w Katowicach oraz Oddziale Leczenia Nerwic
//               Górnośląskiego Centrum Medycznego w Katowicach gdzie nadal
//               pracuje. <br /> <br />W trakcie specjalizacji, ukończyła
//               czteroletnie studia podyplomowe w zakresie psychoterapii w
//               Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie.
//               Prowadzi psychoterapię w nurcie psychodynamicznym, pracuje z
//               osobami dorosłymi.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex max-w-7xl mx-auto bg-white overflow-hidden md:max-w-7xl">
//         <div className="md:flex">
//           <div className="p-8 flex flex-col justify-center items-start">
//             <div className="uppercase text-xl tracking-tight text-indigo-500 font-semibold">
//               mgr Bogusław Barański
//             </div>
//             <p className="mt-2 text-gray-500">
//               Psychoterapeuta, seksuolog, mentor.
//               <br /> <br /> 20 letnie doświadczenie w pracy indywidualnej oraz z
//               grupami mężczyzn, kobiet nad relacjami w związkach, prowadząc
//               sesje i warsztaty w Polsce, Szwecji i w Niemczech. Terapiach
//               indywidualnych, terapii par, rodzin, dzieci.
//               <br /> <br />
//               Psychoterapeuta systemowy wykorzystuje podejście integratywne,
//               korzystając z różnych nurtów, które służą pacjentowi, prowadząc go
//               do świadomego zrozumienia siebie. Jednym z ulubionych nurtów
//               psychoterapii jest logoterapia Frankla, w której podąża wraz
//               pacjentem do odkrycia i zrozumienia sensu. Specjalizuje się w
//               terapii par, interwencji kryzysowej, uzależnieniach, trudnościach
//               w relacjach, problemach związanych z tożsamością, zaburzeniach
//               lękowych i depresyjnych oraz problemach seksualnych.
//             </p>
//           </div>
//           <div className="md:shrink-0">
//             <img
//               className="h-96 w-full object-cover md:h-full md:w-96"
//               src="/assets/kontakt.jpg"
//               alt="Profile"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
