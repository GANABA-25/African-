import Image from "next/image";
import { Play, Star } from "lucide-react";
import { Movie } from "@/data/movie";

interface MovieCardProps {
  data: Movie;
}

export default function MovieCard({ data }: MovieCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/5 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]">
      <div className="relative h-80 w-full cursor-pointer overflow-hidden bg-[#151515]">
        <Image
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={data.image}
          alt={data.title}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 300px"
          fill
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

        <div className="absolute right-3 top-3 flex items-center rounded-lg border border-white/10 bg-black/60 px-2 py-1 text-[9px] text-white backdrop-blur-md transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-black">
          <span>{data.type}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-13 w-13 items-center justify-center rounded-full bg-primary text-black shadow-[0_8px_30px_rgba(248,191,75,0.35)] transition-transform duration-300 group-hover:scale-110">
            <Play size={20} fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="space-y-2 p-4">
        <h1 className="truncate text-[15px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
          {data.title}
        </h1>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{data.genre}</span>
          <span className="text-gray-600">•</span>
          <span>{data.year}</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-gray-300">
            {data.quality}
          </span>
        </div>
      </div>
    </div>
  );
}
