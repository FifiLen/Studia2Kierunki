import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { FaBook, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const AboutSpecialty = () => {
  const fontSize = "medium"; // Możesz zmienić to na small, medium lub large w zależności od potrzeb
  const highContrast = false; // Możesz zmienić to na true w zależności od potrzeb

  const fontSizeStyles = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  const headingStyles = {
    small: "text-4xl",
    medium: "text-5xl",
    large: "text-6xl",
  };

  const contrastStyles = highContrast
    ? "bg-black text-white"
    : "bg-white text-gray-900";

  const highlightColor = highContrast ? "text-[#87B4E8]" : "text-zinc-800";
  const cardStyles = highContrast
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300";

  const accordionTriggerStyles = highContrast
    ? "text-[#87B4E8] border-b-2 border-transparent hover:border-white"
    : "text-[#1660C7] border-b-2 border-transparent hover:border-[#87B4E8]";

  return (
    <section id="o-specjalnosci" className={`py-16 ${contrastStyles}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <h2
          className={`font-bold tracking-tighter ${highlightColor} ${headingStyles[fontSize]}`}
        >
          O specjalności
        </h2>

        {/* Pierwszy wiersz: Tekst + Obraz */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`space-y-6 ${fontSizeStyles[fontSize]}`}>
            <p>
              Seksuologia praktyczna to nowoczesny kierunek studiów
              podyplomowych, który oferuje kompleksową wiedzę i praktyczne
              umiejętności w zakresie seksuologii. Program studiów łączy
              teoretyczne podstawy z intensywnymi warsztatami praktycznymi,
              umożliwiając studentom zdobycie kompetencji niezbędnych do pracy w
              różnorodnych środowiskach.
            </p>
            <p>
              Nasz program jest realizowany w formie online, co daje dużą
              elastyczność i możliwość dopasowania nauki do indywidualnych
              potrzeb i harmonogramu.
            </p>
          </div>
          <Image
            src="/assets/studentka.png"
            alt="Seksuologia praktyczna"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Drugi wiersz: Obraz + Tekst */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/assets/studentka2.png"
            alt="Seksuologia praktyczna"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className={`space-y-6 ${fontSizeStyles[fontSize]}`}>
            <p>
              Absolwenci kierunku mogą liczyć na atrakcyjne możliwości kariery w
              poradniach zdrowia psychicznego, klinikach, szkołach, a także
              prowadząc własne praktyki. Program jest prowadzony przez
              wykwalifikowanych specjalistów z wieloletnim doświadczeniem w
              dziedzinie seksuologii, psychologii i terapii.
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className={accordionTriggerStyles}>
                  <FaBook className="mr-2" /> Program nauczania
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Program obejmuje zaawansowane kursy teoretyczne oraz
                    praktyczne warsztaty, w tym zajęcia z psychoterapii
                    seksualnej, edukacji seksualnej, a także diagnostyki i
                    terapii zaburzeń seksualnych.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className={accordionTriggerStyles}>
                  <FaChalkboardTeacher className="mr-2" /> Kwalifikacje kadry
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Zajęcia prowadzą wykwalifikowani specjaliści z wieloletnim
                    doświadczeniem w dziedzinie seksuologii, psychologii i
                    terapii.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className={accordionTriggerStyles}>
                  <FaUserGraduate className="mr-2" /> Możliwości kariery
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Absolwenci kierunku mogą pracować jako seksuolodzy w
                    poradniach zdrowia psychicznego, klinikach, szkołach, a
                    także prowadzić własne praktyki.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Trzeci wiersz: Karty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className={cardStyles}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaBook className="mr-2 text-[#9E5AE2]" /> Edukacja
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`leading-6 ${fontSizeStyles[fontSize]}`}>
                Uzyskaj dogłębną wiedzę z zakresu seksuologii, łącząc teorię z
                praktyką w naszym nowoczesnym programie nauczania.
              </p>
            </CardContent>
          </Card>
          <Card className={cardStyles}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChalkboardTeacher className="mr-2 text-[#9E5AE2]" />{" "}
                Warsztaty praktyczne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`leading-6 ${fontSizeStyles[fontSize]}`}>
                Uczestnicz w intensywnych warsztatach praktycznych, które
                przygotują Cię do pracy w różnych środowiskach.
              </p>
            </CardContent>
          </Card>
          <Card className={cardStyles}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaUserGraduate className="mr-2 text-[#9E5AE2]" /> Kariera
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`leading-6 ${fontSizeStyles[fontSize]}`}>
                Rozwiń swoją karierę jako seksuolog, pracując w poradniach
                zdrowia psychicznego, klinikach lub prowadząc własną praktykę.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSpecialty;
