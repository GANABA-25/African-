import { Star } from "lucide-react";

export default function MovieRating() {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center border-t border-white/5 bg-[#181d22] px-6 py-5">
      <h1 className="text-sm font-semibold text-white">
        How'd you rate this anime?
      </h1>

      <p className="mt-1 text-xs text-gray-500">9.73 by 22 reviews</p>

      <div className="mt-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={25} color="#f8bf4b" fill="#f8bf4b" />
        ))}
      </div>
    </div>
  );
}
