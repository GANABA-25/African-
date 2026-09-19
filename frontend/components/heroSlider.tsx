"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { Bookmark, Play, ChevronRight, ChevronLeft } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "@/components/button";
import { movies } from "@/data/movie";
import NavBar from "./navbar";

export default function HeroSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative h-200 w-full">
      <Slider ref={sliderRef} {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="relative h-200 w-full overflow-hidden">
              <div className="absolute left-0 right-0 top-0 z-50">
                <NavBar />
              </div>

              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("${movie.image}")`,
                }}
              />

              <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-background" />

              <div className="relative z-10 mx-auto mt-30 flex h-full w-full max-w-[110rem] items-center justify-between">
                <div className="w-full max-w-2xl space-y-6">
                  <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                    {movie.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-md border border-primary px-2 py-1">
                      {movie.type}
                    </span>

                    <span className="text-green-500">{movie.genre}</span>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
                    {movie.description}
                  </p>

                  <div className="inline-flex max-w-full items-center gap-6 rounded-lg bg-black/70 px-5 py-4 sm:gap-10">
                    <div>
                      <p className="text-xs text-gray-500">Rating</p>
                      <h2 className="mt-1 text-sm font-bold sm:text-base">
                        {movie.rating}
                      </h2>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Release</p>
                      <h2 className="mt-1 text-sm font-bold sm:text-base">
                        {movie.year}
                      </h2>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Quality</p>
                      <h2 className="mt-1 text-sm font-bold sm:text-base">
                        {movie.quality}
                      </h2>
                    </div>
                  </div>

                  <div className="flex w-full max-w-xs items-center gap-3">
                    <Button>
                      <Play size={17} fill="black" />
                      <span className="uppercase">Watch Now</span>
                    </Button>

                    <button
                      type="button"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/40 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                      aria-label={`Add ${movie.title} to watchlist`}
                    >
                      <Bookmark size={20} />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-35 right-0 flex items-center text-gray-500">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer"
                    aria-label="Previous movie"
                  >
                    <ChevronLeft size={29} />
                  </button>

                  <span className="flex items-center gap-2 px-2 font-bold text-white">
                    <span>{movie.id}</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-500">{movies.length}</span>
                  </span>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer"
                    aria-label="Next movie"
                  >
                    <ChevronRight size={29} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
