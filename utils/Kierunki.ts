import { cyberpsychologia } from "./Cyberpsychologia";
import { diagnozaStrategieTerapeutyczneLeczeniuHiperseksualnosci } from "./Diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci";
import { edukacjaIntegracyjnaWlaczajaca } from "./Edukacja-integracyjna-i-wlaczajaca";
import { etyka } from "./Etyka";
import { integracjaSensorycznaTerapiaReki } from "./Integracja-sensoryczna-z-terapia-reki";
import { logopedia } from "./Logopedia";
import { oligofrenopedagogika } from "./Oligofrenopedagogika";
import { pedagogikaKorekcyjna } from "./Pedagogika-korekcyjna";
import { pedagogikaSpecjalnaAutyzm } from "./Pedagogika-specjalna-autyzm";
import { przygotowaniePedagogiczne } from "./Przygotowanie-pedagogiczne";
import { psychologiaUzaleznienUzaleznieniaBehawioralne } from "./Psychologia-uzaleznien-uzaleznienia-behawioralne";
import { psychologiaUzaleznienTerapiaUzaleznien } from "./Psychologia-uzaleznien-z-terapia-uzaleznien";
import { psychoterapia } from "./Psychoterapia";
import { seksuologiaPraktyczna } from "./Seksuologia-praktyczna";
import { surdopedagogika } from "./Surdopedagogika";
import { trenerUmiejetnosciSpolecznych } from "./Trener-umiejetnosci-spolecznych";
import { tyflopedagogika } from "./Tyflopedagogika";
import { wczesneWspomaganieRozwojuDziecka } from "./Wczesne-wspomaganie-rozwoju-dziecka";
import { wychowanieDoZyciaWRodzinie } from "./Wychowanie-do-zycia-w-rodzinie";
import { zarzadzanieOswiata } from "./Zarzadzanie-oswiata";
import { informatyka } from "./Informatyka";
import { dydaktykaJezykaObcegoNiemiecki } from "./Jezyk-niemiecki";
import { pedagogikaMariiMontessori } from "./Pedagogika-Marii-Montesori";
import { przyrodaWSzkolePodstawowej } from "./Przyroda-w-szkole-podstawowej";
import { edukacjaDlaBezpieczenstwa } from "./Edukacja-dla-bezpieczenstwa";
// import { rolnictwo } from "./Rolnictwo";
import { wychowanieFizyczneWSzkole } from "./Wychowanie-fizyczne-w-szkole";
import { chemiaWSzkole } from "./Chemia-w-szkole";
import { jezykAngielskiWWychowaniuPrzedszkolnymIEdukacjiWczesnoszkolnej } from "./Jezyk-angielski";
import {Course} from "@/utils/types";

export const courses: Course[] = [
  //   category: "psychologia i psychoterapia",

  psychoterapia,
  psychologiaUzaleznienTerapiaUzaleznien,
  psychologiaUzaleznienUzaleznieniaBehawioralne,
  diagnozaStrategieTerapeutyczneLeczeniuHiperseksualnosci,
  cyberpsychologia,
  seksuologiaPraktyczna,

  //  category: "psychologia i psychoterapia",

  // category: "pedagogika specjalna i korekcyjna",

  logopedia,
  pedagogikaKorekcyjna,
  pedagogikaSpecjalnaAutyzm,
  // zrobione
  oligofrenopedagogika,
  // zrobione
  surdopedagogika,
  // zrobione
  tyflopedagogika,
  integracjaSensorycznaTerapiaReki,
  wczesneWspomaganieRozwojuDziecka,
  // zrobione
  edukacjaIntegracyjnaWlaczajaca,
  przygotowaniePedagogiczne,
  trenerUmiejetnosciSpolecznych,
  pedagogikaMariiMontessori,

  // category: "pedagogika specjalna i korekcyjna",

  //  category: "zarządzanie i dydaktyka edukacyjna",

  zarzadzanieOswiata,

  etyka,
  // zrobione

  wychowanieDoZyciaWRodzinie,
  informatyka,
  dydaktykaJezykaObcegoNiemiecki,

  // zrobione
  przyrodaWSzkolePodstawowej,

  //zrobione
  edukacjaDlaBezpieczenstwa,
  // rolnictwo, nie ma programu

  //zrobione
  wychowanieFizyczneWSzkole,
  // zrobione
  chemiaWSzkole,
  jezykAngielskiWWychowaniuPrzedszkolnymIEdukacjiWczesnoszkolnej,

  // category: "zarządzanie i dydaktyka edukacyjna",
];
