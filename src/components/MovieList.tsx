import React, { useState, useContext } from "react";
import { MovieComponent } from "./MovieComponent";
import { MovieContext } from "../contexts/MovieContext";

export const MovieList = () => {
  const { movies } = useContext(MovieContext);

  if (movies && movies.length) {
    return (
      <ol>
        {movies.map((movie) => (
          <MovieComponent
            key={movie.id}
            name={movie.name}
            price={movie.price}
            id={movie.id}
          ></MovieComponent>
        ))}
      </ol>
    );
  } else {
    return <span>Loading...</span>;
  }
};
