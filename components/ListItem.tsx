interface ListItemProps {
  title: string;
  company: string;
  location: string;
  timeline: string;
}

const ListItem = ({ title, company, location, timeline }: ListItemProps) => {
  return (
    <>
      <li className="even:translate-x-[60%] odd:translate-x-[-60%]">
        <TiltCard
          title={title}
          company={company}
          location={location}
          timeline={timeline}
        />
      </li>
    </>
  );
};

export default ListItem;
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({
  title,
  company,
  location,
  timeline,
}: {
  title: string;
  company: string;
  location: string;
  timeline: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

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
      className="relative h-52 w-[8.5rem] md:h-44 md:w-76 lg:h-56 lg:w-[30rem] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute px-2 inset-4 grid place-content-center rounded-xl bg-white shadow-lg text-violet-900 pointer-events-none"
      >
        <h1
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-base md:text-xl lg:text-4xl font-semibold md:font-bold"
        >
          {title}
        </h1>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xs md:text-sm lg:text-xl font-semibold md:font-bold"
        >
          {company}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xs md:text-sm lg:text-xl font-semibold md:font-bold"
        >
          {location}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xs md:text-sm lg:text-xl font-medium"
        >
          {timeline}
        </p>
      </div>
    </motion.div>
  );
};
