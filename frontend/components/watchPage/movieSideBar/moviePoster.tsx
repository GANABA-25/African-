import Image from "next/image";

interface MoviePosterProps {
  image?: string;
}

export default function MoviePoster({ image }: MoviePosterProps) {
  console.log("image uri", image);
  return (
    <div className="relative h-50 w-full shrink-0 overflow-hidden rounded-t-2xl">
      <Image
        className="object-cover"
        src={image || "/placeholder.jpg"}
        alt="movie"
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw"
        fill
      />
    </div>
  );
}
