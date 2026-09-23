import { Plus, User, Search, Funnel, Menu } from "lucide-react";
import Input from "./input";

export default function NavBar() {
  return (
    <div className="max-w-[110rem] mx-auto flex justify-between items-center bg-black/60 p-2 px-4 m-4 rounded-xl">
      <div className="flex items-center gap-2">
        <Menu size={20} className="lg:hidden" />
        <div className="flex items-center gap-1">
          <h1 className=" md:text-2xl font-black">African</h1>

          <Plus size={15} color="#f8bf4b" strokeWidth={7} />
        </div>
      </div>

      <div className="flex justify-around items-center gap-4">
        <Search size={15} strokeWidth={5} className="lg:hidden" />
        <div className="relative hidden lg:block">
          <input
            className="w-100 bg-[#141414] rounded-xl border border-white/10 p-1 pl-8 md:pl-8 lg:pl-9 focus:outline-none focus:ring-2 focus:ring-opacity-30"
            type="text"
            placeholder="Search movies"
          />

          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={15} />
          </div>

          <div className="absolute flex items-center gap-1 right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Funnel size={16} fill="white" />
            <p>Filter</p>
          </div>
        </div>

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
