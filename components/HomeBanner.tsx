"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef } from "react";
import { Icons } from "./Icons";

const MotionImage = motion(Image);

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const ImageSpan = ({ text, imgSrc }: { text: string; imgSrc: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  function handleMouse(event: MouseEvent<HTMLSpanElement>) {
    if (imageRef.current && spanRef.current) {
      imageRef.current.style.display = "inline-block";
      const rect = spanRef.current.getBoundingClientRect();
      if (event.clientX + imageRef.current.clientWidth + 5 >= window.document.documentElement.clientWidth) {
        x.set(event.clientX - rect.left - imageRef.current.clientWidth - 0);
      } else {
        x.set(event.clientX - rect.left + 20);
      }
      y.set(event.clientY - rect.top - 80);
    }
  }
  function handleMouseLeave(event: MouseEvent<HTMLSpanElement>) {
    if (imageRef.current) {
      imageRef.current.style.display = "none";
    }
    x.set(0);
    y.set(0);
  }
  return (
    <motion.span
      className="inline-block underline relative cursor-pointer"
      variants={singleWord}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      ref={spanRef}
    >
      {text}
      <MotionImage
        src={imgSrc}
        alt={text}
        className="w-48 h-auto hidden absolute rounded-full z-10 left-0 top-0 border border-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x, y }}
        ref={imageRef}
        width={500}
        height={500}
      />
    </motion.span>
  );
};

const HomeBanner = () => {
  return (
    <div className={cn("w-full flex flex-col items-center justify-center h-screen")}>
      <AnimatePresence>
        <motion.h1
          className={"inline-block w-full font-bold text-xl md:text-3xl lg:text-6xl tracking-wide leading-normal"}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {"Hello, I'm".split(" ").map((word, index) => (
            <motion.span key={word + "-" + index + "-c"} className="inline-block" variants={singleWord}>
              {word}&nbsp;
            </motion.span>
          ))}
          <ImageSpan text="Kumang Subba." imgSrc="/kumang.png" />{" "}
          {"I am a student of Business Information Technology, at Laurea University of Applied Sciences,"
            .split(" ")
            .map((word, index) => (
              <motion.span key={word + "-" + index + "-b"} className="inline-block" variants={singleWord}>
                {word}&nbsp;
              </motion.span>
            ))}
          <ImageSpan text="Finland." imgSrc="/finland.png" />{" "}
          {"I'm a".split(" ").map((word, index) => (
            <motion.span key={word + "-" + index + "-a"} className="inline-block" variants={singleWord}>
              {word}&nbsp;
            </motion.span>
          ))}
          <ImageSpan text="Frontend Developer." imgSrc="/developer.png" />
          <motion.div className="flex py-8 gap-1 md:gap-2 lg:gap-4 items-center" variants={singleWord}>
            <Link className="flex cursor-pointer gap-0 md:gap-1 text-xs md:text-md lg:text-lg font-medium group relative text-nowrap" href={"/contact"}>
              Contact me
              <ArrowRight className="w-4 h-4 lg:w-8 lg:h-8" />
              <span className="h-[1px] inline-block bg-white absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0 ">
                &nbsp;
              </span>
            </Link>
            <a href="/CV.pdf" download className="flex group cursor-pointer gap-1 text-xs md:text-md lg:text-lg font-medium group relative">
              Resume
              <ArrowDownToLine className="w-4 h-4 lg:w-8 lg:h-8" />
              <span className="h-[1px] inline-block bg-white absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0 ">
                &nbsp;
              </span>
            </a>
            <nav className="flex items-center justify-center gap-2">
              <motion.a
                href="https://github.com/kumang-subba"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icons.GitHub className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kumang-subba/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icons.LinkedIn className="w-8 h-8" />
              </motion.a>
            </nav>
          </motion.div>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default HomeBanner;
