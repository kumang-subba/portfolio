"use client";
import { skillsData } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "./Icons";
import { SKillsType } from "../lib/data";
const animation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <div className="font-semibold flex flex-col items-center w-full gap-10 my-20 h-screen justify-center">
      <div className="bg-white text-violet-900 px-6 py-2 rounded-md text-2xl md:text-3xl lg:text-6xl text-center">Skills</div>
      <div className="flex flex-wrap justify-center gap-3 md:w-2/3 lg:w-1/2">
        <AnimatePresence>
          {skillsData.map((skill: SKillsType, index: number) => {
            const Icon = Icons[skill];
            return (
              <motion.div
                key={index}
                className="bg-white text-violet-900 rounded-xl px-2 py-1 md:px-4 md:py-2 flex gap-1 items-center justify-center text-nowrap text-base md:text-xl lg:text-2xl"
                variants={animation}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <Icon className="md:h-6 md:w-6 h-3 w-3" />
                {skill}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
