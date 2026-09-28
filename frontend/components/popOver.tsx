"use client";

import { ReactNode } from "react";
import { Popover } from "@radix-ui/themes";

interface PopOverProps {
  trigger: ReactNode;
  children: ReactNode;
  width?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  alignOffset?: number;
  sideOffset?: number;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onContentMouseEnter?: () => void;
  onContentMouseLeave?: () => void;
}

export default function PopOver({
  trigger,
  children,
  width = "360px",
  side = "top",
  align = "end",
  alignOffset,
  sideOffset = 8,
  className = "",
  open,
  onOpenChange,
  onContentMouseEnter,
  onContentMouseLeave,
}: PopOverProps) {
  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>

      <Popover.Content
        width={width}
        side={side}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={className}
        onMouseEnter={onContentMouseEnter}
        onMouseLeave={onContentMouseLeave}
      >
        {children}
      </Popover.Content>
    </Popover.Root>
  );
}
