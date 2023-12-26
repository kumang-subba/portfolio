import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kumang",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
