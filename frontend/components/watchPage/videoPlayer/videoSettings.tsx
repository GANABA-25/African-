"use client";

import PopOver from "@/components/popOver";
import VideoControlButton from "@/components/videoControlButton";
import { Settings, X } from "lucide-react";

export default function VideoSettings() {
  return (
    <PopOver
      width="285px"
      side="top"
      align="end"
      sideOffset={12}
      trigger={
        <VideoControlButton label="Settings" icon={<Settings size={18} />} />
      }
      className="overflow-hidden border-0 bg-[#242424] p-0 text-white shadow-2xl z-50"
    >
      <div className="w-full">
        <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#181818] px-4">
          <div className="text-xs font-medium text-white">Settings</div>

          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center text-gray-300 transition hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-48 overflow-y-auto">
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs text-gray-300 transition hover:bg-white/10"
          >
            <span>Quality</span>
            <span className="text-gray-500">Auto</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs text-gray-300 transition hover:bg-white/10"
          >
            <span>Playback Speed</span>
            <span className="text-gray-500">Normal</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs text-gray-300 transition hover:bg-white/10"
          >
            <span>Subtitles</span>
            <span className="text-gray-500">English</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs text-gray-300 transition hover:bg-white/10"
          >
            <span>Audio</span>
            <span className="text-gray-500">English</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs text-gray-300 transition hover:bg-white/10"
          >
            <span>Autoplay</span>
            <span className="text-gray-500">On</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs text-gray-300 transition hover:bg-white/10"
          >
            <span>Language</span>
            <span className="text-gray-500">English</span>
          </button>
        </div>
      </div>
    </PopOver>
  );
}
