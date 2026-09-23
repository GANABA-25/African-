"use client";

import { useEffect, useState } from "react";
import {
  Maximize2,
  Play,
  Captions,
  Settings,
  PictureInPicture2,
  Pause,
} from "lucide-react";
import VideoProgress from "./videoProgress";
import VideoControlButton from "@/components/videoControlButton";
import VolumeControl from "./volumeControl";

type VideoControlsProps = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onToggleVolume: () => void;
  onVolumeChange: (volume: number) => void;
  onFullscreen: () => void;
};

export default function VideoControls({
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlay,
  onSeek,
  onToggleVolume,
  onVolumeChange,
  onFullscreen,
}: VideoControlsProps) {
  const [isDragging, setIsDragging] = useState(false);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const updateProgress = (clientX: number, element: HTMLDivElement) => {
    if (!duration) return;

    const rect = element.getBoundingClientRect();
    const position = Math.min(
      1,
      Math.max(0, (clientX - rect.left) / rect.width),
    );

    onSeek(position * duration);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      const progressBar = document.querySelector("[data-progress-bar]");

      if (!(progressBar instanceof HTMLDivElement)) return;

      updateProgress(event.clientX, progressBar);
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
  }, [isDragging, duration]);

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-12 opacity-0 transition-opacity duration-300 delay-3000 group-hover:opacity-100 group-hover:delay-0">
      <VideoProgress
        currentTime={currentTime}
        duration={duration}
        onSeek={onSeek}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <VideoControlButton
            label={isPlaying ? "Pause" : "Play"}
            onClick={onTogglePlay}
            icon={
              isPlaying ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play size={20} fill="currentColor" />
              )
            }
          />

          <VolumeControl
            volume={volume}
            onVolumeChange={onVolumeChange}
            onToggleVolume={onToggleVolume}
          />

          <span className="flex items-center text-xs font-medium text-white">
            <span>{formatTime(currentTime)}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-gray-300">{formatTime(duration)}</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-white">
          <VideoControlButton label="Captions" icon={<Captions size={18} />} />

          <VideoControlButton label="Settings" icon={<Settings size={18} />} />

          <VideoControlButton
            label="Picture in Picture"
            icon={<PictureInPicture2 size={18} />}
          />

          <VideoControlButton
            onClick={onFullscreen}
            label="Fullscreen"
            icon={<Maximize2 size={18} />}
          />
        </div>
      </div>
    </div>
  );
}
