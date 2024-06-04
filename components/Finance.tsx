import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";

const Finance = () => {
  const fontSizeStyles = "text-base"; // Możesz zmienić na inne wartości: text-sm, text-lg
  const contrastStyles = "bg-gray-50 text-gray-900";
  const linkContrastStyles = "bg-[#1660C7] hover:bg-blue-500 text-white";

  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className=" justify-center items-start flex px-8 md:px-20 py-36 flex-col">
          <h4 className="text-3xl font-semibold text-blue-600 tracking-[-0.2rem] flex gap-2 items-center">
            <GiTwoCoins />
            Dofinansowanie
          </h4>
          <h2 className="text-5xl text-white font-semibold tracking-tighter mt-3">
            Uzyskaj dofinansowanie z&nbsp;Bazy Usług Rozwojowych
          </h2>
          <p className="text-lg text-zinc-300 mt-4">
            Niniejszym informujemy, że pojawiła się możliwość skorzystania z
            dofinansowania studiów podyplomowych, kursów, szkoleń z Bazy Usług
            Rozwojowych. Dofinansowanie może wynosić 80-100% kosztu usług
            edukacyjnych <br />
            <br />
            Zachęcamy przedsiębiorców oraz organy prowadzące do kontaktu z
            Powiatowym Urzędem Pracy oraz operatorami wojewódzkimi w celu
            złożenia wniosku o dofinansowanie.
          </p>
          <Link
            href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144"
            target="_blank"
          >
            <button className="bg-blue-700  text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              Poznaj naszą ofertę BUR
              <CgArrowTopRightO className=" text-2xl" />
            </button>
          </Link>
        </div>

        {/* Image Column */}
        <div className=" bg-gray-50 justify-center items-start flex px-8 md:px-20 py-36 flex-col">
          <h4 className="text-3xl font-semibold text-[#9E5AE2] tracking-[-0.2rem] flex gap-2 items-center">
            <BsInfoCircleFill />
            Informacja
          </h4>
          <h2 className="text-5xl text-zinc-800 font-semibold tracking-tighter mt-3">
            Nieoprocentowane pożyczki
          </h2>
          <p className="text-lg text-zinc-600 mt-4">
            Ministerstwo Rozwoju uruchomiło nieoprocentowane pożyczki
            na&nbsp;kształcenie obejmujące m.in. studia podyplomowe, kursy,
            szkolenia. W&nbsp;ramach Programu Operacyjnego Wiedza Edukacja
            Rozwój możesz otrzymać nawet do&nbsp;30 000 zł pomocy zwrotnej bez
            żadnych dodatkowych kosztów. <br />
            Co ważne, istnieje możliwość umorzenia 20–25% przyznanej kwoty.
            <br />
            <br />
            Zachęcamy do zapoznania się z informacjami odnośnie
            nieoprocentowanych pożyczek. Więcej informacji znajdą Państwo na
            stronie www.inwestujwrozwuj.pl
          </p>
          <Link href="https://inwestujwrozwoj.pl/" target="_blank">
            <button className="bg-[#9E5AE2]  text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              inwestujwrozwoj.pl
              <CgArrowTopRightO className=" text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Finance;
