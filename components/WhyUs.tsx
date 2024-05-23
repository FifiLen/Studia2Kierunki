"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardComponent from "./CardScrollComponent"; // Import nowego komponentu

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const cardsData = [
    {
      title: "Study at Our University",
      content:
        "Enjoy state-of-the-art facilities, a supportive learning environment, and a vibrant campus life. Join us to achieve academic excellence.",
      image: "/assets/card1.svg",
    },
    {
      title: "World-Class Faculty",
      content:
        "Learn from the best! Our faculty members are renowned experts in their fields, dedicated to providing you with an exceptional education.",
      image: "/assets/card1.svg",
    },
    {
      title: "Cutting-Edge Research",
      content:
        "Engage in groundbreaking research with access to advanced laboratories and resources. Contribute to innovations that change the world.",
      image: "/assets/card1.svg",
    },
    {
      title: "Global Opportunities",
      content:
        "Expand your horizons with our international programs. Study abroad, participate in global internships, and build a worldwide network.",
      image: "/assets/card1.svg",
    },
    {
      title: "Comprehensive Support",
      content:
        "Benefit from our comprehensive student support services, including academic advising, career counseling, and health and wellness resources.",
      image: "/assets/card1.svg",
    },
    {
      title: "Vibrant Community",
      content:
        "Be part of a diverse and inclusive community. Join student organizations, participate in events, and make lifelong friendships.",
      image: "/assets/card1.svg",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards) {
      const totalScroll = cards.scrollWidth - window.innerWidth;

      gsap.to(cards, {
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
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen bg-blue-950 overflow-hidden relative will-change-transform"
    >
      <div className="fixed top-52 left-0 w-full text-center z-10">
        <h2 className="text-6xl text-white font-bold tracking-tighter">
          Dlaczego warto nas wybrać?
        </h2>
      </div>
      <div ref={cardsRef} className="flex w-max h-full items-center mt-16">
        <CardComponent cardsData={cardsData} />
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
