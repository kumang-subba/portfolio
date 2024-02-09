import About from "@/components/About";
import HomeBanner from "@/components/HomeBanner";
import Skills from "@/components/Skills";
import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Kumang",
  description: "Kumang's portfolio",
};
export default function Home() {
  return (
    <main className="px-8 sm:px-16 md:px-32 py-5 sm:py-10 overflow-hidden">
      <HomeBanner />
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
