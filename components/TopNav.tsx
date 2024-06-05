import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-blue-100">
      <div className=" max-w-7xl mx-auto  text-zinc-700 py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm font-medium">
            <FaMapMarkerAlt className="mr-2" />
            <span>ul. Magnolii 25, 44-207 Rybnik</span>
          </div>
          <div className="flex items-center text-sm font-medium">
            <FaPhoneAlt className="mr-2" />
            <span>+48 123 456 789</span>
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
