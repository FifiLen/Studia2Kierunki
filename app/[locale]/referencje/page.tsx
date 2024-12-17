import ImageGrid from "@/components/certyficates/references-grid";
import React from "react";

const referencje = {
  "1": { link: "/assets/referencje/referencje-1.jpg" },
  "2": { link: "/assets/referencje/referencje-3.jpg" },
  "3": { link: "/assets/referencje/referencje-4.jpg" },
  "4": { link: "/assets/referencje/referencje-5.jpg" },
  "5": { link: "/assets/referencje/referencje-6.jpg" },
  "6": { link: "/assets/referencje/referencje-7.jpg" },
  "7": { link: "/assets/referencje/referencje-8.jpg" },
  "8": { link: "/assets/referencje/referencje-9.jpg" },
  "9": { link: "/assets/referencje/referencje-10.jpg" },
  "10": { link: "/assets/referencje/referencje-2.jpg" },
};

const ReferencesPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-20 mb-10 tracking-tight">
        Referencje
      </h1>
      <ImageGrid references={referencje} />
    </div>
  );
};

export default ReferencesPage;
