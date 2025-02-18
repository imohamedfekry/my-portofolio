import React from "react";
import BackgroundParticles from "@/components/ui/background-particles";
import { Spotlight } from "@/components/ui/Spotlight";
import { Globe } from "../ui/Global";
function Hero() {
  return (
    <>
            <Spotlight />
      <div>
        <BackgroundParticles
          className="absolute inset-0"
          quantity={100}
          ease={40}
          color="#ffffff"
          refresh
        />
        {/* <Spotlight className="top-[-60px] md:left-0 md:-top-10 " fill="white" /> */}
        <div className="relative h-screen flex items-center justify-center">
          {/* عنصر الكوكب */}
          <div className="relative w-full max-w-[600px] aspect-square z-10">
            <Globe />
          </div>

          {/* النص الأول: على حافة الكوكب من الأعلى */}
          <div
            className="absolute left-0 right-0 px-4"
            style={{ top: "calc(48.9% - 300px) " }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-center 
               text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200 pb-8"
            >
              {/* bp عشان الكلام كله يظهر لو شلتها هيكون في جزء من الحروف مختفي */}
              Designing the Future of Web
            </h1>
          </div>

          {/* النص الثاني: فوق منتصف الكوكب بقليل */}
          <div
            className="absolute left-0 right-0 px-4"
            style={{ top: "calc(50% - 100px)", zIndex:"11" }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center 
                   text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-500"
            >
              One Pixel at a Time
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
