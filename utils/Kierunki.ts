import { cyberpsychologia } from "./Cyberpsychologia";
import { diagnozaStrategieTerapeutyczneLeczeniuHiperseksualnosci } from "./Diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci";
import { psychologiaUzaleznienUzaleznieniaBehawioralne } from "./Psychologia-uzaleznien-uzaleznienia-behawioralne";
import { psychologiaUzaleznienTerapiaUzaleznien } from "./Psychologia-uzaleznien-z-terapia-uzaleznien";
import { seksuologiaPraktyczna } from "./Seksuologia-praktyczna";
import { trenerUmiejetnosciSpolecznych } from "./Trener-umiejetnosci-spolecznych";

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
  schedule: string[];
  modules: Module[];
  faculty: string;
  practices: string;
  evaluation: string;
  jobOpportunities: string;
};

export const courses: Course[] = [
  seksuologiaPraktyczna,
  trenerUmiejetnosciSpolecznych,
  cyberpsychologia,
  diagnozaStrategieTerapeutyczneLeczeniuHiperseksualnosci,
  psychologiaUzaleznienTerapiaUzaleznien,
  psychologiaUzaleznienUzaleznieniaBehawioralne,
];
