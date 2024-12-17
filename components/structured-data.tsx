import Script from "next/script";

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "ISP Rybnik",
    url: "https://isp.rybnikonline.eu",
    logo: "https://isp.rybnikonline.eu/logo.png", // Należy dodać właściwy URL logo
    description:
      "Oferujemy studia podyplomowe online w czasie rzeczywistym. Szeroki wybór kierunków, elastyczne formy nauczania.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Magnolii 25, 44-207",
      addressLocality: "Rybnik",
      addressRegion: "Śląskie",
      addressCountry: "PL",
    },
    telephone: ["+48 797 173 501", "+48 502 162 365"],
    email: "nowekwalifikacjerybnik@gmail.com",
    sameAs: [
      // Dodaj linki do mediów społecznościowych, jeśli są dostępne
    ],
    offers: {
      "@type": "Offer",
      category: "Studia podyplomowe online",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kierunki studiów podyplomowych",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Psychoterapia",
          description:
            "Przygotowanie do samodzielnego prowadzenia psychoterapii zaburzeń psychicznych dzieci, młodzieży oraz osób dorosłych.",
        },
        // Dodaj więcej kierunków studiów
      ],
    },
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};
