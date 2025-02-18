"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedTabs({
  tabs,
}: {
  tabs: { label: string; link: string }[];
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container && activeTab) {
      const activeTabElement = activeTabRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft ;
        const clipRight = offsetLeft + offsetWidth ;

        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 8px)`;
      }
    }
  }, [activeTab, activeTabRef, containerRef]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full bg-secondary/50 ">
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative flex w-full justify-center  bg-gradient-to-r from-[#6a65f2] via-[#b553e6] to-[#9894ff]  bg-[length:200%_100%] animate-move-bg">
          {tabs.map((tab, index) => (
            <a href={tab.link} key={index}>
              <button
                onClick={() => setActiveTab(tab.label)}
                className="flex h-8 items-center rounded-full p-3 text-sm font-medium text-primary-foreground"
                tabIndex={-1}
              >
                {tab.label}
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className="relative flex w-full justify-center">
        {tabs.map(({ label }, index) => {
          const isActive = activeTab === label;

          return (
            <button
              key={index}
              ref={isActive ? activeTabRef : null}
              onClick={() => setActiveTab(label)}
              className="flex h-8 items-center rounded-full p-3 text-sm font-medium text-muted-foreground"
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
