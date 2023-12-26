import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Kumang's projects",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
