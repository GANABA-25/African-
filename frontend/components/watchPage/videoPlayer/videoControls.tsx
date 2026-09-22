import {
  Maximize,
  Play,
  Volume2,
  Captions,
  Settings,
  PictureInPicture2,
} from "lucide-react";

export default function VideoControls() {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/60 to-transparent px-4 pb-3 pt-12 opacity-100">
      <div className="mb-3 h-1 w-full cursor-pointer rounded-full bg-white/30">
        <div className="relative h-full w-[72%] rounded-full bg-cyan-400">
          <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <button className="flex items-center justify-center transition hover:text-gray-300">
            <Play size={20} fill="currentColor" />
          </button>

          <button className="flex items-center justify-center transition hover:text-gray-300">
            <Volume2 size={20} />
          </button>

          <span className="flex items-center text-xs font-medium text-white">
            <span>15:06</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-gray-300">17:16</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-white">
          <button className="transition hover:text-gray-300">
            <Captions size={18} />
          </button>

          <button className="transition hover:text-gray-300">
            <Settings size={18} />
          </button>

          <button className="transition hover:text-gray-300">
            <PictureInPicture2 size={18} />
          </button>

          <button className="transition hover:text-gray-300">
            <Maximize size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
