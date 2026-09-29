"use client";

import Image from "next/image";
import { Reply, ThumbsDown, ThumbsUp } from "lucide-react";

interface ReplyMessageProps {
  id: number;
  name: string;
  avatar: string;
  time: string;
  message: string;
  likes: number;
  dislikes: number;
}

export default function ReplyMessage({
  id,
  name,
  avatar,
  time,
  message,
  likes,
  dislikes,
}: ReplyMessageProps) {
  return (
    <div className="flex gap-3">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#252c33]">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h4 className="text-sm font-semibold text-white">{name}</h4>
          <span className="text-xs text-gray-500">{time}</span>
        </div>

        <p className="text-sm leading-6 text-gray-300">{message}</p>

        <div className="mt-1 flex items-center gap-1">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#1c2228] hover:text-white"
          >
            <ThumbsUp size={14} />
            <span>{likes}</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#1c2228] hover:text-white"
          >
            <ThumbsDown size={14} />
            <span>{dislikes}</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#1c2228] hover:text-white"
          >
            <Reply size={14} />
            <span>Reply</span>
          </button>
        </div>
      </div>
    </div>
  );
}
