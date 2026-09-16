import Header from "@/components/header";
import MovieCard from "@/components/movieCard";
import GenreCard from "@/components/genreCard";
import { featuredMovies, categories } from "@/data/movie";
import WhyAfrican from "@/components/whyAfrican+";
import Button from "@/components/button";
import {
  Upload,
  Globe,
  BadgeDollarSign,
  ArrowRight,
  UserKey,
  Play,
  CreditCard,
} from "lucide-react";
import GetStarted from "@/components/getStarted";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />

      <section className="space-y-8 max-w-7xl mx-auto py-30">
        <div className="space-y-2">
          <p className="text-primary tracking-[0.2em]">Curated for You</p>
          <h1 className="text-5xl font-bold">Featured Movies</h1>
          <p className="text-gray-500">Discover stories worth watching.</p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {featuredMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              poster={movie.poster}
              title={movie.title}
              genre={movie.genre}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#141414] py-30">
        <div className="space-y-8 max-w-7xl mx-auto">
          <div className="space-y-2">
            <p className="text-primary tracking-[0.2em]">Why African+</p>
            <h1 className="text-5xl font-bold">
              More than movies. <br />{" "}
              <span className="text-primary">It's African storytelling.</span>
            </h1>
          </div>

          <WhyAfrican />
        </div>
      </section>

      <section className="max-w-7xl mx-auto space-y-8 py-30">
        <div className="space-y-2">
          <p className="text-primary tracking-[0.2em]">Browse the Collection</p>
          <h1 className="text-5xl font-bold">Explore by Genre</h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {categories.map((data) => (
            <GenreCard
              key={data.name}
              name={data.name}
              count={data.count}
              image={data.image}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#141414] py-30">
        <div className="mx-auto flex max-w-7xl items-start gap-16 px-6">
          <div className="flex-1 space-y-4">
            <p className="tracking-[0.2em] text-primary">For Filmmakers</p>

            <h1 className="text-5xl font-bold">
              Your story deserves a bigger audience.
            </h1>

            <p className="text-gray-500">
              African+ gives filmmakers a digital platform to share their <br />
              movies with audiences around the world.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Upload size={15} />
                </div>
                Publish your movies
              </li>

              <li className="flex items-center gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Globe size={15} />
                </div>
                Reach global audiences
              </li>

              <li className="flex items-center gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <BadgeDollarSign size={15} />
                </div>
                Earn from your content
              </li>
            </ul>

            <Button>
              Join as a filmmaker
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="relative h-125 flex-1 rounded-2xl">
            <Image
              className="object-cover transition-transform duration-500 hover:scale-105 rounded-md"
              src="https://images.pexels.com/photos/8088390/pexels-photo-8088390.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Filmmaker"
              fill
            />

            <div className="absolute border border-primary/30 w-25 h-25 rounded-md right-127 bottom-105" />
            <div className="absolute border border-primary/20 w-25 h-25 rounded-md left-127 top-105" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto space-y-12 py-30">
        <div className="space-y-2 text-center">
          <p className="text-primary tracking-[0.2em]">Get Started</p>
          <h1 className="text-5xl font-bold">Start watching in minutes.</h1>
        </div>

        <GetStarted />
      </section>

      <section>
        <div className="relative h-125 rounded-2xl overflow-hidden">
          <Image
            className="rounded-md object-cover"
            src="https://images.pexels.com/photos/5521702/pexels-photo-5521702.jpeg?auto=compress&cs=tinysrgb&w=19200"
            alt="Filmmaker"
            fill
          />

          <div className="absolute inset-0 bg-black/90" />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="flex flex-col items-center space-y-8">
              <div>
                <h1 className="text-7xl font-black">
                  Your next favorite <br />
                  movie <br />
                  <span className="text-primary">is waiting.</span>
                </h1>

                <p className="mt-4 text-gray-300">
                  Join African+ and discover the stories shaping African cinema.
                </p>
              </div>

              <Button>
                <Play size={15} color="black" fill="black" />
                Start Watching
              </Button>

              <p className="text-sm text-gray-400">Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
