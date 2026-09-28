"use client";

import { Search, Funnel } from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const search = searchWord.trim();

    if (!search) {
      router.push("/browse");
      return;
    }

    router.push(`/browse?keyword=${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative hidden w-100 lg:block">
      <input
        className="h-10 w-full rounded-xl border border-white/10 bg-[#141414] pl-9 pr-20 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
        type="text"
        placeholder="Search movies"
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)}
      />

      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={16} />
      </div>

      <button
        type="button"
        className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
      >
        <Funnel size={15} />
        <span>Filter</span>
      </button>
    </form>
  );
}
