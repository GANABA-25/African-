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
    <div className="flex items-center justify-around">
      {steps.map((step) => {
        const Icon = step.icon;

        return (
          <div
            key={step.title}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="relative flex h-15 w-15 items-center justify-center rounded-md border border-primary/30 text-primary">
              <Icon size={20} />

              <span className="absolute -right-3 -top-3 rounded-full border border-primary/20 px-2 text-xs text-primary">
                {step.number}
              </span>
            </div>

            <h1 className="mt-4 font-semibold">{step.title}</h1>

            <p className="mt-2 max-w-xs text-sm text-gray-500">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
