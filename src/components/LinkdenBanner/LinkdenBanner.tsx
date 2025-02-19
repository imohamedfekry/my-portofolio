"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";

export default function LinkdenBanner() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <motion.div
          className="bg-gradient-to-r  z-[99999] from-[#ec4899] via-[#a855f7] to-[#6366f1] py-1 flex items-center justify-center shadow-lg relative animate-move-bg bg-[length:200%_200%]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
                    <a href="#">
          <AnimatedGradientText>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#0077b5" }}
              className="text-lg mx-1"
            />
            <hr className="mx-2 shrink-0 bg-gray-300" />
            <span
              className={cn(
                "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
              )}
            >
              <span className="hidden sm:block">Connect on linkedin </span>
              <span className="block sm:hidden">linkedin </span>
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-white" />
          </AnimatedGradientText>
          </a>

          <div
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 p-[0.85rem] flex items-center justify-center rounded-full cursor-pointer hover:bg-indigo-400"
          >
            <FontAwesomeIcon icon={faX} />
          </div>
        </motion.div>
      )}
    </>
  );
}
