import NavBar from "@/components/navbar";
import Image from "next/image";
import {
  Star,
  Hash,
  MicVocal,
  Logs,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  House,
  Maximize,
  Moon,
  Play,
  CirclePlay,
  ArrowBigLeftDash,
  ArrowBigRightDash,
  Bug,
  Volume2,
  Captions,
  Settings,
  PictureInPicture2,
} from "lucide-react";

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
              <div className="relative h-50 w-full shrink-0 overflow-hidden rounded-t-2xl">
                <Image
                  className="object-cover"
                  src="https://res.cloudinary.com/dkjlpfa1q/image/upload/v1789714927/wallpaperflare.com_wallpaper_1_bru6t1.jpg"
                  alt="movie"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw"
                  fill
                />
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto scrollbar-yellow p-8">
                <div className="space-y-4">
                  <h1 className="text-lg font-semibold text-white">
                    Re:ZERO -Starting Life in Another World-
                  </h1>

                  <p className="text-sm text-gray-500">
                    Re:Zero kara Hajimeru Isekai Seikatsu;
                    Re:ゼロから始める異世界生活
                  </p>

                  <ul className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <li>Movie</li>
                    <li>10 EP</li>
                  </ul>

                  <p className="text-sm leading-6">
                    When Subaru Natsuki leaves the convenience store, the last
                    thing he expects is to be wrenched from his ordinary life
                    and transported to another world.
                  </p>

                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500">Country:</span>
                      <span className="text-gray-300">Japan</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-gray-500">Genres:</span>
                      <span className="text-gray-300">
                        Fantasy, Drama, Suspense
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-gray-500">Premiered:</span>
                      <span className="text-gray-300">Spring 2016</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-gray-500">Date aired:</span>
                      <span className="text-gray-300">Apr 4, 2016</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-gray-500">Episodes:</span>
                      <span className="text-gray-300">25</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-gray-500">Duration:</span>
                      <span className="text-gray-300">24 min</span>
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
                      <span className="text-gray-300">Kadokawa</span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-gray-500">Links:</span>
                      <span className="text-gray-300">Official Website</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-center justify-center border-t border-white/5 bg-[#181d22] px-6 py-5">
                <h1 className="text-sm font-semibold text-white">
                  How'd you rate this anime?
                </h1>

                <p className="mt-1 text-xs text-gray-500">9.73 by 22 reviews</p>

                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={25}
                      color="#f8bf4b"
                      fill="#f8bf4b"
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="col-span-6 flex h-205 min-h-0 flex-col overflow-hidden rounded-2xl bg-[#11161b]/95">
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

              <div className="group relative min-h-0 flex-1 overflow-hidden bg-black">
                <video
                  className="h-full w-full object-cover"
                  src="/video/battleThoughTheHeavens.mp4"
                  playsInline
                />

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/60 to-transparent px-4 pb-3 pt-12 opacity-100">
                  <div className="mb-3 h-1 w-full cursor-pointer rounded-full bg-white/30">
                    <div className="relative h-full w-[72%] rounded-full bg-cyan-400">
                      <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white">
                      <button className="flex items-center justify-center transition hover:text-gray-300">
                        <Play size={20} fill="currentColor" />
                      </button>

                      <button className="flex items-center justify-center transition hover:text-gray-300">
                        <Volume2 size={20} />
                      </button>

                      <span className="flex items-center text-xs font-medium text-white">
                        <span>15:06</span>
                        <span className="mx-1 text-gray-400">/</span>
                        <span className="text-gray-300">17:16</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-white">
                      <button className="transition hover:text-gray-300">
                        <Captions size={18} />
                      </button>

                      <button className="transition hover:text-gray-300">
                        <Settings size={18} />
                      </button>

                      <button className="transition hover:text-gray-300">
                        <PictureInPicture2 size={18} />
                      </button>

                      <button className="transition hover:text-gray-300">
                        <Maximize size={19} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-between border-t border-white/5 bg-white/5 px-4 py-3">
                <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
                  <Maximize size={15} />
                  <span className="text-sm">Expand</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
                  <Moon size={15} />
                  <span className="text-sm">Focus</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
                  <span className="flex items-center">
                    <Play size={15} color="#f8bf4b" fill="#f8bf4b" />
                    <Play size={15} color="#f8bf4b" fill="#f8bf4b" />
                  </span>
                  <span className="text-sm">AutoNext</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
                  <CirclePlay size={15} color="#f8bf4b" />
                  <span className="text-sm">AutoPlay</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
                  <ArrowBigLeftDash size={15} />
                  <span className="text-sm">Prev</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
                  <ArrowBigRightDash size={15} />
                  <span className="text-sm">Next</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white">
                  <Bug size={15} />
                  <span className="text-sm">Report</span>
                </button>
              </div>

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
                <div className="flex shrink-0 items-center justify-between">
                  <h1 className="text-sm font-semibold text-white">Episodes</h1>

                  <div className="flex items-center gap-1.5">
                    <div className="relative">
                      <input
                        className="h-8 w-20 rounded-md border border-white/10 bg-[#20272e] pl-7 pr-2 text-xs text-white placeholder:text-gray-500 focus:outline-none"
                        placeholder="Find"
                        type="text"
                      />

                      <Hash
                        size={13}
                        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>

                    <div className="flex h-8 items-center gap-1.5 rounded-md bg-[#20272e] px-2.5">
                      <span className="text-xs font-medium text-primary">
                        CC
                      </span>
                      <MicVocal size={13} className="text-green-500" />
                    </div>

                    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#20272e] transition-colors hover:bg-[#2a323a]">
                      <Logs size={14} className="text-white" />
                    </button>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-between rounded-md bg-[#20272e] p-1 px-3 text-gray-500">
                  <ArrowLeft size={15} />

                  <span className="flex items-center gap-2">
                    <p className="text-sm font-bold text-gray-300">001 - 025</p>
                    <ChevronDown size={18} />
                  </span>

                  <ArrowRight size={15} />
                </div>

                <div className="scrollbar-yellow min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
                  {Array.from({ length: 25 }, (_, index) => (
                    <div
                      key={index}
                      className="flex shrink-0 items-center gap-2 rounded-md border border-[#1a1e22] px-2 py-1 text-sm transition-colors hover:bg-primary cursor-pointer"
                    >
                      <span className="w-5 text-gray-500">{index + 1}</span>
                      <p>Episode {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
