"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import parallaxBg1 from "../public/parallax.jpg";
import parallaxBg2 from "../public/parallaxBot.png";

const MotionImage = motion(Image);

const Parallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);

  return (
    <div
      className="w-full h-screen bg-black overflow-hidden relative grid place-items-center"
      ref={ref}
    >
      <div className="z-10 pb-20 pr-10 w-1/2">
        <motion.h1
          className="font-bold text-2xl md:text-4xl lg:text-6xl"
          style={{ y: textY }}
        >
          Exploring Boundaries,
        </motion.h1>
        <motion.h1
          className="font-bold text-2xl md:text-4xl lg:text-6xl"
          style={{ x: textX }}
        >
          Crafting Solutions.
        </motion.h1>
      </div>
      <MotionImage
        className="absolute w-full h-full bottom-0 z-0"
        src={parallaxBg1}
        alt="parallax background one"
        style={{
          y: backgroundY,
        }}
      />
      <Image
        className="absolute w-full h-full bottom-0 z-20"
        src={parallaxBg2}
        alt="parallax background 2"
      />
    </div>
  );
};

export default Parallax;
