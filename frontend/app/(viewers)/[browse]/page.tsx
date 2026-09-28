import { movies } from "@/data/movie";
import NavBar from "@/components/navbar";
import MovieCard from "@/components/movieCard";

interface BrowsePageProps {
  searchParams: Promise<{
    keyword?: string;
  }>;
}

export default async function Browse({ searchParams }: BrowsePageProps) {
  const { keyword } = await searchParams;

  const searchTerm = keyword?.trim().toLowerCase() || "";

  const filteredMovies = movies.filter((movie) => {
    if (!searchTerm) return true;

    return (
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm) ||
      movie.country.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4">
      <div className="absolute left-0 right-0 top-0 z-50 px-4">
        <NavBar />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-[#0c1116] to-[#0c1116]" />

      <main className="relative lg:max-w-[80%] m-auto pt-32 lg:pt-52">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">
            {searchTerm ? `Search results for "${keyword}"` : "Browse Movies"}
          </h1>

          {searchTerm && (
            <p className="mt-2 text-sm text-gray-400">
              {filteredMovies.length}{" "}
              {filteredMovies.length === 1 ? "movie" : "movies"} found
            </p>
          )}
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-75 items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white">
                No movies found
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Try searching for another movie.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
