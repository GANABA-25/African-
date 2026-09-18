export interface Movie {
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster: string;
}

export const featuredMovies: Movie[] = [
  {
    title: "The Last Kingdom",
    genre: "Drama",
    year: 2025,
    rating: 4.8,
    poster:
      "https://images.pexels.com/photos/7266278/pexels-photo-7266278.jpeg?auto=compress&cs=tinysrgb&h=750&w=500",
  },
  {
    title: "Accra Nights",
    genre: "Romance",
    year: 2024,
    rating: 4.6,
    poster:
      "https://images.pexels.com/photos/1675839/pexels-photo-1675839.jpeg?auto=compress&cs=tinysrgb&h=750&w=500",
  },
  {
    title: "Beyond the Dust",
    genre: "Thriller",
    year: 2025,
    rating: 4.7,
    poster:
      "https://images.pexels.com/photos/30625187/pexels-photo-30625187.jpeg?auto=compress&cs=tinysrgb&h=750&w=500",
  },
  {
    title: "Ancestral",
    genre: "Drama",
    year: 2024,
    rating: 4.9,
    poster:
      "https://images.pexels.com/photos/16089261/pexels-photo-16089261.jpeg?auto=compress&cs=tinysrgb&h=750&w=500",
  },
  {
    title: "The Wedding",
    genre: "Romance",
    year: 2025,
    rating: 4.5,
    poster:
      "https://images.pexels.com/photos/32895248/pexels-photo-32895248.jpeg?auto=compress&cs=tinysrgb&h=750&w=500",
  },
  {
    title: "Broken Promises",
    genre: "Drama",
    year: 2024,
    rating: 4.4,
    poster:
      "https://images.pexels.com/photos/12950666/pexels-photo-12950666.jpeg?auto=compress&cs=tinysrgb&h=750&w=500",
  },
];

export interface Category {
  name: string;
  count: number;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Drama",
    count: 142,
    image:
      "https://images.pexels.com/photos/10079050/pexels-photo-10079050.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
  {
    name: "Comedy",
    count: 87,
    image:
      "https://images.pexels.com/photos/8273645/pexels-photo-8273645.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
  {
    name: "Romance",
    count: 64,
    image:
      "https://images.pexels.com/photos/35495909/pexels-photo-35495909.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
  {
    name: "Action",
    count: 53,
    image:
      "https://images.pexels.com/photos/4719948/pexels-photo-4719948.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
  {
    name: "Thriller",
    count: 41,
    image:
      "https://images.pexels.com/photos/35555321/pexels-photo-35555321.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
  {
    name: "Documentary",
    count: 38,
    image:
      "https://images.pexels.com/photos/33720956/pexels-photo-33720956.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
  {
    name: "Family",
    count: 29,
    image:
      "https://images.pexels.com/photos/37939838/pexels-photo-37939838.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
  {
    name: "African Classics",
    count: 76,
    image:
      "https://images.pexels.com/photos/1502311/pexels-photo-1502311.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",
  },
];

export const movies = [
  {
    id: 1,
    title: "A Country Called Ghana",
    description:
      "A foreigner and his Nigerian partners enter a Ghanaian village with plans to steal something precious, setting off a fight to protect the community's heritage.",
    genre: "Comedy · Drama · History",
    year: "2024",
    rating: "PG 13",
    quality: "HD",
    type: "Movie",
    duration: "1h 27m",
    image:
      "https://res.cloudinary.com/dkjlpfa1q/image/upload/v1789714927/wallpaperflare.com_wallpaper_1_bru6t1.jpg",
    director: "Frank Fiifi Gharbin",
    producer: "Kwadwo Nkansah",
    cast: ["Kwadwo Nkansah", "Ramsey Nouah", "Victor Osuagwu"],
    featured: true,
  },

  {
    id: 1,
    title: "Captain Ibrahim Traoré: The Last African Hero",
    description:
      "A Ghanaian biographical drama portraying the rise of Captain Ibrahim Traoré and his emergence as a prominent leader in Burkina Faso.",
    genre: "Biography · Drama · History",
    year: "2025",
    rating: "NR",
    quality: "HD",
    type: "Movie",
    duration: "NR",
    image:
      "https://images.pexels.com/photos/7618394/pexels-photo-7618394.jpeg?auto=compress&cs=tinysrgb&w=1920",
    director: "Jackson K. Bentum",
    producer: "Jackson K. Bentum",
    cast: [
      "Kwadwo Nkansah",
      "Adjetey Anang",
      "Sweet Mimi",
      "Abodie",
      "Ghadafi",
    ],
    featured: true,
  },

  {
    id: 3,
    title: "Beasts of No Nation",
    description:
      "A young West African boy is forced into becoming a child soldier after civil war destroys his family and changes his life forever.",
    genre: "Drama · War",
    year: "2015",
    rating: "TV-MA",
    quality: "HD",
    type: "Movie",
    duration: "2h 17m",
    image:
      "https://images.pexels.com/photos/7618394/pexels-photo-7618394.jpeg?auto=compress&cs=tinysrgb&w=1920",
    director: "Cary Joji Fukunaga",
    producer: "Cary Joji Fukunaga",
    cast: [
      "Abraham Attah",
      "Idris Elba",
      "Ama K. Abebrese",
      "Emmanuel Nii Adom Quaye",
      "David Dontoh",
    ],
    featured: true,
  },

  {
    id: 4,
    title: "The School Girl",
    description:
      "A Ghanaian drama centered around a schoolgirl and the circumstances surrounding her life and the people around her.",
    genre: "Drama",
    year: "2024",
    rating: "NR",
    quality: "HD",
    type: "Movie",
    duration: "NR",
    image:
      "https://res.cloudinary.com/dkjlpfa1q/image/upload/v1789685912/school_zmr0qs.jpg?auto=compress&cs=tinysrgb&w=1920",
    director: "Phil Efe Bernard",
    producer: "Abdul Salam Mumuni",
    cast: [
      "Miguel Ankrah",
      "Anthony Blackmore Aywor",
      "Kafui Dzivenu",
      "Pascaline Edwards",
      "Patrick Koomson",
      "Joyce Nana Ama Manu",
    ],
    featured: false,
  },
];
