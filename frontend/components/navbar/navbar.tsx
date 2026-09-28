"use client";
import Link from "next/link";
import { Plus, User, Search, Menu } from "lucide-react";
import Genres from "./genres";
import SearchInput from "./serchInput";

export type SearchType = {
  searchWord: string;
};

export default function NavBar() {
  const navLinks = ["New Releases", "Updates", "Ongoing", "Recent"];

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
        <SearchInput />

        <ul className="hidden gap-4 uppercase lg:flex items-center text-sm">
          <Genres />

          {navLinks.map((link) => (
            <li key={link} className="group relative cursor-pointer">
              <span className="relative inline-block">
                {link}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </span>
            </li>
          ))}
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
