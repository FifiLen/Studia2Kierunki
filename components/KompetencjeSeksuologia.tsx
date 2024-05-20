import React from 'react';
import { useUserPreferences } from "../components/UserPreferencesContext";
import { FaCheckCircle } from "react-icons/fa";

const Kompetencje = () => {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeStyles = {
    small: "text-lg",
    medium: "text-5xl",
    large: "text-2xl",
  };

  const contrastStyles = highContrast
    ? "bg-black text-white"
    : "bg-white text-gray-900";

  const highlightColor = highContrast ? "text-[#87B4E8]" : "text-zinc-800";

  const competencies = [
    {
      title: "Znajomość technik psychoterapii",
      description: "Umiejętność stosowania różnych technik psychoterapeutycznych w pracy z pacjentami.",
    },
    {
      title: "Edukacja seksualna",
      description: "Kompetencje do prowadzenia zajęć z edukacji seksualnej w różnych grupach wiekowych.",
    },
    {
      title: "Diagnostyka zaburzeń seksualnych",
      description: "Umiejętność diagnozowania i oceny zaburzeń seksualnych przy użyciu specjalistycznych narzędzi.",
    },
    {
      title: "Prowadzenie terapii",
      description: "Zdolność prowadzenia skutecznej terapii dla osób z zaburzeniami seksualnymi.",
    },
    // Add more competencies as needed
  ];

  return (
    <section id="kompetencje" className={`py-16 ${contrastStyles}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <h2 className={`font-bold tracking-tighter ${highlightColor} ${fontSizeStyles[fontSize]}`}>
          Kompetencje
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency, index) => (
            <div key={index} className="bg-[#F7F9FC] p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-[#1660C7] font-semibold text-2xl">{competency.title}</h3>
              <p className="text-gray-900">{competency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kompetencje;
