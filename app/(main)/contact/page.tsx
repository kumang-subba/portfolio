"use client"
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <main className="pt-16 md:pt-32 min-h-screen">
      <Contact />
    </main>
  );
};

export default Page;
