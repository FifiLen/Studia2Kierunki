"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardComponent from "./CardScrollComponent"; // Import nowego komponentu
import {
  FaUniversity,
  FaChalkboardTeacher,
  FaFlask,
  FaGlobe,
  FaLifeRing,
  FaUsers,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const cardsData = [
    {
      title: "Study at Our University",
      content:
        "Enjoy state-of-the-art facilities, a supportive learning environment, and a vibrant campus life. Join us to achieve academic excellence.",
      image: "/assets/programTlo.png",
      icon: <FaUniversity />,
    },
    {
      title: "World-Class Faculty",
      content:
        "Learn from the best! Our faculty members are renowned experts in their fields, dedicated to providing you with an exceptional education.",
      image: "/assets/BanerTlo.png",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Cutting-Edge Research",
      content:
        "Engage in groundbreaking research with access to advanced laboratories and resources. Contribute to innovations that change the world.",
      image: "/assets/programTlo.png",
      icon: <FaFlask />,
    },
    {
      title: "Global Opportunities",
      content:
        "Expand your horizons with our international programs. Study abroad, participate in global internships, and build a worldwide network.",
      image: "/assets/BanerTlo.png",
      icon: <FaGlobe />,
    },
    {
      title: "Comprehensive Support",
      content:
        "Benefit from our comprehensive student support services, including academic advising, career counseling, and health and wellness resources.",
      image: "/assets/programTlo.png",
      icon: <FaLifeRing />,
    },
    {
      title: "Vibrant Community",
      content:
        "Be part of a diverse and inclusive community. Join student organizations, participate in events, and make lifelong friendships.",
      image: "/assets/BanerTlo.png",
      icon: <FaUsers />,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards) {
      const totalScroll = cards.scrollWidth - window.innerWidth;

      const tween = gsap.to(cards, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen bg-blue-950 overflow-hidden relative will-change-transform"
    >
      <div className="absolute top-56 left-0 w-full text-center z-10">
        <h2 className="text-6xl text-white font-bold tracking-tighter">
          Dlaczego warto nas wybrać?
        </h2>
      </div>
      <div ref={cardsRef} className="flex w-max h-full items-center mt-32">
        <CardComponent cardsData={cardsData} />
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
