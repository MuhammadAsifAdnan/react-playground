import React, { useState, useEffect } from "react";
import "./App.scss";
import { MovieList } from "./components/MovieList";
import { MovieProvider } from "./contexts/MovieContext";
import { AddMovie } from "./components/AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList></MovieList>
        <AddMovie></AddMovie>
      </div>
    </MovieProvider>
  );
}

export default App;
