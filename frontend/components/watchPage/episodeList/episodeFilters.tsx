import { Hash } from "lucide-react";

export default function EpisodeFilters() {
  return (
    <div className="relative">
      <input
        className="h-8 w-20 rounded-md border border-white/10 bg-[#20272e] pl-7 pr-2 text-xs text-white placeholder:text-gray-500 focus:outline-none"
        placeholder="Find"
        type="text"
      />

      <Hash
        size={13}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
