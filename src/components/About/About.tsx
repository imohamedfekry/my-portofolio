"use client";
import React from "react";
import MagicText from "../ui/MagicText";
import { motion } from "framer-motion";
import { ScrollTunnel } from "../ui/startText";
import { SectionTitle } from "../ui/SectionTitle";

const paragraph =
  "I'm a Full-Stack Developer who enjoys building fast, reliable web apps using React Next.js, and NodeJs and NestJs. I care about writing clean code, staying up-to-date with tech, and creating smooth user experiences.";
const endparagraph = "Every line of code brings an idea to life";

function About() {
  return (
    <>
      <ScrollTunnel word="ABOUT ME"  />
      
      {/* About Content Section */}
       <section className="relative z-20 min-h-screen flex items-center justify-center bg-[var(--text-color)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle badge="About" title="About Me" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {paragraph}
              </p>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                <MagicText value={endparagraph} />
              </div>
            </motion.div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default About;
