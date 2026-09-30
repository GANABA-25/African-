"use client";

import Image from "next/image";
import { useState } from "react";
import { Reply, ThumbsDown, ThumbsUp } from "lucide-react";
import ReplyForm from "./replyForm";

interface ReplyItem {
  id: number;
  name: string;
  avatar: string;
  time: string;
  message: string;
  likes: number;
  dislikes: number;
}

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
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState<ReplyItem[]>([]);

  const handleAddReply = (message: string) => {
    const newReply: ReplyItem = {
      id: Date.now(),
      name: "You",
      avatar: "/avatar.jpg",
      time: "Just now",
      message,
      likes: 0,
      dislikes: 0,
    };

    setReplies((currentReplies) => [...currentReplies, newReply]);
    setShowReply(false);
  };

  return (
    <div className="flex gap-3">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#252c33]">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="text-sm font-semibold text-white">{name}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>

        <p className="text-sm leading-6 text-gray-300">{message}</p>

        <div className="mt-1 flex items-center gap-1">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#1c2228] hover:text-white"
          >
            <ThumbsUp size={15} />
            <span>{likes}</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-[#1c2228] hover:text-white"
          >
            <ThumbsDown size={15} />
            <span>{dislikes}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowReply((current) => !current)}
            className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-400 transition hover:bg-[#1c2228] hover:text-white"
          >
            <Reply size={15} />
            <span>Reply</span>
          </button>
        </div>

        {showReply && (
          <div className="mt-4">
            <ReplyForm onSubmitReply={handleAddReply} />
          </div>
        )}

        {replies.length > 0 && (
          <div className="mt-5 space-y-5 border-l border-[#272d33] pl-5">
            {replies.map((reply) => (
              <ReplyMessage
                key={reply.id}
                id={reply.id}
                name={reply.name}
                avatar={reply.avatar}
                time={reply.time}
                message={reply.message}
                likes={reply.likes}
                dislikes={reply.dislikes}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
