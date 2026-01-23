"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  if (path === "/resume") {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body
          className={cn(
            montserrat.className,
            "bg-gradient-to-b from-indigo-900 via-black to-black font-montserrat text-white/95 bg-no-repeat",
          )}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
}
