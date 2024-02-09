"use client";
import { useProjectViewStore } from "@/lib/projectViewStore";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Project = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const { setInProjectView, inProjectView } = useProjectViewStore();
  useEffect(() => {
    if (isInView) setInProjectView(id);
    if (!isInView && inProjectView === id) setInProjectView(null);
  }, [isInView, id, setInProjectView, inProjectView]);
  return (
    <p
      className={cn(
        "py-16 text-xl md:text-3xl lg:text-5xl font-bold transition-colors project-title",
        isInView ? "text-white/95" : "text-gray-500"
      )}
      ref={ref}
    >
      {children}
    </p>
  );
};

export default Project;
