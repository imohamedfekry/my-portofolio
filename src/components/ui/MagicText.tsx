"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface MagicTextProps {
  value: string;
}

const MagicText: React.FC<MagicTextProps> = ({ value }) => {
  const element = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const letters = value.split("");

  return (
    <motion.div
      className="relative leading-[1.6] overflow-hidden"
      ref={element}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {letters.map((letter, i) => {
        const start = i / letters.length;
        const end = start + 1 / letters.length;

        return (
          <Letter key={i} range={[start, end]} progress={scrollYProgress}>
            {letter === " " ? "\u00A0" : letter}
          </Letter>
        );
      })}
    </motion.div>
  );
};

interface LetterProps {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

const Letter: React.FC<LetterProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block">
      <span className="absolute inset-0 opacity-30">{children}</span>

      <motion.span className="relative" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default MagicText;

{/* <MagicText 
value="some txt"      
/> */}