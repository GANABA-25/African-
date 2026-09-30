"use client";

import { useState } from "react";
import PopOver from "@/components/popOver";
import VideoControlButton from "@/components/videoControlButton";
import {
  Settings,
  X,
  ClosedCaption,
  ListMinus,
  Volume2,
  Check,
} from "lucide-react";

type Setting = "quality" | "captions" | "playback" | "volume";

type VideoSettingsProps = {
  video: HTMLVideoElement | null;
};

export default function VideoSettings({ video }: VideoSettingsProps) {
  const [activeSetting, setActiveSetting] = useState<Setting>("captions");
  const [selectedRate, setSelectedRate] = useState(1);
  const [volume, setVolume] = useState(100);
  const [selectedCaption, setSelectedCaption] = useState("off");

  const changePlaybackRate = (rate: number) => {
    if (!video) return;

    video.playbackRate = rate;
    setSelectedRate(rate);
  };

  const changeVolume = (value: number) => {
    if (!video) return;

    video.volume = value / 100;
    setVolume(value);
  };

  const changeCaption = (caption: string) => {
    if (!video) return;

    const tracks = video.textTracks;

    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = "disabled";
    }

    if (caption !== "off") {
      const track = Array.from(tracks).find((track) => track.label === caption);

      if (track) {
        track.mode = "showing";
      }
    }

    setSelectedCaption(caption);
  };

  const renderSetting = () => {
    switch (activeSetting) {
      case "captions":
        return (
          <div className="space-y-1 p-2 text-sm text-gray-300">
            {["off", "English", "English CC"].map((caption) => (
              <button
                key={caption}
                type="button"
                onClick={() => changeCaption(caption)}
                className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-left hover:bg-white/10"
              >
                <span>{caption === "off" ? "Off" : caption}</span>

                {selectedCaption === caption && (
                  <Check size={15} className="text-primary" />
                )}
              </button>
            ))}
          </div>
        );
      case "playback":
        return (
          <div className="space-y-1 p-2 text-sm text-gray-300">
            {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => changePlaybackRate(rate)}
                className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-left hover:bg-white/10"
              >
                <span>{rate}x</span>

                {selectedRate === rate && (
                  <Check size={15} className="text-primary" />
                )}
              </button>
            ))}
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
              onChange={(event) => changeVolume(Number(event.target.value))}
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
