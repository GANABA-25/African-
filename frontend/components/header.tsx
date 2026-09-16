import Button from "./button";
import { Play, Plus, Search, Compass, Check } from "lucide-react";
import SimpleSlider from "./slider";

export default function Header() {
  return (
    <header className="relative h-dvh min-h-175 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SimpleSlider />
      </div>

      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/70 via-black/70 to-background" />

      <div className="relative z-20 max-w-7xl mx-auto space-y-32">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-black">African</h1>

            <Plus size={15} color="#f8bf4b" strokeWidth={5} />
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>Home</li>
              <li>Movies</li>
              <li>Genres</li>
              <li>About</li>
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <Search size={18} />

            <button className="text-sm font-medium">Sign in</button>

            <Button>Get Started</Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              African Cinema, Reimagined
            </span>
          </div>

          <h1 className="text-7xl font-black">
            Stories from <br /> Africa. <br />
            <span className="text-primary">
              Made for the <br /> world.
            </span>
          </h1>
          <p className="text-gray-500">
            Discover unforgettable African movies, emerging filmmakers, and
            <br />
            stories that deserve to be seen.
          </p>

          <div className="flex items-center gap-4">
            <Button>
              <Play size={15} fill="black" /> Start Watching
            </Button>

            <button className="border border-gray-400 p-3 px-6 rounded-xl flex items-center gap-2 font-bold capitalize">
              <Compass size={15} />
              Explore movies
            </button>
          </div>

          <ul className="flex items-center gap-4 text-sm mt-4 text-gray-500">
            <li className="flex items-center gap-2">
              <div className="bg-primary/20 rounded-full p-1 text-primary">
                <Check size={10} />
              </div>
              African Movies
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-primary/20 rounded-full p-1 text-primary">
                <Check size={10} />
              </div>
              Premium Streaming
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-primary/20 rounded-full p-1 text-primary">
                <Check size={10} />
              </div>
              New Releases
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
