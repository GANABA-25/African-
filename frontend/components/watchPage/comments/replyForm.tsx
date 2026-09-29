"use client";

import { FormEvent, useState } from "react";
import { Eye, EyeOff, Quote } from "lucide-react";
import VideoControlButton from "@/components/videoControlButton";
import Button from "@/components/button";

interface ReplyFormProps {
  onSubmitReply: (message: string) => void;
}

export default function ReplyForm({ onSubmitReply }: ReplyFormProps) {
  const [reply, setReply] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = reply.trim();

    if (!message) return;

    onSubmitReply(message);
    setReply("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-xl border border-[#2a3138] bg-[#161b20]"
    >
      <textarea
        rows={2}
        value={reply}
        onChange={(event) => setReply(event.target.value)}
        className="w-full resize-none bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-gray-600"
        placeholder="write a reply.."
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

        <div className="flex items-center gap-2">
          <button
            onClick={() => setReply("")}
            type="button"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:text-white"
          >
            Cancel
          </button>

          <Button>Send</Button>
        </div>
      </div>
    </form>
  );
}
