"use client";
import { useProjectViewStore } from "@/lib/projectViewStore";
import { cn } from "@/lib/utils";
import { useClickAway } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { MoveDiagonal } from "lucide-react";
import Image from "next/image";
import { Icons } from "./Icons";

type ProjectDetailProps = {
  imageSrc: string;
  id: string;
  title: string;
  description: string;
  logo: string;
  demo: string;
  repo: string;
};

const divVariant = {
  default: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
};

const logoVariant = {
  default: {
    rotateY: 0,
  },
  hover: {
    rotateY: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const iconVariant = {
  default: {
    scale: 0.9,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const MotionImage = motion(Image);
const ProjectDetail = ({ imageSrc, id, title, description, logo, demo, repo }: ProjectDetailProps) => {
  const { fullScreenProject, setFullScreenProject } = useProjectViewStore();

  const ref: any = useClickAway(() => {
    setFullScreenProject(null);
    window.document.body.style.overflow = "auto";
  });
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center  fullscreen-project opacity-0 pointer-events-none rounded-lg",
        fullScreenProject ? "z-30" : "-z-10"
      )}
    >
      <div className="max-w-6xl px-4 rounded-lg" ref={ref}>
        <Image src={imageSrc} alt={id} width={1000} height={1000} className="rounded-t-lg" />
        <div className="flex bg-white rounded-b-lg text-stone-800 flex-col px-10 pt-2 pb-5">
          <p className="font-bold text-xl flex gap-2 items-center justify-start">
            {title}
            {fullScreenProject && (
              <MotionImage src={logo} alt={id} width={50} height={50} className="h-8 w-8" layoutId="logo" />
            )}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-center">{description}</p>
            <div className="flex gap-4">
              <motion.a
                className="flex items-center justify-center gap-1 bg-indigo-900 text-white/95 px-4 py-2 rounded-full"
                href={demo}
                target="_blank"
                initial="default"
                whileHover="hover"
                variants={divVariant}
              >
                Demo
                <motion.span variants={iconVariant}>
                  <MoveDiagonal />
                </motion.span>
              </motion.a>
              <motion.a
                className="flex items-center justify-center gap-1 bg-indigo-900 text-white/95 px-4 py-2 rounded-full"
                href={repo}
                target="_blank"
                initial="default"
                whileHover="hover"
                variants={divVariant}
              >
                Repo
                <motion.span variants={logoVariant}>
                  <Icons.GitHub className="w-6 h-6" />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
