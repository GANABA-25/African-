import type { Movie } from "@/data/movie";
import InfoItem from "./infoItem";

interface MovieInformationProps {
  movie?: Movie;
}

export default function MovieInformation({ movie }: MovieInformationProps) {
  if (!movie) {
    return (
      <div className="min-h-0 flex-1 overflow-y-auto scrollbar-yellow p-6">
        <p className="text-sm text-gray-500">Movie information unavailable.</p>
      </div>
    );
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto scrollbar-yellow p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold leading-tight text-white">
            {movie.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-400">
            <span className="rounded border border-primary/30 bg-primary/10 px-2 py-1 text-primary">
              {movie.quality}
            </span>

            <span>{movie.year}</span>

            <span className="text-gray-600">•</span>

            <span>{movie.duration}</span>

            <span className="text-gray-600">•</span>

            <span>{movie.rating}</span>

            {movie.type === "Series" && (
              <>
                <span className="text-gray-600">•</span>
                <span>{movie.episodes} Episodes</span>
              </>
            )}
          </div>
        </div>

        <p className="text-sm leading-6 text-gray-400">{movie.description}</p>

        <div className="h-px bg-[#1a1e22]" />

        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">
            Movie Information
          </h2>

          <div className="space-y-3 text-sm">
            <InfoItem label="Country" value={movie.country} />
            <InfoItem label="Language" value={movie.language} />
            <InfoItem label="Genres" value={movie.genre} />
            <InfoItem label="Premiered" value={movie.year} />
            <InfoItem label="Date Aired" value={movie.date} />

            {movie.type === "Series" && (
              <InfoItem label="Episodes" value={movie.episodes?.toString()} />
            )}

            <InfoItem label="Duration" value={movie.duration} />
            <InfoItem label="Status" value={movie.status} />
            <InfoItem label="Studio" value={movie.studios} />
            <InfoItem label="Producer" value={movie.producer} />
            <InfoItem label="Director" value={movie.director} />
          </div>
        </section>

        {movie.cast && movie.cast.length > 0 && (
          <>
            <div className="h-px bg-[#1a1e22]" />

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-white">Cast</h2>

                <span className="text-xs text-gray-500">
                  {movie.cast.length} Members
                </span>
              </div>

              <div className="space-y-1">
                {movie.cast.map((actor, index) => (
                  <div
                    key={`${actor}-${index}`}
                    className="flex items-center gap-3 rounded-lg border border-[#1a1e22] bg-[#0d0f11] px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-[#121518]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1e22] text-xs font-medium text-gray-400">
                      {actor.charAt(0)}
                    </div>

                    <span className="text-sm text-gray-300">{actor}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
