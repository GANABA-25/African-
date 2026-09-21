import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Movie } from "@/data/movie";

interface movieListProp {
  data: Movie;
}

export default function MovieListCard({ data }: movieListProp) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-[#1c2228] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] cursor-pointer shadow-white/5 shadow-sm">
      <div className="flex items-center gap-4 p-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            src={data.image}
            alt={data.title}
            fill
            sizes="64px"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-sm font-bold text-white transition-colors duration-300 group-hover:text-primary">
            {data.title}
          </h1>

          <div className="mt-2 flex items-center gap-2">
            <span className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-medium text-gray-300">
              {data.type}
            </span>

            <span className="text-[10px] text-gray-500">{data.year}</span>
          </div>
        </div>

        <ArrowUpRight
          size={16}
          className="shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        />
      </div>
    </div>
  );
}
