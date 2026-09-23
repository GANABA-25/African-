"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import Slider from "react-slick";
import MovieCard from "./movieCard";
import { continueWatchingMovies } from "@/data/movie";

export interface ContinueWatchingRef {
  next: () => void;
  previous: () => void;
}

const ContinueWatching = forwardRef<ContinueWatchingRef>((_, ref) => {
  const sliderRef = useRef<Slider>(null);

  useImperativeHandle(ref, () => ({
    next: () => {
      sliderRef.current?.slickNext();
    },
    previous: () => {
      sliderRef.current?.slickPrev();
    },
  }));

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="[&_.slick-track]:!flex [&_.slick-track]:!items-stretch [&_.slick-slide]:!h-auto [&_.slick-slide>div]:!h-full">
      <Slider ref={sliderRef} {...settings}>
        {continueWatchingMovies.map((movie) => (
          <div key={movie.id} className="h-full pr-4 [&>a]:block [&>a]:h-full">
            <MovieCard data={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
});

ContinueWatching.displayName = "ContinueWatching";

export default ContinueWatching;
