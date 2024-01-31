"use client";
import { educationData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ListItem from "./ListItem";

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40 h-screen max-w-[100%]">
      <div className="text-6xl text-center font-bold leading-relaxed">Education</div>
      <div className="w-full mx-auto relative" ref={ref}>
        <motion.div
          className="absolute left-[50%] top-36 w-[5px] h-full bg-white origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-center justify-between gap-20 pt-10">
          {educationData.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
