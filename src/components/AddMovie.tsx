import React, { useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Movie } from "../models/Movie";

export const AddMovie = () => {
  const { setMovies } = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const nameInputRef = React.createRef<HTMLInputElement>();

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handlePriceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPrice(e.currentTarget.value);
  };

  const addMovie = (e: React.FormEvent) => {
    e.preventDefault();
    setMovies((prevMovies: Movie[]) => [...prevMovies, { name, price }]);
    setName("");
    setPrice("");
    nameInputRef.current?.focus();
  };

  return (
    <div>
      <form>
        <label>
          Name:{" "}
          <input value={name} onChange={handleNameChange} ref={nameInputRef} />
        </label>
        <label>
          Price: <input value={price} onChange={handlePriceChange} />
        </label>
        <button type="submit" onClick={addMovie}>
          Add
        </button>
      </form>
    </div>
  );
};
