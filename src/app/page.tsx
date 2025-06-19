"use client";

import About from "@/components/About/About";
import MainHeadr from "@/components/Header/MainHeadr";
import Hello from "@/components/Hello/Hello";
import Hero from "@/components/Hero/Hero";
import TechStack from "@/components/TechStack/TechStack";
import { useState, useEffect } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {showIntro ? (
        <>
          <Hello onEnd={handleIntroEnd} />
        </>
      ) : (
        <>
          <MainHeadr />
            <Hero />
          <About />
          <TechStack />
        </>
      )}
    </>
  );
}
