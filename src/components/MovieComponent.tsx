import React from "react";
import { Movie } from "../models/Movie";

export const MovieComponent = ({ name, price, id }: Movie) => {
  return (
    <li className="movie-wrapper">
      <h4>{name}</h4>
      <span>For {price} only</span>
      {/* <span>{id}</span> */}
    </li>
  );
};

// Heres another way of declaring a strongly typed functional  component

// export const Movie: FunctionComponent<MovieProps> = (props) => {
//   const { name, price, id } = props.movie;
//   return <div></div>;
// };
