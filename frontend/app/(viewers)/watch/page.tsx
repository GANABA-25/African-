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

export default function Watch() {
  return (
    <div className="relative h-240 w-full overflow-hidden">
      <div className="absolute left-0 right-0 top-0 z-50">
        <NavBar />
      </div>

      <div className="relative h-240 w-full overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-lg"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dkjlpfa1q/image/upload/v1789714927/wallpaperflare.com_wallpaper_1_bru6t1.jpg")`,
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-20 mx-auto mt-30 h-[calc(100%-120px)] w-full max-w-[110rem]">
          <div className="grid h-full min-h-0 grid-cols-10 gap-4">
            <section className="col-span-2 flex h-205 min-h-0 flex-col overflow-hidden rounded-2xl bg-[#11161b]/95">
              <MoviePoster />

              <MovieInformation />

              <MovieRating />
            </section>

            <section className="col-span-6 flex h-205 min-h-0 flex-col overflow-hidden rounded-2xl bg-[#11161b]/95">
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
                  If the current server is not working, please try switching to
                  other servers.
                </p>
              </div>
            </section>

            <section className="col-span-2 flex h-205 min-h-0 flex-col overflow-hidden rounded-2xl bg-[#11161b]/95 p-4">
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
    </div>
  );
}
