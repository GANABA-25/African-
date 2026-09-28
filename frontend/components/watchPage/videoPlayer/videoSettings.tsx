"use client";

import { useState } from "react";
import PopOver from "@/components/popOver";
import VideoControlButton from "@/components/videoControlButton";
import {
  Settings,
  X,
  ChartNoAxesColumnIncreasing,
  ClosedCaption,
  ListMinus,
  Volume2,
} from "lucide-react";

type Setting = "quality" | "captions" | "playback" | "volume";

export default function VideoSettings() {
  const [activeSetting, setActiveSetting] = useState<Setting>("quality");

  const renderSetting = () => {
    switch (activeSetting) {
      case "quality":
        return (
          <div className="space-y-1 text-sm text-gray-300">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-1 cursor-pointer text-left hover:bg-white/10"
            >
              <span>Auto</span>
              <span className="text-xs text-gray-500">720p</span>
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 cursor-pointer text-left hover:bg-white/10"
            >
              1080p
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 cursor-pointer text-left hover:bg-white/10"
            >
              720p
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 cursor-pointer text-left hover:bg-white/10"
            >
              360p
            </button>
          </div>
        );

      case "captions":
        return (
          <div className="space-y-1 text-sm text-gray-300">
            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              Off
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              English
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              English CC
            </button>
          </div>
        );

      case "playback":
        return (
          <div className="space-y-1 text-sm text-gray-300">
            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              0.25x
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              0.5x
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              0.75x
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              1x
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              1.25x
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              1.5x
            </button>

            <button
              type="button"
              className="w-full rounded-md px-3 py-1 text-left hover:bg-white/10"
            >
              2x
            </button>
          </div>
        );

      case "volume":
        return (
          <div className="space-y-4 p-4 text-sm text-gray-300">
            <div className="flex items-center justify-between">
              <span>Volume</span>
              <span className="text-xs text-gray-500">100%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              className="w-full accent-primary"
            />

            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        );
    }
  };

  return (
    <PopOver
      width="285px"
      side="top"
      align="end"
      alignOffset={-100}
      sideOffset={30}
      trigger={
        <button type="button" className="cursor-pointer">
          <Settings size={18} />
        </button>
      }
      className="z-50 h-60 w-70 border-0 bg-[#242424] p-0 text-white shadow-2xl"
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/10 bg-[#181818] px-3">
          <div className="flex items-center gap-1">
            <VideoControlButton
              label="Quality"
              icon={<ChartNoAxesColumnIncreasing size={18} />}
              onClick={() => setActiveSetting("quality")}
            />

            <VideoControlButton
              label="Closed Captions"
              icon={<ClosedCaption size={18} />}
              onClick={() => setActiveSetting("captions")}
            />

            <VideoControlButton
              label="Playback Rates"
              icon={<ListMinus size={18} />}
              onClick={() => setActiveSetting("playback")}
            />

            <VideoControlButton
              label="Volume Control"
              icon={<Volume2 size={18} />}
              onClick={() => setActiveSetting("volume")}
            />
          </div>

          <button type="button" className="cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="scrollbar-yellow min-h-0 flex-1 overflow-y-auto">
          {renderSetting()}
        </div>
      </div>
    </PopOver>
  );
}
