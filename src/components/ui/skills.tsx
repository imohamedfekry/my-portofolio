import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// عرف نوع بيانات البطاقة
interface CardType {
  url: string;
  title: string;
  id: number;
}


const HorizontalScrollCarouselSkills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[var(--text-color)]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
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
      <img
        src={card.url}
        alt={card.title}
        className="w-24 h-24 object-contain mb-4 drop-shadow-lg mx-auto"
      />
      <div className="text-xl font-bold text-neutral-700 text-center">
        {card.title}
      </div>
    </div>
  );
};

export default HorizontalScrollCarouselSkills;

// عرف مصفوفة البطاقات بالنوع الصحيح
const cards: CardType[] = [
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    id: 1,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    id: 2,
  },
  {
    url: "https://img.icons8.com/color/240/nestjs.png",
    title: "NestJS",
    id: 3,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    title: "React.js",
    id: 4,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    id: 5,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    title: "Express.js",
    id: 6,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    title: "Redux",
    id: 7,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    id: 8,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    id: 9,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    title: "HTML5",
    id: 10,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    title: "CSS3",
    id: 11,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    title: "Tailwind CSS",
    id: 12,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    title: "Docker",
    id: 13,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    title: "Git", 
    id: 14,
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    title: "GitHub",
    id: 15,
  },
];