"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Globe } from "../ui/Global";
import { Particles } from "../ui/particles";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function Hero() {
  const { theme } = useTheme();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setIsScrolling(false);
      } else if (!isScrolling) {
        setIsScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling, isMounted]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="relative max-w-[85rem] mx-auto h-[calc(100vh_-_76px)] flex items-center justify-center uppercase">
        <div className="w-full max-w-[600px] aspect-square z-10" />
      </div>
    );
  }

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

      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolling ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center text-black/60 dark:text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-black/30 dark:border-white/30 rounded-full flex justify-center"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-black/60 dark:bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;