import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="max-[767px]:w-full
        flex justify-center items-center gap-2 rounded-xl bg-primary p-3 px-6 font-bold capitalize text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-primary-light hover:shadow-[0_8px_25px_rgba(248,191,75,0.25)] active:translate-y-0
        active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer shadow-sm"
    >
      {children}
    </button>
  );
}
