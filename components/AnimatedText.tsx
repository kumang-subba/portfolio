"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, animate, motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 1,
    y: 50,
  },
};

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <div className={cn("w-full mx-auto py-2 flex overflow-hidden text-center")}>
      <AnimatePresence>
        <motion.h1
          className={cn(`inline-block w-full font-bold text-6xl`, className)}
          variants={quote}
          initial="initial"
          whileInView={{
            opacity: 1,
            y: -10,
          }}
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
