"use client";
import { useProjectViewStore } from "@/lib/projectViewStore";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import shoppioImage1 from "../public/projects/shoppio-1.png";
import shoppioImage2 from "../public/projects/shoppio-2.png";
import shoppioImage3 from "../public/projects/shoppio-3.png";
import shoppioLogo from "../public/projects/shoppio-logo.png";
import nextcordImage1 from "../public/projects/nextcord-1.png";
import nextcordImage2 from "../public/projects/nextcord-2.png";
import nextcordImage3 from "../public/projects/nextcord-3.png";
import nextcordLogo from "../public/projects/nextcord-logo.png";
import theHubImage1 from "../public/projects/the-hub-1.png";
import theHubImage2 from "../public/projects/the-hub-2.png";
import theHubImage3 from "../public/projects/the-hub-3.png";
import theHubLogo from "../public/projects/the-hub-logo.png";
import postBlogImage1 from "../public/projects/post-blog-1.png";
import postBlogImage2 from "../public/projects/post-blog-2.png";
import postBlogImage3 from "../public/projects/post-blog-3.png";
import postBlogLogo from "../public/projects/post-blog-logo.png";
import tuneImage1 from "../public/projects/tune-1.png";
import tuneImage2 from "../public/projects/tune-2.png";
import tuneImage3 from "../public/projects/tune-3.png";
import tuneLogo from "../public/projects/tune-logo.svg";
import { useRef } from "react";

type ProjectCardProps = {
  children: React.ReactNode;
  id: string;
  display: boolean;
};
type CardProps = {
  id: string;
  isFullScreen: boolean;
  display: boolean;
};
const MotionImage = motion(Image);

const Card = ({ id, children, display }: ProjectCardProps) => {
  const { fullScreenProject, setFullScreenProject } = useProjectViewStore();
  return (
    <div
      className={cn(
        "absolute inset-0 rounded-2xl overflow-hidden",
        display ? "block" : "hidden",
      )}
    >
      {children}
      <button
        className={cn(
          "absolute bottom-3 right-3 md:bottom-6 md:right-6 rounded-lg bg-black px-2 py-1 md:px-4 md:py-2 font-medium md:font-semibold transition-transform duration-300 origin-bottom-right text-xs md:text-base lg:text-lg text-nowrap",
          fullScreenProject
            ? "pointer-events-none scale-0"
            : "pointer-events-auto scale-100",
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
  Tune: (props: CardProps) => JSX.Element;
};
export const ProjectCard: Projects = {
  Shoppio: ({ id, isFullScreen, display }: CardProps) => (
    <Card id={id} display={display}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#a78afe]",
        )}
      />
      <Image
        src={shoppioImage1}
        alt="Shoppio Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[10%] w-1/2 rotate-6",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={shoppioImage2}
        alt="Shoppio Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={shoppioImage3}
        alt="Shoppio Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[60%] w-[50%]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />

      {!isFullScreen && display && (
        <MotionImage
          layoutId="logo"
          src={shoppioLogo}
          alt="Shoppio logo"
          className={cn(
            "absolute rounded-xl top-0 left-0 h-10 w-10 md:h-20 md:w-20",
          )}
          width={50}
          height={50}
          loading="eager"
        />
      )}
    </Card>
  ),
  Nextcord: ({ id, isFullScreen, display }: CardProps) => (
    <Card id={id} display={display}>
      <div className="origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#addeff]" />
      <Image
        src={nextcordImage1}
        alt="Nextcord Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[10%] top-[5%] w-[50%] -rotate-[20deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={nextcordImage2}
        alt="Nextcord Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={nextcordImage3}
        alt="Nextcord Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[50%] w-[50%]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />

      {!isFullScreen && display && (
        <MotionImage
          layoutId="logo"
          src={nextcordLogo}
          alt="Nextcord logo"
          className={cn("absolute rounded-xl top-40 left-[50%] h-10 w-10")}
          width={50}
          height={50}
          loading="eager"
        />
      )}
    </Card>
  ),
  Thehub: ({ id, isFullScreen, display }: CardProps) => (
    <Card id={id} display={display}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#ffd8ad]",
        )}
      />
      <Image
        src={theHubImage1}
        alt="The-hub Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[10%] top-[10%] w-[50%] -rotate-[20deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={theHubImage2}
        alt="The-hub Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={theHubImage3}
        alt="The-hub Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[60%] w-[40%]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />

      {!isFullScreen && display && (
        <MotionImage
          layoutId="logo"
          src={theHubLogo}
          alt="The-hub logo"
          className={cn(
            "absolute rounded-xl top-20 left-[60%] h-10 w-10 md:h-20 md:w-20",
          )}
          width={50}
          height={50}
          loading="eager"
        />
      )}
    </Card>
  ),
  PostBlogApp: ({ id, isFullScreen, display }: CardProps) => (
    <Card id={id} display={display}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#f7f0ff] to-[#ffade1]",
        )}
      />
      <Image
        src={postBlogImage1}
        alt="Blog Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-0 top-[10%] w-[80%] -rotate-[20deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={250}
        height={250}
        loading="eager"
      />
      <Image
        src={postBlogImage2}
        alt="Blog Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[35%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={postBlogImage3}
        alt="The-hub Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[20%] top-[60%] w-[40%]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      {!isFullScreen && display && (
        <MotionImage
          layoutId="logo"
          src={postBlogLogo}
          alt="Post:Blog logo"
          className={cn("absolute rounded-xl top-0 left-0 w-8")}
          width={50}
          height={50}
          loading="eager"
        />
      )}
    </Card>
  ),
  Tune: ({ id, isFullScreen, display }: CardProps) => (
    <Card id={id} display={display}>
      <div
        className={cn(
          "origin-bottom-left absolute inset-0 bg-gradient-to-br rounded-2xl active-card from-[#fcc0cc] to-[#ff1111]",
        )}
      />
      <Image
        src={tuneImage1}
        alt="Blog Image 1"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 right-[10%] z-20 top-[10%] w-[20%] -rotate-[-20deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={250}
        height={250}
        loading="eager"
      />
      <Image
        src={tuneImage2}
        alt="Blog Image 2"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[60%] top-[50%] w-[50%] rotate-[25deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      <Image
        src={tuneImage3}
        alt="The-hub Image 3"
        className={cn(
          "absolute rounded-xl shadow-lg transition-transform duration-1000 left-[5%] top-[10%] w-[80%] rotate-[-30deg]",
          isFullScreen ? "scale-0" : "scale-100",
        )}
        width={200}
        height={200}
        loading="eager"
      />
      {!isFullScreen && display && (
        <MotionImage
          layoutId="logo"
          src={tuneLogo}
          alt="Post:Blog logo"
          className={cn("absolute rounded-xl top-[50%] left-[50%] w-8")}
          width={50}
          height={50}
          loading="eager"
        />
      )}
    </Card>
  ),
};
