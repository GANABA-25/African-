import Image from "next/image";
import { Movie } from "@/data/movie";

interface MovieCardProps {
  data: Movie;
  index: number;
}

export default function AsideCard({ data, index }: MovieCardProps) {
  return (
    <div className="group relative flex h-25 w-full overflow-hidden rounded-xl border border-white/10 shadow-white/5 shadow-sm cursor-pointer">
      <div className="absolute left-7  -top-4 z-20 h-28 w-1 rotate-40 bg-primary/10 group-hover:bg-primary/50" />
      <div className="absolute left-11 -top-4 z-20 h-25 w-1 rotate-40 bg-primary/10 group-hover:bg-primary/50" />
      <div className="absolute left-15 -top-4 z-20 h-22 w-1 rotate-40 bg-primary/10 group-hover:bg-primary/50" />

      <div className="absolute inset-0 z-10 bg-linear-to-r from-[#15171b] via-[#15171b]/90 to-transparent" />

      <div className="relative z-20 flex w-full items-center gap-4">
        <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-500/70 text-sm font-semibold text-white group-hover:border-0 group-hover:bg-primary">
          {index}
        </div>

        <div className="min-w-0 flex-1 z-30">
          <h1 className="truncate text-base font-bold text-white">
            {data.title}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold">
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <span>{data.type}</span>
            </div>

            {data.type === "Series" && (
              <span className="rounded-md bg-green-500/15 px-2 py-1 text-green-400">
                {data.episodes} EP
              </span>
            )}
          </div>
        </div>

        <div className="relative h-full w-32 shrink-0 overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#15171b] via-[#15171b]/80 to-transparent" />
        </div>
      </div>
    </div>
  );
}
