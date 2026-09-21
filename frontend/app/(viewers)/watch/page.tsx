import NavBar from "@/components/navbar";
import Image from "next/image";
import { Star } from "lucide-react";

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

        <div className="relative z-20 mx-auto mt-30 h-[calc(100%-120px)] w-full max-w-[110rem] px-4">
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

            <section className="col-span-6 h-205 min-h-0 overflow-hidden rounded-2xl bg-[#11161b]/95 p-4">
              Center
            </section>

            <section className="col-span-2 h-205 min-h-0 overflow-hidden rounded-2xl bg-[#11161b]/95 p-4">
              Right
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
