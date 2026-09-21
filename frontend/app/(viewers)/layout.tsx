import type { Metadata } from "next";
import HomeFooter from "@/components/footer";

export const metadata: Metadata = {
  title: "African+",
  description: "Home page",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <HomeFooter />
    </div>
  );
}
