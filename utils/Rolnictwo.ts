// import { Course } from "./Kierunki";

// export const rolnictwo: Course = {
//   id: "rolnictwo",
//   title: "Rolnictwo",
//   banerDescription:
//     "Zdobądź wiedzę i umiejętności niezbędne do prowadzenia działalności rolniczej, zarządzania gospodarstwem oraz zrozumienia funkcjonowania rynku rolnego.",
//   description: `<ul className="list-disc list-inside space-y-2">
//     <li>Osób zainteresowanych zdobyciem wiedzy z zakresu rolnictwa i agrobiznesu</li>
//     <li>Przyszłych i obecnych właścicieli gospodarstw rolnych</li>
//     <li>Osób planujących prowadzenie działalności agroturystycznej lub alternatywnej na obszarach wiejskich</li>
//   </ul>`,
//   description2: `Studia podyplomowe na kierunku „Rolnictwo” mają na celu zapoznanie słuchaczy z zasadami i praktyką funkcjonowania rynku rolnego, zarządzaniem jednostką rolniczą oraz prowadzeniem działalności agroturystycznej. Program studiów obejmuje zagadnienia związane z produkcją rolniczą, uprawą roli i roślin, rolnictwem ekologicznym oraz Wspólną Polityką Rolną Unii Europejskiej.`,
//   description3: `W ramach studiów słuchacze zdobywają wiedzę na temat rynków rolnych, ekonomicznych aspektów produkcji rolniczej, marketingu artykułów rolnych oraz zasad zarządzania agrofirmą. Ponadto, studenci zapoznają się z aktualnymi regulacjami dotyczącymi rolnictwa oraz mogą zdobyć kwalifikacje rolnicze, które są uznawane przez Krajowy Ośrodek Wsparcia Rolnictwa oraz Agencję Restrukturyzacji i Modernizacji Rolnictwa.`,
//   description4: ``,
//   descriptionP1: "",
//   duration: "2 semestry",
//   practicalHours: "Zajęcia terenowe",
//   price: "3600zł",
//   payments: "10 x 360zł",
//   form: "Studia Real Time Online, zajęcia w&nbsp;czasie rzeczywistym",
//   scheduleInfo: "",
//   schedule: [],
//   modules: [
//     {
//       title: "Moduł kształcenia specjalistycznego",
//       topics: [
//         {
//           title: "Podstawy gleboznawstwa rolniczego (30 godzin)",
//           subtopics: [
//             { title: "Zasady budowy i właściwości gleb rolniczych" },
//             { title: "Praktyczne aspekty gleboznawstwa w rolnictwie" },
//             { title: "Metody analizy gleby i ich interpretacja" },
//           ],
//         },
//         {
//           title: "Ochrona roślin (10 godzin)",
//           subtopics: [
//             { title: "Choroby i szkodniki roślin uprawnych" },
//             { title: "Metody ochrony roślin w praktyce rolniczej" },
//           ],
//         },
//         {
//           title: "Gospodarka nawozowa (10 godzin)",
//           subtopics: [
//             { title: "Znaczenie nawożenia w rolnictwie" },
//             { title: "Dobór nawozów mineralnych i organicznych" },
//             { title: "Planowanie nawożenia w gospodarstwie rolnym" },
//           ],
//         },
//         {
//           title: "Uprawa roli i roślin (15 godzin)",
//           subtopics: [
//             { title: "Techniki uprawy roli i roślin" },
//             { title: "Wybór odpowiednich gatunków i odmian roślin" },
//             { title: "Praktyczne aspekty agrotechniki" },
//           ],
//         },
//         {
//           title: "Podstawy produkcji ogrodniczej (10 godzin)",
//           subtopics: [
//             { title: "Zasady produkcji warzyw i owoców" },
//             { title: "Techniki uprawy w ogrodnictwie" },
//             { title: "Problematyka ochrony roślin w ogrodnictwie" },
//           ],
//         },
//         {
//           title:
//             "Technologie produkcji roślin rolniczych. Rolnictwo ekologiczne i precyzyjne (25 godzin)",
//           subtopics: [
//             { title: "Znaczenie rolnictwa ekologicznego i precyzyjnego" },
//             { title: "Nowoczesne technologie w produkcji roślin" },
//             { title: "Ekologiczne i precyzyjne metody uprawy" },
//           ],
//         },
//         {
//           title: "Łąkarstwo (10 godzin)",
//           subtopics: [
//             { title: "Zasady uprawy traw i roślin pastewnych" },
//             { title: "Zagadnienia związane z użytkowaniem łąk i pastwisk" },
//           ],
//         },
//         {
//           title:
//             "Odnawialne źródła energii w gospodarstwie rolniczym i uprawa roślin energetycznych (20 godzin)",
//           subtopics: [
//             { title: "Rolnictwo jako źródło energii odnawialnej" },
//             { title: "Uprawa roślin energetycznych" },
//             { title: "Zastosowanie biomasy w gospodarstwie rolnym" },
//           ],
//         },
//         {
//           title: "Podstawy produkcji i obrotu materiałem siewnym (10 godzin)",
//           subtopics: [
//             { title: "Hodowla i produkcja materiału siewnego" },
//             { title: "Normy i zasady obrotu materiałem siewnym" },
//           ],
//         },
//         {
//           title: "Podstawy kontroli fitosanitarnej (10 godzin)",
//           subtopics: [
//             { title: "Kontrola jakościowa i ilościowa materiału siewnego" },
//             { title: "Zwalczanie chorób i szkodników w rolnictwie" },
//           ],
//         },
//         {
//           title:
//             "Podstawy fizjologii i żywienia zwierząt gospodarskich (20 godzin)",
//           subtopics: [
//             { title: "Podstawy fizjologii zwierząt gospodarskich" },
//             { title: "Zasady żywienia i hodowli zwierząt" },
//           ],
//         },
//         {
//           title: "Zasady chowu zwierząt gospodarskich (10 godzin)",
//           subtopics: [
//             { title: "Wybór gatunków i ras zwierząt gospodarskich" },
//             { title: "Organizacja chowu i hodowli zwierząt" },
//           ],
//         },
//         {
//           title: "Podstawy kontroli weterynaryjnej (10 godzin)",
//           subtopics: [
//             { title: "Zasady kontroli zdrowia zwierząt" },
//             { title: "Profilaktyka chorób zakaźnych w stadach zwierząt" },
//           ],
//         },
//         {
//           title:
//             "Organizacja gospodarstw rolnych. Rolnictwo polskie XX i XXI wieku (10 godzin)",
//           subtopics: [
//             { title: "Struktura i organizacja gospodarstw rolnych" },
//             {
//               title:
//                 "Zmiany w rolnictwie polskim na przestrzeni XX i XXI wieku",
//             },
//           ],
//         },
//         {
//           title: "Podstawy prawa i prawa rolnego (10 godzin)",
//           subtopics: [
//             {
//               title:
//                 "Podstawy prawa związane z prowadzeniem działalności rolniczej",
//             },
//             { title: "Znaczenie przepisów prawa rolnego dla rolnictwa" },
//           ],
//         },
//         {
//           title: "Rachunkowość gospodarstw rolnych (10 godzin)",
//           subtopics: [
//             { title: "Prowadzenie księgowości w gospodarstwach rolnych" },
//             { title: "Analiza ekonomiczna działalności rolniczej" },
//           ],
//         },
//         {
//           title: "Funkcjonowanie rynków rolnych. Rynki rolne w UE (10 godzin)",
//           subtopics: [
//             { title: "Mechanizmy funkcjonowania rynków rolnych" },
//             {
//               title:
//                 "Uwarunkowania handlu produktami rolnymi w Unii Europejskiej",
//             },
//           ],
//         },
//         {
//           title: "Kierunki rozwoju techniki rolniczej (15 godzin)",
//           subtopics: [
//             { title: "Nowoczesne technologie w rolnictwie" },
//             {
//               title:
//                 "Innowacje techniczne wspierające produkcję rolno-spożywczą",
//             },
//           ],
//         },
//         {
//           title: "Zarządzanie agrofirmą (20 godzin)",
//           subtopics: [
//             {
//               title:
//                 "Planowanie i organizacja działalności gospodarczej w rolnictwie",
//             },
//             {
//               title:
//                 "Zarządzanie zasobami ludzkimi i finansowymi w gospodarstwie rolnym",
//             },
//           ],
//         },
//         {
//           title: "Doradztwo rolnicze (30 godzin)",
//           subtopics: [
//             { title: "Metody i techniki doradztwa rolniczego" },
//             { title: "Rola doradztwa w doskonaleniu produkcji rolnej" },
//           ],
//         },
//         {
//           title:
//             "Zrównoważony rozwój rolnictwa i obszarów wiejskich (20 godzin)",
//           subtopics: [
//             {
//               title:
//                 "Aspekty ekologiczne, społeczne i ekonomiczne zrównoważonego rozwoju w rolnictwie",
//             },
//             {
//               title: "Polityki i programy wsparcia dla obszarów wiejskich",
//             },
//           ],
//         },
//         {
//           title:
//             "Agroturystyka i alternatywne rodzaje działalności rolniczej oraz innej na obszarach wiejskich (20 godzin)",
//           subtopics: [
//             {
//               title:
//                 "Rozwój agroturystyki jako alternatywnej formy dochodu w rolnictwie",
//             },
//             {
//               title: "Działalność pozarolnicza na obszarach wiejskich",
//             },
//           ],
//         },
//         {
//           title: "Zajęcia terenowe (20 godzin)",
//           subtopics: [
//             {
//               title:
//                 "Praktyczne zajęcia w terenie obejmujące wybrane zagadnienia z zakresu produkcji rolniczej i zarządzania gospodarstwem rolnym",
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   faculty: `Zajęcia prowadzone są przez doświadczonych praktyków i ekspertów w dziedzinie rolnictwa, agrobiznesu oraz zarządzania gospodarstwem rolnym.`,
//   practices: `<ul className="list-disc list-inside space-y-2">
//     <li>Zajęcia terenowe obejmują praktyczne zajęcia w terenie, umożliwiające zastosowanie zdobytej wiedzy w praktyce.</li>
//     <li>Praktyki mogą być realizowane w gospodarstwach rolnych, przedsiębiorstwach agrobiznesu oraz instytucjach związanych z rolnictwem.</li>
//   </ul>`,
//   evaluation: `Ocena efektów kształcenia opiera się na aktywności podczas zajęć, zaliczeniach poszczególnych modułów oraz przygotowaniu pracy dyplomowej.`,
//   jobOpportunities: `<span class="text-lg font-semibold">Absolwenci programu będą przygotowani do pracy jako:</span>
//     <span class="block mb-2 mt-2">-Właściciele i menedżerowie gospodarstw rolnych</span>
//     <span class="block mb-2">-Specjaliści w przedsiębiorstwach agrobiznesu</span>
//     <span class="block mb-2">-Konsultanci i doradcy rolniczy</span>
//     <span class="block mb-2">-Pracownicy instytucji związanych z rolnictwem i obszarami wiejskimi</span>
//     <span class="block mb-2">-Organizatorzy działalności agroturystycznej i alternatywnej na obszarach wiejskich</span>
//   `,
//   invite: `<div class=''> <p class='text-gray-100'>Zdobądź wiedzę i umiejętności niezbędne do prowadzenia działalności rolniczej i agroturystycznej, zarządzania gospodarstwem oraz zrozumienia funkcjonowania rynku rolnego.</p></div>`,
// };
