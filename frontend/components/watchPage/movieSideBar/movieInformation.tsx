import type { Movie } from "@/data/movie";

interface MovieInformationProps {
  movie?: Movie;
}

export default function MovieInformation({ movie }: MovieInformationProps) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto scrollbar-yellow p-8">
      <div className="space-y-4">
        <h1 className="text-lg font-semibold text-white">{movie?.title}</h1>

        <ul className="flex items-center justify-center gap-4 text-sm text-gray-400">
          <li>Movie</li>
          <li>10 EP</li>
        </ul>

        <p className="text-sm leading-6">{movie?.description}</p>

        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-gray-500">Country:</span>
            <span className="text-gray-300">{movie?.country}</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Genres:</span>
            <span className="text-gray-300">{movie?.genre}</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Premiered:</span>
            <span className="text-gray-300">{movie?.year}</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Date aired:</span>
            <span className="text-gray-300">Apr 4, 2016</span>
          </li>

          {movie?.type === "Series" && (
            <li className="flex items-start gap-2">
              <span className="text-gray-500">Episodes:</span>
              <span className="text-gray-300">{movie.episodes}</span>
            </li>
          )}

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Duration:</span>
            <span className="text-gray-300">{movie?.duration}</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Status:</span>
            <span className="text-gray-300">Finished Airing</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Studios:</span>
            <span className="text-gray-300">White Fox</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Producers:</span>
            <span className="text-gray-300">{movie?.producer}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
