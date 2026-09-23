"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { useEffect, useState } from "react";

type VideoProgressProps = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
};

export default function VideoProgress({
  currentTime,
  duration,
  onSeek,
}: VideoProgressProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState(0);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const updateProgress = (clientX: number, element: HTMLDivElement) => {
    if (!duration) return;

    const rect = element.getBoundingClientRect();

    const position = Math.min(
      1,
      Math.max(0, (clientX - rect.left) / rect.width),
    );

    onSeek(position * duration);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const position = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width),
    );

    setHoverPosition(position * 100);
    setHoverTime(position * duration);

    if (isDragging) {
      onSeek(position * duration);
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setHoverTime(null);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      const progressBar = document.querySelector("[data-video-progress]");

      if (!(progressBar instanceof HTMLDivElement)) return;

      const rect = progressBar.getBoundingClientRect();

      const position = Math.min(
        1,
        Math.max(0, (event.clientX - rect.left) / rect.width),
      );

      setHoverPosition(position * 100);
      setHoverTime(position * duration);

      onSeek(position * duration);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setHoverTime(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, duration, onSeek]);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root open={hoverTime !== null}>
        <Tooltip.Trigger asChild>
          <div
            data-video-progress
            className="relative mb-3 h-1 w-full cursor-pointer rounded-full bg-white/30"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={(event) => {
              updateProgress(event.clientX, event.currentTarget);
              setIsDragging(true);
            }}
          >
            <div
              className="relative h-full rounded-full bg-primary"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary" />
            </div>

            {hoverTime !== null && (
              <div
                className="pointer-events-none absolute top-0 h-1 w-px"
                style={{ left: `${hoverPosition}%` }}
              />
            )}
          </div>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={8}
            className="z-50 rounded-sm bg-white px-2.5 py-1.5 text-xs font-medium text-black shadow-lg"
          >
            {hoverTime !== null && formatTime(hoverTime)}

            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
