"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import Slider from "react-slick";
import MovieCard from "./movieCard";
import { movies } from "@/data/movie";

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
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {movies.map((movie) => (
        <div key={movie.id} className="pr-4">
          <MovieCard data={movie} />
        </div>
      ))}
    </Slider>
  );
});

ContinueWatching.displayName = "ContinueWatching";

export default ContinueWatching;
