import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";

// عرف نوع بيانات البطاقة
interface CardType {
  url: string;
  title: string;
  id: number;
}

const HorizontalScrollCarouselSkills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [shouldScroll, setShouldScroll] = useState(true);

  const EDGE_MARGIN = 32;
  const SECTION_MIN = 120; // vh
  const SECTION_MAX = 300; // vh

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useLayoutEffect(() => {
    const update = () => {
      if (!sliderRef.current || !targetRef.current) return;
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = targetRef.current.offsetWidth;
      const diff = sliderWidth - containerWidth + EDGE_MARGIN * 2;
      setMaxTranslate(diff > 0 ? diff : 0);
      setShouldScroll(diff > 0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], shouldScroll ? [EDGE_MARGIN, -maxTranslate + EDGE_MARGIN] : [EDGE_MARGIN, EDGE_MARGIN]);

  return (
    <section
      ref={targetRef}
      className={`relative  bg-[#0e0e18] dark:bg-[var(--text-color)]`}
      style={{ height: `min(${SECTION_MAX}vh, max(${SECTION_MIN}vh, ${cards.length * 18}vh))` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={sliderRef}
          style={{ x }}
          className="flex gap-2"
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div style={{ minWidth: EDGE_MARGIN }} />
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          <div style={{ minWidth: EDGE_MARGIN }} />
        </motion.div>
      </div>
    </section>
  );
};

// أضف النوع المناسب للبراميتر
const Card: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="flex flex-col items-center justify-center h-[220px] w-[220px] bg-neutral-200 rounded-xl shadow-md mx-auto"
    >
      <Image src={card.url}   width={96}   // نفس w-24 = 96px
  height={96} alt={card.title} className="w-24 h-24 object-contain mb-4 drop-shadow-lg mx-auto" />
      <div className="text-xl font-bold text-neutral-700 text-center">
        {card.title}
      </div>
    </div>
  );
};

export default HorizontalScrollCarouselSkills;

// عرف مصفوفة البطاقات بالنوع الصحيح
const cards: CardType[] = [
  // Frontend Technologies
  {
    url: "/skills/react-original.svg",
    title: "React.js",
    id: 1,
  },
  {
    url: "/skills/nextjs-original.svg",
    title: "Next.js",
    id: 2,
  },
  {
    url: "/skills/typescript-original.svg",
    title: "TypeScript",
    id: 3,
  },
  {
    url: "/skills/tailwindcss-original.svg",
    title: "Tailwind CSS",
    id: 4,
  },
  {
    url: "/skills/redux-original.svg",
    title: "Redux",
    id: 5,
  },

  // Backend Technologies
  {
    url: "/skills/nodejs-original.svg",
    title: "Node.js",
    id: 6,
  },
  {
    url: "/skills/express-original.svg",
    title: "Express.js",
    id: 7,
  },
  {
    url: "/skills/nestjs.png",
    title: "NestJS",
    id: 8,
  },
  {
    url: "/skills/mongodb-original.svg",
    title: "MongoDB",
    id: 9,
  },
  {
    url: "/skills/graphql-plain.svg",
    title: "GraphQL",
    id: 10,
  },
  {
    url: "/skills/socketio-original.svg",
    title: "Socket.io",
    id: 11,
  },

  // DevOps & Tools
  {
    url: "/skills/docker-original.svg",
    title: "Docker",
    id: 12,
  },
  {
    url: "/skills/git-original.svg",
    title: "Git",
    id: 13,
  },
  {
    url: "/skills/github-original.svg",
    title: "GitHub",
    id: 14,
  },
];