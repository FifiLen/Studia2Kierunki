"use client";
import React from "react";
import { useUserPreferences } from "./UserPreferencesContext";
import { FaAdjust } from "react-icons/fa";

const Access = () => {
  const { setFontSize, fontSize, highContrast, setHighContrast } =
    useUserPreferences();

  const fontSizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const navbarBackgroundStyles = highContrast ? "bg-black" : "bg-[#1660C7]";

  const navbarTextStyles = highContrast ? "text-[#ffff00]" : "text-white";

  const linkContrastStyles = highContrast
    ? "text-white hover:text-[#ffff00]"
    : "text-white";

  return (
    <div className={`${navbarBackgroundStyles}`}>
      <div className={`max-w-7xl flex justify-end gap-4 ${navbarTextStyles}`}>
        <button
          aria-label="pomniejsz tekst"
          onClick={() => setFontSize("small")}
          className={`p-[0.5px] ${linkContrastStyles}`}
        >
          A-
        </button>
        <button
          aria-label="ustaw tekst bazowy"
          onClick={() => setFontSize("medium")}
          className={`p-[0.5px] ${linkContrastStyles}`}
        >
          A
        </button>
        <button
          aria-label="powiększ tekst"
          onClick={() => setFontSize("large")}
          className={`p-[0.5px] ${linkContrastStyles}`}
        >
          A+
        </button>
        <button
          aria-label="zastosuj kontrast"
          onClick={() => setHighContrast(!highContrast)}
          className={`p-[0.5px] ${linkContrastStyles}`}
        >
          <FaAdjust />
        </button>
      </div>
    </div>
  );
};

export default Access;
