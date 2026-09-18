import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "African+",
  description: "landing page",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
