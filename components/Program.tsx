import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Card, CardHeader, CardContent } from "./ui/card";
import { FaChalkboardTeacher, FaGraduationCap, FaUserTie } from 'react-icons/fa';

const Program = () => (
  <div className="bg-blue-950 py-16 sm:py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tighter">O Programie</h2>
      <p className="mt-4 text-lg leading-6 text-gray-300">
        Nasze programy studiów podyplomowych oferują kompleksowe podejście do nauczania, łącząc teorię z praktyką. Zapewniamy wysoką jakość kształcenia oraz wsparcie wykwalifikowanych wykładowców.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gray-800 shadow-lg">
          <CardHeader className="flex flex-col items-center">
            <FaChalkboardTeacher size={48} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Struktura Programu</h3>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-base text-gray-300 mb-4">
              Program składa się z trzech semestrów, w tym wykłady, ćwiczenia oraz projekty praktyczne.
            </p>
            <ul className="list-none list-inside text-left text-gray-300 space-y-2">
              <li>Semestr 1: Wprowadzenie i podstawy</li>
              <li>Semestr 2: Zaawansowane techniki i strategie</li>
              <li>Semestr 3: Projekt końcowy i praktyki</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 shadow-lg">
          <CardHeader className="flex flex-col items-center">
            <FaGraduationCap size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Korzyści</h3>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-base text-gray-300 mb-4">
              Zdobądź kwalifikacje, które otworzą przed Tobą nowe możliwości kariery zawodowej, pracując z najlepszymi specjalistami w swojej dziedzinie.
            </p>
            <ul className="list-none list-inside text-left text-gray-300 space-y-2">
              <li>Nowoczesne podejście do nauczania</li>
              <li>Elastyczne godziny zajęć</li>
              <li>Wysokie zarobki po ukończeniu studiów</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 shadow-lg">
          <CardHeader className="flex flex-col items-center">
            <FaUserTie size={48} className="text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Wykładowcy</h3>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-base text-gray-300 mb-4">
              Nasza kadra to doświadczeni wykładowcy, którzy są ekspertami w swoich dziedzinach.
            </p>
            <ul className="list-none list-inside text-left text-gray-300 space-y-2">
              <li>Dr. Jan Kowalski: Ekspert w dziedzinie psychologii uzależnień</li>
              <li>Prof. Anna Nowak: Specjalista w zakresie seksuologii</li>
              <li>Dr. Piotr Wiśniewski: Specjalista w dziedzinie terapii uzależnień</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Moduły Kursu</h3>
        <p className="mt-4 text-lg leading-6 text-gray-300">
          Kurs składa się z następujących modułów:
        </p>
        <Accordion type="single" collapsible={true} className="mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Wprowadzenie do psychologii i seksuologii
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-gray-300">
                Ten moduł obejmuje podstawy psychologii oraz wprowadzenie do seksuologii, przygotowując studentów do bardziej zaawansowanych tematów.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Zaawansowane techniki terapeutyczne
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-gray-300">
                Moduł ten obejmuje zaawansowane techniki i strategie terapeutyczne, które można stosować w praktyce zawodowej.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Praktyki i projekty końcowe
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-gray-300">
                Studenci będą mieli okazję zastosować zdobytą wiedzę w praktyce podczas zajęć praktycznych i projektów końcowych.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);

export default Program;
