import React, { useState, createContext, useEffect } from "react";
import { MovieStore, Movie } from "../models/Movie";

export const MovieContext = createContext<MovieStore>({} as MovieStore);

export const MovieProvider = (props: any) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMovies([
        {
          name: "Harry Potter",
          price: "$10",
          id: 3234,
        },
        {
          name: "Game of thrones",
          price: "$19",
          id: 3235,
        },
        {
          name: "Inception",
          price: "$15",
          id: 3236,
        },
      ]);
    }, 2000);
    return () => {
      setMovies([]);
    };
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
};
