import React from "react";
import Image from "next/image";

interface Reference {
  link: string;
}

interface ImageGridProps {
  references: Record<string, Reference>;
}

const ImageGrid: React.FC<ImageGridProps> = ({ references }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(references).map(([key, { link }]) => (
          <div key={key} className="w-full">
            <Image
              src={link}
              alt={`Reference ${key}`}
              width={500}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
