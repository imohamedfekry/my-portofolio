"use client";
import React from "react";
import MagicText from "../ui/MagicText";
import { motion,  } from "framer-motion";
// import { SparklesText } from "../ui/startText";
import { SectionTitle } from "../ui/SectionTitle";
const paragraph =
  "I'm a Full-Stack Developer who enjoys building fast, reliable web apps using React Next.js, and NodeJs and NestJs. I care about writing clean code, staying up-to-date with tech, and creating smooth user experiences.";
const endparagraph = "Every line of code brings an idea to life";

function About() {
  return (
<section id="about" className="container mx-auto text-center mt-28">
  <motion.div
    className="relative leading-[1.6] overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <SectionTitle badge="" title="ABOUT ME" />
    
    {/* <SparklesText text="About Me" /> */}
    
    <p className="text-[1.22rem]">
      <MagicText value={paragraph} />
      <span className="text-[--secondary-text-color] shadow-sm">{endparagraph}</span>
    </p>
  </motion.div>
</section>

  );
}

export default About;
