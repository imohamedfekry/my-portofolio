import React, { useEffect, useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Globe } from "../ui/Global";
import { Particles } from "../ui/particles";
import { useTheme } from "next-themes"; // تأكد من تثبيت next-themes

function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // نتأكد من ان المكون تم تركيبه على العميل لتجنب مشاكل الـ SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
      <div>
        <div className="relative h-screen flex items-center justify-center">
          {/* عنصر الكوكب */}
          <div className="relative w-full max-w-[600px] aspect-square z-10">
            <Globe />
          </div>

          {/* النص الأول: على حافة الكوكب من الأعلى */}
          <div
           className="absolute left-0 right-0 px-4  top-[calc(49%-300px)]
          ">
            <h1
              className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[5.8rem]  font-extrabold text-center  text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200 pb-8" >
              Designing the Future of Web
            </h1>
          </div>

          {/* النص الثاني: فوق منتصف الكوكب بقليل */}
          <div
            className="absolute left-0 right-0 px-4 top-[calc(50% - 100px) z-[999]"
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
