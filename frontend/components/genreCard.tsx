import Image from "next/image";
import { Play } from "lucide-react";
import { Category } from "@/data/movie";

export default function GenreCard({ name, count, image }: Category) {
  return (
    <div className="group relative h-50 overflow-hidden rounded-xl cursor-pointer">
      <Image
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        src={image}
        alt={name}
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw,"
        fill
      />

      <div className="absolute inset-0 z-10 bg-black/30 transition-colors duration-300 group-hover:bg-primary/10" />

      <div className="absolute bottom-0 left-0 z-10 w-full p-5">
        <h1 className="text-xl font-bold capitalize text-white">{name}</h1>

        <p className="text-sm text-gray-300">{count} movies</p>
      </div>
    </div>
  );
}
