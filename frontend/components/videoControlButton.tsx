"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

type VideoControlButtonProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export default function VideoControlButton({
  icon,
  label,
  onClick,
}: VideoControlButtonProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            onClick={onClick}
            className="flex h-8 w-8 cursor-pointer items-center justify-center text-white transition hover:text-gray-300"
          >
            {icon}
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={8}
            className="z-50 rounded-sm bg-white px-2.5 py-1.5 text-xs font-medium text-gray-500 shadow-lg"
          >
            {label}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
