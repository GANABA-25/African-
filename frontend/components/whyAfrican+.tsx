import {
  Compass,
  MonitorSmartphone,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Discover African Stories",
    description:
      "Explore powerful stories from Ghana, Nigeria, Kenya, South Africa and across the continent.",
  },
  {
    icon: MonitorSmartphone,
    title: "Watch Anywhere",
    description:
      "Enjoy your favorite movies across desktop, tablet, and mobile.",
  },
  {
    icon: HeartHandshake,
    title: "Support African Filmmakers",
    description:
      "Your subscription helps filmmakers reach new audiences and continue creating.",
  },
  {
    icon: Sparkles,
    title: "One Premium Experience",
    description:
      "Enjoy a simple, beautiful and distraction-free streaming experience.",
  },
];

export default function WhyAfrican() {
  return (
    <div className="grid grid-cols-4 gap-4 bg-[#141414]">
      {features.map((data) => (
        <div
          key={data.title}
          className="group space-y-4 rounded-xl border border-primary/10 p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/3 hover:shadow-[0_10px_40px_rgba(248,191,75,0.08)]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
            <data.icon
              size={18}
              color="#f8bf4b"
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:rotate-6"
            />
          </div>

          <h1 className="font-bold transition-colors duration-300 group-hover:text-primary">
            {data.title}
          </h1>

          <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
}
