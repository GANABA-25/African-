import {
  Maximize,
  Moon,
  Play,
  CirclePlay,
  ArrowBigLeftDash,
  ArrowBigRightDash,
  Bug,
} from "lucide-react";

export default function WatchAction() {
  return (
    <div className="flex shrink-0 items-center justify-between border-t border-white/5 bg-white/5 px-4 py-3">
      <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
        <Maximize size={15} />
        <span className="text-sm">Expand</span>
      </button>

      <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
        <Moon size={15} />
        <span className="text-sm">Focus</span>
      </button>

      <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
        <span className="flex items-center">
          <Play size={15} color="#f8bf4b" fill="#f8bf4b" />
          <Play size={15} color="#f8bf4b" fill="#f8bf4b" />
        </span>
        <span className="text-sm">AutoNext</span>
      </button>

      <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
        <CirclePlay size={15} color="#f8bf4b" />
        <span className="text-sm">AutoPlay</span>
      </button>

      <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
        <ArrowBigLeftDash size={15} />
        <span className="text-sm">Prev</span>
      </button>

      <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
        <ArrowBigRightDash size={15} />
        <span className="text-sm">Next</span>
      </button>

      <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
        <Bug size={15} />
        <span className="text-sm">Report</span>
      </button>
    </div>
  );
}
