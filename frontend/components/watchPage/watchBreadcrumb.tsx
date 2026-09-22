import { House } from "lucide-react";

export default function WatchBreadcrumb() {
  return (
    <div className="flex shrink-0 min-w-0 items-center gap-2 bg-white/5 px-4 py-3 text-xs">
      <div className="flex shrink-0 items-center gap-1.5 text-gray-300 transition-colors hover:text-white">
        <House size={13} />
        <span>Home</span>
      </div>

      <span className="text-gray-600">/</span>

      <span className="shrink-0 text-gray-400">TV</span>

      <span className="text-gray-600">/</span>

      <h1 className="min-w-0 truncate text-gray-500">
        Re:ZERO -Starting Life in Another World-
      </h1>
    </div>
  );
}
