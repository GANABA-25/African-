import Image from "next/image";

export default function MoviePoster() {
  return (
    <div className="relative h-50 w-full shrink-0 overflow-hidden rounded-t-2xl">
      <Image
        className="object-cover"
        src="https://res.cloudinary.com/dkjlpfa1q/image/upload/v1789714927/wallpaperflare.com_wallpaper_1_bru6t1.jpg"
        alt="movie"
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw"
        fill
      />
    </div>
  );
}
