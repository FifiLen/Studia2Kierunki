"use client";
import React from "react";
import { Module } from "@/utils/Kierunki";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { IoIosArrowForward } from "react-icons/io";
import Markdown from "markdown-to-jsx";

interface ModulesProps {
  modules: Module[];
}

const Modules: React.FC<ModulesProps> = ({ modules }) => {
  return (
    <div className=" w-full bg-blue-950">
      <div
        id="program-studiow"
        className="max-w-7xl mx-auto py-20 p-6 bg-blue-950"
      >
        <h4 className="mb-6 font-semibold tracking-tighter text-white text-6xl">
          Program Studiów
        </h4>
        <Accordion type="multiple" className="space-y-4">
          {modules.map((module, index) => (
            <AccordionItem key={index} value={`module-${index}`}>
              <AccordionTrigger className="flex justify-between w-full px-4 py-2 text-2xl tracking-tighter font-semibold text-left text-gray-800 bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <Markdown>{module.title}</Markdown>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 text-gray-600 bg-white rounded-b-lg">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="mb-4">
                    <h3 className="text-xl font-semibold tracking-tighter text-gray-700 mb-2">
                      {topic.title}
                    </h3>
                    <ul className="list-none list-inside ml-4 space-y-2">
                      {topic.subtopics?.map((subtopic, subtopicIndex) => (
                        <li
                          key={subtopicIndex}
                          className="text-gray-600 tracking-tight flex items-center gap-1"
                        >
                          <IoIosArrowForward className="text-gray-800" />

                          {subtopic.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Modules;
