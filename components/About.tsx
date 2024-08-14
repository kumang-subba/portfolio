import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <div className="my-32 w-full lg:min-h-screen">
      <AnimatedText
        text="About me"
        className="text-nowrap text-2xl md:text-3xl lg:text-6xl"
      />
      <AnimatedText
        text="Full-stack developer proficient in Javascript, Typescript,React, React-native, MySQL and MongoDB, with experience in freelancing.
        I also have knowledge of c++ and python."
        className="text-sm md:text-xl lg:text-3xl my-10 lg:w-1/2 mx-auto min-w-[80%] text-left md:text-center"
      />
      <AnimatedText
        text="When I'm not coding, I enjoy playing video games, watching movies. I also enjoy learning new things."
        className="text-sm md:text-xl lg:text-3xl my-10 lg:w-1/2 mx-auto min-w-[80%] text-left md:text-center"
      />
    </div>
  );
};

export default About;
