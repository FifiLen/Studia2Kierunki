import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const TopBar = () => {
  return (
      <div className="w-full bg-blue-100 py-2" aria-label="Informacje kontaktowe">
        <div className="max-w-7xl mx-auto text-zinc-800 px-4 md:px-8">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center text-sm">
                <FaMapMarkerAlt className="mr-2" />
                <span>ul. Magnolii 25, 44-207 Rybnik</span>
              </div>
              <div className="flex items-center text-sm">
                <FaPhoneAlt className="mr-2" />
                <span>+48 797 173 501</span>
              </div>
              <div className="flex items-center text-sm">
                <FaPhoneAlt className="mr-2" />
                <span>+48 502 162 365</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <FaEnvelope className="mr-2" />
              <a
                  href="mailto:nowekwalifikacjerybnik@gmail.com"
                  className="hover:underline"
              >
                nowekwalifikacjerybnik@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

