import NavBar from "@/components/navbar";
import WatchBreadcrumb from "@/components/watchPage/watchBreadcrumb";
import VideoPlayer from "@/components/watchPage/videoPlayer/videoPlayer";
import WatchAction from "@/components/watchPage/videoPlayer/watchActions";
import MoviePoster from "@/components/watchPage/movieSideBar/moviePoster";
import MovieInformation from "@/components/watchPage/movieSideBar/movieInformation";
import MovieRating from "@/components/watchPage/movieSideBar/movieRating";
import EpisodeHeader from "@/components/watchPage/episodeList/episodeHeader";
import EpisodePagination from "@/components/watchPage/episodeList/episodePagination";
import EpisodeItem from "@/components/watchPage/episodeList/episodeItem";
import Comments from "@/components/watchPage/comments/comments";
import AsideCard from "@/components/asideCard";
import { trendingMovies } from "@/data/movie";

export default function Watch() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-background lg:h-250">
        <div className="absolute left-0 right-0 top-0 z-50 px-4 lg:px-0">
          <NavBar />
        </div>

        <div className="relative min-h-screen w-full overflow-hidden lg:h-250">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-lg"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dkjlpfa1q/image/upload/v1789714927/wallpaperflare.com_wallpaper_1_bru6t1.jpg")`,
            }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-20 m-auto w-[95%] px-4 pb-8 pt-30 lg:h-full lg:px-0">
            <div className="flex min-h-0 flex-col gap-4 lg:grid lg:h-full lg:grid-cols-10">
              <section className="order-3 col-span-2 flex min-h-0 flex-col overflow-hidden rounded-2xl bg-[#11161b]/95 md:order-2 lg:order-1 lg:h-full">
                <MoviePoster />

                <MovieInformation />

                <MovieRating />
              </section>

              <section className="order-1 col-span-6 flex min-h-0 flex-col overflow-hidden rounded-2xl bg-[#11161b]/95 md:order-1 lg:order-2 lg:h-full">
                <WatchBreadcrumb />

                <VideoPlayer />

                <WatchAction />

                <div className="shrink-0 space-y-1 border-t border-white/5 px-4 py-3">
                  <h1 className="text-sm font-medium text-white">
                    You are watching{" "}
                    <span className="text-sm text-gray-500">
                      Episode 25 — Episode 25
                    </span>
                  </h1>

                  <p className="text-xs text-gray-500">
                    If the current server is not working, please try switching
                    to other servers.
                  </p>
                </div>
              </section>

              <section className="order-2 col-span-2 flex min-h-105 flex-col overflow-hidden rounded-2xl bg-[#11161b]/95 p-4 md:order-3 lg:order-3 lg:h-full lg:min-h-0">
                <div className="flex min-h-0 flex-1 flex-col gap-4">
                  <EpisodeHeader />

                  <EpisodePagination />

                  <div className="scrollbar-yellow min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
                    <EpisodeItem />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 lg:px-0 bg-[#0c1116]">
        <div className="w-[95%] m-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="md:text-2xl font-black text-white">Comments</h1>
              <p className="mt-1 text-sm text-gray-500">
                Join the conversation and share your thoughts.
              </p>
            </div>
          </div>

          <div className="space-y-4 lg:grid min-h-0 grid-cols-10 gap-6">
            <Comments />

            <aside className="col-span-2 min-w-0">
              <div className="sticky top-24 overflow-hidden rounded-2xl border border-[#272d33] bg-[#161b20] p-2">
                <div className="border-b border-[#272d33] px-4 py-4">
                  <h2 className="text-base font-bold text-white">
                    Recommended
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    You may also like
                  </p>
                </div>

                {trendingMovies.map((movie, index) => (
                  <AsideCard key={movie.id} data={movie} index={index + 1} />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
