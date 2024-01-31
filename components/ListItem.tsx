interface ListItemProps {
  title: string;
  institution: string;
  location: string;
  timeline: string;
}

const ListItem = ({ title, institution, location, timeline }: ListItemProps) => {
  return (
    <>
      <li className="even:translate-x-[60%] odd:translate-x-[-60%]">
        <TiltCard title={title} institution={institution} location={location} timeline={timeline} />
      </li>
    </>
  );
};

export default ListItem;
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({
  title,
  institution,
  location,
  timeline,
}: {
  title: string;
  institution: string;
  location: string;
  timeline: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-44 w-48 md:h-44 md:w-72 lg:h-56 lg:w-96 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg text-violet-900 pointer-events-none"
      >
        <h1
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-lg md:text-2xl lg:text-4xl font-bold"
        >
          {title}
        </h1>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xs md:text-sm font-bold"
        >
          {institution}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xs md:text-sm font-semibold"
        >
          {location}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xs md:text-sm font-semibold"
        >
          {timeline}
        </p>
      </div>
    </motion.div>
  );
};
