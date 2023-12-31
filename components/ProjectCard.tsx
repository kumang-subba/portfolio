"use client";
import { useProjectViewStore } from "@/lib/projectViewStore";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  children: React.ReactNode;
  id: string;
};
type CardProps = {
  id: string;
  isFullScreen: boolean;
};
const MotionImage = motion(Image);

const Card = ({ id, children }: ProjectCardProps) => {
  const { fullScreenProject, setFullScreenProject } = useProjectViewStore();
  return (
    <div className={cn("absolute inset-0 h-full w-full rounded-2xl overflow-hidden")}>
      {/* {images.map((image, index) => (
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
      )} */}
      {children}
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
type Projects = {
  Shoppio: (props: CardProps) => JSX.Element;
  Nextcord: (props: CardProps) => JSX.Element;
  Thehub: (props: CardProps) => JSX.Element;
  Blog: (props: CardProps) => JSX.Element;
};
export const ProjectCard: Projects = {
  Shoppio: ({ id, isFullScreen }: CardProps) => (
    <Card id={id}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#a78afe]"
        )}
      />
      <Image
        src="/projects/shoppio-1.png"
        alt="Shoppio Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-0 top-0 w-full",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/shoppio-2.png"
        alt="Shoppio Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/shoppio-3.png"
        alt="Shoppio Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[60%] w-[50%]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />

      {!isFullScreen && (
        <MotionImage
          layoutId="logo"
          src="/projects/shoppio-logo.png"
          alt="Shoppio logo"
          className={cn("absolute rounded-xl top-0 left-0 h-20 w-20")}
          width={50}
          height={50}
        />
      )}
    </Card>
  ),
  Nextcord: ({ id, isFullScreen }: CardProps) => (
    <Card id={id}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#addeff]"
        )}
      />
      <Image
        src="/projects/nextcord-1.png"
        alt="Nextcord Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[10%] top-[5%] w-[50%] -rotate-[20deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/nextcord-2.png"
        alt="Nextcord Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/nextcord-3.png"
        alt="Nextcord Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[50%] w-[50%]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />

      {!isFullScreen && (
        <MotionImage
          layoutId="logo"
          src="/projects/nextcord-logo.png"
          alt="Nextcord logo"
          className={cn("absolute rounded-xl top-40 left-[50%] h-10 w-10")}
          width={50}
          height={50}
        />
      )}
    </Card>
  ),
  Thehub: ({ id, isFullScreen }: CardProps) => (
    <Card id={id}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#ffd8ad]"
        )}
      />
      <Image
        src="/projects/the-hub-1.png"
        alt="The-hub Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[10%] top-[10%] w-[50%] -rotate-[20deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/the-hub-2.png"
        alt="The-hub Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/the-hub-3.png"
        alt="The-hub Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[60%] w-[40%]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />

      {!isFullScreen && (
        <MotionImage
          layoutId="logo"
          src="/projects/the-hub-logo.png"
          alt="The-hub logo"
          className={cn("absolute rounded-xl top-20 left-[60%] h-20 w-20")}
          width={50}
          height={50}
        />
      )}
    </Card>
  ),
  Blog: ({ id, isFullScreen }: CardProps) => (
    <Card id={id}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#ffade1]"
        )}
      />
      <Image
        src="/projects/blog-1.png"
        alt="Blog Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-0 top-[50%] w-[80%] -rotate-[20deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/blog-2.png"
        alt="Blog Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />

      {!isFullScreen && (
        <MotionImage
          layoutId="logo"
          src="/projects/blog-logo.png"
          alt="Blog logo"
          className={cn("absolute rounded-xl top-0 left-0 h-20 w-20")}
          width={50}
          height={50}
        />
      )}
    </Card>
  ),
};
