import React from "react";

export default function Footer() {
  return (
    <footer className="my-10 px-4 text-center text-slate-200">
      <small className="mb-2 block text-[10px] md:text-xs">&copy; 2023 Kumang Subba. All rights reserved.</small>
      <p className="text-[10px] md:text-xs">
        <span className="font-semibold">About this website:</span> built with React & Next.js (App Router), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
