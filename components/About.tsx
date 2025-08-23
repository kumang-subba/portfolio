import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <div className="my-32 w-full lg:min-h-screen">
      <AnimatedText
        text="About me"
        className="text-nowrap text-2xl md:text-3xl lg:text-6xl"
      />
      <AnimatedText
        text="Hello! I’m Kumang Subba, a Software Engineer based in Finland. I have a passion for building modern, user friendly web applications and solving challenging problems with clean, efficient code."
        className="text-sm md:text-xl lg:text-3xl my-10 lg:w-1/2 mx-auto min-w-[80%] text-left md:text-center"
      />
      <AnimatedText
        text="I specialize in full-stack development and I enjoy exploring new technologies to continuously improve my skills. I learn out of curiosity, not obligation, and I’m especially fascinated by how computers work in general, understanding the inner workings of technology inspires me to create better solutions. I believe that truly understanding how something works is the key to making it work great."
        className="text-sm md:text-xl lg:text-3xl my-10 lg:w-1/2 mx-auto min-w-[80%] text-left md:text-center"
      />
    </div>
  );
};

export default About;
