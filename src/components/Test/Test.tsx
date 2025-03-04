import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScrollComponent() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".section", {
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        end: "top 20%",
        scrub: 1, // كل ما تسكرول تتحرك الانيميشن
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="min-h-[200vh] bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl my-10">Scroll Down 👇</h1>
      <div className="section opacity-0 translate-y-20 bg-blue-500 p-10 rounded-lg text-white">
        أنا عنصر بيظهر بسلاسة مع السكرول!
      </div>
    </div>
  );
}
