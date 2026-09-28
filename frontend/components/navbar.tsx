"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, User, Search, Funnel, Menu } from "lucide-react";

export type SearchType = {
  searchWord: string;
};

export default function NavBar() {
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
    <div className="w-[95%] mx-auto flex justify-between items-center bg-black/60 p-2 px-4 m-4 rounded-xl">
      <Link href={"/home"} className="flex items-center gap-2">
        <Menu size={20} className="lg:hidden" />
        <div className="flex items-center gap-1">
          <h1 className=" md:text-2xl font-black">African</h1>

          <Plus size={15} color="#f8bf4b" strokeWidth={7} />
        </div>
      </Link>

      <div className="flex justify-around items-center gap-4">
        <Search size={15} strokeWidth={5} className="lg:hidden" />
        <form
          onSubmit={handleSubmit}
          className="relative hidden w-100 lg:block"
        >
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

        <ul className="hidden lg:flex gap-4 uppercase">
          <li>Genres</li>
          <li>Types</li>
          <li>New Releases</li>
          <li>Updates</li>
          <li>Ongoing</li>
          <li>Recent</li>
        </ul>

        <div className="hidden lg:flex items-center gap-4 bg-black/70 p-1 rounded-xl">
          <div className="w-10 h-7 text-sm flex justify-center items-center bg-primary rounded-xl">
            EN
          </div>
          <div className="w-10 h-7 text-sm flex justify-center items-center rounded-xl">
            JP
          </div>
        </div>

        <div className="bg-white rounded-full p-1">
          <User size={15} color="#f8bf4b" />
        </div>
      </div>
    </div>
  );
}
