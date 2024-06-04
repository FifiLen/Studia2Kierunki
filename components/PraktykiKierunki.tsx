import { Course } from "@/utils/Kierunki";
import { Poppins } from "next/font/google";
import Markdown from "markdown-to-jsx";

import Image from "next/image";
import StickyScrollRevealDemo from "./Scroll";
import Faq from "./Faq";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

interface Practices {
  course: Course;
}

const AboutSpecialty = ({ course }: Practices) => {
  return (
    <>
      <div className="w-full h-fit bg-white/90">
        {/* Section 1 */}
        <section
          id="praktyki"
          className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl mt-20"
        >
          <div className="flex flex-col justify-center px-10 pb-4">
            <div className="">
              <h2 className="text-5xl font-semibold tracking-tighter mt-2">
                Praktyki
              </h2>
              <div className="text-zinc-800 mt-8 ">
                <p className={`tracking-tight leading-7 ${poppins.className}`}>
                  <Markdown>{course.practices}</Markdown>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-10">
            <Image
              src="/assets/about3.jpg"
              alt="Zdjęcie studentki"
              width={735}
              height={735}
              className="rounded-xl"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section
          id="kadra"
          className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl"
        >
          <div className="flex items-center justify-center px-10  order-2 md:order-1">
            <Image
              src="/assets/about4.jpg"
              alt="Zdjęcie studentki"
              width={735}
              height={735}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center px-10 order-1 md:order-2">
            <h2 className="text-5xl font-semibold tracking-tighter mt-2">
              Kadra
            </h2>
            <div className="text-zinc-800 mt-8 rounded-xl">
              <p className={`tracking-tight leading-7 ${poppins.className}`}>
                <Markdown>{course.faculty}</Markdown>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section
          id="ocena-i-ewaluacja"
          className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl"
        >
          <div className="flex flex-col justify-center px-10 ">
            <h2 className="text-5xl font-semibold tracking-tighter mt-2">
              Ocena i ewaluacja
            </h2>
            <div className="text-zinc-800 mt-8">
              <p className={`tracking-tight leading-7 ${poppins.className}`}>
                <Markdown>{course.evaluation}</Markdown>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-10">
            <Image
              src="/assets/about5.jpg"
              alt="Zdjęcie studentki"
              width={735}
              height={735}
              className="rounded-xl"
            />
          </div>
        </section>

        {/* Section 4 */}
        <section
          id="kadra"
          className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl mb-20"
        >
          <div className="flex items-center justify-center px-10 order-2 md:order-1">
            <Image
              src="/assets/about6.jpg"
              alt="Zdjęcie studentki"
              width={735}
              height={735}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center px-10 order-1 md:order-2">
            <h2 className="text-5xl font-semibold tracking-tighter mt-2">
              Mozliwość zatrudnienia
            </h2>
            <div className="text-zinc-800 mt-8 rounded-xl">
              <p className={`tracking-tight leading-7 ${poppins.className}`}>
                <Markdown>{course.jobOpportunities}</Markdown>
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* <StickyScrollRevealDemo /> */}
    </>
  );
};

export default AboutSpecialty;
