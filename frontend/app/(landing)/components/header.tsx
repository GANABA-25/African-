"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../../components/button";
import { Play, Plus, Compass, Check } from "lucide-react";
import SimpleSlider from "./slider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative h-dvh min-h-175 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SimpleSlider />
      </div>

      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/70 via-black/70 to-background" />

      <div className="relative z-20 px-4 lg:px-0">
        <div
          className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-colors duration-300 ${
            isScrolled ? "bg-black/90" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-black">African</h1>

              <Plus size={15} color="#f8bf4b" strokeWidth={7} />
            </div>

            <nav className="hidden mg:block">
              <ul className="flex items-center gap-6 text-sm font-medium">
                <li className="group relative cursor-pointer transition-colors duration-300 hover:text-primary">
                  Home
                  <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
                </li>

                <li className="group relative cursor-pointer transition-colors duration-300 hover:text-primary">
                  Movies
                  <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
                </li>

                <li className="group relative cursor-pointer transition-colors duration-300 hover:text-primary">
                  Genres
                  <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
                </li>

                <li className="group relative cursor-pointer transition-colors duration-300 hover:text-primary">
                  About
                  <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-5">
              <Link
                href="/signin"
                className="group relative cursor-pointer transition-colors duration-300 hover:text-primary "
              >
                Sign in
              </Link>

              <span className="hidden md:block">
                <Button>Get Started</Button>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-7xl mx-auto mt-32 md:mt-52">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs md:font-semibold tracking-[0.2em] text-primary uppercase">
              African Cinema, Reimagined
            </span>
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-7xl font-black">
            Stories from <br className="md:hidden lg:block" /> Africa. <br />
            <span className="text-primary">
              Made for the <br className="md:hidden lg:block" /> world.
            </span>
          </h1>

          <p className="text-xs md:text-base text-gray-500">
            Discover unforgettable African movies, emerging filmmakers, and
            <br />
            stories that deserve to be seen.
          </p>

          <div className="max-[767px]:flex-col flex items-center gap-4">
            <span>
              <Button>
                <Play size={15} fill="black" /> Start Watching
              </Button>
            </span>

            <button
              className="border max-[767px]:w-full border-gray-400 p-3 px-6 rounded-xl flex justify-center items-center gap-2 font-bold capitalize transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary-light hover:shadow-[0_8px_25px_rgba(248,191,75,0.25)] active:translate-y-0
        active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
            >
              <Compass size={15} />
              Explore movies
            </button>
          </div>

          <ul className="grid grid-cols-2 md:flex items-center gap-4 text-sm mt-4 text-gray-500">
            <li className="text-xs md:text-base flex items-center gap-2">
              <div className="bg-primary/20 rounded-full p-1 text-primary">
                <Check size={10} />
              </div>
              African Movies
            </li>

            <li className="text-xs md:text-base flex items-center gap-2">
              <div className="bg-primary/20 rounded-full p-1 text-primary">
                <Check size={10} />
              </div>
              Premium Streaming
            </li>

            <li className="text-xs md:text-base flex items-center gap-2">
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
