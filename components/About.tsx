import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <div className="my-32 w-full lg:min-h-screen">
      <AnimatedText text="About me" className="text-nowrap text-2xl md:text-3xl lg:text-6xl"/>
      <AnimatedText
        text="Even prior to beginning my studies in BIT, I held a strong enthusiasm for coding. I delved into coding
       and learned full-stack web development. My favorite part of programming is 
       the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. 
       My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript and Prisma.
        I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer."
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
