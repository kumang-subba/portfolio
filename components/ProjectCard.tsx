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
    <div className={cn("absolute inset-0 rounded-2xl overflow-hidden")}>
      {children}
      <button
        className={cn(
          "absolute bottom-3 right-3 md:bottom-6 md:right-6 rounded-lg bg-black px-2 py-1 md:px-4 md:py-2 font-medium md:font-semibold transition-transform duration-300 origin-bottom-right text-xs md:text-base lg:text-lg text-nowrap",
          fullScreenProject
            ? "pointer-events-none scale-0"
            : "pointer-events-auto scale-100"
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
  PostBlogApp: (props: CardProps) => JSX.Element;
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
          className={cn(
            "absolute rounded-xl top-0 left-0 h-10 w-10 md:h-20 md:w-20"
          )}
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
          className={cn(
            "absolute rounded-xl top-20 left-[60%] h-10 w-10 md:h-20 md:w-20"
          )}
          width={50}
          height={50}
        />
      )}
    </Card>
  ),
  PostBlogApp: ({ id, isFullScreen }: CardProps) => (
    <Card id={id}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#ffade1]"
        )}
      />
      <Image
        src="/projects/post-blog-1.png"
        alt="Blog Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-0 top-[10%] w-[80%] -rotate-[20deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={250}
        height={250}
      />
      <Image
        src="/projects/post-blog-2.png"
        alt="Blog Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100"
        )}
        width={200}
        height={200}
      />
      <Image
        src="/projects/post-blog-3.png"
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
          src="/projects/post-blog-logo.png"
          alt="Post:Blog logo"
          className={cn(
            "absolute rounded-xl top-0 left-0 h-10 w-10 md:h-20 md:w-20"
          )}
          width={500}
          height={50}
        />
      )}
    </Card>
  ),
};
