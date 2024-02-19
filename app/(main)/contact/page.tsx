"use client"
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <main className="h-screen">
      <Contact />
    </main>
  );
};

export default Page;
