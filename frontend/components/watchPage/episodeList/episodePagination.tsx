import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

interface EpisodeType {
  episodes?: number;
}

export default function EpisodePagination({ episodes = 0 }: EpisodeType) {
  const pageSize = 25;
  const totalPages = Math.ceil(episodes / pageSize);

  const currentPage = 1;

  const startEpisode = episodes > 0 ? (currentPage - 1) * pageSize + 1 : 0;

  const endEpisode = Math.min(currentPage * pageSize, episodes);

  const formatEpisode = (episode: number) =>
    episode.toString().padStart(3, "0");

  return (
    <div className="flex shrink-0 items-center justify-between rounded-md bg-[#20272e] p-1 px-3 text-gray-500">
      <button
        type="button"
        disabled={currentPage === 1}
        className="transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ArrowLeft size={15} />
      </button>

      <button type="button" className="flex items-center gap-2">
        <p className="text-sm font-bold text-gray-300">
          {formatEpisode(startEpisode)} - {formatEpisode(endEpisode)}
        </p>

        <ChevronDown size={18} />
      </button>

      <button
        type="button"
        disabled={currentPage === totalPages || episodes === 0}
        className="transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
