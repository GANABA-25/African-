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
