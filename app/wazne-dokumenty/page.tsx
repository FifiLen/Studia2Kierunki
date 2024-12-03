import React from "react";

const page = () => {
  return (
    <div className=" container max-w-6xl mx-auto py-16 flex flex-col space-y-4">
      <h2 className=" text-3xl tracking-tight font-bold">Ważne pliki</h2>
      <div className=" flex flex-col space-y-4 text-blue-500 underline underline-offset-1">
        <a href="/assets/wazne-dokumenty/rodo.pdf">Polityka RODO</a>
        <a href="/assets/wazne-dokumenty/Cookies.pdf">Pliki COOKIES</a>
        <a href="/assets/wazne-dokumenty/tryb-postepowania-reklamacyjnego.pdf">
          Tryb postępowania reklamacyjnego
        </a>
        <a href="/assets/wazne-dokumenty/Akredytacja.pdf">Akredytacja</a>
        <a href="/assets/referencje/CertyfikatDekra.pdf">Certyfikat DEKRA</a>
        <a href="/assets/referencje/CertyfikatTGLS.pdf">Certyfikat TGLS</a>
      </div>
      <p className=" text-2xl font-semibold tracking-tight">
        Wymagania techniczne dla uczestnictwa w usłudze świadczonej w formie
        zdalnej
      </p>
      <a
        href="/assets/wazne-dokumenty/wymaganiatechniczne.pdf"
        className=" text-green-600 underline underline-offset-1"
      >
        Wymagania techniczne dla uczestnictwa w usłudze świadczonej w formie
        zdalnej
      </a>
      <a
        href="/assets/wazne-dokumenty/regulamin.pdf"
        className=" text-green-600 underline underline-offset-1"
      >
        Regulamin
      </a>
    </div>
  );
};

export default page;
