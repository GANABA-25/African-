"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type VolumeControlProps = {
  volume: number;
  onVolumeChange: (volume: number) => void;
  onToggleVolume: () => void;
};

export default function VolumeControl({
  volume,
  onVolumeChange,
  onToggleVolume,
}: VolumeControlProps) {
  const [isDragging, setIsDragging] = useState(false);

  const updateVolume = (clientY: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const position = (rect.bottom - clientY) / rect.height;
    const newVolume = Math.min(1, Math.max(0, position));

    onVolumeChange(newVolume);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      const slider = document.querySelector("[data-volume-slider]");

      if (!(slider instanceof HTMLDivElement)) return;

      updateVolume(event.clientY, slider);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="group/volume relative flex items-center justify-center">
      <div className="absolute bottom-0 left-1/2 z-20 h-40 w-12 -translate-x-1/2">
        <div className="absolute bottom-14 left-1/2 flex h-28 w-10 -translate-x-1/2 items-center justify-center opacity-0 transition-opacity duration-150 group-hover/volume:opacity-100">
          <div
            data-volume-slider
            className="relative h-24 w-1 cursor-pointer rounded-full bg-white/20"
            onMouseDown={(event) => {
              updateVolume(event.clientY, event.currentTarget);
              setIsDragging(true);
            }}
          >
            <div
              className="absolute bottom-0 left-1/2 w-1 -translate-x-1/2 rounded-full bg-primary"
              style={{ height: `${volume * 100}%` }}
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </div>
  );
}
