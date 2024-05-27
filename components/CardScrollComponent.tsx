import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface CardComponentProps {
  cardsData: Array<{
    title: string;
    content: string;
    image: string;
    icon?: React.ReactNode; // Optional icon
  }>;
}

const CardComponent: React.FC<CardComponentProps> = ({ cardsData }) => {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className="w-[500px] h-[350px] m-2 relative p-4 text-left flex flex-col justify-end transition-transform border-2 border-[#1660C7] ease-in-out hover:scale-105 bg-white"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-contain z-0"
            style={{
              backgroundImage: `url(${card.image})`,
              top: "-50%",
              right: "-70%",
            }}
          ></div>
          <div className="relative z-10">
            <CardHeader>
              <CardTitle className="text-xl tracking-tighter flex items-center">
                {card.icon && <span className="mr-2">{card.icon}</span>}
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7">{card.content}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;
