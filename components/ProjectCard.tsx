"use client";
import { useProjectViewStore } from "@/lib/projectViewStore";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  id: string;
  cardBG: string;
  images: {
    src: string;
    style: string;
  }[];
  logo: {
    src: string;
    style: string;
  };
};
type CardProps = {
  id: string;
};
const MotionImage = motion(Image);

const ProjectCard = ({ id, cardBG, images, logo }: ProjectCardProps) => {
  const { fullScreenProject, setFullScreenProject } = useProjectViewStore();
  return (
    <div className={cn("absolute inset-0 h-full w-full rounded-2xl overflow-hidden")}>
      <div className={cn("origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card", cardBG)} />
      {images.map((image, index) => (
        <Image
          key={`${id}-${index}`}
          src={image.src}
          alt={`${id}-${index}`}
          className={cn(
            "absolute rounded-xl shadow-lg transition-transform duration-1000",
            image.style,
            fullScreenProject ? "scale-0" : "scale-100"
          )}
          width={500}
          height={500}
        />
      ))}
      {!fullScreenProject && (
        <MotionImage
          layoutId="logo"
          src={logo.src}
          alt={`${id}-logo`}
          className={cn("absolute rounded-xl", logo.style)}
          width={50}
          height={50}
        />
      )}
      <button
        className={cn(
          "absolute bottom-6 right-6 rounded-lg bg-black px-4 py-2 font-semibold transition-transform duration-300 origin-bottom-right",
          fullScreenProject ? "pointer-events-none scale-0" : "pointer-events-auto scale-100"
        )}
        onClick={() => {
          setFullScreenProject(id);
          window.document.body.style.overflow = "hidden";
        }}
      >
        View Project
      </button>
    </div>
  );
};
export default ProjectCard;
