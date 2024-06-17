"use client";
import Link from "next/link";

import { CgArrowRightO } from "react-icons/cg";
import { useUserPreferences } from "./UserPreferencesContext";

export default function Baner() {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <div
      className={`hidden sm:flex relative isolate items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${
        highContrast ? "bg-black text-white" : "bg-blue-200 text-gray-900"
      } ${fontSizeStyles[fontSize]}`}
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="leading-6 tracking-tight font-semibold">
          Zapraszamy do składania aplikacji na semestr zimowy 2024/2025.
        </p>
        <Link
          aria-label="Proces rekrutacji"
          href="/rekrutacja"
          className={`flex-none text-sm rounded-full flex items-center gap-2 px-2 py-1 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            highContrast
              ? "bg-white text-black hover:bg-gray-300"
              : "bg-[#9E5AE2] text-white hover:bg-gray-700 focus-visible:outline-gray-900"
          }`}
        >
          Proces rekrutacji
          <span aria-hidden="true">
            <CgArrowRightO className="h-4 w-4" />
          </span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">{/* Optional content */}</div>
    </div>
  );
}
