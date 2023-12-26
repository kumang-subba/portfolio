import About from "@/components/About";
import Education from "@/components/Education";
import HomeBanner from "@/components/HomeBanner";
import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kumang",
  description: "Kumang's portfolio",
};
export default function Home() {
  return (
    <main className="px-32 py-10">
      <HomeBanner />
      <About />
      <Skills />
      <Education />
    </main>
  );
}
