"use client";

import { useState } from "react";
import VideoControls from "./videoControls";

export default function VideoPlayer() {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [player, setPlayer] = useState<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleSeek = (time: number) => {
    if (!video) return;
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolume = () => {
    if (!video) return;
    const newVolume = video.volume > 0 ? 0 : 1;
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const handleFullscreen = async () => {
    if (!player) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await player.requestFullscreen();
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (!video) return;

    video.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div
      ref={setPlayer}
      className="group relative min-h-0 flex-1 overflow-hidden bg-black"
    >
      <video
        ref={setVideo}
        onClick={togglePlay}
        className="h-full w-full object-cover"
        src="/video/battleThoughTheHeavens.mp4"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => setCurrentTime(video?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(video?.duration ?? 0)}
      />

      <VideoControls
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        onTogglePlay={togglePlay}
        onSeek={handleSeek}
        onToggleVolume={handleVolume}
        onVolumeChange={handleVolumeChange}
        onFullscreen={handleFullscreen}
      />
    </div>
  );
}
