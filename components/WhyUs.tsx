import React from 'react'
import { FaChalkboardTeacher, FaHandshake, FaLaptop, FaUniversity } from 'react-icons/fa';



const WhyUs = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl tracking-tighter">Dlaczego Warto Wybrać Nas?</h2>
      <p className="mt-4 text-lg leading-6 text-gray-600">
        Nasza instytucja oferuje wyjątkowe programy studiów podyplomowych, które przygotowują do sukcesu w różnych dziedzinach zawodowych.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-blue-500 text-white rounded-full p-4 inline-block">
            <FaChalkboardTeacher size={32} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Doświadczeni Wykładowcy</h3>
          <p className="mt-2 text-base text-gray-600">Nasi wykładowcy to eksperci w swoich dziedzinach.</p>
        </div>
        <div className="text-center">
          <div className="bg-green-500 text-white rounded-full p-4 inline-block">
            <FaLaptop size={32} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Nowoczesne Technologie</h3>
          <p className="mt-2 text-base text-gray-600">Korzystamy z najnowszych technologii edukacyjnych.</p>
        </div>
        <div className="text-center">
          <div className="bg-yellow-500 text-white rounded-full p-4 inline-block">
            <FaUniversity size={32} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Bogata Oferta Kursów</h3>
          <p className="mt-2 text-base text-gray-600">Oferujemy szeroki zakres programów studiów.</p>
        </div>
        <div className="text-center">
          <div className="bg-red-500 text-white rounded-full p-4 inline-block">
            <FaHandshake size={32} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Wsparcie Kariery</h3>
          <p className="mt-2 text-base text-gray-600">Pomagamy naszym absolwentom w rozwoju kariery zawodowej.</p>
        </div>
      </div>
    </div>
  </div>
);
  }
  export default WhyUs;