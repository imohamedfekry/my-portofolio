"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import { SparklesText } from "./sparkles-text";

interface ScrollTunnelProps {
  word: string;
  className?: string;
  colors?: {
    text: string;
    background: string;
  };
}

export const ScrollTunnel: React.FC<ScrollTunnelProps> = ({
  word,
  colors,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // دمج توقيت التكبير والاختفاء والتوسعة معًا
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 150], { ease: easeInOut });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: colors?.background,
        minHeight: "200vh",
        // paddingBottom: "10vh",
      }}
    >
      {/* الكلمة الكبيرة */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
        <motion.div
          style={{
            scale,
            transformOrigin: "center center",
          }}
        >
          <h1
            className="text-[15vw] font-black leading-none whitespace-nowrap"
            style={{ color: 'var(--text-color)' }}
          >
            <SparklesText>
            {word}
            </SparklesText>
            <br />
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

// example use 
// <ScrollTunnel word="ABOUT ME">
//     <h1>hi</h1>
// </ScrollTunnel>