import { SetStateAction } from "react";

export interface Movie {
  name: string;
  price?: string;
  id: number;
}

export interface MovieStore {
  movies: Movie[];
  setMovies: SetStateAction<any>;
}
