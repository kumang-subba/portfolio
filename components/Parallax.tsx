"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center" ref={ref}>
      <motion.h1
        className="font-bold text-2xl md:text-4xl lg:text-6xl relative z-10 pb-20 pr-10 mx-auto w-1/2"
        style={{ y: textY }}
      >
        Exploring Boundaries, Crafting Solutions.
      </motion.h1>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/parallax.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url(/parallaxBot.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Parallax;
