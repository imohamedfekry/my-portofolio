"use client";
import React from "react";
import { ScrollTunnel } from "../ui/startText";
import HorizontalScrollCarouselSkills from "../ui/skills";
import MagicBento from "../ui/MagicBento";
import LightRays from "../ui/LightRays";
function About() {

  return (
    <>
      <ScrollTunnel word="ABOUT ME" />
      <div className="relative">

        <div className="absolute inset-0 ">
          {/* <LightRays
            raysOrigin="left"
            raysColor="#8f78ff80"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          /> */}
        </div>


        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={200}
          particleCount={12}
          glowColor="182, 179, 250"

        />
              <HorizontalScrollCarouselSkills />

      </div>

      {/* </div> */}

    </>
  );
}

export default About;
