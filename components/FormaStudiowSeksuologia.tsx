import React from 'react';
import { useUserPreferences } from "../components/UserPreferencesContext";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { FaLaptop } from "react-icons/fa";
import Image from 'next/image';

const FormaStudiow = () => {
  const { fontSize, highContrast } = useUserPreferences();

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

  const onlineStudyDetails = {
    icon: <FaLaptop />,
    title: "Studia 100% online",
    description: "Nasze studia są realizowane w całości online, co pozwala na elastyczność i wygodę nauki z dowolnego miejsca. Zajęcia są prowadzone przez wykwalifikowanych specjalistów za pośrednictwem nowoczesnych platform e-learningowych.",
    benefits: [
      "Elastyczny harmonogram zajęć, dostosowany do Twojego stylu życia.",
      "Możliwość uczestnictwa w zajęciach z dowolnego miejsca na świecie.",
      "Dostęp do materiałów edukacyjnych 24/7.",
      "Wsparcie techniczne i merytoryczne na każdym etapie nauki.",
      "Regularne webinary i sesje Q&A z wykładowcami.",
    ],
    imageSrc: '/assets/studentka.png', // Replace with the actual path to your image
  };

  return (
    <section id="forma-studiow" className={`py-16 ${contrastStyles}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <h2 className={`font-bold tracking-tighter ${highlightColor} ${headingStyles[fontSize]}`}>
          Forma Studiów
        </h2>
        <div className="bg-[#F7F9FC] p-8 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-[#1660C7]">
              <FaLaptop className="text-4xl" />
              <h3 className="font-semibold text-3xl">{onlineStudyDetails.title}</h3>
            </div>
            <p className={`text-gray-900 ${fontSizeStyles[fontSize]}`}>{onlineStudyDetails.description}</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-lg text-[#1660C7]">
                  Zobacz szczegóły
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900">
                    {onlineStudyDetails.benefits.map((benefit, index) => (
                      <li key={index} className={fontSizeStyles[fontSize]}>{benefit}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={onlineStudyDetails.imageSrc}
              alt="Forma Studiów"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormaStudiow;
