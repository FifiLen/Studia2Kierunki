import { Course } from "@/utils/Kierunki";
import { Poppins } from "next/font/google";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

interface Practices {
  course: Course;
}

const AdditionalInfo = ({ course }: Practices) => {
  return (
    <div className="w-full h-fit bg-white/90 flex flex-col space-y-28 mb-20">
      {/* Section 1 */}
      <section
        id="praktyki"
        className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl mt-20"
      >
        <div className="flex flex-col justify-center px-4 md:px-10 pb-4">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-2">
            Praktyki
          </h2>
          <div className="text-zinc-800 mt-8">
            <div className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.practices}</Markdown>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 md:px-10">
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
        <div className="flex items-center justify-center px-4 md:px-10 order-2 md:order-1">
          <Image
            src="/assets/about4.jpg"
            alt="Zdjęcie studentki"
            width={735}
            height={735}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-10 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-2">
            Kadra
          </h2>
          <div className="text-zinc-800 mt-8">
            <div className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.faculty}</Markdown>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="ocena-i-ewaluacja"
        className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl"
      >
        <div className="flex flex-col justify-center px-4 md:px-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-2">
            Ocena i ewaluacja
          </h2>
          <div className="text-zinc-800 mt-8">
            <div className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.evaluation}</Markdown>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 md:px-10">
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
        id="mozliwosci-zatrudnienia"
        className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-center px-4 md:px-10 order-2 md:order-1">
          <Image
            src="/assets/about6.jpg"
            alt="Zdjęcie studentki"
            width={735}
            height={735}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-10 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-2">
            Możliwość zatrudnienia
          </h2>
          <div className="text-zinc-800 mt-8">
            <div className={`tracking-tight leading-7 ${poppins.className}`}>
              <Markdown>{course.jobOpportunities}</Markdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalInfo;
