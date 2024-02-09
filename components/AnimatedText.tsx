"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className={cn("w-full py-2 flex text-center")}>
      <AnimatePresence>
        <motion.h1
          className={cn(`inline-block w-full font-bold`, className)}
          variants={quote}
          initial="initial"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
