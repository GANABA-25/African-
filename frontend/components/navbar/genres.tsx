"use client";

import { genres } from "@/data/movie";
import { useState } from "react";
import PopOver from "../popOver";

export default function Genres() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isHoveringContent, setIsHoveringContent] = useState(false);

  const handleClose = () => {
    setTimeout(() => {
      if (!isHoveringContent) {
        setIsGenreOpen(false);
      }
    }, 100);
  };

  return (
    <li onMouseEnter={() => setIsGenreOpen(true)} onMouseLeave={handleClose}>
      <PopOver
        open={isGenreOpen}
        onOpenChange={setIsGenreOpen}
        onContentMouseEnter={() => {
          setIsHoveringContent(true);
        }}
        onContentMouseLeave={() => {
          setIsHoveringContent(false);
          setIsGenreOpen(false);
        }}
        alignOffset={-375}
        sideOffset={20}
        className="z-50 rounded-xl border-0 bg-[#242424] p-0 text-white shadow-2xl"
        trigger={
          <button className="group relative cursor-pointer">
            <span className="relative inline-block">
              Genres
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </span>
          </button>
        }
      >
        <div className="grid grid-cols-4 gap-4 p-4">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              className="text-left text-xs text-gray-300 cursor-pointer hover:text-primary border-none"
            >
              {genre}
            </button>
          ))}
        </div>
      </PopOver>
    </li>
  );
}
