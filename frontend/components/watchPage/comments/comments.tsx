"use client";

import { Eye, EyeOff, PictureInPicture2, Quote, UserRound } from "lucide-react";
import VideoControlButton from "@/components/videoControlButton";
import CommentMessage from "./commentMessage";

const Comments = () => {
  return (
    <div className="col-span-8 min-w-0 space-y-5">
      <div className="flex items-center justify-between border-b border-[#272d33] pb-4">
        <p className="text-sm font-medium text-gray-400">
          <span className="text-white">0</span> comments
        </p>

        <div className="flex items-center gap-1 rounded-lg bg-[#161b20] p-1">
          <button className="rounded-md bg-[#252c33] px-3 py-1.5 text-xs font-semibold text-white">
            Best
          </button>

          <button className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:text-white">
            Newest
          </button>

          <button className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:text-white">
            Oldest
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#252c33] text-gray-400">
          <UserRound size={19} />
        </div>

        <div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-[#2a3138] bg-[#161b20]">
          <textarea
            name="comments"
            id="user"
            rows={2}
            className="w-full resize-none bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-gray-600"
            placeholder="Write your comment..."
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
              <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:text-white">
                Cancel
              </button>

              <button className="rounded-lg bg-primary px-5 py-1 text-sm font-bold text-black transition hover:bg-primary-light">
                Send
              </button>
            </span>
          </div>
        </div>
      </div>

      <CommentMessage />
    </div>
  );
};

export default Comments;
