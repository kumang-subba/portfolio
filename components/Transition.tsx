import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-1/2 h-screen z-30 bg-gradient-to-r from-purple-800 to-indigo-900"
        initial={{ x: "100%", width: "50%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "50%"] }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2, type: "linear" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 left-full w-1/2 h-screen z-30 bg-gradient-to-l from-purple-800 to-indigo-900"
        initial={{ x: "-100%", width: "50%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "-100%"], width: ["0%", "50%"] }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2, type: "linear" }}
      />
    </>
  );
};

export default Transition;
