"use client";

import { useMemo, useState } from "react";
import { Eye, EyeOff, Quote, UserRound } from "lucide-react";
import VideoControlButton from "@/components/videoControlButton";
import CommentMessage from "./commentMessage";
import Button from "@/components/button";

interface Reply {
  id: number;
  name: string;
  avatar: string;
  time: string;
  message: string;
  likes: number;
  dislikes: number;
}

interface Comment {
  id: number;
  name: string;
  avatar: string;
  time: string;
  message: string;
  likes: number;
  dislikes: number;
  replies: Reply[];
  createdAt: number;
}

const initialComments: Comment[] = [];

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [sort, setSort] = useState<"best" | "newest" | "oldest">("best");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userComment = comment.trim();

    if (!userComment) return;

    const newComment: Comment = {
      id: Date.now(),
      name: "You",
      avatar: "/avatar.jpg",
      time: "Just now",
      message: userComment,
      likes: 0,
      dislikes: 0,
      replies: [],
      createdAt: Date.now(),
    };

    setComments((currentComments) => [newComment, ...currentComments]);
    setComment("");
  };

  const sortedComments = useMemo(() => {
    const sorted = [...comments];

    if (sort === "newest") {
      return sorted.sort((a, b) => b.createdAt - a.createdAt);
    }

    if (sort === "oldest") {
      return sorted.sort((a, b) => a.createdAt - b.createdAt);
    }

    return sorted.sort((a, b) => b.likes - b.dislikes - (a.likes - a.dislikes));
  }, [comments, sort]);

  return (
    <div className="col-span-8 min-w-0 space-y-5">
      <div className="flex items-center justify-between border-b border-[#272d33] pb-4">
        <p className="text-sm font-medium text-gray-400">
          <span className="text-white">{comments.length}</span>{" "}
          {comments.length === 1 ? "comment" : "comments"}
        </p>

        <div className="flex items-center gap-1 rounded-lg bg-[#161b20] p-1">
          <button
            type="button"
            onClick={() => setSort("best")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              sort === "best"
                ? "bg-[#252c33] text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Best
          </button>

          <button
            type="button"
            onClick={() => setSort("newest")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              sort === "newest"
                ? "bg-[#252c33] text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Newest
          </button>

          <button
            type="button"
            onClick={() => setSort("oldest")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              sort === "oldest"
                ? "bg-[#252c33] text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Oldest
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#252c33] text-gray-400 md:flex">
          <UserRound size={19} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-w-0 flex-1 overflow-hidden rounded-xl border border-[#2a3138] bg-[#161b20]"
        >
          <textarea
            name="comments"
            id="user"
            rows={2}
            className="w-full resize-none bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-gray-600"
            placeholder="Write your comment..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />

          <div className="flex items-center justify-between border-t border-[#272d33] bg-[#12171c] px-2 py-2">
            <div className="flex items-center md:gap-1">
              <VideoControlButton
                label="Quote"
                icon={<Quote size={15} color="gray" />}
              />

              <VideoControlButton
                label="Spoiler"
                icon={<EyeOff size={15} color="gray" />}
              />

              <VideoControlButton
                label="Preview"
                icon={<Eye size={15} color="gray" />}
              />
            </div>

            <span className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setComment("")}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:text-white"
              >
                Cancel
              </button>

              <Button>Send</Button>
            </span>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        {sortedComments.map((comment) => (
          <CommentMessage
            key={comment.id}
            name={comment.name}
            avatar={comment.avatar}
            time={comment.time}
            message={comment.message}
            likes={comment.likes}
            dislikes={comment.dislikes}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
