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
      <div className="bg-white text-violet-900 px-6 py-2 rounded-md text-6xl text-center">Skills</div>
      <div className="flex flex-wrap justify-center gap-3 w-1/2">
        <AnimatePresence>
          {skillsData.map((skill: SKillsType, index: number) => {
            const Icon = Icons[skill];
            return (
              <motion.div
                key={index}
                className="bg-white text-violet-900 rounded-xl px-4 py-2 flex gap-1 items-center justify-center"
                variants={animation}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <Icon className="h-6 w-6" />
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
