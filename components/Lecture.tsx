"use client";
import React from "react";
import CardComponentTeachers from "./CardComponentTeachers";

const Lecture = () => {
  const cardsData = [
    {
      name: "Jan Kowalski",
      title: "Dr.",
      description: "Ekspert w dziedzinie psychologii uzależnień.",
      image: "/assets/card1.svg",
      avatar: "/assets/studentka.png",
    },
    {
      name: "Anna Nowak",
      title: "Prof.",
      description: "Specjalista w zakresie seksuologii.",
      image: "/assets/card2.svg",
      avatar: "/assets/studentka2.png",
    },
    {
      name: "Jan Kowalski",
      title: "Dr.",
      description: "Ekspert w dziedzinie psychologii uzależnień.",
      image: "/assets/card1.svg",
      avatar: "/assets/studentka.png",
    },
    {
      name: "Anna Nowak",
      title: "Prof.",
      description: "Specjalista w zakresie seksuologii.",
      image: "/assets/card2.svg",
      avatar: "/assets/studentka2.png",
    },
    {
      name: "Jan Kowalski",
      title: "Dr.",
      description: "Ekspert w dziedzinie psychologii uzależnień.",
      image: "/assets/card1.svg",
      avatar: "/assets/studentka.png",
    },
    {
      name: "Anna Nowak",
      title: "Prof.",
      description: "Specjalista w zakresie seksuologii.",
      image: "/assets/card2.svg",
      avatar: "/assets/studentka2.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl tracking-tighter">
          Nasi Wykładowcy
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Poznaj naszych wykwalifikowanych wykładowców, którzy są ekspertami w
          swoich dziedzinach.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardComponentTeachers cardsData={cardsData} />
        </div>
      </div>
    </div>
  );
};

export default Lecture;
