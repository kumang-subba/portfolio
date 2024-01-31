import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <div className="text-2xl md:text-3xl py-20 w-full h-screen">
      <AnimatedText text="About me" />
      <AnimatedText
        text="Even prior to beginning my studies in BIT, I held a strong enthusiasm for coding. I delved into coding
       and learned full-stack web development. My favorite part of programming is 
       the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. 
       My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript and Prisma.
        I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer."
        className="text-xl md:text-2xl my-10 w-1/2 mx-auto min-w-[80%]"
      />
      <AnimatedText
        text="When I'm not coding, I enjoy playing video games, watching movies. I also enjoy learning new things."
        className="text-xl md:text-2xl my-10 w-1/2 mx-auto min-w-[80%]"
      />
    </div>
  );
};

export default About;
