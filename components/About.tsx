import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <div className="text-3xl py-20 flex flex-col items-center w-full h-screen">
      <AnimatedText text="About me" />
      <AnimatedText
        text="Even prior to beginning my studies in BIT, I held a strong enthusiasm for coding. I delved into coding
       and learned full-stack web development. My favorite part of programming is 
       the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. 
       My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript and Prisma.
        I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer."
        className="text-2xl py-10 w-1/2 mx-auto"
      />
      <AnimatedText
        text="When I'm not coding, I enjoy playing video games, watching movies. I also enjoy learning new things."
        className="text-2xl py-10 w-1/2 mx-auto"
      />
    </div>
  );
};

export default About;
