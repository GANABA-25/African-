import Image from "next/image";
import { Star, Play } from "lucide-react";
import { Movie } from "@/data/movie";

export default function MovieCard({
  poster,
  title,
  genre,
  year,
  rating,
}: Movie) {
  return (
    <div className="group relative h-80 overflow-hidden rounded-xl cursor-pointer shadow-sm">
      <Image
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        src={poster}
        alt={title}
        fill
      />

      <div className="absolute top-2 right-2 z-20 flex items-center gap-1 rounded-md bg-black/50 px-2 py-1">
        <Star size={10} color="#f8bf4b" fill="#f8bf4b" />
        <p className="text-xs text-white">{rating}</p>
      </div>

      <div className="absolute inset-0 z-10 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

      <div className="absolute inset-0 z-20 hidden items-center justify-center group-hover:flex">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
          <Play size={22} color="black" fill="black" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-full p-5">
        <h1 className="font-bold capitalize text-white">{title}</h1>

        <p className="text-sm text-gray-300">
          {genre} · {year}
        </p>
      </div>
    </div>
  );
}
