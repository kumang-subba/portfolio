"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";
import { PropsWithChildren, useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  
  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body
        className={cn(
          montserrat.className,
          "bg-gradient-to-b from-indigo-900 via-black to-black font-montserrat text-white/95 bg-no-repeat"
        )}
      >
        <NavBar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={path}>
            <FrozenRouter>
              <Transition />
              {children}
            </FrozenRouter>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
