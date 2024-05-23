import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface CardComponentProps {
  cardsData: Array<{
    title: string;
    content: string;
    image: string;
  }>;
}

const CardComponent: React.FC<CardComponentProps> = ({ cardsData }) => {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className="w-[500px] h-[350px] m-2 relative p-4 text-left flex flex-col justify-end transition-transform border-2 border-[#1660C7] ease-in-out  hover:scale-105 "
        >
          <div
            className="absolute top-2 right-2 w-24 h-24 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
          <CardHeader className="">
            <CardTitle className=" text-xl tracking-tighter">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" leading-7">{card.content}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;
