import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Kumang's resume",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full h-screen">{children}</div>;
};

export default Layout;
