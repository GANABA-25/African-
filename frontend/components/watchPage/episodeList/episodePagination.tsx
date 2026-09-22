import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

export default function EpisodePagination() {
  return (
    <div className="flex shrink-0 items-center justify-between rounded-md bg-[#20272e] p-1 px-3 text-gray-500">
      <ArrowLeft size={15} />

      <span className="flex items-center gap-2">
        <p className="text-sm font-bold text-gray-300">001 - 025</p>
        <ChevronDown size={18} />
      </span>

      <ArrowRight size={15} />
    </div>
  );
}
