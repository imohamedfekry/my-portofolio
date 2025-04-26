"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Globe } from "../ui/Global";
import { Particles } from "../ui/particles";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function Hero() {
  const { theme } = useTheme();

  return (
    <>
      <Spotlight />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={40}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        refresh
      />
        <div className="relative max-w-[85rem]  mx-auto h-[calc(100vh_-_76px)] flex items-center justify-center uppercase">
        <motion.div
            className="w-full max-w-[600px] aspect-square z-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Globe />
          </motion.div>

          <motion.div
            className="absolute left-0 right-0 px-4 top-[calc(50%-270px)] sm:top-[calc(49%-300px)] "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          >
            <h1
              className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200 pb-8"
            >
              Designing the Future of Web
            </h1>
          </motion.div>

          <motion.div
            className="absolute left-0 right-0 px-4 top-[calc(50% - 100px)] z-[999]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-500"
            >
              One Pixel at a Time
            </h1>
          </motion.div>
        </div>
    </>
  );
}

export default Hero;
