"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";
import {
  TbTargetArrow,
  TbAlignBoxLeftTop,
  TbChevronRight,
} from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleArrowDown } from "lucide-react";
import parse from "html-react-parser";
import { useTranslations } from "next-intl";

interface Course {
  title: string;
  description: string;
  description2: string;
  descriptionP1?: string;
}

interface AboutCourseProps {
  course: Course;
}

export function AboutCourse({ course }: AboutCourseProps) {
  const t = useTranslations("AboutCourse");

  const transformDescription = (htmlString: string) => {
    const options = {
      replace: (domNode: any) => {
        if (domNode.name === "ul") {
          return {
            ...domNode,
            attribs: {
              ...domNode.attribs,
              class: "space-y-2.5 list-none",
            },
          };
        }
        if (domNode.name === "li") {
          const children = domNode.children.map((child: any) => {
            if (child.type === "text") {
              return {
                ...child,
                data: child.data.trim(),
              };
            }
            return child;
          });

          return (
            <li className="flex items-start gap-2.5 group">
              <TbChevronRight className="shrink-0 mt-1.5 text-purple-700 transition-transform duration-200 group-hover:translate-x-0.5" />
              <span className="text-purple-600/80 leading-relaxed">
                {parse(children.map((c: any) => c.data || "").join(" "))}
              </span>
            </li>
          );
        }
      },
    };

    return parse(htmlString, options);
  };

  return (
    <section
      id="opis"
      className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-20 md:py-28"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 flex items-center justify-center gap-3 mb-4">
            <TbAlignBoxLeftTop className="h-8 w-8 text-gray-900" />
            <span>{t("courseDescription")}</span>
          </h2>
          <p className="tracking-tight text-gray-500 mt-4">
            {t("courseDescriptionSubtitle")}
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-white backdrop-blur-sm bg-opacity-50 p-8 md:p-10 rounded-2xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-8 tracking-tight text-purple-700">
                <FaUserGraduate className="h-7 w-7 text-purple-700" />
                {t("targetGroup")}
              </h3>
              <div className="prose prose-lg max-w-none font-medium">
                {transformDescription(course.description)}
              </div>
            </div>

            <div className="bg-white backdrop-blur-sm bg-opacity-50 p-8 md:p-10 rounded-2xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-8 tracking-tight text-blue-700">
                <TbTargetArrow className="h-7 w-7 text-blue-700" />
                {t("courseObjective")}
              </h3>
              <div
                className="prose prose-lg max-w-none text-blue-600/80 font-medium leading-relaxed [&>p]:mb-4 last:[&>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: course.description2 }}
              />
            </div>
          </motion.div>

          {course.descriptionP1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              <div className="bg-white backdrop-blur-sm bg-opacity-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed [&>p]:mb-4 last:[&>p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: course.descriptionP1 }}
                />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Link href="#program-studiow">
              <Button
                size="lg"
                className="group bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-6 text-lg rounded-xl"
              >
                {t("viewCourseProgram")}
                <CircleArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
