"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useProjectViewStore } from "@/lib/projectViewStore";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const { fullScreenProject } = useProjectViewStore();
  useEffect(() => {
    if (fullScreenProject) setHidden(true);
  }, [fullScreenProject]);

  return (
    <motion.nav
      className={cn("flex w-full px-16 md:px-32 h-16 shadow-black shadow justify-between items-center fixed z-50 bg-indigo-900")}
      animate={{ y: hidden ? "-100%" : 0 }}
      initial={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="flex gap-2 items-center justify-center">
        <CustomLink href={"/"}>Home</CustomLink>
        <CustomLink href={"/projects"}>Projects</CustomLink>
        <CustomLink href={"/contact"}>Contact me</CustomLink>
      </div>
      <div className="block lg:absolute left-[50%] top-3 translate-x-[0] md:translate-x-[-50%]">
        <motion.h1
          className="font-semibold text-xl md:text-3xl tracking-wider"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Kumang Subba
        </motion.h1>
      </div>
    </motion.nav>
  );
};

export default NavBar;

const MotionLink = motion(Link);
const CustomLink = ({ children, ...props }: { children: React.ReactNode } & LinkProps) => {
  const path = usePathname();
  return (
    <MotionLink
      {...props}
      className={cn("group relative xl:text-xl text-sm", path === props.href && "font-semibold")}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {children}
      <span
        className={cn(
          "h-[1px] inline-block bg-white absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300",
          path === props.href ? "w-full" : "w-1/2"
        )}
      >
        &nbsp;
      </span>
    </MotionLink>
  );
};
