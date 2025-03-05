"use client";

import About from "@/components/About/About";
import MainHeadr from "@/components/Header/MainHeadr";
import Hello from "@/components/Hello/Hello";
import Hero from "@/components/Hero/Hero";
// import SmoothScrollComponent from "@/components/Test/Test";
import { useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroEnd = () => {
    setShowIntro(false);
  };
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
        </>
      )}
    </>
  );
}
