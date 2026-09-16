import { UserPlus, Play, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your account",
    description: "Sign up and create your African+ profile.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Choose your plan",
    description: "Select a subscription that works for you.",
  },
  {
    number: "03",
    icon: Play,
    title: "Start watching",
    description: "Discover and stream African movies anytime.",
  },
];

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-around md:gap-6">
      {steps.map((step) => {
        const Icon = step.icon;

        return (
          <div
            key={step.title}
            className="flex w-full max-w-xs flex-col items-center justify-center text-center md:w-1/3"
          >
            <div className="relative flex h-15 w-15 items-center justify-center rounded-md border border-primary/30 text-primary">
              <Icon size={20} />

              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border border-primary/20 bg-background px-1 text-xs text-primary">
                {step.number}
              </span>
            </div>

            <h1 className="mt-4 text-sm font-semibold md:text-base">
              {step.title}
            </h1>

            <p className="mt-2 max-w-xs text-xs text-gray-500">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
