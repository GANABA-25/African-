"use client";

import HeroSlider from "@/components/heroSlider";
import { Trophy } from "lucide-react";
import AsideCard from "@/components/asideCard";
import { trendingMovies, movies } from "@/data/movie";
import MovieCard from "@/components/movieCard";
import { useRef } from "react";
import ContinueWatching, {
  ContinueWatchingRef,
} from "@/components/continueWatching";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  const continueWatchingRef = useRef<ContinueWatchingRef>(null);
  return (
    <>
      <main>
        <HeroSlider />
        <section className="w-full">
          <div className="mx-auto flex w-full max-w-[110rem] gap-8 px-6 lg:px-0">
            <main className="min-w-0 space-y-8 flex-1 rounded-2xl bg-[#11161b] shadow-sm p-4">
              <section className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold  uppercase">
                    Continue Watching
                  </h1>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => continueWatchingRef.current?.previous()}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-colors hover:bg-primary hover:text-black cursor-pointer"
                    >
                      <ChevronLeft size={15} color="black" />
                    </button>

                    <button
                      onClick={() => continueWatchingRef.current?.next()}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-colors hover:bg-primary hover:text-black cursor-pointer"
                    >
                      <ChevronRight size={15} color="black" />
                    </button>
                  </div>
                </div>

                <ContinueWatching ref={continueWatchingRef} />
              </section>

              <section className="space-y-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold  uppercase">
                    Latest Updates
                  </h1>

                  <div className="flex items-center gap-4">
                    <ul className="flex items-center gap-4 text-sm">
                      <li className="text-primary font-bold">All</li>
                      <li>Ghana</li>
                      <li>Nigeria</li>
                    </ul>

                    <div className="flex items-center gap-2">
                      <button className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-colors hover:bg-primary hover:text-black cursor-pointer">
                        <ChevronLeft size={15} color="black" />
                      </button>

                      <button className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-colors hover:bg-primary hover:text-black cursor-pointer">
                        <ChevronRight size={15} color="black" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {movies.map((movie) => (
                    <MovieCard key={movie.id} data={movie} />
                  ))}
                </div>
              </section>
            </main>

            <aside className="w-100 shrink-0 rounded-2xl bg-[#11161b] shadow-sm p-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                  <Trophy size={12} />
                </div>

                <h1 className="font-bol">Top Trending</h1>
              </div>

              {trendingMovies.map((movie, index) => (
                <AsideCard key={movie.id} data={movie} index={index + 1} />
              ))}
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
