import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "framer-motion";

interface CardComponentProps {
  cardsData: Array<{
    name: string;
    title: string;
    description: string;
    image: string;
    avatar: string;
  }>;
}

const CardComponentTeachers: React.FC<CardComponentProps> = ({ cardsData }) => {
  return (
    <>
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className="relative p-4 text-left flex flex-col justify-end border-2 border-[#1660C7] bg-white rounded-lg overflow-hidden card"
          style={{ width: "400px", height: "350px" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-cover opacity-10"
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
          <div className="relative z-10 flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={card.avatar} alt={card.name} />
              <AvatarFallback>{card.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold text-gray-900">
              {card.title} {card.name}
            </h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CardComponentTeachers;
