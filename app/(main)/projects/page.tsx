import Parallax from "@/components/Parallax";
import Projects from "@/components/Projects";

const Page = () => {
  return (
    <main className="py-16">
      <Parallax />
      <Projects />
      <div className="left-[60%] top-[50%] w-[35%] rotate-[25deg] from-[#f7f0ff] to-[#a78afe] hidden" />
      <div className="left-[20%] top-[60%] w-[50%] hidden" />
      <div className="top-0 left-0 h-20 w-20 hidden" />
      <div className="from-[#f7f0ff] to-[#addeff] left-[10%] top-[5%] w-[50%] -rotate-[20deg] hidden" />
      <div className="left-[60%] top-[50%] w-[35%] rotate-[25deg]" />
      <div className="left-[20%] top-[50%] w-[50%] hidden" />
      <div className="top-40 left-[50%] h-10 w-10 hidden" />
      <div className="from-[#f7f0ff] to-[#ffd8ad] left-[10%] top-[10%] w-[50%] -rotate-[20deg] hidden" />
      <div className="left-[60%] top-[50%] w-[35%] rotate-[25deg]" />
      <div className="left-[20%] top-[60%] w-[40%] hidden" />
      <div className="top-20 left-[60%] h-20 w-20 hidden" />
      <div className="from-[#f7f0ff] to-[#ffade1] left-0 top-[50%] w-[80%] -rotate-[20deg] hidden" />
      <div className="left-[60%] top-[50%] w-[35%] rotate-[25deg] hidden" />
      <div className="top-40 left-[40%] h-20 w-20 hidden" />
    </main>
  );
};

export default Page;
