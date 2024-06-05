"use client";
import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import { Course, Topic } from "@/utils/Kierunki";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Markdown from "markdown-to-jsx";

interface ProgramProps {
  course: Course;
}

const Program = ({ course }: ProgramProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Ustawienie punktu przerwania dla większych ekranów
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const renderTopics = (topics: Topic[]) => {
    return (
      <ol className="list-decimal space-y-3 ml-4 mt-2 text-gray-900">
        {topics.map((topic, i) => (
          <li key={i} className="font-bold tracking-tight">
            {topic.title}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <section id="program-studiow" className="w-full bg-blue-950 py-28 program">
      <div className="mx-auto max-w-full px-10 lg:px-10 space-y-8">
        <h2 className="text-5xl font-semibold tracking-tighter text-white">
          Program Studiów
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {course.modules.map((module, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 md:p-6 rounded-lg shadow-lg"
            >
              {isLargeScreen ? (
                <div>
                  <h3 className="text-lg md:text-xl mb-3 font-semibold tracking-tight text-blue-800">
                    <Markdown>{module.title}</Markdown>
                  </h3>
                  {renderTopics(module.topics)}
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`module-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-blue-800 flex items-center">
                      <Markdown>{module.title}</Markdown>
                    </AccordionTrigger>
                    <AccordionContent>
                      {renderTopics(module.topics)}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
