'use client'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useUserPreferences } from "./UserPreferencesContext";

export default function Baner() {
  const { fontSize, highContrast } = useUserPreferences();

  const fontSizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className={`relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${highContrast ? 'bg-black text-white' : 'bg-blue-200 text-gray-900'} ${fontSizeStyles[fontSize]}`}>
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
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
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="leading-6">
          <strong className="font-semibold">Informacja</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Zapraszamy do składania aplikacji na semestr zimowy 2024/2025.
        </p>
        <Link
          href="#rekrutacja"
          className={`flex-none rounded-full flex items-center gap-1 px-3.5 py-1 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${highContrast ? 'bg-white text-black hover:bg-gray-300' : 'bg-gray-900 text-white hover:bg-gray-700 focus-visible:outline-gray-900'}`}
        >
          Proces rekrutacji <span aria-hidden="true"><FaArrowRight /></span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        {/* Optional content */}
      </div>
    </div>
  );
}
