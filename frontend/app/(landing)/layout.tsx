import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "African+",
  description: "landing page",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
