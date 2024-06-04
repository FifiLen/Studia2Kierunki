import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";

const RekrutacjaAnnouncement = () => {
  const fontSizeStyles = "text-base"; // Możesz zmienić na inne wartości: text-sm, text-lg
  const contrastStyles = "bg-gray-50 text-gray-900";
  const linkContrastStyles = "bg-[#1660C7] hover:bg-blue-500 text-white";

  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="justify-center items-start flex px-20 py-36 flex-col rekrutacja">
          <h4 className="text-3xl font-semibold text-gray-100 tracking-[-0.2rem]">
            Rekrutacja
          </h4>
          <h2 className="text-5xl text-white font-semibold tracking-tighter mt-3">
            Semestr 2024/2025
          </h2>
          <p className="text-lg text-zinc-300 mt-4">
            Trwają zapisy na semestr 2024/2025. Dołącz do nas i rozpocznij swoją
            przygodę z nowymi studiami podyplomowymi. Oferujemy szeroki wybór
            kierunków, które pozwolą Ci zdobyć nowe umiejętności i poszerzyć
            swoje horyzonty.
          </p>
          <Link href="#kierunki">
            <button
              aria-label="poznaj naszą ofertę"
              className="bg-blue-800 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
            >
              Poznaj naszą ofertę
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </Link>
        </div>

        {/* Image Column */}
        <div className="relative w-full">
          <Image
            src="/assets/studentka.png"
            fill
            alt="Studentka przy komputerze, rekrutacja 2024/2025"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default RekrutacjaAnnouncement;
