"use client";

import { ReactNode } from "react";
import { Popover } from "@radix-ui/themes";

interface PopOverProps {
  trigger: ReactNode;
  children: ReactNode;
  width?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
}

export default function PopOver({
  trigger,
  children,
  width = "360px",
  side = "top",
  align = "end",
  sideOffset = 8,
  className = "",
}: PopOverProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>

      <Popover.Content
        width={width}
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={className}
      >
        {children}
      </Popover.Content>
    </Popover.Root>
  );
}
