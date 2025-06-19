"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

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

  // خفاء النص الكبير عندما نصل للحد الأقصى للتكبير
  const textOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0], { ease: easeInOut });

  const contentOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1], { ease: easeInOut });
  const contentY = useTransform(scrollYProgress, [0.95, 1], [50, 0], { ease: easeInOut });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: colors?.background,
        height: "300vh",
      }}
    >
      {/* الكلمة الكبيرة */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
        <motion.div
          style={{
            scale,
            // opacity: textOpacity,
            transformOrigin: "center center",
          }}
        >
          <h1
            className="text-[15vw] font-black leading-none whitespace-nowrap"
            style={{ color: 'var(--text-color)' }}
          >
            {word}
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