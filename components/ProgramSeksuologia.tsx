import React from 'react';
import { useUserPreferences } from "../components/UserPreferencesContext";
import { FaBook, FaClock, FaInfoCircle } from "react-icons/fa";

const ProgramStudiow = () => {
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

  const courses = [
    {
      title: "Wprowadzenie do seksuologii",
      description: "Podstawowe zagadnienia z zakresu seksuologii, w tym historia i rozwój tej dziedziny.",
      hours: 30,
    },
    {
      title: "Psychoterapia seksualna",
      description: "Techniki i metody psychoterapii stosowane w leczeniu zaburzeń seksualnych.",
      hours: 45,
    },
    {
      title: "Edukacja seksualna",
      description: "Metody i strategie prowadzenia edukacji seksualnej w różnych grupach wiekowych.",
      hours: 40,
    },
    {
      title: "Diagnostyka zaburzeń seksualnych",
      description: "Procedury diagnostyczne i narzędzia używane w identyfikacji zaburzeń seksualnych.",
      hours: 35,
    },
    // Add more courses as needed
  ];

  return (
    <section id="program-studiow" className={`py-16 ${contrastStyles}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <h2 className={`font-bold tracking-tighter ${highlightColor} ${fontSizeStyles[fontSize]}`}>
          Program Studiów
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-[#F7F9FC] p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-[#1660C7] font-semibold text-2xl">{course.title}</h3>
              <p className="text-gray-900">{course.description}</p>
              <div className="flex items-center space-x-2 text-gray-700">
                <FaClock />
                <span>{course.hours} godzin</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStudiow;
