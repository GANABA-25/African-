import HeroSlider from "@/components/heroSlider";
import { Trophy } from "lucide-react";
import AsideCard from "@/components/asideCard";
import { trendingMovies } from "@/data/movie";
import MovieCard from "@/components/movieCard";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSlider />

        <section className="w-full">
          <div className="mx-auto flex w-full max-w-[110rem] gap-8 px-6">
            <main className="min-w-0 space-y-4 flex-1 rounded-2xl bg-[#11161b] shadow-sm p-4">
              <h1 className="text-xl font-bold  uppercase">
                Continue Watching
              </h1>

              <div className="grid grid-cols-6">
                <MovieCard />
              </div>
            </main>

            <aside className="w-100 shrink-0 rounded-2xl bg-[#11161b] shadow-sm p-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                  <Trophy size={12} />
                </div>

                <h1 className="font-bol">Top Trending</h1>
              </div>

              {trendingMovies.map((movie) => (
                <AsideCard
                  key={movie.rank}
                  rank={movie.rank}
                  image={movie.image}
                  title={movie.title}
                />
              ))}
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
