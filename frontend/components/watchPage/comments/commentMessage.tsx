import Image from "next/image";
import { ThumbsUp, ThumbsDown, Reply } from "lucide-react";

interface CommentMessageProps {
  name?: string;
  avatar?: string;
  time?: string;
  message?: string;
  likes?: number;
  dislikes?: number;
  replies?: number;
}

export default function CommentMessage({
  name = "Sai Charan",
  avatar = "/avatar.jpg",
  time = "3 weeks ago",
  message = "One of my favourites",
  likes = 0,
  dislikes = 0,
  replies = 0,
}: CommentMessageProps) {
  return (
    <div className="flex gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#252c33]">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex-col items-center gap-2">
          <h3 className="text-sm font-semibold text-white">{name}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>

        <p className="text-sm leading-6 text-gray-300">{message}</p>

        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#1c2228] hover:text-white">
            <ThumbsUp size={15} />
            <span>{likes}</span>
          </button>

          <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#1c2228] hover:text-white">
            <ThumbsDown size={15} />
            <span>{dislikes}</span>
          </button>

          <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-400 transition hover:bg-[#1c2228] hover:text-white">
            <Reply size={15} />
            <span>Reply</span>
          </button>
        </div>
      </div>
    </div>
  );
}
