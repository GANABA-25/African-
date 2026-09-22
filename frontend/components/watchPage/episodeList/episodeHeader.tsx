import { Hash, MicVocal, Logs } from "lucide-react";
import EpisodeFilters from "./episodeFilters";

export default function EpisodeHeader() {
  return (
    <div className="flex shrink-0 items-center justify-between">
      <h1 className="text-sm font-semibold text-white">Episodes</h1>

      <div className="flex items-center gap-1.5">
        <EpisodeFilters />

        <div className="flex h-8 items-center gap-1.5 rounded-md bg-[#20272e] px-2.5">
          <span className="text-xs font-medium text-primary">CC</span>
          <MicVocal size={13} className="text-green-500" />
        </div>

        <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#20272e] transition-colors hover:bg-[#2a323a]">
          <Logs size={14} className="text-white" />
        </button>
      </div>
    </div>
  );
}
