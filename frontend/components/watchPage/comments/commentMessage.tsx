"use client";

import Image from "next/image";
import { useState } from "react";
import { Reply, ThumbsDown, ThumbsUp } from "lucide-react";
import ReplyForm from "./replyForm";
import ReplyMessage from "./replyMessage";

interface Reply {
  id: number;
  name: string;
  avatar: string;
  time: string;
  message: string;
  likes: number;
  dislikes: number;
}

interface CommentMessageProps {
  id?: string;
  name?: string;
  avatar?: string;
  time?: string;
  message?: string;
  likes?: number;
  dislikes?: number;
  replies?: Reply[];
}

export default function CommentMessage({
  id = "comment",
  name = "Sai Charan",
  avatar = "/avatar.jpg",
  time = "3 weeks ago",
  message = "",
  likes = 0,
  dislikes = 0,
  replies = [],
}: CommentMessageProps) {
  const [showReply, setShowReply] = useState(false);
  const [commentReplies, setCommentReplies] = useState<Reply[]>(replies);

  const handleAddReply = (message: string) => {
    const newReply: Reply = {
      id: Date.now(),
      name: "You",
      avatar: "/avatar.jpg",
      time: "Just now",
      message,
      likes: 0,
      dislikes: 0,
    };

    setCommentReplies((currentReplies) => [...currentReplies, newReply]);

    setShowReply(false);
  };

  return (
    <div className="flex gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#252c33]">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>

      <div className="min-w-0 flex-1 space-y-4">
        <div>
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
        </div>

        {showReply && <ReplyForm onSubmitReply={handleAddReply} />}

        {commentReplies.length > 0 && (
          <div className="mt-5 space-y-5 border-l border-[#272d33] pl-5">
            {commentReplies.map((reply) => (
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
