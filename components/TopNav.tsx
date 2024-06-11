import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-blue-100 hidden sm:block">
      <div className="max-w-7xl mx-auto text-zinc-800 py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <div className="flex items-center text-sm font-medium">
            <FaMapMarkerAlt className="mr-2" />
            <span>ul. Magnolii 25, 44-207 Rybnik</span>
          </div>
          <div className="flex items-center text-sm font-medium">
            <FaPhoneAlt className="mr-2" />
            <span>+48 797 173 501</span>
          </div>
          <div className="flex items-center text-sm font-medium">
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

export default TopBar;
