import React from 'react'
import WykladowcaCard from '../components/WykladowcaCard'

const wykladowcy = [
  {
    imieNazwisko: "Jan Kowalski",
    tytulZawodowy: "Doktor psychologii",
    opis: "Specjalista w dziedzinie psychologii klinicznej z 15-letnim doświadczeniem. Prowadzi badania nad wpływem stresu na zdrowie psychiczne. Autor wielu publikacji naukowych i książek popularnonaukowych."
  },
  {
    imieNazwisko: "Anna Nowak",
    tytulZawodowy: "Magister pedagogiki specjalnej",
    opis: "Ekspertka w zakresie pracy z dziećmi z autyzmem. Posiada 10-letnie doświadczenie w prowadzeniu terapii i warsztatów dla rodzin. Współautorka innowacyjnych metod nauczania dla dzieci ze specjalnymi potrzebami edukacyjnymi."
  },
  {
    imieNazwisko: "Wioletta Ginter",
    tytulZawodowy: "Pedagog",
    opis: "Magister pedagogiki specjalizujący się w poradnictwie i pomocy psychopedagogicznej. Aktywny pedagog specjalny, terapeuta ręki, specjalista w edukacji włączającej i wykładowca. Posiada bogate doświadczenie, przekazując swoją wiedzę zarówno uczniom, jak i nauczycielom w różnych instytucjach edukacyjnych. Specjalista ORE w zakresie edukacji włączającej."
  }
]

const WykladowcyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Nasi Wykładowcy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wykladowcy.map((wykladowca, index) => (
          <WykladowcaCard
            key={index}
            imieNazwisko={wykladowca.imieNazwisko}
            tytulZawodowy={wykladowca.tytulZawodowy}
            opis={wykladowca.opis}
          />
        ))}
      </div>
    </div>
  )
}

export default WykladowcyPage

