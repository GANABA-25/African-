import VideoControls from "./videoControls";

export default function VideoPlayer() {
  return (
    <div className="group relative min-h-0 flex-1 overflow-hidden bg-black">
      <video
        className="h-full w-full object-cover"
        src="/video/battleThoughTheHeavens.mp4"
        playsInline
      />

      <VideoControls />
    </div>
  );
}
