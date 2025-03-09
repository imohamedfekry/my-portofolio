"use client";
import React from "react";
import MagicText from "../ui/MagicText";
import { motion,  } from "framer-motion";
import { SparklesText } from "../ui/startText";
// import { TextReveal } from "../ui/test";
const paragraph =
  "I'm a passionate Full-Stack Developer specializing in modern web technologies like React, Next.js, and Node.js. I focus on building high-performance, scalable applications with a seamless user experience. Constantly learning and adapting to new trends, I strive to write clean, efficient code that  ";
const endparagraph = "Every line of code brings an idea to life";

function About() {
  return (
<section id="about" className="container mx-auto text-center">
  <motion.div
    className="relative leading-[1.6] overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <SparklesText text="About Me" />
    
    <p className="text-[1.30rem]">
      <MagicText value={paragraph} />
      <span className="text-[#b6b3fa] shadow-sm">{endparagraph}</span>
    </p>
  </motion.div>
  {/* <TextReveal>{paragraph}</TextReveal>; */}
</section>

  );
}

export default About;
